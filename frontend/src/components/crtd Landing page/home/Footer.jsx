
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
      <div>
        <h4 className="font-bold mb-2">CRTD Technologies</h4>
        <p>Fresher-focused job platform for real-world skills & hiring.</p>
      </div>
      <div>
        <h4 className="font-bold mb-2">Quick Links</h4>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Internships</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Our Services</h4>
        <ul>
          <li>Placement</li>
          <li>Training</li>
          <li>Resume Help</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Stay Updated</h4>
        <input type="email" placeholder="Enter Email" className="p-2 rounded text-black" />
        <button className="block mt-2 bg-blue-600 px-4 py-2 rounded">Subscribe</button>
      </div>
    </div>
    <div className="mt-6 text-center text-xs text-gray-400">© 2025 CRTD Technologies. All rights reserved.</div>
  </footer>
  )
}

export default Footer