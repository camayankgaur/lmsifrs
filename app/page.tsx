"use client"

import { BookOpen, Trophy, Clock, TrendingUp, Play, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  const recentStandards = [
    { id: "ifrs-15", title: "IFRS 15: Revenue from Contracts", progress: 75, status: "In Progress" },
    { id: "ifrs-16", title: "IFRS 16: Leases", progress: 100, status: "Completed" },
    { id: "ias-1", title: "IAS 1: Presentation of Financial Statements", progress: 45, status: "In Progress" },
  ]

  const upcomingTests = [
    { title: "IFRS 15 Practice Quiz", date: "Tomorrow", questions: 15 },
    { title: "Lease Accounting Assessment", date: "Jan 15", questions: 25 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-lg">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">IFRS Learning Hub</h1>
            </div>
            <nav className="flex space-x-6">
              <Link href="/standards" className="text-gray-600 hover:text-blue-600 font-medium">
                Standards
              </Link>
              <Link href="/examples" className="text-gray-600 hover:text-blue-600 font-medium">
                Examples
              </Link>
              <Link href="/tests" className="text-gray-600 hover:text-blue-600 font-medium">
                Tests
              </Link>
              <Link href="/progress" className="text-gray-600 hover:text-blue-600 font-medium">
                Progress
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Student!</h2>
          <p className="text-gray-600">
            Continue your IFRS learning journey and master international accounting standards.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Standards Studied</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Tests Completed</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
                <Trophy className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Study Hours</p>
                  <p className="text-2xl font-bold text-gray-900">47</p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Score</p>
                  <p className="text-2xl font-bold text-gray-900">87%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Continue Learning */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Continue Learning</span>
              </CardTitle>
              <CardDescription>Pick up where you left off</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentStandards.map((standard) => (
                <div key={standard.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">{standard.title}</h3>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        standard.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {standard.status}
                    </span>
                  </div>
                  <Progress value={standard.progress} className="mb-2" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{standard.progress}% complete</span>
                    <Link href={`/standards/${standard.id}`}>
                      <Button size="sm" variant="outline">
                        {standard.status === "Completed" ? "Review" : "Continue"}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Tests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5" />
                <span>Upcoming Tests</span>
              </CardTitle>
              <CardDescription>Stay on track with your assessments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingTests.map((test, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{test.title}</h3>
                      <p className="text-sm text-gray-600">
                        {test.questions} questions • Due {test.date}
                      </p>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    Start Test
                  </Button>
                </div>
              ))}

              <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                <CheckCircle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">All caught up! New tests will appear here.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/standards">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900">Browse Standards</h4>
                  <p className="text-sm text-gray-600">Explore all IFRS standards</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/examples">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Play className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900">Practice Examples</h4>
                  <p className="text-sm text-gray-600">Work through real scenarios</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/tests">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-medium text-gray-900">Take a Quiz</h4>
                  <p className="text-sm text-gray-600">Test your knowledge</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
