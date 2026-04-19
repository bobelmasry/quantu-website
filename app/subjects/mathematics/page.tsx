"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, BookOpen, FileText, Video, Award } from "lucide-react";

export default function MathematicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Course Navigation */}
        <section className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">OL-Level</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Edexcel
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Cambridge
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">A-Level Edexcel</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">Statistics 1</Button>
                  <Button variant="outline" size="sm">Pure 4</Button>
                  <Button variant="outline" size="sm">Pure 3</Button>
                  <Button variant="outline" size="sm">Mechanics 1</Button>
                  <Button variant="outline" size="sm">Pure 2</Button>
                  <Button variant="outline" size="sm">Pure 1</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
              <Calculator className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Mathematics Mastery</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Master IGCSE & IAL{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mathematics
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From algebra to calculus, Quantu-Mathics provides everything you need — structured courses,
              past papers, model answers, and video walkthroughs — to help you achieve top grades in Mathematics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <BookOpen className="w-5 h-5 mr-2" />
                Enrol in Course
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="w-5 h-5 mr-2" />
                Browse Past Papers
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Video className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <CardTitle className="text-lg">Video Walkthroughs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Step-by-step video solutions for complex problems</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <CardTitle className="text-lg">Model Answers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Exemplar responses that earn top marks</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <CardTitle className="text-lg">Proven Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Structured approach to exam excellence</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Practice with Real Exam Questions
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Build confidence by solving past exam papers. Access official mark schemes and model
              answers to understand what examiners expect.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-2">IGCSE</Badge>
                  <CardTitle className="text-lg">Foundation Papers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Build strong fundamentals</p>
                  <Button variant="outline" size="sm" className="w-full">Access Papers</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-2 bg-blue-100 text-blue-800">A-Level</Badge>
                  <CardTitle className="text-lg">Advanced Practice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Challenge yourself with complex problems</p>
                  <Button variant="outline" size="sm" className="w-full">Access Papers</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-2 bg-green-100 text-green-800">Mark Schemes</Badge>
                  <CardTitle className="text-lg">Official Answers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Understand examiner expectations</p>
                  <Button variant="outline" size="sm" className="w-full">View Schemes</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-2 bg-purple-100 text-purple-800">Model Answers</Badge>
                  <CardTitle className="text-lg">Perfect Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Learn from top-scoring responses</p>
                  <Button variant="outline" size="sm" className="w-full">View Examples</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}