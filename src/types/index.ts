import type { T } from "vitest/dist/chunks/environment.d8YfPkTm.js";
import { number } from "zod";


export type ResponseWithPagination<T> = {
  data: T[]; 
   first: number,
   prev: number|null,
   next: number|null,
   last: number,
   pages:number,
   items:number,
}