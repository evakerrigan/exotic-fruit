import { ExecSyncOptionsWithBufferEncoding } from "child_process";

/** @deprecated */
export type TempAny = any;

export interface ProductDTO {
  id: string,
  categoryCode: string,
  title: string,
  url: string;
  price: string
}

export interface BasketState {
  products: Record<ProductDTO['id'], number>
}

