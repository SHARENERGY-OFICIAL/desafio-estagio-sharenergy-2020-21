var compileSort, hashRows, sha1, shardLength, _;

_ = require('lodash');

sha1 = require('js-sha1');

compileSort = require('./selector').compileSort;


/*

Quickfind protocol allows sending information about which rows are already present locally to minimize 
network traffic.

Protocal has 3 phases:

encodeRequest: Done on client. Summarize which rows are already present locally by sharding and then hashing _id:_rev|
encodeResponse: Done on server. Given complete server list and results of encodeRequest, create list of changes, sharded by first two characters of _id
decodeResponse: Done on client. Given encoded response and local list, recreate complete list from server.

Interaction of sort, limit and fields:

- fields present: _rev might be missing. Do not use quickfind
- limit with no sort: This gives unstable results. Do not use quickfind
- sort: final rows need to be re-sorted. Since fields not present, is possible.
- no sort, no limit: always sort by _id
 */

shardLength = 2;

exports.encodeRequest = function(clientRows) {
  var request;
  clientRows = _.groupBy(clientRows, function(row) {
    return row._id.substr(0, shardLength);
  });
  request = _.mapValues(clientRows, function(rows) {
    return hashRows(rows);
  });
  return request;
};

exports.encodeResponse = function(serverRows, encodedRequest) {
  var key, response, value;
  serverRows = _.groupBy(serverRows, function(row) {
    return row._id.substr(0, shardLength);
  });
  for (key in encodedRequest) {
    value = encodedRequest[key];
    if (!serverRows[key]) {
      serverRows[key] = [];
    }
  }
  response = _.pick(serverRows, function(rows, key) {
    return hashRows(rows) !== encodedRequest[key];
  });
  return response;
};

exports.decodeResponse = function(encodedResponse, clientRows, sort) {
  var serverRows;
  clientRows = _.groupBy(clientRows, function(row) {
    return row._id.substr(0, shardLength);
  });
  serverRows = _.extend(clientRows, encodedResponse);
  serverRows = _.flatten(_.values(serverRows));
  if (sort) {
    serverRows.sort(compileSort(sort));
  } else {
    serverRows = _.sortBy(serverRows, "_id");
  }
  return serverRows;
};

hashRows = function(rows) {
  var hash, row, _i, _len, _ref;
  hash = sha1.create();
  _ref = _.sortBy(rows, "_id");
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    row = _ref[_i];
    hash.update(row._id + ":" + (row._rev || "") + "|");
  }
  return hash.hex().substr(0, 20);
};
