import React from "react";
import CheckedIcon from "../assets/images/icon_checked.svg";
import UnCheckedIcon from "../assets/images/icon_unchecked.svg";
import styles from './FilteringToggle.module.css';

const FilteringToggle = ({ handleClick, checked }) => {
  let imgSrc = checked ? CheckedIcon : UnCheckedIcon;
  return (
    <div className={styles.header}>
      <button className={styles.checkbox_image} onClick={handleClick}>
        <img src={imgSrc} alt="버튼 : 체크박스" />
      </button>
      <div className={styles.checkbox_label}>Bookmarked</div>
    </div>
  );
};

export default FilteringToggle;
