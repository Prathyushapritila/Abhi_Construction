"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const locations = [
  "Hyderabad", "Secunderabad", "Gachibowli", "HITEC City", "Banjara Hills", 
  "Jubilee Hills", "Kondapur", "Madhapur", "Manikonda", "Miyapur",
  "Nanakramguda", "Financial District", "Raidurg", "Kokapet", "Tellapur",
  "Rangareddy", "Medchal", "Sangareddy", "Qutubullapur", "Uppal",
  "LB Nagar", "Dilsukhnagar", "Kukatpally", "Alwal", "Malkajgiri",
  "Serilingampally", "Rajendranagar", "Shamshabad", "Gandipet", "Osmania University",
];

export function Locations() {
  return (
    <section id="locations" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Where We Build
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            You can build a new Abhi Constructions home on your lot throughout Hyderabad and the surrounding Telangana region. Not seeing your dream location? Contact us! We want to learn more about your unique build.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {locations.map((location, index) => (
                  <motion.div
                    key={location}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="flex items-center space-x-2 text-foreground hover:text-royalBlue transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-royalBlue flex-shrink-0" />
                    <span className="text-sm font-medium">{location}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground">
            Have a location in mind?{" "}
            <a
              href="/contact"
              className="text-royalBlue hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-sm"
            >
              Contact us
            </a>{" "}
            to discuss your custom build project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

