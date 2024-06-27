import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: ` <header
    class="text-gray-600 body-font shadow-md bg-white fixed w-full top-0 z-30"
  >
    <div
      class="container mx-auto flex flex-wrap px-3 py-2 flex-col md:flex-row items-center con"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <img
          class="h-12 rounded-xl"
          src="assets/img/Logo_IG_Inverso.png"
          alt="logo"
        />
      </a>
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center"
      >
        <a
          href="#services"
          class="mr-5 text-[#00cccc] hover:text-[#afa9ed] cursor-pointer "
          >Servicios</a
        >
        <!-- <a href="#gallery" class="mr-5 text-[#00cccc] hover:text-[#afa9ed] cursor-pointer">Galería</a> -->
        <a
          href="#contact"
          class="mr-5 text-[#00cccc] hover:text-[#afa9ed] cursor-pointer"
          >Contacto</a
        >
      </nav>
      <button
        class="items-center bg-[#00cccc] border-0 py-1 px-5 focus:outline-none  rounded text-base text-white hover:bg-opacity-80"
      >
        Sign up
      </button>
    </div>
  </header>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
