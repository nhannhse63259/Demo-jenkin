import { Injectable } from "@angular/core";
import { AppHttpService } from "src/app/shared/services/app-http.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  urlApi = "accounts";
  constructor(private appHttpService: AppHttpService) {}

  getListAccounts() {
    return this.appHttpService.getJson(this.urlApi);
  }
}
