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
    <section className="min-h-screen pt-24 md:pt-28 pb-12 md:pb-16 bg-background flex items-center justify-center" id="home">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 bg-secondary">
              <span className="text-sm font-medium">Track Your Career Journey</span>
              <span className="ml-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold">
              Launch Your Student Career
            </h1>

            <p className="text-muted-foreground max-w-md">
              Track your applications, discover internships, and connect with companies offering student opportunities.
            </p>

            {/* Search Form */}
            <div className="bg-secondary rounded-lg p-4 w-full">
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

            {/* Categories */}
            <div className="w-full">
              <h3 className="text-lg font-medium mb-4 text-center lg:text-left">Opportunities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {jobCategories.map((category) => (
                  <div
                    key={category.name}
                    className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <p className="font-medium">{category.name}</p>
                        <p className="text-xs text-muted-foreground">{category.count}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div className="bg-secondary rounded-lg p-6">              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, title: "1,000+", desc: "Resources" },
                  { icon: Target, title: "500+", desc: "Internships" },
                  { icon: Briefcase, title: "2,000+", desc: "Jobs" },
                  { icon: GraduationCap, title: "50+", desc: "Paths" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-background flex flex-col items-center text-center"
                  >
                    <item.icon className="w-6 h-6 mb-2" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-medium mb-3">Top Companies</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Google", "Microsoft", "Amazon", "Apple", "Meta"].map((company) => (
                    <div key={company} className="px-3 py-1 rounded-full text-sm bg-background">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
