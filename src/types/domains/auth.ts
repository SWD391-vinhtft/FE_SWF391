// User Types
export enum UserType {
  CONSUMER = 'CONSUMER',
  BRAND = 'BRAND',
  RECYCLER = 'RECYCLER',
  DESIGNER = 'DESIGNER',
  ADMIN = 'ADMIN'
}

export interface User {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  userType: UserType;
  sustainabilityScore: number;
  createdAt: string;
  updatedAt: string;
  isVerified: boolean;
  isActive: boolean;
  avatarUrl?: string;
  emailVerified: boolean;
  twoFactorEnabled: boolean;
  loginAlertsEnabled: boolean;
  username?: string;
}

// Authentication Request Types
export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  username?: string;
}

// Authentication Response Types
export interface LoginResponse {
  token: string;
  tokenType: string;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  username?: string;
  userType: UserType;
  sustainabilityScore: number;
  emailVerified: boolean;
}

export interface UserResponse {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  username?: string;
  userType: UserType;
  sustainabilityScore: number;
  emailVerified: boolean;
  avatarUrl?: string;
  createdAt: string;
}
