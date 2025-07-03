import axios from "axios";
import { API, API_ROUTES } from "../constants";
import { errorMessage } from "../utilities/error_message";

const api = axios.create({
  baseURL: API.BASE_URL,
});

const getDifficulties = () =>
  api.get(API_ROUTES.DIFFICULTIES).then((res) => res.data);

const getWord = (id) =>
  api.get(`${API_ROUTES.DIFFICULTIES}/${id}`).then((res) => res.data);

const checkWord = (sessionId, word) =>
  api
    .post(API_ROUTES.CHECKWORD, { sessionId, word })
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

export { getDifficulties, getWord, checkWord };
