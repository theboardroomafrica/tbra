/* eslint-disable @next/next/no-img-element */

import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { bottomMenu } from "../utils/options";

const FooterMenu = () => {
	return (
		<footer className="px-4 bg-tender text-dawn-200 bigborder">
			<div className="container flex flex-col justify-between py-32 mx-auto space-y-8 lg:flex-row lg:space-y-0">
				<div className="lg:w-1/5">
					<a
						href="#"
						className="flex justify-center space-x-3 lg:justify-start"
					>
						<div className="flex items-center justify-center w-12 h-12 rounded-full">
							<img
								src="https://theboardroomafrica.com/wp-content/themes/tbra/assets/images/logo-secondary.svg"
								alt="logo"
							/>
						</div>
					</a>
				</div>
				<div className="grid grid-cols-2 gap-x-3 gap-y-8 lg:w-4/5 sm:grid-cols-4">
					{bottomMenu.map((menus, i) => (
						<div key={i} className="space-y-3">
							<ul className="space-y-3">
								{menus.map((menu, i) => (
									<li key={i}>
										<a href={menu.url}>{menu.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}

					<div className="space-y-3 justify-self-center">
						<div className="uppercase font-bold">Follow us</div>
						<div className="flex justify-start space-x">
							<a
								href="#"
								title="Twitter"
								className="flex items-center p-1"
							>
								<FaTwitterSquare className="text-2xl" />
							</a>
							<a
								href="#"
								title="Instagram"
								className="flex items-center p-1"
							>
								<FaLinkedin className="text-2xl" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="py-6 text-center">
				© {new Date().getFullYear()} TheBoardroom Africa. All rights
				reserved.
			</div>
		</footer>
	);
};
export default FooterMenu;
