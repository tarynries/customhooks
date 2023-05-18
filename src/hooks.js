import { useState } from "react";


function useFlip() {
    const [isFlipped, setIsFlipped] = useState(true);

    const toggleFlip = () => {
        setIsFlipped(!isFlipped)
    };

    return [isFlipped, toggleFlip];

}


export default useFlip;
