export const Header = () => (
  <header className="flex justify-between items-center border-b border-gray-200 p-3">
    <span className="text-2xl">📊 GraphLog</span>
    <input
      placeholder="search the docs"
      className="bg-gray-200 focus:outline-none rounded-lg py-2 px-4 appearance-none leading-normal flex-grow max-w-3xl mx-6"
    />
    <div>
      <a href="#">Sign In</a>
      <a
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ml-2"
        href="#"
      >
        Get Started
      </a>
    </div>
  </header>
);
