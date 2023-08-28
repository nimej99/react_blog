/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {

  let [title, setTitle] = useState(['ㅅㅇㅈ', 'ㄻㅂ', 'ㄱㄴㄷ']);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>jamm.log</h4>
      </div>
      <button onClick={() => {
        let copy = [...title];
        copy[0] = '여자코트 추천';
        setTitle(copy);
      }}>글 수정</button>
      <button onClick={() => {
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>정렬 버튼</button>

      {title.map((a, i) => {
        return (
          <div className='list' key={i}>
            <h4 style={{ color: 'darkolivegreen', fontSize: '24px' }}
              onClick={() => {
                setModal(!modal);
                setModalIndex(i);
              }}>
              {title[i]}
              <span onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy)
              }}>👍</span>
              {like[i]}
            </h4>
            <p>08/28</p>
          </div>
        )
      })}
      {modal === true ? <Modal title={title} setTitle={setTitle} modalIndex={modalIndex} color={'skyblue'} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.title[props.modalIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.title];
        copy[0] = '여자코트 추천';
        props.setTitle(copy)
      }}>글 수정</button>
    </div>
  )
}

export default App;
