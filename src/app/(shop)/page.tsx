import {
  HomeBanner,
  HomeKeyboard,
  HomeKeycap,
  HomeSellingProduct,
} from "@/components";

const Home = () => {
  return (
    <main>
      <div className="w-full h-full flex flex-col items-center">
        <HomeBanner />
        <HomeSellingProduct />
        <HomeKeyboard />
        <HomeKeycap />
      </div>
    </main>
  );
};
export default Home;
