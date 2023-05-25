import { SyntheticEvent, useState, useRef } from "react";
import Order from "../components/orders/Order";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
// @ts-ignore
import { db } from "../../firebase-config.js";
import { useSelector } from "react-redux";
// @ts-ignore
import { selectUserEmail } from "../features/userSlice";

const Wrapper = styled.div`
  display: flex;
  gap: 10%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function Create() {
  const [order, setOrder] = useState({
    products: [],
    orderId: 0,
    orderTime: "3.30",
    estimate: 30,
    table: 0,
  });

  const userEmail = useSelector(selectUserEmail);

  const formRef = useRef<HTMLFormElement>();

  function handleAddProduct(e: SyntheticEvent) {
    e.preventDefault();
    e.stopPropagation();

    setOrder((o: any) => {
      if (!formRef.current) return;

      return {
        ...o,
        products: [
          ...o.products,
          {
            name: formRef.current.product.value,
            quantity: formRef.current.quantity.value,
            instructions: formRef.current.instructions.value.split(","),
          },
        ],
      };
    });
  }

  function handleOrderSubmit(e: SyntheticEvent) {
    e.preventDefault();

    addDoc(collection(db, "Orders"), {
      ...order,
      status: "pending",
      userEmail: userEmail,
    })
      .then(() => {
        alert("Order Created");
        setOrder({
          products: [],
          orderId: 0,
          orderTime: "3.30",
          estimate: 30,
          table: 0,
        });
      })
      .catch((err) => alert(err.message));
  }

  return (
    <Wrapper>
      {/* @ts-ignore */}
      <Order order={order} />
      {/* @ts-ignore */}
      <StyledForm ref={formRef} onSubmit={(e) => handleOrderSubmit(e)}>
        <label htmlFor="quantity">
          Quantity
          <input type="number" name="quantity" placeholder="0"></input>
        </label>
        <label htmlFor="product">
          Product
          <input type="text" name="product" placeholder="Chicken Wings"></input>
        </label>
        <label htmlFor="instructions">
          Instructions
          <input
            type="text"
            name="instructions"
            placeholder="No Mayo, No Ketchup"
          ></input>
        </label>
        <button onClick={(e) => handleAddProduct(e)}>Add product</button>
        <button type="submit">Create Order</button>
      </StyledForm>
    </Wrapper>
  );
}
