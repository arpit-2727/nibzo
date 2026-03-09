import { useState, useEffect, useRef } from "react";
import CartDrawer from "../Cart/CartDrawer";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(3);
  const [cartOpen, setCartOpen] = useState(false);

  const profileRef = useRef(null);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Outside click close profile dropdown
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 bg-white/90 border-gray-100 ${
          scrolled ? "shadow-lg shadow-black/5" : ""
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">

            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-orange-500 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">N</span>
              </div>

              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>

            <div>
              <h1 className="font-bold text-xl tracking-tight">Nibzo</h1>
              <p className="text-xs text-gray-400">Modern Delivery</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 text-sm font-semibold">

            {["Home", "Restaurants", "Trending", "Offers"].map((item, i) => (
              <a
                key={item}
                href="#"
                className={`relative hover:text-orange-500 transition ${
                  i === 0 ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {item}
              </a>
            ))}

          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2">

            {/* Search */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                searchOpen ? "w-52" : "w-10"
              }`}
            >
              {searchOpen ? (
                <div className="relative">

                  <span className="absolute left-3 top-2 text-gray-400">
                    🔍
                  </span>

                  <input
                    autoFocus
                    onBlur={() => setSearchOpen(false)}
                    placeholder="Search food..."
                    className="w-full pl-9 pr-3 h-10 rounded-xl border outline-none text-sm bg-white text-gray-900 border-gray-200"
                  />
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                >
                  🔍
                </button>
              )}
            </div>

            {/* AI Pick */}
            <button className="hidden sm:flex px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white text-sm font-semibold shadow-md">
              ✨ AI Pick
            </button>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            >
              🛒

              <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] px-1.5 rounded-full animate-pulse">
                {cartCount}
              </span>
            </button>

            {/* Profile */}
            <div className="relative" ref={profileRef}>

              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 rounded-xl bg-orange-500 text-white font-bold"
              >
                A
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-2xl py-2 border bg-white border-gray-100 shadow-xl">

                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-50">
                    👤 Profile
                  </button>

                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-50">
                    📦 Orders
                  </button>

                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-50">
                    ❤️ Saved
                  </button>

                  <button className="block w-full text-left px-4 py-2 hover:bg-red-50 text-red-500">
                    🚪 Logout
                  </button>

                </div>
              )}

            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
            >
              ☰
            </button>

          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t px-5 py-4 flex flex-col gap-2 bg-white border-gray-100">

            {["Home", "Restaurants", "Trending", "Offers"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-2 rounded-xl hover:bg-gray-50"
              >
                {item}
              </a>
            ))}

            <button className="mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white text-sm font-semibold">
              ✨ AI Pick
            </button>

          </div>
        )}
      </header>

      {/* Cart Drawer */}
      <CartDrawer cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  );
}