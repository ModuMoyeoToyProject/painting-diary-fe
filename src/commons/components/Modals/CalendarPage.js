import React, { useState, useRef } from 'react';
import '../../../assets/css/modal.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = (props) => {

  const [value, onChange] = useState(new Date());

  return(
    <Calendar onChange={onChange} value={value}/>
  );
};

export default CalendarPage;