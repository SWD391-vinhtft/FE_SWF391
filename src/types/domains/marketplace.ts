import { Item } from './items';
import { User } from './auth';

// Marketplace Enums
export enum ListingType {
  SALE = 'SALE',
  RENTAL = 'RENTAL',
  SWAP = 'SWAP'
}

export enum ListingStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SOLD = 'SOLD',
  EXPIRED = 'EXPIRED'
}

// Marketplace Listing Interface
export interface MarketplaceListing {
  listingId: number;
  item: Item;
  seller: User;
  listingType: ListingType;
  price?: number;
  rentalPricePerDay?: number;
  title: string;
  description?: string;
  status: ListingStatus;
  tags?: string[];
  createdAt: string;
  expiresAt?: string;
}

// Marketplace Request Types
export interface CreateListingRequest {
  itemId: number;
  listingType: ListingType;
  title: string;
  description?: string;
  price?: number;
  rentalPricePerDay?: number;
  tags?: string[];
  expiresAt?: string;
}

export interface UpdateListingRequest extends Partial<CreateListingRequest> {
  status?: ListingStatus;
}

// Search and Filter Types
export interface MarketplaceFilters {
  listingType?: ListingType[];
  status?: ListingStatus[];
  minPrice?: number;
  maxPrice?: number;
  categories?: number[];
  brands?: number[];
  sizes?: string[];
  colors?: string[];
  condition?: number[];
  location?: string;
  tags?: string[];
}

export interface MarketplaceSearchParams extends MarketplaceFilters {
  query?: string;
  page?: number;
  limit?: number;
  sortBy?: 'createdAt' | 'price' | 'title';
  sortOrder?: 'asc' | 'desc';
}
