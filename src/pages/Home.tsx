// @ts-ignore
import { app, db } from "../../firebase-config.js";

import Layout from "./layout";
import { styled } from "styled-components";
// import orderData from "../data/orders.json";
import Orders from "../components/orders/Orders";

import { useSelector } from "react-redux";
// @ts-ignore
import { selectUserName, selectUserEmail } from "../features/userSlice";
// @ts-ignore
import { selectPage } from "../features/pageSlice";
import Signup from "./Signup.js";
import Create from "./Create.js";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";

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
  const [orders, setOrders] = useState([]);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const page: PageState = useSelector(selectPage);

  useEffect(() => {
    const q = query(
      collection(db, "Orders"),
      where("userEmail", "==", userEmail)
    );
    return onSnapshot(q, (snapshot) => {
      setOrders([]);
      snapshot.docs.forEach((doc) => {
        // @ts-ignore
        setOrders((o) => [
          ...o,
          {
            ...doc.data(),
            docId: doc.ref,
          },
        ]);
      });
    });
  }, [userEmail]);

  if (!userName) return <Signup />;

  return (
    <Layout>
      <StyledMain>
        {page.name === "home" && <Orders orders={orders} />}
        {page.name === "create" && <Create />}
      </StyledMain>
    </Layout>
  );
}
