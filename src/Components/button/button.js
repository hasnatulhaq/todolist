
function ToButton(props){
    console.log("line 3 in button",props)
    return (
        <>
        <button onClick={props.onpress}>{props.title}</button>
        </>
    )
}

export default ToButton