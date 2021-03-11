import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { EmployeeService } from '../core/services/dummy-data/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data;
  isSubscribed = false;
  subscribe = 'You Subscribed Successfully !!';
  unSubscribed = 'You Unsubscribed Successfully !!';
  private readonly publicKey ="BAdYgm34jLaKw1bOx0bfmzKJmsk7ICkNRx9oTSJ7Ns51fBHqiYrMoE-P4lrB-ggFl8STY_0wlUlExYSotPHZY6g";

  constructor(
    private swUpdate: SwUpdate,
    private employee: EmployeeService,
    private appRef: ApplicationRef,
    private swPush: SwPush
  ) {
    this.updateClient();
    this.checkUpdate();
  }

  ngOnInit(): void {

    // console notification data object
    // this.swPush.messages.subscribe(message => console.log(message));

    // click to redirect through notification
    this.swPush.notificationClicks.subscribe(
      ({action, notification}) => {
        window.open(notification.data.url);
      }
    )

    this.employeeData();
    this.pushSubscription();
  }

  // SwUpdate service
  updateClient() {

    // isEnable property
    if(!this.swUpdate.isEnabled) {
      console.log('Not Enabled !');
      return;
    }

    // available property
    this.swUpdate.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);

      // activateUpdate method
      if(confirm('Update avilable for the app, Please confirm')) {
        this.swUpdate.activateUpdate().then(() => location.reload());
      }

    });

    // activated property
    this.swUpdate.activated.subscribe(event => {
      console.log('previous version is', event.previous);
      console.log('activated version is', event.current);
    });

  }

  // checkForUpdate method
  checkUpdate() {
    this.appRef.isStable.subscribe((isStable) => {
      if(isStable) {
        const timeInterval = interval(8 * 60 * 60 * 1000);

        timeInterval.subscribe(() => {
          this.swUpdate.checkForUpdate().then(() => console.log('checked'));
        });
      }
    });
  }

  // SwPush service with Nodejs Backend
  pushSubscription() {
    if(!this.swPush.isEnabled) {
      console.log('Notification Not Enabled');
      return;
    }
    this.swPush.requestSubscription({
      serverPublicKey: this.publicKey,
    })
    .then((sub) => console.log(JSON.stringify(sub)))
    .catch((err) => console.log(err));
    // this.swPush.unsubscribe().then(() => {});
  }

  // click to show notification
  showNotification() {
    Notification.requestPermission((result) => {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification('Youtube', {
            tag: 'Youtube',
            body: this.isSubscribed ? this.subscribe : this.unSubscribed,
            icon: 'http://simpleicon.com/wp-content/uploads/play.png',
            vibrate: [20, 50, 10, 20, 20]
          });
        });
      }
    });

    // change isSubscribe variable
    if(this.isSubscribed) {
      this.isSubscribed = false;
    } else {
      this.isSubscribed = true;
    }
  }

  // store employee data in object
  employeeData() {
    this.employee.employeeData().subscribe(response => {
      if(response["data"]){
        this.data = response["data"];
      }
    });
  }

}
