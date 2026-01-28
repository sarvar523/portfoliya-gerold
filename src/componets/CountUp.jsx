import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 1000, suffix = '', decimals = 0 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const visibleRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !visibleRef.current) {
                    visibleRef.current = true;

                    let startTime = null;
                    const startValue = 0;

                    const animate = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;

                        if (progress < duration) {
                            const nextCount = startValue + (end - startValue) * (progress / duration);
                            setCount(nextCount);
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [end, duration]);

    return (
        <span ref={countRef}>
            {count.toFixed(decimals)}{suffix}
        </span>
    );
};

export default CountUp;
