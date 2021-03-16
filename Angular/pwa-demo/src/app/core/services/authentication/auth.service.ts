import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../../interface/user';
import firebase from 'firebase/app';
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
        this.SendVerificationMail();
        this.router.navigate(['login']);
        this.setUserData(result.user);
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  // Sign in with Google
  googleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['home']);
        this.setUserData(result.user);
      }).catch(error => {
        console.log(error)
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

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification())
      .then(() => {
        Swal.fire({
          title: 'Varification Mail Send !',
          text: 'Click Resend if Not recive !',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, got it!',
          cancelButtonText: 'No, Resend it!'
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Success...',
              `We have sent a confirmation email to ${this.userData.email} \n Please check your email and click on the link to verfiy your email address.`,
              'success'
            )
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            this.SendVerificationMail();
            Swal.fire(
              'Success...',
              'Mail Resend Successfully :)',
              'success'
            )
          }
        });
      })
  }

  // Reset Forgot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        alert(error)
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
