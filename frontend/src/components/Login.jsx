
import React, { useEffect } from "react"
import { useState } from "react"
import { EyeOff, Eye } from "lucide-react"
import { Link } from "react-router-dom"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => console.log("Response:", data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log({ username, password })
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side - Login form */}
      <div className="w-full bg-gray-900 p-8 flex flex-col justify-center lg:w-1/2">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-4xl font-bold text-white mb-2">Login</h1>
          <p className="text-gray-400 mb-8">Enter your account details</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-violet-500"
              />
            </div>
            <div className="space-y-2 relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-violet-500 pr-10"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div>
              <Link to="/forgot-password" className="text-gray-400 text-sm hover:text-violet-500">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-3 rounded-md hover:bg-violet-500 transition-colors"
            >
              Login
            </button>
          </form>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-gray-400">Don't have an account?</p>
            <Link
              to="/signup"
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      {/* Right side - Welcome banner */}
      <div className="hidden lg:block lg:w-1/2 bg-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-violet-400 opacity-80"></div>
        <div className="relative z-10 p-12 flex flex-col h-full">
          <div className="mt-20 max-w-lg">
            <h2 className="text-6xl font-bold text-white mb-2">Welcome to</h2>
            <h2 className="text-6xl font-bold text-white mb-4">Student Portal</h2>
            <p className="text-white text-xl opacity-90">Login to access your account</p>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <img src="/placeholder.svg?height=300&width=400" alt="Students working" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

