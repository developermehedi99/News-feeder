import { useNewsQuery } from "../../hooks";
import LeftSideNews from "./LeftSideNews";
import RightSideNews from "./RightSideNews";
const Main = () => {
  const news = useNewsQuery();
  console.log(news);

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* {/* left */}
        {news?.articles?.map((newes, index) => (
          <LeftSideNews key={index} newes={newes}></LeftSideNews>
        ))}

        {/* right */}
        {news?.articles?.map((newes, index) => (
          <RightSideNews key={index} newes={newes}></RightSideNews>
        ))}
      </div>
    </main>
  );
};

export default Main;
