import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  return (
    <div className="bg-black bg-opacity-15 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden h-full">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={icon} 
            alt={`${title} icon`} 
            className="w-12 h-12 mr-4 object-contain" 
          />
          <h3 className="text-xl font-bold text-black">{title}</h3>
        </div>
        <p className="text-gray-900 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <ChevronRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        {/* <a href="#contact" className="text-orange-500 font-medium hover:underline inline-flex items-center">
          Learn more <ChevronRight className="ml-1 h-4 w-4" />
        </a> */}
      </div>
    </div>
  );
};

export default ServiceCard;
