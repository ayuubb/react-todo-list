import PropTypes from 'prop-types';
import styles from './Todos.module.css';
import trashIcon from '../../assets/bx-trash.svg';
import classnames from 'classnames';

const Todo = (props) => {
  return (
    <div className={styles.todos}>
      {props.todo.map((todo, index, arr) => {
        return (
          <div
            key={index}
            className={classnames(styles.todo, {
              [styles.todo__divider]: !(arr.length === index + 1),
            })}
          >
            {todo.title}
            <button onClick={() => props.erase(index)} className={styles.todo__action__button}>
              <img src={trashIcon} alt="erase" />
            </button>
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
  erase: PropTypes.func,
};

export default Todo;
