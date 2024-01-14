import { Suspense, lazy } from "react";
const Footer = lazy(()=> import("../../shared/footer/Footer"))
const Loading = lazy(()=> import("../../components/Loading/Loading"))
const Rooms = lazy(() => import("../rooms page/Rooms"))
const About = lazy(() => import("../About Us/About"))
const Banner = lazy(() => import('../../components/home/Banner'))

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Banner />
        <About />
        <Rooms />
        <Footer />
      </main>
    </Suspense>
  );
};

export default Home;
