/* eslint-disable @next/next/no-img-element */
const CascadeImg = ({
	src,
	top = false,
	position = "left",
	negative = false,
	imgClass = "",
}) => {
	return (
		<div
			className={`imgbg relative w-full before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-[1000%] before:bg-mustard mb-[70px] before:bigborder ${
				position === "left" ? "before:right-[50%]" : "before:left-[50%]"
			} ${negative ? "before:h-[calc(100%+70px)]" : ""}`}
		>
			<img
				src={src}
				alt="Mask Image"
				className={`w-[400px] h-[500px] object-cover ${
					top ? "" : "top-[70px]"
				} relative ${
					position === "left" ? "mr-[100px]" : "ml-[100px]"
				} imgClass`}
			/>
		</div>
	);
};
export default CascadeImg;
