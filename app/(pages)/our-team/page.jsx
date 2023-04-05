import TeamCard from "@/app/components/TeamCard";
import HeaderTitle from "@/app/sections/HeaderTitle";
import SectionTitle from "@/app/components/SectionTitle";
import { fetchData } from "@/app/lib/fetchData";

const page = async () => {
	const data = await fetchData("teams/1?populate=*");
	const attributes = data?.data?.attributes;

	return (
		<>
			<HeaderTitle title="Our Team" />
			<section className="my-16" data-aos="fade-up">
				<div className="container md:px-44">
					<SectionTitle title={attributes.Heading.title} />
					<div className="grid grid-cols-3 gap-10 mt-10">
						<TeamCard teamInfo={attributes.TeamMember} />
					</div>
				</div>
			</section>
		</>
	);
};
export default page;
