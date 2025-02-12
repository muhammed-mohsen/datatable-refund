import type { RefundOrder } from '@/types/refundOrders'
import type { CellContext } from '@tanstack/react-table'
import React from 'react'
import { Switch } from '../ui/switch'
import { useUpdateRefundOrders } from '@/hooks/useRefundOrder';

function ActiveColumn({row}:CellContext<RefundOrder, unknown>) {
  const mutation = useUpdateRefundOrders();
  const refundOrder = row.original

  return (
    <div className="flex items-center space-x-2 ">
      <Switch className='cursor-pointer' onCheckedChange={(val) => mutation.mutate({ ...refundOrder, active: val })} checked={row.original.active} id="airplane-mode" />
    </div>
  )
}

export default ActiveColumn