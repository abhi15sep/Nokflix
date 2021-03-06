import { all, call } from "redux-saga/effects";
import movie from "./movie";
import tv from "./tv";
import person from "./person";
import season from "./season";
export default function* rootSaga() {
  yield all([call(movie), call(tv), call(person), call(season)]);
}
