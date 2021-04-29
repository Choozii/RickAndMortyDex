import React, { useState } from "react";
import CheckedIcon from "../assets/images/icon_checked.svg";
import UnCheckedIcon from "../assets/images/icon_unchecked.svg";
import styles from './FilteringToggle.module.css';
import SearchInput from "./SearchInput";

const FilteringToggle = ({ handleClick, checked }) => {
  let imgSrc = checked ? CheckedIcon : UnCheckedIcon;
 

  return (
    <div className={styles.header}>
      <button className={styles.checkboxImage} onClick={handleClick}>
        <img src={imgSrc} alt="버튼 : 체크박스" />
      </button>
      <div className={styles.checkboxLabel}>BOOKMARK</div>
      <SearchInput/>
    </div>
  );
};

export default FilteringToggle;
