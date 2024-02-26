import React, { useState, useEffect } from 'react';



function TypewriterLoop(props) {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % props.text.length);
        }, props.speed);
        return () => clearInterval(interval);
    }, [props.speed, props.text.length]);
    return <div>{props.text.substring(0, index)}</div>;

}


export default TypewriterLoop;