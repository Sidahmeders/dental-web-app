import React from 'react';
import '../../styles/froms/one/one-form.css'


function FormOne() {

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
                            <span>case one</span>
                            <span>case two</span>
                            <span>case three</span>
                            <span>case four</span>
                            <span>case five</span>
                            <span>case six</span>
                            <span className="eraser">erase</span>
                        </div>
                        <div className="dents">
                            <div>
                                <span>1</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>2</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>3</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>4</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>5</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>6</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>7</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>8</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>9</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>10</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>11</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>12</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>13</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>14</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>15</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>16</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>17</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>18</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>19</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>20</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>21</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>22</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>23</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>24</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>25</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>26</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>27</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>28</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>29</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>30</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>31</span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <span>32</span>
                                <span></span>
                                <span></span>
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
