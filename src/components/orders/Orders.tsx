import { useState } from "react";
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
    status: string;
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
  const [filter, setFilter] = useState("");
  if (orders.length === 0)
    return <h1>Looks like you're empty, create your first order.</h1>;

  const filteredOrders = orders.filter((o) => {
    if (filter === "") return o;

    if (o.status === filter) return o;
  });
  return (
    <>
      <div>
        <StyledButton $color={"blue"} onClick={() => setFilter("")}>
          All
        </StyledButton>
        <StyledButton $color={"blue"} onClick={() => setFilter("pending")}>
          Pending
        </StyledButton>
        <StyledButton $color={"blue"} onClick={() => setFilter("preparing")}>
          Preparing
        </StyledButton>
        <StyledButton $color={"blue"} onClick={() => setFilter("completed")}>
          Completed
        </StyledButton>
        <StyledButton $color={"blue"} onClick={() => setFilter("cancelled")}>
          Cancelled
        </StyledButton>
      </div>
      <OrdersWrapper>
        {filteredOrders.map((order) => {
          /* @ts-ignore */
          return <Order order={order} key={order.docId} />;
        })}
      </OrdersWrapper>
    </>
  );
}
