import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-blue-900 dark:to-gray-900">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">AIM</span>
          </div>
          <div className="space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About Us</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Pricing</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact Us</Link>
            <Link href="/resume" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Resume</Link>
          </div>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-600 dark:text-blue-400">Track Your Applications</h1>
        <h2 className="text-4xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Apply Like a Pro</h2>
        <p className="text-xl mb-12 text-gray-600 dark:text-gray-300">
          We handle the research, send out applications, manage your submissions, follow up on your behalf, and notify you when interviews are scheduled.
          <br />
          Let us simplify your job search journey.
        </p>
        <Button size="lg" asChild>
          <Link href="/get-started">Get Started</Link>
        </Button>
      </main>
    </div>
  );
}