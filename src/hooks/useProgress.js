import { useState, useEffect } from 'react';

export function useProgress() {
    const [progress, setProgress] = useState({});

    useEffect(() => {
        const saved = localStorage.getItem('devopsProgress');
        if (saved) {
            setProgress(JSON.parse(saved));
        }
    }, []);

    const updateProgress = (tool, commandId) => {
        const newProgress = {
            ...progress,
            [tool]: [...(progress[tool] || []), commandId]
        };
        setProgress(newProgress);
        localStorage.setItem('devopsProgress', JSON.stringify(newProgress));
    };

    return [progress, updateProgress];
}
