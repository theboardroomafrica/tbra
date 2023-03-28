/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/slides.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const InstructorSlides = () => {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<div class="text-center ' +
				className +
				'">' +
				'<img src="https://via.placeholder.com/200" className="rounded-full" />' +
				"<p>Kofi Baboni</p>" +
				"</div>"
			);
		},
	};

	return (
		<>
			<section className="bg-dawn-200 py-8 instructor-slides">
				<Swiper
					pagination={pagination}
					loop={true}
					modules={[Pagination, Navigation]}
					cssMode="true"
					navigation={true}
					className="mySwiper"
					// className="bg-transparent"
				>
					{[...Array(4)].map((e, i) => (
						<SwiperSlide
							key={i}
							className="flex justify-center items-center mt-16 mb-48"
						>
							<div className="container grid grid-cols-2 gap-24 items-center">
								<div className="prose text-left">
									<h2>Name of Facilitator</h2>
									<p className="font-bold">Title Here</p>
									<p>
										Lorem ipsum, dolor sit amet consectetur
										adipisicing elit. Eveniet maxime ullam
										laborum quis accusantium provident,
										fugiat, quae quisquam doloremque rem,
										nihil recusandae perferendis nulla at
										odit. Fugiat alias illo assumenda!
									</p>
									<p>
										Lorem ipsum, dolor sit amet consectetur
										adipisicing elit. Eveniet maxime ullam
										laborum quis accusantium provident,
										fugiat, quae quisquam doloremque rem,
										nihil recusandae perferendis nulla at
										odit. Fugiat alias illo assumenda!
									</p>
								</div>
								<img
									src="https://via.placeholder.com/500"
									alt=""
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	);
};
export default InstructorSlides;