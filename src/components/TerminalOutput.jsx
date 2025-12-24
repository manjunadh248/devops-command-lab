import React from 'react';

export default function TerminalOutput({ output, title = 'Terminal Output' }) {
    return (
        <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-400 text-sm">{title}</span>
            </div>
            <pre className="p-4 text-green-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                {output}
            </pre>
        </div>
    );
}
