export const HOME = `/`;
export const REFUND_ORDERS = `/refund-orders`;
export const REFUND_ORDERS_DETAILS=(id:string)=> `/refund-orders/${id}`;
export const hasRoute = (path:string,route: string) => {
  if(route==="/")
  return path==="/"
  return  path.includes( route)
}