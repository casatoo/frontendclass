import './App.css';
import React from 'react';

function App() {
  const [todos,setTodos] = React.useState([
  {
    title:'밥먹',
    date:'10,01',
    done:false
  },{
    title:'양치',
    date:'10,11',
    done:false
  },{
    title:'쇼핑',
    date:'10,21',
    done:false
  },{
    title:'공부',
    date:'10,12',
    done:false
  }]);
  const [text,setText] = React.useState();

  const 완료 = (인덱스번호) =>{
    const cloneTodos =[...todos];
    cloneTodos[인덱스번호].done = !cloneTodos[인덱스번호].done;
    setTodos(cloneTodos);
  }
  const 삭제처리 = (인덱스번호) =>{
    const cloneTodos =[...todos];
    cloneTodos.splice(인덱스번호,1);
    setTodos(cloneTodos);
  }
  const 저장처리 =()=>{
    const cloneTodos =[...todos];
    cloneTodos.unshift({
      title:text,
      date:"10,20",
      done:false
    });
    setTodos(cloneTodos);
  }
  
  return (
    <div className="App">
      <input type="text" className="input" onChange={(event)=>{
        setText(event.target.value);
      }}/>
      <button type="button" onClick={저장처리}>저장</button>
      <ul>
      {todos.map((item,index)=>{
          const doneName = item.done === false ? "완료" : "미완료";
          return(
            <li key={index}>
              <span>제목 : {item.title} </span>
              &nbsp; &nbsp;
              <span>날짜 : {item.date} </span>
              &nbsp; &nbsp;
              <span>실행 : </span>
              &nbsp; &nbsp;
              <span>{item.done === true ? "완료" : "미완료"} </span>
              &nbsp; &nbsp;
              <button className="button" onClick={완료.bind(this,index)}>{doneName}</button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={삭제처리.bind(this, index)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
