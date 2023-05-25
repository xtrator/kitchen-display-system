// @ts-ignore
import { app } from "../../firebase-config.js";

import Layout from "./layout";
import { styled } from "styled-components";
// import orderData from "../data/orders.json";
import Orders from "../components/orders/Orders";

import { useSelector } from "react-redux";
// @ts-ignore
import { selectUserName } from "../features/userSlice";
// @ts-ignore
import { selectPage } from "../features/pageSlice";
import Signup from "./Signup.js";

const StyledMain = styled.main`
  background-color: white;
  height: 100%;
  border-radius: 50px;
  box-shadow: -1px 1px 5px #ababab;
  padding: 40px;
`;

interface PageState {
  name: string;
}

export default function Home() {
  app;
  const orders: Array<any> = [];
  const userName = useSelector(selectUserName);
  const page: PageState = useSelector(selectPage);

  if (!userName) return <Signup />;

  return (
    <Layout>
      <StyledMain>
        {page.name === "home" && <Orders orders={orders} />}
        {page.name === "create" && <h1>Hello World</h1>}
      </StyledMain>
    </Layout>
  );
}
