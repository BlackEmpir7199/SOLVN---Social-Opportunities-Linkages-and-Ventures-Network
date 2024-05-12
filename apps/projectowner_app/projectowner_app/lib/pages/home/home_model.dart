import '/backend/backend.dart';
import '/components/card27_insurance_card/card27_insurance_card_widget.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'home_widget.dart' show HomeWidget;
import 'package:flutter/material.dart';
import 'package:infinite_scroll_pagination/infinite_scroll_pagination.dart';

class HomeModel extends FlutterFlowModel<HomeWidget> {
  ///  State fields for stateful widgets in this page.

  final unfocusNode = FocusNode();
  // State field(s) for TabBar widget.
  TabController? tabBarController;
  int get tabBarCurrentIndex =>
      tabBarController != null ? tabBarController!.index : 0;

  // State field(s) for mobileView widget.

  PagingController<DocumentSnapshot?, ProjectsRecord>?
      mobileViewPagingController;
  Query? mobileViewPagingQuery;
  List<StreamSubscription?> mobileViewStreamSubscriptions = [];

  // State field(s) for TextField widget.
  FocusNode? textFieldFocusNode;
  TextEditingController? textController;
  String? Function(BuildContext, String?)? textControllerValidator;
  // Model for Card27InsuranceCard component.
  late Card27InsuranceCardModel card27InsuranceCardModel;

  @override
  void initState(BuildContext context) {
    card27InsuranceCardModel =
        createModel(context, () => Card27InsuranceCardModel());
  }

  @override
  void dispose() {
    unfocusNode.dispose();
    tabBarController?.dispose();
    for (var s in mobileViewStreamSubscriptions) {
      s?.cancel();
    }
    mobileViewPagingController?.dispose();

    textFieldFocusNode?.dispose();
    textController?.dispose();

    card27InsuranceCardModel.dispose();
  }

  /// Additional helper methods.
  PagingController<DocumentSnapshot?, ProjectsRecord> setMobileViewController(
    Query query, {
    DocumentReference<Object?>? parent,
  }) {
    mobileViewPagingController ??= _createMobileViewController(query, parent);
    if (mobileViewPagingQuery != query) {
      mobileViewPagingQuery = query;
      mobileViewPagingController?.refresh();
    }
    return mobileViewPagingController!;
  }

  PagingController<DocumentSnapshot?, ProjectsRecord>
      _createMobileViewController(
    Query query,
    DocumentReference<Object?>? parent,
  ) {
    final controller =
        PagingController<DocumentSnapshot?, ProjectsRecord>(firstPageKey: null);
    return controller
      ..addPageRequestListener(
        (nextPageMarker) => queryProjectsRecordPage(
          nextPageMarker: nextPageMarker,
          streamSubscriptions: mobileViewStreamSubscriptions,
          controller: controller,
          pageSize: 25,
          isStream: true,
        ),
      );
  }
}
