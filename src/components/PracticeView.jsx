import React, { useState } from 'react';
import { scenarios } from '../data';
import { Lightbulb, CheckCircle, XCircle } from 'lucide-react';

export default function PracticeView() {
    const [currentScenario, setCurrentScenario] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [showHint, setShowHint] = useState(0);
    const [result, setResult] = useState(null);

    const scenario = scenarios[currentScenario];

    const checkAnswer = () => {
        const isCorrect = userInput.trim().toLowerCase() === scenario.correctCommand.toLowerCase();
        setResult(isCorrect);
    };

    const nextScenario = () => {
        if (currentScenario < scenarios.length - 1) {
            setCurrentScenario(currentScenario + 1);
            setUserInput('');
            setShowHint(0);
            setResult(null);
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
                <h1 className="text-3xl font-bold mb-2">Practice Mode</h1>
                <p className="text-orange-100">Scenario {currentScenario + 1} of {scenarios.length}</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                        {scenario.tool}
                    </span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-6">{scenario.scenario}</h2>

                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <span className="text-green-400">$</span>
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                            placeholder="Type your command here..."
                            className="bg-transparent flex-1 text-white font-mono focus:outline-none"
                        />
                    </div>
                </div>

                {/* Hints */}
                {showHint > 0 && (
                    <div className="mb-4 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                        <div className="flex items-center gap-2 text-yellow-700 font-semibold mb-2">
                            <Lightbulb className="w-5 h-5" />
                            Hints
                        </div>
                        <ul className="space-y-1 text-yellow-800">
                            {scenario.hints.slice(0, showHint).map((hint, idx) => (
                                <li key={idx}>• {hint}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Result */}
                {result !== null && (
                    <div className={`mb-4 p-4 rounded-lg ${result ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
                        <div className="flex items-center gap-2">
                            {result ? (
                                <>
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                    <span className="font-bold text-green-700">Correct!</span>
                                </>
                            ) : (
                                <>
                                    <XCircle className="w-6 h-6 text-red-600" />
                                    <span className="font-bold text-red-700">Not quite. The answer is: <code className="bg-red-100 px-2 py-1 rounded">{scenario.correctCommand}</code></span>
                                </>
                            )}
                        </div>
                    </div>
                )}

                <div className="flex gap-4">
                    <button
                        onClick={() => setShowHint(Math.min(showHint + 1, scenario.hints.length))}
                        disabled={showHint >= scenario.hints.length}
                        className="px-6 py-3 bg-yellow-100 text-yellow-700 rounded-lg font-semibold hover:bg-yellow-200 transition-colors disabled:opacity-50"
                    >
                        Get Hint ({scenario.hints.length - showHint} left)
                    </button>

                    <button
                        onClick={checkAnswer}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
                    >
                        Check Answer
                    </button>
                </div>

                {result !== null && currentScenario < scenarios.length - 1 && (
                    <button
                        onClick={nextScenario}
                        className="mt-4 w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 rounded-lg"
                    >
                        Next Scenario
                    </button>
                )}
            </div>
        </div>
    );
}
