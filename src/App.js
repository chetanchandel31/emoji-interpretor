import React from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

function App () {

    return (
        <div>
            <Navigation />
            <HomePage />
            <div>
                <h1>Q.T.'s</h1>
                <ul>
                    <li>boa</li>
                    <li>robin</li>
                </ul>
            </div>
        </div>
    )
}

export default App;