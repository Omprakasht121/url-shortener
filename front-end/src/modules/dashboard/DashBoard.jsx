import React, { useRef, useState } from "react";
import {
  Menu, X, User, Settings, BookOpen, List, Link as LinkIcon, LogOut, ChevronLeft, ChevronRight,
} from "lucide-react";
import { useUrl } from "../user/hooks/url-hook";

export const DashBoard = () => {
  const { doSubmit } = useUrl();
  const urlRef = useRef();

  // short url state
  const [shortUrl, setShortUrl] = useState("");

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputUrl = urlRef.current.value;
    if (!inputUrl) {
      alert("Please enter a valid URL");
      return;
    }
    const result = await doSubmit(inputUrl); // hook se API call
    if (result) {
      setShortUrl(result); // short url ko state me save karna
    } else {
      setShortUrl("Failed to generate URL");
    }
    urlRef.current.value = ""; // reset field
  };

  // desktop expand/collapse (mini vs full)
  const [isExpanded, setIsExpanded] = useState(true);
  // mobile slide-in open/close
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { label: "Profile", icon: <User size={20} /> },
    { label: "Generate URL", icon: <LinkIcon size={20} /> },
    { label: "Settings", icon: <Settings size={20} /> },
    { label: "Library", icon: <BookOpen size={20} /> },
    { label: "All URLs", icon: <List size={20} /> },
  ];

  return (
    <div className="h-screen w-full bg-[url('https://images.unsplash.com/photo-1672009190560-12e7bade8d09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex flex-col">
      {/* Header */}
      <header className="h-20 w-full px-4 md:px-8 flex items-center justify-between text-lg md:text-2xl font-bold text-white border-b border-violet-500/20">
        {/* Mobile menu (hamburger) */}
        <button
          aria-label="Open sidebar"
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileOpen(true)}
        >
          <Menu size={24} />
        </button>

        <div className="flex-1 text-center md:text-left">
          <span className="mx-2 md:mx-0">URL-Shortener</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline">Hello OMM</span>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* mobile overlay when sidebar open */}
        {isMobileOpen && (
          <div
            className="fixed inset-0 bg-black/90 grayscale z-40 md:hidden"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`transform transition-all duration-300 ease-in-out z-50
            fixed md:static top-0 left-0 h-full border- text-white flex flex-col border-r border-blue-500/20
            ${isExpanded ? "w-64" : "w-20"}
            ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          {/* sidebar header: title + mobile close */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            {isExpanded && <h2 className="text-lg font-semibold">Menu</h2>}
            <div className="flex items-center gap-2">
              {/* desktop collapse/expand toggle */}
              <button
                aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
                onClick={() => setIsExpanded((s) => !s)}
                className="hidden md:inline-flex items-center justify-center w-8 h-8 bg-blue-700 rounded-full hover:bg-blue-800"
              >
                {isExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>

              {/* mobile close button */}
              <button
                aria-label="Close sidebar"
                className="md:hidden p-1"
                onClick={() => setIsMobileOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* nav */}
          <nav className="flex-1 px-3 py-4 space-y-2">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-blue-700 transition-colors"
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!isExpanded ? null : <span className="whitespace-nowrap">{item.label}</span>}
              </a>
            ))}
          </nav>

          {/* logout at bottom */}
          <div className="px-3 pb-6">
            <button className="w-full flex items-center gap-3 justify-center py-2 rounded-md hover:bg-blue-700 transition-colors">
              <LogOut size={18} />
              {isExpanded && <span>Logout</span>}
            </button>
          </div>
        </aside>

        {/* Main content area */}
        <main className="flex-1 p-4 md:p-6 overflow-auto flex justify-center items-center ">
          <div className="w-full max-w-3xl mx-auto p-16 flex flex-col items-center gap-6 shadow-lg
            inset-shadow-sm inset-shadow-indigo-500/50
            relative bg-transparent-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-blue-500 text-amber-100 drop-shadow-xl rounded-2xl
            shadow-[0_0_30px_rgba(99,102,241,0.45)] ring-1 ring-red-400/20 hover:shadow-[0_0_55px_rgba(99,102,241,0.7)] transition-shadow duration-300 ">
            <h1 className="text-2xl md:text-4xl font-bold text-white">Short Your Url In One Click</h1>

            <form onSubmit={handleSubmit} className="w-full">
              <label htmlFor="urlInput" className="sr-only">
                Enter URL
              </label>
              <input
                ref={urlRef}
                id="urlInput"
                aria-label="Enter URL"
                className="w-full rounded-xl border-2 border-black/60 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-600"
                type="text"
                placeholder="Enter your url"
              />

              <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-start">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  Generate URL
                </button>
                <button
                  type="reset"
                  onClick={() => setShortUrl("")}
                  className="px-6 py-2 rounded-md border border-black bg-white hover:bg-gray-100 transition text-black"
                >
                  Reset
                </button>
              </div>
            </form>

            <div className="w-full mt-6 text-center text-white">
              <h2 className="text-lg font-semibold">Short-url</h2>
              <a href={shortUrl}><p className="mt-2 text-sm text-red-500 break-words">
                {shortUrl}
              </p></a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
