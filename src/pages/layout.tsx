import Header from "../components/page/Header";
import Nav from "../components/page/Nav";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledSection = styled.section`
  background-color: #f7f7f8;
  height: 100%;
  padding: 24px;
  border-radius: 15px;
`;

export default function Layout({ children }: Props) {
  return (
    <WrapperDiv>
      <Nav />
      <StyledMain>
        <Header />
        <StyledSection>{children}</StyledSection>
      </StyledMain>
    </WrapperDiv>
  );
}
