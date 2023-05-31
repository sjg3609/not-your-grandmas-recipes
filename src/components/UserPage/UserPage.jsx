import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <br />
      <br />
      <img style={{ maxHeight: '500px', maxWidth: '500px' }} src="https://img.freepik.com/free-vector/culinary-concept-illustration-restaurant-business_81522-1043.jpg?w=826&t=st=1685575762~exp=1685576362~hmac=3696aaf7ecb5330a2b7937e0b96d6c38919065a7eb5bb51adb2b30b9f1fd9c2a"></img>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
