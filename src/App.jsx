import { useState } from "react";
import "./App.css";
import AddButton from "./components/AddButton";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleChangeName = (e) => setName(e.target.value);
  const handleChangAge = (e) => setAge(e.target.value);

  //추가버튼 클릭
  const handleClickAddBtn = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
    alert("추가 완료!");
  };

  // 삭제버튼 클릭
  const handleClickRemoveUser = (id) => {
    const updateUser = users.filter((user) => user.id !== id);
    setUsers(updateUser);
    alert("삭제 완료~");
  };

  return (
    <div>
      <div>
        이름:&nbsp;
        <input value={name} onChange={handleChangeName} />
        <br />
        나이:&nbsp;
        <input value={age} onChange={handleChangAge} />
        <br />
        <AddButton handleClickAddBtn={handleClickAddBtn}>추가</AddButton>
      </div>
      <div className="appStyle">
        {users.map(function (item) {
          return <User item={item} handleClickRemoveUser={handleClickRemoveUser}/>
        })}
      </div>
    </div>
  );
}
// App컴포넌트에서 props를 받아올 때 {}중괄호 안에 구조분해할당을 넣는 부분이 아리까리함. 
// 왜 구조분해할당으로 넣지?
// 그리고 구조분해할당인데 왜 할당연산자 '='가 없지?
// 구조분해할당은 안하는 거랑은 어떻게 결과가 다른 거지...?
export default App;

