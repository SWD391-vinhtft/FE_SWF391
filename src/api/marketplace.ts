import { apiClient, handleApiError } from '@/lib/axios';
import type { 
  MarketplaceListing, 
  CreateListingRequest, 
  UpdateListingRequest,
  MarketplaceSearchParams,
  PaginatedResponse
} from '@/types';

/**
 * Marketplace API Service
 * Handles all marketplace-related API calls
 */
export class MarketplaceAPI {
  /**
   * Get all marketplace listings with optional filters
   */
  static async getListings(params?: MarketplaceSearchParams): Promise<PaginatedResponse<MarketplaceListing>> {
    try {
      const response = await apiClient.get<PaginatedResponse<MarketplaceListing>>('/api/marketplace/listings', { params });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Get listing by ID
   */
  static async getListing(id: number): Promise<MarketplaceListing> {
    try {
      const response = await apiClient.get<MarketplaceListing>(`/api/marketplace/listings/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Create new listing
   */
  static async createListing(listingData: CreateListingRequest): Promise<MarketplaceListing> {
    try {
      const response = await apiClient.post<MarketplaceListing>('/api/marketplace/listings', listingData);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Update listing
   */
  static async updateListing(id: number, listingData: UpdateListingRequest): Promise<MarketplaceListing> {
    try {
      const response = await apiClient.put<MarketplaceListing>(`/api/marketplace/listings/${id}`, listingData);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Delete listing
   */
  static async deleteListing(id: number): Promise<void> {
    try {
      await apiClient.delete(`/api/marketplace/listings/${id}`);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Get listings by seller
   */
  static async getListingsBySeller(sellerId: number, params?: {
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponse<MarketplaceListing>> {
    try {
      const response = await apiClient.get<PaginatedResponse<MarketplaceListing>>(`/api/marketplace/listings/seller/${sellerId}`, { params });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Search listings
   */
  static async searchListings(searchParams: MarketplaceSearchParams): Promise<PaginatedResponse<MarketplaceListing>> {
    try {
      const response = await apiClient.get<PaginatedResponse<MarketplaceListing>>('/api/marketplace/search', { 
        params: searchParams 
      });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Get featured listings
   */
  static async getFeaturedListings(limit: number = 10): Promise<MarketplaceListing[]> {
    try {
      const response = await apiClient.get<MarketplaceListing[]>('/api/marketplace/featured', {
        params: { limit }
      });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Get similar listings based on item
   */
  static async getSimilarListings(listingId: number, limit: number = 5): Promise<MarketplaceListing[]> {
    try {
      const response = await apiClient.get<MarketplaceListing[]>(`/api/marketplace/listings/${listingId}/similar`, {
        params: { limit }
      });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Mark listing as favorite
   */
  static async addToFavorites(listingId: number): Promise<void> {
    try {
      await apiClient.post(`/api/marketplace/listings/${listingId}/favorite`);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Remove listing from favorites
   */
  static async removeFromFavorites(listingId: number): Promise<void> {
    try {
      await apiClient.delete(`/api/marketplace/listings/${listingId}/favorite`);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }

  /**
   * Get user's favorite listings
   */
  static async getFavoriteListings(params?: {
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponse<MarketplaceListing>> {
    try {
      const response = await apiClient.get<PaginatedResponse<MarketplaceListing>>('/api/marketplace/favorites', { params });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }
}
