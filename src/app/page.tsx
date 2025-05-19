import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSackDollar, faLeaf } from '@fortawesome/free-solid-svg-icons';
import Section from './components/Header/Section'
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Akrasol - Home',
    description: 'Welcome to the Akrasol Home page',
  };

export default function HomePage() {
    return (
        <div>
            <div className="w-full bg-cover bg-center lg:px-48 sm:px-16 px-4" 
                style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url(/images/panels-hero.webp)' }}>
                <div className="min-[888px]:w-[461px] h-full bg-[#212121]/40 text-white flex flex-col justify-end p-10" >
                    <h1 className="text-5xl mb-8">Energetska neovisnost uz solarnu energiju</h1>
                    <p className="text-base mb-16">Preuzmite kontrolu nad svojom energijom uz pouzdana, pristupačna i održiva solarna rješenja koja štede novac i štite okoliš.</p>
                    <Link href="/cost-calculator">
                        <button className="bg-blue-600 hover:bg-blue-700 p-8 font-bold text-xl w-full">Zatražite besplatnu ponudu</button>
                    </Link>
                </div>
            </div>
            <div className="p-8 lg:px-48 sm:px-16 px-4 flex flex-col justify-center gap-x-20 gap-y-8 md:flex-row md:w-full">
                <div className="flex flex-row gap-4 justify-center md:flex-col">
                    <FontAwesomeIcon icon={faBolt} size="2x" className="text-[#616161]" />
                    <span className='text-sm text-[#616161] text-center inline-flex items-center'>Napajajte svoj dom</span>
                </div>
                <div className="flex flex-row gap-4 justify-center md:flex-col">
                    <FontAwesomeIcon icon={faSackDollar} size="2x" className="text-[#616161]" />
                    <span className='text-sm text-[#616161] text-center inline-flex items-center'>Uštedite novac</span>
                </div>
                <div className="flex flex-row gap-4 justify-center md:flex-col md:items-center">
                    <FontAwesomeIcon icon={faLeaf} size="2x" className="text-[#616161]" />
                    <span className='text-sm text-[#616161] text-center inline-flex items-center'>Bez emisija</span>
                </div>
            </div>
            <div className='lg:px-48 sm:px-16 px-4'>
                <Section image='/images/setup.webp'
                         title='Stručno postavljanje'
                         description='Od savjetovanja do završetka, naši certificirani stručnjaci osiguravaju besprijekoran i učinkovit proces ugradnje, pružajući vrhunsku kvalitetu rada kojoj možete vjerovati.'
                         direction='flex-row'>
                </Section>
                <Section outerBackgroundImage='/images/panel-closeup.webp'
                         title='Prilagođena rješenja za vaš dom'
                         description='Analiziramo vaše energetske potrebe i želje kako bismo osmislili solarno rješenje po mjeri koje maksimizira vašu uštedu i doprinosi ciljevima održivosti.'
                         direction='flex-row-reverse'
                         innerBackgroundColor='#212121'>
                </Section>
                <Section image='/images/layered-panel.webp'
                         title='Inovativna solarna tehnologija'
                         description='Otkrijte najnovija tehnološka dostignuća koja pokreću naše solarne panele – od visoko učinkovitih ćelija do izdržljivosti osmišljene za dugotrajan rad.'
                         direction='flex-row-reverse'>
                </Section>
            </div>
        </div>
    );
}
