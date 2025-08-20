import "./App.css";
import Accordeon from "./components/Accordeon";
import RandomColor from "./components/Random-color";
import StarRating from "./components/Star-rating";
import ImageSlider from "./components/Image-slider";
import LoadMoreData from "./components/Load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data.js";
import QrCodeGenerator from "./components/Qr-code-generator/index.jsx";

function App() {
  return (
    <>
      <div>
        {/* <section className="component-section">
          <Accordeon />
        </section>
        <section className="component-section">
          <RandomColor />
        </section>
        <section className="component-section">
          <StarRating noOfStars={10} />
        </section>
        <section className="component-section">
          <ImageSlider
            url="https://picsum.photos/v2/list"
            page={1}
            limit={10}
          />
        </section> 
        <section className="component-section">
          <LoadMoreData />
        </section> */}
        {/* <section className="component-section">
          <TreeView menus={data} />
        </section> */}
        <section className="component-section">
          <QrCodeGenerator />
        </section>
      </div>
    </>
  );
}

export default App;
