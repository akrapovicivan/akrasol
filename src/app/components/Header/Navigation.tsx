"use client"

import Link from "next/link";
import styles from "./navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation({ isSidebar = false,  closeSidebar }: { isSidebar?: boolean, closeSidebar?: () => void }) {
    const pathname = usePathname();


    const navigation = [
        {
            name: "Kalkulator troškova",
            href: "/cost-calculator",
        },
        {
            name: "Kontakt",
            href: "/contact",
        },
        {
            name: "Česta pitanja",
            href: "/faq",
        },
    ];

    const handleLinkClick = () => {
        if (isSidebar) {
            if(closeSidebar)
                closeSidebar();
        }
    };

    return (
        <nav className={`h-full ${isSidebar ? "mt-4" : "text-black"}`}>
            <ul className={`h-full ${isSidebar ? "flex flex-col gap-y-2" : "flex"}`}>
                {navigation.map((item) => {
                    let isActive = false;
                    if (item.subroutes?.length)
                        isActive = !!item.subroutes.find(sub => pathname.startsWith(sub.href));
                    else 
                        isActive = pathname.startsWith(item.href)
                    
                    return (
                        <li key={item.name} className={`${!isSidebar ? "h-full" : "py-4"} relative group whitespace-nowrap hover:bg-blue-600 hover:text-white ${
                                    isActive
                                        ? "bg-blue-600 text-white"
                                        : ""}`}>
                            <Link
                                href={item.href}
                                onClick={handleLinkClick}
                                className={`flex items-center ${styles['nav-route']} block ${
                                    isSidebar
                                        ? "h-8 px-6 text-lg font-bold"
                                        : "h-full transition duration-200 p-8"
                                }`}
                            >
                                {item.name}
                            </Link>

                            {item.subroutes && (
                                <ul
                                    className={`${styles['nav-subroute']} z-50 ${
                                        isSidebar
                                            ? ""
                                            : "absolute left-0 mt-2 min-w-64 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    }`}
                                >
                                    {item.subroutes.map((subitem) => 
                                    {
                                        const isActive = pathname.startsWith(subitem.href);
                                        return (
                                            <li key={subitem.name}>
                                                <Link
                                                    href={subitem.href}
                                                    onClick={handleLinkClick}
                                                    className={`block px-8 ${
                                                        isSidebar
                                                            ? "py-2 text-sm hover:bg-black/50"
                                                            : "p-4 hover:text-blue-600 text-black transition duration-200"
                                                    }  ${
                                                        isActive
                                                            ? "font-bold"
                                                            : ""}`
                                                    }>
                                                    {subitem.name}
                                                </Link>
                                            </li>
                                    )})}
                                </ul>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}
