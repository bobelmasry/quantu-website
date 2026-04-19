"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Adam",
    role: "Mathematics AS-L student",
    content: "Thank you ya Doctor from the deep of my heart ❤, I really appreciate your assistance and admire your personality. Thank you really for all of your hard work هتوحشني يا دوكتور 🫶😘🌹",
    avatar: "A",
  },
  {
    name: "Mennah Hany",
    role: "Mathematics AS-L student",
    content: "For me u r one of the best assistants i had ever had and really appreciate every second u placed an effort on helping me and the others and u support always meant a lot for me Idk what to say other than really thank u for everything and gl for what’s coming next 🤍❤️‍🩹",
    avatar: "M",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Students Say?
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our successful students about their learning journey with Quantu-IG.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-gray-700 mb-4 italic">
                            &ldquo;{testimonial.content}&rdquo;
                          </p>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}