import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LuClock, LuMapPin, LuPhone } from "react-icons/lu";
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animated/scroll-reveal';

export default function ContactPage() {
  const addressDetails = [
    'Opposite to Kalyani Shilpanchal Railway Station, P.O.: Kalyani, Dist: Nadia, West Bengal:741235'
  ];

  const phoneDetails = ['(33) 2502 5629 / 5630', '+91 7449522271', '+91 7449334888'];
  const emailDetails = ['principal.iiekalyani@gmail.com', 'admission@iiekalyani.com'];

  const officeHours = [
    'Monday - Friday: 9:00 AM - 6:00 PM',
    'Saturday: 9:00 AM - 1:00 PM'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Get in Touch
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions about our programs or admissions? We're here to help. 
              Reach out to us and take the first step towards your educational journey.
            </p>

          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column: Contact Information + Map */}
          <div className="space-y-8">
            <ScrollReveal direction="left">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>

                {/* Address (single full-width row) */}
                <StaggerContainer staggerDelay={0.08} className="mb-6">
                  <StaggerItem>
                    <Card className="bg-white/70 backdrop-blur-lg border border-white/20 hover:shadow-xl transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <LuMapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Address</h4>
                            {addressDetails.map((line, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                </StaggerContainer>

                {/* Phone + Email (combined) and Office Hours side-by-side */}
                <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 gap-6">
                  {/* Combined Phone + Email */}
                  <StaggerItem>
                    <Card className="bg-white/70 backdrop-blur-lg border border-white/20 hover:shadow-xl transition-all h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="flex flex-col items-center justify-center">
                              <LuPhone className="h-4 w-4 text-primary" />
                              {/* <Mail className="h-4 w-4 text-primary mt-1" /> */}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold text-foreground">Phone & Email</h4>
                            {phoneDetails.map((p, i) => (
                              <p key={`p-${i}`} className="text-sm text-muted-foreground">
                                {p}
                              </p>
                            ))}
                            {emailDetails.map((e, i) => (
                              <p key={`e-${i}`} className="text-sm text-muted-foreground">
                                {e}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>

                  {/* Office Hours */}
                  <StaggerItem>
                    <Card className="bg-white/70 backdrop-blur-lg border border-white/20 hover:shadow-xl transition-all h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <LuClock className="h-5 w-5 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold text-foreground">Office Hours</h4>
                            {officeHours.map((oh, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground">
                                {oh}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </ScrollReveal>

            {/* Map placeholder (unchanged) */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-white/60 backdrop-blur-lg rounded-lg h-64 flex border border-white/20 shadow-lg">
                <iframe
                  title="Ideal Institute of Engineering - Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2464781122567!2d88.451197296381!3d22.977962175663183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x83441321d4d1741d%3A0x94e5318316a55d40!2sIdeal%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1763480056835!5m2!1sen!2sin"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right column: Contact Form (unchanged) */}
                    <ScrollReveal direction="right">
            <Card className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input type="email" placeholder="Enter your email address" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input placeholder="Enter your phone number" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input placeholder="What is this regarding?" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    required
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg" size="lg">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
