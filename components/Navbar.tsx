import React, { useCallback, useState } from "react";

interface NavbarProps {
  onSignInClick: () => void;
  onListPropertyClick: () => void;
  onVerifiedAgentsClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onSignInClick,
  onListPropertyClick,
  onVerifiedAgentsClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => scrollToSection("listings")}
              className="flex-shrink-0 flex items-center gap-2"
              aria-label="Go to listings"
            >
              <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                K
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Ke<span className="text-violet-600">Homes</span>
              </span>
            </button>
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              <button
                type="button"
                onClick={() => scrollToSection("listings")}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-violet-500 text-sm font-medium text-slate-900"
              >
                Browse
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("listings")}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700"
              >
                Rent
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("listings")}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700"
              >
                Buy
              </button>
              <button
                type="button"
                onClick={onVerifiedAgentsClick}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700"
              >
                Verified Agents
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={onSignInClick}
              className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={onListPropertyClick}
              className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              List Property
            </button>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-slate-600"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="pt-2 space-y-1">
              <button
                type="button"
                onClick={() => scrollToSection("listings")}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Browse
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("listings")}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Rent
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("listings")}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Buy
              </button>
              <button
                type="button"
                onClick={onVerifiedAgentsClick}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Verified Agents
              </button>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-200 flex gap-2">
              <button
                type="button"
                onClick={onSignInClick}
                className="flex-1 text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl py-2 hover:bg-slate-50"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={onListPropertyClick}
                className="flex-1 bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-2 text-sm font-semibold"
              >
                List Property
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
