import Image from "next/image";
import { CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero4() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Become A Chef Section */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2">
            <div className="h-8 w-1 bg-orange-500"></div>
            <h1 className="text-3xl font-bold">Become A Chef</h1>
          </div>

          <p className="text-gray-600">
            Share your culinary secrets, inspire cooking enthusiasts worldwide,
            and grow your career like never before. Our platform offers a unique
            way to connect, teach, and earn.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3 group hover:bg-orange-50 p-2 rounded-lg transition-all duration-300">
              <div className="relative">
                <CircleDot className="w-5 h-5 text-orange-500 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-orange-200 rounded-full animate-ping opacity-75 scale-150 hidden group-hover:block"></div>
              </div>
              <div>
                <span className="font-semibold">Build Your Brand. </span>
                <span className="text-gray-600">
                  Showcase your culinary skills and build your brand within our
                  community.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 group hover:bg-orange-50 p-2 rounded-lg transition-all duration-300">
              <div className="relative">
                <CircleDot className="w-5 h-5 text-orange-500 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-orange-200 rounded-full animate-ping opacity-75 scale-150 hidden group-hover:block"></div>
              </div>
              <div>
                <span className="font-semibold">Expand Your Reach. </span>
                <span className="text-gray-600">
                  Connect with cooking enthusiasts across the globe and expand
                  your audience beyond geographical limits.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 group hover:bg-orange-50 p-2 rounded-lg transition-all duration-300">
              <div className="relative">
                <CircleDot className="w-5 h-5 text-orange-500 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-orange-200 rounded-full animate-ping opacity-75 scale-150 hidden group-hover:block"></div>
              </div>
              <div>
                <span className="font-semibold">
                  Grow Your Business Faster.{" "}
                </span>
                <span className="text-gray-600">
                  Utilize our platform's features and resources to accelerate
                  your growth and increase your income.
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
              Become a chef
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CircleDot className="w-4 h-4" />
              Learn how our platform works
            </div>
          </div>
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105">
          <Image
            src="/6img.svg"
            alt="Chef decorating a cake"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110 hover:opacity-90"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>

     {/* Become A Student Section */}
<div className="grid lg:grid-cols-2 rounded-xl gap-14 overflow-hidden hover:shadow-2xl transition-all duration-300">
  <div className="relative h-[600px] transform transition-transform duration-300 hover:scale-105">
    <Image
      src="/7img.svg"
      alt="Student learning to cook"
      fill
      className="object-cover"
    />
  </div>

  <div className="bg-orange-500 p-8 lg:p-12 text-white h-[600px] hover:bg-orange-600 transition-all duration-300 hover:scale-105">
    <h2 className="text-3xl font-bold mb-6 hover:text-gray-200 transition-colors">Become A Student</h2>
    <p className="mb-8 hover:text-gray-200 transition-colors">
      Kick-start your culinary adventure with COOK. We provide a space for
      cooking enthusiasts of all levels to learn, explore, and master
      culinary arts from professional chefs worldwide. So dive in and
      transform your kitchen into a playground of flavors.
    </p>

    <div className="space-y-4 mb-8">
      <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
        <CircleDot className="w-5 h-5 mt-1" />
        <div>
          <span className="font-semibold">Diverse Classes: </span>
          <span>
            Access a wide variety of classes catering to all skill levels
            and culinary interests.
          </span>
        </div>
      </div>

      <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
        <CircleDot className="w-5 h-5 mt-1" />
        <div>
          <span className="font-semibold">World-Class Chefs: </span>
          <span>
            Learn directly from professional chefs sharing their unique
            culinary secrets.
          </span>
        </div>
      </div>

      <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
        <CircleDot className="w-5 h-5 mt-1" />
        <div>
          <span className="font-semibold">Interactive Learning: </span>
          <span>
            Ask questions and receive real-time feedback in our
            interactive classes.
          </span>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <Button className="bg-white hover:border-white hover:border-2 text-orange-500 hover:bg-orange-600 hover:text-white px-6 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 font-semibold">
        Sign in
      </Button>
  <Button
  variant="outline"
  className="text-orange-500 border-white hover:bg-orange-600 hover:text-white px-6 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 font-semibold"
>
  Sign up
</Button>
    </div>
  </div>
</div>
    </div>
  );
}
