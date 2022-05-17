import React from 'react';
import styled from '@emotion/styled';
import { color } from '@constants/color';
export const SolidButton = ({ children, onClick }) => {
  return (
    <SolidStyle className="default" onClick={onClick}>
      {children}
    </SolidStyle>
  );
};

const SolidStyle = styled.button`
  font-weight: 500;
  padding: 10px 30px;
  border-radius: 6px;
  border: none;
  outline: none;
  &.disabled {
    cursor: default;
    background-color: ${color.gray[300]};
    color: ${color.gray[500]};
  }
  &.default {
    background-color: ${color.gray[600]};
    cursor: pointer;
    color: ${color.white};

    &:hover {
      background-color: ${color.gray[800]};
    }
    &:active {
      background-color: ${color.gray[900]};
    }
  }
`;
