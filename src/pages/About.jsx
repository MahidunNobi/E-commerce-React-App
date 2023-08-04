import React from 'react'

const About = () => {
  return (
    <div>
        <div className="container mx-auto">
            <div className="topBar md:flex md:justify-between md:flex-row-reverse items-center my-6">
                <div className="img md:w-[45%] md:m-0 mb-6">
                    <img src="./About.jpg" className='w-full' alt="About Image" />
                </div>
                <div className="topText md:w-[45%] md:space-y-20 space-y-6 md:p-0 px-4">
                    <h1 className="text-6xl"> Hello There... </h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga dolorum voluptate a odio veniam deleniti repellat provident esse, quasi vel dolor! Vitae enim illum velit repellat quam nesciunt! Voluptatibus, iste!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ea neque provident vel tenetur vero repudiandae odio fugiat facilis consequuntur, necessitatibus possimus ullam, quae nobis, ex iure. Voluptas, porro quibusdam.</p>
                    <button className=' text-initialColor border-2 border-initialColor rounded-md duration-300 hover:bg-initialColor hover:text-white py-1 px-3 text-xl'>Click For More</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About