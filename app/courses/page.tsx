"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, User, Calendar, MessageCircle, BookOpen, CheckCircle, Star, ArrowRight } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Live Learning,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Real Results
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join scheduled expert-led classes or book personalized 1-on-1 sessions all live, all interactive
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Calendar className="w-5 h-5 mr-2" />
                VIEW UPCOMING CLASSES
              </Button>
              <Button size="lg" variant="outline">
                <User className="w-5 h-5 mr-2" />
                BOOK PRIVATE SESSION
              </Button>
              <Button size="lg" variant="ghost">
                <MessageCircle className="w-5 h-5 mr-2" />
                COMPARE OPTIONS
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Tutors</div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Options */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">PATH SELECTOR</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Choose Your Learning Path
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Live Full Courses */}
              <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-blue-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">LIVE FULL COURSES</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800">Most Popular</Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Expert teacher + class group</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Planned weekly schedule</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Peer interaction & discussion</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Cost-effective</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Complete syllabus coverage</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <BookOpen className="w-5 h-5 mr-2" />
                      BROWSE COURSES
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 1-on-1 Sessions */}
              <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-green-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">1-ON-1 SESSIONS</CardTitle>
                  <Badge className="bg-green-100 text-green-800">Personalized</Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Dedicated private teacher</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Flexible booking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Focus on your weak points</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Instant feedback</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Adjust pace as needed</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                      <User className="w-5 h-5 mr-2" />
                      FIND A TUTOR
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                COMPARISON TABLE: Which Is Right For You?
              </h2>
              <p className="text-lg text-gray-600">
                Compare our learning options to find the perfect fit for your goals
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold bg-blue-50">
                      <div className="flex items-center justify-center">
                        <Users className="w-5 h-5 mr-2 text-blue-600" />
                        Live Full Course
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold bg-green-50">
                      <div className="flex items-center justify-center">
                        <User className="w-5 h-5 mr-2 text-green-600" />
                        1-on-1 Sessions
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Format", group: "Group class", private: "Private, just you" },
                    { feature: "Schedule", group: "Fixed weekly slots", private: "Book when you want" },
                    { feature: "Interaction", group: "Teacher + peers", private: "Direct with teacher" },
                    { feature: "Pace", group: "Class pace", private: "Your pace" },
                    { feature: "Best For", group: "Structured learners", private: "Personalized attention" },
                    { feature: "Community", group: "Study groups & forums", private: "Private feedback" },
                    { feature: "Recording Access", group: "Yes", private: "Yes" },
                    { feature: "Free Trial", group: "Free intro class", private: "Free intro session" },
                  ].map((row, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-6 py-4 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center bg-blue-50/50">{row.group}</td>
                      <td className="px-6 py-4 text-center bg-green-50/50">{row.private}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Need Help Choosing?
            </h2>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Answer 4 Questions:</h3>

                <div className="space-y-6 text-left">
                  <div>
                    <p className="font-medium mb-2">1. Do you prefer learning with peers or alone?</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">With peers</Button>
                      <Button variant="outline" size="sm">Alone</Button>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium mb-2">2. Is your schedule flexible or fixed?</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">Flexible</Button>
                      <Button variant="outline" size="sm">Fixed</Button>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium mb-2">3. Do you need focused help on specific topics?</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">Yes</Button>
                      <Button variant="outline" size="sm">No</Button>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium mb-2">4. Do you need tailored sessions for your needs?</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">Yes</Button>
                      <Button variant="outline" size="sm">No</Button>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  GET RECOMMENDATION
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join thousands of students who have transformed their academic performance with our expert-led courses.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">Free Trial Class</h3>
                    <p className="text-sm text-gray-600 mb-4">Experience our teaching style risk-free</p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Book Free Trial
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200">
                <CardContent className="p-0">
                  <div className="text-center">
                    <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">Consultation Call</h3>
                    <p className="text-sm text-gray-600 mb-4">Get personalized advice for your goals</p>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Schedule Call
                    </Button>
                  </div>
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