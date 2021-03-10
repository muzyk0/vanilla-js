import React from 'react';
import './App.css';
import {splitIntoWords} from './01/01';

const sentens = 'hello my friends!';
const result = splitIntoWords(sentens)
console.log(result[0] === 'hello')
console.log(result[1] === 'my')
console.log(result[2] === 'friend')


function App() {
    return (
        <div className="App">

        </div>
    );
}

export default App;
