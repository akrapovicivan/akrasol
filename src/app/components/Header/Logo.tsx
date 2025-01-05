import Image from "next/image";

export default function Logo({ className = "", width = 100, height = 100 }) {
    return (
        <div className={`inline-flex ${className}`}>
        <Image
            src="/svg/logo.svg"
            alt="Logo"
            width={width}
            height={height}
        />
    </div>
    );
}
