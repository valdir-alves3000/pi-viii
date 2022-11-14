import 'package:flutter/material.dart';

class MsgDialog {
  static void showMsgDialog(
      BuildContext context, String title, String msg, bool status) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        backgroundColor: Theme.of(context).primaryColorDark,
        icon: Icon(
          status ? Icons.check_circle_outline_outlined : (Icons.close),
          color: status ? Colors.green : Colors.red,
          size: 60,
        ),
        title: Text(
          title,
          textAlign: TextAlign.center,
          style: const TextStyle(
              fontSize: 20, color: Colors.white70, fontWeight: FontWeight.bold),
        ),
        content: Text(
          msg,
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 16, color: Colors.white70),
        ),
        actions: [
          Center(
            child: ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop(MsgDialog);
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
              child: const Text(
                "OK",
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.blue),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
