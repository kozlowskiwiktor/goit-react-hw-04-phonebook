import propTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <form>
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
