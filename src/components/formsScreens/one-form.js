import React, { useState } from 'react';
import '../../styles/froms/one/one-form.css'


function FormOne() {

    const [caseColor, setCaseColor] = useState("white");
    const selectCaseColor = color => setCaseColor(color);

    const [teethArray, setTeehthArray] = useState([]);

    for (let i = 0; i <= 32; i++) {
        teethArray.push(
            <div key={i}>
                <span>{i}</span>
                <span></span>
                <span></span>
            </div>
        );
    }

    const setToothColor = (color, toothIndex) => {
        console.log('get out of my way');
    };

    return (
        <div className="one">
            <h1>form one</h1>
            <div>
                <h2>what's new</h2>
                <form>
                    <label>choose option from this that you see listed below</label>
                    <select name="options">
                        <option>option one</option>
                        <option>option two</option>
                        <option>option three</option>
                        <option>option four</option>
                    </select>
                    <label>what is the Level you think most fits your need without exception</label>
                    <select name="level">
                        <option>level one</option>
                        <option>level two</option>
                        <option>level three</option>
                        <option>level four</option>
                        <option>level five</option>
                    </select>
                    <label>Description:</label>
                    <input type="text" maxLength="125" name="description"/>
                    <label>do feel some daziness from time to time or just feeling good all the time</label>
                    <textarea />
                    <label>Date</label>
                    <input type="date" name="date" />
                    <div className="teeth">
                        <p>select a color that specify your case</p>
                        <div className="colors">
                            <span onClick={() => setCaseColor("red")}>case one</span>
                            <span onClick={() => setCaseColor("blue")}>case two</span>
                            <span onClick={() => setCaseColor("yellow")}>case three</span>
                            <span onClick={() => setCaseColor("skyblue")}>case four</span>
                            <span onClick={() => setCaseColor("navajowhite")}>case five</span>
                            <span>case six</span>
                            <span className="eraser">erase</span>
                        </div>
                        <div className="dents">
                            {teethArray}
                        </div>
                    </div>
                    <button>submit the form</button>
                </form>
            </div>
        </div>
    );
};

export default FormOne;
