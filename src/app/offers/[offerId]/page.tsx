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
        <div>
            <h1>{offer.attributes.Name}</h1>
            <p>{offer.attributes.Description}</p>
            <p>Ending on: {offer.attributes.EndingOn}</p>
        </div>
    );
}
