import React, { useState, useRef } from 'react';
import '../../../assets/css/modal.css';

const Word = (props) => {
  
  return(
    <div id='show_titles'>
      <button>
        <div>
          <text className='titleTxt'>2023년 4월 14일 일기</text>
          <text className='dateTxt'>2023/04/14</text>
        </div>
      </button>
      <button>
        <div>
          <text className='titleTxt'>2023년 4월 14일 일기</text>
          <text className='dateTxt'>2023/04/14</text>
        </div>
      </button>
      <button>
        <div>
          <text className='titleTxt'>2023년 4월 14일 일기</text>
          <text className='dateTxt'>2023/04/14</text>
        </div>
      </button>
      <button>
        <div>
          <text className='titleTxt'>2023년 4월 14일 일기</text>
          <text className='dateTxt'>2023/04/14</text>
        </div>
      </button>
    </div>
  );
};

export default Word;