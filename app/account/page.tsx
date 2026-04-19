"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, BookOpen, FileText, Settings, LogOut, ShoppingCart, Award, Clock } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">Welcome back!</h3>
                    <p className="text-gray-600 text-sm">Student Account</p>
                  </div>

                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      My Courses
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Downloads
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Orders
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="downloads">Downloads</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6 text-center">
                        <BookOpen className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                        <div className="text-2xl font-bold">3</div>
                        <div className="text-gray-600">Active Courses</div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6 text-center">
                        <Award className="w-8 h-8 mx-auto mb-2 text-green-600" />
                        <div className="text-2xl font-bold">12</div>
                        <div className="text-gray-600">Completed</div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6 text-center">
                        <Clock className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                        <div className="text-2xl font-bold">45h</div>
                        <div className="text-gray-600">Study Time</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <div className="flex-1">
                          <p className="font-medium">Completed Mathematics Unit 4</p>
                          <p className="text-sm text-gray-600">2 days ago</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                        <Award className="w-5 h-5 text-green-600" />
                        <div className="flex-1">
                          <p className="font-medium">Earned Certificate in Biology</p>
                          <p className="text-sm text-gray-600">1 week ago</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 p-3 bg-purple-50 rounded-lg">
                        <FileText className="w-5 h-5 text-purple-600" />
                        <div className="flex-1">
                          <p className="font-medium">Downloaded Chemistry Past Papers</p>
                          <p className="text-sm text-gray-600">2 weeks ago</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Courses Tab */}
                <TabsContent value="courses" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Enrolled Courses</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { name: "Mathematics A-Level", progress: 75, status: "In Progress" },
                        { name: "Biology IGCSE", progress: 100, status: "Completed" },
                        { name: "Chemistry A-Level", progress: 45, status: "In Progress" },
                      ].map((course, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{course.name}</h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="w-24 h-2 bg-gray-200 rounded-full">
                                <div
                                  className="h-2 bg-blue-600 rounded-full"
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600">{course.progress}%</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 rounded text-xs ${
                              course.status === 'Completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {course.status}
                            </span>
                            <Button variant="outline" size="sm" className="ml-2">
                              Continue
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Downloads Tab */}
                <TabsContent value="downloads" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Downloads</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { name: "Mathematics Past Papers 2023", type: "PDF", size: "2.5 MB", date: "2024-01-15" },
                        { name: "Biology Mark Scheme A-Level", type: "PDF", size: "1.8 MB", date: "2024-01-12" },
                        { name: "Chemistry Formula Sheet", type: "PDF", size: "0.5 MB", date: "2024-01-10" },
                      ].map((download, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-8 h-8 text-blue-600" />
                            <div>
                              <h4 className="font-medium">{download.name}</h4>
                              <p className="text-sm text-gray-600">
                                {download.type} • {download.size} • Downloaded {download.date}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Download Again
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <Input defaultValue="John" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <Input defaultValue="Doe" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <Input type="email" defaultValue="john.doe@example.com" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <Input type="password" placeholder="Enter current password" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <Input type="password" placeholder="Enter new password" />
                      </div>

                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Save Changes
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}