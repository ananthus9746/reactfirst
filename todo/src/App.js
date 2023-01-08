import "./app.css";
import { useState } from "react";

function App() {
  const [toDos, setTodos] = useState([]); //this where all the todo list store
  const [toDo, setTodo] = useState(""); //for getting single input field value
  return (
    <div className="App">
      <div className="app-cover">
        <div className="heading">
          <h1>Todo list</h1>
        </div>
        <div className="sub-heading">
          <h2>it's Monday..</h2>
        </div>
        {/*INPUT TODO FIELD  */}
        <div className="input">
          <input
            value={toDo}
            onChange={(e) => {
              setTodo(e.target.value);
              console.log("event. for getting input value..", e.target.value);
            }}
            type="text"
            name=""
            id=""
            placeholder="Add items."
          />{" "}
          {/* //getting inputfield value when we are typing// */}
          <button
            onClick={() =>
              setTodos(
                [...toDos, { id: Date.now(), text: toDo, status: false }],
                console.log("toDos..", toDos)
              )
            }
          >
            +
          </button>
        </div>

        {toDos.map((data) => {
          console.log("map..");
          return (
            <div className="todos">
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(e) => {
                      console.log("checkbox..", e.target.checked);
                      console.log("data", data);
                      setTodos(
                        toDos.filter((obj2) => {
                          if (obj2.id === data.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    value={data.status}
                    type="checkbox"
                    name=""
                    id=""
                  />

                  <p>{data.text}</p>
                </div>
                <div className="right">
                  <button>x</button>
                </div>
              </div>
            </div>
          );
        })}

        <h1>Completed Tasks</h1>
        {
          toDos.map((data)=>{
            if(data.status){
              return(<h1>{data.text}</h1>)
            }
            return null
          })
        }

      </div>
    </div>
  );
}

export default App;
