<script>
	import chevronDown from '$assets/icons/chevron-down.svg';

	let { faq, isExpanded, onclick } = $props();
</script>

<button class="container" class:container-expanded={isExpanded} {onclick}>
	<div class="question-and-answer">
		<p class="question mb-s">{faq.question}</p>
		<p class="answer">{faq.answer}</p>
	</div>
	<img src={chevronDown} alt="Chevron" />
</button>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 20px 0;
		border-bottom: 1px solid #e5e5e5;
		background: none;
		border-left: none;
		border-right: none;
		border-top: none;
		text-align: left;
		width: 100%;
		cursor: pointer;
	}

	.question-and-answer {
		flex-grow: 1;
		padding-right: 20px;
	}

	.question {
		font-weight: 600;
		font-size: 18px;
		margin-bottom: 8px;
		color: black;
	}

	.answer {
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition:
			max-height 0.3s ease-out,
			opacity 0.3s ease-out;
		color: #666;
		line-height: 1.6;
	}

	.container img {
		width: 24px;
		height: 24px;
		transition: transform 0.3s ease;
		flex-shrink: 0;
	}

	.container-expanded img {
		transform: rotate(180deg);
	}

	.container-expanded .answer {
		max-height: 200px;
		opacity: 1;
		margin-top: 8px;
	}
</style>
