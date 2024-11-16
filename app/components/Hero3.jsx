'use client'
import Image from "next/image"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      {/* Header */}
<div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
 
  <div className="flex justify-between items-center mb-12">
    <div className="flex items-center gap-2">
      {/* <div className="h-8 w-1 bg-orange-500" /> */}
      <div>
        <h1 className="text-4xl font-bold">How It Works</h1>
        <p className="text-sm text-gray-600 mt-3">Getting Started with the COOK Platform</p>
      </div>
    </div>
    {/* <div className="flex items-center text-gray-600">
      <Search className="w-4 h-4 mr-2" />
      <span className="text-sm">Search tutors by category</span>
    </div> */}
  </div>
 

{/* Step 1 */}
<div className="grid lg:grid-cols-2 gap-16 mb-20">
  <div className="relative">
    <div className="absolute -left-6 top-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
      1
    </div>
    <div className="relative h-[300px]">
      <div className="relative p-4 bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <div className="space-y-2">
          <div className="relative w-full h-[240px]">
            <Image
              src="/3img.svg"
              alt="Sweet Workshop"
              width={300} 
              height={240}
              className="rounded-lg w-full h-full object-cover"
              layout="responsive"
            />
          </div>
          <h3 className="text-xs font-semibold">Sweet Workshop</h3>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">★ 4.7</span>
            <span className="font-bold">$49</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="space-y-4 text-center md:text-left">
    <h2 className="text-2xl font-bold">Explore Our Culinary Experts</h2>
    <p className="text-gray-600">
      Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.
    </p>
    <Button className="bg-orange-500 hover:bg-orange-600">Browse Tutors</Button>
  </div>
</div>

{/* Step 2 */} 
<div className="mb-20">
  <div className="relative mb-8">
    <div className="absolute -left-6 top-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
      2
    </div>
   
  </div>
  <div className="flex flex-row items-center justify-center gap-8 w-full">
    <div className="w-1/2 flex justify-center">
      <Image
        src="/4img.svg"
        alt="Tutor profile"
        width={400}
        height={400}
        className="rounded-sm shadow-lg hover:scale-105 transition-transform duration-300"  
      />
    </div>
    <div className="w-1/2">
    <h2 className="text-2xl font-bold ml-4 ">Select Your Perfect Match</h2>
      <p className="text-gray-600 leading-relaxed text-lg hover:text-gray-800 transition-colors duration-300 rounded-lg p-4">
        Once you have explored our range of tutors, choose the one that resonates most with you. Their profiles provide detailed information, such as their areas of expertise, availability, and reviews. Scheduling a lesson has never been easier.
      </p>
      <Button className="bg-orange-500 hover:bg-orange-600 ml-4">Sign up for free</Button>
    </div>
  </div>
</div>

{/* Step 3 */}
<div className="mb-20">
  <div className="relative mb-8">
    <div className="absolute -left-6 top-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
      3  
    </div>
  </div>
  <div className="flex gap-8 ml-8 items-center justify-center">
    <div className="w-1/2 relative aspect-video rounded-lg overflow-hidden px-4 flex items-center justify-center">
      <Image 
        src="/5img.svg"
        alt="Interactive cooking lesson"
        width={400}
        height={400}
        className="object-cover"
      />
    </div>
    <div className="w-1/2">
      <h2 className="text-2xl font-bold mb-4">Enjoy Your Interactive Lesson</h2>
      <p className="text-gray-600 mb-8">
        Step into your online kitchen and start cooking! Our lessons are designed to be fun and interactive, enabling you to learn directly from the experts. After the class, you can review your experience and track your progress.
      </p>
      <Button className="bg-orange-500 hover:bg-orange-600">Sign up for free</Button>
    </div>
  </div>
</div>
</div>


    {/* Money Back Guarantee */}
<div className="relative max-w-2xl mx-auto p-8 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
  <div className="relative text-center">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white mb-4 hover:bg-orange-600 transition-colors duration-300">
     <span 
  className="text-xl inline-block cursor-pointer transition-all duration-300 hover:scale-125" 
  style={{
    transform: 'perspective(1000px) rotateX(10deg)',
    transformStyle: 'preserve-3d',
    animation: 'floating 3s ease-in-out infinite',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(-20deg) rotateY(20deg)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(10deg)';
  }}
>
  💰
</span>

<style jsx>{`
  @keyframes floating {
    0% { transform: perspective(1000px) rotateX(10deg) translateY(0px); }
    50% { transform: perspective(1000px) rotateX(10deg) translateY(-10px); }
    100% { transform: perspective(1000px) rotateX(10deg) translateY(0px); }
  }
`}</style>
    </div>
    <h3 className="text-xl font-bold mb-2 hover:text-orange-700 transition-colors duration-300">Money-back guarantee</h3>
    <p className="text-gray-600 mb-4 hover:text-gray-800 transition-colors duration-300">
      If you are not satisfied with your first lesson, we all refund your payment. No questions asked.
    </p>
  
  </div>
</div>
    </div>
  )
}