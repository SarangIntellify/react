import React from "react";

const TodoList = (props) => {
    return (
        <div className="todo_style">
            <i className="fa fa-times"
                // onClick belongs to i tag icon not li tag.
                onClick={
                    () => {
                        props.onSelect(props.id);
                    }
                }
            />
            <li>{props.text}</li>
        </div>
    );
};

export default TodoList;