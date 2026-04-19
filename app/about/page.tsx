"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Video, Award, Target, Heart, Zap, Shield, Star, FileText } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-gray-600">
              <span>Home</span> <span className="mx-2">/</span> <span className="text-blue-600">About Us</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">About Our Company</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Make the Leap in Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Learning Journey
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We are more than just an education platform. Quantu-IG is a student-first ecosystem
                  built to empower IGCSE and IAL learners with world-class study tools, premium resources,
                  and cutting-edge strategies.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Users className="w-5 h-5 mr-2" />
                  Explore Our Teachers
                </Button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎓</div>
                    <h3 className="text-2xl font-bold mb-4">Student-First Approach</h3>
                    <p className="text-blue-100">
                      Empowering IGCSE & IAL students with the tools they need to succeed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Quantu-IG Started?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Quantu-IG was created with a simple mission: to help IGCSE & IAL students study smarter, not harder.
                Too often, students feel lost between endless textbooks, scattered past papers, and outdated resources.
                We saw the gap — and decided to fill it.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a team of experienced educators, examiners, and content creators, Quantu-IG was built to provide:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <span>Structured online courses aligned with the latest syllabus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-green-600" />
                  <span>Comprehensive study notes & model answers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Video className="w-6 h-6 text-purple-600" />
                  <span>Organized past papers and mark schemes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-orange-600" />
                  <span>Recorded solving sessions & video explanations</span>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Today, Quantu-IG is more than a website — it's a movement for high-achieving students across
                Cambridge, Pearson Edexcel, and Oxford exam boards.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Goals */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Our Vision & Goals</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Drives Us?
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Target className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600">
                    To be the leading global platform for IGCSE & IAL learners, transforming how students
                    access knowledge, prepare for exams, and achieve academic excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Award className="w-12 h-12 text-green-600 mb-4" />
                  <CardTitle className="text-2xl">Our Goals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Empower students to excel with confidence in exams</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Build the largest curated resource hub for IGCSE & IAL learners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Provide affordable, premium self-study tools for independent learners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span>Create a community-driven ecosystem where education meets innovation</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Quantu-IG Difference */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">The Quantu-IG Difference</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Quantu-IG?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle className="text-lg">Built for Students, By Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Every resource is syllabus-aligned and created by experienced educators</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Zap className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                  <CardTitle className="text-lg">All-in-One Platform</CardTitle>
                <CardHeader>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Courses, past papers, model answers, study tools, and study plans in one place</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Video className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <CardTitle className="text-lg">Visual Learning Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Recorded explanations, solving sessions, and revision videos</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Heart className="w-12 h-12 mx-auto mb-4 text-red-600" />
                  <CardTitle className="text-lg">Motivation Beyond Books</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Relic souvenirs & merch to keep your study desk inspiring</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Shield className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                  <CardTitle className="text-lg">Trusted & Secure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Premium resources stored safely, only for our subscribers</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <Star className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                  <CardTitle className="text-lg">5+ Years Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Proven track record of helping students achieve academic excellence</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Join the Quantu-IG Community
              </Button>
            </div>
          </div>
        </section>

        {/* Ecosystem Overview */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto text-center">
            <Badge className="mb-4">Meet the Ecosystem (Mini Overview)</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              What's Inside Quantu-IG?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>Study Hub</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Online Courses + Self-Study Hub (premium plans for every student)</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <FileText className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle>Quantu-Blog</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Study strategies, exam hacks, and motivational insights</p>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" variant="outline" className="mt-8">
              Learn More
            </Button>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <Badge className="mb-4">Community & Partnerships</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Beyond Students - For Schools & Institutions Too
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We partner with schools, learning centers, and institutions to provide custom packages,
              bulk licenses, and premium institutional access. If you're an educator or institution
              looking to empower your students → Let's collaborate.
            </p>

            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Partner With Us
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}