import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSackDollar, faLeaf } from '@fortawesome/free-solid-svg-icons';
import Section from './components/Header/Section'

export default function HomePage() {
    return (
        <div>
            <div className="w-full h-[582px] bg-cover bg-center px-48 max-[888px]:px-16" 
                style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url(/images/panels-hero.png)' }}>
                <div className="min-[888px]:w-[461px] h-full bg-[#212121]/40 text-white flex flex-col justify-end p-10" >
                    <span className="text-5xl mb-8">Title</span>
                    <p className="text-base mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Fames ipsum pulvinar dictumst adipiscing et, augue phasellus id sapien.</p>
                </div>
            </div>
            <div className="p-8 px-48 max-[888px]:px-16 flex flex-col justify-center gap-x-20 gap-y-8 md:flex-row md:w-full">
                <div className="flex flex-row gap-4 justify-center md:flex-col">
                    <FontAwesomeIcon icon={faBolt} size="2x" className="text-[#616161]" />
                    <span className='text-sm text-[#616161] text-center inline-flex items-center'>Power your home</span>
                </div>
                <div className="flex flex-row gap-4 justify-center md:flex-col">
                    <FontAwesomeIcon icon={faSackDollar} size="2x" className="text-[#616161]" />
                    <span className='text-sm text-[#616161] text-center inline-flex items-center'>Save money</span>
                </div>
                <div className="flex flex-row gap-4 justify-center md:flex-col md:items-center">
                    <FontAwesomeIcon icon={faLeaf} size="2x" className="text-[#616161]" />
                    <span className='text-sm text-[#616161] text-center inline-flex items-center'>No emmisions</span>
                </div>
            </div>
            <div className='px-48 max-[888px]:px-16'>
                <Section image='/images/setup.png'
                         title='Section title'
                         description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         Fames ipsum pulvinar dictumst adipiscing et, augue phasellus id sapien'
                         direction='flex-row'>
                </Section>
                <Section outerBackgroundImage='/images/panel-closeup.jpg'
                         title='Section title'
                         description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         Fames ipsum pulvinar dictumst adipiscing et, augue phasellus id sapien'
                         direction='flex-row-reverse'
                         innerBackgroundColor='#212121'>
                </Section>
                <Section image='/images/layered-panel.png'
                         title='Section title'
                         description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                         Fames ipsum pulvinar dictumst adipiscing et, augue phasellus id sapien'
                         direction='flex-row-reverse'>
                </Section>
            </div>
        </div>
    );
}
