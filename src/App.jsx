import './App.css'
import Accordeon from './components/Accordeon'
import RandomColor from './components/Random-color'
import StarRating from './components/Star-rating'
function App() {

  return (
    <>
    <div>
       <Accordeon /> 
       <RandomColor /> 
       <StarRating noOfStars={10} />
    </div>
      
    </>
  )
}

export default App
