import { Link } from 'react-router-dom';
import rlgLogo from '../assets/RLGlogo2.png';
import InteractiveTimeline from '../components/InteractiveTimeline';

const Home = () => {
  const trackRecordItems = [
    { number: 30, suffix: '+', text: 'Years of Excellence' },
    { prefix: '$' , number: 6.59, suffix: 'M+', text: 'Savings Generated' },
    { number: 50, suffix: '%+', text: 'Breakdown Reduction' },
    { number: 6, suffix: '+', text: 'Major Projects' },
  ];

  return (
    <div className="bg-gray-50 text-foreground">
      {/* Hero Section */}
      <div
        className="relative bg-primary text-white text-center py-20 md:py-32 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${rlgLogo})` }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">RLG CONSULTANTS</h1>
          <p className="text-lg md:text-2xl mb-12">Oilseed Extraction, Refining & Process Optimisation Expert</p>
          
          {/* Prominent 30+ Years Badge */}
          <div className="inline-block bg-white/15 backdrop-blur-sm rounded-full px-8 py-6 mb-12 border border-white/20">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-orange-400">30+</div>
                <div className="text-base md:text-lg text-white">Years of Excellence</div>
              </div>
              <div className="w-px h-16 bg-white/30"></div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-semibold text-white">Transforming Operations</div>
                <div className="text-base md:text-lg text-white/90">Since 1992</div>
              </div>
            </div>
          </div>
          
          <p className="max-w-4xl mx-auto text-lg md:text-xl mb-12 leading-relaxed">
            Transforming Oilseed Extraction & Oil Refining operations through innovative process optimization, continuous improvement, and sustainable solutions. Over 30 years of proven expertise in edible oil seed crushing, refining, and operational excellence.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/portfolio" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center gap-2">
              View My Portfolio
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/contact" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Proven Track Record Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Proven Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {trackRecordItems.map((item, index) => (
              <Link to="/portfolio" key={index}>
                <div
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {item.prefix}{item.number}{item.suffix}
                  </p>
                  <p className="text-lg text-gray-600">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Timeline Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveTimeline />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Can Help Your Business</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
            Specialized consulting services designed to optimize your oil production operations and drive sustainable growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Process Optimization</h3>
              <p>Streamline your operations with proven methodologies that reduce waste, improve efficiency, and maximize output.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Energy Efficiency</h3>
              <p>Implement sustainable solutions that reduce energy consumption while maintaining operational excellence.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Operational Excellence</h3>
              <p>Build a culture of continuous improvement that drives long-term success and competitive advantage.</p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300">
              Explore All Services
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Operations?</h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Let's discuss how my expertise can help transform your oil production processes and drive measurable improvements in efficiency and profitability.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
            Start a Conversation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
