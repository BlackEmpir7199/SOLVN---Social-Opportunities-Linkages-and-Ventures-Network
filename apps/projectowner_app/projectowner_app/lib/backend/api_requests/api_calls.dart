import 'dart:convert';

import 'api_manager.dart';

export 'api_manager.dart' show ApiCallResponse;

const _kPrivateApiFunctionName = 'ffPrivateApiCall';

class ProjectSendCall {
  static Future<ApiCallResponse> call({
    String? projectName = 'None',
    String? projectOwner = 'None',
    List<String>? projectTeamList,
    String? projectEstimate = 'None',
    String? projectRevenueModel = 'None',
    String? projectContactInfo = 'None',
    String? projectDomain = 'None',
    String? projectDescription = 'None',
  }) async {
    final projectTeam = _serializeList(projectTeamList);

    final ffApiRequestBody = '''
{
  "projectAppId": "12",
  "projectAppName": "projectOwner",
  "projectName": "$projectName",
  "projectOwner": "$projectOwner",
  "projectTeam": $projectTeam,
  "projectEstimate": "$projectEstimate",
  "projectRevenueModel": "$projectRevenueModel",
  "projectContactInfo": "$projectContactInfo",
  "projectDomain": "$projectDomain",
  "projectDescription": "$projectDescription"
}''';
    return ApiManager.instance.makeApiCall(
      callName: 'ProjectSend',
      apiUrl: 'https://192.168.170.111:3000/api/v1/project/new',
      callType: ApiCallType.POST,
      headers: {},
      params: {},
      body: ffApiRequestBody,
      bodyType: BodyType.JSON,
      returnBody: true,
      encodeBodyUtf8: false,
      decodeUtf8: false,
      cache: false,
      alwaysAllowBody: false,
    );
  }
}

class ApiPagingParams {
  int nextPageNumber = 0;
  int numItems = 0;
  dynamic lastResponse;

  ApiPagingParams({
    required this.nextPageNumber,
    required this.numItems,
    required this.lastResponse,
  });

  @override
  String toString() =>
      'PagingParams(nextPageNumber: $nextPageNumber, numItems: $numItems, lastResponse: $lastResponse,)';
}

String _serializeList(List? list) {
  list ??= <String>[];
  try {
    return json.encode(list);
  } catch (_) {
    return '[]';
  }
}

String _serializeJson(dynamic jsonVar, [bool isList = false]) {
  jsonVar ??= (isList ? [] : {});
  try {
    return json.encode(jsonVar);
  } catch (_) {
    return isList ? '[]' : '{}';
  }
}
