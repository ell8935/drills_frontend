export interface ObjectLiteral {
  [key: string]: any;
}

export interface User {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface UserResponse extends User {
  id: number;
  createdAt: string;
  updatedAt: string;
}
