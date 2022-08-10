import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

const Get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(`${root ? OnlineRoot : RootPath}/${path}`)
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
  return promise;
};

export default Get;
