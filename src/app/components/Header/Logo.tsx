import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "", width = 100, height = 100 }) {
    return (
        <div className={`min-w-16 inline-flex ${className}`}>
            <Link href="/">
                <Image
                    src="/svg/logo.svg"
                    alt="Logo"
                    width={width}
                    height={height}
                />
            </Link>
        </div>
    );
}
