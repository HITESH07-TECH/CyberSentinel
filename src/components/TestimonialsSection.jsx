import React from 'react';

const testimonials = [
  { name: 'Company A', feedback: 'Excellent service with top-notch security.' },
  { name: 'Company B', feedback: 'Reliable and effective protection.' },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="testimonials">
  <h1 className="text-4xl font-bold uppercase">Testimonials</h1>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="testimonial-item mt-4">
        <p className="text-lg">{testimonial.feedback}</p>
        <h4 className="text-xl font-semibold">- {testimonial.name}</h4>
      </div>
    ))}
  </section>
);

export default TestimonialsSection;
