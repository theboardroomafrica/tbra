import HeaderTitle from "@/app/sections/HeaderTitle";
import TBRAKey from "@/app/components/TBRAKey";
import CascadeImg from "@/app/components/CascadeImg";
import ArrowLink from "@/app/components/ArrowLink";
import FooterSection from "@/app/sections/FooterSection";
import KeySection from "@/app/sections/KeySection";

const Page = () => {
	return (
		<>
			<HeaderTitle title="Join the movement and access board opportunities." />

			<section className="container">
				<div className="grid grid-cols-2 gap-20">
					<div className="grid grid-cols-5 innerPadding gap-10">
						<KeySection
							heading="Access board opportunities"
							linkTitle="Learn about membership"
						>
							<p>
								TBrA members are part of a network of trusted
								female executives. We proactively promote
								members to board opportunities and support their
								leadership journeys.
							</p>
							<p>
								Join our community to unlock new board roles and
								access a network of other women leaders as well
								as other resources to support your board career.
							</p>
						</KeySection>
					</div>
					<CascadeImg
						position="right"
						negative
						top
						src="https://placeholder.com/400x500"
					/>
				</div>
			</section>

			<FooterSection />
		</>
	);
};
export default Page;
