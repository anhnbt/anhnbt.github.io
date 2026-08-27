/** @jsx jsx */
import { jsx, Text } from "theme-ui"

const HeroAvatar = () => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
        flexWrap: "wrap-reverse",
        width: "100%",
      }}
    >
      <div sx={{ flex: "1", minWidth: "280px" }}>
        <Text
          sx={{
            fontSize: [5, 6, 7],
            fontWeight: 800,
            color: "heading",
            display: "block",
            mb: 3,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Hi.
        </Text>
        <div
          sx={{
            fontSize: [1, 2, 3],
            lineHeight: 1.7,
            color: "text",
            maxWidth: "56ch",
          }}
        >
          Mình là Nguyễn Bá Tuấn Anh. Một nhà phát triển web sống ở Hà Nội, Việt
          Nam.
          <br /><br />
          Đây là trang blog phục vụ việc học tập, ghi chú và tái sử dụng thông tin
          của mình. Đồng thời cũng là nơi để mình chia sẻ lại kiến thức tới cộng
          đồng những bạn lập trình viên khác. Mình tin rằng nó sẽ hữu ích cho các
          bạn khi ghé thăm blog này!
        </div>
      </div>

      <div className="avatar-flip-container">
        <div className="avatar-flip-card">
          <div className="avatar-face avatar-front">
            <img src="/avatar_front.png" alt="Nguyễn Bá Tuấn Anh" width="140" height="140" />
          </div>
          <div className="avatar-face avatar-back">
            <img src="/avatar_back.png" alt="Nguyễn Bá Tuấn Anh Coding" width="140" height="140" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAvatar
