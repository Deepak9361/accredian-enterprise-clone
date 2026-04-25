export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">accredian</h1>

      <div className="hidden md:flex gap-6">
        <a href="#" className="hover:text-blue-600">Programs</a>
        <a href="#" className="hover:text-blue-600">Enterprise</a>
        <a href="#" className="hover:text-blue-600">Resources</a>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Book Demo
        </button>
      </div>
    </nav>
  );
}