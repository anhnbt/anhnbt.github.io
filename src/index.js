import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import 'aos/dist/aos.css';
import AboutMe from "./AboutMe";
import {One} from "./components/lesson-01-basic-ux-ui/One";
import {Two} from "./components/lesson-01-basic-ux-ui/Two";
import {Three} from "./components/lesson-01-basic-ux-ui/Three";
import {Four} from "./components/lesson-01-basic-ux-ui/Four";
import {Five} from "./components/lesson-01-basic-ux-ui/Five";
import {Six} from "./components/lesson-01-basic-ux-ui/Six";
import {Seven} from "./components/lesson-01-basic-ux-ui/Seven";
import {Eight} from "./components/lesson-01-basic-ux-ui/Eight";
import {Nine} from "./components/lesson-01-basic-ux-ui/Nine";
import {Ten} from "./components/lesson-01-basic-ux-ui/Ten";
import HTMLLesson from "./components/lesson-02-basic-html/HTMLLesson";
import HTMLForms from "./components/lesson-03-html-forms-and-tables/HTMLForms";
import CSSLayout from "./components/lesson-07-css-layout/CSSLayout";
import CSSRWD from "./components/lesson-08-css-rwd/CSSRWD";
import CSSFlexbox from "./components/lesson-10-css-flexbox/CSSFlexbox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AboutMe />,
  },
  {
    path: "/lesson-01-basic-ux-ui/one",
    element: <One />,
  },
  {
    path: "/lesson-01-basic-ux-ui/two",
    element: <Two />,
  },
  {
    path: "/lesson-01-basic-ux-ui/three",
    element: <Three />,
  },
  {
    path: "/lesson-01-basic-ux-ui/four",
    element: <Four />,
  },
  {
    path: "/lesson-01-basic-ux-ui/five",
    element: <Five />,
  },
  {
    path: "/lesson-01-basic-ux-ui/six",
    element: <Six />,
  },
  {
    path: "/lesson-01-basic-ux-ui/seven",
    element: <Seven />,
  },
  {
    path: "/lesson-01-basic-ux-ui/eight",
    element: <Eight />,
  },
  {
    path: "/lesson-01-basic-ux-ui/nine",
    element: <Nine />,
  },
  {
    path: "/lesson-01-basic-ux-ui/ten",
    element: <Ten />,
  },
  {
    path: "/lesson-02-basic-html",
    element: <HTMLLesson />,
  },
  {
    path: "/lesson-03-html-forms-and-tables",
    element: <HTMLForms />,
  },
  {
    path: "/lesson-07-css-layout",
    element: <CSSLayout />,
  },
  {
    path: "/lesson-08-css-rwd",
    element: <CSSRWD />,
  },
  {
    path: "/lesson-10-css-flexbox",
    element: <CSSFlexbox />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
