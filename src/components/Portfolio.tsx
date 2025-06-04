import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import SectionHeading from "@/components/ui/section-heading";
import { Briefcase, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Portfolio = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      location: "Remote",
      description: "Looking for a skilled frontend developer with experience in React.js and Tailwind CSS.",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      description: "Seeking a Node.js developer with experience in building scalable REST APIs.",
    },
    {
      title: "AI/ML Engineer",
      location: "Remote",
      description: "We need an AI engineer with hands-on experience in deep learning and NLP.",
    },
  ];

  const services = [
    "🤖 AI Solutions",
    "📈 Machine Learning Models",
    "🌐 Web App Development",
    "📊 Data Analytics",
    "🛠️ Custom SaaS Platforms",
    "🚀 Digital Transformation",
  ];

  return (
    <section id="careers" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading
            title="Careers at ZFusionAI"
            subtitle="Join our mission to build smarter solutions"
          />

          {/* Closed Positions Notice */}
          <motion.div
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="mt-6 mb-12 text-center text-red-600 font-semibold text-lg"
          >
            All job openings are currently <span className="underline">closed</span>.
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Open Positions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  className="p-6 rounded-lg shadow bg-black bg-opacity-15 hover:shadow-lg transition-shadow border border-gray-200 opacity-50 cursor-not-allowed"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="text-orange-500" />
                    <h4 className="font-bold text-lg text-black">{job.title}</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="text-gray-800 text-sm">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="mt-24"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Our Services
            </h3>
            <div className="w-full max-w-4xl mx-auto">
              <Carousel>
                <CarouselContent>
                  {services.map((service, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-2"
                    >
                      <div className="flex justify-center items-center h-40 rounded-xl bg-gray-100 text-center text-lg font-semibold text-gray-800 shadow">
                        {service}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
