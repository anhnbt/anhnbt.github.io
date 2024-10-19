import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";
import AOS from "aos";
import flex_terms from "./flex_terms.png";
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
                  Trước khi có Flexbox, các phương pháp như{" "}
                  <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    float
                  </code>
                  ,{" "}
                  <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    inline-block
                  </code>
                  hoặc{" "}
                  <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    table
                  </code>{" "}
                  thường gặp khó khăn trong việc căn chỉnh phức tạp, như việc
                  căn giữa theo cả trục ngang và dọc
                </li>
                <li>
                  Flexbox được sử dụng để sắp xếp và căn chỉnh các phần tử trong
                  container một cách linh hoạt, thích hợp cho các bố cục mà
                  chiều dài phần tử có thể thay đổi
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div className="flex flex-col justify-center items-center">
                <Title level={2} className="text-left">
                  Cấu trúc Flexbox
                </Title>
                <ul className="list-inside list-disc text-lg">
                  <li>
                    Flex Container: Là phần tử cha chứa các phần tử con (flex
                    items). Bất kỳ phần tử HTML nào cũng có thể được đặt thành
                    một flex container bằng cách thêm thuộc tính{" "}
                    <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                      display: flex
                    </code>
                    hoặc display:{" "}
                    <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                      inline-flex
                    </code>
                    . Ví dụ: <br></br>
                    <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto my-3">
                      <code>{`<div class="container">.`}</code>
                    </pre>
                  </li>
                  <li>
                    Flex Items: Là các phần tử bên trong flex container. Chúng
                    sẽ tuân theo các quy tắc bố cục Flexbox. Ví dụ: <br></br>
                    <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto my-3">
                      <code>
                        {`<div class="container"><div class="item"></div><div class="item"></div></div>.`}
                      </code>
                    </pre>
                  </li>
                  <li>
                    Trục chính và trục phụ: Trong Flexbox, trục chính (main
                    axis) là hướng mà các phần tử được xếp, và trục phụ (cross
                    axis) là hướng còn lại (vuông góc với trục chính).
                  </li>
                </ul>
                <div className="flex justify-center items-center">
                  {isOpen && (
                    <Lightbox
                      image={flex_terms}
                      title="RWD"
                      onClose={() => setIsOpen(false)}
                    />
                  )}
                  <img
                    src={flex_terms}
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
                      {`.box {
  display: flex;
}`}
                    </code>
                  </pre>
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <code>
                      {`<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>`}
                    </code>
                  </pre>
                </div>
                <div className="">
                  <Title level={2} className="text-left">
                    Các thuộc tính của Flex Container{" "}
                  </Title>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        display: flex | inline-flex
                      </code>
                      : Kích hoạt Flexbox trên một container, flex hiển thị phần
                      tử như một khối (block), còn inline-flex hiển thị như một
                      phần tử inline.
                    </li>
                    <li>
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        flex-direction
                      </code>
                      : Quy định hướng các flex items được xếp theo hàng ngang
                      hoặc cột dọc.<br></br>
                      Giá trị:{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        row
                      </code>
                      ,{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        row-reverse
                      </code>
                      ,{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        column
                      </code>
                      ,{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        column-reverse
                      </code>
                      .
                    </li>
                    <li>
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        flex-wrap
                      </code>
                      : Cho phép các phần tử quấn sang dòng mới khi cần thiết.
                      <br></br>
                      Giá trị:{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        nowrap
                      </code>
                      ,{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        wrap
                      </code>
                      ,{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        wrap-reverse
                      </code>
                      .
                    </li>
                    <li>
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        justify-content
                      </code>
                      : Căn chỉnh các phần tử trên trục chính.
                      <br></br>
                      Giá trị: flex-start, flex-end, center, space-between,
                      space-around, space-evenly
                    </li>
                    <li>
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        align-items
                      </code>
                      : Căn chỉnh các phần tử trên trục phụ.<br></br>
                      Giá trị: flex-start, flex-end, center, baseline, stretch.
                    </li>
                    <li>
                      <code class="bg-gray-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        align-content
                      </code>
                      : Căn chỉnh không gian giữa các hàng (khi có nhiều hàng)
                      <br></br>
                      Giá trị: tương tự align-items
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
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <code>
                      {`/* Responsive cho màn hình nhỏ */
@media (max-width: 600px) {
  .container {
    flex-direction: column;
    align-items: stretch;
  }
}
`}
                    </code>
                  </pre>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Title level={2} className="text-left">
                    Responsive Design với Flexbox
                  </Title>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                      Media Queries và Flexbox: Sử dụng @media để thay đổi bố
                      cục Flexbox trên các thiết bị khác nhau.
                    </li>
                    <li>
                      Ví dụ: Sử dụng flex-direction: column trên màn hình nhỏ,
                      và flex-direction: row trên màn hình lớn hơn.
                    </li>
                    <li>
                      Căn giữa linh hoạt: Hướng dẫn căn giữa phần tử trên cả
                      trục dọc và ngang sử dụng justify-content và align-items.
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
                  <Title level={2} className="text-left">
                    So sánh Flexbox và CSS Grid
                  </Title>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                      Flexbox: Bố cục một chiều, tức là các phần tử được sắp xếp
                      theo hàng ngang hoặc hàng dọc.
                    </li>
                    <li>
                      CSS Grid: Bố cục hai chiều, cho phép sắp xếp phần tử theo
                      cả hàng ngang và cột dọc.
                    </li>
                    <li>
                      Khi nào sử dụng: Flexbox thích hợp cho bố cục đơn giản,
                      theo hàng hoặc cột. Grid phù hợp cho các bố cục phức tạp
                      có nhiều hàng và cột.
                    </li>
                  </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSSFlexbox;
