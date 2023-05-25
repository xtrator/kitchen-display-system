import { getAuth, signOut } from "firebase/auth";
import styled, { css } from "styled-components";

import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { setUserLogOutState, selectUserPhoto } from "../../features/userSlice";
// @ts-ignore
import { setPage, selectPage } from "../../features/pageSlice";

const StyledNav = styled.nav`
  width: 200px;
  padding: 50px;
  padding-right: 45px;
  display: flex;
  flex-direction: column;
  gap: 31px;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  list-style: none;
  font-size: 18px;
`;

const StyledP = styled.p<{ $secondary?: boolean }>`
  font-size: 17px;

  ${(props) =>
    props.$secondary &&
    css`
      font-size: 14px;
      color: #444444;
    `}
`;

const StyledLI = styled.li`
  cursor: pointer;
`;

interface PageState {
  name: string;
}

export default function Nav() {
  const dispatch = useDispatch();
  const userPhoto: string = useSelector(selectUserPhoto);
  const page: PageState = useSelector(selectPage);

  const handleSignOut = () => {
    signOut(getAuth())
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((err) => alert(err.message));
  };

  const handlePageChange = (pageName: string) => {
    dispatch(
      setPage({
        name: pageName,
      })
    );
  };

  return (
    <StyledNav>
      <StyledImage src={userPhoto} alt="profile image of logged user" />
      <StyledDiv>
        <div>
          <StyledP>16 Feb 2022</StyledP>
          <StyledP $secondary>3:44pm</StyledP>
        </div>
        <StyledUL>
          <StyledLI onClick={() => handlePageChange("home")}>
            Home {page.name === "home" && "🟢"}
          </StyledLI>
          <StyledLI onClick={() => handlePageChange("create")}>
            Orders {page.name === "create" && "🟢"}
          </StyledLI>
          <StyledLI>Manage</StyledLI>
        </StyledUL>
      </StyledDiv>
      <button onClick={handleSignOut}>Logout</button>
    </StyledNav>
  );
}
