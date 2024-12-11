import React from "react";

interface BurguerMenuProps {
  handleMenuToggle: () => void;
  isMenuOpen: boolean;
}

const BurguerMenu: React.FC<BurguerMenuProps> = ({ handleMenuToggle, isMenuOpen }) => {
  return (
    <div className="lg:hidden">
      <button
        onClick={handleMenuToggle}
        className="focus:outline-none bg-pastel-purple rounded-2xl p-3"
      >
        <div className="space-y-2">
          <span
            className={`block w-[34px] h-[2px] bg-secondary transform transition duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block w-[34px] h-[2px] bg-secondary transition duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-[34px] h-[2px] bg-secondary transform transition duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default BurguerMenu;