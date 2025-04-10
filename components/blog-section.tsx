import { Calendar, ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Why I Made FlowGenie: Turning Frustration into Innovation",
      date: "December 15, 2024",
      excerpt:
        "The story behind FlowGenie's creation, from struggling with diagram tools to building an AI-powered solution.",
      image: "/placeholder.svg?height=300&width=600",
      readTime: "5 min read",
      link: "#",
    },
    {
      title: "Debugging WSL Rendering Bugs: A Developer's Saga",
      date: "November 3, 2024",
      excerpt:
        "My journey through the wilderness of Windows Subsystem for Linux rendering issues and the solutions I discovered.",
      image: "/placeholder.svg?height=300&width=600",
      readTime: "8 min read",
      link: "#",
    },
    {
      title: "From Idea to Hackathon Win: The Farm2You Story",
      date: "March 12, 2025",
      excerpt:
        "How a midnight conversation about food waste turned into a winning hackathon project and potential startup.",
      image: "/placeholder.svg?height=300&width=600",
      readTime: "6 min read",
      link: "#",
    },
  ]

  return (
    <section id="blog" className="py-24 bg-background dark:bg-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-2">Dev Notes</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent via-rosegold to-accent mx-auto mb-4"></div>
          <p className="text-accent/80 italic font-light">Thoughts, processes, and learnings from my journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-card-image">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="absolute bottom-4 right-4 text-white text-sm bg-accent/80 px-2 py-1 rounded-full">
                  {post.readTime}
                </div>
              </div>
              <div className="blog-card-content">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{post.title}</h3>
                <p className="text-text dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={post.link}>
                  <Button
                    variant="outline"
                    className="w-full border-accent/30 text-navy hover:bg-accent/10 dark:border-accent/30 dark:text-accent dark:hover:bg-accent/10 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-accent/30 text-navy hover:bg-accent/10 dark:border-accent/30 dark:text-accent dark:hover:bg-accent/10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BlogSection