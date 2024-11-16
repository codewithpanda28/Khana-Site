import Image from "next/image"
import Link from "next/link"
import { Calendar, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'

export default function Hero5() {
  const categories = [
    "Japanese Sushi Making",
    "Thai",
    "Seafood",
    "Italian Cuisine",
    "Vegan",
    "BBQ & Grilling",
  ]

  const countries = ["USA", "Spain", "France", "Mexico", "Germany"]

  const blogPosts = [
    {
      title: "Mastering the Art of Homemade Pizza",
      date: "24 Apr, 2023",
      image: "/8img.jpg",
    },
    {
      title: "Delectable Homemade Ice Cream",
      date: "24 Apr, 2023",
      image: "/9img.jpg",
    },
    {
      title: "How to Prepare Authentic Mexican Tacos",
      date: "24 Apr, 2023",
      image: "/10img.jpg",
    },
    {
      title: "Tips and Techniques for a Restaurant-Quality Steak",
      date: "24 Apr, 2023",
      image: "/11img.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Popular online classes section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <div className="h-8 w-1 bg-orange-500" />
            Popular online classes
          </h2>

         <div className="w-full space-y-12 p-6">
<div>
  <h3 className="text-xl font-bold mb-6 text-purple-700 border-b-2 border-purple-500 pb-2 w-fit 
    hover:text-purple-900 hover:scale-105 hover:-translate-y-1 hover:rotate-2
    transition-all duration-300 transform-gpu
    [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)]
    hover:[text-shadow:_4px_4px_4px_rgb(0_0_0_/_30%)]">
    <strong>Find a tutor by category</strong>
  </h3>
  <div className="flex flex-wrap gap-3 perspective-1000">
    <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full text-sm font-medium
      shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1 hover:rotate-3
      transition-all duration-300 transform-gpu">
      <strong>Category Pill</strong>
    </span>
    {categories.map((category) => (
      <span
        key={category}
        className="px-4 py-2 bg-gradient-to-r from-purple-50 to-gray-100 rounded-full 
          text-sm font-medium cursor-pointer
          hover:bg-gradient-to-r hover:from-purple-100 hover:to-purple-300
          hover:text-purple-800 hover:scale-110 hover:-translate-y-2 hover:rotate-3
          transition-all duration-300 transform-gpu
          shadow-[2px_2px_8px_rgba(0,0,0,0.1)]
          hover:shadow-[4px_8px_12px_rgba(0,0,0,0.15)]
          active:scale-95 active:shadow-inner
          border border-purple-100"
      >
        <strong>{category}</strong>
      </span>
    ))}
  </div>
</div>

<div>
<h3 className="text-xl font-bold mb-6 text-purple-700 border-b-2 border-purple-500 pb-2 w-fit 
    hover:text-purple-900 hover:scale-105 hover:-translate-y-1 hover:rotate-2
    transition-all duration-300 transform-gpu
    [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)]
    hover:[text-shadow:_4px_4px_4px_rgb(0_0_0_/_30%)]">
    <strong>Find a tutor by country</strong>
  </h3>
  <div className="flex flex-wrap gap-4 perspective-1000">
    {countries.map((country) => (
      <span
        key={country}
        className="px-6 py-3 bg-gradient-to-r from-purple-50 to-gray-100 rounded-full 
          text-sm font-semibold cursor-pointer
          hover:bg-gradient-to-r hover:from-purple-100 hover:to-purple-300
          hover:text-purple-800 hover:scale-110 hover:-translate-y-2 hover:rotate-3
          transition-all duration-300 transform-gpu
          shadow-[2px_2px_8px_rgba(0,0,0,0.1)]
          hover:shadow-[4px_8px_12px_rgba(0,0,0,0.15)]
          active:scale-95 active:shadow-inner
          border border-purple-100
          backdrop-blur-sm"
      >
        {country}
      </span>
    ))}
  </div>
</div>
</div>
        </div>

       {/* COOK Blog section */}
<div className="mb-16">
  <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
    <div className="w-2 h-2 bg-orange-500 rounded-full" />
    COOK Blog
  </h2>

  <div className="grid grid-cols-4 gap-6">
    {blogPosts.map((post, index) => (
      <div key={index} className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
          />
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{post.date}</span>
        </div>
        <h3 className="font-semibold group-hover:text-orange-500 transition-colors">
          {post.title}
        </h3>
      </div>
    ))}
  </div>
</div>
      </div>

 {/* Footer */}
<footer className="bg-orange-500 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
      <div>
        <Link href="/" className="text-2xl font-bold relative group">
          <span className="inline-block transition-all duration-300 group-hover:text-white">
            COOK
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            <span className="absolute left-0 top-0 w-full h-0.5 bg-white origin-right transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </Link>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4 relative inline-block">
          ABOUT US
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </h3>
        <ul className="space-y-2">
          {['Who we are', 'How it works', 'COOK reviews'].map((item) => (
            <li key={item}>
              <Link href="#" className="group relative overflow-hidden inline-block">
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 w-0 bg-orange-400 opacity-10 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Icons with enhanced effects */}
      <div className="flex gap-4">
        {[Instagram, Twitter, Facebook, Linkedin].map((Icon, index) => (
          <Link 
            key={index} 
            href="#" 
            className="group relative"
          >
            <span className="absolute -inset-2 bg-orange-400 rounded-full opacity-0 transform scale-0 transition-all duration-300 group-hover:opacity-20 group-hover:scale-100"></span>
            <Icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
          </Link>
        ))}
      </div>

      {/* Copyright with subtle animation */}
      <div className="text-sm text-right">
        <span className="relative inline-block group cursor-default">
          <span className="inline-block transition-all duration-300 group-hover:-translate-y-1">
            2023 Copyright
          </span>
          <span className="absolute bottom-0 left-0 w-full h-px bg-white/50 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </span>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}