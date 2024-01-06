import './index.scss';
import React from 'react';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'Артур'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'функция которая возвращает JSX', 'Артур'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({result}) {
  return (
    <div className="result">
      <img src="/ready.png" />
      <h2>Вы отгадали {result} ответа из {questions.length}. Вы мидл!</h2>
      <a href='/'>
      <button >Попробовать снова</button>
      </a>
      
    </div>
  );
}

function Game({question, nextQuestion}) {

  const progress=Math.round((question/questions.length)*100)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${progress}%` }} className="progress__inner"></div>
      </div>
      <h1>{questions[question].title}</h1>
      <ul>
        {questions[question].variants.map((el, index) =>(
          <li onClick={() => nextQuestion(index)} key={el}>{el}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [question, changeQuestion]=React.useState(0)
  const [result, addToResult]=React.useState(0)

  const nextQuestion=(index)=>{
    changeQuestion(question+1)
    if(index==questions[question].correct){
      addToResult(result+1)
    }
  }
  

  return (
    <div className="App">
      {
        question!=questions.length ? (<Game question={question} nextQuestion={nextQuestion}/>) : (<Result result={result} />)
      }
      
    </div>
  );
}

export default App;