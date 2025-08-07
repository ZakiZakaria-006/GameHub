import React from 'react';
import GradientText from '../atoms/GradientText';
import TimelineCard from '../molecules/TimelineCard';

interface JourneyItem {
  title: string;
  date: string;
  description: string;
}

interface TimelineProps {
  journey: JourneyItem[];
}

export default function Timeline({ journey }: TimelineProps) {
  return (
    <div className="bg-black/20 p-8 md:p-10 rounded-2xl border border-white/20">
      <div className="text-center mb-12">
        <GradientText as="h2" className="text-3xl md:text-4xl font-semibold">
          Tentang GameHub
        </GradientText>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
          GameHub adalah platform yang dapat memudahkan pemain dalam mencari berbagai macam game, mendapatkan informasi seputar game, dan lainnya.
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
        
        {journey.map((item, index) => (
          <TimelineCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}