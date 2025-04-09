import { 
  Github, 
  Linkedin, 
  Mail, 
  Briefcase,
  GraduationCap,
  ExternalLink,
  BookOpen,
  Target
} from "lucide-react"
import { FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/cuvette"
    },
    {
      name:"Instagram",
      icon:<FaInstagram className="h-5 w-5" />,
      url: "https://www.instagram.com/cuvette/"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/company/cuvette/"
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Opportunities", href: "#opportunities" },
    { name: "Resources", href: "#resources" },
    { name: "FAQ", href: "#fnq" }
  ]

  return (
    <footer className="relative border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative group">
                <GraduationCap className="h-6 w-6 text-primary absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent text-xl font-extrabold">
                  Cuvette
                </span>
                <span className="text-muted-foreground font-light"> Careers</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              Your all-in-one platform for tracking job applications, discovering student opportunities, and launching your career journey.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ExternalLink className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
              Resources
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 group">
                <BookOpen className="h-4 w-4 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-blue-500 transition-all duration-300" />
                <a href="#" className="text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet-500 hover:to-blue-500 transition-all duration-300">
                  Resume Templates
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <Target className="h-4 w-4 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-blue-500 transition-all duration-300" />
                <a href="#" className="text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet-500 hover:to-blue-500 transition-all duration-300">
                  Interview Prep
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <Briefcase className="h-4 w-4 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-blue-500 transition-all duration-300" />
                <span className="text-muted-foreground">Career Guides</span>
              </li>
              <li className="flex items-center gap-2 group">
                <GraduationCap className="h-4 w-4 text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-blue-500 transition-all duration-300" />
                <a href="#" className="text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet-500 hover:to-blue-500 transition-all duration-300">
                  Student Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
              Contact Us
            </h3>
            <p className="text-muted-foreground mb-4">
              Have questions about our platform? We're here to help you navigate your career journey.
            </p>
            <Button 
              className="w-full bg-gradient-to-r from-violet-500/90 via-blue-500/90 to-teal-500/90 hover:opacity-90 transition-opacity"
              onClick={() => window.location.href = '#contact'}
            >
              <Mail className="h-4 w-4 mr-2" />
              Get Support
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-primary/10 text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50 font-semibold">
              Cuvette Careers
            </span>
            <span>• All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
