import {useRef} from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}){
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5); // Math.random() - vraca vrednost od 0 do 1 (bez 1),  ako je vrednost pozitivna ne menjaju se mesta, suprotno mesta pitanja se menjaju
    }


    return (
        <ul id="answers">
            {
                shuffledAnswers.current.map((answer) => {
                    let cssClass = "";
                    const isSelected = selectedAnswer === answer;

                    if (answerState === "answered" && isSelected) {
                        cssClass = "selected"
                    }

                    if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                        cssClass = answerState;
                    }


                    return (
                        <li key={answer} className="answer">
                            <button onClick={() => onSelect(answer)} className={cssClass} disabled={answerState !== ""}>
                                {answer}
                            </button>
                        </li>
                    );
                })
            }
        </ul>
    );
}