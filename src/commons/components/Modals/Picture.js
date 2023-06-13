import React, { useState, useRef } from 'react';
import '../../../assets/css/modal.css';

const Picture = (props) => {

  const {count} = props;

  return(
    <div id='show_pictures'>
      
      <button>
        <div>
          <text className='image'>그림1</text>
        </div>
      </button>
      <button>
        <div>
          <text className='image'>그림2</text>
        </div>
      </button>
      <button>
        <div>
          <text className='image'>그림3</text>
        </div>
      </button>
      <button>
        <div>
          <text className='image'>그림4</text>
        </div>
      </button>
    </div>
  );
};

export default Picture;