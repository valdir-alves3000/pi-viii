import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:mobile/src/blocs/auth_bloc.dart';
import 'package:mobile/src/resources/dialog/loading_dialog.dart';
import 'package:mobile/src/resources/dialog/msg_dialog.dart';

class LoginScreen extends StatefulWidget {
  static const String idPage = '/';

  const LoginScreen({super.key});
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final AuthBloc authBloc = AuthBloc();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;
    return Scaffold(
      body: Container(
        height: height,
        width: width,
        padding: const EdgeInsets.fromLTRB(20, 0, 20, 0),
        constraints: const BoxConstraints.expand(),
        color: Theme.of(context).primaryColorDark,
        child: SingleChildScrollView(
          child: Column(
            children: <Widget>[
              const SizedBox(
                height: 50,
              ),
              const Image(
                image: AssetImage("assets/logo.png"),
                width: 390.0,
                height: 200.0,
                alignment: Alignment.center,
              ),
              const SizedBox(height: 1.0),
              const Padding(
                padding: EdgeInsets.fromLTRB(0, 20, 0, 10),
                child: Text(
                  "Protection of Good!",
                  style: TextStyle(fontSize: 22, color: Colors.white70),
                ),
              ),
              const Text(
                "Faça login para acessar o sistema.",
                style: TextStyle(fontSize: 16, color: Colors.white54),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 50, 0, 0),
                child: StreamBuilder(
                    stream: authBloc.emailStream,
                    builder: (context, snapshot) => TextField(
                          controller: _emailController,
                          style: const TextStyle(
                              fontSize: 18, color: Colors.white70),
                          decoration: InputDecoration(
                            enabledBorder: const OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.white54,
                              ),
                            ),
                            focusedBorder: const OutlineInputBorder(
                              borderSide: BorderSide(
                                color: Colors.blue,
                              ),
                            ),
                            labelText: "Email",
                            labelStyle: const TextStyle(
                              color: Colors.white54,
                              fontStyle: FontStyle.italic,
                            ),
                            prefixIcon: const Icon(
                              Icons.email_outlined,
                              color: Colors.white54,
                            ),
                            border: const OutlineInputBorder(
                              borderRadius: BorderRadius.all(
                                Radius.circular(6),
                              ),
                            ),
                            errorText: snapshot.hasError
                                ? snapshot.error.toString()
                                : null,
                          ),
                        )),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 10, 0, 0),
                child: StreamBuilder(
                  stream: authBloc.passStream,
                  builder: (context, snapshot) => TextField(
                    controller: _passController,
                    style: const TextStyle(fontSize: 18, color: Colors.white70),
                    obscureText: true,
                    decoration: InputDecoration(
                      enabledBorder: const OutlineInputBorder(
                        borderSide: BorderSide(
                          color: Colors.white54,
                        ),
                      ),
                      focusedBorder: const OutlineInputBorder(
                        borderSide: BorderSide(
                          color: Colors.blue,
                        ),
                      ),
                      labelText: "Password",
                      labelStyle: const TextStyle(
                        color: Colors.white54,
                        fontStyle: FontStyle.italic,
                      ),
                      prefixIcon: const Icon(
                        Icons.lock_outlined,
                        color: Colors.white54,
                      ),
                      border: const OutlineInputBorder(
                        borderRadius: BorderRadius.all(
                          Radius.circular(6),
                        ),
                      ),
                      errorText:
                          snapshot.hasError ? snapshot.error.toString() : null,
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 30, 0, 40),
                child: SizedBox(
                  width: double.infinity,
                  height: 52,
                  child: ElevatedButton(
                    onLongPress: null,
                    style: ElevatedButton.styleFrom(
                        backgroundColor: Theme.of(context).primaryColor,
                        elevation: 3,
                        shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(24)),
                        textStyle: const TextStyle(
                          fontSize: 18,
                          color: Colors.white,
                        )),
                    onPressed: _onLoginClick,
                    child: const SizedBox(
                      height: 50,
                      child: Center(
                          child: Text(
                        "Login",
                        style: TextStyle(fontSize: 18),
                      )),
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 50),
                child: RichText(
                  text: TextSpan(
                      text: "Não tem conta? ",
                      style:
                          const TextStyle(color: Colors.white70, fontSize: 18),
                      children: <TextSpan>[
                        TextSpan(
                            recognizer: TapGestureRecognizer()
                              ..onTap = () {
                                Navigator.pushNamed(context, '/register');
                              },
                            text: "Registre-se agora",
                            style: const TextStyle(
                                color: Color(0xff567CAE), fontSize: 16))
                      ]),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _onLoginClick() {
    String email = _emailController.text;
    String pass = _passController.text;

    var isValid = authBloc.isValid('login', email, pass, 'login', 'login');

    if (isValid) {
      LoadingDialog.showLoadingDialog(context, "Loading...");
      authBloc.signIn(email, pass, () {
        LoadingDialog.hideLoadingDialog(context);
        Navigator.pushNamed(context, '/qrcode');
      }, (msg) {
        LoadingDialog.hideLoadingDialog(context);
        MsgDialog.showMsgDialog(context, "Falha no Login", msg, false);
      });
    }
  }
}
