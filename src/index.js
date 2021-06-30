import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

const destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList />
    </div>,
    destination
);