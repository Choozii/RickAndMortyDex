import CheckedIcon from '@assets/images/icon_checked.svg';
import UnCheckedIcon from '@assets/images/icon_unchecked.svg';
import styled from '@emotion/styled';

const Checkbox = ({ title, checked, handleClick }) => {
  let imgSrc = checked ? CheckedIcon : UnCheckedIcon;
  return (
    <CheckBoxWrapper>
      <Button src={imgSrc} onClick={handleClick} alt="버튼 : 체크박스" />
      <Label>{title}</Label>
    </CheckBoxWrapper>
  );
};

export default Checkbox;

const Button = styled.img`
  all: unset;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const CheckBoxWrapper = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`;
const Label = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
`;
