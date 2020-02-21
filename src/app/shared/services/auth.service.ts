import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AccountDTO, LoginAccountDTO } from "../dto/account.dto";
import { AppHttpService } from "./app-http.service";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentAccountSubject: BehaviorSubject<AccountDTO>;
  public currentAccount: Observable<AccountDTO>;

  constructor(private appHttpService: AppHttpService) {
    this.currentAccountSubject = new BehaviorSubject<AccountDTO>(
      JSON.parse(localStorage.getItem("currentAccount"))
    );
    this.currentAccount = this.currentAccountSubject.asObservable();
  }

  public get currentAccountValue(): AccountDTO {
    return this.currentAccountSubject.value;
  }

  login(loginauth: LoginAccountDTO) {
    return this.appHttpService.postJson("login", loginauth).pipe(
      map((account: AccountDTO) => {
        if (account && account.token) {
          localStorage.setItem("currentAccount", JSON.stringify(account));
          this.currentAccountSubject.next(account);
        }

        return account;
      })
    );
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.currentAccountSubject.next(null);
  }
}
