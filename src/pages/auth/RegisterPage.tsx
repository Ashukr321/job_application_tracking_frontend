
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Mail, Lock, Loader2, Eye, EyeOff } from "lucide-react"
import toast from "react-hot-toast"
import { Home } from "lucide-react"

const RegisterPage = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [serverMessage, setServerMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      name: "",
      email: "",
      password: "",
    }

    if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long"
      isValid = false
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setStatus("idle")
    setServerMessage("")

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/user/register`, formData)
      
      if (response.status === 201) {
        setStatus("success")
        setServerMessage(response.data?.message || "Registration successful! Please login.")
        toast.success(response.data?.message || "Registration successful! Please login.") 
        setTimeout(() => {
          navigate("/login")
        }, 2000)
      }
      
    } catch (error: any) {
      setStatus("error")
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again."
      setServerMessage(errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Reset status and message when user starts typing again
    if (status !== "idle") {
      setStatus("idle")
      setServerMessage("")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      {/* Home Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 hover:bg-primary/10"
        onClick={() => navigate('/')}
      >
        <Home className="h-5 w-5" />
      </Button>

      <div className="w-full max-w-md space-y-8 p-8 bg-card rounded-xl shadow-lg">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
          <p className="text-muted-foreground">
            Start your career journey with us
          </p>
        </div>

        {/* Server Response Message with enhanced error styling */}
        {serverMessage && (
          <div 
            className={`p-4 rounded-lg text-sm font-medium ${
              status === "success" 
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : "bg-red-100/80 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"
            }`}
          >
            {serverMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
                required
                minLength={3}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          {/* Server error message with enhanced styling */}
          {serverMessage && status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative dark:bg-red-900/30 dark:border-red-800 dark:text-red-400">
              <span className="block sm:inline">{serverMessage}</span>
            </div>
          )}

          <Button
            type="submit"
            className={`w-full transition-all duration-300 ${
              status === "success"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gradient-to-r from-violet-500/90 via-blue-500/90 to-teal-500/90 hover:opacity-90"
            }`}
            disabled={isLoading || status === "success"}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating account...
              </>
            ) : status === "success" ? (
              "Registration Successful!"
            ) : (
              "Create account"
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a 
              href="/login" 
              className="text-primary hover:underline"
              onClick={(e) => {
                if (status === "success") {
                  e.preventDefault()
                  return
                }
              }}
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage