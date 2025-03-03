import React from 'react';
import {
  Home, LayoutGrid, CheckSquare, Users, Settings, HelpCircle, LogOut, Plus, Menu, X,
} from 'lucide-react';

interface SidebarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <>
      {/* Mobile Menu Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="flex">
            <div className="w-6 h-6">
              {/* SVG Logo */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#000" />
                <path d="M2 17L12 22L22 17" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <span className="text-xl font-semibold text-black">logip</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-gray-100">
            <Users className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300 fixed lg:static 
        top-0 left-0 h-full z-50 w-[206px] bg-white border-r border-gray-100 flex flex-col`}
      >
        <div className="p-5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6">
              {/* SVG Logo */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#000" />
                <path d="M2 17L12 22L22 17" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xl font-semibold">logip</span>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          <a href="#" className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <Home className="w-5 h-5 mr-3" />
            <span>Dashboard</span>
          </a>
          <div className="flex items-center justify-between px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <div className="flex items-center">
              <LayoutGrid className="w-5 h-5 mr-3" />
              <span>Temperature</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center justify-between px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <div className="flex items-center">
              <CheckSquare className="w-5 h-5 mr-3" />
              <span>Precipitations</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <a href="#" className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <Users className="w-5 h-5 mr-3" />
            <span>Wind</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <Settings className="w-5 h-5 mr-3" />
            <span>Settings</span>
          </a>
        </nav>

        <div className="p-4 mx-3 mb-4 bg-gray-50 rounded-xl">
          <h3 className="font-semibold">Upgrade to Pro</h3>
          <p className="mt-1 text-xs text-gray-500">Get 1 month free and unlock</p>
          <button className="w-full py-2 mt-3 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Upgrade
          </button>
        </div>

        <div className="px-3 py-4 border-t border-gray-100">
          <a href="#" className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <HelpCircle className="w-5 h-5 mr-3" />
            <span>Help</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Log out</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
