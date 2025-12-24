import React from 'react';

export default function ToolView({ tool, setCurrentView, setSelectedCommand }) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <span className="text-5xl">{tool.icon}</span>
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{tool.name}</h1>
                    <p className="text-gray-600">{tool.commands.length} commands to learn</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tool.commands.map((command) => (
                    <div
                        key={command.id}
                        onClick={() => {
                            setSelectedCommand(command);
                            setCurrentView('command');
                        }}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-blue-400"
                    >
                        <div className="font-mono text-xl font-bold text-blue-600 mb-2">
                            {command.name}
                        </div>
                        <div className="text-sm text-gray-500 mb-2">{command.category}</div>
                        <p className="text-gray-700 line-clamp-2">{command.what}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
