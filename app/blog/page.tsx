"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, BookOpen, FileText, Lightbulb } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How to Study Mathematics Smarter",
    excerpt: "Discover effective strategies and techniques to improve your mathematics study habits and achieve better results in your exams.",
    category: "Mathematics",
    author: "AN1DEV",
    date: "29 October 2025",
    readTime: "5 min read",
    image: "/placeholder-blog1.jpg",
  },
  {
    id: 2,
    title: "How to Prepare for IGCSE Exams",
    excerpt: "A comprehensive guide to preparing for your IGCSE examinations with proven strategies and study techniques.",
    category: "IGCSE & IAL",
    author: "AN1DEV",
    date: "23 August 2022",
    readTime: "8 min read",
    image: "/placeholder-blog2.jpg",
  },
  {
    id: 3,
    title: "The 8-Step IGCSE Preparation Strategy",
    excerpt: "Follow this step-by-step strategy to maximize your IGCSE exam preparation and achieve your target grades.",
    category: "Exam Preparation",
    author: "AN1DEV",
    date: "23 August 2022",
    readTime: "6 min read",
    image: "/placeholder-blog3.jpg",
  },
  {
    id: 4,
    title: "Effective Note-Taking Techniques for Science Subjects",
    excerpt: "Learn how to take effective notes in Biology, Chemistry, and Physics to improve your understanding and retention.",
    category: "Study Techniques",
    author: "Quantu-IG Team",
    date: "15 July 2022",
    readTime: "7 min read",
    image: "/placeholder-blog4.jpg",
  },
  {
    id: 5,
    title: "Time Management Tips for IAL Students",
    excerpt: "Master time management skills essential for balancing coursework, revision, and extracurricular activities.",
    category: "Time Management",
    author: "Quantu-IG Team",
    date: "10 June 2022",
    readTime: "4 min read",
    image: "/placeholder-blog5.jpg",
  },
  {
    id: 6,
    title: "Understanding Assessment Objectives in English",
    excerpt: "Break down the assessment objectives for English language and literature exams to focus your revision effectively.",
    category: "English",
    author: "Quantu-IG Team",
    date: "5 May 2022",
    readTime: "6 min read",
    image: "/placeholder-blog6.jpg",
  },
];

const categories = [
  { name: "All Posts", count: 24 },
  { name: "Study Techniques", count: 8 },
  { name: "Exam Preparation", count: 6 },
  { name: "Mathematics", count: 4 },
  { name: "Science", count: 3 },
  { name: "English", count: 3 },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantu-<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Study strategies, exam hacks, and motivational insights to help you
              excel in your IGCSE and IAL examinations.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
              <Lightbulb className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Knowledge & Motivation</span>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <span className="text-gray-700">{category.name}</span>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="text-lg">Stay Updated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Get the latest study tips and exam strategies delivered to your inbox.
                    </p>
                    <Button className="w-full" size="sm">
                      Subscribe to Newsletter
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Blog Posts */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                      {/* Blog Image Placeholder */}
                      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                        <div className="text-white text-4xl opacity-20">
                          📚
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="text-xs">{post.category}</Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.date}
                          </div>
                        </div>
                        <CardTitle className="text-xl hover:text-blue-600 cursor-pointer transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                            <span className="mx-2">•</span>
                            {post.readTime}
                          </div>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="default" size="sm">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">3</Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already benefiting from our comprehensive
              study resources and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Courses
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="w-5 h-5 mr-2" />
                Free Resources
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}