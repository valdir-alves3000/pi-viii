import 'package:get/get.dart';

class TokenController extends GetxController {
  String _token = '';

  get token => _token;

  setToken(String updateToken) {
    _token = updateToken;
  }
}
