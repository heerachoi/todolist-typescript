import { useRef, ChangeEvent, FormEvent, FunctionComponent } from 'react';


import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../redux/modules/todos';
import { TodoForm, InputGroup, ButtonAdd, TaskInput, Title } from './style.js';

export interface TodoType {
  id: string;
  inputTitle: string;
  input: string;
  isDone: boolean;
}

const Form: FunctionComponent = () => {
  const [inputTitle, setInputTitle] = useState<string>('');
  const [input, setInput] = useState<string>('');
   const checkTitle = useRef<HTMLInputElement | null>(null);
  const checkContent = useRef<HTMLInputElement | null>
  const dispatch = useDispatch();

  // 제목이 입력 되었을 경우 onChange로 실행되는 부분
  const onInputTitleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInputTitle(event.target.value);
  };

  // 내용이 입력 되었을 경우 onChange로 실행되는 부분
  const onInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  //  onSubmit로 실행되는 부분
  const onFormSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 입력 값 체크
    if (!inputTitle || !input) {
      return alert('제목 또는 내용이 입력되지 않았습니다.');
    }
    dispatch(
      addTodo({
        id: Math.random(),
        inputTitle,
        input,
        isDone: false,
      })
    );
    setInputTitle('');
    setInput('');
  };

  return (
    <TodoForm>
      <form onSubmit={onFormSubmit}>
        <InputGroup>
          <Title>제목</Title>
          <TaskInput type='text' value={inputTitle} name='text' onChange={onInputTitleChange} />
          <Title>내용</Title>
          <TaskInput type='text' value={input} name='text' onChange={onInputChange} />
          <ButtonAdd type='submit'>+</ButtonAdd>
        </InputGroup>
      </form>
    </TodoForm>
  );
};

export default Form;
