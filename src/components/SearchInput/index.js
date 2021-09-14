import PropTypes from 'prop-types';
import styles from './SearchInput.module.css';

const SearchInput = (props) => {
  return (
    <form action="" className={styles.form} onSubmit={props.onSubmit}>
      <input onChange={props.onChange} value={props.value} type="text" className={styles.input} placeholder="List" />
      <button className={styles.add__button} type="submit">
        add
      </button>
    </form>
  );
};

SearchInput.propsType = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SearchInput;
