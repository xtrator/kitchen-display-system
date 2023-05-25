import Order from "./Order";
import styled, { css } from "styled-components";

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

const StyledButton = styled.button<{ $color?: string }>`
  min-width: 116px;
  min-height: 34px;
  border: none;
  color: white;
  cursor: pointer;

  ${(props) =>
    props.$color &&
    css`
      background-color: ${props.$color};
    `}
`;

export default function Orders({ orders }: Props) {
  if (orders.length === 0)
    return <h1>Looks like you're empty, create your first order.</h1>;
  return (
    <>
      <div>
        <StyledButton $color={"blue"}>All</StyledButton>
        <StyledButton $color={"blue"}>Pending</StyledButton>
        <StyledButton $color={"blue"}>Preparing</StyledButton>
        <StyledButton $color={"blue"}>Completed</StyledButton>
        <StyledButton $color={"blue"}>Cancelled</StyledButton>
      </div>
      <OrdersWrapper>
        {orders.map((order) => {
          /* @ts-ignore */
          return <Order order={order} key={order.docId} />;
        })}
      </OrdersWrapper>
    </>
  );
}
