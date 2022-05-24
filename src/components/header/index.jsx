import styled from '@emotion/styled';
import { SolidButton } from '@components/button';
import { useHistory, useLocation } from 'react-router-dom';
import SearchBar from '@components/search_bar';
import Checkbox from '@components/check_box';
const HeaderContainer = ({ handleClick, checked }) => {
  const history = useHistory();
  const location = useLocation();
  let home = location.pathname == '/';
  return (
    <HeaderWrapper>
      {home && <Checkbox title="즐겨찾기" checked={checked} onClick={handleClick} />}
      {home || <SolidButton onClick={() => history.goBack()}>뒤로가기</SolidButton>}
    </HeaderWrapper>
  );
};

export default HeaderContainer;

const HeaderWrapper = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  padding: 0px 20px;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  flex-wrap: wrap;
  margin-bottom: 65px;
`;
const Button = styled.button`
  outline: none;
  border: none;
`;
