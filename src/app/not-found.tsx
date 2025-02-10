import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-528px)]">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="text-lg mt-4">Sorry, the page you're looking for doesn't exist.</p>
            <Link href="/" className="h-8 p-16 flex items-center text-lg text-blue-600 hover:text-blue-700 hover:font-bold">Go back to home</Link>
        </div>
    );
}
