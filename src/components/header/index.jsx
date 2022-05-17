import styled from '@emotion/styled';
import { SolidButton } from '@components/button';
import { useHistory } from 'react-router-dom';

const HeaderContainer = ({ children }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};

export default HeaderContainer;

export const BackBtnHeader = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <SolidButton onClick={() => history.goBack()}>뒤로가기</SolidButton>
    </HeaderContainer>
  );
};

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
  min-height: 65px;
  flex-wrap: wrap;
  margin-bottom: 65px;
`;
const Button = styled.button`
  outline: none;
  border: none;
`;
