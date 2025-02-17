import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center my-16 pt-8 lg:px-48 sm:px-16 px-4 my-auto relative text-center">
            <Image src="/svg/404.svg" width="400" height="400" alt="404"></Image>
            <h1 className="text-4xl font-bold mt-8">Oops! - Page Not Found</h1>
            <p className="text-lg mt-4">Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className="sm:px-16 px-4 sm:py-4 py-2 mt-8 flex items-center text-lg text-blue-600 hover:text-blue-700 hover:font-bold border border-blue-600 text-blue-600 hover:bg-blue-100 rounded-md">Go back to home</Link>
        </div>
    );
}
