import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Settings, 
  Zap, 
  TrendingUp, 
  Shield, 
  Recycle, 
  Users,
  BarChart3,
  Wrench,
  Target,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Process Optimization",
      description: "Comprehensive analysis and improvement of Oilseed Extraction, Refining processes to maximize efficiency and output.",
      features: [
        "Cold Pressing and Refining Optimisation",
        "Hot crushing and refining process optimization",
        "Solvent extraction efficiency improvements",      
        "Equipment performance enhancement",
        "Process flow redesign and automation"
      ],
      benefits: [
        "Increased production capacity",
        "Reduced operational costs",
        "Improved product quality",
        "Enhanced process reliability"
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Efficiency & Sustainability",
      description: "Strategic initiatives to reduce energy consumption and environmental impact while maintaining operational excellence.",
      features: [
        "Energy consumption analysis and optimization",
        "Net Zero roadmap development",
        "Renewable energy integration planning",
        "Carbon footprint reduction strategies",
        "Waste heat recovery systems"
      ],
      benefits: [
        "Significant energy cost savings",
        "Reduced carbon emissions",
        "Improved sustainability credentials",
        "Compliance with environmental regulations"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Continuous Improvement (Kaizen)",
      description: "Implementation of systematic continuous improvement methodologies to drive long-term operational excellence.",
      features: [
        "Kaizen methodology implementation",
        "Employee engagement programs",
        "Performance monitoring systems",
        "Root cause analysis and problem solving",
        "Best practice documentation"
      ],
      benefits: [
        "Culture of continuous improvement",
        "Sustained operational gains",
        "Increased employee engagement",
        "Systematic problem resolution"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Project Management & Execution",
      description: "End-to-end project management for oil production facility development, expansion, and modernization.",
      features: [
        "Project planning and execution",
        "Budget management and cost control",
        "Supplier evaluation and management",
        "Risk assessment and mitigation",
        "Commissioning and startup support"
      ],
      benefits: [
        "On-time project delivery",
        "Budget adherence",
        "Quality assurance",
        "Minimized project risks"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Operational Excellence & Safety",
      description: "Comprehensive approach to achieving operational excellence through safety, quality, and reliability improvements.",
      features: [
        "HAZOP studies and safety assessments",
        "Quality control system development",
        "Preventive maintenance programs",
        "Reliability improvement initiatives",
        "Safety culture development"
      ],
      benefits: [
        "Enhanced workplace safety",
        "Improved product quality",
        "Reduced equipment downtime",
        "Regulatory compliance"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Analysis & Optimization",
      description: "Data-driven analysis to identify improvement opportunities and optimize operational performance.",
      features: [
        "Performance benchmarking",
        "Data analysis and reporting",
        "KPI development and monitoring",
        "Operational efficiency assessments",
        "Cost-benefit analysis"
      ],
      benefits: [
        "Data-driven decision making",
        "Improved operational visibility",
        "Targeted improvement initiatives",
        "Measurable results tracking"
      ]
    }
  ]

  const approach = [
    {
      step: "01",
      title: "Assessment & Analysis",
      description: "Comprehensive evaluation of current operations, identifying opportunities for improvement and optimization."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Creation of tailored improvement strategies based on your specific operational needs and business objectives."
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Detailed planning and project management to ensure smooth implementation of recommended solutions."
    },
    {
      step: "04",
      title: "Execution & Monitoring",
      description: "Hands-on support during implementation with continuous monitoring to ensure desired outcomes."
    },
    {
      step: "05",
      title: "Results & Optimization",
      description: "Measurement of results, fine-tuning of processes, and establishment of continuous improvement practices."
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Consulting Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized consulting services designed to optimize your Oilseed Extraction, Refining operations, 
            operational costs, and drive sustainable growth through proven methodologies and expert guidance.
          </p>
        </div>

        

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Target className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        

        {/* Why Choose RLG Consultants */}
        <section className="mb-20 bg-gray-50 rounded-lg p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RLG Consultants?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proven Experience</h3>
              <p className="text-gray-600">
                Over 30 years of hands-on experience in oil production operations, 
                with a track record of delivering measurable results.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Measurable Results</h3>
              <p className="text-gray-600">
                Demonstrated ability to generate significant cost savings, efficiency improvements, 
                and operational excellence across diverse projects.
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Tailored Solutions</h3>
              <p className="text-gray-600">
                Customized consulting approaches that address your specific operational 
                challenges and business objectives.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how my consulting services can help transform your oil production processes 
            and drive measurable improvements in efficiency and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-black">
              <Link to="/contact">
                Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/portfolio">
                View Case Studies
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services

