import Link from "next/link";

const navigation = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Offers",
        href: "/offers",
        subroutes: [
            { name: "Current Discounts", href: "/offers/current-discounts" },
            { name: "Package Details", href: "/offers/package-details" },
            { name: "Special Financing", href: "/offers/special-financing" },
        ],
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

export default function Navigation() {
    return (
        <nav className="text-[#616161]">
            <div className="container mx-auto">
                <ul className="flex space-x-20">
                    {navigation.map((item) => (
                        <li key={item.name} className="relative group">
                            <Link href={item.href} className="hover:text-[#176FD3] transition duration-200">
                                {item.name}
                            </Link>
                            {item.subroutes && (
                                <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    {item.subroutes.map((subitem) => (
                                        <li key={subitem.name}>
                                            <Link href={subitem.href} className="block px-4 py-2 hover:bg-gray-600 hover:text-[#176FD3] transition duration-200">
                                                {subitem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
