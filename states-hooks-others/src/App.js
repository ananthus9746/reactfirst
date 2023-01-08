import { useState } from "react";
import Header from "./componets/header";
import Counter from "./Counter";
import Employes from "./Employes";
//COVERED TOPIC DESTURING ,OBJECT ,AND SPREAD OPERATOR BOTH ARE SAME
//USESTAES =useSta()
//MAP  =map()
//SPREAD =OPERATOR ...

function App() {
  const [count, setCount] = useState(0);

  var addCount = () => {
    setCount(count + 1);
  };

  var obj = {
    name: "ananthu",
    count,
    place: "kalliyoor",
  };

  var emp = [
    { name: "ananthu", age: "25", salary: "50000" },
    { name: "Sndeep", age: "55", salary: "8000" },
    { name: "Vai", age: "25", salary: "4000" },
    { name: "Latha", age: "50", salary: "47000" },
    { name: "Aravind", age: "23", salary: "89000" },
  ];

  return (
    <div className="App">
      <Header {...obj} />
      <Counter data="hello data destured" count={count} />

      {emp.map((data, index) => {

        
        return (
          // <Employes name={data.name} age={data.age} salary={data.salary} />

          <Employes key={index } {...data} />

        );
      })}

      <button onClick={addCount}>Add</button>

      <h1> Count:{count}</h1>

      <p>ananthu {count}</p>
    </div>
  );
}

export default App;
