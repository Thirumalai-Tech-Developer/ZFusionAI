import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import SectionHeading from "@/components/ui/section-heading";
import ServiceCard from "@/components/ui/service-card";
import { ChevronRight } from "lucide-react";

// Import local SVG icons
import aiIconSrc from "@/assets/icons/brain.ico";
import webIconSrc from "@/assets/icons/globe.ico";
import mobileIconSrc from "@/assets/icons/mobile.ico";
import cloudIconSrc from "@/assets/icons/clouds.ico";
import securityIconSrc from "@/assets/icons/sheild.ico";
import consultingIconSrc from "@/assets/icons/laptop.ico";

const Services = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom artificial intelligence solutions to automate processes, extract insights from data, and enhance decision-making capabilities.",
      icon: aiIconSrc,
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision Systems", "Custom AI Models"],
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies to deliver exceptional user experiences.",
      icon: webIconSrc,
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Integration"],
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications designed to engage users and drive business growth.",
      icon: mobileIconSrc,
      features: ["iOS & Android Apps", "Cross-Platform Development", "UI/UX Design", "App Maintenance & Support"],
    },
    {
      title: "Cloud Services",
      description: "Secure, scalable cloud infrastructure and solutions to optimize performance and reduce operational costs.",
      icon: cloudIconSrc,
      features: ["Cloud Migration", "DevOps Implementation", "Serverless Architecture", "Cloud Security"],
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect critical assets and ensure business continuity.",
      icon: securityIconSrc,
      features: ["Security Assessments", "Penetration Testing", "Security Architecture", "Compliance Services"],
    },
    {
      title: "IT Consulting",
      description: "Strategic technology consulting to align IT initiatives with business objectives and drive innovation.",
      icon: consultingIconSrc,
      features: ["Digital Transformation", "Technology Roadmaps", "Process Optimization", "IT Strategy"],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading
            title="Our Services"
            subtitle="Cutting-edge solutions for modern businesses"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn("up", "tween", 0.7, 1)}
            className="mt-16 text-center"
          >
            <p className="text-gray-950 max-w-2xl mx-auto mb-6">
              Looking for a custom solution? Our team of experts can develop tailored solutions to meet your specific business needs.
            </p>
            <a
              href="ContactUS"
              className="inline-flex items-center text-orange-500 font-medium hover:underline"
            >
              Discuss your project with us <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
