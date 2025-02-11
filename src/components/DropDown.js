import React, { useState,useEffect,useRef} from 'react'

function DropDown({options,selected,onSelectedChange,label}) {
    const [open,setOpen]=useState(false);
    const ref=useRef();
      useEffect(()=>{
        const onBodyClick=(event)=>{

            if(ref.current.contains(event.target)){
           return;
            }
            setOpen(false)
       }
        //we don't want the body event listener to do anything at all
         document.body.addEventListener('click',onBodyClick)
          return ()=>{
              document.body.removeEventListener('click',onBodyClick)
          }

      },[])

    const renderedOptions=options.map((option)=>{
           if(option.value===selected.value){
               return null;
           }
        return(
            <div key={option.value} className='item'
            onClick={()=>
                onSelectedChange(option)}
            > 
            {option.label}
            </div>
        )
    })

    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className="label">{label}</label>
                <div onClick={()=>setOpen(!open)}
                className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                  <i className='dropdown icon'></i>
                  <div className='text'>{selected.label}</div>
                  <div className={`menu ${open ? 'visible transition':''}`} >
                      {renderedOptions}
                      </div> 
                     
                </div>
            </div>
            <p style={{color:selected.value}}>This text is {selected.value}</p>
        </div>
    )
}

export default DropDown
