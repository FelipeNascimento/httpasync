const http = require("http");
const https = require("https");
class HttpClient {
  async GET(options, secure) {
    return new Promise((fulfill, reject) => {
      options = options || {};
      options.headers = options.headers || {};
      options.timeout = options.timeout || 5000;
      options.port = options.port || (secure ? 443 : 80);
      options.method = "GET";
      options.headers["User-Agent"] =
        options.headers["User-Agent"] || "node.js";
      options.headers["Content-Type"] =
        options.headers["Content-Type"] || "application/json";
      let client = secure ? https : http;
      var req = client.request(options, function(res) {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", function(d) {
          body += d;
        });
        res.on("end", () => {
          if (res.statusCode < 400)
            fulfill({
              status: res.statusCode,
              headers: res.headers,
              body: body
            });
          else
            reject({
              status: res.statusCode,
              headers: res.headers,
              body: body
            });
        });
        res.on("error", err => {
          reject(err);
        });
      });
      req.end();
    });
  }
  async POST(options, payload, secure) {
    return new Promise((fulfill, reject) => {
      options = options || {};
      options.headers = options.headers || {};
      options.timeout = options.timeout || 5000;
      options.port = options.port || (secure ? 443 : 80);
      options.method = "POST";
      options.headers["User-Agent"] =
        options.headers["User-Agent"] || "node.js";
      options.headers["Content-Type"] =
        options.headers["Content-Type"] || "application/json";
      options.headers["Content-Length"] = Buffer.byteLength(payload);
      let client = secure ? https : http;
      var req = client.request(options, function(res) {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", function(d) {
          body += d;
        });
        res.on("end", () => {
          if (res.statusCode < 400)
            fulfill({
              status: res.statusCode,
              headers: res.headers,
              body: body
            });
          else
            reject({
              status: res.statusCode,
              headers: res.headers,
              body: body
            });
        });
        res.on("error", err => {
          reject(err);
        });
      });
      req.write(payload);
      req.end();
    });
  }
  async PUT(options, payload, secure) {
    return new Promise((fulfill, reject) => {
      options = options || {};
      options.headers = options.headers || {};
      options.timeout = options.timeout || 5000;
      options.port = options.port || (secure ? 443 : 80);
      options.method = "PUT";
      options.headers["User-Agent"] =
        options.headers["User-Agent"] || "node.js";
      options.headers["Content-Type"] =
        options.headers["Content-Type"] || "application/json";
      options.headers["Content-Length"] = Buffer.byteLength(payload);
      let client = secure ? https : http;
      var req = client.request(options, function(res) {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", function(d) {
          body += d;
        });
        res.on("end", () => {
          if (res.statusCode < 400)
            fulfill({
              status: res.statusCode,
              headers: res.headers,
              body: body
            });
          else
            reject({
              status: res.statusCode,
              headers: res.headers,
              body: body
            });
        });
        res.on("error", err => {
          reject(err);
        });
      });
      req.write(payload);
      req.end();
    });
  }
  async DELETE(options, secure) {
    return new Promise((fulfill, reject) => {
      options = options || {};
      options.headers = options.headers || {};
      options.timeout = options.timeout || 5000;
      options.port = options.port || (secure ? 443 : 80);
      options.method = "DELETE";
      options.headers["User-Agent"] =
        options.headers["User-Agent"] || "node.js";
      options.headers["Content-Type"] =
        options.headers["Content-Type"] || "application/json";
      let client = secure ? https : http;
      var req = client.request(options, function(res) {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", function(d) {
          body += d;
        });
        res.on("end", () => {
          if (res.statusCode < 400)
            fulfill({
              status: res.statusCode,
              headers: res.headers,
              body: body
            });
          else
            reject({
              status: res.statusCode,
              headers: res.headers,
              body: body
            });
        });
        res.on("error", err => {
          reject(err);
        });
      });
      req.end();
    });
  }
}
const instance = new HttpClient();
module.exports = instance;