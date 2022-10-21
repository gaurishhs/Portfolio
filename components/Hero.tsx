import Typewriter from "typewriter-effect";
export const Hero = () => {
  return (
    <div className="px-4 justify-center flex align-middle items-center text-center py-16 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 font-rajdhani text-indigo-200">
            <h1 className="max-w-lg mb-6 text-sea-green-crayola text-7xl font-bold tracking-tight sm:leading-none">
              <b>Hey, I am Gaurish Sethia.</b>
            </h1>
            <div className="text-xl">
              <Typewriter
                options={{ delay: 80 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "I am a Full Stack Web Developer, I work mostly with languages like Javascript/Typescript and Golang. I use Web technologies such as React(Next.js, Preact.js), Vue(Nuxt.js, VuePress, Vuetify) with bundlers like Webpack 5 and ViteJS. I have more than 4 years of experience in web development."
                    )
                    .start();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
