"use client"

import { BookOpen, Trophy, Clock, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TestsPage() {
  const availableTests = [
    {
      id: "ifrs-15-basic",
      title: "IFRS 15 Fundamentals Quiz",
      description: "Test your understanding of the five-step revenue recognition model",
      standard: "IFRS 15",
      questions: 15,
      duration: "20 min",
      difficulty: "Beginner",
      attempts: 0,
      bestScore: null,
    },
    {
      id: "ifrs-16-comprehensive",
      title: "IFRS 16 Comprehensive Assessment",
      description: "Advanced test covering all aspects of lease accounting",
      standard: "IFRS 16",
      questions: 25,
      duration: "35 min",
      difficulty: "Advanced",
      attempts: 2,
      bestScore: 87,
    },
    {
      id: "ias-1-presentation",
      title: "IAS 1 Financial Statement Presentation",
      description: "Quiz on financial statement structure and presentation requirements",
      standard: "IAS 1",
      questions: 12,
      duration: "15 min",
      difficulty: "Intermediate",
      attempts: 1,
      bestScore: 92,
    },
    {
      id: "ifrs-9-classification",
      title: "IFRS 9 Financial Instruments Classification",
      description: "Test your knowledge of financial instrument classification and measurement",
      standard: "IFRS 9",
      questions: 20,
      duration: "30 min",
      difficulty: "Advanced",
      attempts: 0,
      bestScore: null,
    },
  ]

  const recentResults = [
    {
      test: "IFRS 16 Comprehensive Assessment",
      score: 87,
      date: "2 days ago",
      status: "passed",
    },
    {
      test: "IAS 1 Financial Statement Presentation",
      score: 92,
      date: "1 week ago",
      status: "passed",
    },
    {
      test: "IFRS 15 Practice Quiz",
      score: 65,
      date: "2 weeks ago",
      status: "needs-improvement",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStandardColor = (standard: string) => {
    const colors = {
      "IFRS 15": "bg-blue-100 text-blue-800",
      "IFRS 16": "bg-purple-100 text-purple-800",
      "IFRS 9": "bg-indigo-100 text-indigo-800",
      "IAS 1": "bg-green-100 text-green-800",
    }
    return colors[standard as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">IFRS Learning Hub</h1>
              </Link>
            </div>
            <nav className="flex space-x-6">
              <Link href="/standards" className="text-gray-600 hover:text-blue-600 font-medium">
                Standards
              </Link>
              <Link href="/examples" className="text-gray-600 hover:text-blue-600 font-medium">
                Examples
              </Link>
              <Link href="/tests" className="text-blue-600 font-medium">
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
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Knowledge Tests</h2>
          <p className="text-gray-600">
            Assess your understanding of IFRS standards with comprehensive quizzes and assessments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Available Tests */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Tests</h3>
            <div className="space-y-4">
              {availableTests.map((test) => (
                <Card key={test.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{test.title}</CardTitle>
                      <div className="flex gap-2">
                        <Badge className={getStandardColor(test.standard)}>{test.standard}</Badge>
                        <Badge className={getDifficultyColor(test.difficulty)}>{test.difficulty}</Badge>
                      </div>
                    </div>
                    <CardDescription>{test.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Test Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <AlertCircle className="h-4 w-4" />
                            <span>{test.questions} questions</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{test.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Previous Results */}
                      {test.bestScore && (
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Best Score:</span>
                            <span className={`font-semibold ${getScoreColor(test.bestScore)}`}>{test.bestScore}%</span>
                          </div>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm text-gray-600">Attempts:</span>
                            <span className="text-sm text-gray-900">{test.attempts}</span>
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <Link href={`/tests/${test.id}`}>
                        <Button className="w-full">{test.attempts === 0 ? "Start Test" : "Retake Test"}</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Test Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>Your Statistics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tests Completed</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Average Score</span>
                  <span className="font-semibold text-green-600">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Best Score</span>
                  <span className="font-semibold text-green-600">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Time Spent</span>
                  <span className="font-semibold">4.2 hours</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Results */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentResults.map((result, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{result.test}</h4>
                      <span className={`text-sm font-semibold ${getScoreColor(result.score)}`}>{result.score}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{result.date}</span>
                      {result.status === "passed" ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-yellow-500" />
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Study Recommendation */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended Study</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">Based on your recent test results, we recommend reviewing:</p>
                <div className="space-y-2">
                  <Link href="/standards/ifrs-15">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      IFRS 15: Revenue Recognition
                    </Button>
                  </Link>
                  <Link href="/examples/software-revenue">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      Software Revenue Examples
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
