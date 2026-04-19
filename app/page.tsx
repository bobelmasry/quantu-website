import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhyChoose } from "@/components/why-choose";
import { FeaturedSubjects } from "@/components/featured-subjects";
import { Courses } from "@/components/courses";
import { Testimonials } from "@/components/testimonials";
import { PastPapers } from "@/components/past-papers";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChoose />
        <FeaturedSubjects />
        <Courses />
        <Testimonials />
        <PastPapers />
      </main>
      <Footer />
    </div>
  );
}
