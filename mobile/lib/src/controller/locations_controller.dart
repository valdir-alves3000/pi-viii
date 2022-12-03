import 'package:get/get.dart';
import 'package:mobile/src/model/location_model.dart';

class LocationsController extends GetxController {
  late List<LocationModel> _locations = [];

  get locations => _locations;

  setlocations(List<LocationModel> updatelocations) {
    _locations = updatelocations;
  }
}
