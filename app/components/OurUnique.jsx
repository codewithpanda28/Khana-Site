'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChefHat, PiggyBank, Award, Book, GraduationCap, Users } from 'lucide-react'

const benefitsData = [
  {
    icon: <ChefHat className="h-10 w-10 text-white" />,
    title: "Expert Chefs",
    description: "Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class."
  },
  {
    icon: <PiggyBank className="h-10 w-10 text-white" />,
    title: "Save Time and Money",
    description: "Embrace the convenience of learning from home. Save time on travel, reduce dining-out expenses, and master your kitchen with our online cooking classes."
  },
  {
    icon: <Award className="h-10 w-10 text-white" />,
    title: "Accessible Cooking",
    description: "Start your culinary journey with ease. Our user-friendly platform makes navigation simple, letting you focus on learning and enjoying your online cooking classes."
  }
]

const advantagesData = [
  {
    icon: <Book className="h-5 w-5 text-orange-500" />,
    title: "Diverse Range of Classes",
    description: "Explore the culinary world with our vast array of online cooking classes. Whether you're a beginner or a seasoned cook, we have a class that suits your skill level and interests."
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-orange-500" />,
    title: "Opportunity to Teach",
    description: "Share your culinary wisdom. If you're an experienced cook, our platform allows you to teach your classes, reach a global audience, and earn income."
  },
  {
    icon: <Users className="h-5 w-5 text-orange-500" />,
    title: "Interactive Lessons",
    description: "Engage in real-time with expert chefs. Our interactive online cooking classes allow you to ask questions, receive instant feedback, and learn hands-on from the pros."
  }
]

export default function OurUnique() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Unique Benefits</h2>
            <p className="text-gray-600">
              Experience the perks of learning and teaching cooking on our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-orange-500">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="relative overflow-hidden rounded-lg aspect-w-4 aspect-h-3 transform perspective-1000 hover:cursor-pointer">
  <Image
    src="/2img.svg"
    alt="Chef cooking in kitchen" 
    width={500}
    height={500}
    className="transition-all duration-500 ease-in-out 
      hover:scale-110 
      hover:rotate-3 
      hover:shadow-2xl 
      hover:brightness-110 
      hover:contrast-105 
      transform-style-3d 
      hover:z-10"
    style={{
      transform: "translateZ(0)",
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
      transition: "all 0.5s ease-in-out"
    }}
  />
</div>
           <div className="space-y-6 animate-fadeIn perspective-1000">
  <h2 className="text-3xl font-bold mb-6 hover:text-orange-500 transition-colors duration-300 
                 transform hover:translate-z-4 hover:scale-105">Other Advantages</h2>
  {advantagesData.map((advantage, index) => (
    <div 
      key={index} 
      className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 
                 transition-all duration-300 
                 hover:shadow-2xl hover:scale-105 hover:border-orange-300
                 hover:translate-y-[-5px] hover:rotate-1
                 animate-slideIn backdrop-blur-sm
                 transform-gpu hover:translate-z-4
                 bg-gradient-to-r from-white to-orange-50"
      style={{animationDelay: `${index * 100}ms`}}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full 
                      bg-orange-100 hover:bg-orange-200 transition-all duration-300
                      animate-pulse hover:shadow-lg hover:scale-110 
                      transform hover:rotate-12">
        {advantage.icon}
      </div>
      <div className="transform transition-all duration-300 hover:translate-x-2">
        <h3 className="font-semibold mb-2 hover:text-orange-500 transition-colors duration-300
                       transform hover:scale-105">
          {advantage.title}
        </h3>
        <p className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300">
          {advantage.description}
        </p>
      </div>
    </div>
  ))}
</div>
          </div>
        </div>
      </section>
    </main>
  )
}