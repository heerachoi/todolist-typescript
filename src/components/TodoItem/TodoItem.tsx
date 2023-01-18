import { FunctionComponent } from 'react';
import { useAppDispatch } from '../../hooks/useRedux';

import { useDispatch } from 'react-redux';
import { toggleDone, deleteTodo } from '../../redux/modules/todos';
import { TodoContainer, TodoContext, TodoTitle, TodoListButtons, ButtonWrapper, DetailsButton, DeleteButton, DoneButton } from './style';
import { TodoType } from '../Form/Form';

interface ItemProps {
  item: TodoType;
}

const TodoItem: FunctionComponent<ItemProps>  = ({ item }: ItemProps) => {
  const dispatch = useDispatch();

  // 완료 버튼이 onClick되면 실행되는 부분
  const toggleDoneHandler = (id: string) => {
    dispatch(toggleDone({ id }));
  };

  // 삭제 버튼이 onClick되면 실행되는 부분
  const deleteTodoHandler = (id: string) => {
    if (window.confirm('해당 목록을 정말 삭제하시겠습니까?')) {
      dispatch(deleteTodo({ id }));
    }
  };

  return (
    <TodoContainer>
      <TodoTitle>📍 {item.inputTitle}</TodoTitle>
      <TodoContext>{item.input}</TodoContext>
      <TodoListButtons>
        <DetailsButton to={`/${item.id}`}>상세보기</DetailsButton>
        <ButtonWrapper>
          <DeleteButton onClick={() => deleteTodoHandler(item.id)}>삭제</DeleteButton>
          <DoneButton onClick={() => toggleDoneHandler(item.id)}>{item.isDone ? '취소' : '완료'} </DoneButton>
        </ButtonWrapper>
      </TodoListButtons>
    </TodoContainer>
  );
};

export default TodoItem;
