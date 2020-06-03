import React from 'react';
import './_Home.scss';
// import GuestName from '../BookTable/FormGuestName/FormGuestName';
import CalendarNpm from '../BookTable/Calendar/Calendar';


const Home = () => {
  return (
    <div className="main__home">
      {/* <img src="images/restaurant_2.jpg" alt="" /> */}
      {/* <GuestName /> */}
      <CalendarNpm />
    </div>
  );
};

export default Home;