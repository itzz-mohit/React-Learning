import { useEffect, useState } from "react";
import { Header, Footer, Banner, NewsCards } from "./components";

function App() {
  const [newsItems, setNews] = useState([]);
  const [visibleCards, setVisibleCards] = useState(4);

  const fetchNews = async () => {
    const response = await fetch(
      "https://www.inshorts.com/api/en/search/trending_topics/sports?page=2&type=NEWS_CATEGORY"
    );
    const json = await response.json();
    setNews(json.data.suggested_news);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  return (
    <div className="mt-24">
      <Header />
      <Banner />
      <div>
        {newsItems.slice(0, visibleCards).map((news, index) => (
          <NewsCards key={index} newsData={news.news_obj} />
        ))}
      </div>
      {visibleCards < newsItems.length && (
        <div className="flex justify-center my-7">
          <button
            onClick={handleLoadMore}
            className="bg-red-600 hover:bg-red-500 py-2 px-8 rounded-sm shadow-2xl text-white"
          >
            Load More
          </button>
        </div>
      )}
      <Footer />
      
    </div>
  );
}

export default App;
