import { apiClient, handleApiError } from '@/lib/axios';
import type { 
  Item, 
  CreateItemRequest, 
  UpdateItemRequest,
  Category,
  Brand,
  PaginatedResponse
} from '@/types';

/**
 * Items API Service
 * Handles all item-related API calls
 */
export class ItemsAPI {
  /**
   * Get all items with optional filters
   */
  static async getItems(params?: {
    page?: number;
    limit?: number;
    categoryId?: number;
    brandId?: number;
    ownerId?: number;
    status?: string;
  }): Promise<PaginatedResponse<Item>> {
    try {
      const response = await apiClient.get<PaginatedResponse<Item>>('/api/items', { params });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Get item by ID
   */
  static async getItem(id: number): Promise<Item> {
    try {
      const response = await apiClient.get<Item>(`/api/items/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Create new item
   */
  static async createItem(itemData: CreateItemRequest): Promise<Item> {
    try {
      const response = await apiClient.post<Item>('/api/items', itemData);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Update item
   */
  static async updateItem(id: number, itemData: UpdateItemRequest): Promise<Item> {
    try {
      const response = await apiClient.put<Item>(`/api/items/${id}`, itemData);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Delete item
   */
  static async deleteItem(id: number): Promise<void> {
    try {
      await apiClient.delete(`/api/items/${id}`);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Get items by owner
   */
  static async getItemsByOwner(ownerId: number, params?: {
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponse<Item>> {
    try {
      const response = await apiClient.get<PaginatedResponse<Item>>(`/api/items/owner/${ownerId}`, { params });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Upload item images
   */
  static async uploadImages(itemId: number, files: FileList): Promise<string[]> {
    try {
      const formData = new FormData();
      Array.from(files).forEach(file => {
        formData.append('images', file);
      });

      const response = await apiClient.post<string[]>(`/api/items/${itemId}/images`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }
}

/**
 * Categories API Service
 */
export class CategoriesAPI {
  /**
   * Get all categories
   */
  static async getCategories(): Promise<Category[]> {
    try {
      const response = await apiClient.get<Category[]>('/api/categories');
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Get category by ID
   */
  static async getCategory(id: number): Promise<Category> {
    try {
      const response = await apiClient.get<Category>(`/api/categories/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }
}

/**
 * Brands API Service
 */
export class BrandsAPI {
  /**
   * Get all brands
   */
  static async getBrands(): Promise<Brand[]> {
    try {
      const response = await apiClient.get<Brand[]>('/api/brands');
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Get brand by ID
   */
  static async getBrand(id: number): Promise<Brand> {
    try {
      const response = await apiClient.get<Brand>(`/api/brands/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }
}
