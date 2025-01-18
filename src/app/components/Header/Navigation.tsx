"use client"

import { apiUrlBase } from "@/shared/constants";
import { Offer } from "@/shared/interfaces";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const getOffers = async () => {
    try {
        const res = await axios.get(`${apiUrlBase}/offers`);
        return res.data.data;
    } catch (error) {
        console.error('Error fetching offers:', error);
        return [];
    }
};

export default function Navigation({ isSidebar = false }) {
    const [offersSubroutes, setOffersSubroutes] = useState<Subroute[]>([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const offers = await getOffers();
                const mappedSubroutes = offers.map((o: Offer) => ({
                    name: o.attributes.Name,
                    href: `/offers/${o.id}`,
                }));
                setOffersSubroutes(mappedSubroutes);
            } catch (error) {
                console.error("Error in fetchOffers:", error);
            } finally {
                //setLoading(false);
            }
        };

        fetchOffers();
    }, [])

    const navigation = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Offers",
            href: "/offers",
            subroutes: offersSubroutes,
        },
        {
            name: "Cost Calculator",
            href: "/cost-calculator",
            subroutes: [
                { name: "Solar ROI Calculator", href: "/cost-calculator/roi" },
                { name: "Savings Estimator", href: "/cost-calculator/savings" },
            ],
        },
        {
            name: "Contact",
            href: "/contact",
        },
        {
            name: "FAQ",
            href: "/faq",
        },
    ];

    return (
        <nav className={`${isSidebar ? "mt-4 px-6" : "text-[#616161]"}`}>
            <ul
                className={`${
                    isSidebar ? "flex flex-col space-y-6" : "flex space-x-20"
                }`}
            >
                {navigation.map((item) => (
                    <li key={item.name} className="relative group">
                        <Link
                            href={item.href}
                            className={`block ${
                                isSidebar
                                    ? "text-lg font-bold hover:text-[#176FD3]"
                                    : "hover:text-[#176FD3] transition duration-200"
                            }`}
                        >
                            {item.name}
                        </Link>

                        {item.subroutes && (
                            <ul
                                className={`${
                                    isSidebar
                                        ? "mt-2 p-8 space-y-2"
                                        : "absolute left-0 mt-2 min-w-64 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                }`}
                            >
                                {item.subroutes.map((subitem) => (
                                    <li key={subitem.name}>
                                        <Link
                                            href={subitem.href}
                                            className={`block ${
                                                isSidebar
                                                    ? "text-sm hover:underline"
                                                    : "px-4 py-2 hover:text-[#176FD3] transition duration-200"
                                            }`}
                                        >
                                            {subitem.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

interface Subroute {
    name: string;
    href: string;
}