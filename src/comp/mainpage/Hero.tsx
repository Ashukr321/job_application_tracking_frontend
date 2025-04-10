import { Button } from "@/components/ui/button"
import { 
  Search,
  Briefcase,
  GraduationCap,
  BookOpen,
  Target
} from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

const Hero = () => {
  const [jobCategories] = useState([
    { name: "Internships", count: "500+ Opportunities", icon: "🎯" },
    { name: "Entry Level", count: "800+ Positions", icon: "🚀" },
    { name: "Part-time", count: "400+ Jobs", icon: "⏰" },
    { name: "Remote Work", count: "600+ Options", icon: "🏠" },
    { name: "Campus Jobs", count: "300+ Openings", icon: "🎓" },
    { name: "Training Programs", count: "200+ Programs", icon: "📚" }
  ])

  return (
    <section className="relative min-h-screen pt-24 md:pt-28 pb-12 md:pb-16 bg-background overflow-hidden" id="home">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent dark:from-violet-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-teal-500/10 via-transparent to-transparent dark:from-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent dark:from-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 bg-secondary/80 backdrop-blur-sm">
              <span className="text-sm font-medium">Track Your Career Journey</span>
              <span className="ml-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
              Launch Your Student Career
            </h1>

            <p className="text-muted-foreground max-w-md">
              Track your applications, discover internships, and connect with companies offering student opportunities.
            </p>

            {/* Search Form - Updated styling */}
            <div className="bg-secondary/80 backdrop-blur-sm rounded-lg p-4 w-full border border-border/50">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      placeholder="Search opportunities" 
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="w-full md:w-auto">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full md:w-auto">
                  Search
                </Button>
              </div>
            </div>

            {/* Categories - Updated styling */}
            <div className="w-full">
              <h3 className="text-lg font-medium mb-4 text-center lg:text-left">Opportunities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {jobCategories.map((category) => (
                  <motion.div
                    key={category.name}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 rounded-lg bg-secondary/80 backdrop-blur-sm hover:bg-secondary/90 cursor-pointer border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <p className="font-medium">{category.name}</p>
                        <p className="text-xs text-muted-foreground">{category.count}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 hidden lg:block"
          >
            <div className="bg-secondary/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, title: "1,000+", desc: "Resources" },
                  { icon: Target, title: "500+", desc: "Internships" },
                  { icon: Briefcase, title: "2,000+", desc: "Jobs" },
                  { icon: GraduationCap, title: "50+", desc: "Paths" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg bg-background/80 backdrop-blur-sm flex flex-col items-center text-center border border-border/50"
                  >
                    <item.icon className="w-6 h-6 mb-2" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-medium mb-3">Top Companies</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Google", "Microsoft", "Amazon", "Apple", "Meta"].map((company) => (
                    <motion.div 
                      key={company} 
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full text-sm bg-background/80 backdrop-blur-sm border border-border/50"
                    >
                      {company}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
