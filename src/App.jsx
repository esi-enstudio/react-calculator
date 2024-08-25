import Display from "./components/display.jsx";
import Buttons from "./components/buttons.jsx";
import "preline/preline";
import {useState} from "react";

function App() {

    const [display, setDisplay] = useState('');

    const buttonClick = (e) => {
        const data = e.target.innerText;

        if ( data === 'C' )
        {
            setDisplay('')
        }else if ( data === '=' )
        {
            setDisplay( eval( display ) );
        }else if ( data === 'Del' )
        {
            setDisplay( display.slice(0, -1) );
        }else {
            setDisplay( display + data );
        }
    }

    return (
    <div className="dark:bg-gray-900 md:max-w-xl mx-auto text-center">

        <h1 className="text-6xl dark:text-white text-gray-800">Calculator</h1>

        <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-4 mt-10">
            <Display display={display}/>
            <Buttons buttonClick={buttonClick}/>
        </div>

    </div>
  )
}

export default App
