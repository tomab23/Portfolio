import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollPage() {
    const { pathname } = useLocation();

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'instant'
        }, 500)

    }, [pathname]);

    return null;
}