import { useState, useRef, FunctionComponent } from 'react';
import { TodoType } from '../Form/Form.js';
import { useNavigate } from 'react-router-dom';

import { Wrapper, DetailsContainer, DetailsTop, ReturnButton, DetailsBottom, InputTitle, Line, TodoContext } from './style.js';

const TodoDetails: FunctionComponent<TodoType> = ({ id, inputTitle, input, isDone }: TodoType) => {
  const navigate = useNavigate();

  // 이전 페이지 이동 핸들러
  const previousPageHanlder = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <DetailsContainer>
        <DetailsTop>
          ID : {id}
          <ReturnButton onClick={previousPageHanlder}>이전으로</ReturnButton>
        </DetailsTop>
        <DetailsBottom>
          <InputTitle>{inputTitle}</InputTitle>
          <Line></Line>
          <TodoContext>{input}</TodoContext>
        </DetailsBottom>
      </DetailsContainer>
    </Wrapper>
  );
};

export default TodoDetails;
