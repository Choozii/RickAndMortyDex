import styled from '@emotion/styled';

const HeaderContainer = ({ children }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};

export default HeaderContainer;

const HeaderWrapper = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  padding: 0 20px;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  margin-bottom: 65px;
`;
