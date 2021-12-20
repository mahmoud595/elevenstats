import dynamic from "next/dynamic";

import { memo } from "react";
import { useDispatch } from "react-redux";

import Head from "next/head";

import { fetchMatches, getTimeZoneCountry } from "store/actions/homeActions";
import { startEndDate } from "utils/helperFunctions/homeHelperFunctions";
import apiAxios from "utils/apiAxios";

const DynamicHomePage = dynamic(
  () => import("components/pages/HomePage/HomePage"),
  {
    loading: () => <p>loading...</p>,
  }
);

function Index({ item }) {
  const dispatch = useDispatch();
  // dispatch(fetchMatches(matches));
  // dispatch(getTimeZoneCountry(timeZone, date));

  console.log(item);
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

export async function getStaticPaths() {
  return {
    paths: [],

    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  let data = ctx.params.data;

  console.log(data);
  //   const { format, utcToZonedTime } = require("date-fns-tz");
  //   const fs = require("fs");

  //   const requestIp = require("request-ip");
  //   const geoip = require("geoip-lite");

  try {
    // const detectedIp = requestIp.getClientIp(req);

    // let geo = geoip.lookup(detectedIp || "102.44.250.170");

    // let timeZone = geo?.timezone || "Africa/Cairo";
    // const myDate = utcToZonedTime(new Date().toISOString(), timeZone);
    // let date;
    // query.date
    //   ? (date = query.date)
    //   : (date = format(myDate, "yyyy-MM-dd", { timeZone: timeZone }));

    // const [fromDate, toDate] = startEndDate(timeZone, date);

    // const response = await apiAxios.get(
    //   `/fixtures?from=${fromDate}&to=${toDate}&timezone=${timeZone}`
    // );

    // if (!response?.data?.data) {
    //   return {
    //     notFound: true,
    //   };
    // }

    // const fixtures = response.data.data;

    // fs.writeFile(`${date}.json`, JSON.stringify(fixtures), function (err) {
    //   if (err) return console.log(err);
    // });

    // res.setHeader(
    //   "Cache-Control",
    //   "public, s-maxage=10, stale-while-revalidate=59"
    // );

    return {
      props: {
        // matches: fixtures,
        // timeZone,
        item: data[0],
      },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
}

export default memo(Index);
