import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="text-[#4d535f] body-font hero h-screen mt-20">
      <div
        class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center"
        >
          <h2
            class="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-6xl mb-4 font-bold drop-shadow-md"
          >
            Diseños que unen corazones
          </h2>
          <p class="mb-8 leading-relaxed opacity-80 drop-shadow-lg">
            Personalizamos tazas, textiles y chapas para ti y tus personas
            favoritas
          </p>
          <div class="flex justify-around w-80">
            <a
              class="inline-flex bg-[#afa9ed] text-white font-bold py-3 px-8 focus:outline-none hover:bg-opacity-80 rounded text-sm shadow-md"
              href="#contact"
            >
              Contáctanos
            </a>
          </div>
        </div>
        <div
          id="pattern"
          class="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16"
        >
          <div class="w-full flex gap-3 justify-center ">
            <img
              class="object-cover object-center rounded-xl hover:animate-pulse shadow-md cursor-pointer"
              alt="hero"
              src="assets/images/IMG-20240310-WA0044.jpg"
              width="145"
              height="208"
            />
          </div>
          <div class="w-full h- flex gap-2 justify-center items-center my-2">
            <img
              class="object-cover object-center rounded-xl hover:animate-pulse shadow-md cursor-pointer"
              alt="hero"
              src="assets/images/IMG-20240310-WA0054.jpg"
              width="145"
              height="208"
            />

            <img
              class="object-cover object-center rounded-xl hover:animate-pulse shadow-md cursor-pointer"
              alt="hero"
              src="assets/images/IMG-20240310-WA0001.jpg"
              width="145"
              height="208"
            />
          </div>
          <div class="w-full flex gap-3 justify-center">
            <img
              class="object-cover object-center rounded-xl hover:animate-pulse shadow-md cursor-pointer"
              alt="hero"
              src="assets/images/IMG-20240310-WA0021.jpg"
              width="145"
              height="208"
            />

            <img
              class="object-cover object-center rounded-xl hover:animate-pulse shadow-md cursor-pointer"
              alt="hero"
              src="assets/images/IMG-20240310-WA0006.jpg"
              width="145"
              height="208"
            />

            <img
              class="object-cover object-center rounded-xl hover:animate-pulse shadow-md cursor-pointer"
              alt="hero"
              src="assets/images/IMG-20240310-WA0027.jpg"
              width="145"
              height="208"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroeComponent {}
