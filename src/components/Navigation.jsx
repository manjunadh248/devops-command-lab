import React from 'react';
import { Terminal, BookOpen, Target } from 'lucide-react';

export default function Navigation({ setCurrentView }) {
    return (
        <nav className="bg-white shadow-lg border-b-2 border-blue-100">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                            <Terminal className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">DevOps Command Lab</h1>
                            <p className="text-sm text-gray-600">Learn, Practice & Build</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setCurrentView('dashboard')}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <BookOpen className="w-5 h-5" />
                            <span className="font-semibold">Dashboard</span>
                        </button>
                        <button
                            onClick={() => setCurrentView('practice')}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <Target className="w-5 h-5" />
                            <span className="font-semibold">Practice</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
