/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import type { PageProps, HeadFC } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

const NotFound = (_props: PageProps) => (
  <Layout>
    <div
      sx={{
        textAlign: "center",
        py: [5, 6],
        maxWidth: "480px",
        mx: "auto",
      }}
    >
      <div
        sx={{
          fontSize: [7, 8],
          fontWeight: 800,
          color: "primary",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          mb: 3,
          opacity: 0.15,
        }}
      >
        404
      </div>
      <h1
        sx={{
          fontSize: [3, 4],
          fontWeight: 700,
          color: "heading",
          mb: 3,
          letterSpacing: "-0.02em",
        }}
      >
        Trang không tồn tại
      </h1>
      <p
        sx={{
          fontSize: [1, 2],
          color: "secondary",
          mb: 4,
          lineHeight: 1.7,
          maxWidth: "100%",
          mx: "auto",
        }}
      >
        Nội dung bạn tìm có thể đã bị xoá hoặc đường dẫn không đúng. 
        Hãy quay lại trang chủ để tiếp tục.
      </p>
      <Link
        to="/"
        sx={{
          display: "inline-block",
          px: 4,
          py: 2,
          bg: "primary",
          color: "#ffffff",
          borderRadius: "24px",
          fontWeight: 600,
          fontSize: 1,
          textDecoration: "none",
          transition: "all 0.25s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 16px var(--color-accent-glow)",
            color: "#ffffff",
          },
          "&:active": {
            transform: "translateY(0) scale(0.97)",
          },
        }}
      >
        Về trang chủ
      </Link>
    </div>
  </Layout>
)

export default NotFound

export const Head: HeadFC = () => (
  <Seo title="404 — Trang không tồn tại" />
)
