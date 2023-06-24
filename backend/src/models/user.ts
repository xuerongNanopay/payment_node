interface User {
  id: number;
  userName: string;
  loginEnable: boolean;
  lastLogin: Date;
  roles: string[];
}