import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, Home, User2, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/ui/theme-provider"

const Navbar = () => {
  const navigate = useNavigate()
  const { setTheme, theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const navigation = [
    { name: 'Home', href: '#home', icon: <Home className="w-4 h-4 text-violet-500 dark:text-violet-400" /> },
    { name: 'About', href: '#about', icon: <User2 className="w-4 h-4 text-blue-500 dark:text-blue-400" /> },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between container mx-auto px-4 md:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2 text-xl font-bold group relative">
            
            <div className="relative">
              <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 bg-clip-text text-transparent font-extrabold">
                Job
              </span>
              <span className="text-muted-foreground font-light group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:via-blue-500 group-hover:to-teal-500 transition-all duration-300">Journey</span>
            </div>
            
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 text-sm font-medium transition-all group py-2"
            >
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></span>
                <span className="relative transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
              </span>
              <span className="text-foreground/80 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:via-blue-500 group-hover:to-teal-500">{item.name}</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform ease-out duration-300"></span>
            </a>
          ))}
          
          {/* Login/Signup Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="relative group overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="flex items-center gap-2">
                  <LogIn className="h-4 w-4 text-violet-500 dark:text-violet-400" />
                  <span>Login / Signup</span>
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 rounded-lg border-primary/20">
              <DropdownMenuItem 
                onClick={() => navigate('/login')} 
                className="flex items-center gap-2 group relative"
              >
                <span className="relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></span>
                  <LogIn className="h-4 w-4 relative text-violet-500 dark:text-violet-400" />
                </span>
                Login to Account
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => navigate('/register')}
                className="flex items-center gap-2 group relative"
              >
                <span className="relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></span>
                  <User2 className="h-4 w-4 relative text-blue-500 dark:text-blue-400" />
                </span>
                Create Account
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {isMounted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2 relative overflow-hidden group">
                  <div className="relative">
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></span>
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                      {theme === "light" ? (
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500 dark:text-yellow-400" />
                      ) : (
                        <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-500 dark:text-blue-400" />
                      )}
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32 rounded-lg border-primary/20">
                <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center gap-2 group relative">
                  <span className="relative">
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></span>
                    <Sun className="h-4 w-4 relative text-yellow-500 dark:text-yellow-400" />
                  </span>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center gap-2 group relative">
                  <span className="relative">
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></span>
                    <Moon className="h-4 w-4 relative text-blue-500 dark:text-blue-400" />
                  </span>
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="relative group">
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></span>
                <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 relative text-violet-500 dark:text-violet-400" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full">
              <div className="flex flex-col items-center gap-6 mt-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 text-lg font-medium transition-colors group relative"
                  >
                    <span className="relative">
                      <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></span>
                      <span className="relative transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </span>
                    </span>
                    <span className="text-foreground/80 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:via-blue-500 group-hover:to-teal-500">{item.name}</span>
                  </a>
                ))}
                
                {/* Mobile Login Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="relative group overflow-hidden w-full"
                  onClick={() => {
                    navigate('/login')
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <span className="flex items-center gap-2 justify-center">
                    <LogIn className="h-4 w-4 text-violet-500 dark:text-violet-400" />
                    <span>Login</span>
                  </span>
                </Button>

                {/* Mobile Register Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="relative group overflow-hidden w-full"
                  onClick={() => {
                    navigate('/register')
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <span className="flex items-center gap-2 justify-center">
                    <User2 className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                    <span>Register</span>
                  </span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
