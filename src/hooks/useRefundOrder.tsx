import { refundOrderApi } from "@/api";
import type {  ResponseWithPagination } from "@/types";
import type { RefundOrder } from "@/types/refundOrders";
import { ReactQueryOptions } from "@/utils/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { PaginationState } from "@tanstack/react-table";

export const useRefundOrders = (pagination:PaginationState) => {
  return useQuery<ResponseWithPagination<RefundOrder>, Error>({queryKey: ["orders",{pagination}], queryFn: () => refundOrderApi.getAll(pagination), ...ReactQueryOptions});
};
export const useRefundOrderDetails = (id:string) => {
  return useQuery<RefundOrder, Error>({queryKey: [`orders/${id}`], queryFn: () => refundOrderApi.getById(id), ...ReactQueryOptions});
};
export const useUpdateRefundOrders = () => {
  const queryClient = useQueryClient();
  return useMutation({mutationFn: ({id,...updatedData}:{id:string}&Partial<RefundOrder>) => refundOrderApi.update(id!,updatedData), onSuccess:(res)=>{
    queryClient.invalidateQueries({queryKey: ["orders"],exact:false});

  },

});
};