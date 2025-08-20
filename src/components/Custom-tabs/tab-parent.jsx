import Tabs from "./tabs";
import './styles.css'  

function RandomComponent() {
    return <h1>This is a random component</h1>;
}

export default function CustomTabs() {

    const tabs = [
        {
            label: "Tab 1",
            content: <div>This is the content of Tab 1</div>
        },
        {
            label: "Tab 2",
            content: <div>This is the content of Tab 2</div>
        },
        {
            label: "Tab 3",
            content: <RandomComponent />
        }
    ]

    function handleChange(currentTabIndex) {
        console.log("Current tab index changed to:", currentTabIndex);
    }

    return (
        <div>
            <Tabs tabsContent={tabs} onchange={handleChange} />
        </div>
    );
}
