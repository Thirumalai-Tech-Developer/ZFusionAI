import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-36 md:pb-24 bg-orange-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Hero Text Content */}
          <motion.div 
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Innovative <span className="text-orange-500">AI Solutions</span> for Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              <span className="text-black font-bold">Z</span><span className="text-orange-600 font-bold">Fusion</span><span className="text-red-600 font-bold">AI</span> delivers cutting-edge technological solutions that transform how businesses operate, compete, and grow in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" asChild>
                <a href="services">Explore Services</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="ContactUS">Contact Us</a>
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Abstract shapes for visual interest */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              {/* Main image container with border gradient */}
              <div className="relative">
                <div className="w-full h-full absolute rounded-2xl bg-gradient-to-br from-orange-300 via-orange-500 to-red-500 p-1 transform rotate-6 scale-105"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200&h=900"
                  alt="Tech office with modern workstations" 
                  className="relative rounded-2xl shadow-xl z-10 w-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 lg:mt-24 bg-black bg-opacity-15 backdrop-blur-sm rounded-2xl p-6 shadow-sm"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-orange-500 mb-2">50+</h3>
            <p className="text-gray-900">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-orange-500 mb-2">20+</h3>
            <p className="text-gray-900">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-orange-500 mb-2">20+</h3>
            <p className="text-gray-900">Expert Team</p>
          </div>
        </motion.div>
        <br />
        <br />
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left lg:text-left"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Why we are?
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              <br className="hidden md:block" />
              We stand apart by offering a <span className="font-bold text-black">personalized, one-on-one expert consultation</span> before project confirmation — ensuring clarity, confidence, and alignment from day one.
              <br /><br />
              Our team blends deep domain expertise with creative thinking to deliver AI-powered, full-stack solutions tailored to your specific goals. From strategic planning to seamless deployment, we prioritize innovation, transparency, and measurable results.
              <br /><br />
              Whether you're a startup seeking rapid growth or an enterprise aiming for digital transformation, <span className="font-bold text-black">Z</span><span className="text-orange-600 font-bold">Fusion</span><span className="text-red-600 font-bold">AI</span> is your trusted partner for intelligent, scalable, and future-ready technology.
            </p>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left lg:text-left"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">What We Do</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              We specialize in AI-driven solutions, full-stack development, and custom software tailored to your business goals. Our services include:
            </p>
            <ul className="list-disc pl-6 mt-4 text-lg text-gray-600">
              <li>AI & Machine Learning Model Development</li>
              <li>Web & Mobile App Development</li>
              <li>Data Analysis & Visualization</li>
              <li>Automation Solutions & API Integration</li>
              <li>Cloud Deployment & DevOps</li>
            </ul>
          </div>
        </motion.div>
        <br /><br />
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="text-left lg:text-left"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">Meet the Team</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              Led by experienced founders <strong>Thirumalai Gunasekaran</strong> and <strong>Karthick C</strong>, our team consists of passionate engineers, data scientists, and innovators dedicated to solving real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
