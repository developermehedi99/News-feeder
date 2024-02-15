const RightSideNews = ({ newes }) => {
  const { urlToImage, title, publishedAt, description } = newes;
  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {/* news item */}

        <div className="col-span-12 mb-6 md:col-span-8">
          <img className="w-full" src={urlToImage} alt="thumb" />
          {/* info */}
          <div className="col-span-12 mt-6 md:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                {title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">{description}</p>
            <p className="mt-5 text-base text-[#94908C]">{publishedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNews;
