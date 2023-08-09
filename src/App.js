import logo from "./logo.svg"; //  понял благодаря видео, это декларативный. Описывыем что импортировать
import "./App.css"; //
import { createElement } from "react";

const date = new Date().getFullYear().toString(); // императивный, шаги

// императивная часть, экспорт
const App = () => {
  return createElement(
    // ретурн это еще логика, императивная
    "div",
    "App", // тут начинается деларативный. Ответ на вопрос ,,Что мы хотим получить"
    createElement(
      "header",
      { className: "App-header" },
      createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
      createElement(
        "p",
        {},
        "Edit ",
        createElement("code", {}, "src/App.js and save to reload"),
        createElement(
          "a",
          {
            className: "App-link",
            href: "https://reactjs.org",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          createElement("br"),
          "Learn React",
        ),
        createElement("div", {}, `year now:${date}`),
      ),
    ),
  );
};

export default App; //декларативный, команда экспорта - что хотим экспортировать
