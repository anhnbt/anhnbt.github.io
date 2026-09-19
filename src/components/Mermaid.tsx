import React, { useEffect, useId, useState } from "react"
import { useColorMode } from "theme-ui"

interface MermaidProps {
  chart: string
}

export const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const [svgContent, setSvgContent] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [colorMode] = useColorMode<"light" | "dark">()
  const rawId = useId()
  const id = `mermaid-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`

  useEffect(() => {
    let isMounted = true

    const renderChart = async () => {
      try {
        const mermaid = (await import("mermaid")).default
        
        mermaid.initialize({
          startOnLoad: false,
          theme: colorMode === "dark" ? "dark" : "default",
          securityLevel: "loose",
          fontFamily: "inherit",
          sequence: {
            useMaxWidth: true,
            showSequenceNumbers: true,
            actorMargin: 50,
            boxMargin: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35,
          },
        })

        const { svg } = await mermaid.render(id, chart)
        if (isMounted) {
          setSvgContent(svg)
          setError(null)
        }
      } catch (err: any) {
        if (isMounted) {
          console.error("Lỗi khi render Mermaid diagram:", err)
          setError(err?.message || "Không thể render sơ đồ Mermaid")
        }
      }
    }

    renderChart()

    return () => {
      isMounted = false
    }
  }, [chart, colorMode, id])

  if (error) {
    return (
      <div
        style={{
          padding: "16px",
          margin: "16px 0",
          borderRadius: "8px",
          backgroundColor: colorMode === "dark" ? "#2d1a1a" : "#fff1f0",
          border: "1px solid #ff4d4f",
          color: colorMode === "dark" ? "#ff7875" : "#cf1322",
          fontSize: "14px",
        }}
      >
        <strong>Lỗi hiển thị sơ đồ:</strong> {error}
        <pre style={{ marginTop: "8px", fontSize: "12px" }}>{chart}</pre>
      </div>
    )
  }

  if (!svgContent) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "120px",
          margin: "24px 0",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: colorMode === "dark" ? "#1a202c" : "#f8f9fa",
          color: "#888",
          fontSize: "14px",
        }}
      >
        Đang tải sơ đồ...
      </div>
    )
  }

  return (
    <div
      style={{
        margin: "24px 0",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: colorMode === "dark" ? "#1a202c" : "#ffffff",
        border: colorMode === "dark" ? "1px solid #2d3748" : "1px solid #e2e8f0",
        boxShadow: colorMode === "dark" ? "0 4px 6px -1px rgba(0,0,0,0.5)" : "0 4px 6px -1px rgba(0,0,0,0.05)",
        overflowX: "auto",
        textAlign: "center",
      }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}

export default Mermaid
