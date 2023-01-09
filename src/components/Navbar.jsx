import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "REGISTER", link: "/" },
    { name: "SIGN IN", link: "/" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <div className="w-full py-5 overflow-auto shadow-lg md:py-0 shadow-cyan-500/50">
      <div className="justify-between py-4 bg-white md:flex">
        <Link to="/">
          <div className="flex items-center px-5 text-2xl font-bold text-gray-800 cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="logo"
              className="w-12 h-12"
            />
            SHOP UI
          </div>
        </Link>

        <div
          className="absolute text-4xl cursor-pointer right-8 top-6 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>

        <ul
          className={`absolute pb-12 bg-white md:items-center md:flex md:pb-0 md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
            ${open ? "top-20px" : "top-[-490px]"}`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="py-3 text-xl border-gray-500 rounded-sm md:border-2 md:p-2 md:py-0 md:ml-8"
            >
              <a
                href={link.link}
                className="text-gray-800 duration-500 hover:text-gray-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Badge
            badgeContent={4}
            color="primary"
            className="mx-5 cursor-pointer"
          >
            <ShoppingCartIcon color="action" />
          </Badge>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
