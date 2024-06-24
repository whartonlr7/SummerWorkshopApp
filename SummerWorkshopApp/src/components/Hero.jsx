const Hero = ({
    title = 'Welcome to the 2024 Summer Workshop',
    subtitle = 'Paragraph description of what the workshop entails, why we do the workshop, what to expect, what to bring, exc...If you’re wondering how we automatically generated the 50–950 shades of each color, bad news — color is complicated and to get the absolute best results we picked all of Tailwind’s default colors by hand, meticulously balancing them by eye and testing them in real designs to make sure we were happy with them.',
  }) => {
    return (
      <section className='py-20 mb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold myBlack sm:text-5xl md:text-6xl'>
              {title}
            </h1>
            <p className='my-4 text-xl myBlack'>{subtitle}</p>
          </div>
        </div>
      </section>
    );
  };
  export default Hero;