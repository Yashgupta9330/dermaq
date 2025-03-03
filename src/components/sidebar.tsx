import React from 'react';
import {
 Users, Plus, Menu, X,
} from 'lucide-react';
import Logo from './logo'; 
import { actionItems, menuItems } from '@/lib/data';

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
          <div className="w-6 h-6">
            <Logo />
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
              <Logo /> 
            </div>
            <span className="text-xl font-semibold">logip</span>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <a href={item.href || '#'} className="flex items-center">
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </a>
              {item.hasButton && (
                <button className="text-gray-400 hover:text-gray-600">
                  <Plus className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 mx-3 mb-4 bg-gray-50 rounded-xl">
          <h3 className="font-semibold">Upgrade to Pro</h3>
          <p className="mt-1 text-xs text-gray-500">Get 1 month free and unlock</p>
          <button className="w-full py-2 mt-3 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Upgrade
          </button>
        </div>

        <div className="px-3 py-4 border-t border-gray-100">
          {actionItems.map((item, index) => (
            <a key={index} href={item.href} className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
