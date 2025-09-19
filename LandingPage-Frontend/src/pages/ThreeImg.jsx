import React from 'react'
import { ArrowRight } from 'lucide-react'

// ✅ Import your local images (make sure you rename "image 19.png" → "image19.png")
import image19 from '../assets/img/image 19.png'
import image1 from '../assets/img/image 9.png'
import image3 from '../assets/img/1.png'

function ThreeImg() {
  const cards = [
    {
      id: 1,
      image: image19, // local image
      title: "Custom Card with Image19",
      readMore: "Readmore"
    },
    {
      id: 2,
      image: image1, // local image
      title: "Custom Card with 1.png",
      readMore: "Readmore"
    },
    {
      id: 3,
      image: image3,
      title: "Revamping the Membership Model with Triathlon Australia",
      readMore: "Readmore"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
            Caring is the new marketing
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            The Nextcent blog is the best place to read about the latest membership insights, 
            trends and more. See who's joining the community, read about how our community 
            are increasing their membership income and lot's more.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="group cursor-pointer">
              <div className="relative">

                {/* Background Image */}
                <div className="h-60 rounded-2xl overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>


                {/* Overlapping Card Content */}
                <div className="absolute -bottom-12 left-8 right-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight group-hover:text-green-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    {/* Read More Button */}
                    <div className="flex items-center text-green-500 font-medium group-hover:text-green-600 transition-colors duration-300">
                      <span className="mr-2">{card.readMore}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ThreeImg
