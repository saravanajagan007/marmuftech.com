'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../lib/auth-context';
import { LogOut, ShieldCheck, UserCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export function Navbar() {
  const { user, isAdmin, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Brand Logo without 'Enterprise Portal' */}
          <Link href="/admin/manage-companies" className="group" aria-label="MarmufTech companies">
            <BrandLogo size="sm" compact />
          </Link>

          {/* Right: User Profile & Logout (No buttons in header) */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="flex flex-col text-right">
                <span className="text-xs font-bold text-slate-900 truncate max-w-[180px]">
                  {user?.email || 'User'}
                </span>
                <div className="flex items-center justify-end space-x-1 mt-0.5">
                  {isAdmin ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      <ShieldCheck className="h-3 w-3 mr-1 text-emerald-700" />
                      ADMIN
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-300">
                      <UserCheck className="h-3 w-3 mr-1 text-slate-600" />
                      STAFF
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => logout()}
                title="Sign Out"
                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all cursor-pointer"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
