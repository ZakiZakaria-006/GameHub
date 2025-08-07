import React from 'react';

export default function SkeletonCard() {
    return (
        <div className="bg-white/5 rounded-lg overflow-hidden animate-pulse">
            <div className="w-full h-56 bg-gray-700"></div>
            <div className="p-5">
                <div className="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
                <div className="h-6 bg-gray-600 rounded w-3/4 mb-4"></div>
                <div className="mt-auto h-4 bg-gray-700 rounded w-1/2"></div>
            </div>
        </div>
    );
}