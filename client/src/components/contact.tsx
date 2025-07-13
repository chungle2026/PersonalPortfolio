import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/5 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-accent/20 rounded-full blur-2xl floating"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-2xl floating" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-12 text-center">Contact</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display font-semibold text-primary mb-6">Get in Touch</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                For booking inquiries, collaboration opportunities, or general questions, please don't hesitate to reach out. I look forward to hearing from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-secondary mr-4" size={20} />
                  <span className="text-gray-700">contact@alexanderhartwell.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-secondary mr-4" size={20} />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-secondary mr-4" size={20} />
                  <span className="text-gray-700">New York, NY</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-display font-semibold text-primary mb-4">Management</h4>
                <p className="text-gray-700">
                  <strong>Sarah Mitchell</strong><br />
                  Classical Artists Management<br />
                  <span className="text-secondary">sarah@classicalartists.com</span>
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-accent/5 p-8 rounded-2xl shadow-lg border border-accent/20">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-serif">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} className="rounded-xl border-accent/30 focus:border-accent focus:ring-accent/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-serif">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} className="rounded-xl border-accent/30 focus:border-accent focus:ring-accent/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-serif">Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl border-accent/30 focus:border-accent focus:ring-accent/20">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="booking">Booking Inquiry</SelectItem>
                            <SelectItem value="collaboration">Collaboration</SelectItem>
                            <SelectItem value="interview">Interview Request</SelectItem>
                            <SelectItem value="general">General Question</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-serif">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message here..."
                            rows={5}
                            {...field}
                            className="rounded-xl border-accent/30 focus:border-accent focus:ring-accent/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 glow rounded-xl"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
