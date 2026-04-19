import { Button } from "@/components/ui/button";
import { User, TrendingUp, Award, BookOpen, Star, Users } from "lucide-react";

export function Courses() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Featured Course</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif leading-tight">
              Quantu-<span className="text-blue-600">Mathics</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Quantu-Mathics is a team of expert mathematicians, offering a well-designed learning system
              with a clear course plan and specially created study materials, including notes, classified,
              solving videos, and model answers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-sm text-gray-600 font-medium">Pass Rate</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-sm text-gray-600 font-medium">A-A* Rate</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-sm text-gray-600 font-medium">Assignment Completion Rate</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <User className="w-5 h-5 mr-2" />
                Follow on Instagram
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:bg-gray-50 transition-all duration-300">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Courses
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:bg-gray-50 transition-all duration-300">
                <Award className="w-4 h-4 mr-2" />
                Success Stories
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:bg-gray-50 transition-all duration-300">
                <BookOpen className="w-4 h-4 mr-2" />
                Study Materials
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-3xl font-bold mb-4">Expert Mathematics Learning</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Join thousands of students mastering mathematics with our proven methods and expert guidance.
                </p>

                <div className="flex justify-center items-center gap-4 mt-6">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
                      10K+
                    </div>
                  </div>
                  <span className="text-blue-100 font-medium">Students Enrolled</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-bounce shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full opacity-80 animate-pulse shadow-lg"></div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-pink-400 rounded-full opacity-60 animate-ping shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}