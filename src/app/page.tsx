import Image from 'next/image';
import ReadyToTake from '../components/ReadyToTake';

export default function Home() {
  return (
    <main className="bg-black text-white flex flex-col w-full h-full">
      <ReadyToTake />
    </main>
  );
}
