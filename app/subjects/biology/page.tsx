"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, BookOpen, FileText, Video, Award, Dna } from "lucide-react";

export default function BiologyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Course Navigation */}
        <section className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">O-Level</h3>
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
                <h3 className="text-lg font-semibold mb-4 text-green-600">A-Level Edexcel</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">Unit 6</Button>
                  <Button variant="outline" size="sm">Unit 5</Button>
                  <Button variant="outline" size="sm">Unit 4</Button>
                  <Button variant="outline" size="sm">Unit 3</Button>
                  <Button variant="outline" size="sm">Unit 2</Button>
                  <Button variant="outline" size="sm">Unit 1</Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">A-Level Cambridge</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    A2
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    AS
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-teal-100">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
              <Dna className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Life Sciences Excellence</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Master IGCSE & IAL{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Biology
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From cellular biology to human anatomy, Quantu-IG provides everything you need — structured lessons,
              past exam questions, model diagrams, and step-by-step video labs — to help you excel in Biology
              and master life sciences with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
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
                  <Video className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <CardTitle className="text-lg">Video Labs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Step-by-step laboratory demonstrations</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Microscope className="w-8 h-8 mx-auto mb-2 text-teal-600" />
                  <CardTitle className="text-lg">Model Diagrams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Clear, accurate biological illustrations</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <CardTitle className="text-lg">Exam Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Proven strategies for biology exams</p>
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
                  <Badge className="w-fit mx-auto mb-2 bg-green-100 text-green-800">Cell Biology</Badge>
                  <CardTitle className="text-lg">Cellular Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Master cell organelles and functions</p>
                  <Button variant="outline" size="sm" className="w-full">Practice Questions</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-2 bg-blue-100 text-blue-800">Genetics</Badge>
                  <CardTitle className="text-lg">DNA & Inheritance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Understand genetic principles</p>
                  <Button variant="outline" size="sm" className="w-full">Practice Questions</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-2 bg-purple-100 text-purple-800">Ecology</Badge>
                  <CardTitle className="text-lg">Ecosystems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Explore environmental biology</p>
                  <Button variant="outline" size="sm" className="w-full">Practice Questions</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-2 bg-teal-100 text-teal-800">Human Biology</Badge>
                  <CardTitle className="text-lg">Human Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Learn about human physiology</p>
                  <Button variant="outline" size="sm" className="w-full">Practice Questions</Button>
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