import { useState, useEffect } from "react";
import { newsDataGet } from "../util/api";

function Content({ props }) {
  const [newsList, setNewsList] = useState([]);
  console.log(props);

  function timeDisplay(time) {
    const thisDate = `${new Date(time).getDate + 1}月${new Date(time).getDay}日`;
    const thisTimeStamp = new Date(time).valueOf();
    const nowTimeStamp = new Date().valueOf();
    const second = (nowTimeStamp - thisTimeStamp) / 1000;
    const oneMinute = 60;
    const oneHours = oneMinute * oneMinute;
    const oneDay = oneHours * 24;

    if (second < oneHours) {
      return `${Math.floor(second / oneMinute)}分鐘前`;
    }

    if (second < oneDay) {
      return `${Math.floor(second / oneHours)}小時前`;
    }

    return thisDate;
  }

  // init data
  useEffect(() => {
    newsDataGet().then((x) => setNewsList(x.data.articles));
  }, []);

  return (
    <div className="grow overflow-y-auto pr-40 pl-10">
      <h3 className="h-12 flex items-center">{props}</h3>
      <ul className="grid grid-cols-3 grid-flow-row gap-4 py-2.5">
        {newsList.map((news, key) => {
          return (
            <li key={key} className="relative rounded pb-10 overflow-hidden shadow-[0_0_4px_0_rgba(0,0,0,0.2)]">
              <div className="w-full h-0 pb-[56%] bg-cover  overflow-hidden" style={{ backgroundImage: `url(${news.urlToImage})` }}></div>
              <h4 className="px-2 mt-1 text-sm">{news.title}</h4>
              <div className="absolute bottom-0 left-0 p-2 text-xs text-gray-500">
                <span>{news.author}</span>
                <span className="ml-2">{timeDisplay(news.publishedAt)}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Content;
