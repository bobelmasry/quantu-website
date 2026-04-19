import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Download, CheckCircle } from "lucide-react";

export function PastPapers() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Free Resources</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Unlock Past Papers{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Full Power
          </span>
        </h2>

        <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-100">
          Practice smarter, not harder. Our organized past papers, official mark schemes,
          and Model-Answers give you the edge you need to succeed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <FileText className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
            <h3 className="font-semibold mb-2">Past Papers</h3>
            <p className="text-sm text-blue-100">Complete question sets from previous exams</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <CheckCircle className="w-8 h-8 mx-auto mb-4 text-green-300" />
            <h3 className="font-semibold mb-2">Mark Schemes</h3>
            <p className="text-sm text-blue-100">Official marking guidelines and criteria</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Download className="w-8 h-8 mx-auto mb-4 text-purple-300" />
            <h3 className="font-semibold mb-2">Model Answers</h3>
            <p className="text-sm text-blue-100">Exemplar responses for top marks</p>
          </div>
        </div>

        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <FileText className="w-5 h-5 mr-2" />
          Browse Past Paper MODEL ANSWERS
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1">
        <svg viewBox="0 0 1440 120" className="w-full h-20 text-white">
          <path fill="currentColor" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}