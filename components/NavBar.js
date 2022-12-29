import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    //quede en el minuto 8:00
    //https://www.youtube.com/watch?v=y3nE6F5T9jo&ab_channel=DailyWebCoding


 const links = [
		{
			text: "About me",
			path: "/about",
		},
		{
			text: "Article",
			path: "/article",
		},
		{
			text: "Projects",
			path: "/projects",
		},
		{
			text: "Contact",
			path: "/contact",
		},
	];

	return (
		<nav className="flex justify-center items-center w-full ">
			<div className=" text-zinc-400 flex gap-6 items-center shadow-md border border-zinc-700 rounded-full px-5 py-3 text-base bg-zinc-800">
				{links.map(({ text, path }, index) => {
					return (
						<Link
							key={index}
							className="hover:text-yellow-300 cursor-pointer"
							href={path}
						>
							{text}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
export default NavBar