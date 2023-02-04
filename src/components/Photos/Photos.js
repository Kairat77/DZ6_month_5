import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {photoAction} from "../../redux/actions";

export default function Photos({photoInfo}) {
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(photoAction(id))
    }

    return <div style={{width: '200px'}}>
        <img src={photoInfo.url} alt="#" style={{width: '200px'}}/>
        <Link to={`/${photoInfo.id}`} onClick={() => handleClick(photoInfo.id)} style={{padding: '5px', borderRadius: '10px', textDecoration: 'none', background: 'black', color: 'white'}}>Open</Link>
        <p>----------------------------</p>
    </div>
}