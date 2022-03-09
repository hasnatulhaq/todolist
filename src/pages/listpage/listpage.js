import { useState } from 'react'
import ToButton from '../../Components/button/button'
import Input from '../../Components/input/input'
import ListView from '../../Components/listview/listview'
import './listpage.css'

function ListPage(){
    const [inputtext , setInputtext] = useState()
    const [listdata , setListData] = useState([])

    const handleInput = (e)=>{
         setInputtext(e.target.value)
    } 
    

    const listItem = ()=>{
        console.log("line 17")
        setListData((oItems)=>{
                return [...oItems,inputtext]
        })
        setInputtext("")
   } 

    return (
        <>
        <div className="wrapper">
            <div className="wrapper__container">
            <Input title="For todo list" type="text" value={inputtext} handlefunc={handleInput}/>
            <ToButton title='Add' onpress={listItem}/>
            </div>
            <div className="wrapper__list">
                <ListView label={inputtext} array={listdata} handleClose={setListData}/>
                
            </div>
           
        </div>
        </>
    )
}


export default ListPage



// <ul>
//<li>
//<p>{inputtext}</p>
//<ToButton title="Close" />
//</li>
//</ul>