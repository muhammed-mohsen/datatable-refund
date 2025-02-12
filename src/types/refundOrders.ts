export type RefundOrder = {
  id: string,
  reason: string
  store_name: string
  store_logo: string
  store_url: string
  amount: number
  active: boolean
  decision: RefundOrderStatus
  items: Product[]
}
export enum RefundOrderStatus {
  ESCALATE = 'escalate',
  ACCEPT = 'accept',
  REJECT = 'reject',
}

export type Product =  {
  name: string
  id: string
  price: number
  quantity: number
}