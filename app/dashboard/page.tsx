"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Briefcase, Search, FileText, BookOpen, Settings, LogOut } from 'lucide-react';

export default function Dashboard() {
  const [progress, setProgress] = useState(45);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <aside className="w-64 bg-white dark:bg-gray-800 p-4">
        <div className="flex items-center space-x-2 mb-6">
          <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">ApplyLikeMe</span>
        </div>
        <nav>
          <Link href="/dashboard" className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
            <Briefcase className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/applications" className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
            <FileText className="h-5 w-5" />
            <span>Applications</span>
          </Link>
          <Link href="/job-search" className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
            <Search className="h-5 w-5" />
            <span>Job search</span>
          </Link>
          <Link href="/profile" className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
            <BookOpen className="h-5 w-5" />
            <span>Profile</span>
          </Link>
          <Link href="/resume-builder" className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
            <FileText className="h-5 w-5" />
            <span>Resume Builder</span>
          </Link>
          <Link href="/pricing" className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
            <Settings className="h-5 w-5" />
            <span>Pricing</span>
          </Link>
        </nav>
        <div className="mt-auto pt-4">
          <Button variant="outline" className="w-full flex items-center justify-center">
            <LogOut className="h-5 w-5 mr-2" />
            <span>Logout</span>
          </Button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Good Afternoon Peter,</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Getting Started</h2>
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{progress}% done</p>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Complete your profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">Add more details</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Search for Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">Find jobs that match your skills</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Update application status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">Keep your job applications up to date</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Prepare for Interview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">Browse our interview resources to help you prepare</p>
            </CardContent>
          </Card>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Applications Tracking</h2>
          {/* Add a chart component here */}
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400">Chart placeholder</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Resources</h2>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="h-5 w-5 mr-2" />
              Resume and cover letter template
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <BookOpen className="h-5 w-5 mr-2" />
              Interview preparation guide
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Search className="h-5 w-5 mr-2" />
              Job search strategies
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}