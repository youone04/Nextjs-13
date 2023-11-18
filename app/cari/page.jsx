"use client"
import React, { useState } from 'react';
import SectionResult from './sectionResult';



function Cari() {
  const [query , setQuery] = useState("")
  const onSearch = (e) => {
    e.preventDefault()
   const inputQuery = e.target[0].value;
   setQuery(inputQuery)

  }
  return (
    <div>
        <form onSubmit={onSearch}>
            <input placeholder='cari'></input>
            <button>Cari orang</button>
        </form>
        <br/>
        <h3>hasil Pencarian: </h3>
        {query && <SectionResult query={query}/>}
    </div>
  );
}

export default Cari;