import React, {FC, ChangeEvent, useState} from 'react';
import { useSelector } from 'react-redux';
import { Container } from './style.js';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import {RootState} from '../redux/config/configStore';

const Home = () => {
  // 투두리스트

  return (
    <Container>
      <Header />
      <Form />
      <TodoList isDone={true}  />
      <TodoList isDone={false} />
    </Container>
  );
};

export default Home;
