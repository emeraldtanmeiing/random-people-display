import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from './component/Card';
import TextField from '@material-ui/core/TextField';
import './component/Style.css';

function App() {
  const [people, setPeople] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  //Fetch Data
  const fetchData = async () => {

    const url = "https://api.randomuser.me/?results=200"
    const response = await fetch(url)
    const data = await response.json()

    setPeople(data.results);
    setCurrentPage(1)
  };

  // Pagination
  const peoplePerPage = 8
  const startPeople = pageNumber * peoplePerPage

  const displayPeople = people.slice(startPeople, startPeople + peoplePerPage).map(person => (
    <Card person = {person} key={`person-id-${person.login.uuid}`}/>
  )
  )

  const pageCount = Math.ceil(people.length / peoplePerPage) //roundup
  const changePage = ({selected}) => {
    setPageNumber(selected);
    console.log("selected" + selected)
    setCurrentPage(selected+1)

  };

  // Page Input
  const handleChange = e =>{
    setPageNumber(e.target.value-1)
    setCurrentPage(e.target.value)
  }

  // Render
  return (
    <div className="App">
      <h1>Random People</h1>
      <h2>Fetch people list from an API and display</h2>
      <h5>API Link: https://randomuser.me</h5>

      {/* Fetch data*/}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data*/}
      <div className="people-list">

       {displayPeople}
       

       <ReactPaginate 
        previousLabel = {"Previous"}
        nextLabel = {"Next"}
        pageCount = {pageCount}
        onPageChange = {changePage}
        containerClassName = {"page-button"}
        previousLinkClassName = {"previous-button"}
        nextLinkClassName = {"next-button"}
        activeLinkClassName = {"page-active"}
        activeClassName = {"page-active"}
        forcePage={currentPage-1}
       />

        <div className="page-input">
          <TextField
            id="page-input-text"
            type="number"
            value={currentPage}
            InputProps={{ inputProps: { max: pageCount, min: 1 } }}
            onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();} }} 
            onChange={(e) => e.target.value <= pageCount && e.target.value > 0? handleChange(e) : null}>
            {currentPage}
            </TextField>
          <span>/</span>
          <span>{pageCount}</span>
          {/* <div className="has-error">{error.length > 0? <div>{error}</div> :  null}</div> */}
        </div>
      </div>

    </div>
  );
}

export default App



