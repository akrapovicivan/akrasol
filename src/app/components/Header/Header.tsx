import Navigation from './Navigation';
import Logo from './Logo';

export default function Header() {
    return (
        <header className="bg-white px-48 py-4">
            <div className='flex flex-row w-full items-center'>
                <Logo className="mr-auto" width={80} height={48}/>
                <Navigation />
            </div>
        </header>
    );
}
