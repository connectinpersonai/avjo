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
  ArrowRight,
  List,
  X
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ImageCarousel } from "@/components/image-carousel";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-200 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-24 pb-20 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40 min-h-screen flex items-center">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-blue-400/80 shadow-sm">
          {/* Logo and Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image 
                src="/avjo-logo.svg" 
                alt="Avjo AI" 
                width={40} 
                height={40}
                className="w-5 h-5"
              />
              <span className="text-xl font-bold text-white">Avjo.ai</span>
            </div>
            
            <a 
              href="#services" 
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                if (element) {
                  const offsetPosition = element.offsetTop + 120;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              What we do
            </a>
            <a 
              href="#projects" 
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('projects');
                if (element) {
                  const offsetPosition = element.offsetTop + 100;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Featured Projects
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('about');
                if (element) {
                  const offsetPosition = element.offsetTop;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Why Choose Us
            </a>
            <a 
              href="/careers" 
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              Careers
            </a>
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden flex items-center gap-2">
          <Image 
            src="/avjo-logo.svg" 
            alt="Avjo AI" 
            width={40} 
            height={40}
            className="w-5 h-5"
          />
            <span className="text-xl font-bold text-white">Avjo.ai</span>
          </div>
          
          {/* Free Consultation Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="#book-call" 
              className="text-sm px-6 py-2 bg-white text-blue-600 hover:bg-white/90 rounded-lg font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('book-call');
                if (element) {
                  const offsetPosition = element.offsetTop + 50;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Talk to an expert
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X weight="bold" className="w-6 h-6" />
            ) : (
              <List weight="bold" className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="absolute top-[72px] left-0 right-0 z-20 bg-blue-600/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 space-y-4">
              <a 
                href="#services" 
                className="block text-base font-medium text-white hover:text-white/80 transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('services');
                  if (element) {
                    const offsetPosition = element.offsetTop + 120;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                  setMobileMenuOpen(false);
                }}
              >
                What we do
              </a>
              <a 
                href="#projects" 
                className="block text-base font-medium text-white hover:text-white/80 transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('projects');
                  if (element) {
                    const offsetPosition = element.offsetTop + 100;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                  setMobileMenuOpen(false);
                }}
              >
                Featured Projects
              </a>
              <a 
                href="#about" 
                className="block text-base font-medium text-white hover:text-white/80 transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('about');
                  if (element) {
                    const offsetPosition = element.offsetTop;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                  setMobileMenuOpen(false);
                }}
              >
                Why Choose Us
              </a>
              <a 
                href="/careers" 
                className="block text-base font-medium text-white hover:text-white/80 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </a>
              <a 
                href="#book-call" 
                className="block text-base px-6 py-3 bg-white text-blue-600 hover:bg-white/90 rounded-lg font-medium transition-colors text-center"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('book-call');
                  if (element) {
                    const offsetPosition = element.offsetTop + 50;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                  setMobileMenuOpen(false);
                }}
              >
                Talk to an expert
              </a>
            </div>
          </motion.div>
        )}
        
        {/* AI-Inspired Background Pattern */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Gradient Mesh Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-300/70 via-purple-300/50 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-300/60 via-blue-200/50 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-200/40 via-purple-200/40 to-transparent rounded-full blur-3xl" />
          </div>
          
          {/* Circuit Board Pattern */}
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  {/* Horizontal lines */}
                  <line x1="0" y1="25" x2="30" y2="25" stroke="white" strokeWidth="2" />
                  <line x1="70" y1="25" x2="100" y2="25" stroke="white" strokeWidth="2" />
                  <line x1="0" y1="75" x2="40" y2="75" stroke="white" strokeWidth="2" />
                  <line x1="60" y1="75" x2="100" y2="75" stroke="white" strokeWidth="2" />
                  
                  {/* Vertical lines */}
                  <line x1="25" y1="0" y2="30" x2="25" stroke="white" strokeWidth="2" />
                  <line x1="25" y1="70" y2="100" x2="25" stroke="white" strokeWidth="2" />
                  <line x1="75" y1="0" y2="40" x2="75" stroke="white" strokeWidth="2" />
                  <line x1="75" y1="60" y2="100" x2="75" stroke="white" strokeWidth="2" />
                  
                  {/* Nodes */}
                  <circle cx="25" cy="25" r="4" fill="white" />
                  <circle cx="75" cy="75" r="4" fill="white" />
                  <circle cx="25" cy="75" r="3" fill="white" opacity="0.7" />
                  <circle cx="75" cy="25" r="3" fill="white" opacity="0.7" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>
          
          {/* Animated Glowing Particles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)]"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-100 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-100 rounded-full shadow-[0_0_12px_rgba(216,180,254,0.6)]"
            animate={{
              x: [0, 60, 0],
              y: [0, -80, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-2/3 right-1/3 w-4 h-4 bg-pink-100 rounded-full shadow-[0_0_15px_rgba(251,207,232,0.6)]"
            animate={{
              x: [0, -90, 0],
              y: [0, -70, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>
        
        {/* Subtle decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-50 via-blue-100/50 to-transparent z-[1]" />
        
        <div className="mx-auto max-w-5xl text-center relative z-10">
          {/* Badge with Border Sparkle Effect */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 bg-white/10 backdrop-blur-sm px-4 py-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <Sparkle weight="fill" className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">AI-Powered Solutions</span>
            
            {/* Animated border glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 pointer-events-none"
              animate={{
                borderColor: [
                  'rgba(255, 255, 255, 0)',
                  'rgba(255, 255, 255, 0.5)',
                  'rgba(255, 255, 255, 1)',
                  'rgba(255, 255, 255, 0.5)',
                  'rgba(255, 255, 255, 0)',
                ],
                boxShadow: [
                  '0 0 0px rgba(255, 255, 255, 0)',
                  '0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)',
                  '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)',
                  '0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)',
                  '0 0 0px rgba(255, 255, 255, 0)',
                ],
                opacity: [0, 0.5, 1, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          
          {/* Main Headline with Animation */}
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your AI Vision,
            </motion.span>
            <motion.span 
              className="block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Delivered at
            </motion.span>
            <motion.span 
              className="block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] pl-0 sm:pl-12 lg:pl-16 flex items-center justify-center gap-3 whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Lightning Speed <Lightning weight="fill" className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" />
            </motion.span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            className="mt-8 text-lg leading-relaxed text-white/90 max-w-3xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Most AI projects fail because they're slow, complex, and expensive.
            <br />
            Avjo combines deep AI expertise with agile product engineering to help you build real, working AI products that scale — affordably and fast.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div 
            className="mt-11 flex flex-col items-center justify-center gap-3"
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
            {/* <p className="text-sm text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              Free 30-minute consultation • No commitment required
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-32 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
          
          {/* Floating Shapes */}
          <motion.div
            className="absolute top-1/4 left-[10%] w-16 h-16 border-2 border-blue-200/40 rounded-lg"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-[15%] w-12 h-12 border-2 border-purple-200/40 rounded-full"
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-[8%] w-8 h-8 bg-pink-200/30 rounded-full"
            animate={{
              x: [0, -30, 0],
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="service-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="currentColor" className="text-gray-600" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#service-grid)" />
          </svg>
        </div>
        
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <p className="text-blue-500 text-lg mb-4">
              What we do
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-black">
              Beautiful solutions
              <br />
              for every business
            </h2>
            <p className="text-xl text-gray-600">
              We help startups and enterprises leverage AI to work smarter, not harder.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Lightning weight="fill" className="h-7 w-7 text-white" />
              </div>
                <h3 className="text-2xl font-semibold mb-3 text-black group-hover:text-blue-600 transition-colors duration-300">AI Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Eliminate repetitive work and free your team to focus on growth.
              </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-600 mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Brain weight="fill" className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-black group-hover:text-purple-600 transition-colors duration-300">Custom & Secure AI</h3>
              <p className="text-gray-600 leading-relaxed">
                From chatbots to enterprise systems, we build private, secure AI solutions tailored to your goals.
              </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 hover:border-pink-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden sm:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-pink-600 mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <RocketLaunch weight="fill" className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-black group-hover:text-pink-600 transition-colors duration-300">Rapid Prototyping</h3>
                <p className="text-gray-600 leading-relaxed">
                  MVPs and POCs ready in weeks, so you can test, iterate, and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-br from-cyan-100/20 to-pink-100/20 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <p className="text-blue-500 text-lg mb-4">
              Our Work
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-black">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Explore some of the innovative AI solutions we've built for our clients.
            </p>
          </div>

          <div className="space-y-16">
            {/* InsightMinds - Featured Project */}
            <motion.div 
              className="group relative rounded-3xl bg-white border-2 border-gray-200 hover:border-purple-300 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={false}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Left Column - Project Details */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                      <Brain weight="bold" className="w-4 h-4" />
                      AI-Powered Healthcare
                </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4 group-hover:text-purple-600 transition-colors">
                      InsightMinds
                </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      An innovative therapy analytics platform designed to empower mental health professionals with AI-powered insights and client progress tracking. Revolutionizes mental health care by bridging the gap between therapy sessions with real-time data and insights.
                </p>
              </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Key Features</h4>
                    <div className="grid gap-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-600 text-xs">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Client Progress Dashboard</p>
                          <p className="text-xs text-gray-600">Track mood trends, coping mechanisms, and therapeutic goals</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-600 text-xs">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">AI-Powered Session Analysis</p>
                          <p className="text-xs text-gray-600">Leverage cutting-edge AI to analyze therapy sessions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-600 text-xs">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Sentiment Analysis & Daily Logs</p>
                          <p className="text-xs text-gray-600">Track emotional patterns and visualize client logs with clustering analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-600 text-xs">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Automated Session Notes</p>
                          <p className="text-xs text-gray-600">Generate detailed SOAP summaries and transcripts automatically</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-3xl font-bold text-purple-600">75%</p>
                      <p className="text-sm text-gray-600">Time Saved on Documentation</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">3x</p>
                      <p className="text-sm text-gray-600">Faster Progress Insights</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-green-600">95%</p>
                      <p className="text-sm text-gray-600">Client Engagement Rate</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-pink-600">24/7</p>
                      <p className="text-sm text-gray-600">Patient Data Access</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image Carousel */}
                <div className="flex items-center justify-center">
                  <div className="w-[95%] h-36 sm:h-56 lg:h-72 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                    <ImageCarousel
                      images={[
                        '/projects/insightminds/analytics.jpg',
                        '/projects/insightminds/dashboard.jpg',
                        '/projects/insightminds/sessions.jpg',
                        '/projects/insightminds/transcript.jpg',
                        '/projects/insightminds/soap-notes.jpg',
                        '/projects/insightminds/daily-notes.jpg',
                      ]}
                      interval={3000}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Chromatic Labs - Featured Project */}
            <motion.div 
              className="group relative rounded-3xl bg-white border-2 border-gray-200 hover:border-orange-300 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={false}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-red-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Left Column - Project Details */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
                      <RocketLaunch weight="bold" className="w-4 h-4" />
                      AI Video Marketing
                </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors">
                      Chromatic Labs
                </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI-powered video creation platform that revolutionizes social media marketing. Built as an MVP and rapidly scaled to serve 2K+ brands, enabling them to generate professional UGC reels with AI avatars - no shoots, no hiring, no delays.
                </p>
              </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Key Features</h4>
                    <div className="grid gap-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-600 text-xs">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">AI Avatar Video Generation</p>
                          <p className="text-xs text-gray-600">50+ realistic AI avatars with realistic lip-sync and emotions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-600 text-xs">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Competitive Analysis Dashboard</p>
                          <p className="text-xs text-gray-600">Meta-integrated analytics to track competitors and optimize strategy</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-600 text-xs">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Hybrid Video Creation</p>
                          <p className="text-xs text-gray-600">Combine recorded footage with AI-generated content seamlessly</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-600 text-xs">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">MVP to Scale Architecture</p>
                          <p className="text-xs text-gray-600">Rapidly scaled infrastructure to handle thousands of concurrent users</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-3xl font-bold text-orange-600">10x</p>
                      <p className="text-sm text-gray-600">Faster Video Production</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-red-600">90%</p>
                      <p className="text-sm text-gray-600">Cost Reduction</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-green-600">2K+</p>
                      <p className="text-sm text-gray-600">Trusted Brands</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">29+</p>
                      <p className="text-sm text-gray-600">Languages Supported</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image Carousel */}
                <div className="flex items-center justify-center">
                  <div className="w-[95%] h-36 sm:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                    <ImageCarousel
                      images={[
                        '/projects/chromatic-labs/hero.png',
                        '/projects/chromatic-labs/avatars.png',
                        '/projects/chromatic-labs/script-creator.png',
                        '/projects/chromatic-labs/features.png',
                      ]}
                      interval={3000}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* NovaAI - Featured Project */}
            <motion.div 
              className="group relative rounded-3xl bg-white border-2 border-gray-200 hover:border-green-300 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={false}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Left Column - Project Details */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                      <Brain weight="bold" className="w-4 h-4" />
                      Enterprise AI Knowledge
                </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4 group-hover:text-green-600 transition-colors">
                      NovaAI
                </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Custom-built enterprise AI knowledge management system for a fast-growing tech startup. Indexes all internal documentation, codebases, and processes, providing instant AI-powered answers and eliminating knowledge silos across the organization.
                </p>
              </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Key Features</h4>
                    <div className="grid gap-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Intelligent Documentation Search</p>
                          <p className="text-xs text-gray-600">AI-powered search with source citations across all knowledge bases</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Custom Model Fine-Tuning</p>
                          <p className="text-xs text-gray-600">Trained on company-specific docs, code, and processes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Multi-Source Integration</p>
                          <p className="text-xs text-gray-600">Automated indexing of Notion, GitHub, Confluence, and Slack</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Hybrid AI Architecture</p>
                          <p className="text-xs text-gray-600">Switch between fine-tuned models and general-purpose LLMs</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-3xl font-bold text-green-600">70%</p>
                      <p className="text-sm text-gray-600">Less Time Searching Docs</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-emerald-600">5x</p>
                      <p className="text-sm text-gray-600">Faster Onboarding</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-teal-600">90%</p>
                      <p className="text-sm text-gray-600">Query Accuracy</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-cyan-600">100%</p>
                      <p className="text-sm text-gray-600">Team Adoption</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image Carousel */}
                <div className="flex items-center justify-center">
                  <div className="w-[95%] h-36 sm:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                    <ImageCarousel
                      images={[
                        '/projects/novaai/search.png',
                        '/projects/novaai/answer.png',
                        '/projects/novaai/documents.png',
                      ]}
                      interval={3000}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-100/30 to-blue-100/30 rounded-full blur-3xl" />
          
          {/* Animated Lines */}
          <motion.div
            className="absolute top-1/4 left-[5%] w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"
            animate={{
              x: [0, 100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-[10%] w-40 h-0.5 bg-gradient-to-r from-transparent via-purple-300/50 to-transparent rotate-45"
            animate={{
              x: [0, -80, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          
          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-[15%] right-[20%] w-20 h-20 border border-blue-200/30 rounded-xl"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div 
            className="absolute bottom-[20%] left-[15%] w-16 h-16"
            animate={{
              rotate: [0, -90, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full border-2 border-pink-200/40 rounded-full" />
          </motion.div>
          
          {/* Sparkle Effects */}
          <motion.div
            className="absolute top-[40%] left-[8%] w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          <motion.div
            className="absolute top-[60%] right-[12%] w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1,
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-[35%] right-[25%] w-2 h-2 bg-pink-400 rounded-full"
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1.5,
              delay: 2,
            }}
          />
        </div>
        
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-black">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another AI agency. We're a team of experienced developers and AI specialists who stay on the cutting edge of technology.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative p-6 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-all duration-300" />
              <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-blue-600 transition-colors">✨ Expert AI Engineers</h3>
              <p className="text-gray-600 text-sm">
                Specialists in LLMs, automation, and generative AI.
              </p>
            </div>
            
            <div className="group relative p-6 rounded-xl bg-white border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-100/50 hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-purple-400/10 rounded-full blur-2xl group-hover:bg-purple-400/20 transition-all duration-300" />
              <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-purple-600 transition-colors">🔄 End-to-End Support</h3>
              <p className="text-gray-600 text-sm">
                From ideation to deployment and post-launch optimization.
              </p>
            </div>
            
            <div className="group relative p-6 rounded-xl bg-white border-2 border-green-100 hover:border-green-400 hover:shadow-2xl hover:shadow-green-100/50 hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-green-400/10 rounded-full blur-2xl group-hover:bg-green-400/20 transition-all duration-300" />
              <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-green-600 transition-colors">⚡ Speed & Scalability</h3>
              <p className="text-gray-600 text-sm">
                Quick turnaround without sacrificing quality.
              </p>
            </div>
            
            <div className="group relative p-6 rounded-xl bg-white border-2 border-pink-100 hover:border-pink-400 hover:shadow-2xl hover:shadow-pink-100/50 hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-pink-400/10 rounded-full blur-2xl group-hover:bg-pink-400/20 transition-all duration-300" />
              <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-pink-600 transition-colors">🚀 Latest Technology</h3>
              <p className="text-gray-600 text-sm">
                Advanced AI techniques and frameworks for best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Call Section */}
      <section id="book-call" className="relative px-6 py-32 sm:py-40 lg:px-8 bg-gradient-to-b from-white via-blue-50/40 to-blue-50/20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
          <motion.div
            className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
        <motion.div 
            className="inline-block mb-6"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-5xl">💡</span>
          </motion.div>
          
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-black">
            Ready to Build Your AI Advantage?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          No sales pitch — just actionable AI strategy tailored to your needs.
          </p>
          
          <div>
          <Button
            size="lg"
              className="relative text-base px-10 py-4 h-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 rounded-xl transition-all font-semibold shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 hover:scale-105 active:scale-95 group overflow-hidden"
            data-cal-namespace="30min"
            data-cal-link="avjo-ai-0szqep/30min"
            data-cal-config='{"layout":"month_view"}'
          >
              <span className="relative z-10 flex items-center gap-2">
            Get Started
                <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
          </Button>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">🎯 Free 30-minute consultation • No commitment required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 px-6 py-16 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200/30 rounded-full blur-3xl" />
          
          {/* Subtle Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footer-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="0.5" fill="currentColor" className="text-gray-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>
        
        <div className="relative mx-auto max-w-7xl">
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
                <span className="text-xl font-bold text-black">Avjo.ai</span>
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
                  href="tel:+916362852619" 
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Phone weight="fill" className="w-5 h-5" />
                  <span className="text-sm">+91 6362852619</span>
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
                <a 
                  href="#services" 
                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('services');
                    if (element) {
                      const offsetPosition = element.offsetTop + 120;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  What we do
                </a>
                <a 
                  href="#projects" 
                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('projects');
                    if (element) {
                      const offsetPosition = element.offsetTop + 100;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Featured Projects
                </a>
                <a 
                  href="#about" 
                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('about');
                    if (element) {
                      const offsetPosition = element.offsetTop;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Why Choose Us
                </a>
                <a 
                  href="#book-call" 
                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('book-call');
                    if (element) {
                      const offsetPosition = element.offsetTop + 50;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Talk to an expert
                </a>
                <a 
                  href="/careers" 
                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Careers
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

