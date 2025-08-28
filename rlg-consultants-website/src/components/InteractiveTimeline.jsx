import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Building, Factory, Users, Briefcase } from 'lucide-react'

const InteractiveTimeline = () => {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [visibleItems, setVisibleItems] = useState([])
  const timelineRef = useRef(null)

  const timelineData = [
    {
      year: '1992',
      title: 'Mechanical Engineering Graduate',
      description: 'Graduated from University of Pune, beginning a journey in engineering excellence',
      icon: <GraduationCap className="h-5 w-5" />,
      link: '/about',
      color: 'bg-blue-600'
    },
    {
      year: '2006',
      title: 'Project Management Leadership',
      description: 'General Manager - Project at Emami Agrotech, managing INR 2.6 billion integrated facility',
      icon: <Building className="h-5 w-5" />,
      link: '/about',
      color: 'bg-blue-700'
    },
    {
      year: '2009',
      title: 'Multi-Facility Operations',
      description: 'General Manager - Operations at Adani Wilmar, overseeing 4000+ MT/day refining capacity',
      icon: <Factory className="h-5 w-5" />,
      link: '/about',
      color: 'bg-blue-800'
    },
    {
      year: '2013',
      title: 'Operational Excellence Era',
      description: 'Led systematic commissioning and continuous improvement at Riverina Oils & Bio Energy',
      icon: <Users className="h-5 w-5" />,
      link: '/about',
      color: 'bg-blue-900'
    },
    {
      year: '2023',
      title: 'RLG Consultants Founded',
      description: 'Established independent consulting practice, bringing decades of expertise to global clients',
      icon: <Briefcase className="h-5 w-5" />,
      link: '/services',
      color: 'bg-yellow-500'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timelineData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index])
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
      <div ref={timelineRef} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Professional Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three decades of continuous growth and innovation in oil production and process optimization
          </p>
        </div> 

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-yellow-200"></div>
          
          {/* Timeline Items */}
          <div className="grid grid-cols-5 gap-4 relative">
            {timelineData.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`group relative flex flex-col items-center transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Year Circle */}
                <div className={`${item.color} text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xs mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 shadow-lg z-10`}>
                  {item.year}
                </div>
                
                {/* Content Card */}
                <div className={`bg-white rounded-lg shadow-lg p-4 w-full border-t-4 ${item.color.replace('bg-', 'border-')} transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2`}>
                  <div className="flex items-center mb-2">
                    <div className={`${item.color} text-white p-1.5 rounded-lg mr-2 flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-xs leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.description}
                  </p>
                  {hoveredItem === index && (
                    <div className="mt-2 text-xs text-secondary font-medium animate-pulse">
                      Click to learn more →
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden space-y-8">
          {timelineData.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`group block transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-4">
                {/* Timeline Line and Circle */}
                <div className="flex flex-col items-center">
                  <div className={`${item.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xs shadow-lg transform transition-all duration-300 group-hover:scale-110`}>
                    {item.year}
                  </div>
                  {index < timelineData.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-blue-600 to-blue-300 mt-2"></div>
                  )}
                </div>
                
                {/* Content Card */}
                <div className={`bg-white rounded-lg shadow-lg p-4 flex-1 border-l-4 ${item.color.replace('bg-', 'border-')} transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1`}>
                  <div className="flex items-center mb-2">
                    <div className={`${item.color} text-white p-2 rounded-lg mr-3`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-2 text-xs text-secondary font-medium">
                    Tap to learn more →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InteractiveTimeline
