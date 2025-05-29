<script>
	import { loadStripe } from '@stripe/stripe-js';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	let { children, ...props } = $props();

	async function onclick() {
		try {
			const stripe = await loadStripe(PUBLIC_STRIPE_KEY);
			const response = await fetch('/api/checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				throw new Error('Failed to create checkout session');
			}

			const { id } = await response.json();
			await stripe.redirectToCheckout({ sessionId: id });
		} catch (error) {
			console.error('Checkout error:', error);
			// You might want to show a user-friendly error message here
		}
	}
</script>

<button {...props} {onclick}>{@render children()}</button>

<style>
	button {
		background-color: black;
		color: white;
		padding: 20px 24px;
		font-weight: normal;
		font-size: 22px;
		text-transform: uppercase;
		transition: all 0.3s ease;
		border: 1px solid white;
	}

	button:hover {
		background-color: white;
		color: black;
	}
</style>
