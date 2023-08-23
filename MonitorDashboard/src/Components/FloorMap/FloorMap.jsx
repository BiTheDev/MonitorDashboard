import React, { useState, useRef, useEffect } from "react";
import { Container, Typography, Paper } from "@mui/material";
import AreaDialog from "../MapDialogs/AreaDialogs";
import "./FloorMap.css";
const FloorMap = () => {
  const [info, setInfo] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);
  const [coords, setCoords] = useState({ x: 200, y: 200 });
  const [showTooltip, setShowTooltip] = useState(false);
  const svgContainerRef = useRef(null);

  useEffect(() => {
    if (info === null) {
      return null;
    }
  }, [info]);

  const SVG_PATH_DATA = [
    {
      id: "walkway",
      d: "m 1123.4883,885.96631 c 19.912,-11.86758 42.0279,-18.28187 69.0002,-19.49823 7.6824,-0.34645 6.5121,-2.32446 6.5115,-7.96808 V 732 c 0,-7.75214 0.2479,-8 8,-8 h 417 c 7.7521,0 8,0.24786 8,8 0,49 0.086,98.00031 -0.096,146.9996 -0.026,7.0649 1.637,6.9766 7.0959,6.9856 21,0.0363 42,0.0148 63,0.0148 7.7521,0 8,-0.24786 8,-8 V 731 c 0,-7.75214 0.2479,-8 8,-8 48.6666,0 97.3335,0.0507 145.9998,-0.0834 4.543,-0.0125 7.7467,1.12176 11.0974,4.48663 63.0344,63.29828 126.2321,126.43402 189.3584,189.81737 6.9079,-24.60889 26.6248,-52.96545 45.5648,-62.70812 6.3362,-3.25934 3.5327,-6.45355 -1.5244,-11.51086 -74.9976,-75.00232 -149.9856,-150.01422 -225.0178,-224.98206 -7.4742,-7.46771 -7.1297,-7.26697 0.5638,-14.47229 9.8175,-9.19482 19.9409,-18.06378 29.9591,-27.04352 15.8206,-14.1809 31.6884,-28.30914 47.486,-42.51556 7.8941,-7.099 15.644,-14.35834 23.5174,-21.48071 16.9777,-15.35794 34.0258,-30.63822 50.9799,-46.02216 8.9087,-8.08365 17.6693,-16.33041 26.5189,-24.47931 3.2986,-3.03757 6.7327,-5.93149 9.9675,-9.03421 1.9248,-1.84652 1.8201,-3.98572 0.02,-5.96557 -0.7918,-0.87101 -1.6599,-1.67298 -2.4932,-2.50623 -23.7611,-6.18725 -45.8624,-20.94171 -55.5043,-55.49579 -1.8053,-6.46977 -5.9891,-4.58252 -11.018,-0.029 -19.9457,18.05997 -40.0783,35.9148 -59.9252,54.08197 -7.3118,6.69296 -14.6329,13.36887 -22.0328,19.96478 -16.5627,14.76303 -33.0334,29.6294 -49.5136,44.48481 -7.5361,6.79321 -14.9761,13.69311 -22.5122,20.48632 -16.4802,14.85541 -33.0214,29.64307 -49.4728,44.53016 -3.6738,3.32464 -7.2567,6.75958 -10.8828,10.12567 -2.3169,2.15057 -4.4938,2.35583 -7.1383,2.35571 -210.3334,-0.005 -420.6666,-0.005 -631,-0.005 -7.7521,0 -8,-0.24786 -8,-8 v -187 c 0,-1.16666 0.057,-2.33667 -0.011,-3.49936 -0.1816,-3.11606 -1.3475,-4.60721 -4.9894,-4.59146 -39.2018,21.16365 -72.8671,14.48835 -104.9992,3e-5 -3.32,-1.497 -4.8078,1.47537 -4.9894,4.59143 -0.068,1.16269 -0.011,2.3327 -0.011,3.49936 0,62.83334 -0.067,125.66681 0.086,188.49982 0.019,7.66839 -1.2663,7.48394 -7.5862,7.48504 C 906.66669,566.00555 792.83331,566 679,566 c -7.75214,0 -8,0.24786 -8,8 0,46 -7.3e-4,92 9.8e-4,138 1.8e-4,5.35718 0.50677,5.85944 5.99908,5.99768 0.66626,0.0168 1.33325,0.002 1.99994,0.002 h 427 c 7.3518,0 8,0.64819 8,8 0,45 -0.1006,90.00043 0.082,134.99969 0.038,9.34736 1.2448,21.53792 2.5419,27.00047 2.5404,-1.33315 4.995,-0.91935 6.8644,-2.03353 z",
      title: "Walkway",
      accessPoint: {
        name: "AP_1",
        status: "healthy",
        latency: 20,
        bandwidth: 20,
        jitter: 5,
        availability: 240,
        connectedDevices: 20,
      },
    },
    {
      id: "robotic",
      d: "m 2128.4429,178.03199 c -21.9277,0.4464 -42.5988,5.39505 -62.0473,15.91239 -22.761,12.30874 -40.25,29.55858 -53.0578,52.02766 -8.7579,15.36429 -14.1368,31.76107 -16.2627,49.07619 -3.56,28.99954 1.9726,56.64008 16.5072,81.90356 16.9571,29.47385 41.9229,49.84607 74.3772,60.52979 15.3868,5.06519 31.1883,6.88007 47.4893,6.18542 29.4053,-1.25308 55.3765,-11.10778 77.9431,-29.69693 20.7486,-17.09158 35.1912,-38.4848 43.1885,-64.39569 5.1807,-16.78564 6.4778,-33.87451 5.1492,-51.02584 -1.5161,-19.5702 -7.6712,-38.05947 -17.8133,-55.00058 -13.6079,-22.73 -32.1999,-40.28158 -56.0088,-51.94359 -16.4829,-8.07357 -33.8957,-13.04091 -52.4646,-13.09406 -2.0004,-0.006 -4,-0.31166 -6,-0.47833",
      title: "Robotic Observatory",
      accessPoint: {
        name: "AP_2",
        status: "healthy",
        latency: 10,
        bandwidth: 20,
        jitter: 5,
        availability: 240,
        connectedDevices: 5,
      },
    },
    {
      id: "hub",
      d: "m 1519.9916,887.59014 c -2.866,0.44055 -4.0718,2.20343 -4.0039,5.00012 0.024,0.99939 0,1.99988 0,2.99988 0,51 0,101.99998 0,152.99996 0,7.7521 0.2479,8 8,8 110.3333,0 220.6666,0 331,0 8.1102,0 9,-0.8898 9,-9 0,-50.33338 0,-100.66665 0,-150.99996 0,-8.11017 -0.8899,-9 -9,-9 -111.5,0 -223,0 -334.5,0",
      title: "Green Hub",
      accessPoint: {
        name: "AP_3",
        status: "healthy",
        latency: 15,
        bandwidth: 20,
        jitter: 5,
        availability: 240,
        connectedDevices: 10,
      },
    },
    {
      id: "dome",
      d: "m 2266.0729,781.35156 c -11.3071,1.6983 -22.74,2.13318 -34.0249,4.37512 -26.7556,5.31543 -51.7769,14.81079 -74.9722,29.12958 -32.2505,19.90869 -57.9162,46.34723 -76.925,79.04058 -15.7229,27.0423 -25.0733,56.40705 -28.4881,87.4646 -3.6965,33.62246 0.284,66.63666 11.5696,98.43356 10.2212,28.7979 25.8916,54.5501 46.7793,77.1134 18.2539,19.7182 39.334,35.7107 63.1392,47.7895 25.2165,12.7943 52.0962,20.9358 80.4277,23.079 38.3723,2.9026 75.4363,-1.9713 111.0596,-17.7781 49.9726,-22.1741 86.8347,-57.5253 111.4885,-106.12 12.572,-24.7806 19.8252,-51.0823 22.2918,-78.5411 3.0837,-34.33044 -1.7513,-67.62121 -14.1927,-100.04486 -19.0288,-49.59271 -51.8655,-87.11829 -97.2226,-113.82251 -26.3128,-15.49158 -54.9185,-24.84302 -85.4231,-28.18378 -11.6529,-1.27624 -23.2903,-2.14526 -35.0071,-1.93499",
      title: "Science Dome",
      accessPoint: {
        name: "AP_4",
        status: "healthy",
        latency: 20,
        bandwidth: 20,
        jitter: 5,
        availability: 240,
        connectedDevices: 15,
      },
    },
    {
      id: "ramm",
      d: "m 70.276811,514.33315 c -2.865963,0.44055 -4.071594,2.2034 -4.00388,5.00012 0.0242,0.99939 0.0039,1.99988 0.0039,2.99988 0,80 4e-6,160 0,240 0,7.75214 0.247879,8 8,8 195.999999,0 391.999999,0 587.999999,0 7.75214,0 8,-0.24786 8,-8 0,-79.66669 0,-159.33331 0,-239 0,-8.11017 -0.88983,-9 -9,-9 -196.83334,0 -393.66667,0 -590.499999,0",
      title: "RAMM",
      accessPoint: {
        name: "AP_5",
        status: "healthy",
        latency: 25,
        bandwidth: 20,
        jitter: 5,
        availability: 240,
        connectedDevices: 5,
      },
    },
    {
      id: "musk",
      d: "m 1072.0356,73.55597 c -12.1519,1.770351 -24.2677,3.476379 -36.0296,7.411434 -19.5532,6.541691 -36.92499,16.516087 -52.54493,30.002166 -14.63049,12.63177 -26.11426,27.56436 -34.86902,44.61536 -9.56744,18.63409 -14.84936,38.39854 -16.21228,59.46095 -1.82415,28.19161 3.58063,54.77851 16.79505,79.4355 20.12909,37.559 50.85578,62.80506 91.87238,75.03577 15.7902,4.70847 32.0671,6.92844 48.4812,5.92206 33.2076,-2.03604 63.1225,-12.9256 89.0517,-34.32947 22.6418,-18.69034 38.7279,-41.87478 47.8293,-69.59521 9.3988,-28.62609 10.0468,-57.81916 2.0764,-86.94495 -9.8667,-36.05591 -30.7478,-64.45141 -61.4961,-85.446433 -21.2056,-14.479317 -44.822,-22.693169 -70.45,-25.110012 -8.008,-0.755184 -16.0056,-0.217049 -24.0041,-0.457165",
      title: "Musk Observatory",
      accessPoint: {
        name: "AP_6",
        status: "healthy",
        latency: 20,
        bandwidth: 20,
        jitter: 5,
        availability: 240,
        connectedDevices: 10,
      },
    },
    {
      id: "mainBase",
      d: "m 1129.8049,948.83583 c 8.2259,8.94116 8.2259,8.94116 8.2259,8.94116 l -1.4306,-1.43058 M 1088.938,905.2925 c 2.9588,4.6488 23.6536,24.93572 41.0527,43.87255 m 84.9473,125.12745 c -0.7194,15.6586 -0.675,31.401 -0.6364,46.9986 0.039,15.6092 -0.1265,31.344 0.6364,47.0014 m -98,94 c 0,14.5 -0.1021,29.0013 0.065,43.4993 0.047,4.1217 -0.6795,7.8961 -2.5647,11.5007 m 97.9997,-42.5 c -3.2284,-0.286 -5.3704,-2.3216 -7.5158,-4.4843 -9.1296,-9.2034 -18.4134,-18.2565 -27.4191,-27.5787 -2.3501,-2.4326 -4.4979,-3.1208 -7.5722,-1.9558 -16.8184,6.3731 -33.659,12.6869 -50.494,19.0159 -1.3085,0.4918 -3.4801,1.2854 -5.3878,-0.136 m -46.1111,-201.8611 v 62.25 m -77.00005,-95.75 c 25.65495,11.1104 51.30995,22.2207 78.04745,33.7998 12.2503,-19.253 22.9334,-39.4786 34.0309,-59.22162 -0.7448,-0.7449 -0.9148,-0.909 -1.0667,-1.0881 -0.01,-0.01 0.155,-0.1568 0.2384,-0.2401 -6.5022,-4.2204 -9.3583,-11.3826 -13.6545,-17.3191 -10.46,-14.45433 -20.415,-29.2739 -30.6223,-43.9122 -0.7964,-1.14203 -1.9732,-2.01868 -2.9732,-3.01868 m 230.5,291.5 c -2.9372,-2.5139 -6.1961,-1.4416 -9.5049,-1.0407 -18.8628,2.2856 -37.5462,5.94 -56.5001,7.4792 -3.8438,0.3121 -4.5474,2.3463 -4.5209,5.5618 0.074,8.9994 0.034,17.9997 0.022,26.9997 0,3.4037 0.4776,6.9103 -1.5226,9.9826 -0.616,0.9461 -0.5121,1.5599 -0.017,2.5394 1.9137,3.7825 1.5414,7.9168 1.5421,11.978 v 50.5 m -236.99865,-217 c 27.49435,-1.0979 55.00025,-0.3866 82.50015,-0.4622 48.833,-0.1344 97.6665,-0.032 146.4999,-0.059 2.0001,0 4,-0.3122 6,-0.4789 m 2,218.7501 c 3.4223,1.3376 7.0365,0.9793 10.4934,0.6756 18.4231,-1.6176 36.7016,-4.1411 54.5103,-9.4128 35.398,-10.4782 66.8394,-28.0185 93.9602,-53.0517 22.4366,-20.7092 40.486,-44.6913 53.6187,-72.4219 11.7578,-24.8274 19.1339,-50.7765 21.8903,-78.0419 3.9841,-39.4126 -1.6952,-77.3597 -16.8999,-114.0275 -16.053,-38.71352 -40.5314,-70.80781 -73.5724,-96.47059 -33.4143,-25.95252 -70.9649,-42.11066 -113.0033,-47.47864 -42.3083,-5.40241 -83.4593,-1.4195 -123.0114,15.44659 -12.2414,5.22004 -23.8061,11.42914 -35.2298,18.38208 -11.5448,7.0268 -22.1712,14.85334 -32.2572,23.64954 -23.4634,20.46289 -41.9731,44.83807 -55.79363,72.6034 -3.89532,7.82582 -6.43835,16.55372 -9.6651,24.71612 -5.56934,14.0882 -8.79352,28.507 -11.5163,43.1861 -3.06811,16.5409 -3.3059,33.324 -2.36322,49.9866 1.55768,27.5334 7.64136,54.1243 18.79017,79.5306 23.39128,53.3051 61.09518,92.93 113.07158,118.9335 22.7271,11.3701 46.7584,18.9401 71.9893,22.2041 11.4126,1.4765 22.8774,3.4436 34.4883,1.8408 m -112,-342.50002 c 2.3565,-0.8957 3.3342,-2.9855 4.5256,-4.9847 6.6149,-11.1005 12.7942,-22.45573 30.7507,-32.96228 17.9564,-10.50655 35.5567,-14.05501 53.2239,-17.05166 4.8669,-0.82556 8.9861,-2.38818 12.6364,-6.37634 l 31.3783,-67.19445 -1.0729,-0.7153",
      title: "Main Base",
      accessPoint: {
        name: "AP_7",
        status: "healthy",
        latency: 5,
        bandwidth: 20,
        jitter: 5,
        availability: 240,
        connectedDevices: 20,
      },
    },
  ];

  const handleMouseEnter = (dataInfo) => {
    setInfo(dataInfo);
    setShowTooltip(true);
  };

  const handleAreaClick = (area) => {
    setSelectedArea(area);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedArea(null);
  };

  const handleMouseMove = (event) => {
    const rect = svgContainerRef.current.getBoundingClientRect();
    setCoords({
      x: event.clientX - rect.left + 10,
      y: event.clientY - rect.top + 10,
    });
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <Container
      maxWidth="xl"
      ref={svgContainerRef}
      style={{ position: "relative" }}
    >
      <Typography variant="h4" gutterBottom>
        Mars Base Layout
      </Typography>
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width="1000px"
        viewBox="0 0 2574 1417"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        {SVG_PATH_DATA.map((data) => (
          <path
            key={data.id}
            fill="#7F8C8D"
            opacity="1"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
            id={data.id}
            d={data.d}
            onMouseEnter={() => handleMouseEnter(data)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleAreaClick(data)}
          >
            <title>{data.title}</title>
          </path>
        ))}
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "53.3333px",
            lineHeight: "0px",
            fontFamily: "sans-serif",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 36,
            strokeLinejoin: "bevel",
            strokeOpacity: 1,
          }}
          x="291.89108"
          y="657.54962"
          id="text4"
          inkscape:label="RAMM text"
        >
          <tspan
            sodipodi:role="line"
            id="tspan4"
            x="291.89108"
            y="657.54962"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "bold",
              fontStretch: "normal",
              fontSize: "53.3333px",
              lineHeight: "0px",
              fontFamily: "sans-serif",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 36,
              strokeLinejoin: "bevel",
              strokeOpacity: 1,
            }}
          >
            RAMM
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "53.3333px",
            lineHeight: "0px",
            fontFamily: "sans-serif",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 36,
            strokeLinejoin: "bevel",
            strokeOpacity: 1,
          }}
          x="997.76141"
          y="237.15529"
          id="text5"
          inkscape:label="Musk text"
        >
          <tspan sodipodi:role="line" id="tspan5" x="1012.76141" y="240.15529">
            Musk
          </tspan>
          <tspan sodipodi:role="line" x="997.76141" y="237.15529" id="tspan7" />
          <tspan sodipodi:role="line" x="997.76141" y="237.15529" id="tspan6" />
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "53.3333px",
            lineHeight: "0px",
            fontFamily: "sans-serif",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 36,
            strokeLinejoin: "bevel",
            strokeOpacity: 1,
          }}
          x="1164.4111"
          y="664.4621"
          id="text8"
        >
          <tspan sodipodi:role="line" id="tspan8" x="1164.4111" y="664.4621">
            Walkway
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "53.3333px",
            lineHeight: "0px",
            fontFamily: "sans-serif",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 36,
            strokeLinejoin: "bevel",
            strokeOpacity: 1,
          }}
          x="1181.5033"
          y="1038.3556"
          id="text9"
        >
          <tspan
            sodipodi:role="line"
            id="tspan9"
            x="1181.5033"
            y="1038.3556"
            style={{fill:"#000000",fillOpacity:1}}
          >
            Habitat
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "53.3333px",
            lineHeight: "0px",
            fontFamily: "sans-serif",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 36,
            strokeLinejoin: "bevel",
            strokeOpacity: 1,
          }}
          x="1538.3044"
          y="984.9422"
          id="text10"
        >
          <tspan
            sodipodi:role="line"
            id="tspan10"
            x="1555.3044"
            y="984.9422"
            style={{fill:"#000000",fillOpacity:1}}
          >
            GreenHub
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "53.3333px",
            lineHeight: "0px",
            fontFamily: "sans-serif",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 36,
            strokeLinejoin: "bevel",
            strokeOpacity: 1,
          }}
          x="2068.165"
          y="1021.2632"
          id="text11"
        >
          <tspan sodipodi:role="line" id="tspan11" x="2090.165" y="1021.2632">
            Science Dome
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: "53.3333px",
            lineHeight: "0px",
            fontFamily: "sans-serif",
            fill: "#000000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 36,
            strokeLinejoin: "bevel",
            strokeOpacity: 1,
          }}
          x="2016.8883"
          y="329.02625"
          id="text12"
        >
          <tspan sodipodi:role="line" id="tspan12" x="2027.8883" y="329.02625">
            Robotic
          </tspan>
        </text>
      </svg>
      <Paper
        variant="outlined"
        style={{
          position: "absolute",
          top: coords.y,
          left: coords.x,
          display: showTooltip ? "block" : "none",
          backgroundColor: "white",
          border: "3px solid black",
          color: "#333",
          padding: "5px",
          width: 250,
        }}
      >
        <Typography variant="subtitle1" gutterBottom>
          {info.title}
        </Typography>
        <Typography>
          Status: {info.accessPoint?.status}{" "}
          <span
            style={{
              color: info.accessPoint?.status === "healthy" ? "green" : "red",
            }}
          >
            ●
          </span>
        </Typography>
        <Typography>
          Connected Devices: {info.accessPoint?.connectedDevices}
        </Typography>
        <Typography>Latency: {info.accessPoint?.latency} ms</Typography>
      </Paper>
      <AreaDialog
        open={dialogOpen}
        area={selectedArea}
        onClose={handleCloseDialog}
      />
    </Container>
  );
};

export default FloorMap;
