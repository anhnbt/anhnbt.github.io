import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";
import AOS from "aos";
import RWD1 from "./RWD1.jpeg";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import col from "./col.png";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const { Title } = Typography;

const CSSFlexbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    document.title = "Bài 10: CSS Flexbox";
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold">Bài 10: CSS Flexbox</h1>
        <p className="text-lg text-gray-700">
          [Web Frontend] Building Website with HTML and CSS
        </p>
      </header>
      <section className="mb-16">
        <div className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div>
                <Title level={2} className="text-left">
                  Mục tiêu
                </Title>
                <ul className="list-inside list-disc text-lg">
                  <li>Hiểu rõ nguyên tắc cơ bản của CSS Flexbox</li>
                  <li>
                    Sử dụng các thuộc tính Flexbox để tạo bố cục linh hoạt
                  </li>
                  <li>Giải quyết các vấn đề về bố cục một cách dễ dàng</li>
                  <li>
                    Tạo giao diện tương thích với nhiều loại màn hình khác nhau
                  </li>
                  <li>Thực hành áp dụng Flexbox vào các dự án thực tế</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <Title level={2} className="text-left">
                Giới thiệu về CSS Flexbox
              </Title>
              <ul className="list-inside list-disc text-lg">
                <li>
                  Flexbox (Flexible Box Layout Module) là một hệ thống bố cục
                  một chiều trong CSS, giúp dễ dàng sắp xếp và căn chỉnh các
                  phần tử bên trong container theo hàng ngang (row) hoặc hàng
                  dọc (column).
                </li>
                <li>
                  Trước khi có Flexbox, các phương pháp như float, inline-block
                  hoặc table thường gặp khó khăn trong việc căn chỉnh phức tạp,
                  như việc căn giữa theo cả trục ngang và dọc
                </li>
                <li>
                  Flexbox được sử dụng để sắp xếp và căn chỉnh các phần tử trong
                  container một cách linh hoạt, thích hợp cho các bố cục mà
                  chiều dài phần tử có thể thay đổi
                </li>
              </ul>
              <div className="flex justify-center items-center space-x-4 mt-10">
                <figure className="w-1/3 text-center" data-aos="fade-right">
                  <img
                    src={image1}
                    alt="Image 1"
                    className="w-full h-full aspect-[4/3] object-cover"
                  />
                  <figcaption className="mt-2 text-gray-600">
                    Máy tính cá nhân
                  </figcaption>
                </figure>
                <figure className="w-1/3 text-center" data-aos="fade-up">
                  <img
                    src={image2}
                    alt="Image 2"
                    className="mx-auto h-full aspect-[4/3] object-cover"
                  />
                  <figcaption className="mt-2 text-gray-600">
                    Máy tính bảng
                  </figcaption>
                </figure>
                <figure className="w-1/3 text-center" data-aos="fade-left">
                  <img
                    src={image3}
                    alt="Image 3"
                    className="mx-auto h-full aspect-[4/3] object-cover"
                  />
                  <figcaption className="mt-2 text-gray-600">
                    Điện thoại
                  </figcaption>
                </figure>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-8">
                <div className="flex flex-col justify-center items-center">
                  <Title level={2} className="text-left">
                    Cấu trúc Flexbox
                  </Title>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                      Flex Container: Là phần tử cha chứa các phần tử con (flex
                      items). Bất kỳ phần tử HTML nào cũng có thể được đặt thành
                      một flex container bằng cách thêm thuộc tính display: flex
                      hoặc display: inline-flex.<br></br>
                      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto my-3">
                        <code>{`Ví dụ: <div class="container">.`}</code>
                      </pre>
                    </li>
                    <li>
                      Flex Items: Là các phần tử bên trong flex container. Chúng
                      sẽ tuân theo các quy tắc bố cục Flexbox.<br></br>
                      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto my-3">
                        <code>
                          {`Ví dụ: <div class="container"><div class="item"></div><div class="item"></div></div>.`}
                        </code>
                      </pre>
                    </li>
                    <li>
                      Trục chính và trục phụ: Trong Flexbox, trục chính (main
                      axis) là hướng mà các phần tử được xếp, và trục phụ (cross
                      axis) là hướng còn lại (vuông góc với trục chính).
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center items-center">
                  {isOpen && (
                    <Lightbox
                      image={RWD1}
                      title="RWD"
                      onClose={() => setIsOpen(false)}
                    />
                  )}
                  <img
                    src={RWD1}
                    alt="RWD"
                    className="w-full h-auto rounded-lg"
                    data-aos="zoom-in"
                    onClick={() => setIsOpen(true)}
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="bg-white py-10 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-8">
                <div className="">
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto my-3">
                    <code>
                      {`<div class="row">
  <div class="col-4">col-4</div>
  <div class="col-4">col-4</div>
  <div class="col-4">col-4</div>
</div>
`}
                    </code>
                  </pre>
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <code>
                      {`.col-4 {
  float: left;
  width: 33.33%;
}
`}
                    </code>
                  </pre>
                </div>
                <div className="">
                  <Title level={2} className="text-left">
                    Các thuộc tính của Flex Container{" "}
                  </Title>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                      display: flex | inline-flex: Kích hoạt Flexbox trên một
                      container, flex hiển thị phần tử như một khối (block), còn
                      inline-flex hiển thị như một phần tử inline.
                    </li>
                    <li>
                      flex-direction: Quy định hướng các flex items được xếp
                      theo hàng ngang hoặc cột dọc.<br></br>
                      Giá trị: row, row-reverse, column, column-reverse.
                    </li>
                    <li>
                      flex-wrap: Cho phép các phần tử quấn sang dòng mới khi cần
                      thiết.<br></br>
                      Giá trị: nowrap, wrap, wrap-reverse.
                    </li>
                    <li>
                      justify-content: Căn chỉnh các phần tử trên trục chính.
                      <br></br>
                      Giá trị: flex-start, flex-end, center, space-between,
                      space-around, space-evenly
                    </li>
                    <li>
                      align-items: Căn chỉnh các phần tử trên trục phụ.<br></br>
                      Giá trị: flex-start, flex-end, center, baseline, stretch.
                    </li>
                    <li>
                      align-content: Căn chỉnh không gian giữa các hàng (khi có
                      nhiều hàng)<br></br>
                      Giá trị: tương tự align-items
                    </li>
                  </ul>
                </div>
              </div>

              <img
                src={col}
                alt="Grid view"
                className="w-full h-auto rounded-lg"
                data-aos="zoom-in"
              />
            </Card>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="py-10 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <Title level={2} className="text-left">
                Các thuộc tính của Flex Items
              </Title>
              <ul className="list-inside list-disc text-lg">
                <li>
                  flex-grow: Quy định phần tử có thể mở rộng chiếm bao nhiêu
                  không gian còn trống. Giá trị mặc định là 0<br></br>
                  Ví dụ: Nếu một phần tử có giá trị flex-grow: 2, nó sẽ chiếm
                  gấp đôi không gian so với phần tử có giá trị flex-grow: 1.
                </li>
                <li>
                  flex-shrink: Điều chỉnh khả năng thu nhỏ của phần tử khi không
                  đủ không gian. Giá trị mặc định là 1.
                </li>
                <li>
                  flex-basis: Đặt kích thước mặc định cho phần tử trước khi phần
                  còn lại của không gian được phân chia.<br></br>
                  Ví dụ: flex-basis: 200px đảm bảo phần tử có kích thước 200px
                  trước khi không gian được phân phối thêm.
                </li>
                <li>
                  align-self: Điều chỉnh căn chỉnh cho từng flex item độc lập
                  với các item khác.<br></br>
                  Giá trị: tương tự align-items.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="py-10 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
                <div className="">
                  <p className="text-lg text-gray-700">
                    Responsive Design với Flexbox
                  </p>
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <code>
                      {`@media screen and (min-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}
                    </code>
                  </pre>
                  <p className="text-lg text-gray-700">
                    Trong ví dụ này, nền sẽ chỉ thay đổi thành màu xanh khi kích
                    thước màn hình ít nhất là 600px.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Title level={2} className="text-left">
                  Responsive Design với Flexbox
                  </Title>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                    Media Queries và Flexbox: Sử dụng @media để thay đổi bố cục Flexbox trên các thiết bị khác nhau.
                    </li>
                    <li>
                    Ví dụ: Sử dụng flex-direction: column trên màn hình nhỏ, và flex-direction: row trên màn hình lớn hơn.
                    </li>
                    <li>
                    Căn giữa linh hoạt: Hướng dẫn căn giữa phần tử trên cả trục dọc và ngang sử dụng justify-content và align-items.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="py-10 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
                <div className="flex flex-col justify-center items-center">
                  <Title level={2} className="text-left">
                    So sánh Flexbox và CSS Grid
                  </Title>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                    Flexbox: Bố cục một chiều, tức là các phần tử được sắp xếp theo hàng ngang hoặc hàng dọc.
                    </li>
                    <li>
                    CSS Grid: Bố cục hai chiều, cho phép sắp xếp phần tử theo cả hàng ngang và cột dọc.
                    </li>
                    <li>Khi nào sử dụng: Flexbox thích hợp cho bố cục đơn giản, theo hàng hoặc cột. Grid phù hợp cho các bố cục phức tạp có nhiều hàng và cột.</li>
                  </ul>
                </div>

                <div className="">
                  <p className="text-lg text-gray-700 font-bold mb-2">
                    Ví dụ 1: Chỉ định một Media Type và Media Feature:
                  </p>
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <code>
                      {`@media screen and (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
`}
                    </code>
                  </pre>
                  <p className="text-lg text-gray-700">
                    Áp dụng cho màn hình (screen) có độ rộng nhỏ hơn hoặc bằng
                    768px.
                  </p>
                  <p className="text-lg text-gray-700 font-bold mt-2">
                    Ví dụ 2: Sử dụng nhiều Media Features kết hợp:
                  </p>
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <code>
                      {`@media screen and (min-width: 768px) and (orientation: landscape) {
  body {
    font-size: 18px;
  }
}
`}
                    </code>
                  </pre>
                  <p className="text-lg text-gray-700">
                    Quy tắc CSS này áp dụng khi chiều rộng màn hình ít nhất là
                    768px và thiết bị đang ở chế độ landscape (màn hình nằm
                    ngang).
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSSFlexbox;
