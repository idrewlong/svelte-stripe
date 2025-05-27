<script>
	import bookCover from '$assets/book_cover.png';
	import phoneCover from '$assets/phone_cover.png';
	import { Button } from '$lib';
</script>

<section class="hero">
	<div class="hero-showcase bold text-center">
		<h1 class="purple">Move to</h1>
		<h1 class="purple mb-xs">Spain</h1>
		<h4 class="semi-bold italic">There's no need to make the same mistakes I made.</h4>
		<img class="book-cover" src={bookCover} alt="Book Cover" />
		<img class="phone-cover" src={phoneCover} alt="Phone Cover" />
	</div>
	<div class="hero-text white text-center">
		<h1 class="">This ebook will</h1>
		<h1>save you money,</h1>
		<h1 class="mb-m">time & nerves</h1>
		<p class="light-grey mb-l">
			I moved to New York sever years ago. The process was painful and difficult. I learned most
			things the hard way: finding a job, getting a visa, calculating my cost of living, choosing an
			apartment. That's why I wrote this e-book, to tell you how I did it. No bullshit, no stress.
		</p>
		<Button>Purchase e-book for $10</Button>
	</div>
</section>

<style>
	.hero {
		display: flex;
		height: 100vh;
		overflow-y: hidden;
	}
	.hero-showcase {
		position: relative;
		width: 50%;
		padding: 100px 16px 0 16px;
		background: linear-gradient(135deg, #e2cbff 25%, #deeaff 50%, #ece5ff 75%, #927bce 100%);
	}
	.hero-text {
		width: 50%;
		padding: 100px 5%;
		background-color: black;
	}
	.book-cover {
		position: absolute;
		right: 2%;
		bottom: 0;
		width: 65%;
		transform: translateY(30%);
	}
	.phone-cover {
		width: 35%;
		position: absolute;
		right: 52%;
		bottom: 0;
		transform: translateY(25%);
	}
</style>
