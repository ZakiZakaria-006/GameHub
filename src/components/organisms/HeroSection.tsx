import React from 'react';
import Avatar from '../atoms/Avatar';
import GradientText from '../atoms/GradientText';

interface MemberData {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

interface HeroSectionProps {
  member: MemberData;
}

export default function HeroSection({ member }: HeroSectionProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 text-center lg:text-left">
      <div className="flex-shrink-0">
        <Avatar src={member.imageUrl} alt={member.name} />
      </div>
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
          <GradientText as="span">{member.name}</GradientText>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 font-normal mb-4">
          {member.role}
        </h2>
        <p className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-light">
          {member.bio}
        </p>
      </div>
    </div>
  );
}