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
  return (
    <OrdersWrapper>
      {orders.map((order) => {
        return <Order order={order} key={order.orderId} />;
      })}
    </OrdersWrapper>
  );
}
