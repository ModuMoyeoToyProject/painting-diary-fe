import React, { useState, useRef } from 'react';
import '../../../assets/css/modal.css';

const Picture = (props) => {

  const {count} = props;
  const pictureData = [
    {title: "그림1", date: "2023/06/28"},
    {title: "그림2", date: "2023/06/28"},
    {title: "그림3", date: "2023/06/28"},
    {title: "그림4", date: "2023/06/28"},
  ];

  return(
    <div id='show_pictures'>
      {pictureData.map((el) => (
        <button>
          <div>
            <text className='image'>{el.title}</text>
            <text className='dateTxt'>{el.date}</text>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Picture;