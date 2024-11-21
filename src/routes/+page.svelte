<script>
	import WorkHistory from '$lib/WorkHistory.svelte';
	import { onMount } from 'svelte';

    let visitorCount = $state(0);
    let visitorsReady = $state(false);

    onMount(() => {
        fetch('https://fek2i6k5rc.execute-api.us-east-1.amazonaws.com/Prod/visitors/').then((response) => {
            if(response.status == 200){
                response.json().then((value) => {
                    visitorCount = value['visitor_count'];
                    visitorsReady = true;
                }).catch((reason) => {
                    console.log(`Failed to parse visitor count: ${reason}`)
                })
            }else{
                console.log(`Failed to fetch visitor count: ${response.status}`)
            }
        }).catch((reason) => {
            console.log(`Failed to fetch visitor count: ${reason}`)
        })
    })
</script>

{#snippet sectionHeader(/** @type {string} */ header)}
	<h1 class="mb-1 w-full border-b-[1px] px-1 font-heading text-lg text-slate-700">
		{header}
	</h1>
{/snippet}

<div
	class="font-main flex h-full w-full justify-center bg-gradient-to-br from-slate-800 to-slate-950"
>
	<div class="w-full max-w-[816px] bg-slate-50">
		<section class="bg-gradient-to-br from-slate-700 to-slate-500 p-2 text-slate-50 sm:p-4">
			<div class="flex justify-between">
				<div class="flex flex-col justify-between">
					<div class="flex items-baseline space-x-2">
						<span class="text-lg font-heading sm:text-xl font-semibold">John Paul Russo</span>
						<span class="">|</span>
						<span class="text-sm sm:text-base"><em>Software Engineer</em></span>
					</div>
                    <div>
                        <div class="text-xs">
                            <div>Baltimore, MD 21224</div>
                        </div>
    
                        <div class="text-xs">
                            <div>+1 (443) 834 8527</div>
                            <div>john.p.russo@colorado.edu</div>
                        </div>
                    </div>

				</div>
                <div class="text-xs flex flex-col justify-between items-end">
                    <div class="flex flex-col items-end space-x-2 sm:flex-row sm:space-x-4 sm:items-center">
                        <a
                        href="https://github.com/johnpaulrusso"
                        aria-label="Link to Github Repository"
                        class="inline-flex items-center text-slate-50 hover:text-slate-300"
                        role="menuitem"
                        title="Github"
                    >
                        <i class="fa-brands fa-github text-3xl"></i></a
                    >
                        <a
                        href="https://www.linkedin.com/in/john-russo-21220069/"
                        aria-label="Link to LinkedIn Profile"
                        class="inline-flex items-center text-slate-50 hover:text-slate-300"
                        role="menuitem"
                            title="LinkedIn"
                        >
                            <i class="fa-brands fa-linkedin text-3xl"></i></a
                        >
    
                    </div>
                    {#if visitorsReady}
                        <div>Visitors: {visitorCount}</div>
                    {/if}
                </div>


			</div>
		</section>

		<section class="p-2 sm:p-4">
			{@render sectionHeader('Proficiencies')}
			<div class="text-xs">
				<div class="flex space-x-2">
					<p class="min-w-24 font-semibold">Languages:</p>
					<p class="">
						C/C++, Javascript/Typescript, Python, C#, Powershell, Bash, HTML, CSS, Perl, XML, YAML,
						Markdown, Matlab/Simulink
					</p>
				</div>
				<div class="flex space-x-2">
					<p class="min-w-24 font-semibold">Frameworks:</p>
					<p class="">QT, Svelte 4/5, Sveltekit, Tailwind CSS, .NET</p>
				</div>
				<div class="flex space-x-2">
					<p class="min-w-24 font-semibold">Networking:</p>
					<p class="">UDP/TCP, HTTP, REST, SOAP, MQTT, Wireshark, JAUS</p>
				</div>
				<div class="flex space-x-2">
					<p class="min-w-24 font-semibold">Environments:</p>
					<p class="">Linux, RHEL, Windows 10, Docker, VMWare</p>
				</div>
				<div class="flex space-x-2">
					<p class="min-w-24 font-semibold">Process:</p>
					<p class="">JIRA, Confluence, Git, Mercurial, SVN, Jenkins</p>
				</div>
			</div>
		</section>

		<section class="p-2 sm:p-4">
			{@render sectionHeader('Professional Experience')}

			<WorkHistory
				title="Software Engineer III"
				company="Textron Systems"
				agency="Specialized Technical Systems"
				location="Hunt Valley, MD"
				startingYear="2023"
				startingMonth="March"
				endingYear="2024"
				endingMonth="September"
			>
				{#snippet details()}
					<li>
						Onboarded to utilize prior C++, QT and unmanned systems experience to perform bug fixes
						and new feature additions slated for the next major release of an unmanned
						mine-countermeasures surface vessel.
					</li>
					<li>
						Additional responsibilities include triage issues reported by the customer and test
						teams, performing code reviews, writing well documented and up-to-date JIRA tickets and
						Confluence Wiki pages, and mentoring junior team members.
					</li>
					<li>
						Provided customers the ability to perform operation with multiple ground stations and
						unmanned surface vessels over the same data-link. Performed by augmenting a C++ AS5710
						JAUS library and applying QT UI updates to ground station
					</li>
					<li>
						Provided customers the ability to track and display radar contacts in realtime.
						Implemented the full C++/QT stack of this feature from a vehicle-side interface to the
						radar API to icons rendered on the sea-chart
					</li>
				{/snippet}
			</WorkHistory>

			<WorkHistory
				title="Backend Engineer"
				company="Domo Tactical Communications - Corpten"
				agency="Brooks Logic LLC"
				location="Remote"
				startingYear="2021"
				startingMonth="July"
				endingYear="2022"
				endingMonth="September"
			>
				{#snippet details()}
					<li>
						Maintained and developed C++ and .NET Framework web services that parsed telemetry data
						from various GPS capable devices and aggregated that data into a common interface via a
						SQL Server database and stored procedures
					</li>
					<li>
						Implemented an MQTT client as a .NET Framework web service in response to a customer
						request to support MQTT capable devices. Mosquitto was used to create a mock server for
						verification
					</li>
					<li>
						Converted an end-of-life C++ telnet interface to satellite data into a .NET Framework
						SOAP/WSDL interface to maintain uninterrupted service for affected customers.
					</li>
				{/snippet}
			</WorkHistory>

			<WorkHistory
				title="Software Engineer III"
				company="Textron Systems"
				location="Hunt Valley, MD"
				startingYear="2019"
				startingMonth="March"
				endingYear="2021"
				endingMonth="September"
			>
				{#snippet details()}
					<li>
						Co-lead for a multi-vessel autonomous system (Seatrain) project sponsored by DARPA.
						Responsible for task estimation and designing & implementing initial system behaviors
						and state machines using MOOS-IvP open source C++ libraries.
					</li>
					<li>
						Integrated multiple C++ applications to handle video processing, CANBUS and UART serial
						communications, and TCP/UDP net- working between subsystems of a hardware-in-the-loop
						smart munitions test environment.
					</li>
					<li>
						Refactored, remodeled, and redeveloped hydraulic steering and trim software and control
						loops using Matlab/Simulink in combination with C++ code generation for an unmanned
						surface vessel.
					</li>
				{/snippet}
			</WorkHistory>

			<WorkHistory
				title="Software Engineer II"
				startingYear="2017"
				startingMonth="July"
				endingYear="2019"
				endingMonth="July"
			>
				{#snippet details()}
					<li>
						Implemented new vehicle modes and vehicle-side mission planning and execution software
						in C++ to provide the customer capabilities to evaluate additional mine hunting payloads
						for an unmanned surface vessel
					</li>
					<li>
						Recruited briefly to ground robotics team to integrate a third party C++ library to
						bring AS5669 and AS5710 JAUS compliance to an unmanned equipment transport vehicle. Also
						assisted with testing and QT UI development
					</li>
				{/snippet}
			</WorkHistory>

			<WorkHistory
				title="Software Engineer I"
				startingYear="2015"
				startingMonth="June"
				endingYear="2017"
				endingMonth="July"
			>
				{#snippet details()}
					<li>
						Implemented new vehicle modes and vehicle-side mission planning and execution software
						in C++ to provide the customer capabilities to evaluate additional mine hunting payloads
						for an unmanned surface vessel
					</li>
					<li>
						Recruited briefly to ground robotics team to integrate a third party C++ library to
						bring AS5669 and AS5710 JAUS compliance to an unmanned equipment transport vehicle. Also
						assisted with testing and QT UI development
					</li>
				{/snippet}
			</WorkHistory>
		</section>

		<section class="p-2 sm:p-4">
			{@render sectionHeader('Education')}
			<div class="flex justify-between text-xs font-semibold">
				<div class="sm:flex">
					<p>University of Colorado, Boulder</p>
					<p class="hidden px-1 sm:inline">-</p>
					<p>B.S. Aerospace Engineering Sciences</p>
					<p class="hidden px-1 sm:inline">-</p>
					<p>Computer Science Minor</p>
				</div>
				<div>May 2015</div>
			</div>
		</section>

		<br />
	</div>
</div>
