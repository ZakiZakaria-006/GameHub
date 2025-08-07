import React from 'react';
import HeroSection from '@/components/organisms/HeroSection';
import Skillset from '@/components/organisms/Skillset';
import Timeline from '@/components/organisms/Timeline';
import Button from '@/components/atoms/Button';

const mainProfileData = {
    name: 'Mohammad Yomandiguna Zakaria',
    role: 'Passionate Gamers & Developers',
    imageUrl: 'https://i.imgur.com/Z94id1U.jpeg',
    bio: 'Saya adalah seorang gamer yang bersemangat untuk menciptakan platform terbaik bagi para pecinta game PC untuk menemukan dan menjelajahi game-game baru yang menakjubkan.',
    skills: [
        { name: 'React', icon: 'fa-brands fa-react' },
        { name: 'Next.js', icon: 'fa-solid fa-bolt' },
        { name: 'TypeScript', icon: 'fa-solid fa-code' },
        { name: 'TailwindCSS', icon: 'fa-brands fa-css3-alt' },
        { name: 'RAWG API', icon: 'fa-solid fa-database' },
    ],
    journey: [
        {
            title: 'Konsep GameHub',
            date: '26 Juli 2025',
            description: 'Ide lahir dari keinginan untuk memiliki satu tempat untuk menemukan informasi game PC yang komprehensif dan up-to-date.'
        },
        {
            title: 'Pengembangan Dimulai',
            date: '2 Agustus 2025',
            description: 'Pengerjaan Project dimulai dengan menggunakan platform teknologi web modern yaitu Next.js dan TypeScript.'
        },
        {
            title: 'Presentasi Project',
            date: '9 Agustus 2025',
            description: 'Project GameHub dipresentasikan untuk mendapatkan masukan dan melakukan perbaikan.'
        }
    ]
};

export default function AboutPage() {
    return (
        <section id="about" className="font-sans bg-dark text-light py-20 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <HeroSection member={mainProfileData} />
                <Skillset skills={mainProfileData.skills} />
                <Timeline journey={mainProfileData.journey} />
                <div className="text-center mt-4">
                    <Button href="/games" variant="primary">Lihat Game</Button>
                </div>
            </div>
        </section>
    );
}