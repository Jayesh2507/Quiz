import React, { useEffect, useState } from 'react';
import MoneyPyramid from './MoneyPyramid';
import Questions from './Questions';
import data from './Data';
import Timer from './Timer';
import useSound from 'use-sound';
import play from './images/play.mp3';
import correct from './images/correct.mp3';
import wrong from './images/wrong.mp3';
import Start from './Start';

export default function Quiz() {
    const [username, setUsername] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState("0 ₹");
    const [letsplay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(()=>{
        letsplay();
    },[username])

    useEffect(() => {
        questionNumber > 1 && setEarned(MoneyPyramid.find(m => m.id === questionNumber - 1).amount)
    }, [questionNumber])

    return (
        <>
            <div className="app">
                {username ? (
                    <>
                        <div className="main">
                            {stop || questionNumber==15 ? <h1 className='endText'>You earned : {earned}</h1> : (
                                <>
                                    <div className="top">
                                        <div className="timer">
                                            <Timer setStop={setStop} questionNumber={questionNumber} wrongAnswer={wrongAnswer}/>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <Questions data={data} setQuestionNumber={setQuestionNumber} setStop={setStop} questionNumber={questionNumber} correctAnswer={correctAnswer} wrongAnswer={wrongAnswer} />
                                    </div>

                                </>
                            )}
                        </div>

                        <div className="pyramid">
                            <ul className="moneyList">
                                {
                                    MoneyPyramid.map((ele) => {
                                        return (
                                            <li className={questionNumber === ele.id ? "moneyListItem active" : "moneyListItem"} key={ele.id}>
                                                <span className="moneyListItemNumber">{ele.id}</span>
                                                <span className="moneyListItemAmount">{ele.amount}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </>
                ) : <Start setUsername={setUsername} />}
            </div>
        </>
    )
}
