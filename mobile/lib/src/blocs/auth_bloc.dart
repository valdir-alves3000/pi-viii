import 'dart:async';

import 'package:mobile/src/services/api_service.dart';

class AuthBloc {
  final StreamController _nameController = StreamController();
  final StreamController _emailController = StreamController();
  final StreamController _passController = StreamController();
  final StreamController _phoneController = StreamController();
  final StreamController _cpfController = StreamController();
  final ApiService apiService = ApiService.instance;

  Stream get nameStream => _nameController.stream;
  Stream get emailStream => _emailController.stream;
  Stream get passStream => _passController.stream;
  Stream get phoneStream => _phoneController.stream;
  Stream get cpfStream => _cpfController.stream;

  bool isValid(
      String name, String email, String pass, String phone, String cpf) {
    if (name.length < 3) {
      _nameController.sink.addError(("Insira um nome"));
      return false;
    }
    _nameController.sink.add("");
    if (phone.isEmpty) {
      _phoneController.sink.addError("Digite seu número de telefone");
      return false;
    }
    _phoneController.sink.add("");
    if (email.isEmpty || !email.contains("@") || email.length < 8) {
      _emailController.sink.addError("Endereço de email inválido!");
      return false;
    }
    _emailController.sink.add("");

    if (pass.length < 6) {
      _passController.sink.addError("A senha deve ter mais de 5 caracteres");
      return false;
    }
    _passController.sink.add("");

    if (cpf.length < 11) {
      _cpfController.sink.addError("CPF inválido");
    }
    _cpfController.sink.add("");

    return true;
  }

  void signUp(String name, phone, email, pass, cpf, Function onSuccess,
      Function(String) onError) {
    apiService.SignUp(name, phone, email, pass, cpf).asStream().listen((event) {
      if (event != null) {
        return onSuccess();
      }

      return onError("Não foi possivel cadastrar o usuário");
    });
  }

  void signIn(
      String email, pass, Function onSuccess, Function(String) onSignInError) {
    apiService.SignIn(email, pass).asStream().listen((event) {
      if (event != null) {
        return onSuccess();
      }

      return onSignInError("Usuário/senha incorreto");
    });
  }

  void dispose() {
    _nameController.close();
    _emailController.close();
    _passController.close();
    _phoneController.close();
    _cpfController.close();
  }
}
