import Layout from "./layout";
import { styled } from "styled-components";

const StyledMain = styled.main`
  background-color: white;
  height: 100%;
  border-radius: 50px;
  box-shadow: -1px 1px 5px #ababab;
`;

export default function Home() {
  return (
    <Layout>
      <StyledMain></StyledMain>
    </Layout>
  );
}
