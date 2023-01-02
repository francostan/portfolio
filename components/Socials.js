import React from 'react'
import { SiLinkedin, SiGithub, SiInstagram} from "react-icons/si";

const Socials = () => {
    const social = [SiInstagram, SiGithub, SiLinkedin];
    
  return (
    <div className="flex gap-5">
			{social.map((Icon, index) => {
				return <Icon key={index} className="w-6 h-6 text-zinc-400 hover:text-yellow-300 cursor-pointer" />;
			})}
		</div>
  )
}

export default Socials