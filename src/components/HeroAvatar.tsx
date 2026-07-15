/** @jsx jsx */
import { jsx, Text } from "theme-ui"
import React from "react"

const HeroAvatar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem", flexWrap: "wrap-reverse", width: "100%" }}>
      <div style={{ flex: "1", minWidth: "280px" }}>
        <Text
          sx={{ fontSize: [5, 6, 7], fontWeight: `bold`, color: `heading`, display: `block`, mb: 3 }}
        >
          Hi.
        </Text>
        <div sx={{ fontSize: [1, 2, 3], lineHeight: `body`, color: `text` }}>
          Mình là Nguyễn Bá Tuấn Anh. Một nhà phát triển web sống ở Hà Nội, Việt Nam.
          <br /><br />
          Đây là trang blog phục vụ việc học tập, ghi chú và tái sử dụng thông tin của mình. Đồng thời cũng là nơi để mình chia sẻ lại kiến thức tới cộng đồng những bạn lập trình viên khác. Mình tin rằng nó sẽ hữu ích cho các bạn khi ghé thăm blog này!
        </div>
      </div>

      <div className="avatar-flip-container">
        <div className="avatar-flip-card">
          <div className="avatar-face avatar-front">
            <img src="/avatar_front.png" alt="Nguyễn Bá Tuấn Anh" />
          </div>
          <div className="avatar-face avatar-back">
            <img src="/avatar_back.png" alt="Nguyễn Bá Tuấn Anh Coding" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAvatar
