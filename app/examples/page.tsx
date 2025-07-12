"use client"

import { BookOpen, Clock, TrendingUp, Building, Smartphone, Truck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function ExamplesPage() {
  const examples = [
    {
      id: "software-revenue",
      title: "Software License Revenue Recognition",
      description:
        "A technology company sells software licenses with ongoing support. Learn how to identify performance obligations and allocate transaction price.",
      standard: "IFRS 15",
      industry: "Technology",
      difficulty: "Intermediate",
      duration: "25 min",
      icon: <Smartphone className="h-6 w-6" />,
      concepts: ["Performance Obligations", "Transaction Price", "Revenue Recognition"],
    },
    {
      id: "construction-contract",
      title: "Long-term Construction Contract",
      description:
        "A construction company builds a custom office building over 18 months. Understand over-time vs point-in-time revenue recognition.",
      standard: "IFRS 15",
      industry: "Construction",
      difficulty: "Advanced",
      duration: "35 min",
      icon: <Building className="h-6 w-6" />,
      concepts: ["Over-time Recognition", "Variable Consideration", "Contract Assets"],
    },
    {
      id: "lease-accounting",
      title: "Office Lease Accounting",
      description:
        "A company signs a 5-year office lease with renewal options. Learn to calculate lease liabilities and right-of-use assets.",
      standard: "IFRS 16",
      industry: "Real Estate",
      difficulty: "Intermediate",
      duration: "30 min",
      icon: <Building className="h-6 w-6" />,
      concepts: ["Lease Liability", "ROU Asset", "Discount Rate"],
    },
    {
      id: "financial-instruments",
      title: "Bond Investment Classification",
      description:
        "A bank invests in corporate bonds. Understand SPPI test and business model assessment for classification.",
      standard: "IFRS 9",
      industry: "Financial Services",
      difficulty: "Advanced",
      duration: "40 min",
      icon: <TrendingUp className="h-6 w-6" />,
      concepts: ["SPPI Test", "Business Model", "Fair Value"],
    },
    {
      id: "ppe-revaluation",
      title: "Manufacturing Equipment Revaluation",
      description:
        "A manufacturer revalues its production equipment. Learn about revaluation model and subsequent measurement.",
      standard: "IAS 16",
      industry: "Manufacturing",
      difficulty: "Intermediate",
      duration: "20 min",
      icon: <Truck className="h-6 w-6" />,
      concepts: ["Revaluation Model", "Depreciation", "Revaluation Surplus"],
    },
    {
      id: "business-combination",
      title: "Tech Company Acquisition",
      description:
        "A large corporation acquires a startup. Understand purchase price allocation and goodwill calculation.",
      standard: "IFRS 3",
      industry: "Technology",
      difficulty: "Advanced",
      duration: "45 min",
      icon: <Smartphone className="h-6 w-6" />,
      concepts: ["Purchase Price Allocation", "Goodwill", "Fair Value"],
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
      "IAS 16": "bg-green-100 text-green-800",
      "IFRS 3": "bg-red-100 text-red-800",
    }
    return colors[standard as keyof typeof colors] || "bg-gray-100 text-gray-800"
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
              <Link href="/examples" className="text-blue-600 font-medium">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Practice Examples</h2>
          <p className="text-gray-600">Work through real-world scenarios to apply IFRS standards in practice</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input placeholder="Search examples..." className="flex-1" />
            <div className="flex gap-2">
              <Button variant="outline">All Standards</Button>
              <Button variant="outline">All Industries</Button>
              <Button variant="outline">All Levels</Button>
            </div>
          </div>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {examples.map((example) => (
            <Card key={example.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">{example.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{example.title}</CardTitle>
                      <p className="text-sm text-gray-600">{example.industry}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className={getStandardColor(example.standard)}>{example.standard}</Badge>
                    <Badge className={getDifficultyColor(example.difficulty)}>{example.difficulty}</Badge>
                  </div>
                </div>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Key Concepts */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Key Concepts:</p>
                    <div className="flex flex-wrap gap-1">
                      {example.concepts.map((concept, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {concept}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Duration and Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{example.duration}</span>
                    </div>
                    <Link href={`/examples/${example.id}`}>
                      <Button>Start Example</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Need More Practice?</h3>
              <p className="text-gray-600 mb-4">
                Access our full library of examples and case studies with detailed solutions and explanations.
              </p>
              <Button size="lg">Browse All Examples</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
