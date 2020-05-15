import React, { useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovieUpcoming,
  loadMovieNow,
  loadPopularMovie,
  loadMovieTrend,
} from "../../reducers/movie";
import { loadTopRatedTV, loadPopularTV } from "../../reducers/tv";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const {
    movieNowPlaying,
    upComingMovie,
    moviePopular,
    isMovieNowLoading,
    isUpcomingLoading,
    isMoviePopularLoading,
    movieTrend,
    isMovieTrendLoading,
  } = useSelector((state) => state.movie);
  const {
    topRatedTV,
    tvPopular,
    isTopRatedTVLoading,
    isTVPopularLoading,
  } = useSelector((state) => state.tv);
  useEffect(() => {
    dispatch(loadMovieUpcoming());
    dispatch(loadMovieNow());
    dispatch(loadPopularMovie());
    dispatch(loadTopRatedTV());
    dispatch(loadPopularTV());
    dispatch(loadMovieTrend());
  }, [dispatch]);
  return (
    <HomePresenter
      nowPlaying={movieNowPlaying}
      nowPlayingLoading={isMovieNowLoading}
      upcoming={upComingMovie}
      upComingLoading={isUpcomingLoading}
      moviePopular={moviePopular}
      popularLoading={isMoviePopularLoading}
      topRatedTV={topRatedTV}
      topRatedTVLoading={isTopRatedTVLoading}
      tvPopular={tvPopular}
      tvPopularLoading={isTVPopularLoading}
      movieTrend={movieTrend}
      isMovieTrendLoading={isMovieTrendLoading}
    />
  );
};

export default HomeContainer;
