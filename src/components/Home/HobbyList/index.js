import './HobbyStyle.scss';
import PropTypes from 'prop-types';

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.string,
  onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;
  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
    console.log(hobby, activeId);
  };

  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => (
        <li key={hobby.id} className={hobby.id === activeId ? 'active' : ''} onClick={() => handleClick(hobby)}>
          {hobby.title}
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;
