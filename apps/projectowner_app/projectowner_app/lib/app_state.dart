import 'package:flutter/material.dart';

class FFAppState extends ChangeNotifier {
  static FFAppState _instance = FFAppState._internal();

  factory FFAppState() {
    return _instance;
  }

  FFAppState._internal();

  static void reset() {
    _instance = FFAppState._internal();
  }

  Future initializePersistedState() async {}

  void update(VoidCallback callback) {
    callback();
    notifyListeners();
  }

  List<String> _Interests = [
    'Ending Poverty and Hunger',
    'Health and well being',
    'Quality Education ',
    'Gender Equality',
    'Clean water and sanitation',
    'Clean Energy',
    'Decent work ande economic growth',
    'Industry, Innovation and Infrastructure',
    'Reduced inequalities',
    'Sustainable cities & Communities',
    'Responsible Consumptions & Production',
    'Climate Action',
    'Life Below Water',
    'Life on Land',
    'Peace, Justice & Strong Institutions',
    'Partnerships for the goals',
    'Others'
  ];
  List<String> get Interests => _Interests;
  set Interests(List<String> value) {
    _Interests = value;
  }

  void addToInterests(String value) {
    _Interests.add(value);
  }

  void removeFromInterests(String value) {
    _Interests.remove(value);
  }

  void removeAtIndexFromInterests(int index) {
    _Interests.removeAt(index);
  }

  void updateInterestsAtIndex(
    int index,
    String Function(String) updateFn,
  ) {
    _Interests[index] = updateFn(_Interests[index]);
  }

  void insertAtIndexInInterests(int index, String value) {
    _Interests.insert(index, value);
  }

  List<String> _teamMembers = [];
  List<String> get teamMembers => _teamMembers;
  set teamMembers(List<String> value) {
    _teamMembers = value;
  }

  void addToTeamMembers(String value) {
    _teamMembers.add(value);
  }

  void removeFromTeamMembers(String value) {
    _teamMembers.remove(value);
  }

  void removeAtIndexFromTeamMembers(int index) {
    _teamMembers.removeAt(index);
  }

  void updateTeamMembersAtIndex(
    int index,
    String Function(String) updateFn,
  ) {
    _teamMembers[index] = updateFn(_teamMembers[index]);
  }

  void insertAtIndexInTeamMembers(int index, String value) {
    _teamMembers.insert(index, value);
  }
}
