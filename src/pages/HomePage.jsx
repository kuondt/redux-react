import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

HomePage.propTypes = {

};

const randomNumber = () => {
  return 1000 + Math.trunc((Math.random() * 9000));
}

function HomePage(props) {
  const hobbyList =  useSelector(state => state.hobby.list);
  console.log("hobbyList", hobbyList);

  return (
    <div className="home-page">
      <h1>REDUX HOOKS - Home Page</h1>

     
    </div>
  );
}

export default HomePage;