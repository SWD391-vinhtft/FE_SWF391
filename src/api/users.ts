import { apiClient, handleApiError } from '@/lib/axios';
import type { User, UserResponse } from '@/types/domains/auth';

/**
 * Users API Service
 * Handles all user-related API calls
 */
export class UsersAPI {
  /**
   * Get current user profile
   */
  static async getCurrentUser(): Promise<UserResponse> {
    try {
      const response = await apiClient.get<UserResponse>('/api/user/profile');
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Update user profile
   */
  static async updateProfile(userData: Partial<UserResponse>): Promise<UserResponse> {
    try {
      const response = await apiClient.put<UserResponse>('/api/user/profile', userData);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Upload user avatar
   */
  static async uploadAvatar(file: File): Promise<{ avatarUrl: string }> {
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const response = await apiClient.post<{ avatarUrl: string }>('/api/user/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Change password
   */
  static async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    try {
      await apiClient.post('/api/user/change-password', {
        currentPassword,
        newPassword
      });
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Delete user account
   */
  static async deleteAccount(): Promise<void> {
    try {
      await apiClient.delete('/api/user/account');
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Get user by ID (public profile)
   */
  static async getUserById(userId: number): Promise<UserResponse> {
    try {
      const response = await apiClient.get<UserResponse>(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Update user settings
   */
  static async updateSettings(settings: {
    emailNotifications?: boolean;
    twoFactorEnabled?: boolean;
    loginAlertsEnabled?: boolean;
    privateProfile?: boolean;
  }): Promise<void> {
    try {
      await apiClient.put('/api/user/settings', settings);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Get user's sustainability metrics
   */
  static async getSustainabilityMetrics(): Promise<{
    totalItemsShared: number;
    carbonFootprintSaved: number;
    sustainabilityScore: number;
    achievements: string[];
  }> {
    try {
      const response = await apiClient.get('/api/user/sustainability-metrics');
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }
}
