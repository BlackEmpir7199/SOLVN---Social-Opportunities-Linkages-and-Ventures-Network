import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';

Future initFirebase() async {
  if (kIsWeb) {
    await Firebase.initializeApp(
        options: const FirebaseOptions(
            apiKey: "AIzaSyAvE1iIyMcEXcDt_oRoRD6VKtCFBry0g98",
            authDomain: "peopleprojectapp.firebaseapp.com",
            projectId: "peopleprojectapp",
            storageBucket: "peopleprojectapp.appspot.com",
            messagingSenderId: "210764241497",
            appId: "1:210764241497:web:1214fb06cd06eba98f2f48",
            measurementId: "G-NP647X92V8"));
  } else {
    await Firebase.initializeApp();
  }
}
