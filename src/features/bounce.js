

export function bounce(setItemPosition, transitionDuration, setTransitionDuration, finalPosition =0, bounceHeight = "0.3rem", bounceDuration = 0.15) {
    const initialTransitionDuration = transitionDuration;
    const timeToBouncePeak = transitionDuration + bounceDuration;
    const totalTime = transitionDuration + (2*bounceDuration);

    setItemPosition(finalPosition);

    //bounceUp
    setTimeout(() => {
        setItemPosition(finalPosition + bounceHeight);
        setTransitionDuration(bounceDuration);
    }, transitionDuration*1000);

    //falltoFinal
    setTimeout(() => {
        setItemPosition(finalPosition);
    }, timeToBouncePeak*1000);

    setTimeout(() => {
        setTransitionDuration(initialTransitionDuration);
    },totalTime*1000);

}