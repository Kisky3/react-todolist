import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {        
    controlAllCheck = (event) => {
        const {checked} = event.target
        this.props.controlAllCheck(checked);
    }  

    delFinishedTasks =  () => {
        this.props.delFinishedTasks()
    }
    render() {
        // Use reduce to achieve count number function
        // const finishedTaskNum = this.props.todos.reduce((pre, currentValue) =>
        //     pre + (currentValue.done ? 1: 0),0
        // );
        const {todos} = this.props
        const countDone = todos.filter(todo => todo.done).length
        const taskLength = todos.length;
        const allChecked = countDone === taskLength && taskLength !== 0;
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input checked={allChecked} onChange={this.controlAllCheck} type="checkbox" />
                    </label>
                    <span>
                        <span>Finished Tasks {countDone}</span> / All {taskLength} Tasks
                    </span>
                    <button className="footer-del-btn" onClick={this.delFinishedTasks}> Delete Finished Task</button>
                </div>
            </div>
        );
    }
}
