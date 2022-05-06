import { useState, useEffect } from "react";
import "./ManualTimer.css"

export const ManualTimer = () => {
    const [ min, setMin ] = useState(null);
    const [ sec, setSec ] = useState(null);
    const [ result, setResult ] = useState(null);
    const [ print, setPrint ] = useState(false);

    var id;

    useEffect(() => {
        id = setInterval(() => {
            setSec((prevValue) => {
                if (prevValue == 0 && min == 0) {
                    clearInterval(id);
                    setResult("Time is Up....");
                    return 0;
                }
                if (prevValue == 0) {
                    setMin(min - 1);
                }
                if (min >= 1 && prevValue == 0) {
                    setSec(59);
                }
                if (min == null) {
                    setMin(0);
                }

                return prevValue - 1;
            });
        }, 1000);

        return () => {
            clearInterval(id);
        };
    });


    return (
        <div className="back">
            <h1>Timer</h1>
            <input
                type="number"
                placeholder="Enter the Min"
                className="inp1"
                onChange={ (e) => {
                    setMin(e.target.value);
                } }
            />{ " " }
            :
            <input
                type="number"
                placeholder="Enter the Sec"
                className="inp1"
                onChange={ (e) => {
                    setSec(e.target.value);
                } }
            />
            <button
                onClick={ () => {
                    setPrint(true);
                } }
                className="sub"
            >
                START
            </button>
            { print ? (
                <h2>
                    { min < 10 ? "0" + min : min == null ? 0 : min } :{ " " }
                    { sec < 10 ? "0" + sec : sec }
                    <h3 className="res">{ result }</h3>
                </h2>
            ) : null }
            <div className="D1">
                <button
                    onClick={ () => {
                        clearInterval(id);
                    } }
                >
                    Stop
                </button>
                <button
                    onClick={ () => {
                        clearInterval(0);
                        setMin(0);
                        setSec(0);
                        setResult("Start Again...");
                    } }
                >
                    Reset
                </button>
                <button
                    onClick={ () => {
                        id = setInterval(() => {
                            setSec((prevValue) => {
                                if (prevValue == 0 && min == 0) {
                                    clearInterval(id);
                                    return 0;
                                }
                                if (prevValue == 0) {
                                    setMin(min - 1);
                                }
                                if (min >= 1 && prevValue == 0) {
                                    setSec(59);
                                }

                                return prevValue - 1;
                            });
                        }, 1000);
                    } }
                >
                    Start
                </button>
            </div>
        </div>
    );
};
