import './App.css';
import PhotosPage from "./pages/photosPage/PhotosPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Photo from "./components/photo/Photo";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PhotosPage/>}/>
                <Route path='/:id' element={<Photo/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;