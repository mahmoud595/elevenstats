import dynamic from "next/dynamic";

import { memo } from "react";
import { useDispatch } from "react-redux";

import Head from "next/head";
// import HomePage from "components/HomePage/HomePage";
import { fetchMatches, getMatchesType } from "store/actions/homeActions";
import apiAxios from "utils/apiAxios";

const DynamicHomePage = dynamic(
  () => import("components/pages/HomePage/HomePage"),
  {
    loading: () => <p>loading...</p>,
  }
);

function Live({ matches }) {
  const dispatch = useDispatch();
  dispatch(fetchMatches(matches));

  return (
    <>
      <Head>
        <title>Soccer Stats | Football stats - Elevenstats.com</title>
        <meta
          name="description"
          content="Elevenstats is dedicated to providing the world's most in-depth analysis of football/ soccer matches. check the most detailed expected goals xG, head-to-head, home/away forms, over or under, betting odds comparison, etc."
        />
      </Head>
      <DynamicHomePage />
    </>
  );
}

export async function getStaticProps({ req, res }) {
  try {
    const response = await apiAxios.get(`/fixtures/live`);

    if (!response?.data?.data) {
      return {
        notFound: true,
      };
    }

    const fixtures = response.data.data;

    return {
      props: {
        matches: fixtures,
      },
      revalidate: 30,
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
}

export default memo(Live);
