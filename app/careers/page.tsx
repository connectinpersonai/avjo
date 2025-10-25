"use client";

import { ArrowLeft, Briefcase, Clock, MapPin, CurrencyDollar, EnvelopeSimple, CaretDown, CaretUp } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Careers() {
  const [openJob, setOpenJob] = useState<number | null>(null);

  const toggleJob = (jobId: number) => {
    setOpenJob(openJob === jobId ? null : jobId);
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/avjo-logo.svg" 
              alt="Avjo AI" 
              width={32} 
              height={32}
              className="w-5 h-5"
            />
            <span className="text-xl font-bold text-black">Avjo.ai</span>
          </Link>
          <Link 
            href="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft weight="bold" className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
            <Briefcase weight="fill" className="w-5 h-5" />
            <span className="text-sm font-medium">We're Hiring!</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-black">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Be part of a dynamic team building cutting-edge AI solutions that transform businesses.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Job Card 1 - Full Stack Developer */}
          <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
            <div 
              className="p-8 cursor-pointer flex items-start justify-between gap-4"
              onClick={() => toggleJob(1)}
            >
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-black mb-2">Full Stack Developer</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin weight="fill" className="w-4 h-4" />
                    <span>Remote / Bangalore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock weight="fill" className="w-4 h-4" />
                    <span>Full-time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CurrencyDollar weight="fill" className="w-4 h-4" />
                    <span>Competitive Salary</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                {openJob === 1 ? (
                  <CaretUp weight="bold" className="w-6 h-6 text-blue-600" />
                ) : (
                  <CaretDown weight="bold" className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </div>

            {openJob === 1 && (
              <div className="px-8 pb-8 space-y-6 text-gray-700 border-t border-gray-100 pt-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-3">About the Role</h3>
                <p className="leading-relaxed">
                  We're looking for talented Full Stack Developers (including entry-level) to join our growing team. 
                  You'll work on building scalable AI-powered applications, collaborating with designers, product managers, 
                  and other developers to create exceptional user experiences. We value keen learners who are passionate 
                  about technology and eager to grow.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Key Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Develop and maintain web applications using modern frameworks (React, Next.js, Node.js)</li>
                  <li>Build and integrate RESTful APIs and GraphQL endpoints</li>
                  <li>Collaborate with AI/ML teams to integrate intelligent features</li>
                  <li>Work with AI stacks like LangChain, LangGraph, RAG, and vector databases</li>
                  <li>Write clean, maintainable, and well-documented code</li>
                  <li>Participate in code reviews and contribute to technical decisions</li>
                  <li>Optimize applications for maximum speed and scalability</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Requirements</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>0-3 years of experience in full stack development (entry-level welcome!)</li>
                  <li>Proficiency in JavaScript/TypeScript, React, and Node.js</li>
                  <li>Familiarity with AI frameworks and tools (LangChain, LangGraph, RAG, vector databases)</li>
                  <li>Understanding of databases (PostgreSQL, MongoDB) and ORMs</li>
                  <li>Basic understanding of RESTful API design and implementation</li>
                  <li>Familiarity with Git version control</li>
                  <li>Good understanding of responsive design principles</li>
                  <li>Strong problem-solving skills and attention to detail</li>
                  <li><strong>Keen learner with a passion for AI and emerging technologies</strong></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Nice to Have</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Experience with AI/ML integration or Python</li>
                  <li>Hands-on experience with LLM applications and prompt engineering</li>
                  <li>Knowledge of cloud platforms (AWS/GCP/Azure) and CI/CD pipelines</li>
                  <li>Knowledge of containerization (Docker, Kubernetes)</li>
                  <li>Experience with testing frameworks (Jest, Cypress, Playwright)</li>
                  <li>Open-source contributions or personal projects</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">What We Offer</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Competitive salary and equity options</li>
                  <li>Flexible work arrangements (remote-first culture)</li>
                  <li>Health insurance and wellness benefits</li>
                  <li>Mentorship program and hands-on learning with senior engineers</li>
                  <li>Access to premium AI tools and learning resources</li>
                  <li>Work with cutting-edge AI technologies (LangChain, LLMs, RAG systems)</li>
                  <li>Collaborative and innovative team environment</li>
                  <li>Growth opportunities as we scale</li>
                </ul>
              </div>
              </div>
            )}
          </div>

          {/* Job Card 2 - AI/ML Engineer */}
          <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
            <div 
              className="p-8 cursor-pointer flex items-start justify-between gap-4"
              onClick={() => toggleJob(2)}
            >
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-black mb-2">AI/ML Engineer</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin weight="fill" className="w-4 h-4" />
                    <span>Remote / Bangalore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock weight="fill" className="w-4 h-4" />
                    <span>Full-time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CurrencyDollar weight="fill" className="w-4 h-4" />
                    <span>Competitive Salary</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                {openJob === 2 ? (
                  <CaretUp weight="bold" className="w-6 h-6 text-blue-600" />
                ) : (
                  <CaretDown weight="bold" className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </div>

            {openJob === 2 && (
              <div className="px-8 pb-8 space-y-6 text-gray-700 border-t border-gray-100 pt-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-3">About the Role</h3>
                <p className="leading-relaxed">
                  We're seeking AI/ML Engineers (including entry-level) to help build intelligent systems that solve 
                  real-world business problems. You'll work on developing, training, and deploying machine learning models, 
                  with a focus on modern AI frameworks. We welcome passionate learners who are excited about the future of AI.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Key Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Design, develop, and deploy machine learning models and AI systems</li>
                  <li>Work with LangChain, LangGraph, and RAG architectures for LLM applications</li>
                  <li>Build and manage vector databases for semantic search and retrieval</li>
                  <li>Work with large datasets to train and fine-tune models</li>
                  <li>Integrate AI capabilities into production applications</li>
                  <li>Optimize model performance and inference speed</li>
                  <li>Stay updated with the latest AI/ML research and technologies</li>
                  <li>Collaborate with cross-functional teams to understand business requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Requirements</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>0-3 years of experience in AI/ML engineering (entry-level welcome!)</li>
                  <li>Proficiency in Python and familiarity with ML frameworks (TensorFlow, PyTorch, scikit-learn)</li>
                  <li>Familiarity with AI stacks: LangChain, LangGraph, RAG, vector databases</li>
                  <li>Understanding of NLP, LLMs, or computer vision fundamentals</li>
                  <li>Basic understanding of deep learning architectures</li>
                  <li>Knowledge of statistics and linear algebra</li>
                  <li>Excellent problem-solving and analytical skills</li>
                  <li><strong>Keen learner with strong curiosity about AI advancements</strong></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Nice to Have</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Hands-on experience with LLMs and prompt engineering</li>
                  <li>Experience with vector databases (Pinecone, Weaviate, Chroma)</li>
                  <li>Knowledge of MLOps and model deployment pipelines</li>
                  <li>Knowledge of cloud AI services (AWS SageMaker, Google Vertex AI, Azure ML)</li>
                  <li>Experience with fine-tuning and RLHF techniques</li>
                  <li>Published research papers or contributions to ML communities</li>
                  <li>Personal projects or GitHub portfolio showcasing AI work</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">What We Offer</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Competitive salary and equity options</li>
                  <li>Flexible work arrangements (remote-first culture)</li>
                  <li>Health insurance and wellness benefits</li>
                  <li>Mentorship from experienced AI/ML practitioners</li>
                  <li>Access to premium AI/ML tools, APIs, and computing resources</li>
                  <li>Conference and learning budget for continuous skill development</li>
                  <li>Work on challenging and impactful AI projects with real-world impact</li>
                  <li>Collaborative research environment</li>
                  <li>Growth opportunities as we scale</li>
                </ul>
              </div>
              </div>
            )}
          </div>

          {/* Job Card 3 - Marketing Specialist */}
          <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
            <div 
              className="p-8 cursor-pointer flex items-start justify-between gap-4"
              onClick={() => toggleJob(3)}
            >
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-black mb-2">Marketing Specialist</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin weight="fill" className="w-4 h-4" />
                    <span>Remote / Bangalore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock weight="fill" className="w-4 h-4" />
                    <span>Full-time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CurrencyDollar weight="fill" className="w-4 h-4" />
                    <span>Competitive Salary</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                {openJob === 3 ? (
                  <CaretUp weight="bold" className="w-6 h-6 text-blue-600" />
                ) : (
                  <CaretDown weight="bold" className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </div>

            {openJob === 3 && (
              <div className="px-8 pb-8 space-y-6 text-gray-700 border-t border-gray-100 pt-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-3">About the Role</h3>
                <p className="leading-relaxed">
                  We're looking for a creative and data-driven Marketing Specialist (including entry-level) to help 
                  grow our brand and reach. You'll work on digital marketing campaigns, content creation, social media, 
                  and help communicate the value of our AI solutions to potential clients. We value creative thinkers 
                  who are eager to learn and experiment with new marketing strategies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Key Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Develop and execute digital marketing campaigns across multiple channels</li>
                  <li>Create engaging content for blog posts, social media, emails, and landing pages</li>
                  <li>Manage social media presence and community engagement</li>
                  <li>Collaborate with the team to create compelling case studies and success stories</li>
                  <li>Analyze campaign performance and optimize based on data insights</li>
                  <li>Help with SEO, SEM, and content marketing strategies</li>
                  <li>Assist in organizing webinars, events, and product launches</li>
                  <li>Stay updated with marketing trends and AI industry developments</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Requirements</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>0-3 years of experience in marketing or related field (entry-level welcome!)</li>
                  <li>Strong written and verbal communication skills</li>
                  <li>Understanding of digital marketing fundamentals (SEO, SEM, social media, email marketing)</li>
                  <li>Familiarity with marketing tools (Google Analytics, social media platforms, email marketing tools)</li>
                  <li>Basic understanding of content creation and copywriting</li>
                  <li>Creative mindset with attention to detail</li>
                  <li>Analytical thinking and ability to interpret data</li>
                  <li>Interest in technology and AI (no technical background required)</li>
                  <li><strong>Keen learner with curiosity about growth marketing and emerging trends</strong></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Nice to Have</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Experience with marketing automation tools (HubSpot, Mailchimp, etc.)</li>
                  <li>Basic graphic design skills (Canva, Figma, Adobe Creative Suite)</li>
                  <li>Experience with B2B or SaaS marketing</li>
                  <li>Knowledge of video content creation and editing</li>
                  <li>Understanding of LinkedIn marketing and lead generation</li>
                  <li>Experience with technical or AI-related content</li>
                  <li>Portfolio of marketing campaigns or content work</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black mb-3">What We Offer</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Competitive salary and equity options</li>
                  <li>Flexible work arrangements (remote-first culture)</li>
                  <li>Health insurance and wellness benefits</li>
                  <li>Mentorship from experienced marketing professionals</li>
                  <li>Access to premium marketing tools and platforms</li>
                  <li>Creative freedom to experiment with new ideas</li>
                  <li>Work with cutting-edge AI company in a growing market</li>
                  <li>Collaborative team environment</li>
                  <li>Growth opportunities as we scale</li>
                </ul>
              </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Apply Section */}
      <section className="px-3 md:px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-4 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Us?</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-blue-50">
              Send your resume and portfolio to our team. We'd love to hear from you!
            </p>
            <a 
              href="mailto:connectinpersonai@gmail.com?subject=Job Application - [Position Name]"
              className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-8 py-3 md:py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              <EnvelopeSimple weight="fill" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <span className="text-xs md:text-base">connectinpersonai@gmail.com</span>
            </a>
            <p className="text-sm text-blue-100 mt-6">
              Please include the position you're applying for in the subject line
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Avjo.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

