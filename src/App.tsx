import './App.css'
import openAuthPopup from './devflikrauth/lib/openAuthPopup'
import { HeaderAvatar } from 'flikrui';
import { useState } from 'react';

function App() {
    const openPopup = openAuthPopup();
    const [status, setStatus] = useState("Stable");

    return (
        <>
            <div className="card">
                <button onClick={() => {
                    setStatus("Opening");
                    openPopup().then((user) => {
                        setStatus(JSON.stringify(user));
                    }).catch((error) => {
                        console.error(error);
                        setStatus(JSON.stringify(error));
                    })
                }}>Open Popup</button>
            </div>
            <p className="read-the-docs"><HeaderAvatar /></p>
            <p>{status}</p>
        </>
    )
}

export default App
