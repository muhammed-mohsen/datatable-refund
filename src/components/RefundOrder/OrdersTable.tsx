'use client'
import React, { useState } from 'react'
import { DataTable } from '../Table/DataTable'
import { useRefundOrders } from '@/hooks/useRefundOrder';
import { columns } from './columns';
import type { PaginationState } from '@tanstack/react-table';
import { BreadcrumbWithCustomSeparator } from '../Common/BreadCrumb';

function OrdersTable() {
  const [pagination,setPagination]=useState<PaginationState>({pageIndex:0,pageSize:13});
  const {data, isLoading,error}=useRefundOrders(pagination);

  // if(!data&&isLoading) return <div>Loading...</div>
  if(error) return <div>something went wrong</div>
  
  return (
    <div className="container  mx-auto py-10">
    <DataTable isLoading={isLoading} pagination={{setPagination,total:data?.last||0,state:pagination}} columns={columns} data={data?.data||[]} />
</div>
  )
}

export default OrdersTable