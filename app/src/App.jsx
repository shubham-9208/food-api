

import { styled } from 'styled-components';
import Foodcourt from './Components/Foodcourt';
import { useState } from 'react';


function App() {

  const [datas, setdatas] = useState(null);
  const [filtersearch, setfiltersearch] = useState(null)



  const searchengin = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setfiltersearch(null)
    }

    // TODO:
    const filterdata = datas?.filter((data) => // imp for search filter karega jo hai vhi dega (.inclides) se apne ko apne search latter se hi search karana havo
      // includes: This method checks if the lowercase version of searchValue is found anywhere within the lowercase version of data.name.
      // filter: The filter method creates a new array containing only the items for which the includes check returns true
      data.name.toLowerCase().includes(searchValue.toLowerCase()));
    setfiltersearch(filterdata)
  } //TODO:


  const foodFilterbtn = (type) => {

    if (type === "all") {
      setfiltersearch(datas)

      return
    }
    const filterdata = datas?.filter((data) =>
      data.type.toLowerCase().includes(type.toLowerCase()));
    setfiltersearch(filterdata)


  }
  return (
    <>
      <Topcon>
        <div>
          <img src="\Foody Zone.svg" alt="" />
        </div>
        <div>
          <input onChange={searchengin} className='search' type="search" placeholder='Search Food' />
        </div>

      </Topcon>
      <Buttons>
        <button className='button'
          onClick={() => foodFilterbtn('all')}
        >All</button>
        <button className='button'
          onClick={() => foodFilterbtn('breakfast')}
        >Breakfast</button>
        <button className='button'
          onClick={() => foodFilterbtn('lunch')}
        >Lunch</button>
        <button className='button'
          onClick={() => foodFilterbtn('dinner')}
        >Dinner</button>
      </Buttons>
      <Foodcourt datas={filtersearch} setdatas={setdatas} setfiltersearch={setfiltersearch} />
    </>
  )
}

export default App

const Topcon = styled.section`

background-color: #3e3a3a;
max-width: 1300px;
margin: auto;
display: flex;
justify-content: space-between;
max-height: 120px;
align-items: center;
padding: 30px;

@media (0 < width < 600px){
  flex-direction: column;
  gap: 8px;
}

.search{
  height: 40px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
}
`

const Buttons = styled.section`

display: flex;
justify-content: center;
gap: 10px;
padding: 10px;

 .button{
  
  background-color:#FF4343;
  outline: none;
  border: none;
  padding: 6px 12px;
  color: white;
  border-radius: 5px;
  gap: 12px;
  cursor: pointer;

  &:hover{
    background-color: #c61414;
  }
}
`