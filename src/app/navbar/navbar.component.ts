import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent {

	@Input() user: User = {
		fname: "User",
		lname: "1111",
		profileIcon: "errorr.jpg"
	}

	/** Stores if settings menu is open or not. */
	settingsMenuOpen = false
	/** Toggles the settings menu */
	toggleSettingsMenu() {
		this.settingsMenuOpen = !this.settingsMenuOpen
	}
}
