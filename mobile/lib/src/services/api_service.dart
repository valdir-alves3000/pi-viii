import 'package:dio/dio.dart';
import 'package:get/get.dart';
import 'package:mobile/src/controller/locations_controller.dart';
import 'package:mobile/src/controller/token_controller.dart';
import 'package:mobile/src/model/location_model.dart';
import 'package:mobile/src/model/place_model.dart';

class ApiService {
  ApiService._internal();
  static ApiService get instance => ApiService._internal();
  final Dio _dio = Dio();

  late final tokenController = Get.put(TokenController());
  late final locationsController = Get.put(LocationsController());

  final String baseURL = "http://localhost:3333";
  // "https://protection-of-good.herokuapp.com";

  Future SignIn(String email, pass) async {
    try {
      final response = await _dio.post("$baseURL/login", data: {
        "email": email,
        "password": pass,
      });

      var token = response.data["access_token"];
      tokenController.setToken(token);

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
    } on DioError catch (e) {
      print(e);
      return null;
    }
  }

  Future PostLocations(String placeId) async {
    try {
      final response = await _dio.post("$baseURL/locations/",
          data: {placeId},
          options: Options(
            headers: {'authorization': 'Bearer ${tokenController.token}'},
          ));
    } on DioError {
      return null;
    }
  }

  Future GetMyRecords() async {
    try {
      var response = await _dio.get("$baseURL/locations/my/records",
          options: Options(
            headers: {'authorization': 'Bearer ${tokenController.token}'},
          ));

      var locations = response.data
          .map<LocationModel>((location) => LocationModel.fromJson(location))
          .toList() as List<LocationModel>;

      locationsController.setlocations(locations);

      return locations;
    } on DioError {
      return null;
    }
  }

  Future GetPlace(String placeId) async {
    try {
      final response = await _dio.get("$baseURL/places/$placeId",
          options: Options(
            headers: {'authorization': 'Bearer ${tokenController.token}'},
          ));

      PlaceModel place = PlaceModel.fromJson(response.data);

      return place;
    } on DioError {
      return null;
    }
  }
}
