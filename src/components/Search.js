import React, { useState,useEffect } from 'react'
import axios from 'axios'
function Search() {
    const [searchText,setSearchText]= useState('default ')
    const [debouncedText,setDebouncedText]=useState(searchText)
    const [results,setResults]=useState([])

     
    useEffect(()=>{
        const timerId=setTimeout(()=>{
            setDebouncedText(searchText)
        },1000)


        return ()=>{
            clearTimeout(timerId)
        }
    },[searchText])
      
     useEffect(()=>{
        const search = async ()=>{
            const response = await axios.get('https://en.wikipedia.org/w/api.php', {
                       params: {
                         action: 'query',
                         list: 'search',
                         origin: '*',
                         format: 'json',
                         srsearch: debouncedText,
                       },
               }
                   )
                           setResults(response.data.query.search)
               }
               search()
     },[debouncedText])


    // useEffect(()=>{
    //     const search = async ()=>{
    //  const response = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             params: {
    //               action: 'query',
    //               list: 'search',
    //               origin: '*',
    //               format: 'json',
    //               srsearch: searchText,
    //             },
    //     }
    //         )
    //         setResults(response.data.query.search)
    //     }
    //     if(searchText && ! results.length){
    //         search()
    //     }
    //     else{
    //         const timeoutId=setTimeout(() => {
    //             if(searchText){
    //                 search()
    //                 }
    //         }, 500);
       
     

    //     return ()=>{
    //         clearTimeout(timeoutId)//we are cancelling the timer until the user stop typing for 500ms
    //     }
    // } 
    // },[searchText,results.length])
 



   const onTextChange=(event)=>{
        setSearchText(event.target.value)
   }

    const renderedResults=results.map((result)=>{
      return ( <div key={result.pageid} className='item'>
           <div className='right floated content'>
               <a 
               href={`https://en.wikipedia.org?curid=${result.pageid}`}
               className='ui button'>Go</a>
           </div>
            <div className='content'>
               <div className='header'>
                   {result.title}
               </div>
               <span dangerouslySetInnerHTML={{
                   __html:result.snippet
               }}></span>
            </div>
        </div>
      )
    })
    return (
        <div>
        <div className='ui form'>
            <div className='field'>
            <label>Enter Search Text</label>
            <input 
            className='input'
            type='text'
            value={searchText}
            onChange={onTextChange}
            />
            </div>
            </div>
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
    )
}

export default Search
