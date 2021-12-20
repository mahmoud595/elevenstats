import { NextRequest, NextResponse } from "next/server";
// import { COOKIE_NAME } from "@lib/constants";
// import { getCurrentExperiment } from "@lib/optimize";

// import requestIp from "request-ip";
// import geoip from "geoip-lite";

// const requestIp = require("request-ip");

// const requestIp = require("request-ip");
// const geoip = require("geoip-lite");

export function middleware(request, event) {
  let res = NextResponse.next();
  //   let cookie = req.cookies[COOKIE_NAME];
  // console.log(Object.keys(request.sourcePage));
  console.log(request?.geo?.location || "notFound");
  //   if (!cookie) {
  //     let n = Math.random() * 100
  //     const experiment = getCurrentExperiment()
  //     const variant = experiment.variants.find((v, i) => {
  //       if (v.weight >= n) return true
  //       n -= v.weight
  //     })

  //     cookie = `${experiment.id}.${variant.id}`
  //   }
  // const fs = import("fs");
  // let getIp = get_ip().get_ip;
  // var ip_info = getIp(request);
  // console.log(get_ip().get_ip(request));
  // const geoip = import("geoip-lite");

  // //   const [, variantId] = cookie.split(".");

  // const { pathname } = event.nextUrl;

  // const detectedIp = requestIp.getClientIp(request);
  // console.log(detectedIp);
  // let geo = geoip.lookup(detectedIp || "102.44.250.170");

  // let timeZone = geo?.timezone || "Africa/Cairo";
  // console.log(timeZone);

  // console.log(req.geo);
  // if (["/"].includes(pathname)) {
  //   console.log(
  //     "pass==========================================================================="
  //   );

  //   // const { format, utcToZonedTime } = require("date-fns-tz");

  //   NextResponse.rewrite("/fixtures/sdsf/sdffd");
  //   // res = NextResponse.rewrite(
  //   //   // `0` is the original version
  //   //   variantId === '0' ? pathname : pathname.replace('/', `/${cookie}/`)
  //   // )
  // }
  res = NextResponse.rewrite(`/testing/${request?.geo?.country || "notFound"}`);
  return res;
}
