import 'dart:math';

import 'package:flutter/material.dart';

class LocationsScreen extends StatelessWidget {
  static const String idPage = '/locations';
  DateTime data = DateTime.now();

  var locations = [
    {
      "date": "14/11/2022",
      "name": "Padaria do Bahia",
      "address": "Rua da Paz",
      "city": "Mauá",
      "state": "SP"
    },
    {
      "date": "20/10/2022",
      "name": "Padaria do Jota",
      "address": "Rua sem saída",
      "city": "Mauá",
      "state": "SP"
    },
    {
      "date": "20/10/2022",
      "name": "Bar do Zica",
      "address": "Rua sem saída",
      "city": "Ribeirão",
      "state": "PB"
    },
    {
      "date": "03/10/2022",
      "name": "Pizzaria Dono do Queijo",
      "address": "Rua da massa",
      "city": "São Mateus",
      "state": "CE"
    },
    {
      "date": "01/10/2022",
      "name": "Bar do Zica",
      "address": "Rua sem saída",
      "city": "Mauá",
      "state": "SP"
    },
    {
      "date": "16/09/2022",
      "name": "Praia do tombo",
      "address": "Ilha Bela",
      "city": "Rio de Janeiro",
      "state": "RJ"
    },
  ];

  LocationsScreen() {
    // categoria = List.generate(10, (i) => "Categoria $i");
    // items = List.generate(5, (i) => "Item $i");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
      child: Container(
        color: Theme.of(context).backgroundColor,
        child: CustomScrollView(
          slivers: <Widget>[
            SliverAppBar(
              pinned: true,
              expandedHeight: 200,
              backgroundColor: Theme.of(context).backgroundColor,
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
                                  var date = item['date'];

                                  return Column(
                                    children: [
                                      ListTile(
                                        title: Column(
                                          children: [
                                            Text(
                                              item['date']!,
                                              style: const TextStyle(
                                                  color: Colors.white70),
                                            ),
                                          ],
                                        ),
                                        subtitle: Column(
                                          children: [
                                            Text(
                                              item['address']!,
                                              style: const TextStyle(
                                                  color: Colors.white38),
                                            ),
                                            Text(
                                              item['city']!,
                                              style: const TextStyle(
                                                  color: Colors.white38),
                                            ),
                                            Text(
                                              item['name']!,
                                              style: const TextStyle(
                                                  color: Colors.white38),
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
