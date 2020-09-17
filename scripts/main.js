// local JavaScript (js) code wrapped into website at runtime
// Image switcher code

/*

Welcome to the Javascript part of the main website!

Your probably here either to make improvements (which is amazing, hack away!), or to link your profile website on here.

If your here because of the second reason and are a beginer to JS, read this to understand how this code works!

The first two sections of code that you will notice are classes.
Obviously you know what they are but in this context we are using them to organize the information.
So basically, it's very abstract, you don't need to worry about them.

Under that we have this huge chunk called PROJECT_DATA.
That is the part where you will add your name and (relative) link.
There are three "Project" sections in the array.
Find the one that you are a part of.
Great! Now copy and paste the following line of code after the last "Website" object...
➡️ new Website("", ""),
After that, write inside the first quotations the follow string...
➡️ [your name]'s Page
Then, write inside the second quotations the link to your HTML page...
➡️ "./html/[you name]Build/[your name].html"

Alright, your job is done now, but if your curious what the last huge chunk of code is...
Javascript lets coders create elements in an object-oriented way, the same way you can in HTML.
By doing it this way we can automate the process making it more efficient for everyone.
We begin by looping through the array, going through each project.
Inside each loop we extract the name, header, and description of that section and stick it in the proper element.
We also link it to the CSS code that hopefully makes it look better.
Inside each loop we also loop through the different websites that are under it's section.
Here we do the same thing as above and apply the different links for the student projects.

Ta-da! ✨ So that's how this code works.
Now go make some cool stuff. 👋

P.S.
That tiny code at the very end changes the box's color.

*/

class Area {
	constructor(title, websites) {
		this.title = title;
		this.websites = websites;
	}
}

class Website {
	constructor(name, link) {
		this.name = name;
		this.link = link;
	}
}

class Project {
	constructor(name, header, description, areas) {
		this.name = name;
		this.header = header;
		this.description = description;
		this.areas = areas;
	}
}

const PROJECT_DATA = [
	new Project(
		"Older Versions",
		"Previous Versions",
		"This site is also managed and maintained every year by the senior Advanced Programmers. Whenever this site has a complete update, we make sure to archive the previous versions.",
		[
			new Area(
				"",
				[
					new Website("Version 1.0", "./Version 1.0/index.html"),
				]
			),
		]
	),
	new Project(
		"Teachers",
		"The Teachers",
		"The students look towards the teachers for for both help and knowledge that could be helpful for their projects.",
		[
			new Area(
				"",
				[
					new Website("Mr. Golanka's Page", "./Teachers/Golanka/golanka_page.html"),
					new Website("Mr. Lindow's Page", "./Teachers/Lindow/lindow_page.html"),
					new Website("Mr. Rencricca's Page", "./Teachers/Rencricca/drencricca.html"),
				],
			),
		],
	),
	new Project(
		"Alumni",
		"The Alumni",
		"The alumni's projects are archived so that new students can see and learn from their work for inspiration.",
		[
			new Area(
				"2018",
				[
					new Website("Sophie's Page", "./html/archives/2019/KofskyPage.html"),
					new Website("Bryn's Page", "./html/archives/2019/bstecher.html"),
					new Website("Josh R's Page", "./html/archives/2019/Ross.html"),
					new Website("Phoebe's Page", "./html/archives/2019/brewer.html"),
					new Website("Jason's Page", "./html/archives/2019/jdaniels.html"),
					new Website("Sabrina's Page", "./html/archives/2019/sabrinacode.html"),
					new Website("Will's Page", "./html/archives/2019/will_page.html"),
					new Website("Tyler's Page", "./html/archives/2019/tyler.html"),
					new Website("Kadhir's Page", "./html/archives/2019/kadhir_page.html"),
					new Website("Beck's Page", "./html/archives/2019/beckpage.html"),
				],
			),
			new Area(
				"2019",
				[
					new Website("Owen's Page", "./html/Archives/owen_page.html"),
					new Website("Max's Page", "./html/Archives/maxbremner/maxBremner.html"),
					new Website("Josh S's Page", "./html/screen_page.html"),
					new Website("Becky's Page", "./html/hershkowitz_page.html"),
					new Website("Danny's Page", "./html/fisher.html"),
				],
			),
		],
	),
	new Project(
		"Students",
		"The Students",
		"The students work on bigger and challenging projects that peak their interests. In their websites, they talk about their projects for the year.",
		[
			new Area(
				"Section 1",
				[
					new Website("Andres's Page", "./html/AndresPage.html"),
					new Website("Percy's Page", "./html/FleesPage.html"),
					new Website("Ozan's Page", "./html/ozanmirza/portfolio/index.html"),
					new Website("Robert's Page", "./html/Robert.html"),
					new Website("Jake's Page", "./html/jakehtml.html"),
				],
			),
			new Area(
				"Section 2",
				[
					new Website("Justin's Page", "./html/RomanowPage.html"),
				],
			),
		],
	),
];

window.onload = () => {
	PROJECT_DATA.forEach((section) => {
		let dropdown = document.createElement("div");
		dropdown.classList.add("dropdown");

		let button = document.createElement("button");
		button.classList.add("dropbtn");
		button.innerHTML = section.name;
		dropdown.appendChild(button);

		let content = document.createElement("div");
		content.classList.add("dropdown-content");
		dropdown.appendChild(content);

		let title = document.createElement("h3");
		title.classList.add("dropdown-title");
		title.innerHTML = section.header;
		content.appendChild(title);

		let description = document.createElement("p");
		description.classList.add("dropdown-description");
		description.innerHTML = section.description;
		content.appendChild(description);

		section.areas.forEach((area) => {
			let container = document.createElement("div");
			content.appendChild(container);

			if (area.title != "") {
				let subtitle = document.createElement("h4");
				subtitle.innerHTML = area.title;
				container.appendChild(subtitle);
			}

			area.websites.forEach((website) => {
				let link = document.createElement("a");
				link.innerHTML = website.name;
				link.href = website.link;
				link.target = "_blank";
				container.appendChild(link);
			});
		});

		// let containers = [];
		//
		// section.websites.forEach((website) => {
		// 	if (website.name == undefined || website.link == undefined) {
		// 		let container = document.createElement("div");
		// 		container.style.float = containers.length == 0 ? "left" : "right";
		// 		content.appendChild(container);
		// 		containers.push(container)
		// 	}
		// });
		//
		// if (containers.length == 0) {
		// 	section.websites.forEach((website) => {
		// 		let link = document.createElement("a");
		// 		link.innerHTML = website.name;
		// 		link.href = website.link;
		// 		link.target = "_blank";
		// 		content.appendChild(link);
		// 	});
		// } else {
		// 	var buffer = 0;
		// 	section.websites.forEach((website) => {
		// 		if (website.name == undefined || website.link == undefined) {
		// 			let subtitle = document.createElement("h4");
		// 			subtitle.innerHTML = website;
		// 			containers[buffer].appendChild(subtitle);
		// 			if (section.websites.indexOf(website) > 0 ) {
		// 				buffer++;
		// 			}
		// 		} else {
		// 			let link = document.createElement("a");
		// 			link.innerHTML = website.name;
		// 			link.href = website.link;
		// 			link.target = "_blank";
		// 			containers[buffer].appendChild(link);
		// 		}
		// 	});
		// }

		document.getElementById("menu").appendChild(dropdown);
	});
}

let examplebox = document.getElementById("examplebox")
examplebox.addEventListener('click', () => {
	examplebox.style.backgroundColor = "rgb(" + (Math.random() * 255) + ", " + (Math.random() * 255) + ", " + (Math.random() * 255) + ")";
});
