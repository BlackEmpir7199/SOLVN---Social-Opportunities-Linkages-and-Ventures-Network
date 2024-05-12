import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';

Future initFirebase() async {
  if (kIsWeb) {
    await Firebase.initializeApp(
        options: const FirebaseOptions(
            apiKey: "AIzaSyAglsY7gprO2fSB-taRyZCjtkD_SVnJP-c",
            authDomain: "investor-app-vl821w.firebaseapp.com",
            projectId: "investor-app-vl821w",
            storageBucket: "investor-app-vl821w.appspot.com",
            messagingSenderId: "1082719574823",
            appId: "1:1082719574823:web:9ecd7ef87e7369d1fd2702"));
  } else {
    await Firebase.initializeApp();
  }
}
