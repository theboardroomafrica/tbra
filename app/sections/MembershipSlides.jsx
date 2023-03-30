/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/slides.css";

import { Pagination, Autoplay } from "swiper";
import Link from "next/link";
import { memberSlides } from "@/app/utils/options";

const MembershipSlides = () => {
	const pagination = {
		clickable: true,
	};

	return (
		<Swiper
			autoplay={{
				delay: 4500,
				disableOnInteraction: false,
			}}
			loop={true}
			pagination={pagination}
			modules={[Pagination, Autoplay]}
			className="membership-slides"
		>
			{memberSlides.map((slide, i) => (
				<SwiperSlide
					key={i}
					className="bigborder"
					style={slide.style || {}}
				>
					<div className="flex container min-h-screen relative px-4 items-center">
						<img
							src="/images/white-key.png"
							className="absolute left-0 h-[75%] -z-1 opacity-3"
							alt=""
						/>
						<div className="z-10 text-xl flex flex-col gap-6 my-28">
							<h1 className="text-mustard">{slide.title}</h1>
							<div className=" md:max-w-[65%]">
								<p className=" text-dawn">{slide.content}</p>
								<div className="text-center mt-10">
									<Link
										href="#!"
										className="btn bg-dawn font-normal"
									>
										Apply Now
									</Link>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default MembershipSlides;