import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSackDollar, faLeaf } from '@fortawesome/free-solid-svg-icons';
import Section from './components/Header/Section'

export default function HomePage() {
    return (
        <div>
            <div className="w-full h-[582px] bg-cover bg-center" 
                style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url(/images/panels-hero.png)' }}>
                <div className="ml-20 w-[461px] h-full bg-[#212121]/40 text-white flex flex-col justify-end p-10" >
                    <span className="text-5xl mb-8">Title</span>
                    <p className="text-base mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Fames ipsum pulvinar dictumst adipiscing et, augue phasellus id sapien.</p>
                </div>
            </div>
            <div className="py-8 flex flex-row justify-center gap-x-20">
                <div className="flex flex-col w-[120px]">
                    <FontAwesomeIcon icon={faBolt} size="2x" className="text-[#616161]" />
                    <span className='text-sm text-[#616161] mt-3 text-center'>Power your home</span>
                </div>
                <div className="flex flex-col w-[120px]">
                    <FontAwesomeIcon icon={faSackDollar} size="2x" className="text-[#616161]" />
                    <span className='text-sm text-[#616161] mt-3 text-center'>Save money</span>
                </div>
                <div className="flex flex-col w-[120px]">
                    <FontAwesomeIcon icon={faLeaf} size="2x" className="text-[#616161]" />
                    <span className='text-sm text-[#616161] mt-3 text-center'>No emmisions</span>
                </div>
            </div>
            <div className='px-20'>
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
