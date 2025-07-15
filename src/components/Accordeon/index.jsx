import data from "./data";
import { useState } from "react";
import "./styles.css";

export default function Accordeon() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);


        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(getCurrentId);
        } else {
            copyMultiple.splice(findIndexOfCurrentId, 1);
        }
        setMultiple(copyMultiple);
    }

    return (
        <div>
            <div className="wrapper">
                <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{enableMultiSelection ? "Disable multi selection" : "Enable multi selection"}</button>
                <div className="accordeon">
                    {
                        data && data.length > 0 ?
                            data.map(dataItem => <div key={dataItem.id} className="item">
                                <div
                                    onClick={
                                        enableMultiSelection
                                            ? () => handleMultiSelection(dataItem.id)
                                            : () => handleSingleSelection(dataItem.id)
                                    } className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelection
                                        ? multiple.indexOf(dataItem.id) !== -1 && 
                                        <div className="content">{dataItem.answer}</div>
                                        : selected === dataItem.id && <div className="content">{dataItem.answer}</div>

                                }
                                {/* {
                                    selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1
                                        ? <div className="content">{dataItem.answer}</div>
                                        : null
                                } */}

                            </div>)
                            : <div>no data present</div>
                    }
                </div>
            </div>
        </div>
    );
}

