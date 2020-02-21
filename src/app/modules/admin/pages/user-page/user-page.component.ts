import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { UserDTO, UserViewDTO } from "../../dto/user.dto";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.scss"]
})
export class UserPageComponent implements OnInit {
  userList: UserDTO[];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getListAccounts().subscribe((res: UserDTO[]) => {
      this.userList = res;
    });
  }
}
