import 'dart:async';

import 'package:collection/collection.dart';

import '/backend/schema/util/firestore_util.dart';
import '/backend/schema/util/schema_util.dart';

import 'index.dart';
import '/flutter_flow/flutter_flow_util.dart';

class InvestmentsRecord extends FirestoreRecord {
  InvestmentsRecord._(
    super.reference,
    super.data,
  ) {
    _initializeFields();
  }

  // "amount" field.
  int? _amount;
  int get amount => _amount ?? 0;
  bool hasAmount() => _amount != null;

  void _initializeFields() {
    _amount = castToType<int>(snapshotData['amount']);
  }

  static CollectionReference get collection =>
      FirebaseFirestore.instance.collection('investments');

  static Stream<InvestmentsRecord> getDocument(DocumentReference ref) =>
      ref.snapshots().map((s) => InvestmentsRecord.fromSnapshot(s));

  static Future<InvestmentsRecord> getDocumentOnce(DocumentReference ref) =>
      ref.get().then((s) => InvestmentsRecord.fromSnapshot(s));

  static InvestmentsRecord fromSnapshot(DocumentSnapshot snapshot) =>
      InvestmentsRecord._(
        snapshot.reference,
        mapFromFirestore(snapshot.data() as Map<String, dynamic>),
      );

  static InvestmentsRecord getDocumentFromData(
    Map<String, dynamic> data,
    DocumentReference reference,
  ) =>
      InvestmentsRecord._(reference, mapFromFirestore(data));

  @override
  String toString() =>
      'InvestmentsRecord(reference: ${reference.path}, data: $snapshotData)';

  @override
  int get hashCode => reference.path.hashCode;

  @override
  bool operator ==(other) =>
      other is InvestmentsRecord &&
      reference.path.hashCode == other.reference.path.hashCode;
}

Map<String, dynamic> createInvestmentsRecordData({
  int? amount,
}) {
  final firestoreData = mapToFirestore(
    <String, dynamic>{
      'amount': amount,
    }.withoutNulls,
  );

  return firestoreData;
}

class InvestmentsRecordDocumentEquality implements Equality<InvestmentsRecord> {
  const InvestmentsRecordDocumentEquality();

  @override
  bool equals(InvestmentsRecord? e1, InvestmentsRecord? e2) {
    return e1?.amount == e2?.amount;
  }

  @override
  int hash(InvestmentsRecord? e) => const ListEquality().hash([e?.amount]);

  @override
  bool isValidKey(Object? o) => o is InvestmentsRecord;
}
