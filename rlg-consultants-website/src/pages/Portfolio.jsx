import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, DollarSign, TrendingUp, Zap, Recycle, Settings, TrendingDown } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      id: 'net-zero-roadmap',
      title: 'Sustainability Strategy Development',
      company: 'Riverina Oils & Bio Energy',
      year: '2022',
      category: 'Sustainability',
      icon: <Recycle className="h-6 w-6" />,
      description: 'Led comprehensive sustainability strategy development focusing on carbon emissions reduction and energy efficiency improvements.',
      keyResults: [
        'Developed strategic pathways for significant emissions reduction',
        'Identified substantial cost savings through energy optimization',
        'Recommended renewable energy integration opportunities',
        'Created implementation roadmap for sustainable operations'
      ],
      technologies: ['Energy Management Systems', 'Carbon Footprint Analysis', 'Renewable Energy Integration'],
      impact: 'Multi-million dollar savings potential',
      status: 'Completed'
    },
    {
      id: 'continuous-improvement',
      title: 'Continuous Improvement Strategy (Kaizen Implementation)',
      company: 'Riverina Oils & Bio Energy',
      year: '2013-2021',
      category: 'Process Optimization',
      icon: <TrendingUp className="h-6 w-6" />,
      description: 'Comprehensive continuous improvement program implementing Kaizen methodology across all operational areas.',
      keyResults: [
        'Generated $6.59M in quantifiable annual benefits',
        'Reduced crushing plant breakdowns by 53%',
        'Reduced refining plant breakdowns by 56%',
        'Achieved 13% above design capacity in crushing operations',
        'Improved plant reliability through condition monitoring and line balancing'
      ],
      technologies: ['Kaizen Methodology', 'SKF Condition Monitoring', 'Process Automation'],
      impact: '$6.59M total benefit',
      status: 'Completed'
    },
    {
      id: 'press-sep-consistency',
      title: 'Consistent Press & SEP Operations by Controlling Cake Moisture',
      company: 'Riverina Oils',
      year: '2023',
      category: 'Process Optimization',
      icon: <Settings className="h-6 w-6" />,
      description: 'Innovative solution to improve expeller cake quality and achieve consistency in solvent extraction processes.',
      keyResults: [
        'Quick payback period of less than 6 months',
        '0.25% improvement in capacity utilization (480 MT/annum additional crush)',
        'Reduced solvent loss and improved extraction efficiency',
        'Consistent press and solvent extraction plant operations'
      ],
      technologies: ['Hot Air Drying Systems', 'Moisture Control Technology', 'Process Control Systems'],
      impact: '480 MT/annum additional capacity',
      status: 'Proposed'
    },
    {
      id: 'meal-grinding-improvement',
      title: 'Meal Screening & Grinding Improvement',
      company: 'Riverina Oils',
      year: '2023',
      category: 'Energy Efficiency',
      icon: <Zap className="h-6 w-6" />,
      description: 'Energy-efficient meal grinding methodology modification to reduce power consumption and improve operational efficiency.',
      keyResults: [
        'Less than 1-year payback period',
        '$50K annual energy savings',
        '50% reduction in hammer mill load',
        'Improved meal quality and reduced maintenance costs',
        'Potential for $200K additional revenue through increased soap addition'
      ],
      technologies: ['Rotary Screening Technology', 'Hammer Mill Optimization', 'Process Automation'],
      impact: '$250K+ annual savings potential',
      status: 'Proposed'
    },
    {
      id: 'meal-dust-handling',
      title: 'Meal Dust Handling System Improvement',
      company: 'Riverina Oils',
      year: '2023',
      category: 'Safety & Quality',
      icon: <Settings className="h-6 w-6" />,
      description: 'Replacement of existing air/meal dust handling system with automated bag filter system to improve safety and reduce contamination risk.',
      keyResults: [
        'Eliminated salmonella growth risk in dust handling system',
        'Improved housekeeping in meal processing section',
        'Reduced cleaning manpower requirements',
        'Low maintenance cost and operation-friendly system'
      ],
      technologies: ['Automated Bag Filter Systems', 'Stainless Steel Construction', 'Insulation Technology'],
      impact: 'Zero contamination risk',
      status: 'Proposed'
    },
    {
      id: 'meal-cooler-relocation',
      title: 'Meal Cooler Relocation for Improved Cake Cooling',
      company: 'Cootamundra Oilseeds',
      year: '2023',
      category: 'Process Optimization',
      icon: <Settings className="h-6 w-6" />,
      description: 'Strategic relocation of existing meal cooler to optimize cake cooling process and improve hammer milling efficiency.',
      keyResults: [
        'Improved product quality through cold hammer milling',
        '200 KWH/day energy savings (72,000 KWH/annum)',
        'Created additional space for refinery expansion',
        'Opportunity to increase hammer mill sieve size'
      ],
      technologies: ['Process Flow Optimization', 'Equipment Relocation', 'Energy Recovery Systems'],
      impact: '72,000 KWH/annum energy savings',
      status: 'Proposed'
    }
  ]

  const categories = ['All', 'Process Optimization', 'Energy Efficiency', 'Sustainability', 'Safety & Quality']
  
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my comprehensive portfolio of Oilseed Extraction, Refining and optimization projects, 
            showcasing measurable results and innovative solutions across various operational areas.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <DollarSign className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">$6.59M+</div>
              <div className="text-sm text-gray-600">Total Savings Generated</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <TrendingDown className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">50%+</div>
              <div className="text-sm text-gray-600">Breakdown Reduction</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Zap className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">72,000+</div>
              <div className="text-sm text-gray-600">KWH Annual Savings</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Settings className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">6+</div>
              <div className="text-sm text-gray-600">Major Projects</div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{project.category}</Badge>
                        <Badge variant="outline">{project.company}</Badge>
                        <Badge variant="outline">
                          <Calendar className="h-3 w-3 mr-1" />
                          {project.year}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="text-lg font-semibold text-primary">{project.impact}</div>
                    <Badge className={project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Results & Achievements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.keyResults.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies & Methods:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20 text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6">Interested in Similar Results?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            These projects demonstrate my ability to deliver measurable improvements in Oilseed extraction and Refining operations. 
            Let's discuss how I can help optimize your processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/services">
                Explore My Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Discuss Your Project
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Portfolio

