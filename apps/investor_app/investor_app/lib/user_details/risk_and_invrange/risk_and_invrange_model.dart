import '/flutter_flow/flutter_flow_util.dart';
import 'risk_and_invrange_widget.dart' show RiskAndInvrangeWidget;
import 'package:flutter/material.dart';

class RiskAndInvrangeModel extends FlutterFlowModel<RiskAndInvrangeWidget> {
  ///  State fields for stateful widgets in this page.

  final unfocusNode = FocusNode();
  // State field(s) for Slider widget.
  double? sliderValue;

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {
    unfocusNode.dispose();
  }
}
