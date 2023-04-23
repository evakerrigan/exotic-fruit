import { ProductDto } from "../dto/ProductDto";

export interface BasketState {
  products: Record<ProductDto['id'], number>
}