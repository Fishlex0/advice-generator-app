'use client';

import { useState } from 'react';
import { AdviceSchema } from '../lib/adviceSchema';
import Image from 'next/image';

interface AdviceCardProps {
  adviceNumber: number;
  advice: string;
}

export default function AdviceCard({ adviceNumber, advice }: AdviceCardProps) {
  const [adviceData, setAdviceData] = useState({
    adviceNumber,
    advice,
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewAdvice = async () => {
    try {
      setIsLoading(true);

      const response = await fetch('https://api.adviceslip.com/advice', {
        cache: 'no-store',
      });
      const jsonData = await response.json();
      const parsedData = AdviceSchema.parse(jsonData);

      setAdviceData({
        adviceNumber: parsedData.slip.id,
        advice: parsedData.slip.advice,
      });
    } catch (error) {
      console.log('Encountered error while fetching the advice:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="container">
          <div className="textContainer">
            <p className="adviceNumber">Advice #{adviceData.adviceNumber}</p>
            <p className="advice">
              <q>{adviceData.advice}</q>
            </p>
          </div>

          <div className="dividerContainer">
            <Image
              src="/pattern-divider-mobile.svg"
              alt="divider-image"
              fill={true}
            />
          </div>

          <button className="advice-button" onClick={fetchNewAdvice}>
            <Image
              src="/icon-dice.svg"
              alt="Genrate a new random advice"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
    </>
  );
}
