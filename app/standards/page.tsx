"use client"

import { BookOpen, Clock, Users, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function StandardsPage() {
  const standards = [
    {
      id: "ifrs-15",
      title: "IFRS 15: Revenue from Contracts with Customers",
      description: "Learn how to recognize revenue from contracts with customers, including the five-step model.",
      difficulty: "Intermediate",
      duration: "4 hours",
      topics: ["Revenue Recognition", "Contract Assets", "Performance Obligations"],
      progress: 75,
      rating: 4.8,
      students: 1250,
    },
    {
      id: "ifrs-16",
      title: "IFRS 16: Leases",
      description: "Master lease accounting for both lessees and lessors under the new lease standard.",
      difficulty: "Advanced",
      duration: "5 hours",
      topics: ["Lease Classification", "Right-of-use Assets", "Lease Liabilities"],
      progress: 100,
      rating: 4.9,
      students: 980,
    },
    {
      id: "ias-1",
      title: "IAS 1: Presentation of Financial Statements",
      description: "Understand the fundamental principles for presenting financial statements.",
      difficulty: "Beginner",
      duration: "3 hours",
      topics: ["Financial Statement Structure", "Going Concern", "Materiality"],
      progress: 45,
      rating: 4.7,
      students: 1500,
    },
    {
      id: "ifrs-9",
      title: "IFRS 9: Financial Instruments",
      description: "Comprehensive guide to classification, measurement, and impairment of financial instruments.",
      difficulty: "Advanced",
      duration: "6 hours",
      topics: ["Classification", "Impairment", "Hedge Accounting"],
      progress: 0,
      rating: 4.6,
      students: 750,
    },
    {
      id: "ias-16",
      title: "IAS 16: Property, Plant and Equipment",
      description: "Learn about recognition, measurement, and depreciation of PPE.",
      difficulty: "Intermediate",
      duration: "3.5 hours",
      topics: ["Initial Recognition", "Depreciation", "Revaluation"],
      progress: 30,
      rating: 4.5,
      students: 890,
    },
    {
      id: "ifrs-3",
      title: "IFRS 3: Business Combinations",
      description: "Master the accounting for business combinations and goodwill.",
      difficulty: "Advanced",
      duration: "4.5 hours",
      topics: ["Acquisition Method", "Goodwill", "Non-controlling Interests"],
      progress: 0,
      rating: 4.4,
      students: 650,
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
              <Link href="/standards" className="text-blue-600 font-medium">
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
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">IFRS Standards Library</h2>
          <p className="text-gray-600">
            Comprehensive learning materials for International Financial Reporting Standards
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input placeholder="Search standards..." className="flex-1" />
            <div className="flex gap-2">
              <Button variant="outline">All Levels</Button>
              <Button variant="outline">In Progress</Button>
              <Button variant="outline">Not Started</Button>
            </div>
          </div>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {standards.map((standard) => (
            <Card key={standard.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{standard.title}</CardTitle>
                  <Badge className={getDifficultyColor(standard.difficulty)}>{standard.difficulty}</Badge>
                </div>
                <CardDescription>{standard.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Topics */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Key Topics:</p>
                    <div className="flex flex-wrap gap-1">
                      {standard.topics.map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{standard.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{standard.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{standard.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {standard.progress > 0 && (
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-900">{standard.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${standard.progress}%` }}></div>
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <Link href={`/standards/${standard.id}`}>
                    <Button className="w-full">
                      {standard.progress === 0 ? "Start Learning" : standard.progress === 100 ? "Review" : "Continue"}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
