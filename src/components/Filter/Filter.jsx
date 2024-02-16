import propTypes from 'prop-types';
import css from 'container.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <form className={css.container}>
      <label>Find contact</label>
      <input
        type="text"
        value={value}
        autoComplete="off"
        placeholder="Search contact"
        onChange={onChangeFilter}
      ></input>
    </form>
  );
};

export default Filter;

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
