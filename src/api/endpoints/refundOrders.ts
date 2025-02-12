import type {  RefundOrder } from "@/types/refundOrders";
import api from "../api";
import type {  ResponseWithPagination } from "@/types";
import type { PaginationState } from "@tanstack/react-table";

export const refundOrderApi={
  getAll: (pagination:PaginationState): Promise<ResponseWithPagination<RefundOrder>>=>api.get(`/orders?_page=${pagination.pageIndex+1}&_per_page=${pagination.pageSize}`),
  getById: (id:string): Promise<RefundOrder>=>api.get(`/orders/${id}`),
  update: (id:string,value:Partial<RefundOrder>): Promise<RefundOrder>=>api.put(`/orders/${id}`,value),
}


export default refundOrderApi;
