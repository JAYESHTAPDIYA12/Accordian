import React, { useState } from 'react';



const MyAcoordian = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>

            <div className='main_heading' style={{ marginTop: "2rem", border: "2px solid black", width: "46vw" }}>
                <h3 onClick={() => setShow(!show)}>{question} </h3>

                {show && <p className='answer' style={{ color: "black", fontSize: "20px" }}>{answer}</p>}

            </div>
        </>
    )
}

export default MyAcoordian;
