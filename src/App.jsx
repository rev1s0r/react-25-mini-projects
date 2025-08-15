import './App.css'
import Accordeon from './components/Accordeon'
import RandomColor from './components/Random-color'
import StarRating from './components/Star-rating'
import ImageSlider from './components/Image-slider'


function App() {

  return (
    <>
    <div>
       <Accordeon /> 
       <RandomColor /> 
       <StarRating noOfStars={10} />
       <ImageSlider 
       url="https://picsum.photos/v2/list" 
       page={1} 
       limit={10} 
       />
    </div>
      
    </>
  )
}

export default App
