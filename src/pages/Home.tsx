// @ts-ignore
import { app } from "../../firebase-config.js";

import Layout from "./layout";
import { styled } from "styled-components";
import orderData from "../data/orders.json";
import Orders from "../components/orders/Orders";

import { useSelector } from "react-redux";
// @ts-ignore
import { selectUserName } from "../features/userSlice";
import Signup from "./Signup.js";

const StyledMain = styled.main`
  background-color: white;
  height: 100%;
  border-radius: 50px;
  box-shadow: -1px 1px 5px #ababab;
  padding: 40px;
`;

export default function Home() {
  app;
  const orders = orderData.orders;
  const userName = useSelector(selectUserName);

  if (!userName) return <Signup />;

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
