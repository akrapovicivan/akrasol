import { apiUrlBase } from '@/shared/constants';
import { Offer } from '@/shared/interfaces';
import axios from 'axios';
import Link from 'next/link';

const getOffers = async () => {
    try {
        const res = await axios.get(`${apiUrlBase}/offers`);
        return res.data.data; // Adjust based on your API's response structure
    } catch (error) {
        console.error('Error fetching offers:', error);
        return [];
    }
};

export default async function OffersLayout({ children }: { children: React.ReactNode }) {
    const offers: Offer[] = await getOffers();
    return (
        <div>
            <h1>Offers</h1>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
                {offers.map((offer: Offer) => (
                    <li key={offer.id}>
                        <Link href={`/offers/${offer.id}`}>{offer.attributes.Name}</Link>
                    </li>
                ))}
            </ul>
            <div style={{ marginTop: '1rem', border: '1px solid #ddd', padding: '1rem' }}>
                {children}
            </div>
        </div>
    );
}
