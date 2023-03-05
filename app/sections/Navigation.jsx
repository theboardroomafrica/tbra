/* eslint-disable @next/next/no-img-element */
import Menu from "../components/Menu";
import AppMenu from "../components/AppMenu";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";

const Navigation = () => {
	return (
		<div className="bg-white shadow">
			<div className="container px-4">
				<div className="flex items-center justify-between py-4">
					<Link href="/">
						<img
							src="https://theboardroomafrica.com/wp-content/themes/tbra/assets/images/logo-primary.svg"
							width="100px"
							alt="Logo"
						/>
					</Link>

					<div className="hidden lg:flex lg:items-center text-darkblue">
						<Menu />
					</div>

					<div className="flex items-center">
						<AppMenu className="hidden sm:inline-block" />
						<CgMenu className="text-4xl border rounded ml-6 p-1 lg:hidden" />
					</div>
				</div>

				<div className="block lg:hidden bg-white border-t-2 py-2">
					<div className="flex flex-col text-darkblue">
						<Menu />
						<AppMenu className="sm:hidden flex justify-between items-center border-t-2 pt-2" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Navigation;
