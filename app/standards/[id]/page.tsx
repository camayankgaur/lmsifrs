"use client"

import { ArrowLeft, BookOpen, Play, FileText, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StandardDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in real app, this would be fetched based on params.id
  const standard = {
    id: "ifrs-15",
    title: "IFRS 15: Revenue from Contracts with Customers",
    description:
      "Master the five-step model for revenue recognition and understand how to apply it to various contract scenarios.",
    difficulty: "Intermediate",
    duration: "4 hours",
    progress: 75,
    rating: 4.8,
    students: 1250,
    lastUpdated: "December 2024",
  }

  const modules = [
    {
      id: 1,
      title: "Introduction to IFRS 15",
      duration: "30 min",
      completed: true,
      type: "video",
    },
    {
      id: 2,
      title: "The Five-Step Model",
      duration: "45 min",
      completed: true,
      type: "reading",
    },
    {
      id: 3,
      title: "Identifying Performance Obligations",
      duration: "40 min",
      completed: true,
      type: "video",
    },
    {
      id: 4,
      title: "Transaction Price Determination",
      duration: "35 min",
      completed: false,
      type: "reading",
      current: true,
    },
    {
      id: 5,
      title: "Allocating Transaction Price",
      duration: "50 min",
      completed: false,
      type: "video",
    },
    {
      id: 6,
      title: "Revenue Recognition Timing",
      duration: "45 min",
      completed: false,
      type: "reading",
    },
    {
      id: 7,
      title: "Contract Modifications",
      duration: "30 min",
      completed: false,
      type: "video",
    },
    {
      id: 8,
      title: "Practical Examples",
      duration: "60 min",
      completed: false,
      type: "exercise",
    },
  ]

  const examples = [
    {
      title: "Software License Revenue Recognition",
      description: "A technology company selling software licenses with support services",
      difficulty: "Intermediate",
      duration: "20 min",
    },
    {
      title: "Construction Contract Accounting",
      description: "Long-term construction project with variable consideration",
      difficulty: "Advanced",
      duration: "35 min",
    },
    {
      title: "Subscription Service Revenue",
      description: "Monthly subscription service with performance obligations",
      difficulty: "Beginner",
      duration: "15 min",
    },
  ]

  const getModuleIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-4 w-4" />
      case "reading":
        return <FileText className="h-4 w-4" />
      case "exercise":
        return <BookOpen className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

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
            <Link href="/standards">
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Standards</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Standard Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Badge className={getDifficultyColor(standard.difficulty)}>{standard.difficulty}</Badge>
            <span className="text-sm text-gray-600">Last updated: {standard.lastUpdated}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{standard.title}</h1>
          <p className="text-gray-600 mb-4">{standard.description}</p>

          {/* Progress */}
          <div className="bg-white rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Your Progress</span>
              <span className="text-sm text-gray-600">{standard.progress}% complete</span>
            </div>
            <Progress value={standard.progress} className="mb-2" />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{standard.duration} total</span>
                </div>
              </div>
              <Button size="sm">Continue Learning</Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="modules" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="modules">Learning Modules</TabsTrigger>
            <TabsTrigger value="examples">Practice Examples</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Modules</CardTitle>
                <CardDescription>Complete each module in order to master IFRS 15 revenue recognition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {modules.map((module) => (
                    <div
                      key={module.id}
                      className={`flex items-center justify-between p-4 rounded-lg border ${
                        module.current ? "border-blue-200 bg-blue-50" : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-full ${
                            module.completed ? "bg-green-100" : module.current ? "bg-blue-100" : "bg-gray-100"
                          }`}
                        >
                          {module.completed ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            getModuleIcon(module.type)
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{module.title}</h3>
                          <p className="text-sm text-gray-600">{module.duration}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={module.completed ? "outline" : "default"}
                        disabled={!module.completed && !module.current}
                      >
                        {module.completed ? "Review" : module.current ? "Continue" : "Locked"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {examples.map((example, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{example.title}</CardTitle>
                      <Badge className={getDifficultyColor(example.difficulty)}>{example.difficulty}</Badge>
                    </div>
                    <CardDescription>{example.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{example.duration}</span>
                      </div>
                      <Button size="sm">Start Example</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Official IFRS 15 Standard</CardTitle>
                  <CardDescription>Download the complete IFRS 15 standard document</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Implementation Guidance</CardTitle>
                  <CardDescription>Practical guidance and examples from the IASB</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Reference Sheet</CardTitle>
                  <CardDescription>Summary of key concepts and decision trees</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Cheat Sheet
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Practice Quiz</CardTitle>
                  <CardDescription>Test your knowledge with 20 questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/tests/ifrs-15-quiz">
                    <Button className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Take Quiz
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
