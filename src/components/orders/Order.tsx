import styled, { css } from "styled-components";

interface Props {
  order: {
    products: {
      name: string;
      quantity: number;
      instructions: string[];
    }[];
    orderId: number;
    orderTime: string;
    estimate: number;
    table: number;
  };
}

const WrapperElement = styled.div`
  width: 343px;
  height: 491px;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 24px 41px 13px 10px;
  gap: 36px;
  position: relative;
`;

const MetaDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MetaP = styled.p`
  display: flex;
  flex-direction: column;
`;

const MetaSpan = styled.span<{ $secondary?: boolean }>`
  font-size: 18px;

  ${(props) =>
    props.$secondary &&
    css`
      font-size: 12px;
    `}
`;

const ProductP = styled.p`
  font-size: 24px;
`;

const ProductUL = styled.ul`
  list-style: none;
  font-size: 14px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  height: 600px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

export default function Order({ order }: Props) {
  return (
    <WrapperElement key={order.orderId}>
      <MetaDiv>
        <MetaP>
          <MetaSpan>Order {order.orderId}</MetaSpan>
          <MetaSpan $secondary>Order time: {order.orderTime}</MetaSpan>
        </MetaP>
        <MetaP>
          <MetaSpan>Table: {order.table}</MetaSpan>
          <MetaSpan $secondary>Estimate: {order.estimate} min</MetaSpan>
        </MetaP>
      </MetaDiv>
      <ProductsWrapper>
        {order.products.map((p) => {
          return (
            <ProductWrapper key={p.name + p.instructions.join()}>
              <ProductP>
                {p.quantity} {p.name}
              </ProductP>
              <ProductUL>
                {p.instructions.map((ins) => {
                  return <li key={ins}>{ins}</li>;
                })}
              </ProductUL>
            </ProductWrapper>
          );
        })}
      </ProductsWrapper>
      <ButtonsWrapper>
        <StyledButton $color="#1AD285">Spike</StyledButton>
        <StyledButton $color="#FF7979">Push</StyledButton>
      </ButtonsWrapper>
    </WrapperElement>
  );
}
