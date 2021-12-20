import { useDispatch } from "react-redux";

import { PlayerSearchPage } from "components/pages/PlayerSearchPage/PlayerSearchPage";
import apiAxios from "utils/apiAxios";
import { fetchPlayerSearchData } from "store/actions/playerSearchActions";

const PlayerSearch = (props) => {
  const dispatch = useDispatch();
  dispatch(fetchPlayerSearchData(props));
  return <PlayerSearchPage />;
};

export async function getStaticProps({ req, res }) {
  try {
    const [
      playerStatsResponse,
      countriesResponse,
      positionsResponse,
      playerAtrributesResponse,
      playersStatsSeasonsResponse,
    ] = await Promise.allSettled([
      apiAxios.get(`/playersStats?limit=30`),
      apiAxios.get("/countries"),
      apiAxios.get(`/positions`),
      apiAxios.get(`/playersAttributes`),
      apiAxios.get(`/playersStatsSeasons`),
    ]);

    if (
      playerStatsResponse?.status !== "fulfilled" ||
      playerStatsResponse?.value?.data?.data?.length === 0
    ) {
      return {
        notFound: true,
      };
    }

    const players = playerStatsResponse?.value?.data?.data || [];
    const counteries = countriesResponse?.value?.data?.data || [];
    const positions = positionsResponse?.value?.data?.data || [];
    const playersAttributes = playerAtrributesResponse?.value?.data?.data || [];
    const seasons = playersStatsSeasonsResponse?.value?.data?.data || [];

    // fs.writeFile("./players.json", JSON.stringify(players), function (err) {
    //   if (err) return console.log(err);
    // });

    return {
      props: {
        players,
        counteries,
        positions,
        playersAttributes,
        seasons,
      },
      revalidate: 3000,
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
}

export default PlayerSearch;
