import 'dart:async';

import 'package:collection/collection.dart';

import '/backend/schema/util/firestore_util.dart';
import '/backend/schema/util/schema_util.dart';

import 'index.dart';
import '/flutter_flow/flutter_flow_util.dart';

class ProjectsRecord extends FirestoreRecord {
  ProjectsRecord._(
    super.reference,
    super.data,
  ) {
    _initializeFields();
  }

  // "projectName" field.
  String? _projectName;
  String get projectName => _projectName ?? '';
  bool hasProjectName() => _projectName != null;

  // "projectAppId" field.
  int? _projectAppId;
  int get projectAppId => _projectAppId ?? 0;
  bool hasProjectAppId() => _projectAppId != null;

  // "projectAppName" field.
  String? _projectAppName;
  String get projectAppName => _projectAppName ?? '';
  bool hasProjectAppName() => _projectAppName != null;

  // "projectOwner" field.
  String? _projectOwner;
  String get projectOwner => _projectOwner ?? '';
  bool hasProjectOwner() => _projectOwner != null;

  // "projectTeam" field.
  List<String>? _projectTeam;
  List<String> get projectTeam => _projectTeam ?? const [];
  bool hasProjectTeam() => _projectTeam != null;

  // "projectEstimate" field.
  String? _projectEstimate;
  String get projectEstimate => _projectEstimate ?? '';
  bool hasProjectEstimate() => _projectEstimate != null;

  // "projectRevenueModel" field.
  String? _projectRevenueModel;
  String get projectRevenueModel => _projectRevenueModel ?? '';
  bool hasProjectRevenueModel() => _projectRevenueModel != null;

  // "projectContactInfo" field.
  String? _projectContactInfo;
  String get projectContactInfo => _projectContactInfo ?? '';
  bool hasProjectContactInfo() => _projectContactInfo != null;

  // "projectDomain" field.
  String? _projectDomain;
  String get projectDomain => _projectDomain ?? '';
  bool hasProjectDomain() => _projectDomain != null;

  // "projectDescription" field.
  String? _projectDescription;
  String get projectDescription => _projectDescription ?? '';
  bool hasProjectDescription() => _projectDescription != null;

  // "projectCreatedDate" field.
  DateTime? _projectCreatedDate;
  DateTime? get projectCreatedDate => _projectCreatedDate;
  bool hasProjectCreatedDate() => _projectCreatedDate != null;

  void _initializeFields() {
    _projectName = snapshotData['projectName'] as String?;
    _projectAppId = castToType<int>(snapshotData['projectAppId']);
    _projectAppName = snapshotData['projectAppName'] as String?;
    _projectOwner = snapshotData['projectOwner'] as String?;
    _projectTeam = getDataList(snapshotData['projectTeam']);
    _projectEstimate = snapshotData['projectEstimate'] as String?;
    _projectRevenueModel = snapshotData['projectRevenueModel'] as String?;
    _projectContactInfo = snapshotData['projectContactInfo'] as String?;
    _projectDomain = snapshotData['projectDomain'] as String?;
    _projectDescription = snapshotData['projectDescription'] as String?;
    _projectCreatedDate = snapshotData['projectCreatedDate'] as DateTime?;
  }

  static CollectionReference get collection =>
      FirebaseFirestore.instance.collection('Projects');

  static Stream<ProjectsRecord> getDocument(DocumentReference ref) =>
      ref.snapshots().map((s) => ProjectsRecord.fromSnapshot(s));

  static Future<ProjectsRecord> getDocumentOnce(DocumentReference ref) =>
      ref.get().then((s) => ProjectsRecord.fromSnapshot(s));

  static ProjectsRecord fromSnapshot(DocumentSnapshot snapshot) =>
      ProjectsRecord._(
        snapshot.reference,
        mapFromFirestore(snapshot.data() as Map<String, dynamic>),
      );

  static ProjectsRecord getDocumentFromData(
    Map<String, dynamic> data,
    DocumentReference reference,
  ) =>
      ProjectsRecord._(reference, mapFromFirestore(data));

  @override
  String toString() =>
      'ProjectsRecord(reference: ${reference.path}, data: $snapshotData)';

  @override
  int get hashCode => reference.path.hashCode;

  @override
  bool operator ==(other) =>
      other is ProjectsRecord &&
      reference.path.hashCode == other.reference.path.hashCode;
}

Map<String, dynamic> createProjectsRecordData({
  String? projectName,
  int? projectAppId,
  String? projectAppName,
  String? projectOwner,
  String? projectEstimate,
  String? projectRevenueModel,
  String? projectContactInfo,
  String? projectDomain,
  String? projectDescription,
  DateTime? projectCreatedDate,
}) {
  final firestoreData = mapToFirestore(
    <String, dynamic>{
      'projectName': projectName,
      'projectAppId': projectAppId,
      'projectAppName': projectAppName,
      'projectOwner': projectOwner,
      'projectEstimate': projectEstimate,
      'projectRevenueModel': projectRevenueModel,
      'projectContactInfo': projectContactInfo,
      'projectDomain': projectDomain,
      'projectDescription': projectDescription,
      'projectCreatedDate': projectCreatedDate,
    }.withoutNulls,
  );

  return firestoreData;
}

class ProjectsRecordDocumentEquality implements Equality<ProjectsRecord> {
  const ProjectsRecordDocumentEquality();

  @override
  bool equals(ProjectsRecord? e1, ProjectsRecord? e2) {
    const listEquality = ListEquality();
    return e1?.projectName == e2?.projectName &&
        e1?.projectAppId == e2?.projectAppId &&
        e1?.projectAppName == e2?.projectAppName &&
        e1?.projectOwner == e2?.projectOwner &&
        listEquality.equals(e1?.projectTeam, e2?.projectTeam) &&
        e1?.projectEstimate == e2?.projectEstimate &&
        e1?.projectRevenueModel == e2?.projectRevenueModel &&
        e1?.projectContactInfo == e2?.projectContactInfo &&
        e1?.projectDomain == e2?.projectDomain &&
        e1?.projectDescription == e2?.projectDescription &&
        e1?.projectCreatedDate == e2?.projectCreatedDate;
  }

  @override
  int hash(ProjectsRecord? e) => const ListEquality().hash([
        e?.projectName,
        e?.projectAppId,
        e?.projectAppName,
        e?.projectOwner,
        e?.projectTeam,
        e?.projectEstimate,
        e?.projectRevenueModel,
        e?.projectContactInfo,
        e?.projectDomain,
        e?.projectDescription,
        e?.projectCreatedDate
      ]);

  @override
  bool isValidKey(Object? o) => o is ProjectsRecord;
}
