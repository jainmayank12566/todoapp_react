import React from "react";
import '../src/App.css';
function TodoItem(props){
    return(
    <React.Fragment>
        <div className="todomain">
            <span>
                <input type="checkbox" />
                <span className="spanselect">{props.title}</span>
            </span>
            <span>...</span>
        </div>
    </React.Fragment>
    )
}
export default TodoItem;