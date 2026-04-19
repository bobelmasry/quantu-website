import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Microscope, BookOpen } from "lucide-react";

const subjects = [
  {
    title: "Mathematics",
    description: "Master problem-solving with past paper model-answers and detailed solutions.",
    icon: Calculator,
    gradient: "from-blue-500 to-purple-600",
    color: "text-blue-600",
  },
  {
    title: "Biology",
    description: "Understand key concepts with guided lessons and exam strategies.",
    icon: Microscope,
    gradient: "from-green-500 to-teal-600",
    color: "text-green-600",
  },
  {
    title: "English",
    description: "Improve writing, comprehension, and exam-solving techniques.",
    icon: BookOpen,
    gradient: "from-orange-500 to-red-600",
    color: "text-orange-600",
  },
];

export function FeaturedSubjects() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Core Subjects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of subjects designed for IGCSE and IAL success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {subjects.map((subject, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Icon background */}
              <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-200 group-hover:to-gray-300 transition-colors duration-300">
                <div className={`p-6 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                  <subject.icon className={`w-12 h-12 ${subject.color}`} />
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center group-hover:text-blue-700 transition-colors duration-300">
                  {subject.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-6">
                <p className="text-gray-600 text-center leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {subject.description}
                </p>
                <Button variant="outline" className="w-full group/btn hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animation-delay-100"></div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group">
            View All Subjects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}