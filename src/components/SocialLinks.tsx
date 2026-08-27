/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

// Phosphor-style SVG icons (24x24, stroke-width 1.5, rounded, lighter feel)
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 256 256"
    fill="currentColor"
    {...props}
  >
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
  </svg>
)

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 256 256"
    fill="currentColor"
    {...props}
  >
    <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.29l62.6,98.38L41.08,210.62a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29l101.86,160Z" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 256 256"
    fill="currentColor"
    {...props}
  >
    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM112,176V120a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm-32,0V120a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM80,84A12,12,0,1,1,92,96,12,12,0,0,1,80,84Zm80,28a28,28,0,0,0-28,28v36a8,8,0,0,1-16,0V120a8,8,0,0,1,15.52-3.87A36.07,36.07,0,0,1,176,148v28a8,8,0,0,1-16,0V148A20,20,0,0,0,140,128Z" />
  </svg>
)

const socialItems = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/anhnbtdotcom",
    icon: FacebookIcon,
    hoverColor: "#1877F2",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/anhnbt",
    icon: XIcon,
    hoverColor: "#1da1f2",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anhnbt",
    icon: LinkedinIcon,
    hoverColor: "#0A66C2",
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
            aria-label={`Follow on ${item.name}`}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              backgroundColor: "muted",
              color: "text",
              transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              "&:hover": {
                backgroundColor: item.hoverColor,
                color: "#ffffff",
                transform: "translateY(-3px)",
                boxShadow: `0 6px 20px ${item.hoverColor}30`,
              },
              "&:active": {
                transform: "translateY(0) scale(0.95)",
                boxShadow: "none",
              },
            }}
          >
            <Icon />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
