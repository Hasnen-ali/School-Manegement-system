import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGraduationCap,
	faGear,
	faNewspaper,
	faBook,
	faTable,
	faCalendarDay,
	faCommentDollar,
	faClipboardList,
	faChalkboardUser,
	faHollyBerry,
	faBuilding,
	faBookOpenReader,
	faTableCellsLarge,
	faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../DirectorsDropdown/Dropdown";

const Sidebar = ({ isOpen }) => {
	const directorItems = [
		{ path: "/directorList", label: "Director List" },
		{ path: "/directorView", label: "Director View" },
		{ path: "/directorAdd", label: "Director Add" },
		{ path: "/directorEdit", label: "Director Edit" },
	];

	return (
		<aside className={isOpen ? "sidebar open" : "sidebar"} style={{ height: "90vh" }}>
			{/* main menu start */}
			<div className="py-5 pl-5 px-3 text-gray-500">Main Menu</div>
			<ul className=" space-y-7 pl-6 text-gray-500">
				<li>
					<NavLink to="/dashboard" className="flex items-center px-4">
						<FontAwesomeIcon icon={faTableCellsLarge} />
						<span className="ml-4">Dashboard</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/students" className="flex items-center px-4">
						<FontAwesomeIcon icon={faGraduationCap} />
						<span className="ml-4">Students</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/teachers" className="flex items-center px-4">
						<FontAwesomeIcon icon={faChalkboardUser} />
						<span className="ml-4">Teachers</span>
					</NavLink>
				</li>
				{/* Directors dropdown */}
				<li>
					<Dropdown title="Directors" items={directorItems} />
					{/* <Dropdown/> */}
				</li>
				{/* Ending of Directors dropdown */}
				<li>
					<NavLink to="/departments" className="flex items-center px-4">
						<FontAwesomeIcon icon={faBuilding} />
						<span className="ml-4">Departments</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/subjects" className="flex items-center px-4">
						<FontAwesomeIcon icon={faBookOpenReader} />
						<span className="ml-4">Subjects</span>
					</NavLink>
				</li>
			</ul>
			{/* main menu end */}
			{/* Management menu start */}
			<div className="py-5 pl-5 px-3 text-gray-500">Management</div>
			<ul className=" space-y-7 pl-6 text-gray-500">
				<li>
					<NavLink to="/accounts" className="flex items-center px-4">
						<FontAwesomeIcon icon={faFileInvoiceDollar} />
						<span className="ml-4">Accounts</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/holiday" className="flex items-center px-4">
						<FontAwesomeIcon icon={faHollyBerry} />
						<span className="ml-4">Holiday</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/fees" className="flex items-center px-4">
						<FontAwesomeIcon icon={faCommentDollar} />
						<span className="ml-4">Fees</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/examlist" className="flex items-center px-4">
						<FontAwesomeIcon icon={faClipboardList} />
						<span className="ml-4">Exam List</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/events" className="flex items-center px-4">
						<FontAwesomeIcon icon={faCalendarDay} />
						<span className="ml-4">Events</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/timetable" className="flex items-center px-4">
						<FontAwesomeIcon icon={faTable} />
						<span className="ml-4">Time Table</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/library" className="flex items-center px-4">
						<FontAwesomeIcon icon={faBook} />
						<span className="ml-4">Library</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/blog" className="flex items-center px-4">
						<FontAwesomeIcon icon={faNewspaper} />
						<span className="ml-4">Blog</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/settings" className="flex items-center px-4">
						<FontAwesomeIcon icon={faGear} />
						<span className="ml-4">Settings</span>
					</NavLink>
				</li>
			</ul>
			{/* Management menu end */}
		</aside>
	);
};

export default Sidebar;
