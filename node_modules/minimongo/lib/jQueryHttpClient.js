var $;

$ = require('jquery');

module.exports = function(method, url, params, data, success, error) {
  var fullUrl, req;
  fullUrl = url + "?" + $.param(params);
  if (method === "GET") {
    req = $.ajax(fullUrl, {
      dataType: "json",
      timeout: 180000
    });
  } else if (method === "DELETE") {
    req = $.ajax(fullUrl, {
      type: 'DELETE',
      timeout: 60000
    });
  } else if (method === "POST" || method === "PATCH") {
    req = $.ajax(fullUrl, {
      data: JSON.stringify(data),
      contentType: 'application/json',
      timeout: 60000,
      type: method
    });
  } else {
    throw new Error("Unknown method " + method);
  }
  req.done(function(response, textStatus, jqXHR) {
    return success(response || null);
  });
  return req.fail(function(jqXHR, textStatus, errorThrown) {
    if (error) {
      return error(jqXHR);
    }
  });
};
