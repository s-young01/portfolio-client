import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollTop({setSitePath}) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        setSitePath(pathname);
    }, [pathname, setSitePath]);

    return null;
}