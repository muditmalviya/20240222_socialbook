import { Component } from '@angular/core';

@Component({
	selector: 'app-right-sidebar',
	standalone: true,
	imports: [],
	templateUrl: './right-sidebar.component.html',
	styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {

	eventsList = [
		{ date: 18, month: "March", title: "Social Media", location: "Willson Tech Park" },
		{ date: 22, month: "June", title: "Mobile Marketing", location: "Willson Tech Park" }
	]

	sidebarAdUrl = "https://i.postimg.cc/CLXYx9BL/advertisement.png"

	friendList = [
		{name: "Keshav", image_url: "https://clipart.info/images/ccovers/1503498237rahul%20gandhi%20png.png"},
		{name: "Ayush", image_url: "https://clipart.info/images/ccovers/1503498237rahul%20gandhi%20png.png"},
		{name: "Bharat", image_url: "https://clipart.info/images/ccovers/1503498237rahul%20gandhi%20png.png"},
		{name: "Shubham", image_url: "https://clipart.info/images/ccovers/1503498237rahul%20gandhi%20png.png"}
	]
}