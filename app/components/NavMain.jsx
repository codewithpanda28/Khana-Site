'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { LogIn } from 'lucide-react';
import { Moon, Sun, ChevronDown, Search, Menu } from 'lucide-react'
import { 
    Cake as CakeIcon, 
    Leaf as LeafIcon, 
    Flame as FlameIcon, 
    Wine as WineIcon, 
    Fish as FishIcon, 
    PenTool as PenToolIcon 
} from "lucide-react"
  
import { useTheme } from "next-themes"
import { useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function NavMain() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen  bg-background px-[30px]">
<header className="flex h-16 items-center justify-between md:justify-center border-b px-4 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
  <Link href="/" className="text-xl font-bold text-orange-500 transition-all duration-300 hover:text-orange-600 hover:scale-110">
    KHANA
  </Link>
  
  <Button 
    variant="ghost" 
    size="icon"
    className="md:hidden hover:bg-orange-100 transition-all duration-300 hover:rotate-3"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  >
    <Menu className="h-5 w-5 hover:rotate-180 transition-all duration-500 ease-in-out" />
  </Button>

  <nav className={`absolute top-16 left-0 w-full  dark:bg-gray-800 md:relative md:top-0 md:w-auto  ${
    mobileMenuOpen ? 'block animate-slideDown' : 'hidden'
  } flex-col items-center space-y-4 border-b md:ml-6 md:flex md:flex-row md:space-y-0 md:space-x-6 md:border-none transition-all duration-500`}>
    <Button variant="ghost" className="flex w-full items-center justify-center md:w-auto hover:bg-orange-100 transition-all duration-300 transform hover:scale-110 hover:shadow-md">
      <span className="mr-2 animate-pulse">🔥</span>
      Cooking Classes
    </Button>
    <Button variant="ghost" className="flex w-full items-center justify-center md:w-auto hover:bg-orange-100 transition-all duration-300 transform hover:scale-110 hover:shadow-md">
      <span className="mr-2 animate-bounce">👨‍🍳</span>
      Become A Chef
    </Button>
    <Button variant="ghost" className="flex w-full items-center justify-center md:w-auto hover:bg-orange-100 transition-all duration-300 transform hover:scale-110 hover:shadow-md">
      <span className="mr-2 animate-bounce">👥</span>
      Group Cooking
    </Button>
  </nav>

<div className={`absolute top-10 left-0 w-full items-center justify-center text-black dark:text-white md:relative md:top-0 md:w-auto ${
    mobileMenuOpen ? 'block animate-slideDown' : 'hidden'
  } flex flex-col items-center justify-center space-y-4 border-b pb-4 md:ml-auto md:flex md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-4 md:border-none transition-all duration-500`}>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center justify-center hover:scale-105 group">
          Eng
          <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="animate-slideDown">
        <DropdownMenuItem className="transition-all duration-300 hover:translate-x-1">English</DropdownMenuItem>
        <DropdownMenuItem className="transition-all duration-300 hover:translate-x-1">Spanish</DropdownMenuItem>
        <DropdownMenuItem className="transition-all duration-300 hover:translate-x-1">French</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center justify-center hover:scale-105 group">
          USD
          <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="animate-slideDown">
        <DropdownMenuItem className="transition-all duration-300 hover:translate-x-1">USD</DropdownMenuItem>
        <DropdownMenuItem className="transition-all duration-300 hover:translate-x-1">EUR</DropdownMenuItem>
        <DropdownMenuItem className="transition-all duration-300 hover:translate-x-1">UAH</DropdownMenuItem>
        <DropdownMenuItem className="transition-all duration-300 hover:translate-x-1">GBP</DropdownMenuItem>
        <DropdownMenuItem className="transition-all duration-300 hover:translate-x-1">CHF</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
{/* <Button 
  variant="ghost" 
  size="icon"
  className="flex items-center justify-center transition-all duration-300 hover:scale-110"
  // onClick={() => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark');
  //   const icon = theme === 'dark' ? 
  //     <Sun className="h-5 w-5 rotate-180 transition-all duration-500 animate-spin-slow" /> :
  //     <Moon className="h-5 w-5 rotate-180 transition-all duration-500 animate-spin-slow" />;
  // }}
>
  {theme === 'dark' ? 
    <Sun className="h-5 w-5 hover:rotate-180 transition-all duration-500 animate-spin-slow" /> : 
    <Moon className="h-5 w-5 hover:rotate-180 transition-all duration-500 animate-spin-slow" />
  }
</Button> */}

<Button className="flex items-center justify-center gap-2 transform transition-all duration-300 
  text-white
  hover:scale-105 hover:shadow-lg 
  active:scale-95 
  animate-gradient-x
  rounded-lg px-6 py-2">
<LogIn className="w-5 h-5 transition-all duration-300 ease-in-out transform hover:rotate-12 hover:scale-110 hover:translate-y-[-4px] hover:drop-shadow:[transform-style:preserve-3d] hover:[perspective:1000px] hover:brightness-110 hover:contrast-125 hover:skew-x-2 motion-safe:hover:animate-bounce" />
  Log in
</Button>
</div>
</header>

      <main className="container mx-auto py-8 flex flex-col items-center justify-center">
     <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
  <div className="text-center transform transition-transform hover:scale-105 duration-300 hover:rotate-3d(1, 1, 1, 15deg)" style={{perspective: '1000px'}}>
    <h1 className="text-4xl font-bold mb-4 transform hover:translate-z-12">
      Master the Art of Cooking with{" "}
      <span className="text-orange-500">Experts</span> Worldwide
    </h1>
    <p className="text-muted-foreground mb-8 transform transition-all hover:translate-z-8">
      Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs,
      share your unique culinary knowledge, and join our growing foodie community. With COOK, learning, and teaching
      becomes fun and seamless.
    </p>
    <div className="flex gap-4 justify-center">
      <Button size="lg" className="transform transition-transform hover:scale-110 hover:rotate-3d(0, 1, 0, 15deg) shadow-lg">Find Your Tutor</Button>
      <Button variant="outline" size="lg" className="transform transition-transform hover:scale-110 hover:rotate-3d(0, 1, 0, -15deg) shadow-lg">
        Join Our Chefs
      </Button>
    </div>
  </div>
  <div className="flex justify-center">
    <Image
      src="/1.svg"
      alt="Chef cooking while looking at laptop"
      width={600}
      height={400}
      className="rounded-lg object-cover transform transition-all duration-300 hover:scale-105 hover:rotate-3d(1, 1, 1, 10deg) shadow-xl hover:shadow-2xl"
      style={{perspective: '1000px'}}
    />
  </div>
</div>


       <div className="grid grid-cols-4 gap-8 my-16 text-center">
  <div className="transform transition-all duration-300 hover:scale-110 hover:-skew-y-3 hover:shadow-2xl bg-white p-6 rounded-xl hover:bg-gradient-to-br from-orange-50 to-white cursor-pointer">
    <h3 className="text-3xl font-bold text-orange-500 transform transition-all duration-300 hover:text-orange-600 hover:translate-y-[-5px]">100+</h3>
    <p className="text-muted-foreground transform transition-all duration-300 hover:font-semibold">Talented Chefs</p>
  </div>
  
  <div className="transform transition-all duration-300 hover:scale-110 hover:skew-y-3 hover:shadow-2xl bg-white p-6 rounded-xl hover:bg-gradient-to-bl from-orange-50 to-white cursor-pointer">
    <h3 className="text-3xl font-bold text-orange-500 transform transition-all duration-300 hover:text-orange-600 hover:translate-y-[-5px]">1000+</h3>
    <p className="text-muted-foreground transform transition-all duration-300 hover:font-semibold">Students</p>
  </div>
  
  <div className="transform transition-all duration-300 hover:scale-110 hover:-skew-y-3 hover:shadow-2xl bg-white p-6 rounded-xl hover:bg-gradient-to-tr from-orange-50 to-white cursor-pointer">
    <h3 className="text-3xl font-bold text-orange-500 transform transition-all duration-300 hover:text-orange-600 hover:translate-y-[-5px]">4</h3>
    <p className="text-muted-foreground transform transition-all duration-300 hover:font-semibold">Rating</p>
  </div>
  
  <div className="transform transition-all duration-300 hover:scale-110 hover:skew-y-3 hover:shadow-2xl bg-white p-6 rounded-xl hover:bg-gradient-to-tl from-orange-50 to-white cursor-pointer">
    <h3 className="text-3xl font-bold text-orange-500 transform transition-all duration-300 hover:text-orange-600 hover:translate-y-[-5px]">20+</h3>
    <p className="text-muted-foreground transform transition-all duration-300 hover:font-semibold">Cooking Categories</p>
  </div>
</div>

        <section className="w-full">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="h-8 w-1 bg-orange-500" />
              <h2 className="text-2xl font-bold">Explore & Learn</h2>
            </div>
            <Button variant="ghost" className="flex items-center">
              <Search className="mr-2 h-4 w-4" />
              Search tutors by category
            </Button>
          </div>
          <p className="text-muted-foreground mb-8 text-center">
            Dive into a range of cooking styles and techniques tailored to your interests.
          </p>
    
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
  <div className="p-6 rounded-lg border group hover:border-orange-500 hover:bg-orange-500 transition-all text-center hover:scale-110 hover:shadow-2xl duration-500 cursor-pointer animate-slideUp hover:-translate-y-2 hover:rotate-3">
    <CakeIcon className="w-16 h-16 mx-auto mb-4 group-hover:text-white transform transition-transform hover:rotate-45 hover:-translate-y-2 duration-500 hover:scale-125 animate-bounce hover:animate-ping" />
    <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300 hover:text-2xl">Bakery</h3>
    <p className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300 hover:font-medium hover:scale-105">
      Master baking, from rustic bread to intricate pastries
    </p>
  </div>
  <div className="p-6 rounded-lg border group hover:border-orange-500 hover:bg-orange-500 transition-all text-center hover:scale-110 hover:shadow-2xl duration-500 cursor-pointer animate-slideUp hover:-translate-y-2 hover:-rotate-3">
    <LeafIcon className="w-16 h-16 mx-auto mb-4 group-hover:text-white transform transition-transform hover:rotate-45 hover:-translate-y-2 duration-500 hover:scale-125 animate-bounce hover:animate-ping" />
    <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300 hover:text-2xl">Vegan Cooking</h3>
    <p className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300 hover:font-medium hover:scale-105">
      Create delicious, nutritious meals with plant-based ingredients
    </p>
  </div>
  <div className="p-6 rounded-lg border group hover:border-orange-500 hover:bg-orange-500 transition-all text-center hover:scale-110 hover:shadow-2xl duration-500 cursor-pointer animate-slideUp hover:-translate-y-2 hover:rotate-3">
    <FlameIcon className="w-16 h-16 mx-auto mb-4 group-hover:text-white transform transition-transform hover:rotate-45 hover:-translate-y-2 duration-500 hover:scale-125 animate-bounce hover:animate-ping" />
    <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300 hover:text-2xl">BBQ & Grilling</h3> 
    <p className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300 hover:font-medium hover:scale-105">
      Fire up your grilling and BBQ techniques
    </p>
  </div>
  <div className="p-6 rounded-lg border group hover:border-orange-500 hover:bg-orange-500 transition-all text-center hover:scale-110 hover:shadow-2xl duration-500 cursor-pointer animate-slideUp hover:-translate-y-2 hover:-rotate-3">
    <WineIcon className="w-16 h-16 mx-auto mb-4 group-hover:text-white transform transition-transform hover:rotate-45 hover:-translate-y-2 duration-500 hover:scale-125 animate-bounce hover:animate-ping" />
    <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300 hover:text-2xl">Wine Pairing</h3>
    <p className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300 hover:font-medium hover:scale-105">
      Enhance culinary experiences by mastering wine pairing
    </p>
  </div>
  <div className="p-6 rounded-lg border group hover:border-orange-500 hover:bg-orange-500 transition-all text-center hover:scale-110 hover:shadow-2xl duration-500 cursor-pointer animate-slideUp hover:-translate-y-2 hover:rotate-3">
    <FishIcon className="w-16 h-16 mx-auto mb-4 group-hover:text-white transform transition-transform hover:rotate-45 hover:-translate-y-2 duration-500 hover:scale-125 animate-bounce hover:animate-ping" />
    <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300 hover:text-2xl">Seafood Mastery</h3>
    <p className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300 hover:font-medium hover:scale-105">
      Dive into seafood, from grilling fish to creating sushi
    </p>
  </div>
  <div className="p-6 rounded-lg border group hover:border-orange-500 hover:bg-orange-500 transition-all text-center hover:scale-110 hover:shadow-2xl duration-500 cursor-pointer animate-slideUp hover:-translate-y-2 hover:-rotate-3">
    <PenToolIcon className="w-16 h-16 mx-auto mb-4 group-hover:text-white transform transition-transform hover:rotate-45 hover:-translate-y-2 duration-500 hover:scale-125 animate-bounce hover:animate-ping" />
    <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300 hover:text-2xl">Cake Decorating</h3>
    <p className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300 hover:font-medium hover:scale-105">
      Unleash creativity with cake decorating techniques
    </p>
  </div>
</div>
        </section>
      </main>
    </div>
  )
}