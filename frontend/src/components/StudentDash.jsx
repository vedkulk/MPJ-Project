import React from 'react';
import { Search, LayoutDashboard, User, FileText, ClipboardList, BarChart2, LogOut, ChevronDown } from 'lucide-react';

function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 p-2 rounded-lg ${active ? 'bg-white/10' : 'hover:bg-white/5'}`}>
      {icon}
      <span>{label}</span>
    </div>
  );
}

function StatusItem({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-6 h-6 rounded-full ${color}`}></div>
      <span>{label}</span>
    </div>
  );
}

function CourseItem({ name, color }) {
  return (
    <div className="flex items-center gap-2">
      <span>{name}</span>
      <div className={`w-6 h-1 ${color} rounded-full`}></div>
    </div>
  );
}

function StudentPortal() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-[300px] bg-primary text-white p-6 flex flex-col">
              <div className="mb-10">
                <div className="bg-primary-light p-4 rounded-xl w-[80px] h-[80px] flex items-center justify-center mb-6">
                  <img 
                    src="/graduation-cap.svg" 
                    alt="Graduation cap logo" 
                    width={40} 
                    height={40}
                    className="text-white"
                  />
                </div>
              </div>

              <nav className="flex-1 space-y-6">
                <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
                <NavItem icon={<User size={20} />} label="Account Info" />
                <NavItem icon={<FileText size={20} />} label="My Assignements" />
                <NavItem icon={<ClipboardList size={20} />} label="Registration" />
                <NavItem icon={<FileText size={20} />} label="Submission History" />
                <NavItem icon={<BarChart2 size={20} />} label="Analysis" />
              </nav>

              <div className="mt-auto">
                <NavItem icon={<LogOut size={20} />} label="Logout" />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="relative w-[300px]">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-2 px-4 rounded-full border border-gray-200 focus:outline-none"
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right mr-2">
                    <h3 className="font-semibold">Kasturi Gandhi</h3>
                    <p className="text-sm text-gray-500">3rd year</p>
                  </div>
                  <div className="relative">
                    <img
                      src="/profile-placeholder.jpg"
                      alt="Profile"
                      width={40}
                      height={40}
                      className="rounded-full w-10 h-10 object-cover"
                    />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>
              </div>

              {/* Welcome Banner */}
              <div className="bg-primary rounded-2xl p-6 mb-8 flex items-center justify-between overflow-hidden relative">
                <div className="text-white">
                  <h1 className="text-3xl font-bold mb-1">Welcome back, Kasturi !</h1>
                  <p className="opacity-90">Always stay updated in your student portal</p>
                </div>
                <div className="relative h-40 w-80">
                  <img
                    src="/student-illustration.png"
                    alt="Student with graduation items"
                    className="object-contain h-full"
                  />
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Upcoming Deadlines */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold mb-4">Upcoming Deadlines</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">Subject</div>
                      <div></div>
                      <div className="font-medium">Java</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>20/3</div>
                      <div className="flex gap-1">
                        <div className="w-5 h-5 border border-gray-300 rounded"></div>
                        <div className="w-5 h-5 border border-gray-300 rounded"></div>
                      </div>
                      <div>NLP</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>24/3</div>
                      <div className="flex gap-1">
                        <div className="w-5 h-5 border border-gray-300 rounded"></div>
                        <div className="w-5 h-5 border border-gray-300 rounded"></div>
                      </div>
                      <div></div>
                    </div>
                    <div className="text-sm text-gray-500 mt-4">
                      Sorted by closest due date
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold mb-4">Status Indicator</h2>
                  <div className="mb-4 flex items-center">
                    <div className="font-medium">Subject</div>
                    <ChevronDown className="ml-1" size={16} />
                  </div>
                  <div className="flex items-center gap-8 mt-8">
                    <StatusItem color="bg-success" label="Done" />
                    <StatusItem color="bg-danger" label="Late" />
                    <StatusItem color="bg-warning" label="Pending" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Courses Joined */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold mb-4">Courses Joined</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <CourseItem name="ITCH" color="bg-purple-300" />
                    <CourseItem name="DCC" color="bg-blue-300" />
                    <CourseItem name="MPJ" color="bg-green-300" />
                    <CourseItem name="NLP" color="bg-pink-300" />
                  </div>
                </div>

                {/* Assignment Streak */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold mb-4">Assignment Streak</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-medium">Streak Days</h3>
                      <p className="text-sm">You have 5 days streak on DCC Assignments !</p>
                    </div>
                    <div>
                      <p className="text-sm">You Have 3 days streak on ITCH assignment</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Streak Level</h3>
                      <p className="text-sm">Current Level : Consistent</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <div>Levels: beginner (3 times)</div>
                      <div>consistent(7 times)</div>
                      <div>pro (15 +)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Recent Submissions */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold mb-4">Recent Submissions</h2>
                  <div className="bg-primary-lightest rounded-xl p-4 flex justify-between items-center">
                    <div className="text-primary">
                      <h3 className="font-medium">Status of recent submission</h3>
                    </div>
                    <div className="w-24 h-24 relative">
                      <img
                        src="/chart-placeholder.svg"
                        alt="Chart"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <button className="bg-primary text-white rounded-full px-8 py-2 mt-4 mx-auto block">
                    View
                  </button>
                </div>

                {/* Quick Uploads */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold mb-4">Quick Uploads</h2>
                  <div className="bg-primary-lightest rounded-xl p-4 flex flex-col items-center justify-center h-[180px]">
                    <div className="mb-4">
                      <h3 className="text-primary font-medium mb-2">Drag and drop</h3>
                      <div className="bg-primary-lightest border-2 border-dashed border-primary/30 rounded-lg p-8 flex items-center justify-center">
                        <p className="text-primary/70 text-sm">Drop here</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="font-medium">Subject</div>
                      <ChevronDown className="ml-1" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPortal;