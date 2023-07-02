import React, { useState, useRef } from 'react';
import Picture from './Picture';
import Word from './Word';
import CalendarPage from './CalendarPage';
import '../../../assets/css/modal.css';

const Search = (props) => {
  // counts of diaries
  const count = 4;

  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  /* rendering each parts */
  const pictureBtn = useRef(null);
  const wordBtn = useRef(null);
  const calendarBtn = useRef(null);

  const mainRef = useRef(null);

  const OnPictureBtnClick = () => {
    pictureBtn.current.style.display = 'block';
    wordBtn.current.style.display = 'none';
    calendarBtn.current.style.display = 'none';
    let value = mainRef.current;
    console.log("mainRef : " + value);
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

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            <div>
                <button className='picture' onClick={OnPictureBtnClick}><img src='./img/picture.png' width={25} height={25}></img></button>
                <button className='picture' onClick={OnWordBtnClick}><img src='./img/word.png' width={25} height={25}></img></button>
                <button className='picture' onClick={OnCalendarBtnClick}><img src='../img/calendar.png' width={25} height={25}></img></button>
                <button className='searchBtn'><img src='./img/search.png' width={25} height={25}></img></button>
                <button className="close" onClick={close}><img src='./img/close.png' width={25} height={25}></img></button>
                <input className='searchBar' type='text' placeholder='Search'></input>
            </div>
          </header>

          <main ref={mainRef}>
            <div ref={pictureBtn}>
              <Picture count={count} />
            </div>
            <div ref={wordBtn}>
              <Word />
            </div>
            <div ref={calendarBtn}>
              <CalendarPage />
            </div>
          </main>

          <footer>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Search;