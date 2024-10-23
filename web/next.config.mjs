/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      // { hostname: "source.unsplash.com" },
    ],
  },
  env: {
    KEY_SENDGRID: "LA CLE API",
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  // headers:
  //   process.env.NODE_ENV === "development"
  //     ? () => [
  //         {
  //           source: "/_next/static/css/_app-client_src_app_globals_css.css",
  //           headers: [{ key: "Vary", value: "*" }],
  //         },
  //       ]
  //     : undefined,
};

export default nextConfig;
