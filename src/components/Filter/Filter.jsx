import PropTypes from 'prop-types';
import css from './Filter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectorFilter } from '../../redux/selectors';

export function Filter() {
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  return (
    <label className={css.name}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        onChange={handleChange}
        value={filter}
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};
