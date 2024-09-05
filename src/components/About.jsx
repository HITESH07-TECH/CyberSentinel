import React from 'react';
import Working from './Working';

// import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

export default function About() {
	return (
        <>
		<div className='w-full bg-black py-10 pb-10'>
			<div className='w-10/12 mx-auto text-white'>
			<div id="about" className='capitalize font-white text-5xl md:text-6xl inline-block text-center mb-10 neon-green'>
					About
				</div>
				<div className='gap-y-10 text-sm md:text-base'>
					<p className='mb-5'>
                    At *CyberSentinel*, we are dedicated to ensuring the continuous availability and security of cloud-hosted web applications by providing cutting-edge protection against Distributed Denial-of-Service (DDoS) attacks. As businesses increasingly rely on cloud infrastructure, the risk of devastating downtime caused by malicious DDoS attacks has grown. Our mission is to deliver a robust, intelligent, and automated DDoS protection solution that keeps your services running smoothly and securely.

*CyberSentinel* is designed to automatically detect, mitigate, and recover from DDoS attacks in real-time. Leveraging advanced machine learning algorithms for anomaly detection, our system identifies unusual traffic patterns that could signal a potential attack. Once detected, the system instantly activates mitigation tools like rate limiting, IP blocking, and traffic filtering to neutralize threats before they can cause harm.
					</p>
					<p className='mb-5'>
					Our solution is easy to deploy on any NGINX server, with a user-friendly setup process and automated operation, making it accessible to businesses of all sizes. Whether you're a small startup or a large enterprise, *CyberSentinel* scales effortlessly to meet your needs, ensuring that your digital assets remain protected at all times.

With our commitment to innovation and security, *CyberSentinel* continues to evolve, incorporating new technologies like machine learning and geolocation verification, offering enhanced protection against even the most sophisticated attacks.
					</p>
					<p className='text-center text-xl font-bold pb-5'>Stay secure. Stay online. Let CyberSentinel safeguard your cloud infrastructure.</p>
				</div>
			</div>
			<Working/>
		</div>
        
        </>
	);
}