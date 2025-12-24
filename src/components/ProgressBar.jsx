import React from 'react';

export default function ProgressBar({ value, max, color = 'from-blue-500 to-purple-500', showLabel = true }) {
    const percentage = max > 0 ? Math.round((value / max) * 100) : 0;

    return (
        <div className="space-y-2">
            {showLabel && (
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{value} of {max}</span>
                    <span className="font-semibold text-blue-600">{percentage}%</span>
                </div>
            )}
            <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                    className={`bg-gradient-to-r ${color} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
