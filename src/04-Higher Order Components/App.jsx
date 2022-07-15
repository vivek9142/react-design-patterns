//import PrintApp from "./01-PrintingProps/PrintApp";
// import { LoadApp } from "./02-Loading data/LoadApp";
// import { LoadApp } from "./03-Modifying data/LoadApp";
import { LoadApp } from "./04-HOC-improvement/LoadApp";

const App = () => {
    return(
        <div>
            <h1>
            04 - Higher Order Components
        </h1>

        {/* <PrintApp/> */}
        <LoadApp/>
        {/* <ModalApp/> */}
        {/* <BoardingApp1/> */}
        {/* <BoardingApp2/> */}
        </div>
    )
}

export default App;