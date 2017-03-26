import * as firebase from 'firebase';
import { FBconfig } from './firebase-config-object'

// FirebaseConfigObject
export const fbconfig = FBconfig;

export const fireb = firebase
  .initializeApp(fbconfig)
  .database();

export const fb = fireb.ref();