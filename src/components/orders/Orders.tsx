import Order from "./Order";
import styled from "styled-components";

interface Props {
  orders: {
    products: {
      name: string;
      quantity: number;
      instructions: string[];
    }[];
    orderId: number;
    orderTime: string;
    estimate: number;
    table: number;
  }[];
}

const OrdersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 20px;
`;

export default function Orders({ orders }: Props) {
  if (orders.length === 0)
    return <h1>Looks like you're empty, create your first order.</h1>;
  return (
    <OrdersWrapper>
      {orders.map((order) => {
        /* @ts-ignore */
        return <Order order={order} key={order.orderId} />;
      })}
    </OrdersWrapper>
  );
}
