import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {

    //    initial data, updating data = setting initial data
    const [inputList, setInputList] = useState("");

    //   modify this item array and locate
    const [items, setItem] = useState([]);

    //    set the values of item array after this event.
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    // this is returning the updated item array which has no id matching the id passed from TodoList component onClick event.
    const deleteItems = (id) => {
        setItem((olditem) => {
            return olditem.filter((arr, index) => {
                return index !== id;
            })
        });
    }

    // position the item array after this event.
    // [], [1], [1,2] etc..
    const listOfItem = (event) => {
        setItem((oldItem) => {
            return [
                ...oldItem, inputList
            ];
        });
        // for removing text from input area.
        setInputList("");
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>
                        ToDo List
                    </h1>
                    <br />
                    <input type="text" placeholder="Add an item"
                        onChange={itemEvents} value={inputList} />
                    <button onClick={listOfItem}> + </button>

                    <ol> {
                        items.map((item, index) => {
                            return <TodoList key={index}
                                id={index}
                                text={item}
                                onSelect={deleteItems}
                            />
                        })}
                    </ol>
                </div>

            </div>
        </>

    );
}

export default Todo;