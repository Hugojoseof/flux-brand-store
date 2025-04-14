"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function Topbar1() {
  return (
    <div className="tf-top-bar bg_white line">
      <div className="px_15 lg-px_40">
        <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
          <ul className="tf-top-bar_item tf-social-icon d-flex gap-10">
            <li>
              <a
                href="https://www.instagram.com/fluxbrand.br/" target="_blank" rel="noopener noreferrer"
                className="box-icon w_28 round social-instagram bg_line"
              >
                <i className="icon fs-12 icon-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@fluxbrand.br" target="_blank" rel="noopener noreferrer" className="box-icon w_28 round social-tiktok bg_line">
                <i className="icon fs-12 icon-tiktok" />
              </a>
            </li>
          </ul>
          <div className="text-center overflow-hidden">
            <Swiper
              className="swiper tf-sw-top_bar"
              slidesPerView={1}
              modules={[Autoplay]}
              speed={1000}
              autoplay={{
                delay: 2000,
              }}
              loop
            >
              <SwiperSlide className="swiper-slide">
                <p className="top-bar-text fw-5">
                  Conheça a nova coleção da Flux Brand{" "}
                  <Link
                    href={`/shop`}
                    title="Nova coleção"
                    className="tf-btn btn-line"
                  >
                    Ver agora
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <p className="top-bar-text fw-5">
                  de jovens, para JOVENS!
                </p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <p className="top-bar-text fw-5">
                  + atitude + estilo + qualidade
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
