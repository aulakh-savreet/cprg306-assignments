import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="mt-8 text-lg">
        <Link href="/week-2" className="text-blue-600 hover:text-blue-800">
          Go to Week 2 Assignment
        </Link>
      </div>
    </main>
  );
}
