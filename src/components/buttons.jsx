function Buttons({ buttonClick }) {
    return (
        <div className="grid grid-cols-4 gap-1 text-white py-4">
                <button onClick={buttonClick} className="dark:bg-gray-800 dark:text-white bg-gray-100 border dark:border-gray-700 text-gray-800 p-4 rounded-md">%</button>
                <button onClick={buttonClick} className="dark:bg-gray-800 dark:text-white bg-gray-100 border dark:border-gray-700 text-gray-800 p-4 rounded-md">/</button>
                <button onClick={buttonClick} className="dark:bg-gray-800 dark:text-white bg-gray-100 border dark:border-gray-700 text-gray-800 p-4 rounded-md">C</button>
                <button onClick={buttonClick} className="dark:bg-gray-800 dark:text-white bg-gray-100 border dark:border-gray-700 text-gray-800 p-4 flex justify-center items-center rounded-md">
                    Del
                </button>

                <button onClick={buttonClick} className="dark:bg-gray-600 dark:text-white bg-white border dark:border-gray-500 text-gray-800 p-4 rounded-md">7</button>
                <button onClick={buttonClick} className="dark:bg-gray-600 dark:text-white bg-white border dark:border-gray-500 text-gray-800 p-4 rounded-md">8</button>
                <button onClick={buttonClick} className="dark:bg-gray-600 dark:text-white bg-white border dark:border-gray-500 text-gray-800 p-4 rounded-md">9</button>
                <button onClick={buttonClick} className="dark:bg-gray-800 dark:text-white bg-gray-100 border dark:border-gray-700 text-gray-800 text-4xl flex justify-center items-center rounded-md">
                    *
                </button>

                <button onClick={buttonClick} className="dark:bg-gray-600 dark:text-white bg-white border dark:border-gray-500 text-gray-800 p-4 rounded-md">4</button>
                <button onClick={buttonClick} className="dark:bg-gray-600 dark:text-white bg-white border dark:border-gray-500 text-gray-800 p-4 rounded-md">5</button>
                <button onClick={buttonClick} className="dark:bg-gray-600 dark:text-white bg-white border dark:border-gray-500 text-gray-800 p-4 rounded-md">6</button>
                <button onClick={buttonClick} className="dark:bg-gray-800 dark:text-white bg-gray-100 border dark:border-gray-700 text-gray-800 text-5xl flex justify-center items-center rounded-md">
                    -
                </button>

                <button onClick={buttonClick} className="dark:bg-gray-600 dark:text-white bg-white border dark:border-gray-500 text-gray-800 p-4 rounded-md">1</button>
                <button onClick={buttonClick} className="dark:bg-gray-600 dark:text-white bg-white border dark:border-gray-500 text-gray-800 p-4 rounded-md">2</button>
                <button onClick={buttonClick} className="dark:bg-gray-600 dark:text-white bg-white border dark:border-gray-500 text-gray-800 p-4 rounded-md">3</button>
                <button onClick={buttonClick} className="dark:bg-gray-800 dark:text-white bg-gray-100 border dark:border-gray-700 text-gray-800 text-3xl flex justify-center items-center rounded-md">
                    +
                </button>

                <button onClick={buttonClick} className="dark:bg-gray-600 dark:text-white bg-white border dark:border-gray-500 text-gray-800 p-4 flex justify-center items-center rounded-md">00</button>
                <button onClick={buttonClick} className="dark:bg-gray-600 dark:text-white bg-white border dark:border-gray-500 text-gray-800 p-4 rounded-md">0</button>
                <button onClick={buttonClick} className="dark:bg-gray-600 dark:text-white bg-white border dark:border-gray-500 text-gray-800 p-4 rounded-md">.</button>
                <button onClick={buttonClick} className="dark:bg-gray-800 dark:text-white bg-gray-100 border dark:border-gray-700 text-gray-800 text-3xl flex justify-center items-center rounded-md">
                    =
                </button>
            </div>
    )
}

export default Buttons
