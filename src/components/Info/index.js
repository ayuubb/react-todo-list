import PropTypes from 'prop-types';
import styles from './Info.module.css';

const Info = (props) => {
  return (
    <div className={styles.info}>
      <div className={styles.info__total}>
        <p>{`Total List : ${props.todoLength}`}</p>
      </div>

      <button onClick={props.onDelete} className={styles.delete__button}>
        Delete All List
      </button>
    </div>
  );
};

Info.propsTypes = {
  todoLength: PropTypes.number,
  onDelete: PropTypes.func,
};

export default Info;
