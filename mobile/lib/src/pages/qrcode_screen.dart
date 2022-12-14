import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';
import 'package:mobile/src/resources/dialog/msg_create_user.dart';
import 'package:mobile/src/resources/dialog/msg_dialog.dart';
import 'package:mobile/src/services/api_service.dart';

class QRCodeScreen extends StatefulWidget {
  static const String idPage = '/qrcode';

  const QRCodeScreen({super.key});
  @override
  State<QRCodeScreen> createState() => _QRCodeScreenState();
}

class _QRCodeScreenState extends State<QRCodeScreen> {
  final ApiService apiService = ApiService.instance;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).primaryColorDark,
      appBar: AppBar(
        title: const Text(
          'Localizações',
          style: TextStyle(color: Colors.white70),
        ),
        backgroundColor: Theme.of(context).primaryColor,
      ),
      body: Center(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Padding(
            padding: EdgeInsets.fromLTRB(40, 50, 40, 20),
            child: Text(
              "Visualizar Histórico de Localizações",
              style: TextStyle(
                fontSize: 14,
                color: Colors.white60,
              ),
              textAlign: TextAlign.center,
            ),
          ),
          ElevatedButton(
            onPressed: () async {
              await apiService.GetMyRecords();
              Navigator.pushNamed(context, '/locations');
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
            child: SizedBox(
              width: 220,
              height: 50,
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(Icons.search, color: Colors.blue),
                  SizedBox(width: 20),
                  Text(
                    "Buscar",
                    style: TextStyle(color: Colors.blue),
                  ),
                ],
              ),
            ),
          ),
          const Padding(
            padding: EdgeInsets.fromLTRB(40, 70, 40, 20),
            child: Text(
              "Para registrar sua localizção basta apontar a camera para o QRCode do local",
              style: TextStyle(
                fontSize: 14,
                color: Colors.white60,
              ),
              textAlign: TextAlign.center,
            ),
          ),
          ElevatedButton(
            onPressed: () async {
              scanQRCode();
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
            child: SizedBox(
              width: 220,
              height: 50,
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(Icons.qr_code_scanner, color: Colors.blue),
                  SizedBox(width: 20),
                  Text(
                    "Scanner",
                    style: TextStyle(color: Colors.blue),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(
            height: 20.0,
          ),
        ],
      )),
    );
  }

  void scanQRCode() async {
    try {
      final qrCode = await FlutterBarcodeScanner.scanBarcode(
          '#ff6666', 'Cancel', true, ScanMode.QR);

      if (!mounted) return;

      apiService.GetPlace(qrCode).asStream().listen((place) async {
        if (place != null) {
          MsgCreateLocation.showMsgDialog(context, place.name, place.address,
              place.city, place.state, place.created_at, place.id);
          return;
        }

        MsgDialog.showMsgDialog(
            context, "Falha na Leitura", "QRCode não localizado", false);
      });
    } on PlatformException {
      MsgDialog.showMsgDialog(
          context, "Falha na Leitura", "QRCode não localizado", false);
    }
  }
}
