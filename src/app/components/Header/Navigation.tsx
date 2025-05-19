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

                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}
