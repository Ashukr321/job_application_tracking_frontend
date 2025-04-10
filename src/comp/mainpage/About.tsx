import React from 'react'
import { Briefcase, Target, Clock, Users, CheckCircle, TrendingUp } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true })

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isInView && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              
             
              transition={{ duration }}
            >
              {value}
            </motion.span>
          </motion.span>
        )}
      </motion.span>
    </motion.span>
  )
}

const About = () => {
  // Add refs
  const featuresRef = useRef(null)
  const statsRef = useRef(null)
  const heroRef = useRef(null)
  const ctaRef = useRef(null)

  // Add animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const features = [
    {
      icon: <Briefcase className="w-6 h-6 text-violet-500 dark:text-violet-400" />,
      title: "Job Application Tracking",
      description: "Keep track of all your job applications in one centralized platform. Never miss a deadline or opportunity."
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      title: "Career Goals",
      description: "Set and monitor your career objectives. Stay focused on your professional development journey."
    },
    {
      icon: <Clock className="w-6 h-6 text-teal-500 dark:text-teal-400" />,
      title: "Timeline Management",
      description: "Manage application deadlines and interview schedules efficiently. Stay organized and prepared."
    }
  ]

  return (
    <div className="relative py-24 container mx-auto px-4 sm:px-6 lg:px-8" id='about'>
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-0 w-3/4 h-full bg-gradient-to-br from-violet-500/5 via-transparent to-transparent dark:from-violet-500/10 transform rotate-12"></div>
        <div className="absolute -bottom-1/2 right-0 w-3/4 h-full bg-gradient-to-tl from-teal-500/5 via-transparent to-transparent dark:from-teal-500/10 transform -rotate-12"></div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10 blur-3xl"></div>
      </div>

      {/* Content wrapper with backdrop blur */}
      <div className="relative">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 bg-clip-text text-transparent"
          >
            Your Career Journey Starts Here
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-xl text-muted-foreground"
          >
            Track, manage, and succeed in your job search journey with our comprehensive platform
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 mb-4">
                <Users className="w-6 h-6 text-violet-500 dark:text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold"><Counter value={10000} />+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold"><Counter value={85} />%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-4">
                <TrendingUp className="w-6 h-6 text-teal-500 dark:text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold"><Counter value={50000} />+</h3>
              <p className="text-muted-foreground">Applications Tracked</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Section - Update card backgrounds */}
        <motion.div
          ref={featuresRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section - Update background */}
        <motion.div
          ref={ctaRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mt-16"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-teal-500/10 backdrop-blur-sm p-8 rounded-2xl border border-border/50"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of students who have successfully landed their dream jobs using our platform
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
