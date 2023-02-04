import React, {Component} from "react";
import {connect} from "react-redux";
import {getPhotosAction} from "../../redux/actions";
import Photo from "../../components/photo/Photo";


class PhotosPageClass extends Component {

    constructor(props) {
        super(props);
    }

    getPhotos = () => {
        this.props.getPhotosAction()
    }

    render() {
        return (
            <>
                <button onClick={this.getPhotos}>get photos</button>

                {
                    this.props.photos.slice(0, 10).map(photo => <Photo photoInfo={photo}/>)
                }
            </>
        )
    }
}

const mapDispatchToProps = {
    getPhotosAction
}

const mapStateToProps = state => {
    return {
        photos: state.photosReducer.photos
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (PhotosPageClass)