import { app, db } from "../../firebase-config.js";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";

import Layout from "./layout";
import { styled } from "styled-components";
import orderData from "../data/orders.json";
import Orders from "../components/orders/Orders";

import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserEmail,
  selectUserName,
} from "../features/userSlice";

const StyledMain = styled.main`
  background-color: white;
  height: 100%;
  border-radius: 50px;
  box-shadow: -1px 1px 5px #ababab;
  padding: 40px;
`;

export default function Home() {
  const firebaseApp = app;
  const orders = orderData.orders;
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
          userPhoto: result.user.photoURL || "/profile.jpeg",
        })
      );
    });
  };

  if (!userName) return <button onClick={handleSignIn}>Log in</button>;
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
