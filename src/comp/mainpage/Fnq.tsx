import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  ChevronDown,
  Briefcase,
  GraduationCap,
  FileText,
  Users,
  Bell,
  HelpCircle
} from "lucide-react"
import { motion } from "framer-motion"

const Fnq = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [openSection, setOpenSection] = useState<string | null>("applications")
  const [openQuestions, setOpenQuestions] = useState<string[]>([])

  const faqSections = [
    {
      id: "applications",
      title: "Application Tracking",
      icon: FileText,
      questions: [
        {
          id: "applications-1",
          question: "How do I track my job applications?",
          answer: "You can track all your applications from the 'My Applications' dashboard. Each application will show its current status, from 'Applied' to 'Interview' to 'Offer'. You can also set reminders for follow-ups."
        },
        {
          id: "applications-2",
          question: "Can I add applications I submitted outside this platform?",
          answer: "Yes! Click on 'Add Application' and enter the details of jobs you applied for elsewhere. This helps you keep all your job search activities in one place."
        },
        {
          id: "applications-3",
          question: "How do I update the status of my application?",
          answer: "Simply click on any application card and select 'Update Status' from the dropdown menu. You can mark applications as 'In Review', 'Interview Scheduled', 'Offer Received', or 'Rejected'."
        }
      ]
    },
    {
      id: "opportunities",
      title: "Finding Opportunities",
      icon: Briefcase,
      questions: [
        {
          id: "opportunities-1",
          question: "How can I find internships relevant to my field?",
          answer: "Use the search filters on the 'Opportunities' page to narrow down by field of study, location, duration, and whether it's paid or unpaid. You can also save search preferences for quick access later."
        },
        {
          id: "opportunities-2",
          question: "Are all the listed opportunities verified?",
          answer: "We verify all opportunities posted directly by our partner companies. For aggregated listings from other job boards, we indicate the source and recommend doing your own research before applying."
        },
        {
          id: "opportunities-3",
          question: "How often are new opportunities added?",
          answer: "New opportunities are added daily. You can set up alerts for specific types of positions to receive notifications when new matching opportunities are posted."
        }
      ]
    },
    {
      id: "profile",
      title: "Student Profile",
      icon: GraduationCap,
      questions: [
        {
          id: "profile-1",
          question: "How do I optimize my student profile for employers?",
          answer: "Complete all sections of your profile, especially skills, coursework, and projects. Upload a professional photo and ensure your resume is current. Our profile strength indicator will guide you on what to improve."
        },
        {
          id: "profile-2",
          question: "Can employers see my profile?",
          answer: "Yes, employers can see your public profile when you apply to their positions. You can control what information is visible in your privacy settings. Your application history and notes remain private."
        },
        {
          id: "profile-3",
          question: "How do I showcase my projects and coursework?",
          answer: "In the 'Projects' section, you can add details about academic and personal projects with links to GitHub or other platforms. For coursework, list relevant courses and skills acquired in the 'Education' section."
        }
      ]
    },
    {
      id: "networking",
      title: "Networking & Events",
      icon: Users,
      questions: [
        {
          id: "networking-1",
          question: "How do I connect with alumni from my university?",
          answer: "Visit the 'Network' tab and filter by your university. You can see alumni who are open to mentoring or informational interviews. Always send a personalized connection request explaining your interest."
        },
        {
          id: "networking-2",
          question: "Are there virtual career fairs on the platform?",
          answer: "Yes, we host virtual career fairs each semester. Check the 'Events' calendar for upcoming fairs, company info sessions, and workshops. You can register in advance to get reminders."
        },
        {
          id: "networking-3",
          question: "How do I prepare for networking events?",
          answer: "We offer preparation guides for each event type. For career fairs, review the list of attending companies, research their open positions, and prepare a short introduction. Our 'Networking 101' workshop is also available on-demand."
        }
      ]
    },
    {
      id: "notifications",
      title: "Alerts & Reminders",
      icon: Bell,
      questions: [
        {
          id: "notifications-1",
          question: "How do I set up job alerts?",
          answer: "Go to 'Job Alerts' in your settings and create custom alerts based on keywords, location, job type, and more. You can choose to receive notifications daily, weekly, or in real-time."
        },
        {
          id: "notifications-2",
          question: "Can I get reminders for application deadlines?",
          answer: "Yes, when you save a job posting, you can set a reminder for the application deadline. You'll receive notifications based on your preference (3 days before, 1 day before, etc.)."
        },
        {
          id: "notifications-3",
          question: "How do I manage interview reminders?",
          answer: "When you update an application status to 'Interview Scheduled', you'll be prompted to add the date and time. The system will automatically create calendar reminders and send notifications before the interview."
        }
      ]
    },
    {
      id: "support",
      title: "Technical Support",
      icon: HelpCircle,
      questions: [
        {
          id: "support-1",
          question: "What should I do if I can't submit an application?",
          answer: "First, check if all required fields are completed. If the issue persists, try clearing your browser cache or using a different browser. You can report technical issues through the 'Help' button in the bottom right corner."
        },
        {
          id: "support-2",
          question: "How do I reset my password?",
          answer: "Click on 'Forgot Password' on the login page. You'll receive a reset link via email. For security, links expire after 1 hour."
        },
        {
          id: "support-3",
          question: "Is there a mobile app available?",
          answer: "Yes, our mobile app is available for both iOS and Android devices. Search for 'StudentCareerTracker' in your app store to download. The app offers push notifications for job alerts and application updates."
        }
      ]
    }
  ]

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    )
  }

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId)
  }

  const filteredSections = faqSections.map(section => ({
    ...section,
    questions: section.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.questions.length > 0)

  return (
    <section className="relative min-h-screen pt-24 md:pt-28 pb-12 md:pb-16 bg-background overflow-hidden" id="fnq">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-1/4 w-3/4 h-1/2 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent dark:from-violet-500/10 transform rotate-12"></div>
        <div className="absolute -bottom-1/2 right-0 w-3/4 h-full bg-gradient-to-tl from-teal-500/5 via-transparent to-transparent dark:from-teal-500/10 transform -rotate-12"></div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-sm font-medium bg-primary/5 backdrop-blur-sm mb-6">
            <span className="text-primary">Help Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about using our student career tracking platform
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8 md:mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search your question..."
              className="pl-10 bg-card/80 backdrop-blur-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* FAQ Sections */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto space-y-4 md:space-y-6"
        >
          {filteredSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="rounded-xl border border-primary/10 bg-card/80 dark:bg-gray-900/50 backdrop-blur-sm overflow-hidden hover:border-primary/20 transition-colors"
            >
              {/* Section Header */}
              <button
                className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <section.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold">{section.title}</h2>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-primary transition-transform ${
                    openSection === section.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Questions */}
              {openSection === section.id && (
                <div className="px-4 sm:px-6 pb-4">
                  <div className="space-y-3">
                    {section.questions.map((q) => (
                      <div
                        key={q.id}
                        className="rounded-lg border border-primary/10 overflow-hidden"
                      >
                        <button
                          className="w-full px-4 py-3 flex items-center justify-between hover:bg-primary/5 transition-colors text-left"
                          onClick={() => toggleQuestion(q.id)}
                        >
                          <span className="text-sm sm:text-base font-medium pr-4">{q.question}</span>
                          <ChevronDown
                            className={`h-4 w-4 flex-shrink-0 text-primary transition-transform ${
                              openQuestions.includes(q.id) ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openQuestions.includes(q.id) && (
                          <div className="px-4 py-3 bg-primary/5 dark:bg-primary/10">
                            <p className="text-sm sm:text-base text-muted-foreground">{q.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Still Need Help Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="h-5 w-5 text-primary" />
            <span className="font-medium">Still need help?</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              className="border-primary/20 hover:border-primary/40"
            >
              Contact Support
            </Button>
            <Button
              className="bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 text-white hover:opacity-90"
            >
              Live Chat
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Fnq
