import 'package:flutter/material.dart';
import 'package:mobile/src/pages/locations_screen.dart';
import 'package:mobile/src/pages/login_screen.dart';
import 'package:mobile/src/pages/qrcode_screen.dart';
import 'package:mobile/src/pages/register_screen.dart';

void main() {
  runApp(
    const MyApp(),
  );
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Protection Of Good",
      theme: ThemeData(
        brightness: Brightness.light,
        visualDensity: VisualDensity.adaptivePlatformDensity,
        primaryColor: const Color.fromARGB(255, 55, 65, 81),
        primaryColorLight: const Color(0xff001542),
        primaryColorDark: const Color(0xff1C212C),
      ),
      color: Colors.white70,
      initialRoute: LoginScreen.idPage,
      routes: {
        LoginScreen.idPage: ((context) => const LoginScreen()),
        RegisterScreen.idPage: ((context) => const RegisterScreen()),
        QRCodeScreen.idPage: ((context) => const QRCodeScreen()),
        LocationsScreen.idPage: ((context) => LocationsScreen()),
      },
      debugShowCheckedModeBanner: false,
    );
  }
}
