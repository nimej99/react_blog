/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {

  let [title, setTitle] = useState(['ㅅㅇㅈ', 'ㄻㅂ', 'ㄱㄴㄷ']);
  let [date, setDate] = useState(['08/28', '08/29', '08/30']);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [input, setInput] = useState('');
  let 날짜 = new Date();
  let 달 = 날짜.getMonth() + 1;
  let 일 = 날짜.getDate();

  function addZero(date) {
    if (date < 10) {
      const zeroDate = ('00' + date).slice(-2);
      return zeroDate;
    }
    return date;
  }

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
              <span onClick={(e) => {
                //이벤트버블링 방지
                e.stopPropagation();
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy)
              }}>👍</span>
              {like[i]}
            </h4>
            <p>{date[i]}</p>
            <button onClick={() => {
              let titleCopy = [...title];
              let likeCopy = [...like];
              let dateCopy = [...date];
              titleCopy.splice(i, 1);
              likeCopy.splice(i, 1);
              dateCopy.splice(i, 1);
              setTitle(titleCopy)
              setLike(likeCopy);
              setDate(dateCopy);
            }}>글 삭제</button>
          </div>
        )
      })}

      <input type="text" onChange={(e) => {
        setInput(e.target.value);
      }} />
      <button onClick={() => {
        let titleCopy = [...title];
        let likeCopy = [...like];
        let dateCopy = [...date];
        !input
          ? alert('내용을 입력하세요') : titleCopy.unshift(input), likeCopy.unshift(0),
          dateCopy.unshift(addZero(달) + '/' + addZero(일)),
          setTitle(titleCopy), setLike(likeCopy);
        setTitle(titleCopy), setDate(dateCopy);
      }}>글 발행</button>

      {
        modal === true
          ? <Modal title={title} setTitle={setTitle} modalIndex={modalIndex} color={'skyblue'} />
          : null
      }

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
