"use client";
import {useEffect, useState} from 'react';

// vibe coded
export function useScrollPosition() {
    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            const sections = ['about', 'portfolio', 'contact'];
            const sectionElements = sections.map(id => document.getElementById(id));

            const currentSection = sectionElements.find(section => {
                if (!section) return false;
                const rect = section.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom > 100;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return {scrollY, activeSection};
}