import React from 'react';
import PCard from './FCard';
import { faShieldAlt, faServer, faLock, faExclamationTriangle, faBan, faBalanceScale, faTrafficLight, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function Theme() {

	const product = [
		{ title: 'Block Excess Ports', description: 'It blocks excess ports.',icon: faShieldAlt },
		{ title: 'NGINX configuration', description: 'Open-source web server software used for reverse proxy, load balancing, and caching.', icon: faServer },
		{ title: 'DDos Protection', description: ' Filter out attack traffic to prevent it from reaching the intended targeted asset. ', icon: faLock },
		{ title: 'Anomaly Detection', description: 'It is the identification of unexpected events, observations, or items that differ significantly from the norm.', icon: faExclamationTriangle },
		{ title: 'IP Blacklisting', description: 'IP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks.', icon: faBan },
		{ title: 'Rate Binding', description: 'Commitment not to increase a rate of duty beyond an agreed level.', icon: faBalanceScale },
        { title: 'Traffic Monitoring', description: 'Method of studying the incoming and outgoing traffic on a computer network via specialized hardware and/or software', icon: faTrafficLight },
        { title: 'Visualizer', description: 'It gives graph of how many times an IP has made requests in a minute. It also shows block listed IPs.', icon: faChartLine },

	];

	return (
		<div className="bg-[url('/bg.jpg')] bg-fixed bg-cover relative bg-center bg-opacity-25 w-full mb-20">
        <div id="features" className='abosule inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)]'>
			<div className='w-10/12 mx-auto'>
				<div className='capitalize font-white  text-5xl md:text-6xl inline-block text-center mb-10'>
				<h3 className='text-white neon-green'>Features</h3>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
				{product.map((product, index) => (
						<PCard key={index} title={product.title} description={product.description} icon={product.icon} /> //mapping themes
					))}
				</div>
			</div>
		</div>
        </div>
	);
}