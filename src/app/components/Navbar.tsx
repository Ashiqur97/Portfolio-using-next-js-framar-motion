"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React,{useState} from 'react'
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const theme = "dark"
    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <nav className='fixed w-full  dark:bg-dark/80 backdrop-blur-sm z-50'>
        <div className='container max-w-7xl mx-auto px-4'>
            <div  className="flex items-center justify-between h-16">
                <Link  href="/" className="text-xl font-bold text-primary">Ashiqur Rahman</Link>

                <div className='hidden md:flex items-center space-x-8'>
          {menuItems.map((item) => {
  const isActive = pathname === item.href;
  return (
              <Link 
                key={item.href}
                href={item.href} 
                className={`hover:text-primary transition-colors font-medium ${isActive ? 'text-primary' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}

          <button className='p-2 rounded-lg hover:bg-gray-100 text-priamry dark:hover:bg-gray-800 transition-colors cursor-pointer'>
            {
              theme === "dark" ? (
                <SunIcon className='w-5 h-5'/>
              ) : (
                <MoonIcon className='w-5 h-5'/>
              )
            }
          </button>
                </div>

                <button
                onClick={toggleMobileMenu} 
                className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer'>
                  {
                    isMobileMenuOpen ? (<XMarkIcon className='w-5 h-5'/>) : (<Bars3Icon className='w-5 h-5'/>)
                  }
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
