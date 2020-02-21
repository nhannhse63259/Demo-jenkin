import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../services/auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const currentAccount = this.authenticationService.currentAccountValue;
    if (currentAccount) {
      if (
        activatedRoute.data.roles &&
        activatedRoute.data.roles.indexOf(currentAccount.roleId) === -1
      ) {
        console.log(currentAccount);
        console.log(activatedRoute.data.roles);
        this.router.navigate(["/forbidden"]);
        return false;
      }
      return true;
    }

    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
