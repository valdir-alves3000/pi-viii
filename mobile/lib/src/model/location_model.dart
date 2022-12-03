class LocationModel {
  String id;
  String name;
  String address;
  String city;
  String state;
  String created_at;

  LocationModel(
    this.id,
    this.name,
    this.address,
    this.city,
    this.state,
    this.created_at,
  );

  LocationModel.fromJson(Map<String, dynamic> json)
      : id = json['id'],
        name = json['name'],
        address = json['address'],
        city = json['city'],
        state = json['state'],
        created_at = json['created_at'];

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'address': address,
      'city': city,
      'state': state,
      'created_at': created_at,
    };
  }
}
