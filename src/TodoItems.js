import React, { Component } from "react";

class TodoItems extends Component {
    constructor(props) {
        super(props);


        this.createTask = this.createTask.bind(this);
    }
    createTask(item) {
        return <li key={item.key}>{item.text}</li>
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTask);
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }

};
export default TodoItems;