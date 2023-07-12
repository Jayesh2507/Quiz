import React, { useEffect, useRef, useState } from 'react'

export default function Questions({ data, questionNumber, setQuestionNumber, setStop, correctAnswer, wrongAnswer }) {

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className1, setClassName1] = useState('answer');
  const [className2, setClassName2] = useState('answer');
  const [onclick, setOnClick] = useState(false);
  const options = useRef();

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
    setOnClick(false);
  }, [data, questionNumber]);


  const handleOnClick = (a) => {
  
    // options.current.style.color = 'green';

    setSelectedAnswer(a);
    setClassName1('answer active');

    //when user select one option others will be disabled
    setOnClick(true);
    setClassName2('answer disabled');

    setTimeout(() => {
      setClassName1(a.correct ? 'answer correct' : 'answer wrong');
    }, 3000);

    //checking the result
    setTimeout(() => {
      if (a.correct) {
        correctAnswer();
        setTimeout(() => {
          setQuestionNumber(++questionNumber);
        }, 2000);
        setSelectedAnswer(null);
      }
      else {
        wrongAnswer();
        setTimeout(() => {
          setStop(true);
        }, 3000);
      }
    }, 6000);
  }

  return (
    <>
      <div className="information">
        <div className="question">{question?.question} </div>
        <div className="answers">
          {
            question?.answer.map((a,index) => {
              return <div className={selectedAnswer === a ? className1 : onclick ? className2 : 'answer'}
                onClick={() => handleOnClick(a)} /*ref={options}*/>{a.text}</div>
            })
          }
        </div>
      </div>
    </>
  )
}
