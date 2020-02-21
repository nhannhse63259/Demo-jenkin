export class UserDTO {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  createdDate: Date;
  roleId: number;
}

export class UserViewDTO {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  createdDate: Date;
  role: string;
}
