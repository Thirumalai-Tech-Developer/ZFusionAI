import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        'service_rp58y17',
        'template_qpjd0ep',
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        'kwkLCLo2I3x6SItHL'
      );
  
      if (result.status === 200) {
        setIsSuccess(true);
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
          variant: "default",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Something went wrong.",
        description: (error instanceof Error ? error.message : "An unexpected error occurred") || "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };  

  return (
    <section id="contact" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading
            title="Get in Touch"
            subtitle="Let's discuss how we can help your business"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
            >
              <div className="bg-black bg-opacity-15 p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    {/* <Phone className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900"></h4>
                      <p className="text-gray-600"></p>
                    </div> */}
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">zfusionai@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Office</h4>
                      <p className="text-gray-600">Remote</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>

                {/* <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 4.868c2.331 0 2.606.01 3.518.051.85.039 1.32.175 1.628.292.411.159.715.35 1.025.663.307.307.497.614.657 1.025.114.308.25.778.289 1.628.042.905.051 1.18.051 3.518 0 2.339-.009 2.613-.051 3.518-.039.85-.175 1.32-.289 1.628-.159.411-.35.715-.657 1.025-.31.31-.614.497-1.025.657-.308.114-.778.25-1.628.289-.912.042-1.187.051-3.518.051-2.332 0-2.607-.009-3.518-.051-.85-.039-1.32-.175-1.628-.289-.411-.16-.715-.35-1.025-.657-.307-.31-.497-.614-.657-1.025-.114-.308-.25-.778-.289-1.628-.041-.905-.05-1.18-.05-3.518 0-2.339.009-2.613.05-3.518.039-.85.175-1.32.289-1.628.16-.411.35-.715.657-1.025.31-.307.614-.497 1.025-.657.308-.114.778-.25 1.628-.289.905-.042 1.18-.051 3.518-.051zm0 1.8c-2.173 0-2.43.01-3.283.048-.791.037-1.219.169-1.505.28-.376.146-.645.319-.924.599-.28.28-.453.549-.599.924-.111.286-.242.714-.279 1.505-.038.854-.047 1.111-.047 3.283 0 2.173.009 2.43.047 3.283.037.791.169 1.219.279 1.505.146.376.319.645.599.924.28.28.549.453.924.599.286.11.714.242 1.505.279.853.038 1.11.047 3.283.047 2.173 0 2.43-.009 3.283-.047.791-.037 1.219-.169 1.505-.279.376-.146.645-.319.925-.599.279-.28.452-.549.598-.924.111-.286.242-.714.279-1.505.038-.853.047-1.11.047-3.283 0-2.173-.009-2.43-.047-3.283-.037-.791-.169-1.219-.279-1.505-.146-.376-.319-.645-.598-.924-.28-.28-.549-.453-.925-.599-.286-.11-.714-.242-1.505-.28-.853-.038-1.11-.047-3.283-.047z"/>
                      </svg>
                    </a>
                  </div>
                </div> */}
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
            >
              <div className="bg-black bg-opacity-15 p-8 rounded-2xl shadow-sm">
                {isSuccess ? (
                  <div className="text-center py-10">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                    <Button onClick={() => setIsSuccess(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input className="bg-white bg-opacity-80" placeholder="Your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input className="bg-white bg-opacity-80" placeholder="Your email address" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <Input className="bg-white bg-opacity-80" placeholder="Your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="How can we help you?" 
                                  className="min-h-[120px] bg-white bg-opacity-80" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
