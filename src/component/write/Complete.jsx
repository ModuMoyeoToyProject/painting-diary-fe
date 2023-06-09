const Complete = (props) => {
  const { setPaint, setIsWrite } = props;

  const exitBtn = () => {
    setPaint(0);
    setIsWrite(false);
  };

  const manuscript = new Array(4).fill(new Array(8).fill(""));

  return (
    <div className="write_div">
      <div className="exit_div">
        <div onClick={exitBtn}>
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.3469 27.215C30.7627 27.6308 30.9963 28.1948 30.9963 28.7828C30.9963 29.3708 30.7627 29.9348 30.3469 30.3506C29.931 30.7664 29.3671 31 28.779 31C28.1909 31 27.6269 30.7664 27.2111 30.3506L15.5 18.6365L3.78519 30.3469C3.36936 30.7627 2.80538 30.9963 2.21731 30.9963C1.62925 30.9963 1.06526 30.7627 0.649436 30.3469C0.233609 29.9311 6.1963e-09 29.3672 0 28.7791C-6.1963e-09 28.1911 0.233609 27.6271 0.649436 27.2113L12.3642 15.5009L0.653125 3.78681C0.237298 3.37101 0.0036892 2.80706 0.00368921 2.21903C0.00368921 1.63099 0.237298 1.06704 0.653125 0.651242C1.06895 0.23544 1.63293 0.00184415 2.221 0.00184414C2.80907 0.00184414 3.37305 0.23544 3.78888 0.651242L15.5 12.3654L27.2148 0.649397C27.6306 0.233595 28.1946 -9.79663e-09 28.7827 0C29.3708 9.79663e-09 29.9347 0.233595 30.3506 0.649397C30.7664 1.0652 31 1.62915 31 2.21718C31 2.80521 30.7664 3.36916 30.3506 3.78497L18.6358 15.5009L30.3469 27.215Z"
              fill="black"
            />
          </svg>
        </div>
        <button className="delete_btn">삭제</button>
        <button className="rewrite_btn">재작성</button>
        <button className="share_btn">공유</button>
      </div>
      <div className="complete_div">
        <div className="go_left">
          <svg
            width="22"
            height="37"
            viewBox="0 0 22 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.374 36.0874L0.923663 20.8229C0.587785 20.491 0.350432 20.1315 0.211602 19.7444C0.0727726 19.3572 0.00223919 18.9424 0 18.5C0 18.0575 0.0705334 17.6427 0.211602 17.2556C0.352671 16.8685 0.590024 16.509 0.923663 16.1771L16.374 0.912555C16.9898 0.304184 17.7735 0 18.7252 0C19.6768 0 20.4606 0.304184 21.0763 0.912555C21.6921 1.52093 22 2.29522 22 3.23543C22 4.17563 21.6921 4.94993 21.0763 5.5583L7.9771 18.5L21.0763 31.4417C21.6921 32.0501 22 32.8244 22 33.7646C22 34.7048 21.6921 35.4791 21.0763 36.0874C20.4606 36.6958 19.6768 37 18.7252 37C17.7735 37 16.9898 36.6958 16.374 36.0874Z"
              fill="#9747FF"
            />
          </svg>
        </div>
        <div className="complete_content">
          <div className="complete_date">4월 19일</div>
          <div className="complete_title">동물원에 간 날</div>
          <div className="complete_img">
            <img src={require("../../image/paint_example_1.png")} />
          </div>
          <div className="write_diary">
            {manuscript.map((row, r) => (
              <div>
                {row.map((col, c) => (
                  <input className="write_manuscript" type="text" />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="go_right">
          <svg
            width="22"
            height="32"
            viewBox="0 0 22 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.62596 0.789242L21.0763 13.991C21.4122 14.278 21.6496 14.5889 21.7884 14.9238C21.9272 15.2586 21.9978 15.6173 22 16C22 16.3827 21.9295 16.7414 21.7884 17.0762C21.6473 17.4111 21.41 17.722 21.0763 18.009L5.62596 31.2108C5.01018 31.7369 4.22647 32 3.27481 32C2.32316 32 1.53944 31.7369 0.923666 31.2108C0.30789 30.6846 0 30.0149 0 29.2018C0 28.3886 0.30789 27.719 0.923666 27.1928L14.0229 16L0.923666 4.80718C0.30789 4.28102 0 3.61136 0 2.79821C0 1.98505 0.30789 1.3154 0.923666 0.789242C1.53944 0.263083 2.32316 0 3.27481 0C4.22647 0 5.01018 0.263083 5.62596 0.789242Z"
              fill="#9747FF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Complete;
