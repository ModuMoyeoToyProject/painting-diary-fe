import React, { useState } from 'react';
import '../../../assets/css/modal.css';

const Picture = (props) => {
  const { open, close, header } = props;

  return(
    <div id='show_titles'>
      <button>
      <div>
        <text className='titleTxt'>그림1</text>
      </div>
      </button>
    </div>
  );
};

export default Picture;