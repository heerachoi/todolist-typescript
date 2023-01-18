import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TodoContainer = styled.section`
  border-radius: 12px;
  padding: 15px 25px;
  width: 280px;
  height: 150px;
  margin: 20px;
  background-color: #d2d3fb;
`;

export const TodoTitle = styled.h2`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 16px;
  display: inline-block;
  width: 280px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TodoContext = styled.div`
  font-size: 14px;
  height: 35px;
  margin-bottom: 17px;
  display: inline-block;
  width: 280px;
  white-space: wrap;
  overflow: hidden;
  /* 여러 줄 자르기 추가 스타일 */
  white-space: normal;
  line-height: 1.2;
  height: 2.4em;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const TodoListButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const DetailsButton = styled(Link)`
  text-decoration: none;
  color: blue;
  font-size: 14px;
  &:hover {
    color: black;
  }
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: 1.5px solid red;
  border-radius: 15px;
  font-size: 14px;
  width: 60px;
  cursor: pointer;
  &:hover {
    background: #fff;
  }
`;

export const DoneButton = styled.button`
  background-color: transparent;
  border: 1.5px solid green;
  padding: 5px 4px;
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
  width: 60px;
  &:hover {
    background: #fff;
  }
`;
