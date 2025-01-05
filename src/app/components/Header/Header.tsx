import Navigation from './Navigation';
import styles from './header.module.css';
import Logo from './Logo';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className='flex flex-row w-full items-center'>
                <Logo className="mr-auto" width={80} height={48}/>
                <Navigation />
            </div>
        </header>
    );
}
