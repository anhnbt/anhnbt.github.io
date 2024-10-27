import React, { useState, useEffect } from "react";
import { Avatar, Button, Carousel, Steps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faEnvelope,
  faPhone,
  faChalkboardTeacher,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import slackIcon from "./slack.svg";
import emailIcon from "./gmail.png";
import chanhtran from "./chanh.tran.jpeg";
import wanbi from "./wanbi.jpg";
import tungnguyen from "./tung.nguyen.png";
import slackGuideImage1 from "./slack-profile-1.png";
import slackGuideImage2 from "./slack-profile-2.png";
import AOS from "aos";

const { Step } = Steps;

const ProfileSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        if (currentStep > 0) {
          setCurrentStep(currentStep - 1);
        }
      } else if (event.key === "ArrowRight") {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentStep, setCurrentStep]);

  const steps = [
    {
      title: "Instructor",
      content: (
        <div class="about-container">
          <div class="info">
            <h1>Nguyễn Bá Tuấn Anh</h1>
            <p>
              <FontAwesomeIcon className="icon" icon={faCakeCandles} /> Ngày
              sinh: 16/11/1995
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faEnvelope} /> Email:{" "}
              <a className="text-sky-600" href="mailto:anh.nguyen16@codegym.vn">
                anh.nguyen16@codegym.vn
              </a>
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faPhone} /> Số điện thoại:{" "}
              <a className="text-sky-600" href="tel:0349876595">
                0349876595
              </a>
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faChalkboardTeacher} />{" "}
              Instructor - Giảng viên lý thuyết
            </p>
            <div class="skills">
              <h3>Môn giảng dạy:</h3>
              <p>HTML, CSS, JavaScript, ReactJS, SQL, Java, Spring Boot</p>
            </div>
          </div>
          <Avatar
            src={<img src={wanbi} alt="avatar" />}
            className="image"
            data-aos="zoom-in"
          />
        </div>
      ),
    },
    {
      title: "Tutor",
      content: (
        <div className="p-4">
          <h1 className="text-lg font-semibold mb-2">
            Tutor - Giảng viên thực hành
          </h1>
          <div className="flex flex-col md:flex-row gap-4 bg-gray-100 p-6 rounded-lg mx-auto">
            {/* Cột CGDN */}
            <div
              className="flex flex-col justify-center items-center md:items-start md:w-1/3 bg-white shadow-md p-4 rounded"
              data-aos="fade-right"
            >
              <Avatar
                src={<img src={wanbi} alt="avatar" />}
                className="mb-4"
                size={100}
              />
              <h2 className="text-xl font-semibold text-gray-800">
                CGHN: Nguyễn Bá Tuấn Anh
              </h2>
              <p className="text-sm text-gray-600">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                anh.nguyen16@codegym.vn
              </p>
            </div>

            <div
              className="flex flex-col justify-center items-center md:items-start md:w-1/3 bg-white shadow-md p-4 rounded"
              data-aos="fade-up"
            >
              <Avatar
                src={<img src={chanhtran} alt="avatar" />}
                className="mb-4"
                size={100}
              />
              <h2 className="text-xl font-semibold text-gray-800">
                CGDN: Trần Văn Chánh
              </h2>
              <p className="text-sm text-gray-600">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                chanh.tran@codegym.vn
              </p>
            </div>

            <div
              className="flex flex-col justify-center items-center md:items-start md:w-1/3 bg-white shadow-md p-4 rounded"
              data-aos="fade-left"
            >
              <Avatar
                src={<img src={tungnguyen} alt="avatar" />}
                className="mb-4"
                size={100}
              />
              <h2 className="text-xl font-semibold text-gray-800">
                Online: Nguyễn Khánh Tùng
              </h2>
              <p className="text-sm text-gray-600">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                tung.nguyen@codegym.vn
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Thời gian biểu",
      content: (
        <div className="p-4">
          <h1 className="text-lg font-semibold mb-2">Thời gian biểu</h1>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Thời gian</th>
                  <th className="border border-gray-300 p-2">Công việc</th>
                  <th className="border border-gray-300 p-2">Phụ trách</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">18h30-20h00</td>
                  <td className="border border-gray-300 p-2">Học lý thuyết</td>
                  <td className="border border-gray-300 p-2">Instructor</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">20h00-21h30</td>
                  <td className="border border-gray-300 p-2">
                    Học tập có hướng dẫn tại phòng thực hành
                  </td>
                  <td className="border border-gray-300 p-2">Tutor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      title: "Kênh liên lạc",
      content: (
        <div className="p-4">
          <h1 className="text-lg font-semibold mb-2">Kênh liên lạc</h1>
          <div className="flex items-center mb-4">
            <img src={slackIcon} alt="Slack Icon" className="w-8 h-8 mr-2" />
            <span className="text-base">
              <strong>Slack</strong>: Kênh thông tin, liên lạc thường xuyên giữa
              học viên và các nhân viên phòng Đào tạo (AH, CM, Trainers, AO)
            </span>
          </div>
          <div className="flex items-center mb-4">
            <img src={emailIcon} alt="Email Icon" className="w-8 h-auto mr-2" />
            <span className="text-base">
              <strong>Email</strong>: Giao tiếp chính thức với phòng Đào tạo và
              các bộ phận khác tại CodeGym
            </span>
          </div>
          <div className="p-2 bg-gray-100 border border-gray-300 rounded">
            <h3 className="text-md font-semibold">Nguyên tắc giao tiếp</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Nhận được thông tin cần reaction xác nhận.</li>
              <li>Nếu thông tin cần phản hồi thì reply in thread.</li>
              <li>30p check tin nhắn 1 lần để cập nhật thông tin.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Nội quy chung",
      content: (
        <div className="p-4">
          <h1 className="text-lg font-semibold mb-2">Nội quy chung</h1>
          <div className="bg-white p-4 border border-gray-300 rounded mb-4">
            <h2 className="font-semibold text-blue-600">Xin đi muộn</h2>
            <ul className="list-disc list-inside text-sm mt-2">
              <li>
                Thông báo qua{" "}
                <span className="font-bold text-red-500">Slack</span> trước 5
                phút.
              </li>
              <li>
                Cần lý do hợp lệ và{" "}
                <span className="font-bold text-blue-600">
                  giải thích chi tiết
                </span>
                .
              </li>
              <li>
                Thời lượng tối đa{" "}
                <span className="font-bold text-green-500">
                  Không quá 15 phút
                </span>
                .
              </li>
              <li>
                Nếu có mặt tại trung tâm/Meet{" "}
                <span className="font-bold text-purple-600">
                  quá thời gian xin phép
                </span>{" "}
                thì bị tính là{" "}
                <span className="font-bold text-red-500">nghỉ phép</span>.
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 border border-gray-300 rounded mb-4">
            <h2 className="font-semibold text-blue-600">Xin về sớm</h2>
            <ul className="list-disc list-inside text-sm mt-2">
              <li>
                Thông báo qua{" "}
                <span className="font-bold text-red-500">Slack</span> trước khi
                buổi học kết thúc 5 phút.
              </li>
              <li>
                Cần trình bày lý do rõ ràng và{" "}
                <span className="font-bold text-blue-600">cụ thể</span>.
              </li>
              <li>
                Thời lượng tối đa{" "}
                <span className="font-bold text-green-500">
                  Không quá 15 phút
                </span>
                .
              </li>
              <li>
                Nếu về{" "}
                <span className="font-bold text-purple-600">
                  sớm hơn xin phép
                </span>{" "}
                sẽ bị tính là{" "}
                <span className="font-bold text-red-500">nghỉ phép</span>.
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 border border-gray-300 rounded">
            <h2 className="font-semibold text-blue-600">Xin nghỉ phép</h2>
            <ul className="list-disc list-inside text-sm mt-2">
              <li>
                Thời gian:{" "}
                <span className="font-bold text-red-500">
                  Trước buổi học 1 tiếng
                </span>
                .
              </li>
              <li>
                Nơi gửi: <span className="font-bold text-blue-600">Email</span>{" "}
                và <span className="font-bold text-red-500">Slack</span>.
              </li>
              <li>
                Gửi đến:{" "}
                <span className="font-bold text-green-500">Instructor</span>,{" "}
                <span className="font-bold text-green-500">Tutor</span>,{" "}
                <span className="font-bold text-green-500">AO</span>.
              </li>
            </ul>
            <div className="mt-4">
              <h3 className="font-semibold ">Lưu ý:</h3>
              <ul className="list-disc list-inside text-sm  mt-2">
                <li>
                  Với tất cả những trường hợp xin{" "}
                  <span className="font-bold text-red-500">
                    đi muộn, về sớm, nghỉ phép
                  </span>{" "}
                  gấp rút thì cần cung cấp lý do cụ thể và bằng chứng rõ ràng để
                  xác minh thì mới được tính là hợp lệ (chấp nhận bổ sung bằng
                  chứng).
                </li>
                <li>
                  Mọi trường hợp{" "}
                  <span className="font-bold text-red-500">
                    ra ngoài quá 15p, về sớm không có lý do
                  </span>{" "}
                  được tính là vắng không phép.
                </li>
                <li>
                  Đối với các bạn đăng ký học offline với mọi lý do xin phép học
                  online không lên trung tâm đều được tính là nghỉ phép.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Nội quy chung",
      content: (
        <div className="p-4">
          <h1 className="text-lg font-semibold mb-2">Giờ học lý thuyết</h1>
          <div className="bg-white p-4 border border-gray-300 rounded mb-4">
            <h2 className="font-semibold text-blue-600">
              Trước giờ vào học lý thuyết
            </h2>
            <ul className="list-disc list-inside text-sm mt-2">
              <li>
                Soạn bài : Dựa trên{" "}
                <span className="font-bold text-red-600">các câu hỏi</span> được
                cung cấp trên{" "}
                <span className="font-bold text-red-600">slack</span> trước mỗi
                bài học. Có thể ghi ra giấy, sử dụng Word, MindMap, Notion,...
                Và nộp lại vào <span className="font-bold">thread</span> đã
                đăng.
              </li>
              <li>
                <span className="font-bold">Hoàn thành 100% các công việc</span>
                : Xem video bài giảng, đọc bài đọc, làm quiz, làm bài thực hành.
                Bài tập nếu làm được thì nên làm. Lưu ý: Sau khi hoàn thành phải{" "}
                <span className="font-bold">tick hoàn thành trên James</span>.
              </li>
              <li>
                Chuẩn bị đầy đủ các thiết bị cho việc học lý thuyết để hạn chế
                tối đa sự cố phát sinh (máy tính, mic, camera).
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 border border-gray-300 rounded mb-4">
            <h2 className="font-semibold text-blue-600">
              Trong giờ vào học lý thuyết
            </h2>
            <ul className="list-disc list-inside text-sm mt-2">
              <li>
                <span className="font-bold">Bắt buộc 100% các bạn online</span>{" "}
                tham gia giờ học lý thuyết{" "}
                <span className="font-bold">phải xuất hiện trên camera</span>.
              </li>
              <li>Chỉ sử dụng điện thoại khi có sự cho phép của Instructor.</li>
              <li>
                <span className="font-bold">Học bài cũ</span>.
              </li>
              <li>
                Học và rèn luyện kỹ năng: mắt nhìn, tai nghe, tay ghi chú.
              </li>
              <li>Không đem thức ăn vào phòng học lý thuyết.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Đổi tên",
      content: (
        <div className="flex flex-col md:flex-row bg-white p-4 border border-gray-300 rounded shadow-md my-4">
          {/* Phần mô tả quy tắc đổi tên Slack */}
          <div className="flex-1">
            <h2 className="font-semibold text-blue-600 mb-2">
              Quy tắc đổi tên Slack
            </h2>
            <p className="text-gray-700">
              Định dạng tên:{" "}
              <span className="font-bold text-red-600">
                Trung tâm-Họ Tên-C1024L1-JV103
              </span>
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>
                <span className="font-bold">Trung tâm</span>: Tên của trung tâm
                (ví dụ: CGHN, CGĐN, CGO).
              </li>
              <li>
                <span className="font-bold">Họ Tên</span>: Họ và tên của bạn (ví
                dụ: Nguyễn Bá Tuấn Anh).
              </li>
              <li>
                <span className="font-bold">C1024L1-JV103</span>: Ký hiệu của
                khóa học (ví dụ: C1024L1-JV103).
              </li>
            </ul>
          </div>

          {/* Phần hiển thị ảnh */}
          <div
            className="md:w-2/3 mt-4 md:mt-0 md:pl-4"
            style={{ backgroundColor: "#e7edf3" }}
          >
            <Carousel arrows autoplay>
              <div>
                <img
                  src={slackGuideImage1}
                  alt="Hướng dẫn đổi tên Slack 1"
                  className="mx-auto"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                  data-aos="zoom-in"
                />
              </div>
              <div>
                <img
                  src={slackGuideImage2}
                  alt="Hướng dẫn đổi tên Slack"
                  className="w-full h-auto rounded-lg"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                  data-aos="zoom-in"
                />
              </div>
            </Carousel>
          </div>
        </div>
      ),
    },
  ];

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <div className="app">
      <div className="w-2/3  mx-auto p-6 mt-5 bg-white shadow-lg rounded-lg">
        <Steps current={currentStep} className="mb-6">
          {steps.map((step, index) => (
            <Step
              key={index}
              title={step.title}
              onClick={() => setCurrentStep(index)}
              className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-blue-100 rounded-md"
            />
          ))}
        </Steps>

        <div className="mb-4">{steps[currentStep].content}</div>

        <div className="flex justify-between">
          <Button
            type="primary"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <FontAwesomeIcon size="1x" icon={faArrowLeft} />
          </Button>
          <Button
            type="primary"
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
          >
            <FontAwesomeIcon size="1x" icon={faArrowRight} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSteps;
