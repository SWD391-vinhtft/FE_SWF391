import { useState } from 'react';
import { MarketplaceAPI } from '@/api';
import type { 
  MarketplaceListing, 
  CreateListingRequest, 
  UpdateListingRequest,
  MarketplaceSearchParams,
  PaginatedResponse 
} from '@/types';

interface UseMarketplaceReturn {
  // State
  listings: MarketplaceListing[];
  listing: MarketplaceListing | null;
  featuredListings: MarketplaceListing[];
  favoriteListings: MarketplaceListing[];
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchListings: (params?: MarketplaceSearchParams) => Promise<PaginatedResponse<MarketplaceListing>>;
  fetchListing: (id: number) => Promise<MarketplaceListing>;
  createListing: (listingData: CreateListingRequest) => Promise<MarketplaceListing>;
  updateListing: (id: number, listingData: UpdateListingRequest) => Promise<MarketplaceListing>;
  deleteListing: (id: number) => Promise<void>;
  searchListings: (searchParams: MarketplaceSearchParams) => Promise<PaginatedResponse<MarketplaceListing>>;
  fetchFeaturedListings: (limit?: number) => Promise<MarketplaceListing[]>;
  fetchSimilarListings: (listingId: number, limit?: number) => Promise<MarketplaceListing[]>;
  addToFavorites: (listingId: number) => Promise<void>;
  removeFromFavorites: (listingId: number) => Promise<void>;
  fetchFavoriteListings: (params?: any) => Promise<PaginatedResponse<MarketplaceListing>>;
  fetchListingsBySeller: (sellerId: number, params?: any) => Promise<PaginatedResponse<MarketplaceListing>>;
}

/**
 * Custom hook for marketplace operations
 * Provides CRUD operations, search, favorites, and state management for marketplace listings
 */
export const useMarketplace = (): UseMarketplaceReturn => {
  const [listings, setListings] = useState<MarketplaceListing[]>([]);
  const [listing, setListing] = useState<MarketplaceListing | null>(null);
  const [featuredListings, setFeaturedListings] = useState<MarketplaceListing[]>([]);
  const [favoriteListings, setFavoriteListings] = useState<MarketplaceListing[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchListings = async (params?: MarketplaceSearchParams): Promise<PaginatedResponse<MarketplaceListing>> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await MarketplaceAPI.getListings(params);
      setListings(response.data);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch listings';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchListing = async (id: number): Promise<MarketplaceListing> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await MarketplaceAPI.getListing(id);
      setListing(response);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch listing';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const createListing = async (listingData: CreateListingRequest): Promise<MarketplaceListing> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await MarketplaceAPI.createListing(listingData);
      setListings(prev => [...prev, response]);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create listing';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateListing = async (id: number, listingData: UpdateListingRequest): Promise<MarketplaceListing> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await MarketplaceAPI.updateListing(id, listingData);
      setListings(prev => prev.map(listing => listing.listingId === id ? response : listing));
      if (listing?.listingId === id) {
        setListing(response);
      }
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update listing';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteListing = async (id: number): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      await MarketplaceAPI.deleteListing(id);
      setListings(prev => prev.filter(listing => listing.listingId !== id));
      if (listing?.listingId === id) {
        setListing(null);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete listing';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const searchListings = async (searchParams: MarketplaceSearchParams): Promise<PaginatedResponse<MarketplaceListing>> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await MarketplaceAPI.searchListings(searchParams);
      setListings(response.data);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to search listings';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFeaturedListings = async (limit?: number): Promise<MarketplaceListing[]> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await MarketplaceAPI.getFeaturedListings(limit);
      setFeaturedListings(response);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch featured listings';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSimilarListings = async (listingId: number, limit?: number): Promise<MarketplaceListing[]> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await MarketplaceAPI.getSimilarListings(listingId, limit);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch similar listings';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addToFavorites = async (listingId: number): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      await MarketplaceAPI.addToFavorites(listingId);
      // Update local state if needed
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to add to favorites';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromFavorites = async (listingId: number): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      await MarketplaceAPI.removeFromFavorites(listingId);
      setFavoriteListings(prev => prev.filter(listing => listing.listingId !== listingId));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to remove from favorites';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFavoriteListings = async (params?: any): Promise<PaginatedResponse<MarketplaceListing>> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await MarketplaceAPI.getFavoriteListings(params);
      setFavoriteListings(response.data);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch favorite listings';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchListingsBySeller = async (sellerId: number, params?: any): Promise<PaginatedResponse<MarketplaceListing>> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await MarketplaceAPI.getListingsBySeller(sellerId, params);
      setListings(response.data);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch seller listings';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    // State
    listings,
    listing,
    featuredListings,
    favoriteListings,
    isLoading,
    error,
    
    // Actions
    fetchListings,
    fetchListing,
    createListing,
    updateListing,
    deleteListing,
    searchListings,
    fetchFeaturedListings,
    fetchSimilarListings,
    addToFavorites,
    removeFromFavorites,
    fetchFavoriteListings,
    fetchListingsBySeller,
  };
};
