import ToButton from "../button/button"


function ListView(props){
    

  const removeitems = (value)=>{
       console.log("removeitems function is call ",props,value)
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