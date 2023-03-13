import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDsAO9lNzahs77CpfsNQgrfHG-QCye39is",
    authDomain: "atozevents-3c862.firebaseapp.com",
    projectId: "atozevents-3c862",
    storageBucket: "atozevents-3c862.appspot.com",
    messagingSenderId: "1090214875424",
    appId: "1:1090214875424:web:65f06f3dee5280b08f4745"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;

export {auth};