'use client';

import { useState, useEffect } from 'react';
import { z } from 'zod';

import AdviceCard from './_components/AdviceCard';

const AdviceSchema = z.object({
  slip: z.object({
    id: z.number(),
    advice: z.string(),
  }),
});

export default function Page() {
  const [adviceData, setAdviceData] = useState(null);

  const fetchAdvice = async () => {
    try {
      const data = await fetch('https://api.adviceslip.com/advice', {
        cache: 'no-cache',
      });
      const adviceData = await data.json();

      const validatedAdvice = AdviceSchema.parse(adviceData);

      setAdviceData(validatedAdvice.slip);
    } catch (err) {
      console.error('Failed to fetch advice:', err);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="center-on-screen">
      {adviceData && (
        <AdviceCard
          adviceNumber={adviceData.id}
          advice={adviceData.advice}
          onRefresh={fetchAdvice}
        />
      )}
    </div>
  );
}
