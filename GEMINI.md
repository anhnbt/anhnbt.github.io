# Coding With WanBi — Blog Guidelines

## Tác giả

Nguyễn Bá Tuấn Anh (WanBi / @anhnbt). Full-stack Java developer 10+ năm kinh nghiệm, hiện đang làm full-time tại công ty và dạy thêm vài buổi/tuần (Java Bootcamp, Vibe Coding). Sống tại Hà Nội, có vợ và hai con nhỏ.

## Về blog này

- **URL**: https://codingwithwanbi.com (deploy từ anhnbt.github.io)
- **Nền tảng**: Gatsby + MDX, theme `@lekoarts/gatsby-theme-minimal-blog`
- **Ngôn ngữ chính**: Tiếng Việt
- **Mục đích**: Ghi lại những điều học được, làm được và những suy nghĩ trong quá trình làm nghề. Không nhằm chứng tỏ điều gì, chỉ để tự nhìn lại chặng đường đi.

## Bối cảnh cá nhân cần biết khi viết bài

- Từng mổ tràn khí màng phổi năm 2015, thể lực kém, không hợp thể thao vận động mạnh.
- Từng trải qua khủng hoảng tâm lý năm 2019 do mất ngủ trầm trọng (hoang tưởng, ảo giác). Hệ thần kinh rất nhạy cảm với thiếu ngủ. Đây là ranh giới sức khỏe nghiêm trọng.
- Khả năng ghi nhớ ngắn hạn kém, từng thử nhiều phương pháp (Anki, XMind, Cornell Note, Notion, OneNote, Duolingo) nhưng không duy trì lâu dài công cụ nào.
- Hiện tại vẫn đang bị kéo vào guồng quay: ngày làm hệ thống, tối dạy học, đêm deploy code. Luôn cần nhắc nhở bản thân về giới hạn sức khỏe.
- Gia đình là ưu tiên số 1: vợ, hai con nhỏ, mẹ từng bạo bệnh, ông bà đã mất.
- Triết lý sống: tối giản, làm chậm mà chắc, không khoe khoang, lắng nghe nhiều hơn nói.

## Hai thể loại bài viết trên blog

### 1. Bài tâm sự / nhật ký cá nhân

Ví dụ: "Khủng hoảng 2019", "Những ngày chạy hết công suất", "Những góc khuất".

**Quy tắc giọng văn:**

- Xưng "mình", gọi người đọc là "bạn".
- Câu ngắn, trực diện. Để sự việc tự nói thay cảm xúc, không dùng từ ngữ kịch tính hay cường điệu.
- KHÔNG dùng em-dash (—). Nối câu bằng dấu phẩy hoặc tách thành câu riêng.
- KHÔNG dùng heading (###) để chia phần. Chia đoạn bằng khoảng trắng tự nhiên.
- KHÔNG dùng bullet points hay danh sách liệt kê.
- KHÔNG liệt kê công nghệ dạng CV/portfolio.
- Kết bài nhẹ nhàng, không kết luận to tát hay tuyên ngôn. Giống viết nhật ký xong rồi dừng.
- Khi nhắc đến bài viết khác trên blog, dùng liên kết nội bộ một cách tự nhiên trong mạch kể.
- Không viết để than vãn, không viết để ai thương. Viết để thành thật với chính mình.

### 2. Bài chia sẻ kỹ thuật / hướng dẫn

Ví dụ: "Sử dụng sơ đồ tư duy (Mind Map)", "Kỹ thuật lặp lại ngắt quãng (Spaced Repetition)".

**Quy tắc giọng văn:**

- Xưng "tôi" hoặc "mình", gọi người đọc là "bạn".
- Có thể dùng heading (##, ###) để tổ chức nội dung.
- Có thể dùng bullet points, danh sách, code block.
- Giọng chia sẻ kinh nghiệm thực tế, không giáo điều. Viết như đang giải thích cho đồng nghiệp.
- Có frontmatter đầy đủ: title, description, date, slug, tags.

## Quy tắc chung cho mọi bài viết

- **Frontmatter bắt buộc**: title, date, slug. Bài kỹ thuật thêm description và tags.
- **Đường dẫn bài viết**: `content/posts/<slug>/index.mdx`
- **Ảnh minh họa**: đặt cùng thư mục với file `index.mdx`, dùng đường dẫn tương đối `./ten-anh.jpg`.
- **Liên kết nội bộ**: dùng đường dẫn tương đối bắt đầu bằng `/`, ví dụ `[Khủng hoảng 2019](/khung-hoang-2019/)`.
- **Không sáng tác hoặc bịa thêm chi tiết cuộc sống** mà tác giả chưa chia sẻ. Nếu thiếu thông tin, hỏi lại.

## SEO Checklist

- SEO Title: tối đa 60 ký tự, từ khóa chính ở đầu.
- Meta Description: tối đa 160 ký tự, chứa từ khóa chính.
- Từ khóa chính xuất hiện trong câu đầu tiên.
- Internal links > outbound links.
- Khai báo width/height cho ảnh.
- Địa chỉ đầy đủ ở footer, số điện thoại chuẩn +84.

## Stack kỹ thuật của tác giả

- **Backend**: Java, Spring Boot, Spring MVC, REST API, Microservices, JWT, Hibernate, JPA
- **Frontend**: React, Next.js, Angular, React Native (Expo), HTML, CSS, JavaScript, TypeScript
- **Database**: MySQL, PostgreSQL, SQL Server, Oracle
- **DevOps**: Docker, GitHub Actions, Nginx, Apache Tomcat, Ubuntu/CentOS
- **AI Tools**: Antigravity IDE, Claude Code, Vibe Coding workflow
- **Blog**: Gatsby, MDX, GitHub Pages
