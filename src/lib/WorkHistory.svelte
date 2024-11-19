<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		company = '',
		agency = '',
		location = '',
		startingYear,
		startingMonth,
		endingYear = '',
		endingMonth = '',
		details
	}: {
		title: string;
		company?: string;
		agency?: string;
		location?: string;
		startingYear: string;
		startingMonth: string;
		endingYear?: string;
		endingMonth?: string;
		details: Snippet;
	} = $props();

	let trimmedStartingMonth = startingMonth.substring(0, 3);
	let trimmedEndingMonth = endingMonth.substring(0, 3);
</script>

<div class="py-1 text-xs">
	{#if company}
		<div class="flex justify-between space-x-2">
			<div class="sm:flex">
				{#if agency}
					<p>
						<span class="font-semibold">{agency}</span><span class="pl-1">(Agency)</span>
					</p>
					<p class="hidden pr-1 sm:inline">,</p>
				{/if}
				<p>
					<span class="font-semibold">{company}</span>{#if agency}<span class="pl-1">(Company)</span
						>{/if}
				</p>
			</div>
			<p class="font-semibold">{location}</p>
		</div>
	{/if}
	<div class="flex justify-between space-x-2">
		<p class="">
			<span class="font-semibold">{title}</span>{#if agency}<span class="pl-1">(Contractor)</span
				>{/if}
		</p>
		<p class="font-semibold sm:hidden">
			{trimmedStartingMonth}
			{startingYear} - {trimmedEndingMonth}
			{endingYear}
		</p>
		<p class="hidden font-semibold sm:block">
			{startingMonth}
			{startingYear} - {endingMonth}
			{endingYear}
		</p>
	</div>
	<ul class="list-disc pl-4">
		{@render details()}
	</ul>
</div>
