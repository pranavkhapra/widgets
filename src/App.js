import React,{useState} from 'react'
// import Accordion from './components/Accordion'
// import Search from './components/Search'
import DropDown from './components/DropDown'
// const items=[
//   { 
//     id:1,
//     title:'What is React',
//     content:'React is a front end javascript library'
//   },
//   {
//     id:2,
//     title:'What is React',
//     content:' Suspendisse eleifend elit vel hendrerit posuere. Integer ac libero eget sapien aliquam hendrerit. Donec imperdiet eu ipsum eu rhoncus. Curabitur imperdiet, nulla sed sollicitudin ullamcorper, ex lorem imperdiet tortor, nec sollicitudin dui magna nec risus. Curabitur rutrum, lorem in efficitur egestas, quam tellus aliquet dolor, a faucibus justo neque vitae erat. Mauris eget sodales turpis. Sed rutrum nulla eget urna cursus, vel ullamcorper ipsum cursus. Duis quis leo iaculis, semper mauris eu, vulputate mauris. Maecenas maximus sem ut pulvinar commodo. Sed fringilla nunc sapien, venenatis varius purus lacinia id.  '
//   },
//   {
//     id:3,
//     title:'What is React',
//   content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac libero id egestas. In vitae purus tempor, hendrerit magna id, elementum ligula. Aliquam cursus a velit posuere imperdiet. Phasellus vel sollicitudin felis. Mauris venenatis vehicula ante, ac scelerisque magna egestas mollis. Nulla sit amet ipsum aliquam, ultricies dolor at, egestas sem. Vivamus ornare aliquam turpis in sagittis. Suspendisse cursus massa vitae urna vehicula, in pharetra lectus cursus. Maecenas a pharetra nisi, vitae feugiat quam. Pellentesque ac felis nec ex tristique vehicula quis in mi. Morbi vitae justo aliquam, fringilla nisi at, porttitor est. Sed arcu turpis, bibendum faucibus euismod nec, condimentum in sapien. Duis tristique elit nec mi accumsan volutpat. Proin pharetra leo eu tellus eleifend eleifend. Duis bibendum ante eget nulla tempus sodales. '
// }]
    const options=[{
      label:'The Color Red',
      value:'red'
    },{
      label:'The Color Green',
      value:'green'
    },{
      label:'The Color Blue',
      value:'blue'
    }]

function App() {
  const [selected,setSelected]=useState(options[0])
  const [showDropDown,setShowDropDown]=useState(true)
  return (
    <div>

      {/* <Accordion items={items}/> */}
      <button onClick={()=> setShowDropDown(!showDropDown)}>
        Toggle DropDown
      </button>
      {showDropDown?
      <DropDown selected={selected}  
      onSelectedChange={setSelected}
      options={options}/>
      :null
}
      {/* <Search/> */}
    </div>
  )
}

export default App
