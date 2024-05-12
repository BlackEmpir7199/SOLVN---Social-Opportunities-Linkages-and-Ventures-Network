import 'dart:async';

import 'package:collection/collection.dart';

import '/backend/schema/util/firestore_util.dart';
import '/backend/schema/util/schema_util.dart';

import 'index.dart';

class InvestedProjectsRecord extends FirestoreRecord {
  InvestedProjectsRecord._(
    super.reference,
    super.data,
  ) {
    _initializeFields();
  }

  // "ProjectName" field.
  String? _projectName;
  String get projectName => _projectName ?? '';
  bool hasProjectName() => _projectName != null;

  void _initializeFields() {
    _projectName = snapshotData['ProjectName'] as String?;
  }

  static CollectionReference get collection =>
      FirebaseFirestore.instance.collection('investedProjects');

  static Stream<InvestedProjectsRecord> getDocument(DocumentReference ref) =>
      ref.snapshots().map((s) => InvestedProjectsRecord.fromSnapshot(s));

  static Future<InvestedProjectsRecord> getDocumentOnce(
          DocumentReference ref) =>
      ref.get().then((s) => InvestedProjectsRecord.fromSnapshot(s));

  static InvestedProjectsRecord fromSnapshot(DocumentSnapshot snapshot) =>
      InvestedProjectsRecord._(
        snapshot.reference,
        mapFromFirestore(snapshot.data() as Map<String, dynamic>),
      );

  static InvestedProjectsRecord getDocumentFromData(
    Map<String, dynamic> data,
    DocumentReference reference,
  ) =>
      InvestedProjectsRecord._(reference, mapFromFirestore(data));

  @override
  String toString() =>
      'InvestedProjectsRecord(reference: ${reference.path}, data: $snapshotData)';

  @override
  int get hashCode => reference.path.hashCode;

  @override
  bool operator ==(other) =>
      other is InvestedProjectsRecord &&
      reference.path.hashCode == other.reference.path.hashCode;
}

Map<String, dynamic> createInvestedProjectsRecordData({
  String? projectName,
}) {
  final firestoreData = mapToFirestore(
    <String, dynamic>{
      'ProjectName': projectName,
    }.withoutNulls,
  );

  return firestoreData;
}

class InvestedProjectsRecordDocumentEquality
    implements Equality<InvestedProjectsRecord> {
  const InvestedProjectsRecordDocumentEquality();

  @override
  bool equals(InvestedProjectsRecord? e1, InvestedProjectsRecord? e2) {
    return e1?.projectName == e2?.projectName;
  }

  @override
  int hash(InvestedProjectsRecord? e) =>
      const ListEquality().hash([e?.projectName]);

  @override
  bool isValidKey(Object? o) => o is InvestedProjectsRecord;
}
