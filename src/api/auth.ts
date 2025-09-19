import Cookies from 'js-cookie';
import { apiClient, handleApiError } from '@/lib/axios';
import type { 
  LoginRequest, 
  RegisterRequest, 
  LoginResponse, 
  UserResponse 
} from '@/types/domains/auth';

/**
 * Authentication API Service
 * Handles all authentication-related API calls
 */
export class AuthAPI {
  /**
   * User login
   */
  static async login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await apiClient.post<LoginResponse>('/api/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * User registration
   */
  static async register(userData: RegisterRequest): Promise<UserResponse> {
    try {
      const response = await apiClient.post<UserResponse>('/api/auth/register', userData);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Email verification
   */
  static async verifyEmail(token: string): Promise<string> {
    try {
      const response = await apiClient.get<string>(`/api/auth/verify?token=${token}`);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Logout user (clear local storage)
   */
  static logout(): void {
    Cookies.remove('auth_token');
    Cookies.remove('user_data');
  }

  /**
   * Refresh token
   */
  static async refreshToken(): Promise<LoginResponse> {
    try {
      const response = await apiClient.post<LoginResponse>('/api/auth/refresh');
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Request password reset
   */
  static async requestPasswordReset(email: string): Promise<string> {
    try {
      const response = await apiClient.post<string>('/api/auth/forgot-password', { email });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Reset password with token
   */
  static async resetPassword(token: string, newPassword: string): Promise<string> {
    try {
      const response = await apiClient.post<string>('/api/auth/reset-password', {
        token,
        newPassword
      });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }
}
