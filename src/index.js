import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Product from './components/product'
function App(){
    return (
        <> 
            <Product />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
