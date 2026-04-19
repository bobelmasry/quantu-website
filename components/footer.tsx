import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Quantu-IG</h3>
            <p className="text-gray-400 mb-6">
              Helping IGCSE & IAL students by providing all the materials they need during their learning journey.
              As a new website, we promise to add more subjects, papers, and model answers over time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subjects</h4>
            <ul className="space-y-2">
              <li><Link href="/mathematics" className="text-gray-400 hover:text-white transition-colors">Mathematics</Link></li>
              <li><Link href="/english" className="text-gray-400 hover:text-white transition-colors">English</Link></li>
              <li><Link href="/physics" className="text-gray-400 hover:text-white transition-colors">Physics</Link></li>
              <li><Link href="/chemistry" className="text-gray-400 hover:text-white transition-colors">Chemistry</Link></li>
              <li><Link href="/biology" className="text-gray-400 hover:text-white transition-colors">Biology</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/past-papers" className="text-gray-400 hover:text-white transition-colors">Past Papers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:contact@quantuig.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@quantuig.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href="tel:+201007367505" className="text-gray-400 hover:text-white transition-colors">
                  +201007367505
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">New Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Quantu-IG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}