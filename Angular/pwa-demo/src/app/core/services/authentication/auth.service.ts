import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData;
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {

    // saving user data in localStorage when user logged in and remove when log out
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  //login with email-password
  login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(result => {
        this.router.navigate(['home']);
        this.setUserData(result.user);
      })
      .catch(err => {
        console.log(err.message);
      })
  } 

  // registration with email-password
  registration(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        this.router.navigate(['login']);
        this.setUserData(result.user);
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  // logout
  logOut() {
    return this.afAuth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['home']);
      })
  }

  // set user data based on user's uid
  setUserData(user) {
    const userRef: AngularFirestoreDocument = this.afs.doc(`user/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(userData, {
      merge: true
    })
  }

}
