import { AdviceSchema } from './lib/adviceSchema';
import AdviceCard from './_components/AdviceCard';

export const dynamic = 'force-dynamic';

async function getInitialAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-store',
    });
    const jsonData = await response.json();
    const parsedData = AdviceSchema.parse(jsonData);

    return parsedData;
  } catch (error) {
    console.log('Encountered error while fetching the advice:', error);
  }
}

export default async function Page() {
  const initialData = await getInitialAdvice();

  return (
    <div className="center-on-screen">
      <AdviceCard
        adviceNumber={initialData.slip.id}
        advice={initialData.slip.advice}
      />
    </div>
  );
}
