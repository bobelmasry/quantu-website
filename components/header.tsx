"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">Quantu-IG</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Subjects
              </button>
              <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg py-2 mt-1">
                <Link href="/mathematics" className="block px-4 py-2 hover:bg-gray-100">Mathematics</Link>
                <Link href="/biology" className="block px-4 py-2 hover:bg-gray-100">Biology</Link>
                <Link href="/chemistry" className="block px-4 py-2 hover:bg-gray-100">Chemistry</Link>
                <Link href="/physics" className="block px-4 py-2 hover:bg-gray-100">Physics</Link>
                <Link href="/english" className="block px-4 py-2 hover:bg-gray-100">English</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Courses ▼
              </button>
              <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg py-2 mt-1">
                <Link href="/courses" className="block px-4 py-2 hover:bg-gray-100">All Courses</Link>
                <Link href="/self-study" className="block px-4 py-2 hover:bg-gray-100">Self Study</Link>
              </div>
            </div>
            <Link href="/self-study" className="text-gray-700 hover:text-blue-600 transition-colors">
              Self Study
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-blue-600 transition-colors">
              My Account
            </Link>
          </nav>

          {/* Cart and Social Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart
              <Badge variant="secondary" className="ml-2">0</Badge>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-blue-600 py-2">Home</Link>
              <div className="space-y-1">
                <div className="font-medium text-gray-900">Subjects</div>
                <Link href="/mathematics" className="block pl-4 text-gray-700 hover:text-blue-600 py-1">Mathematics</Link>
                <Link href="/biology" className="block pl-4 text-gray-700 hover:text-blue-600 py-1">Biology</Link>
                <Link href="/chemistry" className="block pl-4 text-gray-700 hover:text-blue-600 py-1">Chemistry</Link>
                <Link href="/physics" className="block pl-4 text-gray-700 hover:text-blue-600 py-1">Physics</Link>
                <Link href="/english" className="block pl-4 text-gray-700 hover:text-blue-600 py-1">English</Link>
              </div>
              <div className="space-y-1">
                <div className="font-medium text-gray-900">Courses</div>
                <Link href="/courses" className="block pl-4 text-gray-700 hover:text-blue-600 py-1">All Courses</Link>
                <Link href="/self-study" className="block pl-4 text-gray-700 hover:text-blue-600 py-1">Self Study</Link>
              </div>
              <Link href="/self-study" className="text-gray-700 hover:text-blue-600 py-2">Self Study</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 py-2">About Us</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 py-2">Contact Us</Link>
              <Link href="/account" className="text-gray-700 hover:text-blue-600 py-2">My Account</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}