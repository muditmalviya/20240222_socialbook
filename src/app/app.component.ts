import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { LeftContainerComponent } from './left-container/left-container.component'
// import { RightContainerComponent } from './right-container/right-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    // LeftContainerComponent,
    // RightContainerComponent
    NavbarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MainContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // User
  user: User = {
    fname: "Mudit",
    lname: "Malviya",
    profileIcon: "https://w7.pngwing.com/pngs/987/738/png-transparent-narendra-modi-thumbnail.png"
 }
}
