import 'package:dio/dio.dart';

class ApiService {
  ApiService._internal();
  static ApiService get instance => ApiService._internal();
  // final storage = const FlutterSecureStorage();
  final Dio _dio = Dio();

  final String baseURL = "https://protection-of-good.herokuapp.com";

  Future SignIn(String email, pass) async {
    try {
      final response = await _dio.post("$baseURL/login", data: {
        "email": email,
        "password": pass,
      });

      var token = response.data["access_token"];

      return token;
    } on DioError {
      return null;
    }
  }

  Future SignUp(String name, phone, email, pass, cpf) async {
    try {
      final response = await _dio.post("$baseURL/users", data: {
        "name": name,
        "phone": phone,
        "email": email,
        "password": pass,
        "cpf": cpf,
      });

      var user = response.data;

      return user;
    } on DioError {
      return null;
    }
  }

  Future Locations(String placeId) async {
    try {
      final response = await _dio.post("$baseURL/locations", data: {placeId});
    } on DioError {
      return null;
    }
  }
}
