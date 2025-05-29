import Stripe from 'stripe';
import { PRICE_ID, STRIPE_API_KEY } from '$env/static/private';
import { PUBLIC_FRONTEND_URL } from '$env/static/public';

const stripe = new Stripe(STRIPE_API_KEY);

export async function POST() {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: [{ price: PRICE_ID, quantity: 1 }],
			mode: 'payment',
			success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
			cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/cancel`
		});

		return new Response(JSON.stringify({ id: session.id }), {
			status: 200
		});
	} catch (error) {
		console.error('Checkout error:', error);
		return new Response(JSON.stringify({ error: 'Failed to create checkout session' }), {
			status: 500
		});
	}
}
