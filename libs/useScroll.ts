import { useEffect, useState } from "react";
export default function useScroll() {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        if (position < 100 || scrollPosition == 0) {
            setScrollPosition(position);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return scrollPosition
}