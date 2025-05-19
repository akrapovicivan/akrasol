import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-16 bg-gray-200 dark:bg-gray-900 lg:px-48 sm:px-16 px-4">
            <div className="mx-auto w-full">
                <div className="py-6 flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2025 <Link href="https://akrasol.com/">Akrasol™</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}