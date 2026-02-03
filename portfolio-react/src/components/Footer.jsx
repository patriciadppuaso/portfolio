export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-600">
        <div>
          © {new Date().getFullYear()} Patricia Puaso. All rights reserved.
        </div>
        <div className="mt-2">
          <a href="#" className="mx-2 text-gray-500 hover:text-gray-900">
            GitHub
          </a>
          <a href="#" className="mx-2 text-gray-500 hover:text-gray-900">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
