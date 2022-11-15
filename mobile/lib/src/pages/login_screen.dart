import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:mobile/src/blocs/auth_bloc.dart';
import 'package:mobile/src/resources/dialog/loading_dialog.dart';
import 'package:mobile/src/resources/dialog/msg_dialog.dart';
import 'package:validatorless/validatorless.dart';

class LoginScreen extends StatefulWidget {
  static const String idPage = '/';

  const LoginScreen({super.key});
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();
  final authBloc = AuthBloc();
  final _emailController = TextEditingController();
  final _passController = TextEditingController();

  @override
  void dispose() {
    _emailController.dispose();
    _passController.dispose();

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
              Form(
                key: _formKey,
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.fromLTRB(0, 50, 0, 12),
                      child: TextFormField(
                        controller: _emailController,
                        validator: Validatorless.multiple([
                          Validatorless.required("E-mail Obrigatório"),
                          Validatorless.email("E-mail inválido"),
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
                    ),
                    TextFormField(
                      controller: _passController,
                      validator: Validatorless.multiple([
                        Validatorless.required("Senha Obrigatória"),
                        Validatorless.min(
                            6, "A senha deve ter pelo menos 6 caracteres"),
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

    var isValid = _formKey.currentState?.validate() ?? false;

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
