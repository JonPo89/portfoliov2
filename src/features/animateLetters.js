import { useState, useEffect } from "react";

const useAnimatedLetters = (phrase, reset, initialTop = 0, finalTop = -50, initialOpacity = 1, finalOpacity = 0, colourA="#ffffff00", colourB="var(--bright-colour)", font=`"Lilita One", sans-serif`, lineColour="black", delay = 50, animationDuration = 0.5) => {
    const [letters, setLetters] = useState([]);
    
    useEffect(() => {
        const initialLetters = phrase.split("").map((letter, index) => ({
            char: letter,
            top: initialTop,
            id: index,
            opacity: initialOpacity,
        }));
        setLetters(initialLetters);

        initialLetters.forEach((_, index) => {
            setTimeout(() => {
                setLetters(prevLetters => 
                    prevLetters.map((letter, i) => 
                        i === index ? { ...letter, top: finalTop, opacity: finalOpacity } : letter
                    )
                );
            }, delay * (index + 1));
        });
    }, [phrase, delay, initialTop, finalTop, reset, finalOpacity, initialOpacity]);

    const renderLetters = () => {
        return letters.map(letter => (
            <span key={letter.id} style={{ position: 'relative', left: `${letter.top}px`, opacity: `${letter.opacity}`, transition: `all ${animationDuration}s`, color:`${letter.id > (letters.length-3) ? colourA : colourB}`, fontFamily: font, webkitTextStrokeColor: lineColour}}>
                {letter.char}
            </span>
        ));
    };

    return renderLetters;
};

export default useAnimatedLetters;
