import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import rlgLogo from '../assets/RLGlogo2.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>

            <h3 className="text-lg font-semibold mb-4">RLG CONSULTANTS</h3>
            
          
            <p className="text-gray-300 mb-4">
              Expert in Oilseed extraction, Refining and process optimization consulting services with over 30 years of industry experience.
            </p>
            <p className="text-sm text-gray-400">
              Committed to Excellence
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-secondary" />
                <a href="mailto:rakeshgupta@rlgkonsultants.com" className="text-gray-300 hover:text-white">
                  rakeshgupta@rlgkonsultants.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-secondary" />
                <a href="tel:042-911-3151" className="text-gray-300 hover:text-white">
                  (+61) 429-113-151
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-secondary" />
                <span className="text-gray-300">Sydney, NSW 2127, Australia</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-secondary" />
                <a href="https://www.linkedin.com/in/rakesh-gupta-993b3bbb/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/services#process-optimization" className="hover:text-white transition-colors">
                  Process Optimization
                </Link>
              </li>
              <li>
                <Link to="/services#energy-efficiency-and-sustainability" className="hover:text-white transition-colors">
                  Energy Efficiency
                </Link>
              </li>
              <li>
                <Link to="/services#project-management-and-execution" className="hover:text-white transition-colors">
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/services#operational-excellence-and-safety" className="hover:text-white transition-colors">
                  Operational Excellence
                </Link>
              </li>
              <li>
                <Link to="/services#continuous-improvement-kaizen" className="hover:text-white transition-colors">
                  Continuous Improvement
                </Link>
              </li>
              <li>
                <Link to="/services#performance-analysis-and-optimization" className="hover:text-white transition-colors">
                  Performance Analysis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 RLG Consultants. All rights reserved. | Rakesh Gupta - Oilseed Extraction, Refining & Process Optimization Expert
          </p>
        </div>
      </div>
    </footer>
   )
}

export default Footer
