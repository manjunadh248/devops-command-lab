import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import ToolView from './components/ToolView';
import CommandView from './components/CommandView';
import PracticeView from './components/PracticeView';
import { useProgress } from './hooks/useProgress';
import { devopsData } from './data';
import { ArrowLeft } from 'lucide-react';

export default function App() {
    const [currentView, setCurrentView] = useState('dashboard');
    const [selectedTool, setSelectedTool] = useState(null);
    const [selectedCommand, setSelectedCommand] = useState(null);
    const [progress, updateProgress] = useProgress();

    const handleBack = () => {
        if (currentView === 'command') {
            setCurrentView('tool');
            setSelectedCommand(null);
        } else if (currentView === 'tool') {
            setCurrentView('dashboard');
            setSelectedTool(null);
        } else if (currentView === 'practice') {
            setCurrentView('dashboard');
        }
    };

    const handleComplete = (commandId) => {
        if (selectedTool && devopsData[selectedTool]) {
            updateProgress(devopsData[selectedTool].name, commandId);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <Navigation setCurrentView={setCurrentView} />

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Back Button */}
                {currentView !== 'dashboard' && (
                    <button
                        onClick={handleBack}
                        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-semibold"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back
                    </button>
                )}

                {/* Dashboard View */}
                {currentView === 'dashboard' && (
                    <Dashboard
                        progress={progress}
                        setCurrentView={setCurrentView}
                        setSelectedTool={setSelectedTool}
                    />
                )}

                {/* Tool View */}
                {currentView === 'tool' && selectedTool && devopsData[selectedTool] && (
                    <ToolView
                        tool={devopsData[selectedTool]}
                        setCurrentView={setCurrentView}
                        setSelectedCommand={setSelectedCommand}
                    />
                )}

                {/* Command View */}
                {currentView === 'command' && selectedCommand && (
                    <CommandView
                        command={selectedCommand}
                        onComplete={handleComplete}
                    />
                )}

                {/* Practice View */}
                {currentView === 'practice' && (
                    <PracticeView />
                )}
            </main>
        </div>
    );
}
