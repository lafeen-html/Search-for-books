import React, { useState } from "react";
import Books from "./Books";
import axios from "axios";
import { GrSearch } from "react-icons/gr";
import { FormSelect } from 'react-bootstrap';
import { CATEGORY_SELECT_OPTIONS, SORT_SELECT_OPTIONS } from './Form';


const Main = () => {
  const initialValues = { searchTerm: '', category: '', page: 0, sort: 'Relevance' };
  const [values, setValues] = useState(initialValues);
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const handleOnChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const searchBooks = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=30')
        .then(result => setData(result.data.items))
        .catch(error => console.log(error))
    }
  }
  return (
    <>
      <div className="header">
        <div className="search-form">
          <h1>Search for books</h1>

          <div className="search-main">
            <div className="search">
              <input type="text" placeholder="Search books in Google..." value={search} onChange={e => setSearch(e.target.value)} onKeyDown={searchBooks} />
              <button type='submit' onClick={searchBooks}><GrSearch size={26} /></button>
            </div>

            <div className="search-filters">
              <div className='categories'>Categories</div>
              <FormSelect onChange={handleOnChange} value={values.category} name='category' size='sm'>
                {CATEGORY_SELECT_OPTIONS.map(({ name, value }, index) => (
                  <option key={index} value={value}>
                    {name}
                  </option>
                ))}
              </FormSelect>

              <div className='sort'>Sorting By</div>
              <FormSelect onChange={handleOnChange} value={values.sort} name='sort' size='sm'>
                {SORT_SELECT_OPTIONS.map(({ name, value }, index) => (
                  <option key={index} value={value}>
                    {name}
                  </option>
                ))}
              </FormSelect>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {<Books book={bookData} />}
      </div>
    </>
  )
}

export default Main;