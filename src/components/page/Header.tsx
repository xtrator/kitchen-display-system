import { styled } from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 124px;
  padding-right: 78px;
`;

const StyledH1 = styled.h1`
  font-size: 36px;
`;

export default function Header() {
  return (
    <StyledWrapper>
      <StyledH1>☀️ Good Morning</StyledH1>
      <p>🔔</p>
    </StyledWrapper>
  );
}
