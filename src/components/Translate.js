import React,{useState} from 'react'
import DropDown from './DropDown'
import Convert from './Convert'

const options=[{
    label:'Afrikaans',
    value: 'af'
},
{
    label:'arabic',
    value: 'ar'
},{
    label:'Hindi',
    value: 'hi'

}


]


function Translate() {
    const [language,setLanguage]=useState(options[0])
   const [text,setText]=useState('')
    return (
        <div>
            <div className='ui form'>
            <div className='field'>
                <label>Enter Text</label>
            <input 
            type='text'
            value={text}
            onChange={(event)=>{setText(event.target.value)}}
            />
            </div>
            </div>
            
            <DropDown 
            label='Select a language'
            options={options} selected={language} onSelectedChange={setLanguage}/>
             <hr/>
             <h3 className='ui header'>Output</h3>
             <Convert text={text} language={language}/>
        </div>
    )
}

export default Translate
