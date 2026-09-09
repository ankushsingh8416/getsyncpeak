"use client";

import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";
import MegaMenu1 from "./MegaMenu1";
import MegaMenu2 from "./MegaMenu2";

const Header2: FC = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // TEMP: client preview restriction — only the Home link should navigate.
  // Remove this handler (and the onClick prop below) to re-enable all header links.
  const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (e.target as HTMLElement).closest('a');
    if (anchor && anchor.getAttribute('href') !== '/') {
      e.preventDefault();
    }
  };

  return (
    <div id="xb-header-area" className="header-area header-style-one header-transparent">
      <div className={`xb-header stricky ${isSticky ? "stricked-menu stricky-fixed" : ""}`}>
        <div className="container-fluid">
          <div className="header__wrap pd-70 ul_li_between" onClick={handleNavClick}>
            {/* Logo */}
            <div className="header-logo">
              <Link href="/" className="logo01">
                <h1 className="xb-brand-logo xb-brand-logo--light">getsyncpeak</h1>
              </Link>
              <Link href="/" className="logo02">
                <h1 className="xb-brand-logo xb-brand-logo--dark">getsyncpeak</h1>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li><Link href="/"><span>Home</span></Link></li>
                  <li className="menu-item-has-children megamenu">
                    <Link href="/"><span>Company</span></Link>
                    <MegaMenu1 />
                  </li>
                  <li className="menu-item-has-children megamenu">
                    <Link href="/service"><span>Services</span></Link>
                    <MegaMenu2 />
                  </li>
                  <li><Link href="/casestudy"><span>Case Study</span></Link></li>
                  <li><Link href="/blog"><span>Blog</span></Link></li>
                  <li>
                    <Link href="/contact"><span>Contact</span></Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile Menu Toggle */}
              <div className="xb-header-wrap">
                <div className={`xb-header-menu ${mobileActive ? "active" : ""}`}>
                  <div className="xb-header-menu-scroll lenis lenis-smooth">
                    <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobileActive(false)}></div>

                    <div className="xb-logo-mobile xb-hide-xl">
                      <Link href="/" rel="home">
                        <span className="xb-brand-logo xb-brand-logo--light">getsyncpeak</span>
                      </Link>
                    </div>

                    <div className="xb-header-mobile-search xb-hide-xl">
                      <form onSubmit={handleSearchSubmit}>
                        <input type="text" placeholder="Search..." name="s" className="search-field" />
                        <button className="search-submit" type="submit">
                          <i className="far fa-search"></i>
                        </button>
                      </form>
                    </div>

                    <nav className="xb-header-nav">
                      <MobileMenu />
                    </nav>
                  </div>
                </div>
                <div className="xb-header-menu-backdrop"></div>
              </div>
            </div>

            {/* Mobile Button */}
            <div className="header-bar-mobile side-menu d-xl-none">
              <button className="xb-nav-mobile" onClick={() => setMobileActive(!mobileActive)}>
                <i className="far fa-bars"></i>
              </button>
            </div>

            {/* Header Button */}
            <div className="header-contact d-none d-md-block">
              <Link href="/contact" className="thm-btn thm-btn--header btn-effect_1">
                Let’s talk
                <span>
                  {/* SVG icon omitted for brevity */}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
