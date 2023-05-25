import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
// @ts-ignore
import { setActiveUser } from "../features/userSlice";

const WrapperDiv = styled.div`
  display: flex;
  padding: 25px 22px;
  height: 100vh;
`;

const StyledDiv = styled.div`
  background-color: #3998ff;
  height: 100%;
  width: 512px;
  padding: 0px 0px 0px 98px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
`;

const StyledP = styled.p`
  font-size: 48px;
  color: white;
`;

const StyledSpan = styled.span`
  opacity: 0.5;
`;

const StyledButton = styled.button`
  font-size: 18px;
  outline: none;
  background-color: white;
  border: none;
  width: 231px;
  height: 51px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
    color: white;
  }
`;
export default function Signup() {
  const dispatch = useDispatch();

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
  return (
    <WrapperDiv>
      <StyledDiv>
        <StyledP>
          Start managing <StyledSpan>your orders</StyledSpan>
        </StyledP>
        <StyledButton onClick={handleSignIn}>Log in with Google</StyledButton>
      </StyledDiv>
    </WrapperDiv>
  );
}
