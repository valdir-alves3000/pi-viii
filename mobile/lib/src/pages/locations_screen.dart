import 'dart:math';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:mobile/src/controller/locations_controller.dart';
import 'package:mobile/src/model/location_model.dart';

class LocationsScreen extends StatelessWidget {
  static const String idPage = '/locations';
  DateTime data = DateTime.now();

  LocationsController locationsController = Get.put(LocationsController());

  late List<LocationModel> locations = locationsController.locations;

  LocationsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
      child: Container(
        color: Theme.of(context).primaryColorDark,
        child: CustomScrollView(
          slivers: <Widget>[
            SliverAppBar(
              pinned: true,
              expandedHeight: 200,
              backgroundColor: Theme.of(context).primaryColorDark,
              flexibleSpace: FlexibleSpaceBar(
                title: const Text(
                  "Protection Of Good",
                  textAlign: TextAlign.center,
                  style: TextStyle(wordSpacing: sqrt2),
                ),
                background: Image.asset(
                  'assets/logo.png',
                  fit: BoxFit.cover,
                ),
              ),
            ),
            SliverList(
              delegate: SliverChildListDelegate([
                ListView.builder(
                    physics: const NeverScrollableScrollPhysics(),
                    shrinkWrap: true,
                    itemCount: 1,
                    itemBuilder: (_, index) {
                      return Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          children: <Widget>[
                            const Text(
                              "",
                              style: TextStyle(
                                  fontSize: 20, fontWeight: FontWeight.bold),
                            ),
                            ListView.builder(
                                physics: const NeverScrollableScrollPhysics(),
                                shrinkWrap: true,
                                itemCount: locations.length,
                                itemBuilder: (_, index) {
                                  var item = locations[index];
                                  var initialMoth = DateFormat.MMMM()
                                      .format(DateTime.parse(
                                          locations[0].created_at))
                                      .toUpperCase()
                                      .toString();

                                  var month = DateFormat.MMMM()
                                      .format(DateTime.parse(item.created_at))
                                      .toUpperCase()
                                      .toString();

                                  var lastMonth = index > 0
                                      ? DateFormat.MMMM()
                                          .format(DateTime.parse(
                                              locations[index - 1].created_at))
                                          .toUpperCase()
                                          .toString()
                                      : initialMoth;

                                  return Column(
                                    children: [
                                      ListTile(
                                        title: Column(
                                          children: [
                                            index == 0
                                                ? Padding(
                                                    padding:
                                                        const EdgeInsets.all(
                                                            8.0),
                                                    child: Text(
                                                      initialMoth,
                                                      style: const TextStyle(
                                                        color: Colors.blueGrey,
                                                        fontSize: 22,
                                                        letterSpacing: 2,
                                                      ),
                                                    ),
                                                  )
                                                : const SizedBox(),
                                            index > 0 && month != lastMonth
                                                ? Padding(
                                                    padding:
                                                        const EdgeInsets.all(
                                                            8.0),
                                                    child: Text(
                                                      month,
                                                      style: const TextStyle(
                                                          color:
                                                              Colors.blueGrey,
                                                          fontSize: 22,
                                                          letterSpacing: 2),
                                                    ),
                                                  )
                                                : const SizedBox(),
                                          ],
                                        ),
                                        leading: Text(
                                          DateFormat.d().format(
                                              DateTime.parse(item.created_at)),
                                          style: const TextStyle(
                                            color: Colors.blueGrey,
                                            fontSize: 22,
                                          ),
                                        ),
                                        subtitle: Column(
                                          children: [
                                            Text(
                                              item.name,
                                              style: const TextStyle(
                                                  color: Colors.white38,
                                                  fontSize: 16,
                                                  letterSpacing: 1),
                                            ),
                                            Padding(
                                              padding:
                                                  const EdgeInsets.all(4.0),
                                              child: Text(
                                                item.address,
                                                style: const TextStyle(
                                                    color: Colors.white38,
                                                    fontSize: 16,
                                                    letterSpacing: 1),
                                              ),
                                            ),
                                            Text(
                                              item.city,
                                              style: const TextStyle(
                                                  color: Colors.white38,
                                                  fontSize: 16,
                                                  letterSpacing: 1),
                                            ),
                                            const SizedBox(height: 8),
                                            Text(
                                              item.state,
                                              style: const TextStyle(
                                                  color: Colors.white38,
                                                  fontSize: 16,
                                                  letterSpacing: 1),
                                            ),
                                          ],
                                        ),
                                      ),
                                      const SizedBox(
                                        height: 50,
                                      )
                                    ],
                                  );
                                }),
                          ],
                        ),
                      );
                    }),
              ]),
            )
          ],
        ),
      ),
    ));
  }
}
