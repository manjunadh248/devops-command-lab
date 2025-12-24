import React from 'react';

export default function InfoCard({ title, icon, children, className = '' }) {
    return (
        <div className={`bg-white rounded-xl p-6 shadow-lg ${className}`}>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                {icon && <span>{icon}</span>}
                {title}
            </h3>
            {children}
        </div>
    );
}
