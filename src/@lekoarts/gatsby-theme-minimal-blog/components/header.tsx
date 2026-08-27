/** @jsx jsx */
import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { jsx, Flex } from "theme-ui"
import { Link } from "gatsby"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle"
import HeaderTitle from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-title"
import HeaderExternalLinks from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

const Header = () => {
  const { navigation: nav, externalLinks, basePath } = useMinimalBlogConfig()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu on click outside or ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <header className="site-header" ref={menuRef} sx={{ mb: [4, 5] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <HeaderTitle />
        <Flex sx={{ alignItems: `center`, gap: 3 }}>
          <ColorModeToggle />
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </Flex>
      </Flex>

      {/* Desktop Navigation */}
      <div className="desktop-nav-row">
        {nav && nav.length > 0 && (
          <nav className="header-nav" aria-label="Main navigation">
            {nav.map((item) => (
              <Link
                activeClassName="active"
                key={item.slug}
                to={replaceSlashes(`/${basePath}/${item.slug}`)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}
        <HeaderExternalLinks />
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav-menu">
          {nav && nav.length > 0 && (
            <nav className="mobile-nav-links" aria-label="Mobile navigation">
              {nav.map((item) => (
                <Link
                  activeClassName="active"
                  key={item.slug}
                  to={replaceSlashes(`/${basePath}/${item.slug}`)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          )}

          {externalLinks && externalLinks.length > 0 && (
            <div className="mobile-external-links">
              {externalLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  )
}

export default Header
