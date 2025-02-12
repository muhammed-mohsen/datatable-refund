"use client"
import { LoadingSpinner } from '@/components/Common/LoadingSpinner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { useRefundOrderDetails } from '@/hooks/useRefundOrder'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
  const params = useParams<{ id: string }>();
  const { data, isLoading, error } = useRefundOrderDetails(params.id);


  if (isLoading) {
    return <LoadingSpinner />
  }
  if (error)
    return <div>something went wrong</div>
  return (
    <Card >
      <CardHeader>
        <CardTitle>Refund Order</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className='w-[800px]  border' >
          <TableBody>
            <TableRow>
              <TableCell>Refund ID</TableCell>
              <TableCell>{data?.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Store Name</TableCell>
              <TableCell>{data?.store_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Store Logo</TableCell>
              <TableCell>{data?.store_logo}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Decision</TableCell>
              <TableCell>{data?.decision}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Active</TableCell>
              <TableCell>{data?.active ? "Active" : "Inactive"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Items</TableCell>
              <TableCell>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  {data?.items.map((item) => (
                    <li key={item.id}>
                      {item.name}, {item.price}, {item.quantity}
                    </li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>

      </CardContent>

    </Card>
  )
}

export default page