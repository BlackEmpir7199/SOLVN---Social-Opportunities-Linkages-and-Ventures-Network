import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'icon_for_project_model.dart';
export 'icon_for_project_model.dart';

class IconForProjectWidget extends StatefulWidget {
  const IconForProjectWidget({
    super.key,
    required this.icon,
  });

  final Widget? icon;

  @override
  State<IconForProjectWidget> createState() => _IconForProjectWidgetState();
}

class _IconForProjectWidgetState extends State<IconForProjectWidget> {
  late IconForProjectModel _model;

  @override
  void setState(VoidCallback callback) {
    super.setState(callback);
    _model.onUpdate();
  }

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => IconForProjectModel());
  }

  @override
  void dispose() {
    _model.maybeDispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 60.0,
      height: 60.0,
      decoration: BoxDecoration(
        color: FlutterFlowTheme.of(context).primary,
        borderRadius: BorderRadius.circular(16.0),
      ),
      alignment: const AlignmentDirectional(0.0, 0.0),
      child: widget.icon!,
    );
  }
}
