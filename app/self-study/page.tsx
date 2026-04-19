"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, BookOpen, FileText, BarChart3, CheckCircle, Star, Clock, Users, ArrowRight, Search } from "lucide-react";

export default function SelfStudyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Complete{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Self-Study System
              </span>
            </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                Everything you need to achieve top grades &mdash; structured progress, expert materials, and flexible scheduling.
              </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Courses
              </Button>
              <Button size="lg" variant="outline">
                <Play className="w-5 h-5 mr-2" />
                How it Works
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-1">Guided Progress Tracks</h3>
                <p className="text-sm text-gray-600">Structured learning paths</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-1">Performance Dashboard</h3>
                <p className="text-sm text-gray-600">Track your improvement</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-1">All Materials Included</h3>
                <p className="text-sm text-gray-600">Complete study package</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-1">Monthly Subscription</h3>
                <p className="text-sm text-gray-600">Flexible, cancel anytime</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                HOW SELF-STUDY HUB WORKS?
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                Simple 6-step process to achieve your academic goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: 1, title: "Choose your subject & level", description: "Select from our comprehensive course catalog" },
                { step: 2, title: "Subscribe monthly (cancel anytime)", description: "Flexible subscription with no long-term commitment" },
                { step: 3, title: "Follow the guided study track", description: "Structured learning path designed by experts" },
                { step: 4, title: "Watch videos & complete exercises", description: "Interactive learning with comprehensive materials" },
                { step: 5, title: "Track progress on your dashboard", description: "Monitor your improvement with detailed analytics" },
                { step: 6, title: "Achieve target grades", description: "Reach your academic goals with proven methods" },
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-blue-200">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black text-2xl shadow-lg">
                      {item.step}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 leading-tight">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-medium leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Play className="w-5 h-5 mr-2" />
                WATCH 90-SECOND EXPLAINER
              </Button>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What&apos;s included in every course?
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Video Library */}
              <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-red-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-black text-gray-900 tracking-wide">VIDEO LIBRARY</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Topic Explanation Videos</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Past Paper Solution Videos</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Exam Technique Workshops</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Common Mistake Analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Study Materials */}
              <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-blue-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-black text-gray-900 tracking-wide">STUDY MATERIALS</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Comprehensive Notes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Classified Questions by Topic</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Past Paper Booklets (10+ years)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Model Answers with Marking Schemes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Study Tools */}
              <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-purple-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-black text-gray-900 tracking-wide">STUDY TOOLS</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Personalized Study Plans</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Smart Revision Schedule</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Topic Mastery Checklists</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Exam Countdown Timer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Progress Tracking */}
              <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-green-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-black text-gray-900 tracking-wide">PROGRESS TRACKING</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Automated Progress Dashboard</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Performance Analytics</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Parent/Student Reports</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">Weakness Identification</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Course Listings */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-1/4">
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle>Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Search */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Search Courses</label>
                      <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input placeholder="Search courses..." className="pl-10" />
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>All Subjects</option>
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                        <option>English</option>
                      </select>
                    </div>

                    {/* Level */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Level</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">IGCSE</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">A-Level</span>
                        </label>
                      </div>
                    </div>

                    <Button className="w-full">Apply Filters</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Course Grid */}
              <div className="lg:w-3/4">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Available Courses</h2>
                  <select className="p-2 border rounded-md">
                    <option>Most Popular</option>
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Essential Mathematics Course",
                      instructor: "AN1DEV",
                      rating: 5.0,
                      reviews: 1,
                      duration: "3h 30m",
                      lessons: 3,
                      level: "All Levels",
                      price: "$49.99"
                    },
                    {
                      title: "Advanced Physics Concepts",
                      instructor: "Dr. Sarah Chen",
                      rating: 4.8,
                      reviews: 12,
                      duration: "5h 15m",
                      lessons: 8,
                      level: "A-Level",
                      price: "$69.99"
                    },
                    {
                      title: "Chemistry Fundamentals",
                      instructor: "Prof. Ahmed Hassan",
                      rating: 4.9,
                      reviews: 8,
                      duration: "4h 45m",
                      lessons: 6,
                      level: "IGCSE",
                      price: "$59.99"
                    },
                  ].map((course, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                        <div className="text-white text-4xl opacity-20">
                          📚
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{course.level}</Badge>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm ml-1">{course.rating} ({course.reviews})</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                          {course.title}
                        </h3>

                        <p className="text-sm text-gray-600 mb-3">
                          By {course.instructor}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </span>
                          <span className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {course.lessons} lessons
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                          <Button size="sm">
                            Enroll Now
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                Real results from our self-study students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ahmed",
                  subject: "IAL Mathematics",
                  improvement: "From C to A in 3 Months",
                  quote: "Sarah didn't just teach math - she taught me how to study. Her weekly plans kept me on track, and the parent reports kept my parents informed without stress.",
                  stats: ["Grade: C → A", "Study Efficiency: +40%", "Confidence: 3/10 → 8/10"]
                },
                {
                  name: "Fatima",
                  subject: "IGCSE Biology",
                  improvement: "Grade Improvement +2 Levels",
                  quote: "The structured approach and video explanations made complex topics so much easier to understand. The progress tracking kept me motivated throughout.",
                  stats: ["Grade: D → B", "Topics Mastered: 15/15", "Exam Confidence: +60%"]
                },
                {
                  name: "Mohammed",
                  subject: "A-Level Physics",
                  improvement: "Consistent High Performance",
                  quote: "The self-study system gave me the flexibility I needed while ensuring I stayed on track. The detailed analytics helped me focus on my weak areas.",
                  stats: ["Average Grade: A-", "Study Time Optimized", "Weak Areas: 0"]
                },
              ].map((story, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {story.name[0]}
                      </div>
                      <div>
                        <h3 className="font-semibold">{story.name}</h3>
                        <p className="text-sm text-gray-600">{story.subject}</p>
                      </div>
                    </div>

                    <Badge className="mb-3 bg-green-100 text-green-800">
                      {story.improvement}
                    </Badge>

                    <blockquote className="text-gray-700 mb-4 italic">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>

                    <div className="space-y-1">
                      {story.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {stat}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to take control of your studies with a proven system?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <Card className="p-6 hover:shadow-xl transition-shadow">
                <CardContent className="text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Browse all Courses</h3>
                  <p className="text-gray-600 mb-4">Explore our complete catalog of self-study courses</p>
                  <Button className="w-full">
                    Browse Courses
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-shadow">
                <CardContent className="text-center">
                  <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Download Course Catalog</h3>
                  <p className="text-gray-600 mb-4">Get our complete course guide as PDF</p>
                  <Button variant="outline" className="w-full">
                    Download Catalog
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Start Your Success Story Today</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of students who have transformed their academic performance with our
                comprehensive self-study system.
              </p>
              <Button size="lg" variant="secondary">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}