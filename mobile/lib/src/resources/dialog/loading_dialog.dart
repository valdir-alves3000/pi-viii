import 'package:flutter/material.dart';

class LoadingDialog {
  static void showLoadingDialog(BuildContext context, String msg) {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => Dialog(
        child: Container(
          color: Theme.of(context).primaryColorDark,
          height: 100,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const CircularProgressIndicator(),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 10, 0, 0),
                child: Text(
                  msg,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 18, color: Colors.blue),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  static hideLoadingDialog(BuildContext context) {
    Navigator.of(context).pop(LoadingDialog);
  }
}
