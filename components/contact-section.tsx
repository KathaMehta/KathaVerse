"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react"
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
    <section id="contact" className="py-24 bg-card dark:bg-navy/90">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-2">Get In Touch</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent via-rosegold to-accent mx-auto mb-4"></div>
          <p className="text-accent/80 italic font-light">Let's connect and create something amazing</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-8">Let's Talk</h3>

            <div className="space-y-8 mb-10">
              <div className="flex items-start">
                <div className="bg-highlight dark:bg-accent/20 p-4 rounded-full mr-5">
                  <Mail className="h-6 w-6 text-accent dark:text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-navy dark:text-white mb-2">Email</h4>
                  <a
                    href="mailto:mkatha14@gmail.com"
                    className="text-text dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-300"
                  >
                    mkatha14@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-highlight dark:bg-accent/20 p-4 rounded-full mr-5">
                  <Phone className="h-6 w-6 text-accent dark:text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-navy dark:text-white mb-2">Phone</h4>
                  <a
                    href="tel:+19199515628"
                    className="text-text dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-300"
                  >
                    +1 (919) 951-5628
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-highlight dark:bg-accent/20 p-4 rounded-full mr-5">
                  <MapPin className="h-6 w-6 text-accent dark:text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-navy dark:text-white mb-2">Location</h4>
                  <p className="text-text dark:text-gray-300">Charlotte, North Carolina</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-medium text-navy dark:text-white mb-6">Find Me Online</h4>
              <div className="grid grid-cols-3 gap-5">
                <a
                  href="https://github.com/mkatha14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-highlight dark:bg-navy/70 hover:bg-accent/10 dark:hover:bg-accent/30 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-rosegold flex flex-col items-center justify-center"
                >
                  <Github className="h-8 w-8 text-navy dark:text-gray-300 mb-2" />
                  <span className="text-navy dark:text-gray-300 text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/mkatha14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-highlight dark:bg-navy/70 hover:bg-accent/10 dark:hover:bg-accent/30 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-rosegold flex flex-col items-center justify-center"
                >
                  <Linkedin className="h-8 w-8 text-navy dark:text-gray-300 mb-2" />
                  <span className="text-navy dark:text-gray-300 text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-highlight dark:bg-navy/70 hover:bg-accent/10 dark:hover:bg-accent/30 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-rosegold flex flex-col items-center justify-center"
                >
                  <ExternalLink className="h-8 w-8 text-navy dark:text-gray-300 mb-2" />
                  <span className="text-navy dark:text-gray-300 text-sm font-medium">Portfolio</span>
                </a>
              </div>
            </div>
          </div>

          <Card className="glass-card rounded-2xl shadow-xl hover:shadow-rosegold transition-all duration-300 border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-accent via-rosegold to-accent"></div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-8">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-text dark:text-gray-300">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-white/50 dark:bg-navy/50 border-accent/20 rounded-lg focus:border-accent focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-text dark:text-gray-300">
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
                      className="bg-white/50 dark:bg-navy/50 border-accent/20 rounded-lg focus:border-accent focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-text dark:text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className="bg-white/50 dark:bg-navy/50 border-accent/20 rounded-lg focus:border-accent focus:ring-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-text dark:text-gray-300">
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
                    className="bg-white/50 dark:bg-navy/50 border-accent/20 rounded-lg focus:border-accent focus:ring-accent"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  disabled={isSubmitting}
                >
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