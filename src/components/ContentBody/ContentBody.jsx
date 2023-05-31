import React from "react";
import "./ContentBody.css";
import "./../../styles/styles.css";
import TodoBox from "../TodoBox/TodoBox";
function ContentBody() {
  return (
    <>
      <div className="cbox">
        <div className="lists">
          <div className="todo-lists">
            <div className="">
              <div className="todo lbtn">List: Things to Buy</div>
              <TodoBox/>
              <TodoBox/>
              <TodoBox/>
            </div>

            <div className="">
              <div className="todo lbtn">List: Empty List</div>
              <TodoBox/>
              <TodoBox/>
            </div>
            <div className="todo lbtn">
              <input type="text" className="input-text" />
            </div>
          </div>
        </div>
        <div className="edit">
          <div className="edit-todo">Edit todo</div>
          <div className="title">Carrot</div>
          <div className="txt">carrot improves sight</div>
          <div className="save">save</div>
        </div>
      </div>
    </>
  );
}

export default ContentBody;
