"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const ContactSection = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                  <a
                    href="mailto:mkatha14@gmail.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    mkatha14@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                  <a
                    href="tel:+19199515628"
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    +1 (919) 951-5628
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">Charlotte, North Carolina</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mkatha14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 p-3 rounded-full transition-colors"
                >
                  <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://linkedin.com/in/mkatha14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 p-3 rounded-full transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="mailto:mkatha14@gmail.com"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 p-3 rounded-full transition-colors"
                >
                  <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <Input
                      
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-gray-50 dark:bg-gray-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-gray-50 dark:bg-gray-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className="bg-gray-50 dark:bg-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="bg-gray-50 dark:bg-gray-900"
                  />
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

