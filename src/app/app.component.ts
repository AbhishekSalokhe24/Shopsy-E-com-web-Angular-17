import { Component,  OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CatogoryBtnsComponent } from './catogory-btns/catogory-btns.component';
import { CatogoryCardsComponent } from './catogory-cards/catogory-cards.component';
import { FooterComponent } from "./footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, CarouselComponent, CatogoryBtnsComponent, CatogoryCardsComponent, FooterComponent]
})
export class AppComponent{

}
   