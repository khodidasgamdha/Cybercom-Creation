import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentMessage = new BehaviorSubject(null);
  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messages
      .subscribe((_messaging: AngularFireMessaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

  // take permission
  requestPermission() {
    this.angularFireMessaging.requestToken
      .subscribe(
        (token) => {
          // console.log(token);
        },
        (err) => {
          console.error('Unable to get permission to notify.', err);
        }
      );
  }

  // receive notification data
  receiveMessage() {
    this.angularFireMessaging.messages
      .subscribe((payload) => {
        this.currentMessage.next(payload);
        this.showNotification(payload);
      })
  }

  showNotification(payload: any) {
    let notifyData = payload['notification'];
    let title = notifyData['title'];
    let options = {
      body: notifyData['body'],
      icon: 'http://simpleicon.com/wp-content/uploads/play.png',
      badget: 'http://simpleicon.com/wp-content/uploads/play.png',
      image: 'http://simpleicon.com/wp-content/uploads/play.png',
    };
    let notify: Notification = new Notification(title, options)

    notify.onclick = (event => {
      event.preventDefault();
      window.location.href = 'https://www.youtube.com/';
    })
  }

}

