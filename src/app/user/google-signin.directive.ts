import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth, } from "@angular/fire/compat/auth";
import {  GoogleAuthProvider } from '@angular/fire/auth';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afAuth: AngularFireAuth) { 
  }
  
  @HostListener('click')
  onClick() {
    return this.afAuth.signInWithPopup(new GoogleAuthProvider());
  }

  
}
