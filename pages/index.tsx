import Head from "next/head";
import questions from "../questions.json";
import { useState } from "react";

export default function Home() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const handlePrevious = () => {
        const prevQues = currentQuestion - 1;
        prevQues >= 0 && setCurrentQuestion(prevQues);
    };

    const handleNext = () => {
        const nextQues = currentQuestion + 1;
        nextQues < questions.length && setCurrentQuestion(nextQues);
    };

    const [selectedOptions, setSelectedOptions]: any = useState([]);
    const handleAnswerOption = (answer: any) => {
        setSelectedOptions([
            (selectedOptions[currentQuestion] = { answerByUser: answer }),
        ]);
        setSelectedOptions([...selectedOptions]);
        console.log(selectedOptions);
    };

    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleSubmitButton = () => {
        let newScore = 0;
        for (let i = 0; i < questions.length; i++) {       
                (newScore += selectedOptions[i].answerByUser)
        }
        setScore(Math.round(10*newScore / questions.length)/10);
        setShowScore(true);
    };
    
    return (
        <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">
            <Head>
                <title>Quiz App</title>
            </Head>

            {showScore ? (
                <h1 className="text-3xl font-semibold text-center text-white">
                    Your average score for category <i>{ questions[currentQuestion].category }</i> is {score}
                </h1>
            ) : (
                <>
                <div className="flex flex-col items-start w-full">
                    <div className="mt-4 text-2xl text-white">
                    Category: <i>{questions[currentQuestion].category}</i>
                    </div>
                    <h4 className="mt-10 text-xl text-white/60">
                    Question {currentQuestion + 1} of {questions.length}
                    </h4>
                </div>
                <div className="flex flex-col w-full">
                    {questions[currentQuestion].answerOptions.map((answer, index) => (
                    <div
                        key={index}
                        className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
                        onClick={(e) => handleAnswerOption(answer.answer)}
                    >
                        <input
                        type="radio"
                        name={answer.answer.toString()}
                        value={answer.answer}
                        checked={
                            answer.answer === selectedOptions[currentQuestion]?.answerByUser
                        }
                        onChange={(e) => handleAnswerOption(answer.answer)}
                        className="w-6 h-6 bg-black"
                        />
                            <p className="ml-6 text-white">{answer.answer} {answer.text ? ": " : ""} {answer.text} </p>
                    </div>
                    ))}
                </div>
                        
                <div className="flex justify-between w-full mt-4 text-white">
                    <button
                    onClick={handlePrevious}
                    className="w-[49%] py-3 bg-indigo-600 rounded-lg"
                    >
                    Previous
                    </button>
                    <button
                    onClick={
                        currentQuestion + 1 === questions.length
                        ? handleSubmitButton
                        : handleNext
                    }
                    className="w-[49%] py-3 bg-indigo-600 rounded-lg"
                    >
                    {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
                    </button>
                </div>
                </>
            )
            }
        </div>
    )
}

