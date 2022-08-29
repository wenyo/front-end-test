import axios from "axios";

export const newsDataGet = function () {
  return axios({
    method: "get",
    url: "https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79",
  });
};
