import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: ` <section id="contact" class="p-52 overflow-hidden relative z-10">
    <header class="text-center mx-auto mb-12 lg:px-20">
      <h2 class="text-3xl leading-normal mb-2 font-bold text-[#00cccc]">
        Alguna inquietud?
      </h2>
      <p class="text-[#afa9ed] leading-relaxed text-xl mx-auto pb-2">
        Escribenos y la aclararemos en un breve periodo de tiempo.
      </p>
    </header>
    <div class="container">
      <div class="flex flex-wrap lg:justify-around -mx-4">
        <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
          <div class="max-w-[570px] mb-12 lg:mb-0">
            <!-- <span class="block mb-4 text-base text-primary font-semibold text-[#4d535f]">
               Contact Us
               </span> -->
            <h2
              class="text-dark mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px] text-[#4d535f]"
            >
              Contáctanos
            </h2>
            <p
              class="text-base text-body-color leading-relaxed mb-9 text-[#4d535f]"
            >
              Aclaramos tus dudas y angedamos tus pedidos a través de
            </p>
            <ul class="mb-4 flex flex-col gap-1">
              <li>
                <a
                  aria-current="page"
                  class="active"
                  href="https://www.instagram.com/deuxcreativa/"
                  target="_blank"
                >
                  <button
                    class="middle none font-sans center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-1 text-xs text-[#4d535f] w-full flex items-center gap-4 px-4 hover:shadow-md rounded-md"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                      fill="#afa9ed"
                      aria-hidden="true"
                    >
                      <defs>
                        <style>
                          .cls-1 {
                            fill: none;
                            stroke: #00cccc;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                          }
                        </style>
                      </defs>
                      <path
                        class="cls-1"
                        d="M35.38,10.46a2.19,2.19,0,1,0,2.16,2.22v-.06A2.18,2.18,0,0,0,35.38,10.46Z"
                      />
                      <path
                        class="cls-1"
                        d="M40.55,5.5H7.45a2,2,0,0,0-1.95,2v33.1a2,2,0,0,0,2,2h33.1a2,2,0,0,0,2-2V7.45A2,2,0,0,0,40.55,5.5Z"
                      />
                      <path
                        class="cls-1"
                        d="M24,15.72A8.28,8.28,0,1,0,32.28,24h0A8.28,8.28,0,0,0,24,15.72Z"
                      />
                    </svg>
                    <p
                      class="block antialiased font-sans text-base leading-relaxed text-inherit"
                    >
                      instagram.com/DeuxCreativa
                    </p>
                  </button>
                </a>
              </li>
              <li>
                <a
                  aria-current="page"
                  class="active"
                  href="https://wa.me/584241313632"
                  target="_blank"
                >
                  <button
                    class="middle none font-sans center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-1 text-xs text-[#4d535f] w-full flex items-center gap-4 px-4 hover:shadow-md rounded-md"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#afa9ed"
                      viewBox="0 0 50 50"
                      aria-hidden="true"
                    >
                      <defs>
                        <style>
                          .cls-1 {
                            fill: none;
                            stroke: #00cccc;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                          }
                        </style>
                      </defs>
                      <path
                        class="cls-1"
                        d="M24,2.5A21.52,21.52,0,0,0,5.15,34.36L2.5,45.5l11.14-2.65A21.5,21.5,0,1,0,24,2.5ZM13.25,12.27h5.86a1,1,0,0,1,1,1,10.4,10.4,0,0,0,.66,3.91,1.93,1.93,0,0,1-.66,2.44l-2.05,2a18.6,18.6,0,0,0,3.52,4.79A18.6,18.6,0,0,0,26.35,30l2-2.05c1-1,1.46-1,2.44-.66a10.4,10.4,0,0,0,3.91.66,1.05,1.05,0,0,1,1,1v5.86a1.05,1.05,0,0,1-1,1,23.68,23.68,0,0,1-15.64-6.84,23.6,23.6,0,0,1-6.84-15.64A1.07,1.07,0,0,1,13.25,12.27Z"
                      />
                    </svg>
                    <p
                      class="block antialiased font-sans text-base leading-relaxed text-inherit"
                    >
                      (+58)-4241313632
                    </p>
                  </button>
                </a>
              </li>
              <li>
                <a
                  aria-current="page"
                  class="active"
                  href="mailto:deuxcreativa@gmail.com"
                >
                  <button
                    class="middle none font-sans center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-1 text-xs text-[#4d535f] w-full flex items-center gap-4 px-4 hover:shadow-md rounded-md"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#afa9ed"
                      viewBox="0 0 50 50"
                      aria-hidden="true"
                    >
                      <defs>
                        <style>
                          .cls-1 {
                            fill: none;
                            stroke: #00cccc;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                          }
                        </style>
                      </defs>
                      <path
                        class="cls-1"
                        d="M6.47,10.71a2,2,0,0,0-2,2h0V35.32a2,2,0,0,0,2,2H41.53a2,2,0,0,0,2-2h0V12.68a2,2,0,0,0-2-2H6.47Zm33.21,3.82L24,26.07,8.32,14.53"
                      />
                    </svg>
                    <p
                      class="block antialiased font-sans text-base leading-relaxed text-inherit"
                    >
                      deuxcreativa&#64;gmail.com
                    </p>
                  </button>
                </a>
              </li>
              <li>
                <a
                  aria-current="page"
                  class="active"
                  href="https://www.facebook.com/DeuxCreativa/"
                  target="_blank"
                >
                  <button
                    class="middle none font-sans center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-1 text-xs text-[#4d535f] w-full flex items-center gap-4 px-4 hover:shadow-md rounded-md"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                      fill="#afa9ed"
                      aria-hidden="true"
                    >
                      <defs>
                        <style>
                          .cls-1 {
                            fill: none;
                            stroke: #00cccc;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                          }
                        </style>
                      </defs>
                      <path
                        class="cls-1"
                        d="M24,42.5V18.57a5.07,5.07,0,0,1,5.08-5.07h0c2.49,0,4.05.74,5.12,2.12"
                      />
                      <line
                        class="cls-1"
                        x1="19.7"
                        y1="23.29"
                        x2="29.85"
                        y2="23.29"
                      />
                      <path
                        class="cls-1"
                        d="M7.48,5.5a2,2,0,0,0-2,2h0v33a2,2,0,0,0,2,2H40.52a2,2,0,0,0,2-2h0v-33a2,2,0,0,0-2-2H7.48Z"
                      />
                    </svg>
                    <p
                      class="block antialiased font-sans text-base leading-relaxed text-inherit"
                    >
                      facebook.com/DeuxCreativa
                    </p>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
          <div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
            <form>
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Nombre"
                  class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
              </div>
              <div class="mb-6">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
              </div>
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Telefono"
                  class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
              </div>
              <div class="mb-6">
                <textarea
                  rows="4"
                  placeholder="Mensaje"
                  class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  class="
                        w-full
                        text-white
                        bg-[#afa9ed]
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-70
                        "
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
            <div>
              <span class="absolute -top-10 -right-9 z-[-1]">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                    fill="#afa9ed"
                  />
                </svg>
              </span>
              <span class="absolute -right-10 top-[90px] z-[-1]">
                <svg
                  width="34"
                  height="134"
                  viewBox="0 0 34 134"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="31.9993"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 31.9993 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 31.9993 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 31.9993 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 31.9993 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 31.9993 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 31.9993 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 31.9993 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 31.9993 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 31.9993 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 31.9993 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 17.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 17.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 17.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 17.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 17.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 17.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 17.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 17.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 17.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 17.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 2.66536 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 2.66536 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 2.66536 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 2.66536 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 2.66536 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 2.66536 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 2.66536 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 2.66536 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 2.66536 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 2.66536 1.66665)"
                    fill="#13C296"
                  />
                </svg>
              </span>
              <span class="absolute -left-7 -bottom-7 z-[-1]">
                <svg
                  width="107"
                  height="134"
                  viewBox="0 0 107 134"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="104.999"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 104.999 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 104.999 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 104.999 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 104.999 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 104.999 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 104.999 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 104.999 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 104.999 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 104.999 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 104.999 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 90.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 90.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 90.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 90.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 90.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 90.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 90.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 90.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 90.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 90.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 75.6654 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 31.9993 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 75.6654 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 31.9993 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 75.6654 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 31.9993 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 75.6654 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 31.9993 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 75.6654 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 31.9993 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 75.6654 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 31.9993 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 75.6654 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 31.9993 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 75.6654 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 31.9993 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 75.6654 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 31.9993 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 75.6654 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 31.9993 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 60.9993 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 17.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 60.9993 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 17.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 60.9993 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 17.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 60.9993 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 17.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 60.9993 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 17.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 60.9993 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 17.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 60.9993 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 17.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 60.9993 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 17.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 60.9993 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 17.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 60.9993 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 17.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 46.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 2.66536 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 46.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 2.66536 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 46.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 2.66536 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 46.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 2.66536 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 46.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 2.66536 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 46.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 2.66536 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 46.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 2.66536 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 46.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 2.66536 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 46.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 2.66536 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 46.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 2.66536 1.66665)"
                    fill="#13C296"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
