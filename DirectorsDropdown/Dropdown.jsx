import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ title, items }) => {	
	return (
		<div className="mx-auto max-w-lg">
			<div className="divide-y divide-gray-100">
				<details className="group">
					<summary className="flex cursor-pointer list-none items-center text-md font-small text-secondary-900">&nbsp;&nbsp;&nbsp;&nbsp;
						<FontAwesomeIcon icon={faChalkboardUser} />
						&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;&nbsp;
						<div className="text-secondary-500 transition-transform duration-300">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="block h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
					</summary>
					<div className="pb-4 text-secondary-500">
						{items.map((item, index) => (
							<li key={index}>
								<NavLink
									to={item.path}
									className="custom-navlink"
								>
									{item.label}
								</NavLink>
							</li>
						))}
					</div>
				</details>
			</div>
		</div>
	);
};

export default Dropdown;
