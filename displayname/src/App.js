import React, { useEffect, useState } from 'react';
import './App.css';

function  Displayname() {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [getfirst, setGetFirst] = useState("");
    const [getlast, setGetLast] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() !== "" || lastname.trim() !== "") {
            setIsSubmitted(true);
            setGetFirst(name);
            setGetLast(lastname);
        } else {
            setIsSubmitted(false);
        }
    }

    return (
        <div>
            <h2>Full Name Display</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First name :</label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Last name :</label>
                    <input
                        type='text'
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>

            <div>
                {isSubmitted && (name.trim() !== "" || lastname.trim() !== "") ? (
                    <div>Full Name: {getfirst} {getlast}</div>
                ) : null}
            </div>
        </div>
    );
}

export default Displayname;
