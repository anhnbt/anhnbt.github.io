/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

// Custom SVG components designed to match Lucide's exact visual style (24x24, stroke-width 2, round joints)
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const socialItems = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/anhnbtdotcom",
    icon: FacebookIcon,
    color: "#1877F2",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/anhnbt",
    icon: XIcon,
    color: "#000000",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anhnbt",
    icon: LinkedinIcon,
    color: "#0A66C2",
  },
]

const SocialLinks = () => {
  return (
    <div
      sx={{
        display: "flex",
        gap: 3,
        mt: 3,
        flexWrap: "wrap",
      }}
    >
      {socialItems.map((item) => {
        const Icon = item.icon
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "muted",
              color: "text",
              transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              "&:hover": {
                backgroundColor: item.color,
                color: "#ffffff",
                transform: "translateY(-4px) scale(1.1)",
                boxShadow: `0 8px 16px ${item.color === "#000000" ? "rgba(0,0,0,0.2)" : item.color + "40"}`,
              },
            }}
          >
            <Icon size={20} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
