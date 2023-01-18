import { FunctionComponent } from 'react';
import { useAppSelector } from '../../hooks/useRedux';

import TodoItem from '../TodoItem/TodoItem';
import { TodoListWarp, ListTitle, TodoItemWrap } from './style';

interface PropsType {
  isDone: boolean;
}

// Todo 리스트
const TodoList: FunctionComponent<PropsType> = ({ isDone }: PropsType) => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <TodoListWarp>
      <ListTitle>{isDone ? '🎉 DONE 🎉' : '🔥 WORKING 🔥'}</ListTitle>
      <TodoItemWrap>
        {todos
          .filter((item) => item.isDone === isDone)
          .map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
      </TodoItemWrap>
    </TodoListWarp>
  );
};

export default TodoList;
