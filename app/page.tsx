"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Lightning, 
  RocketLaunch, 
  Brain, 
  Sparkle,
  Phone,
  EnvelopeSimple,
  MapPin,
  ArrowRight
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-200 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-32 lg:py-40 min-h-screen flex items-center">
        {/* Logo - Top Left */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
          <Image 
            src="/avjo-logo.svg" 
            alt="Avjo AI" 
            width={40} 
            height={40}
            className="w-5 h-5"
          />
          <span className="text-xl  font-bold text-white">Avjo</span>
        </div>
        
        {/* Subtle decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-50 via-blue-100/50 to-transparent" />
        
        <div className="mx-auto max-w-5xl text-center relative z-10">
          {/* Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkle weight="fill" className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">AI-Powered Solutions</span>
          </motion.div>
          
          {/* Main Headline with Animation */}
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build Your Product,
            </motion.span>
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fast, Affordable,
            </motion.span>
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              and Stress-Free
            </motion.span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            className="mt-8 text-lg leading-relaxed text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Turning ideas into reality, fast. Let us take your idea from concept to a market-ready Product in just a few weeks.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div 
            className="mt-12 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              size="lg"
              className="text-base px-8 py-3 h-auto bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-medium shadow-lg shadow-blue-600/30"
              data-cal-namespace="30min"
              data-cal-link="avjo-ai-0szqep/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <motion.p 
              className="text-blue-500 text-lg mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              What we do
            </motion.p>
            <motion.h2 
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Beautiful solutions
              <br />
              for every business
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help small and mid-scale businesses leverage AI to work smarter, not harder.
            </motion.p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-6">
                <Lightning weight="fill" className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-black">AI Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Automate repetitive business tasks and free up your team to focus on what matters most.
              </p>
            </motion.div>

            <motion.div 
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 mb-6">
                <RocketLaunch weight="fill" className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-black">Fast Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Rapid, scalable application development that grows with your business needs.
              </p>
            </motion.div>

            <motion.div 
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 sm:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 mb-6">
                <Brain weight="fill" className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-black">Latest AI Tech</h3>
              <p className="text-gray-600 leading-relaxed">
                Cutting-edge AI solutions powered by the most advanced technology available today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-black">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another AI agency. We're a team of experienced developers and AI specialists who stay on the cutting edge of technology.
            </p>
          </motion.div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div 
              className="p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-semibold text-lg mb-2 text-black">Experienced Team</h3>
              <p className="text-gray-600 text-sm">
                Years of experience building production-ready AI solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-2 text-black">Latest Technology</h3>
              <p className="text-gray-600 text-sm">
                Advanced AI models and frameworks for best results.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold text-lg mb-2 text-black">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Quick turnaround without sacrificing quality.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-semibold text-lg mb-2 text-black">Scalable Solutions</h3>
              <p className="text-gray-600 text-sm">
                Built to scale with your business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book Call Section */}
      <section id="book-call" className="relative px-6 py-32 sm:py-40 lg:px-8 bg-gradient-to-b from-white via-blue-50/40 to-blue-50/20">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-black">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Book a free consultation call and let's discuss how AI can help automate your workflows and scale your business.
          </p>
          
          <Button
            size="lg"
            className="text-base px-8 py-3 h-auto bg-blue-600 text-white hover:bg-blue-700 rounded-xl transition-all font-medium shadow-lg shadow-blue-600/30"
            data-cal-namespace="30min"
            data-cal-link="avjo-ai-0szqep/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-16 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-1 justify-center md:justify-start mb-4">
                <Image 
                  src="/avjo-logo.svg" 
                  alt="Avjo AI" 
                  width={32} 
                  height={32}
                  className="w-4 h-4 brightness-0"
                />
                <span className="text-xl font-bold text-black">Avjo</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building fast, scalable, and stress-free AI solutions for modern businesses.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-black mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a 
                  href="tel:+917487929374" 
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Phone weight="fill" className="w-5 h-5" />
                  <span className="text-sm">+91 7487929374</span>
                </a>
                <a 
                  href="mailto:connectinpersonai@gmail.com" 
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <EnvelopeSimple weight="fill" className="w-5 h-5" />
                  <span className="text-sm">connectinpersonai@gmail.com</span>
                </a>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                  <MapPin weight="fill" className="w-5 h-5" />
                  <span className="text-sm">Bangalore, India</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-black mb-4">Quick Links</h4>
              <div className="space-y-3">
                <a href="#services" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Services
                </a>
                <a href="#about" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Why Choose Us
                </a>
                <Button
                  variant="link"
                  className="text-sm text-gray-600 hover:text-blue-600 p-0 h-auto font-normal"
                  data-cal-namespace="30min"
                  data-cal-link="avjo-ai-0szqep/30min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className=" pt-4 md:pt-0border-gray-200 flex items-center justify-center md:justify-start md:items-start">
            <p className="text-sm text-gray-500">© 2025 Avjo AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

