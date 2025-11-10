"use client";

import { motion } from "framer-motion";
import { Building2, Award, Users, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-royalBlue/10 via-background to-gold/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              About Abhi Constructions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With over 25 years of experience in the construction industry, we have built a reputation for excellence, reliability, and innovation. Our commitment to quality and customer satisfaction has made us a trusted name in construction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 1999, Abhi Constructions began as a small family business with a big vision: to transform the construction industry through quality, integrity, and innovation. What started as a local contractor has grown into a premier construction company serving clients across the region.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Over the years, we&apos;ve completed hundreds of projects, from custom residential homes to large-scale commercial developments. Each project has taught us something new, and we&apos;ve continuously evolved our methods, technologies, and approach to stay at the forefront of the industry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we&apos;re proud to be recognized as one of the region&apos;s most trusted construction companies, known for our attention to detail, commitment to sustainability, and unwavering dedication to client satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                  <Card className="h-full border-2 hover:border-royalBlue/50 transition-colors">
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
    </div>
  );
}

