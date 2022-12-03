class PlaceModel {
  String id;
  String address;
  String name;
  String city;
  String state;
  String created_at;

  PlaceModel(
    this.address,
    this.city,
    this.created_at,
    this.id,
    this.name,
    this.state,
  );

  PlaceModel.fromJson(Map<String, dynamic> json)
      : address = json['address'],
        city = json['city'],
        created_at = json['created_at'],
        id = json['id'],
        name = json['name'],
        state = json['state'];

  Map<String, dynamic> toJson() {
    return {
      'address': address,
      'city': city,
      'created_at': created_at,
      'id': id,
      'name': name,
      'state': state,
    };
  }
}
