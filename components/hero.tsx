import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Sparkles, GraduationCap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-indigo-200 to-pink-200 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-20 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">Trusted by 1000+ Students</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Master{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            IGCSE & IAL
          </span>{" "}
          Exams with{" "}
          <span className="font-serif italic text-blue-600">Confidence</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Quantu-IG is your complete learning hub for IGCSE and IAL success - offering online courses,
          past papers, mark schemes, model answers, and step-by-step video solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <BookOpen className="w-5 h-5 mr-2" />
            Explore Courses
          </Button>

          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 hover:bg-gray-50 transition-all duration-300">
            <FileText className="w-5 h-5 mr-2" />
            Browse Past Papers
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 mr-2" />
              95%
            </div>
            <div className="text-sm text-gray-600">Pass Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
            <div className="text-sm text-gray-600">A-A* Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-sm text-gray-600">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Courses</div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-16 text-white">
          <path fill="currentColor" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}