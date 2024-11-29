import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="my-8 font-yrsa">
      <h2 className="text-xl lg:text-4xl font-semibold text-gray-700 mb-4">{title}</h2>
      <div className="text-gray-600 text-base lg:text-xl font-normal w-full lg:w-[1000px]">{children}</div>
    </section>
  );
}

export default Section;
