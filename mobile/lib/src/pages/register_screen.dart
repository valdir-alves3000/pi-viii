import 'dart:async';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:mobile/src/blocs/auth_bloc.dart';
import 'package:mobile/src/resources/dialog/loading_dialog.dart';
import 'package:mobile/src/resources/dialog/msg_dialog.dart';
import 'package:validatorless/validatorless.dart';

class RegisterScreen extends StatefulWidget {
  static const String idPage = '/register';

  const RegisterScreen({super.key});
  @override
  _RegisterScreenState createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final _formKey = GlobalKey<FormState>();
  final authBloc = AuthBloc();

  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passController = TextEditingController();
  final _phoneController = TextEditingController();
  final _cpfController = TextEditingController();

  @override
  void dispose() {
    _nameController.dispose();
    _emailController.dispose();
    _passController.dispose();
    _phoneController.dispose();
    _cpfController.dispose();

    super.dispose();
  }

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
              Form(
                key: _formKey,
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.fromLTRB(0, 50, 0, 12),
                      child: TextFormField(
                        controller: _nameController,
                        validator: Validatorless.required("Nome Obrigatório"),
                        style: const TextStyle(
                            fontSize: 16, color: Colors.white70),
                        decoration: const InputDecoration(
                          enabledBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                              color: Colors.white54,
                            ),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                              color: Colors.blue,
                            ),
                          ),
                          labelText: "Name",
                          labelStyle: TextStyle(
                            color: Colors.white54,
                            fontStyle: FontStyle.italic,
                          ),
                          prefixIcon: Icon(
                            Icons.people,
                            color: Colors.white54,
                          ),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.all(
                              Radius.circular(6),
                            ),
                          ),
                        ),
                      ),
                    ),
                    TextFormField(
                      controller: _emailController,
                      validator: Validatorless.multiple([
                        Validatorless.required("E-mail Obrigatório"),
                        Validatorless.email("E-mail inválido"),
                      ]),
                      style:
                          const TextStyle(fontSize: 18, color: Colors.white70),
                      decoration: const InputDecoration(
                        enabledBorder: OutlineInputBorder(
                          borderSide: BorderSide(
                            color: Colors.white54,
                          ),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(
                            color: Colors.blue,
                          ),
                        ),
                        labelText: "E-mail",
                        labelStyle: TextStyle(
                          color: Colors.white54,
                          fontStyle: FontStyle.italic,
                        ),
                        prefixIcon: Icon(
                          Icons.email_outlined,
                          color: Colors.white54,
                        ),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.all(
                            Radius.circular(6),
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(0, 12, 0, 12),
                      child: TextFormField(
                        controller: _passController,
                        validator: Validatorless.multiple([
                          Validatorless.required("Senha Obrigatória"),
                          Validatorless.min(
                              6, "A senha deve ter pelo menos 6 caracteres"),
                        ]),
                        style: const TextStyle(
                            fontSize: 18, color: Colors.white70),
                        decoration: const InputDecoration(
                          enabledBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                              color: Colors.white54,
                            ),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                              color: Colors.blue,
                            ),
                          ),
                          labelText: "Password",
                          labelStyle: TextStyle(
                            color: Colors.white54,
                            fontStyle: FontStyle.italic,
                          ),
                          prefixIcon: Icon(
                            Icons.lock_outline,
                            color: Colors.white54,
                          ),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.all(
                              Radius.circular(6),
                            ),
                          ),
                        ),
                      ),
                    ),
                    TextFormField(
                      controller: _phoneController,
                      validator: Validatorless.multiple([
                        Validatorless.required("Telefone Obrigatório"),
                        Validatorless.number("Apenas números por favor")
                      ]),
                      style:
                          const TextStyle(fontSize: 16, color: Colors.white70),
                      decoration: const InputDecoration(
                        enabledBorder: OutlineInputBorder(
                          borderSide: BorderSide(
                            color: Colors.white54,
                          ),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(
                            color: Colors.blue,
                          ),
                        ),
                        labelText: "Phone",
                        labelStyle: TextStyle(
                          color: Colors.white54,
                          fontStyle: FontStyle.italic,
                        ),
                        prefixIcon: Icon(
                          Icons.phone_android,
                          color: Colors.white54,
                        ),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.all(
                            Radius.circular(6),
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(0, 12, 0, 12),
                      child: TextFormField(
                        controller: _cpfController,
                        validator: Validatorless.multiple([
                          Validatorless.required("CPF Obrigatório"),
                          Validatorless.number('CPF inválido'),
                        ]),
                        style: const TextStyle(
                            fontSize: 18, color: Colors.white70),
                        decoration: const InputDecoration(
                          enabledBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                              color: Colors.white54,
                            ),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                              color: Colors.blue,
                            ),
                          ),
                          labelText: "CPF",
                          labelStyle: TextStyle(
                            color: Colors.white54,
                            fontStyle: FontStyle.italic,
                          ),
                          prefixIcon: Icon(
                            Icons.crop_landscape_sharp,
                            color: Colors.white54,
                          ),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.all(
                              Radius.circular(6),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
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

    var isValid = _formKey.currentState?.validate() ?? false;

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
