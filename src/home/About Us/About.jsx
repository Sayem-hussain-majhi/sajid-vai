import { Suspense } from "react";
import { lazy } from "react";
import { images } from "../../shared/images";
const HeadingText = lazy(() => import("../../components/HeadingText/HeadingText"))
const Loading = lazy(() => import("../../components/Loading/Loading"))

const About = () => {
    return (
        <Suspense fallback={<Loading />}>
            <main className="mt-32 mb-28">
                <div className="flex justify-evenly">
                    <div className="w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="w-52">
                                <img className="w-full" src={images.about1} alt="" />
                            </div>
                            <div className="w-52 h-64 absolute top-[155px] left-28">
                                <img className="w-full " src={images.about2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 ">

                        <HeadingText
                            heading={'Welcome to Luviana Hotel Resort'}
                            subHeading={'RAISING COMFORT TO THE HIGHEST LEVEL'} />

                        <article className="p-7 pr-16 text-[14px] ">
                            <p>
                                The Hotel Luviana is the right choice for visitors who are searching for a combination of charm and a convenient position from where to explore surroundings.</p>
                                    <br />
                                <p>
                                The rooms are arranged on the first, second and third floors. On the top floor, there is also a charming terrace or solarium available for the use of guests, from where you can enjoy the view.
                                </p>
                        </article>
                    </div>
                </div>
            </main>
        </Suspense>
    );
};

export default About;