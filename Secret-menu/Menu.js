import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div style={{ margin: '0', padding: '0', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ padding: '2rem', borderRadius: '5px', boxShadow: '0 0 10px 0px grey', width: '500px', height: '200px', backgroundColor: 'white', zIndex: '999', position: 'absolute' }}>
                <nav>
                    <a href="page1.html" style={{ textDecoration: 'none', fontSize: '20px', margin: '0 1rem', padding: '0.5rem 1rem', color: 'black' }}>Page 1</a>
                    <a href="page2.html" style={{ textDecoration: 'none', fontSize: '20px', margin: '0 1rem', padding: '0.5rem 1rem', color: 'black' }}>Page 2</a>
                    <a href="page3.html" style={{ textDecoration: 'none', fontSize: '20px', margin: '0 1rem', padding: '0.5rem 1rem', color: 'black' }}>Page 3</a>
                </nav>
                <button style={{ backgroundColor: '#f1c40f', color: 'white', borderRadius: '10px', padding: '1rem', margin: '0 1rem', fontSize: '20px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }} onClick={() => window.location.assign('page1.html')}>Pink Start Button</button>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
