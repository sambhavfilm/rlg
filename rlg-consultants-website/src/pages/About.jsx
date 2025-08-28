import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Building, Target, Users, Award } from 'lucide-react'

const About = () => {
  const experience = [
    {
      period: "2023 - Present",
      role: "Principal Consultant",
      company: "RLG Consultants",
      location: "Australia & Global",
      description: "Providing specialized consulting services in Oilseed Extraction, Refining process improvement, and Operational excellence to clients worldwide.",
      achievements: [
        "Developed innovative solutions for press and solvent extraction operations",
        "Implemented meal grinding and handling improvements",
        "Designed energy-efficient process modifications"
      ]
    },
    {
      period: "2013 - 2022",
      role: "General Manager - Operations",
      company: "Riverina Oils & Bio Energy",
      location: "Bomen, NSW",
      description: "Led systematic commissioning of edible oil seed crushing and refining plant, focusing on process optimization and continuous improvement.",
      achievements: [
        "Achieved 10% year-over-year growth in crushing and refining operations",
        "Reduced plant breakdowns by 50% through reliability improvements",
        "Generated $6.5M+ in quantifiable benefits through continuous improvement",
        "Developed world's lowest trans-fat oil through customized refining process",
        "Led Net Zero strategy development for carbon emissions reduction"
      ]
    },
    {
      period: "2009 - 2013",
      role: "General Manager - Operations",
      company: "Adani Wilmar",
      location: "Mundra, Gujarat, India",
      description: "Managed four refinery operations across East and West Coast facilities, overseeing 4000+ MT/day refining capacity.",
      achievements: [
        "Improved productivity while reducing operational costs by 10%",
        "Managed diverse product lines including CPO, Sunflower, Rice Bran, and Groundnut oils",
        "Designed employee recognition programs boosting productivity and morale",
        "Successfully executed expansion for new product lines"
      ]
    },
    {
      period: "2006 - 2009",
      role: "General Manager - Project",
      company: "Emami Agrotech",
      location: "Kolkata, West Bengal, India",
      description: "Led comprehensive project management for INR 2.6 billion integrated facility development.",
      achievements: [
        "Managed 300 TPD bio-diesel plant and 1000 TPD edible oil refinery projects",
        "Oversaw 4.5 KM cross-country pipeline installation",
        "Delivered projects within budget through strategic supplier evaluation",
        "Managed large-scale liquid storage installation (50,000 MT capacity)"
      ]
    }
  ]

  const coreValues = [
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Continuous Improvement",
      description: "Committed to the Kaizen philosophy of incremental, continuous improvement involving all team members."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Collaborative Leadership",
      description: "Building motivated teams through employee recognition programs and skill development initiatives."
    },
    {
      icon: <Building className="h-8 w-8 text-secondary" />,
      title: "Operational Excellence",
      description: "Focusing on safety, quality, efficiency, and environmental responsibility in all operations."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-secondary" />,
      title: "Knowledge Sharing",
      description: "Dedicated to mentoring and developing the next generation of industry professionals."
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rakesh Gupta
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A seasoned professional with over 30 years of experience in edible oil seed crushing, 
            refining, project execution, and operations management.
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-20">
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-center mb-12">Professional Summary</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  I am an experienced Engineer with over 30 years of expertise in edible oil seed 
                  crushing and refining project execution and operation. Throughout my career, I have been 
                  adaptive and deadline-oriented, consistently executing and completing multiple projects 
                  in high-stress environments.
                </p>
                <p className="mb-4">
                  As a meticulous leader and strategic planner with comprehensive managerial acumen, 
                  I offer vision and motivational leadership that drives operational excellence. My approach 
                  is grounded in the Kaizen philosophy of continuous improvement, focusing on incremental 
                  changes that create significant long-term impact.
                </p>
                <p>
                  Currently operating as RLG Consultants, I provide specialized consulting services to 
                  clients across Australia and internationally, helping organizations optimize their 
                  oil production processes and achieve sustainable operational improvements.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Approach & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                      <p className="text-lg font-semibold text-gray-800">{job.company}</p>
                      <p className="text-gray-600">{job.location}</p>
                    </div>
                    <span className="text-sm font-medium bg-secondary/20 text-secondary px-3 py-1 rounded-full mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-secondary mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Sustainability (Environmental, Social and Governance)</h3>
                    <p className="text-gray-600">Graduate Certificate in Sustainability - AIM Business School, Sydney</p>
                    <p className="text-sm text-gray-500">In Progress</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-secondary mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Mechanical Engineering</h3>
                    <p className="text-gray-600">University of Pune, Maharashtra State, India</p>
                    <p className="text-sm text-gray-500">Graduated: December 1992</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how my experience and expertise can help optimize your Oilseed extraction, Refining
            operations and drive sustainable improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/portfolio">
                View My Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
