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
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
					</p>
					<p className='mb-5'>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
					</p>
				</div>
			</div>
			<Working/>
		</div>
        
        </>
	);
}