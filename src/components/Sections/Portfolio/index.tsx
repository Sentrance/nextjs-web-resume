import Image from 'next/image';
import {FC, memo} from 'react';

import {SectionId} from '../../../data/data';
import Section from '../../Layout/Section';

interface PortfolioItem {
  title: string;
  imageSrc: string;
  link: string;
}

const Portfolio: FC = memo(() => {
  const portfolioItems: PortfolioItem[] = [
    {
      title: 'Kubernetes gameservers',
      imageSrc: '/assets/kubernetes-bg.jpg',
      link: 'https://github.com/Sentrance/k3s-gameservers',
    },
    {
      title: 'C# - Unity player movements',
      imageSrc: '/assets/playermovement.jpg',
      link: 'https://github.com/Sentrance/unity-playermovement',
    },
    {
      title: 'Java - MiniShootCraft',
      imageSrc: '/assets/lego-bg.jpg',
      link: 'https://github.com/Sentrance/MiniShootCraft',
    },
    {
      title: 'C++ - AI for Gomoku game',
      imageSrc: '/assets/ai-bg.jpg',
      link: 'https://github.com/Sentrance/gomokuAI',
    }
  ];

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center text-neutral-800 mb-8">
          <span className="text-orange-500">Portf</span>olio Github
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {portfolioItems.map((item, index) => (
            <a
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
              href={item.link}
              key={`${item.title}-${index}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="aspect-video relative overflow-hidden bg-neutral-200">
                <Image
                  alt={item.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                  src={item.imageSrc}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">{item.title}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;