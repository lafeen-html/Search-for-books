import React from 'react';
import {GrClose} from "react-icons/gr";

const Book = ({show, item, onClose}) => {
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><GrClose size = {26}/></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h3>{item.volumeInfo.title}</h3>
                            <h4>{item.volumeInfo.authors}</h4>
                            <h5>{item.volumeInfo.description}</h5>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Book;