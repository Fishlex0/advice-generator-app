'use client';

import Image from 'next/image';

interface AdviceCardProps {
  adviceNumber: number;
  advice: string;
  onRefresh: () => Promise<void>;
}

export default function AdviceCard({
  adviceNumber,
  advice,
  onRefresh,
}: AdviceCardProps) {
  return (
    <div className="container">
      <div className="textContainer">
        <p className="adviceNumber">Advice #{adviceNumber}</p>
        <p className="advice">
          <q>{advice}</q>
        </p>
      </div>

      <div className="dividerContainer">
        <Image
          src="/pattern-divider-mobile.svg"
          alt="divider-image"
          fill={true}
        />
      </div>

      <button className="advice-button" onClick={onRefresh}>
        <Image
          src="/icon-dice.svg"
          alt="Genrate a new random advice"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
