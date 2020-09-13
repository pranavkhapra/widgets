import React, { useState,Fragment } from 'react'
function Accordion({items}) {

    const [activeIndex,setActiveIndex]=useState(null)

    const onTitleClick=(index)=>{
        setActiveIndex(index);
    }
    const renderedList= items.map((item,index)=>{
        const active = index === activeIndex ? 'active' : ''
      

        return (
        <Fragment key={item.id}>
            <div className={`title ${active}`} onClick={()=>onTitleClick(index)}>
                <i className ='dropdown icon'></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </Fragment>
        
        )
    })
    return (
        <div className='ui styled accordion'>
            {renderedList}
           
        </div>
    )
}

export default Accordion

