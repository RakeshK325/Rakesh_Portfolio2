import React from 'react'

const SERVICES = [
  {
    title: 'Websites and App Development',
    body:
      'From idea to launch, full cycle development including frontend, backend, and deployment.',
  },
  {
    title: 'AI Automation Systems',
    body:
      'Designing and integrating AI Automation to optimize workflows, reduce manual effort, and enhance system intelligence.',
  },
  {
    title: 'UI/UX Design',
    body:
      'Minimal, clean, and user-focused interfaces aligned with modern standards.',
  },
  {
    title: 'Brand Identity',
    body:
      'Creating complete visual identities that define and elevate digital products.',
  },
]

const SubHeader = () => {
  return (
    <div className='relative z-20 w-full self-start rounded-3xl bg-bg/95 px-5 py-6 md:col-start-2 md:row-start-2 md:mt-8 md:w-full md:max-w-2xl md:justify-self-end md:px-8 md:py-8'>
      <div className='w-full text-base md:text-2xl flex flex-col gap-3 md:gap-4 leading-relaxed md:leading-snug text-left'>
        <p>
          Rakesh K is a Computer Science and Engineering student at Alva's Institute of Engineering and Technology (CGPA: 7.6), based in Bangalore, Karnataka, India.
        </p>
        <p>
          Specialized in full-stack web architectures (React, Next.js, Node.js, Flask), database design, REST APIs, AI systems, and cloud integration.
        </p>
      </div>

      <div className='about-inline-services w-full mt-8 md:mt-12 h-auto'>
        <div className='about-inline-services__head'>
          <span className='about-inline-services__label'>SERVICES</span>
        </div>
        <div className='about-inline-services__grid'>
          {SERVICES.map((service) => (
            <article key={service.title} className='about-inline-services__item'>
              <h4>{service.title}</h4>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubHeader
