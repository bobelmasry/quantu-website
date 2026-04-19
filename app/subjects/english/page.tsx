"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, BookOpen, FileText, Video, Award, MessageSquare } from "lucide-react";

export default function EnglishPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Course Navigation */}
        <section className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-indigo-600">O-Level</h3>
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
                <h3 className="text-lg font-semibold mb-4 text-indigo-600">A-Level Edexcel</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Language A
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Language B
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Literature
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-indigo-600">A-Level Cambridge</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    English Language
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    English Literature
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-100">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
              <MessageSquare className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">Language & Literature Excellence</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Master IGCSE & IAL{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                English
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From grammar and comprehension to creative writing and literary analysis, Quantu-IG provides everything
              you need — structured lessons, past exam papers, model essays, and expert feedback — to help you excel
              in English language and literature.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700">
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
                  <PenTool className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
                  <CardTitle className="text-lg">Writing Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Master essay writing and creative composition</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MessageSquare className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <CardTitle className="text-lg">Language Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Deep analysis of texts and language use</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <CardTitle className="text-lg">Exam Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Proven strategies for English exams</p>
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
                  <Badge className="w-fit mx-auto mb-2 bg-indigo-100 text-indigo-800">Reading Comprehension</Badge>
                  <CardTitle className="text-lg">Text Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Master reading comprehension skills</p>
                  <Button variant="outline" size="sm" className="w-full">Practice Questions</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-2 bg-blue-100 text-blue-800">Essay Writing</Badge>
                  <CardTitle className="text-lg">Creative Writing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Develop creative writing techniques</p>
                  <Button variant="outline" size="sm" className="w-full">Practice Questions</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-2 bg-purple-100 text-purple-800">Grammar & Language</Badge>
                  <CardTitle className="text-lg">Language Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Perfect grammar and language use</p>
                  <Button variant="outline" size="sm" className="w-full">Practice Questions</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mx-auto mb-2 bg-green-100 text-green-800">Literature</Badge>
                  <CardTitle className="text-lg">Literary Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Analyze poems, novels, and plays</p>
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