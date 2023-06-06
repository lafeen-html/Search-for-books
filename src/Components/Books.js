import React from "react";
import { useState} from "react";
import Book from "./Book";

const Books = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    if (thumbnail !== undefined) {
                        return (
                            <>
                                <div className="card" onClick={() => { setShow(true); setItem(item) }}>
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="categories">{item.volumeInfo.categories}</h3>
                                        <h3 className="title">{item.volumeInfo.title}</h3>
                                        <h3 className="authors">{item.volumeInfo.authors}</h3>
                                    </div>
                                </div>
                                <Book show={show} item={bookItem} onClose={() => setShow(false)} />
                            </>
                            
                        )
                    }

                })
            }

        </>
    )
}
export default Books;