import React from 'react';
import GradientText from '../atoms/GradientText';
import SkillCard from '../molecules/SkillCard';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsetProps {
  skills: Skill[];
}

export default function Skillset({ skills }: SkillsetProps) {
  return (
    <div className="bg-black/20 p-8 md:p-10 rounded-2xl border border-white/20">
      <GradientText as="h2" className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Teknologi Yang Digunakan
      </GradientText>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}