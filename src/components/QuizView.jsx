import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export default function QuizView({ quiz, toolName }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswer = (index) => {
        setSelectedAnswer(index);
        if (index === quiz[currentQuestion].correct) {
            setScore(score + 1);
        }
        setShowResult(true);
    };

    const nextQuestion = () => {
        if (currentQuestion < quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        }
    };

    const question = quiz[currentQuestion];

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h1 className="text-3xl font-bold mb-2">{toolName} Quiz</h1>
                <p className="text-purple-200">Question {currentQuestion + 1} of {quiz.length}</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-6">{question.question}</h2>

                <div className="space-y-3">
                    {question.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => !showResult && handleAnswer(idx)}
                            disabled={showResult}
                            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${showResult
                                    ? idx === question.correct
                                        ? 'border-green-500 bg-green-50'
                                        : idx === selectedAnswer
                                            ? 'border-red-500 bg-red-50'
                                            : 'border-gray-200'
                                    : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <span>{option}</span>
                                {showResult && idx === question.correct && (
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                )}
                                {showResult && idx === selectedAnswer && idx !== question.correct && (
                                    <XCircle className="w-5 h-5 text-red-500" />
                                )}
                            </div>
                        </button>
                    ))}
                </div>

                {showResult && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-blue-800">{question.explanation}</p>
                    </div>
                )}

                {showResult && currentQuestion < quiz.length - 1 && (
                    <button
                        onClick={nextQuestion}
                        className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-lg"
                    >
                        Next Question
                    </button>
                )}

                {showResult && currentQuestion === quiz.length - 1 && (
                    <div className="mt-6 text-center p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
                        <div className="text-4xl font-bold text-green-600 mb-2">
                            {score}/{quiz.length}
                        </div>
                        <p className="text-gray-700">Quiz Complete!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
