import { React,  useState, useRef, useEffect } from 'react';
import '../../../assets/css/modal.css';
import {Link} from 'react-scroll/modules';

const Word = (props) => {

  const wordData = [
    {title: "내용1", date: "2023/06/28"},
    {title: "내용2", date: "2023/06/28"},
    {title: "내용3", date: "2023/06/28"},
    {title: "내용4", date: "2023/06/28"},
    {title: "내용5", date: "2023/06/28"},
    {title: "내용6", date: "2023/06/28"},
    {title: "내용7", date: "2023/06/28"},
    {title: "내용8", date: "2023/06/28"},
  ];


  return(
    <div id='show_titles'>
      {wordData.map((el) => (
        <button>
          <div>
            <text className='titleTxt'>{el.title}</text>
            <text className='dateTxt'>{el.date}</text>
          </div>
      </button>
      ))}
    </div>
  );
};

export default Word;