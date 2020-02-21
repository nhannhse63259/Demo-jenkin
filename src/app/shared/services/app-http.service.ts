import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AppHttpService {
  constructor(private http: HttpClient) {}

  private getBackendUrl(url) {
    return environment.beServer + url;
  }

  getJson(url) {
    return this.http.get(this.getBackendUrl(url));
  }

  getText(url) {
    return this.http.get(this.getBackendUrl(url), {
      responseType: "text"
    });
  }

  postText(url, body) {
    return this.http.post(this.getBackendUrl(url), body, {
      headers: new HttpHeaders({
        "Content-Type": "text/plain;charset=UTF-8" // "charset=UTF-8" is very important to support Vietnamese!
      }),
      responseType: "text"
    });
  }

  postJson(url, body) {
    return this.http.post(this.getBackendUrl(url), JSON.stringify(body), {
      headers: new HttpHeaders({
        "Content-Type": "application/json;charset=UTF-8" // "charset=UTF-8" is very important to support Vietnamese!
      })
    });
  }

  postMultipartForm(url, body) {
    return this.http.post(this.getBackendUrl(url), body, {
      headers: new HttpHeaders({
        enctype: "multipart/form-data"
      }),
      responseType: "text"
    });
  }

  postFormUrlEncoded(url, jsonObj) {
    return this.http.post(
      this.getBackendUrl(url),
      null, // body
      {
        headers: new HttpHeaders({
          "Content-Type": "application/x-www-form-urlencoded"
        }),
        params: jsonObj,
        responseType: "text"
      }
    );
  }

  delete(url) {
    return this.http.delete(this.getBackendUrl(url));
  }

  put(url, body) {
    return this.http.put(this.getBackendUrl(url), JSON.stringify(body), {
      headers: new HttpHeaders({
        "Content-Type": "application/json;charset=UTF-8" // "charset=UTF-8" is very important to support Vietnamese!
      })
    });
  }
}
