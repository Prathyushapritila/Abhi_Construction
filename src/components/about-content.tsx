"use client";

import { motion } from "framer-motion";
import { Building2, Award, Users, Target, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InnovationTimeline } from "@/components/innovation-timeline";
import { siteConfig } from "@/config/site";

const values = [
  {
    icon: Building2,
    title: "Quality First",
    description: "We never compromise on quality. Every project is built to the highest standards using premium materials and skilled craftsmanship.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning designs and construction that exceed expectations. We strive for perfection in every detail.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your vision is our mission. We work closely with clients to ensure their dreams become reality.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "On-time delivery, transparent communication, and dependable service you can count on.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Story Section */}
      <section className="py-20 bg-marbleWhite">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <h2 className="text-3xl font-heading font-bold mb-6 text-royalNavy gold-underline">Our Story</h2>
              <p className="text-steelGray mb-4 leading-relaxed">
                Founded in {siteConfig.location} over {siteConfig.stats.years} years ago, {siteConfig.name} began as a small family business with a big vision: to transform the construction industry through quality, integrity, and innovation. Rooted in the vibrant city of {siteConfig.location}, we understand the unique needs of Telangana&apos;s growing communities.
              </p>
              <p className="text-steelGray mb-4 leading-relaxed">
                Over the years, we&apos;ve completed {siteConfig.stats.projects} custom homes and {siteConfig.stats.interiors} interior design projects across {siteConfig.location}, from Pragathi Nagar to Nizampet, Kukatpally to Bachupally. Each project has taught us something new, and we&apos;ve continuously evolved our methods, technologies, and approach to stay at the forefront of the industry.
              </p>
              <p className="text-steelGray leading-relaxed">
                Today, we&apos;re proud to be recognized as one of {siteConfig.location}&apos;s most trusted construction companies, known for our attention to detail, commitment to sustainability, and unwavering dedication to client satisfaction. Our tagline &quot;{siteConfig.tagline}&quot; reflects our mission to create exceptional spaces that exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-royalNavy gold-underline">
              Our Values
            </h2>
            <p className="text-xl text-steelGray max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover:border-royalBlue/50 transition-colors bg-white">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-royalBlue/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-royalBlue" />
                      </div>
                      <CardTitle className="text-xl font-heading">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-marbleWhite">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center text-royalNavy gold-underline">
              Our Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <Card className="border-2 border-premiumGold/20 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-royalBlue">Precision</h3>
                  <p className="text-steelGray">
                    Every measurement matters. Every detail counts. We bring meticulous attention to every aspect of your project, ensuring perfection in execution.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-premiumGold/20 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-royalBlue">Creativity</h3>
                  <p className="text-steelGray">
                    Innovation drives us forward. We combine creative design thinking with practical construction expertise to bring unique visions to life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-royalNavy gold-underline">
              Certifications & Partners
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["ISO Certified", "LEED Partner", "Green Building", "Award Winner"].map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="border-2 border-premiumGold/20 text-center p-6 bg-white">
                  <CheckCircle2 className="h-8 w-8 text-premiumGold mx-auto mb-2" />
                  <p className="font-semibold text-royalNavy">{cert}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <InnovationTimeline />

      {/* Leadership Team */}
      <section className="py-20 bg-marbleWhite">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-royalNavy gold-underline">
              Our Leadership Team
            </h2>
            <p className="text-xl text-steelGray max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Abhi Kumar",
                role: "Founder & CEO",
                description: `With over ${siteConfig.stats.years} years of experience in construction and design, Abhi leads our team with a vision for innovation and excellence.`,
              },
              {
                name: "Priya Sharma",
                role: "Head of Design",
                description: "An award-winning interior designer with expertise in modern and traditional design, bringing creativity to every project.",
              },
              {
                name: "Rajesh Patel",
                role: "Project Director",
                description: "Ensures every project is delivered on time and within budget, with over 8 years of project management experience.",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-premiumGold/50 transition-colors text-center bg-white">
                  <CardContent className="p-6">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-royalBlue/20 to-premiumGold/20 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-royalBlue" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2 text-royalNavy">{member.name}</h3>
                    <p className="text-premiumGold font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-steelGray">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="py-20 bg-royalNavy text-marbleWhite">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <blockquote className="text-2xl md:text-3xl font-heading font-semibold mb-4">
              &ldquo;{siteConfig.tagline}&rdquo;
            </blockquote>
            <p className="text-premiumGold text-lg">— Our Promise to You</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-royalBlue text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              To deliver exceptional construction services that exceed client expectations while maintaining the highest standards of quality, safety, and professionalism. We are committed to building lasting relationships and creating spaces that inspire and endure.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

