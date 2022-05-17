import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';

const BottomSheet = ({ title, children }) => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const ref = useRef();
  const onButtonClick = () => {
    setShowBottomSheet(!showBottomSheet);
  };
  return (
    <Container show={showBottomSheet}>
      <HeaderButton show={showBottomSheet} onClick={onButtonClick}>
        {title}
      </HeaderButton>
      <BottomSheetContainer ref={ref} height={ref?.current?.scrollHeight} show={showBottomSheet}>
        <ContentWrapper>{children}</ContentWrapper>
      </BottomSheetContainer>
    </Container>
  );
};

export default BottomSheet;
const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 20px;
  left: 20px;
  bottom: ${({ show }) => (show ? '0px' : '20px')};
  transition: bottom ease 0.5s;
`;
const HeaderButton = styled.button`
  background-color: #9cc0f9;
  color: white;
  width: 80px;
  padding: 8px;
  padding-left: 50px;
  border-radius: ${props => (props.show ? '12px 12px 0px 0px' : '12px')};
  border: none;
  box-shadow: ${props => (props.show ? 'none' : 'inset 3px 3px 8px rgba(0, 0, 0, 0.1);')};
`;
const ButtonImg = styled.img`
  width: 20px;
  height: 20px;
`;
const ContentWrapper = styled.div`
  background-color: #9cc0f9;
  padding: 10px 10px;
  color: white;
  border-radius: 12px 0px 12px 12px;
`;
const BottomSheetContainer = styled.div`
  height: ${({ show, height }) => (show ? `${height}px` : '0px')};
  overflow: ${({ show }) => !show && 'hidden'};
  transition: height ease 0.3s;
`;
