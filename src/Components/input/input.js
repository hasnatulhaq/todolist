import './input.css'



function Input(props){
    return (
        <>
         <input className="input_text" type={props.type} value={props.value} placeholder={props.title} onChange={props.handlefunc}></input>
        </>
    )
}
export default Input
