import {useParams} from 'react-router-dom';
import TodoDetails from '../components/Details/TopdoDetails';
import { useAppSelector } from '../hooks/useRedux';

const Details = () => {
  const {todos} = useAppSelector((state) => state.todos);
  const param = useParams();

  // id와 일치하는 투두 
  const todo = todos.find((item) => item?.id === param?.id);


  return <TodoDetails id={todo?.id ?? ''} inputTitle={todo?.inputTitle ?? ''} input={todo?.input ?? ''} isDone={todo?.isDone ?? false} />;
};

export default Details;
