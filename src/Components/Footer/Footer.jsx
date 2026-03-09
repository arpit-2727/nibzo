export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white px-6 md:px-10 lg:px-14 pt-16 pb-8">

      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10 border-b border-gray-800 pb-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">

            <div className="w-11 h-11 bg-orange-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>

            <div>
              <h2 className="text-xl font-bold">Nibzo</h2>
              <p className="text-xs text-gray-400">
                Modern Delivery • Traditional Taste
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Smart food delivery platform designed for speed, trust and modern cravings.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-4">Support</h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
            <li className="hover:text-white cursor-pointer">Privacy</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-white mb-4">Connect</h3>

          <div className="flex gap-3 mb-4">

            <button className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-orange-500 transition">
              📷
            </button>

            <button className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-orange-500 transition">
              🐦
            </button>

            <button className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-orange-500 transition">
              ▶️
            </button>

          </div>

          <p className="text-sm text-gray-400">
            
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">

        <p>© 2026 Nibzo. All rights reserved.</p>

        <p className="mt-2 md:mt-0">
          Built for modern food experiences 🚀
        </p>

      </div>
    </footer>
  );
}