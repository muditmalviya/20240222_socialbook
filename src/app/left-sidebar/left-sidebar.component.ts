import { Component } from '@angular/core';

@Component({
	selector: 'app-left-sidebar',
	standalone: true,
	imports: [],
	templateUrl: './left-sidebar.component.html',
	styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
	impLinks = [
		{ title: "Latest News", url: "https://i.postimg.cc/RCj4MjnC/news.png" },
		{ title: "Friends", url: "https://i.postimg.cc/MpBwMtV0/friends.png" },
		{ title: "Groups", url: "https://i.postimg.cc/44FRWj1b/group.png" },
		{ title: "Marketplace", url: "https://i.postimg.cc/0jh39RtT/marketplace.png" },
		{ title: "Watch", url: "https://i.postimg.cc/VsXHCTVk/watch.png" }
	]

	userShortcuts = [
		{ title: "FitTuber", url: "https://img.freepik.com/free-vector/lord-ganpati-ganesh-chaturthi-beautiful-green-leaf-holiday-card-background_1035-24526.jpg?w=740&t=st=1708660572~exp=1708661172~hmac=197f0e130cb68b8920da23417f2761ce24c372085c785025e96477e09a26a113" },
		{ title: "Puma", url: "https://img.freepik.com/free-vector/lord-ganpati-ganesh-chaturthi-beautiful-green-leaf-holiday-card-background_1035-24526.jpg?w=740&t=st=1708660572~exp=1708661172~hmac=197f0e130cb68b8920da23417f2761ce24c372085c785025e96477e09a26a113" },
		{ title: "Nagpur", url: "https://img.freepik.com/free-vector/lord-ganpati-ganesh-chaturthi-beautiful-green-leaf-holiday-card-background_1035-24526.jpg?w=740&t=st=1708660572~exp=1708661172~hmac=197f0e130cb68b8920da23417f2761ce24c372085c785025e96477e09a26a113" },
		{ title: "Adiddas", url: "https://img.freepik.com/free-vector/lord-ganpati-ganesh-chaturthi-beautiful-green-leaf-holiday-card-background_1035-24526.jpg?w=740&t=st=1708660572~exp=1708661172~hmac=197f0e130cb68b8920da23417f2761ce24c372085c785025e96477e09a26a113" }
	]
}
