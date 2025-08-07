import React from 'react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
    return (
        <div className="bg-card border border-white/20 rounded-lg p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg hover:shadow-black/30">
            <i className={`${skill.icon} text-5xl mb-4 text-primary`}></i>
            <p className="font-semibold text-base">{skill.name}</p>
        </div>
    );
}