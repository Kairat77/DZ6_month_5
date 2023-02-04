
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";



export default function Photo(){
    const {photo} = useSelector(state => state.photoReducer)
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    return<>
        <h2>Photo</h2>
        <button onClick={back}>Back</button>
        <div>
            <img src={photo.url} alt="#"/>
            <h2>{photo.title}</h2>
        </div>

    </>
}