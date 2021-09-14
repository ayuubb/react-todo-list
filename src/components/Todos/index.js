import PropTypes from 'prop-types';
import styles from './Todos.module.css';
import plusIcon from '../../assets/plus-icon.svg';
import minusIcon from '../../assets/minus-icon.svg';
import classnames from 'classnames';

const Todo = (props) => {
  return (
    <div className={styles.todos}>
      {props.todo.map((todo, index, arr) => {
        return (
          <div
            key={index}
            //   className={`todo ${!(arr.length === index + 1) && `todo__divider`}`}
            className={classnames(styles.todo, {
              [styles.todo__divider]: !(arr.length === index + 1),
            })}
          >
            {todo.title}
            <div className={styles.todo__icon__wrapper}>
              <div className={styles.todo__count}>{todo.count}</div>

              <button onClick={() => props.countingMin(index)} className={styles.todo__action__button}>
                <img src={minusIcon} alt="minus icon" />
              </button>

              <button onClick={() => props.countingAdd(index)} className={styles.todo__action__button}>
                <img src={plusIcon} alt="plus icon" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  countingAdd: PropTypes.func,
  contingMin: PropTypes.func,
};

export default Todo;
