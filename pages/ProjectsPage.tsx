'use client';

import React from 'react';
import NavBar from './NavBar';
import { AuroraBackground } from '../components/aurora-background';
import { Carousel, Card } from '../components/apple-cards-carousel';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <AuroraBackground>
        <div className="w-full h-full py-20">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Projects
          </h2>
          <AppleCardsCarouselDemo /> {/* Correctly referenced the demo function */}
        </div>
      </AuroraBackground>
    </>
  );
};

const AppleCardsCarouselDemo: React.FC = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
};

const DummyContent: React.FC = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={`dummy-content-${index}`}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>&#39; Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem. Langotiya jeetu ka mara hua yaar is ready to capture every thought.
          </p>
          {/* <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height={500}
            width={500}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          /> */}
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: '',
    title: 'Academy & Dallas Golf Website',
    src: '/a&dglogo.jpg',
    content: <DummyContent />,
  },
  {
    category: '',
    title: 'Huffman Encoder',
    src: '/HuffmanEncoderPic.jpg',
    content: <DummyContent />,
  },
  {
    category: '',
    title: 'Flappy Fish',
    src: '/FlappyFishPic.jpg',
    content: <DummyContent />,
  },
];

export default ProjectsPage;
