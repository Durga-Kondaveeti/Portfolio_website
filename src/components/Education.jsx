import React from 'react';
import { education } from '../data/content';
import { GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 text-accent rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <span className="text-sm font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">
                  {edu.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary">{edu.school}</h3>
              <p className="text-secondary font-medium">{edu.degree}</p>
              <div className="flex items-center mt-4 text-sm text-gray-400">
                <MapPin size={14} className="mr-1" />
                {edu.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;