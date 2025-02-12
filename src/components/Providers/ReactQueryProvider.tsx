'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { PropsWithChildren } from 'react'
import React, { useState } from 'react'

interface Props extends PropsWithChildren{}
export default function ReactQueryProvider({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
          {children}
            <ReactQueryDevtools  />

     </QueryClientProvider>
  )
}