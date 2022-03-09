import ToButton from "../button/button"


function ListView(props){
    

  const removeitems = (value)=>{
       const filtereditems = props.array.filter((data) => {
        return data !== value
    })
    props.handleClose(filtereditems)
} 

    return(
        <>
         {
                  props.array.map((itemv,index)=>{
                        return (
                            <>
                              <p>{itemv}</p>
                              <ToButton title="Close" onpress={()=>removeitems(itemv)}  key={index} id={index}/>
                            </>
                        )
                    }) 
                }  
        </>
    )
}


export default ListView