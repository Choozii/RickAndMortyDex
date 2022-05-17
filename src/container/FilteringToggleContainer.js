import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterToggle } from '../redux/actions/itemActions';
import FilteringToggle from '@components/header/index';

const FilteringToggleContainer = () => {
  const dispatch = useDispatch();
  const checked = useSelector(state => state.itemList.filter);
  const handleClick = () => dispatch(setFilterToggle());

  return <FilteringToggle handleClick={handleClick} checked={checked} />;
};

export default FilteringToggleContainer;
