import { useState, useEffect, useRef } from "react";
import CartDrawer from "../Cart/CartDrawer";
import { useCart } from "../../Context/CartContext";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const profileRef = useRef(null);
  const { cartItems } = useCart();

  const totalCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl border-b ${
          scrolled
            ? "bg-white/85 shadow-lg shadow-black/5 border-gray-200"
            : "bg-white/70 border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">

            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md group-hover:scale-105 transition">
                <span className="text-white font-bold text-xl">N</span>
              </div>

              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></span>
            </div>

            <div>
              <h1 className="font-bold text-[1.1rem] tracking-tight text-gray-900">
                Nibzo
              </h1>
              <p className="text-[11px] text-gray-400 tracking-wide">
                Modern Delivery
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">

            {["Home", "Restaurants", "Trending", "Offers"].map((item, i) => (
              <a
                key={item}
                href="#"
                className={`relative transition hover:text-orange-500 ${
                  i === 0 ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {item}
              </a>
            ))}

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            {/* Search */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                searchOpen ? "w-56" : "w-11"
              }`}
            >
              {searchOpen ? (
                <div className="relative">

                  <span className="absolute left-3 top-2.5 text-gray-400">
                    🔍
                  </span>

                  <input
                    autoFocus
                    onBlur={() => setSearchOpen(false)}
                    placeholder="Search restaurants..."
                    className="w-full pl-9 pr-3 h-11 rounded-2xl border outline-none text-sm border-gray-200 bg-white shadow-sm"
                  />
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="w-11 h-11 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                >
                  🔍
                </button>
              )}
            </div>

            {/* AI Button */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 text-white text-sm font-semibold shadow-md hover:scale-[1.03] transition">

              <span>✨</span>
              <span>AI Pick</span>

            </button>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative w-11 h-11 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
            >
              🛒

              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-orange-500 text-white text-[10px] rounded-full flex items-center justify-center shadow animate-pulse">
                  {totalCount}
                </span>
              )}

            </button>

            {/* Profile */}
            <div className="relative" ref={profileRef}>

              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-11 h-11 rounded-2xl bg-orange-500 text-white font-bold shadow hover:scale-105 transition"
              >
                A
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-48 rounded-2xl bg-white border border-gray-100 shadow-2xl overflow-hidden">

                  {[
                    "👤 Profile",
                    "📦 Orders",
                    "❤️ Saved",
                    "🚪 Logout",
                  ].map((item, i) => (
                    <button
                      key={item}
                      className={`block w-full text-left px-4 py-3 text-sm transition ${
                        i === 3
                          ? "text-red-500 hover:bg-red-50"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {item}
                    </button>
                  ))}

                </div>
              )}

            </div>

            {/* Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-11 h-11 rounded-2xl bg-gray-100 flex items-center justify-center"
            >
              ☰
            </button>

          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-5 py-4 border-t bg-white border-gray-100 flex flex-col gap-2">

            {["Home", "Restaurants", "Trending", "Offers"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-3 rounded-xl hover:bg-gray-50"
              >
                {item}
              </a>
            ))}

            <button className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-medium">
              ✨ AI Pick
            </button>

          </div>
        )}
      </header>

      <CartDrawer cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  );
}