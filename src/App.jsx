
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'

import Cook from './components/Cook/Cook'

function App() {

  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCookBtn = (card) => {
    const newCook = [...wantToCook, card];
    const isExist = wantToCook.find(item => item.recipe_id === card.recipe_id);
    if(!isExist){
      setWantToCook(newCook)
    }
    else{
      return alert('Item is exist')
    }
  }
  // console.log(wantToCook)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='mt-24'>
        <h2 className="text-4xl font-semibold text-center mt-0">Our Recipes</h2>
        <p className="text-center">Indulge in diverse recipes, clear instructions, and enticing visuals. Join our culinary community to elevate your cooking skills effortlessly.</p>
      </div>
      <div className='flex flex-col md:flex-row gap-6 max-w-[1320px] mx-auto'>
        <Recipes handleWantToCookBtn={handleWantToCookBtn}></Recipes>
        {/* <WantToCook wantToCook={wantToCook}></WantToCook> */}
        <Cook wantToCook={wantToCook}></Cook>
      </div>
    </>
  )
}

export default App
