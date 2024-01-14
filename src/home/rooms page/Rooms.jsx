import { Suspense, lazy } from "react";
const Loading = lazy(() => import("../../components/Loading/Loading"))
const DefaultBtn = lazy(() => import("../../components/DefaultBtn/DefaultBtn"))
const HeadingText = lazy(() => import("../../components/HeadingText/HeadingText"))
import { RoomsData } from "./RoomsData";



const Rooms = () => {

    console.log(RoomsData)

    return (
        <Suspense fallback={<Loading />}>
            <main className="my-24">
                <div className="flex justify-between px-5 mt-24 mb-12">
                    <div>
                        <HeadingText heading={'Rooms & Suites'} subHeading={'RAISING COMFORT TO THE HIGHEST LEVEL'} />
                    </div>
                    <div>
                        <DefaultBtn text={'View All'} />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 px-10">
                    {
                        RoomsData?.map(room => <>
                            <div className=" card-compact w-5/6  shadow-xl">
                                <figure><img src={room.img} alt="Shoes" /></figure>
                                <div className="card-body ">
                                    <div className="py-3">
                                        <h2 className="card-title">{room.title}</h2>
                                        <p>{room.price}</p>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </main>
        </Suspense>
    );
};

export default Rooms;