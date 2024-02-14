import Image from 'next/image';
import ReadyToTake from '../components/ReadyToTake';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white flex flex-col w-full h-full py-10">
      <ReadyToTake />
      <div className="mt-80"></div>
      <Footer />
    </main>
  );
}
