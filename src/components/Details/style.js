import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8385f6;
`;

export const DetailsContainer = styled.div`
  width: 600px;
  background-color: #d2d3fb;
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 30px;
`;

export const DetailsTop = styled.div`
  display: flex;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
`;

export const ReturnButton = styled.button`
  border: 1.5px solid #8385f6;
  height: 40px;
  width: 80px;
  background-color: transparent;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgb(255, 255, 255);
    scale: 1.1;
  }
`;

export const DetailsBottom = styled.div``;

export const InputTitle = styled.h2``;

export const Line = styled.div`
  border: 1px solid rgb(233, 233, 233);
  width: 100%;
  margin: 20px 0;
  border-radius: 20px;
`;

export const TodoContext = styled.div`
  font-size: 14px;
`;
