
function AddButton ({handleClickAddBtn, props}) {
    console.log(props)
    return <button onClick={handleClickAddBtn}>{props}</button>
  }

  export default AddButton;