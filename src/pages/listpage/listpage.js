
import ToButton from '../../Components/button/button'
import Input from '../../Components/input/input'
import ListView from '../../Components/listview/listview'
import './listpage.css'

function ListPage(){
    return (
        <>
        <div className="wrapper">
            <div class="wrapper__container">
            <Input /><ToButton title='Add'/>
            </div>
            <div class="wrapper__list">
                <ListView/>
            </div>
           
        </div>
        </>
    )
}


export default ListPage