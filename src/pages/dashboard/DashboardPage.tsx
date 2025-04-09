import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  LayoutDashboard,
  BookOpen,
  Briefcase,
  Settings,
  LogOut,
  Menu,
  PlusCircle,
  ListFilter
} from 'lucide-react'

// Updated Dashboard Components
const Overview = () => <div>Overview Dashboard</div>

// Job Applications Components
const AddApplication = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Add New Application</h2>
    <div className="grid gap-4 p-4 border rounded-lg">
      <p>Form to add: Company, Role, Status, Date, Link</p>
    </div>
  </div>
)

const ApplicationsList = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold">Applications</h2>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <ListFilter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>
    </div>
    <div className="grid gap-4">
      <div className="p-4 border rounded-lg">
        <p>Applications list with status and actions will appear here</p>
      </div>
    </div>
  </div>
)

const Resources = () => <div>Learning Resources</div>
const Profile = () => <div>User Profile</div>

const DashboardPage = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  // Single menuItems declaration with all items
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard, path: '' },
    { id: 'applications', label: 'Applications', icon: Briefcase, path: 'applications' },
    { id: 'add-application', label: 'Add Application', icon: PlusCircle, path: 'add-application' },
    { id: 'resources', label: 'Resources', icon: BookOpen, path: 'resources' },
    { id: 'profile', label: 'Profile', icon: Settings, path: 'profile' }
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 border-r bg-card transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">Student Portal</h2>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <nav className="space-y-2 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={`/dashboard/${item.path}`}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-secondary'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <Routes>
          <Route path="" element={<Overview />} />
          <Route path="applications" element={<ApplicationsList />} />
          <Route path="add-application" element={<AddApplication />} />
          <Route path="resources" element={<Resources />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default DashboardPage