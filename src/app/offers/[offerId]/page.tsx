import { apiUrlBase } from '@/shared/constants';
import axios from 'axios';


const fetchOffer = async (offerId: string) => {
    const res = await axios.get(`${apiUrlBase}/offers/${offerId}`);
    return res.data.data;
};

export default async function OfferDetailsPage({ params }: { params: { offerId: string } }) {
    const offer = await fetchOffer(params.offerId);

    if (!offer) {
        return <div>Offer not found.</div>;
    }

    return (
        /*
        <div>
            <h2>{offer.attributes.Name}</h2>
            <p>{offer.attributes.Description}</p>
            <p>Ending on: {offer.attributes.EndingOn}</p>
        </div>
        */
        <section className="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="w-full grid rounded-lg bg-blue-50 p-4 dark:bg-blue-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
                <div className="lg:col-span-5 lg:mt-0">
                        <img className="mb-4 h-56 w-56 sm:h-96 sm:w-96 md:h-full md:w-full rounded-xl" src={"/images/offers/" + params.offerId + ".webp"} alt="peripherals" />
                </div>
                <div className="me-auto place-self-center lg:col-span-7">
                    <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
                        {offer.attributes.Name}
                    </h1>
                    <p className="mb-6 text-gray-500 dark:text-gray-400">{offer.attributes.Description}</p>
                    <button className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"> Pre-order now </button>
                </div>
            </div>
        </section>
    );
}
