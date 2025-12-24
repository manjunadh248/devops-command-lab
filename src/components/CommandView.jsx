import React from 'react';
import { Copy, CheckCircle, AlertTriangle, Briefcase } from 'lucide-react';

export default function CommandView({ command, onComplete }) {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="font-mono text-3xl font-bold mb-2">{command.name}</div>
                <div className="text-blue-200">{command.category}</div>
            </div>

            {/* What, Why, When */}
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-2 text-blue-600">📖 What</h3>
                    <p className="text-gray-700">{command.what}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-2 text-green-600">🎯 Why</h3>
                    <p className="text-gray-700">{command.why}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="font-bold text-lg mb-2 text-purple-600">⏰ When</h3>
                    <p className="text-gray-700">{command.when}</p>
                </div>
            </div>

            {/* Syntax */}
            <div className="bg-gray-900 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Syntax</h3>
                <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                    <code className="text-green-400 font-mono text-lg">{command.syntax}</code>
                    <button
                        onClick={() => copyToClipboard(command.syntax)}
                        className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                        <Copy className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Examples */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-4 text-gray-800">💡 Examples</h3>
                <div className="space-y-3">
                    {command.examples.map((example, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                            <code className="font-mono text-blue-600 font-semibold flex-shrink-0">
                                {example.cmd}
                            </code>
                            <span className="text-gray-600">— {example.desc}</span>
                            <button
                                onClick={() => copyToClipboard(example.cmd)}
                                className="ml-auto p-2 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <Copy className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Terminal Output */}
            <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-white">📺 Expected Output</h3>
                <pre className="bg-black rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                    {command.output}
                </pre>
            </div>

            {/* Common Mistakes */}
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h3 className="font-bold text-lg mb-4 text-red-600 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Common Mistakes
                </h3>
                <ul className="space-y-2">
                    {command.mistakes.map((mistake, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-red-700">
                            <span>•</span>
                            <span>{mistake}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Real World Usage */}
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-lg mb-3 text-blue-600 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Real-World Usage
                </h3>
                <p className="text-blue-800">{command.realWorld}</p>
            </div>

            {/* Mark Complete */}
            <button
                onClick={() => onComplete(command.id)}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
                <CheckCircle className="w-6 h-6" />
                Mark as Learned
            </button>
        </div>
    );
}
