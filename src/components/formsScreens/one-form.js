import React, { useState, useEffect } from 'react';
import '../../styles/froms/one/one-form.css';


function FormOne() {

    const [caseColor, setCaseColor] = useState("white");
    
    // const [teethArray, setTeethArray] = useState([
    //     [18, 17, 16, 26, 27, 28,],
    //     [15, 14, 24, 25],
    //     [13, 12, 11, 21, 22, 23],
    //     [43, 42, 41, 31, 32, 33]
    //     [45, 44, 34, 35],
    //     [48, 47, 46, 36, 37, 38]
    // ]);

    // for (let i = 0; i <= teethArray.length; i++) {
    //     switch(i) {
    //         case 0:
    //     }
    // }
    
    const setToothColor = e => {
        e.preventDefault();
        e.target.style.backgroundColor = caseColor;
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
                    <div className="teeth-colors">
                        <p>select a color that specify your case</p>
                        <div className="square-colors">
                            <span onClick={() => setCaseColor("red")}>case one</span>
                            <span onClick={() => setCaseColor("blue")}>case two</span>
                            <span onClick={() => setCaseColor("yellow")}>case three</span>
                            <span onClick={() => setCaseColor("green")}>case four</span>
                            <span onClick={() => setCaseColor("skyblue")}>case five</span>
                            <span onClick={() => setCaseColor('navajowhite')}>case six</span>
                            <span className="eraser" onClick={() => setCaseColor('white')}>erase</span>
                        </div>
                        <div className="dents">
                            <div className="superior">
                                <div className="tooth molar">
                                    <div>
                                        <span onClick={e => setToothColor(e)}>18</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>17</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>16</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>26</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>27</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>28</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>                                  
                                </div>
                                <div className="tooth premolar">
                                    <div>
                                        <span onClick={e => setToothColor(e)}>15</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>14</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>24</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>25</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>   
                                </div>
                                <div className="tooth anterior">
                                    <div className="canine">
                                        <span onClick={e => setToothColor(e)}>13</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>12</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div className="mid">
                                        <span onClick={e => setToothColor(e)}>11</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div className="mid">
                                        <span onClick={e => setToothColor(e)}>21</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>22</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div className="canine">
                                        <span onClick={e => setToothColor(e)}>23</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                </div>
                            </div>
                            <div className="inferior">
                                <div className="tooth anterior">
                                    <div className="nin">
                                        <span onClick={e => setToothColor(e)}>43</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>42</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>41</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>31</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span>32</span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="nin">
                                        <span onClick={e => setToothColor(e)}>33</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                </div>
                                <div className="tooth premolar">
                                    <div>
                                        <span onClick={e => setToothColor(e)}>45</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>44</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>34</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>35</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div> 
                                </div>
                                <div className="tooth molar">
                                    <div>
                                        <span onClick={e => setToothColor(e)}>48</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>47</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>46</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>36</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>37</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>
                                    <div>
                                        <span onClick={e => setToothColor(e)}>38</span>
                                        <span onClick={e => setToothColor(e)}></span>
                                        <span onClick={e => setToothColor(e)}></span>
                                    </div>     
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <button>submit the form</button>
                </form>
            </div>
        </div>
    );
};

export default FormOne;
