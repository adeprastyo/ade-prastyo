const Navbar = () => {
  return (
    <nav className="bg-neutral-900 w-full sticky top-0 shadow-md shadow-neutral-700 z-50">
      <div className="w-10/12 mx-auto py-7">
        <ul className="flex gap-14 text-base font-medium">
          <li className="hover:cursor-pointer after:content-[''] after:block after:w-0 after:h-[1px] hover:after:w-full after:bg-yellow-300 after:transition-all after:duration-300 transition-all duration-300">
            Skills
          </li>
          <li className="hover:cursor-pointer after:content-[''] after:block after:w-0 after:h-[1px] hover:after:w-full after:bg-yellow-300 after:transition-all after:duration-300 transition-all duration-300">
            Projects
          </li>
          <li className="hover:cursor-pointer after:content-[''] after:block after:w-0 after:h-[1px] hover:after:w-full after:bg-yellow-300 after:transition-all after:duration-300 transition-all duration-300">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
