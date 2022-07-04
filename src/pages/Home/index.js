import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HobbyList from '~/components/Home/HobbyList';
import casual from 'casual-browserify';

import { addHobby, setHobby } from '~/actions';

const cl = classNames.bind(styles);
// const randomNumber = () => {
//   return 1000 + Math.trunc((Math.random * 9000))
// }

function Home() {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();
  // const newId = randomNumber()

  const handleAddHobbyClick = () => {
    const addNewHobby = {
      id: casual.uuid,
      title: casual.title,
    };
    dispatch(addHobby(addNewHobby));
  };

  const handleHobbyClick = (hobby) => {
    dispatch(setHobby(hobby));
  };

  return (
    <div className={cl('wrappers')}>
      <h1>Home</h1>
      <button onClick={handleAddHobbyClick}>Click here!</button>
      <HobbyList activeId={activeId} hobbyList={hobbyList} onHobbyClick={handleHobbyClick} />
    </div>
  );
}

export default Home;
