import { Link, Outlet } from "react-router-dom"
import Logo from "../../components/Logo"
import styles from "./index.module.css"
import IconBtn from "../../components/Icons/IconBtn"
import { linksNav, socialNetworksList, LinkNav } from "./helper"
import { useState, useEffect } from "react"
import IconImg from "../../components/Icons/IconImg"
import BurguerMenu from "./BurguerMenu"


//componente
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
    const [menuProductsOpen, setMenuProductsOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        }

        const handlePopState = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false)
                setMenuProductsOpen(false)
            }
        }
        window.addEventListener("resize", handleResize)
        window.addEventListener("popstate", handlePopState)
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("popstate", handlePopState)
            document.body.style.overflow = ""
        }
    }, [isMenuOpen])

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            window.history.pushState(null, "", "");
        } else {
            setMenuProductsOpen(false)
            window.history.back()
        }
    };
    const callBackLink = (link: LinkNav) => {
        link?.extraLinks?
        setMenuProductsOpen(!menuProductsOpen):
        setIsMenuOpen(false)
    }

  return (
    <>
    <nav className="flex justify-between w-full h-14 fixed shadow-md top-0 bg-white z-20 items-center px-4 lg:justify-around lg:px-0">
      <Link to={"/"}>
        <Logo isTitlePrimary={true} />
      </Link>
      <BurguerMenu handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <ul
        className={`h-[100%] flex gap-4 flex-col justify-start fixed top-14 right-0 w-3/4 bg-white shadow-md p-4 lg:shadow-none lg:p-0 lg:flex-row lg:justify-center lg:items-center lg:static lg:w-1/2 lx:w-2/5 xl:gap-8
            ${
              isMobile
                ? `transition-transform transform ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                  }`
                : ""
            }`}
      >
        {linksNav[0] &&
          linksNav?.map((link) => (
            <li
              className={`md:text-base text-2xl transition-transform duration-500 transform hover:translate-x-1 ${
                link.extraLinks ? "relative" : ""
              }`}
              id={link.extraLinks && isMobile ? "" : styles.dropdown}
            >
              {link?.to ? (
                <Link
                  to={link.to || "/"}
                  className={`${link.icon ? "flex" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.linkName}
                  {link.icon && (
                    <IconImg
                      icon={link.icon}
                      stylesIcon="ms-1"
                      alt="arrow-down-icon"
                    />
                  )}
                </Link>
              ) : (
                <>
                  <a
                    className="flex transition-transform duration-500 cursor-pointer hover:translate-x-1"
                    onClick={() => callBackLink(link)}
                  >
                    {link.linkName}
                    {link.icon && (
                      <IconImg
                        icon={link.icon}
                        stylesIcon="ms-1"
                        alt="arrow-down-icon"
                      />
                    )}
                  </a>
                  {link?.extraLinks && (
                    <ul
                      className={`${
                        isMobile && menuProductsOpen ? "block" : "hidden"
                      } lg:absolute lg:top-full left-0 bg-slate-300 p-2.5 cursor-pointer md:w-40 rounded-e-full bg-white shadow-md`}
                      id={styles.dropdownContent}
                    >
                      {link?.extraLinks?.map((extralink, i) => (
                        <li
                          key={i}
                          className="md:text-base text-2xl hover:ms-3 hover:mb-1 transition-all duration-250"
                        >
                          <Link
                            to={extralink.to}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {extralink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
      </ul>
      {!isMobile && (
        <div className="flex justify-around items-center w-32">
          {socialNetworksList.map((el, index) => (
            <IconBtn
              key={index}
              icon={el.icon}
              url={el.url}
              alt={el.alt}
            />
          ))}
        </div>
      )}
    </nav>
    {/* Fondo oscuro (overlay) */}
    {isMenuOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={() => setIsMenuOpen(false)}
      ></div>
    )}
  
    <Outlet />
  </>    
  );
}

export default NavBar;