import { User } from './auth';

// Item Status Enum
export enum ItemStatus {
  OWNED = 'OWNED',
  LISTED = 'LISTED',
  RENTED = 'RENTED',
  SOLD = 'SOLD',
  RECYCLED = 'RECYCLED'
}

// Category and Brand Types
export interface Category {
  categoryId: number;
  name: string;
  description?: string;
}

export interface Brand {
  brandId: number;
  name: string;
  description?: string;
  sustainabilityRating?: number;
}

// Item Interface
export interface Item {
  itemId: number;
  category?: Category;
  brand?: Brand;
  owner: User;
  currentHolder?: User;
  name: string;
  description?: string;
  size?: string;
  color?: string;
  conditionRating?: number;
  conditionDescription?: string;
  purchaseDate?: string;
  originalPrice?: number;
  currentStatus: ItemStatus;
  location?: string;
  images?: string[];
  materialComposition?: { [key: string]: number };
  careInstructions?: string;
  sustainabilityMetrics?: { [key: string]: any };
  rfidTag?: string;
  qrCode?: string;
  sku?: string;
  createdAt: string;
  updatedAt: string;
}

// Item Request Types
export interface CreateItemRequest {
  name: string;
  description?: string;
  categoryId?: number;
  brandId?: number;
  size?: string;
  color?: string;
  conditionRating?: number;
  conditionDescription?: string;
  purchaseDate?: string;
  originalPrice?: number;
  location?: string;
  images?: string[];
  materialComposition?: { [key: string]: number };
  careInstructions?: string;
  sustainabilityMetrics?: { [key: string]: any };
}

export interface UpdateItemRequest extends Partial<CreateItemRequest> {
  currentStatus?: ItemStatus;
}
