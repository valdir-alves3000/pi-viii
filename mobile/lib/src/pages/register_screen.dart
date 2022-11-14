import 'dart:async';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:mobile/src/blocs/auth_bloc.dart';
import 'package:mobile/src/resources/dialog/loading_dialog.dart';
import 'package:mobile/src/resources/dialog/msg_dialog.dart';

class RegisterScreen extends StatefulWidget {
  static const String idPage = '/register';

  const RegisterScreen({super.key});
  @override
  _RegisterScreenState createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final AuthBloc authBloc = AuthBloc();

  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passController = TextEditingController();
  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _cpfController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;
    return Scaffold(
      body: Container(
        height: height,
        width: width,
        padding: const EdgeInsets.fromLTRB(30, 0, 30, 0),
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
              const Padding(
                padding: EdgeInsets.fromLTRB(0, 20, 0, 0),
                child: Text(
                  "Bem vindo a bordo!",
                  style: TextStyle(fontSize: 22, color: Colors.white70),
                ),
              ),
              Padding(
                  padding: const EdgeInsets.fromLTRB(0, 40, 0, 0),
                  child: StreamBuilder(
                      stream: authBloc.nameStream,
                      builder: (context, snapshot) => TextField(
                            controller: _nameController,
                            style: const TextStyle(
                                fontSize: 16, color: Colors.white70),
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
                              labelText: "Name",
                              labelStyle: const TextStyle(
                                color: Colors.white54,
                                fontStyle: FontStyle.italic,
                              ),
                              prefixIcon: const Icon(
                                Icons.people,
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
                          ))),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 10, 0, 0),
                child: StreamBuilder(
                    stream: authBloc.phoneStream,
                    builder: (context, snapshot) => TextField(
                          controller: _phoneController,
                          style: const TextStyle(
                              fontSize: 16, color: Colors.white70),
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
                            labelText: "Phone",
                            labelStyle: const TextStyle(
                              color: Colors.white54,
                              fontStyle: FontStyle.italic,
                            ),
                            prefixIcon: const Icon(
                              Icons.phone_android,
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
                    stream: authBloc.emailStream,
                    builder: (context, snapshot) => TextField(
                          controller: _emailController,
                          style: const TextStyle(
                              fontSize: 16, color: Colors.white70),
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
                          obscureText: true,
                          style: const TextStyle(
                              fontSize: 16, color: Colors.white70),
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
                              Icons.lock_outline,
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
                    stream: authBloc.cpfStream,
                    builder: (context, snapshot) => TextField(
                          controller: _cpfController,
                          obscureText: true,
                          style: const TextStyle(
                              fontSize: 16, color: Colors.white70),
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
                            labelText: "CPF",
                            labelStyle: const TextStyle(
                              color: Colors.white54,
                              fontStyle: FontStyle.italic,
                            ),
                            prefixIcon: const Icon(
                              Icons.crop_landscape_sharp,
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
                    onPressed: _onSignUpClicked,
                    child: const SizedBox(
                      width: double.infinity,
                      height: 50,
                      child: Center(
                          child: Text(
                        "Sign Up",
                        style:
                            TextStyle(fontFamily: "Brand Bold", fontSize: 18),
                      )),
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 50),
                child: RichText(
                  text: TextSpan(
                      text: "Já tenho usuário. ",
                      style:
                          const TextStyle(color: Colors.white70, fontSize: 18),
                      children: <TextSpan>[
                        TextSpan(
                            recognizer: TapGestureRecognizer()
                              ..onTap = () {
                                Navigator.pushNamed(context, '/');
                              },
                            text: "Logar agora",
                            style: const TextStyle(
                                color: Color(0xff567CAE), fontSize: 16))
                      ]),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  void _onSignUpClicked() {
    String name = _nameController.text;
    String phone = _phoneController.text;
    String email = _emailController.text;
    String pass = _passController.text;
    String cpf = _cpfController.text;

    var isValid = authBloc.isValid(name, email, pass, phone, cpf);

    if (isValid) {
      LoadingDialog.showLoadingDialog(context, 'Loading...');
      authBloc.signUp(name, phone, email, pass, cpf, () {
        LoadingDialog.hideLoadingDialog(context);
        MsgDialog.showMsgDialog(context, "Cadastro Realizado",
            "Usuário já pode utilizar o sistema", true);

        Timer(const Duration(seconds: 3),
            () => Navigator.pushNamed(context, '/'));
      }, (msg) {
        LoadingDialog.hideLoadingDialog(context);
        MsgDialog.showMsgDialog(context, "Falha no Cadastro", msg, false);
      });
    }
  }
}
