import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyASknWCJky0BAQg10P9RX-6vrBhtDPC4E8",
	authDomain: "turnament-rex.firebaseapp.com",
	projectId: "turnament-rex",
	storageBucket: "turnament-rex.appspot.com",
	messagingSenderId: "103710540541",
	appId: "1:103710540541:web:53072ad9c9860aedc47494",
	measurementId: "G-R6R2MPKB9S",
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
