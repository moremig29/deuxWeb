import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../components/header.component';
import { HeroeComponent } from '../components/heroe.component';
import { ServicesComponent } from '../components/services.component';
import { GalleryComponent } from '../components/gallery.component';
import { ContactComponent } from '../components/contact.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroeComponent,
    ServicesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent { }
