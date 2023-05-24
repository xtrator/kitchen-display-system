import Layout from "./layout";
import { styled } from "styled-components";
import orderData from "../data/orders.json";
import Orders from "../components/orders/Orders";

const StyledMain = styled.main`
  background-color: white;
  height: 100%;
  border-radius: 50px;
  box-shadow: -1px 1px 5px #ababab;
  padding: 40px;
`;

export default function Home() {
  const orders = orderData.orders;
  return (
    <Layout>
      <StyledMain>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <Orders orders={orders} />
      </StyledMain>
    </Layout>
  );
}
