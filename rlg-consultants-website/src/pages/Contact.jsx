import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "rakeshgupta@rlgkonsultants.com",
      action: "mailto:rakeshgupta@rlgkonsultants.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "042-911-3151",
      action: "tel:042-911-3151"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Sydney, NSW 2127, Australia",
      action: null
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Availability",
      details: "Available for global projects",
      action: null
    }
  ]

  const services = [
    "Process Optimization",
    "Energy Efficiency Consulting",
    "Continuous Improvement (Kaizen)",
    "Project Management",
    "Operational Excellence",
    "Net Zero Strategy Development"
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to optimize your oil production operations? Let's discuss how my expertise 
            can help drive measurable improvements in your processes and profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
           <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  netlify-honeypot="bot-field"
                  action="/"
                  className="space-y-6"
                  onSubmit={(e) => {
                  e.preventDefault(); // Prevent React from handling the submission
                  const form = e.target;
                  const formData = new FormData(form);
                  fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString(),
                  })
                    .then(() => alert("Thank you for your message!"))
                    .catch((error) => alert(error));
                }}
            >

                    {/* Hidden field for Netlify (this is for the React form, not the static one) */}
                    <input type="hidden" name="form-name" value="contact" />
                    
                    {/* Honeypot field for spam protection */}
                    <div style={{ display: 'none' }}>
                      <Label htmlFor="bot-field">Don't fill this out if you're human:</Label>
                      <Input id="bot-field" name="bot-field" />
                    </div>
                    {/* ... rest of your form fields ... */}
                  </form>
                  
                  {/* Honeypot field for spam protection */}
                  <div style={{ display: 'none' }}>
                    <Label htmlFor="bot-field">Don't fill this out if you're human:</Label>
                    <Input id="bot-field" name="bot-field" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" placeholder="Your first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@company.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Your company name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service of Interest</Label>
                    <select 
                      id="service" 
                      name="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Please describe your project, challenges, or questions. Include details about your current operations, specific areas of concern, and what you hope to achieve."
                      rows={6}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
             
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        {info.action ? (
                          <a 
                            href={info.action} 
                            className="text-gray-600 hover:text-primary transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* About My Consulting */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">About My Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    With over 30 years of experience in oil production and refining operations, 
                    I provide specialized consulting services to help organizations optimize 
                    their processes and achieve operational excellence.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">What to Expect:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Initial consultation to understand your specific needs
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Comprehensive assessment of current operations
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Tailored recommendations and implementation plans
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Ongoing support throughout project execution
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Industries Served:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Edible Oil Processing</li>
                      <li>• Seed Crushing Operations</li>
                      <li>• Oil Refining Facilities</li>
                      <li>• Bio-energy Production</li>
                      <li>• Food Processing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Why Work With Me?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">30+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">$6.5M+</div>
                    <div className="text-sm text-gray-600">Savings Generated</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">50%+</div>
                    <div className="text-sm text-gray-600">Breakdown Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">Global</div>
                    <div className="text-sm text-gray-600">Client Base</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-20 text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking to optimize existing operations or planning a new project, 
            I'm here to help you achieve your goals with proven expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="mailto:rakeshgupta@rlgkonsultants.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me Directly
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:042-911-3151">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
