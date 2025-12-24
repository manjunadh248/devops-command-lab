export function calculateOverallProgress(progress, devopsData) {
    let total = 0;
    let completed = 0;

    Object.values(devopsData).forEach(tool => {
        total += tool.commands.length;
        completed += (progress[tool.name] || []).length;
    });

    return total > 0 ? Math.round((completed / total) * 100) : 0;
}

export function calculateToolProgress(progress, tool) {
    const toolProgress = progress[tool.name] || [];
    return Math.round((toolProgress.length / tool.commands.length) * 100);
}

export function getCompletedCommands(progress) {
    return Object.values(progress).flat().length;
}
