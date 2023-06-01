import React, { useState, useRef } from 'react';
import Picture from './Picture';
import Word from './Word';
import '../../../assets/css/modal.css';
import App from "../../../App";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Read = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  /* rendering each parts */
  const pictureBtn = useRef(null);
  const wordBtn = useRef(null);
  const calendarBtn = useRef(null);

  const OnPictureBtnClick = () => {
    pictureBtn.current.style.display = 'block';
    wordBtn.current.style.display = 'none';
    calendarBtn.current.style.display = 'none';
    console.log("picture btn clicked");
  }

  const OnWordBtnClick = () => {
    pictureBtn.current.style.display = 'none';
    wordBtn.current.style.display = 'block';
    calendarBtn.current.style.display = 'none';
    console.log("word btn clicked");
  }

  const OnCalendarBtnClick = () => {
    pictureBtn.current.style.display = 'none';
    wordBtn.current.style.display = 'none';
    calendarBtn.current.style.display = 'block';
    console.log("calender btn clicked");
  }

  const [value, onChange] = useState(new Date());

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {/* {header} */}
            <div>
                <button className='picture' onClick={OnPictureBtnClick}><img src='./img/picture.png' width={25} height={25}></img></button>
                <button className='picture' onClick={OnWordBtnClick}><img src='./img/word.png' width={25} height={25}></img></button>
                <button className='picture' onClick={OnCalendarBtnClick}><img src='../img/calendar.png' width={25} height={25}></img></button>
                <button className='searchBtn'><img src='./img/search.png' width={25} height={25}></img></button>
                <button className="close" onClick={close}><img src='./img/close.png' width={25} height={25}></img></button>
                <input className='searchBar' type='text' placeholder='Search'></input>
            </div>
          </header>

          <main>
            <div id='show_titles' ref={wordBtn}>
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

            <div id='show_pictures'  ref={pictureBtn}>
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
          <div id='show_calendar'  ref={calendarBtn}>
              <Calendar onChange={onChange} value={value}/>
            </div>
          </main>

          <footer>
            {/* <button className="close" onClick={close}>
              close
            </button> */}
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Read;