import { useState } from "react";
import Button from "../component/Button";

import data from "../question.json";

export default function Quiz() {

    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0)
    const [isEnd, setIsEnd] = useState(false);


    const currentData = data[questionIndex]

    const maxLength = data.length;



  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="h-[400px] w-11/12 max-w-[500px] bg-blue-500 flex justify-center rounded-lg">
        <div className="flex flex-col items-center justify-center text-left gap-5">
          {!isEnd && <><p className="text-left underline underline-offset-4 text-indigo-300">
                Question {questionIndex + 1}/{data.length}
          </p>
          <div >
            <p className="text-center text-2xl mb-4">{currentData.question}</p>
            <div className="flex flex-col gap-2 items-center justify-center">

            {currentData.options.map((variant) => {
                return <Button key={variant} onClick={() => {
                    if(variant === currentData.answer)
                    {
                        setScore(() => score + 1)
                    }
                    if(questionIndex + 1 === maxLength)
                    {
                        setIsEnd(true);
                    }
                    else
                    {
                        setQuestionIndex(questionIndex+ 1)}
                    }

                }>
                        {variant}
                        </Button>})
                }
            </div>

          </div></>}
          {isEnd && <div>
            <p className="text-3xl">You scored {score} out of {maxLength}</p>
            </div>}
          </div>
        </div>
      </div>
  );
}