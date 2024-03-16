
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'
import WantToCook from './components/WantToCook/WantToCook'

function App() {
  const handleWantToCookBtn = (card) => {
    console.log(card);
  }

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
        <WantToCook></WantToCook>
      </div>
    </>
  )
}

export default App
