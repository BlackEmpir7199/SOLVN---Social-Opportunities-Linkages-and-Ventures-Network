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

  List<String> _hgftfv = [];
  List<String> get hgftfv => _hgftfv;
  set hgftfv(List<String> value) {
    _hgftfv = value;
  }

  void addToHgftfv(String value) {
    _hgftfv.add(value);
  }

  void removeFromHgftfv(String value) {
    _hgftfv.remove(value);
  }

  void removeAtIndexFromHgftfv(int index) {
    _hgftfv.removeAt(index);
  }

  void updateHgftfvAtIndex(
    int index,
    String Function(String) updateFn,
  ) {
    _hgftfv[index] = updateFn(_hgftfv[index]);
  }

  void insertAtIndexInHgftfv(int index, String value) {
    _hgftfv.insert(index, value);
  }

  List<int> _Xlabel = [1, 2, 3, 4, 6, 7];
  List<int> get Xlabel => _Xlabel;
  set Xlabel(List<int> value) {
    _Xlabel = value;
  }

  void addToXlabel(int value) {
    _Xlabel.add(value);
  }

  void removeFromXlabel(int value) {
    _Xlabel.remove(value);
  }

  void removeAtIndexFromXlabel(int index) {
    _Xlabel.removeAt(index);
  }

  void updateXlabelAtIndex(
    int index,
    int Function(int) updateFn,
  ) {
    _Xlabel[index] = updateFn(_Xlabel[index]);
  }

  void insertAtIndexInXlabel(int index, int value) {
    _Xlabel.insert(index, value);
  }

  List<int> _Ylabel = [3, 4, 5, 6, 7, 4, 5];
  List<int> get Ylabel => _Ylabel;
  set Ylabel(List<int> value) {
    _Ylabel = value;
  }

  void addToYlabel(int value) {
    _Ylabel.add(value);
  }

  void removeFromYlabel(int value) {
    _Ylabel.remove(value);
  }

  void removeAtIndexFromYlabel(int index) {
    _Ylabel.removeAt(index);
  }

  void updateYlabelAtIndex(
    int index,
    int Function(int) updateFn,
  ) {
    _Ylabel[index] = updateFn(_Ylabel[index]);
  }

  void insertAtIndexInYlabel(int index, int value) {
    _Ylabel.insert(index, value);
  }
}
