import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { selectUserName } from "../../features/userSlice";

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
  const userName: string = useSelector(selectUserName);
  return (
    <StyledWrapper>
      <StyledH1>☀️ Good Morning, {userName}</StyledH1>
      <p>🔔</p>
    </StyledWrapper>
  );
}
