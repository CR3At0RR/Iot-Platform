'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface Route {
  name: string;
  path: string;
  isAccordion?: boolean;
  subRoutes?: Route[];
}

function Sidebar() {
  const pathname = usePathname();
  const [expandedRoutes, setExpandedRoutes] = useState<string[]>([]);
  
  const routes: Route[] = [
    { name: 'Home', path: '/' },
    { name: 'Devices', path: '/devices' },
    { 
      name: 'Dashboards', 
      path: '/dashboards',
      isAccordion: false,
      subRoutes: [
        { name: 'View Dashboard', path: '/dashboards/viewDashboard' },
      ],
    },
    {
      name: 'Customers',
      path: '/customers',
      isAccordion: true,
      subRoutes: [
        { name: 'Customer Administrators', path: '/customers/cadmin' },
        { name: 'Customer Users', path: '/customers/cusers' },
      ],
    },
    {
      name: 'Users',
      path: '/users',
      isAccordion: false,
      subRoutes: [
        { name: 'Admin Users', path: '/admin' },
        { name: 'Customer Users', path: '/customerusers' },
      ],
    },
  ];

  const handleClick = (route: Route) => {
    if (route.isAccordion) {
      setExpandedRoutes((prev) => 
        prev.includes(route.path)
          ? prev.filter((path) => path !== route.path)
          : [...prev, route.path]
      );
    }
  };

  const isActive = (route: Route) => {
    // Check if the current route or any sub-route is active
    if (pathname === route.path) return true;
    if (route.subRoutes) {
      return route.subRoutes.some((subRoute) => pathname.startsWith(subRoute.path));
    }
    return false;
  };

  return (
    <nav className="bg-gray-800 text-white min-h-screen flex-1 p-4">
      <ul className="space-y-4">
        {routes.map((route) => (
          <li key={route.path} className="flex items-center">
            {route.isAccordion ? (
              <div className="relative w-full"> 
                <div
                  className={`flex items-center w-full px-4 py-2 rounded-md hover:bg-gray-700 cursor-pointer ${
                    isActive(route) ? 'bg-gray-700 font-bold' : ''
                  }`}
                >
                  <Link href={route.path} className="flex-1">
                    {route.name}
                  </Link>
                  <button
                    onClick={() => handleClick(route)}
                    className="p-1 text-gray-300 hover:text-white"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ease-in-out ${
                        expandedRoutes.includes(route.path) ? 'rotate-90' : 'rotate-0'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
                {expandedRoutes.includes(route.path) && (
                  <ul className="mt-2 rounded-md bg-gray-900 w-full">
                    {route.subRoutes?.map((subRoute) => (
                      <li key={subRoute.path}>
                        <Link
                          href={subRoute.path}
                          className={`block px-4 py-2 text-sm text-white hover:bg-gray-700 ${
                            pathname === subRoute.path ? 'bg-gray-700 font-bold' : ''
                          }`}
                        >
                          {subRoute.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                href={route.path}
                className={`flex items-center w-full px-4 py-2 rounded-md hover:bg-gray-700 ${
                  pathname === route.path ? 'bg-gray-700 font-bold' : ''
                }`}
              >
                {route.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
