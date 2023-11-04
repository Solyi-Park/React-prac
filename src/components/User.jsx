function User({item, handleClickRemoveUser}) {
    return (
      <div key={item.id} className="componentStyle">
        {item.name} - {item.age}
        <button onClick={() => handleClickRemoveUser(item.id)}>X</button>
      </div>
    );
  }
  export default User;