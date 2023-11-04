import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const nameChangeHandler = (e) => setName(e.target.value);
  const ageChangeHandler = (e) => setAge(e.target.value);

  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      age,
      name,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <div>
        이름:&nbsp;
        <input value={name} onChange={nameChangeHandler} />
        <br />
        나이:&nbsp;
        <input value={age} onChange={ageChangeHandler} />
        <br />
        <button onClick={clickAddButtonHandler}>추가</button>
      </div>
      <div className="appStyle">
        {users.map((item) => {
          return (
            <div key={item.id} className="componentStyle">
              {item.name} - {item.age}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
