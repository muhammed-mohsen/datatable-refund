import { useUpdateRefundOrders } from '@/hooks/useRefundOrder';
import { capitalizeFirstLetter } from '@/utils/string';
import React from 'react'
import { RefundOrderStatus, type RefundOrder } from '@/types/refundOrders';
import type { CellContext } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
const refundOrderStatus = Object.values(RefundOrderStatus)
const refundOrderStatusWithCapital =refundOrderStatus.map(status => capitalizeFirstLetter(status))

function RefundOrderStatusColumn({row}:CellContext<RefundOrder, unknown>) {
    const refundOrder = row.original
    const mutation = useUpdateRefundOrders();

    return (
     
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"}   className=" ">
            <span className="sr-only">Open menu</span>
            {capitalizeFirstLetter(refundOrder.decision)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
         {refundOrderStatus.map((status,index) => <DropdownMenuItem key={status} onClick={() => mutation.mutate({ ...refundOrder, decision: status })}>{refundOrderStatusWithCapital[index]}</DropdownMenuItem>)}
        </DropdownMenuContent>
      </DropdownMenu>
    )
}

export default RefundOrderStatusColumn