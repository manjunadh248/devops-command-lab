import React from 'react';
import { TrendingUp, CheckCircle, Award, Target, Rocket } from 'lucide-react';
import { devopsData } from '../data';

export default function Dashboard({
    progress,
    setCurrentView,
    setSelectedTool
}) {
    const calculateProgress = () => {
        let total = 0;
        let completed = 0;
        Object.values(devopsData).forEach(tool => {
            total += tool.commands.length;
            completed += (progress[tool.name] || []).length;
        });
        return total > 0 ? Math.round((completed / total) * 100) : 0;
    };

    return (
        <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h1 className="text-4xl font-bold mb-3">Welcome to DevOps Command Lab 🚀</h1>
                <p className="text-xl opacity-90">Master DevOps tools through hands-on practice</p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <TrendingUp className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600">
                                {calculateProgress()}%
                            </div>
                            <div className="text-sm text-gray-600">Overall Progress</div>
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${calculateProgress()}%` }}
                        />
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600">
                                {Object.values(progress).flat().length}
                            </div>
                            <div className="text-sm text-gray-600">Commands Learned</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-purple-100 rounded-lg">
                            <Award className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-600">
                                {Object.keys(devopsData).length}
                            </div>
                            <div className="text-sm text-gray-600">Tools Available</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tools Grid */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">🎯 Start Learning</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(devopsData).map(([key, tool]) => {
                        const toolProgress = progress[tool.name] || [];
                        const percentage = Math.round((toolProgress.length / tool.commands.length) * 100);

                        return (
                            <div
                                key={key}
                                onClick={() => {
                                    setSelectedTool(key);
                                    setCurrentView('tool');
                                }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-blue-400 group"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-5xl group-hover:scale-110 transition-transform">
                                        {tool.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
                                        <p className="text-sm text-gray-600">{tool.commands.length} commands</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Progress</span>
                                        <span className="font-semibold text-blue-600">{percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`bg-gradient-to-r ${tool.color} h-2 rounded-full transition-all duration-500`}
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Action Cards */}
            <div className="grid md:grid-cols-2 gap-6">
                <div
                    onClick={() => setCurrentView('practice')}
                    className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-8 text-white cursor-pointer hover:scale-105 transition-transform shadow-lg"
                >
                    <Target className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Practice Mode</h3>
                    <p className="opacity-90">Test your knowledge with real-world scenarios</p>
                </div>

                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl p-8 text-white shadow-lg">
                    <Rocket className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Mini Projects</h3>
                    <p className="opacity-90">Build complete DevOps workflows step-by-step</p>
                </div>
            </div>
        </div>
    );
}
