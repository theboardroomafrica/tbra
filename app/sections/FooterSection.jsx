import TBRAKey from "../components/TBRAKey";
import Stats from "../components/Stats";
const FooterSection = () => {
	return (
		<>
			<section className="mt-10 bg-gray-50 py-10">
				<div className="container">
					<h1 className="text-darkgray text-center">Our Impact</h1>
					<div className="grid grid-cols-4 gap-10 mx-20 mt-10">
						<Stats stat="14" info="Valentine's Day Cake Recipes" />
						<Stats stat="14" info="Valentine's Day Cake Recipes" />
						<Stats stat="14" info="Valentine's Day Cake Recipes" />
						<Stats stat="14" info="Valentine's Day Cake Recipes" />
					</div>
				</div>
			</section>

			<section className="py-10">
				<div className="container">
					<div className="text-center mx-auto max-w-sm">
						<h2 className="text-darkgray text-center inline-block mr-8 mt-4">
							Join Us
						</h2>
						<TBRAKey small />
						<p className="mt-4">
							Become a member of the leading community for female
							executives working in Africa. Build your network,
							enhance your profile, and seize new opportunities.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};
export default FooterSection;