import React from 'react';

interface JourneyItem {
  title: string;
  date: string;
  description: string;
}

interface TimelineCardProps {
  item: JourneyItem;
  index: number;
}

export default function TimelineCard({ item, index }: TimelineCardProps) {
  const positionClass = index % 2 === 0 ? 'md:flex-row-reverse' : '';

  return (
    <div className={`relative mb-12 flex items-center w-full ${positionClass}`}>
      <div className="absolute w-6 h-6 rounded-full bg-dark border-4 border-primary z-10 left-5 md:left-1/2 -translate-x-1/2"></div>
      <div className="bg-card border border-white/20 rounded-lg p-6 w-full ml-12 md:ml-0 md:w-[calc(50%-2.5rem)]">
        <h3 className="text-xl font-bold text-primary">{item.title}</h3>
        <p className="text-sm text-gray-400 mb-2">{item.date}</p>
        <p className="text-light/80">{item.description}</p>
      </div>
    </div>
  );
}