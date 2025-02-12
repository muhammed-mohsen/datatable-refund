import React from 'react'
import { LoadingSpinner } from '../Common/LoadingSpinner'

export function DataTableLoading() {
  return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> <LoadingSpinner /></div>
}
