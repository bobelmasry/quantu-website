import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    category: "Mathematics",
    author: "AN1DEV",
    date: "29 October 2025",
    title: "How to Study Mathematics Smarter.",
    image: "/placeholder-blog1.jpg",
    link: "/how-to-study-mathematics-smarter",
  },
  {
    category: "IGCSE & IAL",
    author: "AN1DEV",
    date: "23 August 2022",
    title: "How to Prepare for IGCSE Exams",
    image: "/placeholder-blog2.jpg",
    link: "/how-to-prepare-for-igcse-exams",
  },
  {
    category: "Quantu-IG exam preparation tips",
    author: "AN1DEV",
    date: "23 August 2022",
    title: "The 8-Step IGCSE Preparation Strategy",
    image: "/placeholder-blog3.jpg",
    link: "/the-8-step-igcse-preparation-strategy",
  },
];

export function BlogPreview() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Study Smarter with Our Blog
          </h2>
          <p className="text-lg text-gray-600">
            Get expert tips, study strategies, and exam preparation advice from our educators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-4xl font-bold opacity-20">
                  📚
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <CardTitle className="text-lg hover:text-blue-600 cursor-pointer">
                  {post.title}
                </CardTitle>
                <div className="text-sm text-gray-500">
                  by {post.author}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Read More Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}