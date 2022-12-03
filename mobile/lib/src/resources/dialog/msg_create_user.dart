import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:mobile/src/resources/dialog/msg_dialog.dart';
import 'package:mobile/src/services/api_service.dart';

class MsgCreateLocation {
  static void showMsgDialog(BuildContext context, String name, String address,
      String city, String state, String date, String id) {
    final ApiService apiService = ApiService.instance;

    double width = MediaQuery.of(context).size.width;
    double height = 180;

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        backgroundColor: Theme.of(context).primaryColorDark,
        title: const Center(
            child: Text(
          "Registrar Localização",
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: 24,
            color: Colors.blueGrey,
            fontWeight: FontWeight.w600,
          ),
        )),
        content: SizedBox(
          width: width,
          height: height,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const SizedBox(
                height: 20,
              ),
              Row(
                children: [
                  const Text(
                    "Data: ",
                    style: TextStyle(
                        fontSize: 18,
                        color: Colors.blueGrey,
                        fontWeight: FontWeight.w600),
                  ),
                  Text(
                    DateFormat.yMMMEd().format(DateTime.parse(date)),
                    style: const TextStyle(
                      fontSize: 16,
                      color: Colors.white60,
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 10,
              ),
              Row(
                children: [
                  const Text(
                    "Local: ",
                    style: TextStyle(
                        fontSize: 18,
                        color: Colors.blueGrey,
                        fontWeight: FontWeight.w600),
                  ),
                  Text(
                    name,
                    style: const TextStyle(
                      fontSize: 16,
                      color: Colors.white54,
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 10,
              ),
              Row(
                children: [
                  const Text(
                    "Endereço: ",
                    style: TextStyle(
                        fontSize: 18,
                        color: Colors.blueGrey,
                        fontWeight: FontWeight.w600),
                  ),
                  Text(
                    address,
                    style: const TextStyle(
                      fontSize: 16,
                      color: Colors.white60,
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 10,
              ),
              Row(
                children: [
                  const Text(
                    "Cidade: ",
                    style: TextStyle(
                        fontSize: 18,
                        color: Colors.blueGrey,
                        fontWeight: FontWeight.w600),
                  ),
                  Text(
                    city,
                    style: const TextStyle(
                      fontSize: 16,
                      color: Colors.white60,
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 10,
              ),
              Row(
                children: [
                  const Text(
                    "Estado: ",
                    style: TextStyle(
                        fontSize: 18,
                        color: Colors.blueGrey,
                        fontWeight: FontWeight.w600),
                  ),
                  Text(
                    state,
                    style: const TextStyle(
                      fontSize: 16,
                      color: Colors.white60,
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.fromLTRB(10, 0, 10, 0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).pop(MsgCreateLocation);
                  },
                  style: ElevatedButton.styleFrom(
                      backgroundColor: Theme.of(context).primaryColor,
                      elevation: 3,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(6)),
                      textStyle: const TextStyle(
                        fontSize: 18,
                        color: Colors.white,
                      )),
                  child: const SizedBox(
                    height: 52,
                    width: 100,
                    child: Center(
                      child: Text(
                        "Cancelar",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: 20,
                          color: Colors.blue,
                        ),
                      ),
                    ),
                  ),
                ),
                ElevatedButton(
                  onPressed: () async {
                    apiService.PostLocations(id).asStream().listen((res) {
                      if (res != null) {
                        Navigator.of(context).pop(MsgCreateLocation);

                        return MsgDialog.showMsgDialog(
                            context,
                            "Localização Registrada",
                            "Sua localização foi resgistrar com sucesso.",
                            true);
                      }
                      Navigator.of(context).pop(MsgCreateLocation);

                      MsgDialog.showMsgDialog(
                          context,
                          "Falha no Registro",
                          "Não foi possível resgistrar sua localização.",
                          false);
                    });
                  },
                  style: ElevatedButton.styleFrom(
                      backgroundColor: Theme.of(context).primaryColor,
                      elevation: 3,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(6)),
                      textStyle: const TextStyle(
                        color: Colors.blue,
                        fontSize: 20,
                      )),
                  child: const SizedBox(
                    height: 52,
                    width: 100,
                    child: Center(
                      child: Text(
                        "Registrar",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Colors.blue,
                          fontSize: 20,
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20)
        ],
      ),
    );
  }
}
