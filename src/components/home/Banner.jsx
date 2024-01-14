import { lazy } from "react";
import { Suspense } from "react";
import { images } from "../../shared/images";
import DefaultBtn from "../DefaultBtn/DefaultBtn";
const Loading = lazy(() => import("../Loading/Loading"))




const banner = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="relative">
        <div className=" relative">
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img className="w-full opacity-85 bg-dark" src={images.banner2} alt="" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img className="w-full opacity-85" src={images.banner} alt="" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img className="w-full opacity-85" src={images.banner2} alt="" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img className="w-full opacity-85" src={images.banner} alt="" />
            </div>
          </div>
          <article className="absolute text-white top-24 w-1/2 py-12 pl-40 space-y-6">
            <h2 className="text-6xl font-bold -ml-12">Hello Welcome To Best Hotel</h2>
            <p className="font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nam fugit adipisci labore quod sed deleniti et maiores sint est quidem, amet asperiores, suscipit similique nemo neque omnis dignissimos. Itaque?</p>
            <DefaultBtn key={1} text={'Read More'} />
          </article>
        </div>
        <div className="flex justify-center w-full py-2 gap-2 absolute bottom-7">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
      </main>


    </Suspense>
  );
};

export default banner;











