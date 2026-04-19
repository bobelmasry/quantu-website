import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Play, Trophy } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Complete Resources",
    description: "Access courses, past papers, mark schemes, and model answers all in one place.",
    gradient: "from-green-400 to-blue-500",
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Experienced teachers specialised in their field, with a proven learning system.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Play,
    title: "Learn by Watching",
    description: "Step-by-step video solutions to help you understand exam questions and strategies.",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: Trophy,
    title: "Proven Success",
    description: "Created for students aiming for top grades in IGCSE and IAL exams.",
    gradient: "from-orange-400 to-red-500",
  },
];

export function WhyChoose() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quantu-IG
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the preferred choice for IGCSE and IAL exam preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <CardHeader className="pb-4">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl text-center group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 border border-blue-100">
            <Trophy className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Join 10,000+ successful students</span>
          </div>
        </div>
      </div>
    </section>
  );
}