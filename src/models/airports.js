const AIRPORTS = [
  {
    "name": "Goroka",
    "city": "Goroka",
    "country": "Papua New Guinea",
    "code1": "GKA",
    "code2": "AYGA",
    "lat": -6.081689,
    "lng": 145.391881
  },
  {
    "name": "Madang",
    "city": "Madang",
    "country": "Papua New Guinea",
    "code1": "MAG",
    "code2": "AYMD",
    "lat": -5.207083,
    "lng": 145.7887
  },
  {
    "name": "Mount Hagen",
    "city": "Mount Hagen",
    "country": "Papua New Guinea",
    "code1": "HGU",
    "code2": "AYMH",
    "lat": -5.826789,
    "lng": 144.295861
  },
  {
    "name": "Nadzab",
    "city": "Nadzab",
    "country": "Papua New Guinea",
    "code1": "LAE",
    "code2": "AYNZ",
    "lat": -6.569828,
    "lng": 146.726242
  },
  {
    "name": "Port Moresby Jacksons Intl",
    "city": "Port Moresby",
    "country": "Papua New Guinea",
    "code1": "POM",
    "code2": "AYPY",
    "lat": -9.443383,
    "lng": 147.22005
  },
  {
    "name": "Wewak Intl",
    "city": "Wewak",
    "country": "Papua New Guinea",
    "code1": "WWK",
    "code2": "AYWK",
    "lat": -3.583828,
    "lng": 143.669186
  },
  {
    "name": "Narsarsuaq",
    "city": "Narssarssuaq",
    "country": "Greenland",
    "code1": "UAK",
    "code2": "BGBW",
    "lat": 61.160517,
    "lng": -45.425978
  },
  {
    "name": "Nuuk",
    "city": "Godthaab",
    "country": "Greenland",
    "code1": "GOH",
    "code2": "BGGH",
    "lat": 64.190922,
    "lng": -51.678064
  },
  {
    "name": "Sondre Stromfjord",
    "city": "Sondrestrom",
    "country": "Greenland",
    "code1": "SFJ",
    "code2": "BGSF",
    "lat": 67.016969,
    "lng": -50.689325
  },
  {
    "name": "Thule Air Base",
    "city": "Thule",
    "country": "Greenland",
    "code1": "THU",
    "code2": "BGTL",
    "lat": 76.531203,
    "lng": -68.703161
  },
  {
    "name": "Akureyri",
    "city": "Akureyri",
    "country": "Iceland",
    "code1": "AEY",
    "code2": "BIAR",
    "lat": 65.659994,
    "lng": -18.072703
  },
  {
    "name": "Egilsstadir",
    "city": "Egilsstadir",
    "country": "Iceland",
    "code1": "EGS",
    "code2": "BIEG",
    "lat": 65.283333,
    "lng": -14.401389
  },
  {
    "name": "Hornafjordur",
    "city": "Hofn",
    "country": "Iceland",
    "code1": "HFN",
    "code2": "BIHN",
    "lat": 64.295556,
    "lng": -15.227222
  },
  {
    "name": "Husavik",
    "city": "Husavik",
    "country": "Iceland",
    "code1": "HZK",
    "code2": "BIHU",
    "lat": 65.952328,
    "lng": -17.425978
  },
  {
    "name": "Isafjordur",
    "city": "Isafjordur",
    "country": "Iceland",
    "code1": "IFJ",
    "code2": "BIIS",
    "lat": 66.058056,
    "lng": -23.135278
  },
  {
    "name": "Keflavik International Airport",
    "city": "Keflavik",
    "country": "Iceland",
    "code1": "KEF",
    "code2": "BIKF",
    "lat": 63.985,
    "lng": -22.605556
  },
  {
    "name": "Patreksfjordur",
    "city": "Patreksfjordur",
    "country": "Iceland",
    "code1": "PFJ",
    "code2": "BIPA",
    "lat": 65.555833,
    "lng": -23.965
  },
  {
    "name": "Reykjavik",
    "city": "Reykjavik",
    "country": "Iceland",
    "code1": "RKV",
    "code2": "BIRK",
    "lat": 64.13,
    "lng": -21.940556
  },
  {
    "name": "Siglufjordur",
    "city": "Siglufjordur",
    "country": "Iceland",
    "code1": "SIJ",
    "code2": "BISI",
    "lat": 66.133333,
    "lng": -18.916667
  },
  {
    "name": "Vestmannaeyjar",
    "city": "Vestmannaeyjar",
    "country": "Iceland",
    "code1": "VEY",
    "code2": "BIVM",
    "lat": 63.424303,
    "lng": -20.278875
  },
  {
    "name": "Sault Ste Marie",
    "city": "Sault Sainte Marie",
    "country": "Canada",
    "code1": "YAM",
    "code2": "CYAM",
    "lat": 46.485001,
    "lng": -84.509445
  },
  {
    "name": "Winnipeg St Andrews",
    "city": "Winnipeg",
    "country": "Canada",
    "code1": "YAV",
    "code2": "CYAV",
    "lat": 50.056389,
    "lng": -97.0325
  },
  {
    "name": "Shearwater",
    "city": "Halifax",
    "country": "Canada",
    "code1": "YAW",
    "code2": "CYAW",
    "lat": 44.639721,
    "lng": -63.499444
  },
  {
    "name": "St Anthony",
    "city": "St. Anthony",
    "country": "Canada",
    "code1": "YAY",
    "code2": "CYAY",
    "lat": 51.391944,
    "lng": -56.083056
  },
  {
    "name": "Tofino",
    "city": "Tofino",
    "country": "Canada",
    "code1": "YAZ",
    "code2": "CYAZ",
    "lat": 49.082222,
    "lng": -125.7725
  },
  {
    "name": "Kugaaruk",
    "city": "Pelly Bay",
    "country": "Canada",
    "code1": "YBB",
    "code2": "CYBB",
    "lat": 68.534444,
    "lng": -89.808056
  },
  {
    "name": "Baie Comeau",
    "city": "Baie Comeau",
    "country": "Canada",
    "code1": "YBC",
    "code2": "CYBC",
    "lat": 49.1325,
    "lng": -68.204444
  },
  {
    "name": "Bagotville",
    "city": "Bagotville",
    "country": "Canada",
    "code1": "YBG",
    "code2": "CYBG",
    "lat": 48.330555,
    "lng": -70.996391
  },
  {
    "name": "Baker Lake",
    "city": "Baker Lake",
    "country": "Canada",
    "code1": "YBK",
    "code2": "CYBK",
    "lat": 64.298889,
    "lng": -96.077778
  },
  {
    "name": "Campbell River",
    "city": "Campbell River",
    "country": "Canada",
    "code1": "YBL",
    "code2": "CYBL",
    "lat": 49.950832,
    "lng": -125.270833
  },
  {
    "name": "Brandon Muni",
    "city": "Brandon",
    "country": "Canada",
    "code1": "YBR",
    "code2": "CYBR",
    "lat": 49.91,
    "lng": -99.951944
  },
  {
    "name": "Cambridge Bay",
    "city": "Cambridge Bay",
    "country": "Canada",
    "code1": "YCB",
    "code2": "CYCB",
    "lat": 69.108055,
    "lng": -105.138333
  },
  {
    "name": "Nanaimo",
    "city": "Nanaimo",
    "country": "Canada",
    "code1": "YCD",
    "code2": "CYCD",
    "lat": 49.052333,
    "lng": -123.870167
  },
  {
    "name": "Castlegar",
    "city": "Castlegar",
    "country": "Canada",
    "code1": "YCG",
    "code2": "CYCG",
    "lat": 49.296389,
    "lng": -117.6325
  },
  {
    "name": "Miramichi",
    "city": "Chatham",
    "country": "Canada",
    "code1": "YCH",
    "code2": "CYCH",
    "lat": 47.007778,
    "lng": -65.449167
  },
  {
    "name": "Charlo",
    "city": "Charlo",
    "country": "Canada",
    "code1": "YCL",
    "code2": "CYCL",
    "lat": 47.990833,
    "lng": -66.330278
  },
  {
    "name": "Kugluktuk",
    "city": "Coppermine",
    "country": "Canada",
    "code1": "YCO",
    "code2": "CYCO",
    "lat": 67.816667,
    "lng": -115.143889
  },
  {
    "name": "Coronation",
    "city": "Coronation",
    "country": "Canada",
    "code1": "YCT",
    "code2": "CYCT",
    "lat": 52.075001,
    "lng": -111.445278
  },
  {
    "name": "Chilliwack",
    "city": "Chilliwack",
    "country": "Canada",
    "code1": "YCW",
    "code2": "CYCW",
    "lat": 49.152779,
    "lng": -121.93889
  },
  {
    "name": "Clyde River",
    "city": "Clyde River",
    "country": "Canada",
    "code1": "YCY",
    "code2": "CYCY",
    "lat": 70.486111,
    "lng": -68.516667
  },
  {
    "name": "Fairmont Hot Springs",
    "city": "Coral Harbour",
    "country": "Canada",
    "code1": "YZS",
    "code2": "CYCZ",
    "lat": 64.193333,
    "lng": -83.359444
  },
  {
    "name": "Dawson City",
    "city": "Dawson",
    "country": "Canada",
    "code1": "YDA",
    "code2": "CYDA",
    "lat": 64.043056,
    "lng": -139.127778
  },
  {
    "name": "Burwash",
    "city": "Burwash",
    "country": "Canada",
    "code1": "YDB",
    "code2": "CYDB",
    "lat": 61.371111,
    "lng": -139.040556
  },
  {
    "name": "Princeton",
    "city": "Princeton",
    "country": "Canada",
    "code1": "YDC",
    "code2": "CYDC",
    "lat": 49.468056,
    "lng": -120.511389
  },
  {
    "name": "Deer Lake",
    "city": "Deer Lake",
    "country": "Canada",
    "code1": "YDF",
    "code2": "CYDF",
    "lat": 49.210833,
    "lng": -57.391388
  },
  {
    "name": "Dease Lake",
    "city": "Dease Lake",
    "country": "Canada",
    "code1": "YDL",
    "code2": "CYDL",
    "lat": 58.422222,
    "lng": -130.032222
  },
  {
    "name": "Dauphin Barker",
    "city": "Dauphin",
    "country": "Canada",
    "code1": "YDN",
    "code2": "CYDN",
    "lat": 51.100834,
    "lng": -100.0525
  },
  {
    "name": "Dawson Creek",
    "city": "Dawson Creek",
    "country": "Canada",
    "code1": "YDQ",
    "code2": "CYDQ",
    "lat": 55.742333,
    "lng": -120.183
  },
  {
    "name": "Edmonton Intl",
    "city": "Edmonton",
    "country": "Canada",
    "code1": "YEG",
    "code2": "CYEG",
    "lat": 53.309723,
    "lng": -113.579722
  },
  {
    "name": "Arviat",
    "city": "Eskimo Point",
    "country": "Canada",
    "code1": "YEK",
    "code2": "CYEK",
    "lat": 61.094166,
    "lng": -94.070833
  },
  {
    "name": "Estevan",
    "city": "Estevan",
    "country": "Canada",
    "code1": "YEN",
    "code2": "CYEN",
    "lat": 49.210278,
    "lng": -102.965833
  },
  {
    "name": "Edson",
    "city": "Edson",
    "country": "Canada",
    "code1": "YET",
    "code2": "CYET",
    "lat": 53.578888,
    "lng": -116.465
  },
  {
    "name": "Eureka",
    "city": "Eureka",
    "country": "Canada",
    "code1": "YEU",
    "code2": "CYEU",
    "lat": 79.994722,
    "lng": -85.814167
  },
  {
    "name": "Inuvik Mike Zubko",
    "city": "Inuvik",
    "country": "Canada",
    "code1": "YEV",
    "code2": "CYEV",
    "lat": 68.304167,
    "lng": -133.482778
  },
  {
    "name": "Iqaluit",
    "city": "Iqaluit",
    "country": "Canada",
    "code1": "YFB",
    "code2": "CYFB",
    "lat": 63.75639,
    "lng": -68.555832
  },
  {
    "name": "Fredericton",
    "city": "Fredericton",
    "country": "Canada",
    "code1": "YFC",
    "code2": "CYFC",
    "lat": 45.868889,
    "lng": -66.537222
  },
  {
    "name": "Forestville",
    "city": "Forestville",
    "country": "Canada",
    "code1": "",
    "code2": "CYFE",
    "lat": 48.746111,
    "lng": -69.097222
  },
  {
    "name": "Flin Flon",
    "city": "Flin Flon",
    "country": "Canada",
    "code1": "YFO",
    "code2": "CYFO",
    "lat": 54.678055,
    "lng": -101.681667
  },
  {
    "name": "Fort Resolution",
    "city": "Fort Resolution",
    "country": "Canada",
    "code1": "YFR",
    "code2": "CYFR",
    "lat": 61.180832,
    "lng": -113.689722
  },
  {
    "name": "Fort Simpson",
    "city": "Fort Simpson",
    "country": "Canada",
    "code1": "YFS",
    "code2": "CYFS",
    "lat": 61.760153,
    "lng": -121.236525
  },
  {
    "name": "Kingston",
    "city": "Kingston",
    "country": "Canada",
    "code1": "YGK",
    "code2": "CYGK",
    "lat": 44.225277,
    "lng": -76.596944
  },
  {
    "name": "La Grande Riviere",
    "city": "La Grande Riviere",
    "country": "Canada",
    "code1": "YGL",
    "code2": "CYGL",
    "lat": 53.625278,
    "lng": -77.704167
  },
  {
    "name": "Gaspe",
    "city": "Gaspe",
    "country": "Canada",
    "code1": "YGP",
    "code2": "CYGP",
    "lat": 48.775278,
    "lng": -64.478611
  },
  {
    "name": "Geraldton Greenstone Regional",
    "city": "Geraldton",
    "country": "Canada",
    "code1": "YGQ",
    "code2": "CYGQ",
    "lat": 49.778332,
    "lng": -86.939445
  },
  {
    "name": "Iles De La Madeleine",
    "city": "Iles De La Madeleine",
    "country": "Canada",
    "code1": "YGR",
    "code2": "CYGR",
    "lat": 47.424721,
    "lng": -61.778056
  },
  {
    "name": "Hudson Bay",
    "city": "Hudson Bay",
    "country": "Canada",
    "code1": "YHB",
    "code2": "CYHB",
    "lat": 52.816666,
    "lng": -102.31139
  },
  {
    "name": "Dryden Rgnl",
    "city": "Dryden",
    "country": "Canada",
    "code1": "YHD",
    "code2": "CYHD",
    "lat": 49.831667,
    "lng": -92.744167
  },
  {
    "name": "Ulukhaktok Holman",
    "city": "Holman Island",
    "country": "Canada",
    "code1": "YHI",
    "code2": "CYHI",
    "lat": 70.762778,
    "lng": -117.806111
  },
  {
    "name": "Gjoa Haven",
    "city": "Gjoa Haven",
    "country": "Canada",
    "code1": "YHK",
    "code2": "CYHK",
    "lat": 68.635556,
    "lng": -95.849722
  },
  {
    "name": "Hamilton",
    "city": "Hamilton",
    "country": "Canada",
    "code1": "YHM",
    "code2": "CYHM",
    "lat": 43.173611,
    "lng": -79.935
  },
  {
    "name": "St Hubert",
    "city": "Montreal",
    "country": "Canada",
    "code1": "YHU",
    "code2": "CYHU",
    "lat": 45.5175,
    "lng": -73.416944
  },
  {
    "name": "Hay River",
    "city": "Hay River",
    "country": "Canada",
    "code1": "YHY",
    "code2": "CYHY",
    "lat": 60.839722,
    "lng": -115.782778
  },
  {
    "name": "Halifax Intl",
    "city": "Halifax",
    "country": "Canada",
    "code1": "YHZ",
    "code2": "CYHZ",
    "lat": 44.880833,
    "lng": -63.50861
  },
  {
    "name": "Atikokan Muni",
    "city": "Atikokan",
    "country": "Canada",
    "code1": "YIB",
    "code2": "CYIB",
    "lat": 48.773888,
    "lng": -91.638611
  },
  {
    "name": "Pond Inlet",
    "city": "Pond Inlet",
    "country": "Canada",
    "code1": "YIO",
    "code2": "CYIO",
    "lat": 72.683334,
    "lng": -77.966667
  },
  {
    "name": "St Jean",
    "city": "St. Jean",
    "country": "Canada",
    "code1": "YJN",
    "code2": "CYJN",
    "lat": 45.294445,
    "lng": -73.281111
  },
  {
    "name": "Stephenville",
    "city": "Stephenville",
    "country": "Canada",
    "code1": "YJT",
    "code2": "CYJT",
    "lat": 48.544167,
    "lng": -58.549999
  },
  {
    "name": "Kamloops",
    "city": "Kamloops",
    "country": "Canada",
    "code1": "YKA",
    "code2": "CYKA",
    "lat": 50.702222,
    "lng": -120.444444
  },
  {
    "name": "Waterloo",
    "city": "Waterloo",
    "country": "Canada",
    "code1": "YKF",
    "code2": "CYKF",
    "lat": 43.460833,
    "lng": -80.378611
  },
  {
    "name": "Schefferville",
    "city": "Schefferville",
    "country": "Canada",
    "code1": "YKL",
    "code2": "CYKL",
    "lat": 54.805278,
    "lng": -66.805278
  },
  {
    "name": "Kindersley",
    "city": "Kindersley",
    "country": "Canada",
    "code1": "YKY",
    "code2": "CYKY",
    "lat": 51.5175,
    "lng": -109.180833
  },
  {
    "name": "Buttonville Muni",
    "city": "Toronto",
    "country": "Canada",
    "code1": "YKZ",
    "code2": "CYKZ",
    "lat": 43.862221,
    "lng": -79.37
  },
  {
    "name": "Chapleau",
    "city": "Chapleau",
    "country": "Canada",
    "code1": "YLD",
    "code2": "CYLD",
    "lat": 47.82,
    "lng": -83.346667
  },
  {
    "name": "Meadow Lake",
    "city": "Meadow Lake",
    "country": "Canada",
    "code1": "YLJ",
    "code2": "CYLJ",
    "lat": 54.125278,
    "lng": -108.522778
  },
  {
    "name": "Lloydminster",
    "city": "Lloydminster",
    "country": "Canada",
    "code1": "YLL",
    "code2": "CYLL",
    "lat": 53.309166,
    "lng": -110.0725
  },
  {
    "name": "Alert",
    "city": "Alert",
    "country": "Canada",
    "code1": "YLT",
    "code2": "CYLT",
    "lat": 82.517778,
    "lng": -62.280556
  },
  {
    "name": "Kelowna",
    "city": "Kelowna",
    "country": "Canada",
    "code1": "YLW",
    "code2": "CYLW",
    "lat": 49.956112,
    "lng": -119.377778
  },
  {
    "name": "Mayo",
    "city": "Mayo",
    "country": "Canada",
    "code1": "YMA",
    "code2": "CYMA",
    "lat": 63.616389,
    "lng": -135.868333
  },
  {
    "name": "Moose Jaw Air Vice Marshal C M Mcewen",
    "city": "Moose Jaw",
    "country": "Canada",
    "code1": "YMJ",
    "code2": "CYMJ",
    "lat": 50.330278,
    "lng": -105.559167
  },
  {
    "name": "Fort Mcmurray",
    "city": "Fort Mcmurray",
    "country": "Canada",
    "code1": "YMM",
    "code2": "CYMM",
    "lat": 56.653333,
    "lng": -111.221944
  },
  {
    "name": "Moosonee",
    "city": "Moosonee",
    "country": "Canada",
    "code1": "YMO",
    "code2": "CYMO",
    "lat": 51.291111,
    "lng": -80.607778
  },
  {
    "name": "Maniwaki",
    "city": "Maniwaki",
    "country": "Canada",
    "code1": "YMW",
    "code2": "CYMW",
    "lat": 46.272778,
    "lng": -75.990556
  },
  {
    "name": "Montreal Intl Mirabel",
    "city": "Montreal",
    "country": "Canada",
    "code1": "YMX",
    "code2": "CYMX",
    "lat": 45.681944,
    "lng": -74.005278
  },
  {
    "name": "Natashquan",
    "city": "Natashquan",
    "country": "Canada",
    "code1": "YNA",
    "code2": "CYNA",
    "lat": 50.19,
    "lng": -61.789167
  },
  {
    "name": "Gatineau",
    "city": "Gatineau",
    "country": "Canada",
    "code1": "YND",
    "code2": "CYND",
    "lat": 45.521694,
    "lng": -75.563589
  },
  {
    "name": "Matagami",
    "city": "Matagami",
    "country": "Canada",
    "code1": "YNM",
    "code2": "CYNM",
    "lat": 49.761667,
    "lng": -77.802778
  },
  {
    "name": "Old Crow",
    "city": "Old Crow",
    "country": "Canada",
    "code1": "YOC",
    "code2": "CYOC",
    "lat": 67.570556,
    "lng": -139.839167
  },
  {
    "name": "Cold Lake",
    "city": "Cold Lake",
    "country": "Canada",
    "code1": "YOD",
    "code2": "CYOD",
    "lat": 54.404999,
    "lng": -110.279444
  },
  {
    "name": "High Level",
    "city": "High Level",
    "country": "Canada",
    "code1": "YOJ",
    "code2": "CYOJ",
    "lat": 58.621389,
    "lng": -117.164722
  },
  {
    "name": "Ottawa Macdonald Cartier Intl",
    "city": "Ottawa",
    "country": "Canada",
    "code1": "YOW",
    "code2": "CYOW",
    "lat": 45.3225,
    "lng": -75.669167
  },
  {
    "name": "Prince Albert Glass Field",
    "city": "Prince Albert",
    "country": "Canada",
    "code1": "YPA",
    "code2": "CYPA",
    "lat": 53.214167,
    "lng": -105.672778
  },
  {
    "name": "Peace River",
    "city": "Peace River",
    "country": "Canada",
    "code1": "YPE",
    "code2": "CYPE",
    "lat": 56.226944,
    "lng": -117.447222
  },
  {
    "name": "Southport",
    "city": "Portage-la-prairie",
    "country": "Canada",
    "code1": "YPG",
    "code2": "CYPG",
    "lat": 49.903056,
    "lng": -98.273889
  },
  {
    "name": "Pitt Meadows",
    "city": "Pitt Meadows",
    "country": "Canada",
    "code1": "",
    "code2": "CYPK",
    "lat": 49.21611,
    "lng": -122.71
  },
  {
    "name": "Pickle Lake",
    "city": "Pickle Lake",
    "country": "Canada",
    "code1": "YPL",
    "code2": "CYPL",
    "lat": 51.446388,
    "lng": -90.214167
  },
  {
    "name": "Port Menier",
    "city": "Port Menier",
    "country": "Canada",
    "code1": "YPN",
    "code2": "CYPN",
    "lat": 49.836389,
    "lng": -64.288611
  },
  {
    "name": "Peterborough",
    "city": "Peterborough",
    "country": "Canada",
    "code1": "YPQ",
    "code2": "CYPQ",
    "lat": 44.23,
    "lng": -78.363333
  },
  {
    "name": "Prince Rupert",
    "city": "Prince Pupert",
    "country": "Canada",
    "code1": "YPR",
    "code2": "CYPR",
    "lat": 54.28611,
    "lng": -130.444722
  },
  {
    "name": "Fort Chipewyan",
    "city": "Fort Chipewyan",
    "country": "Canada",
    "code1": "YPY",
    "code2": "CYPY",
    "lat": 58.767223,
    "lng": -111.117222
  },
  {
    "name": "Muskoka",
    "city": "Muskoka",
    "country": "Canada",
    "code1": "YQA",
    "code2": "CYQA",
    "lat": 44.974722,
    "lng": -79.303333
  },
  {
    "name": "Quebec Jean Lesage Intl",
    "city": "Quebec",
    "country": "Canada",
    "code1": "YQB",
    "code2": "CYQB",
    "lat": 46.791111,
    "lng": -71.393333
  },
  {
    "name": "Red Deer Regional",
    "city": "Red Deer Industrial",
    "country": "Canada",
    "code1": "YQF",
    "code2": "CYQF",
    "lat": 52.182222,
    "lng": -113.894444
  },
  {
    "name": "Windsor",
    "city": "Windsor",
    "country": "Canada",
    "code1": "YQG",
    "code2": "CYQG",
    "lat": 42.275556,
    "lng": -82.955556
  },
  {
    "name": "Watson Lake",
    "city": "Watson Lake",
    "country": "Canada",
    "code1": "YQH",
    "code2": "CYQH",
    "lat": 60.116389,
    "lng": -128.8225
  },
  {
    "name": "Kenora",
    "city": "Kenora",
    "country": "Canada",
    "code1": "YQK",
    "code2": "CYQK",
    "lat": 49.788334,
    "lng": -94.363056
  },
  {
    "name": "Lethbridge",
    "city": "Lethbridge",
    "country": "Canada",
    "code1": "YQL",
    "code2": "CYQL",
    "lat": 49.630278,
    "lng": -112.799722
  },
  {
    "name": "Greater Moncton Intl",
    "city": "Moncton",
    "country": "Canada",
    "code1": "YQM",
    "code2": "CYQM",
    "lat": 46.112221,
    "lng": -64.678611
  },
  {
    "name": "Comox",
    "city": "Comox",
    "country": "Canada",
    "code1": "YQQ",
    "code2": "CYQQ",
    "lat": 49.710833,
    "lng": -124.886667
  },
  {
    "name": "Regina Intl",
    "city": "Regina",
    "country": "Canada",
    "code1": "YQR",
    "code2": "CYQR",
    "lat": 50.431944,
    "lng": -104.665833
  },
  {
    "name": "Thunder Bay",
    "city": "Thunder Bay",
    "country": "Canada",
    "code1": "YQT",
    "code2": "CYQT",
    "lat": 48.371944,
    "lng": -89.323889
  },
  {
    "name": "Grande Prairie",
    "city": "Grande Prairie",
    "country": "Canada",
    "code1": "YQU",
    "code2": "CYQU",
    "lat": 55.179722,
    "lng": -118.885
  },
  {
    "name": "Yorkton Muni",
    "city": "Yorkton",
    "country": "Canada",
    "code1": "YQV",
    "code2": "CYQV",
    "lat": 51.264721,
    "lng": -102.461667
  },
  {
    "name": "North Battleford",
    "city": "North Battleford",
    "country": "Canada",
    "code1": "YQW",
    "code2": "CYQW",
    "lat": 52.769167,
    "lng": -108.24361
  },
  {
    "name": "Gander Intl",
    "city": "Gander",
    "country": "Canada",
    "code1": "YQX",
    "code2": "CYQX",
    "lat": 48.936944,
    "lng": -54.568056
  },
  {
    "name": "Sydney",
    "city": "Sydney",
    "country": "Canada",
    "code1": "YQY",
    "code2": "CYQY",
    "lat": 46.161388,
    "lng": -60.047779
  },
  {
    "name": "Quesnel",
    "city": "Quesnel",
    "country": "Canada",
    "code1": "YQZ",
    "code2": "CYQZ",
    "lat": 53.026112,
    "lng": -122.510278
  },
  {
    "name": "Resolute Bay",
    "city": "Resolute",
    "country": "Canada",
    "code1": "YRB",
    "code2": "CYRB",
    "lat": 74.716944,
    "lng": -94.969444
  },
  {
    "name": "Riviere Du Loup",
    "city": "Riviere Du Loup",
    "country": "Canada",
    "code1": "YRI",
    "code2": "CYRI",
    "lat": 47.764444,
    "lng": -69.584722
  },
  {
    "name": "Roberval",
    "city": "Roberval",
    "country": "Canada",
    "code1": "YRJ",
    "code2": "CYRJ",
    "lat": 48.52,
    "lng": -72.265556
  },
  {
    "name": "Rocky Mountain House",
    "city": "Rocky Mountain House",
    "country": "Canada",
    "code1": "YRM",
    "code2": "CYRM",
    "lat": 52.429722,
    "lng": -114.904167
  },
  {
    "name": "Rankin Inlet",
    "city": "Rankin Inlet",
    "country": "Canada",
    "code1": "YRT",
    "code2": "CYRT",
    "lat": 62.81139,
    "lng": -92.115833
  },
  {
    "name": "Sudbury",
    "city": "Sudbury",
    "country": "Canada",
    "code1": "YSB",
    "code2": "CYSB",
    "lat": 46.625,
    "lng": -80.798889
  },
  {
    "name": "Sherbrooke",
    "city": "Sherbrooke",
    "country": "Canada",
    "code1": "YSC",
    "code2": "CYSC",
    "lat": 45.438611,
    "lng": -71.691389
  },
  {
    "name": "Saint John",
    "city": "St. John",
    "country": "Canada",
    "code1": "YSJ",
    "code2": "CYSJ",
    "lat": 45.316111,
    "lng": -65.890278
  },
  {
    "name": "Fort Smith",
    "city": "Fort Smith",
    "country": "Canada",
    "code1": "YSM",
    "code2": "CYSM",
    "lat": 60.020278,
    "lng": -111.961944
  },
  {
    "name": "Nanisivik",
    "city": "Nanisivik",
    "country": "Canada",
    "code1": "YSR",
    "code2": "CYSR",
    "lat": 72.982222,
    "lng": -84.613611
  },
  {
    "name": "Summerside",
    "city": "Summerside",
    "country": "Canada",
    "code1": "YSU",
    "code2": "CYSU",
    "lat": 46.440556,
    "lng": -63.833611
  },
  {
    "name": "Sachs Harbour",
    "city": "Sachs Harbour",
    "country": "Canada",
    "code1": "YSY",
    "code2": "CYSY",
    "lat": 71.993889,
    "lng": -125.2425
  },
  {
    "name": "Cape Dorset",
    "city": "Cape Dorset",
    "country": "Canada",
    "code1": "YTE",
    "code2": "CYTE",
    "lat": 64.23,
    "lng": -76.526667
  },
  {
    "name": "Thompson",
    "city": "Thompson",
    "country": "Canada",
    "code1": "YTH",
    "code2": "CYTH",
    "lat": 55.801111,
    "lng": -97.864166
  },
  {
    "name": "Trenton",
    "city": "Trenton",
    "country": "Canada",
    "code1": "YTR",
    "code2": "CYTR",
    "lat": 44.118889,
    "lng": -77.528056
  },
  {
    "name": "Timmins",
    "city": "Timmins",
    "country": "Canada",
    "code1": "YTS",
    "code2": "CYTS",
    "lat": 48.569721,
    "lng": -81.376667
  },
  {
    "name": "City Centre",
    "city": "Toronto",
    "country": "Canada",
    "code1": "YTZ",
    "code2": "CYTZ",
    "lat": 43.627499,
    "lng": -79.396167
  },
  {
    "name": "Tuktoyaktuk",
    "city": "Tuktoyaktuk",
    "country": "Canada",
    "code1": "YUB",
    "code2": "CYUB",
    "lat": 69.433334,
    "lng": -133.026389
  },
  {
    "name": "Pierre Elliott Trudeau Intl",
    "city": "Montreal",
    "country": "Canada",
    "code1": "YUL",
    "code2": "CYUL",
    "lat": 45.470556,
    "lng": -73.740833
  },
  {
    "name": "Repulse Bay",
    "city": "Repulse Bay",
    "country": "Canada",
    "code1": "YUT",
    "code2": "CYUT",
    "lat": 66.521389,
    "lng": -86.224722
  },
  {
    "name": "Hall Beach",
    "city": "Hall Beach",
    "country": "Canada",
    "code1": "YUX",
    "code2": "CYUX",
    "lat": 68.776111,
    "lng": -81.243611
  },
  {
    "name": "Rouyn Noranda",
    "city": "Rouyn",
    "country": "Canada",
    "code1": "YUY",
    "code2": "CYUY",
    "lat": 48.206111,
    "lng": -78.835556
  },
  {
    "name": "La Ronge",
    "city": "La Ronge",
    "country": "Canada",
    "code1": "YVC",
    "code2": "CYVC",
    "lat": 55.15139,
    "lng": -105.261944
  },
  {
    "name": "Vermilion",
    "city": "Vermillion",
    "country": "Canada",
    "code1": "YVG",
    "code2": "CYVG",
    "lat": 53.355833,
    "lng": -110.82389
  },
  {
    "name": "Qikiqtarjuaq",
    "city": "Broughton Island",
    "country": "Canada",
    "code1": "YVM",
    "code2": "CYVM",
    "lat": 67.545833,
    "lng": -64.031389
  },
  {
    "name": "Val D Or",
    "city": "Val D'or",
    "country": "Canada",
    "code1": "YVO",
    "code2": "CYVO",
    "lat": 48.053333,
    "lng": -77.782778
  },
  {
    "name": "Kuujjuaq",
    "city": "Quujjuaq",
    "country": "Canada",
    "code1": "YVP",
    "code2": "CYVP",
    "lat": 58.096111,
    "lng": -68.426944
  },
  {
    "name": "Norman Wells",
    "city": "Norman Wells",
    "country": "Canada",
    "code1": "YVQ",
    "code2": "CYVQ",
    "lat": 65.281617,
    "lng": -126.798219
  },
  {
    "name": "Vancouver Intl",
    "city": "Vancouver",
    "country": "Canada",
    "code1": "YVR",
    "code2": "CYVR",
    "lat": 49.193889,
    "lng": -123.184444
  },
  {
    "name": "Buffalo Narrows",
    "city": "Buffalo Narrows",
    "country": "Canada",
    "code1": "YVT",
    "code2": "CYVT",
    "lat": 55.841944,
    "lng": -108.4175
  },
  {
    "name": "Wiarton",
    "city": "Wiarton",
    "country": "Canada",
    "code1": "YVV",
    "code2": "CYVV",
    "lat": 44.745834,
    "lng": -81.107222
  },
  {
    "name": "Petawawa",
    "city": "Petawawa",
    "country": "Canada",
    "code1": "YWA",
    "code2": "CYWA",
    "lat": 45.952221,
    "lng": -77.319168
  },
  {
    "name": "Winnipeg Intl",
    "city": "Winnipeg",
    "country": "Canada",
    "code1": "YWG",
    "code2": "CYWG",
    "lat": 49.910036,
    "lng": -97.239886
  },
  {
    "name": "Wabush",
    "city": "Wabush",
    "country": "Canada",
    "code1": "YWK",
    "code2": "CYWK",
    "lat": 52.921944,
    "lng": -66.864444
  },
  {
    "name": "Williams Lake",
    "city": "Williams Lake",
    "country": "Canada",
    "code1": "YWL",
    "code2": "CYWL",
    "lat": 52.183056,
    "lng": -122.054167
  },
  {
    "name": "Wrigley",
    "city": "Wrigley",
    "country": "Canada",
    "code1": "YWY",
    "code2": "CYWY",
    "lat": 63.209444,
    "lng": -123.436667
  },
  {
    "name": "Canadian Rockies Intl",
    "city": "Cranbrook",
    "country": "Canada",
    "code1": "YXC",
    "code2": "CYXC",
    "lat": 49.612222,
    "lng": -115.781944
  },
  {
    "name": "Edmonton City Centre",
    "city": "Edmonton",
    "country": "Canada",
    "code1": "YXD",
    "code2": "CYXD",
    "lat": 53.5725,
    "lng": -113.520556
  },
  {
    "name": "Saskatoon J G Diefenbaker Intl",
    "city": "Saskatoon",
    "country": "Canada",
    "code1": "YXE",
    "code2": "CYXE",
    "lat": 52.170834,
    "lng": -106.699722
  },
  {
    "name": "Medicine Hat",
    "city": "Medicine Hat",
    "country": "Canada",
    "code1": "YXH",
    "code2": "CYXH",
    "lat": 50.01889,
    "lng": -110.720833
  },
  {
    "name": "Fort St John",
    "city": "Fort Saint John",
    "country": "Canada",
    "code1": "YXJ",
    "code2": "CYXJ",
    "lat": 56.238056,
    "lng": -120.740278
  },
  {
    "name": "Sioux Lookout",
    "city": "Sioux Lookout",
    "country": "Canada",
    "code1": "YXL",
    "code2": "CYXL",
    "lat": 50.113889,
    "lng": -91.905278
  },
  {
    "name": "Pangnirtung",
    "city": "Pangnirtung",
    "country": "Canada",
    "code1": "YXP",
    "code2": "CYXP",
    "lat": 66.145,
    "lng": -65.713611
  },
  {
    "name": "Timiskaming Rgnl",
    "city": "Earlton",
    "country": "Canada",
    "code1": "YXR",
    "code2": "CYXR",
    "lat": 47.695,
    "lng": -79.848889
  },
  {
    "name": "Prince George",
    "city": "Prince George",
    "country": "Canada",
    "code1": "YXS",
    "code2": "CYXS",
    "lat": 53.889444,
    "lng": -122.678889
  },
  {
    "name": "Terrace",
    "city": "Terrace",
    "country": "Canada",
    "code1": "YXT",
    "code2": "CYXT",
    "lat": 54.468508,
    "lng": -128.576219
  },
  {
    "name": "London",
    "city": "London",
    "country": "Canada",
    "code1": "YXU",
    "code2": "CYXU",
    "lat": 43.033056,
    "lng": -81.151111
  },
  {
    "name": "Abbotsford",
    "city": "Abbotsford",
    "country": "Canada",
    "code1": "YXX",
    "code2": "CYXX",
    "lat": 49.025278,
    "lng": -122.360556
  },
  {
    "name": "Whitehorse Intl",
    "city": "Whitehorse",
    "country": "Canada",
    "code1": "YXY",
    "code2": "CYXY",
    "lat": 60.709553,
    "lng": -135.067269
  },
  {
    "name": "North Bay",
    "city": "North Bay",
    "country": "Canada",
    "code1": "YYB",
    "code2": "CYYB",
    "lat": 46.363611,
    "lng": -79.422778
  },
  {
    "name": "Calgary Intl",
    "city": "Calgary",
    "country": "Canada",
    "code1": "YYC",
    "code2": "CYYC",
    "lat": 51.113888,
    "lng": -114.020278
  },
  {
    "name": "Smithers",
    "city": "Smithers",
    "country": "Canada",
    "code1": "YYD",
    "code2": "CYYD",
    "lat": 54.824722,
    "lng": -127.182778
  },
  {
    "name": "Fort Nelson",
    "city": "Fort Nelson",
    "country": "Canada",
    "code1": "YYE",
    "code2": "CYYE",
    "lat": 58.836389,
    "lng": -122.596944
  },
  {
    "name": "Penticton",
    "city": "Penticton",
    "country": "Canada",
    "code1": "YYF",
    "code2": "CYYF",
    "lat": 49.463056,
    "lng": -119.602222
  },
  {
    "name": "Charlottetown",
    "city": "Charlottetown",
    "country": "Canada",
    "code1": "YYG",
    "code2": "CYYG",
    "lat": 46.290001,
    "lng": -63.121111
  },
  {
    "name": "Taloyoak",
    "city": "Spence Bay",
    "country": "Canada",
    "code1": "YYH",
    "code2": "CYYH",
    "lat": 69.546667,
    "lng": -93.576667
  },
  {
    "name": "Victoria Intl",
    "city": "Victoria",
    "country": "Canada",
    "code1": "YYJ",
    "code2": "CYYJ",
    "lat": 48.646944,
    "lng": -123.425833
  },
  {
    "name": "Lynn Lake",
    "city": "Lynn Lake",
    "country": "Canada",
    "code1": "YYL",
    "code2": "CYYL",
    "lat": 56.863888,
    "lng": -101.07611
  },
  {
    "name": "Swift Current",
    "city": "Swift Current",
    "country": "Canada",
    "code1": "YYN",
    "code2": "CYYN",
    "lat": 50.291944,
    "lng": -107.690556
  },
  {
    "name": "Churchill",
    "city": "Churchill",
    "country": "Canada",
    "code1": "YYQ",
    "code2": "CYYQ",
    "lat": 58.739167,
    "lng": -94.065
  },
  {
    "name": "Goose Bay",
    "city": "Goose Bay",
    "country": "Canada",
    "code1": "YYR",
    "code2": "CYYR",
    "lat": 53.319168,
    "lng": -60.425833
  },
  {
    "name": "St Johns Intl",
    "city": "St. John's",
    "country": "Canada",
    "code1": "YYT",
    "code2": "CYYT",
    "lat": 47.61861,
    "lng": -52.751945
  },
  {
    "name": "Kapuskasing",
    "city": "Kapuskasing",
    "country": "Canada",
    "code1": "YYU",
    "code2": "CYYU",
    "lat": 49.413889,
    "lng": -82.4675
  },
  {
    "name": "Armstrong",
    "city": "Armstrong",
    "country": "Canada",
    "code1": "YYW",
    "code2": "CYYW",
    "lat": 50.290279,
    "lng": -88.909721
  },
  {
    "name": "Mont Joli",
    "city": "Mont Joli",
    "country": "Canada",
    "code1": "YYY",
    "code2": "CYYY",
    "lat": 48.608612,
    "lng": -68.208056
  },
  {
    "name": "Lester B Pearson Intl",
    "city": "Toronto",
    "country": "Canada",
    "code1": "YYZ",
    "code2": "CYYZ",
    "lat": 43.677223,
    "lng": -79.630556
  },
  {
    "name": "Downsview",
    "city": "Toronto",
    "country": "Canada",
    "code1": "YZD",
    "code2": "CYZD",
    "lat": 43.7425,
    "lng": -79.465556
  },
  {
    "name": "Gore Bay Manitoulin",
    "city": "Gore Bay",
    "country": "Canada",
    "code1": "YZE",
    "code2": "CYZE",
    "lat": 45.885277,
    "lng": -82.567778
  },
  {
    "name": "Yellowknife",
    "city": "Yellowknife",
    "country": "Canada",
    "code1": "YZF",
    "code2": "CYZF",
    "lat": 62.462778,
    "lng": -114.440278
  },
  {
    "name": "Slave Lake",
    "city": "Slave Lake",
    "country": "Canada",
    "code1": "YZH",
    "code2": "CYZH",
    "lat": 55.293056,
    "lng": -114.777222
  },
  {
    "name": "Sandspit",
    "city": "Sandspit",
    "country": "Canada",
    "code1": "YZP",
    "code2": "CYZP",
    "lat": 53.254333,
    "lng": -131.813833
  },
  {
    "name": "Chris Hadfield",
    "city": "Sarnia",
    "country": "Canada",
    "code1": "YZR",
    "code2": "CYZR",
    "lat": 42.999444,
    "lng": -82.308889
  },
  {
    "name": "Port Hardy",
    "city": "Port Hardy",
    "country": "Canada",
    "code1": "YZT",
    "code2": "CYZT",
    "lat": 50.680556,
    "lng": -127.366667
  },
  {
    "name": "Whitecourt",
    "city": "Whitecourt",
    "country": "Canada",
    "code1": "YZU",
    "code2": "CYZU",
    "lat": 54.14389,
    "lng": -115.786667
  },
  {
    "name": "Sept Iles",
    "city": "Sept-iles",
    "country": "Canada",
    "code1": "YZV",
    "code2": "CYZV",
    "lat": 50.223333,
    "lng": -66.265556
  },
  {
    "name": "Teslin",
    "city": "Teslin",
    "country": "Canada",
    "code1": "YZW",
    "code2": "CYZW",
    "lat": 60.172779,
    "lng": -132.742778
  },
  {
    "name": "Greenwood",
    "city": "Greenwood",
    "country": "Canada",
    "code1": "YZX",
    "code2": "CYZX",
    "lat": 44.984444,
    "lng": -64.916944
  },
  {
    "name": "Faro",
    "city": "Faro",
    "country": "Canada",
    "code1": "ZFA",
    "code2": "CZFA",
    "lat": 62.2075,
    "lng": -133.375833
  },
  {
    "name": "Fort Mcpherson",
    "city": "Fort Mcpherson",
    "country": "Canada",
    "code1": "ZFM",
    "code2": "CZFM",
    "lat": 67.4075,
    "lng": -134.860556
  },
  {
    "name": "Blida",
    "city": "Blida",
    "country": "Algeria",
    "code1": "",
    "code2": "DAAB",
    "lat": 36.503613,
    "lng": 2.814167
  },
  {
    "name": "Bou Saada",
    "city": "Bou Saada",
    "country": "Algeria",
    "code1": "",
    "code2": "DAAD",
    "lat": 35.3325,
    "lng": 4.206389
  },
  {
    "name": "Soummam",
    "city": "Bejaja",
    "country": "Algeria",
    "code1": "BJA",
    "code2": "DAAE",
    "lat": 36.711997,
    "lng": 5.069922
  },
  {
    "name": "Houari Boumediene",
    "city": "Algier",
    "country": "Algeria",
    "code1": "ALG",
    "code2": "DAAG",
    "lat": 36.691014,
    "lng": 3.215408
  },
  {
    "name": "Tiska",
    "city": "Djanet",
    "country": "Algeria",
    "code1": "DJG",
    "code2": "DAAJ",
    "lat": 24.292767,
    "lng": 9.452444
  },
  {
    "name": "Boufarik",
    "city": "Boufarik",
    "country": "Algeria",
    "code1": "QFD",
    "code2": "DAAK",
    "lat": 36.545834,
    "lng": 2.876111
  },
  {
    "name": "Reggane",
    "city": "Reggan",
    "country": "Algeria",
    "code1": "",
    "code2": "DAAN",
    "lat": 26.710103,
    "lng": 0.285647
  },
  {
    "name": "Illizi Takhamalt",
    "city": "Illizi",
    "country": "Algeria",
    "code1": "VVZ",
    "code2": "DAAP",
    "lat": 26.723536,
    "lng": 8.622653
  },
  {
    "name": "Ain Oussera",
    "city": "Ain Oussera",
    "country": "Algeria",
    "code1": "",
    "code2": "DAAQ",
    "lat": 35.525414,
    "lng": 2.878714
  },
  {
    "name": "Tamanrasset",
    "city": "Tamanrasset",
    "country": "Algeria",
    "code1": "TMR",
    "code2": "DAAT",
    "lat": 22.811461,
    "lng": 5.451075
  },
  {
    "name": "Jijel",
    "city": "Jijel",
    "country": "Algeria",
    "code1": "GJL",
    "code2": "DAAV",
    "lat": 36.795136,
    "lng": 5.873608
  },
  {
    "name": "Mecheria",
    "city": "Mecheria",
    "country": "Algeria",
    "code1": "",
    "code2": "DAAY",
    "lat": 33.535853,
    "lng": -0.242353
  },
  {
    "name": "Relizane",
    "city": "Relizane",
    "country": "Algeria",
    "code1": "",
    "code2": "DAAZ",
    "lat": 35.752239,
    "lng": 0.626272
  },
  {
    "name": "Annaba",
    "city": "Annaba",
    "country": "Algeria",
    "code1": "AAE",
    "code2": "DABB",
    "lat": 36.822225,
    "lng": 7.809167
  },
  {
    "name": "Mohamed Boudiaf Intl",
    "city": "Constantine",
    "country": "Algeria",
    "code1": "CZL",
    "code2": "DABC",
    "lat": 36.276028,
    "lng": 6.620386
  },
  {
    "name": "Cheikh Larbi Tebessi",
    "city": "Tebessa",
    "country": "Algeria",
    "code1": "TEE",
    "code2": "DABS",
    "lat": 35.431611,
    "lng": 8.120717
  },
  {
    "name": "Hassi R Mel",
    "city": "Tilrempt",
    "country": "Algeria",
    "code1": "HRM",
    "code2": "DAFH",
    "lat": 32.930431,
    "lng": 3.311542
  },
  {
    "name": "Bou Chekif",
    "city": "Tiaret",
    "country": "Algeria",
    "code1": "TID",
    "code2": "DAOB",
    "lat": 35.341136,
    "lng": 1.463147
  },
  {
    "name": "Bou Sfer",
    "city": "Bou Sfer",
    "country": "Algeria",
    "code1": "",
    "code2": "DAOE",
    "lat": 35.735389,
    "lng": -0.805389
  },
  {
    "name": "Tindouf",
    "city": "Tindouf",
    "country": "Algeria",
    "code1": "TIN",
    "code2": "DAOF",
    "lat": 27.700372,
    "lng": -8.167103
  },
  {
    "name": "Ech Cheliff",
    "city": "Ech-cheliff",
    "country": "Algeria",
    "code1": "QAS",
    "code2": "DAOI",
    "lat": 36.212658,
    "lng": 1.331775
  },
  {
    "name": "Tafaraoui",
    "city": "Oran",
    "country": "Algeria",
    "code1": "TAF",
    "code2": "DAOL",
    "lat": 35.542444,
    "lng": -0.532278
  },
  {
    "name": "Zenata",
    "city": "Tlemcen",
    "country": "Algeria",
    "code1": "TLM",
    "code2": "DAON",
    "lat": 35.016667,
    "lng": -1.45
  },
  {
    "name": "Es Senia",
    "city": "Oran",
    "country": "Algeria",
    "code1": "ORN",
    "code2": "DAOO",
    "lat": 35.623858,
    "lng": -0.621183
  },
  {
    "name": "Sidi Bel Abbes",
    "city": "Sidi Bel Abbes",
    "country": "Algeria",
    "code1": "",
    "code2": "DAOS",
    "lat": 35.171775,
    "lng": -0.593275
  },
  {
    "name": "Ghriss",
    "city": "Ghriss",
    "country": "Algeria",
    "code1": "MUW",
    "code2": "DAOV",
    "lat": 35.207725,
    "lng": 0.147142
  },
  {
    "name": "Touat Cheikh Sidi Mohamed Belkebir",
    "city": "Adrar",
    "country": "Algeria",
    "code1": "AZR",
    "code2": "DAUA",
    "lat": 27.837589,
    "lng": -0.186414
  },
  {
    "name": "Biskra",
    "city": "Biskra",
    "country": "Algeria",
    "code1": "BSK",
    "code2": "DAUB",
    "lat": 34.793289,
    "lng": 5.738231
  },
  {
    "name": "El Golea",
    "city": "El Golea",
    "country": "Algeria",
    "code1": "ELG",
    "code2": "DAUE",
    "lat": 30.571294,
    "lng": 2.859586
  },
  {
    "name": "Noumerat",
    "city": "Ghardaia",
    "country": "Algeria",
    "code1": "GHA",
    "code2": "DAUG",
    "lat": 32.384106,
    "lng": 3.794114
  },
  {
    "name": "Oued Irara",
    "city": "Hassi Messaoud",
    "country": "Algeria",
    "code1": "HME",
    "code2": "DAUH",
    "lat": 31.672972,
    "lng": 6.140444
  },
  {
    "name": "In Salah",
    "city": "In Salah",
    "country": "Algeria",
    "code1": "INZ",
    "code2": "DAUI",
    "lat": 27.251022,
    "lng": 2.512017
  },
  {
    "name": "Sidi Mahdi",
    "city": "Touggourt",
    "country": "Algeria",
    "code1": "TGR",
    "code2": "DAUK",
    "lat": 33.067803,
    "lng": 6.088672
  },
  {
    "name": "Laghouat",
    "city": "Laghouat",
    "country": "Algeria",
    "code1": "LOO",
    "code2": "DAUL",
    "lat": 33.764383,
    "lng": 2.928344
  },
  {
    "name": "Timimoun",
    "city": "Timimoun",
    "country": "Algeria",
    "code1": "TMX",
    "code2": "DAUT",
    "lat": 29.237119,
    "lng": 0.276033
  },
  {
    "name": "Ouargla",
    "city": "Ouargla",
    "country": "Algeria",
    "code1": "OGX",
    "code2": "DAUU",
    "lat": 31.917223,
    "lng": 5.412778
  },
  {
    "name": "In Amenas",
    "city": "Zarzaitine",
    "country": "Algeria",
    "code1": "IAM",
    "code2": "DAUZ",
    "lat": 28.05155,
    "lng": 9.642911
  },
  {
    "name": "Cadjehoun",
    "city": "Cotonou",
    "country": "Benin",
    "code1": "COO",
    "code2": "DBBB",
    "lat": 6.357228,
    "lng": 2.384353
  },
  {
    "name": "Ouagadougou",
    "city": "Ouagadougou",
    "country": "Burkina Faso",
    "code1": "OUA",
    "code2": "DFFD",
    "lat": 12.353194,
    "lng": -1.512417
  },
  {
    "name": "Bobo Dioulasso",
    "city": "Bobo-dioulasso",
    "country": "Burkina Faso",
    "code1": "BOY",
    "code2": "DFOO",
    "lat": 11.160056,
    "lng": -4.330969
  },
  {
    "name": "Kotoka Intl",
    "city": "Accra",
    "country": "Ghana",
    "code1": "ACC",
    "code2": "DGAA",
    "lat": 5.605186,
    "lng": -0.166786
  },
  {
    "name": "Tamale",
    "city": "Tamale",
    "country": "Ghana",
    "code1": "TML",
    "code2": "DGLE",
    "lat": 9.557192,
    "lng": -0.863214
  },
  {
    "name": "Wa",
    "city": "Wa",
    "country": "Ghana",
    "code1": "",
    "code2": "DGLW",
    "lat": 10.082664,
    "lng": -2.507694
  },
  {
    "name": "Sunyani",
    "city": "Sunyani",
    "country": "Ghana",
    "code1": "NYI",
    "code2": "DGSN",
    "lat": 7.361828,
    "lng": -2.328756
  },
  {
    "name": "Takoradi",
    "city": "Takoradi",
    "country": "Ghana",
    "code1": "TKD",
    "code2": "DGTK",
    "lat": 4.896056,
    "lng": -1.774756
  },
  {
    "name": "Abidjan Felix Houphouet Boigny Intl",
    "city": "Abidjan",
    "country": "Cote d'Ivoire",
    "code1": "ABJ",
    "code2": "DIAP",
    "lat": 5.261386,
    "lng": -3.926294
  },
  {
    "name": "Bouake",
    "city": "Bouake",
    "country": "Cote d'Ivoire",
    "code1": "BYK",
    "code2": "DIBK",
    "lat": 7.7388,
    "lng": -5.073667
  },
  {
    "name": "Daloa",
    "city": "Daloa",
    "country": "Cote d'Ivoire",
    "code1": "DJO",
    "code2": "DIDL",
    "lat": 6.792808,
    "lng": -6.473189
  },
  {
    "name": "Korhogo",
    "city": "Korhogo",
    "country": "Cote d'Ivoire",
    "code1": "HGO",
    "code2": "DIKO",
    "lat": 9.387183,
    "lng": -5.556664
  },
  {
    "name": "Man",
    "city": "Man",
    "country": "Cote d'Ivoire",
    "code1": "MJC",
    "code2": "DIMN",
    "lat": 7.272069,
    "lng": -7.587364
  },
  {
    "name": "San Pedro",
    "city": "San Pedro",
    "country": "Cote d'Ivoire",
    "code1": "SPY",
    "code2": "DISP",
    "lat": 4.746717,
    "lng": -6.660817
  },
  {
    "name": "Yamoussoukro",
    "city": "Yamoussoukro",
    "country": "Cote d'Ivoire",
    "code1": "ASK",
    "code2": "DIYO",
    "lat": 6.903167,
    "lng": -5.365581
  },
  {
    "name": "Nnamdi Azikiwe Intl",
    "city": "Abuja",
    "country": "Nigeria",
    "code1": "ABV",
    "code2": "DNAA",
    "lat": 9.006792,
    "lng": 7.263172
  },
  {
    "name": "Akure",
    "city": "Akure",
    "country": "Nigeria",
    "code1": "AKR",
    "code2": "DNAK",
    "lat": 7.246739,
    "lng": 5.301008
  },
  {
    "name": "Benin",
    "city": "Benin",
    "country": "Nigeria",
    "code1": "BNI",
    "code2": "DNBE",
    "lat": 6.316981,
    "lng": 5.599503
  },
  {
    "name": "Calabar",
    "city": "Calabar",
    "country": "Nigeria",
    "code1": "CBQ",
    "code2": "DNCA",
    "lat": 4.976019,
    "lng": 8.347197
  },
  {
    "name": "Enugu",
    "city": "Enugu",
    "country": "Nigeria",
    "code1": "ENU",
    "code2": "DNEN",
    "lat": 6.474272,
    "lng": 7.561961
  },
  {
    "name": "Gusau",
    "city": "Gusau",
    "country": "Nigeria",
    "code1": "QUS",
    "code2": "DNGU",
    "lat": 12.171667,
    "lng": 6.696111
  },
  {
    "name": "Ibadan",
    "city": "Ibadan",
    "country": "Nigeria",
    "code1": "IBA",
    "code2": "DNIB",
    "lat": 7.362458,
    "lng": 3.978333
  },
  {
    "name": "Ilorin",
    "city": "Ilorin",
    "country": "Nigeria",
    "code1": "ILR",
    "code2": "DNIL",
    "lat": 8.440211,
    "lng": 4.493919
  },
  {
    "name": "Yakubu Gowon",
    "city": "Jos",
    "country": "Nigeria",
    "code1": "JOS",
    "code2": "DNJO",
    "lat": 9.639828,
    "lng": 8.86905
  },
  {
    "name": "Kaduna",
    "city": "Kaduna",
    "country": "Nigeria",
    "code1": "KAD",
    "code2": "DNKA",
    "lat": 10.696025,
    "lng": 7.320114
  },
  {
    "name": "Mallam Aminu Intl",
    "city": "Kano",
    "country": "Nigeria",
    "code1": "KAN",
    "code2": "DNKN",
    "lat": 12.047589,
    "lng": 8.524622
  },
  {
    "name": "Maiduguri",
    "city": "Maiduguri",
    "country": "Nigeria",
    "code1": "MIU",
    "code2": "DNMA",
    "lat": 11.855347,
    "lng": 13.08095
  },
  {
    "name": "Makurdi",
    "city": "Makurdi",
    "country": "Nigeria",
    "code1": "MDI",
    "code2": "DNMK",
    "lat": 7.703883,
    "lng": 8.613939
  },
  {
    "name": "Murtala Muhammed",
    "city": "Lagos",
    "country": "Nigeria",
    "code1": "LOS",
    "code2": "DNMM",
    "lat": 6.577369,
    "lng": 3.321156
  },
  {
    "name": "Minna New",
    "city": "Minna",
    "country": "Nigeria",
    "code1": "MXJ",
    "code2": "DNMN",
    "lat": 9.652172,
    "lng": 6.462256
  },
  {
    "name": "Port Harcourt Intl",
    "city": "Port Hartcourt",
    "country": "Nigeria",
    "code1": "PHC",
    "code2": "DNPO",
    "lat": 5.015494,
    "lng": 6.949594
  },
  {
    "name": "Sadiq Abubakar Iii Intl",
    "city": "Sokoto",
    "country": "Nigeria",
    "code1": "SKO",
    "code2": "DNSO",
    "lat": 12.916322,
    "lng": 5.207189
  },
  {
    "name": "Yola",
    "city": "Yola",
    "country": "Nigeria",
    "code1": "YOL",
    "code2": "DNYO",
    "lat": 9.257553,
    "lng": 12.430422
  },
  {
    "name": "Zaria",
    "city": "Zaria",
    "country": "Nigeria",
    "code1": "ZAR",
    "code2": "DNZA",
    "lat": 11.130192,
    "lng": 7.685806
  },
  {
    "name": "Maradi",
    "city": "Maradi",
    "country": "Niger",
    "code1": "MFQ",
    "code2": "DRRM",
    "lat": 13.502531,
    "lng": 7.126753
  },
  {
    "name": "Diori Hamani",
    "city": "Niamey",
    "country": "Niger",
    "code1": "NIM",
    "code2": "DRRN",
    "lat": 13.481547,
    "lng": 2.183614
  },
  {
    "name": "Tahoua",
    "city": "Tahoua",
    "country": "Niger",
    "code1": "THZ",
    "code2": "DRRT",
    "lat": 14.875658,
    "lng": 5.265358
  },
  {
    "name": "Manu Dayak",
    "city": "Agadez",
    "country": "Niger",
    "code1": "AJY",
    "code2": "DRZA",
    "lat": 16.965997,
    "lng": 8.000114
  },
  {
    "name": "Dirkou",
    "city": "Dirkou",
    "country": "Niger",
    "code1": "",
    "code2": "DRZD",
    "lat": 18.968703,
    "lng": 12.86865
  },
  {
    "name": "Diffa",
    "city": "Diffa",
    "country": "Niger",
    "code1": "",
    "code2": "DRZF",
    "lat": 13.372894,
    "lng": 12.626686
  },
  {
    "name": "Zinder",
    "city": "Zinder",
    "country": "Niger",
    "code1": "ZND",
    "code2": "DRZR",
    "lat": 13.778997,
    "lng": 8.983761
  },
  {
    "name": "Habib Bourguiba Intl",
    "city": "Monastir",
    "country": "Tunisia",
    "code1": "MIR",
    "code2": "DTMB",
    "lat": 35.758056,
    "lng": 10.754722
  },
  {
    "name": "Carthage",
    "city": "Tunis",
    "country": "Tunisia",
    "code1": "TUN",
    "code2": "DTTA",
    "lat": 36.851033,
    "lng": 10.227217
  },
  {
    "name": "Sidi Ahmed Air Base",
    "city": "Bizerte",
    "country": "Tunisia",
    "code1": "",
    "code2": "DTTB",
    "lat": 37.245447,
    "lng": 9.791453
  },
  {
    "name": "Remada",
    "city": "Remada",
    "country": "Tunisia",
    "code1": "",
    "code2": "DTTD",
    "lat": 32.306156,
    "lng": 10.382108
  },
  {
    "name": "Gafsa",
    "city": "Gafsa",
    "country": "Tunisia",
    "code1": "GAF",
    "code2": "DTTF",
    "lat": 34.422022,
    "lng": 8.822503
  },
  {
    "name": "Gabes",
    "city": "Gabes",
    "country": "Tunisia",
    "code1": "GAE",
    "code2": "DTTG",
    "lat": 33.876919,
    "lng": 10.103333
  },
  {
    "name": "Borj El Amri",
    "city": "Bordj El Amri",
    "country": "Tunisia",
    "code1": "",
    "code2": "DTTI",
    "lat": 36.721339,
    "lng": 9.943147
  },
  {
    "name": "Zarzis",
    "city": "Djerba",
    "country": "Tunisia",
    "code1": "DJE",
    "code2": "DTTJ",
    "lat": 33.875031,
    "lng": 10.775461
  },
  {
    "name": "El Borma",
    "city": "El Borma",
    "country": "Tunisia",
    "code1": "EBM",
    "code2": "DTTR",
    "lat": 31.704281,
    "lng": 9.254619
  },
  {
    "name": "Thyna",
    "city": "Sfax",
    "country": "Tunisia",
    "code1": "SFA",
    "code2": "DTTX",
    "lat": 34.717953,
    "lng": 10.690972
  },
  {
    "name": "Nefta",
    "city": "Tozeur",
    "country": "Tunisia",
    "code1": "TOE",
    "code2": "DTTZ",
    "lat": 33.939722,
    "lng": 8.110556
  },
  {
    "name": "Niamtougou International",
    "city": "Niatougou",
    "country": "Togo",
    "code1": "LRL",
    "code2": "DXNG",
    "lat": 9.767333,
    "lng": 1.09125
  },
  {
    "name": "Gnassingbe Eyadema Intl",
    "city": "Lome",
    "country": "Togo",
    "code1": "LFW",
    "code2": "DXXX",
    "lat": 6.165611,
    "lng": 1.254511
  },
  {
    "name": "Deurne",
    "city": "Antwerp",
    "country": "Belgium",
    "code1": "ANR",
    "code2": "EBAW",
    "lat": 51.189444,
    "lng": 4.460278
  },
  {
    "name": "Beauvechain",
    "city": "Beauvechain",
    "country": "Belgium",
    "code1": "",
    "code2": "EBBE",
    "lat": 50.75861,
    "lng": 4.768333
  },
  {
    "name": "Kleine Brogel",
    "city": "Kleine Brogel",
    "country": "Belgium",
    "code1": "",
    "code2": "EBBL",
    "lat": 51.168333,
    "lng": 5.47
  },
  {
    "name": "Brussels Natl",
    "city": "Brussels",
    "country": "Belgium",
    "code1": "BRU",
    "code2": "EBBR",
    "lat": 50.901389,
    "lng": 4.484444
  },
  {
    "name": "Bertrix",
    "city": "Bertrix",
    "country": "Belgium",
    "code1": "",
    "code2": "EBBX",
    "lat": 49.891667,
    "lng": 5.223889
  },
  {
    "name": "Brussels South",
    "city": "Charleroi",
    "country": "Belgium",
    "code1": "CRL",
    "code2": "EBCI",
    "lat": 50.459197,
    "lng": 4.453817
  },
  {
    "name": "Chievres Ab",
    "city": "Chievres",
    "country": "Belgium",
    "code1": "",
    "code2": "EBCV",
    "lat": 50.575833,
    "lng": 3.831
  },
  {
    "name": "Koksijde",
    "city": "Koksijde",
    "country": "Belgium",
    "code1": "",
    "code2": "EBFN",
    "lat": 51.090278,
    "lng": 2.652778
  },
  {
    "name": "Florennes",
    "city": "Florennes",
    "country": "Belgium",
    "code1": "",
    "code2": "EBFS",
    "lat": 50.243333,
    "lng": 4.645833
  },
  {
    "name": "Wevelgem",
    "city": "Kortrijk-vevelgem",
    "country": "Belgium",
    "code1": "QKT",
    "code2": "EBKT",
    "lat": 50.817222,
    "lng": 3.204722
  },
  {
    "name": "Liege",
    "city": "Liege",
    "country": "Belgium",
    "code1": "LGG",
    "code2": "EBLG",
    "lat": 50.637417,
    "lng": 5.443222
  },
  {
    "name": "Oostende",
    "city": "Ostend",
    "country": "Belgium",
    "code1": "OST",
    "code2": "EBOS",
    "lat": 51.198889,
    "lng": 2.862222
  },
  {
    "name": "Zutendaal",
    "city": "Zutendaal",
    "country": "Belgium",
    "code1": "",
    "code2": "EBSL",
    "lat": 50.9475,
    "lng": 5.590556
  },
  {
    "name": "Sint Truiden",
    "city": "Sint-truiden",
    "country": "Belgium",
    "code1": "",
    "code2": "EBST",
    "lat": 50.791944,
    "lng": 5.201667
  },
  {
    "name": "Saint Hubert Mil",
    "city": "St.-hubert",
    "country": "Belgium",
    "code1": "",
    "code2": "EBSU",
    "lat": 50.035833,
    "lng": 5.404167
  },
  {
    "name": "Ursel",
    "city": "Ursel",
    "country": "Belgium",
    "code1": "",
    "code2": "EBUL",
    "lat": 51.144133,
    "lng": 3.474361
  },
  {
    "name": "Weelde",
    "city": "Weelde",
    "country": "Belgium",
    "code1": "",
    "code2": "EBWE",
    "lat": 51.394783,
    "lng": 4.960194
  },
  {
    "name": "Zoersel",
    "city": "Zoersel",
    "country": "Belgium",
    "code1": "",
    "code2": "EBZR",
    "lat": 51.264722,
    "lng": 4.753333
  },
  {
    "name": "Bautzen",
    "city": "Bautzen",
    "country": "Germany",
    "code1": "BBJ",
    "code2": "EDAB",
    "lat": 51.193531,
    "lng": 14.519747
  },
  {
    "name": "Altenburg Nobitz",
    "city": "Altenburg",
    "country": "Germany",
    "code1": "AOC",
    "code2": "EDAC",
    "lat": 50.981817,
    "lng": 12.506361
  },
  {
    "name": "Dessau",
    "city": "Dessau",
    "country": "Germany",
    "code1": "",
    "code2": "EDAD",
    "lat": 51.831828,
    "lng": 12.184033
  },
  {
    "name": "Eisenhuttenstadt",
    "city": "Eisenhuettenstadt",
    "country": "Germany",
    "code1": "",
    "code2": "EDAE",
    "lat": 52.197333,
    "lng": 14.585667
  },
  {
    "name": "Putnam County Airport",
    "city": "Greencastle",
    "country": "United States",
    "code1": "4I7",
    "code2": "\\N",
    "lat": 39.6335556,
    "lng": -86.8138056
  },
  {
    "name": "Grossenhain",
    "city": "Suhl",
    "country": "Germany",
    "code1": "",
    "code2": "EDAK",
    "lat": 51.308111,
    "lng": 13.554973
  },
  {
    "name": "Merseburg",
    "city": "Muehlhausen",
    "country": "Germany",
    "code1": "",
    "code2": "EDAM",
    "lat": 51.363,
    "lng": 11.940833
  },
  {
    "name": "Halle Oppin",
    "city": "Halle",
    "country": "Germany",
    "code1": "",
    "code2": "EDAQ",
    "lat": 51.552,
    "lng": 12.052667
  },
  {
    "name": "Riesa Gohlis",
    "city": "Riesa",
    "country": "Germany",
    "code1": "",
    "code2": "EDAU",
    "lat": 51.2935,
    "lng": 13.356
  },
  {
    "name": "Rechlin Larz",
    "city": "Rechlin-laerz",
    "country": "Germany",
    "code1": "",
    "code2": "EDAX",
    "lat": 53.306417,
    "lng": 12.753139
  },
  {
    "name": "Strausberg",
    "city": "Strausberg",
    "country": "Germany",
    "code1": "",
    "code2": "EDAY",
    "lat": 52.579978,
    "lng": 13.915683
  },
  {
    "name": "Schonhagen",
    "city": "Schoenhagen",
    "country": "Germany",
    "code1": "",
    "code2": "EDAZ",
    "lat": 52.203258,
    "lng": 13.158408
  },
  {
    "name": "Barth",
    "city": "Barth",
    "country": "Germany",
    "code1": "BBH",
    "code2": "EDBH",
    "lat": 54.33754,
    "lng": 12.699705
  },
  {
    "name": "Jena Schongleina",
    "city": "Jena",
    "country": "Germany",
    "code1": "",
    "code2": "EDBJ",
    "lat": 50.915161,
    "lng": 11.714519
  },
  {
    "name": "Kyritz",
    "city": "Kyritz",
    "country": "Germany",
    "code1": "",
    "code2": "EDBK",
    "lat": 52.918833,
    "lng": 12.425333
  },
  {
    "name": "Magdeburg",
    "city": "Magdeburg",
    "country": "Germany",
    "code1": "",
    "code2": "EDBM",
    "lat": 52.073658,
    "lng": 11.626467
  },
  {
    "name": "Rothenburg Gorlitz",
    "city": "Rothenburg/ol",
    "country": "Germany",
    "code1": "",
    "code2": "EDBR",
    "lat": 51.363167,
    "lng": 14.95
  },
  {
    "name": "Anklam",
    "city": "Anklam",
    "country": "Germany",
    "code1": "",
    "code2": "EDCA",
    "lat": 53.8327,
    "lng": 13.669131
  },
  {
    "name": "Cottbus Drewitz",
    "city": "Cottbus",
    "country": "Germany",
    "code1": "",
    "code2": "EDCD",
    "lat": 51.889475,
    "lng": 14.531986
  },
  {
    "name": "Kamenz",
    "city": "Kamenz",
    "country": "Germany",
    "code1": "",
    "code2": "EDCM",
    "lat": 51.29625,
    "lng": 14.129
  },
  {
    "name": "Schonefeld",
    "city": "Berlin",
    "country": "Germany",
    "code1": "SXF",
    "code2": "EDDB",
    "lat": 52.380001,
    "lng": 13.5225
  },
  {
    "name": "Dresden",
    "city": "Dresden",
    "country": "Germany",
    "code1": "DRS",
    "code2": "EDDC",
    "lat": 51.132767,
    "lng": 13.767161
  },
  {
    "name": "Erfurt",
    "city": "Erfurt",
    "country": "Germany",
    "code1": "ERF",
    "code2": "EDDE",
    "lat": 50.979811,
    "lng": 10.958106
  },
  {
    "name": "Frankfurt Main",
    "city": "Frankfurt",
    "country": "Germany",
    "code1": "FRA",
    "code2": "EDDF",
    "lat": 50.026421,
    "lng": 8.543125
  },
  {
    "name": "Munster Osnabruck",
    "city": "Munster",
    "country": "Germany",
    "code1": "FMO",
    "code2": "EDDG",
    "lat": 52.134642,
    "lng": 7.684831
  },
  {
    "name": "Hamburg",
    "city": "Hamburg",
    "country": "Germany",
    "code1": "HAM",
    "code2": "EDDH",
    "lat": 53.630389,
    "lng": 9.988228
  },
  {
    "name": "Tempelhof",
    "city": "Berlin",
    "country": "Germany",
    "code1": "THF",
    "code2": "EDDI",
    "lat": 52.473025,
    "lng": 13.403944
  },
  {
    "name": "Koln Bonn",
    "city": "Cologne",
    "country": "Germany",
    "code1": "CGN",
    "code2": "EDDK",
    "lat": 50.865917,
    "lng": 7.142744
  },
  {
    "name": "Dusseldorf",
    "city": "Duesseldorf",
    "country": "Germany",
    "code1": "DUS",
    "code2": "EDDL",
    "lat": 51.289453,
    "lng": 6.766775
  },
  {
    "name": "Franz Josef Strauss",
    "city": "Munich",
    "country": "Germany",
    "code1": "MUC",
    "code2": "EDDM",
    "lat": 48.353783,
    "lng": 11.786086
  },
  {
    "name": "Nurnberg",
    "city": "Nuernberg",
    "country": "Germany",
    "code1": "NUE",
    "code2": "EDDN",
    "lat": 49.4987,
    "lng": 11.066897
  },
  {
    "name": "Leipzig Halle",
    "city": "Leipzig",
    "country": "Germany",
    "code1": "LEJ",
    "code2": "EDDP",
    "lat": 51.432447,
    "lng": 12.241633
  },
  {
    "name": "Saarbrucken",
    "city": "Saarbruecken",
    "country": "Germany",
    "code1": "SCN",
    "code2": "EDDR",
    "lat": 49.214553,
    "lng": 7.109508
  },
  {
    "name": "Stuttgart",
    "city": "Stuttgart",
    "country": "Germany",
    "code1": "STR",
    "code2": "EDDS",
    "lat": 48.689878,
    "lng": 9.221964
  },
  {
    "name": "Tegel",
    "city": "Berlin",
    "country": "Germany",
    "code1": "TXL",
    "code2": "EDDT",
    "lat": 52.559686,
    "lng": 13.287711
  },
  {
    "name": "Hannover",
    "city": "Hannover",
    "country": "Germany",
    "code1": "HAJ",
    "code2": "EDDV",
    "lat": 52.461056,
    "lng": 9.685078
  },
  {
    "name": "Neuenland",
    "city": "Bremen",
    "country": "Germany",
    "code1": "BRE",
    "code2": "EDDW",
    "lat": 53.0475,
    "lng": 8.786667
  },
  {
    "name": "Egelsbach",
    "city": "Egelsbach",
    "country": "Germany",
    "code1": "",
    "code2": "EDFE",
    "lat": 49.960833,
    "lng": 8.6415
  },
  {
    "name": "Frankfurt Hahn",
    "city": "Hahn",
    "country": "Germany",
    "code1": "HHN",
    "code2": "EDFH",
    "lat": 49.948672,
    "lng": 7.263892
  },
  {
    "name": "Mannheim City",
    "city": "Mannheim",
    "country": "Germany",
    "code1": "MHG",
    "code2": "EDFM",
    "lat": 49.472706,
    "lng": 8.514264
  },
  {
    "name": "Allendorf Eder",
    "city": "Allendorf",
    "country": "Germany",
    "code1": "",
    "code2": "EDFQ",
    "lat": 51.034878,
    "lng": 8.680839
  },
  {
    "name": "Worms",
    "city": "Worms",
    "country": "Germany",
    "code1": "",
    "code2": "EDFV",
    "lat": 49.606511,
    "lng": 8.3684
  },
  {
    "name": "Mainz Finthen",
    "city": "Mainz",
    "country": "Germany",
    "code1": "",
    "code2": "EDFZ",
    "lat": 49.968931,
    "lng": 8.148336
  },
  {
    "name": "Eisenach Kindel",
    "city": "Eisenach",
    "country": "Germany",
    "code1": "",
    "code2": "EDGE",
    "lat": 50.992797,
    "lng": 10.472711
  },
  {
    "name": "Siegerland",
    "city": "Siegerland",
    "country": "Germany",
    "code1": "",
    "code2": "EDGS",
    "lat": 50.707658,
    "lng": 8.082969
  },
  {
    "name": "Hamburg Finkenwerder",
    "city": "Hamburg",
    "country": "Germany",
    "code1": "XFW",
    "code2": "EDHI",
    "lat": 53.535886,
    "lng": 9.837025
  },
  {
    "name": "Kiel Holtenau",
    "city": "Kiel",
    "country": "Germany",
    "code1": "KEL",
    "code2": "EDHK",
    "lat": 54.3795,
    "lng": 10.145167
  },
  {
    "name": "Lubeck Blankensee",
    "city": "Luebeck",
    "country": "Germany",
    "code1": "LBC",
    "code2": "EDHL",
    "lat": 53.805367,
    "lng": 10.719222
  },
  {
    "name": "Dahlemer Binz",
    "city": "Dahlemer Binz",
    "country": "Germany",
    "code1": "",
    "code2": "EDKV",
    "lat": 50.405888,
    "lng": 6.528083
  },
  {
    "name": "Meinerzhagen",
    "city": "Meinerzhagen",
    "country": "Germany",
    "code1": "",
    "code2": "EDKZ",
    "lat": 51.099445,
    "lng": 7.601944
  },
  {
    "name": "Arnsberg Menden",
    "city": "Arnsberg",
    "country": "Germany",
    "code1": "ZCA",
    "code2": "EDLA",
    "lat": 51.483333,
    "lng": 7.899333
  },
  {
    "name": "Essen Mulheim",
    "city": "Essen",
    "country": "Germany",
    "code1": "ESS",
    "code2": "EDLE",
    "lat": 51.402333,
    "lng": 6.937333
  },
  {
    "name": "Bielefeld",
    "city": "Bielefeld",
    "country": "Germany",
    "code1": "",
    "code2": "EDLI",
    "lat": 51.964833,
    "lng": 8.544833
  },
  {
    "name": "Monchengladbach",
    "city": "Moenchengladbach",
    "country": "Germany",
    "code1": "MGL",
    "code2": "EDLN",
    "lat": 51.230356,
    "lng": 6.504494
  },
  {
    "name": "Paderborn Lippstadt",
    "city": "Paderborn",
    "country": "Germany",
    "code1": "PAD",
    "code2": "EDLP",
    "lat": 51.614089,
    "lng": 8.616317
  },
  {
    "name": "Stadtlohn Vreden",
    "city": "Stadtlohn",
    "country": "Germany",
    "code1": "",
    "code2": "EDLS",
    "lat": 51.995844,
    "lng": 6.840667
  },
  {
    "name": "Dortmund",
    "city": "Dortmund",
    "country": "Germany",
    "code1": "DTM",
    "code2": "EDLW",
    "lat": 51.518314,
    "lng": 7.612242
  },
  {
    "name": "Augsburg",
    "city": "Augsburg",
    "country": "Germany",
    "code1": "AGB",
    "code2": "EDMA",
    "lat": 48.425158,
    "lng": 10.931764
  },
  {
    "name": "Biberach An Der Riss",
    "city": "Biberach",
    "country": "Germany",
    "code1": "",
    "code2": "EDMB",
    "lat": 48.111,
    "lng": 9.762833
  },
  {
    "name": "Eggenfelden",
    "city": "Eggenfelden",
    "country": "Germany",
    "code1": "",
    "code2": "EDME",
    "lat": 48.396167,
    "lng": 12.723667
  },
  {
    "name": "Mindelheim Mattsies",
    "city": "Mindelheim",
    "country": "Germany",
    "code1": "",
    "code2": "EDMN",
    "lat": 48.108833,
    "lng": 10.524333
  },
  {
    "name": "Oberpfaffenhofen",
    "city": "Oberpfaffenhofen",
    "country": "Germany",
    "code1": "OBF",
    "code2": "EDMO",
    "lat": 48.081364,
    "lng": 11.283067
  },
  {
    "name": "Straubing",
    "city": "Straubing",
    "country": "Germany",
    "code1": "",
    "code2": "EDMS",
    "lat": 48.90095,
    "lng": 12.518186
  },
  {
    "name": "Vilshofen",
    "city": "Vilshofen",
    "country": "Germany",
    "code1": "",
    "code2": "EDMV",
    "lat": 48.635167,
    "lng": 13.195667
  },
  {
    "name": "Leutkirch Unterzeil",
    "city": "Leutkirch",
    "country": "Germany",
    "code1": "",
    "code2": "EDNL",
    "lat": 47.859117,
    "lng": 10.014572
  },
  {
    "name": "Friedrichshafen",
    "city": "Friedrichshafen",
    "country": "Germany",
    "code1": "FDH",
    "code2": "EDNY",
    "lat": 47.671317,
    "lng": 9.511486
  },
  {
    "name": "Schwerin Parchim",
    "city": "Parchim",
    "country": "Germany",
    "code1": "SZW",
    "code2": "EDOP",
    "lat": 53.426997,
    "lng": 11.783436
  },
  {
    "name": "Stendal Borstel",
    "city": "Stendal",
    "country": "Germany",
    "code1": "ZSN",
    "code2": "EDOV",
    "lat": 52.627778,
    "lng": 11.818333
  },
  {
    "name": "Aalen Heidenheim Elchingen",
    "city": "Aalen-heidenheim",
    "country": "Germany",
    "code1": "",
    "code2": "EDPA",
    "lat": 48.777833,
    "lng": 10.264667
  },
  {
    "name": "Bayreuth",
    "city": "Bayreuth",
    "country": "Germany",
    "code1": "BYU",
    "code2": "EDQD",
    "lat": 49.984428,
    "lng": 11.638569
  },
  {
    "name": "Burg Feuerstein",
    "city": "Burg Feuerstein",
    "country": "Germany",
    "code1": "",
    "code2": "EDQE",
    "lat": 49.793833,
    "lng": 11.133167
  },
  {
    "name": "Hof Plauen",
    "city": "Hof",
    "country": "Germany",
    "code1": "HOQ",
    "code2": "EDQM",
    "lat": 50.288836,
    "lng": 11.854919
  },
  {
    "name": "Hassfurt Schweinfurt",
    "city": "Hassfurt",
    "country": "Germany",
    "code1": "",
    "code2": "EDQT",
    "lat": 50.018,
    "lng": 10.5295
  },
  {
    "name": "Koblenz Winningen",
    "city": "Koblenz",
    "country": "Germany",
    "code1": "ZNV",
    "code2": "EDRK",
    "lat": 50.3255,
    "lng": 7.528667
  },
  {
    "name": "Trier Fohren",
    "city": "Trier",
    "country": "Germany",
    "code1": "ZQF",
    "code2": "EDRT",
    "lat": 49.8635,
    "lng": 6.788167
  },
  {
    "name": "Speyer",
    "city": "Speyer",
    "country": "Germany",
    "code1": "ZQC",
    "code2": "EDRY",
    "lat": 49.302776,
    "lng": 8.451195
  },
  {
    "name": "Zweibrucken",
    "city": "Zweibruecken",
    "country": "Germany",
    "code1": "",
    "code2": "EDRZ",
    "lat": 49.209525,
    "lng": 7.400647
  },
  {
    "name": "Donaueschingen Villingen",
    "city": "Donaueschingen",
    "country": "Germany",
    "code1": "ZQL",
    "code2": "EDTD",
    "lat": 47.973331,
    "lng": 8.522223
  },
  {
    "name": "Freiburg",
    "city": "Freiburg",
    "country": "Germany",
    "code1": "",
    "code2": "EDTF",
    "lat": 48.022653,
    "lng": 7.832583
  },
  {
    "name": "Mengen Hohentengen",
    "city": "Mengen",
    "country": "Germany",
    "code1": "",
    "code2": "EDTM",
    "lat": 48.053833,
    "lng": 9.372833
  },
  {
    "name": "Schwabisch Hall",
    "city": "Schwaebisch Hall",
    "country": "Germany",
    "code1": "",
    "code2": "EDTY",
    "lat": 49.118317,
    "lng": 9.783956
  },
  {
    "name": "Finsterwalde Schacksdorf",
    "city": "Soest",
    "country": "Germany",
    "code1": "",
    "code2": "EDUS",
    "lat": 51.6075,
    "lng": 13.738
  },
  {
    "name": "Braunschweig Wolfsburg",
    "city": "Braunschweig",
    "country": "Germany",
    "code1": "BWE",
    "code2": "EDVE",
    "lat": 52.319167,
    "lng": 10.556111
  },
  {
    "name": "Kassel Calden",
    "city": "Kassel",
    "country": "Germany",
    "code1": "KSF",
    "code2": "EDVK",
    "lat": 51.408394,
    "lng": 9.377631
  },
  {
    "name": "Hildesheim",
    "city": "Hildesheim",
    "country": "Germany",
    "code1": "",
    "code2": "EDVM",
    "lat": 52.179833,
    "lng": 9.945667
  },
  {
    "name": "Bremerhaven",
    "city": "Bremerhaven",
    "country": "Germany",
    "code1": "BRV",
    "code2": "EDWB",
    "lat": 53.507081,
    "lng": 8.572878
  },
  {
    "name": "Emden",
    "city": "Emden",
    "country": "Germany",
    "code1": "EME",
    "code2": "EDWE",
    "lat": 53.391186,
    "lng": 7.227408
  },
  {
    "name": "Leer Papenburg",
    "city": "Leer",
    "country": "Germany",
    "code1": "",
    "code2": "EDWF",
    "lat": 53.271592,
    "lng": 7.442344
  },
  {
    "name": "Wilhelmshaven Mariensiel",
    "city": "Wilhelmshaven",
    "country": "Germany",
    "code1": "WVN",
    "code2": "EDWI",
    "lat": 53.504833,
    "lng": 8.053333
  },
  {
    "name": "Borkum",
    "city": "Borkum",
    "country": "Germany",
    "code1": "BMK",
    "code2": "EDWR",
    "lat": 53.5955,
    "lng": 6.709167
  },
  {
    "name": "Norderney",
    "city": "Norderney",
    "country": "Germany",
    "code1": "NRD",
    "code2": "EDWY",
    "lat": 53.706822,
    "lng": 7.230247
  },
  {
    "name": "Flensburg Schaferhaus",
    "city": "Flensburg",
    "country": "Germany",
    "code1": "FLF",
    "code2": "EDXF",
    "lat": 54.771772,
    "lng": 9.378214
  },
  {
    "name": "Rendsburg Schachtholm",
    "city": "Rendsburg",
    "country": "Germany",
    "code1": "",
    "code2": "EDXR",
    "lat": 54.220928,
    "lng": 9.600803
  },
  {
    "name": "Westerland Sylt",
    "city": "Westerland",
    "country": "Germany",
    "code1": "GWT",
    "code2": "EDXW",
    "lat": 54.91325,
    "lng": 8.340472
  },
  {
    "name": "Amari",
    "city": "Armari Air Force Base",
    "country": "Estonia",
    "code1": "",
    "code2": "EEEI",
    "lat": 59.260286,
    "lng": 24.208467
  },
  {
    "name": "Kardla",
    "city": "Kardla",
    "country": "Estonia",
    "code1": "KDL",
    "code2": "EEKA",
    "lat": 58.990756,
    "lng": 22.830733
  },
  {
    "name": "Kuressaare",
    "city": "Kuressaare",
    "country": "Estonia",
    "code1": "URE",
    "code2": "EEKE",
    "lat": 58.229883,
    "lng": 22.509494
  },
  {
    "name": "Parnu",
    "city": "Parnu",
    "country": "Estonia",
    "code1": "EPU",
    "code2": "EEPU",
    "lat": 58.419044,
    "lng": 24.472819
  },
  {
    "name": "Tallinn",
    "city": "Tallinn-ulemiste International",
    "country": "Estonia",
    "code1": "TLL",
    "code2": "EETN",
    "lat": 59.413317,
    "lng": 24.832844
  },
  {
    "name": "Tartu",
    "city": "Tartu",
    "country": "Estonia",
    "code1": "TAY",
    "code2": "EETU",
    "lat": 58.307461,
    "lng": 26.690428
  },
  {
    "name": "Enontekio",
    "city": "Enontekio",
    "country": "Finland",
    "code1": "ENF",
    "code2": "EFET",
    "lat": 68.362586,
    "lng": 23.424322
  },
  {
    "name": "Eura",
    "city": "Eura",
    "country": "Finland",
    "code1": "",
    "code2": "EFEU",
    "lat": 61.116112,
    "lng": 22.201389
  },
  {
    "name": "Halli",
    "city": "Halli",
    "country": "Finland",
    "code1": "KEV",
    "code2": "EFHA",
    "lat": 61.85605,
    "lng": 24.7866
  },
  {
    "name": "Helsinki Malmi",
    "city": "Helsinki",
    "country": "Finland",
    "code1": "HEM",
    "code2": "EFHF",
    "lat": 60.254558,
    "lng": 25.042828
  },
  {
    "name": "Helsinki Vantaa",
    "city": "Helsinki",
    "country": "Finland",
    "code1": "HEL",
    "code2": "EFHK",
    "lat": 60.317222,
    "lng": 24.963333
  },
  {
    "name": "Hameenkyro",
    "city": "Hameenkyro",
    "country": "Finland",
    "code1": "",
    "code2": "EFHM",
    "lat": 61.689656,
    "lng": 23.073744
  },
  {
    "name": "Hanko",
    "city": "Hanko",
    "country": "Finland",
    "code1": "",
    "code2": "EFHN",
    "lat": 59.848864,
    "lng": 23.083583
  },
  {
    "name": "Hyvinkaa",
    "city": "Hyvinkaa",
    "country": "Finland",
    "code1": "HYV",
    "code2": "EFHV",
    "lat": 60.654444,
    "lng": 24.881111
  },
  {
    "name": "Kiikala",
    "city": "Kikala",
    "country": "Finland",
    "code1": "",
    "code2": "EFIK",
    "lat": 60.462502,
    "lng": 23.6525
  },
  {
    "name": "Immola",
    "city": "Immola",
    "country": "Finland",
    "code1": "",
    "code2": "EFIM",
    "lat": 61.249172,
    "lng": 28.903711
  },
  {
    "name": "Kitee",
    "city": "Kitee",
    "country": "Finland",
    "code1": "",
    "code2": "EFIT",
    "lat": 62.166111,
    "lng": 30.073611
  },
  {
    "name": "Ivalo",
    "city": "Ivalo",
    "country": "Finland",
    "code1": "IVL",
    "code2": "EFIV",
    "lat": 68.607269,
    "lng": 27.405328
  },
  {
    "name": "Joensuu",
    "city": "Joensuu",
    "country": "Finland",
    "code1": "JOE",
    "code2": "EFJO",
    "lat": 62.662906,
    "lng": 29.60755
  },
  {
    "name": "Jyvaskyla",
    "city": "Jyvaskyla",
    "country": "Finland",
    "code1": "JYV",
    "code2": "EFJY",
    "lat": 62.399453,
    "lng": 25.678253
  },
  {
    "name": "Kauhava",
    "city": "Kauhava",
    "country": "Finland",
    "code1": "KAU",
    "code2": "EFKA",
    "lat": 63.127078,
    "lng": 23.051442
  },
  {
    "name": "Kemi Tornio",
    "city": "Kemi",
    "country": "Finland",
    "code1": "KEM",
    "code2": "EFKE",
    "lat": 65.781889,
    "lng": 24.5991
  },
  {
    "name": "Kajaani",
    "city": "Kajaani",
    "country": "Finland",
    "code1": "KAJ",
    "code2": "EFKI",
    "lat": 64.285472,
    "lng": 27.692414
  },
  {
    "name": "Kauhajoki",
    "city": "Kauhajoki",
    "country": "Finland",
    "code1": "",
    "code2": "EFKJ",
    "lat": 62.462502,
    "lng": 22.393055
  },
  {
    "name": "Kruunupyy",
    "city": "Kruunupyy",
    "country": "Finland",
    "code1": "KOK",
    "code2": "EFKK",
    "lat": 63.721172,
    "lng": 23.143131
  },
  {
    "name": "Kemijarvi",
    "city": "Kemijarvi",
    "country": "Finland",
    "code1": "",
    "code2": "EFKM",
    "lat": 66.712883,
    "lng": 27.156786
  },
  {
    "name": "Kuusamo",
    "city": "Kuusamo",
    "country": "Finland",
    "code1": "KAO",
    "code2": "EFKS",
    "lat": 65.987575,
    "lng": 29.239381
  },
  {
    "name": "Kittila",
    "city": "Kittila",
    "country": "Finland",
    "code1": "KTT",
    "code2": "EFKT",
    "lat": 67.701022,
    "lng": 24.84685
  },
  {
    "name": "Kuopio",
    "city": "Kuopio",
    "country": "Finland",
    "code1": "KUO",
    "code2": "EFKU",
    "lat": 63.00715,
    "lng": 27.797756
  },
  {
    "name": "Lahti Vesivehmaa",
    "city": "Vesivehmaa",
    "country": "Finland",
    "code1": "",
    "code2": "EFLA",
    "lat": 61.144158,
    "lng": 25.693508
  },
  {
    "name": "Lappeenranta",
    "city": "Lappeenranta",
    "country": "Finland",
    "code1": "LPP",
    "code2": "EFLP",
    "lat": 61.044553,
    "lng": 28.144397
  },
  {
    "name": "Mariehamn",
    "city": "Mariehamn",
    "country": "Finland",
    "code1": "MHQ",
    "code2": "EFMA",
    "lat": 60.122203,
    "lng": 19.898156
  },
  {
    "name": "Menkijarvi",
    "city": "Menkijarvi",
    "country": "Finland",
    "code1": "",
    "code2": "EFME",
    "lat": 62.946667,
    "lng": 23.518889
  },
  {
    "name": "Mikkeli",
    "city": "Mikkeli",
    "country": "Finland",
    "code1": "MIK",
    "code2": "EFMI",
    "lat": 61.6866,
    "lng": 27.201794
  },
  {
    "name": "Nummela",
    "city": "Nummela",
    "country": "Finland",
    "code1": "",
    "code2": "EFNU",
    "lat": 60.333889,
    "lng": 24.296389
  },
  {
    "name": "Oulu",
    "city": "Oulu",
    "country": "Finland",
    "code1": "OUL",
    "code2": "EFOU",
    "lat": 64.930061,
    "lng": 25.354564
  },
  {
    "name": "Piikajarvi",
    "city": "Piikajarvi",
    "country": "Finland",
    "code1": "",
    "code2": "EFPI",
    "lat": 61.245558,
    "lng": 22.193356
  },
  {
    "name": "Pori",
    "city": "Pori",
    "country": "Finland",
    "code1": "POR",
    "code2": "EFPO",
    "lat": 61.461686,
    "lng": 21.799983
  },
  {
    "name": "Pudasjarvi",
    "city": "Pudasjarvi",
    "country": "Finland",
    "code1": "",
    "code2": "EFPU",
    "lat": 65.402222,
    "lng": 26.946944
  },
  {
    "name": "Pyhasalmi",
    "city": "Pyhasalmi",
    "country": "Finland",
    "code1": "",
    "code2": "EFPY",
    "lat": 63.731917,
    "lng": 25.926306
  },
  {
    "name": "Raahe Pattijoki",
    "city": "Pattijoki",
    "country": "Finland",
    "code1": "",
    "code2": "EFRH",
    "lat": 64.688056,
    "lng": 24.695833
  },
  {
    "name": "Rantasalmi",
    "city": "Rantasalmi",
    "country": "Finland",
    "code1": "",
    "code2": "EFRN",
    "lat": 62.065481,
    "lng": 28.356494
  },
  {
    "name": "Rovaniemi",
    "city": "Rovaniemi",
    "country": "Finland",
    "code1": "RVN",
    "code2": "EFRO",
    "lat": 66.564822,
    "lng": 25.830411
  },
  {
    "name": "Rayskala",
    "city": "Rayskala",
    "country": "Finland",
    "code1": "",
    "code2": "EFRY",
    "lat": 60.744722,
    "lng": 24.107778
  },
  {
    "name": "Savonlinna",
    "city": "Savonlinna",
    "country": "Finland",
    "code1": "SVL",
    "code2": "EFSA",
    "lat": 61.943064,
    "lng": 28.945136
  },
  {
    "name": "Selanpaa",
    "city": "Selanpaa",
    "country": "Finland",
    "code1": "",
    "code2": "EFSE",
    "lat": 61.062389,
    "lng": 26.798861
  },
  {
    "name": "Sodankyla",
    "city": "Sodankyla",
    "country": "Finland",
    "code1": "SOT",
    "code2": "EFSO",
    "lat": 67.395033,
    "lng": 26.619133
  },
  {
    "name": "Tampere Pirkkala",
    "city": "Tampere",
    "country": "Finland",
    "code1": "TMP",
    "code2": "EFTP",
    "lat": 61.414147,
    "lng": 23.604392
  },
  {
    "name": "Teisko",
    "city": "Teisko",
    "country": "Finland",
    "code1": "",
    "code2": "EFTS",
    "lat": 61.77335,
    "lng": 24.027006
  },
  {
    "name": "Turku",
    "city": "Turku",
    "country": "Finland",
    "code1": "TKU",
    "code2": "EFTU",
    "lat": 60.514142,
    "lng": 22.262808
  },
  {
    "name": "Utti",
    "city": "Utti",
    "country": "Finland",
    "code1": "QVY",
    "code2": "EFUT",
    "lat": 60.896394,
    "lng": 26.938353
  },
  {
    "name": "Vaasa",
    "city": "Vaasa",
    "country": "Finland",
    "code1": "VAA",
    "code2": "EFVA",
    "lat": 63.05065,
    "lng": 21.762175
  },
  {
    "name": "Varkaus",
    "city": "Varkaus",
    "country": "Finland",
    "code1": "VRK",
    "code2": "EFVR",
    "lat": 62.171111,
    "lng": 27.868611
  },
  {
    "name": "Ylivieska",
    "city": "Ylivieska-raudaskyla",
    "country": "Finland",
    "code1": "",
    "code2": "EFYL",
    "lat": 64.060547,
    "lng": 24.715953
  },
  {
    "name": "Belfast Intl",
    "city": "Belfast",
    "country": "United Kingdom",
    "code1": "BFS",
    "code2": "EGAA",
    "lat": 54.6575,
    "lng": -6.215833
  },
  {
    "name": "St Angelo",
    "city": "Enniskillen",
    "country": "United Kingdom",
    "code1": "ENK",
    "code2": "EGAB",
    "lat": 54.398889,
    "lng": -7.651667
  },
  {
    "name": "Belfast City",
    "city": "Belfast",
    "country": "United Kingdom",
    "code1": "BHD",
    "code2": "EGAC",
    "lat": 54.618056,
    "lng": -5.8725
  },
  {
    "name": "City of Derry",
    "city": "Londonderry",
    "country": "United Kingdom",
    "code1": "LDY",
    "code2": "EGAE",
    "lat": 55.042778,
    "lng": -7.161111
  },
  {
    "name": "Birmingham",
    "city": "Birmingham",
    "country": "United Kingdom",
    "code1": "BHX",
    "code2": "EGBB",
    "lat": 52.453856,
    "lng": -1.748028
  },
  {
    "name": "Coventry",
    "city": "Coventry",
    "country": "United Kingdom",
    "code1": "CVT",
    "code2": "EGBE",
    "lat": 52.369722,
    "lng": -1.479722
  },
  {
    "name": "Leicester",
    "city": "Leicester",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGBG",
    "lat": 52.607778,
    "lng": -1.031944
  },
  {
    "name": "Gloucestershire",
    "city": "Golouchestershire",
    "country": "United Kingdom",
    "code1": "GLO",
    "code2": "EGBJ",
    "lat": 51.894167,
    "lng": -2.167222
  },
  {
    "name": "Wolverhampton",
    "city": "Halfpenny Green",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGBO",
    "lat": 52.5175,
    "lng": -2.259444
  },
  {
    "name": "Kemble",
    "city": "Pailton",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGBP",
    "lat": 51.668056,
    "lng": -2.056944
  },
  {
    "name": "Turweston",
    "city": "Turweston",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGBT",
    "lat": 52.040833,
    "lng": -1.095556
  },
  {
    "name": "Wellesbourne Mountford",
    "city": "Wellesbourne",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGBW",
    "lat": 52.192222,
    "lng": -1.614444
  },
  {
    "name": "Manchester",
    "city": "Manchester",
    "country": "United Kingdom",
    "code1": "MAN",
    "code2": "EGCC",
    "lat": 53.353744,
    "lng": -2.27495
  },
  {
    "name": "Manchester Woodford",
    "city": "Woodfort",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGCD",
    "lat": 53.338056,
    "lng": -2.148889
  },
  {
    "name": "Chivenor",
    "city": "Chivenor",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGDC",
    "lat": 51.087167,
    "lng": -4.150339
  },
  {
    "name": "St Mawgan",
    "city": "Newquai",
    "country": "United Kingdom",
    "code1": "NQY",
    "code2": "EGDG",
    "lat": 50.440558,
    "lng": -4.995408
  },
  {
    "name": "Lyneham",
    "city": "Lyneham",
    "country": "United Kingdom",
    "code1": "LYE",
    "code2": "EGDL",
    "lat": 51.505144,
    "lng": -1.993428
  },
  {
    "name": "Boscombe Down",
    "city": "Boscombe Down",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGDM",
    "lat": 51.152189,
    "lng": -1.747414
  },
  {
    "name": "Culdrose",
    "city": "Culdrose",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGDR",
    "lat": 50.086092,
    "lng": -5.255711
  },
  {
    "name": "St Athan",
    "city": "St. Athan",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGDX",
    "lat": 51.404811,
    "lng": -3.43575
  },
  {
    "name": "Yeovilton",
    "city": "Yeovilton",
    "country": "United Kingdom",
    "code1": "YEO",
    "code2": "EGDY",
    "lat": 51.009358,
    "lng": -2.638819
  },
  {
    "name": "Haverfordwest",
    "city": "Haverfordwest",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGFE",
    "lat": 51.833056,
    "lng": -4.961111
  },
  {
    "name": "Cardiff",
    "city": "Cardiff",
    "country": "United Kingdom",
    "code1": "CWL",
    "code2": "EGFF",
    "lat": 51.396667,
    "lng": -3.343333
  },
  {
    "name": "Swansea",
    "city": "Swansea",
    "country": "United Kingdom",
    "code1": "SWS",
    "code2": "EGFH",
    "lat": 51.605333,
    "lng": -4.067833
  },
  {
    "name": "Bristol",
    "city": "Bristol",
    "country": "United Kingdom",
    "code1": "BRS",
    "code2": "EGGD",
    "lat": 51.382669,
    "lng": -2.719089
  },
  {
    "name": "Liverpool",
    "city": "Liverpool",
    "country": "United Kingdom",
    "code1": "LPL",
    "code2": "EGGP",
    "lat": 53.333611,
    "lng": -2.849722
  },
  {
    "name": "Luton",
    "city": "London",
    "country": "United Kingdom",
    "code1": "LTN",
    "code2": "EGGW",
    "lat": 51.874722,
    "lng": -0.368333
  },
  {
    "name": "Plymouth",
    "city": "Plymouth",
    "country": "United Kingdom",
    "code1": "PLH",
    "code2": "EGHD",
    "lat": 50.422778,
    "lng": -4.105833
  },
  {
    "name": "Bournemouth",
    "city": "Bournemouth",
    "country": "United Kingdom",
    "code1": "BOH",
    "code2": "EGHH",
    "lat": 50.78,
    "lng": -1.8425
  },
  {
    "name": "Southampton",
    "city": "Southampton",
    "country": "United Kingdom",
    "code1": "SOU",
    "code2": "EGHI",
    "lat": 50.950261,
    "lng": -1.356803
  },
  {
    "name": "Lasham",
    "city": "Lasham",
    "country": "United Kingdom",
    "code1": "QLA",
    "code2": "EGHL",
    "lat": 51.187167,
    "lng": -1.0335
  },
  {
    "name": "Alderney",
    "city": "Alderney",
    "country": "Guernsey",
    "code1": "ACI",
    "code2": "EGJA",
    "lat": 49.706111,
    "lng": -2.214722
  },
  {
    "name": "Guernsey",
    "city": "Guernsey",
    "country": "Guernsey",
    "code1": "GCI",
    "code2": "EGJB",
    "lat": 49.434956,
    "lng": -2.601969
  },
  {
    "name": "Jersey",
    "city": "Jersey",
    "country": "Jersey",
    "code1": "JER",
    "code2": "EGJJ",
    "lat": 49.207947,
    "lng": -2.195508
  },
  {
    "name": "Shoreham",
    "city": "Shoreham By Sea",
    "country": "United Kingdom",
    "code1": "ESH",
    "code2": "EGKA",
    "lat": 50.835556,
    "lng": -0.297222
  },
  {
    "name": "Biggin Hill",
    "city": "Biggin Hill",
    "country": "United Kingdom",
    "code1": "BQH",
    "code2": "EGKB",
    "lat": 51.330833,
    "lng": 0.0325
  },
  {
    "name": "Gatwick",
    "city": "London",
    "country": "United Kingdom",
    "code1": "LGW",
    "code2": "EGKK",
    "lat": 51.148056,
    "lng": -0.190278
  },
  {
    "name": "City",
    "city": "London",
    "country": "United Kingdom",
    "code1": "LCY",
    "code2": "EGLC",
    "lat": 51.505278,
    "lng": 0.055278
  },
  {
    "name": "Farnborough",
    "city": "Farnborough",
    "country": "United Kingdom",
    "code1": "FAB",
    "code2": "EGLF",
    "lat": 51.275833,
    "lng": -0.776333
  },
  {
    "name": "Chalgrove",
    "city": "Chalsgrove",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGLJ",
    "lat": 51.676111,
    "lng": -1.080833
  },
  {
    "name": "Blackbushe",
    "city": "Blackbushe",
    "country": "United Kingdom",
    "code1": "BBS",
    "code2": "EGLK",
    "lat": 51.323889,
    "lng": -0.8475
  },
  {
    "name": "Heathrow",
    "city": "London",
    "country": "United Kingdom",
    "code1": "LHR",
    "code2": "EGLL",
    "lat": 51.4775,
    "lng": -0.461389
  },
  {
    "name": "Southend",
    "city": "Southend",
    "country": "United Kingdom",
    "code1": "SEN",
    "code2": "EGMC",
    "lat": 51.571389,
    "lng": 0.695556
  },
  {
    "name": "Lydd",
    "city": "Lydd",
    "country": "United Kingdom",
    "code1": "LYX",
    "code2": "EGMD",
    "lat": 50.956111,
    "lng": 0.939167
  },
  {
    "name": "Manston",
    "city": "Manston",
    "country": "United Kingdom",
    "code1": "MSE",
    "code2": "EGMH",
    "lat": 51.342222,
    "lng": 1.346111
  },
  {
    "name": "Brough",
    "city": "Brough",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGNB",
    "lat": 53.719667,
    "lng": -0.566333
  },
  {
    "name": "Carlisle",
    "city": "Carlisle",
    "country": "United Kingdom",
    "code1": "CAX",
    "code2": "EGNC",
    "lat": 54.9375,
    "lng": -2.809167
  },
  {
    "name": "Gamston",
    "city": "Repton",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGNE",
    "lat": 53.280556,
    "lng": -0.951389
  },
  {
    "name": "Blackpool",
    "city": "Blackpool",
    "country": "United Kingdom",
    "code1": "BLK",
    "code2": "EGNH",
    "lat": 53.771667,
    "lng": -3.028611
  },
  {
    "name": "Humberside",
    "city": "Humberside",
    "country": "United Kingdom",
    "code1": "HUY",
    "code2": "EGNJ",
    "lat": 53.574444,
    "lng": -0.350833
  },
  {
    "name": "Walney Island",
    "city": "Barrow Island",
    "country": "United Kingdom",
    "code1": "BWF",
    "code2": "EGNL",
    "lat": 54.131167,
    "lng": -3.263667
  },
  {
    "name": "Leeds Bradford",
    "city": "Leeds",
    "country": "United Kingdom",
    "code1": "LBA",
    "code2": "EGNM",
    "lat": 53.865897,
    "lng": -1.660569
  },
  {
    "name": "Warton",
    "city": "Warton",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGNO",
    "lat": 53.745097,
    "lng": -2.883061
  },
  {
    "name": "Hawarden",
    "city": "Hawarden",
    "country": "United Kingdom",
    "code1": "CEG",
    "code2": "EGNR",
    "lat": 53.178056,
    "lng": -2.977778
  },
  {
    "name": "Isle Of Man",
    "city": "Isle Of Man",
    "country": "Isle of Man",
    "code1": "IOM",
    "code2": "EGNS",
    "lat": 54.083333,
    "lng": -4.623889
  },
  {
    "name": "Newcastle",
    "city": "Newcastle",
    "country": "United Kingdom",
    "code1": "NCL",
    "code2": "EGNT",
    "lat": 55.0375,
    "lng": -1.691667
  },
  {
    "name": "Durham Tees Valley Airport",
    "city": "Teesside",
    "country": "United Kingdom",
    "code1": "MME",
    "code2": "EGNV",
    "lat": 54.509189,
    "lng": -1.429406
  },
  {
    "name": "Nottingham East Midlands",
    "city": "East Midlands",
    "country": "United Kingdom",
    "code1": "EMA",
    "code2": "EGNX",
    "lat": 52.831111,
    "lng": -1.328056
  },
  {
    "name": "Llanbedr",
    "city": "Llanbedr",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGOD",
    "lat": 52.811744,
    "lng": -4.123575
  },
  {
    "name": "Ternhill",
    "city": "Ternhill",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGOE",
    "lat": 52.871164,
    "lng": -2.533561
  },
  {
    "name": "Shawbury",
    "city": "Shawbury",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGOS",
    "lat": 52.798169,
    "lng": -2.668042
  },
  {
    "name": "Woodvale",
    "city": "Woodvale",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGOW",
    "lat": 53.581575,
    "lng": -3.055522
  },
  {
    "name": "Kirkwall",
    "city": "Kirkwall",
    "country": "United Kingdom",
    "code1": "KOI",
    "code2": "EGPA",
    "lat": 58.957778,
    "lng": -2.905
  },
  {
    "name": "Sumburgh",
    "city": "Sumburgh",
    "country": "United Kingdom",
    "code1": "LSI",
    "code2": "EGPB",
    "lat": 59.878889,
    "lng": -1.295556
  },
  {
    "name": "Wick",
    "city": "Wick",
    "country": "United Kingdom",
    "code1": "WIC",
    "code2": "EGPC",
    "lat": 58.458889,
    "lng": -3.093056
  },
  {
    "name": "Dyce",
    "city": "Aberdeen",
    "country": "United Kingdom",
    "code1": "ABZ",
    "code2": "EGPD",
    "lat": 57.201944,
    "lng": -2.197778
  },
  {
    "name": "Inverness",
    "city": "Inverness",
    "country": "United Kingdom",
    "code1": "INV",
    "code2": "EGPE",
    "lat": 57.5425,
    "lng": -4.0475
  },
  {
    "name": "Glasgow",
    "city": "Glasgow",
    "country": "United Kingdom",
    "code1": "GLA",
    "code2": "EGPF",
    "lat": 55.871944,
    "lng": -4.433056
  },
  {
    "name": "Edinburgh",
    "city": "Edinburgh",
    "country": "United Kingdom",
    "code1": "EDI",
    "code2": "EGPH",
    "lat": 55.95,
    "lng": -3.3725
  },
  {
    "name": "Islay",
    "city": "Islay",
    "country": "United Kingdom",
    "code1": "ILY",
    "code2": "EGPI",
    "lat": 55.681944,
    "lng": -6.256667
  },
  {
    "name": "Prestwick",
    "city": "Prestwick",
    "country": "United Kingdom",
    "code1": "PIK",
    "code2": "EGPK",
    "lat": 55.509444,
    "lng": -4.586667
  },
  {
    "name": "Benbecula",
    "city": "Benbecula",
    "country": "United Kingdom",
    "code1": "BEB",
    "code2": "EGPL",
    "lat": 57.481111,
    "lng": -7.362778
  },
  {
    "name": "Scatsta",
    "city": "Scatsta",
    "country": "United Kingdom",
    "code1": "SDZ",
    "code2": "EGPM",
    "lat": 60.432778,
    "lng": -1.296111
  },
  {
    "name": "Dundee",
    "city": "Dundee",
    "country": "United Kingdom",
    "code1": "DND",
    "code2": "EGPN",
    "lat": 56.452499,
    "lng": -3.025833
  },
  {
    "name": "Stornoway",
    "city": "Stornoway",
    "country": "United Kingdom",
    "code1": "SYY",
    "code2": "EGPO",
    "lat": 58.215556,
    "lng": -6.331111
  },
  {
    "name": "Tiree",
    "city": "Tiree",
    "country": "United Kingdom",
    "code1": "TRE",
    "code2": "EGPU",
    "lat": 56.499167,
    "lng": -6.869167
  },
  {
    "name": "Leuchars",
    "city": "Leuchars",
    "country": "United Kingdom",
    "code1": "ADX",
    "code2": "EGQL",
    "lat": 56.372889,
    "lng": -2.868444
  },
  {
    "name": "Lossiemouth",
    "city": "Lossiemouth",
    "country": "United Kingdom",
    "code1": "LMO",
    "code2": "EGQS",
    "lat": 57.705214,
    "lng": -3.339169
  },
  {
    "name": "Cambridge",
    "city": "Cambridge",
    "country": "United Kingdom",
    "code1": "CBG",
    "code2": "EGSC",
    "lat": 52.205,
    "lng": 0.175
  },
  {
    "name": "Conington",
    "city": "Peterborough",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGSF",
    "lat": 52.468056,
    "lng": -0.251111
  },
  {
    "name": "Norwich",
    "city": "Norwich",
    "country": "United Kingdom",
    "code1": "NWI",
    "code2": "EGSH",
    "lat": 52.675833,
    "lng": 1.282778
  },
  {
    "name": "Stansted",
    "city": "London",
    "country": "United Kingdom",
    "code1": "STN",
    "code2": "EGSS",
    "lat": 51.885,
    "lng": 0.235
  },
  {
    "name": "North Weald",
    "city": "North Weald",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGSX",
    "lat": 51.721667,
    "lng": 0.154167
  },
  {
    "name": "Sheffield City",
    "city": "Fowlmere",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGSY",
    "lat": 53.394256,
    "lng": -1.388486
  },
  {
    "name": "Cranfield",
    "city": "Cranfield",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGTC",
    "lat": 52.072222,
    "lng": -0.616667
  },
  {
    "name": "Exeter",
    "city": "Exeter",
    "country": "United Kingdom",
    "code1": "EXT",
    "code2": "EGTE",
    "lat": 50.734444,
    "lng": -3.413889
  },
  {
    "name": "Bristol Filton",
    "city": "Bristol",
    "country": "United Kingdom",
    "code1": "FZO",
    "code2": "EGTG",
    "lat": 51.519444,
    "lng": -2.590833
  },
  {
    "name": "Kidlington",
    "city": "Oxford",
    "country": "United Kingdom",
    "code1": "OXF",
    "code2": "EGTK",
    "lat": 51.836944,
    "lng": -1.32
  },
  {
    "name": "Benson",
    "city": "Benson",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGUB",
    "lat": 51.616389,
    "lng": -1.095833
  },
  {
    "name": "Lakenheath",
    "city": "Lakenheath",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGUL",
    "lat": 52.409333,
    "lng": 0.561
  },
  {
    "name": "Mildenhall",
    "city": "Mildenhall",
    "country": "United Kingdom",
    "code1": "MHZ",
    "code2": "EGUN",
    "lat": 52.361933,
    "lng": 0.486406
  },
  {
    "name": "Wattisham",
    "city": "Wattisham",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGUW",
    "lat": 52.127283,
    "lng": 0.956264
  },
  {
    "name": "Wyton",
    "city": "Wyton",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGUY",
    "lat": 52.357167,
    "lng": -0.107833
  },
  {
    "name": "Fairford",
    "city": "Fairford",
    "country": "United Kingdom",
    "code1": "FFD",
    "code2": "EGVA",
    "lat": 51.682167,
    "lng": -1.790028
  },
  {
    "name": "Brize Norton",
    "city": "Brize Norton",
    "country": "United Kingdom",
    "code1": "BZZ",
    "code2": "EGVN",
    "lat": 51.749964,
    "lng": -1.583617
  },
  {
    "name": "Odiham",
    "city": "Odiham",
    "country": "United Kingdom",
    "code1": "ODH",
    "code2": "EGVO",
    "lat": 51.234139,
    "lng": -0.942825
  },
  {
    "name": "Cosford",
    "city": "Cosford",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGWC",
    "lat": 52.640028,
    "lng": -2.305578
  },
  {
    "name": "Northolt",
    "city": "Northolt",
    "country": "United Kingdom",
    "code1": "NHT",
    "code2": "EGWU",
    "lat": 51.553,
    "lng": -0.418167
  },
  {
    "name": "Coningsby",
    "city": "Coningsby",
    "country": "United Kingdom",
    "code1": "QCY",
    "code2": "EGXC",
    "lat": 53.093014,
    "lng": -0.166014
  },
  {
    "name": "Dishforth",
    "city": "Dishforth",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGXD",
    "lat": 54.137186,
    "lng": -1.420253
  },
  {
    "name": "Leeming",
    "city": "Leeming",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGXE",
    "lat": 54.292383,
    "lng": -1.5354
  },
  {
    "name": "Church Fenton",
    "city": "Church Fenton",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGXG",
    "lat": 53.834333,
    "lng": -1.1955
  },
  {
    "name": "Honington",
    "city": "Honington",
    "country": "United Kingdom",
    "code1": "BEQ",
    "code2": "EGXH",
    "lat": 52.342611,
    "lng": 0.772939
  },
  {
    "name": "Cottesmore",
    "city": "Cottesmore",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGXJ",
    "lat": 52.735711,
    "lng": -0.648769
  },
  {
    "name": "Scampton",
    "city": "Scampton",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGXP",
    "lat": 53.307778,
    "lng": -0.550833
  },
  {
    "name": "Wittering",
    "city": "Wittering",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGXT",
    "lat": 52.612558,
    "lng": -0.476453
  },
  {
    "name": "Linton On Ouse",
    "city": "Linton-on-ouse",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGXU",
    "lat": 54.048911,
    "lng": -1.252747
  },
  {
    "name": "Waddington",
    "city": "Waddington",
    "country": "United Kingdom",
    "code1": "WTN",
    "code2": "EGXW",
    "lat": 53.166167,
    "lng": -0.523811
  },
  {
    "name": "Topcliffe",
    "city": "Topcliffe",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGXZ",
    "lat": 54.205522,
    "lng": -1.382094
  },
  {
    "name": "Cranwell",
    "city": "Cranwell",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGYD",
    "lat": 53.03035,
    "lng": -0.483242
  },
  {
    "name": "Barkston Heath",
    "city": "Barkston Heath",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGYE",
    "lat": 52.962225,
    "lng": -0.561625
  },
  {
    "name": "Marham",
    "city": "Marham",
    "country": "United Kingdom",
    "code1": "KNF",
    "code2": "EGYM",
    "lat": 52.648353,
    "lng": 0.550692
  },
  {
    "name": "Mount Pleasant",
    "city": "Mount Pleasant",
    "country": "Falkland Islands",
    "code1": "MPN",
    "code2": "EGYP",
    "lat": -51.822777,
    "lng": -58.447222
  },
  {
    "name": "Schiphol",
    "city": "Amsterdam",
    "country": "Netherlands",
    "code1": "AMS",
    "code2": "EHAM",
    "lat": 52.308613,
    "lng": 4.763889
  },
  {
    "name": "Budel",
    "city": "Weert",
    "country": "Netherlands",
    "code1": "",
    "code2": "EHBD",
    "lat": 51.25528,
    "lng": 5.601389
  },
  {
    "name": "Maastricht",
    "city": "Maastricht",
    "country": "Netherlands",
    "code1": "MST",
    "code2": "EHBK",
    "lat": 50.911658,
    "lng": 5.770144
  },
  {
    "name": "Deelen",
    "city": "Deelen",
    "country": "Netherlands",
    "code1": "",
    "code2": "EHDL",
    "lat": 52.060556,
    "lng": 5.873056
  },
  {
    "name": "Drachten",
    "city": "Drachten",
    "country": "Netherlands",
    "code1": "",
    "code2": "EHDR",
    "lat": 53.119167,
    "lng": 6.129722
  },
  {
    "name": "Eindhoven",
    "city": "Eindhoven",
    "country": "Netherlands",
    "code1": "EIN",
    "code2": "EHEH",
    "lat": 51.450139,
    "lng": 5.374528
  },
  {
    "name": "Eelde",
    "city": "Groningen",
    "country": "Netherlands",
    "code1": "GRQ",
    "code2": "EHGG",
    "lat": 53.11972,
    "lng": 6.579444
  },
  {
    "name": "Gilze Rijen",
    "city": "Gilze-rijen",
    "country": "Netherlands",
    "code1": "",
    "code2": "EHGR",
    "lat": 51.567389,
    "lng": 4.931833
  },
  {
    "name": "De Kooy",
    "city": "De Kooy",
    "country": "Netherlands",
    "code1": "DHR",
    "code2": "EHKD",
    "lat": 52.923353,
    "lng": 4.780625
  },
  {
    "name": "Lelystad",
    "city": "Lelystad",
    "country": "Netherlands",
    "code1": "",
    "code2": "EHLE",
    "lat": 52.460278,
    "lng": 5.527222
  },
  {
    "name": "Leeuwarden",
    "city": "Leeuwarden",
    "country": "Netherlands",
    "code1": "LWR",
    "code2": "EHLW",
    "lat": 53.228611,
    "lng": 5.760556
  },
  {
    "name": "Rotterdam",
    "city": "Rotterdam",
    "country": "Netherlands",
    "code1": "RTM",
    "code2": "EHRD",
    "lat": 51.956944,
    "lng": 4.437222
  },
  {
    "name": "Soesterberg",
    "city": "Soesterberg",
    "country": "Netherlands",
    "code1": "UTC",
    "code2": "EHSB",
    "lat": 52.1273,
    "lng": 5.27619
  },
  {
    "name": "Twenthe",
    "city": "Enschede",
    "country": "Netherlands",
    "code1": "ENS",
    "code2": "EHTW",
    "lat": 52.27,
    "lng": 6.874167
  },
  {
    "name": "Valkenburg",
    "city": "Valkenburg",
    "country": "Netherlands",
    "code1": "LID",
    "code2": "EHVB",
    "lat": 52.166139,
    "lng": 4.417944
  },
  {
    "name": "Woensdrecht",
    "city": "Woensdrecht",
    "country": "Netherlands",
    "code1": "WOE",
    "code2": "EHWO",
    "lat": 51.449092,
    "lng": 4.342031
  },
  {
    "name": "Cork",
    "city": "Cork",
    "country": "Ireland",
    "code1": "ORK",
    "code2": "EICK",
    "lat": 51.841269,
    "lng": -8.491111
  },
  {
    "name": "Galway",
    "city": "Galway",
    "country": "Ireland",
    "code1": "GWY",
    "code2": "EICM",
    "lat": 53.300175,
    "lng": -8.941592
  },
  {
    "name": "Dublin",
    "city": "Dublin",
    "country": "Ireland",
    "code1": "DUB",
    "code2": "EIDW",
    "lat": 53.421333,
    "lng": -6.270075
  },
  {
    "name": "Ireland West Knock",
    "city": "Connaught",
    "country": "Ireland",
    "code1": "NOC",
    "code2": "EIKN",
    "lat": 53.910297,
    "lng": -8.818492
  },
  {
    "name": "Kerry",
    "city": "Kerry",
    "country": "Ireland",
    "code1": "KIR",
    "code2": "EIKY",
    "lat": 52.180878,
    "lng": -9.523783
  },
  {
    "name": "Casement",
    "city": "Casement",
    "country": "Ireland",
    "code1": "",
    "code2": "EIME",
    "lat": 53.301667,
    "lng": -6.451333
  },
  {
    "name": "Shannon",
    "city": "Shannon",
    "country": "Ireland",
    "code1": "SNN",
    "code2": "EINN",
    "lat": 52.701978,
    "lng": -8.924817
  },
  {
    "name": "Sligo",
    "city": "Sligo",
    "country": "Ireland",
    "code1": "SXL",
    "code2": "EISG",
    "lat": 54.280214,
    "lng": -8.599206
  },
  {
    "name": "Waterford",
    "city": "Waterford",
    "country": "Ireland",
    "code1": "WAT",
    "code2": "EIWF",
    "lat": 52.1872,
    "lng": -7.086964
  },
  {
    "name": "Aarhus",
    "city": "Aarhus",
    "country": "Denmark",
    "code1": "AAR",
    "code2": "EKAH",
    "lat": 56.300017,
    "lng": 10.619008
  },
  {
    "name": "Billund",
    "city": "Billund",
    "country": "Denmark",
    "code1": "BLL",
    "code2": "EKBI",
    "lat": 55.740322,
    "lng": 9.151778
  },
  {
    "name": "Kastrup",
    "city": "Copenhagen",
    "country": "Denmark",
    "code1": "CPH",
    "code2": "EKCH",
    "lat": 55.617917,
    "lng": 12.655972
  },
  {
    "name": "Esbjerg",
    "city": "Esbjerg",
    "country": "Denmark",
    "code1": "EBJ",
    "code2": "EKEB",
    "lat": 55.525942,
    "lng": 8.553403
  },
  {
    "name": "Gronholt Hillerod",
    "city": "Gronholt",
    "country": "Denmark",
    "code1": "",
    "code2": "EKGH",
    "lat": 55.941387,
    "lng": 12.382222
  },
  {
    "name": "Karup",
    "city": "Karup",
    "country": "Denmark",
    "code1": "KRP",
    "code2": "EKKA",
    "lat": 56.297458,
    "lng": 9.124628
  },
  {
    "name": "Laeso",
    "city": "Laeso",
    "country": "Denmark",
    "code1": "",
    "code2": "EKLS",
    "lat": 57.277228,
    "lng": 11.000083
  },
  {
    "name": "Lolland Falster Maribo",
    "city": "Maribo",
    "country": "Denmark",
    "code1": "",
    "code2": "EKMB",
    "lat": 54.699344,
    "lng": 11.440117
  },
  {
    "name": "Odense",
    "city": "Odense",
    "country": "Denmark",
    "code1": "ODE",
    "code2": "EKOD",
    "lat": 55.476664,
    "lng": 10.330933
  },
  {
    "name": "Krusa Padborg",
    "city": "Krusa-padborg",
    "country": "Denmark",
    "code1": "",
    "code2": "EKPB",
    "lat": 54.870306,
    "lng": 9.279014
  },
  {
    "name": "Roskilde",
    "city": "Copenhagen",
    "country": "Denmark",
    "code1": "RKE",
    "code2": "EKRK",
    "lat": 55.585567,
    "lng": 12.131428
  },
  {
    "name": "Bornholm Ronne",
    "city": "Ronne",
    "country": "Denmark",
    "code1": "RNN",
    "code2": "EKRN",
    "lat": 55.063267,
    "lng": 14.759558
  },
  {
    "name": "Sonderborg",
    "city": "Soenderborg",
    "country": "Denmark",
    "code1": "SGD",
    "code2": "EKSB",
    "lat": 54.964367,
    "lng": 9.791731
  },
  {
    "name": "Skrydstrup",
    "city": "Skrydstrup",
    "country": "Denmark",
    "code1": "SKS",
    "code2": "EKSP",
    "lat": 55.225553,
    "lng": 9.263931
  },
  {
    "name": "Skive",
    "city": "Skive",
    "country": "Denmark",
    "code1": "",
    "code2": "EKSV",
    "lat": 56.550208,
    "lng": 9.172983
  },
  {
    "name": "Thisted",
    "city": "Thisted",
    "country": "Denmark",
    "code1": "TED",
    "code2": "EKTS",
    "lat": 57.0688,
    "lng": 8.705225
  },
  {
    "name": "Kolding Vamdrup",
    "city": "Kolding",
    "country": "Denmark",
    "code1": "",
    "code2": "EKVD",
    "lat": 55.436283,
    "lng": 9.330925
  },
  {
    "name": "Vagar",
    "city": "Vagar",
    "country": "Faroe Islands",
    "code1": "FAE",
    "code2": "EKVG",
    "lat": 62.063628,
    "lng": -7.277219
  },
  {
    "name": "Aars",
    "city": "Vesthimmerland",
    "country": "Denmark",
    "code1": "",
    "code2": "EKVH",
    "lat": 56.846944,
    "lng": 9.458611
  },
  {
    "name": "Stauning",
    "city": "Stauning",
    "country": "Denmark",
    "code1": "STA",
    "code2": "EKVJ",
    "lat": 55.990122,
    "lng": 8.353906
  },
  {
    "name": "Aalborg",
    "city": "Aalborg",
    "country": "Denmark",
    "code1": "AAL",
    "code2": "EKYT",
    "lat": 57.092789,
    "lng": 9.849164
  },
  {
    "name": "Luxembourg",
    "city": "Luxemburg",
    "country": "Luxembourg",
    "code1": "LUX",
    "code2": "ELLX",
    "lat": 49.626575,
    "lng": 6.211517
  },
  {
    "name": "Vigra",
    "city": "Alesund",
    "country": "Norway",
    "code1": "AES",
    "code2": "ENAL",
    "lat": 62.560372,
    "lng": 6.110164
  },
  {
    "name": "Andenes",
    "city": "Andoya",
    "country": "Norway",
    "code1": "ANX",
    "code2": "ENAN",
    "lat": 69.2925,
    "lng": 16.144167
  },
  {
    "name": "Alta",
    "city": "Alta",
    "country": "Norway",
    "code1": "ALF",
    "code2": "ENAT",
    "lat": 69.976111,
    "lng": 23.371667
  },
  {
    "name": "Bomoen",
    "city": "Voss",
    "country": "Norway",
    "code1": "",
    "code2": "ENBM",
    "lat": 60.63885,
    "lng": 6.501497
  },
  {
    "name": "Bronnoy",
    "city": "Bronnoysund",
    "country": "Norway",
    "code1": "BNN",
    "code2": "ENBN",
    "lat": 65.461111,
    "lng": 12.2175
  },
  {
    "name": "Bodo",
    "city": "Bodo",
    "country": "Norway",
    "code1": "BOO",
    "code2": "ENBO",
    "lat": 67.269167,
    "lng": 14.365278
  },
  {
    "name": "Flesland",
    "city": "Bergen",
    "country": "Norway",
    "code1": "BGO",
    "code2": "ENBR",
    "lat": 60.293386,
    "lng": 5.218142
  },
  {
    "name": "Batsfjord",
    "city": "Batsfjord",
    "country": "Norway",
    "code1": "BJF",
    "code2": "ENBS",
    "lat": 70.600278,
    "lng": 29.6925
  },
  {
    "name": "Kjevik",
    "city": "Kristiansand",
    "country": "Norway",
    "code1": "KRS",
    "code2": "ENCN",
    "lat": 58.204214,
    "lng": 8.085369
  },
  {
    "name": "Dagali",
    "city": "Geilo",
    "country": "Norway",
    "code1": "",
    "code2": "ENDI",
    "lat": 60.416667,
    "lng": 8.512778
  },
  {
    "name": "Bardufoss",
    "city": "Bardufoss",
    "country": "Norway",
    "code1": "BDU",
    "code2": "ENDU",
    "lat": 69.055758,
    "lng": 18.540356
  },
  {
    "name": "Evenes",
    "city": "Harstad/Narvik",
    "country": "Norway",
    "code1": "EVE",
    "code2": "ENEV",
    "lat": 68.4913,
    "lng": 16.678108
  },
  {
    "name": "Leirin",
    "city": "Fagernes",
    "country": "Norway",
    "code1": "VDB",
    "code2": "ENFG",
    "lat": 61.015556,
    "lng": 9.288056
  },
  {
    "name": "Floro",
    "city": "Floro",
    "country": "Norway",
    "code1": "FRO",
    "code2": "ENFL",
    "lat": 61.583611,
    "lng": 5.024722
  },
  {
    "name": "Gardermoen",
    "city": "Oslo",
    "country": "Norway",
    "code1": "OSL",
    "code2": "ENGM",
    "lat": 60.193917,
    "lng": 11.100361
  },
  {
    "name": "Karmoy",
    "city": "Haugesund",
    "country": "Norway",
    "code1": "HAU",
    "code2": "ENHD",
    "lat": 59.345267,
    "lng": 5.208364
  },
  {
    "name": "Hasvik",
    "city": "Hasvik",
    "country": "Norway",
    "code1": "HAA",
    "code2": "ENHK",
    "lat": 70.486675,
    "lng": 22.139744
  },
  {
    "name": "Kvernberget",
    "city": "Kristiansund",
    "country": "Norway",
    "code1": "KSU",
    "code2": "ENKB",
    "lat": 63.111781,
    "lng": 7.824522
  },
  {
    "name": "Kjeller",
    "city": "Kjeller",
    "country": "Norway",
    "code1": "",
    "code2": "ENKJ",
    "lat": 59.969336,
    "lng": 11.036089
  },
  {
    "name": "Hoybuktmoen",
    "city": "Kirkenes",
    "country": "Norway",
    "code1": "KKN",
    "code2": "ENKR",
    "lat": 69.725781,
    "lng": 29.891295
  },
  {
    "name": "Lista",
    "city": "Farsund",
    "country": "Norway",
    "code1": "FAN",
    "code2": "ENLI",
    "lat": 58.099486,
    "lng": 6.62605
  },
  {
    "name": "Aro",
    "city": "Molde",
    "country": "Norway",
    "code1": "MOL",
    "code2": "ENML",
    "lat": 62.744722,
    "lng": 7.2625
  },
  {
    "name": "Kjaerstad",
    "city": "Mosjoen",
    "country": "Norway",
    "code1": "MJF",
    "code2": "ENMS",
    "lat": 65.783997,
    "lng": 13.214914
  },
  {
    "name": "Banak",
    "city": "Lakselv",
    "country": "Norway",
    "code1": "LKL",
    "code2": "ENNA",
    "lat": 70.068814,
    "lng": 24.973489
  },
  {
    "name": "Notodden",
    "city": "Notodden",
    "country": "Norway",
    "code1": "NTB",
    "code2": "ENNO",
    "lat": 59.565683,
    "lng": 9.212222
  },
  {
    "name": "Orland",
    "city": "Orland",
    "country": "Norway",
    "code1": "OLA",
    "code2": "ENOL",
    "lat": 63.698908,
    "lng": 9.604003
  },
  {
    "name": "Roros",
    "city": "Roros",
    "country": "Norway",
    "code1": "RRS",
    "code2": "ENRO",
    "lat": 62.578411,
    "lng": 11.342347
  },
  {
    "name": "Moss",
    "city": "Rygge",
    "country": "Norway",
    "code1": "RYG",
    "code2": "ENRY",
    "lat": 59.378933,
    "lng": 10.785389
  },
  {
    "name": "Longyear",
    "city": "Svalbard",
    "country": "Norway",
    "code1": "LYR",
    "code2": "ENSB",
    "lat": 78.246111,
    "lng": 15.465556
  },
  {
    "name": "Geiteryggen",
    "city": "Skien",
    "country": "Norway",
    "code1": "SKE",
    "code2": "ENSN",
    "lat": 59.185,
    "lng": 9.566944
  },
  {
    "name": "Sorstokken",
    "city": "Stord",
    "country": "Norway",
    "code1": "SRP",
    "code2": "ENSO",
    "lat": 59.791925,
    "lng": 5.34085
  },
  {
    "name": "Stokka",
    "city": "Sandnessjoen",
    "country": "Norway",
    "code1": "SSJ",
    "code2": "ENST",
    "lat": 65.956828,
    "lng": 12.468944
  },
  {
    "name": "Langnes",
    "city": "Tromso",
    "country": "Norway",
    "code1": "TOS",
    "code2": "ENTC",
    "lat": 69.683333,
    "lng": 18.918919
  },
  {
    "name": "Torp",
    "city": "Sandefjord",
    "country": "Norway",
    "code1": "TRF",
    "code2": "ENTO",
    "lat": 59.186703,
    "lng": 10.258628
  },
  {
    "name": "Vaernes",
    "city": "Trondheim",
    "country": "Norway",
    "code1": "TRD",
    "code2": "ENVA",
    "lat": 63.457556,
    "lng": 10.92425
  },
  {
    "name": "Sola",
    "city": "Stavanger",
    "country": "Norway",
    "code1": "SVG",
    "code2": "ENZV",
    "lat": 58.876778,
    "lng": 5.637856
  },
  {
    "name": "Babice",
    "city": "Warsaw",
    "country": "Poland",
    "code1": "",
    "code2": "EPBC",
    "lat": 52.268494,
    "lng": 20.911047
  },
  {
    "name": "Lech Walesa",
    "city": "Gdansk",
    "country": "Poland",
    "code1": "GDN",
    "code2": "EPGD",
    "lat": 54.377569,
    "lng": 18.466222
  },
  {
    "name": "Balice",
    "city": "Krakow",
    "country": "Poland",
    "code1": "KRK",
    "code2": "EPKK",
    "lat": 50.077731,
    "lng": 19.784836
  },
  {
    "name": "Muchowiec",
    "city": "Katowice",
    "country": "Poland",
    "code1": "",
    "code2": "EPKM",
    "lat": 50.238147,
    "lng": 19.034181
  },
  {
    "name": "Pyrzowice",
    "city": "Katowice",
    "country": "Poland",
    "code1": "KTW",
    "code2": "EPKT",
    "lat": 50.474253,
    "lng": 19.080019
  },
  {
    "name": "Mielec",
    "city": "Mielec",
    "country": "Poland",
    "code1": "",
    "code2": "EPML",
    "lat": 50.322275,
    "lng": 21.462131
  },
  {
    "name": "Lawica",
    "city": "Poznan",
    "country": "Poland",
    "code1": "POZ",
    "code2": "EPPO",
    "lat": 52.421031,
    "lng": 16.826325
  },
  {
    "name": "Jasionka",
    "city": "Rzeszow",
    "country": "Poland",
    "code1": "RZE",
    "code2": "EPRZ",
    "lat": 50.109958,
    "lng": 22.019
  },
  {
    "name": "Goleniow",
    "city": "Szczecin",
    "country": "Poland",
    "code1": "SZZ",
    "code2": "EPSC",
    "lat": 53.584731,
    "lng": 14.902206
  },
  {
    "name": "Redzikowo",
    "city": "Slupsk",
    "country": "Poland",
    "code1": "OSP",
    "code2": "EPSK",
    "lat": 54.478889,
    "lng": 17.1075
  },
  {
    "name": "Swidwin",
    "city": "Shapaja",
    "country": "Poland",
    "code1": "",
    "code2": "EPSN",
    "lat": 53.790639,
    "lng": 15.82625
  },
  {
    "name": "Okecie",
    "city": "Warsaw",
    "country": "Poland",
    "code1": "WAW",
    "code2": "EPWA",
    "lat": 52.16575,
    "lng": 20.967122
  },
  {
    "name": "Strachowice",
    "city": "Wroclaw",
    "country": "Poland",
    "code1": "WRO",
    "code2": "EPWR",
    "lat": 51.102683,
    "lng": 16.885836
  },
  {
    "name": "Babimost",
    "city": "Zielona Gora",
    "country": "Poland",
    "code1": "IEG",
    "code2": "EPZG",
    "lat": 52.138517,
    "lng": 15.798556
  },
  {
    "name": "Malmen",
    "city": "Linkoeping",
    "country": "Sweden",
    "code1": "",
    "code2": "ESCF",
    "lat": 58.402278,
    "lng": 15.525683
  },
  {
    "name": "Bravalla",
    "city": "Norrkoeping",
    "country": "Sweden",
    "code1": "",
    "code2": "ESCK",
    "lat": 58.610867,
    "lng": 16.103592
  },
  {
    "name": "Uppsala",
    "city": "Uppsala",
    "country": "Sweden",
    "code1": "",
    "code2": "ESCM",
    "lat": 59.897328,
    "lng": 17.588581
  },
  {
    "name": "Ronneby",
    "city": "Ronneby",
    "country": "Sweden",
    "code1": "RNB",
    "code2": "ESDF",
    "lat": 56.266667,
    "lng": 15.265
  },
  {
    "name": "Rada",
    "city": "Rada",
    "country": "Sweden",
    "code1": "",
    "code2": "ESFR",
    "lat": 58.498136,
    "lng": 13.053231
  },
  {
    "name": "Landvetter",
    "city": "Gothenborg",
    "country": "Sweden",
    "code1": "GOT",
    "code2": "ESGG",
    "lat": 57.662836,
    "lng": 12.279819
  },
  {
    "name": "Jonkoping",
    "city": "Joenkoeping",
    "country": "Sweden",
    "code1": "JKG",
    "code2": "ESGJ",
    "lat": 57.757594,
    "lng": 14.068731
  },
  {
    "name": "Falkoping",
    "city": "Falkoping",
    "country": "Sweden",
    "code1": "",
    "code2": "ESGK",
    "lat": 58.169794,
    "lng": 13.587847
  },
  {
    "name": "Lidkoping",
    "city": "Lidkoping",
    "country": "Sweden",
    "code1": "LDK",
    "code2": "ESGL",
    "lat": 58.465522,
    "lng": 13.174414
  },
  {
    "name": "Save",
    "city": "Gothenborg",
    "country": "Sweden",
    "code1": "GSE",
    "code2": "ESGP",
    "lat": 57.774722,
    "lng": 11.870372
  },
  {
    "name": "Skovde",
    "city": "Skovde",
    "country": "Sweden",
    "code1": "KVB",
    "code2": "ESGR",
    "lat": 58.4564,
    "lng": 13.972672
  },
  {
    "name": "Trollhattan Vanersborg",
    "city": "Trollhattan",
    "country": "Sweden",
    "code1": "THN",
    "code2": "ESGT",
    "lat": 58.318056,
    "lng": 12.345
  },
  {
    "name": "Karlsborg",
    "city": "Karlsborg",
    "country": "Sweden",
    "code1": "",
    "code2": "ESIA",
    "lat": 58.513842,
    "lng": 14.507119
  },
  {
    "name": "Satenas",
    "city": "Satenas",
    "country": "Sweden",
    "code1": "",
    "code2": "ESIB",
    "lat": 58.426445,
    "lng": 12.714389
  },
  {
    "name": "Barkarby",
    "city": "Stockholm",
    "country": "Sweden",
    "code1": "",
    "code2": "ESKB",
    "lat": 59.418694,
    "lng": 17.890694
  },
  {
    "name": "Karlskoga",
    "city": "Karlskoga",
    "country": "Sweden",
    "code1": "KSK",
    "code2": "ESKK",
    "lat": 59.345867,
    "lng": 14.495922
  },
  {
    "name": "Mora",
    "city": "Mora",
    "country": "Sweden",
    "code1": "MXX",
    "code2": "ESKM",
    "lat": 60.957908,
    "lng": 14.511383
  },
  {
    "name": "Skavsta",
    "city": "Stockholm",
    "country": "Sweden",
    "code1": "NYO",
    "code2": "ESKN",
    "lat": 58.788636,
    "lng": 16.912189
  },
  {
    "name": "Arvika",
    "city": "Arvika",
    "country": "Sweden",
    "code1": "",
    "code2": "ESKV",
    "lat": 59.675856,
    "lng": 12.639442
  },
  {
    "name": "Emmaboda",
    "city": "Emmaboda",
    "country": "Sweden",
    "code1": "",
    "code2": "ESMA",
    "lat": 56.610761,
    "lng": 15.604761
  },
  {
    "name": "Feringe",
    "city": "Ljungby",
    "country": "Sweden",
    "code1": "",
    "code2": "ESMG",
    "lat": 56.950278,
    "lng": 13.921667
  },
  {
    "name": "Kristianstad",
    "city": "Kristianstad",
    "country": "Sweden",
    "code1": "KID",
    "code2": "ESMK",
    "lat": 55.921686,
    "lng": 14.085536
  },
  {
    "name": "Landskrona",
    "city": "Landskrona",
    "country": "Sweden",
    "code1": "JLD",
    "code2": "ESML",
    "lat": 55.944444,
    "lng": 12.869444
  },
  {
    "name": "Oskarshamn",
    "city": "Oskarshamn",
    "country": "Sweden",
    "code1": "OSK",
    "code2": "ESMO",
    "lat": 57.350453,
    "lng": 16.497972
  },
  {
    "name": "Anderstorp",
    "city": "Anderstorp",
    "country": "Sweden",
    "code1": "",
    "code2": "ESMP",
    "lat": 57.264167,
    "lng": 13.599439
  },
  {
    "name": "Kalmar",
    "city": "Kalkmar",
    "country": "Sweden",
    "code1": "KLR",
    "code2": "ESMQ",
    "lat": 56.685531,
    "lng": 16.287578
  },
  {
    "name": "Sturup",
    "city": "Malmoe",
    "country": "Sweden",
    "code1": "MMX",
    "code2": "ESMS",
    "lat": 55.530193,
    "lng": 13.371639
  },
  {
    "name": "Halmstad",
    "city": "Halmstad",
    "country": "Sweden",
    "code1": "HAD",
    "code2": "ESMT",
    "lat": 56.691128,
    "lng": 12.820211
  },
  {
    "name": "Hagshult",
    "city": "Hagshult",
    "country": "Sweden",
    "code1": "",
    "code2": "ESMV",
    "lat": 57.292222,
    "lng": 14.137222
  },
  {
    "name": "Kronoberg",
    "city": "Vaxjo",
    "country": "Sweden",
    "code1": "VXO",
    "code2": "ESMX",
    "lat": 56.929144,
    "lng": 14.727994
  },
  {
    "name": "Hallviken",
    "city": "Hallviken",
    "country": "Sweden",
    "code1": "",
    "code2": "ESNA",
    "lat": 63.738333,
    "lng": 15.458333
  },
  {
    "name": "Hedlanda",
    "city": "Hede",
    "country": "Sweden",
    "code1": "",
    "code2": "ESNC",
    "lat": 62.408889,
    "lng": 13.747222
  },
  {
    "name": "Sveg",
    "city": "Sveg",
    "country": "Sweden",
    "code1": "EVG",
    "code2": "ESND",
    "lat": 62.047811,
    "lng": 14.42295
  },
  {
    "name": "Gallivare",
    "city": "Gallivare",
    "country": "Sweden",
    "code1": "GEV",
    "code2": "ESNG",
    "lat": 67.132408,
    "lng": 20.814636
  },
  {
    "name": "Hudiksvall",
    "city": "Hudiksvall",
    "country": "Sweden",
    "code1": "HUV",
    "code2": "ESNH",
    "lat": 61.768092,
    "lng": 17.080719
  },
  {
    "name": "Jokkmokk",
    "city": "Jokkmokk",
    "country": "Sweden",
    "code1": "",
    "code2": "ESNJ",
    "lat": 66.496236,
    "lng": 20.147181
  },
  {
    "name": "Kramfors Solleftea",
    "city": "Kramfors",
    "country": "Sweden",
    "code1": "KRF",
    "code2": "ESNK",
    "lat": 63.048597,
    "lng": 17.768856
  },
  {
    "name": "Lycksele",
    "city": "Lycksele",
    "country": "Sweden",
    "code1": "LYC",
    "code2": "ESNL",
    "lat": 64.548322,
    "lng": 18.716219
  },
  {
    "name": "Optand",
    "city": "Optand",
    "country": "Sweden",
    "code1": "",
    "code2": "ESNM",
    "lat": 63.128611,
    "lng": 14.802778
  },
  {
    "name": "Sundsvall Harnosand",
    "city": "Sundsvall",
    "country": "Sweden",
    "code1": "SDL",
    "code2": "ESNN",
    "lat": 62.528125,
    "lng": 17.443928
  },
  {
    "name": "Ornskoldsvik",
    "city": "Ornskoldsvik",
    "country": "Sweden",
    "code1": "OER",
    "code2": "ESNO",
    "lat": 63.408339,
    "lng": 18.990039
  },
  {
    "name": "Pitea",
    "city": "Pitea",
    "country": "Sweden",
    "code1": "",
    "code2": "ESNP",
    "lat": 65.398333,
    "lng": 21.260833
  },
  {
    "name": "Kiruna",
    "city": "Kiruna",
    "country": "Sweden",
    "code1": "KRN",
    "code2": "ESNQ",
    "lat": 67.821986,
    "lng": 20.336764
  },
  {
    "name": "Orsa",
    "city": "Orsa",
    "country": "Sweden",
    "code1": "",
    "code2": "ESNR",
    "lat": 61.190033,
    "lng": 14.712567
  },
  {
    "name": "Skelleftea",
    "city": "Skelleftea",
    "country": "Sweden",
    "code1": "SFT",
    "code2": "ESNS",
    "lat": 64.624772,
    "lng": 21.076892
  },
  {
    "name": "Sattna",
    "city": "Sattna",
    "country": "Sweden",
    "code1": "",
    "code2": "ESNT",
    "lat": 62.481369,
    "lng": 17.002917
  },
  {
    "name": "Umea",
    "city": "Umea",
    "country": "Sweden",
    "code1": "UME",
    "code2": "ESNU",
    "lat": 63.791828,
    "lng": 20.282758
  },
  {
    "name": "Vilhelmina",
    "city": "Vilhelmina",
    "country": "Sweden",
    "code1": "VHM",
    "code2": "ESNV",
    "lat": 64.579083,
    "lng": 16.833575
  },
  {
    "name": "Arvidsjaur",
    "city": "Arvidsjaur",
    "country": "Sweden",
    "code1": "AJR",
    "code2": "ESNX",
    "lat": 65.590278,
    "lng": 19.281944
  },
  {
    "name": "Orebro",
    "city": "Orebro",
    "country": "Sweden",
    "code1": "ORB",
    "code2": "ESOE",
    "lat": 59.223733,
    "lng": 15.037956
  },
  {
    "name": "Vasteras",
    "city": "Vasteras",
    "country": "Sweden",
    "code1": "VST",
    "code2": "ESOW",
    "lat": 59.589444,
    "lng": 16.633611
  },
  {
    "name": "Kallax",
    "city": "Lulea",
    "country": "Sweden",
    "code1": "LLA",
    "code2": "ESPA",
    "lat": 65.543758,
    "lng": 22.121989
  },
  {
    "name": "Vidsel",
    "city": "Vidsel",
    "country": "Sweden",
    "code1": "",
    "code2": "ESPE",
    "lat": 65.875325,
    "lng": 20.149917
  },
  {
    "name": "Arboga",
    "city": "Arboga",
    "country": "Sweden",
    "code1": "",
    "code2": "ESQO",
    "lat": 59.386585,
    "lng": 15.924055
  },
  {
    "name": "Arlanda",
    "city": "Stockholm",
    "country": "Sweden",
    "code1": "ARN",
    "code2": "ESSA",
    "lat": 59.651944,
    "lng": 17.918611
  },
  {
    "name": "Bromma",
    "city": "Stockholm",
    "country": "Sweden",
    "code1": "BMA",
    "code2": "ESSB",
    "lat": 59.354372,
    "lng": 17.94165
  },
  {
    "name": "Borlange",
    "city": "Borlange",
    "country": "Sweden",
    "code1": "BLE",
    "code2": "ESSD",
    "lat": 60.422017,
    "lng": 15.515211
  },
  {
    "name": "Hultsfred",
    "city": "Hultsfred",
    "country": "Sweden",
    "code1": "HLF",
    "code2": "ESSF",
    "lat": 57.525833,
    "lng": 15.823333
  },
  {
    "name": "Gavle",
    "city": "Gavle",
    "country": "Sweden",
    "code1": "GVX",
    "code2": "ESSK",
    "lat": 60.593333,
    "lng": 16.951389
  },
  {
    "name": "Saab",
    "city": "Linkoeping",
    "country": "Sweden",
    "code1": "LPI",
    "code2": "ESSL",
    "lat": 58.40615,
    "lng": 15.680508
  },
  {
    "name": "Kungsangen",
    "city": "Norrkoeping",
    "country": "Sweden",
    "code1": "NRK",
    "code2": "ESSP",
    "lat": 58.586253,
    "lng": 16.250622
  },
  {
    "name": "Eskilstuna",
    "city": "Eskilstuna",
    "country": "Sweden",
    "code1": "",
    "code2": "ESSU",
    "lat": 59.351078,
    "lng": 16.7084
  },
  {
    "name": "Visby",
    "city": "Visby",
    "country": "Sweden",
    "code1": "VBY",
    "code2": "ESSV",
    "lat": 57.662797,
    "lng": 18.346211
  },
  {
    "name": "Kalixfors",
    "city": "Kalixfors",
    "country": "Sweden",
    "code1": "",
    "code2": "ESUK",
    "lat": 67.764789,
    "lng": 20.257228
  },
  {
    "name": "Spangdahlem Ab",
    "city": "Spangdahlem",
    "country": "Germany",
    "code1": "SPM",
    "code2": "ETAD",
    "lat": 49.972667,
    "lng": 6.6925
  },
  {
    "name": "Ramstein Ab",
    "city": "Ramstein",
    "country": "Germany",
    "code1": "RMS",
    "code2": "ETAR",
    "lat": 49.436911,
    "lng": 7.600283
  },
  {
    "name": "Bamberg Aaf",
    "city": "Bamberg",
    "country": "Germany",
    "code1": "",
    "code2": "ETEJ",
    "lat": 49.920433,
    "lng": 10.914233
  },
  {
    "name": "Giebelstadt Aaf",
    "city": "Giebelstadt",
    "country": "Germany",
    "code1": "GHF",
    "code2": "ETEU",
    "lat": 49.648131,
    "lng": 9.966494
  },
  {
    "name": "Buckeburg",
    "city": "Brueckeburg",
    "country": "Germany",
    "code1": "",
    "code2": "ETHB",
    "lat": 52.2785,
    "lng": 9.082167
  },
  {
    "name": "Celle",
    "city": "Celle",
    "country": "Germany",
    "code1": "ZCN",
    "code2": "ETHC",
    "lat": 52.5912,
    "lng": 10.022133
  },
  {
    "name": "Rheine Bentlage",
    "city": "Rheine-brentlange",
    "country": "Germany",
    "code1": "",
    "code2": "ETHE",
    "lat": 52.291167,
    "lng": 7.387
  },
  {
    "name": "Fritzlar",
    "city": "Fritzlar",
    "country": "Germany",
    "code1": "",
    "code2": "ETHF",
    "lat": 51.1145,
    "lng": 9.285833
  },
  {
    "name": "Laupheim",
    "city": "Laupheim",
    "country": "Germany",
    "code1": "",
    "code2": "ETHL",
    "lat": 48.220297,
    "lng": 9.910019
  },
  {
    "name": "Mendig",
    "city": "Mendig",
    "country": "Germany",
    "code1": "",
    "code2": "ETHM",
    "lat": 50.366,
    "lng": 7.315333
  },
  {
    "name": "Niederstetten",
    "city": "Niederstetten",
    "country": "Germany",
    "code1": "",
    "code2": "ETHN",
    "lat": 49.391833,
    "lng": 9.958167
  },
  {
    "name": "Roth",
    "city": "Roth",
    "country": "Germany",
    "code1": "",
    "code2": "ETHR",
    "lat": 49.2175,
    "lng": 11.100167
  },
  {
    "name": "Fassberg",
    "city": "Fassberg",
    "country": "Germany",
    "code1": "",
    "code2": "ETHS",
    "lat": 52.919406,
    "lng": 10.197528
  },
  {
    "name": "Grafenwohr Aaf",
    "city": "Grafenwoehr",
    "country": "Germany",
    "code1": "",
    "code2": "ETIC",
    "lat": 49.698686,
    "lng": 11.940175
  },
  {
    "name": "Hanau Aaf",
    "city": "Hanau",
    "country": "Germany",
    "code1": "ZNF",
    "code2": "ETID",
    "lat": 50.169189,
    "lng": 8.961586
  },
  {
    "name": "Hohenfels Aaf",
    "city": "Hohenfels",
    "country": "Germany",
    "code1": "",
    "code2": "ETIH",
    "lat": 49.218056,
    "lng": 11.836111
  },
  {
    "name": "Kitzingen Aaf",
    "city": "Kitzingen",
    "country": "Germany",
    "code1": "",
    "code2": "ETIN",
    "lat": 49.743057,
    "lng": 10.200556
  },
  {
    "name": "Nordholz",
    "city": "Nordholz",
    "country": "Germany",
    "code1": "",
    "code2": "ETMN",
    "lat": 53.767667,
    "lng": 8.6585
  },
  {
    "name": "Diepholz",
    "city": "Diepholz",
    "country": "Germany",
    "code1": "",
    "code2": "ETND",
    "lat": 52.585514,
    "lng": 8.341014
  },
  {
    "name": "Geilenkirchen",
    "city": "Geilenkirchen",
    "country": "Germany",
    "code1": "GKE",
    "code2": "ETNG",
    "lat": 50.960817,
    "lng": 6.042422
  },
  {
    "name": "Hohn",
    "city": "Hohn",
    "country": "Germany",
    "code1": "",
    "code2": "ETNH",
    "lat": 54.312167,
    "lng": 9.538167
  },
  {
    "name": "Jever",
    "city": "Jever",
    "country": "Germany",
    "code1": "",
    "code2": "ETNJ",
    "lat": 53.5335,
    "lng": 7.888667
  },
  {
    "name": "Laage",
    "city": "Laage",
    "country": "Germany",
    "code1": "RLG",
    "code2": "ETNL",
    "lat": 53.918167,
    "lng": 12.278333
  },
  {
    "name": "Norvenich",
    "city": "Noervenich",
    "country": "Germany",
    "code1": "",
    "code2": "ETNN",
    "lat": 50.831167,
    "lng": 6.658167
  },
  {
    "name": "Schleswig",
    "city": "Schleswig",
    "country": "Germany",
    "code1": "",
    "code2": "ETNS",
    "lat": 54.459333,
    "lng": 9.516333
  },
  {
    "name": "Wittmundhafen",
    "city": "Wittmundhafen",
    "country": "Germany",
    "code1": "",
    "code2": "ETNT",
    "lat": 53.547833,
    "lng": 7.667333
  },
  {
    "name": "Neubrandenburg",
    "city": "Neubrandenburg",
    "country": "Germany",
    "code1": "",
    "code2": "ETNU",
    "lat": 53.602167,
    "lng": 13.306
  },
  {
    "name": "Wunstorf",
    "city": "Wunstorf",
    "country": "Germany",
    "code1": "",
    "code2": "ETNW",
    "lat": 52.457333,
    "lng": 9.427167
  },
  {
    "name": "Vilseck Aaf",
    "city": "Vilseck",
    "country": "Germany",
    "code1": "",
    "code2": "ETOI",
    "lat": 49.63361,
    "lng": 11.767222
  },
  {
    "name": "Coleman Aaf",
    "city": "Coleman",
    "country": "Germany",
    "code1": "",
    "code2": "ETOR",
    "lat": 49.563569,
    "lng": 8.463392
  },
  {
    "name": "Wiesbaden Aaf",
    "city": "Wiesbaden",
    "country": "Germany",
    "code1": "",
    "code2": "ETOU",
    "lat": 50.049819,
    "lng": 8.325397
  },
  {
    "name": "Landsberg Lech",
    "city": "Landsberg",
    "country": "Germany",
    "code1": "",
    "code2": "ETSA",
    "lat": 48.0705,
    "lng": 10.906
  },
  {
    "name": "Buchel",
    "city": "Buechel",
    "country": "Germany",
    "code1": "",
    "code2": "ETSB",
    "lat": 50.173833,
    "lng": 7.063333
  },
  {
    "name": "Erding",
    "city": "Erding",
    "country": "Germany",
    "code1": "",
    "code2": "ETSE",
    "lat": 48.322333,
    "lng": 11.948667
  },
  {
    "name": "Furstenfeldbruck",
    "city": "Fuerstenfeldbruck",
    "country": "Germany",
    "code1": "FEL",
    "code2": "ETSF",
    "lat": 48.205667,
    "lng": 11.267
  },
  {
    "name": "Holzdorf",
    "city": "Holzdorf",
    "country": "Germany",
    "code1": "",
    "code2": "ETSH",
    "lat": 51.767833,
    "lng": 13.167667
  },
  {
    "name": "Ingolstadt Manching",
    "city": "Ingolstadt",
    "country": "Germany",
    "code1": "",
    "code2": "ETSI",
    "lat": 48.715667,
    "lng": 11.534
  },
  {
    "name": "Lechfeld",
    "city": "Lechfeld",
    "country": "Germany",
    "code1": "",
    "code2": "ETSL",
    "lat": 48.1855,
    "lng": 10.861167
  },
  {
    "name": "Neuburg",
    "city": "Neuburg",
    "country": "Germany",
    "code1": "",
    "code2": "ETSN",
    "lat": 48.711,
    "lng": 11.2115
  },
  {
    "name": "Gutersloh",
    "city": "Guetersloh",
    "country": "Germany",
    "code1": "GUT",
    "code2": "ETUO",
    "lat": 51.922833,
    "lng": 8.306333
  },
  {
    "name": "Alexander Bay",
    "city": "Alexander Bay",
    "country": "South Africa",
    "code1": "ALJ",
    "code2": "FAAB",
    "lat": -28.575001,
    "lng": 16.533333
  },
  {
    "name": "Aggeneys",
    "city": "Aggeneys",
    "country": "South Africa",
    "code1": "AGZ",
    "code2": "FAAG",
    "lat": -29.281767,
    "lng": 18.813869
  },
  {
    "name": "Brakpan",
    "city": "Brakpan",
    "country": "South Africa",
    "code1": "",
    "code2": "FABB",
    "lat": -26.23865,
    "lng": 28.301769
  },
  {
    "name": "Bhisho",
    "city": "Bisho",
    "country": "South Africa",
    "code1": "BIY",
    "code2": "FABE",
    "lat": -32.89715,
    "lng": 27.279111
  },
  {
    "name": "Bloemfontein Intl",
    "city": "Bloemfontein",
    "country": "South Africa",
    "code1": "BFN",
    "code2": "FABL",
    "lat": -29.092722,
    "lng": 26.302444
  },
  {
    "name": "Bethlehem",
    "city": "Bethlehem",
    "country": "South Africa",
    "code1": "",
    "code2": "FABM",
    "lat": -28.248392,
    "lng": 28.336125
  },
  {
    "name": "Bothaville",
    "city": "Bothaville",
    "country": "South Africa",
    "code1": "",
    "code2": "FABO",
    "lat": -27.366769,
    "lng": 26.629194
  },
  {
    "name": "Cape Town Intl",
    "city": "Cape Town",
    "country": "South Africa",
    "code1": "CPT",
    "code2": "FACT",
    "lat": -33.964806,
    "lng": 18.601667
  },
  {
    "name": "Calvinia",
    "city": "Calvinia",
    "country": "South Africa",
    "code1": "",
    "code2": "FACV",
    "lat": -31.500278,
    "lng": 19.725897
  },
  {
    "name": "Durban Intl",
    "city": "Durban",
    "country": "South Africa",
    "code1": "DUR",
    "code2": "FADN",
    "lat": -29.970089,
    "lng": 30.950519
  },
  {
    "name": "East London",
    "city": "East London",
    "country": "South Africa",
    "code1": "ELS",
    "code2": "FAEL",
    "lat": -33.035569,
    "lng": 27.825939
  },
  {
    "name": "Ermelo",
    "city": "Ermelo",
    "country": "South Africa",
    "code1": "",
    "code2": "FAEO",
    "lat": -26.495644,
    "lng": 29.979764
  },
  {
    "name": "Ficksburg Sentraoes",
    "city": "Ficksburg",
    "country": "South Africa",
    "code1": "",
    "code2": "FAFB",
    "lat": -28.823119,
    "lng": 27.9089
  },
  {
    "name": "Grand Central",
    "city": "Johannesburg",
    "country": "South Africa",
    "code1": "GCJ",
    "code2": "FAGC",
    "lat": -25.986267,
    "lng": 28.140061
  },
  {
    "name": "George",
    "city": "George",
    "country": "South Africa",
    "code1": "GRJ",
    "code2": "FAGG",
    "lat": -34.005553,
    "lng": 22.378889
  },
  {
    "name": "Graaff Reinet",
    "city": "Graaff Reinet",
    "country": "South Africa",
    "code1": "",
    "code2": "FAGR",
    "lat": -32.193611,
    "lng": 24.541389
  },
  {
    "name": "Grahamstown",
    "city": "Grahamstown",
    "country": "South Africa",
    "code1": "",
    "code2": "FAGT",
    "lat": -33.284721,
    "lng": 26.498083
  },
  {
    "name": "Greytown",
    "city": "Greytown",
    "country": "South Africa",
    "code1": "",
    "code2": "FAGY",
    "lat": -29.122011,
    "lng": 30.586706
  },
  {
    "name": "Harmony",
    "city": "Harmony",
    "country": "South Africa",
    "code1": "",
    "code2": "FAHA",
    "lat": -28.078694,
    "lng": 26.861178
  },
  {
    "name": "Harrismith",
    "city": "Harrismith",
    "country": "South Africa",
    "code1": "",
    "code2": "FAHR",
    "lat": -28.235072,
    "lng": 29.106206
  },
  {
    "name": "Hoedspruit Afb",
    "city": "Hoedspruit",
    "country": "South Africa",
    "code1": "HDS",
    "code2": "FAHS",
    "lat": -24.368642,
    "lng": 31.048744
  },
  {
    "name": "Gariep Dam",
    "city": "Hendrik Verwoerddam",
    "country": "South Africa",
    "code1": "",
    "code2": "FAHV",
    "lat": -30.562164,
    "lng": 25.528286
  },
  {
    "name": "Johannesburg Intl",
    "city": "Johannesburg",
    "country": "South Africa",
    "code1": "JNB",
    "code2": "FAJS",
    "lat": -26.139166,
    "lng": 28.246
  },
  {
    "name": "P C Pelser",
    "city": "Klerksdorp",
    "country": "South Africa",
    "code1": "",
    "code2": "FAKD",
    "lat": -26.871064,
    "lng": 26.718003
  },
  {
    "name": "Kimberley",
    "city": "Kimberley",
    "country": "South Africa",
    "code1": "KIM",
    "code2": "FAKM",
    "lat": -28.802834,
    "lng": 24.765167
  },
  {
    "name": "Krugersdorp",
    "city": "Krugersdorp",
    "country": "South Africa",
    "code1": "",
    "code2": "FAKR",
    "lat": -26.080978,
    "lng": 27.725667
  },
  {
    "name": "Kroonstad",
    "city": "Kroonstad",
    "country": "South Africa",
    "code1": "",
    "code2": "FAKS",
    "lat": -27.660617,
    "lng": 27.315761
  },
  {
    "name": "Johan Pienaar",
    "city": "Kuruman",
    "country": "South Africa",
    "code1": "",
    "code2": "FAKU",
    "lat": -27.456667,
    "lng": 23.411388
  },
  {
    "name": "Kleinsee",
    "city": "Kleinsee",
    "country": "South Africa",
    "code1": "KLZ",
    "code2": "FAKZ",
    "lat": -29.688403,
    "lng": 17.094006
  },
  {
    "name": "Lanseria",
    "city": "Johannesburg",
    "country": "South Africa",
    "code1": "HLA",
    "code2": "FALA",
    "lat": -25.938514,
    "lng": 27.926133
  },
  {
    "name": "Lichtenburg",
    "city": "Lichtenburg",
    "country": "South Africa",
    "code1": "",
    "code2": "FALI",
    "lat": -26.175672,
    "lng": 26.184575
  },
  {
    "name": "Makhado Afb",
    "city": "Lambertsbaai",
    "country": "South Africa",
    "code1": "",
    "code2": "FALM",
    "lat": -23.159911,
    "lng": 29.696544
  },
  {
    "name": "Langebaanweg",
    "city": "Langebaanweg",
    "country": "South Africa",
    "code1": "",
    "code2": "FALW",
    "lat": -32.968889,
    "lng": 18.160278
  },
  {
    "name": "Ladysmith",
    "city": "Ladysmith",
    "country": "South Africa",
    "code1": "LAY",
    "code2": "FALY",
    "lat": -28.581667,
    "lng": 29.749722
  },
  {
    "name": "Middelburg",
    "city": "Middelburg",
    "country": "South Africa",
    "code1": "",
    "code2": "FAMB",
    "lat": -25.684775,
    "lng": 29.440158
  },
  {
    "name": "Margate",
    "city": "Margate",
    "country": "South Africa",
    "code1": "MGH",
    "code2": "FAMG",
    "lat": -30.857408,
    "lng": 30.343019
  },
  {
    "name": "Marble Hall",
    "city": "Marble Hall",
    "country": "South Africa",
    "code1": "",
    "code2": "FAMI",
    "lat": -24.989114,
    "lng": 29.283122
  },
  {
    "name": "Majuba Power Station",
    "city": "Majuba Power Station",
    "country": "South Africa",
    "code1": "",
    "code2": "FAMJ",
    "lat": -27.079253,
    "lng": 29.778528
  },
  {
    "name": "Susse",
    "city": "Kangia",
    "country": "Greenland",
    "code1": "",
    "code2": "\\N",
    "lat": 69.2225,
    "lng": -49.9383
  },
  {
    "name": "Malelane",
    "city": "Malalane",
    "country": "South Africa",
    "code1": "",
    "code2": "FAMN",
    "lat": -25.473603,
    "lng": 31.565828
  },
  {
    "name": "Messina",
    "city": "Musina",
    "country": "South Africa",
    "code1": "MEZ",
    "code2": "FAMS",
    "lat": -25.704458,
    "lng": 26.908978
  },
  {
    "name": "Mkuzi",
    "city": "Mkuze",
    "country": "South Africa",
    "code1": "",
    "code2": "FAMU",
    "lat": -27.626086,
    "lng": 32.044275
  },
  {
    "name": "Newcastle",
    "city": "Newcastle",
    "country": "South Africa",
    "code1": "NCS",
    "code2": "FANC",
    "lat": -27.770586,
    "lng": 29.976894
  },
  {
    "name": "Nylstroom",
    "city": "Nylstroom",
    "country": "South Africa",
    "code1": "",
    "code2": "FANY",
    "lat": -24.686056,
    "lng": 28.434944
  },
  {
    "name": "Overberg",
    "city": "Overberg",
    "country": "South Africa",
    "code1": "",
    "code2": "FAOB",
    "lat": -34.554861,
    "lng": 20.250681
  },
  {
    "name": "Oudtshoorn",
    "city": "Oudtshoorn",
    "country": "South Africa",
    "code1": "DUH",
    "code2": "FAOH",
    "lat": -33.606967,
    "lng": 22.188978
  },
  {
    "name": "Port Elizabeth Intl",
    "city": "Port Elizabeth",
    "country": "South Africa",
    "code1": "PLZ",
    "code2": "FAPE",
    "lat": -33.984919,
    "lng": 25.617275
  },
  {
    "name": "Plettenberg Bay",
    "city": "Plettenberg Bay",
    "country": "South Africa",
    "code1": "",
    "code2": "FAPG",
    "lat": -34.090279,
    "lng": 23.327778
  },
  {
    "name": "Phalaborwa",
    "city": "Phalaborwa",
    "country": "South Africa",
    "code1": "PHW",
    "code2": "FAPH",
    "lat": -23.937166,
    "lng": 31.15539
  },
  {
    "name": "Polokwane International",
    "city": "Polokwane",
    "country": "South Africa",
    "code1": "PTG",
    "code2": "FAPI",
    "lat": -23.926089,
    "lng": 29.484422
  },
  {
    "name": "Port St Johns",
    "city": "Port Saint Johns",
    "country": "South Africa",
    "code1": "",
    "code2": "FAPJ",
    "lat": -31.605886,
    "lng": 29.519786
  },
  {
    "name": "Pietermaritzburg",
    "city": "Pietermaritzburg",
    "country": "South Africa",
    "code1": "PZB",
    "code2": "FAPM",
    "lat": -29.648975,
    "lng": 30.398667
  },
  {
    "name": "Pilanesberg Intl",
    "city": "Pilanesberg",
    "country": "South Africa",
    "code1": "NTY",
    "code2": "FAPN",
    "lat": -25.333822,
    "lng": 27.173358
  },
  {
    "name": "Polokwane Intl",
    "city": "Potgietersrus",
    "country": "South Africa",
    "code1": "",
    "code2": "FAPP",
    "lat": -23.845306,
    "lng": 29.458611
  },
  {
    "name": "Potchefstroom",
    "city": "Potchefstroom",
    "country": "South Africa",
    "code1": "",
    "code2": "FAPS",
    "lat": -26.670994,
    "lng": 27.0819
  },
  {
    "name": "Parys",
    "city": "Parys",
    "country": "South Africa",
    "code1": "",
    "code2": "FAPY",
    "lat": -26.889344,
    "lng": 27.503417
  },
  {
    "name": "Queenstown",
    "city": "Queenstown",
    "country": "South Africa",
    "code1": "UTW",
    "code2": "FAQT",
    "lat": -31.920197,
    "lng": 26.882206
  },
  {
    "name": "Richards Bay",
    "city": "Richard's Bay",
    "country": "South Africa",
    "code1": "RCB",
    "code2": "FARB",
    "lat": -28.741039,
    "lng": 32.092111
  },
  {
    "name": "Rustenburg",
    "city": "Rustenburg",
    "country": "South Africa",
    "code1": "",
    "code2": "FARG",
    "lat": -25.6443,
    "lng": 27.271119
  },
  {
    "name": "Robertson",
    "city": "Robertson",
    "country": "South Africa",
    "code1": "",
    "code2": "FARS",
    "lat": -33.812181,
    "lng": 19.902828
  },
  {
    "name": "Springbok",
    "city": "Springbok",
    "country": "South Africa",
    "code1": "SBU",
    "code2": "FASB",
    "lat": -29.689333,
    "lng": 17.939611
  },
  {
    "name": "Secunda",
    "city": "Secunda",
    "country": "South Africa",
    "code1": "",
    "code2": "FASC",
    "lat": -26.524083,
    "lng": 29.170144
  },
  {
    "name": "Saldanha Vredenburg",
    "city": "Saldanha",
    "country": "South Africa",
    "code1": "",
    "code2": "FASD",
    "lat": -32.964067,
    "lng": 17.969331
  },
  {
    "name": "Springs",
    "city": "Springs",
    "country": "South Africa",
    "code1": "",
    "code2": "FASI",
    "lat": -26.248411,
    "lng": 28.397508
  },
  {
    "name": "Swartkop",
    "city": "Swartkop",
    "country": "South Africa",
    "code1": "",
    "code2": "FASK",
    "lat": -25.809717,
    "lng": 28.164631
  },
  {
    "name": "Sishen",
    "city": "Sishen",
    "country": "South Africa",
    "code1": "SIS",
    "code2": "FASS",
    "lat": -27.648606,
    "lng": 22.999278
  },
  {
    "name": "Hendrik Swellengrebel",
    "city": "Swellendam",
    "country": "South Africa",
    "code1": "",
    "code2": "FASX",
    "lat": -34.048222,
    "lng": 20.474611
  },
  {
    "name": "Skukuza",
    "city": "Skukuza",
    "country": "South Africa",
    "code1": "SZK",
    "code2": "FASZ",
    "lat": -24.960944,
    "lng": 31.588731
  },
  {
    "name": "Tommys Fld",
    "city": "Tommy's Field",
    "country": "South Africa",
    "code1": "",
    "code2": "FATF",
    "lat": -28.260028,
    "lng": 22.993178
  },
  {
    "name": "New Tempe",
    "city": "Bloemfontein",
    "country": "South Africa",
    "code1": "",
    "code2": "FATP",
    "lat": -29.032928,
    "lng": 26.157564
  },
  {
    "name": "Tutuka Power Station",
    "city": "Tutuka",
    "country": "South Africa",
    "code1": "",
    "code2": "FATT",
    "lat": -26.776556,
    "lng": 29.338778
  },
  {
    "name": "Tzaneen",
    "city": "Tzaneen",
    "country": "South Africa",
    "code1": "LTA",
    "code2": "FATZ",
    "lat": -23.824417,
    "lng": 30.329306
  },
  {
    "name": "Prince Mangosuthu Buthelezi",
    "city": "Ulundi",
    "country": "South Africa",
    "code1": "ULD",
    "code2": "FAUL",
    "lat": -28.320586,
    "lng": 31.416519
  },
  {
    "name": "Upington",
    "city": "Upington",
    "country": "South Africa",
    "code1": "UTN",
    "code2": "FAUP",
    "lat": -28.399097,
    "lng": 21.260239
  },
  {
    "name": "Mthatha",
    "city": "Umtata",
    "country": "South Africa",
    "code1": "UTT",
    "code2": "FAUT",
    "lat": -31.547903,
    "lng": 28.674289
  },
  {
    "name": "Vryburg",
    "city": "Vryburg",
    "country": "South Africa",
    "code1": "VRU",
    "code2": "FAVB",
    "lat": -26.982408,
    "lng": 24.728756
  },
  {
    "name": "Virginia",
    "city": "Durban",
    "country": "South Africa",
    "code1": "VIR",
    "code2": "FAVG",
    "lat": -29.770606,
    "lng": 31.058406
  },
  {
    "name": "Vredendal",
    "city": "Vredendal",
    "country": "South Africa",
    "code1": "",
    "code2": "FAVR",
    "lat": -31.640961,
    "lng": 18.544789
  },
  {
    "name": "Vereeniging",
    "city": "Vereeniging",
    "country": "South Africa",
    "code1": "",
    "code2": "FAVV",
    "lat": -26.566372,
    "lng": 27.960756
  },
  {
    "name": "Wonderboom",
    "city": "Pretoria",
    "country": "South Africa",
    "code1": "PRY",
    "code2": "FAWB",
    "lat": -25.653858,
    "lng": 28.224231
  },
  {
    "name": "Witbank",
    "city": "Witbank",
    "country": "South Africa",
    "code1": "",
    "code2": "FAWI",
    "lat": -25.832294,
    "lng": 29.192019
  },
  {
    "name": "Waterkloof Afb",
    "city": "Waterkloof",
    "country": "South Africa",
    "code1": "",
    "code2": "FAWK",
    "lat": -25.83,
    "lng": 28.2225
  },
  {
    "name": "Welkom",
    "city": "Welkom",
    "country": "South Africa",
    "code1": "WEL",
    "code2": "FAWM",
    "lat": -27.998,
    "lng": 26.669586
  },
  {
    "name": "Ysterplaat",
    "city": "Ysterplaat",
    "country": "South Africa",
    "code1": "",
    "code2": "FAYP",
    "lat": -33.900244,
    "lng": 18.498297
  },
  {
    "name": "Zeerust",
    "city": "Zeerust",
    "country": "South Africa",
    "code1": "",
    "code2": "FAZR",
    "lat": -25.598972,
    "lng": 26.042333
  },
  {
    "name": "Francistown",
    "city": "Francistown",
    "country": "Botswana",
    "code1": "FRW",
    "code2": "FBFT",
    "lat": -21.159597,
    "lng": 27.474525
  },
  {
    "name": "Jwaneng",
    "city": "Jwaneng",
    "country": "Botswana",
    "code1": "JWA",
    "code2": "FBJW",
    "lat": -24.602333,
    "lng": 24.690971
  },
  {
    "name": "Kasane",
    "city": "Kasane",
    "country": "Botswana",
    "code1": "BBK",
    "code2": "FBKE",
    "lat": -17.832875,
    "lng": 25.1624
  },
  {
    "name": "Maun",
    "city": "Maun",
    "country": "Botswana",
    "code1": "MUB",
    "code2": "FBMN",
    "lat": -19.972564,
    "lng": 23.431086
  },
  {
    "name": "Sir Seretse Khama Intl",
    "city": "Gaberone",
    "country": "Botswana",
    "code1": "GBE",
    "code2": "FBSK",
    "lat": -24.555225,
    "lng": 25.918208
  },
  {
    "name": "Selebi Phikwe",
    "city": "Selebi-phikwe",
    "country": "Botswana",
    "code1": "PKW",
    "code2": "FBSP",
    "lat": -22.05835,
    "lng": 27.828767
  },
  {
    "name": "Maya Maya",
    "city": "Brazzaville",
    "country": "Congo (Brazzaville)",
    "code1": "BZV",
    "code2": "FCBB",
    "lat": -4.2517,
    "lng": 15.253031
  },
  {
    "name": "Owando",
    "city": "Owando",
    "country": "Congo (Kinshasa)",
    "code1": "FTX",
    "code2": "FCOO",
    "lat": -0.53135,
    "lng": 15.950094
  },
  {
    "name": "Ouesso",
    "city": "Ouesso",
    "country": "Congo (Kinshasa)",
    "code1": "OUE",
    "code2": "FCOU",
    "lat": 1.615994,
    "lng": 16.037917
  },
  {
    "name": "Pointe Noire",
    "city": "Pointe-noire",
    "country": "Congo (Brazzaville)",
    "code1": "PNR",
    "code2": "FCPP",
    "lat": -4.816028,
    "lng": 11.886597
  },
  {
    "name": "Matsapha",
    "city": "Manzini",
    "country": "Swaziland",
    "code1": "MTS",
    "code2": "FDMS",
    "lat": -26.529022,
    "lng": 31.307519
  },
  {
    "name": "Bangui M Poko",
    "city": "Bangui",
    "country": "Central African Republic",
    "code1": "BGF",
    "code2": "FEFF",
    "lat": 4.398475,
    "lng": 18.518786
  },
  {
    "name": "Berberati",
    "city": "Berberati",
    "country": "Central African Republic",
    "code1": "BBT",
    "code2": "FEFT",
    "lat": 4.221583,
    "lng": 15.786369
  },
  {
    "name": "Bata",
    "city": "Bata",
    "country": "Equatorial Guinea",
    "code1": "BSG",
    "code2": "FGBT",
    "lat": 1.905469,
    "lng": 9.805681
  },
  {
    "name": "Malabo",
    "city": "Malabo",
    "country": "Equatorial Guinea",
    "code1": "SSG",
    "code2": "FGSL",
    "lat": 3.755267,
    "lng": 8.708717
  },
  {
    "name": "Ascension Aux Af",
    "city": "Wide Awake",
    "country": "Saint Helena",
    "code1": "",
    "code2": "FHAW",
    "lat": -7.969597,
    "lng": -14.393664
  },
  {
    "name": "Sir Seewoosagur Ramgoolam Intl",
    "city": "Plaisance",
    "country": "Mauritius",
    "code1": "MRU",
    "code2": "FIMP",
    "lat": -20.430235,
    "lng": 57.6836
  },
  {
    "name": "Plaine Corail",
    "city": "Rodriguez Island",
    "country": "Mauritius",
    "code1": "RRG",
    "code2": "FIMR",
    "lat": -19.757658,
    "lng": 63.360983
  },
  {
    "name": "Diego Garcia Nsf",
    "city": "Diego Garcia Island",
    "country": "British Indian Ocean Territory",
    "code1": "",
    "code2": "FJDG",
    "lat": -7.313267,
    "lng": 72.411089
  },
  {
    "name": "Tiko",
    "city": "Tiko",
    "country": "Cameroon",
    "code1": "TKC",
    "code2": "FKKC",
    "lat": 4.089192,
    "lng": 9.360528
  },
  {
    "name": "Douala",
    "city": "Douala",
    "country": "Cameroon",
    "code1": "DLA",
    "code2": "FKKD",
    "lat": 4.006081,
    "lng": 9.719481
  },
  {
    "name": "Salak",
    "city": "Maroua",
    "country": "Cameroon",
    "code1": "MVR",
    "code2": "FKKL",
    "lat": 10.451392,
    "lng": 14.257361
  },
  {
    "name": "Foumban Nkounja",
    "city": "Foumban",
    "country": "Cameroon",
    "code1": "FOM",
    "code2": "FKKM",
    "lat": 5.636919,
    "lng": 10.750817
  },
  {
    "name": "Ngaoundere",
    "city": "N'gaoundere",
    "country": "Cameroon",
    "code1": "NGE",
    "code2": "FKKN",
    "lat": 7.357011,
    "lng": 13.559242
  },
  {
    "name": "Garoua",
    "city": "Garoua",
    "country": "Cameroon",
    "code1": "GOU",
    "code2": "FKKR",
    "lat": 9.335892,
    "lng": 13.370103
  },
  {
    "name": "Bafoussam",
    "city": "Bafoussam",
    "country": "Cameroon",
    "code1": "BFX",
    "code2": "FKKU",
    "lat": 5.536919,
    "lng": 10.354583
  },
  {
    "name": "Bamenda",
    "city": "Bamenda",
    "country": "Cameroon",
    "code1": "BPC",
    "code2": "FKKV",
    "lat": 6.039239,
    "lng": 10.122639
  },
  {
    "name": "Yaounde Ville",
    "city": "Yaounde",
    "country": "Cameroon",
    "code1": "YAO",
    "code2": "FKKY",
    "lat": 3.836039,
    "lng": 11.523461
  },
  {
    "name": "Kasompe",
    "city": "Kasompe",
    "country": "Zambia",
    "code1": "",
    "code2": "FLKE",
    "lat": -12.572778,
    "lng": 27.89395
  },
  {
    "name": "Livingstone",
    "city": "Livingstone",
    "country": "Zambia",
    "code1": "LVI",
    "code2": "FLLI",
    "lat": -17.821756,
    "lng": 25.822692
  },
  {
    "name": "Lusaka Intl",
    "city": "Lusaka",
    "country": "Zambia",
    "code1": "LUN",
    "code2": "FLLS",
    "lat": -15.330817,
    "lng": 28.452628
  },
  {
    "name": "Mfuwe",
    "city": "Mfuwe",
    "country": "Zambia",
    "code1": "MFU",
    "code2": "FLMF",
    "lat": -13.258878,
    "lng": 31.936581
  },
  {
    "name": "Mongu",
    "city": "Mongu",
    "country": "Zambia",
    "code1": "",
    "code2": "FLMG",
    "lat": -15.254542,
    "lng": 23.162306
  },
  {
    "name": "Ndola",
    "city": "Ndola",
    "country": "Zambia",
    "code1": "NLA",
    "code2": "FLND",
    "lat": -12.998139,
    "lng": 28.664944
  },
  {
    "name": "Southdowns",
    "city": "Southdowns",
    "country": "Zambia",
    "code1": "KIW",
    "code2": "FLSO",
    "lat": -12.900469,
    "lng": 28.149858
  },
  {
    "name": "Prince Said Ibrahim",
    "city": "Moroni",
    "country": "Comoros",
    "code1": "HAH",
    "code2": "FMCH",
    "lat": -11.533661,
    "lng": 43.27185
  },
  {
    "name": "Bandaressalam",
    "city": "Moheli",
    "country": "Comoros",
    "code1": "NWA",
    "code2": "FMCI",
    "lat": -12.298108,
    "lng": 43.7664
  },
  {
    "name": "Ouani",
    "city": "Anjouan",
    "country": "Comoros",
    "code1": "AJN",
    "code2": "FMCV",
    "lat": -12.131667,
    "lng": 44.430279
  },
  {
    "name": "Dzaoudzi Pamandzi",
    "city": "Dzaoudzi",
    "country": "Mayotte",
    "code1": "DZA",
    "code2": "FMCZ",
    "lat": -12.804722,
    "lng": 45.281113
  },
  {
    "name": "St Denis Gillot",
    "city": "St.-denis",
    "country": "Reunion",
    "code1": "RUN",
    "code2": "FMEE",
    "lat": -20.8871,
    "lng": 55.510308
  },
  {
    "name": "St Pierre Pierrefonds",
    "city": "St.-pierre",
    "country": "Reunion",
    "code1": "ZSE",
    "code2": "FMEP",
    "lat": -21.320039,
    "lng": 55.423581
  },
  {
    "name": "Ivato",
    "city": "Antananarivo",
    "country": "Madagascar",
    "code1": "TNR",
    "code2": "FMMI",
    "lat": -18.79695,
    "lng": 47.478806
  },
  {
    "name": "Miandrivazo",
    "city": "Miandrivazo",
    "country": "Madagascar",
    "code1": "ZVA",
    "code2": "FMMN",
    "lat": -19.562778,
    "lng": 45.450832
  },
  {
    "name": "Sainte Marie",
    "city": "Sainte Marie",
    "country": "Madagascar",
    "code1": "SMS",
    "code2": "FMMS",
    "lat": -17.093889,
    "lng": 49.815834
  },
  {
    "name": "Toamasina",
    "city": "Toamasina",
    "country": "Madagascar",
    "code1": "TMM",
    "code2": "FMMT",
    "lat": -18.109517,
    "lng": 49.392536
  },
  {
    "name": "Morondava",
    "city": "Morondava",
    "country": "Madagascar",
    "code1": "MOQ",
    "code2": "FMMV",
    "lat": -20.28475,
    "lng": 44.317614
  },
  {
    "name": "Arrachart",
    "city": "Antsiranana",
    "country": "Madagascar",
    "code1": "DIE",
    "code2": "FMNA",
    "lat": -12.3494,
    "lng": 49.291747
  },
  {
    "name": "Avaratra",
    "city": "Mananara",
    "country": "Madagascar",
    "code1": "WMR",
    "code2": "FMNC",
    "lat": -16.1639,
    "lng": 49.773753
  },
  {
    "name": "Andapa",
    "city": "Andapa",
    "country": "Madagascar",
    "code1": "ZWA",
    "code2": "FMND",
    "lat": -14.651667,
    "lng": 49.620556
  },
  {
    "name": "Ambilobe",
    "city": "Ambilobe",
    "country": "Madagascar",
    "code1": "AMB",
    "code2": "FMNE",
    "lat": -13.188431,
    "lng": 48.987978
  },
  {
    "name": "Antsirabato",
    "city": "Antalaha",
    "country": "Madagascar",
    "code1": "ANM",
    "code2": "FMNH",
    "lat": -14.999411,
    "lng": 50.320233
  },
  {
    "name": "Analalava",
    "city": "Analalava",
    "country": "Madagascar",
    "code1": "HVA",
    "code2": "FMNL",
    "lat": -14.629694,
    "lng": 47.763783
  },
  {
    "name": "Philibert Tsiranana",
    "city": "Mahajanga",
    "country": "Madagascar",
    "code1": "MJN",
    "code2": "FMNM",
    "lat": -15.667144,
    "lng": 46.351828
  },
  {
    "name": "Fascene",
    "city": "Nosy-be",
    "country": "Madagascar",
    "code1": "NOS",
    "code2": "FMNN",
    "lat": -13.312067,
    "lng": 48.314822
  },
  {
    "name": "Besalampy",
    "city": "Besalampy",
    "country": "Madagascar",
    "code1": "BPY",
    "code2": "FMNQ",
    "lat": -16.741945,
    "lng": 44.481388
  },
  {
    "name": "Maroantsetra",
    "city": "Maroantsetra",
    "country": "Madagascar",
    "code1": "WMN",
    "code2": "FMNR",
    "lat": -15.436666,
    "lng": 49.688332
  },
  {
    "name": "Sambava",
    "city": "Sambava",
    "country": "Madagascar",
    "code1": "SVB",
    "code2": "FMNS",
    "lat": -14.278611,
    "lng": 50.174721
  },
  {
    "name": "Vohimarina",
    "city": "Vohemar",
    "country": "Madagascar",
    "code1": "VOH",
    "code2": "FMNV",
    "lat": -13.375834,
    "lng": 50.002777
  },
  {
    "name": "Ambalabe",
    "city": "Antsohihy",
    "country": "Madagascar",
    "code1": "WAI",
    "code2": "FMNW",
    "lat": -14.89875,
    "lng": 47.993894
  },
  {
    "name": "Ampampamena",
    "city": "Ampampamena",
    "country": "Madagascar",
    "code1": "",
    "code2": "FMNZ",
    "lat": -13.484814,
    "lng": 48.632739
  },
  {
    "name": "Tolagnaro",
    "city": "Tolagnaro",
    "country": "Madagascar",
    "code1": "FTU",
    "code2": "FMSD",
    "lat": -25.038056,
    "lng": 46.956111
  },
  {
    "name": "Fianarantsoa",
    "city": "Fianarantsoa",
    "country": "Madagascar",
    "code1": "WFI",
    "code2": "FMSF",
    "lat": -21.441558,
    "lng": 47.111736
  },
  {
    "name": "Farafangana",
    "city": "Farafangana",
    "country": "Madagascar",
    "code1": "RVA",
    "code2": "FMSG",
    "lat": -22.805286,
    "lng": 47.820614
  },
  {
    "name": "Manakara",
    "city": "Manakara",
    "country": "Madagascar",
    "code1": "WVK",
    "code2": "FMSK",
    "lat": -22.119722,
    "lng": 48.021667
  },
  {
    "name": "Mananjary",
    "city": "Mananjary",
    "country": "Madagascar",
    "code1": "MNJ",
    "code2": "FMSM",
    "lat": -21.201772,
    "lng": 48.358317
  },
  {
    "name": "Morombe",
    "city": "Morombe",
    "country": "Madagascar",
    "code1": "MXM",
    "code2": "FMSR",
    "lat": -21.753867,
    "lng": 43.375533
  },
  {
    "name": "Toliara",
    "city": "Toliara",
    "country": "Madagascar",
    "code1": "TLE",
    "code2": "FMST",
    "lat": -23.383369,
    "lng": 43.728453
  },
  {
    "name": "Mbanza Congo",
    "city": "M'banza-congo",
    "country": "Angola",
    "code1": "SSY",
    "code2": "FNBC",
    "lat": -6.269897,
    "lng": 14.247025
  },
  {
    "name": "Benguela",
    "city": "Benguela",
    "country": "Angola",
    "code1": "BUG",
    "code2": "FNBG",
    "lat": -12.609025,
    "lng": 13.403711
  },
  {
    "name": "Cabinda",
    "city": "Cabinda",
    "country": "Angola",
    "code1": "CAB",
    "code2": "FNCA",
    "lat": -5.596992,
    "lng": 12.188353
  },
  {
    "name": "Culebra Airport",
    "city": "Culebra Island",
    "country": "Puerto Rico",
    "code1": "CPX",
    "code2": "TJCP",
    "lat": 18.3127,
    "lng": -65.3034
  },
  {
    "name": "Huambo",
    "city": "Huambo",
    "country": "Angola",
    "code1": "NOV",
    "code2": "FNHU",
    "lat": -12.808878,
    "lng": 15.760547
  },
  {
    "name": "Kuito",
    "city": "Kuito",
    "country": "Angola",
    "code1": "SVP",
    "code2": "FNKU",
    "lat": -12.404633,
    "lng": 16.947414
  },
  {
    "name": "Lobito",
    "city": "Lobito",
    "country": "Angola",
    "code1": "",
    "code2": "FNLB",
    "lat": -12.371233,
    "lng": 13.536625
  },
  {
    "name": "Luanda 4 De Fevereiro",
    "city": "Luanda",
    "country": "Angola",
    "code1": "LAD",
    "code2": "FNLU",
    "lat": -8.858375,
    "lng": 13.231178
  },
  {
    "name": "Malanje",
    "city": "Malanje",
    "country": "Angola",
    "code1": "MEG",
    "code2": "FNMA",
    "lat": -9.525086,
    "lng": 16.312406
  },
  {
    "name": "Menongue",
    "city": "Menongue",
    "country": "Angola",
    "code1": "SPP",
    "code2": "FNME",
    "lat": -14.657583,
    "lng": 17.719833
  },
  {
    "name": "Negage",
    "city": "Negage",
    "country": "Angola",
    "code1": "GXG",
    "code2": "FNNG",
    "lat": -7.754506,
    "lng": 15.287728
  },
  {
    "name": "Porto Amboim",
    "city": "Porto Amboim",
    "country": "Angola",
    "code1": "PBN",
    "code2": "FNPA",
    "lat": -10.721956,
    "lng": 13.765528
  },
  {
    "name": "Saurimo",
    "city": "Saurimo",
    "country": "Angola",
    "code1": "VHC",
    "code2": "FNSA",
    "lat": -9.689067,
    "lng": 20.431875
  },
  {
    "name": "Soyo",
    "city": "Soyo",
    "country": "Angola",
    "code1": "SZA",
    "code2": "FNSO",
    "lat": -6.141086,
    "lng": 12.371764
  },
  {
    "name": "Lubango",
    "city": "Lubango",
    "country": "Angola",
    "code1": "SDD",
    "code2": "FNUB",
    "lat": -14.924733,
    "lng": 13.575022
  },
  {
    "name": "Luena",
    "city": "Luena",
    "country": "Angola",
    "code1": "LUO",
    "code2": "FNUE",
    "lat": -11.768086,
    "lng": 19.897672
  },
  {
    "name": "Uige",
    "city": "Uige",
    "country": "Angola",
    "code1": "UGO",
    "code2": "FNUG",
    "lat": -7.603067,
    "lng": 15.027822
  },
  {
    "name": "Xangongo",
    "city": "Xangongo",
    "country": "Angola",
    "code1": "XGN",
    "code2": "FNXA",
    "lat": -16.755417,
    "lng": 14.965344
  },
  {
    "name": "Oyem",
    "city": "Oyem",
    "country": "Gabon",
    "code1": "OYE",
    "code2": "FOGO",
    "lat": 1.543108,
    "lng": 11.581361
  },
  {
    "name": "Okondja",
    "city": "Okondja",
    "country": "Gabon",
    "code1": "OKN",
    "code2": "FOGQ",
    "lat": -0.665214,
    "lng": 13.673133
  },
  {
    "name": "Lambarene",
    "city": "Lambarene",
    "country": "Gabon",
    "code1": "LBQ",
    "code2": "FOGR",
    "lat": -0.704389,
    "lng": 10.245722
  },
  {
    "name": "Bitam",
    "city": "Bitam",
    "country": "Gabon",
    "code1": "BMM",
    "code2": "FOOB",
    "lat": 2.075639,
    "lng": 11.493195
  },
  {
    "name": "Port Gentil",
    "city": "Port Gentil",
    "country": "Gabon",
    "code1": "POG",
    "code2": "FOOG",
    "lat": -0.711739,
    "lng": 8.754383
  },
  {
    "name": "Omboue Hopital",
    "city": "Omboue Hospial",
    "country": "Gabon",
    "code1": "OMB",
    "code2": "FOOH",
    "lat": -1.574733,
    "lng": 9.262694
  },
  {
    "name": "Makokou",
    "city": "Makokou",
    "country": "Gabon",
    "code1": "MKU",
    "code2": "FOOK",
    "lat": 0.579211,
    "lng": 12.890908
  },
  {
    "name": "Leon M Ba",
    "city": "Libreville",
    "country": "Gabon",
    "code1": "LBV",
    "code2": "FOOL",
    "lat": 0.4586,
    "lng": 9.412283
  },
  {
    "name": "Mvengue",
    "city": "Franceville",
    "country": "Gabon",
    "code1": "MVB",
    "code2": "FOON",
    "lat": -1.656156,
    "lng": 13.438036
  },
  {
    "name": "Principe",
    "city": "Principe",
    "country": "Sao Tome and Principe",
    "code1": "PCP",
    "code2": "FPPR",
    "lat": 1.662936,
    "lng": 7.411742
  },
  {
    "name": "Sao Tome Intl",
    "city": "Sao Tome",
    "country": "Sao Tome and Principe",
    "code1": "TMS",
    "code2": "FPST",
    "lat": 0.378175,
    "lng": 6.712153
  },
  {
    "name": "Beira",
    "city": "Beira",
    "country": "Mozambique",
    "code1": "BEW",
    "code2": "FQBR",
    "lat": -19.796419,
    "lng": 34.907556
  },
  {
    "name": "Inhambane",
    "city": "Inhambane",
    "country": "Mozambique",
    "code1": "INH",
    "code2": "FQIN",
    "lat": -23.876431,
    "lng": 35.408544
  },
  {
    "name": "Lichinga",
    "city": "Lichinga",
    "country": "Mozambique",
    "code1": "VXC",
    "code2": "FQLC",
    "lat": -13.273986,
    "lng": 35.266262
  },
  {
    "name": "Lumbo",
    "city": "Lumbo",
    "country": "Mozambique",
    "code1": "",
    "code2": "FQLU",
    "lat": -15.033058,
    "lng": 40.671728
  },
  {
    "name": "Maputo",
    "city": "Maputo",
    "country": "Mozambique",
    "code1": "MPM",
    "code2": "FQMA",
    "lat": -25.920836,
    "lng": 32.572606
  },
  {
    "name": "Mueda",
    "city": "Mueda",
    "country": "Mozambique",
    "code1": "",
    "code2": "FQMD",
    "lat": -11.672922,
    "lng": 39.563142
  },
  {
    "name": "Mocimboa Da Praia",
    "city": "Mocimboa Da Praia",
    "country": "Mozambique",
    "code1": "MZB",
    "code2": "FQMP",
    "lat": -11.361789,
    "lng": 40.354875
  },
  {
    "name": "Marrupa",
    "city": "Marrupa",
    "country": "Mozambique",
    "code1": "",
    "code2": "FQMR",
    "lat": -13.225053,
    "lng": 37.552067
  },
  {
    "name": "Nacala",
    "city": "Nacala",
    "country": "Mozambique",
    "code1": "MNC",
    "code2": "FQNC",
    "lat": -14.488233,
    "lng": 40.71225
  },
  {
    "name": "Nampula",
    "city": "Nampula",
    "country": "Mozambique",
    "code1": "APL",
    "code2": "FQNP",
    "lat": -15.105611,
    "lng": 39.2818
  },
  {
    "name": "Pemba",
    "city": "Pemba",
    "country": "Mozambique",
    "code1": "POL",
    "code2": "FQPB",
    "lat": -12.986753,
    "lng": 40.522492
  },
  {
    "name": "Quelimane",
    "city": "Quelimane",
    "country": "Mozambique",
    "code1": "UEL",
    "code2": "FQQL",
    "lat": -17.8555,
    "lng": 36.869106
  },
  {
    "name": "Songo",
    "city": "Songo",
    "country": "Mozambique",
    "code1": "",
    "code2": "FQSG",
    "lat": -15.602694,
    "lng": 32.773189
  },
  {
    "name": "Tete Chingodzi",
    "city": "Tete",
    "country": "Mozambique",
    "code1": "TET",
    "code2": "FQTT",
    "lat": -16.104817,
    "lng": 33.640181
  },
  {
    "name": "Ulongwe",
    "city": "Ulongwe",
    "country": "Mozambique",
    "code1": "",
    "code2": "FQUG",
    "lat": -14.704617,
    "lng": 34.352369
  },
  {
    "name": "Vilankulo",
    "city": "Vilankulu",
    "country": "Mozambique",
    "code1": "VNX",
    "code2": "FQVL",
    "lat": -22.018431,
    "lng": 35.313297
  },
  {
    "name": "Alphonse",
    "city": "Alphonse",
    "country": "Seychelles",
    "code1": "",
    "code2": "FSAL",
    "lat": -7.004783,
    "lng": 52.726247
  },
  {
    "name": "Desroches",
    "city": "Desroches",
    "country": "Seychelles",
    "code1": "DES",
    "code2": "FSDR",
    "lat": -5.696697,
    "lng": 53.655844
  },
  {
    "name": "Farquhar",
    "city": "Farquhar",
    "country": "Seychelles",
    "code1": "",
    "code2": "FSFA",
    "lat": -10.109611,
    "lng": 51.176119
  },
  {
    "name": "Seychelles Intl",
    "city": "Mahe",
    "country": "Seychelles",
    "code1": "SEZ",
    "code2": "FSIA",
    "lat": -4.674342,
    "lng": 55.521839
  },
  {
    "name": "Praslin",
    "city": "Praslin",
    "country": "Seychelles",
    "code1": "PRI",
    "code2": "FSPP",
    "lat": -4.319292,
    "lng": 55.691417
  },
  {
    "name": "Coetivy",
    "city": "Coetivy",
    "country": "Seychelles",
    "code1": "",
    "code2": "FSSC",
    "lat": -7.134567,
    "lng": 56.278239
  },
  {
    "name": "Abeche",
    "city": "Abeche",
    "country": "Chad",
    "code1": "AEH",
    "code2": "FTTC",
    "lat": 13.847,
    "lng": 20.844333
  },
  {
    "name": "Moundou",
    "city": "Moundou",
    "country": "Chad",
    "code1": "MQQ",
    "code2": "FTTD",
    "lat": 8.624406,
    "lng": 16.071419
  },
  {
    "name": "Ndjamena Hassan Djamous",
    "city": "N'djamena",
    "country": "Chad",
    "code1": "NDJ",
    "code2": "FTTJ",
    "lat": 12.133689,
    "lng": 15.034019
  },
  {
    "name": "Faya Largeau",
    "city": "Faya-largeau",
    "country": "Chad",
    "code1": "FYT",
    "code2": "FTTY",
    "lat": 17.917053,
    "lng": 19.111078
  },
  {
    "name": "J M Nkomo Intl",
    "city": "Bulawayo",
    "country": "Zimbabwe",
    "code1": "BUQ",
    "code2": "FVBU",
    "lat": -20.017431,
    "lng": 28.617869
  },
  {
    "name": "Charles Prince",
    "city": "Harare",
    "country": "Zimbabwe",
    "code1": "",
    "code2": "FVCP",
    "lat": -17.751561,
    "lng": 30.924706
  },
  {
    "name": "Buffalo Range",
    "city": "Chiredzi",
    "country": "Zimbabwe",
    "code1": "BFO",
    "code2": "FVCZ",
    "lat": -21.008083,
    "lng": 31.57855
  },
  {
    "name": "Victoria Falls Intl",
    "city": "Victoria Falls",
    "country": "Zimbabwe",
    "code1": "VFA",
    "code2": "FVFA",
    "lat": -18.095881,
    "lng": 25.839006
  },
  {
    "name": "Harare Intl",
    "city": "Harare",
    "country": "Zimbabwe",
    "code1": "HRE",
    "code2": "FVHA",
    "lat": -17.931806,
    "lng": 31.092847
  },
  {
    "name": "Kariba Intl",
    "city": "Kariba",
    "country": "Zimbabwe",
    "code1": "KAB",
    "code2": "FVKB",
    "lat": -16.519761,
    "lng": 28.884981
  },
  {
    "name": "Mutoko",
    "city": "Mutoko",
    "country": "Zimbabwe",
    "code1": "",
    "code2": "FVMT",
    "lat": -17.431917,
    "lng": 32.184502
  },
  {
    "name": "Mutare",
    "city": "Mutare",
    "country": "Zimbabwe",
    "code1": "",
    "code2": "FVMU",
    "lat": -18.997499,
    "lng": 32.627224
  },
  {
    "name": "Masvingo Intl",
    "city": "Masvingo",
    "country": "Zimbabwe",
    "code1": "MVZ",
    "code2": "FVMV",
    "lat": -20.055333,
    "lng": 30.859111
  },
  {
    "name": "Zvishavane",
    "city": "Zvishavane",
    "country": "Zimbabwe",
    "code1": "",
    "code2": "FVSH",
    "lat": -20.289497,
    "lng": 30.088228
  },
  {
    "name": "Gweru Thornhill",
    "city": "Gwert",
    "country": "Zimbabwe",
    "code1": "GWE",
    "code2": "FVTL",
    "lat": -19.436394,
    "lng": 29.861911
  },
  {
    "name": "Hwange National Park",
    "city": "Hwange National Park",
    "country": "Zimbabwe",
    "code1": "WKM",
    "code2": "FVWN",
    "lat": -18.629872,
    "lng": 27.021042
  },
  {
    "name": "Chileka Intl",
    "city": "Blantyre",
    "country": "Malawi",
    "code1": "BLZ",
    "code2": "FWCL",
    "lat": -15.679053,
    "lng": 34.974014
  },
  {
    "name": "Karonga",
    "city": "Karonga",
    "country": "Malawi",
    "code1": "KGJ",
    "code2": "FWKA",
    "lat": -9.953569,
    "lng": 33.893022
  },
  {
    "name": "Kasungu",
    "city": "Kasungu",
    "country": "Malawi",
    "code1": "",
    "code2": "FWKG",
    "lat": -13.014631,
    "lng": 33.468597
  },
  {
    "name": "Kamuzu Intl",
    "city": "Lilongwe",
    "country": "Malawi",
    "code1": "LLW",
    "code2": "FWKI",
    "lat": -13.789378,
    "lng": 33.781
  },
  {
    "name": "Mzuzu",
    "city": "Mzuzu",
    "country": "Malawi",
    "code1": "ZZU",
    "code2": "FWUU",
    "lat": -11.44475,
    "lng": 34.011776
  },
  {
    "name": "Moshoeshoe I Intl",
    "city": "Maseru",
    "country": "Lesotho",
    "code1": "MSU",
    "code2": "FXMM",
    "lat": -29.462256,
    "lng": 27.552503
  },
  {
    "name": "Mejametalana",
    "city": "Maseru",
    "country": "Lesotho",
    "code1": "",
    "code2": "FXMU",
    "lat": -29.304053,
    "lng": 27.503458
  },
  {
    "name": "Ndjili Intl",
    "city": "Kinshasa",
    "country": "Congo (Kinshasa)",
    "code1": "FIH",
    "code2": "FZAA",
    "lat": -4.38575,
    "lng": 15.444569
  },
  {
    "name": "Ndolo",
    "city": "Kinshasa",
    "country": "Congo (Kinshasa)",
    "code1": "NLO",
    "code2": "FZAB",
    "lat": -4.326689,
    "lng": 15.327342
  },
  {
    "name": "Muanda",
    "city": "Muanda",
    "country": "Congo (Kinshasa)",
    "code1": "MNB",
    "code2": "FZAG",
    "lat": -5.930858,
    "lng": 12.351789
  },
  {
    "name": "Kitona Base",
    "city": "Kitona Base",
    "country": "Congo (Kinshasa)",
    "code1": "",
    "code2": "FZAI",
    "lat": -5.918056,
    "lng": 12.447694
  },
  {
    "name": "Bandundu",
    "city": "Bandoundu",
    "country": "Congo (Kinshasa)",
    "code1": "FDU",
    "code2": "FZBO",
    "lat": -3.311319,
    "lng": 17.381683
  },
  {
    "name": "Kikwit",
    "city": "Kikwit",
    "country": "Congo (Kinshasa)",
    "code1": "KKW",
    "code2": "FZCA",
    "lat": -5.035767,
    "lng": 18.785631
  },
  {
    "name": "Mbandaka",
    "city": "Mbandaka",
    "country": "Congo (Kinshasa)",
    "code1": "MDK",
    "code2": "FZEA",
    "lat": 0.0226,
    "lng": 18.288744
  },
  {
    "name": "Gbadolite",
    "city": "Gbadolite",
    "country": "Congo (Kinshasa)",
    "code1": "BDT",
    "code2": "FZFD",
    "lat": 4.253206,
    "lng": 20.975283
  },
  {
    "name": "Gemena",
    "city": "Gemena",
    "country": "Congo (Kinshasa)",
    "code1": "GMA",
    "code2": "FZFK",
    "lat": 3.235369,
    "lng": 19.771258
  },
  {
    "name": "Kotakoli",
    "city": "Kotakoli",
    "country": "Congo (Kinshasa)",
    "code1": "",
    "code2": "FZFP",
    "lat": 4.157639,
    "lng": 21.650917
  },
  {
    "name": "Lisala",
    "city": "Lisala",
    "country": "Congo (Kinshasa)",
    "code1": "LIQ",
    "code2": "FZGA",
    "lat": 2.170658,
    "lng": 21.496906
  },
  {
    "name": "Kisangani Simisini",
    "city": "Kisangani",
    "country": "Congo (Kinshasa)",
    "code1": "FKI",
    "code2": "FZIA",
    "lat": 0.5175,
    "lng": 25.155014
  },
  {
    "name": "Matari",
    "city": "Isiro",
    "country": "Congo (Kinshasa)",
    "code1": "IRP",
    "code2": "FZJH",
    "lat": 2.827606,
    "lng": 27.588253
  },
  {
    "name": "Bunia",
    "city": "Bunia",
    "country": "Congo (Kinshasa)",
    "code1": "BUX",
    "code2": "FZKA",
    "lat": 1.565719,
    "lng": 30.220833
  },
  {
    "name": "Buta Zega",
    "city": "Buta Zega",
    "country": "Congo (Kinshasa)",
    "code1": "",
    "code2": "FZKJ",
    "lat": 2.818347,
    "lng": 24.793706
  },
  {
    "name": "Bukavu Kavumu",
    "city": "Bukavu/kavumu",
    "country": "Congo (Kinshasa)",
    "code1": "BKY",
    "code2": "FZMA",
    "lat": -2.308978,
    "lng": 28.808803
  },
  {
    "name": "Goma",
    "city": "Goma",
    "country": "Congo (Kinshasa)",
    "code1": "GOM",
    "code2": "FZNA",
    "lat": -1.670814,
    "lng": 29.238464
  },
  {
    "name": "Kindu",
    "city": "Kindu",
    "country": "Congo (Kinshasa)",
    "code1": "KND",
    "code2": "FZOA",
    "lat": -2.919178,
    "lng": 25.915361
  },
  {
    "name": "Lubumbashi Intl",
    "city": "Lubumashi",
    "country": "Congo (Kinshasa)",
    "code1": "FBM",
    "code2": "FZQA",
    "lat": -11.591333,
    "lng": 27.530889
  },
  {
    "name": "Kolwezi",
    "city": "Kolwezi",
    "country": "Congo (Kinshasa)",
    "code1": "KWZ",
    "code2": "FZQM",
    "lat": -10.765886,
    "lng": 25.505714
  },
  {
    "name": "Kalemie",
    "city": "Kalemie",
    "country": "Congo (Kinshasa)",
    "code1": "FMI",
    "code2": "FZRF",
    "lat": -5.875556,
    "lng": 29.25
  },
  {
    "name": "Kamina Base",
    "city": "Kamina Base",
    "country": "Congo (Kinshasa)",
    "code1": "KMN",
    "code2": "FZSA",
    "lat": -8.642025,
    "lng": 25.252897
  },
  {
    "name": "Kananga",
    "city": "Kananga",
    "country": "Congo (Kinshasa)",
    "code1": "KGA",
    "code2": "FZUA",
    "lat": -5.900055,
    "lng": 22.469166
  },
  {
    "name": "Mbuji Mayi",
    "city": "Mbuji-mayi",
    "country": "Congo (Kinshasa)",
    "code1": "MJM",
    "code2": "FZWA",
    "lat": -6.121236,
    "lng": 23.569008
  },
  {
    "name": "Senou",
    "city": "Bamako",
    "country": "Mali",
    "code1": "BKO",
    "code2": "GABS",
    "lat": 12.533544,
    "lng": -7.949944
  },
  {
    "name": "Gao",
    "city": "Gao",
    "country": "Mali",
    "code1": "GAQ",
    "code2": "GAGO",
    "lat": 16.248433,
    "lng": -0.005456
  },
  {
    "name": "Kayes Dag Dag",
    "city": "Kayes",
    "country": "Mali",
    "code1": "KYS",
    "code2": "GAKY",
    "lat": 14.481233,
    "lng": -11.404397
  },
  {
    "name": "Ambodedjo",
    "city": "Mopti",
    "country": "Mali",
    "code1": "MZI",
    "code2": "GAMB",
    "lat": 14.512803,
    "lng": -4.079561
  },
  {
    "name": "Tombouctou",
    "city": "Tombouctou",
    "country": "Mali",
    "code1": "TOM",
    "code2": "GATB",
    "lat": 16.730458,
    "lng": -3.007583
  },
  {
    "name": "Tessalit",
    "city": "Tessalit",
    "country": "Mali",
    "code1": "",
    "code2": "GATS",
    "lat": 20.242983,
    "lng": 0.977308
  },
  {
    "name": "Banjul Intl",
    "city": "Banjul",
    "country": "Gambia",
    "code1": "BJL",
    "code2": "GBYD",
    "lat": 13.337961,
    "lng": -16.652206
  },
  {
    "name": "Fuerteventura",
    "city": "Fuerteventura",
    "country": "Spain",
    "code1": "FUE",
    "code2": "GCFV",
    "lat": 28.452717,
    "lng": -13.863761
  },
  {
    "name": "Hierro",
    "city": "Hierro",
    "country": "Spain",
    "code1": "VDE",
    "code2": "GCHI",
    "lat": 27.814847,
    "lng": -17.887056
  },
  {
    "name": "La Palma",
    "city": "Santa Cruz De La Palma",
    "country": "Spain",
    "code1": "SPC",
    "code2": "GCLA",
    "lat": 28.626478,
    "lng": -17.755611
  },
  {
    "name": "Gran Canaria",
    "city": "Gran Canaria",
    "country": "Spain",
    "code1": "LPA",
    "code2": "GCLP",
    "lat": 27.931886,
    "lng": -15.386586
  },
  {
    "name": "Lanzarote",
    "city": "Las Palmas",
    "country": "Spain",
    "code1": "ACE",
    "code2": "GCRR",
    "lat": 28.945464,
    "lng": -13.605225
  },
  {
    "name": "Tenerife Sur",
    "city": "Tenerife",
    "country": "Spain",
    "code1": "TFS",
    "code2": "GCTS",
    "lat": 28.044475,
    "lng": -16.572489
  },
  {
    "name": "Tenerife Norte",
    "city": "Tenerife",
    "country": "Spain",
    "code1": "TFN",
    "code2": "GCXO",
    "lat": 28.482653,
    "lng": -16.341536
  },
  {
    "name": "Melilla",
    "city": "Melilla",
    "country": "Spain",
    "code1": "MLN",
    "code2": "GEML",
    "lat": 35.279817,
    "lng": -2.956256
  },
  {
    "name": "Freetown Lungi",
    "city": "Freetown",
    "country": "Sierra Leone",
    "code1": "FNA",
    "code2": "GFLL",
    "lat": 8.616444,
    "lng": -13.195489
  },
  {
    "name": "Cufar",
    "city": "Cufar",
    "country": "Guinea-Bissau",
    "code1": "",
    "code2": "GGCF",
    "lat": 11.287917,
    "lng": -15.1805
  },
  {
    "name": "Monrovia Spriggs Payne",
    "city": "Monrovia",
    "country": "Liberia",
    "code1": "MLW",
    "code2": "GLMR",
    "lat": 6.289061,
    "lng": -10.758722
  },
  {
    "name": "Monrovia Roberts Intl",
    "city": "Monrovia",
    "country": "Liberia",
    "code1": "ROB",
    "code2": "GLRB",
    "lat": 6.233789,
    "lng": -10.362311
  },
  {
    "name": "Inezgane",
    "city": "Agadir",
    "country": "Morocco",
    "code1": "AGA",
    "code2": "GMAA",
    "lat": 30.381353,
    "lng": -9.546311
  },
  {
    "name": "Plage Blanche",
    "city": "Tan Tan",
    "country": "Morocco",
    "code1": "TTA",
    "code2": "GMAT",
    "lat": 28.448194,
    "lng": -11.161347
  },
  {
    "name": "Saiss",
    "city": "Fes",
    "country": "Morocco",
    "code1": "FEZ",
    "code2": "GMFF",
    "lat": 33.927261,
    "lng": -4.977958
  },
  {
    "name": "Ifrane",
    "city": "Ifrane",
    "country": "Morocco",
    "code1": "",
    "code2": "GMFI",
    "lat": 33.505319,
    "lng": -5.152903
  },
  {
    "name": "Moulay Ali Cherif",
    "city": "Er-rachidia",
    "country": "Morocco",
    "code1": "ERH",
    "code2": "GMFK",
    "lat": 31.9475,
    "lng": -4.398333
  },
  {
    "name": "Bassatine",
    "city": "Meknes",
    "country": "Morocco",
    "code1": "MEK",
    "code2": "GMFM",
    "lat": 33.879067,
    "lng": -5.515125
  },
  {
    "name": "Angads",
    "city": "Oujda",
    "country": "Morocco",
    "code1": "OUD",
    "code2": "GMFO",
    "lat": 34.78715,
    "lng": -1.923986
  },
  {
    "name": "Ben Slimane",
    "city": "Ben Slimane",
    "country": "Morocco",
    "code1": "",
    "code2": "GMMB",
    "lat": 33.655422,
    "lng": -7.22145
  },
  {
    "name": "Sale",
    "city": "Rabat",
    "country": "Morocco",
    "code1": "RBA",
    "code2": "GMME",
    "lat": 34.051467,
    "lng": -6.751519
  },
  {
    "name": "Mohammed V Intl",
    "city": "Casablanca",
    "country": "Morocco",
    "code1": "CMN",
    "code2": "GMMN",
    "lat": 33.367467,
    "lng": -7.589967
  },
  {
    "name": "Menara",
    "city": "Marrakech",
    "country": "Morocco",
    "code1": "RAK",
    "code2": "GMMX",
    "lat": 31.606886,
    "lng": -8.0363
  },
  {
    "name": "Kenitra",
    "city": "Kentira",
    "country": "Morocco",
    "code1": "NNA",
    "code2": "GMMY",
    "lat": 34.298864,
    "lng": -6.595878
  },
  {
    "name": "Ouarzazate",
    "city": "Ouarzazate",
    "country": "Morocco",
    "code1": "OZZ",
    "code2": "GMMZ",
    "lat": 30.939053,
    "lng": -6.909431
  },
  {
    "name": "Cherif El Idrissi",
    "city": "Al Hociema",
    "country": "Morocco",
    "code1": "AHU",
    "code2": "GMTA",
    "lat": 35.177103,
    "lng": -3.839525
  },
  {
    "name": "Saniat Rmel",
    "city": "Tetouan",
    "country": "Morocco",
    "code1": "TTU",
    "code2": "GMTN",
    "lat": 35.594333,
    "lng": -5.320019
  },
  {
    "name": "Ibn Batouta",
    "city": "Tanger",
    "country": "Morocco",
    "code1": "TNG",
    "code2": "GMTT",
    "lat": 35.726917,
    "lng": -5.916889
  },
  {
    "name": "Ziguinchor",
    "city": "Ziguinchor",
    "country": "Senegal",
    "code1": "ZIG",
    "code2": "GOGG",
    "lat": 12.555617,
    "lng": -16.281783
  },
  {
    "name": "Cap Skiring",
    "city": "Cap Skiring",
    "country": "Senegal",
    "code1": "CSK",
    "code2": "GOGS",
    "lat": 12.4102,
    "lng": -16.746125
  },
  {
    "name": "Kaolack",
    "city": "Kaolack",
    "country": "Senegal",
    "code1": "KLC",
    "code2": "GOOK",
    "lat": 14.146881,
    "lng": -16.051297
  },
  {
    "name": "Leopold Sedar Senghor Intl",
    "city": "Dakar",
    "country": "Senegal",
    "code1": "DKR",
    "code2": "GOOY",
    "lat": 14.739708,
    "lng": -17.490225
  },
  {
    "name": "Saint Louis",
    "city": "St. Louis",
    "country": "Senegal",
    "code1": "XLS",
    "code2": "GOSS",
    "lat": 16.050761,
    "lng": -16.463172
  },
  {
    "name": "Bakel",
    "city": "Bakel",
    "country": "Senegal",
    "code1": "BXE",
    "code2": "GOTB",
    "lat": 14.847256,
    "lng": -12.468264
  },
  {
    "name": "Kedougou",
    "city": "Kedougou",
    "country": "Senegal",
    "code1": "KGG",
    "code2": "GOTK",
    "lat": 12.572292,
    "lng": -12.220333
  },
  {
    "name": "Tambacounda",
    "city": "Tambacounda",
    "country": "Senegal",
    "code1": "TUD",
    "code2": "GOTT",
    "lat": 13.736817,
    "lng": -13.653122
  },
  {
    "name": "Aioun El Atrouss",
    "city": "Aioun El Atrouss",
    "country": "Mauritania",
    "code1": "IEO",
    "code2": "GQNA",
    "lat": 16.711294,
    "lng": -9.637883
  },
  {
    "name": "Tidjikja",
    "city": "Tidjikja",
    "country": "Mauritania",
    "code1": "TIY",
    "code2": "GQND",
    "lat": 18.570103,
    "lng": -11.423547
  },
  {
    "name": "Kiffa",
    "city": "Kiffa",
    "country": "Mauritania",
    "code1": "KFA",
    "code2": "GQNF",
    "lat": 16.589983,
    "lng": -11.406208
  },
  {
    "name": "Nema",
    "city": "Nema",
    "country": "Mauritania",
    "code1": "EMN",
    "code2": "GQNI",
    "lat": 16.622,
    "lng": -7.316567
  },
  {
    "name": "Kaedi",
    "city": "Kaedi",
    "country": "Mauritania",
    "code1": "KED",
    "code2": "GQNK",
    "lat": 16.159547,
    "lng": -13.507617
  },
  {
    "name": "Nouakchott",
    "city": "Nouakschott",
    "country": "Mauritania",
    "code1": "NKC",
    "code2": "GQNN",
    "lat": 18.097856,
    "lng": -15.947956
  },
  {
    "name": "Selibady",
    "city": "Selibabi",
    "country": "Mauritania",
    "code1": "SEY",
    "code2": "GQNS",
    "lat": 15.179692,
    "lng": -12.207272
  },
  {
    "name": "Atar",
    "city": "Atar",
    "country": "Mauritania",
    "code1": "ATR",
    "code2": "GQPA",
    "lat": 20.506828,
    "lng": -13.043194
  },
  {
    "name": "Nouadhibou",
    "city": "Nouadhibou",
    "country": "Mauritania",
    "code1": "NDB",
    "code2": "GQPP",
    "lat": 20.933067,
    "lng": -17.029956
  },
  {
    "name": "Bir Moghrein",
    "city": "Bir Moghrein",
    "country": "Mauritania",
    "code1": "",
    "code2": "GQPT",
    "lat": 25.236697,
    "lng": -11.588697
  },
  {
    "name": "Fria",
    "city": "Fira",
    "country": "Guinea",
    "code1": "FIG",
    "code2": "GUFA",
    "lat": 10.350556,
    "lng": -13.569167
  },
  {
    "name": "Faranah",
    "city": "Faranah",
    "country": "Guinea",
    "code1": "FAA",
    "code2": "GUFH",
    "lat": 10.035467,
    "lng": -10.769825
  },
  {
    "name": "Labe",
    "city": "Labe",
    "country": "Guinea",
    "code1": "LEK",
    "code2": "GULB",
    "lat": 11.326058,
    "lng": -12.28685
  },
  {
    "name": "Amilcar Cabral Intl",
    "city": "Amilcar Cabral",
    "country": "Cape Verde",
    "code1": "SID",
    "code2": "GVAC",
    "lat": 16.741389,
    "lng": -22.949444
  },
  {
    "name": "Rabil",
    "city": "Boa Vista",
    "country": "Cape Verde",
    "code1": "BVC",
    "code2": "GVBA",
    "lat": 16.136531,
    "lng": -22.888897
  },
  {
    "name": "Maio",
    "city": "Maio",
    "country": "Cape Verde",
    "code1": "MMO",
    "code2": "GVMA",
    "lat": 15.155928,
    "lng": -23.213703
  },
  {
    "name": "Preguica",
    "city": "Sao Nocolau Island",
    "country": "Cape Verde",
    "code1": "SNE",
    "code2": "GVSN",
    "lat": 16.588356,
    "lng": -24.284656
  },
  {
    "name": "Sao Pedro",
    "city": "Sao Vicente Island",
    "country": "Cape Verde",
    "code1": "VXE",
    "code2": "GVSV",
    "lat": 16.833689,
    "lng": -25.054661
  },
  {
    "name": "Bole Intl",
    "city": "Addis Ababa",
    "country": "Ethiopia",
    "code1": "ADD",
    "code2": "HAAB",
    "lat": 8.977889,
    "lng": 38.799319
  },
  {
    "name": "Lideta",
    "city": "Addis Ababa",
    "country": "Ethiopia",
    "code1": "",
    "code2": "HAAL",
    "lat": 9.003681,
    "lng": 38.726019
  },
  {
    "name": "Arba Minch",
    "city": "Arba Minch",
    "country": "Ethiopia",
    "code1": "AMH",
    "code2": "HAAM",
    "lat": 6.039389,
    "lng": 37.590453
  },
  {
    "name": "Axum",
    "city": "Axum",
    "country": "Ethiopia",
    "code1": "AXU",
    "code2": "HAAX",
    "lat": 14.14675,
    "lng": 38.772833
  },
  {
    "name": "Bahir Dar",
    "city": "Bahar Dar",
    "country": "Ethiopia",
    "code1": "BJR",
    "code2": "HABD",
    "lat": 11.608075,
    "lng": 37.321644
  },
  {
    "name": "Dire Dawa Intl",
    "city": "Dire Dawa",
    "country": "Ethiopia",
    "code1": "DIR",
    "code2": "HADR",
    "lat": 9.6247,
    "lng": 41.854203
  },
  {
    "name": "Gambella",
    "city": "Gambella",
    "country": "Ethiopia",
    "code1": "GMB",
    "code2": "HAGM",
    "lat": 8.128764,
    "lng": 34.563131
  },
  {
    "name": "Gondar",
    "city": "Gondar",
    "country": "Ethiopia",
    "code1": "GDQ",
    "code2": "HAGN",
    "lat": 12.5199,
    "lng": 37.434047
  },
  {
    "name": "South Ari Atoll",
    "city": "Paradies Island",
    "country": "Maldives",
    "code1": "",
    "code2": "ARIA",
    "lat": 3.4833,
    "lng": 72.8369
  },
  {
    "name": "Jimma",
    "city": "Jimma",
    "country": "Ethiopia",
    "code1": "JIM",
    "code2": "HAJM",
    "lat": 7.666094,
    "lng": 36.816639
  },
  {
    "name": "Lalibella",
    "city": "Lalibella",
    "country": "Ethiopia",
    "code1": "LLI",
    "code2": "HALL",
    "lat": 11.975014,
    "lng": 38.979969
  },
  {
    "name": "Makale",
    "city": "Makale",
    "country": "Ethiopia",
    "code1": "MQX",
    "code2": "HAMK",
    "lat": 13.467367,
    "lng": 39.533464
  },
  {
    "name": "Asosa",
    "city": "Asosa",
    "country": "Ethiopia",
    "code1": "ASO",
    "code2": "HASO",
    "lat": 10.01855,
    "lng": 34.586253
  },
  {
    "name": "Bujumbura Intl",
    "city": "Bujumbura",
    "country": "Burundi",
    "code1": "BJM",
    "code2": "HBBA",
    "lat": -3.324019,
    "lng": 29.318519
  },
  {
    "name": "Egal Intl",
    "city": "Hargeisa",
    "country": "Somalia",
    "code1": "HGA",
    "code2": "HCMH",
    "lat": 9.518167,
    "lng": 44.088758
  },
  {
    "name": "Berbera",
    "city": "Berbera",
    "country": "Somalia",
    "code1": "BBO",
    "code2": "HCMI",
    "lat": 10.389167,
    "lng": 44.941106
  },
  {
    "name": "Kisimayu",
    "city": "Kismayu",
    "country": "Somalia",
    "code1": "KMU",
    "code2": "HCMK",
    "lat": -0.377353,
    "lng": 42.459233
  },
  {
    "name": "Dowagiac Municipal Airport",
    "city": "Dowagiac",
    "country": "United States",
    "code1": "C91",
    "code2": "\\N",
    "lat": 41.9929342,
    "lng": -86.1280125
  },
  {
    "name": "Alexandria Intl",
    "city": "Alexandria",
    "country": "Egypt",
    "code1": "ALY",
    "code2": "HEAX",
    "lat": 31.183903,
    "lng": 29.948889
  },
  {
    "name": "Abu Simbel",
    "city": "Abu Simbel",
    "country": "Egypt",
    "code1": "ABS",
    "code2": "HEBL",
    "lat": 22.375953,
    "lng": 31.611722
  },
  {
    "name": "Cairo Intl",
    "city": "Cairo",
    "country": "Egypt",
    "code1": "CAI",
    "code2": "HECA",
    "lat": 30.121944,
    "lng": 31.405556
  },
  {
    "name": "Cairo West",
    "city": "Cairo",
    "country": "Egypt",
    "code1": "",
    "code2": "HECW",
    "lat": 30.116362,
    "lng": 30.915445
  },
  {
    "name": "Hurghada Intl",
    "city": "Hurghada",
    "country": "Egypt",
    "code1": "HRG",
    "code2": "HEGN",
    "lat": 27.178317,
    "lng": 33.799436
  },
  {
    "name": "El Gora",
    "city": "El Gorah",
    "country": "Egypt",
    "code1": "EGR",
    "code2": "HEGR",
    "lat": 31.068975,
    "lng": 34.129194
  },
  {
    "name": "Luxor Intl",
    "city": "Luxor",
    "country": "Egypt",
    "code1": "LXR",
    "code2": "HELX",
    "lat": 25.671028,
    "lng": 32.706583
  },
  {
    "name": "Mersa Matruh",
    "city": "Mersa-matruh",
    "country": "Egypt",
    "code1": "MUH",
    "code2": "HEMM",
    "lat": 31.325356,
    "lng": 27.221689
  },
  {
    "name": "Port Said",
    "city": "Port Said",
    "country": "Egypt",
    "code1": "PSD",
    "code2": "HEPS",
    "lat": 31.279444,
    "lng": 32.24
  },
  {
    "name": "St Catherine Intl",
    "city": "St. Catherine",
    "country": "Egypt",
    "code1": "SKV",
    "code2": "HESC",
    "lat": 28.685278,
    "lng": 34.0625
  },
  {
    "name": "Aswan Intl",
    "city": "Aswan",
    "country": "Egypt",
    "code1": "ASW",
    "code2": "HESN",
    "lat": 23.964356,
    "lng": 32.819975
  },
  {
    "name": "El Tor",
    "city": "El-tor",
    "country": "Egypt",
    "code1": "ELT",
    "code2": "HETR",
    "lat": 28.209028,
    "lng": 33.645517
  },
  {
    "name": "Eldoret Intl",
    "city": "Eldoret",
    "country": "Kenya",
    "code1": "EDL",
    "code2": "HKEL",
    "lat": 0.404458,
    "lng": 35.238928
  },
  {
    "name": "Kakamega",
    "city": "Kakamega",
    "country": "Kenya",
    "code1": "",
    "code2": "HKKG",
    "lat": 0.271342,
    "lng": 34.787297
  },
  {
    "name": "Kisumu",
    "city": "Kisumu",
    "country": "Kenya",
    "code1": "KIS",
    "code2": "HKKI",
    "lat": -0.086139,
    "lng": 34.728892
  },
  {
    "name": "Kitale",
    "city": "Kitale",
    "country": "Kenya",
    "code1": "KTL",
    "code2": "HKKT",
    "lat": 0.971989,
    "lng": 34.958556
  },
  {
    "name": "Cambridge Municipal Airport",
    "city": "Cambridge",
    "country": "United States",
    "code1": "CDI",
    "code2": "\\N",
    "lat": 39.9750278,
    "lng": -81.5775833
  },
  {
    "name": "Lodwar",
    "city": "Lodwar",
    "country": "Kenya",
    "code1": "LOK",
    "code2": "HKLO",
    "lat": 3.121967,
    "lng": 35.608692
  },
  {
    "name": "Lamu Manda",
    "city": "Lamu",
    "country": "Kenya",
    "code1": "LAU",
    "code2": "HKLU",
    "lat": -2.252417,
    "lng": 40.913097
  },
  {
    "name": "Mombasa Moi Intl",
    "city": "Mombasa",
    "country": "Kenya",
    "code1": "MBA",
    "code2": "HKMO",
    "lat": -4.034833,
    "lng": 39.59425
  },
  {
    "name": "Naivasha",
    "city": "Naivasha",
    "country": "Kenya",
    "code1": "",
    "code2": "HKNV",
    "lat": -0.787953,
    "lng": 36.433528
  },
  {
    "name": "Nairobi Wilson",
    "city": "Nairobi",
    "country": "Kenya",
    "code1": "WIL",
    "code2": "HKNW",
    "lat": -1.321719,
    "lng": 36.814833
  },
  {
    "name": "Eastleigh",
    "city": "Nairobi",
    "country": "Kenya",
    "code1": "",
    "code2": "HKRE",
    "lat": -1.277267,
    "lng": 36.862339
  },
  {
    "name": "Wajir",
    "city": "Wajir",
    "country": "Kenya",
    "code1": "WJR",
    "code2": "HKWJ",
    "lat": 1.733239,
    "lng": 40.091606
  },
  {
    "name": "Bu Attifel",
    "city": "Buattifel",
    "country": "Libya",
    "code1": "",
    "code2": "HLFL",
    "lat": 28.795372,
    "lng": 22.080939
  },
  {
    "name": "Warehouse 59e",
    "city": "Giallo",
    "country": "Libya",
    "code1": "",
    "code2": "HLGL",
    "lat": 28.638458,
    "lng": 21.438042
  },
  {
    "name": "Ghat",
    "city": "Ghat",
    "country": "Libya",
    "code1": "GHT",
    "code2": "HLGT",
    "lat": 25.145564,
    "lng": 10.142647
  },
  {
    "name": "Kufra",
    "city": "Kufra",
    "country": "Libya",
    "code1": "AKF",
    "code2": "HLKF",
    "lat": 24.178728,
    "lng": 23.313958
  },
  {
    "name": "Benina",
    "city": "Benghazi",
    "country": "Libya",
    "code1": "BEN",
    "code2": "HLLB",
    "lat": 32.096786,
    "lng": 20.269472
  },
  {
    "name": "Sebha",
    "city": "Sebha",
    "country": "Libya",
    "code1": "SEB",
    "code2": "HLLS",
    "lat": 26.986964,
    "lng": 14.472525
  },
  {
    "name": "Tripoli Intl",
    "city": "Tripoli",
    "country": "Libya",
    "code1": "TIP",
    "code2": "HLLT",
    "lat": 32.663544,
    "lng": 13.159011
  },
  {
    "name": "Marsa Brega",
    "city": "Marsa Brega",
    "country": "Libya",
    "code1": "",
    "code2": "HLMB",
    "lat": 30.378139,
    "lng": 19.576444
  },
  {
    "name": "Ras Lanuf Oil",
    "city": "Ras Lanouf V 40",
    "country": "Libya",
    "code1": "",
    "code2": "HLNF",
    "lat": 30.500013,
    "lng": 18.527161
  },
  {
    "name": "Hon",
    "city": "Hon",
    "country": "Libya",
    "code1": "",
    "code2": "HLON",
    "lat": 29.110106,
    "lng": 15.965567
  },
  {
    "name": "Dahra",
    "city": "Dahra",
    "country": "Libya",
    "code1": "",
    "code2": "HLRA",
    "lat": 29.472567,
    "lng": 17.934936
  },
  {
    "name": "Ghadames East",
    "city": "Ghadames",
    "country": "Libya",
    "code1": "LTD",
    "code2": "HLTD",
    "lat": 30.151695,
    "lng": 9.715305
  },
  {
    "name": "Zella 74",
    "city": "Zella 74",
    "country": "Libya",
    "code1": "",
    "code2": "HLZA",
    "lat": 28.589878,
    "lng": 17.293858
  },
  {
    "name": "Gisenyi",
    "city": "Gisenyi",
    "country": "Rwanda",
    "code1": "GYI",
    "code2": "HRYG",
    "lat": -1.677203,
    "lng": 29.258875
  },
  {
    "name": "Kigali Intl",
    "city": "Kigali",
    "country": "Rwanda",
    "code1": "KGL",
    "code2": "HRYR",
    "lat": -1.968628,
    "lng": 30.13945
  },
  {
    "name": "Kamembe",
    "city": "Kamembe",
    "country": "Rwanda",
    "code1": "KME",
    "code2": "HRZA",
    "lat": -2.462242,
    "lng": 28.90795
  },
  {
    "name": "Dongola",
    "city": "Dongola",
    "country": "Sudan",
    "code1": "DOG",
    "code2": "HSDN",
    "lat": 19.153867,
    "lng": 30.430094
  },
  {
    "name": "Damazin",
    "city": "Damazin",
    "country": "Sudan",
    "code1": "",
    "code2": "HSDZ",
    "lat": 11.785889,
    "lng": 34.336656
  },
  {
    "name": "El Fashir",
    "city": "El Fasher",
    "country": "Sudan",
    "code1": "ELF",
    "code2": "HSFS",
    "lat": 13.614892,
    "lng": 25.32465
  },
  {
    "name": "Kassala",
    "city": "Kassala",
    "country": "Sudan",
    "code1": "KSL",
    "code2": "HSKA",
    "lat": 15.387494,
    "lng": 36.328842
  },
  {
    "name": "Kadugli",
    "city": "Kadugli",
    "country": "Sudan",
    "code1": "",
    "code2": "HSLI",
    "lat": 11.138028,
    "lng": 29.701122
  },
  {
    "name": "El Obeid",
    "city": "El Obeid",
    "country": "Sudan",
    "code1": "EBD",
    "code2": "HSOB",
    "lat": 13.153219,
    "lng": 30.232675
  },
  {
    "name": "Juba",
    "city": "Juba",
    "country": "South Sudan",
    "code1": "JUB",
    "code2": "HSSJ",
    "lat": 4.872006,
    "lng": 31.601117
  },
  {
    "name": "Malakal",
    "city": "Malakal",
    "country": "Sudan",
    "code1": "MAK",
    "code2": "HSSM",
    "lat": 9.558969,
    "lng": 31.652242
  },
  {
    "name": "Khartoum",
    "city": "Khartoum",
    "country": "Sudan",
    "code1": "KRT",
    "code2": "HSSS",
    "lat": 15.589497,
    "lng": 32.553161
  },
  {
    "name": "Arusha",
    "city": "Arusha",
    "country": "Tanzania",
    "code1": "ARK",
    "code2": "HTAR",
    "lat": -3.367794,
    "lng": 36.633333
  },
  {
    "name": "Mwalimu Julius K Nyerere Intl",
    "city": "Dar Es Salaam",
    "country": "Tanzania",
    "code1": "DAR",
    "code2": "HTDA",
    "lat": -6.878111,
    "lng": 39.202625
  },
  {
    "name": "Dodoma",
    "city": "Dodoma",
    "country": "Tanzania",
    "code1": "DOD",
    "code2": "HTDO",
    "lat": -6.170436,
    "lng": 35.752578
  },
  {
    "name": "Iringa",
    "city": "Iringa",
    "country": "Tanzania",
    "code1": "IRI",
    "code2": "HTIR",
    "lat": -7.668633,
    "lng": 35.752114
  },
  {
    "name": "Kilimanjaro Intl",
    "city": "Kilimanjaro",
    "country": "Tanzania",
    "code1": "JRO",
    "code2": "HTKJ",
    "lat": -3.429406,
    "lng": 37.074461
  },
  {
    "name": "Lake Manyara",
    "city": "Lake Manyara",
    "country": "Tanzania",
    "code1": "LKY",
    "code2": "HTLM",
    "lat": -3.376306,
    "lng": 35.818278
  },
  {
    "name": "Mtwara",
    "city": "Mtwara",
    "country": "Tanzania",
    "code1": "MYW",
    "code2": "HTMT",
    "lat": -10.339058,
    "lng": 40.181781
  },
  {
    "name": "Mwanza",
    "city": "Mwanza",
    "country": "Tanzania",
    "code1": "MWZ",
    "code2": "HTMW",
    "lat": -2.444486,
    "lng": 32.932667
  },
  {
    "name": "Pemba",
    "city": "Pemba",
    "country": "Tanzania",
    "code1": "PMA",
    "code2": "HTPE",
    "lat": -5.257264,
    "lng": 39.811417
  },
  {
    "name": "Tanga",
    "city": "Tanga",
    "country": "Tanzania",
    "code1": "TGT",
    "code2": "HTTG",
    "lat": -5.092358,
    "lng": 39.071158
  },
  {
    "name": "Zanzibar",
    "city": "Zanzibar",
    "country": "Tanzania",
    "code1": "ZNZ",
    "code2": "HTZA",
    "lat": -6.222025,
    "lng": 39.224886
  },
  {
    "name": "Entebbe Intl",
    "city": "Entebbe",
    "country": "Uganda",
    "code1": "EBB",
    "code2": "HUEN",
    "lat": 0.042386,
    "lng": 32.443503
  },
  {
    "name": "Dusseldorf Hauptbahnhof",
    "city": "Dusseldorf",
    "country": "Germany",
    "code1": "QDU",
    "code2": "\\N",
    "lat": 51.220278,
    "lng": 6.792778
  },
  {
    "name": "Soroti",
    "city": "Soroti",
    "country": "Uganda",
    "code1": "SRT",
    "code2": "HUSO",
    "lat": 1.727578,
    "lng": 33.622861
  },
  {
    "name": "Tirana Rinas",
    "city": "Tirana",
    "country": "Albania",
    "code1": "TIA",
    "code2": "LATI",
    "lat": 41.414742,
    "lng": 19.720561
  },
  {
    "name": "Burgas",
    "city": "Bourgas",
    "country": "Bulgaria",
    "code1": "BOJ",
    "code2": "LBBG",
    "lat": 42.569583,
    "lng": 27.515236
  },
  {
    "name": "Gorna Oryahovitsa",
    "city": "Gorna Orechovica",
    "country": "Bulgaria",
    "code1": "GOZ",
    "code2": "LBGO",
    "lat": 43.151444,
    "lng": 25.712889
  },
  {
    "name": "Plovdiv",
    "city": "Plovdiv",
    "country": "Bulgaria",
    "code1": "PDV",
    "code2": "LBPD",
    "lat": 42.067806,
    "lng": 24.850833
  },
  {
    "name": "Sofia",
    "city": "Sofia",
    "country": "Bulgaria",
    "code1": "SOF",
    "code2": "LBSF",
    "lat": 42.695194,
    "lng": 23.406167
  },
  {
    "name": "Stara Zagora",
    "city": "Stara Zagora",
    "country": "Bulgaria",
    "code1": "",
    "code2": "LBSZ",
    "lat": 42.376667,
    "lng": 25.655195
  },
  {
    "name": "Varna",
    "city": "Varna",
    "country": "Bulgaria",
    "code1": "VAR",
    "code2": "LBWN",
    "lat": 43.232072,
    "lng": 27.825106
  },
  {
    "name": "Larnaca",
    "city": "Larnaca",
    "country": "Cyprus",
    "code1": "LCA",
    "code2": "LCLK",
    "lat": 34.875117,
    "lng": 33.62485
  },
  {
    "name": "Pafos Intl",
    "city": "Paphos",
    "country": "Cyprus",
    "code1": "PFO",
    "code2": "LCPH",
    "lat": 34.718039,
    "lng": 32.485731
  },
  {
    "name": "Akrotiri",
    "city": "Akrotiri",
    "country": "Cyprus",
    "code1": "AKT",
    "code2": "LCRA",
    "lat": 34.590416,
    "lng": 32.987861
  },
  {
    "name": "Dubrovnik",
    "city": "Dubrovnik",
    "country": "Croatia",
    "code1": "DBV",
    "code2": "LDDU",
    "lat": 42.561353,
    "lng": 18.268244
  },
  {
    "name": "Cepin",
    "city": "Cepin",
    "country": "Croatia",
    "code1": "",
    "code2": "LDOC",
    "lat": 45.542169,
    "lng": 18.636233
  },
  {
    "name": "Osijek",
    "city": "Osijek",
    "country": "Croatia",
    "code1": "OSI",
    "code2": "LDOS",
    "lat": 45.462667,
    "lng": 18.810156
  },
  {
    "name": "Pula",
    "city": "Pula",
    "country": "Croatia",
    "code1": "PUY",
    "code2": "LDPL",
    "lat": 44.893533,
    "lng": 13.922192
  },
  {
    "name": "Grobnicko Polje",
    "city": "Grobnik",
    "country": "Croatia",
    "code1": "",
    "code2": "LDRG",
    "lat": 45.379483,
    "lng": 14.503756
  },
  {
    "name": "Rijeka",
    "city": "Rijeka",
    "country": "Croatia",
    "code1": "RJK",
    "code2": "LDRI",
    "lat": 45.216889,
    "lng": 14.570267
  },
  {
    "name": "Split",
    "city": "Split",
    "country": "Croatia",
    "code1": "SPU",
    "code2": "LDSP",
    "lat": 43.538944,
    "lng": 16.297964
  },
  {
    "name": "Varazdin",
    "city": "Varazdin",
    "country": "Croatia",
    "code1": "",
    "code2": "LDVA",
    "lat": 46.294724,
    "lng": 16.38125
  },
  {
    "name": "Zagreb",
    "city": "Zagreb",
    "country": "Croatia",
    "code1": "ZAG",
    "code2": "LDZA",
    "lat": 45.742931,
    "lng": 16.068778
  },
  {
    "name": "Zadar",
    "city": "Zadar",
    "country": "Croatia",
    "code1": "ZAD",
    "code2": "LDZD",
    "lat": 44.108269,
    "lng": 15.346697
  },
  {
    "name": "Udbina",
    "city": "Udbina",
    "country": "Croatia",
    "code1": "",
    "code2": "LDZU",
    "lat": 44.55761,
    "lng": 15.774361
  },
  {
    "name": "Albacete",
    "city": "Albacete",
    "country": "Spain",
    "code1": "",
    "code2": "LEAB",
    "lat": 38.948528,
    "lng": -1.863517
  },
  {
    "name": "Alicante",
    "city": "Alicante",
    "country": "Spain",
    "code1": "ALC",
    "code2": "LEAL",
    "lat": 38.282169,
    "lng": -0.558156
  },
  {
    "name": "Almeria",
    "city": "Almeria",
    "country": "Spain",
    "code1": "LEI",
    "code2": "LEAM",
    "lat": 36.843936,
    "lng": -2.370097
  },
  {
    "name": "Asturias",
    "city": "Aviles",
    "country": "Spain",
    "code1": "OVD",
    "code2": "LEAS",
    "lat": 43.563567,
    "lng": -6.034622
  },
  {
    "name": "Cordoba",
    "city": "Cordoba",
    "country": "Spain",
    "code1": "ODB",
    "code2": "LEBA",
    "lat": 37.842006,
    "lng": -4.848878
  },
  {
    "name": "Bilbao",
    "city": "Bilbao",
    "country": "Spain",
    "code1": "BIO",
    "code2": "LEBB",
    "lat": 43.301097,
    "lng": -2.910608
  },
  {
    "name": "Barcelona",
    "city": "Barcelona",
    "country": "Spain",
    "code1": "BCN",
    "code2": "LEBL",
    "lat": 41.297078,
    "lng": 2.078464
  },
  {
    "name": "Talavera La Real",
    "city": "Badajoz",
    "country": "Spain",
    "code1": "BJZ",
    "code2": "LEBZ",
    "lat": 38.89125,
    "lng": -6.821333
  },
  {
    "name": "A Coruna",
    "city": "La Coruna",
    "country": "Spain",
    "code1": "LCG",
    "code2": "LECO",
    "lat": 43.302061,
    "lng": -8.377256
  },
  {
    "name": "Armilla",
    "city": "Granada",
    "country": "Spain",
    "code1": "",
    "code2": "LEGA",
    "lat": 37.133222,
    "lng": -3.635694
  },
  {
    "name": "Girona",
    "city": "Gerona",
    "country": "Spain",
    "code1": "GRO",
    "code2": "LEGE",
    "lat": 41.900969,
    "lng": 2.760547
  },
  {
    "name": "Granada",
    "city": "Granada",
    "country": "Spain",
    "code1": "GRX",
    "code2": "LEGR",
    "lat": 37.188731,
    "lng": -3.777356
  },
  {
    "name": "Getafe",
    "city": "Madrid",
    "country": "Spain",
    "code1": "",
    "code2": "LEGT",
    "lat": 40.294139,
    "lng": -3.723833
  },
  {
    "name": "Ibiza",
    "city": "Ibiza",
    "country": "Spain",
    "code1": "IBZ",
    "code2": "LEIB",
    "lat": 38.872858,
    "lng": 1.373117
  },
  {
    "name": "Jerez",
    "city": "Jerez",
    "country": "Spain",
    "code1": "XRY",
    "code2": "LEJR",
    "lat": 36.744622,
    "lng": -6.060111
  },
  {
    "name": "Murcia San Javier",
    "city": "Murcia",
    "country": "Spain",
    "code1": "MJV",
    "code2": "LELC",
    "lat": 37.774972,
    "lng": -0.812389
  },
  {
    "name": "Alexion",
    "city": "Porto Heli",
    "country": "Greece",
    "code1": "PKH",
    "code2": "LGHL",
    "lat": 37.298792,
    "lng": 23.148986
  },
  {
    "name": "Barajas",
    "city": "Madrid",
    "country": "Spain",
    "code1": "MAD",
    "code2": "LEMD",
    "lat": 40.493556,
    "lng": -3.566764
  },
  {
    "name": "Malaga",
    "city": "Malaga",
    "country": "Spain",
    "code1": "AGP",
    "code2": "LEMG",
    "lat": 36.6749,
    "lng": -4.499106
  },
  {
    "name": "Menorca",
    "city": "Menorca",
    "country": "Spain",
    "code1": "MAH",
    "code2": "LEMH",
    "lat": 39.862597,
    "lng": 4.218647
  },
  {
    "name": "Moron Ab",
    "city": "Sevilla",
    "country": "Spain",
    "code1": "OZP",
    "code2": "LEMO",
    "lat": 37.174917,
    "lng": -5.615944
  },
  {
    "name": "Ocana",
    "city": "Ocana",
    "country": "Spain",
    "code1": "",
    "code2": "LEOC",
    "lat": 39.9375,
    "lng": -3.503333
  },
  {
    "name": "Pamplona",
    "city": "Pamplona",
    "country": "Spain",
    "code1": "PNA",
    "code2": "LEPP",
    "lat": 42.770039,
    "lng": -1.646331
  },
  {
    "name": "Alcantarilla",
    "city": "Murcia",
    "country": "Spain",
    "code1": "",
    "code2": "LERI",
    "lat": 37.951111,
    "lng": -1.230319
  },
  {
    "name": "Reus",
    "city": "Reus",
    "country": "Spain",
    "code1": "REU",
    "code2": "LERS",
    "lat": 41.147392,
    "lng": 1.167172
  },
  {
    "name": "Rota Ns",
    "city": "Rota",
    "country": "Spain",
    "code1": "",
    "code2": "LERT",
    "lat": 36.645211,
    "lng": -6.349458
  },
  {
    "name": "Salamanca",
    "city": "Salamanca",
    "country": "Spain",
    "code1": "SLM",
    "code2": "LESA",
    "lat": 40.952117,
    "lng": -5.501986
  },
  {
    "name": "Son Bonet",
    "city": "Son Bonet",
    "country": "Spain",
    "code1": "",
    "code2": "LESB",
    "lat": 39.598889,
    "lng": 2.702778
  },
  {
    "name": "Palma De Mallorca",
    "city": "Palma De Mallorca",
    "country": "Spain",
    "code1": "",
    "code2": "LESJ",
    "lat": 39.551675,
    "lng": 2.738808
  },
  {
    "name": "San Luis",
    "city": "San Luis",
    "country": "Spain",
    "code1": "",
    "code2": "LESL",
    "lat": 39.862222,
    "lng": 4.258333
  },
  {
    "name": "San Sebastian",
    "city": "San Sebastian",
    "country": "Spain",
    "code1": "EAS",
    "code2": "LESO",
    "lat": 43.356519,
    "lng": -1.790611
  },
  {
    "name": "Santiago",
    "city": "Santiago",
    "country": "Spain",
    "code1": "SCQ",
    "code2": "LEST",
    "lat": 42.896333,
    "lng": -8.415144
  },
  {
    "name": "Seo De Urgel",
    "city": "Seo De Urgel",
    "country": "Spain",
    "code1": "LEU",
    "code2": "LESU",
    "lat": 42.338611,
    "lng": 1.409167
  },
  {
    "name": "Torrejon",
    "city": "Madrid",
    "country": "Spain",
    "code1": "TOJ",
    "code2": "LETO",
    "lat": 40.496747,
    "lng": -3.445872
  },
  {
    "name": "Valencia",
    "city": "Valencia",
    "country": "Spain",
    "code1": "VLC",
    "code2": "LEVC",
    "lat": 39.489314,
    "lng": -0.481625
  },
  {
    "name": "Valladolid",
    "city": "Valladolid",
    "country": "Spain",
    "code1": "VLL",
    "code2": "LEVD",
    "lat": 41.706111,
    "lng": -4.851944
  },
  {
    "name": "Cuatro Vientos",
    "city": "Madrid",
    "country": "Spain",
    "code1": "",
    "code2": "LEVS",
    "lat": 40.370678,
    "lng": -3.785144
  },
  {
    "name": "Vitoria",
    "city": "Vitoria",
    "country": "Spain",
    "code1": "VIT",
    "code2": "LEVT",
    "lat": 42.882836,
    "lng": -2.724469
  },
  {
    "name": "Vigo",
    "city": "Vigo",
    "country": "Spain",
    "code1": "VGO",
    "code2": "LEVX",
    "lat": 42.2318,
    "lng": -8.626775
  },
  {
    "name": "Santander",
    "city": "Santander",
    "country": "Spain",
    "code1": "SDR",
    "code2": "LEXJ",
    "lat": 43.427064,
    "lng": -3.820006
  },
  {
    "name": "Zaragoza Ab",
    "city": "Zaragoza",
    "country": "Spain",
    "code1": "ZAZ",
    "code2": "LEZG",
    "lat": 41.666242,
    "lng": -1.041553
  },
  {
    "name": "Sevilla",
    "city": "Sevilla",
    "country": "Spain",
    "code1": "SVQ",
    "code2": "LEZL",
    "lat": 37.418,
    "lng": -5.893106
  },
  {
    "name": "Calais Dunkerque",
    "city": "Calais",
    "country": "France",
    "code1": "CQF",
    "code2": "LFAC",
    "lat": 50.962097,
    "lng": 1.954764
  },
  {
    "name": "Peronne St Quentin",
    "city": "Peronne",
    "country": "France",
    "code1": "",
    "code2": "LFAG",
    "lat": 49.868547,
    "lng": 3.029578
  },
  {
    "name": "Les Loges",
    "city": "Nangis",
    "country": "France",
    "code1": "",
    "code2": "LFAI",
    "lat": 48.596219,
    "lng": 3.006786
  },
  {
    "name": "Couterne",
    "city": "Bagnole-de-l'orne",
    "country": "France",
    "code1": "",
    "code2": "LFAO",
    "lat": 48.545836,
    "lng": -0.387444
  },
  {
    "name": "Bray",
    "city": "Albert",
    "country": "France",
    "code1": "",
    "code2": "LFAQ",
    "lat": 49.971531,
    "lng": 2.697661
  },
  {
    "name": "Le Touquet Paris Plage",
    "city": "Le Tourquet",
    "country": "France",
    "code1": "LTQ",
    "code2": "LFAT",
    "lat": 50.517385,
    "lng": 1.620587
  },
  {
    "name": "Denain",
    "city": "Valenciennes",
    "country": "France",
    "code1": "",
    "code2": "LFAV",
    "lat": 50.325808,
    "lng": 3.461264
  },
  {
    "name": "Glisy",
    "city": "Amiens",
    "country": "France",
    "code1": "",
    "code2": "LFAY",
    "lat": 49.873019,
    "lng": 2.387075
  },
  {
    "name": "La Garenne",
    "city": "Agen",
    "country": "France",
    "code1": "AGF",
    "code2": "LFBA",
    "lat": 44.174721,
    "lng": 0.590556
  },
  {
    "name": "Cazaux",
    "city": "Cazaux",
    "country": "France",
    "code1": "",
    "code2": "LFBC",
    "lat": 44.533333,
    "lng": -1.125
  },
  {
    "name": "Merignac",
    "city": "Bordeaux",
    "country": "France",
    "code1": "BOD",
    "code2": "LFBD",
    "lat": 44.828335,
    "lng": -0.715556
  },
  {
    "name": "Roumaniere",
    "city": "Bergerac",
    "country": "France",
    "code1": "EGC",
    "code2": "LFBE",
    "lat": 44.825279,
    "lng": 0.518611
  },
  {
    "name": "Francazal",
    "city": "Toulouse",
    "country": "France",
    "code1": "",
    "code2": "LFBF",
    "lat": 43.545555,
    "lng": 1.3675
  },
  {
    "name": "Chateaubernard",
    "city": "Cognac",
    "country": "France",
    "code1": "CNG",
    "code2": "LFBG",
    "lat": 45.658333,
    "lng": -0.3175
  },
  {
    "name": "Biard",
    "city": "Poitiers",
    "country": "France",
    "code1": "PIS",
    "code2": "LFBI",
    "lat": 46.587745,
    "lng": 0.306666
  },
  {
    "name": "Montlucon Gueret",
    "city": "Montlucon-gueret",
    "country": "France",
    "code1": "",
    "code2": "LFBK",
    "lat": 46.222644,
    "lng": 2.363964
  },
  {
    "name": "Bellegarde",
    "city": "Limoges",
    "country": "France",
    "code1": "LIG",
    "code2": "LFBL",
    "lat": 45.862778,
    "lng": 1.179444
  },
  {
    "name": "Mont De Marsan",
    "city": "Mont-de-marsan",
    "country": "France",
    "code1": "",
    "code2": "LFBM",
    "lat": 43.911667,
    "lng": -0.5075
  },
  {
    "name": "Souche",
    "city": "Niort",
    "country": "France",
    "code1": "NIT",
    "code2": "LFBN",
    "lat": 46.311303,
    "lng": -0.401503
  },
  {
    "name": "Blagnac",
    "city": "Toulouse",
    "country": "France",
    "code1": "TLS",
    "code2": "LFBO",
    "lat": 43.629075,
    "lng": 1.363819
  },
  {
    "name": "Pau Pyrenees",
    "city": "Pau",
    "country": "France",
    "code1": "PUF",
    "code2": "LFBP",
    "lat": 43.38,
    "lng": -0.418611
  },
  {
    "name": "Lherm",
    "city": "La Rochelle",
    "country": "France",
    "code1": "",
    "code2": "LFBR",
    "lat": 43.448891,
    "lng": 1.263333
  },
  {
    "name": "Lourdes",
    "city": "Tarbes",
    "country": "France",
    "code1": "LDE",
    "code2": "LFBT",
    "lat": 43.178675,
    "lng": -0.006439
  },
  {
    "name": "Brie Champniers",
    "city": "Angouleme",
    "country": "France",
    "code1": "ANG",
    "code2": "LFBU",
    "lat": 45.729247,
    "lng": 0.221456
  },
  {
    "name": "La Roche",
    "city": "Brive",
    "country": "France",
    "code1": "BVE",
    "code2": "LFSL",
    "lat": 45.150833,
    "lng": 1.469167
  },
  {
    "name": "Bassillac",
    "city": "Perigueux",
    "country": "France",
    "code1": "PGX",
    "code2": "LFBX",
    "lat": 45.198055,
    "lng": 0.815556
  },
  {
    "name": "Anglet",
    "city": "Biarritz-bayonne",
    "country": "France",
    "code1": "BIQ",
    "code2": "LFBZ",
    "lat": 43.468419,
    "lng": -1.523325
  },
  {
    "name": "Lalbenque",
    "city": "Cahors",
    "country": "France",
    "code1": "",
    "code2": "LFCC",
    "lat": 44.351387,
    "lng": 1.475278
  },
  {
    "name": "Antichan",
    "city": "St.-girons",
    "country": "France",
    "code1": "",
    "code2": "LFCG",
    "lat": 43.007764,
    "lng": 1.10315
  },
  {
    "name": "La Teste De Buch",
    "city": "Arcachon",
    "country": "France",
    "code1": "XAC",
    "code2": "LFCH",
    "lat": 44.59639,
    "lng": -1.110833
  },
  {
    "name": "Le Sequestre",
    "city": "Albi",
    "country": "France",
    "code1": "LBI",
    "code2": "LFCI",
    "lat": 43.913887,
    "lng": 2.113056
  },
  {
    "name": "Mazamet",
    "city": "Castres",
    "country": "France",
    "code1": "DCM",
    "code2": "LFCK",
    "lat": 43.55625,
    "lng": 2.289183
  },
  {
    "name": "Lasbordes",
    "city": "Toulouse",
    "country": "France",
    "code1": "",
    "code2": "LFCL",
    "lat": 43.586113,
    "lng": 1.499167
  },
  {
    "name": "Larzac",
    "city": "Millau",
    "country": "France",
    "code1": "",
    "code2": "LFCM",
    "lat": 43.989342,
    "lng": 3.183
  },
  {
    "name": "Montdragon",
    "city": "Graulhet",
    "country": "France",
    "code1": "",
    "code2": "LFCQ",
    "lat": 43.771111,
    "lng": 2.010833
  },
  {
    "name": "Marcillac",
    "city": "Rodez",
    "country": "France",
    "code1": "RDZ",
    "code2": "LFCR",
    "lat": 44.407869,
    "lng": 2.482672
  },
  {
    "name": "Thalamy",
    "city": "Ussel",
    "country": "France",
    "code1": "",
    "code2": "LFCU",
    "lat": 45.534721,
    "lng": 2.423889
  },
  {
    "name": "Villeneuve Sur Lot",
    "city": "Villeneuve-sur-lot",
    "country": "France",
    "code1": "",
    "code2": "LFCW",
    "lat": 44.396946,
    "lng": 0.758889
  },
  {
    "name": "Medis",
    "city": "Royan",
    "country": "France",
    "code1": "RYN",
    "code2": "LFCY",
    "lat": 45.628056,
    "lng": -0.9725
  },
  {
    "name": "Mimizan",
    "city": "Mimizan",
    "country": "France",
    "code1": "",
    "code2": "LFCZ",
    "lat": 44.146111,
    "lng": -1.174444
  },
  {
    "name": "Aire Sur L Adour",
    "city": "Aire-sur-l'adour",
    "country": "France",
    "code1": "",
    "code2": "LFDA",
    "lat": 43.709444,
    "lng": -0.245278
  },
  {
    "name": "Montauban",
    "city": "Montauban",
    "country": "France",
    "code1": "",
    "code2": "LFDB",
    "lat": 44.025694,
    "lng": 1.378042
  },
  {
    "name": "Lamothe",
    "city": "Auch",
    "country": "France",
    "code1": "",
    "code2": "LFDH",
    "lat": 43.687778,
    "lng": 0.601667
  },
  {
    "name": "Artigues De Lussac",
    "city": "Libourne",
    "country": "France",
    "code1": "",
    "code2": "LFDI",
    "lat": 44.982498,
    "lng": -0.134722
  },
  {
    "name": "Les Pujols",
    "city": "Pamiers",
    "country": "France",
    "code1": "",
    "code2": "LFDJ",
    "lat": 43.090556,
    "lng": 1.695833
  },
  {
    "name": "Virazeil",
    "city": "Marmande",
    "country": "France",
    "code1": "",
    "code2": "LFDM",
    "lat": 44.498919,
    "lng": 0.200514
  },
  {
    "name": "St Agnant",
    "city": "Rochefort",
    "country": "France",
    "code1": "RCO",
    "code2": "LFDN",
    "lat": 45.887779,
    "lng": -0.983056
  },
  {
    "name": "Pontivy",
    "city": "Pontivy",
    "country": "France",
    "code1": "",
    "code2": "LFED",
    "lat": 48.056789,
    "lng": -2.921244
  },
  {
    "name": "Aubigny Sur Nere",
    "city": "Aubigny-sur-nere",
    "country": "France",
    "code1": "",
    "code2": "LFEH",
    "lat": 47.474167,
    "lng": 2.393055
  },
  {
    "name": "Scaer",
    "city": "Guiscriff-scaer",
    "country": "France",
    "code1": "",
    "code2": "LFES",
    "lat": 48.052508,
    "lng": -3.664717
  },
  {
    "name": "Ancenis",
    "city": "Ancenis",
    "country": "France",
    "code1": "",
    "code2": "LFFI",
    "lat": 47.408056,
    "lng": -1.1775
  },
  {
    "name": "Brienne Le Chateau",
    "city": "Brienne-le Chateau",
    "country": "France",
    "code1": "",
    "code2": "LFFN",
    "lat": 48.429764,
    "lng": 4.482222
  },
  {
    "name": "Houssen",
    "city": "Colmar",
    "country": "France",
    "code1": "CMR",
    "code2": "LFGA",
    "lat": 48.109853,
    "lng": 7.359011
  },
  {
    "name": "Challanges",
    "city": "Beaune",
    "country": "France",
    "code1": "",
    "code2": "LFGF",
    "lat": 47.005886,
    "lng": 4.893425
  },
  {
    "name": "Tavaux",
    "city": "Dole",
    "country": "France",
    "code1": "DLE",
    "code2": "LFGJ",
    "lat": 47.039014,
    "lng": 5.42725
  },
  {
    "name": "Joigny",
    "city": "Joigny",
    "country": "France",
    "code1": "",
    "code2": "LFGK",
    "lat": 47.992222,
    "lng": 3.392222
  },
  {
    "name": "Le Rozelier",
    "city": "Verdun",
    "country": "France",
    "code1": "",
    "code2": "LFGW",
    "lat": 49.122383,
    "lng": 5.469047
  },
  {
    "name": "Ardeche Meridionale",
    "city": "Aubenas-vals-lanas",
    "country": "France",
    "code1": "OBS",
    "code2": "LFHO",
    "lat": 44.544236,
    "lng": 4.372192
  },
  {
    "name": "Loudes",
    "city": "Le Puy",
    "country": "France",
    "code1": "LPY",
    "code2": "LFHP",
    "lat": 45.080689,
    "lng": 3.762889
  },
  {
    "name": "Coltines",
    "city": "St.-flour",
    "country": "France",
    "code1": "",
    "code2": "LFHQ",
    "lat": 45.076389,
    "lng": 2.993611
  },
  {
    "name": "Ceyzeriat",
    "city": "Bourg",
    "country": "France",
    "code1": "XBK",
    "code2": "LFHS",
    "lat": 46.20089,
    "lng": 5.292028
  },
  {
    "name": "Tarare",
    "city": "Vilefrance",
    "country": "France",
    "code1": "XVF",
    "code2": "LFHV",
    "lat": 45.901947,
    "lng": 4.634906
  },
  {
    "name": "Montbeugny",
    "city": "Moulins",
    "country": "France",
    "code1": "XMU",
    "code2": "LFHY",
    "lat": 46.534581,
    "lng": 3.423725
  },
  {
    "name": "Belmont",
    "city": "St.-afrique-belmont",
    "country": "France",
    "code1": "",
    "code2": "LFIF",
    "lat": 43.823334,
    "lng": 2.745278
  },
  {
    "name": "Cassagnes Begonhes",
    "city": "Cassagnes-beghones",
    "country": "France",
    "code1": "",
    "code2": "LFIG",
    "lat": 44.177776,
    "lng": 2.515
  },
  {
    "name": "Metz Nancy Lorraine",
    "city": "Metz",
    "country": "France",
    "code1": "ETZ",
    "code2": "LFJL",
    "lat": 48.982142,
    "lng": 6.251319
  },
  {
    "name": "Poretta",
    "city": "Bastia",
    "country": "France",
    "code1": "BIA",
    "code2": "LFKB",
    "lat": 42.552664,
    "lng": 9.483731
  },
  {
    "name": "Saint Catherine",
    "city": "Calvi",
    "country": "France",
    "code1": "CLY",
    "code2": "LFKC",
    "lat": 42.530753,
    "lng": 8.793189
  },
  {
    "name": "Sud Corse",
    "city": "Figari",
    "country": "France",
    "code1": "FSC",
    "code2": "LFKF",
    "lat": 41.500557,
    "lng": 9.097777
  },
  {
    "name": "Campo Dell Oro",
    "city": "Ajaccio",
    "country": "France",
    "code1": "AJA",
    "code2": "LFKJ",
    "lat": 41.923637,
    "lng": 8.802917
  },
  {
    "name": "Propriano",
    "city": "Propriano",
    "country": "France",
    "code1": "",
    "code2": "LFKO",
    "lat": 41.660558,
    "lng": 8.889747
  },
  {
    "name": "Solenzara",
    "city": "Solenzara",
    "country": "France",
    "code1": "SOZ",
    "code2": "LFKS",
    "lat": 41.924416,
    "lng": 9.406
  },
  {
    "name": "Corte",
    "city": "Corte",
    "country": "France",
    "code1": "",
    "code2": "LFKT",
    "lat": 42.29361,
    "lng": 9.193055
  },
  {
    "name": "Branches",
    "city": "Auxerre",
    "country": "France",
    "code1": "AUF",
    "code2": "LFLA",
    "lat": 47.850193,
    "lng": 3.497111
  },
  {
    "name": "Aix Les Bains",
    "city": "Chambery",
    "country": "France",
    "code1": "CMF",
    "code2": "LFLB",
    "lat": 45.63805,
    "lng": 5.880225
  },
  {
    "name": "Auvergne",
    "city": "Clermont-Ferrand",
    "country": "France",
    "code1": "CFE",
    "code2": "LFLC",
    "lat": 45.786661,
    "lng": 3.169169
  },
  {
    "name": "Bourges",
    "city": "Bourges",
    "country": "France",
    "code1": "BOU",
    "code2": "LFLD",
    "lat": 47.058056,
    "lng": 2.370278
  },
  {
    "name": "Challes Les Eaux",
    "city": "Chambery",
    "country": "France",
    "code1": "",
    "code2": "LFLE",
    "lat": 45.56105,
    "lng": 5.975761
  },
  {
    "name": "Champforgeuil",
    "city": "Chalon",
    "country": "France",
    "code1": "XCD",
    "code2": "LFLH",
    "lat": 46.826108,
    "lng": 4.817633
  },
  {
    "name": "Annemasse",
    "city": "Annemasse",
    "country": "France",
    "code1": "QNJ",
    "code2": "LFLI",
    "lat": 46.191972,
    "lng": 6.268386
  },
  {
    "name": "Saint Exupery",
    "city": "Lyon",
    "country": "France",
    "code1": "LYS",
    "code2": "LFLL",
    "lat": 45.726387,
    "lng": 5.090833
  },
  {
    "name": "Charnay",
    "city": "Macon",
    "country": "France",
    "code1": "QNX",
    "code2": "LFLM",
    "lat": 46.295103,
    "lng": 4.795767
  },
  {
    "name": "Saint Yan",
    "city": "St.-yan",
    "country": "France",
    "code1": "",
    "code2": "LFLN",
    "lat": 46.412536,
    "lng": 4.013264
  },
  {
    "name": "Renaison",
    "city": "Roanne",
    "country": "France",
    "code1": "RNE",
    "code2": "LFLO",
    "lat": 46.058334,
    "lng": 4.001389
  },
  {
    "name": "Meythet",
    "city": "Annecy",
    "country": "France",
    "code1": "NCY",
    "code2": "LFLP",
    "lat": 45.929233,
    "lng": 6.098764
  },
  {
    "name": "Saint Geoirs",
    "city": "Grenoble",
    "country": "France",
    "code1": "GNB",
    "code2": "LFLS",
    "lat": 45.362944,
    "lng": 5.329375
  },
  {
    "name": "Domerat",
    "city": "Montlucon",
    "country": "France",
    "code1": "MCU",
    "code2": "LFLT",
    "lat": 46.352525,
    "lng": 2.570486
  },
  {
    "name": "Chabeuil",
    "city": "Valence",
    "country": "France",
    "code1": "VAF",
    "code2": "LFLU",
    "lat": 44.921594,
    "lng": 4.9699
  },
  {
    "name": "Charmeil",
    "city": "Vichy",
    "country": "France",
    "code1": "VHY",
    "code2": "LFLV",
    "lat": 46.169689,
    "lng": 3.403736
  },
  {
    "name": "Aurillac",
    "city": "Aurillac",
    "country": "France",
    "code1": "AUR",
    "code2": "LFLW",
    "lat": 44.891388,
    "lng": 2.421944
  },
  {
    "name": "Deols",
    "city": "Chateauroux",
    "country": "France",
    "code1": "CHR",
    "code2": "LFLX",
    "lat": 46.862194,
    "lng": 1.730667
  },
  {
    "name": "Bron",
    "city": "Lyon",
    "country": "France",
    "code1": "LYN",
    "code2": "LFLY",
    "lat": 45.727172,
    "lng": 4.944275
  },
  {
    "name": "Aix Les Milles",
    "city": "Aix-les-milles",
    "country": "France",
    "code1": "QXB",
    "code2": "LFMA",
    "lat": 43.505554,
    "lng": 5.367778
  },
  {
    "name": "Le Cannet",
    "city": "Le Luc",
    "country": "France",
    "code1": "",
    "code2": "LFMC",
    "lat": 43.384672,
    "lng": 6.387139
  },
  {
    "name": "Mandelieu",
    "city": "Cannes",
    "country": "France",
    "code1": "CEQ",
    "code2": "LFMD",
    "lat": 43.54205,
    "lng": 6.953478
  },
  {
    "name": "Boutheon",
    "city": "St-Etienne",
    "country": "France",
    "code1": "EBU",
    "code2": "LFMH",
    "lat": 45.540554,
    "lng": 4.296389
  },
  {
    "name": "Le Tube",
    "city": "Istres",
    "country": "France",
    "code1": "",
    "code2": "LFMI",
    "lat": 43.522736,
    "lng": 4.923844
  },
  {
    "name": "Salvaza",
    "city": "Carcassonne",
    "country": "France",
    "code1": "CCF",
    "code2": "LFMK",
    "lat": 43.215978,
    "lng": 2.306317
  },
  {
    "name": "Provence",
    "city": "Marseille",
    "country": "France",
    "code1": "MRS",
    "code2": "LFML",
    "lat": 43.435555,
    "lng": 5.213611
  },
  {
    "name": "Cote D\\\\'Azur",
    "city": "Nice",
    "country": "France",
    "code1": "NCE",
    "code2": "LFMN",
    "lat": 43.658411,
    "lng": 7.215872
  },
  {
    "name": "Caritat",
    "city": "Orange",
    "country": "France",
    "code1": "",
    "code2": "LFMO",
    "lat": 44.140481,
    "lng": 4.866717
  },
  {
    "name": "Rivesaltes",
    "city": "Perpignan",
    "country": "France",
    "code1": "PGF",
    "code2": "LFMP",
    "lat": 42.740442,
    "lng": 2.870667
  },
  {
    "name": "Le Castellet",
    "city": "Le Castellet",
    "country": "France",
    "code1": "CTT",
    "code2": "LFMQ",
    "lat": 43.252506,
    "lng": 5.785189
  },
  {
    "name": "Deaux",
    "city": "Ales",
    "country": "France",
    "code1": "",
    "code2": "LFMS",
    "lat": 44.069656,
    "lng": 4.142122
  },
  {
    "name": "Mediterranee",
    "city": "Montpellier",
    "country": "France",
    "code1": "MPL",
    "code2": "LFMT",
    "lat": 43.576194,
    "lng": 3.963014
  },
  {
    "name": "Vias",
    "city": "Beziers",
    "country": "France",
    "code1": "BZR",
    "code2": "LFMU",
    "lat": 43.323522,
    "lng": 3.353903
  },
  {
    "name": "Caumont",
    "city": "Avignon",
    "country": "France",
    "code1": "AVN",
    "code2": "LFMV",
    "lat": 43.9073,
    "lng": 4.901831
  },
  {
    "name": "Salon",
    "city": "Salon",
    "country": "France",
    "code1": "",
    "code2": "LFMY",
    "lat": 43.606415,
    "lng": 5.10925
  },
  {
    "name": "Lezignan Corbieres",
    "city": "Lezignan-corbieres",
    "country": "France",
    "code1": "",
    "code2": "LFMZ",
    "lat": 43.175835,
    "lng": 2.734167
  },
  {
    "name": "Brenoux",
    "city": "Mende",
    "country": "France",
    "code1": "MEN",
    "code2": "LFNB",
    "lat": 44.502108,
    "lng": 3.532819
  },
  {
    "name": "Carpentras",
    "city": "Carpentras",
    "country": "France",
    "code1": "",
    "code2": "LFNH",
    "lat": 44.029847,
    "lng": 5.078058
  },
  {
    "name": "Avord",
    "city": "Avord",
    "country": "France",
    "code1": "",
    "code2": "LFOA",
    "lat": 47.053333,
    "lng": 2.6325
  },
  {
    "name": "Tille",
    "city": "Beauvais",
    "country": "France",
    "code1": "BVA",
    "code2": "LFOB",
    "lat": 49.454444,
    "lng": 2.112778
  },
  {
    "name": "Chateaudun",
    "city": "Chateaudun",
    "country": "France",
    "code1": "",
    "code2": "LFOC",
    "lat": 48.058142,
    "lng": 1.376625
  },
  {
    "name": "St Florent",
    "city": "Saumur",
    "country": "France",
    "code1": "",
    "code2": "LFOD",
    "lat": 47.256839,
    "lng": -0.115142
  },
  {
    "name": "Fauville",
    "city": "Evreux",
    "country": "France",
    "code1": "",
    "code2": "LFOE",
    "lat": 49.028669,
    "lng": 1.219864
  },
  {
    "name": "Octeville",
    "city": "Le Havre",
    "country": "France",
    "code1": "LEH",
    "code2": "LFOH",
    "lat": 49.533889,
    "lng": 0.088056
  },
  {
    "name": "Abbeville",
    "city": "Abbeville",
    "country": "France",
    "code1": "",
    "code2": "LFOI",
    "lat": 50.143492,
    "lng": 1.831892
  },
  {
    "name": "Bricy",
    "city": "Orleans",
    "country": "France",
    "code1": "ORE",
    "code2": "LFOJ",
    "lat": 47.987778,
    "lng": 1.760556
  },
  {
    "name": "Vatry",
    "city": "Chalons",
    "country": "France",
    "code1": "XCR",
    "code2": "LFOK",
    "lat": 48.776072,
    "lng": 4.184492
  },
  {
    "name": "Vallee De Seine",
    "city": "Rouen",
    "country": "France",
    "code1": "URO",
    "code2": "LFOP",
    "lat": 49.384172,
    "lng": 1.1748
  },
  {
    "name": "Val De Loire",
    "city": "Tours",
    "country": "France",
    "code1": "TUF",
    "code2": "LFOT",
    "lat": 47.432222,
    "lng": 0.727606
  },
  {
    "name": "Le Pontreau",
    "city": "Cholet",
    "country": "France",
    "code1": "CET",
    "code2": "LFOU",
    "lat": 47.082136,
    "lng": -0.877064
  },
  {
    "name": "Entrammes",
    "city": "Laval",
    "country": "France",
    "code1": "LVA",
    "code2": "LFOV",
    "lat": 48.031361,
    "lng": -0.742986
  },
  {
    "name": "St Denis De L Hotel",
    "city": "Orleans",
    "country": "France",
    "code1": "",
    "code2": "LFOZ",
    "lat": 47.896946,
    "lng": 2.163333
  },
  {
    "name": "Le Bourget",
    "city": "Paris",
    "country": "France",
    "code1": "LBG",
    "code2": "LFPB",
    "lat": 48.969444,
    "lng": 2.441389
  },
  {
    "name": "Creil",
    "city": "Creil",
    "country": "France",
    "code1": "CSF",
    "code2": "LFPC",
    "lat": 49.253547,
    "lng": 2.519139
  },
  {
    "name": "Charles De Gaulle",
    "city": "Paris",
    "country": "France",
    "code1": "CDG",
    "code2": "LFPG",
    "lat": 49.012779,
    "lng": 2.55
  },
  {
    "name": "Voisins",
    "city": "Coulommiers",
    "country": "France",
    "code1": "",
    "code2": "LFPK",
    "lat": 48.837653,
    "lng": 3.016117
  },
  {
    "name": "Villaroche",
    "city": "Melun",
    "country": "France",
    "code1": "",
    "code2": "LFPM",
    "lat": 48.604725,
    "lng": 2.671119
  },
  {
    "name": "Toussus Le Noble",
    "city": "Toussous-le-noble",
    "country": "France",
    "code1": "TNF",
    "code2": "LFPN",
    "lat": 48.751922,
    "lng": 2.106189
  },
  {
    "name": "Orly",
    "city": "Paris",
    "country": "France",
    "code1": "ORY",
    "code2": "LFPO",
    "lat": 48.725278,
    "lng": 2.359444
  },
  {
    "name": "Cormeilles En Vexin",
    "city": "Pontoise",
    "country": "France",
    "code1": "POX",
    "code2": "LFPT",
    "lat": 49.096647,
    "lng": 2.040833
  },
  {
    "name": "Velizy",
    "city": "Villacoublay",
    "country": "France",
    "code1": "",
    "code2": "LFPV",
    "lat": 48.774406,
    "lng": 2.201536
  },
  {
    "name": "Prunay",
    "city": "Reims",
    "country": "France",
    "code1": "",
    "code2": "LFQA",
    "lat": 49.208689,
    "lng": 4.156581
  },
  {
    "name": "Barberey",
    "city": "Troyes",
    "country": "France",
    "code1": "QYR",
    "code2": "LFQB",
    "lat": 48.322136,
    "lng": 4.016703
  },
  {
    "name": "Croismare",
    "city": "Luneville",
    "country": "France",
    "code1": "",
    "code2": "LFQC",
    "lat": 48.593275,
    "lng": 6.543456
  },
  {
    "name": "Rouvres",
    "city": "Etain",
    "country": "France",
    "code1": "",
    "code2": "LFQE",
    "lat": 49.226917,
    "lng": 5.672219
  },
  {
    "name": "Bellevue",
    "city": "Autun",
    "country": "France",
    "code1": "",
    "code2": "LFQF",
    "lat": 46.967283,
    "lng": 4.260572
  },
  {
    "name": "Fourchambault",
    "city": "Nevers",
    "country": "France",
    "code1": "NVS",
    "code2": "LFQG",
    "lat": 47.002625,
    "lng": 3.113333
  },
  {
    "name": "Epinoy",
    "city": "Cambrai",
    "country": "France",
    "code1": "",
    "code2": "LFQI",
    "lat": 50.221814,
    "lng": 3.154236
  },
  {
    "name": "Elesmes",
    "city": "Maubeuge",
    "country": "France",
    "code1": "",
    "code2": "LFQJ",
    "lat": 50.310467,
    "lng": 4.033119
  },
  {
    "name": "La Veze",
    "city": "Besancon-la-veze",
    "country": "France",
    "code1": "",
    "code2": "LFQM",
    "lat": 47.206567,
    "lng": 6.083681
  },
  {
    "name": "Bourscheid",
    "city": "Phalsbourg",
    "country": "France",
    "code1": "",
    "code2": "LFQP",
    "lat": 48.76625,
    "lng": 7.200519
  },
  {
    "name": "Lesquin",
    "city": "Lille",
    "country": "France",
    "code1": "LIL",
    "code2": "LFQQ",
    "lat": 50.561942,
    "lng": 3.089444
  },
  {
    "name": "Calonne",
    "city": "Merville",
    "country": "France",
    "code1": "",
    "code2": "LFQT",
    "lat": 50.618394,
    "lng": 2.642242
  },
  {
    "name": "Charleville Mezieres",
    "city": "Charleville",
    "country": "France",
    "code1": "",
    "code2": "LFQV",
    "lat": 49.783942,
    "lng": 4.647078
  },
  {
    "name": "Frotey",
    "city": "Vesoul-frotey",
    "country": "France",
    "code1": "",
    "code2": "LFQW",
    "lat": 47.637611,
    "lng": 6.203922
  },
  {
    "name": "Guipavas",
    "city": "Brest",
    "country": "France",
    "code1": "BES",
    "code2": "LFRB",
    "lat": 48.447911,
    "lng": -4.418539
  },
  {
    "name": "Maupertus",
    "city": "Cherbourg",
    "country": "France",
    "code1": "CER",
    "code2": "LFRC",
    "lat": 49.650106,
    "lng": -1.470281
  },
  {
    "name": "Pleurtuit",
    "city": "Dinard",
    "country": "France",
    "code1": "DNR",
    "code2": "LFRD",
    "lat": 48.587683,
    "lng": -2.079958
  },
  {
    "name": "Escoublac",
    "city": "La Baule",
    "country": "France",
    "code1": "",
    "code2": "LFRE",
    "lat": 47.289444,
    "lng": -2.346389
  },
  {
    "name": "Granville",
    "city": "Granville",
    "country": "France",
    "code1": "GFR",
    "code2": "LFRF",
    "lat": 48.883057,
    "lng": -1.564167
  },
  {
    "name": "St Gatien",
    "city": "Deauville",
    "country": "France",
    "code1": "DOL",
    "code2": "LFRG",
    "lat": 49.365339,
    "lng": 0.154306
  },
  {
    "name": "Lann Bihoue",
    "city": "Lorient",
    "country": "France",
    "code1": "LRT",
    "code2": "LFRH",
    "lat": 47.760555,
    "lng": -3.44
  },
  {
    "name": "Les Ajoncs",
    "city": "La Roche-sur-yon",
    "country": "France",
    "code1": "EDM",
    "code2": "LFRI",
    "lat": 46.701944,
    "lng": -1.378625
  },
  {
    "name": "Landivisiau",
    "city": "Landivisiau",
    "country": "France",
    "code1": "",
    "code2": "LFRJ",
    "lat": 48.530258,
    "lng": -4.151642
  },
  {
    "name": "Carpiquet",
    "city": "Caen",
    "country": "France",
    "code1": "CFR",
    "code2": "LFRK",
    "lat": 49.173333,
    "lng": -0.45
  },
  {
    "name": "Poulmic",
    "city": "Lanvedoc",
    "country": "France",
    "code1": "",
    "code2": "LFRL",
    "lat": 48.281703,
    "lng": -4.445017
  },
  {
    "name": "Arnage",
    "city": "Le Mans",
    "country": "France",
    "code1": "LME",
    "code2": "LFRM",
    "lat": 47.948611,
    "lng": 0.201667
  },
  {
    "name": "St Jacques",
    "city": "Rennes",
    "country": "France",
    "code1": "RNS",
    "code2": "LFRN",
    "lat": 48.069508,
    "lng": -1.734794
  },
  {
    "name": "Lannion",
    "city": "Lannion",
    "country": "France",
    "code1": "LAI",
    "code2": "LFRO",
    "lat": 48.754378,
    "lng": -3.471656
  },
  {
    "name": "Pluguffan",
    "city": "Quimper",
    "country": "France",
    "code1": "UIP",
    "code2": "LFRQ",
    "lat": 47.974981,
    "lng": -4.167786
  },
  {
    "name": "Nantes Atlantique",
    "city": "Nantes",
    "country": "France",
    "code1": "NTE",
    "code2": "LFRS",
    "lat": 47.153189,
    "lng": -1.610725
  },
  {
    "name": "Armor",
    "city": "St.-brieuc Armor",
    "country": "France",
    "code1": "SBK",
    "code2": "LFRT",
    "lat": 48.537777,
    "lng": -2.854445
  },
  {
    "name": "Ploujean",
    "city": "Morlaix",
    "country": "France",
    "code1": "MXN",
    "code2": "LFRU",
    "lat": 48.603222,
    "lng": -3.815783
  },
  {
    "name": "Meucon",
    "city": "Vannes",
    "country": "France",
    "code1": "VNE",
    "code2": "LFRV",
    "lat": 47.723303,
    "lng": -2.718561
  },
  {
    "name": "Montoir",
    "city": "St.-nazaire",
    "country": "France",
    "code1": "SNR",
    "code2": "LFRZ",
    "lat": 47.312189,
    "lng": -2.149181
  },
  {
    "name": "Bale Mulhouse",
    "city": "Mulhouse",
    "country": "France",
    "code1": "MLH",
    "code2": "LFSB",
    "lat": 47.589583,
    "lng": 7.529914
  },
  {
    "name": "Meyenheim",
    "city": "Colmar",
    "country": "France",
    "code1": "",
    "code2": "LFSC",
    "lat": 47.921978,
    "lng": 7.399669
  },
  {
    "name": "Longvic",
    "city": "Dijon",
    "country": "France",
    "code1": "DIJ",
    "code2": "LFSD",
    "lat": 47.26889,
    "lng": 5.09
  },
  {
    "name": "Frescaty",
    "city": "Metz",
    "country": "France",
    "code1": "MZM",
    "code2": "LFSF",
    "lat": 49.071667,
    "lng": 6.131667
  },
  {
    "name": "Mirecourt",
    "city": "Epinal",
    "country": "France",
    "code1": "EPL",
    "code2": "LFSG",
    "lat": 48.324961,
    "lng": 6.069983
  },
  {
    "name": "Haguenau",
    "city": "Haguenau",
    "country": "France",
    "code1": "",
    "code2": "LFSH",
    "lat": 48.794331,
    "lng": 7.817613
  },
  {
    "name": "Robinson",
    "city": "St.-dizier",
    "country": "France",
    "code1": "",
    "code2": "LFSI",
    "lat": 48.636008,
    "lng": 4.899417
  },
  {
    "name": "Courcelles",
    "city": "Montbeliard",
    "country": "France",
    "code1": "",
    "code2": "LFSM",
    "lat": 47.487,
    "lng": 6.790536
  },
  {
    "name": "Essey",
    "city": "Nancy",
    "country": "France",
    "code1": "ENC",
    "code2": "LFSN",
    "lat": 48.692069,
    "lng": 6.230458
  },
  {
    "name": "Ochey",
    "city": "Nancy",
    "country": "France",
    "code1": "",
    "code2": "LFSO",
    "lat": 48.583056,
    "lng": 5.955
  },
  {
    "name": "Pontarlier",
    "city": "Pontarlier",
    "country": "France",
    "code1": "",
    "code2": "LFSP",
    "lat": 46.903958,
    "lng": 6.327367
  },
  {
    "name": "Champagne",
    "city": "Reims",
    "country": "France",
    "code1": "RHE",
    "code2": "LFSR",
    "lat": 49.31,
    "lng": 4.05
  },
  {
    "name": "Entzheim",
    "city": "Strasbourg",
    "country": "France",
    "code1": "SXB",
    "code2": "LFST",
    "lat": 48.538319,
    "lng": 7.628233
  },
  {
    "name": "Saint Sauveur",
    "city": "Luxeuil",
    "country": "France",
    "code1": "",
    "code2": "LFSX",
    "lat": 47.783131,
    "lng": 6.364056
  },
  {
    "name": "Pierrefeu",
    "city": "Cuers",
    "country": "France",
    "code1": "",
    "code2": "LFTF",
    "lat": 43.247803,
    "lng": 6.126697
  },
  {
    "name": "Le Palyvestre",
    "city": "Hyeres",
    "country": "France",
    "code1": "TLN",
    "code2": "LFTH",
    "lat": 43.0973,
    "lng": 6.14603
  },
  {
    "name": "Garons",
    "city": "Nimes",
    "country": "France",
    "code1": "FNI",
    "code2": "LFTW",
    "lat": 43.757444,
    "lng": 4.416347
  },
  {
    "name": "Miquelon",
    "city": "Miquelon",
    "country": "Saint Pierre and Miquelon",
    "code1": "MQC",
    "code2": "LFVM",
    "lat": 47.095472,
    "lng": -56.380278
  },
  {
    "name": "St Pierre",
    "city": "St.-pierre",
    "country": "Saint Pierre and Miquelon",
    "code1": "FSP",
    "code2": "LFVP",
    "lat": 46.762904,
    "lng": -56.173088
  },
  {
    "name": "Amberieu",
    "city": "Amberieu",
    "country": "France",
    "code1": "",
    "code2": "LFXA",
    "lat": 45.987335,
    "lng": 5.328445
  },
  {
    "name": "Damblain",
    "city": "Damblain",
    "country": "France",
    "code1": "",
    "code2": "LFYD",
    "lat": 48.086325,
    "lng": 5.664058
  },
  {
    "name": "Andravida",
    "city": "Andravida",
    "country": "Greece",
    "code1": "PYR",
    "code2": "LGAD",
    "lat": 37.920708,
    "lng": 21.292583
  },
  {
    "name": "Agrinion",
    "city": "Agrinion",
    "country": "Greece",
    "code1": "AGQ",
    "code2": "LGAG",
    "lat": 38.602022,
    "lng": 21.351208
  },
  {
    "name": "Dimokritos",
    "city": "Alexandroupolis",
    "country": "Greece",
    "code1": "AXD",
    "code2": "LGAL",
    "lat": 40.855869,
    "lng": 25.956264
  },
  {
    "name": "Alexandria",
    "city": "Alexandria",
    "country": "Greece",
    "code1": "",
    "code2": "LGAX",
    "lat": 40.651128,
    "lng": 22.488739
  },
  {
    "name": "Nea Anchialos",
    "city": "Nea Anghialos",
    "country": "Greece",
    "code1": "VOL",
    "code2": "LGBL",
    "lat": 39.219619,
    "lng": 22.794339
  },
  {
    "name": "Elefsis",
    "city": "Elefsis",
    "country": "Greece",
    "code1": "",
    "code2": "LGEL",
    "lat": 38.063831,
    "lng": 23.556011
  },
  {
    "name": "Chios",
    "city": "Chios",
    "country": "Greece",
    "code1": "JKH",
    "code2": "LGHI",
    "lat": 38.343175,
    "lng": 26.140572
  },
  {
    "name": "Ioannina",
    "city": "Ioannina",
    "country": "Greece",
    "code1": "IOA",
    "code2": "LGIO",
    "lat": 39.696388,
    "lng": 20.8225
  },
  {
    "name": "Nikos Kazantzakis",
    "city": "Heraklion",
    "country": "Greece",
    "code1": "HER",
    "code2": "LGIR",
    "lat": 35.339719,
    "lng": 25.180297
  },
  {
    "name": "Aristotelis",
    "city": "Kastoria",
    "country": "Greece",
    "code1": "KSO",
    "code2": "LGKA",
    "lat": 40.446294,
    "lng": 21.282186
  },
  {
    "name": "Kithira",
    "city": "Kithira",
    "country": "Greece",
    "code1": "KIT",
    "code2": "LGKC",
    "lat": 36.274258,
    "lng": 23.016978
  },
  {
    "name": "Kefallinia",
    "city": "Keffallinia",
    "country": "Greece",
    "code1": "EFL",
    "code2": "LGKF",
    "lat": 38.120069,
    "lng": 20.500481
  },
  {
    "name": "Kalamata",
    "city": "Kalamata",
    "country": "Greece",
    "code1": "KLX",
    "code2": "LGKL",
    "lat": 37.068319,
    "lng": 22.025525
  },
  {
    "name": "Amigdhaleon",
    "city": "Kavala",
    "country": "Greece",
    "code1": "",
    "code2": "LGKM",
    "lat": 40.972775,
    "lng": 24.341417
  },
  {
    "name": "Kos",
    "city": "Kos",
    "country": "Greece",
    "code1": "KGS",
    "code2": "LGKO",
    "lat": 36.793335,
    "lng": 27.091667
  },
  {
    "name": "Karpathos",
    "city": "Karpathos",
    "country": "Greece",
    "code1": "AOK",
    "code2": "LGKP",
    "lat": 35.421408,
    "lng": 27.146008
  },
  {
    "name": "Ioannis Kapodistrias Intl",
    "city": "Kerkyra/corfu",
    "country": "Greece",
    "code1": "CFU",
    "code2": "LGKR",
    "lat": 39.601944,
    "lng": 19.911667
  },
  {
    "name": "Kasos",
    "city": "Kasos",
    "country": "Greece",
    "code1": "KSJ",
    "code2": "LGKS",
    "lat": 35.421358,
    "lng": 26.910047
  },
  {
    "name": "Megas Alexandros Intl",
    "city": "Kavala",
    "country": "Greece",
    "code1": "KVA",
    "code2": "LGKV",
    "lat": 40.913306,
    "lng": 24.619223
  },
  {
    "name": "Filippos",
    "city": "Kozani",
    "country": "Greece",
    "code1": "KZI",
    "code2": "LGKZ",
    "lat": 40.28611,
    "lng": 21.840834
  },
  {
    "name": "Leros",
    "city": "Leros",
    "country": "Greece",
    "code1": "LRS",
    "code2": "LGLE",
    "lat": 37.184903,
    "lng": 26.800289
  },
  {
    "name": "Limnos",
    "city": "Limnos",
    "country": "Greece",
    "code1": "LXS",
    "code2": "LGLM",
    "lat": 39.917072,
    "lng": 25.236308
  },
  {
    "name": "Larisa",
    "city": "Larissa",
    "country": "Greece",
    "code1": "LRA",
    "code2": "LGLR",
    "lat": 39.650253,
    "lng": 22.4655
  },
  {
    "name": "Megara",
    "city": "Megara",
    "country": "Greece",
    "code1": "",
    "code2": "LGMG",
    "lat": 37.981114,
    "lng": 23.365422
  },
  {
    "name": "Mikonos",
    "city": "Mykonos",
    "country": "Greece",
    "code1": "JMK",
    "code2": "LGMK",
    "lat": 37.435128,
    "lng": 25.348103
  },
  {
    "name": "Mitilini",
    "city": "Mytilini",
    "country": "Greece",
    "code1": "MJT",
    "code2": "LGMT",
    "lat": 39.056667,
    "lng": 26.598333
  },
  {
    "name": "Aktio",
    "city": "Preveza",
    "country": "Greece",
    "code1": "PVK",
    "code2": "LGPZ",
    "lat": 38.925467,
    "lng": 20.765311
  },
  {
    "name": "Maritsa",
    "city": "Rhodos",
    "country": "Greece",
    "code1": "",
    "code2": "LGRD",
    "lat": 36.383056,
    "lng": 28.108889
  },
  {
    "name": "Rhodes Diagoras",
    "city": "Rhodos",
    "country": "Greece",
    "code1": "RHO",
    "code2": "LGRP",
    "lat": 36.405419,
    "lng": 28.086192
  },
  {
    "name": "Araxos",
    "city": "Patras",
    "country": "Greece",
    "code1": "GPA",
    "code2": "LGRX",
    "lat": 38.151111,
    "lng": 21.425556
  },
  {
    "name": "Souda",
    "city": "Chania",
    "country": "Greece",
    "code1": "CHQ",
    "code2": "LGSA",
    "lat": 35.531747,
    "lng": 24.149678
  },
  {
    "name": "Alexandros Papadiamantis",
    "city": "Skiathos",
    "country": "Greece",
    "code1": "JSI",
    "code2": "LGSK",
    "lat": 39.1771,
    "lng": 23.503675
  },
  {
    "name": "Samos",
    "city": "Samos",
    "country": "Greece",
    "code1": "SMI",
    "code2": "LGSM",
    "lat": 37.689999,
    "lng": 26.911667
  },
  {
    "name": "Ashford",
    "city": "Lympne",
    "country": "United Kingdom",
    "code1": "LYM",
    "code2": "EGMK",
    "lat": 51.083333,
    "lng": 1.016667
  },
  {
    "name": "Sparti",
    "city": "Sparti",
    "country": "Greece",
    "code1": "",
    "code2": "LGSP",
    "lat": 36.973892,
    "lng": 22.526292
  },
  {
    "name": "Santorini",
    "city": "Thira",
    "country": "Greece",
    "code1": "JTR",
    "code2": "LGSR",
    "lat": 36.399169,
    "lng": 25.479333
  },
  {
    "name": "Sitia",
    "city": "Sitia",
    "country": "Greece",
    "code1": "JSH",
    "code2": "LGST",
    "lat": 35.216108,
    "lng": 26.101325
  },
  {
    "name": "Stefanovikion",
    "city": "Stefanovikion",
    "country": "Greece",
    "code1": "",
    "code2": "LGSV",
    "lat": 39.48,
    "lng": 22.767222
  },
  {
    "name": "Skiros",
    "city": "Skiros",
    "country": "Greece",
    "code1": "SKU",
    "code2": "LGSY",
    "lat": 38.967553,
    "lng": 24.487228
  },
  {
    "name": "Tanagra",
    "city": "Tanagra",
    "country": "Greece",
    "code1": "",
    "code2": "LGTG",
    "lat": 38.339847,
    "lng": 23.564958
  },
  {
    "name": "Kasteli",
    "city": "Kasteli",
    "country": "Greece",
    "code1": "",
    "code2": "LGTL",
    "lat": 35.192019,
    "lng": 25.327
  },
  {
    "name": "Tripolis",
    "city": "Tripolis",
    "country": "Greece",
    "code1": "",
    "code2": "LGTP",
    "lat": 37.530567,
    "lng": 22.403633
  },
  {
    "name": "Makedonia",
    "city": "Thessaloniki",
    "country": "Greece",
    "code1": "SKG",
    "code2": "LGTS",
    "lat": 40.519725,
    "lng": 22.97095
  },
  {
    "name": "Tatoi",
    "city": "Dekelia",
    "country": "Greece",
    "code1": "",
    "code2": "LGTT",
    "lat": 38.108928,
    "lng": 23.783836
  },
  {
    "name": "Dionysios Solomos",
    "city": "Zakynthos",
    "country": "Greece",
    "code1": "ZTH",
    "code2": "LGZA",
    "lat": 37.750853,
    "lng": 20.88425
  },
  {
    "name": "Ferihegy",
    "city": "Budapest",
    "country": "Hungary",
    "code1": "BUD",
    "code2": "LHBP",
    "lat": 47.436933,
    "lng": 19.255592
  },
  {
    "name": "Debrecen",
    "city": "Debrecen",
    "country": "Hungary",
    "code1": "DEB",
    "code2": "LHDC",
    "lat": 47.488917,
    "lng": 21.615333
  },
  {
    "name": "Kecskemet",
    "city": "Kecskemet",
    "country": "Hungary",
    "code1": "",
    "code2": "LHKE",
    "lat": 46.9175,
    "lng": 19.749222
  },
  {
    "name": "Nyiregyhaza",
    "city": "Nyirregyhaza",
    "country": "Hungary",
    "code1": "",
    "code2": "LHNY",
    "lat": 47.983892,
    "lng": 21.692317
  },
  {
    "name": "Ocseny",
    "city": "Ocseny",
    "country": "Hungary",
    "code1": "",
    "code2": "LHOY",
    "lat": 46.303889,
    "lng": 18.769167
  },
  {
    "name": "Door County Cherryland Airport",
    "city": "Sturgeon Bay",
    "country": "United States",
    "code1": "SUE",
    "code2": "\\N",
    "lat": 44.8436667,
    "lng": -87.4215556
  },
  {
    "name": "Szentkiralyszabadja",
    "city": "Azentkilyszabadja",
    "country": "Hungary",
    "code1": "",
    "code2": "LHSA",
    "lat": 47.077861,
    "lng": 17.968444
  },
  {
    "name": "Szolnok",
    "city": "Szolnok",
    "country": "Hungary",
    "code1": "",
    "code2": "LHSN",
    "lat": 47.122861,
    "lng": 20.2355
  },
  {
    "name": "Amendola",
    "city": "Amendola",
    "country": "Italy",
    "code1": "",
    "code2": "LIBA",
    "lat": 41.541392,
    "lng": 15.718083
  },
  {
    "name": "Crotone",
    "city": "Crotone",
    "country": "Italy",
    "code1": "CRV",
    "code2": "LIBC",
    "lat": 38.997225,
    "lng": 17.080169
  },
  {
    "name": "Bari",
    "city": "Bari",
    "country": "Italy",
    "code1": "BRI",
    "code2": "LIBD",
    "lat": 41.138856,
    "lng": 16.760594
  },
  {
    "name": "Gino Lisa",
    "city": "Foggia",
    "country": "Italy",
    "code1": "FOG",
    "code2": "LIBF",
    "lat": 41.432917,
    "lng": 15.535028
  },
  {
    "name": "Grottaglie",
    "city": "Grottaglie",
    "country": "Italy",
    "code1": "TAR",
    "code2": "LIBG",
    "lat": 40.517514,
    "lng": 17.403212
  },
  {
    "name": "Lecce",
    "city": "Lecce",
    "country": "Italy",
    "code1": "LCC",
    "code2": "LIBN",
    "lat": 40.239228,
    "lng": 18.133325
  },
  {
    "name": "Pescara",
    "city": "Pescara",
    "country": "Italy",
    "code1": "PSR",
    "code2": "LIBP",
    "lat": 42.431656,
    "lng": 14.181067
  },
  {
    "name": "Casale",
    "city": "Brindisi",
    "country": "Italy",
    "code1": "BDS",
    "code2": "LIBR",
    "lat": 40.657633,
    "lng": 17.947033
  },
  {
    "name": "Gioia Del Colle",
    "city": "Gioia Del Colle",
    "country": "Italy",
    "code1": "",
    "code2": "LIBV",
    "lat": 40.767833,
    "lng": 16.933333
  },
  {
    "name": "Lamezia Terme",
    "city": "Lamezia",
    "country": "Italy",
    "code1": "SUF",
    "code2": "LICA",
    "lat": 38.905394,
    "lng": 16.242269
  },
  {
    "name": "Catania Fontanarossa",
    "city": "Catania",
    "country": "Italy",
    "code1": "CTA",
    "code2": "LICC",
    "lat": 37.466781,
    "lng": 15.0664
  },
  {
    "name": "Lampedusa",
    "city": "Lampedusa",
    "country": "Italy",
    "code1": "LMP",
    "code2": "LICD",
    "lat": 35.497914,
    "lng": 12.618083
  },
  {
    "name": "Pantelleria",
    "city": "Pantelleria",
    "country": "Italy",
    "code1": "PNL",
    "code2": "LICG",
    "lat": 36.816519,
    "lng": 11.968864
  },
  {
    "name": "Palermo",
    "city": "Palermo",
    "country": "Italy",
    "code1": "PMO",
    "code2": "LICJ",
    "lat": 38.175958,
    "lng": 13.091019
  },
  {
    "name": "Boccadifalco",
    "city": "Palermo",
    "country": "Italy",
    "code1": "",
    "code2": "LICP",
    "lat": 38.110833,
    "lng": 13.313333
  },
  {
    "name": "Reggio Calabria",
    "city": "Reggio Calabria",
    "country": "Italy",
    "code1": "REG",
    "code2": "LICR",
    "lat": 38.071206,
    "lng": 15.651556
  },
  {
    "name": "Trapani Birgi",
    "city": "Trapani",
    "country": "Italy",
    "code1": "TPS",
    "code2": "LICT",
    "lat": 37.911403,
    "lng": 12.487961
  },
  {
    "name": "Sigonella",
    "city": "Sigonella",
    "country": "Italy",
    "code1": "NSY",
    "code2": "LICZ",
    "lat": 37.401664,
    "lng": 14.922358
  },
  {
    "name": "Alghero",
    "city": "Alghero",
    "country": "Italy",
    "code1": "AHO",
    "code2": "LIEA",
    "lat": 40.632133,
    "lng": 8.290772
  },
  {
    "name": "Decimomannu",
    "city": "Decimomannu",
    "country": "Italy",
    "code1": "DCI",
    "code2": "LIED",
    "lat": 39.354222,
    "lng": 8.972481
  },
  {
    "name": "Elmas",
    "city": "Cagliari",
    "country": "Italy",
    "code1": "CAG",
    "code2": "LIEE",
    "lat": 39.251469,
    "lng": 9.054283
  },
  {
    "name": "Olbia Costa Smeralda",
    "city": "Olbia",
    "country": "Italy",
    "code1": "OLB",
    "code2": "LIEO",
    "lat": 40.898661,
    "lng": 9.517628
  },
  {
    "name": "Tortoli",
    "city": "Tortoli",
    "country": "Italy",
    "code1": "TTB",
    "code2": "LIET",
    "lat": 39.918761,
    "lng": 9.682981
  },
  {
    "name": "Aeritalia",
    "city": "Turin",
    "country": "Italy",
    "code1": "",
    "code2": "LIMA",
    "lat": 45.086353,
    "lng": 7.603375
  },
  {
    "name": "Bresso",
    "city": "Milano",
    "country": "Italy",
    "code1": "",
    "code2": "LIMB",
    "lat": 45.542222,
    "lng": 9.203333
  },
  {
    "name": "Malpensa",
    "city": "Milano",
    "country": "Italy",
    "code1": "MXP",
    "code2": "LIMC",
    "lat": 45.630606,
    "lng": 8.728111
  },
  {
    "name": "Bergamo Orio Al Serio",
    "city": "Bergamo",
    "country": "Italy",
    "code1": "BGY",
    "code2": "LIME",
    "lat": 45.673889,
    "lng": 9.704166
  },
  {
    "name": "Torino",
    "city": "Torino",
    "country": "Italy",
    "code1": "TRN",
    "code2": "LIMF",
    "lat": 45.200761,
    "lng": 7.649631
  },
  {
    "name": "Albenga",
    "city": "Albenga",
    "country": "Italy",
    "code1": "ALL",
    "code2": "LIMG",
    "lat": 44.050608,
    "lng": 8.127428
  },
  {
    "name": "Genova Sestri",
    "city": "Genoa",
    "country": "Italy",
    "code1": "GOA",
    "code2": "LIMJ",
    "lat": 44.413333,
    "lng": 8.8375
  },
  {
    "name": "Linate",
    "city": "Milan",
    "country": "Italy",
    "code1": "LIN",
    "code2": "LIML",
    "lat": 45.445103,
    "lng": 9.276739
  },
  {
    "name": "Cameri",
    "city": "Cameri",
    "country": "Italy",
    "code1": "",
    "code2": "LIMN",
    "lat": 45.529592,
    "lng": 8.669225
  },
  {
    "name": "Parma",
    "city": "Parma",
    "country": "Italy",
    "code1": "PMF",
    "code2": "LIMP",
    "lat": 44.824483,
    "lng": 10.296367
  },
  {
    "name": "Piacenza",
    "city": "Piacenza",
    "country": "Italy",
    "code1": "QPZ",
    "code2": "LIMS",
    "lat": 44.913055,
    "lng": 9.723333
  },
  {
    "name": "Shoestring Aviation Airfield",
    "city": "Stewartstown",
    "country": "United States",
    "code1": "0P2",
    "code2": "\\N",
    "lat": 39.7948244,
    "lng": -76.6471914
  },
  {
    "name": "Levaldigi",
    "city": "Cuneo",
    "country": "Italy",
    "code1": "CUF",
    "code2": "LIMZ",
    "lat": 44.547019,
    "lng": 7.623217
  },
  {
    "name": "Aviano Ab",
    "city": "Aviano",
    "country": "Italy",
    "code1": "AVB",
    "code2": "LIPA",
    "lat": 46.031889,
    "lng": 12.596472
  },
  {
    "name": "Bolzano",
    "city": "Bolzano",
    "country": "Italy",
    "code1": "BZO",
    "code2": "LIPB",
    "lat": 46.460194,
    "lng": 11.326383
  },
  {
    "name": "Cervia",
    "city": "Cervia",
    "country": "Italy",
    "code1": "",
    "code2": "LIPC",
    "lat": 44.224175,
    "lng": 12.307203
  },
  {
    "name": "Bologna",
    "city": "Bologna",
    "country": "Italy",
    "code1": "BLQ",
    "code2": "LIPE",
    "lat": 44.535444,
    "lng": 11.288667
  },
  {
    "name": "Treviso",
    "city": "Treviso",
    "country": "Italy",
    "code1": "TSF",
    "code2": "LIPH",
    "lat": 45.6484,
    "lng": 12.194422
  },
  {
    "name": "Rivolto",
    "city": "Rivolto",
    "country": "Italy",
    "code1": "",
    "code2": "LIPI",
    "lat": 45.97875,
    "lng": 13.049331
  },
  {
    "name": "Forli",
    "city": "Forli",
    "country": "Italy",
    "code1": "FRL",
    "code2": "LIPK",
    "lat": 44.194753,
    "lng": 12.070094
  },
  {
    "name": "Ghedi",
    "city": "Ghedi",
    "country": "Italy",
    "code1": "",
    "code2": "LIPL",
    "lat": 45.432167,
    "lng": 10.267667
  },
  {
    "name": "Verona Boscomantico",
    "city": "Verona",
    "country": "Italy",
    "code1": "",
    "code2": "LIPN",
    "lat": 45.472017,
    "lng": 10.927919
  },
  {
    "name": "Montichiari",
    "city": "Brescia",
    "country": "Italy",
    "code1": "VBS",
    "code2": "LIPO",
    "lat": 45.428889,
    "lng": 10.330556
  },
  {
    "name": "Ronchi Dei Legionari",
    "city": "Ronchi De Legionari",
    "country": "Italy",
    "code1": "TRS",
    "code2": "LIPQ",
    "lat": 45.8275,
    "lng": 13.472222
  },
  {
    "name": "Rimini",
    "city": "Rimini",
    "country": "Italy",
    "code1": "RMI",
    "code2": "LIPR",
    "lat": 44.020292,
    "lng": 12.611747
  },
  {
    "name": "Istrana",
    "city": "Treviso",
    "country": "Italy",
    "code1": "",
    "code2": "LIPS",
    "lat": 45.684867,
    "lng": 12.082881
  },
  {
    "name": "Vicenza",
    "city": "Vicenza",
    "country": "Italy",
    "code1": "VIC",
    "code2": "LIPT",
    "lat": 45.573411,
    "lng": 11.52955
  },
  {
    "name": "Padova",
    "city": "Padova",
    "country": "Italy",
    "code1": "QPA",
    "code2": "LIPU",
    "lat": 45.395767,
    "lng": 11.847903
  },
  {
    "name": "Villafranca",
    "city": "Villafranca",
    "country": "Italy",
    "code1": "VRN",
    "code2": "LIPX",
    "lat": 45.395706,
    "lng": 10.888533
  },
  {
    "name": "Venezia Tessera",
    "city": "Venice",
    "country": "Italy",
    "code1": "VCE",
    "code2": "LIPZ",
    "lat": 45.505278,
    "lng": 12.351944
  },
  {
    "name": "Ampugnano",
    "city": "Siena",
    "country": "Italy",
    "code1": "SAY",
    "code2": "LIQS",
    "lat": 43.256286,
    "lng": 11.255036
  },
  {
    "name": "Ciampino",
    "city": "Rome",
    "country": "Italy",
    "code1": "CIA",
    "code2": "LIRA",
    "lat": 41.799361,
    "lng": 12.594936
  },
  {
    "name": "Pratica Di Mare",
    "city": "Pratica Di Mare",
    "country": "Italy",
    "code1": "",
    "code2": "LIRE",
    "lat": 41.654522,
    "lng": 12.445183
  },
  {
    "name": "Fiumicino",
    "city": "Rome",
    "country": "Italy",
    "code1": "FCO",
    "code2": "LIRF",
    "lat": 41.804475,
    "lng": 12.250797
  },
  {
    "name": "Guidonia",
    "city": "Guidonia",
    "country": "Italy",
    "code1": "",
    "code2": "LIRG",
    "lat": 41.990278,
    "lng": 12.740833
  },
  {
    "name": "Marina Di Campo",
    "city": "Marina Di Campo",
    "country": "Italy",
    "code1": "EBA",
    "code2": "LIRJ",
    "lat": 42.760277,
    "lng": 10.239445
  },
  {
    "name": "Latina",
    "city": "Latina",
    "country": "Italy",
    "code1": "QLT",
    "code2": "LIRL",
    "lat": 41.542436,
    "lng": 12.909019
  },
  {
    "name": "Grazzanise",
    "city": "Grazzanise",
    "country": "Italy",
    "code1": "",
    "code2": "LIRM",
    "lat": 41.060833,
    "lng": 14.081944
  },
  {
    "name": "Capodichino",
    "city": "Naples",
    "country": "Italy",
    "code1": "NAP",
    "code2": "LIRN",
    "lat": 40.886033,
    "lng": 14.290781
  },
  {
    "name": "Pisa",
    "city": "Pisa",
    "country": "Italy",
    "code1": "PSA",
    "code2": "LIRP",
    "lat": 43.683917,
    "lng": 10.39275
  },
  {
    "name": "Firenze",
    "city": "Florence",
    "country": "Italy",
    "code1": "FLR",
    "code2": "LIRQ",
    "lat": 43.809953,
    "lng": 11.2051
  },
  {
    "name": "Grosseto",
    "city": "Grosseto",
    "country": "Italy",
    "code1": "GRS",
    "code2": "LIRS",
    "lat": 42.759747,
    "lng": 11.071897
  },
  {
    "name": "Urbe",
    "city": "Rome",
    "country": "Italy",
    "code1": "",
    "code2": "LIRU",
    "lat": 41.951946,
    "lng": 12.498889
  },
  {
    "name": "Viterbo",
    "city": "Viterbo",
    "country": "Italy",
    "code1": "",
    "code2": "LIRV",
    "lat": 42.430183,
    "lng": 12.064156
  },
  {
    "name": "Perugia",
    "city": "Perugia",
    "country": "Italy",
    "code1": "PEG",
    "code2": "LIRZ",
    "lat": 43.095906,
    "lng": 12.513222
  },
  {
    "name": "Cerklje",
    "city": "Cerklje",
    "country": "Slovenia",
    "code1": "",
    "code2": "LJCE",
    "lat": 45.899971,
    "lng": 15.530194
  },
  {
    "name": "Ljubljana",
    "city": "Ljubljana",
    "country": "Slovenia",
    "code1": "LJU",
    "code2": "LJLJ",
    "lat": 46.223686,
    "lng": 14.457611
  },
  {
    "name": "Maribor",
    "city": "Maribor",
    "country": "Slovenia",
    "code1": "MBX",
    "code2": "LJMB",
    "lat": 46.479861,
    "lng": 15.686131
  },
  {
    "name": "Portoroz",
    "city": "Portoroz",
    "country": "Slovenia",
    "code1": "POW",
    "code2": "LJPZ",
    "lat": 45.473353,
    "lng": 13.614978
  },
  {
    "name": "Slovenj Gradec",
    "city": "Slovenj Gradec",
    "country": "Slovenia",
    "code1": "",
    "code2": "LJSG",
    "lat": 46.471975,
    "lng": 15.116997
  },
  {
    "name": "Ceske Budejovice",
    "city": "Ceske Budejovice",
    "country": "Czech Republic",
    "code1": "",
    "code2": "LKCS",
    "lat": 48.946381,
    "lng": 14.427464
  },
  {
    "name": "Caslav",
    "city": "Caslav",
    "country": "Czech Republic",
    "code1": "",
    "code2": "LKCV",
    "lat": 49.939653,
    "lng": 15.381808
  },
  {
    "name": "Hradec Kralove",
    "city": "Hradec Kralove",
    "country": "Czech Republic",
    "code1": "",
    "code2": "LKHK",
    "lat": 50.2532,
    "lng": 15.845228
  },
  {
    "name": "Horovice",
    "city": "Horovice",
    "country": "Czech Republic",
    "code1": "",
    "code2": "LKHV",
    "lat": 49.848111,
    "lng": 13.893506
  },
  {
    "name": "Kbely",
    "city": "Praha",
    "country": "Czech Republic",
    "code1": "",
    "code2": "LKKB",
    "lat": 50.121367,
    "lng": 14.543642
  },
  {
    "name": "Kunovice",
    "city": "Kunovice",
    "country": "Czech Republic",
    "code1": "",
    "code2": "LKKU",
    "lat": 49.029444,
    "lng": 17.439722
  },
  {
    "name": "Karlovy Vary",
    "city": "Karlovy Vary",
    "country": "Czech Republic",
    "code1": "KLV",
    "code2": "LKKV",
    "lat": 50.202978,
    "lng": 12.914983
  },
  {
    "name": "Plzen Line",
    "city": "Line",
    "country": "Czech Republic",
    "code1": "",
    "code2": "LKLN",
    "lat": 49.675172,
    "lng": 13.274617
  },
  {
    "name": "Mnichovo Hradiste",
    "city": "Mnichovo Hradiste",
    "country": "Czech Republic",
    "code1": "",
    "code2": "LKMH",
    "lat": 50.540211,
    "lng": 15.006592
  },
  {
    "name": "Mosnov",
    "city": "Ostrava",
    "country": "Czech Republic",
    "code1": "OSR",
    "code2": "LKMT",
    "lat": 49.696292,
    "lng": 18.111053
  },
  {
    "name": "Namest",
    "city": "Namest",
    "country": "Czech Republic",
    "code1": "",
    "code2": "LKNA",
    "lat": 49.165833,
    "lng": 16.124925
  },
  {
    "name": "Pardubice",
    "city": "Pardubice",
    "country": "Czech Republic",
    "code1": "PED",
    "code2": "LKPD",
    "lat": 50.013419,
    "lng": 15.738647
  },
  {
    "name": "Pribram",
    "city": "Pribram",
    "country": "Czech Republic",
    "code1": "",
    "code2": "LKPM",
    "lat": 49.720078,
    "lng": 14.100567
  },
  {
    "name": "Prerov",
    "city": "Prerov",
    "country": "Czech Republic",
    "code1": "PRV",
    "code2": "LKPO",
    "lat": 49.425833,
    "lng": 17.404722
  },
  {
    "name": "Ruzyne",
    "city": "Prague",
    "country": "Czech Republic",
    "code1": "PRG",
    "code2": "LKPR",
    "lat": 50.100833,
    "lng": 14.26
  },
  {
    "name": "Turany",
    "city": "Brno",
    "country": "Czech Republic",
    "code1": "BRQ",
    "code2": "LKTB",
    "lat": 49.151269,
    "lng": 16.694433
  },
  {
    "name": "Vodochody",
    "city": "Vodochody",
    "country": "Czech Republic",
    "code1": "",
    "code2": "LKVO",
    "lat": 50.216581,
    "lng": 14.395806
  },
  {
    "name": "Ben Gurion",
    "city": "Tel-aviv",
    "country": "Israel",
    "code1": "TLV",
    "code2": "LLBG",
    "lat": 32.011389,
    "lng": 34.886667
  },
  {
    "name": "Teyman",
    "city": "Beer-sheba",
    "country": "Israel",
    "code1": "BEV",
    "code2": "LLBS",
    "lat": 31.287003,
    "lng": 34.722953
  },
  {
    "name": "Tel Nov",
    "city": "Tel-nof",
    "country": "Israel",
    "code1": "",
    "code2": "LLEK",
    "lat": 31.839472,
    "lng": 34.821844
  },
  {
    "name": "Eyn Shemer",
    "city": "Eyn-shemer",
    "country": "Israel",
    "code1": "",
    "code2": "LLES",
    "lat": 32.440814,
    "lng": 35.007661
  },
  {
    "name": "Eilat",
    "city": "Elat",
    "country": "Israel",
    "code1": "ETH",
    "code2": "LLET",
    "lat": 29.561281,
    "lng": 34.960081
  },
  {
    "name": "En Yahav",
    "city": "Eyn-yahav",
    "country": "Israel",
    "code1": "",
    "code2": "LLEY",
    "lat": 30.621656,
    "lng": 35.203325
  },
  {
    "name": "Haifa",
    "city": "Haifa",
    "country": "Israel",
    "code1": "HFA",
    "code2": "LLHA",
    "lat": 32.809444,
    "lng": 35.043056
  },
  {
    "name": "Hatzor",
    "city": "Haztor",
    "country": "Israel",
    "code1": "",
    "code2": "LLHS",
    "lat": 31.7625,
    "lng": 34.727222
  },
  {
    "name": "Mahanaim I Ben Yaakov",
    "city": "Rosh Pina",
    "country": "Israel",
    "code1": "RPN",
    "code2": "LLIB",
    "lat": 32.981047,
    "lng": 35.571908
  },
  {
    "name": "Megiddo",
    "city": "Megido Airstrip",
    "country": "Israel",
    "code1": "",
    "code2": "LLMG",
    "lat": 32.597139,
    "lng": 35.228803
  },
  {
    "name": "I Bar Yehuda",
    "city": "Metzada",
    "country": "Israel",
    "code1": "",
    "code2": "LLMZ",
    "lat": 31.328169,
    "lng": 35.388608
  },
  {
    "name": "Nevatim Ab",
    "city": "Nevatim",
    "country": "Israel",
    "code1": "",
    "code2": "LLNV",
    "lat": 31.208347,
    "lng": 35.0123
  },
  {
    "name": "Ovda",
    "city": "Ovda",
    "country": "Israel",
    "code1": "VDA",
    "code2": "LLOV",
    "lat": 29.94025,
    "lng": 34.93585
  },
  {
    "name": "Ramat David",
    "city": "Ramat David",
    "country": "Israel",
    "code1": "",
    "code2": "LLRD",
    "lat": 32.665142,
    "lng": 35.179458
  },
  {
    "name": "Ramon",
    "city": "Ramon",
    "country": "Israel",
    "code1": "",
    "code2": "LLRM",
    "lat": 30.776061,
    "lng": 34.666769
  },
  {
    "name": "Sde Dov",
    "city": "Tel-aviv",
    "country": "Israel",
    "code1": "SDV",
    "code2": "LLSD",
    "lat": 32.114661,
    "lng": 34.782239
  },
  {
    "name": "Luqa",
    "city": "Malta",
    "country": "Malta",
    "code1": "MLA",
    "code2": "LMML",
    "lat": 35.857497,
    "lng": 14.4775
  },
  {
    "name": "Wiener Neustadt East",
    "city": "Wiener Neustadt Ost",
    "country": "Austria",
    "code1": "",
    "code2": "LOAN",
    "lat": 47.843333,
    "lng": 16.260139
  },
  {
    "name": "Wels",
    "city": "Wels",
    "country": "Austria",
    "code1": "",
    "code2": "LOLW",
    "lat": 48.183304,
    "lng": 14.040861
  },
  {
    "name": "Graz",
    "city": "Graz",
    "country": "Austria",
    "code1": "GRZ",
    "code2": "LOWG",
    "lat": 46.991067,
    "lng": 15.439628
  },
  {
    "name": "Innsbruck",
    "city": "Innsbruck",
    "country": "Austria",
    "code1": "INN",
    "code2": "LOWI",
    "lat": 47.260219,
    "lng": 11.343964
  },
  {
    "name": "Linz",
    "city": "Linz",
    "country": "Austria",
    "code1": "LNZ",
    "code2": "LOWL",
    "lat": 48.233219,
    "lng": 14.187511
  },
  {
    "name": "Salzburg",
    "city": "Salzburg",
    "country": "Austria",
    "code1": "SZG",
    "code2": "LOWS",
    "lat": 47.793304,
    "lng": 13.004333
  },
  {
    "name": "Schwechat",
    "city": "Vienna",
    "country": "Austria",
    "code1": "VIE",
    "code2": "LOWW",
    "lat": 48.110278,
    "lng": 16.569722
  },
  {
    "name": "Klagenfurt",
    "city": "Klagenfurt",
    "country": "Austria",
    "code1": "",
    "code2": "LOXK",
    "lat": 46.642514,
    "lng": 14.337739
  },
  {
    "name": "Zeltweg",
    "city": "Zeltweg",
    "country": "Austria",
    "code1": "",
    "code2": "LOXZ",
    "lat": 47.202751,
    "lng": 14.744223
  },
  {
    "name": "Alverca",
    "city": "Alverca",
    "country": "Portugal",
    "code1": "",
    "code2": "LPAR",
    "lat": 38.883278,
    "lng": -9.030097
  },
  {
    "name": "Santa Maria",
    "city": "Santa Maria (island)",
    "country": "Portugal",
    "code1": "SMA",
    "code2": "LPAZ",
    "lat": 36.97139,
    "lng": -25.170639
  },
  {
    "name": "Braganca",
    "city": "Braganca",
    "country": "Portugal",
    "code1": "BGC",
    "code2": "LPBG",
    "lat": 41.8578,
    "lng": -6.707125
  },
  {
    "name": "Beja",
    "city": "Beja (madeira)",
    "country": "Portugal",
    "code1": "",
    "code2": "LPBJ",
    "lat": 38.078903,
    "lng": -7.932397
  },
  {
    "name": "Braga",
    "city": "Braga",
    "country": "Portugal",
    "code1": "",
    "code2": "LPBR",
    "lat": 41.587058,
    "lng": -8.445139
  },
  {
    "name": "Coimbra",
    "city": "Coimba",
    "country": "Portugal",
    "code1": "",
    "code2": "LPCO",
    "lat": 40.157223,
    "lng": -8.47
  },
  {
    "name": "Cascais",
    "city": "Cascais",
    "country": "Portugal",
    "code1": "",
    "code2": "LPCS",
    "lat": 38.725025,
    "lng": -9.355231
  },
  {
    "name": "Covilha",
    "city": "Covilha",
    "country": "Portugal",
    "code1": "",
    "code2": "LPCV",
    "lat": 40.264772,
    "lng": -7.479958
  },
  {
    "name": "Evora",
    "city": "Evora",
    "country": "Portugal",
    "code1": "",
    "code2": "LPEV",
    "lat": 38.533472,
    "lng": -7.889639
  },
  {
    "name": "Flores",
    "city": "Flores",
    "country": "Portugal",
    "code1": "FLW",
    "code2": "LPFL",
    "lat": 39.455272,
    "lng": -31.131361
  },
  {
    "name": "Faro",
    "city": "Faro",
    "country": "Portugal",
    "code1": "FAO",
    "code2": "LPFR",
    "lat": 37.014425,
    "lng": -7.965911
  },
  {
    "name": "Graciosa",
    "city": "Graciosa Island",
    "country": "Portugal",
    "code1": "GRW",
    "code2": "LPGR",
    "lat": 39.092169,
    "lng": -28.029847
  },
  {
    "name": "Horta",
    "city": "Horta",
    "country": "Portugal",
    "code1": "HOR",
    "code2": "LPHR",
    "lat": 38.519894,
    "lng": -28.715872
  },
  {
    "name": "Lajes",
    "city": "Lajes (terceira Island)",
    "country": "Portugal",
    "code1": "TER",
    "code2": "LPLA",
    "lat": 38.761842,
    "lng": -27.090797
  },
  {
    "name": "Monte Real",
    "city": "Monte Real",
    "country": "Portugal",
    "code1": "",
    "code2": "LPMR",
    "lat": 39.831244,
    "lng": -8.887261
  },
  {
    "name": "Montijo",
    "city": "Montijo",
    "country": "Portugal",
    "code1": "",
    "code2": "LPMT",
    "lat": 38.703861,
    "lng": -9.035916
  },
  {
    "name": "Ovar",
    "city": "Ovar",
    "country": "Portugal",
    "code1": "",
    "code2": "LPOV",
    "lat": 40.915867,
    "lng": -8.645919
  },
  {
    "name": "Ponta Delgada",
    "city": "Ponta Delgada",
    "country": "Portugal",
    "code1": "PDL",
    "code2": "LPPD",
    "lat": 37.741184,
    "lng": -25.69787
  },
  {
    "name": "Pico",
    "city": "Pico",
    "country": "Portugal",
    "code1": "PIX",
    "code2": "LPPI",
    "lat": 38.554333,
    "lng": -28.441333
  },
  {
    "name": "Portimao",
    "city": "Portimao",
    "country": "Portugal",
    "code1": "",
    "code2": "LPPM",
    "lat": 37.149331,
    "lng": -8.583961
  },
  {
    "name": "Porto",
    "city": "Porto",
    "country": "Portugal",
    "code1": "OPO",
    "code2": "LPPR",
    "lat": 41.248055,
    "lng": -8.681389
  },
  {
    "name": "Porto Santo",
    "city": "Porto Santo",
    "country": "Portugal",
    "code1": "PXO",
    "code2": "LPPS",
    "lat": 33.073386,
    "lng": -16.349975
  },
  {
    "name": "Lisboa",
    "city": "Lisbon",
    "country": "Portugal",
    "code1": "LIS",
    "code2": "LPPT",
    "lat": 38.781311,
    "lng": -9.135919
  },
  {
    "name": "Sao Jorge",
    "city": "Sao Jorge Island",
    "country": "Portugal",
    "code1": "SJZ",
    "code2": "LPSJ",
    "lat": 38.6655,
    "lng": -28.175817
  },
  {
    "name": "Sintra",
    "city": "Sintra",
    "country": "Portugal",
    "code1": "",
    "code2": "LPST",
    "lat": 38.831053,
    "lng": -9.339553
  },
  {
    "name": "Tancos",
    "city": "Tancos",
    "country": "Portugal",
    "code1": "",
    "code2": "LPTN",
    "lat": 39.47514,
    "lng": -8.364583
  },
  {
    "name": "Vila Real",
    "city": "Vila Real",
    "country": "Portugal",
    "code1": "VRL",
    "code2": "LPVR",
    "lat": 41.274334,
    "lng": -7.720472
  },
  {
    "name": "Viseu",
    "city": "Viseu",
    "country": "Portugal",
    "code1": "",
    "code2": "LPVZ",
    "lat": 40.725539,
    "lng": -7.888992
  },
  {
    "name": "Eastern Oregon Regional Airport",
    "city": "Pendleton",
    "country": "United States",
    "code1": "PDT",
    "code2": "KPDT",
    "lat": 45.695,
    "lng": -118.841389
  },
  {
    "name": "Mostar",
    "city": "Mostar",
    "country": "Bosnia and Herzegovina",
    "code1": "OMO",
    "code2": "LQMO",
    "lat": 43.2829,
    "lng": 17.845878
  },
  {
    "name": "Sarajevo",
    "city": "Sarajevo",
    "country": "Bosnia and Herzegovina",
    "code1": "SJJ",
    "code2": "LQSA",
    "lat": 43.824583,
    "lng": 18.331467
  },
  {
    "name": "Arad",
    "city": "Arad",
    "country": "Romania",
    "code1": "ARW",
    "code2": "LRAR",
    "lat": 46.17655,
    "lng": 21.262022
  },
  {
    "name": "Bacau",
    "city": "Bacau",
    "country": "Romania",
    "code1": "BCM",
    "code2": "LRBC",
    "lat": 46.521946,
    "lng": 26.910278
  },
  {
    "name": "Tautii Magheraus",
    "city": "Baia Mare",
    "country": "Romania",
    "code1": "BAY",
    "code2": "LRBM",
    "lat": 47.658389,
    "lng": 23.470022
  },
  {
    "name": "Aurel Vlaicu",
    "city": "Bucharest",
    "country": "Romania",
    "code1": "BBU",
    "code2": "LRBS",
    "lat": 44.503194,
    "lng": 26.102111
  },
  {
    "name": "Mihail Kogalniceanu",
    "city": "Constanta",
    "country": "Romania",
    "code1": "CND",
    "code2": "LRCK",
    "lat": 44.362222,
    "lng": 28.488333
  },
  {
    "name": "Cluj Napoca",
    "city": "Cluj-napoca",
    "country": "Romania",
    "code1": "CLJ",
    "code2": "LRCL",
    "lat": 46.785167,
    "lng": 23.686167
  },
  {
    "name": "Caransebes",
    "city": "Caransebes",
    "country": "Romania",
    "code1": "CSB",
    "code2": "LRCS",
    "lat": 45.42,
    "lng": 22.253333
  },
  {
    "name": "Craiova",
    "city": "Craiova",
    "country": "Romania",
    "code1": "CRA",
    "code2": "LRCV",
    "lat": 44.318139,
    "lng": 23.888611
  },
  {
    "name": "Iasi",
    "city": "Iasi",
    "country": "Romania",
    "code1": "IAS",
    "code2": "LRIA",
    "lat": 47.178492,
    "lng": 27.620631
  },
  {
    "name": "Oradea",
    "city": "Oradea",
    "country": "Romania",
    "code1": "OMR",
    "code2": "LROD",
    "lat": 47.025278,
    "lng": 21.9025
  },
  {
    "name": "Henri Coanda",
    "city": "Bucharest",
    "country": "Romania",
    "code1": "OTP",
    "code2": "LROP",
    "lat": 44.572161,
    "lng": 26.102178
  },
  {
    "name": "Sibiu",
    "city": "Sibiu",
    "country": "Romania",
    "code1": "SBZ",
    "code2": "LRSB",
    "lat": 45.785597,
    "lng": 24.091342
  },
  {
    "name": "Satu Mare",
    "city": "Satu Mare",
    "country": "Romania",
    "code1": "SUJ",
    "code2": "LRSM",
    "lat": 47.703275,
    "lng": 22.8857
  },
  {
    "name": "Stefan Cel Mare",
    "city": "Suceava",
    "country": "Romania",
    "code1": "SCV",
    "code2": "LRSV",
    "lat": 47.6875,
    "lng": 26.354056
  },
  {
    "name": "Cataloi",
    "city": "Tulcea",
    "country": "Romania",
    "code1": "TCE",
    "code2": "LRTC",
    "lat": 45.062486,
    "lng": 28.714311
  },
  {
    "name": "Transilvania Targu Mures",
    "city": "Tirgu Mures",
    "country": "Romania",
    "code1": "TGM",
    "code2": "LRTM",
    "lat": 46.467714,
    "lng": 24.412525
  },
  {
    "name": "Traian Vuia",
    "city": "Timisoara",
    "country": "Romania",
    "code1": "TSR",
    "code2": "LRTR",
    "lat": 45.809861,
    "lng": 21.337861
  },
  {
    "name": "Les Eplatures",
    "city": "Les Eplatures",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSGC",
    "lat": 47.08385,
    "lng": 6.792836
  },
  {
    "name": "Geneve Cointrin",
    "city": "Geneva",
    "country": "Switzerland",
    "code1": "GVA",
    "code2": "LSGG",
    "lat": 46.238064,
    "lng": 6.10895
  },
  {
    "name": "Saanen",
    "city": "Saanen",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSGK",
    "lat": 46.487499,
    "lng": 7.250834
  },
  {
    "name": "Sion",
    "city": "Sion",
    "country": "Switzerland",
    "code1": "SIR",
    "code2": "LSGS",
    "lat": 46.219592,
    "lng": 7.326764
  },
  {
    "name": "Alpnach",
    "city": "Alpnach",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSMA",
    "lat": 46.943889,
    "lng": 8.284167
  },
  {
    "name": "Dubendorf",
    "city": "Dubendorf",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSMD",
    "lat": 47.398644,
    "lng": 8.648231
  },
  {
    "name": "Emmen",
    "city": "Emmen",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSME",
    "lat": 47.092369,
    "lng": 8.305117
  },
  {
    "name": "Mollis",
    "city": "Mollis",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSMF",
    "lat": 47.078872,
    "lng": 9.064831
  },
  {
    "name": "Meiringen",
    "city": "Meiringen",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSMM",
    "lat": 46.743333,
    "lng": 8.11
  },
  {
    "name": "Payerne",
    "city": "Payerne",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSMP",
    "lat": 46.843208,
    "lng": 6.915058
  },
  {
    "name": "Buochs",
    "city": "Buochs",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSMU",
    "lat": 46.974914,
    "lng": 8.39915
  },
  {
    "name": "Lugano",
    "city": "Lugano",
    "country": "Switzerland",
    "code1": "LUG",
    "code2": "LSZA",
    "lat": 46.004275,
    "lng": 8.910578
  },
  {
    "name": "Bern Belp",
    "city": "Bern",
    "country": "Switzerland",
    "code1": "BRN",
    "code2": "LSZB",
    "lat": 46.9141,
    "lng": 7.497153
  },
  {
    "name": "Grenchen",
    "city": "Grenchen",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSZG",
    "lat": 47.181628,
    "lng": 7.417189
  },
  {
    "name": "Zurich",
    "city": "Zurich",
    "country": "Switzerland",
    "code1": "ZRH",
    "code2": "LSZH",
    "lat": 47.464722,
    "lng": 8.549167
  },
  {
    "name": "St Gallen Altenrhein",
    "city": "Altenrhein",
    "country": "Switzerland",
    "code1": "ACH",
    "code2": "LSZR",
    "lat": 47.485033,
    "lng": 9.560775
  },
  {
    "name": "Samedan",
    "city": "Samedan",
    "country": "Switzerland",
    "code1": "SMV",
    "code2": "LSZS",
    "lat": 46.534075,
    "lng": 9.884106
  },
  {
    "name": "Guvercinlik",
    "city": "Ankara",
    "country": "Turkey",
    "code1": "",
    "code2": "LTAB",
    "lat": 39.93495,
    "lng": 32.740775
  },
  {
    "name": "Esenboga",
    "city": "Ankara",
    "country": "Turkey",
    "code1": "ESB",
    "code2": "LTAC",
    "lat": 40.128082,
    "lng": 32.995083
  },
  {
    "name": "Etimesgut",
    "city": "Ankara",
    "country": "Turkey",
    "code1": "ANK",
    "code2": "LTAD",
    "lat": 39.949831,
    "lng": 32.688622
  },
  {
    "name": "Akinci",
    "city": "Ankara",
    "country": "Turkey",
    "code1": "",
    "code2": "LTAE",
    "lat": 40.078919,
    "lng": 32.565625
  },
  {
    "name": "Adana",
    "city": "Adana",
    "country": "Turkey",
    "code1": "ADA",
    "code2": "LTAF",
    "lat": 36.982166,
    "lng": 35.280388
  },
  {
    "name": "Incirlik Ab",
    "city": "Adana",
    "country": "Turkey",
    "code1": "",
    "code2": "LTAG",
    "lat": 37.0021,
    "lng": 35.425894
  },
  {
    "name": "Afyon",
    "city": "Afyon",
    "country": "Turkey",
    "code1": "AFY",
    "code2": "LTAH",
    "lat": 38.726425,
    "lng": 30.601114
  },
  {
    "name": "Antalya",
    "city": "Antalya",
    "country": "Turkey",
    "code1": "AYT",
    "code2": "LTAI",
    "lat": 36.898731,
    "lng": 30.800461
  },
  {
    "name": "Oguzeli",
    "city": "Gaziantep",
    "country": "Turkey",
    "code1": "GZT",
    "code2": "LTAJ",
    "lat": 36.947183,
    "lng": 37.478683
  },
  {
    "name": "Iskenderun",
    "city": "Iskenderun",
    "country": "Turkey",
    "code1": "",
    "code2": "LTAK",
    "lat": 36.573472,
    "lng": 36.154
  },
  {
    "name": "Konya",
    "city": "Konya",
    "country": "Turkey",
    "code1": "KYA",
    "code2": "LTAN",
    "lat": 37.979,
    "lng": 32.561861
  },
  {
    "name": "Tulga",
    "city": "Malatya",
    "country": "Turkey",
    "code1": "",
    "code2": "LTAO",
    "lat": 38.35375,
    "lng": 38.253944
  },
  {
    "name": "Merzifon",
    "city": "Merzifon",
    "country": "Turkey",
    "code1": "MZH",
    "code2": "LTAP",
    "lat": 40.829375,
    "lng": 35.521992
  },
  {
    "name": "Sivas",
    "city": "Sivas",
    "country": "Turkey",
    "code1": "VAS",
    "code2": "LTAR",
    "lat": 39.813828,
    "lng": 36.903497
  },
  {
    "name": "Erhac",
    "city": "Malatya",
    "country": "Turkey",
    "code1": "MLX",
    "code2": "LTAT",
    "lat": 38.435347,
    "lng": 38.091006
  },
  {
    "name": "Erkilet",
    "city": "Kayseri",
    "country": "Turkey",
    "code1": "ASR",
    "code2": "LTAU",
    "lat": 38.770386,
    "lng": 35.495428
  },
  {
    "name": "Sivrihisar",
    "city": "Sivrihisar",
    "country": "Turkey",
    "code1": "",
    "code2": "LTAV",
    "lat": 39.451469,
    "lng": 31.365308
  },
  {
    "name": "Tokat",
    "city": "Tokat",
    "country": "Turkey",
    "code1": "",
    "code2": "LTAW",
    "lat": 40.306281,
    "lng": 36.371089
  },
  {
    "name": "Cardak",
    "city": "Denizli",
    "country": "Turkey",
    "code1": "DNZ",
    "code2": "LTAY",
    "lat": 37.785567,
    "lng": 29.701297
  },
  {
    "name": "Ataturk",
    "city": "Istanbul",
    "country": "Turkey",
    "code1": "IST",
    "code2": "LTBA",
    "lat": 40.976922,
    "lng": 28.814606
  },
  {
    "name": "Balikesir",
    "city": "Balikesir",
    "country": "Turkey",
    "code1": "BZI",
    "code2": "LTBF",
    "lat": 39.619258,
    "lng": 27.925958
  },
  {
    "name": "Bandirma",
    "city": "Bandirma",
    "country": "Turkey",
    "code1": "BDM",
    "code2": "LTBG",
    "lat": 40.317972,
    "lng": 27.977694
  },
  {
    "name": "Tyonek Airport",
    "city": "Tyonek",
    "country": "United States",
    "code1": "TYE",
    "code2": "\\N",
    "lat": 61.076667,
    "lng": -151.138056
  },
  {
    "name": "Eskisehir",
    "city": "Eskisehir",
    "country": "Turkey",
    "code1": "ESK",
    "code2": "LTBI",
    "lat": 39.784138,
    "lng": 30.582111
  },
  {
    "name": "Adnan Menderes",
    "city": "Izmir",
    "country": "Turkey",
    "code1": "ADB",
    "code2": "LTBJ",
    "lat": 38.292392,
    "lng": 27.156953
  },
  {
    "name": "Gaziemir",
    "city": "Izmir",
    "country": "Turkey",
    "code1": "",
    "code2": "LTBK",
    "lat": 38.319106,
    "lng": 27.159353
  },
  {
    "name": "Cigli",
    "city": "Izmir",
    "country": "Turkey",
    "code1": "IGL",
    "code2": "LTBL",
    "lat": 38.513022,
    "lng": 27.010053
  },
  {
    "name": "Isparta",
    "city": "Isparta",
    "country": "Turkey",
    "code1": "",
    "code2": "LTBM",
    "lat": 37.785369,
    "lng": 30.581817
  },
  {
    "name": "Kutahya",
    "city": "Kutahya",
    "country": "Turkey",
    "code1": "",
    "code2": "LTBN",
    "lat": 39.426708,
    "lng": 30.016872
  },
  {
    "name": "Yalova",
    "city": "Yalova",
    "country": "Turkey",
    "code1": "",
    "code2": "LTBP",
    "lat": 40.684353,
    "lng": 29.375728
  },
  {
    "name": "Topel",
    "city": "Topel",
    "country": "Turkey",
    "code1": "",
    "code2": "LTBQ",
    "lat": 40.735028,
    "lng": 30.083336
  },
  {
    "name": "Dalaman",
    "city": "Dalaman",
    "country": "Turkey",
    "code1": "DLM",
    "code2": "LTBS",
    "lat": 36.713056,
    "lng": 28.7925
  },
  {
    "name": "Akhisar",
    "city": "Akhisar",
    "country": "Turkey",
    "code1": "",
    "code2": "LTBT",
    "lat": 38.808887,
    "lng": 27.83386
  },
  {
    "name": "Riverton Regional",
    "city": "Riverton WY",
    "country": "United States",
    "code1": "RIW",
    "code2": "KRIW",
    "lat": 43.064167,
    "lng": -108.459722
  },
  {
    "name": "Imsik",
    "city": "Bodrum",
    "country": "Turkey",
    "code1": "BXN",
    "code2": "LTBV",
    "lat": 37.140144,
    "lng": 27.669717
  },
  {
    "name": "Samandira",
    "city": "Istanbul",
    "country": "Turkey",
    "code1": "",
    "code2": "LTBX",
    "lat": 40.992975,
    "lng": 29.216539
  },
  {
    "name": "Elazig",
    "city": "Elazig",
    "country": "Turkey",
    "code1": "EZS",
    "code2": "LTCA",
    "lat": 38.606925,
    "lng": 39.291417
  },
  {
    "name": "Diyarbakir",
    "city": "Diyabakir",
    "country": "Turkey",
    "code1": "DIY",
    "code2": "LTCC",
    "lat": 37.893897,
    "lng": 40.201019
  },
  {
    "name": "Erzincan",
    "city": "Erzincan",
    "country": "Turkey",
    "code1": "ERC",
    "code2": "LTCD",
    "lat": 39.710203,
    "lng": 39.527003
  },
  {
    "name": "Erzurum",
    "city": "Erzurum",
    "country": "Turkey",
    "code1": "ERZ",
    "code2": "LTCE",
    "lat": 39.956501,
    "lng": 41.170166
  },
  {
    "name": "Trabzon",
    "city": "Trabzon",
    "country": "Turkey",
    "code1": "TZX",
    "code2": "LTCG",
    "lat": 40.995108,
    "lng": 39.789728
  },
  {
    "name": "Montrose Regional Airport",
    "city": "Montrose CO",
    "country": "United States",
    "code1": "MTJ",
    "code2": "KMTJ",
    "lat": 38.509794,
    "lng": -107.894242
  },
  {
    "name": "Van",
    "city": "Van",
    "country": "Turkey",
    "code1": "VAN",
    "code2": "LTCI",
    "lat": 38.468219,
    "lng": 43.3323
  },
  {
    "name": "Batman",
    "city": "Batman",
    "country": "Turkey",
    "code1": "BAL",
    "code2": "LTCJ",
    "lat": 37.928969,
    "lng": 41.116583
  },
  {
    "name": "Siirt",
    "city": "Siirt",
    "country": "Turkey",
    "code1": "",
    "code2": "LTCL",
    "lat": 37.978886,
    "lng": 41.840436
  },
  {
    "name": "Kaklic",
    "city": "Izmir",
    "country": "Turkey",
    "code1": "",
    "code2": "LTFA",
    "lat": 38.517608,
    "lng": 26.977406
  },
  {
    "name": "Efes",
    "city": "Izmir",
    "country": "Turkey",
    "code1": "",
    "code2": "LTFB",
    "lat": 37.950747,
    "lng": 27.329014
  },
  {
    "name": "Balti Intl",
    "city": "Saltsy",
    "country": "Moldova",
    "code1": "",
    "code2": "LUBL",
    "lat": 47.838114,
    "lng": 27.781475
  },
  {
    "name": "Chisinau Intl",
    "city": "Chisinau",
    "country": "Moldova",
    "code1": "KIV",
    "code2": "LUKK",
    "lat": 46.927744,
    "lng": 28.930978
  },
  {
    "name": "Ohrid",
    "city": "Ohrid",
    "country": "Macedonia",
    "code1": "OHD",
    "code2": "LWOH",
    "lat": 41.179956,
    "lng": 20.742325
  },
  {
    "name": "Skopje",
    "city": "Skopje",
    "country": "Macedonia",
    "code1": "SKP",
    "code2": "LWSK",
    "lat": 41.961622,
    "lng": 21.621381
  },
  {
    "name": "Gibraltar",
    "city": "Gibraltar",
    "country": "Gibraltar",
    "code1": "GIB",
    "code2": "LXGB",
    "lat": 36.151219,
    "lng": -5.349664
  },
  {
    "name": "Beograd",
    "city": "Belgrade",
    "country": "Serbia",
    "code1": "BEG",
    "code2": "LYBE",
    "lat": 44.818444,
    "lng": 20.309139
  },
  {
    "name": "Nis",
    "city": "Nis",
    "country": "Serbia",
    "code1": "INI",
    "code2": "LYNI",
    "lat": 43.337289,
    "lng": 21.853722
  },
  {
    "name": "Podgorica",
    "city": "Podgorica",
    "country": "Montenegro",
    "code1": "TGD",
    "code2": "LYPG",
    "lat": 42.359392,
    "lng": 19.251894
  },
  {
    "name": "Pristina",
    "city": "Pristina",
    "country": "Serbia",
    "code1": "PRN",
    "code2": "LYPR",
    "lat": 42.572778,
    "lng": 21.035833
  },
  {
    "name": "Tivat",
    "city": "Tivat",
    "country": "Montenegro",
    "code1": "TIV",
    "code2": "LYTV",
    "lat": 42.404664,
    "lng": 18.723286
  },
  {
    "name": "Vrsac",
    "city": "Vrsac",
    "country": "Serbia",
    "code1": "",
    "code2": "LYVR",
    "lat": 45.146889,
    "lng": 21.309889
  },
  {
    "name": "M R Stefanik",
    "city": "Bratislava",
    "country": "Slovakia",
    "code1": "BTS",
    "code2": "LZIB",
    "lat": 48.170167,
    "lng": 17.212667
  },
  {
    "name": "Kosice",
    "city": "Kosice",
    "country": "Slovakia",
    "code1": "KSC",
    "code2": "LZKZ",
    "lat": 48.663055,
    "lng": 21.241112
  },
  {
    "name": "Malacky",
    "city": "Malacky",
    "country": "Slovakia",
    "code1": "",
    "code2": "LZMC",
    "lat": 48.402028,
    "lng": 17.118389
  },
  {
    "name": "Piestany",
    "city": "Piestany",
    "country": "Slovakia",
    "code1": "PZY",
    "code2": "LZPP",
    "lat": 48.625247,
    "lng": 17.828444
  },
  {
    "name": "Sliac",
    "city": "Sliac",
    "country": "Slovakia",
    "code1": "SLD",
    "code2": "LZSL",
    "lat": 48.637839,
    "lng": 19.134108
  },
  {
    "name": "Trencin",
    "city": "Trencin",
    "country": "Slovakia",
    "code1": "",
    "code2": "LZTN",
    "lat": 48.865003,
    "lng": 17.99225
  },
  {
    "name": "Tatry",
    "city": "Poprad",
    "country": "Slovakia",
    "code1": "TAT",
    "code2": "LZTT",
    "lat": 49.073594,
    "lng": 20.241142
  },
  {
    "name": "Clow International Airport",
    "city": "Bolingbrook",
    "country": "United States",
    "code1": "1CS",
    "code2": "\\N",
    "lat": 41.6959744,
    "lng": -88.1292306
  },
  {
    "name": "North Caicos",
    "city": "North Caicos",
    "country": "Turks and Caicos Islands",
    "code1": "NCA",
    "code2": "MBNC",
    "lat": 21.917475,
    "lng": -71.939561
  },
  {
    "name": "Providenciales",
    "city": "Providenciales",
    "country": "Turks and Caicos Islands",
    "code1": "PLS",
    "code2": "MBPV",
    "lat": 21.773625,
    "lng": -72.265886
  },
  {
    "name": "South Caicos",
    "city": "South Caicos",
    "country": "Turks and Caicos Islands",
    "code1": "XSC",
    "code2": "MBSC",
    "lat": 21.515739,
    "lng": -71.528528
  },
  {
    "name": "Arroyo Barril Intl",
    "city": "Samana",
    "country": "Dominican Republic",
    "code1": "EPS",
    "code2": "MDAB",
    "lat": 19.198586,
    "lng": -69.429772
  },
  {
    "name": "Maria Montez Intl",
    "city": "Barahona",
    "country": "Dominican Republic",
    "code1": "BRX",
    "code2": "MDBH",
    "lat": 18.251464,
    "lng": -71.1204
  },
  {
    "name": "Cabo Rojo",
    "city": "Cabo Rojo",
    "country": "Dominican Republic",
    "code1": "",
    "code2": "MDCR",
    "lat": 17.928981,
    "lng": -71.644769
  },
  {
    "name": "Casa De Campo Intl",
    "city": "La Romana",
    "country": "Dominican Republic",
    "code1": "LRM",
    "code2": "MDLR",
    "lat": 18.450711,
    "lng": -68.911833
  },
  {
    "name": "Punta Cana Intl",
    "city": "Punta Cana",
    "country": "Dominican Republic",
    "code1": "PUJ",
    "code2": "MDPC",
    "lat": 18.567367,
    "lng": -68.363431
  },
  {
    "name": "Gregorio Luperon Intl",
    "city": "Puerto Plata",
    "country": "Dominican Republic",
    "code1": "POP",
    "code2": "MDPP",
    "lat": 19.7579,
    "lng": -70.570033
  },
  {
    "name": "Las Americas Intl",
    "city": "Santo Domingo",
    "country": "Dominican Republic",
    "code1": "SDQ",
    "code2": "MDSD",
    "lat": 18.429664,
    "lng": -69.668925
  },
  {
    "name": "San Isidro Ab",
    "city": "San Isidoro",
    "country": "Dominican Republic",
    "code1": "",
    "code2": "MDSI",
    "lat": 18.503706,
    "lng": -69.761706
  },
  {
    "name": "Cibao Intl",
    "city": "Santiago",
    "country": "Dominican Republic",
    "code1": "STI",
    "code2": "MDST",
    "lat": 19.406092,
    "lng": -70.604689
  },
  {
    "name": "Bananera",
    "city": "Bananera",
    "country": "Guatemala",
    "code1": "",
    "code2": "MGBN",
    "lat": 15.473528,
    "lng": -88.837222
  },
  {
    "name": "Coban",
    "city": "Coban",
    "country": "Guatemala",
    "code1": "CBV",
    "code2": "MGCB",
    "lat": 15.468958,
    "lng": -90.406742
  },
  {
    "name": "La Aurora",
    "city": "Guatemala City",
    "country": "Guatemala",
    "code1": "GUA",
    "code2": "MGGT",
    "lat": 14.583272,
    "lng": -90.527475
  },
  {
    "name": "Retalhuleu",
    "city": "Retalhuleu",
    "country": "Guatemala",
    "code1": "",
    "code2": "MGRT",
    "lat": 14.521017,
    "lng": -91.697256
  },
  {
    "name": "San Jose",
    "city": "San Jose",
    "country": "Guatemala",
    "code1": "",
    "code2": "MGSJ",
    "lat": 13.936192,
    "lng": -90.835833
  },
  {
    "name": "Goloson Intl",
    "city": "La Ceiba",
    "country": "Honduras",
    "code1": "LCE",
    "code2": "MHLC",
    "lat": 15.742481,
    "lng": -86.853036
  },
  {
    "name": "La Mesa Intl",
    "city": "San Pedro Sula",
    "country": "Honduras",
    "code1": "SAP",
    "code2": "MHLM",
    "lat": 15.452639,
    "lng": -87.923556
  },
  {
    "name": "Guanaja",
    "city": "Guanaja",
    "country": "Honduras",
    "code1": "GJA",
    "code2": "MHNJ",
    "lat": 16.445367,
    "lng": -85.906611
  },
  {
    "name": "Juan Manuel Galvez Intl",
    "city": "Roatan",
    "country": "Honduras",
    "code1": "RTB",
    "code2": "MHRO",
    "lat": 16.316814,
    "lng": -86.522961
  },
  {
    "name": "Tela",
    "city": "Tela",
    "country": "Honduras",
    "code1": "TEA",
    "code2": "MHTE",
    "lat": 15.775864,
    "lng": -87.475847
  },
  {
    "name": "Toncontin Intl",
    "city": "Tegucigalpa",
    "country": "Honduras",
    "code1": "TGU",
    "code2": "MHTG",
    "lat": 14.060883,
    "lng": -87.217197
  },
  {
    "name": "Trujillo",
    "city": "Trujillo",
    "country": "Honduras",
    "code1": "",
    "code2": "MHTJ",
    "lat": 15.926847,
    "lng": -85.93825
  },
  {
    "name": "Boscobel",
    "city": "Ocho Rios",
    "country": "Jamaica",
    "code1": "OCJ",
    "code2": "MKBS",
    "lat": 18.404247,
    "lng": -76.969017
  },
  {
    "name": "Norman Manley Intl",
    "city": "Kingston",
    "country": "Jamaica",
    "code1": "KIN",
    "code2": "MKJP",
    "lat": 17.935667,
    "lng": -76.7875
  },
  {
    "name": "Sangster Intl",
    "city": "Montego Bay",
    "country": "Jamaica",
    "code1": "MBJ",
    "code2": "MKJS",
    "lat": 18.503717,
    "lng": -77.913358
  },
  {
    "name": "Ken Jones",
    "city": "Port Antonio",
    "country": "Jamaica",
    "code1": "POT",
    "code2": "MKKJ",
    "lat": 18.198806,
    "lng": -76.534528
  },
  {
    "name": "Tinson Pen",
    "city": "Kingston",
    "country": "Jamaica",
    "code1": "KTP",
    "code2": "MKTP",
    "lat": 17.988558,
    "lng": -76.823761
  },
  {
    "name": "General Juan N Alvarez Intl",
    "city": "Acapulco",
    "country": "Mexico",
    "code1": "ACA",
    "code2": "MMAA",
    "lat": 16.757061,
    "lng": -99.753953
  },
  {
    "name": "Del Norte Intl",
    "city": "Monterrey",
    "country": "Mexico",
    "code1": "NTR",
    "code2": "MMAN",
    "lat": 25.865572,
    "lng": -100.237239
  },
  {
    "name": "Jesus Teran Intl",
    "city": "Aguascalientes",
    "country": "Mexico",
    "code1": "AGU",
    "code2": "MMAS",
    "lat": 21.705558,
    "lng": -102.317858
  },
  {
    "name": "Bahias De Huatulco Intl",
    "city": "Huatulco",
    "country": "Mexico",
    "code1": "HUX",
    "code2": "MMBT",
    "lat": 15.775317,
    "lng": -96.262572
  },
  {
    "name": "General Mariano Matamoros",
    "city": "Cuernavaca",
    "country": "Mexico",
    "code1": "CVJ",
    "code2": "MMCB",
    "lat": 18.834764,
    "lng": -99.2613
  },
  {
    "name": "Ciudad Acuna Intl New",
    "city": "Ciudad Acuna",
    "country": "Mexico",
    "code1": "",
    "code2": "MMCC",
    "lat": 29.333917,
    "lng": -101.100892
  },
  {
    "name": "Ciudad Del Carmen Intl",
    "city": "Ciudad Del Carmen",
    "country": "Mexico",
    "code1": "CME",
    "code2": "MMCE",
    "lat": 18.653739,
    "lng": -91.799017
  },
  {
    "name": "Nuevo Casas Grandes",
    "city": "Nuevo Casas Grandes",
    "country": "Mexico",
    "code1": "",
    "code2": "MMCG",
    "lat": 30.397439,
    "lng": -107.874969
  },
  {
    "name": "Chilpancingo",
    "city": "Chilpancingo",
    "country": "Mexico",
    "code1": "",
    "code2": "MMCH",
    "lat": 17.573767,
    "lng": -99.514339
  },
  {
    "name": "Culiacan Intl",
    "city": "Culiacan",
    "country": "Mexico",
    "code1": "CUL",
    "code2": "MMCL",
    "lat": 24.764547,
    "lng": -107.474717
  },
  {
    "name": "Chetumal Intl",
    "city": "Chetumal",
    "country": "Mexico",
    "code1": "CTM",
    "code2": "MMCM",
    "lat": 18.504667,
    "lng": -88.326847
  },
  {
    "name": "Ciudad Obregon Intl",
    "city": "Ciudad Obregon",
    "country": "Mexico",
    "code1": "CEN",
    "code2": "MMCN",
    "lat": 27.392639,
    "lng": -109.833111
  },
  {
    "name": "Ingeniero Alberto Acuna Ongay Intl",
    "city": "Campeche",
    "country": "Mexico",
    "code1": "CPE",
    "code2": "MMCP",
    "lat": 19.816794,
    "lng": -90.500314
  },
  {
    "name": "Abraham Gonzalez Intl",
    "city": "Ciudad Juarez",
    "country": "Mexico",
    "code1": "CJS",
    "code2": "MMCS",
    "lat": 31.636133,
    "lng": -106.428667
  },
  {
    "name": "General R Fierro Villalobos Intl",
    "city": "Chihuahua",
    "country": "Mexico",
    "code1": "CUU",
    "code2": "MMCU",
    "lat": 28.702875,
    "lng": -105.964567
  },
  {
    "name": "General Pedro Jose Mendez Intl",
    "city": "Ciudad Victoria",
    "country": "Mexico",
    "code1": "CVM",
    "code2": "MMCV",
    "lat": 23.703336,
    "lng": -98.956486
  },
  {
    "name": "Kenosha Regional Airport",
    "city": "Kenosha",
    "country": "United States",
    "code1": "ENW",
    "code2": "\\N",
    "lat": 42.5956944,
    "lng": -87.9278056
  },
  {
    "name": "Cozumel Intl",
    "city": "Cozumel",
    "country": "Mexico",
    "code1": "CZM",
    "code2": "MMCZ",
    "lat": 20.522403,
    "lng": -86.925644
  },
  {
    "name": "Durango Intl",
    "city": "Durango",
    "country": "Mexico",
    "code1": "DGO",
    "code2": "MMDO",
    "lat": 24.124194,
    "lng": -104.528014
  },
  {
    "name": "Tepic",
    "city": "Tepic",
    "country": "Mexico",
    "code1": "TPQ",
    "code2": "MMEP",
    "lat": 21.419453,
    "lng": -104.842581
  },
  {
    "name": "Ensenada",
    "city": "Ensenada",
    "country": "Mexico",
    "code1": "ESE",
    "code2": "MMES",
    "lat": 31.795281,
    "lng": -116.602772
  },
  {
    "name": "Don Miguel Hidalgo Y Costilla Intl",
    "city": "Guadalajara",
    "country": "Mexico",
    "code1": "GDL",
    "code2": "MMGL",
    "lat": 20.5218,
    "lng": -103.311167
  },
  {
    "name": "General Jose Maria Yanez Intl",
    "city": "Guaymas",
    "country": "Mexico",
    "code1": "GYM",
    "code2": "MMGM",
    "lat": 27.968983,
    "lng": -110.925169
  },
  {
    "name": "Tehuacan",
    "city": "Tehuacan",
    "country": "Mexico",
    "code1": "TCN",
    "code2": "MMHC",
    "lat": 18.497189,
    "lng": -97.419942
  },
  {
    "name": "General Ignacio P Garcia Intl",
    "city": "Hermosillo",
    "country": "Mexico",
    "code1": "HMO",
    "code2": "MMHO",
    "lat": 29.095858,
    "lng": -111.047858
  },
  {
    "name": "Colima",
    "city": "Colima",
    "country": "Mexico",
    "code1": "CLQ",
    "code2": "MMIA",
    "lat": 19.277011,
    "lng": -103.577397
  },
  {
    "name": "Isla Mujeres",
    "city": "Isla Mujeres",
    "country": "Mexico",
    "code1": "ISJ",
    "code2": "MMIM",
    "lat": 21.245033,
    "lng": -86.739967
  },
  {
    "name": "Plan De Guadalupe Intl",
    "city": "Saltillo",
    "country": "Mexico",
    "code1": "SLW",
    "code2": "MMIO",
    "lat": 25.549497,
    "lng": -100.928669
  },
  {
    "name": "Ixtepec",
    "city": "Iztepec",
    "country": "Mexico",
    "code1": "",
    "code2": "MMIT",
    "lat": 16.449336,
    "lng": -95.093697
  },
  {
    "name": "Lazaro Cardenas",
    "city": "Lazard Cardenas",
    "country": "Mexico",
    "code1": "LZC",
    "code2": "MMLC",
    "lat": 18.001731,
    "lng": -102.220525
  },
  {
    "name": "Valle Del Fuerte Intl",
    "city": "Los Mochis",
    "country": "Mexico",
    "code1": "LMM",
    "code2": "MMLM",
    "lat": 25.685194,
    "lng": -109.080806
  },
  {
    "name": "Guanajuato Intl",
    "city": "Del Bajio",
    "country": "Mexico",
    "code1": "BJX",
    "code2": "MMLO",
    "lat": 20.993464,
    "lng": -101.480847
  },
  {
    "name": "General Manuel Marquez De Leon Intl",
    "city": "La Paz",
    "country": "Mexico",
    "code1": "LAP",
    "code2": "MMLP",
    "lat": 24.072694,
    "lng": -110.362475
  },
  {
    "name": "Loreto Intl",
    "city": "Loreto",
    "country": "Mexico",
    "code1": "LTO",
    "code2": "MMLT",
    "lat": 25.989194,
    "lng": -111.348361
  },
  {
    "name": "General Servando Canales Intl",
    "city": "Matamoros",
    "country": "Mexico",
    "code1": "MAM",
    "code2": "MMMA",
    "lat": 25.769894,
    "lng": -97.525311
  },
  {
    "name": "Licenciado Manuel Crescencio Rejon Int",
    "city": "Merida",
    "country": "Mexico",
    "code1": "MID",
    "code2": "MMMD",
    "lat": 20.936981,
    "lng": -89.657672
  },
  {
    "name": "General Rodolfo Sanchez Taboada Intl",
    "city": "Mexicali",
    "country": "Mexico",
    "code1": "MXL",
    "code2": "MMML",
    "lat": 32.630634,
    "lng": -115.241637
  },
  {
    "name": "General Francisco J Mujica Intl",
    "city": "Morelia",
    "country": "Mexico",
    "code1": "MLM",
    "code2": "MMMM",
    "lat": 19.849944,
    "lng": -101.0255
  },
  {
    "name": "Minatitlan",
    "city": "Minatitlan",
    "country": "Mexico",
    "code1": "MTT",
    "code2": "MMMT",
    "lat": 18.103419,
    "lng": -94.580681
  },
  {
    "name": "Monclova Intl",
    "city": "Monclova",
    "country": "Mexico",
    "code1": "LOV",
    "code2": "MMMV",
    "lat": 26.955733,
    "lng": -101.470136
  },
  {
    "name": "Licenciado Benito Juarez Intl",
    "city": "Mexico City",
    "country": "Mexico",
    "code1": "MEX",
    "code2": "MMMX",
    "lat": 19.436303,
    "lng": -99.072097
  },
  {
    "name": "General Mariano Escobedo Intl",
    "city": "Monterrey",
    "country": "Mexico",
    "code1": "MTY",
    "code2": "MMMY",
    "lat": 25.778489,
    "lng": -100.106878
  },
  {
    "name": "General Rafael Buelna Intl",
    "city": "Mazatlan",
    "country": "Mexico",
    "code1": "MZT",
    "code2": "MMMZ",
    "lat": 23.161356,
    "lng": -106.266072
  },
  {
    "name": "Nogales Intl",
    "city": "Nogales",
    "country": "Mexico",
    "code1": "NOG",
    "code2": "MMNG",
    "lat": 31.226083,
    "lng": -110.975831
  },
  {
    "name": "Quetzalcoatl Intl",
    "city": "Nuevo Laredo",
    "country": "Mexico",
    "code1": "NLD",
    "code2": "MMNL",
    "lat": 27.443918,
    "lng": -99.57046
  },
  {
    "name": "Xoxocotlan Intl",
    "city": "Oaxaca",
    "country": "Mexico",
    "code1": "OAX",
    "code2": "MMOX",
    "lat": 16.999906,
    "lng": -96.726639
  },
  {
    "name": "Tajin",
    "city": "Poza Rico",
    "country": "Mexico",
    "code1": "PAZ",
    "code2": "MMPA",
    "lat": 20.602671,
    "lng": -97.460839
  },
  {
    "name": "Hermanos Serdan Intl",
    "city": "Puebla",
    "country": "Mexico",
    "code1": "PBC",
    "code2": "MMPB",
    "lat": 19.158144,
    "lng": -98.371447
  },
  {
    "name": "Ingeniero Juan Guillermo Villasana",
    "city": "Pachuca",
    "country": "Mexico",
    "code1": "PCA",
    "code2": "MMPC",
    "lat": 20.0772,
    "lng": -98.782814
  },
  {
    "name": "Puerto Penasco",
    "city": "Punta Penasco",
    "country": "Mexico",
    "code1": "PPE",
    "code2": "MMPE",
    "lat": 31.351878,
    "lng": -113.525728
  },
  {
    "name": "Piedras Negras Intl",
    "city": "Piedras Negras",
    "country": "Mexico",
    "code1": "PDS",
    "code2": "MMPG",
    "lat": 28.627394,
    "lng": -100.535211
  },
  {
    "name": "Licenciado Y Gen Ignacio Lopez Rayon",
    "city": "Uruapan",
    "country": "Mexico",
    "code1": "UPN",
    "code2": "MMPN",
    "lat": 19.396692,
    "lng": -102.039056
  },
  {
    "name": "Licenciado Gustavo Diaz Ordaz Intl",
    "city": "Puerto Vallarta",
    "country": "Mexico",
    "code1": "PVR",
    "code2": "MMPR",
    "lat": 20.680083,
    "lng": -105.254167
  },
  {
    "name": "Puerto Escondido Intl",
    "city": "Puerto Escondido",
    "country": "Mexico",
    "code1": "PXM",
    "code2": "MMPS",
    "lat": 15.876861,
    "lng": -97.089117
  },
  {
    "name": "Queretaro Intercontinental",
    "city": "Queretaro",
    "country": "Mexico",
    "code1": "QRO",
    "code2": "MMQT",
    "lat": 20.617289,
    "lng": -100.185658
  },
  {
    "name": "General Lucio Blanco Intl",
    "city": "Reynosa",
    "country": "Mexico",
    "code1": "REX",
    "code2": "MMRX",
    "lat": 26.008908,
    "lng": -98.228513
  },
  {
    "name": "Los Cabos Intl",
    "city": "San Jose Del Cabo",
    "country": "Mexico",
    "code1": "SJD",
    "code2": "MMSD",
    "lat": 23.15185,
    "lng": -109.721044
  },
  {
    "name": "San Felipe Intl",
    "city": "San Filipe",
    "country": "Mexico",
    "code1": "",
    "code2": "MMSF",
    "lat": 30.930222,
    "lng": -114.808639
  },
  {
    "name": "Ponciano Arriaga Intl",
    "city": "San Luis Potosi",
    "country": "Mexico",
    "code1": "SLP",
    "code2": "MMSP",
    "lat": 22.254303,
    "lng": -100.930806
  },
  {
    "name": "Tlaxcala",
    "city": "Tlaxcala",
    "country": "Mexico",
    "code1": "TXA",
    "code2": "MMTA",
    "lat": 19.537964,
    "lng": -98.173467
  },
  {
    "name": "General Div P A Angel H Corzo Molina",
    "city": "Tuxtla Gutierrez",
    "country": "Mexico",
    "code1": "",
    "code2": "MMTB",
    "lat": 16.739919,
    "lng": -93.173297
  },
  {
    "name": "Torreon Intl",
    "city": "Torreon",
    "country": "Mexico",
    "code1": "TRC",
    "code2": "MMTC",
    "lat": 25.568278,
    "lng": -103.410583
  },
  {
    "name": "Angel Albino Corzo",
    "city": "Tuxtla Gutierrez",
    "country": "Mexico",
    "code1": "TGZ",
    "code2": "MMTG",
    "lat": 16.561822,
    "lng": -93.026081
  },
  {
    "name": "General Abelardo L Rodriguez Intl",
    "city": "Tijuana",
    "country": "Mexico",
    "code1": "TIJ",
    "code2": "MMTJ",
    "lat": 32.541064,
    "lng": -116.970158
  },
  {
    "name": "General Francisco Javier Mina Intl",
    "city": "Tampico",
    "country": "Mexico",
    "code1": "TAM",
    "code2": "MMTM",
    "lat": 22.29645,
    "lng": -97.865931
  },
  {
    "name": "Tamuin",
    "city": "Tamuin",
    "country": "Mexico",
    "code1": "TSL",
    "code2": "MMTN",
    "lat": 22.038292,
    "lng": -98.806503
  },
  {
    "name": "Licenciado Adolfo Lopez Mateos Intl",
    "city": "Toluca",
    "country": "Mexico",
    "code1": "TLC",
    "code2": "MMTO",
    "lat": 19.337072,
    "lng": -99.566008
  },
  {
    "name": "Tapachula Intl",
    "city": "Tapachula",
    "country": "Mexico",
    "code1": "TAP",
    "code2": "MMTP",
    "lat": 14.794339,
    "lng": -92.370025
  },
  {
    "name": "Cancun Intl",
    "city": "Cancun",
    "country": "Mexico",
    "code1": "CUN",
    "code2": "MMUN",
    "lat": 21.036528,
    "lng": -86.877083
  },
  {
    "name": "C P A Carlos Rovirosa Intl",
    "city": "Villahermosa",
    "country": "Mexico",
    "code1": "VSA",
    "code2": "MMVA",
    "lat": 17.997,
    "lng": -92.817361
  },
  {
    "name": "General Heriberto Jara Intl",
    "city": "Vera Cruz",
    "country": "Mexico",
    "code1": "VER",
    "code2": "MMVR",
    "lat": 19.145931,
    "lng": -96.187267
  },
  {
    "name": "General Leobardo C Ruiz Intl",
    "city": "Zacatecas",
    "country": "Mexico",
    "code1": "ZCL",
    "code2": "MMZC",
    "lat": 22.897112,
    "lng": -102.68689
  },
  {
    "name": "Ixtapa Zihuatanejo Intl",
    "city": "Zihuatanejo",
    "country": "Mexico",
    "code1": "ZIH",
    "code2": "MMZH",
    "lat": 17.601569,
    "lng": -101.460536
  },
  {
    "name": "Zamora",
    "city": "Zamora",
    "country": "Mexico",
    "code1": "ZMM",
    "code2": "MMZM",
    "lat": 20.045036,
    "lng": -102.275955
  },
  {
    "name": "Playa De Oro Intl",
    "city": "Manzanillo",
    "country": "Mexico",
    "code1": "ZLO",
    "code2": "MMZO",
    "lat": 19.144778,
    "lng": -104.558631
  },
  {
    "name": "Zapopan",
    "city": "Zapopan",
    "country": "Mexico",
    "code1": "",
    "code2": "MMZP",
    "lat": 20.755833,
    "lng": -103.465278
  },
  {
    "name": "Bluefields",
    "city": "Bluefields",
    "country": "Nicaragua",
    "code1": "BEF",
    "code2": "MNBL",
    "lat": 11.990961,
    "lng": -83.774086
  },
  {
    "name": "Los Brasiles",
    "city": "Los Brasiles",
    "country": "Nicaragua",
    "code1": "",
    "code2": "MNBR",
    "lat": 12.190044,
    "lng": -86.353872
  },
  {
    "name": "Leon",
    "city": "Leon",
    "country": "Nicaragua",
    "code1": "",
    "code2": "MNLN",
    "lat": 12.428028,
    "lng": -86.902361
  },
  {
    "name": "Managua Intl",
    "city": "Managua",
    "country": "Nicaragua",
    "code1": "MGA",
    "code2": "MNMG",
    "lat": 12.141494,
    "lng": -86.168178
  },
  {
    "name": "Puerto Cabezas",
    "city": "Puerto Cabezas",
    "country": "Nicaragua",
    "code1": "PUZ",
    "code2": "MNPC",
    "lat": 14.047194,
    "lng": -83.386722
  },
  {
    "name": "Bocas Del Toro Intl",
    "city": "Bocas Del Toro",
    "country": "Panama",
    "code1": "BOC",
    "code2": "MPBO",
    "lat": 9.340853,
    "lng": -82.250842
  },
  {
    "name": "Cap Manuel Nino Intl",
    "city": "Changuinola",
    "country": "Panama",
    "code1": "CHX",
    "code2": "MPCH",
    "lat": 9.458636,
    "lng": -82.516806
  },
  {
    "name": "Enrique Malek Intl",
    "city": "David",
    "country": "Panama",
    "code1": "DAV",
    "code2": "MPDA",
    "lat": 8.391003,
    "lng": -82.434992
  },
  {
    "name": "Howard",
    "city": "Howard",
    "country": "Panama",
    "code1": "HOW",
    "code2": "MPHO",
    "lat": 8.914794,
    "lng": -79.599633
  },
  {
    "name": "Marcos A Gelabert Intl",
    "city": "Panama",
    "country": "Panama",
    "code1": "PAC",
    "code2": "MPMG",
    "lat": 8.973339,
    "lng": -79.555583
  },
  {
    "name": "Ruben Cantu",
    "city": "Santiago",
    "country": "Panama",
    "code1": "",
    "code2": "MPSA",
    "lat": 8.085597,
    "lng": -80.945253
  },
  {
    "name": "Tocumen Intl",
    "city": "Panama City",
    "country": "Panama",
    "code1": "PTY",
    "code2": "MPTO",
    "lat": 9.071364,
    "lng": -79.383453
  },
  {
    "name": "Buenos Aires",
    "city": "Buenos Aires",
    "country": "Costa Rica",
    "code1": "",
    "code2": "MRBA",
    "lat": 9.163606,
    "lng": -83.329872
  },
  {
    "name": "North Las Vegas Airport",
    "city": "Las Vegas",
    "country": "United States",
    "code1": "VGT",
    "code2": "\\N",
    "lat": 36.2106944,
    "lng": -115.1944444
  },
  {
    "name": "Coto 47",
    "city": "Coto 47",
    "country": "Costa Rica",
    "code1": "OTR",
    "code2": "MRCC",
    "lat": 8.601556,
    "lng": -82.968614
  },
  {
    "name": "Chacarita",
    "city": "Chacarita",
    "country": "Costa Rica",
    "code1": "",
    "code2": "MRCH",
    "lat": 9.981408,
    "lng": -84.772736
  },
  {
    "name": "Brown County Airport",
    "city": "Georgetown",
    "country": "United States",
    "code1": "",
    "code2": "KGEO",
    "lat": 38.8819456,
    "lng": -83.8827367
  },
  {
    "name": "El Carmen De Siquirres",
    "city": "El Carmen",
    "country": "Costa Rica",
    "code1": "",
    "code2": "MREC",
    "lat": 10.202033,
    "lng": -83.472167
  },
  {
    "name": "Nuevo Palmar Sur",
    "city": "Finca 10",
    "country": "Costa Rica",
    "code1": "",
    "code2": "MRFI",
    "lat": 8.916347,
    "lng": -83.507267
  },
  {
    "name": "Golfito",
    "city": "Golfito",
    "country": "Costa Rica",
    "code1": "GLF",
    "code2": "MRGF",
    "lat": 8.653775,
    "lng": -83.180544
  },
  {
    "name": "Guapiles",
    "city": "Guapiles",
    "country": "Costa Rica",
    "code1": "",
    "code2": "MRGP",
    "lat": 10.217194,
    "lng": -83.797003
  },
  {
    "name": "Daniel Oduber Quiros Intl",
    "city": "Liberia",
    "country": "Costa Rica",
    "code1": "LIR",
    "code2": "MRLB",
    "lat": 10.593289,
    "lng": -85.544408
  },
  {
    "name": "Los Chiles",
    "city": "Los Chiles",
    "country": "Costa Rica",
    "code1": "",
    "code2": "MRLC",
    "lat": 11.035277,
    "lng": -84.706108
  },
  {
    "name": "Limon Intl",
    "city": "Limon",
    "country": "Costa Rica",
    "code1": "LIO",
    "code2": "MRLM",
    "lat": 9.957961,
    "lng": -83.022006
  },
  {
    "name": "Nosara",
    "city": "Nosara Beach",
    "country": "Costa Rica",
    "code1": "NOB",
    "code2": "MRNS",
    "lat": 9.97649,
    "lng": -85.653
  },
  {
    "name": "Juan Santamaria Intl",
    "city": "San Jose",
    "country": "Costa Rica",
    "code1": "SJO",
    "code2": "MROC",
    "lat": 9.993861,
    "lng": -84.208806
  },
  {
    "name": "Pandora",
    "city": "Pandora",
    "country": "Costa Rica",
    "code1": "",
    "code2": "MRPD",
    "lat": 9.732169,
    "lng": -82.983214
  },
  {
    "name": "Palmar Sur",
    "city": "Palmar Sur",
    "country": "Costa Rica",
    "code1": "PMZ",
    "code2": "MRPM",
    "lat": 8.951025,
    "lng": -83.468583
  },
  {
    "name": "La Managua",
    "city": "Quepos",
    "country": "Costa Rica",
    "code1": "XQP",
    "code2": "MRQP",
    "lat": 9.443164,
    "lng": -84.129772
  },
  {
    "name": "Santa Clara De Guapiles",
    "city": "Santa Clara",
    "country": "Costa Rica",
    "code1": "",
    "code2": "MRSG",
    "lat": 10.288278,
    "lng": -83.713519
  },
  {
    "name": "San Vito De Java",
    "city": "San Vito De Jaba",
    "country": "Costa Rica",
    "code1": "",
    "code2": "MRSV",
    "lat": 8.826111,
    "lng": -82.958885
  },
  {
    "name": "El Salvador Intl",
    "city": "San Salvador",
    "country": "El Salvador",
    "code1": "SAL",
    "code2": "MSLP",
    "lat": 13.440947,
    "lng": -89.055728
  },
  {
    "name": "Ilopango Intl",
    "city": "San Salvador",
    "country": "El Salvador",
    "code1": "",
    "code2": "MSSS",
    "lat": 13.699492,
    "lng": -89.119861
  },
  {
    "name": "Cayes",
    "city": "Cayes",
    "country": "Haiti",
    "code1": "",
    "code2": "MTCA",
    "lat": 18.271103,
    "lng": -73.788289
  },
  {
    "name": "Cap Haitien Intl",
    "city": "Cap Haitien",
    "country": "Haiti",
    "code1": "CAP",
    "code2": "MTCH",
    "lat": 19.732989,
    "lng": -72.194739
  },
  {
    "name": "Jacmel",
    "city": "Jacmel",
    "country": "Haiti",
    "code1": "",
    "code2": "MTJA",
    "lat": 18.241083,
    "lng": -72.5185
  },
  {
    "name": "Toussaint Louverture Intl",
    "city": "Port-au-prince",
    "country": "Haiti",
    "code1": "PAP",
    "code2": "MTPP",
    "lat": 18.58005,
    "lng": -72.292542
  },
  {
    "name": "Gustavo Rizo",
    "city": "Baracoa Playa",
    "country": "Cuba",
    "code1": "BCA",
    "code2": "MUBA",
    "lat": 20.365317,
    "lng": -74.506206
  },
  {
    "name": "Carlos Manuel De Cespedes",
    "city": "Bayamo",
    "country": "Cuba",
    "code1": "BYM",
    "code2": "MUBY",
    "lat": 20.396331,
    "lng": -76.621494
  },
  {
    "name": "Maximo Gomez",
    "city": "Ciego De Avila",
    "country": "Cuba",
    "code1": "AVI",
    "code2": "MUCA",
    "lat": 22.027053,
    "lng": -78.789617
  },
  {
    "name": "Jardines Del Rey",
    "city": "Cunagua",
    "country": "Cuba",
    "code1": "",
    "code2": "MUCC",
    "lat": 22.460986,
    "lng": -78.328422
  },
  {
    "name": "Jaime Gonzalez",
    "city": "Cienfuegos",
    "country": "Cuba",
    "code1": "CFG",
    "code2": "MUCF",
    "lat": 22.15,
    "lng": -80.414167
  },
  {
    "name": "Vilo Acuna Intl",
    "city": "Cayo Largo del Sur",
    "country": "Cuba",
    "code1": "CYO",
    "code2": "MUCL",
    "lat": 21.616453,
    "lng": -81.545989
  },
  {
    "name": "Ignacio Agramonte Intl",
    "city": "Camaguey",
    "country": "Cuba",
    "code1": "CMW",
    "code2": "MUCM",
    "lat": 21.420428,
    "lng": -77.847433
  },
  {
    "name": "Antonio Maceo Intl",
    "city": "Santiago De Cuba",
    "country": "Cuba",
    "code1": "SCU",
    "code2": "MUCU",
    "lat": 19.969769,
    "lng": -75.835414
  },
  {
    "name": "Florida",
    "city": "Florida",
    "country": "Cuba",
    "code1": "",
    "code2": "MUFL",
    "lat": 21.499722,
    "lng": -78.202778
  },
  {
    "name": "Guantanamo Bay Ns",
    "city": "Guantanamo",
    "country": "Cuba",
    "code1": "",
    "code2": "MUGM",
    "lat": 19.906458,
    "lng": -75.207056
  },
  {
    "name": "Mariana Grajales",
    "city": "Guantanamo",
    "country": "Cuba",
    "code1": "GAO",
    "code2": "MUGT",
    "lat": 20.085419,
    "lng": -75.158328
  },
  {
    "name": "Jose Marti Intl",
    "city": "Havana",
    "country": "Cuba",
    "code1": "HAV",
    "code2": "MUHA",
    "lat": 22.989153,
    "lng": -82.409086
  },
  {
    "name": "Frank Pais Intl",
    "city": "Holguin",
    "country": "Cuba",
    "code1": "HOG",
    "code2": "MUHG",
    "lat": 20.785589,
    "lng": -76.315108
  },
  {
    "name": "La Coloma",
    "city": "La Coloma",
    "country": "Cuba",
    "code1": "LCL",
    "code2": "MULM",
    "lat": 22.336261,
    "lng": -83.642111
  },
  {
    "name": "Orestes Acosta",
    "city": "Moa",
    "country": "Cuba",
    "code1": "MOA",
    "code2": "MUMO",
    "lat": 20.654114,
    "lng": -74.922114
  },
  {
    "name": "Sierra Maestra",
    "city": "Manzanillo",
    "country": "Cuba",
    "code1": "MZO",
    "code2": "MUMZ",
    "lat": 20.288172,
    "lng": -77.0893
  },
  {
    "name": "Rafael Cabrera",
    "city": "Nueva Gerona",
    "country": "Cuba",
    "code1": "GER",
    "code2": "MUNG",
    "lat": 21.834689,
    "lng": -82.783819
  },
  {
    "name": "Playa Baracoa",
    "city": "Baracoa Playa",
    "country": "Cuba",
    "code1": "",
    "code2": "MUPB",
    "lat": 23.032778,
    "lng": -82.579444
  },
  {
    "name": "Pinar Del Rio",
    "city": "Pinar Del Rio Norte",
    "country": "Cuba",
    "code1": "",
    "code2": "MUPR",
    "lat": 22.421356,
    "lng": -83.678428
  },
  {
    "name": "San Antonio De Los Banos",
    "city": "San Antonio De Banos",
    "country": "Cuba",
    "code1": "",
    "code2": "MUSA",
    "lat": 22.871529,
    "lng": -82.509308
  },
  {
    "name": "Abel Santamaria",
    "city": "Santa Clara",
    "country": "Cuba",
    "code1": "SNU",
    "code2": "MUSC",
    "lat": 22.492192,
    "lng": -79.943611
  },
  {
    "name": "Santa Lucia",
    "city": "Santa Lucia",
    "country": "Cuba",
    "code1": "",
    "code2": "MUSL",
    "lat": 21.509453,
    "lng": -77.020375
  },
  {
    "name": "Siguanea",
    "city": "Siguanea",
    "country": "Cuba",
    "code1": "",
    "code2": "MUSN",
    "lat": 21.642525,
    "lng": -82.955114
  },
  {
    "name": "Sancti Spiritus",
    "city": "Sancti Spiritus",
    "country": "Cuba",
    "code1": "",
    "code2": "MUSS",
    "lat": 21.969969,
    "lng": -79.442692
  },
  {
    "name": "Grand Geneva Resort Airport",
    "city": "Lake Geneva",
    "country": "United States",
    "code1": "C02",
    "code2": "\\N",
    "lat": 42.6149167,
    "lng": -88.3895833
  },
  {
    "name": "Juan Gualberto Gomez Intl",
    "city": "Varadero",
    "country": "Cuba",
    "code1": "VRA",
    "code2": "MUVR",
    "lat": 23.034445,
    "lng": -81.435278
  },
  {
    "name": "Hermanos Ameijeiras",
    "city": "Las Tunas",
    "country": "Cuba",
    "code1": "VTU",
    "code2": "MUVT",
    "lat": 20.987642,
    "lng": -76.9358
  },
  {
    "name": "Gerrard Smith Intl",
    "city": "Cayman Barac",
    "country": "Cayman Islands",
    "code1": "CYB",
    "code2": "MWCB",
    "lat": 19.686981,
    "lng": -79.882789
  },
  {
    "name": "Owen Roberts Intl",
    "city": "Georgetown",
    "country": "Cayman Islands",
    "code1": "GCM",
    "code2": "MWCR",
    "lat": 19.292778,
    "lng": -81.35775
  },
  {
    "name": "Clarence A Bain",
    "city": "Clarence Bain",
    "country": "Bahamas",
    "code1": "",
    "code2": "MYAB",
    "lat": 24.287664,
    "lng": -77.684614
  },
  {
    "name": "Fresh Creek",
    "city": "Andros Town",
    "country": "Bahamas",
    "code1": "ASD",
    "code2": "MYAF",
    "lat": 24.698283,
    "lng": -77.795611
  },
  {
    "name": "Marsh Harbour",
    "city": "Marsh Harbor",
    "country": "Bahamas",
    "code1": "MHH",
    "code2": "MYAM",
    "lat": 26.511406,
    "lng": -77.083472
  },
  {
    "name": "San Andros",
    "city": "San Andros",
    "country": "Bahamas",
    "code1": "SAQ",
    "code2": "MYAN",
    "lat": 25.053814,
    "lng": -78.048997
  },
  {
    "name": "Spring Point",
    "city": "Spring Point",
    "country": "Bahamas",
    "code1": "AXP",
    "code2": "MYAP",
    "lat": 22.441828,
    "lng": -73.970858
  },
  {
    "name": "Sandy Point",
    "city": "Sandy Point",
    "country": "Bahamas",
    "code1": "",
    "code2": "MYAS",
    "lat": 26.004639,
    "lng": -77.395483
  },
  {
    "name": "Treasure Cay",
    "city": "Treasure Cay",
    "country": "Bahamas",
    "code1": "TCB",
    "code2": "MYAT",
    "lat": 26.745336,
    "lng": -77.391269
  },
  {
    "name": "Chub Cay",
    "city": "Chub Cay",
    "country": "Bahamas",
    "code1": "CCZ",
    "code2": "MYBC",
    "lat": 25.417108,
    "lng": -77.88085
  },
  {
    "name": "Great Harbour Cay",
    "city": "Bullocks Harbour",
    "country": "Bahamas",
    "code1": "",
    "code2": "MYBG",
    "lat": 25.738331,
    "lng": -77.840114
  },
  {
    "name": "South Bimini",
    "city": "Alice Town",
    "country": "Bahamas",
    "code1": "BIM",
    "code2": "MYBS",
    "lat": 25.699881,
    "lng": -79.264656
  },
  {
    "name": "De Kalb Taylor Municipal Airport",
    "city": "De Kalb",
    "country": "United States",
    "code1": "DKB",
    "code2": "\\N",
    "lat": 41.9338342,
    "lng": -88.7056864
  },
  {
    "name": "Exuma Intl",
    "city": "Great Exuma",
    "country": "Bahamas",
    "code1": "GGT",
    "code2": "MYEF",
    "lat": 23.562631,
    "lng": -75.877958
  },
  {
    "name": "George Town",
    "city": "George Town",
    "country": "Bahamas",
    "code1": "",
    "code2": "MYEG",
    "lat": 23.466667,
    "lng": -75.78167
  },
  {
    "name": "North Eleuthera",
    "city": "North Eleuthera",
    "country": "Bahamas",
    "code1": "ELH",
    "code2": "MYEH",
    "lat": 25.474861,
    "lng": -76.683489
  },
  {
    "name": "Governors Harbour",
    "city": "Governor's Harbor",
    "country": "Bahamas",
    "code1": "GHB",
    "code2": "MYEM",
    "lat": 25.284706,
    "lng": -76.331011
  },
  {
    "name": "Normans Cay",
    "city": "Norman's Cay",
    "country": "Bahamas",
    "code1": "",
    "code2": "MYEN",
    "lat": 24.594258,
    "lng": -76.820214
  },
  {
    "name": "Rock Sound",
    "city": "Rock Sound",
    "country": "Bahamas",
    "code1": "RSD",
    "code2": "MYER",
    "lat": 24.8917,
    "lng": -76.177739
  },
  {
    "name": "Staniel Cay",
    "city": "Staniel Cay",
    "country": "Bahamas",
    "code1": "",
    "code2": "MYES",
    "lat": 24.169083,
    "lng": -76.439056
  },
  {
    "name": "Grand Bahama Intl",
    "city": "Freeport",
    "country": "Bahamas",
    "code1": "FPO",
    "code2": "MYGF",
    "lat": 26.558686,
    "lng": -78.695553
  },
  {
    "name": "Matthew Town",
    "city": "Matthew Town",
    "country": "Bahamas",
    "code1": "IGA",
    "code2": "MYIG",
    "lat": 20.975,
    "lng": -73.666862
  },
  {
    "name": "Deadmans Cay",
    "city": "Dead Man's Cay",
    "country": "Bahamas",
    "code1": "LGI",
    "code2": "MYLD",
    "lat": 23.179014,
    "lng": -75.093597
  },
  {
    "name": "Stella Maris",
    "city": "Stella Maris",
    "country": "Bahamas",
    "code1": "SML",
    "code2": "MYLS",
    "lat": 23.581444,
    "lng": -75.270475
  },
  {
    "name": "Mayaguana",
    "city": "Mayaguana",
    "country": "Bahamas",
    "code1": "MYG",
    "code2": "MYMM",
    "lat": 22.379528,
    "lng": -73.0135
  },
  {
    "name": "Lynden Pindling Intl",
    "city": "Nassau",
    "country": "Bahamas",
    "code1": "NAS",
    "code2": "MYNN",
    "lat": 25.038958,
    "lng": -77.466231
  },
  {
    "name": "Duncan Town",
    "city": "Duncan Town",
    "country": "Bahamas",
    "code1": "",
    "code2": "MYRD",
    "lat": 22.181803,
    "lng": -75.729456
  },
  {
    "name": "New Port Nelson",
    "city": "Port Nelson",
    "country": "Bahamas",
    "code1": "",
    "code2": "MYRP",
    "lat": 23.684378,
    "lng": -74.836186
  },
  {
    "name": "San Salvador",
    "city": "Cockburn Town",
    "country": "Bahamas",
    "code1": "ZSA",
    "code2": "MYSM",
    "lat": 24.063275,
    "lng": -74.523967
  },
  {
    "name": "Philip S W Goldson Intl",
    "city": "Belize City",
    "country": "Belize",
    "code1": "BZE",
    "code2": "MZBZ",
    "lat": 17.539144,
    "lng": -88.308203
  },
  {
    "name": "Aitutaki",
    "city": "Aitutaki",
    "country": "Cook Islands",
    "code1": "AIT",
    "code2": "NCAI",
    "lat": -18.830922,
    "lng": -159.764233
  },
  {
    "name": "Rarotonga Intl",
    "city": "Avarua",
    "country": "Cook Islands",
    "code1": "RAR",
    "code2": "NCRG",
    "lat": -21.202739,
    "lng": -159.805556
  },
  {
    "name": "Nadi Intl",
    "city": "Nandi",
    "country": "Fiji",
    "code1": "NAN",
    "code2": "NFFN",
    "lat": -17.755392,
    "lng": 177.443378
  },
  {
    "name": "Nausori Intl",
    "city": "Nausori",
    "country": "Fiji",
    "code1": "SUV",
    "code2": "NFNA",
    "lat": -18.043267,
    "lng": 178.559228
  },
  {
    "name": "Fua Amotu Intl",
    "city": "Tongatapu",
    "country": "Tonga",
    "code1": "TBU",
    "code2": "NFTF",
    "lat": -21.241214,
    "lng": -175.149644
  },
  {
    "name": "Vavau Intl",
    "city": "Vava'u",
    "country": "Tonga",
    "code1": "VAV",
    "code2": "NFTV",
    "lat": -18.585336,
    "lng": -173.961717
  },
  {
    "name": "Bonriki Intl",
    "city": "Tarawa",
    "country": "Kiribati",
    "code1": "TRW",
    "code2": "NGTA",
    "lat": 1.381636,
    "lng": 173.147036
  },
  {
    "name": "Tabiteuea North",
    "city": "Tabiteuea North",
    "country": "Kiribati",
    "code1": "TBF",
    "code2": "NGTE",
    "lat": -1.224469,
    "lng": 174.775614
  },
  {
    "name": "Maitland Airport",
    "city": "Maitland",
    "country": "Australia",
    "code1": "MTL",
    "code2": "YMND",
    "lat": -32.7033,
    "lng": 151.488
  },
  {
    "name": "Wallis",
    "city": "Wallis",
    "country": "Wallis and Futuna",
    "code1": "WLS",
    "code2": "NLWW",
    "lat": -13.238281,
    "lng": -176.199228
  },
  {
    "name": "Faleolo Intl",
    "city": "Faleolo",
    "country": "Samoa",
    "code1": "APW",
    "code2": "NSFA",
    "lat": -13.829969,
    "lng": -172.008336
  },
  {
    "name": "Pago Pago Intl",
    "city": "Pago Pago",
    "country": "American Samoa",
    "code1": "PPG",
    "code2": "NSTU",
    "lat": -14.331,
    "lng": -170.7105
  },
  {
    "name": "Rurutu",
    "city": "Rurutu",
    "country": "French Polynesia",
    "code1": "RUR",
    "code2": "NTAR",
    "lat": -22.434069,
    "lng": -151.360614
  },
  {
    "name": "Tubuai",
    "city": "Tubuai",
    "country": "French Polynesia",
    "code1": "TUB",
    "code2": "NTAT",
    "lat": -23.365353,
    "lng": -149.524072
  },
  {
    "name": "Anaa",
    "city": "Anaa",
    "country": "French Polynesia",
    "code1": "AAA",
    "code2": "NTGA",
    "lat": -17.352606,
    "lng": -145.509956
  },
  {
    "name": "Fangatau",
    "city": "Fangatau",
    "country": "French Polynesia",
    "code1": "",
    "code2": "NTGB",
    "lat": -15.819928,
    "lng": -140.88715
  },
  {
    "name": "Tikehau",
    "city": "Tikehau",
    "country": "French Polynesia",
    "code1": "TIH",
    "code2": "NTGC",
    "lat": -15.119617,
    "lng": -148.230697
  },
  {
    "name": "Reao",
    "city": "Reao",
    "country": "French Polynesia",
    "code1": "REA",
    "code2": "NTGE",
    "lat": -18.465861,
    "lng": -136.439706
  },
  {
    "name": "Fakarava",
    "city": "Fakarava",
    "country": "French Polynesia",
    "code1": "FAV",
    "code2": "NTGF",
    "lat": -16.05415,
    "lng": -145.656994
  },
  {
    "name": "Manihi",
    "city": "Manihi",
    "country": "French Polynesia",
    "code1": "XMH",
    "code2": "NTGI",
    "lat": -14.436764,
    "lng": -146.070056
  },
  {
    "name": "Totegegie",
    "city": "Totegegie",
    "country": "French Polynesia",
    "code1": "GMR",
    "code2": "NTGJ",
    "lat": -23.079861,
    "lng": -134.890333
  },
  {
    "name": "Kaukura",
    "city": "Kaukura Atoll",
    "country": "French Polynesia",
    "code1": "KKR",
    "code2": "NTGK",
    "lat": -15.663333,
    "lng": -146.884769
  },
  {
    "name": "Makemo",
    "city": "Makemo",
    "country": "French Polynesia",
    "code1": "MKP",
    "code2": "NTGM",
    "lat": -16.583919,
    "lng": -143.658369
  },
  {
    "name": "Puka Puka",
    "city": "Puka Puka",
    "country": "French Polynesia",
    "code1": "PKP",
    "code2": "NTGP",
    "lat": -14.809458,
    "lng": -138.812811
  },
  {
    "name": "Takapoto",
    "city": "Takapoto",
    "country": "French Polynesia",
    "code1": "TKP",
    "code2": "NTGT",
    "lat": -14.709544,
    "lng": -145.245814
  },
  {
    "name": "Arutua",
    "city": "Arutua",
    "country": "French Polynesia",
    "code1": "AXR",
    "code2": "NTGU",
    "lat": -15.248289,
    "lng": -146.616708
  },
  {
    "name": "Mataiva",
    "city": "Mataiva",
    "country": "French Polynesia",
    "code1": "MVT",
    "code2": "NTGV",
    "lat": -14.868055,
    "lng": -148.717225
  },
  {
    "name": "Takaroa",
    "city": "Takaroa",
    "country": "French Polynesia",
    "code1": "TKX",
    "code2": "NTKR",
    "lat": -14.455781,
    "lng": -145.024542
  },
  {
    "name": "Nuku Hiva",
    "city": "Nuku Hiva",
    "country": "French Polynesia",
    "code1": "NHV",
    "code2": "NTMD",
    "lat": -8.795603,
    "lng": -140.228789
  },
  {
    "name": "Purude University Airport",
    "city": "Lafayette",
    "country": "United States",
    "code1": "LAF",
    "code2": "\\N",
    "lat": 40.4123056,
    "lng": -86.9368889
  },
  {
    "name": "Bora Bora",
    "city": "Bora Bora",
    "country": "French Polynesia",
    "code1": "BOB",
    "code2": "NTTB",
    "lat": -16.444378,
    "lng": -151.751286
  },
  {
    "name": "Rangiroa",
    "city": "Rangiroa",
    "country": "French Polynesia",
    "code1": "RGI",
    "code2": "NTTG",
    "lat": -14.954283,
    "lng": -147.6608
  },
  {
    "name": "Huahine",
    "city": "Huahine Island",
    "country": "French Polynesia",
    "code1": "HUH",
    "code2": "NTTH",
    "lat": -16.687242,
    "lng": -151.021667
  },
  {
    "name": "Moorea",
    "city": "Moorea",
    "country": "French Polynesia",
    "code1": "MOZ",
    "code2": "NTTM",
    "lat": -17.489972,
    "lng": -149.761869
  },
  {
    "name": "Hao",
    "city": "Hao Island",
    "country": "French Polynesia",
    "code1": "HOI",
    "code2": "NTTO",
    "lat": -18.074814,
    "lng": -140.945886
  },
  {
    "name": "Maupiti",
    "city": "Maupiti",
    "country": "French Polynesia",
    "code1": "MAU",
    "code2": "NTTP",
    "lat": -16.426486,
    "lng": -152.243669
  },
  {
    "name": "Raiatea",
    "city": "Raiatea Island",
    "country": "French Polynesia",
    "code1": "RFP",
    "code2": "NTTR",
    "lat": -16.722861,
    "lng": -151.465856
  },
  {
    "name": "Port Vila Bauerfield",
    "city": "Port-vila",
    "country": "Vanuatu",
    "code1": "VLI",
    "code2": "NVVV",
    "lat": -17.699325,
    "lng": 168.319794
  },
  {
    "name": "Kone",
    "city": "Kone",
    "country": "New Caledonia",
    "code1": "KNQ",
    "code2": "NWWD",
    "lat": -21.053428,
    "lng": 164.837806
  },
  {
    "name": "Koumac",
    "city": "Koumac",
    "country": "New Caledonia",
    "code1": "KOC",
    "code2": "NWWK",
    "lat": -20.546314,
    "lng": 164.255625
  },
  {
    "name": "Lifou",
    "city": "Lifou",
    "country": "New Caledonia",
    "code1": "LIF",
    "code2": "NWWL",
    "lat": -20.7748,
    "lng": 167.239864
  },
  {
    "name": "Magenta",
    "city": "Noumea",
    "country": "New Caledonia",
    "code1": "GEA",
    "code2": "NWWM",
    "lat": -22.258278,
    "lng": 166.472806
  },
  {
    "name": "Mare",
    "city": "Mare",
    "country": "New Caledonia",
    "code1": "MEE",
    "code2": "NWWR",
    "lat": -21.481678,
    "lng": 168.037508
  },
  {
    "name": "Touho",
    "city": "Touho",
    "country": "New Caledonia",
    "code1": "TOU",
    "code2": "NWWU",
    "lat": -20.790028,
    "lng": 165.259486
  },
  {
    "name": "Ouvea",
    "city": "Ouvea",
    "country": "New Caledonia",
    "code1": "UVE",
    "code2": "NWWV",
    "lat": -20.640556,
    "lng": 166.572778
  },
  {
    "name": "La Tontouta",
    "city": "Noumea",
    "country": "New Caledonia",
    "code1": "NOU",
    "code2": "NWWW",
    "lat": -22.014553,
    "lng": 166.212972
  },
  {
    "name": "Auckland Intl",
    "city": "Auckland",
    "country": "New Zealand",
    "code1": "AKL",
    "code2": "NZAA",
    "lat": -37.008056,
    "lng": 174.791667
  },
  {
    "name": "Taupo",
    "city": "Taupo",
    "country": "New Zealand",
    "code1": "TUO",
    "code2": "NZAP",
    "lat": -38.739723,
    "lng": 176.084444
  },
  {
    "name": "Ardmore",
    "city": "Ardmore",
    "country": "New Zealand",
    "code1": "AMZ",
    "code2": "NZAR",
    "lat": -37.029722,
    "lng": 174.973333
  },
  {
    "name": "Christchurch Intl",
    "city": "Christchurch",
    "country": "New Zealand",
    "code1": "CHC",
    "code2": "NZCH",
    "lat": -43.489358,
    "lng": 172.532225
  },
  {
    "name": "Chatham Islands",
    "city": "Chatham Island",
    "country": "New Zealand",
    "code1": "CHT",
    "code2": "NZCI",
    "lat": -43.81,
    "lng": -176.457222
  },
  {
    "name": "Dunedin",
    "city": "Dunedin",
    "country": "New Zealand",
    "code1": "DUD",
    "code2": "NZDN",
    "lat": -45.928055,
    "lng": 170.198333
  },
  {
    "name": "Gisborne",
    "city": "Gisborne",
    "country": "New Zealand",
    "code1": "GIS",
    "code2": "NZGS",
    "lat": -38.663333,
    "lng": 177.978333
  },
  {
    "name": "Glentanner",
    "city": "Glentanner",
    "country": "New Zealand",
    "code1": "MON",
    "code2": "NZGT",
    "lat": -43.906666,
    "lng": 170.128333
  },
  {
    "name": "Hokitika",
    "city": "Hokitika",
    "country": "New Zealand",
    "code1": "HKK",
    "code2": "NZHK",
    "lat": -42.713611,
    "lng": 170.985278
  },
  {
    "name": "Hamilton",
    "city": "Hamilton",
    "country": "New Zealand",
    "code1": "HLZ",
    "code2": "NZHN",
    "lat": -37.866661,
    "lng": 175.332056
  },
  {
    "name": "Hastings",
    "city": "Hastings",
    "country": "New Zealand",
    "code1": "",
    "code2": "NZHS",
    "lat": -39.646667,
    "lng": 176.766944
  },
  {
    "name": "Kerikeri",
    "city": "Kerikeri",
    "country": "New Zealand",
    "code1": "KKE",
    "code2": "NZKK",
    "lat": -35.262779,
    "lng": 173.911944
  },
  {
    "name": "Kaitaia",
    "city": "Kaitaia",
    "country": "New Zealand",
    "code1": "KAT",
    "code2": "NZKT",
    "lat": -35.07,
    "lng": 173.285278
  },
  {
    "name": "Alexandra",
    "city": "Alexandra",
    "country": "New Zealand",
    "code1": "ALR",
    "code2": "NZLX",
    "lat": -45.211666,
    "lng": 169.373333
  },
  {
    "name": "Mount Cook",
    "city": "Mount Cook",
    "country": "New Zealand",
    "code1": "GTN",
    "code2": "NZMC",
    "lat": -43.764999,
    "lng": 170.133333
  },
  {
    "name": "Manapouri",
    "city": "Manapouri",
    "country": "New Zealand",
    "code1": "TEU",
    "code2": "NZMO",
    "lat": -45.533056,
    "lng": 167.65
  },
  {
    "name": "Masterton",
    "city": "Masterton",
    "country": "New Zealand",
    "code1": "MRO",
    "code2": "NZMS",
    "lat": -40.973333,
    "lng": 175.633611
  },
  {
    "name": "New Plymouth",
    "city": "New Plymouth",
    "country": "New Zealand",
    "code1": "NPL",
    "code2": "NZNP",
    "lat": -39.008611,
    "lng": 174.179167
  },
  {
    "name": "Nelson",
    "city": "Nelson",
    "country": "New Zealand",
    "code1": "NSN",
    "code2": "NZNS",
    "lat": -41.298333,
    "lng": 173.221111
  },
  {
    "name": "Invercargill",
    "city": "Invercargill",
    "country": "New Zealand",
    "code1": "IVC",
    "code2": "NZNV",
    "lat": -46.412408,
    "lng": 168.312992
  },
  {
    "name": "Ohakea",
    "city": "Ohakea",
    "country": "New Zealand",
    "code1": "",
    "code2": "NZOH",
    "lat": -40.206039,
    "lng": 175.387808
  },
  {
    "name": "Oamaru",
    "city": "Oamaru",
    "country": "New Zealand",
    "code1": "OAM",
    "code2": "NZOU",
    "lat": -44.97,
    "lng": 171.081667
  },
  {
    "name": "Palmerston North",
    "city": "Palmerston North",
    "country": "New Zealand",
    "code1": "PMR",
    "code2": "NZPM",
    "lat": -40.320556,
    "lng": 175.616944
  },
  {
    "name": "Paraparaumu",
    "city": "Paraparaumu",
    "country": "New Zealand",
    "code1": "PPQ",
    "code2": "NZPP",
    "lat": -40.904722,
    "lng": 174.989167
  },
  {
    "name": "Queenstown",
    "city": "Queenstown International",
    "country": "New Zealand",
    "code1": "ZQN",
    "code2": "NZQN",
    "lat": -45.021111,
    "lng": 168.739167
  },
  {
    "name": "Rotorua",
    "city": "Rotorua",
    "country": "New Zealand",
    "code1": "ROT",
    "code2": "NZRO",
    "lat": -38.109167,
    "lng": 176.317222
  },
  {
    "name": "Waiouru",
    "city": "Waiouru",
    "country": "New Zealand",
    "code1": "",
    "code2": "NZRU",
    "lat": -39.446389,
    "lng": 175.658333
  },
  {
    "name": "South Pole Station",
    "city": "Stephen's Island",
    "country": "Antarctica",
    "code1": "",
    "code2": "NZSP",
    "lat": -89.999997,
    "lng": 0
  },
  {
    "name": "Tauranga",
    "city": "Tauranga",
    "country": "New Zealand",
    "code1": "TRG",
    "code2": "NZTG",
    "lat": -37.671944,
    "lng": 176.19611
  },
  {
    "name": "Timaru",
    "city": "Timaru",
    "country": "New Zealand",
    "code1": "TIU",
    "code2": "NZTU",
    "lat": -44.302778,
    "lng": 171.225278
  },
  {
    "name": "Pukaki",
    "city": "Pukaki",
    "country": "New Zealand",
    "code1": "",
    "code2": "NZUK",
    "lat": -44.235,
    "lng": 170.118333
  },
  {
    "name": "Woodbourne",
    "city": "Woodbourne",
    "country": "New Zealand",
    "code1": "BHE",
    "code2": "NZWB",
    "lat": -41.518333,
    "lng": 173.870278
  },
  {
    "name": "Mcmurdo Station",
    "city": "Weydon",
    "country": "Antarctica",
    "code1": "",
    "code2": "NZWD",
    "lat": -77.867358,
    "lng": 167.056572
  },
  {
    "name": "Wanaka",
    "city": "Wanaka",
    "country": "New Zealand",
    "code1": "WKA",
    "code2": "NZWF",
    "lat": -44.722222,
    "lng": 169.245556
  },
  {
    "name": "Wigram",
    "city": "Wigram",
    "country": "New Zealand",
    "code1": "",
    "code2": "NZWG",
    "lat": -43.551111,
    "lng": 172.552778
  },
  {
    "name": "Whakatane",
    "city": "Whakatane",
    "country": "New Zealand",
    "code1": "WHK",
    "code2": "NZWK",
    "lat": -37.920556,
    "lng": 176.914167
  },
  {
    "name": "Wellington Intl",
    "city": "Wellington",
    "country": "New Zealand",
    "code1": "WLG",
    "code2": "NZWN",
    "lat": -41.327221,
    "lng": 174.805278
  },
  {
    "name": "Wairoa",
    "city": "Wairoa",
    "country": "New Zealand",
    "code1": "",
    "code2": "NZWO",
    "lat": -39.006944,
    "lng": 177.406667
  },
  {
    "name": "Whenuapai",
    "city": "Whenuapai",
    "country": "New Zealand",
    "code1": "",
    "code2": "NZWP",
    "lat": -36.787777,
    "lng": 174.630278
  },
  {
    "name": "Whangarei",
    "city": "Whangarei",
    "country": "New Zealand",
    "code1": "WRE",
    "code2": "NZWR",
    "lat": -35.768333,
    "lng": 174.365
  },
  {
    "name": "Westport",
    "city": "Westport",
    "country": "New Zealand",
    "code1": "WSZ",
    "code2": "NZWS",
    "lat": -41.738056,
    "lng": 171.580833
  },
  {
    "name": "Wanganui",
    "city": "Wanganui",
    "country": "New Zealand",
    "code1": "WAG",
    "code2": "NZWU",
    "lat": -39.962222,
    "lng": 175.025278
  },
  {
    "name": "Herat",
    "city": "Herat",
    "country": "Afghanistan",
    "code1": "HEA",
    "code2": "OAHR",
    "lat": 34.210017,
    "lng": 62.2283
  },
  {
    "name": "Jalalabad",
    "city": "Jalalabad",
    "country": "Afghanistan",
    "code1": "JAA",
    "code2": "OAJL",
    "lat": 34.399842,
    "lng": 70.498625
  },
  {
    "name": "Kabul Intl",
    "city": "Kabul",
    "country": "Afghanistan",
    "code1": "KBL",
    "code2": "OAKB",
    "lat": 34.565853,
    "lng": 69.212328
  },
  {
    "name": "Kandahar",
    "city": "Kandahar",
    "country": "Afghanistan",
    "code1": "KDH",
    "code2": "OAKN",
    "lat": 31.505756,
    "lng": 65.847822
  },
  {
    "name": "Maimana",
    "city": "Maimama",
    "country": "Afghanistan",
    "code1": "MMZ",
    "code2": "OAMN",
    "lat": 35.930789,
    "lng": 64.760917
  },
  {
    "name": "Mazar I Sharif",
    "city": "Mazar-i-sharif",
    "country": "Afghanistan",
    "code1": "MZR",
    "code2": "OAMS",
    "lat": 36.706914,
    "lng": 67.209678
  },
  {
    "name": "Shindand",
    "city": "Shindand",
    "country": "Afghanistan",
    "code1": "",
    "code2": "OASD",
    "lat": 33.391331,
    "lng": 62.260975
  },
  {
    "name": "Sheberghan",
    "city": "Sheberghan",
    "country": "Afghanistan",
    "code1": "",
    "code2": "OASG",
    "lat": 36.750783,
    "lng": 65.913164
  },
  {
    "name": "Konduz",
    "city": "Kunduz",
    "country": "Afghanistan",
    "code1": "UND",
    "code2": "OAUZ",
    "lat": 36.665111,
    "lng": 68.910833
  },
  {
    "name": "Bahrain Intl",
    "city": "Bahrain",
    "country": "Bahrain",
    "code1": "BAH",
    "code2": "OBBI",
    "lat": 26.270834,
    "lng": 50.63361
  },
  {
    "name": "Shaikh Isa",
    "city": "Bahrain",
    "country": "Bahrain",
    "code1": "",
    "code2": "OBBS",
    "lat": 25.918362,
    "lng": 50.590557
  },
  {
    "name": "Abha",
    "city": "Abha",
    "country": "Saudi Arabia",
    "code1": "AHB",
    "code2": "OEAB",
    "lat": 18.240367,
    "lng": 42.656625
  },
  {
    "name": "Al Ahsa",
    "city": "Al-ahsa",
    "country": "Saudi Arabia",
    "code1": "HOF",
    "code2": "OEAH",
    "lat": 25.285306,
    "lng": 49.485189
  },
  {
    "name": "Al Baha",
    "city": "El-baha",
    "country": "Saudi Arabia",
    "code1": "ABT",
    "code2": "OEBA",
    "lat": 20.296139,
    "lng": 41.634277
  },
  {
    "name": "Bisha",
    "city": "Bisha",
    "country": "Saudi Arabia",
    "code1": "BHH",
    "code2": "OEBH",
    "lat": 19.98435,
    "lng": 42.620881
  },
  {
    "name": "Abqaiq",
    "city": "Abqaiq",
    "country": "Saudi Arabia",
    "code1": "",
    "code2": "OEBQ",
    "lat": 25.911281,
    "lng": 49.591231
  },
  {
    "name": "King Fahd Intl",
    "city": "Dammam",
    "country": "Saudi Arabia",
    "code1": "DMM",
    "code2": "OEDF",
    "lat": 26.471161,
    "lng": 49.79789
  },
  {
    "name": "King Abdulaziz Ab",
    "city": "Dhahran",
    "country": "Saudi Arabia",
    "code1": "DHA",
    "code2": "OEDR",
    "lat": 26.265417,
    "lng": 50.152027
  },
  {
    "name": "King Abdullah Bin Abdulaziz",
    "city": "Gizan",
    "country": "Saudi Arabia",
    "code1": "GIZ",
    "code2": "OEGN",
    "lat": 16.901111,
    "lng": 42.585833
  },
  {
    "name": "Gassim",
    "city": "Gassim",
    "country": "Saudi Arabia",
    "code1": "ELQ",
    "code2": "OEGS",
    "lat": 26.302822,
    "lng": 43.773911
  },
  {
    "name": "Guriat",
    "city": "Guriat",
    "country": "Saudi Arabia",
    "code1": "URY",
    "code2": "OEGT",
    "lat": 31.411942,
    "lng": 37.279469
  },
  {
    "name": "Hail",
    "city": "Hail",
    "country": "Saudi Arabia",
    "code1": "HAS",
    "code2": "OEHL",
    "lat": 27.437917,
    "lng": 41.686292
  },
  {
    "name": "Jubail",
    "city": "Jubail",
    "country": "Saudi Arabia",
    "code1": "",
    "code2": "OEJB",
    "lat": 27.039028,
    "lng": 49.405083
  },
  {
    "name": "King Faisal Naval Base",
    "city": "Jeddah",
    "country": "Saudi Arabia",
    "code1": "",
    "code2": "OEJF",
    "lat": 21.3481,
    "lng": 39.173033
  },
  {
    "name": "King Abdulaziz Intl",
    "city": "Jeddah",
    "country": "Saudi Arabia",
    "code1": "JED",
    "code2": "OEJN",
    "lat": 21.679564,
    "lng": 39.156536
  },
  {
    "name": "King Khaled Military City",
    "city": "King Khalid Mil.city",
    "country": "Saudi Arabia",
    "code1": "HBT",
    "code2": "OEKK",
    "lat": 27.900917,
    "lng": 45.528194
  },
  {
    "name": "Prince Mohammad Bin Abdulaziz",
    "city": "Madinah",
    "country": "Saudi Arabia",
    "code1": "MED",
    "code2": "OEMA",
    "lat": 24.553422,
    "lng": 39.705061
  },
  {
    "name": "Nejran",
    "city": "Nejran",
    "country": "Saudi Arabia",
    "code1": "EAM",
    "code2": "OENG",
    "lat": 17.611436,
    "lng": 44.419169
  },
  {
    "name": "Qaisumah",
    "city": "Hafr Al-batin",
    "country": "Saudi Arabia",
    "code1": "AQI",
    "code2": "OEPA",
    "lat": 28.335192,
    "lng": 46.125069
  },
  {
    "name": "Pump Station 3",
    "city": "Petroline 3",
    "country": "Saudi Arabia",
    "code1": "",
    "code2": "OEPC",
    "lat": 25.174547,
    "lng": 47.488431
  },
  {
    "name": "Pump Station 6",
    "city": "Petroline 6",
    "country": "Saudi Arabia",
    "code1": "",
    "code2": "OEPF",
    "lat": 24.710333,
    "lng": 44.964527
  },
  {
    "name": "Pump Station 10",
    "city": "Petroline 10",
    "country": "Saudi Arabia",
    "code1": "",
    "code2": "OEPJ",
    "lat": 24.107339,
    "lng": 41.036047
  },
  {
    "name": "Rabigh",
    "city": "Rabigh",
    "country": "Saudi Arabia",
    "code1": "",
    "code2": "OERB",
    "lat": 22.702608,
    "lng": 39.069842
  },
  {
    "name": "Rafha",
    "city": "Rafha",
    "country": "Saudi Arabia",
    "code1": "RAH",
    "code2": "OERF",
    "lat": 29.626419,
    "lng": 43.490614
  },
  {
    "name": "King Khaled Intl",
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "code1": "RUH",
    "code2": "OERK",
    "lat": 24.95764,
    "lng": 46.698776
  },
  {
    "name": "Ras Mishab",
    "city": "Rash Mishab",
    "country": "Saudi Arabia",
    "code1": "",
    "code2": "OERM",
    "lat": 28.079584,
    "lng": 48.610973
  },
  {
    "name": "Arar",
    "city": "Arar",
    "country": "Saudi Arabia",
    "code1": "RAE",
    "code2": "OERR",
    "lat": 30.906589,
    "lng": 41.138217
  },
  {
    "name": "Ras Tanura",
    "city": "Ras Tanura",
    "country": "Saudi Arabia",
    "code1": "",
    "code2": "OERT",
    "lat": 26.723108,
    "lng": 50.030814
  },
  {
    "name": "Sharurah",
    "city": "Sharurah",
    "country": "Saudi Arabia",
    "code1": "SHW",
    "code2": "OESH",
    "lat": 17.466875,
    "lng": 47.121431
  },
  {
    "name": "Mudgee Airport",
    "city": "Mudgee",
    "country": "Australia",
    "code1": "DGE",
    "code2": "YMDG",
    "lat": -32.5625,
    "lng": 149.611
  },
  {
    "name": "Sulayel",
    "city": "Sulayel",
    "country": "Saudi Arabia",
    "code1": "SLF",
    "code2": "OESL",
    "lat": 20.464744,
    "lng": 45.619644
  },
  {
    "name": "Tabuk",
    "city": "Tabuk",
    "country": "Saudi Arabia",
    "code1": "TUU",
    "code2": "OETB",
    "lat": 28.365417,
    "lng": 36.618889
  },
  {
    "name": "Taif",
    "city": "Taif",
    "country": "Saudi Arabia",
    "code1": "TIF",
    "code2": "OETF",
    "lat": 21.483418,
    "lng": 40.544334
  },
  {
    "name": "Thumamah",
    "city": "Thumamah",
    "country": "Saudi Arabia",
    "code1": "",
    "code2": "OETH",
    "lat": 25.212986,
    "lng": 46.640978
  },
  {
    "name": "Ras Tanajib",
    "city": "Ras Tanajib",
    "country": "Saudi Arabia",
    "code1": "",
    "code2": "OETN",
    "lat": 27.867844,
    "lng": 48.76915
  },
  {
    "name": "Turaif",
    "city": "Turaif",
    "country": "Saudi Arabia",
    "code1": "TUI",
    "code2": "OETR",
    "lat": 31.692683,
    "lng": 38.7312
  },
  {
    "name": "Miami University Airport",
    "city": "Oxford",
    "country": "United States",
    "code1": "OXD",
    "code2": "\\N",
    "lat": 39.5022607,
    "lng": -84.7843814
  },
  {
    "name": "Wejh",
    "city": "Wejh",
    "country": "Saudi Arabia",
    "code1": "EJH",
    "code2": "OEWJ",
    "lat": 26.198553,
    "lng": 36.476381
  },
  {
    "name": "Yenbo",
    "city": "Yenbo",
    "country": "Saudi Arabia",
    "code1": "YNB",
    "code2": "OEYN",
    "lat": 24.144244,
    "lng": 38.06335
  },
  {
    "name": "Abadan",
    "city": "Abadan",
    "country": "Iran",
    "code1": "ABD",
    "code2": "OIAA",
    "lat": 30.371111,
    "lng": 48.228333
  },
  {
    "name": "Dezful",
    "city": "Dezful",
    "country": "Iran",
    "code1": "",
    "code2": "OIAD",
    "lat": 32.434444,
    "lng": 48.39764
  },
  {
    "name": "Aghajari",
    "city": "Aghajari",
    "country": "Iran",
    "code1": "",
    "code2": "OIAG",
    "lat": 30.74445,
    "lng": 49.677183
  },
  {
    "name": "Gachsaran",
    "city": "Gachsaran",
    "country": "Iran",
    "code1": "",
    "code2": "OIAH",
    "lat": 30.337567,
    "lng": 50.827964
  },
  {
    "name": "Shahid Asyaee",
    "city": "Masjed Soleiman",
    "country": "Iran",
    "code1": "QMJ",
    "code2": "OIAI",
    "lat": 32.002372,
    "lng": 49.270364
  },
  {
    "name": "Omidiyeh",
    "city": "Omidyeh",
    "country": "Iran",
    "code1": "",
    "code2": "OIAJ",
    "lat": 30.835167,
    "lng": 49.534916
  },
  {
    "name": "Mahshahr",
    "city": "Bandar Mahshahr",
    "country": "Iran",
    "code1": "MRX",
    "code2": "OIAM",
    "lat": 30.556192,
    "lng": 49.151879
  },
  {
    "name": "Ahwaz",
    "city": "Ahwaz",
    "country": "Iran",
    "code1": "AWZ",
    "code2": "OIAW",
    "lat": 31.337431,
    "lng": 48.76195
  },
  {
    "name": "Abumusa Island",
    "city": "Abumusa I.",
    "country": "Iran",
    "code1": "",
    "code2": "OIBA",
    "lat": 25.875742,
    "lng": 55.032994
  },
  {
    "name": "Bushehr",
    "city": "Bushehr",
    "country": "Iran",
    "code1": "BUZ",
    "code2": "OIBB",
    "lat": 28.944811,
    "lng": 50.834637
  },
  {
    "name": "Bastak",
    "city": "Bastak",
    "country": "Iran",
    "code1": "",
    "code2": "OIBH",
    "lat": 27.212678,
    "lng": 54.318592
  },
  {
    "name": "Asaloyeh",
    "city": "Golbandi",
    "country": "Iran",
    "code1": "",
    "code2": "OIBI",
    "lat": 27.481425,
    "lng": 52.615483
  },
  {
    "name": "Kish Island",
    "city": "Kish Island",
    "country": "Iran",
    "code1": "KIH",
    "code2": "OIBK",
    "lat": 26.526156,
    "lng": 53.980211
  },
  {
    "name": "Bandar Lengeh",
    "city": "Bandar Lengeh",
    "country": "Iran",
    "code1": "BDH",
    "code2": "OIBL",
    "lat": 26.532,
    "lng": 54.824847
  },
  {
    "name": "Khark Island",
    "city": "Khark Island",
    "country": "Iran",
    "code1": "",
    "code2": "OIBQ",
    "lat": 29.260278,
    "lng": 50.323889
  },
  {
    "name": "Sirri Island",
    "city": "Siri Island",
    "country": "Iran",
    "code1": "",
    "code2": "OIBS",
    "lat": 25.908869,
    "lng": 54.5394
  },
  {
    "name": "Lavan Island",
    "city": "Lavan Island",
    "country": "Iran",
    "code1": "",
    "code2": "OIBV",
    "lat": 26.8103,
    "lng": 53.356289
  },
  {
    "name": "Shahid Ashrafi Esfahani",
    "city": "Bakhtaran",
    "country": "Iran",
    "code1": "KSH",
    "code2": "OICC",
    "lat": 34.345853,
    "lng": 47.158128
  },
  {
    "name": "Sanandaj",
    "city": "Sanandaj",
    "country": "Iran",
    "code1": "SDG",
    "code2": "OICS",
    "lat": 35.245856,
    "lng": 47.009247
  },
  {
    "name": "Hesa",
    "city": "Daran",
    "country": "Iran",
    "code1": "",
    "code2": "OIFE",
    "lat": 32.928889,
    "lng": 51.561111
  },
  {
    "name": "Shahid Vatan Pour Air Base",
    "city": "Esfahan",
    "country": "Iran",
    "code1": "",
    "code2": "OIFH",
    "lat": 32.567039,
    "lng": 51.691594
  },
  {
    "name": "Kashan",
    "city": "Kashan",
    "country": "Iran",
    "code1": "",
    "code2": "OIFK",
    "lat": 33.895333,
    "lng": 51.577044
  },
  {
    "name": "Esfahan Shahid Beheshti Intl",
    "city": "Esfahan",
    "country": "Iran",
    "code1": "",
    "code2": "OIFM",
    "lat": 32.750836,
    "lng": 51.861267
  },
  {
    "name": "Badr Air Base",
    "city": "Sepah",
    "country": "Iran",
    "code1": "",
    "code2": "OIFP",
    "lat": 32.621108,
    "lng": 51.697017
  },
  {
    "name": "Rasht",
    "city": "Rasht",
    "country": "Iran",
    "code1": "RAS",
    "code2": "OIGG",
    "lat": 37.325314,
    "lng": 49.605817
  },
  {
    "name": "Delaware County Airport",
    "city": "Muncie",
    "country": "United States",
    "code1": "MIE",
    "code2": "\\N",
    "lat": 40.2424722,
    "lng": -85.39575
  },
  {
    "name": "Arak",
    "city": "Arak",
    "country": "Iran",
    "code1": "",
    "code2": "OIHR",
    "lat": 34.138147,
    "lng": 49.847292
  },
  {
    "name": "Ghazvin Azadi",
    "city": "Abe-ali",
    "country": "Iran",
    "code1": "",
    "code2": "OIIA",
    "lat": 35.952097,
    "lng": 50.450778
  },
  {
    "name": "Kushke Nosrat",
    "city": "Kushke Nosrat",
    "country": "Iran",
    "code1": "",
    "code2": "OIIC",
    "lat": 34.98395,
    "lng": 50.806219
  },
  {
    "name": "Doshan Tappeh",
    "city": "Teheran",
    "country": "Iran",
    "code1": "",
    "code2": "OIID",
    "lat": 35.702983,
    "lng": 51.475131
  },
  {
    "name": "Imam Khomeini Intl",
    "city": "Abyek",
    "country": "Iran",
    "code1": "",
    "code2": "OIIE",
    "lat": 35.416111,
    "lng": 51.152222
  },
  {
    "name": "Ghale Morghi",
    "city": "Teheran",
    "country": "Iran",
    "code1": "",
    "code2": "OIIG",
    "lat": 35.644806,
    "lng": 51.380695
  },
  {
    "name": "Mehrabad Intl",
    "city": "Teheran",
    "country": "Iran",
    "code1": "THR",
    "code2": "OIII",
    "lat": 35.689167,
    "lng": 51.313416
  },
  {
    "name": "Ghazvin",
    "city": "Ghazvin",
    "country": "Iran",
    "code1": "",
    "code2": "OIIK",
    "lat": 36.240061,
    "lng": 50.047153
  },
  {
    "name": "Naja",
    "city": "Khoram Dareh",
    "country": "Iran",
    "code1": "",
    "code2": "OIIM",
    "lat": 35.776286,
    "lng": 50.881014
  },
  {
    "name": "Bandar Abbass Intl",
    "city": "Bandar Abbas",
    "country": "Iran",
    "code1": "BND",
    "code2": "OIKB",
    "lat": 27.218317,
    "lng": 56.37785
  },
  {
    "name": "Jiroft",
    "city": "Jiroft",
    "country": "Iran",
    "code1": "",
    "code2": "OIKJ",
    "lat": 28.726925,
    "lng": 57.670269
  },
  {
    "name": "Kerman",
    "city": "Kerman",
    "country": "Iran",
    "code1": "KER",
    "code2": "OIKK",
    "lat": 30.274444,
    "lng": 56.951111
  },
  {
    "name": "Havadarya",
    "city": "Bandar Abbas",
    "country": "Iran",
    "code1": "",
    "code2": "OIKP",
    "lat": 27.158251,
    "lng": 56.172461
  },
  {
    "name": "Dayrestan",
    "city": "Gheshm I.",
    "country": "Iran",
    "code1": "",
    "code2": "OIKQ",
    "lat": 26.754639,
    "lng": 55.902353
  },
  {
    "name": "Sirjan",
    "city": "Sirjan",
    "country": "Iran",
    "code1": "",
    "code2": "OIKY",
    "lat": 29.550933,
    "lng": 55.672708
  },
  {
    "name": "Birjand",
    "city": "Birjand",
    "country": "Iran",
    "code1": "XBJ",
    "code2": "OIMB",
    "lat": 32.898056,
    "lng": 59.266111
  },
  {
    "name": "Sarakhs",
    "city": "Sarakhs",
    "country": "Iran",
    "code1": "",
    "code2": "OIMC",
    "lat": 36.501178,
    "lng": 61.064903
  },
  {
    "name": "Shahroud",
    "city": "Emam Shahr",
    "country": "Iran",
    "code1": "",
    "code2": "OIMJ",
    "lat": 36.425094,
    "lng": 55.104833
  },
  {
    "name": "Whitsunday Airstrip",
    "city": "Airlie Beach",
    "country": "Australia",
    "code1": "WSY",
    "code2": "YWHI",
    "lat": -20.276,
    "lng": 148.755
  },
  {
    "name": "Tabas",
    "city": "Tabas",
    "country": "Iran",
    "code1": "",
    "code2": "OIMT",
    "lat": 33.66775,
    "lng": 56.892675
  },
  {
    "name": "Kalaleh",
    "city": "Kalaleh",
    "country": "Iran",
    "code1": "",
    "code2": "OINE",
    "lat": 37.383272,
    "lng": 55.452008
  },
  {
    "name": "Ramsar",
    "city": "Ramsar",
    "country": "Iran",
    "code1": "RZR",
    "code2": "OINR",
    "lat": 36.909908,
    "lng": 50.679589
  },
  {
    "name": "Aeropuerto de Rafaela",
    "city": "Rafaela",
    "country": "Argentina",
    "code1": "RAF",
    "code2": "\\N",
    "lat": -31.282072,
    "lng": -61.501594
  },
  {
    "name": "Fasa",
    "city": "Fasa",
    "country": "Iran",
    "code1": "",
    "code2": "OISF",
    "lat": 28.891756,
    "lng": 53.723339
  },
  {
    "name": "Jahrom",
    "city": "Jahrom",
    "country": "Iran",
    "code1": "",
    "code2": "OISJ",
    "lat": 28.586675,
    "lng": 53.579144
  },
  {
    "name": "Lamerd",
    "city": "Lamerd",
    "country": "Iran",
    "code1": "",
    "code2": "OISR",
    "lat": 27.372744,
    "lng": 53.188794
  },
  {
    "name": "Shiraz Shahid Dastghaib Intl",
    "city": "Shiraz",
    "country": "Iran",
    "code1": "SYZ",
    "code2": "OISS",
    "lat": 29.539242,
    "lng": 52.589786
  },
  {
    "name": "Khoy",
    "city": "Khoy",
    "country": "Iran",
    "code1": "",
    "code2": "OITK",
    "lat": 38.427453,
    "lng": 44.973575
  },
  {
    "name": "Sabadell Airport",
    "city": "Sabadell",
    "country": "Spain",
    "code1": "QSA",
    "code2": "LELL",
    "lat": 41.5209,
    "lng": 2.10508
  },
  {
    "name": "Tabriz Intl",
    "city": "Tabriz",
    "country": "Iran",
    "code1": "TBZ",
    "code2": "OITT",
    "lat": 38.133889,
    "lng": 46.235
  },
  {
    "name": "Zanjan",
    "city": "Zanjan",
    "country": "Iran",
    "code1": "",
    "code2": "OITZ",
    "lat": 36.77365,
    "lng": 48.359422
  },
  {
    "name": "Yazd Shahid Sadooghi",
    "city": "Yazd",
    "country": "Iran",
    "code1": "AZD",
    "code2": "OIYY",
    "lat": 31.904908,
    "lng": 54.276503
  },
  {
    "name": "Zabol",
    "city": "Zabol",
    "country": "Iran",
    "code1": "",
    "code2": "OIZB",
    "lat": 31.098333,
    "lng": 61.543889
  },
  {
    "name": "Chah Bahar",
    "city": "Chah Bahar",
    "country": "Iran",
    "code1": "ZBR",
    "code2": "OIZC",
    "lat": 25.44335,
    "lng": 60.382114
  },
  {
    "name": "Zahedan Intl",
    "city": "Zahedan",
    "country": "Iran",
    "code1": "ZAH",
    "code2": "OIZH",
    "lat": 29.475686,
    "lng": 60.906189
  },
  {
    "name": "Iran Shahr",
    "city": "Iran Shahr",
    "country": "Iran",
    "code1": "",
    "code2": "OIZI",
    "lat": 27.236117,
    "lng": 60.720039
  },
  {
    "name": "Saravan",
    "city": "Saravan",
    "country": "Iran",
    "code1": "",
    "code2": "OIZS",
    "lat": 27.419261,
    "lng": 62.315789
  },
  {
    "name": "Queen Alia Intl",
    "city": "Amman",
    "country": "Jordan",
    "code1": "AMM",
    "code2": "OJAI",
    "lat": 31.722556,
    "lng": 35.993214
  },
  {
    "name": "Marka Intl",
    "city": "Amman",
    "country": "Jordan",
    "code1": "ADJ",
    "code2": "OJAM",
    "lat": 31.972703,
    "lng": 35.991569
  },
  {
    "name": "Aqaba King Hussein Intl",
    "city": "Aqaba",
    "country": "Jordan",
    "code1": "AQJ",
    "code2": "OJAQ",
    "lat": 29.611619,
    "lng": 35.018067
  },
  {
    "name": "Prince Hasan",
    "city": "Hotel Four",
    "country": "Jordan",
    "code1": "",
    "code2": "OJHF",
    "lat": 32.160747,
    "lng": 37.149383
  },
  {
    "name": "Jerusalem",
    "city": "Jerusalem",
    "country": "West Bank",
    "code1": "",
    "code2": "OJJR",
    "lat": 31.864722,
    "lng": 35.219167
  },
  {
    "name": "King Hussein",
    "city": "Mafraq",
    "country": "Jordan",
    "code1": "OMF",
    "code2": "OJMF",
    "lat": 32.356353,
    "lng": 36.259181
  },
  {
    "name": "Kuwait Intl",
    "city": "Kuwait",
    "country": "Kuwait",
    "code1": "KWI",
    "code2": "OKBK",
    "lat": 29.226567,
    "lng": 47.968928
  },
  {
    "name": "Rafic Hariri Intl",
    "city": "Beirut",
    "country": "Lebanon",
    "code1": "BEY",
    "code2": "OLBA",
    "lat": 33.820931,
    "lng": 35.488389
  },
  {
    "name": "Rene Mouawad",
    "city": "Kleiat",
    "country": "Lebanon",
    "code1": "",
    "code2": "OLKA",
    "lat": 34.589333,
    "lng": 36.011322
  },
  {
    "name": "Abu Dhabi Intl",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "code1": "AUH",
    "code2": "OMAA",
    "lat": 24.432972,
    "lng": 54.651138
  },
  {
    "name": "Bateen",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "code1": "AZI",
    "code2": "OMAD",
    "lat": 24.428333,
    "lng": 54.458084
  },
  {
    "name": "Al Hamra Aux",
    "city": "Al Hamra",
    "country": "United Arab Emirates",
    "code1": "",
    "code2": "OMAH",
    "lat": 24.073981,
    "lng": 52.463644
  },
  {
    "name": "Jebel Dhana",
    "city": "Jebel Dhana",
    "country": "United Arab Emirates",
    "code1": "",
    "code2": "OMAJ",
    "lat": 24.187428,
    "lng": 52.614
  },
  {
    "name": "Reykjahlid Airport",
    "city": "Myvatn",
    "country": "Iceland",
    "code1": "MVA",
    "code2": "BIRL",
    "lat": 65.6558,
    "lng": -16.9181
  },
  {
    "name": "Al Dhafra",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "code1": "",
    "code2": "OMAM",
    "lat": 24.248249,
    "lng": 54.547722
  },
  {
    "name": "Arzanah",
    "city": "Arzana",
    "country": "United Arab Emirates",
    "code1": "",
    "code2": "OMAR",
    "lat": 24.780528,
    "lng": 52.559944
  },
  {
    "name": "Das Island",
    "city": "Das Island",
    "country": "United Arab Emirates",
    "code1": "",
    "code2": "OMAS",
    "lat": 25.146219,
    "lng": 52.873711
  },
  {
    "name": "Zirku",
    "city": "Zirku",
    "country": "United Arab Emirates",
    "code1": "",
    "code2": "OMAZ",
    "lat": 24.861542,
    "lng": 53.077833
  },
  {
    "name": "Dubai Intl",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "code1": "DXB",
    "code2": "OMDB",
    "lat": 25.252778,
    "lng": 55.364444
  },
  {
    "name": "Fujairah Intl",
    "city": "Fujeirah",
    "country": "United Arab Emirates",
    "code1": "FJR",
    "code2": "OMFJ",
    "lat": 25.112225,
    "lng": 56.323964
  },
  {
    "name": "Ras Al Khaimah Intl",
    "city": "Ras Al Khaimah",
    "country": "United Arab Emirates",
    "code1": "RKT",
    "code2": "OMRK",
    "lat": 25.613483,
    "lng": 55.938817
  },
  {
    "name": "Sharjah Intl",
    "city": "Sharjah",
    "country": "United Arab Emirates",
    "code1": "SHJ",
    "code2": "OMSJ",
    "lat": 25.328575,
    "lng": 55.51715
  },
  {
    "name": "Khasab",
    "city": "Khasab",
    "country": "Oman",
    "code1": "KHS",
    "code2": "OOKB",
    "lat": 26.170986,
    "lng": 56.240569
  },
  {
    "name": "Masirah",
    "city": "Masirah",
    "country": "Oman",
    "code1": "MSH",
    "code2": "OOMA",
    "lat": 20.675434,
    "lng": 58.890467
  },
  {
    "name": "Seeb Intl",
    "city": "Muscat",
    "country": "Oman",
    "code1": "MCT",
    "code2": "OOMS",
    "lat": 23.593278,
    "lng": 58.284444
  },
  {
    "name": "Salalah",
    "city": "Salalah",
    "country": "Oman",
    "code1": "SLL",
    "code2": "OOSA",
    "lat": 17.038719,
    "lng": 54.091297
  },
  {
    "name": "Thumrait",
    "city": "Thumrait",
    "country": "Oman",
    "code1": "TTH",
    "code2": "OOTH",
    "lat": 17.666,
    "lng": 54.024612
  },
  {
    "name": "Bhagatanwala",
    "city": "Bhagtanwala",
    "country": "Pakistan",
    "code1": "",
    "code2": "OPBG",
    "lat": 32.056108,
    "lng": 72.9484
  },
  {
    "name": "Spray View Airport",
    "city": "Spray View",
    "country": "Zimbabwe",
    "code1": "",
    "code2": "FVSV",
    "lat": -17.917,
    "lng": 25.817
  },
  {
    "name": "Lyon Part-Dieu Railway",
    "city": "Lyon",
    "country": "France",
    "code1": "XYD",
    "code2": "\\N",
    "lat": 46,
    "lng": 5
  },
  {
    "name": "Faisalabad Intl",
    "city": "Faisalabad",
    "country": "Pakistan",
    "code1": "LYP",
    "code2": "OPFA",
    "lat": 31.365014,
    "lng": 72.994842
  },
  {
    "name": "Gwadar",
    "city": "Gwadar",
    "country": "Pakistan",
    "code1": "GWD",
    "code2": "OPGD",
    "lat": 25.233308,
    "lng": 62.329494
  },
  {
    "name": "Gilgit",
    "city": "Gilgit",
    "country": "Pakistan",
    "code1": "GIL",
    "code2": "OPGT",
    "lat": 35.918786,
    "lng": 74.333644
  },
  {
    "name": "Shahbaz Ab",
    "city": "Jacobsbad",
    "country": "Pakistan",
    "code1": "",
    "code2": "OPJA",
    "lat": 28.284167,
    "lng": 68.449711
  },
  {
    "name": "Jinnah Intl",
    "city": "Karachi",
    "country": "Pakistan",
    "code1": "KHI",
    "code2": "OPKC",
    "lat": 24.906547,
    "lng": 67.160797
  },
  {
    "name": "Allama Iqbal Intl",
    "city": "Lahore",
    "country": "Pakistan",
    "code1": "LHE",
    "code2": "OPLA",
    "lat": 31.521564,
    "lng": 74.403594
  },
  {
    "name": "Walton",
    "city": "Lahore",
    "country": "Pakistan",
    "code1": "",
    "code2": "OPLH",
    "lat": 31.494794,
    "lng": 74.346239
  },
  {
    "name": "Mangla",
    "city": "Mangla",
    "country": "Pakistan",
    "code1": "",
    "code2": "OPMA",
    "lat": 33.050086,
    "lng": 73.638381
  },
  {
    "name": "Muzaffarabad",
    "city": "Muzaffarabad",
    "country": "Pakistan",
    "code1": "MFG",
    "code2": "OPMF",
    "lat": 34.339022,
    "lng": 73.508639
  },
  {
    "name": "Mianwali",
    "city": "Mianwali",
    "country": "Pakistan",
    "code1": "",
    "code2": "OPMI",
    "lat": 32.563089,
    "lng": 71.570681
  },
  {
    "name": "Moenjodaro",
    "city": "Moenjodaro",
    "country": "Pakistan",
    "code1": "MJD",
    "code2": "OPMJ",
    "lat": 27.335156,
    "lng": 68.143053
  },
  {
    "name": "Masroor",
    "city": "Karachi",
    "country": "Pakistan",
    "code1": "",
    "code2": "OPMR",
    "lat": 24.893564,
    "lng": 66.938753
  },
  {
    "name": "Multan Intl",
    "city": "Multan",
    "country": "Pakistan",
    "code1": "MUX",
    "code2": "OPMT",
    "lat": 30.203222,
    "lng": 71.419111
  },
  {
    "name": "Nawabshah",
    "city": "Nawabshah",
    "country": "Pakistan",
    "code1": "WNS",
    "code2": "OPNH",
    "lat": 26.219442,
    "lng": 68.390053
  },
  {
    "name": "Okara",
    "city": "Okara",
    "country": "Pakistan",
    "code1": "",
    "code2": "OPOK",
    "lat": 30.741025,
    "lng": 73.357736
  },
  {
    "name": "Panjgur",
    "city": "Panjgur",
    "country": "Pakistan",
    "code1": "PJG",
    "code2": "OPPG",
    "lat": 26.954547,
    "lng": 64.132517
  },
  {
    "name": "Pasni",
    "city": "Pasni",
    "country": "Pakistan",
    "code1": "PSI",
    "code2": "OPPI",
    "lat": 25.290487,
    "lng": 63.345083
  },
  {
    "name": "Peshawar Intl",
    "city": "Peshawar",
    "country": "Pakistan",
    "code1": "PEW",
    "code2": "OPPS",
    "lat": 33.993911,
    "lng": 71.514581
  },
  {
    "name": "Qasim",
    "city": "Qasim",
    "country": "Pakistan",
    "code1": "",
    "code2": "OPQS",
    "lat": 33.560153,
    "lng": 73.033217
  },
  {
    "name": "Quetta",
    "city": "Quetta",
    "country": "Pakistan",
    "code1": "UET",
    "code2": "OPQT",
    "lat": 30.251369,
    "lng": 66.937764
  },
  {
    "name": "Sheikh Zayed",
    "city": "Rahim Yar Khan",
    "country": "Pakistan",
    "code1": "RYK",
    "code2": "OPRK",
    "lat": 28.3839,
    "lng": 70.279572
  },
  {
    "name": "Chaklala",
    "city": "Islamabad",
    "country": "Pakistan",
    "code1": "ISB",
    "code2": "OPRN",
    "lat": 33.616653,
    "lng": 73.099233
  },
  {
    "name": "Risalpur",
    "city": "Risalpur",
    "country": "Pakistan",
    "code1": "",
    "code2": "OPRS",
    "lat": 34.081112,
    "lng": 71.972583
  },
  {
    "name": "Rawalakot",
    "city": "Rawala Kot",
    "country": "Pakistan",
    "code1": "RAZ",
    "code2": "OPRT",
    "lat": 33.849658,
    "lng": 73.798147
  },
  {
    "name": "Point Roberts Airpark",
    "city": "Point Roberts",
    "country": "United States",
    "code1": "1RL",
    "code2": "K1RL",
    "lat": 48.9797222,
    "lng": -123.0788889
  },
  {
    "name": "Sukkur",
    "city": "Sukkur",
    "country": "Pakistan",
    "code1": "SKZ",
    "code2": "OPSK",
    "lat": 27.721989,
    "lng": 68.791683
  },
  {
    "name": "Saidu Sharif",
    "city": "Saidu Sharif",
    "country": "Pakistan",
    "code1": "SDT",
    "code2": "OPSS",
    "lat": 34.813556,
    "lng": 72.352814
  },
  {
    "name": "Sui",
    "city": "Sui",
    "country": "Pakistan",
    "code1": "SUL",
    "code2": "OPSU",
    "lat": 28.645142,
    "lng": 69.176917
  },
  {
    "name": "Talhar",
    "city": "Talhar",
    "country": "Pakistan",
    "code1": "BDN",
    "code2": "OPTH",
    "lat": 24.841519,
    "lng": 68.838408
  },
  {
    "name": "Wana",
    "city": "Wana",
    "country": "Pakistan",
    "code1": "",
    "code2": "OPWN",
    "lat": 32.304664,
    "lng": 69.570433
  },
  {
    "name": "Zhob",
    "city": "Zhob",
    "country": "Pakistan",
    "code1": "PZH",
    "code2": "OPZB",
    "lat": 31.358381,
    "lng": 69.463606
  },
  {
    "name": "Basrah Intl",
    "city": "Basrah",
    "country": "Iraq",
    "code1": "BSR",
    "code2": "ORMM",
    "lat": 30.549069,
    "lng": 47.662142
  },
  {
    "name": "Aleppo Intl",
    "city": "Aleppo",
    "country": "Syria",
    "code1": "ALP",
    "code2": "OSAP",
    "lat": 36.180675,
    "lng": 37.224358
  },
  {
    "name": "Damascus Intl",
    "city": "Damascus",
    "country": "Syria",
    "code1": "DAM",
    "code2": "OSDI",
    "lat": 33.410636,
    "lng": 36.514267
  },
  {
    "name": "Deir Zzor",
    "city": "Deire Zor",
    "country": "Syria",
    "code1": "DEZ",
    "code2": "OSDZ",
    "lat": 35.285374,
    "lng": 40.175961
  },
  {
    "name": "Bassel Al Assad Intl",
    "city": "Latakia",
    "country": "Syria",
    "code1": "LTK",
    "code2": "OSLK",
    "lat": 35.401094,
    "lng": 35.948681
  },
  {
    "name": "Palmyra",
    "city": "Palmyra",
    "country": "Syria",
    "code1": "PMS",
    "code2": "OSPR",
    "lat": 34.557361,
    "lng": 38.316889
  },
  {
    "name": "Doha Intl",
    "city": "Doha",
    "country": "Qatar",
    "code1": "DOH",
    "code2": "OTBD",
    "lat": 25.261125,
    "lng": 51.565056
  },
  {
    "name": "Canton",
    "city": "Canton Island",
    "country": "Kiribati",
    "code1": "CIS",
    "code2": "PCIS",
    "lat": -2.768122,
    "lng": -171.710394
  },
  {
    "name": "Rota Intl",
    "city": "Rota",
    "country": "Northern Mariana Islands",
    "code1": "ROP",
    "code2": "PGRO",
    "lat": 14.174308,
    "lng": 145.242536
  },
  {
    "name": "Francisco C Ada Saipan Intl",
    "city": "Saipan",
    "country": "Northern Mariana Islands",
    "code1": "SPN",
    "code2": "PGSN",
    "lat": 15.119003,
    "lng": 145.729356
  },
  {
    "name": "Andersen Afb",
    "city": "Andersen",
    "country": "Guam",
    "code1": "UAM",
    "code2": "PGUA",
    "lat": 13.583953,
    "lng": 144.930025
  },
  {
    "name": "Guam Intl",
    "city": "Agana",
    "country": "Guam",
    "code1": "GUM",
    "code2": "PGUM",
    "lat": 13.48345,
    "lng": 144.795983
  },
  {
    "name": "Tinian Intl",
    "city": "West Tinian",
    "country": "Northern Mariana Islands",
    "code1": "TIQ",
    "code2": "PGWT",
    "lat": 14.999203,
    "lng": 145.61935
  },
  {
    "name": "Scone Airport",
    "city": "Scone",
    "country": "Australia",
    "code1": "NSO",
    "code2": "YSCO",
    "lat": -32.0372,
    "lng": 150.832
  },
  {
    "name": "Marshall Islands Intl",
    "city": "Majuro",
    "country": "Marshall Islands",
    "code1": "MAJ",
    "code2": "PKMJ",
    "lat": 7.064758,
    "lng": 171.272022
  },
  {
    "name": "Dyess Aaf",
    "city": "Kwajalein",
    "country": "Marshall Islands",
    "code1": "",
    "code2": "PKRO",
    "lat": 9.396886,
    "lng": 167.470869
  },
  {
    "name": "Bucholz Aaf",
    "city": "Kwajalein",
    "country": "Marshall Islands",
    "code1": "KWA",
    "code2": "PKWA",
    "lat": 8.720122,
    "lng": 167.731661
  },
  {
    "name": "Cassidy Intl",
    "city": "Kiritimati",
    "country": "Kiribati",
    "code1": "CXI",
    "code2": "PLCH",
    "lat": 1.986161,
    "lng": -157.349778
  },
  {
    "name": "Midway Atoll",
    "city": "Midway",
    "country": "Midway Islands",
    "code1": "MDY",
    "code2": "PMDY",
    "lat": 28.201725,
    "lng": -177.380636
  },
  {
    "name": "Chuuk Intl",
    "city": "Chuuk",
    "country": "Micronesia",
    "code1": "TKK",
    "code2": "PTKK",
    "lat": 7.461869,
    "lng": 151.843006
  },
  {
    "name": "Pohnpei Intl",
    "city": "Pohnpei",
    "country": "Micronesia",
    "code1": "PNI",
    "code2": "PTPN",
    "lat": 6.9851,
    "lng": 158.208989
  },
  {
    "name": "Babelthuap",
    "city": "Babelthuap",
    "country": "Palau",
    "code1": "ROR",
    "code2": "PTRO",
    "lat": 7.367303,
    "lng": 134.544278
  },
  {
    "name": "Kosrae",
    "city": "Kosrae",
    "country": "Micronesia",
    "code1": "KSA",
    "code2": "PTSA",
    "lat": 5.356975,
    "lng": 162.958386
  },
  {
    "name": "Yap Intl",
    "city": "Yap",
    "country": "Micronesia",
    "code1": "YAP",
    "code2": "PTYA",
    "lat": 9.498911,
    "lng": 138.082497
  },
  {
    "name": "Shang Yi",
    "city": "Kinmen",
    "country": "Taiwan",
    "code1": "KNH",
    "code2": "RCBS",
    "lat": 24.427892,
    "lng": 118.359197
  },
  {
    "name": "Pingtung South",
    "city": "Pingtung",
    "country": "Taiwan",
    "code1": "PIF",
    "code2": "RCDC",
    "lat": 22.672367,
    "lng": 120.461728
  },
  {
    "name": "Longtan",
    "city": "Longtang",
    "country": "Taiwan",
    "code1": "",
    "code2": "RCDI",
    "lat": 24.855136,
    "lng": 121.237636
  },
  {
    "name": "Fengnin",
    "city": "Fengnin",
    "country": "Taiwan",
    "code1": "TTT",
    "code2": "RCFN",
    "lat": 22.754986,
    "lng": 121.101681
  },
  {
    "name": "Lyudao",
    "city": "Green Island",
    "country": "Taiwan",
    "code1": "GNI",
    "code2": "RCGI",
    "lat": 22.673853,
    "lng": 121.466481
  },
  {
    "name": "Kaohsiung Intl",
    "city": "Kaohsiung",
    "country": "Taiwan",
    "code1": "KHH",
    "code2": "RCKH",
    "lat": 22.577094,
    "lng": 120.350006
  },
  {
    "name": "Chiayi",
    "city": "Chiayi",
    "country": "Taiwan",
    "code1": "CYI",
    "code2": "RCKU",
    "lat": 23.461779,
    "lng": 120.39283
  },
  {
    "name": "Lanyu",
    "city": "Lanyu",
    "country": "Taiwan",
    "code1": "KYD",
    "code2": "RCLY",
    "lat": 22.028842,
    "lng": 121.533642
  },
  {
    "name": "Ching Chuang Kang",
    "city": "Taichung",
    "country": "Taiwan",
    "code1": "RMQ",
    "code2": "RCMQ",
    "lat": 24.264668,
    "lng": 120.62058
  },
  {
    "name": "Cessnock Airport",
    "city": "Cessnock",
    "country": "Australia",
    "code1": "CES",
    "code2": "YCNK",
    "lat": -32.7875,
    "lng": 151.342
  },
  {
    "name": "Tainan",
    "city": "Tainan",
    "country": "Taiwan",
    "code1": "TNN",
    "code2": "RCNN",
    "lat": 22.950361,
    "lng": 120.205778
  },
  {
    "name": "Hsinchu",
    "city": "Hsinchu",
    "country": "Taiwan",
    "code1": "",
    "code2": "RCPO",
    "lat": 24.818033,
    "lng": 120.939394
  },
  {
    "name": "Magong",
    "city": "Makung",
    "country": "Taiwan",
    "code1": "MZG",
    "code2": "RCQC",
    "lat": 23.568669,
    "lng": 119.628311
  },
  {
    "name": "Jhihhang",
    "city": "Taitung",
    "country": "Taiwan",
    "code1": "",
    "code2": "RCQS",
    "lat": 22.793117,
    "lng": 121.181975
  },
  {
    "name": "Pingtung North",
    "city": "Pingtung",
    "country": "Taiwan",
    "code1": "",
    "code2": "RCSQ",
    "lat": 22.700239,
    "lng": 120.482
  },
  {
    "name": "Sungshan",
    "city": "Taipei",
    "country": "Taiwan",
    "code1": "TSA",
    "code2": "RCSS",
    "lat": 25.069722,
    "lng": 121.5525
  },
  {
    "name": "Taoyuan Intl",
    "city": "Taipei",
    "country": "Taiwan",
    "code1": "TPE",
    "code2": "RCTP",
    "lat": 25.077731,
    "lng": 121.232822
  },
  {
    "name": "Wang An",
    "city": "Wang An",
    "country": "Taiwan",
    "code1": "WOT",
    "code2": "RCWA",
    "lat": 23.370833,
    "lng": 119.494444
  },
  {
    "name": "Hualien",
    "city": "Hualien",
    "country": "Taiwan",
    "code1": "HUN",
    "code2": "RCYU",
    "lat": 24.023725,
    "lng": 121.616906
  },
  {
    "name": "Narita Intl",
    "city": "Tokyo",
    "country": "Japan",
    "code1": "NRT",
    "code2": "RJAA",
    "lat": 35.764722,
    "lng": 140.386389
  },
  {
    "name": "Matsumoto",
    "city": "Matsumoto",
    "country": "Japan",
    "code1": "MMJ",
    "code2": "RJAF",
    "lat": 36.166758,
    "lng": 137.922669
  },
  {
    "name": "Hyakuri",
    "city": "Ibaraki",
    "country": "Japan",
    "code1": "IBR",
    "code2": "RJAH",
    "lat": 36.181083,
    "lng": 140.415444
  },
  {
    "name": "Minami Torishima",
    "city": "Minami Tori Shima",
    "country": "Japan",
    "code1": "",
    "code2": "RJAM",
    "lat": 24.289697,
    "lng": 153.979119
  },
  {
    "name": "Iwo Jima",
    "city": "Iwojima",
    "country": "Japan",
    "code1": "IWO",
    "code2": "RJAW",
    "lat": 24.784,
    "lng": 141.322722
  },
  {
    "name": "Nanki Shirahama",
    "city": "Nanki-shirahama",
    "country": "Japan",
    "code1": "SHM",
    "code2": "RJBD",
    "lat": 33.662222,
    "lng": 135.364444
  },
  {
    "name": "Kohnan",
    "city": "Kohnan",
    "country": "Japan",
    "code1": "",
    "code2": "RJBK",
    "lat": 34.590836,
    "lng": 133.933225
  },
  {
    "name": "Obihiro",
    "city": "Obihiro",
    "country": "Japan",
    "code1": "OBO",
    "code2": "RJCB",
    "lat": 42.733333,
    "lng": 143.217222
  },
  {
    "name": "New Chitose",
    "city": "Sapporo",
    "country": "Japan",
    "code1": "CTS",
    "code2": "RJCC",
    "lat": 42.7752,
    "lng": 141.692283
  },
  {
    "name": "Hakodate",
    "city": "Hakodate",
    "country": "Japan",
    "code1": "HKD",
    "code2": "RJCH",
    "lat": 41.77,
    "lng": 140.821944
  },
  {
    "name": "Chitose",
    "city": "Chitose",
    "country": "Japan",
    "code1": "SPK",
    "code2": "RJCJ",
    "lat": 42.794475,
    "lng": 141.666447
  },
  {
    "name": "Memanbetsu",
    "city": "Memanbetsu",
    "country": "Japan",
    "code1": "MMB",
    "code2": "RJCM",
    "lat": 43.880606,
    "lng": 144.164053
  },
  {
    "name": "Nakashibetsu",
    "city": "Nakashibetsu",
    "country": "Japan",
    "code1": "SHB",
    "code2": "RJCN",
    "lat": 43.5775,
    "lng": 144.96
  },
  {
    "name": "Tokachi",
    "city": "Tokachi",
    "country": "Japan",
    "code1": "",
    "code2": "RJCT",
    "lat": 42.890544,
    "lng": 143.158475
  },
  {
    "name": "Wakkanai",
    "city": "Wakkanai",
    "country": "Japan",
    "code1": "WKJ",
    "code2": "RJCW",
    "lat": 45.404167,
    "lng": 141.800833
  },
  {
    "name": "Iki",
    "city": "Iki",
    "country": "Japan",
    "code1": "IKI",
    "code2": "RJDB",
    "lat": 33.749027,
    "lng": 129.785417
  },
  {
    "name": "Yamaguchi Ube",
    "city": "Yamaguchi",
    "country": "Japan",
    "code1": "UBJ",
    "code2": "RJDC",
    "lat": 33.93,
    "lng": 131.278611
  },
  {
    "name": "Tsushima",
    "city": "Tsushima",
    "country": "Japan",
    "code1": "TSJ",
    "code2": "RJDT",
    "lat": 34.284889,
    "lng": 129.33055
  },
  {
    "name": "Monbetsu",
    "city": "Monbetsu",
    "country": "Japan",
    "code1": "MBE",
    "code2": "RJEB",
    "lat": 44.303914,
    "lng": 143.404028
  },
  {
    "name": "Asahikawa",
    "city": "Asahikawa",
    "country": "Japan",
    "code1": "AKJ",
    "code2": "RJEC",
    "lat": 43.670833,
    "lng": 142.4475
  },
  {
    "name": "Okushiri",
    "city": "Okushiri",
    "country": "Japan",
    "code1": "OIR",
    "code2": "RJEO",
    "lat": 42.071667,
    "lng": 139.432911
  },
  {
    "name": "Rishiri",
    "city": "Rishiri Island",
    "country": "Japan",
    "code1": "RIS",
    "code2": "RJER",
    "lat": 45.242006,
    "lng": 141.186431
  },
  {
    "name": "Ashiya",
    "city": "Ashiya",
    "country": "Japan",
    "code1": "",
    "code2": "RJFA",
    "lat": 33.883083,
    "lng": 130.653
  },
  {
    "name": "Yakushima",
    "city": "Yakushima",
    "country": "Japan",
    "code1": "KUM",
    "code2": "RJFC",
    "lat": 30.385569,
    "lng": 130.659017
  },
  {
    "name": "Fukue",
    "city": "Fukue",
    "country": "Japan",
    "code1": "FUJ",
    "code2": "RJFE",
    "lat": 32.666269,
    "lng": 128.832808
  },
  {
    "name": "Fukuoka",
    "city": "Fukuoka",
    "country": "Japan",
    "code1": "FUK",
    "code2": "RJFF",
    "lat": 33.585942,
    "lng": 130.450686
  },
  {
    "name": "New Tanegashima",
    "city": "Tanegashima",
    "country": "Japan",
    "code1": "TNE",
    "code2": "RJFG",
    "lat": 30.605067,
    "lng": 130.991231
  },
  {
    "name": "Kagoshima",
    "city": "Kagoshima",
    "country": "Japan",
    "code1": "KOJ",
    "code2": "RJFK",
    "lat": 31.803397,
    "lng": 130.719408
  },
  {
    "name": "Miyazaki",
    "city": "Miyazaki",
    "country": "Japan",
    "code1": "KMI",
    "code2": "RJFM",
    "lat": 31.877222,
    "lng": 131.448611
  },
  {
    "name": "Nyutabaru",
    "city": "Nyutabaru",
    "country": "Japan",
    "code1": "",
    "code2": "RJFN",
    "lat": 32.083611,
    "lng": 131.451389
  },
  {
    "name": "Oita",
    "city": "Oita",
    "country": "Japan",
    "code1": "OIT",
    "code2": "RJFO",
    "lat": 33.479444,
    "lng": 131.737222
  },
  {
    "name": "New Kitakyushu",
    "city": "Kitakyushu",
    "country": "Japan",
    "code1": "KKJ",
    "code2": "RJFR",
    "lat": 33.845942,
    "lng": 131.034689
  },
  {
    "name": "Kumamoto",
    "city": "Kumamoto",
    "country": "Japan",
    "code1": "KMJ",
    "code2": "RJFT",
    "lat": 32.837319,
    "lng": 130.85505
  },
  {
    "name": "Nagasaki",
    "city": "Nagasaki",
    "country": "Japan",
    "code1": "NGS",
    "code2": "RJFU",
    "lat": 32.916944,
    "lng": 129.913611
  },
  {
    "name": "Kanoya",
    "city": "Kanoya",
    "country": "Japan",
    "code1": "",
    "code2": "RJFY",
    "lat": 31.367608,
    "lng": 130.845456
  },
  {
    "name": "Tsuiki",
    "city": "Tsuiki",
    "country": "Japan",
    "code1": "",
    "code2": "RJFZ",
    "lat": 33.685,
    "lng": 131.040278
  },
  {
    "name": "Amami",
    "city": "Amami",
    "country": "Japan",
    "code1": "ASJ",
    "code2": "RJKA",
    "lat": 28.430633,
    "lng": 129.712542
  },
  {
    "name": "Okierabu",
    "city": "Okierabu",
    "country": "Japan",
    "code1": "",
    "code2": "RJKB",
    "lat": 27.425522,
    "lng": 128.700903
  },
  {
    "name": "Tokunoshima",
    "city": "Tokunoshima",
    "country": "Japan",
    "code1": "TKN",
    "code2": "RJKN",
    "lat": 27.836381,
    "lng": 128.881253
  },
  {
    "name": "Fukui",
    "city": "Fukui",
    "country": "Japan",
    "code1": "",
    "code2": "RJNF",
    "lat": 36.142847,
    "lng": 136.223922
  },
  {
    "name": "Gifu",
    "city": "Gifu",
    "country": "Japan",
    "code1": "",
    "code2": "RJNG",
    "lat": 35.394078,
    "lng": 136.869667
  },
  {
    "name": "Hamamatsu",
    "city": "Hamamatsu",
    "country": "Japan",
    "code1": "",
    "code2": "RJNH",
    "lat": 34.750239,
    "lng": 137.703083
  },
  {
    "name": "Komatsu",
    "city": "Kanazawa",
    "country": "Japan",
    "code1": "KMQ",
    "code2": "RJNK",
    "lat": 36.394611,
    "lng": 136.406544
  },
  {
    "name": "Oki",
    "city": "Oki Island",
    "country": "Japan",
    "code1": "OKI",
    "code2": "RJNO",
    "lat": 36.181125,
    "lng": 133.324844
  },
  {
    "name": "Toyama",
    "city": "Toyama",
    "country": "Japan",
    "code1": "TOY",
    "code2": "RJNT",
    "lat": 36.648333,
    "lng": 137.1875
  },
  {
    "name": "Shizuhama",
    "city": "Yaizu",
    "country": "Japan",
    "code1": "",
    "code2": "RJNY",
    "lat": 34.812778,
    "lng": 138.298056
  },
  {
    "name": "Hiroshima",
    "city": "Hiroshima",
    "country": "Japan",
    "code1": "HIJ",
    "code2": "RJOA",
    "lat": 34.436111,
    "lng": 132.919444
  },
  {
    "name": "Okayama",
    "city": "Okayama",
    "country": "Japan",
    "code1": "OKJ",
    "code2": "RJOB",
    "lat": 34.756944,
    "lng": 133.855278
  },
  {
    "name": "Izumo",
    "city": "Izumo",
    "country": "Japan",
    "code1": "IZO",
    "code2": "RJOC",
    "lat": 35.413611,
    "lng": 132.89
  },
  {
    "name": "Hofu",
    "city": "Hofu",
    "country": "Japan",
    "code1": "",
    "code2": "RJOF",
    "lat": 34.034667,
    "lng": 131.549194
  },
  {
    "name": "Yonago Kitaro",
    "city": "Miho",
    "country": "Japan",
    "code1": "YGJ",
    "code2": "RJOH",
    "lat": 35.492222,
    "lng": 133.236389
  },
  {
    "name": "Iwakuni Mcas",
    "city": "Iwakuni",
    "country": "Japan",
    "code1": "",
    "code2": "RJOI",
    "lat": 34.14386,
    "lng": 132.23575
  },
  {
    "name": "Kochi",
    "city": "Kochi",
    "country": "Japan",
    "code1": "KCZ",
    "code2": "RJOK",
    "lat": 33.546111,
    "lng": 133.669444
  },
  {
    "name": "Matsuyama",
    "city": "Matsuyama",
    "country": "Japan",
    "code1": "MYJ",
    "code2": "RJOM",
    "lat": 33.827222,
    "lng": 132.699722
  },
  {
    "name": "Osaka Intl",
    "city": "Osaka",
    "country": "Japan",
    "code1": "ITM",
    "code2": "RJOO",
    "lat": 34.785528,
    "lng": 135.438222
  },
  {
    "name": "Tottori",
    "city": "Tottori",
    "country": "Japan",
    "code1": "TTJ",
    "code2": "RJOR",
    "lat": 35.530069,
    "lng": 134.166553
  },
  {
    "name": "Tokushima",
    "city": "Tokushima",
    "country": "Japan",
    "code1": "TKS",
    "code2": "RJOS",
    "lat": 34.132808,
    "lng": 134.606639
  },
  {
    "name": "Takamatsu",
    "city": "Takamatsu",
    "country": "Japan",
    "code1": "TAK",
    "code2": "RJOT",
    "lat": 34.214167,
    "lng": 134.015556
  },
  {
    "name": "Yao",
    "city": "Osaka",
    "country": "Japan",
    "code1": "",
    "code2": "RJOY",
    "lat": 34.596311,
    "lng": 135.602944
  },
  {
    "name": "Ozuki",
    "city": "Ozuki",
    "country": "Japan",
    "code1": "",
    "code2": "RJOZ",
    "lat": 34.045322,
    "lng": 131.052144
  },
  {
    "name": "Aomori",
    "city": "Aomori",
    "country": "Japan",
    "code1": "AOJ",
    "code2": "RJSA",
    "lat": 40.734722,
    "lng": 140.690833
  },
  {
    "name": "Yamagata",
    "city": "Yamagata",
    "country": "Japan",
    "code1": "GAJ",
    "code2": "RJSC",
    "lat": 38.411894,
    "lng": 140.371331
  },
  {
    "name": "Sado",
    "city": "Sado",
    "country": "Japan",
    "code1": "",
    "code2": "RJSD",
    "lat": 38.060181,
    "lng": 138.413928
  },
  {
    "name": "Hachinohe",
    "city": "Hachinoe",
    "country": "Japan",
    "code1": "",
    "code2": "RJSH",
    "lat": 40.556447,
    "lng": 141.466325
  },
  {
    "name": "Hanamaki",
    "city": "Hanamaki",
    "country": "Japan",
    "code1": "HNA",
    "code2": "RJSI",
    "lat": 39.428611,
    "lng": 141.135278
  },
  {
    "name": "Akita",
    "city": "Akita",
    "country": "Japan",
    "code1": "AXT",
    "code2": "RJSK",
    "lat": 39.615556,
    "lng": 140.218611
  },
  {
    "name": "Misawa Ab",
    "city": "Misawa",
    "country": "Japan",
    "code1": "MSJ",
    "code2": "RJSM",
    "lat": 40.703222,
    "lng": 141.368364
  },
  {
    "name": "Sendai",
    "city": "Sendai",
    "country": "Japan",
    "code1": "SDJ",
    "code2": "RJSS",
    "lat": 38.139722,
    "lng": 140.916944
  },
  {
    "name": "Matsushima",
    "city": "Matsushima",
    "country": "Japan",
    "code1": "",
    "code2": "RJST",
    "lat": 38.404919,
    "lng": 141.219572
  },
  {
    "name": "Sazena",
    "city": "Sazena",
    "country": "Czech Republic",
    "code1": "LKS",
    "code2": "LKSZ",
    "lat": 50.1929,
    "lng": 14.1532
  },
  {
    "name": "Atsugi Naf",
    "city": "Atsugi",
    "country": "Japan",
    "code1": "",
    "code2": "RJTA",
    "lat": 35.454611,
    "lng": 139.450167
  },
  {
    "name": "Tateyama",
    "city": "Tateyama",
    "country": "Japan",
    "code1": "",
    "code2": "RJTE",
    "lat": 34.987053,
    "lng": 139.829208
  },
  {
    "name": "Hachijojima",
    "city": "Hachijojima",
    "country": "Japan",
    "code1": "HAC",
    "code2": "RJTH",
    "lat": 33.115,
    "lng": 139.785833
  },
  {
    "name": "Iruma",
    "city": "Iruma",
    "country": "Japan",
    "code1": "",
    "code2": "RJTJ",
    "lat": 35.841944,
    "lng": 139.410556
  },
  {
    "name": "Kisarazu",
    "city": "Kisarazu",
    "country": "Japan",
    "code1": "",
    "code2": "RJTK",
    "lat": 35.398272,
    "lng": 139.909936
  },
  {
    "name": "Shimofusa",
    "city": "Shimofusa",
    "country": "Japan",
    "code1": "",
    "code2": "RJTL",
    "lat": 35.798944,
    "lng": 140.011111
  },
  {
    "name": "Oshima",
    "city": "Oshima",
    "country": "Japan",
    "code1": "OIM",
    "code2": "RJTO",
    "lat": 34.782033,
    "lng": 139.360306
  },
  {
    "name": "Kastner Aaf",
    "city": "Zama",
    "country": "Japan",
    "code1": "",
    "code2": "RJTR",
    "lat": 35.513769,
    "lng": 139.393675
  },
  {
    "name": "Tokyo Intl",
    "city": "Tokyo",
    "country": "Japan",
    "code1": "HND",
    "code2": "RJTT",
    "lat": 35.552258,
    "lng": 139.779694
  },
  {
    "name": "Yokota Ab",
    "city": "Yokota",
    "country": "Japan",
    "code1": "OKO",
    "code2": "RJTY",
    "lat": 35.748492,
    "lng": 139.348483
  },
  {
    "name": "Gwangju",
    "city": "Kwangju",
    "country": "South Korea",
    "code1": "KWJ",
    "code2": "RKJJ",
    "lat": 35.126389,
    "lng": 126.808889
  },
  {
    "name": "Jeon Ju",
    "city": "Jhunju",
    "country": "South Korea",
    "code1": "",
    "code2": "RKJU",
    "lat": 35.878436,
    "lng": 127.11955
  },
  {
    "name": "Yeosu",
    "city": "Yeosu",
    "country": "South Korea",
    "code1": "RSU",
    "code2": "RKJY",
    "lat": 34.842328,
    "lng": 127.61685
  },
  {
    "name": "Sokcho",
    "city": "Sokch'o",
    "country": "South Korea",
    "code1": "SHO",
    "code2": "RKND",
    "lat": 38.142614,
    "lng": 128.598556
  },
  {
    "name": "Gangneung",
    "city": "Kangnung",
    "country": "South Korea",
    "code1": "KAG",
    "code2": "RKNN",
    "lat": 37.753561,
    "lng": 128.943625
  },
  {
    "name": "Macomb Municipal Airport",
    "city": "Macomb",
    "country": "United States",
    "code1": "MQB",
    "code2": "\\N",
    "lat": 40.5200833,
    "lng": -90.6523889
  },
  {
    "name": "Jeju Intl",
    "city": "Cheju",
    "country": "South Korea",
    "code1": "CJU",
    "code2": "RKPC",
    "lat": 33.511306,
    "lng": 126.493028
  },
  {
    "name": "Jinhae",
    "city": "Chinhae",
    "country": "South Korea",
    "code1": "",
    "code2": "RKPE",
    "lat": 35.141175,
    "lng": 128.695792
  },
  {
    "name": "Gimhae Intl",
    "city": "Busan",
    "country": "South Korea",
    "code1": "PUS",
    "code2": "RKPK",
    "lat": 35.179528,
    "lng": 128.938222
  },
  {
    "name": "Bungle Bungle Airport",
    "city": "Bungle Bungle",
    "country": "Australia",
    "code1": "",
    "code2": "YBUU",
    "lat": -17.5453,
    "lng": 128.307
  },
  {
    "name": "Ulsan",
    "city": "Ulsan",
    "country": "South Korea",
    "code1": "USN",
    "code2": "RKPU",
    "lat": 35.593494,
    "lng": 129.351722
  },
  {
    "name": "A 511",
    "city": "Pyongtaek",
    "country": "South Korea",
    "code1": "",
    "code2": "RKSG",
    "lat": 36.962214,
    "lng": 127.031072
  },
  {
    "name": "Seoul Ab",
    "city": "Seoul East",
    "country": "South Korea",
    "code1": "SSN",
    "code2": "RKSM",
    "lat": 37.445833,
    "lng": 127.113889
  },
  {
    "name": "Osan Ab",
    "city": "Osan",
    "country": "South Korea",
    "code1": "OSN",
    "code2": "RKSO",
    "lat": 37.090617,
    "lng": 127.029594
  },
  {
    "name": "Gimpo",
    "city": "Seoul",
    "country": "South Korea",
    "code1": "GMP",
    "code2": "RKSS",
    "lat": 37.558311,
    "lng": 126.790586
  },
  {
    "name": "Suwon",
    "city": "Suwon",
    "country": "South Korea",
    "code1": "",
    "code2": "RKSW",
    "lat": 37.239406,
    "lng": 127.007053
  },
  {
    "name": "Pohang",
    "city": "Pohang",
    "country": "South Korea",
    "code1": "KPO",
    "code2": "RKTH",
    "lat": 35.987858,
    "lng": 129.420486
  },
  {
    "name": "Daegu Ab",
    "city": "Taegu",
    "country": "South Korea",
    "code1": "TAE",
    "code2": "RKTN",
    "lat": 35.894108,
    "lng": 128.658856
  },
  {
    "name": "Yecheon",
    "city": "Yechon",
    "country": "South Korea",
    "code1": "YEC",
    "code2": "RKTY",
    "lat": 36.631933,
    "lng": 128.35485
  },
  {
    "name": "Naha",
    "city": "Okinawa",
    "country": "Japan",
    "code1": "OKA",
    "code2": "ROAH",
    "lat": 26.195814,
    "lng": 127.645869
  },
  {
    "name": "Ie Shima Aux Ab",
    "city": "Iejima",
    "country": "Japan",
    "code1": "",
    "code2": "RODE",
    "lat": 26.728775,
    "lng": 127.761775
  },
  {
    "name": "Kadena Ab",
    "city": "Kadena",
    "country": "Japan",
    "code1": "DNA",
    "code2": "RODN",
    "lat": 26.355612,
    "lng": 127.767633
  },
  {
    "name": "Ishigaki",
    "city": "Ishigaki",
    "country": "Japan",
    "code1": "ISG",
    "code2": "ROIG",
    "lat": 24.344525,
    "lng": 124.186983
  },
  {
    "name": "Kumejima",
    "city": "Kumejima",
    "country": "Japan",
    "code1": "UEO",
    "code2": "ROKJ",
    "lat": 26.363506,
    "lng": 126.713806
  },
  {
    "name": "Minami Daito",
    "city": "Minami Daito",
    "country": "Japan",
    "code1": "MMD",
    "code2": "ROMD",
    "lat": 25.846533,
    "lng": 131.263494
  },
  {
    "name": "Miyako",
    "city": "Miyako",
    "country": "Japan",
    "code1": "MMY",
    "code2": "ROMY",
    "lat": 24.782833,
    "lng": 125.295111
  },
  {
    "name": "Kitadaito",
    "city": "Kitadaito",
    "country": "Japan",
    "code1": "KTD",
    "code2": "RORK",
    "lat": 25.944722,
    "lng": 131.326944
  },
  {
    "name": "Shimojishima",
    "city": "Shimojishima",
    "country": "Japan",
    "code1": "SHI",
    "code2": "RORS",
    "lat": 24.826667,
    "lng": 125.144722
  },
  {
    "name": "Tarama",
    "city": "Tarama",
    "country": "Japan",
    "code1": "",
    "code2": "RORT",
    "lat": 24.653889,
    "lng": 124.675278
  },
  {
    "name": "Yoron",
    "city": "Yoron",
    "country": "Japan",
    "code1": "RNJ",
    "code2": "RORY",
    "lat": 27.043964,
    "lng": 128.401517
  },
  {
    "name": "Futenma Mcas",
    "city": "Futema",
    "country": "Japan",
    "code1": "",
    "code2": "ROTM",
    "lat": 26.274275,
    "lng": 127.756494
  },
  {
    "name": "Yonaguni",
    "city": "Yonaguni Jima",
    "country": "Japan",
    "code1": "OGN",
    "code2": "ROYN",
    "lat": 24.466944,
    "lng": 122.977778
  },
  {
    "name": "Ninoy Aquino Intl",
    "city": "Manila",
    "country": "Philippines",
    "code1": "MNL",
    "code2": "RPLL",
    "lat": 14.508647,
    "lng": 121.019581
  },
  {
    "name": "Mary Airport",
    "city": "Mary",
    "country": "Turkmenistan",
    "code1": "MYP",
    "code2": "UTAM",
    "lat": 37.6194,
    "lng": 61.8967
  },
  {
    "name": "Cotabato",
    "city": "Cotabato",
    "country": "Philippines",
    "code1": "CBO",
    "code2": "RPMC",
    "lat": 7.165242,
    "lng": 124.209619
  },
  {
    "name": "Cagayan De Oro",
    "city": "Ladag",
    "country": "Philippines",
    "code1": "CGY",
    "code2": "RPML",
    "lat": 8.415619,
    "lng": 124.611219
  },
  {
    "name": "Pagadian",
    "city": "Pagadian",
    "country": "Philippines",
    "code1": "PAG",
    "code2": "RPMP",
    "lat": 7.827197,
    "lng": 123.458294
  },
  {
    "name": "Tambler",
    "city": "Romblon",
    "country": "Philippines",
    "code1": "",
    "code2": "RPMR",
    "lat": 6.058003,
    "lng": 125.096033
  },
  {
    "name": "Crocodile Camp",
    "city": "Tsavo East",
    "country": "Kenya",
    "code1": "",
    "code2": "\\N",
    "lat": -3.070875,
    "lng": 39.2194305555556
  },
  {
    "name": "Zamboanga Intl",
    "city": "Zamboanga",
    "country": "Philippines",
    "code1": "ZAM",
    "code2": "RPMZ",
    "lat": 6.922419,
    "lng": 122.059633
  },
  {
    "name": "Baguio",
    "city": "Baguio",
    "country": "Philippines",
    "code1": "BAG",
    "code2": "RPUB",
    "lat": 16.375103,
    "lng": 120.619636
  },
  {
    "name": "Daet",
    "city": "Daet",
    "country": "Philippines",
    "code1": "",
    "code2": "RPUD",
    "lat": 14.129167,
    "lng": 122.980181
  },
  {
    "name": "Basa Ab",
    "city": "Floridablanca",
    "country": "Philippines",
    "code1": "",
    "code2": "RPUF",
    "lat": 14.986527,
    "lng": 120.4925
  },
  {
    "name": "Lingayen",
    "city": "Lingayen",
    "country": "Philippines",
    "code1": "",
    "code2": "RPUG",
    "lat": 16.034786,
    "lng": 120.241106
  },
  {
    "name": "San Jose",
    "city": "San Jose",
    "country": "Philippines",
    "code1": "",
    "code2": "RPUH",
    "lat": 12.361517,
    "lng": 121.046639
  },
  {
    "name": "Fernando Ab",
    "city": "Lipa",
    "country": "Philippines",
    "code1": "",
    "code2": "RPUL",
    "lat": 13.955017,
    "lng": 121.124925
  },
  {
    "name": "Mamburao",
    "city": "Mamburao",
    "country": "Philippines",
    "code1": "",
    "code2": "RPUM",
    "lat": 13.208092,
    "lng": 120.60535
  },
  {
    "name": "Vigan",
    "city": "Vigan",
    "country": "Philippines",
    "code1": "",
    "code2": "RPUQ",
    "lat": 17.555331,
    "lng": 120.355797
  },
  {
    "name": "Baler",
    "city": "Baler",
    "country": "Philippines",
    "code1": "",
    "code2": "RPUR",
    "lat": 15.729836,
    "lng": 121.500133
  },
  {
    "name": "Kimana",
    "city": "Kimana",
    "country": "Kenya",
    "code1": "",
    "code2": "\\N",
    "lat": -2.8,
    "lng": 37.5333333333333
  },
  {
    "name": "Solio Ranch Airport",
    "city": "Solio",
    "country": "Kenya",
    "code1": "",
    "code2": "\\N",
    "lat": -0.245167,
    "lng": 36.8849
  },
  {
    "name": "Kalundborg Flyveplads",
    "city": "Kalundborg",
    "country": "Denmark",
    "code1": "",
    "code2": "EKKL",
    "lat": 55.7001,
    "lng": 11.2549
  },
  {
    "name": "Bagabag",
    "city": "Bagabag",
    "country": "Philippines",
    "code1": "",
    "code2": "RPUZ",
    "lat": 16.619194,
    "lng": 121.252319
  },
  {
    "name": "Daniel Z Romualdez",
    "city": "Tacloban",
    "country": "Philippines",
    "code1": "TAC",
    "code2": "RPVA",
    "lat": 11.227628,
    "lng": 125.027758
  },
  {
    "name": "Bacolod",
    "city": "Bacolod",
    "country": "Philippines",
    "code1": "BCD",
    "code2": "RPVB",
    "lat": 10.642511,
    "lng": 122.929617
  },
  {
    "name": "Gardermoen Airport",
    "city": "Oslo",
    "country": "Norway",
    "code1": "GEN",
    "code2": "\\N",
    "lat": 60.1939,
    "lng": 11.1004
  },
  {
    "name": "Dumaguete",
    "city": "Dumaguete",
    "country": "Philippines",
    "code1": "DGT",
    "code2": "RPVD",
    "lat": 9.333714,
    "lng": 123.300472
  },
  {
    "name": "Caticlan",
    "city": "Caticlan",
    "country": "Philippines",
    "code1": "",
    "code2": "RPVE",
    "lat": 11.924503,
    "lng": 121.95405
  },
  {
    "name": "Guiuan",
    "city": "Guiuan",
    "country": "Philippines",
    "code1": "",
    "code2": "RPVG",
    "lat": 11.035544,
    "lng": 125.741594
  },
  {
    "name": "Iloilo",
    "city": "Iloilo",
    "country": "Philippines",
    "code1": "ILO",
    "code2": "RPVI",
    "lat": 10.713044,
    "lng": 122.545297
  },
  {
    "name": "Kalibo",
    "city": "Kalibo",
    "country": "Philippines",
    "code1": "KLO",
    "code2": "RPVK",
    "lat": 11.679431,
    "lng": 122.376294
  },
  {
    "name": "Mactan Cebu Intl",
    "city": "Masbate",
    "country": "Philippines",
    "code1": "",
    "code2": "RPVM",
    "lat": 10.307542,
    "lng": 123.979439
  },
  {
    "name": "Wausau Downtown Airport",
    "city": "Wausau",
    "country": "United States",
    "code1": "AUW",
    "code2": "\\N",
    "lat": 44.9262845,
    "lng": -89.6270018
  },
  {
    "name": "Puerto Princesa",
    "city": "Puerto Princesa",
    "country": "Philippines",
    "code1": "PPS",
    "code2": "RPVP",
    "lat": 9.742119,
    "lng": 118.758731
  },
  {
    "name": "Antique",
    "city": "San Jose",
    "country": "Philippines",
    "code1": "SJI",
    "code2": "RPVS",
    "lat": 10.766044,
    "lng": 121.933439
  },
  {
    "name": "Comodoro Pierrestegui",
    "city": "Concordia",
    "country": "Argentina",
    "code1": "COC",
    "code2": "SAAC",
    "lat": -31.296944,
    "lng": -57.996631
  },
  {
    "name": "Gualeguaychu",
    "city": "Gualeguaychu",
    "country": "Argentina",
    "code1": "GHU",
    "code2": "SAAG",
    "lat": -33.010278,
    "lng": -58.613056
  },
  {
    "name": "Junin",
    "city": "Junin",
    "country": "Argentina",
    "code1": "",
    "code2": "SAAJ",
    "lat": -34.545889,
    "lng": -60.930556
  },
  {
    "name": "General Urquiza",
    "city": "Parana",
    "country": "Argentina",
    "code1": "PRA",
    "code2": "SAAP",
    "lat": -31.794778,
    "lng": -60.480361
  },
  {
    "name": "Rosario",
    "city": "Rosario",
    "country": "Argentina",
    "code1": "ROS",
    "code2": "SAAR",
    "lat": -32.903611,
    "lng": -60.785
  },
  {
    "name": "Sauce Viejo",
    "city": "Santa Fe",
    "country": "Argentina",
    "code1": "SFN",
    "code2": "SAAV",
    "lat": -31.711666,
    "lng": -60.811668
  },
  {
    "name": "Aeroparque Jorge Newbery",
    "city": "Buenos Aires",
    "country": "Argentina",
    "code1": "AEP",
    "code2": "SABE",
    "lat": -34.559175,
    "lng": -58.415606
  },
  {
    "name": "Ambrosio L V Taravella",
    "city": "Cordoba",
    "country": "Argentina",
    "code1": "COR",
    "code2": "SACO",
    "lat": -31.323619,
    "lng": -64.207953
  },
  {
    "name": "Chamical",
    "city": "Gobernador Gordillo",
    "country": "Argentina",
    "code1": "",
    "code2": "SACT",
    "lat": -30.345278,
    "lng": -66.29361
  },
  {
    "name": "San Fernando",
    "city": "San Fernando",
    "country": "Argentina",
    "code1": "",
    "code2": "SADF",
    "lat": -34.453189,
    "lng": -58.589644
  },
  {
    "name": "Mariano Moreno",
    "city": "Jose C. Paz",
    "country": "Argentina",
    "code1": "",
    "code2": "SADJ",
    "lat": -34.56065,
    "lng": -58.789564
  },
  {
    "name": "La Plata",
    "city": "La Plata",
    "country": "Argentina",
    "code1": "LPG",
    "code2": "SADL",
    "lat": -34.972222,
    "lng": -57.894694
  },
  {
    "name": "Moron",
    "city": "Moron",
    "country": "Argentina",
    "code1": "",
    "code2": "SADM",
    "lat": -34.676317,
    "lng": -58.642756
  },
  {
    "name": "El Palomar",
    "city": "El Palomar",
    "country": "Argentina",
    "code1": "",
    "code2": "SADP",
    "lat": -34.609939,
    "lng": -58.612592
  },
  {
    "name": "Chos Malal",
    "city": "Chosmadal",
    "country": "Argentina",
    "code1": "",
    "code2": "SAHC",
    "lat": -37.444692,
    "lng": -70.222469
  },
  {
    "name": "General Roca",
    "city": "Fuerte Gral Roca",
    "country": "Argentina",
    "code1": "",
    "code2": "SAHR",
    "lat": -39.000672,
    "lng": -67.620514
  },
  {
    "name": "El Plumerillo",
    "city": "Mendoza",
    "country": "Argentina",
    "code1": "MDZ",
    "code2": "SAME",
    "lat": -32.831717,
    "lng": -68.792856
  },
  {
    "name": "Malargue",
    "city": "Malargue",
    "country": "Argentina",
    "code1": "LGS",
    "code2": "SAMM",
    "lat": -35.493597,
    "lng": -69.574267
  },
  {
    "name": "San Rafael",
    "city": "San Rafael",
    "country": "Argentina",
    "code1": "AFA",
    "code2": "SAMR",
    "lat": -34.588314,
    "lng": -68.403854
  },
  {
    "name": "Catamarca",
    "city": "Catamarca",
    "country": "Argentina",
    "code1": "CTC",
    "code2": "SANC",
    "lat": -28.593214,
    "lng": -65.750925
  },
  {
    "name": "Santiago Del Estero",
    "city": "Santiago Del Estero",
    "country": "Argentina",
    "code1": "SDE",
    "code2": "SANE",
    "lat": -27.765617,
    "lng": -64.310122
  },
  {
    "name": "Tinogasta",
    "city": "Tinogasta",
    "country": "Argentina",
    "code1": "",
    "code2": "SANI",
    "lat": -28.03775,
    "lng": -67.580314
  },
  {
    "name": "La Rioja",
    "city": "La Rioja",
    "country": "Argentina",
    "code1": "IRJ",
    "code2": "SANL",
    "lat": -29.381636,
    "lng": -66.795839
  },
  {
    "name": "Chilecito",
    "city": "Chilecito",
    "country": "Argentina",
    "code1": "",
    "code2": "SANO",
    "lat": -29.223888,
    "lng": -67.438889
  },
  {
    "name": "Teniente Benjamin Matienzo",
    "city": "Tucuman",
    "country": "Argentina",
    "code1": "TUC",
    "code2": "SANT",
    "lat": -26.840861,
    "lng": -65.104944
  },
  {
    "name": "San Juan",
    "city": "San Julian",
    "country": "Argentina",
    "code1": "UAQ",
    "code2": "SANU",
    "lat": -31.571472,
    "lng": -68.418194
  },
  {
    "name": "Rio Cuarto Area De Material",
    "city": "Rio Cuarto",
    "country": "Argentina",
    "code1": "RCU",
    "code2": "SAOC",
    "lat": -33.085128,
    "lng": -64.261314
  },
  {
    "name": "Villa Dolores",
    "city": "Villa Dolores",
    "country": "Argentina",
    "code1": "VDR",
    "code2": "SAOD",
    "lat": -31.945183,
    "lng": -65.146283
  },
  {
    "name": "Laboulaye",
    "city": "Laboulaye",
    "country": "Argentina",
    "code1": "",
    "code2": "SAOL",
    "lat": -34.135444,
    "lng": -63.36225
  },
  {
    "name": "Marcos Juarez",
    "city": "Marcos Juarez",
    "country": "Argentina",
    "code1": "",
    "code2": "SAOM",
    "lat": -32.683639,
    "lng": -62.157792
  },
  {
    "name": "Villa Reynolds",
    "city": "Villa Reynolds",
    "country": "Argentina",
    "code1": "",
    "code2": "SAOR",
    "lat": -33.725144,
    "lng": -65.378086
  },
  {
    "name": "San Luis",
    "city": "San Luis",
    "country": "Argentina",
    "code1": "LUQ",
    "code2": "SAOU",
    "lat": -33.273192,
    "lng": -66.356422
  },
  {
    "name": "Corrientes",
    "city": "Corrientes",
    "country": "Argentina",
    "code1": "CNQ",
    "code2": "SARC",
    "lat": -27.445503,
    "lng": -58.761864
  },
  {
    "name": "Resistencia",
    "city": "Resistencia",
    "country": "Argentina",
    "code1": "RES",
    "code2": "SARE",
    "lat": -27.449986,
    "lng": -59.056125
  },
  {
    "name": "Formosa",
    "city": "Formosa",
    "country": "Argentina",
    "code1": "FMA",
    "code2": "SARF",
    "lat": -26.212722,
    "lng": -58.228111
  },
  {
    "name": "Cataratas Del Iguazu",
    "city": "Iguazu Falls",
    "country": "Argentina",
    "code1": "IGR",
    "code2": "SARI",
    "lat": -25.737281,
    "lng": -54.473444
  },
  {
    "name": "Paso De Los Libres",
    "city": "Paso De Los Libres",
    "country": "Argentina",
    "code1": "AOL",
    "code2": "SARL",
    "lat": -29.689425,
    "lng": -57.152078
  },
  {
    "name": "Monte Caseros",
    "city": "Monte Caseros",
    "country": "Argentina",
    "code1": "",
    "code2": "SARM",
    "lat": -30.271922,
    "lng": -57.640231
  },
  {
    "name": "Posadas",
    "city": "Posadas",
    "country": "Argentina",
    "code1": "PSS",
    "code2": "SARP",
    "lat": -27.385839,
    "lng": -55.970728
  },
  {
    "name": "Termal",
    "city": "Presidencia R.s.pena",
    "country": "Argentina",
    "code1": "",
    "code2": "SARS",
    "lat": -26.756519,
    "lng": -60.493103
  },
  {
    "name": "Salta",
    "city": "Salta",
    "country": "Argentina",
    "code1": "SLA",
    "code2": "SASA",
    "lat": -24.855978,
    "lng": -65.486169
  },
  {
    "name": "Jujuy",
    "city": "Jujuy",
    "country": "Argentina",
    "code1": "JUJ",
    "code2": "SASJ",
    "lat": -24.392778,
    "lng": -65.097778
  },
  {
    "name": "Oran",
    "city": "Oran",
    "country": "Argentina",
    "code1": "ORA",
    "code2": "SASO",
    "lat": -23.152779,
    "lng": -64.32917
  },
  {
    "name": "La Quiaca",
    "city": "La Quiaca",
    "country": "Argentina",
    "code1": "",
    "code2": "SASQ",
    "lat": -22.150556,
    "lng": -65.5775
  },
  {
    "name": "Portage Municipal Airport",
    "city": "Portage",
    "country": "United States",
    "code1": "C47",
    "code2": "\\N",
    "lat": 43.5603136,
    "lng": -89.4828607
  },
  {
    "name": "Eldorado",
    "city": "El Dorado",
    "country": "Argentina",
    "code1": "",
    "code2": "SATD",
    "lat": -26.397499,
    "lng": -54.574722
  },
  {
    "name": "Goya",
    "city": "Goya",
    "country": "Argentina",
    "code1": "",
    "code2": "SATG",
    "lat": -29.099472,
    "lng": -59.250583
  },
  {
    "name": "Obera",
    "city": "Obera",
    "country": "Argentina",
    "code1": "",
    "code2": "SATO",
    "lat": -27.518156,
    "lng": -55.124156
  },
  {
    "name": "Reconquista",
    "city": "Reconquista",
    "country": "Argentina",
    "code1": "",
    "code2": "SATR",
    "lat": -29.210278,
    "lng": -59.68
  },
  {
    "name": "Curuzu Cuatia",
    "city": "Curuzu Cuatia",
    "country": "Argentina",
    "code1": "",
    "code2": "SATU",
    "lat": -29.770555,
    "lng": -57.978889
  },
  {
    "name": "El Bolson",
    "city": "El Bolson",
    "country": "Argentina",
    "code1": "EHL",
    "code2": "SAVB",
    "lat": -41.943189,
    "lng": -71.532289
  },
  {
    "name": "Comodoro Rivadavia",
    "city": "Comodoro Rivadavia",
    "country": "Argentina",
    "code1": "CRD",
    "code2": "SAVC",
    "lat": -45.785347,
    "lng": -67.465508
  },
  {
    "name": "Esquel",
    "city": "Esquel",
    "country": "Argentina",
    "code1": "EQS",
    "code2": "SAVE",
    "lat": -42.90795,
    "lng": -71.139472
  },
  {
    "name": "Almirante Zar",
    "city": "Trelew",
    "country": "Argentina",
    "code1": "REL",
    "code2": "SAVT",
    "lat": -43.2105,
    "lng": -65.270319
  },
  {
    "name": "Gobernador Castello",
    "city": "Viedma",
    "country": "Argentina",
    "code1": "VDM",
    "code2": "SAVV",
    "lat": -40.869222,
    "lng": -63.000389
  },
  {
    "name": "El Tehuelche",
    "city": "Puerto Madryn",
    "country": "Argentina",
    "code1": "PMY",
    "code2": "SAVY",
    "lat": -42.759161,
    "lng": -65.102725
  },
  {
    "name": "Base Marambio",
    "city": "Marambio Base",
    "country": "Antarctica",
    "code1": "",
    "code2": "SAWB",
    "lat": -64.238335,
    "lng": -56.630833
  },
  {
    "name": "Puerto Deseado",
    "city": "Puerto Deseado",
    "country": "Argentina",
    "code1": "PUD",
    "code2": "SAWD",
    "lat": -47.735292,
    "lng": -65.904097
  },
  {
    "name": "Rio Grande",
    "city": "Rio Grande",
    "country": "Argentina",
    "code1": "RGA",
    "code2": "SAWE",
    "lat": -53.777667,
    "lng": -67.749389
  },
  {
    "name": "Rio Gallegos",
    "city": "Rio Gallegos",
    "country": "Argentina",
    "code1": "RGL",
    "code2": "SAWG",
    "lat": -51.608875,
    "lng": -69.312636
  },
  {
    "name": "Ushuaia Malvinas Argentinas",
    "city": "Ushuaia",
    "country": "Argentina",
    "code1": "USH",
    "code2": "SAWH",
    "lat": -54.843278,
    "lng": -68.29575
  },
  {
    "name": "San Julian",
    "city": "San Julian",
    "country": "Argentina",
    "code1": "ULA",
    "code2": "SAWJ",
    "lat": -49.306775,
    "lng": -67.802589
  },
  {
    "name": "Perito Moreno",
    "city": "Perito Moreno",
    "country": "Argentina",
    "code1": "PMQ",
    "code2": "SAWP",
    "lat": -46.537911,
    "lng": -70.978689
  },
  {
    "name": "Santa Cruz",
    "city": "Santa Cruz",
    "country": "Argentina",
    "code1": "RZA",
    "code2": "SAWU",
    "lat": -50.01655,
    "lng": -68.579197
  },
  {
    "name": "Comandante Espora",
    "city": "Bahia Blanca",
    "country": "Argentina",
    "code1": "BHI",
    "code2": "SAZB",
    "lat": -38.724967,
    "lng": -62.169317
  },
  {
    "name": "Coronel Suarez",
    "city": "Colonel Suarez",
    "country": "Argentina",
    "code1": "",
    "code2": "SAZC",
    "lat": -37.446111,
    "lng": -61.889297
  },
  {
    "name": "Olavarria",
    "city": "Olavarria",
    "country": "Argentina",
    "code1": "",
    "code2": "SAZF",
    "lat": -36.890039,
    "lng": -60.216619
  },
  {
    "name": "General Pico",
    "city": "General Pico",
    "country": "Argentina",
    "code1": "",
    "code2": "SAZG",
    "lat": -35.696183,
    "lng": -63.758286
  },
  {
    "name": "Tres Arroyos",
    "city": "Tres Arroyos",
    "country": "Argentina",
    "code1": "",
    "code2": "SAZH",
    "lat": -38.386911,
    "lng": -60.329711
  },
  {
    "name": "Bolivar",
    "city": "Bolivar",
    "country": "Argentina",
    "code1": "",
    "code2": "SAZI",
    "lat": -36.186594,
    "lng": -61.076367
  },
  {
    "name": "Gogebic Iron County Airport",
    "city": "Ironwood",
    "country": "United States",
    "code1": "IWD",
    "code2": "\\N",
    "lat": 46.5274747,
    "lng": -90.1313967
  },
  {
    "name": "Mar Del Plata",
    "city": "Mar Del Plata",
    "country": "Argentina",
    "code1": "MDQ",
    "code2": "SAZM",
    "lat": -37.934167,
    "lng": -57.573333
  },
  {
    "name": "Presidente Peron",
    "city": "Neuquen",
    "country": "Argentina",
    "code1": "NQN",
    "code2": "SAZN",
    "lat": -38.949,
    "lng": -68.155711
  },
  {
    "name": "Mackinac Island Airport",
    "city": "Mackinac Island",
    "country": "United States",
    "code1": "MCD",
    "code2": "\\N",
    "lat": 45.8649344,
    "lng": -84.637344
  },
  {
    "name": "Comodoro P Zanni",
    "city": "Pehuajo",
    "country": "Argentina",
    "code1": "",
    "code2": "SAZP",
    "lat": -35.844592,
    "lng": -61.857553
  },
  {
    "name": "Santa Rosa",
    "city": "Santa Rosa",
    "country": "Argentina",
    "code1": "RSA",
    "code2": "SAZR",
    "lat": -36.588322,
    "lng": -64.275694
  },
  {
    "name": "San Carlos De Bariloche",
    "city": "San Carlos De Bariloche",
    "country": "Argentina",
    "code1": "BRC",
    "code2": "SAZS",
    "lat": -41.151172,
    "lng": -71.157542
  },
  {
    "name": "Tandil",
    "city": "Tandil",
    "country": "Argentina",
    "code1": "TDL",
    "code2": "SAZT",
    "lat": -37.237392,
    "lng": -59.227922
  },
  {
    "name": "Villa Gesell",
    "city": "Villa Gesell",
    "country": "Argentina",
    "code1": "VLG",
    "code2": "SAZV",
    "lat": -37.235408,
    "lng": -57.029239
  },
  {
    "name": "Cutralco",
    "city": "Cutralco",
    "country": "Argentina",
    "code1": "",
    "code2": "SAZW",
    "lat": -38.939683,
    "lng": -69.264642
  },
  {
    "name": "Aviador C Campos",
    "city": "San Martin Des Andes",
    "country": "Argentina",
    "code1": "CPC",
    "code2": "SAZY",
    "lat": -40.075383,
    "lng": -71.137294
  },
  {
    "name": "Conceicao Do Araguaia",
    "city": "Conceicao Do Araguaia",
    "country": "Brazil",
    "code1": "CDJ",
    "code2": "SBAA",
    "lat": -8.348347,
    "lng": -49.301528
  },
  {
    "name": "Campo Delio Jardim De Mattos",
    "city": "Rio De Janeiro",
    "country": "Brazil",
    "code1": "",
    "code2": "SBAF",
    "lat": -22.875083,
    "lng": -43.384708
  },
  {
    "name": "Amapa",
    "city": "Amapa",
    "country": "Brazil",
    "code1": "",
    "code2": "SBAM",
    "lat": 2.077511,
    "lng": -50.858236
  },
  {
    "name": "Araraquara",
    "city": "Araracuara",
    "country": "Brazil",
    "code1": "AQA",
    "code2": "SBAQ",
    "lat": -21.812,
    "lng": -48.133028
  },
  {
    "name": "Santa Maria",
    "city": "Aracaju",
    "country": "Brazil",
    "code1": "AJU",
    "code2": "SBAR",
    "lat": -10.984,
    "lng": -37.070333
  },
  {
    "name": "Assis",
    "city": "Assis",
    "country": "Brazil",
    "code1": "",
    "code2": "SBAS",
    "lat": -22.638564,
    "lng": -50.455914
  },
  {
    "name": "Alta Floresta",
    "city": "Alta Floresta",
    "country": "Brazil",
    "code1": "AFL",
    "code2": "SBAT",
    "lat": -9.866092,
    "lng": -56.106206
  },
  {
    "name": "Aracatuba",
    "city": "Aracatuba",
    "country": "Brazil",
    "code1": "ARU",
    "code2": "SBAU",
    "lat": -21.141342,
    "lng": -50.424722
  },
  {
    "name": "Val De Cans Intl",
    "city": "Belem",
    "country": "Brazil",
    "code1": "BEL",
    "code2": "SBBE",
    "lat": -1.37925,
    "lng": -48.476292
  },
  {
    "name": "Comandante Gustavo Kraemer",
    "city": "Bage",
    "country": "Brazil",
    "code1": "BGX",
    "code2": "SBBG",
    "lat": -31.390528,
    "lng": -54.112244
  },
  {
    "name": "Pampulha Carlos Drummond De Andrade",
    "city": "Belo Horizonte",
    "country": "Brazil",
    "code1": "PLU",
    "code2": "SBBH",
    "lat": -19.851181,
    "lng": -43.950628
  },
  {
    "name": "Bacacheri",
    "city": "Curitiba",
    "country": "Brazil",
    "code1": "BFH",
    "code2": "SBBI",
    "lat": -25.405078,
    "lng": -49.232036
  },
  {
    "name": "Major Brigadeiro Doorgal Borges",
    "city": "Barbacena",
    "country": "Brazil",
    "code1": "",
    "code2": "SBBQ",
    "lat": -21.267167,
    "lng": -43.761056
  },
  {
    "name": "Presidente Juscelino Kubitschek",
    "city": "Brasilia",
    "country": "Brazil",
    "code1": "BSB",
    "code2": "SBBR",
    "lat": -15.8711,
    "lng": -47.918625
  },
  {
    "name": "Bauru",
    "city": "Bauru",
    "country": "Brazil",
    "code1": "BAU",
    "code2": "SBBU",
    "lat": -22.345042,
    "lng": -49.0538
  },
  {
    "name": "Boa Vista",
    "city": "Boa Vista",
    "country": "Brazil",
    "code1": "BVB",
    "code2": "SBBV",
    "lat": 2.846311,
    "lng": -60.690069
  },
  {
    "name": "Barra Do Garcas",
    "city": "Barra Do Garcas",
    "country": "Brazil",
    "code1": "",
    "code2": "SBBW",
    "lat": -15.861344,
    "lng": -52.388894
  },
  {
    "name": "Cascavel",
    "city": "Cascavel",
    "country": "Brazil",
    "code1": "CAC",
    "code2": "SBCA",
    "lat": -25.000339,
    "lng": -53.500764
  },
  {
    "name": "Cachimbo",
    "city": "Itaituba",
    "country": "Brazil",
    "code1": "",
    "code2": "SBCC",
    "lat": -9.333936,
    "lng": -54.965422
  },
  {
    "name": "Tancredo Neves Intl",
    "city": "Belo Horizonte",
    "country": "Brazil",
    "code1": "CNF",
    "code2": "SBCF",
    "lat": -19.63375,
    "lng": -43.968856
  },
  {
    "name": "Campo Grande",
    "city": "Campo Grande",
    "country": "Brazil",
    "code1": "CGR",
    "code2": "SBCG",
    "lat": -20.468667,
    "lng": -54.6725
  },
  {
    "name": "Chapeco",
    "city": "Chapeco",
    "country": "Brazil",
    "code1": "XAP",
    "code2": "SBCH",
    "lat": -27.134219,
    "lng": -52.656553
  },
  {
    "name": "Carolina",
    "city": "Carolina",
    "country": "Brazil",
    "code1": "CLN",
    "code2": "SBCI",
    "lat": -7.320444,
    "lng": -47.458667
  },
  {
    "name": "Forquilhinha",
    "city": "Criciuma",
    "country": "Brazil",
    "code1": "CCM",
    "code2": "SBCM",
    "lat": -28.725817,
    "lng": -49.424739
  },
  {
    "name": "Canoas",
    "city": "Porto Alegre",
    "country": "Brazil",
    "code1": "",
    "code2": "SBCO",
    "lat": -29.945944,
    "lng": -51.144367
  },
  {
    "name": "Bartolomeu Lisandro",
    "city": "Campos",
    "country": "Brazil",
    "code1": "CAW",
    "code2": "SBCP",
    "lat": -21.698333,
    "lng": -41.301669
  },
  {
    "name": "Corumba Intl",
    "city": "Corumba",
    "country": "Brazil",
    "code1": "CMG",
    "code2": "SBCR",
    "lat": -19.011931,
    "lng": -57.673053
  },
  {
    "name": "Afonso Pena",
    "city": "Curitiba",
    "country": "Brazil",
    "code1": "CWB",
    "code2": "SBCT",
    "lat": -25.528475,
    "lng": -49.175775
  },
  {
    "name": "Caravelas",
    "city": "Caravelas",
    "country": "Brazil",
    "code1": "CRQ",
    "code2": "SBCV",
    "lat": -17.652283,
    "lng": -39.253069
  },
  {
    "name": "Campo Dos Bugres",
    "city": "Caxias Do Sul",
    "country": "Brazil",
    "code1": "CXJ",
    "code2": "SBCX",
    "lat": -29.197064,
    "lng": -51.187536
  },
  {
    "name": "Marechal Rondon",
    "city": "Cuiaba",
    "country": "Brazil",
    "code1": "CGB",
    "code2": "SBCY",
    "lat": -15.652931,
    "lng": -56.116719
  },
  {
    "name": "Cruzeiro do Sul",
    "city": "Cruzeiro do Sul",
    "country": "Brazil",
    "code1": "CZS",
    "code2": "SBCZ",
    "lat": -7.599906,
    "lng": -72.769489
  },
  {
    "name": "Presidente Prudente",
    "city": "President Prudente",
    "country": "Brazil",
    "code1": "PPB",
    "code2": "SBDN",
    "lat": -22.175056,
    "lng": -51.424639
  },
  {
    "name": "Eduardo Gomes Intl",
    "city": "Manaus",
    "country": "Brazil",
    "code1": "MAO",
    "code2": "SBEG",
    "lat": -3.038611,
    "lng": -60.049721
  },
  {
    "name": "Jacareacanga",
    "city": "Jacare-acanga",
    "country": "Brazil",
    "code1": "",
    "code2": "SBEK",
    "lat": -6.233156,
    "lng": -57.776869
  },
  {
    "name": "Sao Pedro Da Aldeia",
    "city": "Sao Pedro Da Aldeia",
    "country": "Brazil",
    "code1": "",
    "code2": "SBES",
    "lat": -22.812872,
    "lng": -42.092633
  },
  {
    "name": "Cataratas Intl",
    "city": "Foz Do Iguacu",
    "country": "Brazil",
    "code1": "IGU",
    "code2": "SBFI",
    "lat": -25.59615,
    "lng": -54.487206
  },
  {
    "name": "Hercilio Luz",
    "city": "Florianopolis",
    "country": "Brazil",
    "code1": "FLN",
    "code2": "SBFL",
    "lat": -27.670489,
    "lng": -48.547181
  },
  {
    "name": "Fernando De Noronha",
    "city": "Fernando Do Noronha",
    "country": "Brazil",
    "code1": "FEN",
    "code2": "SBFN",
    "lat": -3.854928,
    "lng": -32.423336
  },
  {
    "name": "Fronteira",
    "city": "Fronteira",
    "country": "Brazil",
    "code1": "",
    "code2": "SBFT",
    "lat": -20.278483,
    "lng": -49.187472
  },
  {
    "name": "Furnas",
    "city": "Alpinopolis",
    "country": "Brazil",
    "code1": "",
    "code2": "SBFU",
    "lat": -20.702817,
    "lng": -46.335264
  },
  {
    "name": "Pinto Martins Intl",
    "city": "Fortaleza",
    "country": "Brazil",
    "code1": "FOR",
    "code2": "SBFZ",
    "lat": -3.776283,
    "lng": -38.532556
  },
  {
    "name": "Galeao Antonio Carlos Jobim",
    "city": "Rio De Janeiro",
    "country": "Brazil",
    "code1": "GIG",
    "code2": "SBGL",
    "lat": -22.808903,
    "lng": -43.243647
  },
  {
    "name": "Guajara Mirim",
    "city": "Guajara-mirim",
    "country": "Brazil",
    "code1": "",
    "code2": "SBGM",
    "lat": -10.786375,
    "lng": -65.284792
  },
  {
    "name": "Santa Genoveva",
    "city": "Goiania",
    "country": "Brazil",
    "code1": "GYN",
    "code2": "SBGO",
    "lat": -16.632033,
    "lng": -49.220686
  },
  {
    "name": "Embraer Unidade Gaviao Peixoto",
    "city": "Macae",
    "country": "Brazil",
    "code1": "",
    "code2": "SBGP",
    "lat": -21.773683,
    "lng": -48.405078
  },
  {
    "name": "Guarulhos Gov Andre Franco Montouro",
    "city": "Sao Paulo",
    "country": "Brazil",
    "code1": "GRU",
    "code2": "SBGR",
    "lat": -23.432075,
    "lng": -46.469511
  },
  {
    "name": "Guaratingueta",
    "city": "Guaratingueta",
    "country": "Brazil",
    "code1": "",
    "code2": "SBGW",
    "lat": -22.791608,
    "lng": -45.204778
  },
  {
    "name": "Altamira",
    "city": "Altamira",
    "country": "Brazil",
    "code1": "ATM",
    "code2": "SBHT",
    "lat": -3.253906,
    "lng": -52.253978
  },
  {
    "name": "Itacoatiara",
    "city": "Itaituba",
    "country": "Brazil",
    "code1": "",
    "code2": "SBIC",
    "lat": -3.127256,
    "lng": -58.481186
  },
  {
    "name": "Itaituba",
    "city": "Itaituba",
    "country": "Brazil",
    "code1": "",
    "code2": "SBIH",
    "lat": -4.242342,
    "lng": -56.000669
  },
  {
    "name": "Ilheus",
    "city": "Ilheus",
    "country": "Brazil",
    "code1": "IOS",
    "code2": "SBIL",
    "lat": -14.815964,
    "lng": -39.033197
  },
  {
    "name": "Usiminas",
    "city": "Ipatinga",
    "country": "Brazil",
    "code1": "IPN",
    "code2": "SBIP",
    "lat": -19.470722,
    "lng": -42.487583
  },
  {
    "name": "Hidroeletrica",
    "city": "Itumbiara",
    "country": "Brazil",
    "code1": "",
    "code2": "SBIT",
    "lat": -18.444661,
    "lng": -49.213361
  },
  {
    "name": "Prefeito Renato Moreira",
    "city": "Imperatriz",
    "country": "Brazil",
    "code1": "IMP",
    "code2": "SBIZ",
    "lat": -5.531292,
    "lng": -47.46005
  },
  {
    "name": "Julio Cesar",
    "city": "Belem",
    "country": "Brazil",
    "code1": "",
    "code2": "SBJC",
    "lat": -1.414158,
    "lng": -48.460739
  },
  {
    "name": "Francisco De Assis",
    "city": "Juiz De Fora",
    "country": "Brazil",
    "code1": "JDF",
    "code2": "SBJF",
    "lat": -21.7915,
    "lng": -43.386778
  },
  {
    "name": "Presidente Castro Pinto",
    "city": "Joao Pessoa",
    "country": "Brazil",
    "code1": "JPA",
    "code2": "SBJP",
    "lat": -7.148381,
    "lng": -34.950681
  },
  {
    "name": "Lauro Carneiro De Loyola",
    "city": "Joinville",
    "country": "Brazil",
    "code1": "JOI",
    "code2": "SBJV",
    "lat": -26.224453,
    "lng": -48.797364
  },
  {
    "name": "Presidente Joao Suassuna",
    "city": "Campina Grande",
    "country": "Brazil",
    "code1": "CPV",
    "code2": "SBKG",
    "lat": -7.269917,
    "lng": -35.896364
  },
  {
    "name": "Viracopos",
    "city": "Campinas",
    "country": "Brazil",
    "code1": "VCP",
    "code2": "SBKP",
    "lat": -23.0075,
    "lng": -47.134444
  },
  {
    "name": "Lages",
    "city": "Lajes",
    "country": "Brazil",
    "code1": "",
    "code2": "SBLJ",
    "lat": -27.782142,
    "lng": -50.281486
  },
  {
    "name": "Lins",
    "city": "Lins",
    "country": "Brazil",
    "code1": "LIP",
    "code2": "SBLN",
    "lat": -21.664039,
    "lng": -49.730519
  },
  {
    "name": "Londrina",
    "city": "Londrina",
    "country": "Brazil",
    "code1": "LDB",
    "code2": "SBLO",
    "lat": -23.333625,
    "lng": -51.130072
  },
  {
    "name": "Bom Jesus Da Lapa",
    "city": "Bom Jesus Da Lapa",
    "country": "Brazil",
    "code1": "LAZ",
    "code2": "SBLP",
    "lat": -13.262086,
    "lng": -43.408114
  },
  {
    "name": "Lagoa Santa",
    "city": "Lagoa Santa",
    "country": "Brazil",
    "code1": "",
    "code2": "SBLS",
    "lat": -19.661611,
    "lng": -43.896403
  },
  {
    "name": "Maraba",
    "city": "Maraba",
    "country": "Brazil",
    "code1": "MAB",
    "code2": "SBMA",
    "lat": -5.368589,
    "lng": -49.138025
  },
  {
    "name": "Monte Dourado",
    "city": "Almeirim",
    "country": "Brazil",
    "code1": "",
    "code2": "SBMD",
    "lat": -0.889839,
    "lng": -52.60225
  },
  {
    "name": "Regional De Maringa Silvio Name Junior",
    "city": "Maringa",
    "country": "Brazil",
    "code1": "MGF",
    "code2": "SBMG",
    "lat": -23.476392,
    "lng": -52.016406
  },
  {
    "name": "Mario Ribeiro",
    "city": "Montes Claros",
    "country": "Brazil",
    "code1": "MOC",
    "code2": "SBMK",
    "lat": -16.706925,
    "lng": -43.8189
  },
  {
    "name": "Grand Marais Cook County Airport",
    "city": "Grand Marais",
    "country": "United States",
    "code1": "GRM",
    "code2": "KCKC",
    "lat": 47.8383333,
    "lng": -90.3829444
  },
  {
    "name": "Ponta Pelada",
    "city": "Manaus",
    "country": "Brazil",
    "code1": "",
    "code2": "SBMN",
    "lat": -3.146042,
    "lng": -59.9863
  },
  {
    "name": "Zumbi Dos Palmares",
    "city": "Maceio",
    "country": "Brazil",
    "code1": "MCZ",
    "code2": "SBMO",
    "lat": -9.510808,
    "lng": -35.791678
  },
  {
    "name": "Macapa",
    "city": "Macapa",
    "country": "Brazil",
    "code1": "MCP",
    "code2": "SBMQ",
    "lat": 0.050664,
    "lng": -51.072178
  },
  {
    "name": "Dix Sept Rosado",
    "city": "Mocord",
    "country": "Brazil",
    "code1": "",
    "code2": "SBMS",
    "lat": -5.201919,
    "lng": -37.364347
  },
  {
    "name": "Marte",
    "city": "Sao Paulo",
    "country": "Brazil",
    "code1": "",
    "code2": "SBMT",
    "lat": -23.509119,
    "lng": -46.637753
  },
  {
    "name": "Manicore",
    "city": "Manicore",
    "country": "Brazil",
    "code1": "MNX",
    "code2": "SBMY",
    "lat": -5.811381,
    "lng": -61.278319
  },
  {
    "name": "Ministro Victor Konder Intl",
    "city": "Navegantes",
    "country": "Brazil",
    "code1": "NVT",
    "code2": "SBNF",
    "lat": -26.879999,
    "lng": -48.65139
  },
  {
    "name": "Santo Angelo",
    "city": "Santo Angelo",
    "country": "Brazil",
    "code1": "GEL",
    "code2": "SBNM",
    "lat": -28.281683,
    "lng": -54.169139
  },
  {
    "name": "Augusto Severo",
    "city": "Natal",
    "country": "Brazil",
    "code1": "NAT",
    "code2": "SBNT",
    "lat": -5.911417,
    "lng": -35.247717
  },
  {
    "name": "Oiapoque",
    "city": "Oioiapoque",
    "country": "Brazil",
    "code1": "",
    "code2": "SBOI",
    "lat": 3.855486,
    "lng": -51.796867
  },
  {
    "name": "Salgado Filho",
    "city": "Porto Alegre",
    "country": "Brazil",
    "code1": "POA",
    "code2": "SBPA",
    "lat": -29.994428,
    "lng": -51.171428
  },
  {
    "name": "Prefeito Doutor Joao Silva Filho",
    "city": "Parnaiba",
    "country": "Brazil",
    "code1": "",
    "code2": "SBPB",
    "lat": -2.893747,
    "lng": -41.731961
  },
  {
    "name": "Pocos De Caldas",
    "city": "Pocos De Caldas",
    "country": "Brazil",
    "code1": "POO",
    "code2": "SBPC",
    "lat": -21.843014,
    "lng": -46.567917
  },
  {
    "name": "Lauro Kurtz",
    "city": "Passo Fundo",
    "country": "Brazil",
    "code1": "PFB",
    "code2": "SBPF",
    "lat": -28.243989,
    "lng": -52.326558
  },
  {
    "name": "Pelotas",
    "city": "Pelotas",
    "country": "Brazil",
    "code1": "PET",
    "code2": "SBPK",
    "lat": -31.718353,
    "lng": -52.327689
  },
  {
    "name": "Senador Nilo Coelho",
    "city": "Petrolina",
    "country": "Brazil",
    "code1": "PNZ",
    "code2": "SBPL",
    "lat": -9.362411,
    "lng": -40.569097
  },
  {
    "name": "Porto Nacional",
    "city": "Porto Nacional",
    "country": "Brazil",
    "code1": "PNB",
    "code2": "SBPN",
    "lat": -10.719417,
    "lng": -48.399736
  },
  {
    "name": "Ponta Pora",
    "city": "Ponta Pora",
    "country": "Brazil",
    "code1": "PMG",
    "code2": "SBPP",
    "lat": -22.549639,
    "lng": -55.702614
  },
  {
    "name": "Governador Jorge Teixeira De Oliveira",
    "city": "Porto Velho",
    "country": "Brazil",
    "code1": "PVH",
    "code2": "SBPV",
    "lat": -8.709294,
    "lng": -63.902281
  },
  {
    "name": "Porter County Municipal Airport",
    "city": "Valparaiso",
    "country": "United States",
    "code1": "NPZ",
    "code2": "\\N",
    "lat": 41.4539722,
    "lng": -87.0070833
  },
  {
    "name": "PlÃ¡cido de Castro",
    "city": "Rio Branco",
    "country": "Brazil",
    "code1": "RBR",
    "code2": "SBRB",
    "lat": -9.583,
    "lng": -67.4836
  },
  {
    "name": "Guararapes Gilberto Freyre Intl",
    "city": "Recife",
    "country": "Brazil",
    "code1": "REC",
    "code2": "SBRF",
    "lat": -8.126794,
    "lng": -34.923039
  },
  {
    "name": "Rio Grande",
    "city": "Rio Grande",
    "country": "Brazil",
    "code1": "RIG",
    "code2": "SBRG",
    "lat": -32.082617,
    "lng": -52.166542
  },
  {
    "name": "Santos Dumont",
    "city": "Rio De Janeiro",
    "country": "Brazil",
    "code1": "SDU",
    "code2": "SBRJ",
    "lat": -22.910461,
    "lng": -43.163133
  },
  {
    "name": "Leite Lopes",
    "city": "Ribeirao Preto",
    "country": "Brazil",
    "code1": "RAO",
    "code2": "SBRP",
    "lat": -21.134167,
    "lng": -47.774189
  },
  {
    "name": "Santa Cruz",
    "city": "Rio De Janeiro",
    "country": "Brazil",
    "code1": "STU",
    "code2": "SBSC",
    "lat": -22.93235,
    "lng": -43.719092
  },
  {
    "name": "Professor Urbano Ernesto Stumpf",
    "city": "Sao Jose Dos Campos",
    "country": "Brazil",
    "code1": "SJK",
    "code2": "SBSJ",
    "lat": -23.228172,
    "lng": -45.862739
  },
  {
    "name": "Marechal Cunha Machado Intl",
    "city": "Sao Luis",
    "country": "Brazil",
    "code1": "SLZ",
    "code2": "SBSL",
    "lat": -2.585361,
    "lng": -44.234139
  },
  {
    "name": "Congonhas",
    "city": "Sao Paulo",
    "country": "Brazil",
    "code1": "CGH",
    "code2": "SBSP",
    "lat": -23.626692,
    "lng": -46.655375
  },
  {
    "name": "Sao Jose Do Rio Preto",
    "city": "Sao Jose Do Rio Preto",
    "country": "Brazil",
    "code1": "SJP",
    "code2": "SBSR",
    "lat": -20.816567,
    "lng": -49.406511
  },
  {
    "name": "Base Aerea De Santos",
    "city": "Santos",
    "country": "Brazil",
    "code1": "SSZ",
    "code2": "SBST",
    "lat": -23.925206,
    "lng": -46.2875
  },
  {
    "name": "Deputado Luis Eduardo Magalhaes",
    "city": "Salvador",
    "country": "Brazil",
    "code1": "SSA",
    "code2": "SBSV",
    "lat": -12.910994,
    "lng": -38.331044
  },
  {
    "name": "Trombetas",
    "city": "Oriximina",
    "country": "Brazil",
    "code1": "TMT",
    "code2": "SBTB",
    "lat": -1.4896,
    "lng": -56.396803
  },
  {
    "name": "Senador Petronio Portella",
    "city": "Teresina",
    "country": "Brazil",
    "code1": "THE",
    "code2": "SBTE",
    "lat": -5.059942,
    "lng": -42.823478
  },
  {
    "name": "Tefe",
    "city": "Tefe",
    "country": "Brazil",
    "code1": "TFF",
    "code2": "SBTF",
    "lat": -3.382944,
    "lng": -64.724056
  },
  {
    "name": "Tarauaca",
    "city": "Tarauaca",
    "country": "Brazil",
    "code1": "",
    "code2": "SBTK",
    "lat": -8.155256,
    "lng": -70.783269
  },
  {
    "name": "Telemaco Borba",
    "city": "Telemaco Borba",
    "country": "Brazil",
    "code1": "",
    "code2": "SBTL",
    "lat": -24.317775,
    "lng": -50.651592
  },
  {
    "name": "Tirios",
    "city": "Obidos Tirios",
    "country": "Brazil",
    "code1": "",
    "code2": "SBTS",
    "lat": 2.223472,
    "lng": -55.946056
  },
  {
    "name": "Tabatinga",
    "city": "Tabatinga",
    "country": "Brazil",
    "code1": "TBT",
    "code2": "SBTT",
    "lat": -4.255669,
    "lng": -69.935828
  },
  {
    "name": "Tucurui",
    "city": "Tucurui",
    "country": "Brazil",
    "code1": "TUR",
    "code2": "SBTU",
    "lat": -3.786008,
    "lng": -49.720267
  },
  {
    "name": "Sao Gabriel Da Cachoeira",
    "city": "Sao Gabriel",
    "country": "Brazil",
    "code1": "",
    "code2": "SBUA",
    "lat": -0.148419,
    "lng": -66.985589
  },
  {
    "name": "Paulo Afonso",
    "city": "Paulo Alfonso",
    "country": "Brazil",
    "code1": "PAV",
    "code2": "SBUF",
    "lat": -9.400878,
    "lng": -38.250575
  },
  {
    "name": "Rubem Berta",
    "city": "Uruguaiana",
    "country": "Brazil",
    "code1": "URG",
    "code2": "SBUG",
    "lat": -29.782178,
    "lng": -57.038189
  },
  {
    "name": "Ten Cel Av Cesar Bombonato",
    "city": "Uberlandia",
    "country": "Brazil",
    "code1": "UDI",
    "code2": "SBUL",
    "lat": -18.882844,
    "lng": -48.225594
  },
  {
    "name": "Urubupunga",
    "city": "Castilho",
    "country": "Brazil",
    "code1": "",
    "code2": "SBUP",
    "lat": -20.777067,
    "lng": -51.564761
  },
  {
    "name": "Uberaba",
    "city": "Uberaba",
    "country": "Brazil",
    "code1": "UBA",
    "code2": "SBUR",
    "lat": -19.765,
    "lng": -47.964778
  },
  {
    "name": "Major Brigadeiro Trompowsky",
    "city": "Varginha",
    "country": "Brazil",
    "code1": "VAG",
    "code2": "SBVG",
    "lat": -21.590067,
    "lng": -45.473342
  },
  {
    "name": "Vilhena",
    "city": "Vilhena",
    "country": "Brazil",
    "code1": "BVH",
    "code2": "SBVH",
    "lat": -12.694375,
    "lng": -60.098269
  },
  {
    "name": "Goiabeiras",
    "city": "Vitoria",
    "country": "Brazil",
    "code1": "VIX",
    "code2": "SBVT",
    "lat": -20.258056,
    "lng": -40.286389
  },
  {
    "name": "Iauarete",
    "city": "Iauarete",
    "country": "Brazil",
    "code1": "",
    "code2": "SBYA",
    "lat": 0.6075,
    "lng": -69.185837
  },
  {
    "name": "Campo Fontenelle",
    "city": "Piracununga",
    "country": "Brazil",
    "code1": "QPS",
    "code2": "SBYS",
    "lat": -21.984561,
    "lng": -47.334764
  },
  {
    "name": "Chacalluta",
    "city": "Arica",
    "country": "Chile",
    "code1": "ARI",
    "code2": "SCAR",
    "lat": -18.348531,
    "lng": -70.338742
  },
  {
    "name": "Balmaceda",
    "city": "Balmaceda",
    "country": "Chile",
    "code1": "BBA",
    "code2": "SCBA",
    "lat": -45.916058,
    "lng": -71.689475
  },
  {
    "name": "El Bosque",
    "city": "Santiago",
    "country": "Chile",
    "code1": "",
    "code2": "SCBQ",
    "lat": -33.5618,
    "lng": -70.6884
  },
  {
    "name": "Chile Chico",
    "city": "Chile Chico",
    "country": "Chile",
    "code1": "CCH",
    "code2": "SCCC",
    "lat": -46.583341,
    "lng": -71.687405
  },
  {
    "name": "El Loa",
    "city": "Calama",
    "country": "Chile",
    "code1": "CJC",
    "code2": "SCCF",
    "lat": -22.498175,
    "lng": -68.903575
  },
  {
    "name": "General Bernardo O Higgins",
    "city": "Chillan",
    "country": "Chile",
    "code1": "",
    "code2": "SCCH",
    "lat": -36.582497,
    "lng": -72.031367
  },
  {
    "name": "Carlos Ibanez Del Campo Intl",
    "city": "Punta Arenas",
    "country": "Chile",
    "code1": "PUQ",
    "code2": "SCCI",
    "lat": -53.002642,
    "lng": -70.854586
  },
  {
    "name": "Teniente Vidal",
    "city": "Coyhaique",
    "country": "Chile",
    "code1": "GXQ",
    "code2": "SCCY",
    "lat": -45.594211,
    "lng": -72.106133
  },
  {
    "name": "Diego Aracena Intl",
    "city": "Iquique",
    "country": "Chile",
    "code1": "IQQ",
    "code2": "SCDA",
    "lat": -20.535222,
    "lng": -70.181275
  },
  {
    "name": "Arturo Merino Benitez Intl",
    "city": "Santiago",
    "country": "Chile",
    "code1": "SCL",
    "code2": "SCEL",
    "lat": -33.392975,
    "lng": -70.785803
  },
  {
    "name": "Cerro Moreno Intl",
    "city": "Antofagasta",
    "country": "Chile",
    "code1": "ANF",
    "code2": "SCFA",
    "lat": -23.444478,
    "lng": -70.4451
  },
  {
    "name": "Capitan Fuentes Martinez",
    "city": "Porvenir",
    "country": "Chile",
    "code1": "",
    "code2": "SCFM",
    "lat": -53.2537,
    "lng": -70.319228
  },
  {
    "name": "Futaleufu",
    "city": "Futaleufu",
    "country": "Chile",
    "code1": "",
    "code2": "SCFT",
    "lat": -43.189167,
    "lng": -71.851112
  },
  {
    "name": "Maria Dolores",
    "city": "Los Angeles",
    "country": "Chile",
    "code1": "LSQ",
    "code2": "SCGE",
    "lat": -37.401731,
    "lng": -72.425444
  },
  {
    "name": "Guardiamarina Zanartu",
    "city": "Puerto Williams",
    "country": "Chile",
    "code1": "",
    "code2": "SCGZ",
    "lat": -54.931072,
    "lng": -67.626261
  },
  {
    "name": "Carriel Sur Intl",
    "city": "Concepcion",
    "country": "Chile",
    "code1": "CCP",
    "code2": "SCIE",
    "lat": -36.77265,
    "lng": -73.063106
  },
  {
    "name": "Mataveri Intl",
    "city": "Easter Island",
    "country": "Chile",
    "code1": "IPC",
    "code2": "SCIP",
    "lat": -27.164792,
    "lng": -109.421831
  },
  {
    "name": "Canal Bajo Carlos Hott Siebert",
    "city": "Osorno",
    "country": "Chile",
    "code1": "ZOS",
    "code2": "SCJO",
    "lat": -40.611208,
    "lng": -73.061042
  },
  {
    "name": "Vallenar",
    "city": "Vallenar",
    "country": "Chile",
    "code1": "",
    "code2": "SCLL",
    "lat": -28.596403,
    "lng": -70.755997
  },
  {
    "name": "De La Independencia",
    "city": "Rancagua",
    "country": "Chile",
    "code1": "",
    "code2": "SCRG",
    "lat": -34.173694,
    "lng": -70.775694
  },
  {
    "name": "Teniente Rodolfo Marsh Martin",
    "city": "Isla Rey Jorge",
    "country": "Antarctica",
    "code1": "",
    "code2": "SCRM",
    "lat": -62.190833,
    "lng": -58.986667
  },
  {
    "name": "La Florida",
    "city": "La Serena",
    "country": "Chile",
    "code1": "LSC",
    "code2": "SCSE",
    "lat": -29.916233,
    "lng": -71.199522
  },
  {
    "name": "Eulogio Sanchez",
    "city": "Santiago",
    "country": "Chile",
    "code1": "",
    "code2": "SCTB",
    "lat": -33.456278,
    "lng": -70.546667
  },
  {
    "name": "Maquehue",
    "city": "Temuco",
    "country": "Chile",
    "code1": "ZCO",
    "code2": "SCTC",
    "lat": -38.766819,
    "lng": -72.637097
  },
  {
    "name": "El Tepual Intl",
    "city": "Puerto Montt",
    "country": "Chile",
    "code1": "PMC",
    "code2": "SCTE",
    "lat": -41.438886,
    "lng": -73.093953
  },
  {
    "name": "Chaiten",
    "city": "Chaiten",
    "country": "Chile",
    "code1": "WCH",
    "code2": "SCTN",
    "lat": -42.932808,
    "lng": -72.699114
  },
  {
    "name": "Pichoy",
    "city": "Valdivia",
    "country": "Chile",
    "code1": "ZAL",
    "code2": "SCVD",
    "lat": -39.649956,
    "lng": -73.086111
  },
  {
    "name": "Chachoan",
    "city": "Ambato",
    "country": "Ecuador",
    "code1": "ATF",
    "code2": "SEAM",
    "lat": -1.212067,
    "lng": -78.574636
  },
  {
    "name": "Hacienda Clementina",
    "city": "Clementia",
    "country": "Ecuador",
    "code1": "",
    "code2": "SECM",
    "lat": -1.706275,
    "lng": -79.378936
  },
  {
    "name": "Francisco De Orellana",
    "city": "Coca",
    "country": "Ecuador",
    "code1": "OCC",
    "code2": "SECO",
    "lat": -0.462886,
    "lng": -76.986842
  },
  {
    "name": "Mariscal Lamar",
    "city": "Cuenca",
    "country": "Ecuador",
    "code1": "CUE",
    "code2": "SECU",
    "lat": -2.889467,
    "lng": -78.984397
  },
  {
    "name": "Seymour",
    "city": "Galapagos",
    "country": "Ecuador",
    "code1": "GPS",
    "code2": "SEGS",
    "lat": -0.453758,
    "lng": -90.265914
  },
  {
    "name": "Jose Joaquin De Olmedo Intl",
    "city": "Guayaquil",
    "country": "Ecuador",
    "code1": "GYE",
    "code2": "SEGU",
    "lat": -2.157419,
    "lng": -79.883558
  },
  {
    "name": "Gualaquiza",
    "city": "Gualaquiza",
    "country": "Ecuador",
    "code1": "",
    "code2": "SEGZ",
    "lat": -3.423214,
    "lng": -78.566994
  },
  {
    "name": "Atahualpa",
    "city": "Ibarra",
    "country": "Ecuador",
    "code1": "",
    "code2": "SEIB",
    "lat": 0.338419,
    "lng": -78.136422
  },
  {
    "name": "Km 192",
    "city": "Km-192",
    "country": "Ecuador",
    "code1": "",
    "code2": "SEKK",
    "lat": 0.184203,
    "lng": -79.391956
  },
  {
    "name": "Hacienda La Julia",
    "city": "La Julia",
    "country": "Ecuador",
    "code1": "",
    "code2": "SELJ",
    "lat": -1.704381,
    "lng": -79.552261
  },
  {
    "name": "Cotopaxi Intl",
    "city": "Latacunga",
    "country": "Ecuador",
    "code1": "",
    "code2": "SELT",
    "lat": -0.906833,
    "lng": -78.615756
  },
  {
    "name": "Jose Maria Velasco Ibarra",
    "city": "Macara",
    "country": "Ecuador",
    "code1": "",
    "code2": "SEMA",
    "lat": -4.378231,
    "lng": -79.941022
  },
  {
    "name": "Coronel E Carvajal",
    "city": "Macas",
    "country": "Ecuador",
    "code1": "XMS",
    "code2": "SEMC",
    "lat": -2.299167,
    "lng": -78.12075
  },
  {
    "name": "General Manuel Serrano",
    "city": "Machala",
    "country": "Ecuador",
    "code1": "MCH",
    "code2": "SEMH",
    "lat": -3.268903,
    "lng": -79.961572
  },
  {
    "name": "Montalvo",
    "city": "Montalvo",
    "country": "Ecuador",
    "code1": "",
    "code2": "SEMO",
    "lat": -2.067014,
    "lng": -76.975742
  },
  {
    "name": "Eloy Alfaro Intl",
    "city": "Manta",
    "country": "Ecuador",
    "code1": "MEC",
    "code2": "SEMT",
    "lat": -0.946078,
    "lng": -80.678808
  },
  {
    "name": "Maragrosa",
    "city": "Maragrosa",
    "country": "Ecuador",
    "code1": "",
    "code2": "SEMX",
    "lat": -2.851097,
    "lng": -79.803619
  },
  {
    "name": "Amable Calle Gutierrez",
    "city": "Pasaje",
    "country": "Ecuador",
    "code1": "",
    "code2": "SEPS",
    "lat": -3.319667,
    "lng": -79.769165
  },
  {
    "name": "Reales Tamarindos",
    "city": "Portoviejo",
    "country": "Ecuador",
    "code1": "PVO",
    "code2": "SEPV",
    "lat": -1.041647,
    "lng": -80.472206
  },
  {
    "name": "Quevedo",
    "city": "Quevedo",
    "country": "Ecuador",
    "code1": "",
    "code2": "SEQE",
    "lat": -0.9894,
    "lng": -79.465114
  },
  {
    "name": "Mariscal Sucre Intl",
    "city": "Quito",
    "country": "Ecuador",
    "code1": "UIO",
    "code2": "SEQU",
    "lat": -0.141144,
    "lng": -78.488214
  },
  {
    "name": "Chimborazo",
    "city": "Riobamba",
    "country": "Ecuador",
    "code1": "",
    "code2": "SERB",
    "lat": -1.653433,
    "lng": -78.656142
  },
  {
    "name": "Coronel Artilleria Victor Larrea",
    "city": "Santa Rosa",
    "country": "Ecuador",
    "code1": "",
    "code2": "SERO",
    "lat": -3.435161,
    "lng": -79.977817
  },
  {
    "name": "General Ulpiano Paez",
    "city": "Salinas",
    "country": "Ecuador",
    "code1": "SNC",
    "code2": "SESA",
    "lat": -2.204994,
    "lng": -80.988878
  },
  {
    "name": "Santo Domingo Los Colorados",
    "city": "Santo Domingo",
    "country": "Ecuador",
    "code1": "",
    "code2": "SESD",
    "lat": -0.248222,
    "lng": -79.214447
  },
  {
    "name": "Taura",
    "city": "Taura",
    "country": "Ecuador",
    "code1": "",
    "code2": "SETA",
    "lat": -2.261036,
    "lng": -79.680169
  },
  {
    "name": "Mayor Galo Torres",
    "city": "Tena",
    "country": "Ecuador",
    "code1": "",
    "code2": "SETE",
    "lat": -0.986767,
    "lng": -77.819447
  },
  {
    "name": "Tarapoa",
    "city": "Tarapoa",
    "country": "Ecuador",
    "code1": "TPC",
    "code2": "SETR",
    "lat": -0.122956,
    "lng": -76.33775
  },
  {
    "name": "Teniente Coronel Luis A Mantilla",
    "city": "Tulcan",
    "country": "Ecuador",
    "code1": "TUA",
    "code2": "SETU",
    "lat": 0.809506,
    "lng": -77.708056
  },
  {
    "name": "Silverton",
    "city": "Silverton",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 37.812545,
    "lng": -107.662994
  },
  {
    "name": "Silvio Pettirossi Intl",
    "city": "Asuncion",
    "country": "Paraguay",
    "code1": "ASU",
    "code2": "SGAS",
    "lat": -25.23985,
    "lng": -57.519133
  },
  {
    "name": "Juan De Ayolas",
    "city": "Ayolas",
    "country": "Paraguay",
    "code1": "",
    "code2": "SGAY",
    "lat": -27.37065,
    "lng": -56.853944
  },
  {
    "name": "Teniente Col Carmelo Peralta",
    "city": "Conception",
    "country": "Paraguay",
    "code1": "",
    "code2": "SGCO",
    "lat": -23.44175,
    "lng": -57.427122
  },
  {
    "name": "Itaipu",
    "city": "Itaipu",
    "country": "Paraguay",
    "code1": "",
    "code2": "SGIB",
    "lat": -25.407853,
    "lng": -54.619417
  },
  {
    "name": "Dr Luis Maria Argana Intl",
    "city": "Mariscal Estigarribia",
    "country": "Paraguay",
    "code1": "",
    "code2": "SGME",
    "lat": -22.044986,
    "lng": -60.621694
  },
  {
    "name": "Carlos Miguel Gimenez",
    "city": "Pilar",
    "country": "Paraguay",
    "code1": "",
    "code2": "SGPI",
    "lat": -26.881467,
    "lng": -58.318036
  },
  {
    "name": "El Eden",
    "city": "Armenia",
    "country": "Colombia",
    "code1": "AXM",
    "code2": "SKAR",
    "lat": 4.452775,
    "lng": -75.766447
  },
  {
    "name": "Tres De Mayo",
    "city": "Puerto Asis",
    "country": "Colombia",
    "code1": "PUU",
    "code2": "SKAS",
    "lat": 0.505228,
    "lng": -76.500836
  },
  {
    "name": "Las Flores",
    "city": "El Banco",
    "country": "Colombia",
    "code1": "",
    "code2": "SKBC",
    "lat": 9.045542,
    "lng": -73.974931
  },
  {
    "name": "Palonegro",
    "city": "Bucaramanga",
    "country": "Colombia",
    "code1": "BGA",
    "code2": "SKBG",
    "lat": 7.1265,
    "lng": -73.184778
  },
  {
    "name": "Eldorado Intl",
    "city": "Bogota",
    "country": "Colombia",
    "code1": "BOG",
    "code2": "SKBO",
    "lat": 4.701594,
    "lng": -74.146947
  },
  {
    "name": "Ernesto Cortissoz",
    "city": "Barranquilla",
    "country": "Colombia",
    "code1": "BAQ",
    "code2": "SKBQ",
    "lat": 10.889589,
    "lng": -74.780819
  },
  {
    "name": "Jose Celestino Mutis",
    "city": "Bahia Solano",
    "country": "Colombia",
    "code1": "BSC",
    "code2": "SKBS",
    "lat": 6.202917,
    "lng": -77.394675
  },
  {
    "name": "Gerardo Tobar Lopez",
    "city": "Buenaventura",
    "country": "Colombia",
    "code1": "BUN",
    "code2": "SKBU",
    "lat": 3.819628,
    "lng": -76.989767
  },
  {
    "name": "Camilo Daza",
    "city": "Cucuta",
    "country": "Colombia",
    "code1": "CUC",
    "code2": "SKCC",
    "lat": 7.927567,
    "lng": -72.511547
  },
  {
    "name": "Rafael Nunez",
    "city": "Cartagena",
    "country": "Colombia",
    "code1": "CTG",
    "code2": "SKCG",
    "lat": 10.442381,
    "lng": -75.512961
  },
  {
    "name": "Alfonso Bonilla Aragon Intl",
    "city": "Cali",
    "country": "Colombia",
    "code1": "CLO",
    "code2": "SKCL",
    "lat": 3.543222,
    "lng": -76.381583
  },
  {
    "name": "La Florida",
    "city": "Tumaco",
    "country": "Colombia",
    "code1": "TCO",
    "code2": "SKCO",
    "lat": 1.814417,
    "lng": -78.749228
  },
  {
    "name": "Las Brujas",
    "city": "Corozal",
    "country": "Colombia",
    "code1": "CZU",
    "code2": "SKCZ",
    "lat": 9.332742,
    "lng": -75.285594
  },
  {
    "name": "Yariguies",
    "city": "Barrancabermeja",
    "country": "Colombia",
    "code1": "EJA",
    "code2": "SKEJ",
    "lat": 7.024331,
    "lng": -73.8068
  },
  {
    "name": "Gustavo Artunduaga Paredes",
    "city": "Florencia",
    "country": "Colombia",
    "code1": "FLA",
    "code2": "SKFL",
    "lat": 1.589189,
    "lng": -75.564372
  },
  {
    "name": "Santiago Vila",
    "city": "Girardot",
    "country": "Colombia",
    "code1": "",
    "code2": "SKGI",
    "lat": 4.276242,
    "lng": -74.796692
  },
  {
    "name": "McCarthy Airport",
    "city": "McCarthy",
    "country": "United States",
    "code1": "MXY",
    "code2": "\\N",
    "lat": 61.4370608,
    "lng": -142.90307372
  },
  {
    "name": "Juan Casiano",
    "city": "Guapi",
    "country": "Colombia",
    "code1": "GPI",
    "code2": "SKGP",
    "lat": 2.570133,
    "lng": -77.8986
  },
  {
    "name": "Guaymaral",
    "city": "Guaymaral",
    "country": "Colombia",
    "code1": "",
    "code2": "SKGY",
    "lat": 4.812333,
    "lng": -74.064919
  },
  {
    "name": "Perales",
    "city": "Ibague",
    "country": "Colombia",
    "code1": "IBE",
    "code2": "SKIB",
    "lat": 4.421608,
    "lng": -75.1333
  },
  {
    "name": "San Luis",
    "city": "Ipiales",
    "country": "Colombia",
    "code1": "IPI",
    "code2": "SKIP",
    "lat": 0.861925,
    "lng": -77.671764
  },
  {
    "name": "Antonio Roldan Betancourt",
    "city": "Carepa",
    "country": "Colombia",
    "code1": "",
    "code2": "SKLC",
    "lat": 7.811956,
    "lng": -76.716428
  },
  {
    "name": "La Mina",
    "city": "La Mina",
    "country": "Colombia",
    "code1": "",
    "code2": "SKLM",
    "lat": 11.232528,
    "lng": -72.490139
  },
  {
    "name": "Alfredo Vasquez Cobo",
    "city": "Leticia",
    "country": "Colombia",
    "code1": "LET",
    "code2": "SKLT",
    "lat": -4.193549,
    "lng": -69.943163
  },
  {
    "name": "Olaya Herrera",
    "city": "Medellin",
    "country": "Colombia",
    "code1": "EOH",
    "code2": "SKMD",
    "lat": 6.219958,
    "lng": -75.590519
  },
  {
    "name": "Baracoa",
    "city": "Magangue",
    "country": "Colombia",
    "code1": "MGN",
    "code2": "SKMG",
    "lat": 9.284739,
    "lng": -74.846092
  },
  {
    "name": "Los Garzones",
    "city": "Monteria",
    "country": "Colombia",
    "code1": "MTR",
    "code2": "SKMR",
    "lat": 8.823744,
    "lng": -75.825831
  },
  {
    "name": "Fabio Alberto Leon Bentley",
    "city": "Mitu",
    "country": "Colombia",
    "code1": "MVP",
    "code2": "SKMU",
    "lat": 1.253664,
    "lng": -70.233878
  },
  {
    "name": "La Nubia",
    "city": "Manizales",
    "country": "Colombia",
    "code1": "MZL",
    "code2": "SKMZ",
    "lat": 5.029597,
    "lng": -75.464708
  },
  {
    "name": "Benito Salas",
    "city": "Neiva",
    "country": "Colombia",
    "code1": "NVA",
    "code2": "SKNV",
    "lat": 2.95015,
    "lng": -75.294
  },
  {
    "name": "Aguas Claras",
    "city": "Ocana",
    "country": "Colombia",
    "code1": "OCV",
    "code2": "SKOC",
    "lat": 8.315061,
    "lng": -73.358331
  },
  {
    "name": "Otu",
    "city": "Otu",
    "country": "Colombia",
    "code1": "OTU",
    "code2": "SKOT",
    "lat": 7.010369,
    "lng": -74.715497
  },
  {
    "name": "Puerto Bolivar",
    "city": "Puerto Bolivar",
    "country": "Colombia",
    "code1": "",
    "code2": "SKPB",
    "lat": 12.221483,
    "lng": -71.984817
  },
  {
    "name": "Puerto Carreno",
    "city": "Puerto Carreno",
    "country": "Colombia",
    "code1": "PCR",
    "code2": "SKPC",
    "lat": 6.184717,
    "lng": -67.493164
  },
  {
    "name": "Matecana",
    "city": "Pereira",
    "country": "Colombia",
    "code1": "PEI",
    "code2": "SKPE",
    "lat": 4.812675,
    "lng": -75.739519
  },
  {
    "name": "Pitalito",
    "city": "Pitalito",
    "country": "Colombia",
    "code1": "",
    "code2": "SKPI",
    "lat": 1.857769,
    "lng": -76.085719
  },
  {
    "name": "Guillermo Leon Valencia",
    "city": "Popayan",
    "country": "Colombia",
    "code1": "PPN",
    "code2": "SKPP",
    "lat": 2.4544,
    "lng": -76.609319
  },
  {
    "name": "Antonio Narino",
    "city": "Pasto",
    "country": "Colombia",
    "code1": "PSO",
    "code2": "SKPS",
    "lat": 1.396247,
    "lng": -77.291478
  },
  {
    "name": "El Embrujo",
    "city": "Providencia",
    "country": "Colombia",
    "code1": "PVA",
    "code2": "SKPV",
    "lat": 13.356944,
    "lng": -81.35833
  },
  {
    "name": "Mariquita",
    "city": "Mariquita",
    "country": "Colombia",
    "code1": "",
    "code2": "SKQU",
    "lat": 5.212556,
    "lng": -74.883647
  },
  {
    "name": "Jose Maria Cordova",
    "city": "Rio Negro",
    "country": "Colombia",
    "code1": "MDE",
    "code2": "SKRG",
    "lat": 6.164536,
    "lng": -75.423119
  },
  {
    "name": "Almirante Padilla",
    "city": "Rio Hacha",
    "country": "Colombia",
    "code1": "RCH",
    "code2": "SKRH",
    "lat": 11.526222,
    "lng": -72.925958
  },
  {
    "name": "Jorge E Gonzalez Torres",
    "city": "San Jose Del Guaviare",
    "country": "Colombia",
    "code1": "SJE",
    "code2": "SKSJ",
    "lat": 2.579694,
    "lng": -72.639358
  },
  {
    "name": "Simon Bolivar",
    "city": "Santa Marta",
    "country": "Colombia",
    "code1": "SMR",
    "code2": "SKSM",
    "lat": 11.11965,
    "lng": -74.230647
  },
  {
    "name": "Gustavo Rojas Pinilla",
    "city": "San Andres Island",
    "country": "Colombia",
    "code1": "ADZ",
    "code2": "SKSP",
    "lat": 12.583594,
    "lng": -81.711192
  },
  {
    "name": "Eduardo Falla Solano",
    "city": "San Vincente De Caguan",
    "country": "Colombia",
    "code1": "SVI",
    "code2": "SKSV",
    "lat": 2.152175,
    "lng": -74.76635
  },
  {
    "name": "Tame",
    "city": "Tame",
    "country": "Colombia",
    "code1": "TME",
    "code2": "SKTM",
    "lat": 6.451081,
    "lng": -71.760261
  },
  {
    "name": "Santiago Perez",
    "city": "Arauca",
    "country": "Colombia",
    "code1": "AUC",
    "code2": "SKUC",
    "lat": 7.068881,
    "lng": -70.736925
  },
  {
    "name": "El Carano",
    "city": "Quibdo",
    "country": "Colombia",
    "code1": "UIB",
    "code2": "SKUI",
    "lat": 5.690758,
    "lng": -76.641181
  },
  {
    "name": "Farfan",
    "city": "Tulua",
    "country": "Colombia",
    "code1": "ULQ",
    "code2": "SKUL",
    "lat": 4.088358,
    "lng": -76.235133
  },
  {
    "name": "Alfonso Lopez Pumarejo",
    "city": "Valledupar",
    "country": "Colombia",
    "code1": "VUP",
    "code2": "SKVP",
    "lat": 10.435042,
    "lng": -73.249506
  },
  {
    "name": "Vanguardia",
    "city": "Villavicencio",
    "country": "Colombia",
    "code1": "VVC",
    "code2": "SKVV",
    "lat": 4.167875,
    "lng": -73.613761
  },
  {
    "name": "Bermejo",
    "city": "Bermejo",
    "country": "Bolivia",
    "code1": "BJO",
    "code2": "SLBJ",
    "lat": -22.773336,
    "lng": -64.312881
  },
  {
    "name": "Jorge Wilsterman",
    "city": "Cochabamba",
    "country": "Bolivia",
    "code1": "CBB",
    "code2": "SLCB",
    "lat": -17.421058,
    "lng": -66.177114
  },
  {
    "name": "Chimore",
    "city": "Chapacura",
    "country": "Bolivia",
    "code1": "",
    "code2": "SLCH",
    "lat": -16.990019,
    "lng": -65.141533
  },
  {
    "name": "Heroes Del Acre",
    "city": "Cobija",
    "country": "Bolivia",
    "code1": "CIJ",
    "code2": "SLCO",
    "lat": -11.040436,
    "lng": -68.782972
  },
  {
    "name": "El Alto Intl",
    "city": "La Paz",
    "country": "Bolivia",
    "code1": "LPB",
    "code2": "SLLP",
    "lat": -16.513339,
    "lng": -68.192256
  },
  {
    "name": "Juan Mendoza",
    "city": "Oruro",
    "country": "Bolivia",
    "code1": "",
    "code2": "SLOR",
    "lat": -17.962589,
    "lng": -67.076236
  },
  {
    "name": "Capitan Nicolas Rojas",
    "city": "Potosi",
    "country": "Bolivia",
    "code1": "POI",
    "code2": "SLPO",
    "lat": -19.543069,
    "lng": -65.723706
  },
  {
    "name": "Tte De Av Salvador Ogaya G",
    "city": "Puerto Suarez",
    "country": "Bolivia",
    "code1": "PSZ",
    "code2": "SLPS",
    "lat": -18.975281,
    "lng": -57.820586
  },
  {
    "name": "Santa Ana Del Yacuma",
    "city": "Santa Ana",
    "country": "Bolivia",
    "code1": "",
    "code2": "SLSA",
    "lat": -13.762208,
    "lng": -65.435158
  },
  {
    "name": "Juana Azurduy De Padilla",
    "city": "Sucre",
    "country": "Bolivia",
    "code1": "SRE",
    "code2": "SLSU",
    "lat": -19.007083,
    "lng": -65.288747
  },
  {
    "name": "Capitan Oriel Lea Plaza",
    "city": "Tarija",
    "country": "Bolivia",
    "code1": "TJA",
    "code2": "SLTJ",
    "lat": -21.555736,
    "lng": -64.701325
  },
  {
    "name": "Tte Av Jorge Henrich Arauz",
    "city": "Trinidad",
    "country": "Bolivia",
    "code1": "TDD",
    "code2": "SLTR",
    "lat": -14.818739,
    "lng": -64.918019
  },
  {
    "name": "Tcnl Rafael Pabon",
    "city": "Villa Montes",
    "country": "Bolivia",
    "code1": "",
    "code2": "SLVM",
    "lat": -21.255231,
    "lng": -63.405611
  },
  {
    "name": "Viru Viru Intl",
    "city": "Santa Cruz",
    "country": "Bolivia",
    "code1": "VVI",
    "code2": "SLVR",
    "lat": -17.644756,
    "lng": -63.135364
  },
  {
    "name": "Yacuiba",
    "city": "Yacuiba",
    "country": "Bolivia",
    "code1": "BYC",
    "code2": "SLYA",
    "lat": -21.960925,
    "lng": -63.651669
  },
  {
    "name": "Johan A Pengel Intl",
    "city": "Zandery",
    "country": "Suriname",
    "code1": "PBM",
    "code2": "SMJP",
    "lat": 5.452831,
    "lng": -55.187783
  },
  {
    "name": "Rochambeau",
    "city": "Cayenne",
    "country": "French Guiana",
    "code1": "CAY",
    "code2": "SOCA",
    "lat": 4.819808,
    "lng": -52.360447
  },
  {
    "name": "St Georges De L Oyapock",
    "city": "St.-georges Oyapock",
    "country": "French Guiana",
    "code1": "",
    "code2": "SOOG",
    "lat": 3.8976,
    "lng": -51.804083
  },
  {
    "name": "Huancabamba",
    "city": "Huancabamba",
    "country": "Peru",
    "code1": "",
    "code2": "SPAB",
    "lat": -5.256767,
    "lng": -79.442856
  },
  {
    "name": "Alferez Vladimir Sara Bauer",
    "city": "Andoas",
    "country": "Peru",
    "code1": "",
    "code2": "SPAS",
    "lat": -2.796128,
    "lng": -76.466617
  },
  {
    "name": "Atalaya",
    "city": "Atalaya",
    "country": "Peru",
    "code1": "",
    "code2": "SPAY",
    "lat": -10.729117,
    "lng": -73.766503
  },
  {
    "name": "Seward Airport",
    "city": "Seward",
    "country": "United States",
    "code1": "SWD",
    "code2": "\\N",
    "lat": 60.1269383,
    "lng": -149.4188122
  },
  {
    "name": "Iberia",
    "city": "Iberia",
    "country": "Peru",
    "code1": "",
    "code2": "SPBR",
    "lat": -11.411578,
    "lng": -69.488711
  },
  {
    "name": "Cap Fap David Abenzur Rengifo Intl",
    "city": "Pucallpa",
    "country": "Peru",
    "code1": "PCL",
    "code2": "SPCL",
    "lat": -8.377939,
    "lng": -74.574297
  },
  {
    "name": "Teniente Jaime A De Montreuil Morales",
    "city": "Chimbote",
    "country": "Peru",
    "code1": "CHM",
    "code2": "SPEO",
    "lat": -9.149614,
    "lng": -78.52385
  },
  {
    "name": "Puerto Esperanza",
    "city": "Puerto Esperanza",
    "country": "Peru",
    "code1": "",
    "code2": "SPEP",
    "lat": -9.768131,
    "lng": -70.706456
  },
  {
    "name": "Cesar Torke Podesta",
    "city": "Moquegua",
    "country": "Peru",
    "code1": "",
    "code2": "SPEQ",
    "lat": -17.178961,
    "lng": -70.930803
  },
  {
    "name": "Capt Jose A Quinones Gonzales Intl",
    "city": "Chiclayo",
    "country": "Peru",
    "code1": "CIX",
    "code2": "SPHI",
    "lat": -6.787475,
    "lng": -79.828097
  },
  {
    "name": "Coronel Fap Alfredo Mendivil Duarte",
    "city": "Ayacucho",
    "country": "Peru",
    "code1": "AYP",
    "code2": "SPHO",
    "lat": -13.154819,
    "lng": -74.204417
  },
  {
    "name": "Andahuaylas",
    "city": "Andahuaylas",
    "country": "Peru",
    "code1": "ANS",
    "code2": "SPHY",
    "lat": -13.706408,
    "lng": -73.350378
  },
  {
    "name": "Comandante Fap German Arias Graziani",
    "city": "Anta",
    "country": "Peru",
    "code1": "ATA",
    "code2": "SPHZ",
    "lat": -9.347444,
    "lng": -77.598392
  },
  {
    "name": "Jorge Chavez Intl",
    "city": "Lima",
    "country": "Peru",
    "code1": "LIM",
    "code2": "SPIM",
    "lat": -12.021889,
    "lng": -77.114319
  },
  {
    "name": "Juanjui",
    "city": "Juanjui",
    "country": "Peru",
    "code1": "JJI",
    "code2": "SPJI",
    "lat": -7.1691,
    "lng": -76.728561
  },
  {
    "name": "Francisco Carle",
    "city": "Jauja",
    "country": "Peru",
    "code1": "",
    "code2": "SPJJ",
    "lat": -11.783144,
    "lng": -75.473394
  },
  {
    "name": "Juliaca",
    "city": "Juliaca",
    "country": "Peru",
    "code1": "JUL",
    "code2": "SPJL",
    "lat": -15.467103,
    "lng": -70.158169
  },
  {
    "name": "Michigan City Municipal Airport",
    "city": "Michigan City",
    "country": "United States",
    "code1": "MGC",
    "code2": "KMGC",
    "lat": 41.7033,
    "lng": -86.8211
  },
  {
    "name": "Ilo",
    "city": "Ilo",
    "country": "Peru",
    "code1": "",
    "code2": "SPLO",
    "lat": -17.695036,
    "lng": -71.343964
  },
  {
    "name": "Las Palmas",
    "city": "Las Palmas",
    "country": "Peru",
    "code1": "",
    "code2": "SPLP",
    "lat": -12.160708,
    "lng": -76.998942
  },
  {
    "name": "Pedro Canga",
    "city": "Tumbes",
    "country": "Peru",
    "code1": "TBP",
    "code2": "SPME",
    "lat": -3.552528,
    "lng": -80.381356
  },
  {
    "name": "Moises Benzaquen Rengifo",
    "city": "Yurimaguas",
    "country": "Peru",
    "code1": "YMS",
    "code2": "SPMS",
    "lat": -5.893772,
    "lng": -76.118211
  },
  {
    "name": "Collique",
    "city": "Collique",
    "country": "Peru",
    "code1": "",
    "code2": "SPOL",
    "lat": -11.9287,
    "lng": -77.061139
  },
  {
    "name": "Chachapoyas",
    "city": "Chachapoyas",
    "country": "Peru",
    "code1": "CHH",
    "code2": "SPPY",
    "lat": -6.201806,
    "lng": -77.856064
  },
  {
    "name": "Coronel Francisco Secada Vignetta Intl",
    "city": "Iquitos",
    "country": "Peru",
    "code1": "IQT",
    "code2": "SPQT",
    "lat": -3.784739,
    "lng": -73.308806
  },
  {
    "name": "Rodriguez Ballon",
    "city": "Arequipa",
    "country": "Peru",
    "code1": "AQP",
    "code2": "SPQU",
    "lat": -16.341072,
    "lng": -71.583083
  },
  {
    "name": "San Ramon",
    "city": "San Ramon",
    "country": "Peru",
    "code1": "",
    "code2": "SPRM",
    "lat": -11.128639,
    "lng": -75.3505
  },
  {
    "name": "Capitan Carlos Martinez De Pinillos",
    "city": "Trujillo",
    "country": "Peru",
    "code1": "TRU",
    "code2": "SPRU",
    "lat": -8.081411,
    "lng": -79.108761
  },
  {
    "name": "Pisco Intl",
    "city": "Pisco",
    "country": "Peru",
    "code1": "PIO",
    "code2": "SPSO",
    "lat": -13.744864,
    "lng": -76.220284
  },
  {
    "name": "Cadete Guillermo Del Castillo Paredes",
    "city": "Tarapoto",
    "country": "Peru",
    "code1": "TPP",
    "code2": "SPST",
    "lat": -6.508742,
    "lng": -76.373247
  },
  {
    "name": "Coronel Carlos Ciriani Santa Rosa Intl",
    "city": "Tacna",
    "country": "Peru",
    "code1": "TCQ",
    "code2": "SPTN",
    "lat": -18.053333,
    "lng": -70.275833
  },
  {
    "name": "Padre Aldamiz",
    "city": "Puerto Maldonado",
    "country": "Peru",
    "code1": "PEM",
    "code2": "SPTU",
    "lat": -12.613611,
    "lng": -69.228611
  },
  {
    "name": "Capitan Fap Guillermo Concha Iberico",
    "city": "Piura",
    "country": "Peru",
    "code1": "PIU",
    "code2": "SPUR",
    "lat": -5.20575,
    "lng": -80.616444
  },
  {
    "name": "Capitan Montes",
    "city": "Talara",
    "country": "Peru",
    "code1": "TYL",
    "code2": "SPYL",
    "lat": -4.576639,
    "lng": -81.254139
  },
  {
    "name": "Niijima Airport",
    "city": "Niijima",
    "country": "Japan",
    "code1": "",
    "code2": "RJAN",
    "lat": 34.366944,
    "lng": 139.268611
  },
  {
    "name": "Teniente Alejandro Velasco Astete Intl",
    "city": "Cuzco",
    "country": "Peru",
    "code1": "CUZ",
    "code2": "SPZO",
    "lat": -13.535722,
    "lng": -71.938781
  },
  {
    "name": "Angel S Adami",
    "city": "Montevideo",
    "country": "Uruguay",
    "code1": "",
    "code2": "SUAA",
    "lat": -34.789208,
    "lng": -56.264703
  },
  {
    "name": "Santa Bernardina Intl",
    "city": "Durazno",
    "country": "Uruguay",
    "code1": "",
    "code2": "SUDU",
    "lat": -33.358867,
    "lng": -56.499172
  },
  {
    "name": "East Glacier Park Amtrak Station",
    "city": "East Glacier",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 48.443965,
    "lng": -113.218556
  },
  {
    "name": "Carrasco Intl",
    "city": "Montevideo",
    "country": "Uruguay",
    "code1": "MVD",
    "code2": "SUMU",
    "lat": -34.838417,
    "lng": -56.030806
  },
  {
    "name": "Nueva Hesperides Intl",
    "city": "Salto",
    "country": "Uruguay",
    "code1": "STY",
    "code2": "SUSO",
    "lat": -31.438481,
    "lng": -57.985294
  },
  {
    "name": "Oswaldo Guevara Mujica",
    "city": "Acarigua",
    "country": "Venezuela",
    "code1": "AGV",
    "code2": "SVAC",
    "lat": 9.553422,
    "lng": -69.237536
  },
  {
    "name": "Anaco",
    "city": "Anaco",
    "country": "Venezuela",
    "code1": "AAO",
    "code2": "SVAN",
    "lat": 9.430225,
    "lng": -64.470725
  },
  {
    "name": "San Fernando De Atabapo",
    "city": "San Fernando Deatabapo",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVAT",
    "lat": 4.051819,
    "lng": -67.701072
  },
  {
    "name": "General Jose Antonio Anzoategui Intl",
    "city": "Barcelona",
    "country": "Venezuela",
    "code1": "BLA",
    "code2": "SVBC",
    "lat": 10.107139,
    "lng": -64.689161
  },
  {
    "name": "Barinas",
    "city": "Barinas",
    "country": "Venezuela",
    "code1": "BNS",
    "code2": "SVBI",
    "lat": 8.619575,
    "lng": -70.220825
  },
  {
    "name": "El Libertador Ab",
    "city": "Maracaibo",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVBL",
    "lat": 10.183375,
    "lng": -67.557319
  },
  {
    "name": "Barquisimeto Intl",
    "city": "Barquisimeto",
    "country": "Venezuela",
    "code1": "BRM",
    "code2": "SVBM",
    "lat": 10.042747,
    "lng": -69.358619
  },
  {
    "name": "Ciudad Bolivar",
    "city": "Ciudad Bolivar",
    "country": "Venezuela",
    "code1": "CBL",
    "code2": "SVCB",
    "lat": 8.121898,
    "lng": -63.537353
  },
  {
    "name": "Caicara Del Orinoco",
    "city": "Caicara De Orinoco",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVCD",
    "lat": 7.626078,
    "lng": -66.164917
  },
  {
    "name": "San Carlos",
    "city": "San Carlos",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVCJ",
    "lat": 9.647722,
    "lng": -68.574656
  },
  {
    "name": "Calabozo",
    "city": "Calabozo",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVCL",
    "lat": 8.924656,
    "lng": -67.417094
  },
  {
    "name": "Canaima",
    "city": "Canaima",
    "country": "Venezuela",
    "code1": "CAJ",
    "code2": "SVCN",
    "lat": 6.231989,
    "lng": -62.854433
  },
  {
    "name": "Carora",
    "city": "Carora",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVCO",
    "lat": 10.175603,
    "lng": -70.065214
  },
  {
    "name": "General Jose Francisco Bermudez",
    "city": "Carupano",
    "country": "Venezuela",
    "code1": "CUP",
    "code2": "SVCP",
    "lat": 10.660014,
    "lng": -63.261681
  },
  {
    "name": "Jose Leonardo Chirinos",
    "city": "Coro",
    "country": "Venezuela",
    "code1": "CZE",
    "code2": "SVCR",
    "lat": 11.414867,
    "lng": -69.681656
  },
  {
    "name": "Oscar Machado Zuloaga",
    "city": "Caracas",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVCS",
    "lat": 10.286589,
    "lng": -66.816219
  },
  {
    "name": "Antonio Jose De Sucre",
    "city": "Cumana",
    "country": "Venezuela",
    "code1": "CUM",
    "code2": "SVCU",
    "lat": 10.450333,
    "lng": -64.130472
  },
  {
    "name": "Capitan Manuel Rios Guarico Airbase",
    "city": "Carrizal",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVCZ",
    "lat": 9.372167,
    "lng": -66.922989
  },
  {
    "name": "El Dorado",
    "city": "El Dorado",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVED",
    "lat": 6.715438,
    "lng": -61.639219
  },
  {
    "name": "Elorza",
    "city": "Elorza",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVEZ",
    "lat": 7.059722,
    "lng": -69.496694
  },
  {
    "name": "Guasdualito",
    "city": "Guasdualito",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVGD",
    "lat": 7.211081,
    "lng": -70.75645
  },
  {
    "name": "Guiria",
    "city": "Guiria",
    "country": "Venezuela",
    "code1": "GUI",
    "code2": "SVGI",
    "lat": 10.574078,
    "lng": -62.312667
  },
  {
    "name": "Guanare",
    "city": "Guanare",
    "country": "Venezuela",
    "code1": "GUQ",
    "code2": "SVGU",
    "lat": 9.026944,
    "lng": -69.75515
  },
  {
    "name": "Higuerote",
    "city": "Higuerote",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVHG",
    "lat": 10.462453,
    "lng": -66.092758
  },
  {
    "name": "Andres Miguel Salazar Marcano",
    "city": "Isla De Coche",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVIE",
    "lat": 10.794406,
    "lng": -63.981589
  },
  {
    "name": "Josefa Camejo",
    "city": "Paraguana",
    "country": "Venezuela",
    "code1": "LSP",
    "code2": "SVJC",
    "lat": 11.780775,
    "lng": -70.151497
  },
  {
    "name": "San Juan De Los Morros",
    "city": "San Juan De Los Morros",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVJM",
    "lat": 9.906953,
    "lng": -67.379639
  },
  {
    "name": "La Fria",
    "city": "La Fria",
    "country": "Venezuela",
    "code1": "LFR",
    "code2": "SVLF",
    "lat": 8.239167,
    "lng": -72.271028
  },
  {
    "name": "La Orchila",
    "city": "La Orchila",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVLO",
    "lat": 11.808822,
    "lng": -66.179214
  },
  {
    "name": "La Chinita Intl",
    "city": "Maracaibo",
    "country": "Venezuela",
    "code1": "MAR",
    "code2": "SVMC",
    "lat": 10.558208,
    "lng": -71.727856
  },
  {
    "name": "Alberto Carnevalli",
    "city": "Merida",
    "country": "Venezuela",
    "code1": "MRD",
    "code2": "SVMD",
    "lat": 8.582294,
    "lng": -71.161186
  },
  {
    "name": "Del Caribe Intl Gen Santiago Marino",
    "city": "Porlamar",
    "country": "Venezuela",
    "code1": "PMV",
    "code2": "SVMG",
    "lat": 10.912926,
    "lng": -63.967581
  },
  {
    "name": "Simon Bolivar Intl",
    "city": "Caracas",
    "country": "Venezuela",
    "code1": "CCS",
    "code2": "SVMI",
    "lat": 10.603117,
    "lng": -66.990583
  },
  {
    "name": "Maturin",
    "city": "Maturin",
    "country": "Venezuela",
    "code1": "MUN",
    "code2": "SVMT",
    "lat": 9.749067,
    "lng": -63.1534
  },
  {
    "name": "Casique Aramare",
    "city": "Puerto Ayacucho",
    "country": "Venezuela",
    "code1": "PYH",
    "code2": "SVPA",
    "lat": 5.619992,
    "lng": -67.606103
  },
  {
    "name": "General Bartolome Salom Intl",
    "city": "Puerto Cabello",
    "country": "Venezuela",
    "code1": "PBL",
    "code2": "SVPC",
    "lat": 10.4805,
    "lng": -68.073025
  },
  {
    "name": "Paramillo",
    "city": "San Cristobal",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVPM",
    "lat": 7.801317,
    "lng": -72.202847
  },
  {
    "name": "General Manuel Carlos Piar",
    "city": "Guayana",
    "country": "Venezuela",
    "code1": "PZO",
    "code2": "SVPR",
    "lat": 8.288528,
    "lng": -62.760361
  },
  {
    "name": "Palmarito",
    "city": "Palmarito",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVPT",
    "lat": 7.575706,
    "lng": -70.174328
  },
  {
    "name": "San Antonio Del Tachira",
    "city": "San Antonio",
    "country": "Venezuela",
    "code1": "SVZ",
    "code2": "SVSA",
    "lat": 7.840831,
    "lng": -72.439742
  },
  {
    "name": "Santa Barbara De Barinas",
    "city": "Santa Barbara",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVSB",
    "lat": 7.803514,
    "lng": -71.165717
  },
  {
    "name": "Santa Elena De Uairen",
    "city": "Santa Ana De Uairen",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVSE",
    "lat": 4.554722,
    "lng": -61.144922
  },
  {
    "name": "Mayor Buenaventura Vivas",
    "city": "Santo Domingo",
    "country": "Venezuela",
    "code1": "STD",
    "code2": "SVSO",
    "lat": 7.565111,
    "lng": -72.035125
  },
  {
    "name": "Sub Teniente Nestor Arias",
    "city": "San Felipe",
    "country": "Venezuela",
    "code1": "SFH",
    "code2": "SVSP",
    "lat": 10.278728,
    "lng": -68.755211
  },
  {
    "name": "San Fernando De Apure",
    "city": "San Fernando De Apure",
    "country": "Venezuela",
    "code1": "SFD",
    "code2": "SVSR",
    "lat": 7.883317,
    "lng": -67.444025
  },
  {
    "name": "San Tome",
    "city": "San Tome",
    "country": "Venezuela",
    "code1": "SOM",
    "code2": "SVST",
    "lat": 8.945147,
    "lng": -64.151083
  },
  {
    "name": "Santa Barbara Del Zulia",
    "city": "Santa Barbara",
    "country": "Venezuela",
    "code1": "STB",
    "code2": "SVSZ",
    "lat": 8.974425,
    "lng": -71.943014
  },
  {
    "name": "Tucupita",
    "city": "Tucupita",
    "country": "Venezuela",
    "code1": "TUV",
    "code2": "SVTC",
    "lat": 9.088994,
    "lng": -62.094175
  },
  {
    "name": "Tumeremo",
    "city": "Tumeremo",
    "country": "Venezuela",
    "code1": "",
    "code2": "SVTM",
    "lat": 7.249381,
    "lng": -61.528933
  },
  {
    "name": "Arturo Michelena Intl",
    "city": "Valencia",
    "country": "Venezuela",
    "code1": "VLN",
    "code2": "SVVA",
    "lat": 10.149733,
    "lng": -67.9284
  },
  {
    "name": "Flugplatz Hoexter Holzminden",
    "city": "Hoexter Holzminden",
    "country": "Germany",
    "code1": "",
    "code2": "EDVI",
    "lat": 51.4838,
    "lng": 9.2259
  },
  {
    "name": "Dr Antonio Nicolas Briceno",
    "city": "Valera",
    "country": "Venezuela",
    "code1": "VLV",
    "code2": "SVVL",
    "lat": 9.340797,
    "lng": -70.584089
  },
  {
    "name": "Valle De La Pascua",
    "city": "Valle De La Pascua",
    "country": "Venezuela",
    "code1": "VDP",
    "code2": "SVVP",
    "lat": 9.222028,
    "lng": -65.993583
  },
  {
    "name": "Linden",
    "city": "Linden",
    "country": "Guyana",
    "code1": "",
    "code2": "SYLD",
    "lat": 5.965922,
    "lng": -58.270336
  },
  {
    "name": "Lethem",
    "city": "Lethem",
    "country": "Guyana",
    "code1": "LTM",
    "code2": "SYLT",
    "lat": 3.372761,
    "lng": -59.789439
  },
  {
    "name": "V C Bird Intl",
    "city": "Antigua",
    "country": "Antigua and Barbuda",
    "code1": "ANU",
    "code2": "TAPA",
    "lat": 17.136749,
    "lng": -61.792667
  },
  {
    "name": "Grantley Adams Intl",
    "city": "Bridgetown",
    "country": "Barbados",
    "code1": "BGI",
    "code2": "TBPB",
    "lat": 13.074603,
    "lng": -59.492456
  },
  {
    "name": "Canefield",
    "city": "Canefield",
    "country": "Dominica",
    "code1": "DCF",
    "code2": "TDCF",
    "lat": 15.336719,
    "lng": -61.392211
  },
  {
    "name": "Melville Hall",
    "city": "Dominica",
    "country": "Dominica",
    "code1": "DOM",
    "code2": "TDPD",
    "lat": 15.547028,
    "lng": -61.3
  },
  {
    "name": "Le Lamentin",
    "city": "Fort-de-france",
    "country": "Martinique",
    "code1": "FDF",
    "code2": "TFFF",
    "lat": 14.591033,
    "lng": -61.003175
  },
  {
    "name": "Grand Case",
    "city": "St. Martin",
    "country": "Guadeloupe",
    "code1": "SFG",
    "code2": "TFFG",
    "lat": 18.099914,
    "lng": -63.047197
  },
  {
    "name": "Le Raizet",
    "city": "Pointe-a-pitre",
    "country": "Guadeloupe",
    "code1": "PTP",
    "code2": "TFFR",
    "lat": 16.265306,
    "lng": -61.531806
  },
  {
    "name": "Point Salines Intl",
    "city": "Point Salines",
    "country": "Grenada",
    "code1": "GND",
    "code2": "TGPY",
    "lat": 12.004247,
    "lng": -61.786192
  },
  {
    "name": "Cyril E King",
    "city": "St. Thomas",
    "country": "Virgin Islands",
    "code1": "STT",
    "code2": "TIST",
    "lat": 18.337306,
    "lng": -64.973361
  },
  {
    "name": "Henry E Rohlsen",
    "city": "St. Croix Island",
    "country": "Virgin Islands",
    "code1": "STX",
    "code2": "TISX",
    "lat": 17.701889,
    "lng": -64.798556
  },
  {
    "name": "Rafael Hernandez",
    "city": "Aguadilla",
    "country": "Puerto Rico",
    "code1": "BQN",
    "code2": "TJBQ",
    "lat": 18.494861,
    "lng": -67.129444
  },
  {
    "name": "Diego Jimenez Torres",
    "city": "Fajardo",
    "country": "Puerto Rico",
    "code1": "FAJ",
    "code2": "TJFA",
    "lat": 18.308889,
    "lng": -65.661861
  },
  {
    "name": "Fernando Luis Ribas Dominicci",
    "city": "San Juan",
    "country": "Puerto Rico",
    "code1": "SIG",
    "code2": "TJIG",
    "lat": 18.456828,
    "lng": -66.098139
  },
  {
    "name": "Eugenio Maria De Hostos",
    "city": "Mayaguez",
    "country": "Puerto Rico",
    "code1": "MAZ",
    "code2": "TJMZ",
    "lat": 18.255694,
    "lng": -67.148472
  },
  {
    "name": "Mercedita",
    "city": "Ponce",
    "country": "Puerto Rico",
    "code1": "PSE",
    "code2": "TJPS",
    "lat": 18.008306,
    "lng": -66.563028
  },
  {
    "name": "Luis Munoz Marin Intl",
    "city": "San Juan",
    "country": "Puerto Rico",
    "code1": "SJU",
    "code2": "TJSJ",
    "lat": 18.439417,
    "lng": -66.001833
  },
  {
    "name": "Robert L Bradshaw",
    "city": "Basse Terre",
    "country": "Saint Kitts and Nevis",
    "code1": "SKB",
    "code2": "TKPK",
    "lat": 17.311194,
    "lng": -62.718667
  },
  {
    "name": "Dinslaken Schwarze-Heide",
    "city": "Dinslaken",
    "country": "Germany",
    "code1": "",
    "code2": "EDLD",
    "lat": 51.3659,
    "lng": 6.5155
  },
  {
    "name": "George F L Charles",
    "city": "Castries",
    "country": "Saint Lucia",
    "code1": "SLU",
    "code2": "TLPC",
    "lat": 14.020228,
    "lng": -60.992936
  },
  {
    "name": "Hewanorra Intl",
    "city": "Hewandorra",
    "country": "Saint Lucia",
    "code1": "UVF",
    "code2": "TLPL",
    "lat": 13.733194,
    "lng": -60.952597
  },
  {
    "name": "Reina Beatrix Intl",
    "city": "Oranjestad",
    "country": "Aruba",
    "code1": "AUA",
    "code2": "TNCA",
    "lat": 12.501389,
    "lng": -70.015221
  },
  {
    "name": "Flamingo",
    "city": "Kralendijk",
    "country": "Netherlands Antilles",
    "code1": "BON",
    "code2": "TNCB",
    "lat": 12.131044,
    "lng": -68.268511
  },
  {
    "name": "Hato",
    "city": "Willemstad",
    "country": "Netherlands Antilles",
    "code1": "CUR",
    "code2": "TNCC",
    "lat": 12.188853,
    "lng": -68.959803
  },
  {
    "name": "F D Roosevelt",
    "city": "Oranjestad",
    "country": "Netherlands Antilles",
    "code1": "EUX",
    "code2": "TNCE",
    "lat": 17.496492,
    "lng": -62.979439
  },
  {
    "name": "Princess Juliana Intl",
    "city": "Philipsburg",
    "country": "Netherlands Antilles",
    "code1": "SXM",
    "code2": "TNCM",
    "lat": 18.040953,
    "lng": -63.1089
  },
  {
    "name": "Wallblake",
    "city": "The Valley",
    "country": "Anguilla",
    "code1": "AXA",
    "code2": "TQPF",
    "lat": 18.204834,
    "lng": -63.055084
  },
  {
    "name": "Crown Point",
    "city": "Scarborough",
    "country": "Trinidad and Tobago",
    "code1": "TAB",
    "code2": "TTCP",
    "lat": 11.149658,
    "lng": -60.832194
  },
  {
    "name": "Piarco",
    "city": "Port-of-spain",
    "country": "Trinidad and Tobago",
    "code1": "POS",
    "code2": "TTPP",
    "lat": 10.595369,
    "lng": -61.337242
  },
  {
    "name": "Terrance B Lettsome Intl",
    "city": "Tortola",
    "country": "British Virgin Islands",
    "code1": "EIS",
    "code2": "TUPJ",
    "lat": 18.444834,
    "lng": -64.542975
  },
  {
    "name": "Allakaket Airport",
    "city": "Allakaket",
    "country": "United States",
    "code1": "AET",
    "code2": "PFAL",
    "lat": 66.5519,
    "lng": -152.6222
  },
  {
    "name": "Canouan",
    "city": "Canouan Island",
    "country": "Saint Vincent and the Grenadines",
    "code1": "CIW",
    "code2": "TVSC",
    "lat": 12.699042,
    "lng": -61.342431
  },
  {
    "name": "Mustique",
    "city": "Mustique",
    "country": "Saint Vincent and the Grenadines",
    "code1": "MQS",
    "code2": "TVSM",
    "lat": 12.887947,
    "lng": -61.180161
  },
  {
    "name": "E T Joshua",
    "city": "Kingstown",
    "country": "Saint Vincent and the Grenadines",
    "code1": "SVD",
    "code2": "TVSV",
    "lat": 13.144306,
    "lng": -61.210861
  },
  {
    "name": "Almaty",
    "city": "Alma-ata",
    "country": "Kazakhstan",
    "code1": "ALA",
    "code2": "UAAA",
    "lat": 43.352072,
    "lng": 77.040508
  },
  {
    "name": "Balkhash",
    "city": "Balkhash",
    "country": "Kazakhstan",
    "code1": "",
    "code2": "UAAH",
    "lat": 46.893333,
    "lng": 75.005
  },
  {
    "name": "Astana Intl",
    "city": "Tselinograd",
    "country": "Kazakhstan",
    "code1": "TSE",
    "code2": "UACC",
    "lat": 51.022222,
    "lng": 71.466944
  },
  {
    "name": "Taraz",
    "city": "Dzhambul",
    "country": "Kazakhstan",
    "code1": "DMB",
    "code2": "UADD",
    "lat": 42.853611,
    "lng": 71.303611
  },
  {
    "name": "Manas",
    "city": "Bishkek",
    "country": "Kyrgyzstan",
    "code1": "FRU",
    "code2": "UAFM",
    "lat": 43.061306,
    "lng": 74.477556
  },
  {
    "name": "Osh",
    "city": "Osh",
    "country": "Kyrgyzstan",
    "code1": "OSS",
    "code2": "UAFO",
    "lat": 40.608989,
    "lng": 72.793269
  },
  {
    "name": "Shymkent",
    "city": "Chimkent",
    "country": "Kazakhstan",
    "code1": "CIT",
    "code2": "UAII",
    "lat": 42.364167,
    "lng": 69.478889
  },
  {
    "name": "Yakutat",
    "city": "Yakutat",
    "country": "United States",
    "code1": "YAK",
    "code2": "PAYA",
    "lat": 59.3012,
    "lng": -139.3937
  },
  {
    "name": "Uralsk",
    "city": "Uralsk",
    "country": "Kazakhstan",
    "code1": "URA",
    "code2": "UARR",
    "lat": 51.150833,
    "lng": 51.543056
  },
  {
    "name": "Pavlodar",
    "city": "Pavlodar",
    "country": "Kazakhstan",
    "code1": "PWQ",
    "code2": "UASP",
    "lat": 52.195,
    "lng": 77.073889
  },
  {
    "name": "Semipalatinsk",
    "city": "Semiplatinsk",
    "country": "Kazakhstan",
    "code1": "PLX",
    "code2": "UASS",
    "lat": 50.3513,
    "lng": 80.2344
  },
  {
    "name": "Aktau",
    "city": "Shevchenko",
    "country": "Kazakhstan",
    "code1": "",
    "code2": "UATE",
    "lat": 43.86005,
    "lng": 51.091978
  },
  {
    "name": "Aktyubinsk",
    "city": "Aktyubinsk",
    "country": "Kazakhstan",
    "code1": "AKX",
    "code2": "UATT",
    "lat": 50.245833,
    "lng": 57.206667
  },
  {
    "name": "Heydar Aliyev",
    "city": "Baku",
    "country": "Azerbaijan",
    "code1": "GYD",
    "code2": "UBBB",
    "lat": 40.4675,
    "lng": 50.046667
  },
  {
    "name": "Yakutsk",
    "city": "Yakutsk",
    "country": "Russia",
    "code1": "YKS",
    "code2": "UEEE",
    "lat": 62.09325,
    "lng": 129.770672
  },
  {
    "name": "Mirny",
    "city": "Mirnyj",
    "country": "Russia",
    "code1": "MJZ",
    "code2": "UERR",
    "lat": 62.534689,
    "lng": 114.038928
  },
  {
    "name": "Ignatyevo",
    "city": "Blagoveschensk",
    "country": "Russia",
    "code1": "BQS",
    "code2": "UHBB",
    "lat": 50.425394,
    "lng": 127.412478
  },
  {
    "name": "Novy",
    "city": "Khabarovsk",
    "country": "Russia",
    "code1": "KHV",
    "code2": "UHHH",
    "lat": 48.528044,
    "lng": 135.188361
  },
  {
    "name": "Sawyer International Airport",
    "city": "Marquette",
    "country": "United States",
    "code1": "MQT",
    "code2": "KMQT",
    "lat": 46.353611,
    "lng": -87.395278
  },
  {
    "name": "Provideniya Bay",
    "city": "Provideniya Bay",
    "country": "Russia",
    "code1": "PVS",
    "code2": "UHMD",
    "lat": 64.378139,
    "lng": -173.243306
  },
  {
    "name": "Sokol",
    "city": "Magadan",
    "country": "Russia",
    "code1": "GDX",
    "code2": "UHMM",
    "lat": 59.910989,
    "lng": 150.720439
  },
  {
    "name": "Pevek",
    "city": "Pevek",
    "country": "Russia",
    "code1": "PWE",
    "code2": "UHMP",
    "lat": 69.783283,
    "lng": 170.597006
  },
  {
    "name": "Yelizovo",
    "city": "Petropavlovsk",
    "country": "Russia",
    "code1": "PKC",
    "code2": "UHPP",
    "lat": 53.167889,
    "lng": 158.453669
  },
  {
    "name": "Khomutovo",
    "city": "Yuzhno-sakhalinsk",
    "country": "Russia",
    "code1": "UUS",
    "code2": "UHSS",
    "lat": 46.888672,
    "lng": 142.717531
  },
  {
    "name": "Knevichi",
    "city": "Vladivostok",
    "country": "Russia",
    "code1": "VVO",
    "code2": "UHWW",
    "lat": 43.398953,
    "lng": 132.148017
  },
  {
    "name": "Kadala",
    "city": "Chita",
    "country": "Russia",
    "code1": "HTA",
    "code2": "UIAA",
    "lat": 52.026317,
    "lng": 113.305556
  },
  {
    "name": "Bratsk",
    "city": "Bratsk",
    "country": "Russia",
    "code1": "BTK",
    "code2": "UIBB",
    "lat": 56.370556,
    "lng": 101.698331
  },
  {
    "name": "Irkutsk",
    "city": "Irkutsk",
    "country": "Russia",
    "code1": "IKT",
    "code2": "UIII",
    "lat": 52.268028,
    "lng": 104.388975
  },
  {
    "name": "Mukhino",
    "city": "Ulan-ude",
    "country": "Russia",
    "code1": "UUD",
    "code2": "UIUU",
    "lat": 51.807764,
    "lng": 107.437644
  },
  {
    "name": "Boryspil Intl",
    "city": "Kiev",
    "country": "Ukraine",
    "code1": "KBP",
    "code2": "UKBB",
    "lat": 50.345,
    "lng": 30.894722
  },
  {
    "name": "Donetsk Intl",
    "city": "Donetsk",
    "country": "Ukraine",
    "code1": "DOK",
    "code2": "UKCC",
    "lat": 48.073611,
    "lng": 37.739722
  },
  {
    "name": "Dnipropetrovsk Intl",
    "city": "Dnepropetrovsk",
    "country": "Ukraine",
    "code1": "DNK",
    "code2": "UKDD",
    "lat": 48.357222,
    "lng": 35.100556
  },
  {
    "name": "Simferopol Intl",
    "city": "Simferopol",
    "country": "Ukraine",
    "code1": "SIP",
    "code2": "UKFF",
    "lat": 45.052222,
    "lng": 33.975139
  },
  {
    "name": "Zhuliany Intl",
    "city": "Kiev",
    "country": "Ukraine",
    "code1": "IEV",
    "code2": "UKKK",
    "lat": 50.401694,
    "lng": 30.449697
  },
  {
    "name": "Lviv Intl",
    "city": "Lvov",
    "country": "Ukraine",
    "code1": "LWO",
    "code2": "UKLL",
    "lat": 49.8125,
    "lng": 23.956111
  },
  {
    "name": "Ford Airport",
    "city": "Iron Mountain",
    "country": "United States",
    "code1": "IMT",
    "code2": "KIMT",
    "lat": 45.8183611,
    "lng": -88.1145556
  },
  {
    "name": "Odesa Intl",
    "city": "Odessa",
    "country": "Ukraine",
    "code1": "ODS",
    "code2": "UKOO",
    "lat": 46.426767,
    "lng": 30.676464
  },
  {
    "name": "Pulkovo",
    "city": "St. Petersburg",
    "country": "Russia",
    "code1": "LED",
    "code2": "ULLI",
    "lat": 59.800292,
    "lng": 30.262503
  },
  {
    "name": "Murmansk",
    "city": "Murmansk",
    "country": "Russia",
    "code1": "MMK",
    "code2": "ULMM",
    "lat": 68.781672,
    "lng": 32.750822
  },
  {
    "name": "Gomel",
    "city": "Gomel",
    "country": "Belarus",
    "code1": "GME",
    "code2": "UMGG",
    "lat": 52.527022,
    "lng": 31.016692
  },
  {
    "name": "Vitebsk",
    "city": "Vitebsk",
    "country": "Belarus",
    "code1": "VTB",
    "code2": "UMII",
    "lat": 55.1265,
    "lng": 30.349639
  },
  {
    "name": "Khrabrovo",
    "city": "Kaliningrad",
    "country": "Russia",
    "code1": "KGD",
    "code2": "UMKK",
    "lat": 54.89005,
    "lng": 20.592633
  },
  {
    "name": "Minsk 1",
    "city": "Minsk",
    "country": "Belarus",
    "code1": "MHP",
    "code2": "UMMM",
    "lat": 53.864472,
    "lng": 27.539683
  },
  {
    "name": "Minsk 2",
    "city": "Minsk 2",
    "country": "Belarus",
    "code1": "MSQ",
    "code2": "UMMS",
    "lat": 53.882469,
    "lng": 28.030731
  },
  {
    "name": "Abakan",
    "city": "Abakan",
    "country": "Russia",
    "code1": "ABA",
    "code2": "UNAA",
    "lat": 53.74,
    "lng": 91.385
  },
  {
    "name": "Barnaul",
    "city": "Barnaul",
    "country": "Russia",
    "code1": "BAX",
    "code2": "UNBB",
    "lat": 53.363775,
    "lng": 83.538533
  },
  {
    "name": "Kemerovo",
    "city": "Kemorovo",
    "country": "Russia",
    "code1": "KEJ",
    "code2": "UNEE",
    "lat": 55.270094,
    "lng": 86.107208
  },
  {
    "name": "Omsk",
    "city": "Omsk",
    "country": "Russia",
    "code1": "OMS",
    "code2": "UNOO",
    "lat": 54.967042,
    "lng": 73.310514
  },
  {
    "name": "Pashkovskiy",
    "city": "Krasnodar",
    "country": "Russia",
    "code1": "KRR",
    "code2": "URKK",
    "lat": 45.034689,
    "lng": 39.170539
  },
  {
    "name": "Uytash",
    "city": "Makhachkala",
    "country": "Russia",
    "code1": "MCX",
    "code2": "URML",
    "lat": 42.816822,
    "lng": 47.652294
  },
  {
    "name": "Mineralnyye Vody",
    "city": "Mineralnye Vody",
    "country": "Russia",
    "code1": "MRV",
    "code2": "URMM",
    "lat": 44.225072,
    "lng": 43.081889
  },
  {
    "name": "Shpakovskoye",
    "city": "Stavropol",
    "country": "Russia",
    "code1": "STW",
    "code2": "URMT",
    "lat": 45.109165,
    "lng": 42.112778
  },
  {
    "name": "Rostov Na Donu",
    "city": "Rostov",
    "country": "Russia",
    "code1": "ROV",
    "code2": "URRR",
    "lat": 47.258208,
    "lng": 39.818089
  },
  {
    "name": "Sochi",
    "city": "Sochi",
    "country": "Russia",
    "code1": "AER",
    "code2": "URSS",
    "lat": 43.449928,
    "lng": 39.956589
  },
  {
    "name": "Astrakhan",
    "city": "Astrakhan",
    "country": "Russia",
    "code1": "ASF",
    "code2": "URWA",
    "lat": 46.283333,
    "lng": 48.006278
  },
  {
    "name": "Gumrak",
    "city": "Volgograd",
    "country": "Russia",
    "code1": "VOG",
    "code2": "URWW",
    "lat": 48.782528,
    "lng": 44.345544
  },
  {
    "name": "Balandino",
    "city": "Chelyabinsk",
    "country": "Russia",
    "code1": "CEK",
    "code2": "USCC",
    "lat": 55.305836,
    "lng": 61.503333
  },
  {
    "name": "Magnitogorsk",
    "city": "Magnetiogorsk",
    "country": "Russia",
    "code1": "MQF",
    "code2": "USCM",
    "lat": 53.393131,
    "lng": 58.755661
  },
  {
    "name": "Great Barrier Island",
    "city": "Claris",
    "country": "New Zealand",
    "code1": "GBZ",
    "code2": "NZGB",
    "lat": -36.1429,
    "lng": 175.2819
  },
  {
    "name": "Nizhnevartovsk",
    "city": "Nizhnevartovsk",
    "country": "Russia",
    "code1": "NJC",
    "code2": "USNN",
    "lat": 60.949272,
    "lng": 76.483617
  },
  {
    "name": "Bolshoye Savino",
    "city": "Perm",
    "country": "Russia",
    "code1": "PEE",
    "code2": "USPP",
    "lat": 57.914517,
    "lng": 56.021214
  },
  {
    "name": "Surgut",
    "city": "Surgut",
    "country": "Russia",
    "code1": "SGC",
    "code2": "USRR",
    "lat": 61.343694,
    "lng": 73.401842
  },
  {
    "name": "Koltsovo",
    "city": "Yekaterinburg",
    "country": "Russia",
    "code1": "SVX",
    "code2": "USSS",
    "lat": 56.743108,
    "lng": 60.802728
  },
  {
    "name": "Ashgabat",
    "city": "Ashkhabad",
    "country": "Turkmenistan",
    "code1": "ASB",
    "code2": "UTAA",
    "lat": 37.986814,
    "lng": 58.360967
  },
  {
    "name": "Turkmenbashi",
    "city": "Krasnovodsk",
    "country": "Turkmenistan",
    "code1": "KRW",
    "code2": "UTAK",
    "lat": 40.063333,
    "lng": 53.007222
  },
  {
    "name": "Turkmenabat",
    "city": "Chardzhou",
    "country": "Turkmenistan",
    "code1": "",
    "code2": "UTAV",
    "lat": 39.083333,
    "lng": 63.613333
  },
  {
    "name": "Dushanbe",
    "city": "Dushanbe",
    "country": "Tajikistan",
    "code1": "DYU",
    "code2": "UTDD",
    "lat": 38.543333,
    "lng": 68.825
  },
  {
    "name": "Bukhara",
    "city": "Bukhara",
    "country": "Uzbekistan",
    "code1": "BHK",
    "code2": "UTSB",
    "lat": 39.775,
    "lng": 64.483333
  },
  {
    "name": "Samarkand",
    "city": "Samarkand",
    "country": "Uzbekistan",
    "code1": "SKD",
    "code2": "UTSS",
    "lat": 39.700547,
    "lng": 66.983829
  },
  {
    "name": "Al Udeid AB",
    "city": "Doha",
    "country": "Qatar",
    "code1": "IUD",
    "code2": "OTBH",
    "lat": 25.1174,
    "lng": 51.3228
  },
  {
    "name": "Yuzhny",
    "city": "Tashkent",
    "country": "Uzbekistan",
    "code1": "TAS",
    "code2": "UTTT",
    "lat": 41.257861,
    "lng": 69.281186
  },
  {
    "name": "Bryansk",
    "city": "Bryansk",
    "country": "Russia",
    "code1": "BZK",
    "code2": "UUBP",
    "lat": 53.214194,
    "lng": 34.176447
  },
  {
    "name": "Sheremetyevo",
    "city": "Moscow",
    "country": "Russia",
    "code1": "SVO",
    "code2": "UUEE",
    "lat": 55.972642,
    "lng": 37.414589
  },
  {
    "name": "Migalovo",
    "city": "Tver",
    "country": "Russia",
    "code1": "KLD",
    "code2": "UUEM",
    "lat": 56.824736,
    "lng": 35.757678
  },
  {
    "name": "Chertovitskoye",
    "city": "Voronezh",
    "country": "Russia",
    "code1": "VOZ",
    "code2": "UUOO",
    "lat": 51.814211,
    "lng": 39.229589
  },
  {
    "name": "Vnukovo",
    "city": "Moscow",
    "country": "Russia",
    "code1": "VKO",
    "code2": "UUWW",
    "lat": 55.591531,
    "lng": 37.261486
  },
  {
    "name": "Syktyvkar",
    "city": "Syktyvkar",
    "country": "Russia",
    "code1": "SCW",
    "code2": "UUYY",
    "lat": 61.64705,
    "lng": 50.84505
  },
  {
    "name": "Kazan",
    "city": "Kazan",
    "country": "Russia",
    "code1": "KZN",
    "code2": "UWKD",
    "lat": 55.606186,
    "lng": 49.278728
  },
  {
    "name": "Orenburg",
    "city": "Orenburg",
    "country": "Russia",
    "code1": "REN",
    "code2": "UWOO",
    "lat": 51.795786,
    "lng": 55.456744
  },
  {
    "name": "Ufa",
    "city": "Ufa",
    "country": "Russia",
    "code1": "UFA",
    "code2": "UWUU",
    "lat": 54.557511,
    "lng": 55.874417
  },
  {
    "name": "Kurumoch",
    "city": "Samara",
    "country": "Russia",
    "code1": "KBY",
    "code2": "UWWW",
    "lat": 53.504858,
    "lng": 50.164336
  },
  {
    "name": "Ahmedabad",
    "city": "Ahmedabad",
    "country": "India",
    "code1": "AMD",
    "code2": "VAAH",
    "lat": 23.077242,
    "lng": 72.63465
  },
  {
    "name": "Akola",
    "city": "Akola",
    "country": "India",
    "code1": "AKD",
    "code2": "VAAK",
    "lat": 20.699006,
    "lng": 77.058628
  },
  {
    "name": "Aurangabad",
    "city": "Aurangabad",
    "country": "India",
    "code1": "IXU",
    "code2": "VAAU",
    "lat": 19.862728,
    "lng": 75.398114
  },
  {
    "name": "Chhatrapati Shivaji Intl",
    "city": "Mumbai",
    "country": "India",
    "code1": "BOM",
    "code2": "VABB",
    "lat": 19.088686,
    "lng": 72.867919
  },
  {
    "name": "Bilaspur",
    "city": "Bilaspur",
    "country": "India",
    "code1": "PAB",
    "code2": "VABI",
    "lat": 21.9884,
    "lng": 82.110983
  },
  {
    "name": "Bhuj",
    "city": "Bhuj",
    "country": "India",
    "code1": "BHJ",
    "code2": "VABJ",
    "lat": 23.287828,
    "lng": 69.670147
  },
  {
    "name": "Belgaum",
    "city": "Belgaum",
    "country": "India",
    "code1": "IXG",
    "code2": "VABM",
    "lat": 15.859286,
    "lng": 74.618292
  },
  {
    "name": "Vadodara",
    "city": "Baroda",
    "country": "India",
    "code1": "BDQ",
    "code2": "VABO",
    "lat": 22.336164,
    "lng": 73.226289
  },
  {
    "name": "Bhopal",
    "city": "Bhopal",
    "country": "India",
    "code1": "BHO",
    "code2": "VABP",
    "lat": 23.287467,
    "lng": 77.337375
  },
  {
    "name": "Bhavnagar",
    "city": "Bhaunagar",
    "country": "India",
    "code1": "BHU",
    "code2": "VABV",
    "lat": 21.752206,
    "lng": 72.185181
  },
  {
    "name": "Daman",
    "city": "Daman",
    "country": "India",
    "code1": "NMB",
    "code2": "VADN",
    "lat": 20.434364,
    "lng": 72.843206
  },
  {
    "name": "Deesa",
    "city": "Deesa",
    "country": "India",
    "code1": "",
    "code2": "VADS",
    "lat": 24.267936,
    "lng": 72.204433
  },
  {
    "name": "Guna",
    "city": "Guna",
    "country": "India",
    "code1": "",
    "code2": "VAGN",
    "lat": 24.654681,
    "lng": 77.347347
  },
  {
    "name": "Goa",
    "city": "Goa",
    "country": "India",
    "code1": "GOI",
    "code2": "VAGO",
    "lat": 15.380833,
    "lng": 73.831422
  },
  {
    "name": "Devi Ahilyabai Holkar",
    "city": "Indore",
    "country": "India",
    "code1": "IDR",
    "code2": "VAID",
    "lat": 22.721786,
    "lng": 75.801086
  },
  {
    "name": "Jabalpur",
    "city": "Jabalpur",
    "country": "India",
    "code1": "JLR",
    "code2": "VAJB",
    "lat": 23.177817,
    "lng": 80.052047
  },
  {
    "name": "Jamnagar",
    "city": "Jamnagar",
    "country": "India",
    "code1": "JGA",
    "code2": "VAJM",
    "lat": 22.465522,
    "lng": 70.012556
  },
  {
    "name": "Kandla",
    "city": "Kandla",
    "country": "India",
    "code1": "IXY",
    "code2": "VAKE",
    "lat": 23.112719,
    "lng": 70.100289
  },
  {
    "name": "Khajuraho",
    "city": "Khajuraho",
    "country": "India",
    "code1": "HJR",
    "code2": "VAKJ",
    "lat": 24.817197,
    "lng": 79.918597
  },
  {
    "name": "Kolhapur",
    "city": "Kolhapur",
    "country": "India",
    "code1": "KLH",
    "code2": "VAKP",
    "lat": 16.664658,
    "lng": 74.289353
  },
  {
    "name": "Keshod",
    "city": "Keshod",
    "country": "India",
    "code1": "IXK",
    "code2": "VAKS",
    "lat": 21.317069,
    "lng": 70.270403
  },
  {
    "name": "Dr Ambedkar Intl",
    "city": "Nagpur",
    "country": "India",
    "code1": "NAG",
    "code2": "VANP",
    "lat": 21.092192,
    "lng": 79.047183
  },
  {
    "name": "Nasik Road",
    "city": "Nasik Road",
    "country": "India",
    "code1": "ISK",
    "code2": "VANR",
    "lat": 19.963739,
    "lng": 73.807644
  },
  {
    "name": "Pune",
    "city": "Pune",
    "country": "India",
    "code1": "PNQ",
    "code2": "VAPO",
    "lat": 18.582111,
    "lng": 73.919697
  },
  {
    "name": "Porbandar",
    "city": "Porbandar",
    "country": "India",
    "code1": "PBD",
    "code2": "VAPR",
    "lat": 21.648675,
    "lng": 69.657219
  },
  {
    "name": "Rajkot",
    "city": "Rajkot",
    "country": "India",
    "code1": "RAJ",
    "code2": "VARK",
    "lat": 22.309183,
    "lng": 70.779525
  },
  {
    "name": "Raipur",
    "city": "Raipur",
    "country": "India",
    "code1": "RPR",
    "code2": "VARP",
    "lat": 21.180406,
    "lng": 81.738753
  },
  {
    "name": "Sholapur",
    "city": "Sholapur",
    "country": "India",
    "code1": "SSE",
    "code2": "VASL",
    "lat": 17.627958,
    "lng": 75.934842
  },
  {
    "name": "Surat",
    "city": "Surat",
    "country": "India",
    "code1": "STV",
    "code2": "VASU",
    "lat": 21.114061,
    "lng": 72.741792
  },
  {
    "name": "Udaipur",
    "city": "Udaipur",
    "country": "India",
    "code1": "UDR",
    "code2": "VAUD",
    "lat": 24.617697,
    "lng": 73.8961
  },
  {
    "name": "Bandaranaike Intl Colombo",
    "city": "Colombo",
    "country": "Sri Lanka",
    "code1": "CMB",
    "code2": "VCBI",
    "lat": 7.180756,
    "lng": 79.884117
  },
  {
    "name": "Anuradhapura",
    "city": "Anuradhapura",
    "country": "Sri Lanka",
    "code1": "",
    "code2": "VCCA",
    "lat": 8.301486,
    "lng": 80.4279
  },
  {
    "name": "Batticaloa",
    "city": "Batticaloa",
    "country": "Sri Lanka",
    "code1": "",
    "code2": "VCCB",
    "lat": 7.705756,
    "lng": 81.678783
  },
  {
    "name": "Colombo Ratmalana",
    "city": "Colombo",
    "country": "Sri Lanka",
    "code1": "RML",
    "code2": "VCCC",
    "lat": 6.821994,
    "lng": 79.886208
  },
  {
    "name": "Amparai",
    "city": "Galoya",
    "country": "Sri Lanka",
    "code1": "GOY",
    "code2": "VCCG",
    "lat": 7.337081,
    "lng": 81.625881
  },
  {
    "name": "Kankesanturai",
    "city": "Jaffna",
    "country": "Sri Lanka",
    "code1": "JAF",
    "code2": "VCCJ",
    "lat": 9.792331,
    "lng": 80.070089
  },
  {
    "name": "China Bay",
    "city": "Trinciomalee",
    "country": "Sri Lanka",
    "code1": "TRR",
    "code2": "VCCT",
    "lat": 8.538514,
    "lng": 81.181853
  },
  {
    "name": "Kirkuk AB",
    "city": "Kirkuk",
    "country": "Iraq",
    "code1": "KIK",
    "code2": "ORKK",
    "lat": 35.17,
    "lng": 44.3483
  },
  {
    "name": "Kampong Chhnang",
    "city": "Kompong Chnang",
    "country": "Cambodia",
    "code1": "",
    "code2": "VDKH",
    "lat": 12.255236,
    "lng": 104.563875
  },
  {
    "name": "Phnom Penh Intl",
    "city": "Phnom-penh",
    "country": "Cambodia",
    "code1": "PNH",
    "code2": "VDPP",
    "lat": 11.546556,
    "lng": 104.844139
  },
  {
    "name": "Siem Reap",
    "city": "Siem-reap",
    "country": "Cambodia",
    "code1": "REP",
    "code2": "VDSR",
    "lat": 13.410666,
    "lng": 103.81284
  },
  {
    "name": "Stung Treng",
    "city": "Stung Treng",
    "country": "Cambodia",
    "code1": "",
    "code2": "VDST",
    "lat": 13.531897,
    "lng": 106.014531
  },
  {
    "name": "Along",
    "city": "Along",
    "country": "India",
    "code1": "",
    "code2": "VEAN",
    "lat": 28.175317,
    "lng": 94.802036
  },
  {
    "name": "Agartala",
    "city": "Agartala",
    "country": "India",
    "code1": "IXA",
    "code2": "VEAT",
    "lat": 23.886978,
    "lng": 91.24045
  },
  {
    "name": "Aizawl",
    "city": "Aizwal",
    "country": "India",
    "code1": "AJL",
    "code2": "VEAZ",
    "lat": 23.746603,
    "lng": 92.802767
  },
  {
    "name": "Bagdogra",
    "city": "Baghdogra",
    "country": "India",
    "code1": "IXB",
    "code2": "VEBD",
    "lat": 26.681206,
    "lng": 88.328567
  },
  {
    "name": "Bokaro",
    "city": "Bokaro",
    "country": "India",
    "code1": "",
    "code2": "VEBK",
    "lat": 23.643489,
    "lng": 86.148886
  },
  {
    "name": "Bhubaneshwar",
    "city": "Bhubaneswar",
    "country": "India",
    "code1": "BBI",
    "code2": "VEBS",
    "lat": 20.244364,
    "lng": 85.817781
  },
  {
    "name": "Netaji Subhash Chandra Bose Intl",
    "city": "Kolkata",
    "country": "India",
    "code1": "CCU",
    "code2": "VECC",
    "lat": 22.654739,
    "lng": 88.446722
  },
  {
    "name": "Cooch Behar",
    "city": "Cooch-behar",
    "country": "India",
    "code1": "COH",
    "code2": "VECO",
    "lat": 26.330508,
    "lng": 89.467203
  },
  {
    "name": "Dhanbad",
    "city": "Dhanbad",
    "country": "India",
    "code1": "DBD",
    "code2": "VEDB",
    "lat": 23.834044,
    "lng": 86.425261
  },
  {
    "name": "Delta County Airport",
    "city": "Escanaba",
    "country": "United States",
    "code1": "ESC",
    "code2": "KESC",
    "lat": 45.722778,
    "lng": -87.093611
  },
  {
    "name": "Lauf-Lillinghof",
    "city": "Lillinghof",
    "country": "Germany",
    "code1": "",
    "code2": "\\N",
    "lat": 49.6543,
    "lng": 11.6539
  },
  {
    "name": "Gaya",
    "city": "Gaya",
    "country": "India",
    "code1": "GAY",
    "code2": "VEGY",
    "lat": 24.744308,
    "lng": 84.951175
  },
  {
    "name": "Hirakud",
    "city": "Hirakud",
    "country": "India",
    "code1": "",
    "code2": "VEHK",
    "lat": 21.580231,
    "lng": 84.005728
  },
  {
    "name": "Imphal",
    "city": "Imphal",
    "country": "India",
    "code1": "IMF",
    "code2": "VEIM",
    "lat": 24.75995,
    "lng": 93.896697
  },
  {
    "name": "Jharsuguda",
    "city": "Jharsuguda",
    "country": "India",
    "code1": "",
    "code2": "VEJH",
    "lat": 21.913536,
    "lng": 84.050383
  },
  {
    "name": "Jamshedpur",
    "city": "Jamshedpur",
    "country": "India",
    "code1": "IXW",
    "code2": "VEJS",
    "lat": 22.813211,
    "lng": 86.168844
  },
  {
    "name": "Jorhat",
    "city": "Jorhat",
    "country": "India",
    "code1": "JRH",
    "code2": "VEJT",
    "lat": 26.731528,
    "lng": 94.175536
  },
  {
    "name": "Kailashahar",
    "city": "Kailashahar",
    "country": "India",
    "code1": "IXH",
    "code2": "VEKR",
    "lat": 24.308192,
    "lng": 92.007156
  },
  {
    "name": "Silchar",
    "city": "Silchar",
    "country": "India",
    "code1": "IXS",
    "code2": "VEKU",
    "lat": 24.912928,
    "lng": 92.978742
  },
  {
    "name": "Lilabari",
    "city": "Lilabari",
    "country": "India",
    "code1": "IXI",
    "code2": "VELR",
    "lat": 27.295494,
    "lng": 94.09765
  },
  {
    "name": "Dibrugarh",
    "city": "Mohanbari",
    "country": "India",
    "code1": "MOH",
    "code2": "VEMN",
    "lat": 27.483853,
    "lng": 95.016922
  },
  {
    "name": "Muzaffarpur",
    "city": "Mazuffarpur",
    "country": "India",
    "code1": "",
    "code2": "VEMZ",
    "lat": 26.119089,
    "lng": 85.313664
  },
  {
    "name": "Nawapara",
    "city": "Nawapara",
    "country": "India",
    "code1": "",
    "code2": "VENP",
    "lat": 20.870036,
    "lng": 82.519553
  },
  {
    "name": "Panagarh",
    "city": "Panagarh",
    "country": "India",
    "code1": "",
    "code2": "VEPH",
    "lat": 23.474336,
    "lng": 87.427508
  },
  {
    "name": "Patna",
    "city": "Patina",
    "country": "India",
    "code1": "PAT",
    "code2": "VEPT",
    "lat": 25.591317,
    "lng": 85.087992
  },
  {
    "name": "Purnea",
    "city": "Purnea",
    "country": "India",
    "code1": "",
    "code2": "VEPU",
    "lat": 25.759594,
    "lng": 87.410011
  },
  {
    "name": "Birsa Munda",
    "city": "Ranchi",
    "country": "India",
    "code1": "IXR",
    "code2": "VERC",
    "lat": 23.31425,
    "lng": 85.321675
  },
  {
    "name": "Rourkela",
    "city": "Rourkela",
    "country": "India",
    "code1": "RRK",
    "code2": "VERK",
    "lat": 22.25665,
    "lng": 84.814567
  },
  {
    "name": "Utkela",
    "city": "Utkela",
    "country": "India",
    "code1": "",
    "code2": "VEUK",
    "lat": 20.097411,
    "lng": 83.183797
  },
  {
    "name": "Vishakhapatnam",
    "city": "Vishakhapatnam",
    "country": "India",
    "code1": "VTZ",
    "code2": "VEVZ",
    "lat": 17.721167,
    "lng": 83.224483
  },
  {
    "name": "Zero",
    "city": "Zero",
    "country": "India",
    "code1": "",
    "code2": "VEZO",
    "lat": 27.588283,
    "lng": 93.828061
  },
  {
    "name": "Coxs Bazar",
    "city": "Cox's Bazar",
    "country": "Bangladesh",
    "code1": "CXB",
    "code2": "VGCB",
    "lat": 21.452194,
    "lng": 91.963889
  },
  {
    "name": "Shah Amanat Intl",
    "city": "Chittagong",
    "country": "Bangladesh",
    "code1": "CGP",
    "code2": "VGEG",
    "lat": 22.249611,
    "lng": 91.813286
  },
  {
    "name": "Ishurdi",
    "city": "Ishurdi",
    "country": "Bangladesh",
    "code1": "IRD",
    "code2": "VGIS",
    "lat": 24.1525,
    "lng": 89.049446
  },
  {
    "name": "Jessore",
    "city": "Jessore",
    "country": "Bangladesh",
    "code1": "JSR",
    "code2": "VGJR",
    "lat": 23.1838,
    "lng": 89.160833
  },
  {
    "name": "Shah Mokhdum",
    "city": "Rajshahi",
    "country": "Bangladesh",
    "code1": "RJH",
    "code2": "VGRJ",
    "lat": 24.437219,
    "lng": 88.616511
  },
  {
    "name": "Saidpur",
    "city": "Saidpur",
    "country": "Bangladesh",
    "code1": "SPD",
    "code2": "VGSD",
    "lat": 25.759228,
    "lng": 88.908869
  },
  {
    "name": "Osmany Intl",
    "city": "Sylhet Osmani",
    "country": "Bangladesh",
    "code1": "ZYL",
    "code2": "VGSY",
    "lat": 24.963242,
    "lng": 91.866783
  },
  {
    "name": "Tejgaon",
    "city": "Dhaka",
    "country": "Bangladesh",
    "code1": "",
    "code2": "VGTJ",
    "lat": 23.778783,
    "lng": 90.382689
  },
  {
    "name": "Zia Intl",
    "city": "Dhaka",
    "country": "Bangladesh",
    "code1": "DAC",
    "code2": "VGZR",
    "lat": 23.843333,
    "lng": 90.397781
  },
  {
    "name": "Hong Kong Intl",
    "city": "Hong Kong",
    "country": "Hong Kong",
    "code1": "HKG",
    "code2": "VHHH",
    "lat": 22.308919,
    "lng": 113.914603
  },
  {
    "name": "Sek Kong",
    "city": "Sek Kong",
    "country": "Hong Kong",
    "code1": "",
    "code2": "VHSK",
    "lat": 22.436592,
    "lng": 114.080397
  },
  {
    "name": "Agra",
    "city": "Agra",
    "country": "India",
    "code1": "AGR",
    "code2": "VIAG",
    "lat": 27.155831,
    "lng": 77.960892
  },
  {
    "name": "Allahabad",
    "city": "Allahabad",
    "country": "India",
    "code1": "IXD",
    "code2": "VIAL",
    "lat": 25.440064,
    "lng": 81.733872
  },
  {
    "name": "Amritsar",
    "city": "Amritsar",
    "country": "India",
    "code1": "ATQ",
    "code2": "VIAR",
    "lat": 31.709594,
    "lng": 74.797264
  },
  {
    "name": "Nal",
    "city": "Bikaner",
    "country": "India",
    "code1": "",
    "code2": "VIBK",
    "lat": 28.070606,
    "lng": 73.207161
  },
  {
    "name": "Bakshi Ka Talab",
    "city": "Bakshi Ka Talab",
    "country": "India",
    "code1": "",
    "code2": "VIBL",
    "lat": 26.988339,
    "lng": 80.893117
  },
  {
    "name": "Varanasi",
    "city": "Varanasi",
    "country": "India",
    "code1": "VNS",
    "code2": "VIBN",
    "lat": 25.452358,
    "lng": 82.859342
  },
  {
    "name": "Kullu Manali",
    "city": "Kulu",
    "country": "India",
    "code1": "KUU",
    "code2": "VIBR",
    "lat": 31.876706,
    "lng": 77.154367
  },
  {
    "name": "Bhatinda",
    "city": "Bhatinda",
    "country": "India",
    "code1": "",
    "code2": "VIBT",
    "lat": 30.270139,
    "lng": 74.755772
  },
  {
    "name": "Bhiwani",
    "city": "Bhiwani",
    "country": "India",
    "code1": "",
    "code2": "VIBW",
    "lat": 28.837039,
    "lng": 76.179094
  },
  {
    "name": "Bareilly",
    "city": "Bareilly",
    "country": "India",
    "code1": "",
    "code2": "VIBY",
    "lat": 28.422061,
    "lng": 79.450842
  },
  {
    "name": "Chandigarh",
    "city": "Chandigarh",
    "country": "India",
    "code1": "IXC",
    "code2": "VICG",
    "lat": 30.673469,
    "lng": 76.788542
  },
  {
    "name": "Kanpur Chakeri",
    "city": "Kanpur",
    "country": "India",
    "code1": "",
    "code2": "VICX",
    "lat": 26.4043,
    "lng": 80.410119
  },
  {
    "name": "Safdarjung",
    "city": "Delhi",
    "country": "India",
    "code1": "",
    "code2": "VIDD",
    "lat": 28.584511,
    "lng": 77.205783
  },
  {
    "name": "Dehradun",
    "city": "Dehra Dun",
    "country": "India",
    "code1": "DED",
    "code2": "VIDN",
    "lat": 30.189689,
    "lng": 78.180256
  },
  {
    "name": "Indira Gandhi Intl",
    "city": "Delhi",
    "country": "India",
    "code1": "DEL",
    "code2": "VIDP",
    "lat": 28.5665,
    "lng": 77.103088
  },
  {
    "name": "Gwalior",
    "city": "Gwalior",
    "country": "India",
    "code1": "GWL",
    "code2": "VIGR",
    "lat": 26.293336,
    "lng": 78.227753
  },
  {
    "name": "Hissar",
    "city": "Hissar",
    "country": "India",
    "code1": "",
    "code2": "VIHR",
    "lat": 29.179444,
    "lng": 75.755336
  },
  {
    "name": "Jhansi",
    "city": "Jhansi",
    "country": "India",
    "code1": "",
    "code2": "VIJN",
    "lat": 25.491172,
    "lng": 78.558422
  },
  {
    "name": "Jodhpur",
    "city": "Jodhpur",
    "country": "India",
    "code1": "JDH",
    "code2": "VIJO",
    "lat": 26.251092,
    "lng": 73.048869
  },
  {
    "name": "Jaipur",
    "city": "Jaipur",
    "country": "India",
    "code1": "JAI",
    "code2": "VIJP",
    "lat": 26.824192,
    "lng": 75.812161
  },
  {
    "name": "Jaisalmer",
    "city": "Jaisalmer",
    "country": "India",
    "code1": "JSA",
    "code2": "VIJR",
    "lat": 26.888653,
    "lng": 70.864967
  },
  {
    "name": "Jammu",
    "city": "Jammu",
    "country": "India",
    "code1": "IXJ",
    "code2": "VIJU",
    "lat": 32.689142,
    "lng": 74.837389
  },
  {
    "name": "Kanpur",
    "city": "Kanpur",
    "country": "India",
    "code1": "KNU",
    "code2": "VIKA",
    "lat": 26.441444,
    "lng": 80.364864
  },
  {
    "name": "Kota",
    "city": "Kota",
    "country": "India",
    "code1": "KTU",
    "code2": "VIKO",
    "lat": 25.160219,
    "lng": 75.845631
  },
  {
    "name": "Ludhiana",
    "city": "Ludhiaha",
    "country": "India",
    "code1": "LUH",
    "code2": "VILD",
    "lat": 30.854681,
    "lng": 75.952592
  },
  {
    "name": "Leh",
    "city": "Leh",
    "country": "India",
    "code1": "IXL",
    "code2": "VILH",
    "lat": 34.135872,
    "lng": 77.546514
  },
  {
    "name": "Lucknow",
    "city": "Lucknow",
    "country": "India",
    "code1": "LKO",
    "code2": "VILK",
    "lat": 26.760594,
    "lng": 80.889339
  },
  {
    "name": "Pathankot",
    "city": "Pathankot",
    "country": "India",
    "code1": "IXP",
    "code2": "VIPK",
    "lat": 32.233778,
    "lng": 75.634628
  },
  {
    "name": "Patiala",
    "city": "Patiala",
    "country": "India",
    "code1": "",
    "code2": "VIPL",
    "lat": 30.314847,
    "lng": 76.364469
  },
  {
    "name": "Pantnagar",
    "city": "Nainital",
    "country": "India",
    "code1": "PGH",
    "code2": "VIPT",
    "lat": 29.033408,
    "lng": 79.473744
  },
  {
    "name": "Fursatganj",
    "city": "Raibarelli",
    "country": "India",
    "code1": "",
    "code2": "VIRB",
    "lat": 26.248489,
    "lng": 81.380506
  },
  {
    "name": "Sarsawa",
    "city": "Saharanpur",
    "country": "India",
    "code1": "",
    "code2": "VISP",
    "lat": 29.993919,
    "lng": 77.425311
  },
  {
    "name": "Srinagar",
    "city": "Srinagar",
    "country": "India",
    "code1": "SXR",
    "code2": "VISR",
    "lat": 33.987139,
    "lng": 74.77425
  },
  {
    "name": "Satna",
    "city": "Satna",
    "country": "India",
    "code1": "TNI",
    "code2": "VIST",
    "lat": 24.562319,
    "lng": 80.854933
  },
  {
    "name": "Balkhash Airport",
    "city": "Balkhash",
    "country": "Kazakhstan",
    "code1": "BXH",
    "code2": "\\N",
    "lat": 46.8933,
    "lng": 75.005
  },
  {
    "name": "Luang Phabang Intl",
    "city": "Luang Prabang",
    "country": "Laos",
    "code1": "LPQ",
    "code2": "VLLB",
    "lat": 19.897914,
    "lng": 102.160764
  },
  {
    "name": "Pakse",
    "city": "Pakse",
    "country": "Laos",
    "code1": "PKZ",
    "code2": "VLPS",
    "lat": 15.132053,
    "lng": 105.781417
  },
  {
    "name": "Phonesavanh",
    "city": "Phong Savanh",
    "country": "Laos",
    "code1": "",
    "code2": "VLPV",
    "lat": 19.454864,
    "lng": 103.218208
  },
  {
    "name": "Savannakhet",
    "city": "Savannakhet",
    "country": "Laos",
    "code1": "ZVK",
    "code2": "VLSK",
    "lat": 16.556594,
    "lng": 104.759531
  },
  {
    "name": "Sam Neua",
    "city": "Sam Neua",
    "country": "Laos",
    "code1": "",
    "code2": "VLSN",
    "lat": 20.418358,
    "lng": 104.066583
  },
  {
    "name": "Wattay Intl",
    "city": "Vientiane",
    "country": "Laos",
    "code1": "VTE",
    "code2": "VLVT",
    "lat": 17.988322,
    "lng": 102.563256
  },
  {
    "name": "Macau Intl",
    "city": "Macau",
    "country": "Macau",
    "code1": "MFM",
    "code2": "VMMC",
    "lat": 22.149556,
    "lng": 113.591558
  },
  {
    "name": "Bhairahawa",
    "city": "Bhairawa",
    "country": "Nepal",
    "code1": "BWA",
    "code2": "VNBW",
    "lat": 27.505703,
    "lng": 83.41625
  },
  {
    "name": "Nastaetten",
    "city": "Nastaetten",
    "country": "Germany",
    "code1": "",
    "code2": "\\N",
    "lat": 50.1972,
    "lng": 7.8916
  },
  {
    "name": "Janakpur",
    "city": "Janakpur",
    "country": "Nepal",
    "code1": "",
    "code2": "VNJP",
    "lat": 26.708806,
    "lng": 85.922394
  },
  {
    "name": "Tribhuvan Intl",
    "city": "Kathmandu",
    "country": "Nepal",
    "code1": "KTM",
    "code2": "VNKT",
    "lat": 27.696583,
    "lng": 85.3591
  },
  {
    "name": "Pokhara",
    "city": "Pokhara",
    "country": "Nepal",
    "code1": "PKR",
    "code2": "VNPK",
    "lat": 28.200881,
    "lng": 83.982056
  },
  {
    "name": "Simara",
    "city": "Simara",
    "country": "Nepal",
    "code1": "SIF",
    "code2": "VNSI",
    "lat": 27.159456,
    "lng": 84.980122
  },
  {
    "name": "Biratnagar",
    "city": "Biratnagar",
    "country": "Nepal",
    "code1": "BIR",
    "code2": "VNVT",
    "lat": 26.481453,
    "lng": 87.264036
  },
  {
    "name": "Agatti",
    "city": "Agatti Island",
    "country": "India",
    "code1": "AGX",
    "code2": "VOAT",
    "lat": 10.823656,
    "lng": 72.176042
  },
  {
    "name": "Bangalore",
    "city": "Bangalore",
    "country": "India",
    "code1": "BLR",
    "code2": "VOBL",
    "lat": 12.949986,
    "lng": 77.668206
  },
  {
    "name": "Bellary",
    "city": "Bellary",
    "country": "India",
    "code1": "BEP",
    "code2": "VOBI",
    "lat": 15.162783,
    "lng": 76.882775
  },
  {
    "name": "Bidar",
    "city": "Bidar",
    "country": "India",
    "code1": "",
    "code2": "VOBR",
    "lat": 17.908081,
    "lng": 77.487142
  },
  {
    "name": "Vijayawada",
    "city": "Vijayawada",
    "country": "India",
    "code1": "VGA",
    "code2": "VOBZ",
    "lat": 16.530433,
    "lng": 80.796847
  },
  {
    "name": "Coimbatore",
    "city": "Coimbatore",
    "country": "India",
    "code1": "CJB",
    "code2": "VOCB",
    "lat": 11.030031,
    "lng": 77.043383
  },
  {
    "name": "Cochin",
    "city": "Kochi",
    "country": "India",
    "code1": "COK",
    "code2": "VOCI",
    "lat": 10.155556,
    "lng": 76.391389
  },
  {
    "name": "Calicut",
    "city": "Calicut",
    "country": "India",
    "code1": "CCJ",
    "code2": "VOCL",
    "lat": 11.136839,
    "lng": 75.9553
  },
  {
    "name": "Cuddapah",
    "city": "Cuddapah",
    "country": "India",
    "code1": "CDP",
    "code2": "VOCP",
    "lat": 14.509961,
    "lng": 78.772833
  },
  {
    "name": "Carnicobar",
    "city": "Carnicobar",
    "country": "India",
    "code1": "",
    "code2": "VOCX",
    "lat": 9.152508,
    "lng": 92.819628
  },
  {
    "name": "Dundigul",
    "city": "Dundigul",
    "country": "India",
    "code1": "",
    "code2": "VODG",
    "lat": 17.627178,
    "lng": 78.403361
  },
  {
    "name": "Hyderabad",
    "city": "Hyderabad",
    "country": "India",
    "code1": "HYD",
    "code2": "VOHY",
    "lat": 17.453117,
    "lng": 78.467586
  },
  {
    "name": "Madurai",
    "city": "Madurai",
    "country": "India",
    "code1": "IXM",
    "code2": "VOMD",
    "lat": 9.834508,
    "lng": 78.093378
  },
  {
    "name": "Mangalore",
    "city": "Mangalore",
    "country": "India",
    "code1": "IXE",
    "code2": "VOML",
    "lat": 12.961267,
    "lng": 74.890069
  },
  {
    "name": "Chennai Intl",
    "city": "Madras",
    "country": "India",
    "code1": "MAA",
    "code2": "VOMM",
    "lat": 12.994414,
    "lng": 80.180517
  },
  {
    "name": "Nagarjuna Sagar",
    "city": "Nagarjunsagar",
    "country": "India",
    "code1": "",
    "code2": "VONS",
    "lat": 16.542653,
    "lng": 79.318714
  },
  {
    "name": "Port Blair",
    "city": "Port Blair",
    "country": "India",
    "code1": "IXZ",
    "code2": "VOPB",
    "lat": 11.641161,
    "lng": 92.729744
  },
  {
    "name": "Pondicherry",
    "city": "Pendicherry",
    "country": "India",
    "code1": "PNY",
    "code2": "VOPC",
    "lat": 11.968722,
    "lng": 79.810058
  },
  {
    "name": "Rajahmundry",
    "city": "Rajahmundry",
    "country": "India",
    "code1": "RJA",
    "code2": "VORY",
    "lat": 17.110361,
    "lng": 81.818208
  },
  {
    "name": "Salem",
    "city": "Salem",
    "country": "India",
    "code1": "",
    "code2": "VOSM",
    "lat": 11.783314,
    "lng": 78.065606
  },
  {
    "name": "Tanjore",
    "city": "Tanjore",
    "country": "India",
    "code1": "",
    "code2": "VOTJ",
    "lat": 10.722428,
    "lng": 79.101567
  },
  {
    "name": "Tirupati",
    "city": "Tirupeti",
    "country": "India",
    "code1": "TIR",
    "code2": "VOTP",
    "lat": 13.632492,
    "lng": 79.543256
  },
  {
    "name": "Trichy",
    "city": "Tiruchirappalli",
    "country": "India",
    "code1": "TRZ",
    "code2": "VOTR",
    "lat": 10.765364,
    "lng": 78.709722
  },
  {
    "name": "Thiruvananthapuram Intl",
    "city": "Trivandrum",
    "country": "India",
    "code1": "TRV",
    "code2": "VOTV",
    "lat": 8.482122,
    "lng": 76.920114
  },
  {
    "name": "Tambaram",
    "city": "Tambaram",
    "country": "India",
    "code1": "",
    "code2": "VOTX",
    "lat": 12.907214,
    "lng": 80.121861
  },
  {
    "name": "Paro",
    "city": "Thimphu",
    "country": "Bhutan",
    "code1": "PBH",
    "code2": "VQPR",
    "lat": 27.403192,
    "lng": 89.424606
  },
  {
    "name": "Male Intl",
    "city": "Male",
    "country": "Maldives",
    "code1": "MLE",
    "code2": "VRMM",
    "lat": 4.191833,
    "lng": 73.529128
  },
  {
    "name": "Don Muang Intl",
    "city": "Bangkok",
    "country": "Thailand",
    "code1": "DMK",
    "code2": "VTBD",
    "lat": 13.912583,
    "lng": 100.60675
  },
  {
    "name": "Kamphaeng Saen",
    "city": "Nakhon Pathom",
    "country": "Thailand",
    "code1": "",
    "code2": "VTBK",
    "lat": 14.101975,
    "lng": 99.917219
  },
  {
    "name": "Khok Kathiam",
    "city": "Lop Buri",
    "country": "Thailand",
    "code1": "",
    "code2": "VTBL",
    "lat": 14.874561,
    "lng": 100.663367
  },
  {
    "name": "Naha",
    "city": "Naha",
    "country": "Indonesia",
    "code1": "NAH",
    "code2": "WAMH",
    "lat": 3.683214,
    "lng": 125.528019
  },
  {
    "name": "U Taphao Intl",
    "city": "Pattaya",
    "country": "Thailand",
    "code1": "UTP",
    "code2": "VTBU",
    "lat": 12.679944,
    "lng": 101.005028
  },
  {
    "name": "Watthana Nakhon",
    "city": "Prachin Buri",
    "country": "Thailand",
    "code1": "",
    "code2": "VTBW",
    "lat": 13.7688,
    "lng": 102.315492
  },
  {
    "name": "Lampang",
    "city": "Lampang",
    "country": "Thailand",
    "code1": "LPT",
    "code2": "VTCL",
    "lat": 18.270933,
    "lng": 99.504167
  },
  {
    "name": "Phrae",
    "city": "Phrae",
    "country": "Thailand",
    "code1": "PRH",
    "code2": "VTCP",
    "lat": 18.132169,
    "lng": 100.164664
  },
  {
    "name": "Hua Hin",
    "city": "Prachuap Khiri Khan",
    "country": "Thailand",
    "code1": "HHQ",
    "code2": "VTPH",
    "lat": 12.636225,
    "lng": 99.951533
  },
  {
    "name": "Takhli",
    "city": "Nakhon Sawan",
    "country": "Thailand",
    "code1": "",
    "code2": "VTPI",
    "lat": 15.277306,
    "lng": 100.295861
  },
  {
    "name": "Sak Long",
    "city": "Phetchabun",
    "country": "Thailand",
    "code1": "",
    "code2": "VTPL",
    "lat": 16.824322,
    "lng": 101.251389
  },
  {
    "name": "Nakhon Sawan",
    "city": "Nakhon Sawan",
    "country": "Thailand",
    "code1": "",
    "code2": "VTPN",
    "lat": 15.672997,
    "lng": 100.136794
  },
  {
    "name": "Phitsanulok",
    "city": "Phitsanulok",
    "country": "Thailand",
    "code1": "PHS",
    "code2": "VTPP",
    "lat": 16.782939,
    "lng": 100.279122
  },
  {
    "name": "Khunan Phumipol",
    "city": "Tak",
    "country": "Thailand",
    "code1": "",
    "code2": "VTPY",
    "lat": 17.234211,
    "lng": 99.057911
  },
  {
    "name": "Khoun Khan",
    "city": "Satun",
    "country": "Thailand",
    "code1": "",
    "code2": "VTSA",
    "lat": 6.661403,
    "lng": 100.080317
  },
  {
    "name": "Narathiwat",
    "city": "Narathiwat",
    "country": "Thailand",
    "code1": "NAW",
    "code2": "VTSC",
    "lat": 6.519922,
    "lng": 101.7434
  },
  {
    "name": "Krabi",
    "city": "Krabi",
    "country": "Thailand",
    "code1": "KBV",
    "code2": "VTSG",
    "lat": 8.095969,
    "lng": 98.988764
  },
  {
    "name": "Songkhla",
    "city": "Songkhla",
    "country": "Thailand",
    "code1": "",
    "code2": "VTSH",
    "lat": 7.186564,
    "lng": 100.608031
  },
  {
    "name": "Pattani",
    "city": "Pattani",
    "country": "Thailand",
    "code1": "PAN",
    "code2": "VTSK",
    "lat": 6.785458,
    "lng": 101.153569
  },
  {
    "name": "Samui",
    "city": "Ko Samui",
    "country": "Thailand",
    "code1": "USM",
    "code2": "VTSM",
    "lat": 9.547794,
    "lng": 100.062272
  },
  {
    "name": "Cha Ian",
    "city": "Nakhon Si Thammarat",
    "country": "Thailand",
    "code1": "",
    "code2": "VTSN",
    "lat": 8.471147,
    "lng": 99.955625
  },
  {
    "name": "Phuket Intl",
    "city": "Phuket",
    "country": "Thailand",
    "code1": "HKT",
    "code2": "VTSP",
    "lat": 8.1132,
    "lng": 98.316872
  },
  {
    "name": "Ranong",
    "city": "Ranong",
    "country": "Thailand",
    "code1": "",
    "code2": "VTSR",
    "lat": 9.777622,
    "lng": 98.585483
  },
  {
    "name": "Hat Yai Intl",
    "city": "Hat Yai",
    "country": "Thailand",
    "code1": "HDY",
    "code2": "VTSS",
    "lat": 6.933206,
    "lng": 100.392975
  },
  {
    "name": "Trang",
    "city": "Trang",
    "country": "Thailand",
    "code1": "TST",
    "code2": "VTST",
    "lat": 7.508744,
    "lng": 99.616578
  },
  {
    "name": "Udon Thani",
    "city": "Udon Thani",
    "country": "Thailand",
    "code1": "UTH",
    "code2": "VTUD",
    "lat": 17.386436,
    "lng": 102.788247
  },
  {
    "name": "Sakon Nakhon",
    "city": "Sakon Nakhon",
    "country": "Thailand",
    "code1": "SNO",
    "code2": "VTUI",
    "lat": 17.195142,
    "lng": 104.118625
  },
  {
    "name": "Surin",
    "city": "Surin",
    "country": "Thailand",
    "code1": "",
    "code2": "VTUJ",
    "lat": 14.868264,
    "lng": 103.498256
  },
  {
    "name": "Loei",
    "city": "Loei",
    "country": "Thailand",
    "code1": "LOE",
    "code2": "VTUL",
    "lat": 17.439133,
    "lng": 101.722064
  },
  {
    "name": "Khorat",
    "city": "Nakhon Ratchasima",
    "country": "Thailand",
    "code1": "",
    "code2": "VTUN",
    "lat": 14.934514,
    "lng": 102.078639
  },
  {
    "name": "Rob Muang",
    "city": "Roi Et",
    "country": "Thailand",
    "code1": "",
    "code2": "VTUR",
    "lat": 16.07035,
    "lng": 103.6459
  },
  {
    "name": "Finsterwalde-Heinrichsruh",
    "city": "Finsterwalde",
    "country": "Germany",
    "code1": "",
    "code2": "EDAS",
    "lat": 51.6377,
    "lng": 13.2419
  },
  {
    "name": "Orchid Beach",
    "city": "Fraser Island",
    "country": "Australia",
    "code1": "OKB",
    "code2": "KOKB",
    "lat": -24.95841,
    "lng": 153.3145
  },
  {
    "name": "Mara Lodges",
    "city": "Mara Lodges",
    "country": "Kenya",
    "code1": "",
    "code2": "\\N",
    "lat": -1.183581,
    "lng": 35.099931
  },
  {
    "name": "Danang Intl",
    "city": "Danang",
    "country": "Vietnam",
    "code1": "DAD",
    "code2": "VVDN",
    "lat": 16.043917,
    "lng": 108.19937
  },
  {
    "name": "Hanoi Gia Lam",
    "city": "Hanoi",
    "country": "Vietnam",
    "code1": "",
    "code2": "VVGL",
    "lat": 21.040975,
    "lng": 105.886011
  },
  {
    "name": "Kep",
    "city": "Kep",
    "country": "Vietnam",
    "code1": "",
    "code2": "VVKP",
    "lat": 21.394639,
    "lng": 106.261083
  },
  {
    "name": "Noibai Intl",
    "city": "Hanoi",
    "country": "Vietnam",
    "code1": "HAN",
    "code2": "VVNB",
    "lat": 21.221192,
    "lng": 105.807178
  },
  {
    "name": "Nhatrang",
    "city": "Nhatrang",
    "country": "Vietnam",
    "code1": "NHA",
    "code2": "VVNT",
    "lat": 12.227467,
    "lng": 109.192322
  },
  {
    "name": "Phubai",
    "city": "Hue",
    "country": "Vietnam",
    "code1": "",
    "code2": "VVPB",
    "lat": 16.4015,
    "lng": 107.702614
  },
  {
    "name": "Namanga",
    "city": "Namanga",
    "country": "Kenya",
    "code1": "",
    "code2": "\\N",
    "lat": -2.55,
    "lng": 36.7833333
  },
  {
    "name": "Phu Quoc",
    "city": "Phuquoc",
    "country": "Vietnam",
    "code1": "",
    "code2": "VVPQ",
    "lat": 10.227025,
    "lng": 103.967169
  },
  {
    "name": "Tansonnhat Intl",
    "city": "Ho Chi Minh City",
    "country": "Vietnam",
    "code1": "SGN",
    "code2": "VVTS",
    "lat": 10.818797,
    "lng": 106.651856
  },
  {
    "name": "Ann",
    "city": "Ann",
    "country": "Burma",
    "code1": "",
    "code2": "VYAN",
    "lat": 19.769156,
    "lng": 94.026133
  },
  {
    "name": "Anisakan",
    "city": "Anisakan",
    "country": "Burma",
    "code1": "",
    "code2": "VYAS",
    "lat": 21.955433,
    "lng": 96.40605
  },
  {
    "name": "Bagan",
    "city": "Bagan",
    "country": "Burma",
    "code1": "",
    "code2": "VYBG",
    "lat": 21.178756,
    "lng": 94.930169
  },
  {
    "name": "Bamburi",
    "city": "Bamburi",
    "country": "Kenya",
    "code1": "BMQ",
    "code2": "KBMQ",
    "lat": -3.98268888888889,
    "lng": 39.7308972222222
  },
  {
    "name": "Coco Island",
    "city": "Coco Island",
    "country": "Burma",
    "code1": "",
    "code2": "VYCI",
    "lat": 14.141517,
    "lng": 93.368531
  },
  {
    "name": "Heho",
    "city": "Heho",
    "country": "Burma",
    "code1": "HEH",
    "code2": "VYHH",
    "lat": 20.747036,
    "lng": 96.792044
  },
  {
    "name": "Hommalinn",
    "city": "Hommalin",
    "country": "Burma",
    "code1": "",
    "code2": "VYHL",
    "lat": 24.899597,
    "lng": 94.914033
  },
  {
    "name": "Kengtung",
    "city": "Kengtung",
    "country": "Burma",
    "code1": "KET",
    "code2": "VYKG",
    "lat": 21.301611,
    "lng": 99.635997
  },
  {
    "name": "Williamson Country Regional Airport",
    "city": "Marion",
    "country": "United States",
    "code1": "MWA",
    "code2": "KMWA",
    "lat": 37.7549569,
    "lng": -89.0110936
  },
  {
    "name": "Kyaukpyu",
    "city": "Kyaukpyu",
    "country": "Burma",
    "code1": "KYP",
    "code2": "VYKP",
    "lat": 19.426447,
    "lng": 93.534836
  },
  {
    "name": "Lommis Airport",
    "city": "Lommis",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSZT",
    "lat": 47.5244,
    "lng": 9.00306
  },
  {
    "name": "Lashio",
    "city": "Lashio",
    "country": "Burma",
    "code1": "LSH",
    "code2": "VYLS",
    "lat": 22.977881,
    "lng": 97.752183
  },
  {
    "name": "Lanywa",
    "city": "Lanywa",
    "country": "Burma",
    "code1": "",
    "code2": "VYLY",
    "lat": 20.940361,
    "lng": 94.822617
  },
  {
    "name": "Mandalay Intl",
    "city": "Mandalay",
    "country": "Burma",
    "code1": "MDL",
    "code2": "VYMD",
    "lat": 21.702156,
    "lng": 95.977928
  },
  {
    "name": "Myeik",
    "city": "Myeik",
    "country": "Burma",
    "code1": "MGZ",
    "code2": "VYME",
    "lat": 12.439797,
    "lng": 98.621478
  },
  {
    "name": "Myitkyina",
    "city": "Myitkyina",
    "country": "Burma",
    "code1": "MYT",
    "code2": "VYMK",
    "lat": 25.383636,
    "lng": 97.351919
  },
  {
    "name": "Momeik",
    "city": "Momeik",
    "country": "Burma",
    "code1": "",
    "code2": "VYMO",
    "lat": 23.092525,
    "lng": 96.645272
  },
  {
    "name": "Mong Hsat",
    "city": "Mong Hsat",
    "country": "Burma",
    "code1": "MOG",
    "code2": "VYMS",
    "lat": 20.516758,
    "lng": 99.256825
  },
  {
    "name": "Nampong",
    "city": "Nampong",
    "country": "Burma",
    "code1": "",
    "code2": "VYNP",
    "lat": 25.354375,
    "lng": 97.29515
  },
  {
    "name": "Namsang",
    "city": "Namsang",
    "country": "Burma",
    "code1": "",
    "code2": "VYNS",
    "lat": 20.890492,
    "lng": 97.735922
  },
  {
    "name": "Hpa An",
    "city": "Hpa-an",
    "country": "Burma",
    "code1": "",
    "code2": "VYPA",
    "lat": 16.893714,
    "lng": 97.674581
  },
  {
    "name": "Amlikon Glider Airport",
    "city": "Amlikon",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSPA",
    "lat": 47.5742,
    "lng": 9.0475
  },
  {
    "name": "Putao",
    "city": "Putao",
    "country": "Burma",
    "code1": "PBU",
    "code2": "VYPT",
    "lat": 27.329922,
    "lng": 97.426269
  },
  {
    "name": "Pyay",
    "city": "Pyay",
    "country": "Burma",
    "code1": "",
    "code2": "VYPY",
    "lat": 18.824478,
    "lng": 95.266003
  },
  {
    "name": "Shante",
    "city": "Shante",
    "country": "Burma",
    "code1": "",
    "code2": "VYST",
    "lat": 20.941668,
    "lng": 95.914497
  },
  {
    "name": "Sittwe",
    "city": "Sittwe",
    "country": "Burma",
    "code1": "AKY",
    "code2": "VYSW",
    "lat": 20.132708,
    "lng": 92.872628
  },
  {
    "name": "Thandwe",
    "city": "Thandwe",
    "country": "Burma",
    "code1": "SNW",
    "code2": "VYTD",
    "lat": 18.460731,
    "lng": 94.300119
  },
  {
    "name": "Tachileik",
    "city": "Tachilek",
    "country": "Burma",
    "code1": "THL",
    "code2": "VYTL",
    "lat": 20.483831,
    "lng": 99.935353
  },
  {
    "name": "Taungoo",
    "city": "Taungoo",
    "country": "Burma",
    "code1": "",
    "code2": "VYTO",
    "lat": 19.031275,
    "lng": 96.401239
  },
  {
    "name": "Yangon Intl",
    "city": "Yangon",
    "country": "Burma",
    "code1": "RGN",
    "code2": "VYYY",
    "lat": 16.907305,
    "lng": 96.133222
  },
  {
    "name": "Hasanuddin",
    "city": "Ujung Pandang",
    "country": "Indonesia",
    "code1": "UPG",
    "code2": "WAAA",
    "lat": -5.061631,
    "lng": 119.554042
  },
  {
    "name": "Frans Kaisiepo",
    "city": "Biak",
    "country": "Indonesia",
    "code1": "BIK",
    "code2": "WABB",
    "lat": -1.190017,
    "lng": 136.107997
  },
  {
    "name": "Nabire",
    "city": "Nabire",
    "country": "Indonesia",
    "code1": "NBX",
    "code2": "WABI",
    "lat": -3.368183,
    "lng": 135.496406
  },
  {
    "name": "Moses Kilangin",
    "city": "Timika",
    "country": "Indonesia",
    "code1": "TIM",
    "code2": "WABP",
    "lat": -4.528275,
    "lng": 136.887375
  },
  {
    "name": "Sentani",
    "city": "Jayapura",
    "country": "Indonesia",
    "code1": "DJJ",
    "code2": "WAJJ",
    "lat": -2.576953,
    "lng": 140.516372
  },
  {
    "name": "Wamena",
    "city": "Wamena",
    "country": "Indonesia",
    "code1": "WMX",
    "code2": "WAJW",
    "lat": -4.102511,
    "lng": 138.957372
  },
  {
    "name": "Mopah",
    "city": "Merauke",
    "country": "Indonesia",
    "code1": "MKQ",
    "code2": "WAKK",
    "lat": -8.520294,
    "lng": 140.418453
  },
  {
    "name": "Jalaluddin",
    "city": "Gorontalo",
    "country": "Indonesia",
    "code1": "GTO",
    "code2": "WAMG",
    "lat": 0.637119,
    "lng": 122.849858
  },
  {
    "name": "Incheon Intl",
    "city": "Seoul",
    "country": "South Korea",
    "code1": "ICN",
    "code2": "RKSI",
    "lat": 37.469075,
    "lng": 126.450517
  },
  {
    "name": "Mutiara",
    "city": "Palu",
    "country": "Indonesia",
    "code1": "PLW",
    "code2": "WAML",
    "lat": -0.918542,
    "lng": 119.909642
  },
  {
    "name": "Sam Ratulangi",
    "city": "Manado",
    "country": "Indonesia",
    "code1": "MDC",
    "code2": "WAMM",
    "lat": 1.549447,
    "lng": 124.925878
  },
  {
    "name": "Kasiguncu",
    "city": "Poso",
    "country": "Indonesia",
    "code1": "PSJ",
    "code2": "WAMP",
    "lat": -1.416753,
    "lng": 120.657669
  },
  {
    "name": "Pitu",
    "city": "Morotai Island",
    "country": "Indonesia",
    "code1": "OTI",
    "code2": "WAMR",
    "lat": 2.045992,
    "lng": 128.324708
  },
  {
    "name": "Sultan Babullah",
    "city": "Ternate",
    "country": "Indonesia",
    "code1": "TTE",
    "code2": "WAMT",
    "lat": 0.831414,
    "lng": 127.381486
  },
  {
    "name": "Bubung",
    "city": "Luwuk",
    "country": "Indonesia",
    "code1": "LUW",
    "code2": "WAMW",
    "lat": -1.038919,
    "lng": 122.771906
  },
  {
    "name": "Mukachevo Air Base",
    "city": "Mukacheve",
    "country": "Ukraine",
    "code1": "",
    "code2": "\\N",
    "lat": 48.4,
    "lng": 22.6833
  },
  {
    "name": "Pattimura",
    "city": "Ambon",
    "country": "Indonesia",
    "code1": "AMQ",
    "code2": "WAPP",
    "lat": -3.710264,
    "lng": 128.089136
  },
  {
    "name": "Fak Fak",
    "city": "Fak Fak",
    "country": "Indonesia",
    "code1": "FKQ",
    "code2": "WASF",
    "lat": -2.920192,
    "lng": 132.267031
  },
  {
    "name": "Kaimana",
    "city": "Kaimana",
    "country": "Indonesia",
    "code1": "KNG",
    "code2": "WASK",
    "lat": -3.644517,
    "lng": 133.695553
  },
  {
    "name": "Babo",
    "city": "Babo",
    "country": "Indonesia",
    "code1": "BXB",
    "code2": "WASO",
    "lat": -2.532242,
    "lng": 133.438894
  },
  {
    "name": "Rendani",
    "city": "Manokwari",
    "country": "Indonesia",
    "code1": "MKW",
    "code2": "WASR",
    "lat": -0.891833,
    "lng": 134.049183
  },
  {
    "name": "Jefman",
    "city": "Sorong",
    "country": "Indonesia",
    "code1": "SOQ",
    "code2": "WASS",
    "lat": -0.926358,
    "lng": 131.121194
  },
  {
    "name": "Bintulu",
    "city": "Bintulu",
    "country": "Malaysia",
    "code1": "BTU",
    "code2": "WBGB",
    "lat": 3.12385,
    "lng": 113.020472
  },
  {
    "name": "Kuching Intl",
    "city": "Kuching",
    "country": "Malaysia",
    "code1": "KCH",
    "code2": "WBGG",
    "lat": 1.484697,
    "lng": 110.346933
  },
  {
    "name": "Limbang",
    "city": "Limbang",
    "country": "Malaysia",
    "code1": "LMN",
    "code2": "WBGJ",
    "lat": 4.808303,
    "lng": 115.010439
  },
  {
    "name": "Marudi",
    "city": "Marudi",
    "country": "Malaysia",
    "code1": "MUR",
    "code2": "WBGM",
    "lat": 4.1775,
    "lng": 114.321944
  },
  {
    "name": "Miri",
    "city": "Miri",
    "country": "Malaysia",
    "code1": "MYY",
    "code2": "WBGR",
    "lat": 4.322014,
    "lng": 113.986806
  },
  {
    "name": "Sibu",
    "city": "Sibu",
    "country": "Malaysia",
    "code1": "SBW",
    "code2": "WBGS",
    "lat": 2.261603,
    "lng": 111.985322
  },
  {
    "name": "Lahad Datu",
    "city": "Lahad Datu",
    "country": "Malaysia",
    "code1": "LDU",
    "code2": "WBKD",
    "lat": 5.032247,
    "lng": 118.324036
  },
  {
    "name": "Kota Kinabalu Intl",
    "city": "Kota Kinabalu",
    "country": "Malaysia",
    "code1": "BKI",
    "code2": "WBKK",
    "lat": 5.937208,
    "lng": 116.051181
  },
  {
    "name": "Labuan",
    "city": "Labuan",
    "country": "Malaysia",
    "code1": "LBU",
    "code2": "WBKL",
    "lat": 5.300683,
    "lng": 115.250181
  },
  {
    "name": "Tawau",
    "city": "Tawau",
    "country": "Malaysia",
    "code1": "TWU",
    "code2": "WBKW",
    "lat": 4.313369,
    "lng": 118.121953
  },
  {
    "name": "Brunei Intl",
    "city": "Bandar Seri Begawan",
    "country": "Brunei",
    "code1": "BWN",
    "code2": "WBSB",
    "lat": 4.9442,
    "lng": 114.928353
  },
  {
    "name": "Sultan Syarif Kasim Ii",
    "city": "Pekanbaru",
    "country": "Indonesia",
    "code1": "PKU",
    "code2": "WIBB",
    "lat": 0.460786,
    "lng": 101.444539
  },
  {
    "name": "Pinang Kampai",
    "city": "Dumai",
    "country": "Indonesia",
    "code1": "DUM",
    "code2": "WIBD",
    "lat": 1.609194,
    "lng": 101.433558
  },
  {
    "name": "Soekarno Hatta Intl",
    "city": "Jakarta",
    "country": "Indonesia",
    "code1": "CGK",
    "code2": "WIII",
    "lat": -6.125567,
    "lng": 106.655897
  },
  {
    "name": "Binaka",
    "city": "Gunung Sitoli",
    "country": "Indonesia",
    "code1": "GNS",
    "code2": "WIMB",
    "lat": 1.166381,
    "lng": 97.704681
  },
  {
    "name": "Aek Godang",
    "city": "Padang Sidempuan",
    "country": "Indonesia",
    "code1": "",
    "code2": "WIME",
    "lat": 1.400103,
    "lng": 99.430453
  },
  {
    "name": "Minangkabau",
    "city": "Padang",
    "country": "Indonesia",
    "code1": "PDG",
    "code2": "WIPT",
    "lat": -0.874989,
    "lng": 100.351881
  },
  {
    "name": "Polonia",
    "city": "Medan",
    "country": "Indonesia",
    "code1": "MES",
    "code2": "WIMM",
    "lat": 3.558056,
    "lng": 98.671722
  },
  {
    "name": "Dr Ferdinand Lumban Tobing",
    "city": "Sibolga",
    "country": "Indonesia",
    "code1": "",
    "code2": "WIMS",
    "lat": 1.555944,
    "lng": 98.888908
  },
  {
    "name": "Nanga Pinoh I",
    "city": "Nangapinoh",
    "country": "Indonesia",
    "code1": "",
    "code2": "WIOG",
    "lat": -0.348869,
    "lng": 111.747606
  },
  {
    "name": "Rahadi Usman",
    "city": "Ketapang",
    "country": "Indonesia",
    "code1": "KTG",
    "code2": "WIOK",
    "lat": -1.816639,
    "lng": 109.963483
  },
  {
    "name": "Mukachevo",
    "city": "Mukacheve",
    "country": "Ukraine",
    "code1": "",
    "code2": "\\N",
    "lat": 48.4,
    "lng": 22.683
  },
  {
    "name": "Supadio",
    "city": "Pontianak",
    "country": "Indonesia",
    "code1": "PNK",
    "code2": "WIOO",
    "lat": -0.150711,
    "lng": 109.403892
  },
  {
    "name": "Borovaya Airfield",
    "city": "Minsk",
    "country": "Belarus",
    "code1": "",
    "code2": "UMMB",
    "lat": 53.57,
    "lng": 27.39
  },
  {
    "name": "Weser-Wuemme",
    "city": "Hellwege",
    "country": "Germany",
    "code1": "",
    "code2": "EDWM",
    "lat": 53.054,
    "lng": 9.208667
  },
  {
    "name": "Sultan Thaha",
    "city": "Jambi",
    "country": "Indonesia",
    "code1": "DJB",
    "code2": "WIPA",
    "lat": -1.638017,
    "lng": 103.644378
  },
  {
    "name": "Fatmawati Soekarno",
    "city": "Bengkulu",
    "country": "Indonesia",
    "code1": "BKS",
    "code2": "WIPL",
    "lat": -3.8637,
    "lng": 102.339036
  },
  {
    "name": "Sultan Mahmud Badaruddin Ii",
    "city": "Palembang",
    "country": "Indonesia",
    "code1": "PLM",
    "code2": "WIPP",
    "lat": -2.89825,
    "lng": 104.699903
  },
  {
    "name": "Japura",
    "city": "Rengat",
    "country": "Indonesia",
    "code1": "RGT",
    "code2": "WIPR",
    "lat": -0.352808,
    "lng": 102.334917
  },
  {
    "name": "Lhok Sukon",
    "city": "Lhok Sukon",
    "country": "Indonesia",
    "code1": "",
    "code2": "WITL",
    "lat": 5.069506,
    "lng": 97.259192
  },
  {
    "name": "Balti International Airport",
    "city": "Strymba",
    "country": "Moldova",
    "code1": "BZY",
    "code2": "\\N",
    "lat": 47.8381,
    "lng": 27.7815
  },
  {
    "name": "Sultan Iskandarmuda",
    "city": "Banda Aceh",
    "country": "Indonesia",
    "code1": "BTJ",
    "code2": "WITT",
    "lat": 5.523522,
    "lng": 95.420372
  },
  {
    "name": "Kluang",
    "city": "Kluang",
    "country": "Malaysia",
    "code1": "",
    "code2": "WMAP",
    "lat": 2.041394,
    "lng": 103.307394
  },
  {
    "name": "Sultan Abdul Halim",
    "city": "Alor Setar",
    "country": "Malaysia",
    "code1": "AOR",
    "code2": "WMKA",
    "lat": 6.189667,
    "lng": 100.398183
  },
  {
    "name": "Butterworth",
    "city": "Butterworth",
    "country": "Malaysia",
    "code1": "",
    "code2": "WMKB",
    "lat": 5.465917,
    "lng": 100.391167
  },
  {
    "name": "Sultan Ismail Petra",
    "city": "Kota Bahru",
    "country": "Malaysia",
    "code1": "KBR",
    "code2": "WMKC",
    "lat": 6.16685,
    "lng": 102.293014
  },
  {
    "name": "Kuantan",
    "city": "Kuantan",
    "country": "Malaysia",
    "code1": "KUA",
    "code2": "WMKD",
    "lat": 3.775389,
    "lng": 103.209056
  },
  {
    "name": "Kerteh",
    "city": "Kerteh",
    "country": "Malaysia",
    "code1": "KTE",
    "code2": "WMKE",
    "lat": 4.537222,
    "lng": 103.426756
  },
  {
    "name": "Simpang",
    "city": "Simpang",
    "country": "Malaysia",
    "code1": "",
    "code2": "WMKF",
    "lat": 3.11225,
    "lng": 101.70275
  },
  {
    "name": "Sultan Azlan Shah",
    "city": "Ipoh",
    "country": "Malaysia",
    "code1": "IPH",
    "code2": "WMKI",
    "lat": 4.567972,
    "lng": 101.092194
  },
  {
    "name": "Sultan Ismail",
    "city": "Johor Bahru",
    "country": "Malaysia",
    "code1": "JHB",
    "code2": "WMKJ",
    "lat": 1.641308,
    "lng": 103.669619
  },
  {
    "name": "Kuala Lumpur Intl",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "code1": "KUL",
    "code2": "WMKK",
    "lat": 2.745578,
    "lng": 101.709917
  },
  {
    "name": "Langkawi Intl",
    "city": "Pulau",
    "country": "Malaysia",
    "code1": "LGK",
    "code2": "WMKL",
    "lat": 6.329728,
    "lng": 99.728667
  },
  {
    "name": "Malacca",
    "city": "Malacca",
    "country": "Malaysia",
    "code1": "MKZ",
    "code2": "WMKM",
    "lat": 2.263361,
    "lng": 102.251553
  },
  {
    "name": "Sultan Mahmud",
    "city": "Kuala Terengganu",
    "country": "Malaysia",
    "code1": "TGG",
    "code2": "WMKN",
    "lat": 5.382639,
    "lng": 103.10336
  },
  {
    "name": "Penang Intl",
    "city": "Penang",
    "country": "Malaysia",
    "code1": "PEN",
    "code2": "WMKP",
    "lat": 5.297139,
    "lng": 100.276864
  },
  {
    "name": "Suai",
    "city": "Suai",
    "country": "East Timor",
    "code1": "",
    "code2": "WPDB",
    "lat": -9.303306,
    "lng": 125.286753
  },
  {
    "name": "Presidente Nicolau Lobato Intl",
    "city": "Dili",
    "country": "East Timor",
    "code1": "DIL",
    "code2": "WPDL",
    "lat": -8.546553,
    "lng": 125.524719
  },
  {
    "name": "Cakung",
    "city": "Baucau",
    "country": "East Timor",
    "code1": "",
    "code2": "WPEC",
    "lat": -8.485547,
    "lng": 126.399389
  },
  {
    "name": "Sembawang",
    "city": "Sembawang",
    "country": "Singapore",
    "code1": "",
    "code2": "WSAG",
    "lat": 1.425264,
    "lng": 103.812806
  },
  {
    "name": "Paya Lebar",
    "city": "Paya Lebar",
    "country": "Singapore",
    "code1": "QPG",
    "code2": "WSAP",
    "lat": 1.360417,
    "lng": 103.90953
  },
  {
    "name": "Tengah",
    "city": "Tengah",
    "country": "Singapore",
    "code1": "",
    "code2": "WSAT",
    "lat": 1.387258,
    "lng": 103.708719
  },
  {
    "name": "Seletar",
    "city": "Singapore",
    "country": "Singapore",
    "code1": "XSP",
    "code2": "WSSL",
    "lat": 1.41695,
    "lng": 103.867653
  },
  {
    "name": "Changi Intl",
    "city": "Singapore",
    "country": "Singapore",
    "code1": "SIN",
    "code2": "WSSS",
    "lat": 1.350189,
    "lng": 103.994433
  },
  {
    "name": "Brisbane Archerfield",
    "city": "Brisbane",
    "country": "Australia",
    "code1": "",
    "code2": "YBAF",
    "lat": -27.570278,
    "lng": 153.008056
  },
  {
    "name": "Bamaga Injinoo",
    "city": "Amberley",
    "country": "Australia",
    "code1": "ABM",
    "code2": "YBAM",
    "lat": -10.950833,
    "lng": 142.459444
  },
  {
    "name": "Alice Springs",
    "city": "Alice Springs",
    "country": "Australia",
    "code1": "ASP",
    "code2": "YBAS",
    "lat": -23.806667,
    "lng": 133.902222
  },
  {
    "name": "Brisbane Intl",
    "city": "Brisbane",
    "country": "Australia",
    "code1": "BNE",
    "code2": "YBBN",
    "lat": -27.384167,
    "lng": 153.1175
  },
  {
    "name": "Gold Coast",
    "city": "Coolangatta",
    "country": "Australia",
    "code1": "OOL",
    "code2": "YBCG",
    "lat": -28.164444,
    "lng": 153.504722
  },
  {
    "name": "Cairns Intl",
    "city": "Cairns",
    "country": "Australia",
    "code1": "CNS",
    "code2": "YBCS",
    "lat": -16.885833,
    "lng": 145.755278
  },
  {
    "name": "Charleville",
    "city": "Charlieville",
    "country": "Australia",
    "code1": "CTL",
    "code2": "YBCV",
    "lat": -26.413334,
    "lng": 146.2625
  },
  {
    "name": "Mount Isa",
    "city": "Mount Isa",
    "country": "Australia",
    "code1": "ISA",
    "code2": "YBMA",
    "lat": -20.663889,
    "lng": 139.488611
  },
  {
    "name": "Sunshine Coast",
    "city": "Maroochydore",
    "country": "Australia",
    "code1": "MCY",
    "code2": "YBMC",
    "lat": -26.603333,
    "lng": 153.091111
  },
  {
    "name": "Mackay",
    "city": "Mackay",
    "country": "Australia",
    "code1": "MKY",
    "code2": "YBMK",
    "lat": -21.171667,
    "lng": 149.179722
  },
  {
    "name": "Proserpine Whitsunday Coast",
    "city": "Prosserpine",
    "country": "Australia",
    "code1": "PPP",
    "code2": "YBPN",
    "lat": -20.495,
    "lng": 148.552222
  },
  {
    "name": "Rockhampton",
    "city": "Rockhampton",
    "country": "Australia",
    "code1": "ROK",
    "code2": "YBRK",
    "lat": -23.381944,
    "lng": 150.475278
  },
  {
    "name": "Townsville",
    "city": "Townsville",
    "country": "Australia",
    "code1": "TSV",
    "code2": "YBTL",
    "lat": -19.2525,
    "lng": 146.765278
  },
  {
    "name": "Weipa",
    "city": "Weipa",
    "country": "Australia",
    "code1": "WEI",
    "code2": "YBWP",
    "lat": -12.678611,
    "lng": 141.925278
  },
  {
    "name": "Avalon",
    "city": "Avalon",
    "country": "Australia",
    "code1": "AVV",
    "code2": "YMAV",
    "lat": -38.039444,
    "lng": 144.469444
  },
  {
    "name": "Albury",
    "city": "Albury",
    "country": "Australia",
    "code1": "ABX",
    "code2": "YMAY",
    "lat": -36.067778,
    "lng": 146.958056
  },
  {
    "name": "Melbourne Essendon",
    "city": "Melbourne",
    "country": "Australia",
    "code1": "MEB",
    "code2": "YMEN",
    "lat": -37.728056,
    "lng": 144.901944
  },
  {
    "name": "East Sale",
    "city": "East Sale",
    "country": "Australia",
    "code1": "",
    "code2": "YMES",
    "lat": -38.098889,
    "lng": 147.149444
  },
  {
    "name": "Hobart",
    "city": "Hobart",
    "country": "Australia",
    "code1": "HBA",
    "code2": "YMHB",
    "lat": -42.836111,
    "lng": 147.510278
  },
  {
    "name": "Launceston",
    "city": "Launceston",
    "country": "Australia",
    "code1": "LST",
    "code2": "YMLT",
    "lat": -41.545278,
    "lng": 147.214167
  },
  {
    "name": "Melbourne Moorabbin",
    "city": "Melbourne",
    "country": "Australia",
    "code1": "MBW",
    "code2": "YMMB",
    "lat": -37.975833,
    "lng": 145.102222
  },
  {
    "name": "Melbourne Intl",
    "city": "Melbourne",
    "country": "Australia",
    "code1": "MEL",
    "code2": "YMML",
    "lat": -37.673333,
    "lng": 144.843333
  },
  {
    "name": "Point Cook",
    "city": "Point Cook",
    "country": "Australia",
    "code1": "",
    "code2": "YMPC",
    "lat": -37.932222,
    "lng": 144.753333
  },
  {
    "name": "Adelaide Intl",
    "city": "Adelaide",
    "country": "Australia",
    "code1": "ADL",
    "code2": "YPAD",
    "lat": -34.945,
    "lng": 138.530556
  },
  {
    "name": "Edinburgh",
    "city": "Edinburgh",
    "country": "Australia",
    "code1": "",
    "code2": "YPED",
    "lat": -34.7025,
    "lng": 138.620833
  },
  {
    "name": "Perth Jandakot",
    "city": "Perth",
    "country": "Australia",
    "code1": "JAD",
    "code2": "YPJT",
    "lat": -32.0975,
    "lng": 115.881111
  },
  {
    "name": "Karratha",
    "city": "Karratha",
    "country": "Australia",
    "code1": "KTA",
    "code2": "YPKA",
    "lat": -20.712222,
    "lng": 116.773333
  },
  {
    "name": "Kalgoorlie Boulder",
    "city": "Kalgoorlie",
    "country": "Australia",
    "code1": "KGI",
    "code2": "YPKG",
    "lat": -30.789444,
    "lng": 121.461667
  },
  {
    "name": "Kununurra",
    "city": "Kununurra",
    "country": "Australia",
    "code1": "KNX",
    "code2": "YPKU",
    "lat": -15.778056,
    "lng": 128.7075
  },
  {
    "name": "Learmonth",
    "city": "Learmonth",
    "country": "Australia",
    "code1": "LEA",
    "code2": "YPLM",
    "lat": -22.235556,
    "lng": 114.088611
  },
  {
    "name": "Port Hedland Intl",
    "city": "Port Hedland",
    "country": "Australia",
    "code1": "PHE",
    "code2": "YPPD",
    "lat": -20.377778,
    "lng": 118.626389
  },
  {
    "name": "Adelaide Parafield",
    "city": "Adelaide",
    "country": "Australia",
    "code1": "",
    "code2": "YPPF",
    "lat": -34.793333,
    "lng": 138.633056
  },
  {
    "name": "Perth Intl",
    "city": "Perth",
    "country": "Australia",
    "code1": "PER",
    "code2": "YPPH",
    "lat": -31.940278,
    "lng": 115.966944
  },
  {
    "name": "Woomera",
    "city": "Woomera",
    "country": "Australia",
    "code1": "UMR",
    "code2": "YPWR",
    "lat": -31.144167,
    "lng": 136.816944
  },
  {
    "name": "Christmas Island",
    "city": "Christmas Island",
    "country": "Christmas Island",
    "code1": "XCH",
    "code2": "YPXM",
    "lat": -10.450556,
    "lng": 105.690278
  },
  {
    "name": "Sydney Bankstown",
    "city": "Sydney",
    "country": "Australia",
    "code1": "BWU",
    "code2": "YSBK",
    "lat": -33.924444,
    "lng": 150.988333
  },
  {
    "name": "Canberra",
    "city": "Canberra",
    "country": "Australia",
    "code1": "CBR",
    "code2": "YSCB",
    "lat": -35.306944,
    "lng": 149.195
  },
  {
    "name": "Coffs Harbour",
    "city": "Coff's Harbour",
    "country": "Australia",
    "code1": "CFS",
    "code2": "YSCH",
    "lat": -30.320556,
    "lng": 153.116389
  },
  {
    "name": "Camden",
    "city": "Camden",
    "country": "Australia",
    "code1": "CDU",
    "code2": "YSCN",
    "lat": -34.040278,
    "lng": 150.687222
  },
  {
    "name": "Dubbo",
    "city": "Dubbo",
    "country": "Australia",
    "code1": "DBO",
    "code2": "YSDU",
    "lat": -32.216667,
    "lng": 148.574722
  },
  {
    "name": "Norfolk Island Intl",
    "city": "Norfolk Island",
    "country": "Norfolk Island",
    "code1": "NLK",
    "code2": "YSNF",
    "lat": -29.041625,
    "lng": 167.938742
  },
  {
    "name": "Richmond",
    "city": "Richmond",
    "country": "Australia",
    "code1": "RCM",
    "code2": "YSRI",
    "lat": -33.600556,
    "lng": 150.780833
  },
  {
    "name": "Sydney Intl",
    "city": "Sydney",
    "country": "Australia",
    "code1": "SYD",
    "code2": "YSSY",
    "lat": -33.946111,
    "lng": 151.177222
  },
  {
    "name": "Tamworth",
    "city": "Tamworth",
    "country": "Australia",
    "code1": "TMW",
    "code2": "YSTW",
    "lat": -31.083889,
    "lng": 150.846667
  },
  {
    "name": "Wagga Wagga",
    "city": "Wagga Wagga",
    "country": "Australia",
    "code1": "WGA",
    "code2": "YSWG",
    "lat": -35.165278,
    "lng": 147.466389
  },
  {
    "name": "Capital Intl",
    "city": "Beijing",
    "country": "China",
    "code1": "PEK",
    "code2": "ZBAA",
    "lat": 40.080111,
    "lng": 116.584556
  },
  {
    "name": "Hongyuan Airfield",
    "city": "Hongyuan",
    "country": "China",
    "code1": "",
    "code2": "\\N",
    "lat": 32.800428,
    "lng": 102.534785
  },
  {
    "name": "Dongshan",
    "city": "Hailar",
    "country": "China",
    "code1": "HLD",
    "code2": "ZBLA",
    "lat": 49.204997,
    "lng": 119.825
  },
  {
    "name": "Binhai",
    "city": "Tianjin",
    "country": "China",
    "code1": "TSN",
    "code2": "ZBTJ",
    "lat": 39.124353,
    "lng": 117.346183
  },
  {
    "name": "Wusu",
    "city": "Taiyuan",
    "country": "China",
    "code1": "TYN",
    "code2": "ZBYN",
    "lat": 37.746897,
    "lng": 112.628428
  },
  {
    "name": "Baiyun Intl",
    "city": "Guangzhou",
    "country": "China",
    "code1": "CAN",
    "code2": "ZGGG",
    "lat": 23.392436,
    "lng": 113.298786
  },
  {
    "name": "Huanghua",
    "city": "Changcha",
    "country": "China",
    "code1": "CSX",
    "code2": "ZGHA",
    "lat": 28.189158,
    "lng": 113.219633
  },
  {
    "name": "Liangjiang",
    "city": "Guilin",
    "country": "China",
    "code1": "KWL",
    "code2": "ZGKL",
    "lat": 25.218106,
    "lng": 110.039197
  },
  {
    "name": "Wuxu",
    "city": "Nanning",
    "country": "China",
    "code1": "NNG",
    "code2": "ZGNN",
    "lat": 22.608267,
    "lng": 108.172442
  },
  {
    "name": "Baoan Intl",
    "city": "Shenzhen",
    "country": "China",
    "code1": "SZX",
    "code2": "ZGSZ",
    "lat": 22.639258,
    "lng": 113.810664
  },
  {
    "name": "Xinzheng",
    "city": "Zhengzhou",
    "country": "China",
    "code1": "CGO",
    "code2": "ZHCC",
    "lat": 34.519672,
    "lng": 113.840889
  },
  {
    "name": "Tianhe",
    "city": "Wuhan",
    "country": "China",
    "code1": "WUH",
    "code2": "ZHHH",
    "lat": 30.783758,
    "lng": 114.2081
  },
  {
    "name": "Pyongyang Intl",
    "city": "Pyongyang",
    "country": "Korea",
    "code1": "FNJ",
    "code2": "ZKPY",
    "lat": 39.224061,
    "lng": 125.67015
  },
  {
    "name": "Zhongchuan",
    "city": "Lanzhou",
    "country": "China",
    "code1": "ZGC",
    "code2": "ZLLL",
    "lat": 36.515242,
    "lng": 103.620775
  },
  {
    "name": "Xianyang",
    "city": "Xi'an",
    "country": "China",
    "code1": "XIY",
    "code2": "ZLXY",
    "lat": 34.447119,
    "lng": 108.751592
  },
  {
    "name": "Chinggis Khaan Intl",
    "city": "Ulan Bator",
    "country": "Mongolia",
    "code1": "ULN",
    "code2": "ZMUB",
    "lat": 47.843056,
    "lng": 106.766639
  },
  {
    "name": "Gasa",
    "city": "Jinghonggasa",
    "country": "China",
    "code1": "",
    "code2": "ZPJH",
    "lat": 21.973914,
    "lng": 100.759611
  },
  {
    "name": "Wujiaba",
    "city": "Kunming",
    "country": "China",
    "code1": "KMG",
    "code2": "ZPPP",
    "lat": 24.992364,
    "lng": 102.743536
  },
  {
    "name": "Gaoqi",
    "city": "Xiamen",
    "country": "China",
    "code1": "XMN",
    "code2": "ZSAM",
    "lat": 24.544036,
    "lng": 118.127739
  },
  {
    "name": "Changbei Intl",
    "city": "Nanchang",
    "country": "China",
    "code1": "KHN",
    "code2": "ZSCN",
    "lat": 28.865,
    "lng": 115.9
  },
  {
    "name": "Changle",
    "city": "Fuzhou",
    "country": "China",
    "code1": "FOC",
    "code2": "ZSFZ",
    "lat": 25.935064,
    "lng": 119.663272
  },
  {
    "name": "Xiaoshan",
    "city": "Hangzhou",
    "country": "China",
    "code1": "HGH",
    "code2": "ZSHC",
    "lat": 30.229503,
    "lng": 120.434453
  },
  {
    "name": "Lishe",
    "city": "Ninbo",
    "country": "China",
    "code1": "NGB",
    "code2": "ZSNB",
    "lat": 29.826683,
    "lng": 121.461906
  },
  {
    "name": "Lukou",
    "city": "Nanjing",
    "country": "China",
    "code1": "NKG",
    "code2": "ZSNJ",
    "lat": 31.742042,
    "lng": 118.862025
  },
  {
    "name": "Luogang",
    "city": "Hefei",
    "country": "China",
    "code1": "HFE",
    "code2": "ZSOF",
    "lat": 31.780019,
    "lng": 117.298436
  },
  {
    "name": "Liuting",
    "city": "Qingdao",
    "country": "China",
    "code1": "TAO",
    "code2": "ZSQD",
    "lat": 36.266108,
    "lng": 120.374436
  },
  {
    "name": "Hongqiao Intl",
    "city": "Shanghai",
    "country": "China",
    "code1": "SHA",
    "code2": "ZSSS",
    "lat": 31.197875,
    "lng": 121.336319
  },
  {
    "name": "Laishan",
    "city": "Yantai",
    "country": "China",
    "code1": "YNT",
    "code2": "ZSYT",
    "lat": 37.401667,
    "lng": 121.371667
  },
  {
    "name": "Jiangbei",
    "city": "Chongqing",
    "country": "China",
    "code1": "CKG",
    "code2": "ZUCK",
    "lat": 29.719217,
    "lng": 106.641678
  },
  {
    "name": "Longdongbao",
    "city": "Guiyang",
    "country": "China",
    "code1": "KWE",
    "code2": "ZUGY",
    "lat": 26.538522,
    "lng": 106.800703
  },
  {
    "name": "Shuangliu",
    "city": "Chengdu",
    "country": "China",
    "code1": "CTU",
    "code2": "ZUUU",
    "lat": 30.578528,
    "lng": 103.947086
  },
  {
    "name": "Qingshan",
    "city": "Xichang",
    "country": "China",
    "code1": "XIC",
    "code2": "ZUXC",
    "lat": 27.989083,
    "lng": 102.184361
  },
  {
    "name": "Kashi",
    "city": "Kashi",
    "country": "China",
    "code1": "KHG",
    "code2": "ZWSH",
    "lat": 39.542922,
    "lng": 76.019956
  },
  {
    "name": "Hotan",
    "city": "Hotan",
    "country": "China",
    "code1": "HTN",
    "code2": "ZWTN",
    "lat": 37.038522,
    "lng": 79.864933
  },
  {
    "name": "Diwopu",
    "city": "Urumqi",
    "country": "China",
    "code1": "URC",
    "code2": "ZWWW",
    "lat": 43.907106,
    "lng": 87.474244
  },
  {
    "name": "Taiping",
    "city": "Harbin",
    "country": "China",
    "code1": "HRB",
    "code2": "ZYHB",
    "lat": 45.623403,
    "lng": 126.250328
  },
  {
    "name": "Hohenems",
    "city": "Hohenems",
    "country": "Austria",
    "code1": "HOJ",
    "code2": "LOIH",
    "lat": 47.385,
    "lng": 9.7
  },
  {
    "name": "Hailang",
    "city": "Mudanjiang",
    "country": "China",
    "code1": "",
    "code2": "ZYMD",
    "lat": 44.524072,
    "lng": 129.568972
  },
  {
    "name": "Zhoushuizi",
    "city": "Dalian",
    "country": "China",
    "code1": "DLC",
    "code2": "ZYTL",
    "lat": 38.965667,
    "lng": 121.5386
  },
  {
    "name": "Pudong",
    "city": "Shanghai",
    "country": "China",
    "code1": "PVG",
    "code2": "ZSPD",
    "lat": 31.143378,
    "lng": 121.805214
  },
  {
    "name": "Pulau Tioman",
    "city": "Tioman",
    "country": "Malaysia",
    "code1": "TOD",
    "code2": "WMBT",
    "lat": 2.818183,
    "lng": 104.160019
  },
  {
    "name": "Subang-Sultan Abdul Aziz Shah Intl",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "code1": "SZB",
    "code2": "WMSA",
    "lat": 3.130583,
    "lng": 101.549333
  },
  {
    "name": "Noto",
    "city": "Wajima",
    "country": "Japan",
    "code1": "NTQ",
    "code2": "RJNW",
    "lat": 37.293097,
    "lng": 136.961853
  },
  {
    "name": "Borg El Arab Intl",
    "city": "Alexandria",
    "country": "Egypt",
    "code1": "HBE",
    "code2": "HEBA",
    "lat": 30.917669,
    "lng": 29.696408
  },
  {
    "name": "Barter Island Lrrs",
    "city": "Barter Island",
    "country": "United States",
    "code1": "BTI",
    "code2": "PABA",
    "lat": 70.133989,
    "lng": -143.581867
  },
  {
    "name": "Wainwright As",
    "city": "Fort Wainwright",
    "country": "United States",
    "code1": "K03",
    "code2": "PAWT",
    "lat": 70.613378,
    "lng": -159.86035
  },
  {
    "name": "Cape Lisburne Lrrs",
    "city": "Cape Lisburne",
    "country": "United States",
    "code1": "LUR",
    "code2": "PALU",
    "lat": 68.875133,
    "lng": -166.110022
  },
  {
    "name": "Point Lay Lrrs",
    "city": "Point Lay",
    "country": "United States",
    "code1": "PIZ",
    "code2": "PPIZ",
    "lat": 69.732875,
    "lng": -163.005342
  },
  {
    "name": "Hilo Intl",
    "city": "Hilo",
    "country": "United States",
    "code1": "ITO",
    "code2": "PHTO",
    "lat": 19.721375,
    "lng": -155.048469
  },
  {
    "name": "Executive",
    "city": "Orlando",
    "country": "United States",
    "code1": "ORL",
    "code2": "KORL",
    "lat": 28.545464,
    "lng": -81.332936
  },
  {
    "name": "Bettles",
    "city": "Bettles",
    "country": "United States",
    "code1": "BTT",
    "code2": "PABT",
    "lat": 66.913944,
    "lng": -151.529056
  },
  {
    "name": "Clear",
    "city": "Clear Mews",
    "country": "United States",
    "code1": "Z84",
    "code2": "PACL",
    "lat": 64.301203,
    "lng": -149.120144
  },
  {
    "name": "Indian Mountain Lrrs",
    "city": "Indian Mountains",
    "country": "United States",
    "code1": "UTO",
    "code2": "PAIM",
    "lat": 65.992794,
    "lng": -153.704289
  },
  {
    "name": "Fort Yukon",
    "city": "Fort Yukon",
    "country": "United States",
    "code1": "FYU",
    "code2": "PFYU",
    "lat": 66.571492,
    "lng": -145.250417
  },
  {
    "name": "Sparrevohn Lrrs",
    "city": "Sparrevohn",
    "country": "United States",
    "code1": "SVW",
    "code2": "PASV",
    "lat": 61.097369,
    "lng": -155.574228
  },
  {
    "name": "Bryant Ahp",
    "city": "Fort Richardson",
    "country": "United States",
    "code1": "FRN",
    "code2": "PAFR",
    "lat": 61.266381,
    "lng": -149.653119
  },
  {
    "name": "Tatalina Lrrs",
    "city": "Tatalina",
    "country": "United States",
    "code1": "TLJ",
    "code2": "PATL",
    "lat": 62.894369,
    "lng": -155.976525
  },
  {
    "name": "Cape Romanzof Lrrs",
    "city": "Cape Romanzof",
    "country": "United States",
    "code1": "CZF",
    "code2": "PACZ",
    "lat": 61.780297,
    "lng": -166.038747
  },
  {
    "name": "Laurence G Hanscom Fld",
    "city": "Bedford",
    "country": "United States",
    "code1": "BED",
    "code2": "KBED",
    "lat": 42.469953,
    "lng": -71.289031
  },
  {
    "name": "St Paul Island",
    "city": "St. Paul Island",
    "country": "United States",
    "code1": "SNP",
    "code2": "PASN",
    "lat": 57.167333,
    "lng": -170.220444
  },
  {
    "name": "Cape Newenham Lrrs",
    "city": "Cape Newenham",
    "country": "United States",
    "code1": "EHM",
    "code2": "PAEH",
    "lat": 58.646428,
    "lng": -162.062778
  },
  {
    "name": "St George",
    "city": "Point Barrow",
    "country": "United States",
    "code1": "PBV",
    "code2": "PAPB",
    "lat": 56.578344,
    "lng": -169.661611
  },
  {
    "name": "Iliamna",
    "city": "Iliamna",
    "country": "United States",
    "code1": "ILI",
    "code2": "PAIL",
    "lat": 59.754356,
    "lng": -154.910961
  },
  {
    "name": "Platinum",
    "city": "Port Moller",
    "country": "United States",
    "code1": "PTU",
    "code2": "PAPM",
    "lat": 59.011356,
    "lng": -161.819664
  },
  {
    "name": "Big Mountain Afs",
    "city": "Big Mountain",
    "country": "United States",
    "code1": "BMX",
    "code2": "PABM",
    "lat": 59.361247,
    "lng": -155.258822
  },
  {
    "name": "Oscoda Wurtsmith",
    "city": "Oscoda",
    "country": "United States",
    "code1": "OSC",
    "code2": "KOSC",
    "lat": 44.451558,
    "lng": -83.394053
  },
  {
    "name": "Marina Muni",
    "city": "Fort Ord",
    "country": "United States",
    "code1": "OAR",
    "code2": "KOAR",
    "lat": 36.681878,
    "lng": -121.762347
  },
  {
    "name": "Sacramento Mather",
    "city": "Sacramento",
    "country": "United States",
    "code1": "MHR",
    "code2": "KMHR",
    "lat": 38.553897,
    "lng": -121.297592
  },
  {
    "name": "Bicycle Lake Aaf",
    "city": "Fort Irwin",
    "country": "United States",
    "code1": "BYS",
    "code2": "KBYS",
    "lat": 35.280531,
    "lng": -116.630031
  },
  {
    "name": "Twentynine Palms Eaf",
    "city": "Twenty Nine Palms",
    "country": "United States",
    "code1": "NXP",
    "code2": "KNXP",
    "lat": 34.296161,
    "lng": -116.162203
  },
  {
    "name": "Fort Smith Rgnl",
    "city": "Fort Smith",
    "country": "United States",
    "code1": "FSM",
    "code2": "KFSM",
    "lat": 35.336583,
    "lng": -94.367444
  },
  {
    "name": "Merrill Fld",
    "city": "Anchorage",
    "country": "United States",
    "code1": "MRI",
    "code2": "PAMR",
    "lat": 61.213544,
    "lng": -149.844447
  },
  {
    "name": "Grants Milan Muni",
    "city": "Grants",
    "country": "United States",
    "code1": "GNT",
    "code2": "KGNT",
    "lat": 35.167286,
    "lng": -107.901989
  },
  {
    "name": "Ponca City Rgnl",
    "city": "Ponca City",
    "country": "United States",
    "code1": "PNC",
    "code2": "KPNC",
    "lat": 36.731958,
    "lng": -97.099781
  },
  {
    "name": "Hunter Aaf",
    "city": "Hunter Aaf",
    "country": "United States",
    "code1": "SVN",
    "code2": "KSVN",
    "lat": 32.01,
    "lng": -81.145683
  },
  {
    "name": "Grand Forks Intl",
    "city": "Grand Forks",
    "country": "United States",
    "code1": "GFK",
    "code2": "KGFK",
    "lat": 47.949256,
    "lng": -97.176111
  },
  {
    "name": "Grider Fld",
    "city": "Pine Bluff",
    "country": "United States",
    "code1": "PBF",
    "code2": "KPBF",
    "lat": 34.173142,
    "lng": -91.935597
  },
  {
    "name": "Whiting Fld Nas North",
    "city": "Milton",
    "country": "United States",
    "code1": "NSE",
    "code2": "KNSE",
    "lat": 30.724167,
    "lng": -87.021944
  },
  {
    "name": "Hana",
    "city": "Hana",
    "country": "United States",
    "code1": "HNM",
    "code2": "PHHN",
    "lat": 20.795636,
    "lng": -156.014439
  },
  {
    "name": "Ernest A Love Fld",
    "city": "Prescott",
    "country": "United States",
    "code1": "PRC",
    "code2": "KPRC",
    "lat": 34.654472,
    "lng": -112.419583
  },
  {
    "name": "Trenton Mercer",
    "city": "Trenton",
    "country": "United States",
    "code1": "TTN",
    "code2": "KTTN",
    "lat": 40.276692,
    "lng": -74.813469
  },
  {
    "name": "General Edward Lawrence Logan Intl",
    "city": "Boston",
    "country": "United States",
    "code1": "BOS",
    "code2": "KBOS",
    "lat": 42.364347,
    "lng": -71.005181
  },
  {
    "name": "Travis Afb",
    "city": "Fairfield",
    "country": "United States",
    "code1": "SUU",
    "code2": "KSUU",
    "lat": 38.262692,
    "lng": -121.927464
  },
  {
    "name": "Griffiss Afld",
    "city": "Rome",
    "country": "United States",
    "code1": "RME",
    "code2": "KRME",
    "lat": 43.2338,
    "lng": -75.407033
  },
  {
    "name": "Wendover",
    "city": "Wendover",
    "country": "United States",
    "code1": "ENV",
    "code2": "KENV",
    "lat": 40.718694,
    "lng": -114.030889
  },
  {
    "name": "Mobile Downtown",
    "city": "Mobile",
    "country": "United States",
    "code1": "BFM",
    "code2": "KBFM",
    "lat": 30.626783,
    "lng": -88.068092
  },
  {
    "name": "Metropolitan Oakland Intl",
    "city": "Oakland",
    "country": "United States",
    "code1": "OAK",
    "code2": "KOAK",
    "lat": 37.721278,
    "lng": -122.220722
  },
  {
    "name": "Eppley Afld",
    "city": "Omaha",
    "country": "United States",
    "code1": "OMA",
    "code2": "KOMA",
    "lat": 41.303167,
    "lng": -95.894069
  },
  {
    "name": "Port Angeles Cgas",
    "city": "Port Angeles",
    "country": "United States",
    "code1": "NOW",
    "code2": "KNOW",
    "lat": 48.141481,
    "lng": -123.414075
  },
  {
    "name": "Kahului",
    "city": "Kahului",
    "country": "United States",
    "code1": "OGG",
    "code2": "PHOG",
    "lat": 20.89865,
    "lng": -156.430458
  },
  {
    "name": "Wichita Mid Continent",
    "city": "Wichita",
    "country": "United States",
    "code1": "ICT",
    "code2": "KICT",
    "lat": 37.649944,
    "lng": -97.433056
  },
  {
    "name": "Kansas City Intl",
    "city": "Kansas City",
    "country": "United States",
    "code1": "MCI",
    "code2": "KMCI",
    "lat": 39.297606,
    "lng": -94.713905
  },
  {
    "name": "Dane Co Rgnl Truax Fld",
    "city": "Madison",
    "country": "United States",
    "code1": "MSN",
    "code2": "KMSN",
    "lat": 43.139858,
    "lng": -89.337514
  },
  {
    "name": "Dillingham",
    "city": "Dillingham",
    "country": "United States",
    "code1": "DLG",
    "code2": "PADL",
    "lat": 59.044667,
    "lng": -158.5055
  },
  {
    "name": "Boone Co",
    "city": "Harrison",
    "country": "United States",
    "code1": "HRO",
    "code2": "KHRO",
    "lat": 36.261519,
    "lng": -93.154728
  },
  {
    "name": "Phoenix Sky Harbor Intl",
    "city": "Phoenix",
    "country": "United States",
    "code1": "PHX",
    "code2": "KPHX",
    "lat": 33.434278,
    "lng": -112.011583
  },
  {
    "name": "Bangor Intl",
    "city": "Bangor",
    "country": "United States",
    "code1": "BGR",
    "code2": "KBGR",
    "lat": 44.807444,
    "lng": -68.828139
  },
  {
    "name": "Fort Lauderdale Executive",
    "city": "Fort Lauderdale",
    "country": "United States",
    "code1": "FXE",
    "code2": "KFXE",
    "lat": 26.197281,
    "lng": -80.170706
  },
  {
    "name": "East Texas Rgnl",
    "city": "Longview",
    "country": "United States",
    "code1": "GGG",
    "code2": "KGGG",
    "lat": 32.384014,
    "lng": -94.711486
  },
  {
    "name": "Anderson Rgnl",
    "city": "Andersen",
    "country": "United States",
    "code1": "AND",
    "code2": "KAND",
    "lat": 34.494583,
    "lng": -82.709389
  },
  {
    "name": "Spokane Intl",
    "city": "Spokane",
    "country": "United States",
    "code1": "GEG",
    "code2": "KGEG",
    "lat": 47.619861,
    "lng": -117.533833
  },
  {
    "name": "North Perry",
    "city": "Hollywood",
    "country": "United States",
    "code1": "HWO",
    "code2": "KHWO",
    "lat": 26.001222,
    "lng": -80.240722
  },
  {
    "name": "San Francisco Intl",
    "city": "San Francisco",
    "country": "United States",
    "code1": "SFO",
    "code2": "KSFO",
    "lat": 37.618972,
    "lng": -122.374889
  },
  {
    "name": "Cut Bank Muni",
    "city": "Cutbank",
    "country": "United States",
    "code1": "CTB",
    "code2": "KCTB",
    "lat": 48.608353,
    "lng": -112.376144
  },
  {
    "name": "Acadiana Rgnl",
    "city": "Louisiana",
    "country": "United States",
    "code1": "ARA",
    "code2": "KARA",
    "lat": 30.037758,
    "lng": -91.883896
  },
  {
    "name": "Gainesville Rgnl",
    "city": "Gainesville",
    "country": "United States",
    "code1": "GNV",
    "code2": "KGNV",
    "lat": 29.690056,
    "lng": -82.271778
  },
  {
    "name": "Memphis Intl",
    "city": "Memphis",
    "country": "United States",
    "code1": "MEM",
    "code2": "KMEM",
    "lat": 35.042417,
    "lng": -89.976667
  },
  {
    "name": "Bisbee Douglas Intl",
    "city": "Douglas",
    "country": "United States",
    "code1": "DUG",
    "code2": "KDUG",
    "lat": 31.469028,
    "lng": -109.603667
  },
  {
    "name": "Allen Aaf",
    "city": "Delta Junction",
    "country": "United States",
    "code1": "BIG",
    "code2": "PABI",
    "lat": 63.994547,
    "lng": -145.721642
  },
  {
    "name": "Tstc Waco",
    "city": "Waco",
    "country": "United States",
    "code1": "CNW",
    "code2": "KCNW",
    "lat": 31.637831,
    "lng": -97.074139
  },
  {
    "name": "Annette Island",
    "city": "Annette Island",
    "country": "United States",
    "code1": "ANN",
    "code2": "PANT",
    "lat": 55.042436,
    "lng": -131.572233
  },
  {
    "name": "Caribou Muni",
    "city": "Caribou",
    "country": "United States",
    "code1": "CAR",
    "code2": "KCAR",
    "lat": 46.8715,
    "lng": -68.017917
  },
  {
    "name": "Little Rock Afb",
    "city": "Jacksonville",
    "country": "United States",
    "code1": "LRF",
    "code2": "KLRF",
    "lat": 34.916944,
    "lng": -92.149722
  },
  {
    "name": "Redstone Aaf",
    "city": "Redstone",
    "country": "United States",
    "code1": "HUA",
    "code2": "KHUA",
    "lat": 34.678653,
    "lng": -86.684781
  },
  {
    "name": "Pope Field",
    "city": "Fort Bragg",
    "country": "United States",
    "code1": "POB",
    "code2": "KPOB",
    "lat": 35.170883,
    "lng": -79.014472
  },
  {
    "name": "Dalhart Muni",
    "city": "Dalhart",
    "country": "United States",
    "code1": "DHT",
    "code2": "KDHT",
    "lat": 36.022586,
    "lng": -102.547278
  },
  {
    "name": "Laughlin Afb",
    "city": "Del Rio",
    "country": "United States",
    "code1": "DLF",
    "code2": "KDLF",
    "lat": 29.359486,
    "lng": -100.777975
  },
  {
    "name": "Los Angeles Intl",
    "city": "Los Angeles",
    "country": "United States",
    "code1": "LAX",
    "code2": "KLAX",
    "lat": 33.942536,
    "lng": -118.408075
  },
  {
    "name": "Anniston Metro",
    "city": "Anniston",
    "country": "United States",
    "code1": "ANB",
    "code2": "KANB",
    "lat": 33.588167,
    "lng": -85.858111
  },
  {
    "name": "Cleveland Hopkins Intl",
    "city": "Cleveland",
    "country": "United States",
    "code1": "CLE",
    "code2": "KCLE",
    "lat": 41.411689,
    "lng": -81.849794
  },
  {
    "name": "Dover Afb",
    "city": "Dover",
    "country": "United States",
    "code1": "DOV",
    "code2": "KDOV",
    "lat": 39.129539,
    "lng": -75.465958
  },
  {
    "name": "Cincinnati Northern Kentucky Intl",
    "city": "Cincinnati",
    "country": "United States",
    "code1": "CVG",
    "code2": "KCVG",
    "lat": 39.048836,
    "lng": -84.667822
  },
  {
    "name": "Tipton",
    "city": "Fort Meade",
    "country": "United States",
    "code1": "FME",
    "code2": "KFME",
    "lat": 39.085386,
    "lng": -76.759414
  },
  {
    "name": "China Lake Naws",
    "city": "China",
    "country": "United States",
    "code1": "NID",
    "code2": "KNID",
    "lat": 35.685422,
    "lng": -117.692039
  },
  {
    "name": "Huron Rgnl",
    "city": "Huron",
    "country": "United States",
    "code1": "HON",
    "code2": "KHON",
    "lat": 44.3852,
    "lng": -98.228542
  },
  {
    "name": "Juneau Intl",
    "city": "Juneau",
    "country": "United States",
    "code1": "JNU",
    "code2": "PAJN",
    "lat": 58.354972,
    "lng": -134.576278
  },
  {
    "name": "Lafayette Rgnl",
    "city": "Lafayette",
    "country": "United States",
    "code1": "LFT",
    "code2": "KLFT",
    "lat": 30.205278,
    "lng": -91.987611
  },
  {
    "name": "Newark Liberty Intl",
    "city": "Newark",
    "country": "United States",
    "code1": "EWR",
    "code2": "KEWR",
    "lat": 40.6925,
    "lng": -74.168667
  },
  {
    "name": "Boise Air Terminal",
    "city": "Boise",
    "country": "United States",
    "code1": "BOI",
    "code2": "KBOI",
    "lat": 43.564361,
    "lng": -116.222861
  },
  {
    "name": "Creech Afb",
    "city": "Indian Springs",
    "country": "United States",
    "code1": "INS",
    "code2": "KINS",
    "lat": 36.587183,
    "lng": -115.673353
  },
  {
    "name": "Garden City Rgnl",
    "city": "Garden City",
    "country": "United States",
    "code1": "GCK",
    "code2": "KGCK",
    "lat": 37.927528,
    "lng": -100.724417
  },
  {
    "name": "Minot Intl",
    "city": "Minot",
    "country": "United States",
    "code1": "MOT",
    "code2": "KMOT",
    "lat": 48.259378,
    "lng": -101.280333
  },
  {
    "name": "Wheeler Aaf",
    "city": "Wahiawa",
    "country": "United States",
    "code1": "HHI",
    "code2": "PHHI",
    "lat": 21.4835,
    "lng": -158.039667
  },
  {
    "name": "Maxwell Afb",
    "city": "Montgomery",
    "country": "United States",
    "code1": "MXF",
    "code2": "KMXF",
    "lat": 32.382944,
    "lng": -86.365778
  },
  {
    "name": "Robinson Aaf",
    "city": "Robinson",
    "country": "United States",
    "code1": "RBM",
    "code2": "KRBM",
    "lat": 34.850089,
    "lng": -92.300153
  },
  {
    "name": "Dallas Love Fld",
    "city": "Dallas",
    "country": "United States",
    "code1": "DAL",
    "code2": "KDAL",
    "lat": 32.847111,
    "lng": -96.851778
  },
  {
    "name": "Butts Aaf",
    "city": "Fort Carson",
    "country": "United States",
    "code1": "FCS",
    "code2": "KFCS",
    "lat": 38.678394,
    "lng": -104.756581
  },
  {
    "name": "Helena Rgnl",
    "city": "Helena",
    "country": "United States",
    "code1": "HLN",
    "code2": "KHLN",
    "lat": 46.606806,
    "lng": -111.98275
  },
  {
    "name": "Miramar Mcas",
    "city": "Miramar",
    "country": "United States",
    "code1": "NKX",
    "code2": "KNKX",
    "lat": 32.867694,
    "lng": -117.14175
  },
  {
    "name": "Luke Afb",
    "city": "Phoenix",
    "country": "United States",
    "code1": "LUF",
    "code2": "KLUF",
    "lat": 33.535,
    "lng": -112.38306
  },
  {
    "name": "Hurlburt Fld",
    "city": "Mary Esther",
    "country": "United States",
    "code1": "HRT",
    "code2": "KHRT",
    "lat": 30.427803,
    "lng": -86.689278
  },
  {
    "name": "Jack Northrop Fld Hawthorne Muni",
    "city": "Hawthorne",
    "country": "United States",
    "code1": "HHR",
    "code2": "KHHR",
    "lat": 33.922839,
    "lng": -118.335186
  },
  {
    "name": "Houlton Intl",
    "city": "Houlton",
    "country": "United States",
    "code1": "HUL",
    "code2": "KHUL",
    "lat": 46.123083,
    "lng": -67.792056
  },
  {
    "name": "Vance Afb",
    "city": "Enid",
    "country": "United States",
    "code1": "END",
    "code2": "KEND",
    "lat": 36.339167,
    "lng": -97.9165
  },
  {
    "name": "Point Mugu Nas",
    "city": "Point Mugu",
    "country": "United States",
    "code1": "NTD",
    "code2": "KNTD",
    "lat": 34.120285,
    "lng": -119.12094
  },
  {
    "name": "Edwards Afb",
    "city": "Edwards Afb",
    "country": "United States",
    "code1": "EDW",
    "code2": "KEDW",
    "lat": 34.905417,
    "lng": -117.883739
  },
  {
    "name": "Lake Charles Rgnl",
    "city": "Lake Charles",
    "country": "United States",
    "code1": "LCH",
    "code2": "KLCH",
    "lat": 30.126112,
    "lng": -93.223335
  },
  {
    "name": "Kona Intl At Keahole",
    "city": "Kona",
    "country": "United States",
    "code1": "KOA",
    "code2": "PHKO",
    "lat": 19.738767,
    "lng": -156.045631
  },
  {
    "name": "Myrtle Beach Intl",
    "city": "Myrtle Beach",
    "country": "United States",
    "code1": "MYR",
    "code2": "KMYR",
    "lat": 33.67975,
    "lng": -78.928333
  },
  {
    "name": "Lemoore Nas",
    "city": "Lemoore",
    "country": "United States",
    "code1": "NLC",
    "code2": "KNLC",
    "lat": 36.333012,
    "lng": -119.95208
  },
  {
    "name": "Nantucket Mem",
    "city": "Nantucket",
    "country": "United States",
    "code1": "ACK",
    "code2": "KACK",
    "lat": 41.253053,
    "lng": -70.060181
  },
  {
    "name": "Felker Aaf",
    "city": "Fort Eustis",
    "country": "United States",
    "code1": "FAF",
    "code2": "KFAF",
    "lat": 37.1325,
    "lng": -76.608841
  },
  {
    "name": "Campbell Aaf",
    "city": "Hopkinsville",
    "country": "United States",
    "code1": "HOP",
    "code2": "KHOP",
    "lat": 36.668567,
    "lng": -87.496183
  },
  {
    "name": "Ronald Reagan Washington Natl",
    "city": "Washington",
    "country": "United States",
    "code1": "DCA",
    "code2": "KDCA",
    "lat": 38.852083,
    "lng": -77.037722
  },
  {
    "name": "Patuxent River Nas",
    "city": "Patuxent River",
    "country": "United States",
    "code1": "NHK",
    "code2": "KNHK",
    "lat": 38.285981,
    "lng": -76.411781
  },
  {
    "name": "Palacios Muni",
    "city": "Palacios",
    "country": "United States",
    "code1": "PSX",
    "code2": "KPSX",
    "lat": 28.727508,
    "lng": -96.250958
  },
  {
    "name": "Arkansas Intl",
    "city": "Blytheville",
    "country": "United States",
    "code1": "BYH",
    "code2": "KBYH",
    "lat": 35.964347,
    "lng": -89.943956
  },
  {
    "name": "Atlantic City Intl",
    "city": "Atlantic City",
    "country": "United States",
    "code1": "ACY",
    "code2": "KACY",
    "lat": 39.457583,
    "lng": -74.577167
  },
  {
    "name": "Tinker Afb",
    "city": "Oklahoma City",
    "country": "United States",
    "code1": "TIK",
    "code2": "KTIK",
    "lat": 35.414739,
    "lng": -97.386633
  },
  {
    "name": "Elizabeth City Cgas Rgnl",
    "city": "Elizabeth City",
    "country": "United States",
    "code1": "ECG",
    "code2": "KECG",
    "lat": 36.260581,
    "lng": -76.174572
  },
  {
    "name": "Pueblo Memorial",
    "city": "Pueblo",
    "country": "United States",
    "code1": "PUB",
    "code2": "KPUB",
    "lat": 38.289085,
    "lng": -104.496572
  },
  {
    "name": "Northern Maine Rgnl At Presque Isle",
    "city": "Presque Isle",
    "country": "United States",
    "code1": "PQI",
    "code2": "KPQI",
    "lat": 46.688958,
    "lng": -68.044797
  },
  {
    "name": "Kirtland Air Force Base",
    "city": "Kirtland A.f.b.",
    "country": "United States",
    "code1": "IKR",
    "code2": "KIKR",
    "lat": 35.040222,
    "lng": -106.609194
  },
  {
    "name": "Gray Aaf",
    "city": "Fort Lewis",
    "country": "United States",
    "code1": "GRF",
    "code2": "KGRF",
    "lat": 47.079217,
    "lng": -122.580783
  },
  {
    "name": "Kodiak",
    "city": "Kodiak",
    "country": "United States",
    "code1": "ADQ",
    "code2": "PADQ",
    "lat": 57.749967,
    "lng": -152.493856
  },
  {
    "name": "Upolu",
    "city": "Opolu",
    "country": "United States",
    "code1": "UPP",
    "code2": "PHUP",
    "lat": 20.265256,
    "lng": -155.859989
  },
  {
    "name": "Fort Lauderdale Hollywood Intl",
    "city": "Fort Lauderdale",
    "country": "United States",
    "code1": "FLL",
    "code2": "KFLL",
    "lat": 26.072583,
    "lng": -80.15275
  },
  {
    "name": "Davis Fld",
    "city": "Muskogee",
    "country": "United States",
    "code1": "MKO",
    "code2": "KMKO",
    "lat": 35.656489,
    "lng": -95.366656
  },
  {
    "name": "Falls Intl",
    "city": "International Falls",
    "country": "United States",
    "code1": "INL",
    "code2": "KINL",
    "lat": 48.566186,
    "lng": -93.403067
  },
  {
    "name": "Salt Lake City Intl",
    "city": "Salt Lake City",
    "country": "United States",
    "code1": "SLC",
    "code2": "KSLC",
    "lat": 40.788389,
    "lng": -111.977772
  },
  {
    "name": "Childress Muni",
    "city": "Childress",
    "country": "United States",
    "code1": "CDS",
    "code2": "KCDS",
    "lat": 34.433781,
    "lng": -100.287992
  },
  {
    "name": "Keesler Afb",
    "city": "Biloxi",
    "country": "United States",
    "code1": "BIX",
    "code2": "KBIX",
    "lat": 30.410425,
    "lng": -88.924433
  },
  {
    "name": "Lawson Aaf",
    "city": "Fort Benning",
    "country": "United States",
    "code1": "LSF",
    "code2": "KLSF",
    "lat": 32.337322,
    "lng": -84.991283
  },
  {
    "name": "Kingsville Nas",
    "city": "Kingsville",
    "country": "United States",
    "code1": "NQI",
    "code2": "KNQI",
    "lat": 27.507223,
    "lng": -97.809723
  },
  {
    "name": "Marshall Aaf",
    "city": "Fort Riley",
    "country": "United States",
    "code1": "FRI",
    "code2": "KFRI",
    "lat": 39.055275,
    "lng": -96.764453
  },
  {
    "name": "Harrisburg Intl",
    "city": "Harrisburg",
    "country": "United States",
    "code1": "MDT",
    "code2": "KMDT",
    "lat": 40.193494,
    "lng": -76.763403
  },
  {
    "name": "Lincoln",
    "city": "Lincoln",
    "country": "United States",
    "code1": "LNK",
    "code2": "KLNK",
    "lat": 40.850971,
    "lng": -96.75925
  },
  {
    "name": "Capital City",
    "city": "Lansing",
    "country": "United States",
    "code1": "LAN",
    "code2": "KLAN",
    "lat": 42.7787,
    "lng": -84.587357
  },
  {
    "name": "Waimea Kohala",
    "city": "Kamuela",
    "country": "United States",
    "code1": "MUE",
    "code2": "PHMU",
    "lat": 20.001328,
    "lng": -155.668108
  },
  {
    "name": "Massena Intl Richards Fld",
    "city": "Massena",
    "country": "United States",
    "code1": "MSS",
    "code2": "KMSS",
    "lat": 44.935833,
    "lng": -74.845547
  },
  {
    "name": "Hickory Rgnl",
    "city": "Hickory",
    "country": "United States",
    "code1": "HKY",
    "code2": "KHKY",
    "lat": 35.741147,
    "lng": -81.38955
  },
  {
    "name": "Albert Whitted",
    "city": "St. Petersburg",
    "country": "United States",
    "code1": "SPG",
    "code2": "KSPG",
    "lat": 27.765111,
    "lng": -82.626972
  },
  {
    "name": "Page Fld",
    "city": "Fort Myers",
    "country": "United States",
    "code1": "FMY",
    "code2": "KFMY",
    "lat": 26.586611,
    "lng": -81.86325
  },
  {
    "name": "George Bush Intercontinental",
    "city": "Houston",
    "country": "United States",
    "code1": "IAH",
    "code2": "KIAH",
    "lat": 29.984433,
    "lng": -95.341442
  },
  {
    "name": "Millinocket Muni",
    "city": "Millinocket",
    "country": "United States",
    "code1": "MLT",
    "code2": "KMLT",
    "lat": 45.647836,
    "lng": -68.685561
  },
  {
    "name": "Andrews Afb",
    "city": "Camp Springs",
    "country": "United States",
    "code1": "ADW",
    "code2": "KADW",
    "lat": 38.810806,
    "lng": -76.867028
  },
  {
    "name": "Smith Reynolds",
    "city": "Winston-salem",
    "country": "United States",
    "code1": "INT",
    "code2": "KINT",
    "lat": 36.133722,
    "lng": -80.222
  },
  {
    "name": "Southern California Logistics",
    "city": "Victorville",
    "country": "United States",
    "code1": "VCV",
    "code2": "KVCV",
    "lat": 34.597453,
    "lng": -117.382997
  },
  {
    "name": "Bob Sikes",
    "city": "Crestview",
    "country": "United States",
    "code1": "CEW",
    "code2": "KCEW",
    "lat": 30.778833,
    "lng": -86.522111
  },
  {
    "name": "Wheeler Sack Aaf",
    "city": "Fort Drum",
    "country": "United States",
    "code1": "GTB",
    "code2": "KGTB",
    "lat": 44.055619,
    "lng": -75.719458
  },
  {
    "name": "St Clair Co Intl",
    "city": "Port Huron",
    "country": "United States",
    "code1": "PHN",
    "code2": "KPHN",
    "lat": 42.910957,
    "lng": -82.528862
  },
  {
    "name": "Meadows Fld",
    "city": "Bakersfield",
    "country": "United States",
    "code1": "BFL",
    "code2": "KBFL",
    "lat": 35.433598,
    "lng": -119.05677
  },
  {
    "name": "El Paso Intl",
    "city": "El Paso",
    "country": "United States",
    "code1": "ELP",
    "code2": "KELP",
    "lat": 31.80725,
    "lng": -106.377583
  },
  {
    "name": "Valley Intl",
    "city": "Harlingen",
    "country": "United States",
    "code1": "HRL",
    "code2": "KHRL",
    "lat": 26.2285,
    "lng": -97.654389
  },
  {
    "name": "Columbia Metropolitan",
    "city": "Columbia",
    "country": "United States",
    "code1": "CAE",
    "code2": "KCAE",
    "lat": 33.938833,
    "lng": -81.119528
  },
  {
    "name": "Davis Monthan Afb",
    "city": "Tucson",
    "country": "United States",
    "code1": "DMA",
    "code2": "KDMA",
    "lat": 32.166467,
    "lng": -110.883144
  },
  {
    "name": "Pensacola Nas",
    "city": "Pensacola",
    "country": "United States",
    "code1": "NPA",
    "code2": "KNPA",
    "lat": 30.352656,
    "lng": -87.318647
  },
  {
    "name": "Pensacola Rgnl",
    "city": "Pensacola",
    "country": "United States",
    "code1": "PNS",
    "code2": "KPNS",
    "lat": 30.473425,
    "lng": -87.186611
  },
  {
    "name": "Grand Forks Afb",
    "city": "Red River",
    "country": "United States",
    "code1": "RDR",
    "code2": "KRDR",
    "lat": 47.961098,
    "lng": -97.401194
  },
  {
    "name": "William P Hobby",
    "city": "Houston",
    "country": "United States",
    "code1": "HOU",
    "code2": "KHOU",
    "lat": 29.645419,
    "lng": -95.278889
  },
  {
    "name": "Buckley Afb",
    "city": "Buckley",
    "country": "United States",
    "code1": "BKF",
    "code2": "KBKF",
    "lat": 39.701668,
    "lng": -104.75166
  },
  {
    "name": "Northway",
    "city": "Northway",
    "country": "United States",
    "code1": "ORT",
    "code2": "PAOR",
    "lat": 62.961334,
    "lng": -141.929136
  },
  {
    "name": "Palmer Muni",
    "city": "Palmer",
    "country": "United States",
    "code1": "PAQ",
    "code2": "PAAQ",
    "lat": 61.594914,
    "lng": -149.088711
  },
  {
    "name": "Pittsburgh Intl",
    "city": "Pittsburgh",
    "country": "United States",
    "code1": "PIT",
    "code2": "KPIT",
    "lat": 40.491467,
    "lng": -80.232872
  },
  {
    "name": "Wiley Post Will Rogers Mem",
    "city": "Barrow",
    "country": "United States",
    "code1": "BRW",
    "code2": "PABR",
    "lat": 71.285446,
    "lng": -156.766003
  },
  {
    "name": "Ellington Fld",
    "city": "Houston",
    "country": "United States",
    "code1": "EFD",
    "code2": "KEFD",
    "lat": 29.607333,
    "lng": -95.15875
  },
  {
    "name": "Whidbey Island Nas",
    "city": "Whidbey Island",
    "country": "United States",
    "code1": "NUW",
    "code2": "KNUW",
    "lat": 48.351803,
    "lng": -122.655906
  },
  {
    "name": "Alice Intl",
    "city": "Alice",
    "country": "United States",
    "code1": "ALI",
    "code2": "KALI",
    "lat": 27.740889,
    "lng": -98.026944
  },
  {
    "name": "Moody Afb",
    "city": "Valdosta",
    "country": "United States",
    "code1": "VAD",
    "code2": "KVAD",
    "lat": 30.967833,
    "lng": -83.193
  },
  {
    "name": "Miami Intl",
    "city": "Miami",
    "country": "United States",
    "code1": "MIA",
    "code2": "KMIA",
    "lat": 25.79325,
    "lng": -80.290556
  },
  {
    "name": "Seattle Tacoma Intl",
    "city": "Seattle",
    "country": "United States",
    "code1": "SEA",
    "code2": "KSEA",
    "lat": 47.449,
    "lng": -122.309306
  },
  {
    "name": "Lovell Fld",
    "city": "Chattanooga",
    "country": "United States",
    "code1": "CHA",
    "code2": "KCHA",
    "lat": 35.035278,
    "lng": -85.203808
  },
  {
    "name": "Igor I Sikorsky Mem",
    "city": "Stratford",
    "country": "United States",
    "code1": "BDR",
    "code2": "KBDR",
    "lat": 41.163472,
    "lng": -73.126167
  },
  {
    "name": "Jackson Evers Intl",
    "city": "Jackson",
    "country": "United States",
    "code1": "JAN",
    "code2": "KJAN",
    "lat": 32.311167,
    "lng": -90.075889
  },
  {
    "name": "Scholes Intl At Galveston",
    "city": "Galveston",
    "country": "United States",
    "code1": "GLS",
    "code2": "KGLS",
    "lat": 29.265322,
    "lng": -94.860406
  },
  {
    "name": "Long Beach",
    "city": "Long Beach",
    "country": "United States",
    "code1": "LGB",
    "code2": "KLGB",
    "lat": 33.817722,
    "lng": -118.151611
  },
  {
    "name": "Dillingham",
    "city": "Dillingham",
    "country": "United States",
    "code1": "HDH",
    "code2": "PHDH",
    "lat": 21.579475,
    "lng": -158.197281
  },
  {
    "name": "Williamsport Rgnl",
    "city": "Williamsport",
    "country": "United States",
    "code1": "IPT",
    "code2": "KIPT",
    "lat": 41.241836,
    "lng": -76.921094
  },
  {
    "name": "Indianapolis Intl",
    "city": "Indianapolis",
    "country": "United States",
    "code1": "IND",
    "code2": "KIND",
    "lat": 39.717331,
    "lng": -86.294383
  },
  {
    "name": "Whiteman Afb",
    "city": "Knobnoster",
    "country": "United States",
    "code1": "SZL",
    "code2": "KSZL",
    "lat": 38.730306,
    "lng": -93.547864
  },
  {
    "name": "Akron Fulton Intl",
    "city": "Akron",
    "country": "United States",
    "code1": "AKC",
    "code2": "KAKR",
    "lat": 41.0375,
    "lng": -81.466917
  },
  {
    "name": "Greenwood Leflore",
    "city": "Greenwood",
    "country": "United States",
    "code1": "GWO",
    "code2": "KGWO",
    "lat": 33.494328,
    "lng": -90.084706
  },
  {
    "name": "Westchester Co",
    "city": "White Plains",
    "country": "United States",
    "code1": "HPN",
    "code2": "KHPN",
    "lat": 41.066959,
    "lng": -73.707575
  },
  {
    "name": "Francis S Gabreski",
    "city": "West Hampton Beach",
    "country": "United States",
    "code1": "FOK",
    "code2": "KFOK",
    "lat": 40.843656,
    "lng": -72.631789
  },
  {
    "name": "Jonesboro Muni",
    "city": "Jonesboro",
    "country": "United States",
    "code1": "JBR",
    "code2": "KJBR",
    "lat": 35.831708,
    "lng": -90.646417
  },
  {
    "name": "Tonopah Test Range",
    "city": "Tonopah",
    "country": "United States",
    "code1": "TNX",
    "code2": "KTNX",
    "lat": 37.798836,
    "lng": -116.78075
  },
  {
    "name": "Palm Beach Co Park",
    "city": "West Palm Beach",
    "country": "United States",
    "code1": "LNA",
    "code2": "KLNA",
    "lat": 26.593,
    "lng": -80.085056
  },
  {
    "name": "North Island Nas",
    "city": "San Diego",
    "country": "United States",
    "code1": "NZY",
    "code2": "KNZY",
    "lat": 32.699219,
    "lng": -117.21531
  },
  {
    "name": "Biggs Aaf",
    "city": "El Paso",
    "country": "United States",
    "code1": "BIF",
    "code2": "KBIF",
    "lat": 31.849528,
    "lng": -106.380039
  },
  {
    "name": "Yuma Mcas Yuma Intl",
    "city": "Yuma",
    "country": "United States",
    "code1": "YUM",
    "code2": "KYUM",
    "lat": 32.656578,
    "lng": -114.60598
  },
  {
    "name": "Cavern City Air Terminal",
    "city": "Carlsbad",
    "country": "United States",
    "code1": "CNM",
    "code2": "KCNM",
    "lat": 32.337472,
    "lng": -104.263278
  },
  {
    "name": "Duluth Intl",
    "city": "Duluth",
    "country": "United States",
    "code1": "DLH",
    "code2": "KDLH",
    "lat": 46.842091,
    "lng": -92.193649
  },
  {
    "name": "Bethel",
    "city": "Bethel",
    "country": "United States",
    "code1": "BET",
    "code2": "PABE",
    "lat": 60.779778,
    "lng": -161.838
  },
  {
    "name": "Bowman Fld",
    "city": "Louisville",
    "country": "United States",
    "code1": "LOU",
    "code2": "KLOU",
    "lat": 38.228,
    "lng": -85.663722
  },
  {
    "name": "Sierra Vista Muni Libby Aaf",
    "city": "Fort Huachuca",
    "country": "United States",
    "code1": "FHU",
    "code2": "KFHU",
    "lat": 31.588472,
    "lng": -110.344389
  },
  {
    "name": "Lihue",
    "city": "Lihue",
    "country": "United States",
    "code1": "LIH",
    "code2": "PHLI",
    "lat": 21.975983,
    "lng": -159.338958
  },
  {
    "name": "Terre Haute Intl Hulman Fld",
    "city": "Terre Haute",
    "country": "United States",
    "code1": "HUF",
    "code2": "KHUF",
    "lat": 39.451464,
    "lng": -87.307561
  },
  {
    "name": "Havre City Co",
    "city": "Havre",
    "country": "United States",
    "code1": "HVR",
    "code2": "KHVR",
    "lat": 48.542983,
    "lng": -109.762342
  },
  {
    "name": "Grant Co Intl",
    "city": "Grant County Airport",
    "country": "United States",
    "code1": "MWH",
    "code2": "KMWH",
    "lat": 47.207708,
    "lng": -119.32019
  },
  {
    "name": "Edward F Knapp State",
    "city": "Montpelier",
    "country": "United States",
    "code1": "MPV",
    "code2": "KMPV",
    "lat": 44.203503,
    "lng": -72.562328
  },
  {
    "name": "San Nicolas Island Nolf",
    "city": "San Nicolas Island",
    "country": "United States",
    "code1": "",
    "code2": "KNSI",
    "lat": 33.239765,
    "lng": -119.45816
  },
  {
    "name": "Richmond Intl",
    "city": "Richmond",
    "country": "United States",
    "code1": "RIC",
    "code2": "KRIC",
    "lat": 37.505167,
    "lng": -77.319667
  },
  {
    "name": "Shreveport Rgnl",
    "city": "Shreveport",
    "country": "United States",
    "code1": "SHV",
    "code2": "KSHV",
    "lat": 32.446629,
    "lng": -93.8256
  },
  {
    "name": "Merle K Mudhole Smith",
    "city": "Cordova",
    "country": "United States",
    "code1": "CDV",
    "code2": "PACV",
    "lat": 60.491778,
    "lng": -145.477556
  },
  {
    "name": "Norfolk Intl",
    "city": "Norfolk",
    "country": "United States",
    "code1": "ORF",
    "code2": "KORF",
    "lat": 36.894611,
    "lng": -76.201222
  },
  {
    "name": "Southeast Texas Rgnl",
    "city": "Beaumont",
    "country": "United States",
    "code1": "BPT",
    "code2": "KBPT",
    "lat": 29.950833,
    "lng": -94.020694
  },
  {
    "name": "Savannah Hilton Head Intl",
    "city": "Savannah",
    "country": "United States",
    "code1": "SAV",
    "code2": "KSAV",
    "lat": 32.127583,
    "lng": -81.202139
  },
  {
    "name": "Hill Afb",
    "city": "Ogden",
    "country": "United States",
    "code1": "HIF",
    "code2": "KHIF",
    "lat": 41.123939,
    "lng": -111.973039
  },
  {
    "name": "Nome",
    "city": "Nome",
    "country": "United States",
    "code1": "OME",
    "code2": "PAOM",
    "lat": 64.512203,
    "lng": -165.445247
  },
  {
    "name": "Scappoose Industrial Airpark",
    "city": "San Luis",
    "country": "United States",
    "code1": "SPB",
    "code2": "KSPB",
    "lat": 45.771028,
    "lng": -122.861833
  },
  {
    "name": "St Petersburg Clearwater Intl",
    "city": "St. Petersburg",
    "country": "United States",
    "code1": "PIE",
    "code2": "KPIE",
    "lat": 27.910167,
    "lng": -82.687389
  },
  {
    "name": "Menominee Marinette Twin Co",
    "city": "Macon",
    "country": "United States",
    "code1": "MNM",
    "code2": "KMNM",
    "lat": 45.12665,
    "lng": -87.638443
  },
  {
    "name": "Lone Star Executive",
    "city": "Conroe",
    "country": "United States",
    "code1": "CXO",
    "code2": "KCXO",
    "lat": 30.351833,
    "lng": -95.414467
  },
  {
    "name": "Deadhorse",
    "city": "Deadhorse",
    "country": "United States",
    "code1": "SCC",
    "code2": "PASC",
    "lat": 70.19475,
    "lng": -148.465167
  },
  {
    "name": "San Antonio Intl",
    "city": "San Antonio",
    "country": "United States",
    "code1": "SAT",
    "code2": "KSAT",
    "lat": 29.533694,
    "lng": -98.469778
  },
  {
    "name": "Greater Rochester Intl",
    "city": "Rochester",
    "country": "United States",
    "code1": "ROC",
    "code2": "KROC",
    "lat": 43.118866,
    "lng": -77.672389
  },
  {
    "name": "Patrick Afb",
    "city": "Coco Beach",
    "country": "United States",
    "code1": "COF",
    "code2": "KCOF",
    "lat": 28.234922,
    "lng": -80.610125
  },
  {
    "name": "Teterboro",
    "city": "Teterboro",
    "country": "United States",
    "code1": "TEB",
    "code2": "KTEB",
    "lat": 40.850103,
    "lng": -74.060837
  },
  {
    "name": "Ellsworth Afb",
    "city": "Rapid City",
    "country": "United States",
    "code1": "RCA",
    "code2": "KRCA",
    "lat": 44.145042,
    "lng": -103.103567
  },
  {
    "name": "Raleigh Durham Intl",
    "city": "Raleigh-durham",
    "country": "United States",
    "code1": "RDU",
    "code2": "KRDU",
    "lat": 35.877639,
    "lng": -78.787472
  },
  {
    "name": "James M Cox Dayton Intl",
    "city": "Dayton",
    "country": "United States",
    "code1": "DAY",
    "code2": "KDAY",
    "lat": 39.902375,
    "lng": -84.219375
  },
  {
    "name": "Kenai Muni",
    "city": "Kenai",
    "country": "United States",
    "code1": "ENA",
    "code2": "PAEN",
    "lat": 60.573111,
    "lng": -151.245
  },
  {
    "name": "Mc Alester Rgnl",
    "city": "Mcalester",
    "country": "United States",
    "code1": "MLC",
    "code2": "KMLC",
    "lat": 34.882403,
    "lng": -95.783463
  },
  {
    "name": "Niagara Falls Intl",
    "city": "Niagara Falls",
    "country": "United States",
    "code1": "IAG",
    "code2": "KIAG",
    "lat": 43.107333,
    "lng": -78.946194
  },
  {
    "name": "Coulter Fld",
    "city": "Bryan",
    "country": "United States",
    "code1": "CFD",
    "code2": "KCFD",
    "lat": 30.715694,
    "lng": -96.331361
  },
  {
    "name": "Wright Aaf",
    "city": "Wright",
    "country": "United States",
    "code1": "",
    "code2": "KLHW",
    "lat": 31.889097,
    "lng": -81.562333
  },
  {
    "name": "Newport News Williamsburg Intl",
    "city": "Newport News",
    "country": "United States",
    "code1": "PHF",
    "code2": "KPHF",
    "lat": 37.131894,
    "lng": -76.492989
  },
  {
    "name": "Esler Rgnl",
    "city": "Alexandria",
    "country": "United States",
    "code1": "ESF",
    "code2": "KESF",
    "lat": 31.394903,
    "lng": -92.295772
  },
  {
    "name": "Altus Afb",
    "city": "Altus",
    "country": "United States",
    "code1": "LTS",
    "code2": "KLTS",
    "lat": 34.667067,
    "lng": -99.266681
  },
  {
    "name": "Tucson Intl",
    "city": "Tucson",
    "country": "United States",
    "code1": "TUS",
    "code2": "KTUS",
    "lat": 32.116083,
    "lng": -110.941028
  },
  {
    "name": "Minot Afb",
    "city": "Minot",
    "country": "United States",
    "code1": "MIB",
    "code2": "KMIB",
    "lat": 48.415572,
    "lng": -101.357661
  },
  {
    "name": "Beale Afb",
    "city": "Marysville",
    "country": "United States",
    "code1": "BAB",
    "code2": "KBAB",
    "lat": 39.136089,
    "lng": -121.436567
  },
  {
    "name": "Greater Kankakee",
    "city": "Kankakee",
    "country": "United States",
    "code1": "IKK",
    "code2": "KIKK",
    "lat": 41.071389,
    "lng": -87.846278
  },
  {
    "name": "Seymour Johnson Afb",
    "city": "Goldsboro",
    "country": "United States",
    "code1": "GSB",
    "code2": "KGSB",
    "lat": 35.339383,
    "lng": -77.960589
  },
  {
    "name": "Theodore Francis Green State",
    "city": "Providence",
    "country": "United States",
    "code1": "PVD",
    "code2": "KPVD",
    "lat": 41.732581,
    "lng": -71.420383
  },
  {
    "name": "Salisbury Ocean City Wicomico Rgnl",
    "city": "Salisbury",
    "country": "United States",
    "code1": "SBY",
    "code2": "KSBY",
    "lat": 38.340525,
    "lng": -75.510289
  },
  {
    "name": "Rancho Murieta",
    "city": "Rancho Murieta",
    "country": "United States",
    "code1": "RIU",
    "code2": "KRIU",
    "lat": 38.486778,
    "lng": -121.102778
  },
  {
    "name": "Bob Hope",
    "city": "Burbank",
    "country": "United States",
    "code1": "BUR",
    "code2": "KBUR",
    "lat": 34.200667,
    "lng": -118.358667
  },
  {
    "name": "Detroit Metro Wayne Co",
    "city": "Detroit",
    "country": "United States",
    "code1": "DTW",
    "code2": "KDTW",
    "lat": 42.212444,
    "lng": -83.353389
  },
  {
    "name": "Tampa Intl",
    "city": "Tampa",
    "country": "United States",
    "code1": "TPA",
    "code2": "KTPA",
    "lat": 27.975472,
    "lng": -82.53325
  },
  {
    "name": "Pembina Muni",
    "city": "Pembina",
    "country": "United States",
    "code1": "PMB",
    "code2": "KPMB",
    "lat": 48.942501,
    "lng": -97.240833
  },
  {
    "name": "Polk Aaf",
    "city": "Fort Polk",
    "country": "United States",
    "code1": "POE",
    "code2": "KPOE",
    "lat": 31.044833,
    "lng": -93.191667
  },
  {
    "name": "Eielson Afb",
    "city": "Fairbanks",
    "country": "United States",
    "code1": "EIL",
    "code2": "PAEI",
    "lat": 64.665667,
    "lng": -147.1015
  },
  {
    "name": "Chisholm Hibbing",
    "city": "Hibbing",
    "country": "United States",
    "code1": "HIB",
    "code2": "KHIB",
    "lat": 47.3866,
    "lng": -92.838994
  },
  {
    "name": "Angelina Co",
    "city": "Lufkin",
    "country": "United States",
    "code1": "LFK",
    "code2": "KLFK",
    "lat": 31.234014,
    "lng": -94.75
  },
  {
    "name": "Midland Intl",
    "city": "Midland",
    "country": "United States",
    "code1": "MAF",
    "code2": "KMAF",
    "lat": 31.942528,
    "lng": -102.201914
  },
  {
    "name": "Austin Straubel Intl",
    "city": "Green Bay",
    "country": "United States",
    "code1": "GRB",
    "code2": "KGRB",
    "lat": 44.485072,
    "lng": -88.129589
  },
  {
    "name": "Ardmore Muni",
    "city": "Ardmore",
    "country": "United States",
    "code1": "ADM",
    "code2": "KADM",
    "lat": 34.300833,
    "lng": -97.008889
  },
  {
    "name": "Mc Guire Afb",
    "city": "Wrightstown",
    "country": "United States",
    "code1": "WRI",
    "code2": "KWRI",
    "lat": 40.015556,
    "lng": -74.591667
  },
  {
    "name": "Cherry Point Mcas",
    "city": "Cherry Point",
    "country": "United States",
    "code1": "NKT",
    "code2": "KNKT",
    "lat": 34.900872,
    "lng": -76.880733
  },
  {
    "name": "Emanuel Co",
    "city": "Santa Barbara",
    "country": "United States",
    "code1": "SBO",
    "code2": "KSBO",
    "lat": 32.609139,
    "lng": -82.369944
  },
  {
    "name": "Augusta Rgnl At Bush Fld",
    "city": "Bush Field",
    "country": "United States",
    "code1": "AGS",
    "code2": "KAGS",
    "lat": 33.369944,
    "lng": -81.9645
  },
  {
    "name": "Sloulin Fld Intl",
    "city": "Williston",
    "country": "United States",
    "code1": "ISN",
    "code2": "KISN",
    "lat": 48.177939,
    "lng": -103.642347
  },
  {
    "name": "Adams Fld",
    "city": "Little Rock",
    "country": "United States",
    "code1": "LIT",
    "code2": "KLIT",
    "lat": 34.729444,
    "lng": -92.224306
  },
  {
    "name": "Stewart Intl",
    "city": "Newburgh",
    "country": "United States",
    "code1": "SWF",
    "code2": "KSWF",
    "lat": 41.504094,
    "lng": -74.104839
  },
  {
    "name": "Baudette Intl",
    "city": "Baudette",
    "country": "United States",
    "code1": "BDE",
    "code2": "KBDE",
    "lat": 48.728444,
    "lng": -94.612222
  },
  {
    "name": "Sacramento Executive",
    "city": "Sacramento",
    "country": "United States",
    "code1": "SAC",
    "code2": "KSAC",
    "lat": 38.512524,
    "lng": -121.49347
  },
  {
    "name": "Homer",
    "city": "Homer",
    "country": "United States",
    "code1": "HOM",
    "code2": "PAHO",
    "lat": 59.645556,
    "lng": -151.476583
  },
  {
    "name": "Waynesville Rgnl Arpt At Forney Fld",
    "city": "Fort Leonardwood",
    "country": "United States",
    "code1": "TBN",
    "code2": "KTBN",
    "lat": 37.741631,
    "lng": -92.140736
  },
  {
    "name": "Dobbins Arb",
    "city": "Marietta",
    "country": "United States",
    "code1": "MGE",
    "code2": "KMGE",
    "lat": 33.915382,
    "lng": -84.516319
  },
  {
    "name": "Fairchild Afb",
    "city": "Spokane",
    "country": "United States",
    "code1": "SKA",
    "code2": "KSKA",
    "lat": 47.615058,
    "lng": -117.655772
  },
  {
    "name": "Roscommon Co",
    "city": "Houghton Lake",
    "country": "United States",
    "code1": "HTL",
    "code2": "KHTL",
    "lat": 44.359806,
    "lng": -84.671112
  },
  {
    "name": "Tyndall Afb",
    "city": "Panama City",
    "country": "United States",
    "code1": "PAM",
    "code2": "KPAM",
    "lat": 30.069567,
    "lng": -85.575417
  },
  {
    "name": "Dallas Fort Worth Intl",
    "city": "Dallas-Fort Worth",
    "country": "United States",
    "code1": "DFW",
    "code2": "KDFW",
    "lat": 32.896828,
    "lng": -97.037997
  },
  {
    "name": "Melbourne Intl",
    "city": "Melbourne",
    "country": "United States",
    "code1": "MLB",
    "code2": "KMLB",
    "lat": 28.102753,
    "lng": -80.645258
  },
  {
    "name": "Mc Chord Afb",
    "city": "Tacoma",
    "country": "United States",
    "code1": "TCM",
    "code2": "KTCM",
    "lat": 47.137678,
    "lng": -122.476475
  },
  {
    "name": "Austin Bergstrom Intl",
    "city": "Austin",
    "country": "United States",
    "code1": "AUS",
    "code2": "KAUS",
    "lat": 30.194528,
    "lng": -97.669889
  },
  {
    "name": "Rickenbacker Intl",
    "city": "Columbus",
    "country": "United States",
    "code1": "LCK",
    "code2": "KLCK",
    "lat": 39.813786,
    "lng": -82.927822
  },
  {
    "name": "Sawyer Intl",
    "city": "Gwinn",
    "country": "United States",
    "code1": "",
    "code2": "KSAW",
    "lat": 46.353625,
    "lng": -87.395353
  },
  {
    "name": "Mc Ghee Tyson",
    "city": "Knoxville",
    "country": "United States",
    "code1": "TYS",
    "code2": "KTYS",
    "lat": 35.810972,
    "lng": -83.994028
  },
  {
    "name": "Hood Aaf",
    "city": "Fort Hood",
    "country": "United States",
    "code1": "HLR",
    "code2": "KHLR",
    "lat": 31.138731,
    "lng": -97.714469
  },
  {
    "name": "Lambert St Louis Intl",
    "city": "St. Louis",
    "country": "United States",
    "code1": "STL",
    "code2": "KSTL",
    "lat": 38.748697,
    "lng": -90.370028
  },
  {
    "name": "Millville Muni",
    "city": "Millville",
    "country": "United States",
    "code1": "MIV",
    "code2": "KMIV",
    "lat": 39.367806,
    "lng": -75.072222
  },
  {
    "name": "Sheppard Afb Wichita Falls Muni",
    "city": "Wichita Falls",
    "country": "United States",
    "code1": "SPS",
    "code2": "KSPS",
    "lat": 33.988797,
    "lng": -98.491894
  },
  {
    "name": "Cincinnati Muni Lunken Fld",
    "city": "Cincinnati",
    "country": "United States",
    "code1": "LUK",
    "code2": "KLUK",
    "lat": 39.103333,
    "lng": -84.418611
  },
  {
    "name": "Hartsfield Jackson Atlanta Intl",
    "city": "Atlanta",
    "country": "United States",
    "code1": "ATL",
    "code2": "KATL",
    "lat": 33.636719,
    "lng": -84.428067
  },
  {
    "name": "Castle",
    "city": "Merced",
    "country": "United States",
    "code1": "MER",
    "code2": "KMER",
    "lat": 37.380481,
    "lng": -120.568189
  },
  {
    "name": "Mc Clellan Afld",
    "city": "Sacramento",
    "country": "United States",
    "code1": "MCC",
    "code2": "KMCC",
    "lat": 38.667639,
    "lng": -121.400611
  },
  {
    "name": "Gerald R Ford Intl",
    "city": "Grand Rapids",
    "country": "United States",
    "code1": "GRR",
    "code2": "KGRR",
    "lat": 42.880833,
    "lng": -85.522806
  },
  {
    "name": "Winkler Co",
    "city": "Wink",
    "country": "United States",
    "code1": "INK",
    "code2": "KINK",
    "lat": 31.779628,
    "lng": -103.201361
  },
  {
    "name": "Fresno Yosemite Intl",
    "city": "Fresno",
    "country": "United States",
    "code1": "FAT",
    "code2": "KFAT",
    "lat": 36.776194,
    "lng": -119.71814
  },
  {
    "name": "Vero Beach Muni",
    "city": "Vero Beach",
    "country": "United States",
    "code1": "VRB",
    "code2": "KVRB",
    "lat": 27.655556,
    "lng": -80.417944
  },
  {
    "name": "Imperial Co",
    "city": "Imperial",
    "country": "United States",
    "code1": "IPL",
    "code2": "KIPL",
    "lat": 32.834219,
    "lng": -115.578744
  },
  {
    "name": "Nashville Intl",
    "city": "Nashville",
    "country": "United States",
    "code1": "BNA",
    "code2": "KBNA",
    "lat": 36.124472,
    "lng": -86.678194
  },
  {
    "name": "Laredo Intl",
    "city": "Laredo",
    "country": "United States",
    "code1": "LRD",
    "code2": "KLRD",
    "lat": 27.54375,
    "lng": -99.461556
  },
  {
    "name": "Elmendorf Afb",
    "city": "Anchorage",
    "country": "United States",
    "code1": "EDF",
    "code2": "PAED",
    "lat": 61.250986,
    "lng": -149.806503
  },
  {
    "name": "Ralph Wien Mem",
    "city": "Kotzebue",
    "country": "United States",
    "code1": "OTZ",
    "code2": "PAOT",
    "lat": 66.884678,
    "lng": -162.59855
  },
  {
    "name": "Altoona Blair Co",
    "city": "Altoona",
    "country": "United States",
    "code1": "AOO",
    "code2": "KAOO",
    "lat": 40.296372,
    "lng": -78.320022
  },
  {
    "name": "Dyess Afb",
    "city": "Abilene",
    "country": "United States",
    "code1": "DYS",
    "code2": "KDYS",
    "lat": 32.420756,
    "lng": -99.8546
  },
  {
    "name": "South Arkansas Rgnl At Goodwin Fld",
    "city": "El Dorado",
    "country": "United States",
    "code1": "ELD",
    "code2": "KELD",
    "lat": 33.220972,
    "lng": -92.813278
  },
  {
    "name": "La Guardia",
    "city": "New York",
    "country": "United States",
    "code1": "LGA",
    "code2": "KLGA",
    "lat": 40.777245,
    "lng": -73.872608
  },
  {
    "name": "Tallahassee Rgnl",
    "city": "Tallahassee",
    "country": "United States",
    "code1": "TLH",
    "code2": "KTLH",
    "lat": 30.396528,
    "lng": -84.350333
  },
  {
    "name": "Dupage",
    "city": "West Chicago",
    "country": "United States",
    "code1": "DPA",
    "code2": "KDPA",
    "lat": 41.907778,
    "lng": -88.248611
  },
  {
    "name": "Waco Rgnl",
    "city": "Waco",
    "country": "United States",
    "code1": "ACT",
    "code2": "KACT",
    "lat": 31.611289,
    "lng": -97.230519
  },
  {
    "name": "Augusta State",
    "city": "Augusta",
    "country": "United States",
    "code1": "AUG",
    "code2": "KAUG",
    "lat": 44.320647,
    "lng": -69.797317
  },
  {
    "name": "Hillsboro Muni",
    "city": "Hillsboro",
    "country": "United States",
    "code1": "INJ",
    "code2": "KINJ",
    "lat": 32.083486,
    "lng": -97.097228
  },
  {
    "name": "Jacksonville Nas",
    "city": "Jacksonville",
    "country": "United States",
    "code1": "NIP",
    "code2": "KNIP",
    "lat": 30.235834,
    "lng": -81.680556
  },
  {
    "name": "Mc Kellar Sipes Rgnl",
    "city": "Jackson",
    "country": "United States",
    "code1": "MKL",
    "code2": "KMKL",
    "lat": 35.599889,
    "lng": -88.915611
  },
  {
    "name": "Molokai",
    "city": "Molokai",
    "country": "United States",
    "code1": "MKK",
    "code2": "PHMK",
    "lat": 21.152886,
    "lng": -157.096256
  },
  {
    "name": "Godman Aaf",
    "city": "Fort Knox",
    "country": "United States",
    "code1": "FTK",
    "code2": "KFTK",
    "lat": 37.907058,
    "lng": -85.972106
  },
  {
    "name": "New River Mcas",
    "city": "Jacksonville",
    "country": "United States",
    "code1": "",
    "code2": "KNCA",
    "lat": 34.708417,
    "lng": -77.439667
  },
  {
    "name": "San Angelo Rgnl Mathis Fld",
    "city": "San Angelo",
    "country": "United States",
    "code1": "SJT",
    "code2": "KSJT",
    "lat": 31.35775,
    "lng": -100.496306
  },
  {
    "name": "Calexico Intl",
    "city": "Calexico",
    "country": "United States",
    "code1": "CXL",
    "code2": "KCXL",
    "lat": 32.669502,
    "lng": -115.51333
  },
  {
    "name": "Chico Muni",
    "city": "Chico",
    "country": "United States",
    "code1": "CIC",
    "code2": "KCIC",
    "lat": 39.795383,
    "lng": -121.858422
  },
  {
    "name": "Burlington Intl",
    "city": "Burlington",
    "country": "United States",
    "code1": "BTV",
    "code2": "KBTV",
    "lat": 44.471861,
    "lng": -73.153278
  },
  {
    "name": "Jacksonville Intl",
    "city": "Jacksonville",
    "country": "United States",
    "code1": "JAX",
    "code2": "KJAX",
    "lat": 30.494056,
    "lng": -81.687861
  },
  {
    "name": "Durango La Plata Co",
    "city": "Durango",
    "country": "United States",
    "code1": "DRO",
    "code2": "KDRO",
    "lat": 37.151516,
    "lng": -107.75377
  },
  {
    "name": "Washington Dulles Intl",
    "city": "Washington",
    "country": "United States",
    "code1": "IAD",
    "code2": "KIAD",
    "lat": 38.944533,
    "lng": -77.455811
  },
  {
    "name": "Easterwood Fld",
    "city": "College Station",
    "country": "United States",
    "code1": "CLL",
    "code2": "KCLL",
    "lat": 30.588583,
    "lng": -96.363833
  },
  {
    "name": "Felts Fld",
    "city": "Spokane",
    "country": "United States",
    "code1": "SFF",
    "code2": "KSFF",
    "lat": 47.682819,
    "lng": -117.322558
  },
  {
    "name": "General Mitchell Intl",
    "city": "Milwaukee",
    "country": "United States",
    "code1": "MKE",
    "code2": "KMKE",
    "lat": 42.947222,
    "lng": -87.896583
  },
  {
    "name": "Abilene Rgnl",
    "city": "Abilene",
    "country": "United States",
    "code1": "ABI",
    "code2": "KABI",
    "lat": 32.411319,
    "lng": -99.681897
  },
  {
    "name": "Columbia Rgnl",
    "city": "Columbia",
    "country": "United States",
    "code1": "COU",
    "code2": "KCOU",
    "lat": 38.818094,
    "lng": -92.219631
  },
  {
    "name": "Portland Intl",
    "city": "Portland",
    "country": "United States",
    "code1": "PDX",
    "code2": "KPDX",
    "lat": 45.588722,
    "lng": -122.5975
  },
  {
    "name": "Dade Collier Training And Transition",
    "city": "Miami",
    "country": "United States",
    "code1": "TNT",
    "code2": "KTNT",
    "lat": 25.861806,
    "lng": -80.897
  },
  {
    "name": "Palm Beach Intl",
    "city": "West Palm Beach",
    "country": "United States",
    "code1": "PBI",
    "code2": "KPBI",
    "lat": 26.683161,
    "lng": -80.095589
  },
  {
    "name": "Fort Worth Meacham Intl",
    "city": "Fort Worth",
    "country": "United States",
    "code1": "FTW",
    "code2": "KFTW",
    "lat": 32.819778,
    "lng": -97.362444
  },
  {
    "name": "Ogdensburg Intl",
    "city": "Ogdensburg",
    "country": "United States",
    "code1": "OGS",
    "code2": "KOGS",
    "lat": 44.681854,
    "lng": -75.4655
  },
  {
    "name": "Otis Angb",
    "city": "Falmouth",
    "country": "United States",
    "code1": "FMH",
    "code2": "KFMH",
    "lat": 41.658439,
    "lng": -70.521417
  },
  {
    "name": "Boeing Fld King Co Intl",
    "city": "Seattle",
    "country": "United States",
    "code1": "BFI",
    "code2": "KBFI",
    "lat": 47.53,
    "lng": -122.301947
  },
  {
    "name": "Lackland Afb Kelly Fld Annex",
    "city": "San Antonio",
    "country": "United States",
    "code1": "SKF",
    "code2": "KSKF",
    "lat": 29.384228,
    "lng": -98.581108
  },
  {
    "name": "Honolulu Intl",
    "city": "Honolulu",
    "country": "United States",
    "code1": "HNL",
    "code2": "PHNL",
    "lat": 21.318681,
    "lng": -157.922428
  },
  {
    "name": "Des Moines Intl",
    "city": "Des Moines",
    "country": "United States",
    "code1": "DSM",
    "code2": "KDSM",
    "lat": 41.533972,
    "lng": -93.663083
  },
  {
    "name": "Craven Co Rgnl",
    "city": "New Bern",
    "country": "United States",
    "code1": "EWN",
    "code2": "KEWN",
    "lat": 35.072972,
    "lng": -77.042944
  },
  {
    "name": "San Diego Intl",
    "city": "San Diego",
    "country": "United States",
    "code1": "SAN",
    "code2": "KSAN",
    "lat": 32.733556,
    "lng": -117.189667
  },
  {
    "name": "Monroe Rgnl",
    "city": "Monroe",
    "country": "United States",
    "code1": "MLU",
    "code2": "KMLU",
    "lat": 32.510864,
    "lng": -92.037689
  },
  {
    "name": "Shaw Afb",
    "city": "Sumter",
    "country": "United States",
    "code1": "SSC",
    "code2": "KSSC",
    "lat": 33.972719,
    "lng": -80.470564
  },
  {
    "name": "Ontario Intl",
    "city": "Ontario",
    "country": "United States",
    "code1": "ONT",
    "code2": "KONT",
    "lat": 34.056,
    "lng": -117.601194
  },
  {
    "name": "Majors",
    "city": "Greenvile",
    "country": "United States",
    "code1": "GVT",
    "code2": "KGVT",
    "lat": 33.067839,
    "lng": -96.065333
  },
  {
    "name": "Roswell Intl Air Center",
    "city": "Roswell",
    "country": "United States",
    "code1": "ROW",
    "code2": "KROW",
    "lat": 33.301556,
    "lng": -104.530556
  },
  {
    "name": "Coleman A Young Muni",
    "city": "Detroit",
    "country": "United States",
    "code1": "DET",
    "code2": "KDET",
    "lat": 42.409195,
    "lng": -83.009861
  },
  {
    "name": "Brownsville South Padre Island Intl",
    "city": "Brownsville",
    "country": "United States",
    "code1": "BRO",
    "code2": "KBRO",
    "lat": 25.906833,
    "lng": -97.425861
  },
  {
    "name": "Dothan Rgnl",
    "city": "Dothan",
    "country": "United States",
    "code1": "DHN",
    "code2": "KDHN",
    "lat": 31.321339,
    "lng": -85.449628
  },
  {
    "name": "Cape May Co",
    "city": "Wildwood",
    "country": "United States",
    "code1": "WWD",
    "code2": "KWWD",
    "lat": 39.008507,
    "lng": -74.908275
  },
  {
    "name": "Fallon Nas",
    "city": "Fallon",
    "country": "United States",
    "code1": "NFL",
    "code2": "KNFL",
    "lat": 39.416584,
    "lng": -118.70098
  },
  {
    "name": "Selfridge Angb",
    "city": "Mount Clemens",
    "country": "United States",
    "code1": "MTC",
    "code2": "KMTC",
    "lat": 42.608333,
    "lng": -82.8355
  },
  {
    "name": "Four Corners Rgnl",
    "city": "Farmington",
    "country": "United States",
    "code1": "FMN",
    "code2": "KFMN",
    "lat": 36.74125,
    "lng": -108.229944
  },
  {
    "name": "Corpus Christi Intl",
    "city": "Corpus Christi",
    "country": "United States",
    "code1": "CRP",
    "code2": "KCRP",
    "lat": 27.770361,
    "lng": -97.501222
  },
  {
    "name": "Syracuse Hancock Intl",
    "city": "Syracuse",
    "country": "United States",
    "code1": "SYR",
    "code2": "KSYR",
    "lat": 43.111187,
    "lng": -76.106311
  },
  {
    "name": "Key West Nas",
    "city": "Key West",
    "country": "United States",
    "code1": "NQX",
    "code2": "KNQX",
    "lat": 24.575834,
    "lng": -81.688889
  },
  {
    "name": "Chicago Midway Intl",
    "city": "Chicago",
    "country": "United States",
    "code1": "MDW",
    "code2": "KMDW",
    "lat": 41.785972,
    "lng": -87.752417
  },
  {
    "name": "Norman Y Mineta San Jose Intl",
    "city": "San Jose",
    "country": "United States",
    "code1": "SJC",
    "code2": "KSJC",
    "lat": 37.3626,
    "lng": -121.929022
  },
  {
    "name": "Lea Co Rgnl",
    "city": "Hobbs",
    "country": "United States",
    "code1": "HOB",
    "code2": "KHOB",
    "lat": 32.687528,
    "lng": -103.217028
  },
  {
    "name": "Northeast Philadelphia",
    "city": "Philadelphia",
    "country": "United States",
    "code1": "PNE",
    "code2": "KPNE",
    "lat": 40.081944,
    "lng": -75.010586
  },
  {
    "name": "Denver Intl",
    "city": "Denver",
    "country": "United States",
    "code1": "DEN",
    "code2": "KDEN",
    "lat": 39.861656,
    "lng": -104.673178
  },
  {
    "name": "Philadelphia Intl",
    "city": "Philadelphia",
    "country": "United States",
    "code1": "PHL",
    "code2": "KPHL",
    "lat": 39.871944,
    "lng": -75.241139
  },
  {
    "name": "Sioux Gateway Col Bud Day Fld",
    "city": "Sioux City",
    "country": "United States",
    "code1": "SUX",
    "code2": "KSUX",
    "lat": 42.402603,
    "lng": -96.384367
  },
  {
    "name": "Middle Georgia Rgnl",
    "city": "Macon",
    "country": "United States",
    "code1": "MCN",
    "code2": "KMCN",
    "lat": 32.69285,
    "lng": -83.649211
  },
  {
    "name": "Truth Or Consequences Muni",
    "city": "Truth Or Consequences",
    "country": "United States",
    "code1": "TCS",
    "code2": "KTCS",
    "lat": 33.236944,
    "lng": -107.27175
  },
  {
    "name": "Palmdale Rgnl Usaf Plt 42",
    "city": "Palmdale",
    "country": "United States",
    "code1": "PMD",
    "code2": "KPMD",
    "lat": 34.629391,
    "lng": -118.08456
  },
  {
    "name": "Randolph Afb",
    "city": "San Antonio",
    "country": "United States",
    "code1": "RND",
    "code2": "KRND",
    "lat": 29.529675,
    "lng": -98.2789
  },
  {
    "name": "El Centro Naf",
    "city": "El Centro",
    "country": "United States",
    "code1": "NJK",
    "code2": "KNJK",
    "lat": 32.829222,
    "lng": -115.671667
  },
  {
    "name": "Port Columbus Intl",
    "city": "Columbus",
    "country": "United States",
    "code1": "CMH",
    "code2": "KCMH",
    "lat": 39.997972,
    "lng": -82.891889
  },
  {
    "name": "Drake Fld",
    "city": "Fayetteville",
    "country": "United States",
    "code1": "FYV",
    "code2": "KFYV",
    "lat": 36.005094,
    "lng": -94.170059
  },
  {
    "name": "Henry Post Aaf",
    "city": "Fort Sill",
    "country": "United States",
    "code1": "FSI",
    "code2": "KFSI",
    "lat": 34.649833,
    "lng": -98.402167
  },
  {
    "name": "Princeton Muni",
    "city": "Princeton",
    "country": "United States",
    "code1": "PNM",
    "code2": "KPNM",
    "lat": 45.559868,
    "lng": -93.608217
  },
  {
    "name": "Wright Patterson Afb",
    "city": "Dayton",
    "country": "United States",
    "code1": "FFO",
    "code2": "KFFO",
    "lat": 39.826111,
    "lng": -84.048332
  },
  {
    "name": "Edward G Pitka Sr",
    "city": "Galena",
    "country": "United States",
    "code1": "GAL",
    "code2": "PAGA",
    "lat": 64.736178,
    "lng": -156.937417
  },
  {
    "name": "Chandler Muni",
    "city": "Chandler",
    "country": "United States",
    "code1": "",
    "code2": "KCHD",
    "lat": 33.269111,
    "lng": -111.811111
  },
  {
    "name": "Mineral Wells",
    "city": "Mineral Wells",
    "country": "United States",
    "code1": "MWL",
    "code2": "KMWL",
    "lat": 32.781606,
    "lng": -98.060175
  },
  {
    "name": "Mc Connell Afb",
    "city": "Wichita",
    "country": "United States",
    "code1": "IAB",
    "code2": "KIAB",
    "lat": 37.621853,
    "lng": -97.268192
  },
  {
    "name": "New Orleans Nas Jrb",
    "city": "New Orleans",
    "country": "United States",
    "code1": "NBG",
    "code2": "KNBG",
    "lat": 29.825333,
    "lng": -90.035
  },
  {
    "name": "Beaufort",
    "city": "Beaufort",
    "country": "United States",
    "code1": "BFT",
    "code2": "KNBC",
    "lat": 32.477411,
    "lng": -80.723161
  },
  {
    "name": "Texarkana Rgnl Webb Fld",
    "city": "Texarkana",
    "country": "United States",
    "code1": "TXK",
    "code2": "KTXK",
    "lat": 33.453722,
    "lng": -93.991028
  },
  {
    "name": "Plattsburgh Intl",
    "city": "Plattsburgh",
    "country": "United States",
    "code1": "PBG",
    "code2": "KPBG",
    "lat": 44.650944,
    "lng": -73.468139
  },
  {
    "name": "Phillips Aaf",
    "city": "Aberdeen",
    "country": "United States",
    "code1": "APG",
    "code2": "KAPG",
    "lat": 39.466219,
    "lng": -76.168808
  },
  {
    "name": "Tucumcari Muni",
    "city": "Tucumcari",
    "country": "United States",
    "code1": "TCC",
    "code2": "KTCC",
    "lat": 35.182777,
    "lng": -103.603186
  },
  {
    "name": "Ted Stevens Anchorage Intl",
    "city": "Anchorage",
    "country": "United States",
    "code1": "ANC",
    "code2": "PANC",
    "lat": 61.174361,
    "lng": -149.996361
  },
  {
    "name": "Robert Gray Aaf",
    "city": "Killeen",
    "country": "United States",
    "code1": "GRK",
    "code2": "KGRK",
    "lat": 31.06725,
    "lng": -97.828917
  },
  {
    "name": "Black Rock",
    "city": "Zuni Pueblo",
    "country": "United States",
    "code1": "ZUN",
    "code2": "KZUN",
    "lat": 35.083228,
    "lng": -108.791778
  },
  {
    "name": "Bellingham Intl",
    "city": "Bellingham",
    "country": "United States",
    "code1": "BLI",
    "code2": "KBLI",
    "lat": 48.792694,
    "lng": -122.537528
  },
  {
    "name": "Millington Rgnl Jetport",
    "city": "Millington",
    "country": "United States",
    "code1": "NQA",
    "code2": "KNQA",
    "lat": 35.356667,
    "lng": -89.870278
  },
  {
    "name": "Elkins Randolph Co Jennings Randolph",
    "city": "Elkins",
    "country": "United States",
    "code1": "EKN",
    "code2": "KEKN",
    "lat": 38.889444,
    "lng": -79.857139
  },
  {
    "name": "Hartford Brainard",
    "city": "Hartford",
    "country": "United States",
    "code1": "HFD",
    "code2": "KHFD",
    "lat": 41.736722,
    "lng": -72.649444
  },
  {
    "name": "North Central State",
    "city": "Smithfield",
    "country": "United States",
    "code1": "SFZ",
    "code2": "KSFZ",
    "lat": 41.920764,
    "lng": -71.491381
  },
  {
    "name": "Mobile Rgnl",
    "city": "Mobile",
    "country": "United States",
    "code1": "MOB",
    "code2": "KMOB",
    "lat": 30.691231,
    "lng": -88.242814
  },
  {
    "name": "Moffett Federal Afld",
    "city": "Mountain View",
    "country": "United States",
    "code1": "NUQ",
    "code2": "KNUQ",
    "lat": 37.416142,
    "lng": -122.049139
  },
  {
    "name": "Santa Fe Muni",
    "city": "Santa Fe",
    "country": "United States",
    "code1": "SAF",
    "code2": "KSAF",
    "lat": 35.617108,
    "lng": -106.089422
  },
  {
    "name": "Barking Sands Pmrf",
    "city": "Barking Sands",
    "country": "United States",
    "code1": "BKH",
    "code2": "PHBK",
    "lat": 22.022833,
    "lng": -159.785
  },
  {
    "name": "Beauregard Rgnl",
    "city": "Deridder",
    "country": "United States",
    "code1": "DRI",
    "code2": "KDRI",
    "lat": 30.831722,
    "lng": -93.339917
  },
  {
    "name": "Bradshaw Aaf",
    "city": "Bradshaw Field",
    "country": "United States",
    "code1": "BSF",
    "code2": "PHSF",
    "lat": 19.760056,
    "lng": -155.553717
  },
  {
    "name": "Nogales Intl",
    "city": "Nogales",
    "country": "United States",
    "code1": "OLS",
    "code2": "KOLS",
    "lat": 31.417722,
    "lng": -110.84789
  },
  {
    "name": "Macdill Afb",
    "city": "Tampa",
    "country": "United States",
    "code1": "MCF",
    "code2": "KMCF",
    "lat": 27.849339,
    "lng": -82.521214
  },
  {
    "name": "Scott Afb Midamerica",
    "city": "Belleville",
    "country": "United States",
    "code1": "BLV",
    "code2": "KBLV",
    "lat": 38.545178,
    "lng": -89.835183
  },
  {
    "name": "Opa Locka",
    "city": "Miami",
    "country": "United States",
    "code1": "OPF",
    "code2": "KOPF",
    "lat": 25.907,
    "lng": -80.278389
  },
  {
    "name": "Del Rio Intl",
    "city": "Del Rio",
    "country": "United States",
    "code1": "DRT",
    "code2": "KDRT",
    "lat": 29.374208,
    "lng": -100.927158
  },
  {
    "name": "Southwest Florida Intl",
    "city": "Fort Myers",
    "country": "United States",
    "code1": "RSW",
    "code2": "KRSW",
    "lat": 26.536167,
    "lng": -81.755167
  },
  {
    "name": "King Salmon",
    "city": "King Salmon",
    "country": "United States",
    "code1": "AKN",
    "code2": "PAKN",
    "lat": 58.676778,
    "lng": -156.649278
  },
  {
    "name": "Muir Aaf",
    "city": "Muir",
    "country": "United States",
    "code1": "MUI",
    "code2": "KMUI",
    "lat": 40.434811,
    "lng": -76.569411
  },
  {
    "name": "Kapalua",
    "city": "Lahania-kapalua",
    "country": "United States",
    "code1": "JHM",
    "code2": "PHJH",
    "lat": 20.962936,
    "lng": -156.673031
  },
  {
    "name": "John F Kennedy Intl",
    "city": "New York",
    "country": "United States",
    "code1": "JFK",
    "code2": "KJFK",
    "lat": 40.639751,
    "lng": -73.778925
  },
  {
    "name": "Homestead Arb",
    "city": "Homestead",
    "country": "United States",
    "code1": "HST",
    "code2": "KHST",
    "lat": 25.48855,
    "lng": -80.383567
  },
  {
    "name": "Riverside Muni",
    "city": "Riverside",
    "country": "United States",
    "code1": "RAL",
    "code2": "KRAL",
    "lat": 33.951875,
    "lng": -117.445103
  },
  {
    "name": "Sherman Aaf",
    "city": "Fort Leavenworth",
    "country": "United States",
    "code1": "FLV",
    "code2": "KFLV",
    "lat": 39.368332,
    "lng": -94.914686
  },
  {
    "name": "Wallops Flight Facility",
    "city": "Wallops Island",
    "country": "United States",
    "code1": "WAL",
    "code2": "KWAL",
    "lat": 37.940194,
    "lng": -75.466389
  },
  {
    "name": "Holloman Afb",
    "city": "Alamogordo",
    "country": "United States",
    "code1": "HMN",
    "code2": "KHMN",
    "lat": 32.852519,
    "lng": -106.106525
  },
  {
    "name": "Willow Grove Nas Jrb",
    "city": "Willow Grove",
    "country": "United States",
    "code1": "NXX",
    "code2": "KNXX",
    "lat": 40.199833,
    "lng": -75.148167
  },
  {
    "name": "Cheyenne Rgnl Jerry Olson Fld",
    "city": "Cheyenne",
    "country": "United States",
    "code1": "CYS",
    "code2": "KCYS",
    "lat": 41.155722,
    "lng": -104.811839
  },
  {
    "name": "Stockton Metropolitan",
    "city": "Stockton",
    "country": "United States",
    "code1": "SCK",
    "code2": "KSCK",
    "lat": 37.894167,
    "lng": -121.238306
  },
  {
    "name": "Charleston Afb Intl",
    "city": "Charleston",
    "country": "United States",
    "code1": "CHS",
    "code2": "KCHS",
    "lat": 32.898647,
    "lng": -80.040528
  },
  {
    "name": "Reno Tahoe Intl",
    "city": "Reno",
    "country": "United States",
    "code1": "RNO",
    "code2": "KRNO",
    "lat": 39.499108,
    "lng": -119.768108
  },
  {
    "name": "Ketchikan Intl",
    "city": "Ketchikan",
    "country": "United States",
    "code1": "KTN",
    "code2": "PAKT",
    "lat": 55.355556,
    "lng": -131.71375
  },
  {
    "name": "Willow Run",
    "city": "Detroit",
    "country": "United States",
    "code1": "YIP",
    "code2": "KYIP",
    "lat": 42.237928,
    "lng": -83.530408
  },
  {
    "name": "Vandenberg Afb",
    "city": "Lompoc",
    "country": "United States",
    "code1": "VBG",
    "code2": "KVBG",
    "lat": 34.737333,
    "lng": -120.584306
  },
  {
    "name": "Birmingham Intl",
    "city": "Birmingham",
    "country": "United States",
    "code1": "BHM",
    "code2": "KBHM",
    "lat": 33.562942,
    "lng": -86.75355
  },
  {
    "name": "Lakehurst Naes",
    "city": "Lakehurst",
    "country": "United States",
    "code1": "NEL",
    "code2": "KNEL",
    "lat": 40.033333,
    "lng": -74.353333
  },
  {
    "name": "Eareckson As",
    "city": "Shemya",
    "country": "United States",
    "code1": "SYA",
    "code2": "PASY",
    "lat": 52.712275,
    "lng": 174.11362
  },
  {
    "name": "Nellis Afb",
    "city": "Las Vegas",
    "country": "United States",
    "code1": "LSV",
    "code2": "KLSV",
    "lat": 36.236197,
    "lng": -115.034253
  },
  {
    "name": "March Arb",
    "city": "Riverside",
    "country": "United States",
    "code1": "RIV",
    "code2": "KRIV",
    "lat": 33.880711,
    "lng": -117.259453
  },
  {
    "name": "Modesto City Co Harry Sham",
    "city": "Modesto",
    "country": "United States",
    "code1": "MOD",
    "code2": "KMOD",
    "lat": 37.625817,
    "lng": -120.954422
  },
  {
    "name": "Sacramento Intl",
    "city": "Sacramento",
    "country": "United States",
    "code1": "SMF",
    "code2": "KSMF",
    "lat": 38.695417,
    "lng": -121.590778
  },
  {
    "name": "Waukegan Rgnl",
    "city": "Chicago",
    "country": "United States",
    "code1": "UGN",
    "code2": "KUGN",
    "lat": 42.422161,
    "lng": -87.867908
  },
  {
    "name": "City Of Colorado Springs Muni",
    "city": "Colorado Springs",
    "country": "United States",
    "code1": "COS",
    "code2": "KCOS",
    "lat": 38.805805,
    "lng": -104.700778
  },
  {
    "name": "Buffalo Niagara Intl",
    "city": "Buffalo",
    "country": "United States",
    "code1": "BUF",
    "code2": "KBUF",
    "lat": 42.940525,
    "lng": -78.732167
  },
  {
    "name": "Griffing Sandusky",
    "city": "Sandusky",
    "country": "United States",
    "code1": "SKY",
    "code2": "KSKY",
    "lat": 41.433361,
    "lng": -82.652333
  },
  {
    "name": "Snohomish Co",
    "city": "Everett",
    "country": "United States",
    "code1": "PAE",
    "code2": "KPAE",
    "lat": 47.906342,
    "lng": -122.281564
  },
  {
    "name": "Mountain Home Afb",
    "city": "Mountain Home",
    "country": "United States",
    "code1": "MUO",
    "code2": "KMUO",
    "lat": 43.043603,
    "lng": -115.872431
  },
  {
    "name": "Cedar City Rgnl",
    "city": "Cedar City",
    "country": "United States",
    "code1": "CDC",
    "code2": "KCDC",
    "lat": 37.700967,
    "lng": -113.098847
  },
  {
    "name": "Bradley Intl",
    "city": "Windsor Locks",
    "country": "United States",
    "code1": "BDL",
    "code2": "KBDL",
    "lat": 41.938889,
    "lng": -72.683222
  },
  {
    "name": "Mc Allen Miller Intl",
    "city": "Mcallen",
    "country": "United States",
    "code1": "MFE",
    "code2": "KMFE",
    "lat": 26.175833,
    "lng": -98.238611
  },
  {
    "name": "Norfolk Ns",
    "city": "Norfolk",
    "country": "United States",
    "code1": "NGU",
    "code2": "KNGU",
    "lat": 36.937644,
    "lng": -76.289289
  },
  {
    "name": "Westover Arb Metropolitan",
    "city": "Chicopee Falls",
    "country": "United States",
    "code1": "CEF",
    "code2": "KCEF",
    "lat": 42.194014,
    "lng": -72.534783
  },
  {
    "name": "Lubbock Preston Smith Intl",
    "city": "Lubbock",
    "country": "United States",
    "code1": "LBB",
    "code2": "KLBB",
    "lat": 33.663639,
    "lng": -101.822778
  },
  {
    "name": "Chicago Ohare Intl",
    "city": "Chicago",
    "country": "United States",
    "code1": "ORD",
    "code2": "KORD",
    "lat": 41.978603,
    "lng": -87.904842
  },
  {
    "name": "Boca Raton",
    "city": "Boca Raton",
    "country": "United States",
    "code1": "BCT",
    "code2": "KBCT",
    "lat": 26.3785,
    "lng": -80.107694
  },
  {
    "name": "Fairbanks Intl",
    "city": "Fairbanks",
    "country": "United States",
    "code1": "FAI",
    "code2": "PAFA",
    "lat": 64.815114,
    "lng": -147.856267
  },
  {
    "name": "Quantico Mcaf",
    "city": "Quantico",
    "country": "United States",
    "code1": "NYG",
    "code2": "KNYG",
    "lat": 38.501683,
    "lng": -77.305333
  },
  {
    "name": "Cannon Afb",
    "city": "Clovis",
    "country": "United States",
    "code1": "CVS",
    "code2": "KCVS",
    "lat": 34.382775,
    "lng": -103.322147
  },
  {
    "name": "Kaneohe Bay Mcaf",
    "city": "Kaneohe Bay",
    "country": "United States",
    "code1": "NGF",
    "code2": "PHNG",
    "lat": 21.450453,
    "lng": -157.768
  },
  {
    "name": "Offutt Afb",
    "city": "Omaha",
    "country": "United States",
    "code1": "OFF",
    "code2": "KOFF",
    "lat": 41.118332,
    "lng": -95.912511
  },
  {
    "name": "Gulkana",
    "city": "Gulkana",
    "country": "United States",
    "code1": "GKN",
    "code2": "PAGK",
    "lat": 62.154888,
    "lng": -145.456639
  },
  {
    "name": "Watertown Intl",
    "city": "Watertown",
    "country": "United States",
    "code1": "ART",
    "code2": "KART",
    "lat": 43.991922,
    "lng": -76.021739
  },
  {
    "name": "Palm Springs Intl",
    "city": "Palm Springs",
    "country": "United States",
    "code1": "PSP",
    "code2": "KPSP",
    "lat": 33.829667,
    "lng": -116.506694
  },
  {
    "name": "Rick Husband Amarillo Intl",
    "city": "Amarillo",
    "country": "United States",
    "code1": "AMA",
    "code2": "KAMA",
    "lat": 35.219369,
    "lng": -101.705931
  },
  {
    "name": "Fort Dodge Rgnl",
    "city": "Fort Dodge",
    "country": "United States",
    "code1": "FOD",
    "code2": "KFOD",
    "lat": 42.5512,
    "lng": -94.191842
  },
  {
    "name": "Barksdale Afb",
    "city": "Shreveport",
    "country": "United States",
    "code1": "BAD",
    "code2": "KBAD",
    "lat": 32.50182,
    "lng": -93.662674
  },
  {
    "name": "Forbes Fld",
    "city": "Topeka",
    "country": "United States",
    "code1": "FOE",
    "code2": "KFOE",
    "lat": 38.950944,
    "lng": -95.663611
  },
  {
    "name": "Cotulla Lasalle Co",
    "city": "Cotulla",
    "country": "United States",
    "code1": "COT",
    "code2": "KCOT",
    "lat": 28.456694,
    "lng": -99.220294
  },
  {
    "name": "Wilmington Intl",
    "city": "Wilmington",
    "country": "United States",
    "code1": "ILM",
    "code2": "KILM",
    "lat": 34.270615,
    "lng": -77.902569
  },
  {
    "name": "Baton Rouge Metro Ryan Fld",
    "city": "Baton Rouge",
    "country": "United States",
    "code1": "BTR",
    "code2": "KBTR",
    "lat": 30.533167,
    "lng": -91.149639
  },
  {
    "name": "Meridian Nas",
    "city": "Meridian",
    "country": "United States",
    "code1": "NMM",
    "code2": "KNMM",
    "lat": 32.552083,
    "lng": -88.555557
  },
  {
    "name": "Tyler Pounds Rgnl",
    "city": "Tyler",
    "country": "United States",
    "code1": "TYR",
    "code2": "KTYR",
    "lat": 32.354139,
    "lng": -95.402386
  },
  {
    "name": "Baltimore Washington Intl",
    "city": "Baltimore",
    "country": "United States",
    "code1": "BWI",
    "code2": "KBWI",
    "lat": 39.175361,
    "lng": -76.668333
  },
  {
    "name": "Hobart Muni",
    "city": "Hobart",
    "country": "United States",
    "code1": "HBR",
    "code2": "KHBR",
    "lat": 34.991308,
    "lng": -99.051353
  },
  {
    "name": "Lanai",
    "city": "Lanai",
    "country": "United States",
    "code1": "LNY",
    "code2": "PHNY",
    "lat": 20.785611,
    "lng": -156.951419
  },
  {
    "name": "Alexandria Intl",
    "city": "Alexandria",
    "country": "United States",
    "code1": "AEX",
    "code2": "KAEX",
    "lat": 31.3274,
    "lng": -92.549833
  },
  {
    "name": "Condron Aaf",
    "city": "White Sands",
    "country": "United States",
    "code1": "WSD",
    "code2": "KWSD",
    "lat": 32.341484,
    "lng": -106.40277
  },
  {
    "name": "Cold Bay",
    "city": "Cold Bay",
    "country": "United States",
    "code1": "CDB",
    "code2": "PACD",
    "lat": 55.206061,
    "lng": -162.725436
  },
  {
    "name": "Tulsa Intl",
    "city": "Tulsa",
    "country": "United States",
    "code1": "TUL",
    "code2": "KTUL",
    "lat": 36.198389,
    "lng": -95.888111
  },
  {
    "name": "Sitka Rocky Gutierrez",
    "city": "Sitka",
    "country": "United States",
    "code1": "SIT",
    "code2": "PASI",
    "lat": 57.047138,
    "lng": -135.361611
  },
  {
    "name": "Long Island Mac Arthur",
    "city": "Islip",
    "country": "United States",
    "code1": "ISP",
    "code2": "KISP",
    "lat": 40.79525,
    "lng": -73.100222
  },
  {
    "name": "Minneapolis St Paul Intl",
    "city": "Minneapolis",
    "country": "United States",
    "code1": "MSP",
    "code2": "KMSP",
    "lat": 44.881956,
    "lng": -93.221767
  },
  {
    "name": "New Castle",
    "city": "Wilmington",
    "country": "United States",
    "code1": "ILG",
    "code2": "KILG",
    "lat": 39.678722,
    "lng": -75.606528
  },
  {
    "name": "Unalaska",
    "city": "Unalaska",
    "country": "United States",
    "code1": "DUT",
    "code2": "PADU",
    "lat": 53.900139,
    "lng": -166.5435
  },
  {
    "name": "Louis Armstrong New Orleans Intl",
    "city": "New Orleans",
    "country": "United States",
    "code1": "MSY",
    "code2": "KMSY",
    "lat": 29.993389,
    "lng": -90.258028
  },
  {
    "name": "Portland Intl Jetport",
    "city": "Portland",
    "country": "United States",
    "code1": "PWM",
    "code2": "KPWM",
    "lat": 43.646161,
    "lng": -70.309281
  },
  {
    "name": "Will Rogers World",
    "city": "Oklahoma City",
    "country": "United States",
    "code1": "OKC",
    "code2": "KOKC",
    "lat": 35.393089,
    "lng": -97.600733
  },
  {
    "name": "Albany Intl",
    "city": "Albany",
    "country": "United States",
    "code1": "ALB",
    "code2": "KALB",
    "lat": 42.748267,
    "lng": -73.801692
  },
  {
    "name": "Valdez Pioneer Fld",
    "city": "Valdez",
    "country": "United States",
    "code1": "VDZ",
    "code2": "PAVD",
    "lat": 61.133949,
    "lng": -146.248342
  },
  {
    "name": "Langley Afb",
    "city": "Hampton",
    "country": "United States",
    "code1": "LFI",
    "code2": "KLFI",
    "lat": 37.082881,
    "lng": -76.360547
  },
  {
    "name": "John Wayne Arpt Orange Co",
    "city": "Santa Ana",
    "country": "United States",
    "code1": "SNA",
    "code2": "KSNA",
    "lat": 33.675667,
    "lng": -117.868222
  },
  {
    "name": "Columbus Afb",
    "city": "Colombus",
    "country": "United States",
    "code1": "CBM",
    "code2": "KCBM",
    "lat": 33.643833,
    "lng": -88.443833
  },
  {
    "name": "Kendall Tamiami Executive",
    "city": "Kendall-tamiami",
    "country": "United States",
    "code1": "TMB",
    "code2": "KTMB",
    "lat": 25.647889,
    "lng": -80.432777
  },
  {
    "name": "Oceana Nas",
    "city": "Oceana",
    "country": "United States",
    "code1": "NTU",
    "code2": "KNTU",
    "lat": 36.820703,
    "lng": -76.033542
  },
  {
    "name": "Grissom Arb",
    "city": "Peru",
    "country": "United States",
    "code1": "GUS",
    "code2": "KGUS",
    "lat": 40.648094,
    "lng": -86.152119
  },
  {
    "name": "Natrona Co Intl",
    "city": "Casper",
    "country": "United States",
    "code1": "CPR",
    "code2": "KCPR",
    "lat": 42.908,
    "lng": -106.464417
  },
  {
    "name": "Eglin Afb",
    "city": "Valparaiso",
    "country": "United States",
    "code1": "VPS",
    "code2": "KVPS",
    "lat": 30.48325,
    "lng": -86.5254
  },
  {
    "name": "Craig Fld",
    "city": "Selma",
    "country": "United States",
    "code1": "SEM",
    "code2": "KSEM",
    "lat": 32.343947,
    "lng": -86.987803
  },
  {
    "name": "Key West Intl",
    "city": "Key West",
    "country": "United States",
    "code1": "EYW",
    "code2": "KEYW",
    "lat": 24.556111,
    "lng": -81.759556
  },
  {
    "name": "Charlotte Douglas Intl",
    "city": "Charlotte",
    "country": "United States",
    "code1": "CLT",
    "code2": "KCLT",
    "lat": 35.214,
    "lng": -80.943139
  },
  {
    "name": "Mc Carran Intl",
    "city": "Las Vegas",
    "country": "United States",
    "code1": "LAS",
    "code2": "KLAS",
    "lat": 36.080056,
    "lng": -115.15225
  },
  {
    "name": "Orlando Intl",
    "city": "Orlando",
    "country": "United States",
    "code1": "MCO",
    "code2": "KMCO",
    "lat": 28.429394,
    "lng": -81.308994
  },
  {
    "name": "Florence Rgnl",
    "city": "Florence",
    "country": "United States",
    "code1": "FLO",
    "code2": "KFLO",
    "lat": 34.185361,
    "lng": -79.723889
  },
  {
    "name": "Great Falls Intl",
    "city": "Great Falls",
    "country": "United States",
    "code1": "GTF",
    "code2": "KGTF",
    "lat": 47.482,
    "lng": -111.370689
  },
  {
    "name": "Youngstown Warren Rgnl",
    "city": "Youngstown",
    "country": "United States",
    "code1": "YNG",
    "code2": "KYNG",
    "lat": 41.260736,
    "lng": -80.679097
  },
  {
    "name": "Ladd Aaf",
    "city": "Fort Wainwright",
    "country": "United States",
    "code1": "FBK",
    "code2": "PAFB",
    "lat": 64.8375,
    "lng": -147.614444
  },
  {
    "name": "Mc Minnville Muni",
    "city": "Mackminnville",
    "country": "United States",
    "code1": "MMV",
    "code2": "KMMV",
    "lat": 45.194444,
    "lng": -123.135944
  },
  {
    "name": "Robins Afb",
    "city": "Macon",
    "country": "United States",
    "code1": "WRB",
    "code2": "KWRB",
    "lat": 32.640144,
    "lng": -83.59185
  },
  {
    "name": "Suvarnabhumi Intl",
    "city": "Bangkok",
    "country": "Thailand",
    "code1": "BKK",
    "code2": "VTBS",
    "lat": 13.681108,
    "lng": 100.747283
  },
  {
    "name": "Andi Jemma",
    "city": "Masamba",
    "country": "Indonesia",
    "code1": "",
    "code2": "WAWM",
    "lat": -2.558044,
    "lng": 120.324383
  },
  {
    "name": "Soroako",
    "city": "Soroako",
    "country": "Indonesia",
    "code1": "",
    "code2": "WAWS",
    "lat": -2.531203,
    "lng": 121.357639
  },
  {
    "name": "Pongtiku",
    "city": "Makale",
    "country": "Indonesia",
    "code1": "",
    "code2": "WAWT",
    "lat": -3.044736,
    "lng": 119.821536
  },
  {
    "name": "Wolter Monginsidi",
    "city": "Kendari",
    "country": "Indonesia",
    "code1": "KDI",
    "code2": "WAWW",
    "lat": -4.081608,
    "lng": 122.418231
  },
  {
    "name": "Maimun Saleh",
    "city": "Sabang",
    "country": "Indonesia",
    "code1": "SBG",
    "code2": "WITB",
    "lat": 5.874131,
    "lng": 95.339672
  },
  {
    "name": "Cibeureum",
    "city": "Tasikmalaya",
    "country": "Indonesia",
    "code1": "",
    "code2": "WICM",
    "lat": -7.346603,
    "lng": 108.246092
  },
  {
    "name": "Iswahyudi",
    "city": "Madiun",
    "country": "Indonesia",
    "code1": "",
    "code2": "WARI",
    "lat": -7.615767,
    "lng": 111.434117
  },
  {
    "name": "Abdul Rachman Saleh",
    "city": "Malang",
    "country": "Indonesia",
    "code1": "MLG",
    "code2": "WARA",
    "lat": -7.926556,
    "lng": 112.714514
  },
  {
    "name": "Budiarto",
    "city": "Tangerang",
    "country": "Indonesia",
    "code1": "",
    "code2": "WICB",
    "lat": -6.293169,
    "lng": 106.5699
  },
  {
    "name": "Husein Sastranegara",
    "city": "Bandung",
    "country": "Indonesia",
    "code1": "BDO",
    "code2": "WICC",
    "lat": -6.900625,
    "lng": 107.576294
  },
  {
    "name": "Penggung",
    "city": "Cirebon",
    "country": "Indonesia",
    "code1": "CBN",
    "code2": "WICD",
    "lat": -6.756144,
    "lng": 108.539672
  },
  {
    "name": "Adi Sutjipto",
    "city": "Yogyakarta",
    "country": "Indonesia",
    "code1": "JOG",
    "code2": "WARJ",
    "lat": -7.788181,
    "lng": 110.431758
  },
  {
    "name": "Tunggul Wulung",
    "city": "Cilacap",
    "country": "Indonesia",
    "code1": "CXP",
    "code2": "WIHL",
    "lat": -7.645056,
    "lng": 109.033911
  },
  {
    "name": "Pondok Cabe",
    "city": "Jakarta",
    "country": "Indonesia",
    "code1": "PCB",
    "code2": "WIHP",
    "lat": -6.336964,
    "lng": 106.764561
  },
  {
    "name": "Achmad Yani",
    "city": "Semarang",
    "country": "Indonesia",
    "code1": "SRG",
    "code2": "WARS",
    "lat": -6.971447,
    "lng": 110.374122
  },
  {
    "name": "Hang Nadim",
    "city": "Batam",
    "country": "Indonesia",
    "code1": "BTH",
    "code2": "WIDD",
    "lat": 1.121028,
    "lng": 104.118753
  },
  {
    "name": "H As Hanandjoeddin",
    "city": "Tanjung Pandan",
    "country": "Indonesia",
    "code1": "TJQ",
    "code2": "WIOD",
    "lat": -2.745722,
    "lng": 107.754917
  },
  {
    "name": "Depati Amir",
    "city": "Pangkal Pinang",
    "country": "Indonesia",
    "code1": "PGK",
    "code2": "WIPK",
    "lat": -2.1622,
    "lng": 106.139064
  },
  {
    "name": "Kijang",
    "city": "Tanjung Pinang",
    "country": "Indonesia",
    "code1": "TNJ",
    "code2": "WIDN",
    "lat": 0.922683,
    "lng": 104.532311
  },
  {
    "name": "Dabo",
    "city": "Singkep",
    "country": "Indonesia",
    "code1": "SIQ",
    "code2": "WIDS",
    "lat": -0.479189,
    "lng": 104.579283
  },
  {
    "name": "Syamsudin Noor",
    "city": "Banjarmasin",
    "country": "Indonesia",
    "code1": "BDJ",
    "code2": "WAOO",
    "lat": -3.442356,
    "lng": 114.762553
  },
  {
    "name": "Batu Licin",
    "city": "Batu Licin",
    "country": "Indonesia",
    "code1": "",
    "code2": "WAOC",
    "lat": -3.412408,
    "lng": 115.995136
  },
  {
    "name": "Iskandar",
    "city": "Pangkalan Bun",
    "country": "Indonesia",
    "code1": "PKN",
    "code2": "WAOI",
    "lat": -2.705197,
    "lng": 111.673208
  },
  {
    "name": "Tjilik Riwut",
    "city": "Palangkaraya",
    "country": "Indonesia",
    "code1": "PKY",
    "code2": "WAOP",
    "lat": -2.225128,
    "lng": 113.942661
  },
  {
    "name": "Militaerlager",
    "city": "S-Chanf",
    "country": "Switzerland",
    "code1": "",
    "code2": "\\N",
    "lat": 46.6166,
    "lng": 9.9833
  },
  {
    "name": "Wai Oti",
    "city": "Maumere",
    "country": "Indonesia",
    "code1": "MOF",
    "code2": "WATC",
    "lat": -8.640647,
    "lng": 122.236889
  },
  {
    "name": "H Hasan Aroeboesman",
    "city": "Ende",
    "country": "Indonesia",
    "code1": "ENE",
    "code2": "WATE",
    "lat": -8.849294,
    "lng": 121.660644
  },
  {
    "name": "Satar Tacik",
    "city": "Ruteng",
    "country": "Indonesia",
    "code1": "RTG",
    "code2": "WATG",
    "lat": -8.597011,
    "lng": 120.477061
  },
  {
    "name": "El Tari",
    "city": "Kupang",
    "country": "Indonesia",
    "code1": "KOE",
    "code2": "WATT",
    "lat": -10.171583,
    "lng": 123.671136
  },
  {
    "name": "Mutiara Ii",
    "city": "Labuhan Bajo",
    "country": "Indonesia",
    "code1": "LBJ",
    "code2": "WATO",
    "lat": -8.486656,
    "lng": 119.88905
  },
  {
    "name": "Sepinggan",
    "city": "Balikpapan",
    "country": "Indonesia",
    "code1": "BPN",
    "code2": "WALL",
    "lat": -1.268272,
    "lng": 116.894478
  },
  {
    "name": "Juwata",
    "city": "Taraken",
    "country": "Indonesia",
    "code1": "TRK",
    "code2": "WALR",
    "lat": 3.326694,
    "lng": 117.565569
  },
  {
    "name": "Temindung",
    "city": "Samarinda",
    "country": "Indonesia",
    "code1": "SRI",
    "code2": "WALS",
    "lat": -0.484531,
    "lng": 117.157111
  },
  {
    "name": "Tanjung Santan",
    "city": "Tanjung Santan",
    "country": "Indonesia",
    "code1": "",
    "code2": "WALT",
    "lat": -0.093215,
    "lng": 117.439292
  },
  {
    "name": "Selaparang",
    "city": "Mataram",
    "country": "Indonesia",
    "code1": "AMI",
    "code2": "WADA",
    "lat": -8.560708,
    "lng": 116.094656
  },
  {
    "name": "Muhammad Salahuddin",
    "city": "Bima",
    "country": "Indonesia",
    "code1": "BMU",
    "code2": "WADB",
    "lat": -8.539647,
    "lng": 118.687322
  },
  {
    "name": "Krems Langenlois",
    "city": "Krems",
    "country": "Austria",
    "code1": "",
    "code2": "LOAG",
    "lat": 48.446075,
    "lng": 15.631243
  },
  {
    "name": "Mau Hau",
    "city": "Waingapu",
    "country": "Indonesia",
    "code1": "WGP",
    "code2": "WADW",
    "lat": -9.669217,
    "lng": 120.302006
  },
  {
    "name": "Juanda",
    "city": "Surabaya",
    "country": "Indonesia",
    "code1": "SUB",
    "code2": "WARR",
    "lat": -7.379831,
    "lng": 112.786858
  },
  {
    "name": "Adi Sumarmo Wiryokusumo",
    "city": "Solo City",
    "country": "Indonesia",
    "code1": "SOC",
    "code2": "WARQ",
    "lat": -7.516089,
    "lng": 110.756892
  },
  {
    "name": "Chiang Mai Intl",
    "city": "Chiang Mai",
    "country": "Thailand",
    "code1": "CNX",
    "code2": "VTCC",
    "lat": 18.766847,
    "lng": 98.962644
  },
  {
    "name": "Chiang Rai Intl",
    "city": "Chiang Rai",
    "country": "Thailand",
    "code1": "CEI",
    "code2": "VTCT",
    "lat": 19.952342,
    "lng": 99.882928
  },
  {
    "name": "Nakhon Si Thammarat",
    "city": "Nakhon Si Thammarat",
    "country": "Thailand",
    "code1": "NST",
    "code2": "VTSF",
    "lat": 8.539617,
    "lng": 99.944725
  },
  {
    "name": "Bali Ngurah Rai",
    "city": "Denpasar",
    "country": "Indonesia",
    "code1": "DPS",
    "code2": "WADD",
    "lat": -8.748169,
    "lng": 115.167172
  },
  {
    "name": "Nakhon Ratchasima",
    "city": "Nakhon Ratchasima",
    "country": "Thailand",
    "code1": "NAK",
    "code2": "VTUQ",
    "lat": 14.949497,
    "lng": 102.312736
  },
  {
    "name": "Nakhon Phanom",
    "city": "Nakhon Phanom",
    "country": "Thailand",
    "code1": "KOP",
    "code2": "VTUW",
    "lat": 17.383794,
    "lng": 104.643022
  },
  {
    "name": "Ubon Ratchathani",
    "city": "Ubon Ratchathani",
    "country": "Thailand",
    "code1": "UBP",
    "code2": "VTUU",
    "lat": 15.251278,
    "lng": 104.870231
  },
  {
    "name": "Khon Kaen",
    "city": "Khon Kaen",
    "country": "Thailand",
    "code1": "KKC",
    "code2": "VTUK",
    "lat": 16.466628,
    "lng": 102.783661
  },
  {
    "name": "Sukhothai",
    "city": "Sukhothai",
    "country": "Thailand",
    "code1": "THS",
    "code2": "VTPO",
    "lat": 17.237992,
    "lng": 99.818183
  },
  {
    "name": "Eleftherios Venizelos Intl",
    "city": "Athens",
    "country": "Greece",
    "code1": "ATH",
    "code2": "LGAV",
    "lat": 37.936358,
    "lng": 23.944467
  },
  {
    "name": "Chubu Centrair Intl",
    "city": "Nagoya",
    "country": "Japan",
    "code1": "NGO",
    "code2": "RJGG",
    "lat": 34.858414,
    "lng": 136.805408
  },
  {
    "name": "Kobe",
    "city": "Kobe",
    "country": "Japan",
    "code1": "UKB",
    "code2": "RJBE",
    "lat": 34.632778,
    "lng": 135.223889
  },
  {
    "name": "Pullman-Moscow Rgnl",
    "city": "Pullman",
    "country": "United States",
    "code1": "PUW",
    "code2": "KPUW",
    "lat": 46.743861,
    "lng": -117.109583
  },
  {
    "name": "Lewiston Nez Perce Co",
    "city": "Lewiston",
    "country": "United States",
    "code1": "LWS",
    "code2": "KLWS",
    "lat": 46.3745,
    "lng": -117.015389
  },
  {
    "name": "Elmira Corning Rgnl",
    "city": "Elmira",
    "country": "United States",
    "code1": "ELM",
    "code2": "KELM",
    "lat": 42.159889,
    "lng": -76.891611
  },
  {
    "name": "Ithaca Tompkins Rgnl",
    "city": "Ithaca",
    "country": "United States",
    "code1": "ITH",
    "code2": "KITH",
    "lat": 42.491028,
    "lng": -76.458444
  },
  {
    "name": "Monterey Peninsula",
    "city": "Monterey",
    "country": "United States",
    "code1": "MRY",
    "code2": "KMRY",
    "lat": 36.587,
    "lng": -121.842944
  },
  {
    "name": "Santa Barbara Muni",
    "city": "Santa Barbara",
    "country": "United States",
    "code1": "SBA",
    "code2": "KSBA",
    "lat": 34.426211,
    "lng": -119.840372
  },
  {
    "name": "Daytona Beach Intl",
    "city": "Daytona Beach",
    "country": "United States",
    "code1": "DAB",
    "code2": "KDAB",
    "lat": 29.179917,
    "lng": -81.058056
  },
  {
    "name": "Taoyuan Station",
    "city": "Zhongli",
    "country": "Taiwan",
    "code1": "",
    "code2": "\\N",
    "lat": 25.013092,
    "lng": 121.215216
  },
  {
    "name": "Liepaja Intl",
    "city": "Liepaja",
    "country": "Latvia",
    "code1": "LPX",
    "code2": "EVLA",
    "lat": 56.5175,
    "lng": 21.096944
  },
  {
    "name": "Riga Intl",
    "city": "Riga",
    "country": "Latvia",
    "code1": "RIX",
    "code2": "EVRA",
    "lat": 56.923611,
    "lng": 23.971111
  },
  {
    "name": "Siauliai Intl",
    "city": "Siauliai",
    "country": "Lithuania",
    "code1": "SQQ",
    "code2": "EYSA",
    "lat": 55.893886,
    "lng": 23.394975
  },
  {
    "name": "Barysiai",
    "city": "Barysiai",
    "country": "Lithuania",
    "code1": "HLJ",
    "code2": "EYSB",
    "lat": 56.070556,
    "lng": 23.558056
  },
  {
    "name": "Kaunas Intl",
    "city": "Kaunas",
    "country": "Lithuania",
    "code1": "KUN",
    "code2": "EYKA",
    "lat": 54.963919,
    "lng": 24.084778
  },
  {
    "name": "S. Darius",
    "city": "Kaunas",
    "country": "Lithuania",
    "code1": "",
    "code2": "EYKS",
    "lat": 54.879792,
    "lng": 23.881511
  },
  {
    "name": "Palanga Intl",
    "city": "Palanga",
    "country": "Lithuania",
    "code1": "PLQ",
    "code2": "EYPA",
    "lat": 55.973228,
    "lng": 21.093856
  },
  {
    "name": "Vilnius Intl",
    "city": "Vilnius",
    "country": "Lithuania",
    "code1": "VNO",
    "code2": "EYVI",
    "lat": 54.634133,
    "lng": 25.285767
  },
  {
    "name": "Pajuostis",
    "city": "Panevezys",
    "country": "Lithuania",
    "code1": "PNV",
    "code2": "EYPP",
    "lat": 55.729444,
    "lng": 24.460833
  },
  {
    "name": "Erebuni",
    "city": "Yerevan",
    "country": "Armenia",
    "code1": "",
    "code2": "UDYE",
    "lat": 40.122114,
    "lng": 44.464992
  },
  {
    "name": "Stepanavan",
    "city": "Stepanavan",
    "country": "Armenia",
    "code1": "",
    "code2": "UDLS",
    "lat": 41.04845,
    "lng": 44.337172
  },
  {
    "name": "Zvartnots",
    "city": "Yerevan",
    "country": "Armenia",
    "code1": "EVN",
    "code2": "UDYZ",
    "lat": 40.147275,
    "lng": 44.395881
  },
  {
    "name": "Gyumri",
    "city": "Gyumri",
    "country": "Armenia",
    "code1": "LWN",
    "code2": "UDSG",
    "lat": 40.750369,
    "lng": 43.859342
  },
  {
    "name": "Assab Intl",
    "city": "Assab",
    "country": "Eritrea",
    "code1": "ASA",
    "code2": "HHSB",
    "lat": 13.071783,
    "lng": 42.645006
  },
  {
    "name": "Asmara Intl",
    "city": "Asmara",
    "country": "Eritrea",
    "code1": "ASM",
    "code2": "HHAS",
    "lat": 15.291853,
    "lng": 38.910667
  },
  {
    "name": "Massawa Intl",
    "city": "Massawa",
    "country": "Eritrea",
    "code1": "MSW",
    "code2": "HHMS",
    "lat": 15.669989,
    "lng": 39.370103
  },
  {
    "name": "Yasser Arafat Intl",
    "city": "Gaza",
    "country": "Palestine",
    "code1": "GZA",
    "code2": "LVGZ",
    "lat": 31.246389,
    "lng": 34.276111
  },
  {
    "name": "Riyan",
    "city": "Mukalla",
    "country": "Yemen",
    "code1": "RIY",
    "code2": "OYRN",
    "lat": 14.662639,
    "lng": 49.375028
  },
  {
    "name": "Batumi",
    "city": "Batumi",
    "country": "Georgia",
    "code1": "BUS",
    "code2": "UGSB",
    "lat": 41.610278,
    "lng": 41.599694
  },
  {
    "name": "Kopitnari",
    "city": "Kutaisi",
    "country": "Georgia",
    "code1": "KUT",
    "code2": "UGKO",
    "lat": 42.176653,
    "lng": 42.482583
  },
  {
    "name": "Tbilisi",
    "city": "Tbilisi",
    "country": "Georgia",
    "code1": "TBS",
    "code2": "UGTB",
    "lat": 41.669167,
    "lng": 44.954722
  },
  {
    "name": "Taiz Intl",
    "city": "Taiz",
    "country": "Yemen",
    "code1": "TAI",
    "code2": "OYTZ",
    "lat": 13.685964,
    "lng": 44.139056
  },
  {
    "name": "Hodeidah Intl",
    "city": "Hodeidah",
    "country": "Yemen",
    "code1": "HOD",
    "code2": "OYHD",
    "lat": 14.753,
    "lng": 42.976336
  },
  {
    "name": "Aden Intl",
    "city": "Aden",
    "country": "Yemen",
    "code1": "ADE",
    "code2": "OYAA",
    "lat": 12.829542,
    "lng": 45.028792
  },
  {
    "name": "Ataq",
    "city": "Ataq",
    "country": "Yemen",
    "code1": "AXK",
    "code2": "OYAT",
    "lat": 14.551322,
    "lng": 46.826183
  },
  {
    "name": "Al Ghaidah Intl",
    "city": "Al Ghaidah Intl",
    "country": "Yemen",
    "code1": "AAY",
    "code2": "OYGD",
    "lat": 16.191667,
    "lng": 52.175
  },
  {
    "name": "Sanaa Intl",
    "city": "Sanaa",
    "country": "Yemen",
    "code1": "SAH",
    "code2": "OYSN",
    "lat": 15.476258,
    "lng": 44.219739
  },
  {
    "name": "Allgau",
    "city": "Memmingen",
    "country": "Germany",
    "code1": "FMM",
    "code2": "EDJA",
    "lat": 47.988758,
    "lng": 10.2395
  },
  {
    "name": "Beihan",
    "city": "Beihan",
    "country": "Yemen",
    "code1": "BHN",
    "code2": "OYBN",
    "lat": 14.781972,
    "lng": 45.720083
  },
  {
    "name": "RK Heliplex",
    "city": "Panorama",
    "country": "Canada",
    "code1": "",
    "code2": "\\N",
    "lat": 50.2735,
    "lng": -116.14
  },
  {
    "name": "Socotra Intl",
    "city": "Socotra",
    "country": "Yemen",
    "code1": "SCT",
    "code2": "OYSQ",
    "lat": 12.630672,
    "lng": 53.905778
  },
  {
    "name": "Al Badie",
    "city": "Al Badie",
    "country": "Yemen",
    "code1": "",
    "code2": "OYBA",
    "lat": 18.719311,
    "lng": 50.836911
  },
  {
    "name": "Kapadokya",
    "city": "Nevsehir",
    "country": "Turkey",
    "code1": "NAV",
    "code2": "LTAZ",
    "lat": 38.771867,
    "lng": 34.53455
  },
  {
    "name": "Ministro Pistarini",
    "city": "Buenos Aires",
    "country": "Argentina",
    "code1": "EZE",
    "code2": "SAEZ",
    "lat": -34.822222,
    "lng": -58.535833
  },
  {
    "name": "Erbil Intl",
    "city": "Erbil",
    "country": "Iraq",
    "code1": "EBL",
    "code2": "ORER",
    "lat": 36.237611,
    "lng": 43.963158
  },
  {
    "name": "Emerald",
    "city": "Emerald",
    "country": "Australia",
    "code1": "EMD",
    "code2": "YEML",
    "lat": -23.5675,
    "lng": 148.179167
  },
  {
    "name": "Ellinikon International Airport",
    "city": "Athens",
    "country": "Greece",
    "code1": "",
    "code2": "LGAT",
    "lat": 37.5354,
    "lng": 23.4346
  },
  {
    "name": "Kansai",
    "city": "Osaka",
    "country": "Japan",
    "code1": "KIX",
    "code2": "RJBB",
    "lat": 34.4347222,
    "lng": 135.244167
  },
  {
    "name": "Wall Street Heliport",
    "city": "New York",
    "country": "United States",
    "code1": "JRB",
    "code2": "KJRB",
    "lat": 40.701214,
    "lng": -74.009028
  },
  {
    "name": "Tagbilaran",
    "city": "Tagbilaran",
    "country": "Philippines",
    "code1": "TAG",
    "code2": "RPVT",
    "lat": 9.66408056,
    "lng": 123.853247
  },
  {
    "name": "Ilulissat",
    "city": "Ilulissat",
    "country": "Greenland",
    "code1": "JAV",
    "code2": "BGJN",
    "lat": 69.23444,
    "lng": -51.05111
  },
  {
    "name": "Qasigiannguit",
    "city": "Qasigiannguit",
    "country": "Greenland",
    "code1": "JCH",
    "code2": "BGCH",
    "lat": 68.833336,
    "lng": -51
  },
  {
    "name": "Aasiaat",
    "city": "Aasiaat",
    "country": "Greenland",
    "code1": "JEG",
    "code2": "BGEM",
    "lat": 68.7,
    "lng": -52.75
  },
  {
    "name": "Son Sant Joan",
    "city": "Palma de Mallorca",
    "country": "Spain",
    "code1": "PMI",
    "code2": "LEPA",
    "lat": 39.55361,
    "lng": 2.727778
  },
  {
    "name": "Darwin Intl",
    "city": "Darwin",
    "country": "Australia",
    "code1": "DRW",
    "code2": "YPDN",
    "lat": -12.4083333,
    "lng": 130.87266
  },
  {
    "name": "Surat Thani",
    "city": "Surat Thani",
    "country": "Thailand",
    "code1": "URT",
    "code2": "VTSB",
    "lat": 9.1325,
    "lng": 99.135556
  },
  {
    "name": "Bagan Intl",
    "city": "Nyuang U",
    "country": "Burma",
    "code1": "NYU",
    "code2": "VYBR",
    "lat": 21.173833266,
    "lng": 94.9246666
  },
  {
    "name": "Godofredo P",
    "city": "Caticlan",
    "country": "Philippines",
    "code1": "MPH",
    "code2": "RPXE",
    "lat": 11.9214999,
    "lng": 121.953
  },
  {
    "name": "Bimini North Seaplane Base",
    "city": "Bimini",
    "country": "Bahamas",
    "code1": "NSB",
    "code2": "\\N",
    "lat": 25.767,
    "lng": -79.25
  },
  {
    "name": "Talkeetna",
    "city": "Talkeetna",
    "country": "United States",
    "code1": "TKA",
    "code2": "PATK",
    "lat": 62.3205,
    "lng": -150.093694
  },
  {
    "name": "Xewkija Heliport",
    "city": "Gozo",
    "country": "Malta",
    "code1": "GZM",
    "code2": "LMMG",
    "lat": 36.027222,
    "lng": 14.272778
  },
  {
    "name": "Tweed-New Haven Airport",
    "city": "New Haven",
    "country": "United States",
    "code1": "HVN",
    "code2": "KHVN",
    "lat": 41.26375,
    "lng": -72.886806
  },
  {
    "name": "Asheville Regional Airport",
    "city": "Asheville",
    "country": "United States",
    "code1": "AVL",
    "code2": "KAVL",
    "lat": 35.436194,
    "lng": -82.541806
  },
  {
    "name": "Piedmont Triad",
    "city": "Greensboro",
    "country": "United States",
    "code1": "GSO",
    "code2": "KGSO",
    "lat": 36.09775,
    "lng": -79.937306
  },
  {
    "name": "Sioux Falls",
    "city": "Sioux Falls",
    "country": "United States",
    "code1": "FSD",
    "code2": "KFSD",
    "lat": 43.582014,
    "lng": -96.741914
  },
  {
    "name": "Ayers Rock",
    "city": "Uluru",
    "country": "Australia",
    "code1": "AYQ",
    "code2": "YAYE",
    "lat": -25.186111,
    "lng": 130.975556
  },
  {
    "name": "Manchester Regional Airport",
    "city": "Manchester NH",
    "country": "United States",
    "code1": "MHT",
    "code2": "KMHT",
    "lat": 42.932556,
    "lng": -71.435667
  },
  {
    "name": "Naples Muni",
    "city": "Naples",
    "country": "United States",
    "code1": "APF",
    "code2": "KAPF",
    "lat": 26.152619,
    "lng": -81.775294
  },
  {
    "name": "Redang",
    "city": "Redang",
    "country": "Malaysia",
    "code1": "RDN",
    "code2": "WMPR",
    "lat": 5.76528,
    "lng": 103.007
  },
  {
    "name": "Louisville International Airport",
    "city": "Louisville",
    "country": "United States",
    "code1": "SDF",
    "code2": "KSDF",
    "lat": 38.1740858,
    "lng": -85.7364989
  },
  {
    "name": "Charlottesville-Albemarle",
    "city": "Charlottesville VA",
    "country": "United States",
    "code1": "CHO",
    "code2": "KCHO",
    "lat": 38.138639,
    "lng": -78.452861
  },
  {
    "name": "Roanoke Regional",
    "city": "Roanoke VA",
    "country": "United States",
    "code1": "ROA",
    "code2": "KROA",
    "lat": 37.325472,
    "lng": -79.975417
  },
  {
    "name": "Blue Grass",
    "city": "Lexington KY",
    "country": "United States",
    "code1": "LEX",
    "code2": "KLEX",
    "lat": 38.0365,
    "lng": -84.605889
  },
  {
    "name": "Evansville Regional",
    "city": "Evansville",
    "country": "United States",
    "code1": "EVV",
    "code2": "KEVV",
    "lat": 38.036997,
    "lng": -87.532364
  },
  {
    "name": "Albuquerque International Sunport",
    "city": "Albuquerque",
    "country": "United States",
    "code1": "ABQ",
    "code2": "KABQ",
    "lat": 35.0402222,
    "lng": -106.6091944
  },
  {
    "name": "Gallatin Field",
    "city": "Bozeman",
    "country": "United States",
    "code1": "BZN",
    "code2": "KBZN",
    "lat": 45.777643,
    "lng": -111.160151
  },
  {
    "name": "Billings Logan International Airport",
    "city": "Billings",
    "country": "United States",
    "code1": "BIL",
    "code2": "KBIL",
    "lat": 45.80921,
    "lng": -108.537654
  },
  {
    "name": "Bert Mooney Airport",
    "city": "Butte",
    "country": "United States",
    "code1": "BTM",
    "code2": "KBTM",
    "lat": 45.954806,
    "lng": -112.497472
  },
  {
    "name": "Cherry Capital Airport",
    "city": "Traverse City",
    "country": "United States",
    "code1": "TVC",
    "code2": "KTVC",
    "lat": 44.741445,
    "lng": -85.582235
  },
  {
    "name": "Mundo Maya International",
    "city": "Flores",
    "country": "Guatemala",
    "code1": "FRS",
    "code2": "MGTK",
    "lat": 16.913819,
    "lng": -89.866383
  },
  {
    "name": "Hancock County - Bar Harbor",
    "city": "Bar Harbor",
    "country": "United States",
    "code1": "BHB",
    "code2": "KBHB",
    "lat": 44.4497689,
    "lng": -68.3615653
  },
  {
    "name": "Knox County Regional Airport",
    "city": "Rockland",
    "country": "United States",
    "code1": "RKD",
    "code2": "KRKD",
    "lat": 44.0601111,
    "lng": -69.0992303
  },
  {
    "name": "Jackson Hole Airport",
    "city": "Jacksn Hole",
    "country": "United States",
    "code1": "JAC",
    "code2": "KJAC",
    "lat": 43.607333333,
    "lng": -110.73775
  },
  {
    "name": "Chicago Rockford International Airport",
    "city": "Rockford",
    "country": "United States",
    "code1": "RFD",
    "code2": "KRFD",
    "lat": 42.1953611,
    "lng": -89.0972222
  },
  {
    "name": "Domododevo",
    "city": "Moscow",
    "country": "Russia",
    "code1": "DME",
    "code2": "UUDD",
    "lat": 55.408611,
    "lng": 37.906111
  },
  {
    "name": "Phoenix International",
    "city": "Sanya",
    "country": "China",
    "code1": "SYX",
    "code2": "ZJSY",
    "lat": 18.302897,
    "lng": 109.412272
  },
  {
    "name": "Milford Sound Airport",
    "city": "Milford Sound",
    "country": "New Zealand",
    "code1": "MFN",
    "code2": "NZMF",
    "lat": -44.67333,
    "lng": 167.92333
  },
  {
    "name": "East 34th Street Heliport",
    "city": "New York",
    "country": "United States",
    "code1": "TSS",
    "code2": "NONE",
    "lat": 40.7425,
    "lng": -73.971944
  },
  {
    "name": "Lijiang Airport",
    "city": "Lijiang",
    "country": "China",
    "code1": "LJG",
    "code2": "ZPLJ",
    "lat": 26.883333,
    "lng": 100.23333
  },
  {
    "name": "Greenville-Spartanburg International",
    "city": "Greenville",
    "country": "United States",
    "code1": "GSP",
    "code2": "KGSP",
    "lat": 34.895556,
    "lng": -82.218889
  },
  {
    "name": "Cologne Railway",
    "city": "Cologne",
    "country": "Germany",
    "code1": "QKL",
    "code2": "\\N",
    "lat": 50.9425,
    "lng": 6.958056
  },
  {
    "name": "Stuttgart Railway Station",
    "city": "Stuttgart",
    "country": "Germany",
    "code1": "ZWS",
    "code2": "\\N",
    "lat": 48.783611,
    "lng": 9.181667
  },
  {
    "name": "Central Illinois Rgnl",
    "city": "Bloomington",
    "country": "United States",
    "code1": "BMI",
    "code2": "KBMI",
    "lat": 40.477111,
    "lng": -88.915917
  },
  {
    "name": "Gulfport-Biloxi",
    "city": "Gulfport",
    "country": "United States",
    "code1": "GPT",
    "code2": "KGPT",
    "lat": 30.407278,
    "lng": -89.070111
  },
  {
    "name": "Kalamazoo",
    "city": "Kalamazoo",
    "country": "United States",
    "code1": "AZO",
    "code2": "KAZO",
    "lat": 42.234875,
    "lng": -85.552058
  },
  {
    "name": "Toledo",
    "city": "Toledo",
    "country": "United States",
    "code1": "TOL",
    "code2": "KTOL",
    "lat": 41.586806,
    "lng": -83.807833
  },
  {
    "name": "Fort Wayne",
    "city": "Fort Wayne",
    "country": "United States",
    "code1": "FWA",
    "code2": "KFWA",
    "lat": 40.978472,
    "lng": -85.195139
  },
  {
    "name": "Decatur",
    "city": "Decatur",
    "country": "United States",
    "code1": "DEC",
    "code2": "KDEC",
    "lat": 39.834564,
    "lng": -88.865689
  },
  {
    "name": "Cedar Rapids",
    "city": "Cedar Rapids",
    "country": "United States",
    "code1": "CID",
    "code2": "KCID",
    "lat": 41.884694,
    "lng": -91.710806
  },
  {
    "name": "La Crosse Municipal",
    "city": "La Crosse",
    "country": "United States",
    "code1": "LSE",
    "code2": "KLSE",
    "lat": 43.878986,
    "lng": -91.256711
  },
  {
    "name": "Central Wisconsin",
    "city": "Wassau",
    "country": "United States",
    "code1": "CWA",
    "code2": "KCWA",
    "lat": 44.772726,
    "lng": -89.646635
  },
  {
    "name": "Peoria Regional",
    "city": "Peoria",
    "country": "United States",
    "code1": "PIA",
    "code2": "KPIA",
    "lat": 40.664203,
    "lng": -89.693258
  },
  {
    "name": "Appleton",
    "city": "Appleton",
    "country": "United States",
    "code1": "ATW",
    "code2": "KATW",
    "lat": 44.257526,
    "lng": -88.507576
  },
  {
    "name": "Rochester",
    "city": "Rochester",
    "country": "United States",
    "code1": "RST",
    "code2": "KRST",
    "lat": 43.908283,
    "lng": -92.500014
  },
  {
    "name": "Champaign",
    "city": "Champaign",
    "country": "United States",
    "code1": "CMI",
    "code2": "KCMI",
    "lat": 40.03925,
    "lng": -88.278056
  },
  {
    "name": "Manhattan Reigonal",
    "city": "Manhattan",
    "country": "United States",
    "code1": "MHK",
    "code2": "KMHK",
    "lat": 39.140972,
    "lng": -96.670833
  },
  {
    "name": "Kingscote Airport",
    "city": "Kingscote",
    "country": "Australia",
    "code1": "KGC",
    "code2": "YKSC",
    "lat": -35.713889,
    "lng": 137.521389
  },
  {
    "name": "Hervey Bay Airport",
    "city": "Hervey Bay",
    "country": "Australia",
    "code1": "HVB",
    "code2": "YHBA",
    "lat": -25.318889,
    "lng": 152.880278
  },
  {
    "name": "EuroAirport Basel-Mulhouse-Freiburg",
    "city": "Basel",
    "country": "Switzerland",
    "code1": "BSL",
    "code2": "\\N",
    "lat": 47.59,
    "lng": 7.529167
  },
  {
    "name": "Dali",
    "city": "Dali",
    "country": "China",
    "code1": "DLU",
    "code2": "ZPDL",
    "lat": 25.649444,
    "lng": 100.319444
  },
  {
    "name": "Jinghong",
    "city": "Jinghong",
    "country": "China",
    "code1": "JHG",
    "code2": "\\N",
    "lat": 21.973914,
    "lng": 100.759611
  },
  {
    "name": "Mulu",
    "city": "Mulu",
    "country": "Malaysia",
    "code1": "MZV",
    "code2": "\\N",
    "lat": 4.048333,
    "lng": 114.805
  },
  {
    "name": "Sharm El Sheikh Intl",
    "city": "Sharm El Sheikh",
    "country": "Egypt",
    "code1": "SSH",
    "code2": "HESH",
    "lat": 27.977222,
    "lng": 34.394722
  },
  {
    "name": "Franklin",
    "city": "Franklin",
    "country": "United States",
    "code1": "FKL",
    "code2": "KFKL",
    "lat": 41.377874,
    "lng": -79.860362
  },
  {
    "name": "Jomo Kenyatta International",
    "city": "Nairobi",
    "country": "Kenya",
    "code1": "NBO",
    "code2": "HKJK",
    "lat": -1.319167,
    "lng": 36.9275
  },
  {
    "name": "Seronera",
    "city": "Seronera",
    "country": "Tanzania",
    "code1": "SEU",
    "code2": "HTSN",
    "lat": -2.458056,
    "lng": 34.8225
  },
  {
    "name": "El Calafate",
    "city": "El Calafate",
    "country": "Argentina",
    "code1": "FTE",
    "code2": "SAWC",
    "lat": -50.280322,
    "lng": -72.053103
  },
  {
    "name": "Armidale",
    "city": "Armidale",
    "country": "Australia",
    "code1": "ARM",
    "code2": "YARM",
    "lat": -30.528056,
    "lng": 151.617222
  },
  {
    "name": "Grand Junction Regional",
    "city": "Grand Junction",
    "country": "United States",
    "code1": "GJT",
    "code2": "KGJT",
    "lat": 39.122413,
    "lng": -108.526735
  },
  {
    "name": "St George Muni",
    "city": "Saint George",
    "country": "United States",
    "code1": "SGU",
    "code2": "KSGU",
    "lat": 37.090583,
    "lng": -113.593056
  },
  {
    "name": "David Wayne Hooks Field",
    "city": "Houston",
    "country": "United States",
    "code1": "DWH",
    "code2": "KDWH",
    "lat": 30.063746,
    "lng": -95.554276
  },
  {
    "name": "Port O\\\\'Connor Airfield",
    "city": "Port O\\\\'Connor",
    "country": "United States",
    "code1": "S46",
    "code2": "XS46",
    "lat": 28.429977,
    "lng": -96.442859
  },
  {
    "name": "Sarasota Bradenton Intl",
    "city": "Sarasota",
    "country": "United States",
    "code1": "SRQ",
    "code2": "KSRQ",
    "lat": 27.395444,
    "lng": -82.554389
  },
  {
    "name": "Van Nuys",
    "city": "Van Nuys",
    "country": "United States",
    "code1": "VNY",
    "code2": "KVNY",
    "lat": 34.209811,
    "lng": -118.489972
  },
  {
    "name": "Bermuda Intl",
    "city": "Bermuda",
    "country": "Bermuda",
    "code1": "BDA",
    "code2": "TXKF",
    "lat": 32.364042,
    "lng": -64.678703
  },
  {
    "name": "Arthur Dunn Airpark",
    "city": "Titusville",
    "country": "United States",
    "code1": "X21",
    "code2": "\\N",
    "lat": 28.622552,
    "lng": -80.83541
  },
  {
    "name": "Quad City Intl",
    "city": "Moline",
    "country": "United States",
    "code1": "MLI",
    "code2": "KMLI",
    "lat": 41.448528,
    "lng": -90.507539
  },
  {
    "name": "Panama City Bay Co Intl",
    "city": "Panama City",
    "country": "United States",
    "code1": "PFN",
    "code2": "KPFN",
    "lat": 30.212083,
    "lng": -85.682806
  },
  {
    "name": "Honiara International",
    "city": "Honiara",
    "country": "Solomon Islands",
    "code1": "HIR",
    "code2": "AGGH",
    "lat": -9.428,
    "lng": 160.054789
  },
  {
    "name": "Faa\\\\'a International",
    "city": "Papeete",
    "country": "French Polynesia",
    "code1": "PPT",
    "code2": "NTAA",
    "lat": -17.556667,
    "lng": -149.611389
  },
  {
    "name": "Nauru Intl",
    "city": "Nauru",
    "country": "Nauru",
    "code1": "INU",
    "code2": "ANYN",
    "lat": -0.547458,
    "lng": 166.9191
  },
  {
    "name": "Funafuti International",
    "city": "Funafuti",
    "country": "Tuvalu",
    "code1": "FUN",
    "code2": "NGFU",
    "lat": -8.525,
    "lng": 179.196389
  },
  {
    "name": "Tolmachevo",
    "city": "Novosibirsk",
    "country": "Russia",
    "code1": "OVB",
    "code2": "UNNT",
    "lat": 55.012622,
    "lng": 82.650656
  },
  {
    "name": "Orlando",
    "city": "Orlando",
    "country": "United States",
    "code1": "DWS",
    "code2": "\\N",
    "lat": 28.398,
    "lng": -81.57
  },
  {
    "name": "Stavns",
    "city": "Samsoe",
    "country": "Denmark",
    "code1": "",
    "code2": "EKSS",
    "lat": 55.89,
    "lng": 10.62
  },
  {
    "name": "Xieng Khouang",
    "city": "Phon Savan",
    "country": "Laos",
    "code1": "XKH",
    "code2": "VLXK",
    "lat": 19.449997,
    "lng": 103.158333
  },
  {
    "name": "Phu Bai",
    "city": "Hue",
    "country": "Vietnam",
    "code1": "HUI",
    "code2": "\\N",
    "lat": 16.401499,
    "lng": 107.702614
  },
  {
    "name": "Bismarck Municipal Airport",
    "city": "Bismarck",
    "country": "United States",
    "code1": "BIS",
    "code2": "KBIS",
    "lat": 46.775842,
    "lng": -100.757931
  },
  {
    "name": "Telluride",
    "city": "Telluride",
    "country": "United States",
    "code1": "TEX",
    "code2": "KTEX",
    "lat": 37.953759,
    "lng": -107.90848
  },
  {
    "name": "Yinchuan",
    "city": "Yinchuan",
    "country": "China",
    "code1": "INC",
    "code2": "ZLIC",
    "lat": 38.481944,
    "lng": 106.009167
  },
  {
    "name": "Mae Hong Son",
    "city": "Mae Hong Son",
    "country": "Thailand",
    "code1": "HGN",
    "code2": "VTCH",
    "lat": 19.301667,
    "lng": 97.975
  },
  {
    "name": "Rapid City Regional Airport",
    "city": "Rapid City",
    "country": "United States",
    "code1": "RAP",
    "code2": "KRAP",
    "lat": 44.045278,
    "lng": -103.057222
  },
  {
    "name": "McClellan-Palomar Airport",
    "city": "Carlsbad",
    "country": "United States",
    "code1": "CLD",
    "code2": "KCRQ",
    "lat": 33.0742,
    "lng": -117.1648
  },
  {
    "name": "Bishop International",
    "city": "Flint",
    "country": "United States",
    "code1": "FNT",
    "code2": "KFNT",
    "lat": 42.965424,
    "lng": -83.743629
  },
  {
    "name": "Francisco Bangoy International",
    "city": "Davao",
    "country": "Philippines",
    "code1": "DVO",
    "code2": "RPMD",
    "lat": 7.125522,
    "lng": 125.645778
  },
  {
    "name": "Madeira",
    "city": "Funchal",
    "country": "Portugal",
    "code1": "FNC",
    "code2": "LPMA",
    "lat": 32.697889,
    "lng": -16.774453
  },
  {
    "name": "Santarem",
    "city": "Santarem",
    "country": "Brazil",
    "code1": "STM",
    "code2": "SBSN",
    "lat": -2.422431,
    "lng": -54.792789
  },
  {
    "name": "Sihanoukville",
    "city": "Sihanoukville",
    "country": "Cambodia",
    "code1": "KOS",
    "code2": "VDSV",
    "lat": 10.579686,
    "lng": 103.636828
  },
  {
    "name": "Ekati",
    "city": "Ekati",
    "country": "Canada",
    "code1": "YOA",
    "code2": "CYOA",
    "lat": 64.698889,
    "lng": -110.614722
  },
  {
    "name": "Napier",
    "city": "NAPIER",
    "country": "New Zealand",
    "code1": "NPE",
    "code2": "NZNR",
    "lat": -39.465833,
    "lng": 176.87
  },
  {
    "name": "Levuka Airfield",
    "city": "Levuka",
    "country": "Fiji",
    "code1": "LEV",
    "code2": "NFNB",
    "lat": -17.68333,
    "lng": 178.83333
  },
  {
    "name": "Lhasa-Gonggar",
    "city": "Lhasa",
    "country": "China",
    "code1": "LXA",
    "code2": "ZULS",
    "lat": 29.297778,
    "lng": 90.911944
  },
  {
    "name": "Redding Muni",
    "city": "Redding",
    "country": "United States",
    "code1": "RDD",
    "code2": "KRDD",
    "lat": 40.509,
    "lng": -122.293389
  },
  {
    "name": "Mahlon Sweet Fld",
    "city": "Eugene",
    "country": "United States",
    "code1": "EUG",
    "code2": "KEUG",
    "lat": 44.124583,
    "lng": -123.211972
  },
  {
    "name": "Idaho Falls Rgnl",
    "city": "Idaho Falls",
    "country": "United States",
    "code1": "IDA",
    "code2": "KIDA",
    "lat": 43.514556,
    "lng": -112.07075
  },
  {
    "name": "Rogue Valley Intl Medford",
    "city": "Medford",
    "country": "United States",
    "code1": "MFR",
    "code2": "KMFR",
    "lat": 42.374228,
    "lng": -122.8735
  },
  {
    "name": "Kaikoura",
    "city": "Kaikoura",
    "country": "New Zealand",
    "code1": "KBZ",
    "code2": "NZKI",
    "lat": -42.416668,
    "lng": 173.68333
  },
  {
    "name": "Roberts Fld",
    "city": "Redmond-Bend",
    "country": "United States",
    "code1": "RDM",
    "code2": "KRDM",
    "lat": 44.254066,
    "lng": -121.149964
  },
  {
    "name": "Koromiko",
    "city": "Picton",
    "country": "New Zealand",
    "code1": "PCN",
    "code2": "NZPN",
    "lat": -41.348333,
    "lng": 173.955278
  },
  {
    "name": "Windhoek Hosea Kutako International Airport",
    "city": "Windhoek",
    "country": "Namibia",
    "code1": "WDH",
    "code2": "FYWV",
    "lat": -22.486667,
    "lng": 17.4625
  },
  {
    "name": "Victoria Inner Harbour Airport",
    "city": "Victoria",
    "country": "Canada",
    "code1": "YWH",
    "code2": "CYWH",
    "lat": 48.422778,
    "lng": -123.3875
  },
  {
    "name": "Vancouver Coal Harbour",
    "city": "Vancouver",
    "country": "Canada",
    "code1": "CXH",
    "code2": "CAQ3",
    "lat": 49.289722,
    "lng": -123.115833
  },
  {
    "name": "Jinan",
    "city": "Jinan",
    "country": "China",
    "code1": "TNA",
    "code2": "ZSJN",
    "lat": 36.857214,
    "lng": 117.215992
  },
  {
    "name": "Changzhou",
    "city": "Changzhou",
    "country": "China",
    "code1": "CZX",
    "code2": "ZSCG",
    "lat": 31.941667,
    "lng": 119.711667
  },
  {
    "name": "Yibin",
    "city": "Yibin",
    "country": "China",
    "code1": "YBP",
    "code2": "ZUYB",
    "lat": 28.800278,
    "lng": 104.544444
  },
  {
    "name": "Roschino",
    "city": "Tyumen",
    "country": "Russia",
    "code1": "TJM",
    "code2": "USTR",
    "lat": 57.189567,
    "lng": 65.3243
  },
  {
    "name": "Akron Canton Regional Airport",
    "city": "Akron",
    "country": "United States",
    "code1": "CAK",
    "code2": "KCAK",
    "lat": 40.9160833,
    "lng": -81.4421944
  },
  {
    "name": "Huntsville International Airport-Carl T Jones Field",
    "city": "Huntsville",
    "country": "United States",
    "code1": "HSV",
    "code2": "KHSV",
    "lat": 34.6371944,
    "lng": -86.7750556
  },
  {
    "name": "Mid-Ohio Valley Regional Airport",
    "city": "PARKERSBURG",
    "country": "United States",
    "code1": "PKB",
    "code2": "KPKB",
    "lat": 39.3451039,
    "lng": -81.4392031
  },
  {
    "name": "Montgomery Regional Airport",
    "city": "MONTGOMERY",
    "country": "United States",
    "code1": "MGM",
    "code2": "KMGM",
    "lat": 32.3006389,
    "lng": -86.3939722
  },
  {
    "name": "Tri-Cities Regional Airport",
    "city": "BRISTOL",
    "country": "United States",
    "code1": "TRI",
    "code2": "KTRI",
    "lat": 36.4752222,
    "lng": -82.4074167
  },
  {
    "name": "Barkley Regional Airport",
    "city": "PADUCAH",
    "country": "United States",
    "code1": "PAH",
    "code2": "KPAH",
    "lat": 37.0602875,
    "lng": -88.7729583
  },
  {
    "name": "Kurumoch",
    "city": "Samara",
    "country": "Russia",
    "code1": "KUF",
    "code2": "\\N",
    "lat": 53.5,
    "lng": 50.15
  },
  {
    "name": "Ambouli International Airport",
    "city": "Djibouti",
    "country": "Djibouti",
    "code1": "JIB",
    "code2": "HDAM",
    "lat": 11.5472,
    "lng": 43.1594
  },
  {
    "name": "Meilan",
    "city": "Haikou",
    "country": "China",
    "code1": "HAK",
    "code2": "ZJHK",
    "lat": 19.934856,
    "lng": 110.458961
  },
  {
    "name": "Mafia",
    "city": "Mafia Island",
    "country": "Tanzania",
    "code1": "MFA",
    "code2": "HTMA",
    "lat": -7.913889,
    "lng": 39.665
  },
  {
    "name": "Glacier Park Intl",
    "city": "Kalispell",
    "country": "United States",
    "code1": "FCA",
    "code2": "KFCA",
    "lat": 48.310472,
    "lng": -114.256
  },
  {
    "name": "Mtemere Airstrip",
    "city": "Selous",
    "country": "Tanzania",
    "code1": "",
    "code2": "",
    "lat": -7.75093364715576,
    "lng": 38.2032814025878
  },
  {
    "name": "Page Municipal Airport",
    "city": "Page",
    "country": "United States",
    "code1": "PGA",
    "code2": "KPGA",
    "lat": 36.9261,
    "lng": -111.4483
  },
  {
    "name": "Utila Airport",
    "city": "Utila",
    "country": "Honduras",
    "code1": "UII",
    "code2": "MHUT",
    "lat": 16.091667,
    "lng": -86.8875
  },
  {
    "name": "Santa Elena Airport",
    "city": "Santa Elena de Uairen",
    "country": "Venezuela",
    "code1": "SNV",
    "code2": "\\N",
    "lat": 4.554722,
    "lng": -61.144922
  },
  {
    "name": "Mbs Intl",
    "city": "Saginaw",
    "country": "United States",
    "code1": "MBS",
    "code2": "KMBS",
    "lat": 43.532913,
    "lng": -84.079647
  },
  {
    "name": "Greater Binghamton Edwin A Link Fld",
    "city": "Binghamton",
    "country": "United States",
    "code1": "BGM",
    "code2": "KBGM",
    "lat": 42.208689,
    "lng": -75.979839
  },
  {
    "name": "Baghdad International Airport",
    "city": "Baghdad",
    "country": "Iraq",
    "code1": "BGW",
    "code2": "ORBI",
    "lat": 33.262539,
    "lng": 44.234578
  },
  {
    "name": "Nan",
    "city": "Nan",
    "country": "Thailand",
    "code1": "NNT",
    "code2": "VTCN",
    "lat": 18.807914,
    "lng": 100.783419
  },
  {
    "name": "Roi Et",
    "city": "Roi Et",
    "country": "Thailand",
    "code1": "ROI",
    "code2": "VTUV",
    "lat": 16.116761,
    "lng": 103.773797
  },
  {
    "name": "Buri Ram",
    "city": "Buri Ram",
    "country": "Thailand",
    "code1": "BFV",
    "code2": "VTUO",
    "lat": 15.229539,
    "lng": 103.253231
  },
  {
    "name": "Ranong",
    "city": "Ranong",
    "country": "Thailand",
    "code1": "UNN",
    "code2": "\\N",
    "lat": 9.777622,
    "lng": 98.585483
  },
  {
    "name": "Trat",
    "city": "Trat",
    "country": "Thailand",
    "code1": "TDX",
    "code2": "VTBO",
    "lat": 12.274572,
    "lng": 102.318958
  },
  {
    "name": "Blythe Airport",
    "city": "Blythe",
    "country": "United States",
    "code1": "BLH",
    "code2": "KBLH",
    "lat": 33.619167,
    "lng": -114.716889
  },
  {
    "name": "Al Asad Airbase",
    "city": "Al Asad",
    "country": "Iraq",
    "code1": "",
    "code2": "ORAA",
    "lat": 33.785608,
    "lng": 42.4412
  },
  {
    "name": "Al Taqaddum Airbase",
    "city": "Al Taqaddum",
    "country": "Iraq",
    "code1": "",
    "code2": "ORAT",
    "lat": 33.338053,
    "lng": 43.597072
  },
  {
    "name": "Balad Southeast Airport",
    "city": "Al Bakr",
    "country": "Iraq",
    "code1": "",
    "code2": "ORBD",
    "lat": 33.940194,
    "lng": 44.361583
  },
  {
    "name": "Diosdado Macapagal International",
    "city": "Angeles City",
    "country": "Philippines",
    "code1": "CRK",
    "code2": "RPLC",
    "lat": 15.185833,
    "lng": 120.560278
  },
  {
    "name": "Sandakan",
    "city": "Sandakan",
    "country": "Malaysia",
    "code1": "SDK",
    "code2": "WBKS",
    "lat": 5.900897,
    "lng": 118.059486
  },
  {
    "name": "Luang Namtha",
    "city": "Luang Namtha",
    "country": "Laos",
    "code1": "LXG",
    "code2": "VLLN",
    "lat": 20.960556,
    "lng": 101.4025
  },
  {
    "name": "Oudomxay",
    "city": "Muang Xay",
    "country": "Laos",
    "code1": "ODY",
    "code2": "VLOS",
    "lat": 20.6827,
    "lng": 101.994
  },
  {
    "name": "Shenyang Taoxian International Airport",
    "city": "Shenyang",
    "country": "China",
    "code1": "SHE",
    "code2": "ZYTX",
    "lat": 41.3824,
    "lng": 123.2901
  },
  {
    "name": "Dongying Airport",
    "city": "Dongying",
    "country": "China",
    "code1": "DOY",
    "code2": "ZSDY",
    "lat": 37.2716,
    "lng": 118.2819
  },
  {
    "name": "John A. Osborne Airport",
    "city": "Geralds",
    "country": "Montserrat",
    "code1": "MNI",
    "code2": "TRPG",
    "lat": 16.791389,
    "lng": -62.193333
  },
  {
    "name": "Petersburg James A. Johnson",
    "city": "Petersburg",
    "country": "United States",
    "code1": "PSG",
    "code2": "PAPG",
    "lat": 56.801667,
    "lng": -132.945278
  },
  {
    "name": "Luoyang Airport",
    "city": "Luoyang",
    "country": "China",
    "code1": "LYA",
    "code2": "ZHLY",
    "lat": 34.41,
    "lng": 112.28
  },
  {
    "name": "Xuzhou Guanyin Airport",
    "city": "Xuzhou",
    "country": "China",
    "code1": "XUZ",
    "code2": "ZSXZ",
    "lat": 34.16,
    "lng": 117.11
  },
  {
    "name": "Esfahan Shahid Beheshti Intl",
    "city": "Isfahan",
    "country": "Iran",
    "code1": "IFN",
    "code2": "\\N",
    "lat": 32.750836,
    "lng": 51.861267
  },
  {
    "name": "Magwe",
    "city": "Magwe",
    "country": "Burma",
    "code1": "MWQ",
    "code2": "VYMW",
    "lat": 20.165453,
    "lng": 94.941185
  },
  {
    "name": "Khamti",
    "city": "Khamti",
    "country": "Burma",
    "code1": "KHM",
    "code2": "VYKI",
    "lat": 25.988333,
    "lng": 95.674444
  },
  {
    "name": "Dalat",
    "city": "Dalat",
    "country": "Vietnam",
    "code1": "DLI",
    "code2": "VVDL",
    "lat": 11.75,
    "lng": 108.367
  },
  {
    "name": "Dong Hoi",
    "city": "Dong Hoi",
    "country": "Vietnam",
    "code1": "VDH",
    "code2": "\\N",
    "lat": 17.515,
    "lng": 106.590556
  },
  {
    "name": "Rach Gia",
    "city": "Rach Gia",
    "country": "Vietnam",
    "code1": "VKG",
    "code2": "VVRG",
    "lat": 9.949676,
    "lng": 105.133659
  },
  {
    "name": "Ca Mau",
    "city": "Ca Mau",
    "country": "Vietnam",
    "code1": "CAH",
    "code2": "VVCM",
    "lat": 9.188049,
    "lng": 105.174721
  },
  {
    "name": "Chu Lai",
    "city": "Chu Lai",
    "country": "Vietnam",
    "code1": "VCL",
    "code2": "VVCA",
    "lat": 15.405944,
    "lng": 108.705889
  },
  {
    "name": "Dong Tac",
    "city": "Tuy Hoa",
    "country": "Vietnam",
    "code1": "TBB",
    "code2": "VVTH",
    "lat": 13.04955,
    "lng": 109.333706
  },
  {
    "name": "Pai",
    "city": "Pai",
    "country": "Thailand",
    "code1": "PYY",
    "code2": "VTCI",
    "lat": 19.372,
    "lng": 98.437
  },
  {
    "name": "Brac",
    "city": "Brac",
    "country": "Croatia",
    "code1": "BWK",
    "code2": "LDSB",
    "lat": 43.285719,
    "lng": 16.679719
  },
  {
    "name": "Yaounde Nsimalen",
    "city": "Yaounde",
    "country": "Cameroon",
    "code1": "NSI",
    "code2": "FKYS",
    "lat": 3.722556,
    "lng": 11.553269
  },
  {
    "name": "Conakry",
    "city": "Conakry",
    "country": "Guinea",
    "code1": "CKY",
    "code2": "GUCY",
    "lat": 9.576889,
    "lng": -13.611961
  },
  {
    "name": "Bergrestaurant",
    "city": "Trogen",
    "country": "Switzerland",
    "code1": "",
    "code2": "\\N",
    "lat": 46.992094,
    "lng": 8.390315
  },
  {
    "name": "Uetliberg",
    "city": "Zuerich",
    "country": "Switzerland",
    "code1": "",
    "code2": "\\N",
    "lat": 47.36029,
    "lng": 8.47805
  },
  {
    "name": "Flugplatz Merzbrueck",
    "city": "Aachen",
    "country": "Germany",
    "code1": "AAH",
    "code2": "EDKA",
    "lat": 50.823194,
    "lng": 6.186389
  },
  {
    "name": "Baden Airpark",
    "city": "Karlsruhe/Baden-Baden",
    "country": "Germany",
    "code1": "FKB",
    "code2": "EDSB",
    "lat": 48.7793,
    "lng": 8.08048
  },
  {
    "name": "Orlando Sanford Intl",
    "city": "Sanford",
    "country": "United States",
    "code1": "SFB",
    "code2": "KSFB",
    "lat": 28.777639,
    "lng": -81.237489
  },
  {
    "name": "Duong Dong Airport",
    "city": "Phu Quoc",
    "country": "Vietnam",
    "code1": "PQC",
    "code2": "\\N",
    "lat": 10.227025,
    "lng": 103.967169
  },
  {
    "name": "John Murtha Johnstown-Cambria County Airport",
    "city": "Johnstown",
    "country": "United States",
    "code1": "JST",
    "code2": "KJST",
    "lat": 40.316111,
    "lng": -78.833889
  },
  {
    "name": "Lukla",
    "city": "Lukla",
    "country": "Nepal",
    "code1": "LUA",
    "code2": "VNLK",
    "lat": 27.687778,
    "lng": 86.731389
  },
  {
    "name": "Bhojpur",
    "city": "Bhojpur",
    "country": "Nepal",
    "code1": "BHP",
    "code2": "VNBJ",
    "lat": 27.14743,
    "lng": 87.050819
  },
  {
    "name": "Lamidanda",
    "city": "Lamidanda",
    "country": "Nepal",
    "code1": "LDN",
    "code2": "VNLD",
    "lat": 27.253117,
    "lng": 86.670044
  },
  {
    "name": "Jomsom",
    "city": "Jomsom",
    "country": "Nepal",
    "code1": "JMO",
    "code2": "VNJS",
    "lat": 28.782222,
    "lng": 83.7225
  },
  {
    "name": "Manang",
    "city": "Manang",
    "country": "Nepal",
    "code1": "NGX",
    "code2": "VNMA",
    "lat": 28.633,
    "lng": 84
  },
  {
    "name": "Phaplu",
    "city": "Phaplu",
    "country": "Nepal",
    "code1": "PPL",
    "code2": "VNPL",
    "lat": 27.517,
    "lng": 86.6
  },
  {
    "name": "Thamkharka",
    "city": "Thamkharka",
    "country": "Nepal",
    "code1": "TMK",
    "code2": "\\N",
    "lat": 27.052222,
    "lng": 86.861944
  },
  {
    "name": "Rumjatar",
    "city": "Rumjatar",
    "country": "Nepal",
    "code1": "RUM",
    "code2": "VNRT",
    "lat": 27.303509,
    "lng": 86.55043
  },
  {
    "name": "Tulsipur",
    "city": "Dang",
    "country": "Nepal",
    "code1": "DNP",
    "code2": "VNDG",
    "lat": 28.111111,
    "lng": 82.294167
  },
  {
    "name": "Rukumkot",
    "city": "Rukumkot",
    "country": "Nepal",
    "code1": "RUK",
    "code2": "VNRK",
    "lat": 28.627,
    "lng": 82.195
  },
  {
    "name": "Jumla",
    "city": "Jumla",
    "country": "Nepal",
    "code1": "JUM",
    "code2": "VNJL",
    "lat": 29.274167,
    "lng": 82.193333
  },
  {
    "name": "Chaurjhari",
    "city": "Chaurjhari",
    "country": "Nepal",
    "code1": "HRJ",
    "code2": "VNCJ",
    "lat": 28,
    "lng": 83.833
  },
  {
    "name": "Taplejung",
    "city": "Taplejung",
    "country": "Nepal",
    "code1": "TPJ",
    "code2": "VNTJ",
    "lat": 27.35,
    "lng": 84.667
  },
  {
    "name": "Tumling Tar",
    "city": "Tumling Tar",
    "country": "Nepal",
    "code1": "TMI",
    "code2": "VNTR",
    "lat": 27.315,
    "lng": 87.193333
  },
  {
    "name": "Surkhet",
    "city": "Surkhet",
    "country": "Nepal",
    "code1": "SKH",
    "code2": "VNSK",
    "lat": 28.586,
    "lng": 81.636
  },
  {
    "name": "Simikot",
    "city": "Simikot",
    "country": "Nepal",
    "code1": "IMK",
    "code2": "VNST",
    "lat": 29.971064,
    "lng": 81.818932
  },
  {
    "name": "Dolpa",
    "city": "Dolpa",
    "country": "Nepal",
    "code1": "DOP",
    "code2": "VNDP",
    "lat": 28.985718,
    "lng": 82.819145
  },
  {
    "name": "Bajhang",
    "city": "Bajhang",
    "country": "Nepal",
    "code1": "BJH",
    "code2": "VNBG",
    "lat": 29.53896,
    "lng": 81.185364
  },
  {
    "name": "Dhangarhi",
    "city": "Dhangarhi",
    "country": "Nepal",
    "code1": "DHI",
    "code2": "VNDH",
    "lat": 28.753333,
    "lng": 80.581944
  },
  {
    "name": "Muan",
    "city": "Muan",
    "country": "South Korea",
    "code1": "MWX",
    "code2": "RKJB",
    "lat": 34.991389,
    "lng": 126.382778
  },
  {
    "name": "Astypalaia",
    "city": "Astypalaia",
    "country": "Greece",
    "code1": "JTY",
    "code2": "LGPL",
    "lat": 36.579886,
    "lng": 26.375822
  },
  {
    "name": "Ikaria",
    "city": "Ikaria",
    "country": "Greece",
    "code1": "JIK",
    "code2": "LGIK",
    "lat": 37.682717,
    "lng": 26.347061
  },
  {
    "name": "Kalymnos Island",
    "city": "Kalymnos",
    "country": "Greece",
    "code1": "JKL",
    "code2": "LGKY",
    "lat": 36.963333,
    "lng": 26.940556
  },
  {
    "name": "Milos",
    "city": "Milos",
    "country": "Greece",
    "code1": "MLO",
    "code2": "LGML",
    "lat": 36.696111,
    "lng": 24.4775
  },
  {
    "name": "Naxos",
    "city": "Cyclades Islands",
    "country": "Greece",
    "code1": "JNX",
    "code2": "LGNX",
    "lat": 37.080556,
    "lng": 25.368056
  },
  {
    "name": "Paros",
    "city": "Paros",
    "country": "Greece",
    "code1": "PAS",
    "code2": "LGPA",
    "lat": 37.010278,
    "lng": 25.127778
  },
  {
    "name": "Kastelorizo",
    "city": "Kastelorizo",
    "country": "Greece",
    "code1": "KZS",
    "code2": "LGKJ",
    "lat": 36.127777,
    "lng": 29.566656
  },
  {
    "name": "Marsa Alam Intl",
    "city": "Marsa Alam",
    "country": "Egypt",
    "code1": "RMF",
    "code2": "HEMA",
    "lat": 25.557111,
    "lng": 34.583711
  },
  {
    "name": "Niederrhein",
    "city": "Weeze",
    "country": "Germany",
    "code1": "NRN",
    "code2": "EDLV",
    "lat": 51.602222,
    "lng": 6.141944
  },
  {
    "name": "Busuanga",
    "city": "Busuanga",
    "country": "Philippines",
    "code1": "USU",
    "code2": "RPVV",
    "lat": 12.121458,
    "lng": 120.100031
  },
  {
    "name": "Butuan",
    "city": "Butuan",
    "country": "Philippines",
    "code1": "BXU",
    "code2": "RPME",
    "lat": 8.951322,
    "lng": 125.477972
  },
  {
    "name": "Dipolog",
    "city": "Dipolog",
    "country": "Philippines",
    "code1": "DPL",
    "code2": "RPMG",
    "lat": 8.601261,
    "lng": 123.334481
  },
  {
    "name": "Laoag Intl",
    "city": "Laoag",
    "country": "Philippines",
    "code1": "LAO",
    "code2": "RPLI",
    "lat": 18.178092,
    "lng": 120.531522
  },
  {
    "name": "Legazpi",
    "city": "Legazpi",
    "country": "Philippines",
    "code1": "LGP",
    "code2": "RPLP",
    "lat": 13.157064,
    "lng": 123.746247
  },
  {
    "name": "Ozamis",
    "city": "Ozamis",
    "country": "Philippines",
    "code1": "OZC",
    "code2": "RPMO",
    "lat": 8.178508,
    "lng": 123.841731
  },
  {
    "name": "Zweibruecken",
    "city": "Zweibruecken",
    "country": "Germany",
    "code1": "ZQW",
    "code2": "\\N",
    "lat": 49.209445,
    "lng": 7.401323
  },
  {
    "name": "Mactan Cebu Intl",
    "city": "Cebu",
    "country": "Philippines",
    "code1": "CEB",
    "code2": "RPVM",
    "lat": 10.307542,
    "lng": 123.979439
  },
  {
    "name": "Sonderlandeplatz Norden-Norddeich",
    "city": "Norden",
    "country": "Germany",
    "code1": "NOE",
    "code2": "EDWS",
    "lat": 53.632221,
    "lng": 7.191389
  },
  {
    "name": "Verkehrslandeplatz Juist",
    "city": "Juist",
    "country": "Germany",
    "code1": "JUI",
    "code2": "EDWJ",
    "lat": 53.681572,
    "lng": 7.055731
  },
  {
    "name": "Aeroporto de Porto Seguro",
    "city": "Porto Seguro",
    "country": "Brazil",
    "code1": "BPS",
    "code2": "SBPS",
    "lat": -16.438611,
    "lng": -39.080833
  },
  {
    "name": "Gounda Airport",
    "city": "Gounda",
    "country": "Central African Republic",
    "code1": "GDA",
    "code2": "\\N",
    "lat": 9.272222,
    "lng": 21.197222
  },
  {
    "name": "Heliport Hotel das Cataratas",
    "city": "Cataratas National Park",
    "country": "Brazil",
    "code1": "",
    "code2": "\\N",
    "lat": -25.684,
    "lng": -54.44024
  },
  {
    "name": "Iguatu",
    "city": "Iguatu",
    "country": "Brazil",
    "code1": "",
    "code2": "SNIG",
    "lat": -6.346639,
    "lng": -39.293777
  },
  {
    "name": "Palmas",
    "city": "Palmas",
    "country": "Brazil",
    "code1": "PMW",
    "code2": "SBPJ",
    "lat": -10.241667,
    "lng": -48.35278
  },
  {
    "name": "Caldas Novas",
    "city": "Caldas Novas",
    "country": "Brazil",
    "code1": "CLV",
    "code2": "SBCN",
    "lat": -17.7267,
    "lng": -48.6114
  },
  {
    "name": "Missoula Intl",
    "city": "Missoula",
    "country": "United States",
    "code1": "MSO",
    "code2": "KMSO",
    "lat": 46.916306,
    "lng": -114.090556
  },
  {
    "name": "Blackall",
    "city": "Blackall",
    "country": "Australia",
    "code1": "BKQ",
    "code2": "YBCK",
    "lat": -24.427778,
    "lng": 145.428611
  },
  {
    "name": "Bundaberg",
    "city": "Bundaberg",
    "country": "Australia",
    "code1": "BDB",
    "code2": "YBUD",
    "lat": -24.903889,
    "lng": 152.318611
  },
  {
    "name": "Grand Canyon National Park Airport",
    "city": "Grand Canyon",
    "country": "United States",
    "code1": "GCN",
    "code2": "KGCN",
    "lat": 35.9523611,
    "lng": -112.1469722
  },
  {
    "name": "Sugar Land Regional Airport",
    "city": "Sugar Land",
    "country": "United States",
    "code1": "SGR",
    "code2": "KSGR",
    "lat": 29.62225,
    "lng": -95.6565278
  },
  {
    "name": "Hayman Island Airport",
    "city": "Hayman Island",
    "country": "Australia",
    "code1": "HIS",
    "code2": "YHYN",
    "lat": -20.066668,
    "lng": 148.86667
  },
  {
    "name": "Centennial",
    "city": "Denver",
    "country": "United States",
    "code1": "APA",
    "code2": "KAPA",
    "lat": 39.570129,
    "lng": -104.849294
  },
  {
    "name": "Clovis Muni",
    "city": "Clovis",
    "country": "United States",
    "code1": "CVN",
    "code2": "KCVN",
    "lat": 34.425139,
    "lng": -103.079278
  },
  {
    "name": "Fort Stockton Pecos Co",
    "city": "Fort Stockton",
    "country": "United States",
    "code1": "FST",
    "code2": "KFST",
    "lat": 30.915667,
    "lng": -102.916139
  },
  {
    "name": "Las Vegas Muni",
    "city": "Las Vegas",
    "country": "United States",
    "code1": "LVS",
    "code2": "KLVS",
    "lat": 35.654222,
    "lng": -105.142389
  },
  {
    "name": "West Houston",
    "city": "Houston",
    "country": "United States",
    "code1": "IWS",
    "code2": "KIWS",
    "lat": 29.818194,
    "lng": -95.672611
  },
  {
    "name": "La Junta Muni",
    "city": "La Junta",
    "country": "United States",
    "code1": "LHX",
    "code2": "KLHX",
    "lat": 38.049719,
    "lng": -103.509431
  },
  {
    "name": "Las Cruces Intl",
    "city": "Las Cruces",
    "country": "United States",
    "code1": "LRU",
    "code2": "KLRU",
    "lat": 32.289417,
    "lng": -106.921972
  },
  {
    "name": "Stephens Co",
    "city": "Breckenridge",
    "country": "United States",
    "code1": "BKD",
    "code2": "KBKD",
    "lat": 32.719047,
    "lng": -98.891
  },
  {
    "name": "Draughon Miller Central Texas Rgnl",
    "city": "Temple",
    "country": "United States",
    "code1": "TPL",
    "code2": "KTPL",
    "lat": 31.1525,
    "lng": -97.407778
  },
  {
    "name": "Ozona Muni",
    "city": "Ozona",
    "country": "United States",
    "code1": "OZA",
    "code2": "KOZA",
    "lat": 30.735281,
    "lng": -101.202972
  },
  {
    "name": "Hong Kong Kai Tak",
    "city": "Hong Kong",
    "country": "Hong Kong",
    "code1": "",
    "code2": "VHXX",
    "lat": 22.315365,
    "lng": 114.195349
  },
  {
    "name": "Athen Helenikon Airport",
    "city": "Athens",
    "country": "Greece",
    "code1": "HEW",
    "code2": "\\N",
    "lat": 37.8933,
    "lng": 23.7261
  },
  {
    "name": "Waikoloa Heliport",
    "city": "Waikoloa Village",
    "country": "United States",
    "code1": "WKL",
    "code2": "HI07",
    "lat": 19.9136,
    "lng": -155.864
  },
  {
    "name": "Kaadedhdhoo",
    "city": "Kaadedhdhoo",
    "country": "Maldives",
    "code1": "KDM",
    "code2": "\\N",
    "lat": 0.4880555,
    "lng": 72.995556
  },
  {
    "name": "Aklavik",
    "city": "Aklavik",
    "country": "Canada",
    "code1": "LAK",
    "code2": "CYKD",
    "lat": 68.223333,
    "lng": -135.005833
  },
  {
    "name": "Deline",
    "city": "Deline",
    "country": "Canada",
    "code1": "YWJ",
    "code2": "CYWJ",
    "lat": 65.1833333,
    "lng": -125.41666667
  },
  {
    "name": "Tulita",
    "city": "Tulita",
    "country": "Canada",
    "code1": "ZFN",
    "code2": "CZFN",
    "lat": 64.0833333,
    "lng": -125.5833333
  },
  {
    "name": "Fort Good Hope",
    "city": "Fort Good Hope",
    "country": "Canada",
    "code1": "YGH",
    "code2": "CYGH",
    "lat": 66.26666667,
    "lng": -128.65
  },
  {
    "name": "Inuvik Town",
    "city": "Inuvik",
    "country": "Canada",
    "code1": "",
    "code2": "\\N",
    "lat": 66.3676,
    "lng": -133.7594
  },
  {
    "name": "INAWR",
    "city": "Inuvik",
    "country": "Canada",
    "code1": "",
    "code2": "\\N",
    "lat": 68.3676,
    "lng": -133.7594
  },
  {
    "name": "Tanna island",
    "city": "Tanna",
    "country": "Vanuatu",
    "code1": "TAH",
    "code2": "\\N",
    "lat": -19.455198,
    "lng": 169.22394
  },
  {
    "name": "Sun Island",
    "city": "Sun Island",
    "country": "Maldives",
    "code1": "",
    "code2": "\\N",
    "lat": 3.48596289680953,
    "lng": 72.8060746192932
  },
  {
    "name": "Paulatuk",
    "city": "Paulatuk",
    "country": "Canada",
    "code1": "YPC",
    "code2": "CYPC",
    "lat": 62.35,
    "lng": -124.3333
  },
  {
    "name": "Nicholson Peninsula",
    "city": "Nicholson Peninsula",
    "country": "Canada",
    "code1": "",
    "code2": "YUCX",
    "lat": 69.917,
    "lng": -128.95
  },
  {
    "name": "Santa Cruz",
    "city": "Santa Cruz",
    "country": "Bolivia",
    "code1": "SRZ",
    "code2": "\\N",
    "lat": -17.8,
    "lng": -63.166667
  },
  {
    "name": "Kulusuk",
    "city": "Kulusuk",
    "country": "Greenland",
    "code1": "KUS",
    "code2": "\\N",
    "lat": 65.566667,
    "lng": -37.1166667
  },
  {
    "name": "Juancho E. Yrausquin",
    "city": "Saba",
    "country": "Netherlands Antilles",
    "code1": "SAB",
    "code2": "TNCS",
    "lat": 17.645278,
    "lng": -63.220556
  },
  {
    "name": "Eagle Co Rgnl",
    "city": "Vail",
    "country": "United States",
    "code1": "EGE",
    "code2": "KEGE",
    "lat": 39.642556,
    "lng": -106.917694
  },
  {
    "name": "Stapleton",
    "city": "Denver",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 39.779255,
    "lng": -104.88184
  },
  {
    "name": "Skagen",
    "city": "Stokmarknes",
    "country": "Norway",
    "code1": "SKN",
    "code2": "ENSK",
    "lat": 68.580833,
    "lng": 15.026111
  },
  {
    "name": "Cuyahoga County",
    "city": "Richmond Heights",
    "country": "United States",
    "code1": "CGF",
    "code2": "KCGF",
    "lat": 41.565124,
    "lng": -81.4863555
  },
  {
    "name": "Mansfield Lahm Regional",
    "city": "Mansfield",
    "country": "United States",
    "code1": "MFD",
    "code2": "KMFD",
    "lat": 40.8214167,
    "lng": -82.5166389
  },
  {
    "name": "Columbus Metropolitan Airport",
    "city": "Columbus",
    "country": "United States",
    "code1": "CSG",
    "code2": "KCSG",
    "lat": 32.5163333,
    "lng": -84.9388611
  },
  {
    "name": "Lawton-Fort Sill Regional Airport",
    "city": "Lawton",
    "country": "United States",
    "code1": "LAW",
    "code2": "KLAW",
    "lat": 34.5677144,
    "lng": -98.4166367
  },
  {
    "name": "Fort Collins Loveland Muni",
    "city": "Fort Collins",
    "country": "United States",
    "code1": "FNL",
    "code2": "KFNL",
    "lat": 40.451828,
    "lng": -105.011336
  },
  {
    "name": "Gouvia Marina",
    "city": "Gouvia",
    "country": "Greece",
    "code1": "",
    "code2": "\\N",
    "lat": 39.648682,
    "lng": 19.855771
  },
  {
    "name": "Paxos Marina",
    "city": "Paxos",
    "country": "Greece",
    "code1": "",
    "code2": "\\N",
    "lat": 39.202676,
    "lng": 20.187968
  },
  {
    "name": "Flagstaff Pulliam Airport",
    "city": "Flagstaff",
    "country": "United States",
    "code1": "FLG",
    "code2": "KFLG",
    "lat": 35.140318,
    "lng": -111.6692392
  },
  {
    "name": "Lake Tahoe Airport",
    "city": "South Lake Tahoe",
    "country": "United States",
    "code1": "TVL",
    "code2": "KTVL",
    "lat": 38.893889,
    "lng": -119.995278
  },
  {
    "name": "Magic Valley Regional Airport",
    "city": "Twin Falls",
    "country": "United States",
    "code1": "TWF",
    "code2": "KTWF",
    "lat": 42.481803,
    "lng": -114.487733
  },
  {
    "name": "Monaco",
    "city": "Monaco",
    "country": "Monaco",
    "code1": "MCM",
    "code2": "\\N",
    "lat": 43.73333333,
    "lng": 7.41666666
  },
  {
    "name": "Martha\\\\'s Vineyard",
    "city": "Vineyard Haven MA",
    "country": "United States",
    "code1": "MVY",
    "code2": "KMVY",
    "lat": 41.391667,
    "lng": -70.615278
  },
  {
    "name": "Newport State",
    "city": "Newport RI",
    "country": "United States",
    "code1": "UUU",
    "code2": "\\N",
    "lat": 41.533056,
    "lng": -71.282222
  },
  {
    "name": "Hartness State",
    "city": "Springfield VT",
    "country": "United States",
    "code1": "VSF",
    "code2": "\\N",
    "lat": 43.343333,
    "lng": -72.517222
  },
  {
    "name": "Concord Municipal",
    "city": "Concord NH",
    "country": "United States",
    "code1": "CON",
    "code2": "\\N",
    "lat": 43.20267,
    "lng": -71.50233
  },
  {
    "name": "Sanford Regional",
    "city": "Sanford ME",
    "country": "United States",
    "code1": "SFM",
    "code2": "\\N",
    "lat": 43.39383,
    "lng": -70.708
  },
  {
    "name": "Groton New London",
    "city": "Groton CT",
    "country": "United States",
    "code1": "GON",
    "code2": "KGON",
    "lat": 41.330056,
    "lng": -72.045139
  },
  {
    "name": "Saint Cloud Regional Airport",
    "city": "Saint Cloud",
    "country": "United States",
    "code1": "STC",
    "code2": "KSTC",
    "lat": 45.546556,
    "lng": -94.059889
  },
  {
    "name": "Bagan",
    "city": "Bagan",
    "country": "Burma",
    "code1": "BPE",
    "code2": "\\N",
    "lat": 21.17383327,
    "lng": 94.9246666
  },
  {
    "name": "Golden Triangle Regional Airport",
    "city": "Columbus Mississippi",
    "country": "United States",
    "code1": "GTR",
    "code2": "KGTR",
    "lat": 33.450333,
    "lng": -88.591361
  },
  {
    "name": "Nizhny Novgorod",
    "city": "Nizhniy Novgorod",
    "country": "Russia",
    "code1": "GOJ",
    "code2": "UWGG",
    "lat": 56.230119,
    "lng": 43.784042
  },
  {
    "name": "Bowerman Field",
    "city": "Hoquiam",
    "country": "United States",
    "code1": "HQM",
    "code2": "\\N",
    "lat": 46.9711944,
    "lng": -123.9365556
  },
  {
    "name": "Erie Intl Tom Ridge Fld",
    "city": "Erie",
    "country": "United States",
    "code1": "ERI",
    "code2": "KERI",
    "lat": 42.082022,
    "lng": -80.176217
  },
  {
    "name": "Conrad Maldives Resort",
    "city": "Rangali Island",
    "country": "Maldives",
    "code1": "",
    "code2": "\\N",
    "lat": 3.5833,
    "lng": 72.7167
  },
  {
    "name": "Barnstable Muni Boardman Polando Fld",
    "city": "Barnstable",
    "country": "United States",
    "code1": "HYA",
    "code2": "KHYA",
    "lat": 41.669336,
    "lng": -70.280356
  },
  {
    "name": "San Pedro",
    "city": "San Pedro",
    "country": "Belize",
    "code1": "SPR",
    "code2": "MZ10",
    "lat": 17.913936,
    "lng": -87.971075
  },
  {
    "name": "Sedona",
    "city": "Sedona",
    "country": "United States",
    "code1": "SDX",
    "code2": "KSEZ",
    "lat": 34.848628,
    "lng": -111.788472
  },
  {
    "name": "Dry Tortugas",
    "city": "Dry Tortugas",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 24.62,
    "lng": -82.87
  },
  {
    "name": "Dry Tortugas",
    "city": "Dry Tortugas",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 24.62,
    "lng": 24.62
  },
  {
    "name": "Dry Tortugas",
    "city": "Dry Tortugas",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 24.628,
    "lng": 82.873
  },
  {
    "name": "Morgantown Muni Walter L Bill Hart Fld",
    "city": "Morgantown",
    "country": "United States",
    "code1": "MGW",
    "code2": "KMGW",
    "lat": 39.642908,
    "lng": -79.916314
  },
  {
    "name": "Yeager",
    "city": "Charleston",
    "country": "United States",
    "code1": "CRW",
    "code2": "KCRW",
    "lat": 38.373147,
    "lng": -81.593189
  },
  {
    "name": "Wilkes Barre Scranton Intl",
    "city": "Scranton",
    "country": "United States",
    "code1": "AVP",
    "code2": "KAVP",
    "lat": 41.338478,
    "lng": -75.723403
  },
  {
    "name": "Bemidji Regional Airport",
    "city": "Bemidji",
    "country": "United States",
    "code1": "BJI",
    "code2": "KBJI",
    "lat": 47.510722,
    "lng": -94.934722
  },
  {
    "name": "Heydar Aliyev",
    "city": "Baku",
    "country": "Azerbaijan",
    "code1": "BAK",
    "code2": "\\N",
    "lat": 40.4675,
    "lng": 50.046667
  },
  {
    "name": "Thangool",
    "city": "Biloela",
    "country": "Australia",
    "code1": "THG",
    "code2": "YTNG",
    "lat": -24.493889,
    "lng": 150.576111
  },
  {
    "name": "Fagali\\\\'i",
    "city": "Apia",
    "country": "Samoa",
    "code1": "FGI",
    "code2": "NSFI",
    "lat": -13.84861111,
    "lng": -171.74083333
  },
  {
    "name": "Ballina Byron Gateway",
    "city": "Ballina Byron Bay",
    "country": "Australia",
    "code1": "BNK",
    "code2": "YBNA",
    "lat": -28.833889,
    "lng": 153.5625
  },
  {
    "name": "Hector International Airport",
    "city": "Fargo",
    "country": "United States",
    "code1": "FAR",
    "code2": "KFAR",
    "lat": 46.92065,
    "lng": -96.8157639
  },
  {
    "name": "Downtown",
    "city": "Kansas City",
    "country": "United States",
    "code1": "MKC",
    "code2": "KMKC",
    "lat": 39.1275,
    "lng": -94.598889
  },
  {
    "name": "Phoenix-Mesa Gateway",
    "city": "Mesa",
    "country": "United States",
    "code1": "AZA",
    "code2": "KIWA",
    "lat": 33.307833,
    "lng": -111.655
  },
  {
    "name": "Ratanakiri",
    "city": "Ratanakiri",
    "country": "Cambodia",
    "code1": "RBE",
    "code2": "\\N",
    "lat": 13.73,
    "lng": 106.987
  },
  {
    "name": "Gillette-Campbell County Airport",
    "city": "Gillette",
    "country": "United States",
    "code1": "GCC",
    "code2": "KGCC",
    "lat": 44.3489167,
    "lng": -105.5393611
  },
  {
    "name": "Tomsk Bogashevo Airport",
    "city": "Tomsk",
    "country": "Russia",
    "code1": "TOF",
    "code2": "UNTT",
    "lat": 56.380278,
    "lng": 85.208333
  },
  {
    "name": "El Toro",
    "city": "Santa Ana",
    "country": "United States",
    "code1": "NZJ",
    "code2": "KNZJ",
    "lat": 33.676132,
    "lng": -117.731164
  },
  {
    "name": "Phetchabun",
    "city": "Phetchabun",
    "country": "Thailand",
    "code1": "PHY",
    "code2": "VTPB",
    "lat": 16.676028,
    "lng": 101.195108
  },
  {
    "name": "Chumphon",
    "city": "Chumphon",
    "country": "Thailand",
    "code1": "CJM",
    "code2": "VTSE",
    "lat": 10.7112,
    "lng": 99.361706
  },
  {
    "name": "Jiuzhaigou Huanglong",
    "city": "Jiuzhaigou",
    "country": "China",
    "code1": "JZH",
    "code2": "ZUJZ",
    "lat": 32.857,
    "lng": 103.683
  },
  {
    "name": "Wai Sha Airport",
    "city": "Shantou",
    "country": "China",
    "code1": "SWA",
    "code2": "ZGOW",
    "lat": 23.4,
    "lng": 116.683
  },
  {
    "name": "Les Ailerons",
    "city": "Enghien-moisselles",
    "country": "France",
    "code1": "",
    "code2": "LFFE",
    "lat": 0,
    "lng": 0
  },
  {
    "name": "Cheddi Jagan Intl",
    "city": "Georgetown",
    "country": "Guyana",
    "code1": "GEO",
    "code2": "SYCJ",
    "lat": 6.498553,
    "lng": -58.254119
  },
  {
    "name": "Ciudad del Este",
    "city": "Ciudad del Este",
    "country": "Paraguay",
    "code1": "AGT",
    "code2": "SGES",
    "lat": -25.4555,
    "lng": -54.843592
  },
  {
    "name": "Ogle",
    "city": "Georgetown",
    "country": "Guyana",
    "code1": "OGL",
    "code2": "SYGO",
    "lat": 6.806944,
    "lng": -58.104444
  },
  {
    "name": "Kaieteur",
    "city": "Kaieteur",
    "country": "Guyana",
    "code1": "KAI",
    "code2": "SYKA",
    "lat": 5.167,
    "lng": -59.483
  },
  {
    "name": "Dunhuang Airport",
    "city": "Dunhuang",
    "country": "China",
    "code1": "DNH",
    "code2": "ZLDH",
    "lat": 40.094,
    "lng": 94.4818
  },
  {
    "name": "Falconara",
    "city": "Ancona",
    "country": "Italy",
    "code1": "AOI",
    "code2": "LIPY",
    "lat": 43.616389,
    "lng": 13.362222
  },
  {
    "name": "Samjiyon",
    "city": "Samjiyon",
    "country": "South Korea",
    "code1": "",
    "code2": "ZZ04",
    "lat": 41.542301,
    "lng": 128.243571
  },
  {
    "name": "Iosco County",
    "city": "East Tawas",
    "country": "United States",
    "code1": "ECA",
    "code2": "K6D9",
    "lat": 44.311,
    "lng": -83.422
  },
  {
    "name": "Copiapo",
    "city": "Copiapo",
    "country": "Chile",
    "code1": "CPO",
    "code2": "SCHA",
    "lat": -27,
    "lng": -70
  },
  {
    "name": "Taba Intl",
    "city": "Taba",
    "country": "Egypt",
    "code1": "TCP",
    "code2": "HETB",
    "lat": 29.587778,
    "lng": 34.778056
  },
  {
    "name": "Edward Bodden Airfield",
    "city": "Little Cayman",
    "country": "Cayman Islands",
    "code1": "LYB",
    "code2": "MWCL",
    "lat": 19.6591666667,
    "lng": -80.09083333
  },
  {
    "name": "Bodrum - Milas",
    "city": "Bodrum",
    "country": "Turkey",
    "code1": "BJV",
    "code2": "LTFE",
    "lat": 37.249,
    "lng": 27.667
  },
  {
    "name": "7 Novembre",
    "city": "Tabarka",
    "country": "Tunisia",
    "code1": "TBJ",
    "code2": "DTKA",
    "lat": 36.978333,
    "lng": 8.876389
  },
  {
    "name": "Sabiha Gokcen",
    "city": "Istanbul",
    "country": "Turkey",
    "code1": "SAW",
    "code2": "LTFJ",
    "lat": 40.898553,
    "lng": 29.309219
  },
  {
    "name": "University Park Airport",
    "city": "State College Pennsylvania",
    "country": "United States",
    "code1": "SCE",
    "code2": "KUNV",
    "lat": 40.849278,
    "lng": -77.848694
  },
  {
    "name": "Broome",
    "city": "Broome",
    "country": "Australia",
    "code1": "BME",
    "code2": "YPBR",
    "lat": -17.8,
    "lng": 122.2
  },
  {
    "name": "Newcastle Airport",
    "city": "Newcastle",
    "country": "Australia",
    "code1": "NTL",
    "code2": "YWLM",
    "lat": -32.78,
    "lng": 151.83
  },
  {
    "name": "Bakki Airport",
    "city": "Bakki",
    "country": "Iceland",
    "code1": "",
    "code2": "BIBA",
    "lat": 63.55805,
    "lng": -20.14833
  },
  {
    "name": "Woerthersee International Airport",
    "city": "Klagenfurt",
    "country": "Austria",
    "code1": "KLU",
    "code2": "LOWK",
    "lat": 46.642514,
    "lng": 14.337739
  },
  {
    "name": "General Manuel Carlos Piar",
    "city": "Ciudad Guayana",
    "country": "Venezuela",
    "code1": "CGU",
    "code2": "\\N",
    "lat": 8.288527,
    "lng": -62.760361
  },
  {
    "name": "Flugplatz Hoepen",
    "city": "Schneverdingen",
    "country": "Germany",
    "code1": "",
    "code2": "\\N",
    "lat": 53.1167,
    "lng": 9.8
  },
  {
    "name": "Hammerfest Airport",
    "city": "Hammerfest",
    "country": "Norway",
    "code1": "HFT",
    "code2": "ENHF",
    "lat": 70.679722,
    "lng": 23.668889
  },
  {
    "name": "Valan",
    "city": "Honningsvag",
    "country": "Norway",
    "code1": "HVG",
    "code2": "ENHV",
    "lat": 70.99,
    "lng": 25.83
  },
  {
    "name": "Mehamn",
    "city": "Mehamn",
    "country": "Norway",
    "code1": "MEH",
    "code2": "ENMR",
    "lat": 71.029722,
    "lng": 27.826667
  },
  {
    "name": "Airport",
    "city": "Vadso",
    "country": "Norway",
    "code1": "VDS",
    "code2": "ENVD",
    "lat": 70.065,
    "lng": 29.844
  },
  {
    "name": "Riem",
    "city": "Munich",
    "country": "Germany",
    "code1": "",
    "code2": "MUCX",
    "lat": 48.137778,
    "lng": 11.690278
  },
  {
    "name": "Imam Khomeini",
    "city": "Tehran",
    "country": "Iran",
    "code1": "IKA",
    "code2": "OIIE",
    "lat": 35.416111,
    "lng": 51.152222
  },
  {
    "name": "Mashhad",
    "city": "Mashhad",
    "country": "Iran",
    "code1": "MHD",
    "code2": "OIMM",
    "lat": 36.234,
    "lng": 59.643
  },
  {
    "name": "Egelsbach",
    "city": "Egelsbach",
    "country": "Germany",
    "code1": "QEF",
    "code2": "\\N",
    "lat": 49.9608,
    "lng": 8.64361
  },
  {
    "name": "Ust-Ilimsk",
    "city": "Ust Ilimsk",
    "country": "Russia",
    "code1": "UIK",
    "code2": "UIBS",
    "lat": 58.135,
    "lng": 102.566
  },
  {
    "name": "Mudanjiang",
    "city": "Mudanjiang",
    "country": "China",
    "code1": "MDG",
    "code2": "\\N",
    "lat": 44.523889,
    "lng": 129.568889
  },
  {
    "name": "Key Field",
    "city": "Meridian",
    "country": "United States",
    "code1": "MEI",
    "code2": "KMEI",
    "lat": 32.332624,
    "lng": -88.751868
  },
  {
    "name": "Abraham Lincoln Capital",
    "city": "Springfield",
    "country": "United States",
    "code1": "SPI",
    "code2": "KSPI",
    "lat": 39.8441,
    "lng": -89.677889
  },
  {
    "name": "Uzundzhovo",
    "city": "Haskovo",
    "country": "Bulgaria",
    "code1": "HKV",
    "code2": "LB14",
    "lat": 41.976375,
    "lng": 25.589817
  },
  {
    "name": "Cortez Muni",
    "city": "Cortez",
    "country": "United States",
    "code1": "CEZ",
    "code2": "KCEZ",
    "lat": 37.303,
    "lng": -108.628056
  },
  {
    "name": "Yampa Valley",
    "city": "Hayden",
    "country": "United States",
    "code1": "HDN",
    "code2": "KHDN",
    "lat": 40.481181,
    "lng": -107.21766
  },
  {
    "name": "Gallup Muni",
    "city": "Gallup",
    "country": "United States",
    "code1": "GUP",
    "code2": "KGUP",
    "lat": 35.511058,
    "lng": -108.789308
  },
  {
    "name": "Liberal Muni",
    "city": "Liberal",
    "country": "United States",
    "code1": "LBL",
    "code2": "KLBL",
    "lat": 37.044222,
    "lng": -100.95986
  },
  {
    "name": "Lamar Muni",
    "city": "Lamar",
    "country": "United States",
    "code1": "LAA",
    "code2": "KLAA",
    "lat": 38.069694,
    "lng": -102.6885
  },
  {
    "name": "Renner Fld",
    "city": "Goodland",
    "country": "United States",
    "code1": "GLD",
    "code2": "KGLD",
    "lat": 39.370621,
    "lng": -101.698992
  },
  {
    "name": "Yellowstone Rgnl",
    "city": "Cody",
    "country": "United States",
    "code1": "COD",
    "code2": "KCOD",
    "lat": 44.520194,
    "lng": -109.023806
  },
  {
    "name": "Hovden",
    "city": "Orsta-Volda",
    "country": "Norway",
    "code1": "HOV",
    "code2": "ENOV",
    "lat": 62.18,
    "lng": 6.0742
  },
  {
    "name": "RNAS WATTON",
    "city": "WATTON",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGYR",
    "lat": 52.33,
    "lng": 0.51
  },
  {
    "name": "ISLES OF SCILLY",
    "city": "ST MARY\\\\'S",
    "country": "United Kingdom",
    "code1": "ISC",
    "code2": "\\N",
    "lat": 49.919,
    "lng": -6.3075
  },
  {
    "name": "Springfield Branson Natl",
    "city": "Springfield",
    "country": "United States",
    "code1": "SGF",
    "code2": "KSGF",
    "lat": 37.245667,
    "lng": -93.388639
  },
  {
    "name": "Framnes",
    "city": "Narvik",
    "country": "Norway",
    "code1": "NVK",
    "code2": "ENNK",
    "lat": 68.435833,
    "lng": 17.388056
  },
  {
    "name": "Berlevag",
    "city": "Berlevag",
    "country": "Norway",
    "code1": "BVG",
    "code2": "ENBV",
    "lat": 70.866667,
    "lng": 29
  },
  {
    "name": "Fornebu",
    "city": "Oslo",
    "country": "Norway",
    "code1": "FBU",
    "code2": "ENFB",
    "lat": 59.883333,
    "lng": 10.616667
  },
  {
    "name": "Alykel",
    "city": "Norilsk",
    "country": "Russia",
    "code1": "NSK",
    "code2": "UOOO",
    "lat": 69.311053,
    "lng": 87.332183
  },
  {
    "name": "Vityazevo",
    "city": "Anapa",
    "country": "Russia",
    "code1": "AAQ",
    "code2": "URKA",
    "lat": 45.002097,
    "lng": 37.347272
  },
  {
    "name": "Joplin Rgnl",
    "city": "Joplin",
    "country": "United States",
    "code1": "JLN",
    "code2": "KJLN",
    "lat": 37.151814,
    "lng": -94.498269
  },
  {
    "name": "Lehigh Valley Intl",
    "city": "Allentown",
    "country": "United States",
    "code1": "ABE",
    "code2": "KABE",
    "lat": 40.652083,
    "lng": -75.440806
  },
  {
    "name": "NW Arkansas Regional",
    "city": "Bentonville",
    "country": "United States",
    "code1": "XNA",
    "code2": "KXNA",
    "lat": 36.2818694,
    "lng": -94.3068111
  },
  {
    "name": "Atyrau",
    "city": "Atyrau",
    "country": "Kazakhstan",
    "code1": "GUW",
    "code2": "UATG",
    "lat": 47.121944,
    "lng": 51.821389
  },
  {
    "name": "Kzyl-Orda",
    "city": "Kzyl-Orda",
    "country": "Kazakhstan",
    "code1": "KZO",
    "code2": "UAOO",
    "lat": 44.709,
    "lng": 65.591
  },
  {
    "name": "South Bend Rgnl",
    "city": "South Bend",
    "country": "United States",
    "code1": "SBN",
    "code2": "KSBN",
    "lat": 41.708661,
    "lng": -86.31725
  },
  {
    "name": "Bykovo",
    "city": "Moscow",
    "country": "Russia",
    "code1": "BKA",
    "code2": "UUBB",
    "lat": 55.617222,
    "lng": 38.059999
  },
  {
    "name": "Chintheche",
    "city": "Chintheche",
    "country": "Malawi",
    "code1": "",
    "code2": "FWCC",
    "lat": -11.8333,
    "lng": 34.1667
  },
  {
    "name": "Talagi",
    "city": "Arkhangelsk",
    "country": "Russia",
    "code1": "ARH",
    "code2": "ULAA",
    "lat": 64.360281,
    "lng": 40.430167
  },
  {
    "name": "Central",
    "city": "Saratov",
    "country": "Russia",
    "code1": "RTW",
    "code2": "UWSS",
    "lat": 51.334366,
    "lng": 46.022952
  },
  {
    "name": "Novyi Urengoy",
    "city": "Novy Urengoy",
    "country": "Russia",
    "code1": "NUX",
    "code2": "USMU",
    "lat": 66.041811,
    "lng": 76.313938
  },
  {
    "name": "Noyabrsk",
    "city": "Noyabrsk",
    "country": "Russia",
    "code1": "NOJ",
    "code2": "USRO",
    "lat": 63.110079,
    "lng": 75.162243
  },
  {
    "name": "Washington Union Station",
    "city": "Washington",
    "country": "United States",
    "code1": "ZWU",
    "code2": "\\N",
    "lat": 38.89746,
    "lng": -77.00643
  },
  {
    "name": "Aktau",
    "city": "Aktau",
    "country": "Kazakhstan",
    "code1": "SCO",
    "code2": "UATE",
    "lat": 43.86005,
    "lng": 51.091978
  },
  {
    "name": "Ukhta",
    "city": "Ukhta",
    "country": "Russia",
    "code1": "UCT",
    "code2": "\\N",
    "lat": 63.340297,
    "lng": 53.482592
  },
  {
    "name": "Usinsk",
    "city": "Usinsk",
    "country": "Russia",
    "code1": "USK",
    "code2": "\\N",
    "lat": 66.00077,
    "lng": 57.221113
  },
  {
    "name": "Pechora",
    "city": "Pechora",
    "country": "Russia",
    "code1": "PEX",
    "code2": "\\N",
    "lat": 65.070387,
    "lng": 57.082045
  },
  {
    "name": "Naryan-Mar",
    "city": "Naryan-Mar",
    "country": "Russia",
    "code1": "NNM",
    "code2": "ULAM",
    "lat": 67.380537,
    "lng": 53.051016
  },
  {
    "name": "Kresty",
    "city": "Pskov",
    "country": "Russia",
    "code1": "PKV",
    "code2": "ULOO",
    "lat": 57.783917,
    "lng": 28.395614
  },
  {
    "name": "Kogalym International",
    "city": "Kogalym",
    "country": "Russia",
    "code1": "KGP",
    "code2": "USRK",
    "lat": 62.18,
    "lng": 74.53
  },
  {
    "name": "Emelyanovo",
    "city": "Krasnoyarsk",
    "country": "Russia",
    "code1": "KJA",
    "code2": "UNKL",
    "lat": 56.18,
    "lng": 92.475
  },
  {
    "name": "Sary-Arka",
    "city": "Karaganda",
    "country": "Kazakhstan",
    "code1": "KGF",
    "code2": "UAKK",
    "lat": 49.670833,
    "lng": 73.334444
  },
  {
    "name": "Severny",
    "city": "Novosibirsk",
    "country": "Russia",
    "code1": "",
    "code2": "UNCC",
    "lat": 55.1,
    "lng": 82.9
  },
  {
    "name": "Uraj",
    "city": "Uraj",
    "country": "Russia",
    "code1": "URJ",
    "code2": "USHU",
    "lat": 60.1,
    "lng": 64.83
  },
  {
    "name": "Turkmenabat",
    "city": "Turkmenabat",
    "country": "Turkmenistan",
    "code1": "CRZ",
    "code2": "\\N",
    "lat": 39.083333,
    "lng": 63.602222
  },
  {
    "name": "Yuzhny",
    "city": "Ivanovo",
    "country": "Russia",
    "code1": "IWA",
    "code2": "UUBI",
    "lat": 56.939444,
    "lng": 40.940833
  },
  {
    "name": "Changchun",
    "city": "Changchun",
    "country": "China",
    "code1": "CGQ",
    "code2": "ZYCC",
    "lat": 43.5412,
    "lng": 125.1201
  },
  {
    "name": "Niigata",
    "city": "Niigata",
    "country": "Japan",
    "code1": "KIJ",
    "code2": "RJSN",
    "lat": 37.5711,
    "lng": 139.0646
  },
  {
    "name": "Johnston Atoll",
    "city": "Johnston Island",
    "country": "Johnston Atoll",
    "code1": "JON",
    "code2": "PJON",
    "lat": 16.7286,
    "lng": -169.534
  },
  {
    "name": "Smith Fld",
    "city": "Fort Wayne IN",
    "country": "United States",
    "code1": "SMD",
    "code2": "KSMD",
    "lat": 41.143353,
    "lng": -85.152778
  },
  {
    "name": "Arcata",
    "city": "Arcata CA",
    "country": "United States",
    "code1": "ACV",
    "code2": "KACV",
    "lat": 40.978111,
    "lng": -124.108611
  },
  {
    "name": "Camp Mabry Austin City",
    "city": "Austin TX",
    "country": "United States",
    "code1": "ATT",
    "code2": "KATT",
    "lat": 30.31666,
    "lng": -97.7666
  },
  {
    "name": "Albert J Ellis",
    "city": "Jacksonville NC",
    "country": "United States",
    "code1": "OAJ",
    "code2": "KOAJ",
    "lat": 34.829164,
    "lng": -77.612139
  },
  {
    "name": "Tuscaloosa Rgnl",
    "city": "Tuscaloosa AL",
    "country": "United States",
    "code1": "TCL",
    "code2": "KTCL",
    "lat": 33.220627,
    "lng": -87.611403
  },
  {
    "name": "Dubuque Rgnl",
    "city": "Dubuque IA",
    "country": "United States",
    "code1": "DBQ",
    "code2": "KDBQ",
    "lat": 42.402,
    "lng": -90.709472
  },
  {
    "name": "Forde Bringeland",
    "city": "Forde",
    "country": "Norway",
    "code1": "FDE",
    "code2": "\\N",
    "lat": 61.392,
    "lng": 5.763
  },
  {
    "name": "Shun Tak Heliport",
    "city": "Hong Kong",
    "country": "Hong Kong",
    "code1": "",
    "code2": "VHST",
    "lat": 22.289372,
    "lng": 114.152153
  },
  {
    "name": "Poliarny Airport",
    "city": "Yakutia",
    "country": "Russia",
    "code1": "PYJ",
    "code2": "UERP",
    "lat": 66.400431,
    "lng": 112.030325
  },
  {
    "name": "Nakhchivan Airport",
    "city": "Nakhchivan",
    "country": "Azerbaijan",
    "code1": "NAJ",
    "code2": "UBBN",
    "lat": 39.1888,
    "lng": 45.4584
  },
  {
    "name": "Ganja Airport",
    "city": "Ganja",
    "country": "Azerbaijan",
    "code1": "KVD",
    "code2": "UBBG",
    "lat": 40.7377,
    "lng": 46.3176
  },
  {
    "name": "Torp",
    "city": "Sandefjord",
    "country": "Norway",
    "code1": "",
    "code2": "\\N",
    "lat": 59.186703,
    "lng": 10.258628
  },
  {
    "name": "Ust Kamenogorsk Airport",
    "city": "Ust Kamenogorsk",
    "country": "Kazakhstan",
    "code1": "UKK",
    "code2": "UASK",
    "lat": 50.0366,
    "lng": 82.4942
  },
  {
    "name": "Petropavlosk South Airport",
    "city": "Petropavlosk",
    "country": "Kazakhstan",
    "code1": "PPK",
    "code2": "UACP",
    "lat": 54.7747,
    "lng": 69.1839
  },
  {
    "name": "Les Bases Airport",
    "city": "Grand Bourg",
    "country": "Guadeloupe",
    "code1": "GBJ",
    "code2": "TFFM",
    "lat": 15.86875,
    "lng": -61.270022
  },
  {
    "name": "St-François Airport",
    "city": "St-François",
    "country": "Guadeloupe",
    "code1": "SFC",
    "code2": "TFFC",
    "lat": 16.2578,
    "lng": -61.2625
  },
  {
    "name": "Codrington Airport",
    "city": "Codrington",
    "country": "Antigua and Barbuda",
    "code1": "BBQ",
    "code2": "TAPH",
    "lat": 17.6358,
    "lng": -61.8286
  },
  {
    "name": "Ji-Paraná Airport",
    "city": "Ji-Paraná",
    "country": "Brazil",
    "code1": "JPR",
    "code2": "SWJI",
    "lat": -10.8708,
    "lng": -61.8465
  },
  {
    "name": "Escuela Mariscal Sucre Airport",
    "city": "Maracay",
    "country": "Venezuela",
    "code1": "MYC",
    "code2": "SVBS",
    "lat": 10.249978,
    "lng": -67.649419
  },
  {
    "name": "Maria Reiche Neuman Airport",
    "city": "Nazca",
    "country": "Peru",
    "code1": "NZA",
    "code2": "SPZA",
    "lat": -14.854192,
    "lng": -74.961811
  },
  {
    "name": "Mayor General FAP Armando Revoredo Iglesias Airport",
    "city": "Cajamarca",
    "country": "Peru",
    "code1": "CJA",
    "code2": "SPJR",
    "lat": -7.139183,
    "lng": -78.4894
  },
  {
    "name": "Gatokae Airport",
    "city": "Gatokae",
    "country": "Solomon Islands",
    "code1": "GTA",
    "code2": "",
    "lat": -8.75,
    "lng": 158.2
  },
  {
    "name": "Boorama Airport",
    "city": "Boorama",
    "country": "Somalia",
    "code1": "BXX",
    "code2": "",
    "lat": 9.933,
    "lng": 43.15
  },
  {
    "name": "Mucuri Airport",
    "city": "Mucuri",
    "country": "Brazil",
    "code1": "MVS",
    "code2": "SNMU",
    "lat": -18.0489,
    "lng": -39.8642
  },
  {
    "name": "Zorg en Hoop Airport",
    "city": "Paramaribo",
    "country": "Suriname",
    "code1": "ORG",
    "code2": "SMZO",
    "lat": 5.81108,
    "lng": -55.1907
  },
  {
    "name": "Reyes Airport",
    "city": "Reyes",
    "country": "Bolivia",
    "code1": "REY",
    "code2": "SLRY",
    "lat": -14.3044,
    "lng": -67.3534
  },
  {
    "name": "Puerto Rico Airport",
    "city": "Puerto Rico/Manuripi",
    "country": "Bolivia",
    "code1": "PUR",
    "code2": "SLPR",
    "lat": -11.1077,
    "lng": -67.5512
  },
  {
    "name": "El Alcaraván Airport",
    "city": "Yopal",
    "country": "Colombia",
    "code1": "EYP",
    "code2": "SKYP",
    "lat": 5.319114,
    "lng": -72.383975
  },
  {
    "name": "General Rivadeneira Airport",
    "city": "Esmeraldas",
    "country": "Ecuador",
    "code1": "ESM",
    "code2": "SETN",
    "lat": 0.978519,
    "lng": -79.6266
  },
  {
    "name": "Pucón Airport",
    "city": "Pucon",
    "country": "Chile",
    "code1": "ZPC",
    "code2": "SCPC",
    "lat": -39.2928,
    "lng": -71.9159
  },
  {
    "name": "Toledo Airport",
    "city": "Toledo",
    "country": "Brazil",
    "code1": "TOW",
    "code2": "SBTD",
    "lat": -24.6863,
    "lng": -53.6975
  },
  {
    "name": "Santa Maria Airport",
    "city": "Santa Maria",
    "country": "Brazil",
    "code1": "RIA",
    "code2": "SBSM",
    "lat": -29.711358,
    "lng": -53.688153
  },
  {
    "name": "Chapada Diamantina Airport",
    "city": "Lençóis",
    "country": "Brazil",
    "code1": "LEC",
    "code2": "SBLE",
    "lat": -12.4823,
    "lng": -41.277
  },
  {
    "name": "Goulburn Airport",
    "city": "Goulburn",
    "country": "Australia",
    "code1": "GUL",
    "code2": "YGLB",
    "lat": -34.8103,
    "lng": 149.726
  },
  {
    "name": "Orlando Bezerra de Menezes Airport",
    "city": "Juazeiro Do Norte",
    "country": "Brazil",
    "code1": "JDO",
    "code2": "SBJU",
    "lat": -7.218958,
    "lng": -39.2701
  },
  {
    "name": "Santa Teresita Airport",
    "city": "Santa Teresita",
    "country": "Argentina",
    "code1": "SST",
    "code2": "SAZL",
    "lat": -36.542317,
    "lng": -56.721756
  },
  {
    "name": "Gobernador Gregores Airport",
    "city": "Gobernador Gregores",
    "country": "Argentina",
    "code1": "GGS",
    "code2": "SAWR",
    "lat": -48.7831,
    "lng": -70.15
  },
  {
    "name": "Antoine De St Exupery Airport",
    "city": "San Antonio Oeste",
    "country": "Argentina",
    "code1": "OES",
    "code2": "SAVN",
    "lat": -40.7512,
    "lng": -65.0343
  },
  {
    "name": "Las Heras Airport",
    "city": "Las Heras",
    "country": "Argentina",
    "code1": "LHS",
    "code2": "SAVH",
    "lat": -46.533056,
    "lng": -68.951111
  },
  {
    "name": "General Enrique Mosconi Airport",
    "city": "Tartagal",
    "country": "Argentina",
    "code1": "TTG",
    "code2": "SAST",
    "lat": -22.619167,
    "lng": -63.793189
  },
  {
    "name": "Masbate Airport",
    "city": "Masbate",
    "country": "Philippines",
    "code1": "MBT",
    "code2": "RPVJ",
    "lat": 12.3694,
    "lng": 123.629
  },
  {
    "name": "Catarman National Airport",
    "city": "Catarman",
    "country": "Philippines",
    "code1": "CRM",
    "code2": "RPVF",
    "lat": 12.502417,
    "lng": 124.635778
  },
  {
    "name": "Jolo Airport",
    "city": "Jolo",
    "country": "Philippines",
    "code1": "JOL",
    "code2": "RPMJ",
    "lat": 6.05367,
    "lng": 121.011
  },
  {
    "name": "Camiguin Airport",
    "city": "Camiguin",
    "country": "Philippines",
    "code1": "CGM",
    "code2": "RPMH",
    "lat": 9.25352,
    "lng": 124.707
  },
  {
    "name": "Cuyo Airport",
    "city": "Cuyo",
    "country": "Philippines",
    "code1": "CYU",
    "code2": "RPLO",
    "lat": 10.8581,
    "lng": 121.069
  },
  {
    "name": "Cheongju International Airport",
    "city": "Chongju",
    "country": "South Korea",
    "code1": "CJJ",
    "code2": "RKTU",
    "lat": 36.7166,
    "lng": 127.499119
  },
  {
    "name": "Sacheon Air Base",
    "city": "Sacheon",
    "country": "South Korea",
    "code1": "HIN",
    "code2": "RKPS",
    "lat": 35.088543,
    "lng": 128.07037
  },
  {
    "name": "Wonju Airport",
    "city": "Wonju",
    "country": "South Korea",
    "code1": "WJU",
    "code2": "RKNW",
    "lat": 37.438081,
    "lng": 127.960383
  },
  {
    "name": "Mokpo Airport",
    "city": "Mokpo",
    "country": "South Korea",
    "code1": "MPK",
    "code2": "RKJM",
    "lat": 34.758906,
    "lng": 126.379872
  },
  {
    "name": "Kunsan Air Base",
    "city": "Kunsan",
    "country": "South Korea",
    "code1": "KUV",
    "code2": "RKJK",
    "lat": 35.903756,
    "lng": 126.615906
  },
  {
    "name": "Miyakejima Airport",
    "city": "Miyakejima",
    "country": "Japan",
    "code1": "MYE",
    "code2": "RJTQ",
    "lat": 34.0736,
    "lng": 139.56
  },
  {
    "name": "Shonai Airport",
    "city": "Shonai",
    "country": "Japan",
    "code1": "SYO",
    "code2": "RJSY",
    "lat": 38.812222,
    "lng": 139.787222
  },
  {
    "name": "Odate Noshiro Airport",
    "city": "Odate Noshiro",
    "country": "Japan",
    "code1": "ONJ",
    "code2": "RJSR",
    "lat": 40.1919,
    "lng": 140.371
  },
  {
    "name": "Fukushima Airport",
    "city": "Fukushima",
    "country": "Japan",
    "code1": "FKS",
    "code2": "RJSF",
    "lat": 37.2274,
    "lng": 140.431
  },
  {
    "name": "Iwami Airport",
    "city": "Iwami",
    "country": "Japan",
    "code1": "IWJ",
    "code2": "RJOW",
    "lat": 34.6764,
    "lng": 131.79
  },
  {
    "name": "Nagoya Airport",
    "city": "Nagoya",
    "country": "Japan",
    "code1": "NKM",
    "code2": "RJNA",
    "lat": 35.255,
    "lng": 136.924
  },
  {
    "name": "Saga Airport",
    "city": "Saga",
    "country": "Japan",
    "code1": "HSG",
    "code2": "RJFS",
    "lat": 33.1497,
    "lng": 130.302
  },
  {
    "name": "Okadama Airport",
    "city": "Sapporo",
    "country": "Japan",
    "code1": "OKD",
    "code2": "RJCO",
    "lat": 43.1161,
    "lng": 141.38
  },
  {
    "name": "Kushiro Airport",
    "city": "Kushiro",
    "country": "Japan",
    "code1": "KUH",
    "code2": "RJCK",
    "lat": 43.041,
    "lng": 144.193
  },
  {
    "name": "Matsu Beigan Airport",
    "city": "Matsu Islands",
    "country": "Taiwan",
    "code1": "MFK",
    "code2": "RCMT",
    "lat": 26.224153,
    "lng": 120.00275
  },
  {
    "name": "Hengchun Airport",
    "city": "Hengchun",
    "country": "Taiwan",
    "code1": "HCN",
    "code2": "RCKW",
    "lat": 22.041075,
    "lng": 120.730208
  },
  {
    "name": "Matsu Nangan Airport",
    "city": "Matsu Islands",
    "country": "Taiwan",
    "code1": "LZN",
    "code2": "RCFG",
    "lat": 26.1598,
    "lng": 119.958
  },
  {
    "name": "Eniwetok Airport",
    "city": "Eniwetok Atoll",
    "country": "Marshall Islands",
    "code1": "ENT",
    "code2": "PKMA",
    "lat": 11.34075,
    "lng": 162.327861
  },
  {
    "name": "Kalaupapa Airport",
    "city": "Molokai",
    "country": "United States",
    "code1": "LUP",
    "code2": "PHLU",
    "lat": 21.211,
    "lng": -156.974
  },
  {
    "name": "El Nido Airport",
    "city": "El Nido",
    "country": "Philippines",
    "code1": "ENI",
    "code2": "",
    "lat": 11.202,
    "lng": 119.417
  },
  {
    "name": "Wipim Airport",
    "city": "Wipim",
    "country": "Papua New Guinea",
    "code1": "WPM",
    "code2": "",
    "lat": -8.78822,
    "lng": 142.882
  },
  {
    "name": "Baimuru Airport",
    "city": "Baimuru",
    "country": "Papua New Guinea",
    "code1": "VMU",
    "code2": "",
    "lat": -7.49686,
    "lng": 144.82
  },
  {
    "name": "Nuku Airport",
    "city": "Nuku",
    "country": "Papua New Guinea",
    "code1": "UKU",
    "code2": "",
    "lat": -3.667,
    "lng": 142.483
  },
  {
    "name": "Tufi Airport",
    "city": "Tufi",
    "country": "Papua New Guinea",
    "code1": "TFI",
    "code2": "",
    "lat": -9.07595,
    "lng": 149.32
  },
  {
    "name": "Suki Airport",
    "city": "Suki",
    "country": "Papua New Guinea",
    "code1": "SKC",
    "code2": "",
    "lat": -8.033,
    "lng": 141.717
  },
  {
    "name": "Balimo Airport",
    "city": "Balimo",
    "country": "Papua New Guinea",
    "code1": "OPU",
    "code2": "",
    "lat": -8.05,
    "lng": 142.933
  },
  {
    "name": "Obo Airport",
    "city": "Obo",
    "country": "Papua New Guinea",
    "code1": "OBX",
    "code2": "",
    "lat": -7.583,
    "lng": 141.317
  },
  {
    "name": "Losuia Airport",
    "city": "Losuia",
    "country": "Papua New Guinea",
    "code1": "LSA",
    "code2": "",
    "lat": -8.50582,
    "lng": 151.081
  },
  {
    "name": "Londolovit Airport",
    "city": "Londolovit",
    "country": "Papua New Guinea",
    "code1": "LNV",
    "code2": "",
    "lat": -3.04361,
    "lng": 152.629
  },
  {
    "name": "Lake Murray Airport",
    "city": "Lake Murray",
    "country": "Papua New Guinea",
    "code1": "LMY",
    "code2": "",
    "lat": -7.00992,
    "lng": 141.494
  },
  {
    "name": "Kamusi Airport",
    "city": "Kamusi",
    "country": "Papua New Guinea",
    "code1": "KUY",
    "code2": "",
    "lat": -7.42035,
    "lng": 143.122
  },
  {
    "name": "Kokoda Airport",
    "city": "Kokoda",
    "country": "Papua New Guinea",
    "code1": "KKD",
    "code2": "",
    "lat": -8.88468,
    "lng": 147.731
  },
  {
    "name": "Kandrian Airport",
    "city": "Kandrian",
    "country": "Papua New Guinea",
    "code1": "KDR",
    "code2": "",
    "lat": -6.183,
    "lng": 149.533
  },
  {
    "name": "Jacquinot Bay Airport",
    "city": "Jacquinot Bay",
    "country": "Papua New Guinea",
    "code1": "JAQ",
    "code2": "",
    "lat": -5.6525,
    "lng": 151.507
  },
  {
    "name": "Nissan Island Airport",
    "city": "Nissan Island",
    "country": "Papua New Guinea",
    "code1": "IIS",
    "code2": "",
    "lat": -4.49972,
    "lng": 154.226
  },
  {
    "name": "Ihu Airport",
    "city": "Ihu",
    "country": "Papua New Guinea",
    "code1": "IHU",
    "code2": "",
    "lat": -7.89756,
    "lng": 145.396
  },
  {
    "name": "Gasmata Island Airport",
    "city": "Gasmata Island",
    "country": "Papua New Guinea",
    "code1": "GMI",
    "code2": "",
    "lat": -6.27111,
    "lng": 150.331
  },
  {
    "name": "Tadji Airport",
    "city": "Aitape",
    "country": "Papua New Guinea",
    "code1": "ATP",
    "code2": "",
    "lat": -3.18985,
    "lng": 142.43
  },
  {
    "name": "Wrangell Airport",
    "city": "Wrangell",
    "country": "United States",
    "code1": "WRG",
    "code2": "PAWG",
    "lat": 56.4843,
    "lng": -132.37
  },
  {
    "name": "Chevak Airport",
    "city": "Chevak",
    "country": "United States",
    "code1": "VAK",
    "code2": "PAVA",
    "lat": 61.5338,
    "lng": -165.584
  },
  {
    "name": "Aniak Airport",
    "city": "Aniak",
    "country": "United States",
    "code1": "ANI",
    "code2": "PANI",
    "lat": 61.5816,
    "lng": -159.543
  },
  {
    "name": "Mountain Village Airport",
    "city": "Mountain Village",
    "country": "United States",
    "code1": "MOU",
    "code2": "PAMO",
    "lat": 62.0954,
    "lng": -163.682
  },
  {
    "name": "McGrath Airport",
    "city": "Mcgrath",
    "country": "United States",
    "code1": "MCG",
    "code2": "PAMC",
    "lat": 62.9529,
    "lng": -155.606
  },
  {
    "name": "Kalskag Airport",
    "city": "Kalskag",
    "country": "United States",
    "code1": "KLG",
    "code2": "PALG",
    "lat": 61.5363,
    "lng": -160.341
  },
  {
    "name": "Haines Airport",
    "city": "Haines",
    "country": "United States",
    "code1": "HNS",
    "code2": "PAHN",
    "lat": 59.2438,
    "lng": -135.524
  },
  {
    "name": "Holy Cross Airport",
    "city": "Holy Cross",
    "country": "United States",
    "code1": "HCR",
    "code2": "PAHC",
    "lat": 62.1883,
    "lng": -159.775
  },
  {
    "name": "Skagway Airport",
    "city": "Skagway",
    "country": "United States",
    "code1": "SGY",
    "code2": "PAGY",
    "lat": 59.4601,
    "lng": -135.316
  },
  {
    "name": "Gustavus Airport",
    "city": "Gustavus",
    "country": "United States",
    "code1": "GST",
    "code2": "PAGS",
    "lat": 58.4253,
    "lng": -135.707
  },
  {
    "name": "Adak Airport",
    "city": "Adak Island",
    "country": "United States",
    "code1": "ADK",
    "code2": "PADK",
    "lat": 51.878,
    "lng": -176.646
  },
  {
    "name": "Sambu Airport",
    "city": "Boca de Sábalo",
    "country": "Panama",
    "code1": "SAX",
    "code2": "",
    "lat": 8.017,
    "lng": -78.2
  },
  {
    "name": "Contadora Airport",
    "city": "Contadora Island",
    "country": "Panama",
    "code1": "OTD",
    "code2": "",
    "lat": 8.62876,
    "lng": -79.0347
  },
  {
    "name": "EL Real Airport",
    "city": "El Real",
    "country": "Panama",
    "code1": "ELE",
    "code2": "",
    "lat": 8.133,
    "lng": -77.7
  },
  {
    "name": "Bahia Piña Airport",
    "city": "Bahia Piña",
    "country": "Panama",
    "code1": "BFQ",
    "code2": "",
    "lat": 7.583,
    "lng": -78.2
  },
  {
    "name": "Sayun International Airport",
    "city": "Sayun Intl",
    "country": "Yemen",
    "code1": "GXF",
    "code2": "OYSY",
    "lat": 15.966111,
    "lng": 48.7883
  },
  {
    "name": "Kamishly Airport",
    "city": "Kamishly",
    "country": "Syria",
    "code1": "KAC",
    "code2": "OSKL",
    "lat": 37.020625,
    "lng": 41.191394
  },
  {
    "name": "Sulaymaniyah International Airport",
    "city": "Sulaymaniyah",
    "country": "Iraq",
    "code1": "ISU",
    "code2": "ORSU",
    "lat": 35.5608,
    "lng": 45.3147
  },
  {
    "name": "Turbat International Airport",
    "city": "Turbat",
    "country": "Pakistan",
    "code1": "TUK",
    "code2": "OPTU",
    "lat": 25.986369,
    "lng": 63.030167
  },
  {
    "name": "Sehwan Sharif Airport",
    "city": "Sehwan Sharif",
    "country": "Pakistan",
    "code1": "SYW",
    "code2": "OPSN",
    "lat": 26.4731,
    "lng": 67.7172
  },
  {
    "name": "Skardu Airport",
    "city": "Skardu",
    "country": "Pakistan",
    "code1": "KDU",
    "code2": "OPSD",
    "lat": 35.335508,
    "lng": 75.536047
  },
  {
    "name": "Parachinar Airport",
    "city": "Parachinar",
    "country": "Pakistan",
    "code1": "PAJ",
    "code2": "OPPC",
    "lat": 33.9021,
    "lng": 70.0716
  },
  {
    "name": "Ormara Airport",
    "city": "Ormara Raik",
    "country": "Pakistan",
    "code1": "ORW",
    "code2": "OPOR",
    "lat": 25.2747,
    "lng": 64.586
  },
  {
    "name": "Khuzdar Airport",
    "city": "Khuzdar",
    "country": "Pakistan",
    "code1": "KDD",
    "code2": "OPKH",
    "lat": 27.7906,
    "lng": 66.6473
  },
  {
    "name": "Hyderabad Airport",
    "city": "Hyderabad",
    "country": "Pakistan",
    "code1": "HDD",
    "code2": "OPKD",
    "lat": 25.3181,
    "lng": 68.3661
  },
  {
    "name": "Jiwani Airport",
    "city": "Jiwani",
    "country": "Pakistan",
    "code1": "JIW",
    "code2": "OPJI",
    "lat": 25.0678,
    "lng": 61.8054
  },
  {
    "name": "Dera Ismael Khan Airport",
    "city": "Dera Ismael Khan",
    "country": "Pakistan",
    "code1": "DSK",
    "code2": "OPDI",
    "lat": 31.909422,
    "lng": 70.896639
  },
  {
    "name": "Dera Ghazi Khan Airport",
    "city": "Dera Ghazi Khan",
    "country": "Pakistan",
    "code1": "DEA",
    "code2": "OPDG",
    "lat": 29.961011,
    "lng": 70.485925
  },
  {
    "name": "Dalbandin Airport",
    "city": "Dalbandin",
    "country": "Pakistan",
    "code1": "DBA",
    "code2": "OPDB",
    "lat": 28.8783,
    "lng": 64.3998
  },
  {
    "name": "Chitral Airport",
    "city": "Chitral",
    "country": "Pakistan",
    "code1": "CJL",
    "code2": "OPCH",
    "lat": 35.886592,
    "lng": 71.800578
  },
  {
    "name": "Bahawalpur Airport",
    "city": "Bahawalpur",
    "country": "Pakistan",
    "code1": "BHV",
    "code2": "OPBW",
    "lat": 29.3481,
    "lng": 71.717981
  },
  {
    "name": "Bannu Airport",
    "city": "Bannu",
    "country": "Pakistan",
    "code1": "BNP",
    "code2": "OPBN",
    "lat": 32.9729,
    "lng": 70.5279
  },
  {
    "name": "Al Ain International Airport",
    "city": "Al Ain",
    "country": "United Arab Emirates",
    "code1": "AAN",
    "code2": "OMAL",
    "lat": 24.261667,
    "lng": 55.609167
  },
  {
    "name": "Uromiyeh Airport",
    "city": "Uromiyeh",
    "country": "Iran",
    "code1": "OMH",
    "code2": "OITR",
    "lat": 37.6681,
    "lng": 45.0687
  },
  {
    "name": "Ardabil Airport",
    "city": "Ardabil",
    "country": "Iran",
    "code1": "ADU",
    "code2": "OITL",
    "lat": 38.325678,
    "lng": 48.424356
  },
  {
    "name": "Lar Airport",
    "city": "Lar",
    "country": "Iran",
    "code1": "LRR",
    "code2": "OISL",
    "lat": 27.674725,
    "lng": 54.383278
  },
  {
    "name": "Sari Dasht E Naz Airport",
    "city": "Dasht-e-naz",
    "country": "Iran",
    "code1": "SRY",
    "code2": "OINZ",
    "lat": 36.635833,
    "lng": 53.193611
  },
  {
    "name": "Noshahr Airport",
    "city": "Noshahr",
    "country": "Iran",
    "code1": "NSH",
    "code2": "OINN",
    "lat": 36.663333,
    "lng": 51.464722
  },
  {
    "name": "Sabzevar National Airport",
    "city": "Sabzevar",
    "country": "Iran",
    "code1": "AFZ",
    "code2": "OIMS",
    "lat": 36.168083,
    "lng": 57.595183
  },
  {
    "name": "Bojnourd Airport",
    "city": "Bojnourd",
    "country": "Iran",
    "code1": "BJB",
    "code2": "OIMN",
    "lat": 37.492958,
    "lng": 57.308219
  },
  {
    "name": "Rafsanjan Airport",
    "city": "Rafsanjan",
    "country": "Iran",
    "code1": "RJN",
    "code2": "OIKR",
    "lat": 30.297714,
    "lng": 56.051139
  },
  {
    "name": "Bam Airport",
    "city": "Bam",
    "country": "Iran",
    "code1": "BXR",
    "code2": "OIKM",
    "lat": 29.084169,
    "lng": 58.450042
  },
  {
    "name": "Khoram Abad Airport",
    "city": "Khorram Abad",
    "country": "Iran",
    "code1": "KHD",
    "code2": "OICK",
    "lat": 33.435378,
    "lng": 48.282889
  },
  {
    "name": "Wadi Al Dawasir Airport",
    "city": "Wadi-al-dawasir",
    "country": "Saudi Arabia",
    "code1": "EWD",
    "code2": "OEWD",
    "lat": 20.504275,
    "lng": 45.199556
  },
  {
    "name": "Al-Jawf Domestic Airport",
    "city": "Al-Jawf",
    "country": "Saudi Arabia",
    "code1": "AJF",
    "code2": "OESK",
    "lat": 29.785133,
    "lng": 40.100006
  },
  {
    "name": "Dawadmi Domestic Airport",
    "city": "Dawadmi",
    "country": "Saudi Arabia",
    "code1": "DWD",
    "code2": "OEDW",
    "lat": 24.5,
    "lng": 44.4
  },
  {
    "name": "Saul Airport",
    "city": "Saul",
    "country": "French Guiana",
    "code1": "XAU",
    "code2": "SOOS",
    "lat": 3.61361,
    "lng": -53.2042
  },
  {
    "name": "Faizabad Airport",
    "city": "Faizabad",
    "country": "Afghanistan",
    "code1": "FBD",
    "code2": "OAFZ",
    "lat": 37.1211,
    "lng": 70.5181
  },
  {
    "name": "Île des Pins Airport",
    "city": "Île des Pins",
    "country": "New Caledonia",
    "code1": "ILP",
    "code2": "NWWE",
    "lat": -22.5889,
    "lng": 167.456
  },
  {
    "name": "Belep Islands Airport",
    "city": "Waala",
    "country": "New Caledonia",
    "code1": "BMY",
    "code2": "NWWC",
    "lat": -19.7206,
    "lng": 163.661
  },
  {
    "name": "Tiga Airport",
    "city": "Tiga",
    "country": "New Caledonia",
    "code1": "TGJ",
    "code2": "NWWA",
    "lat": -21.0961,
    "lng": 167.804
  },
  {
    "name": "Ipota Airport",
    "city": "Ipota",
    "country": "Vanuatu",
    "code1": "IPA",
    "code2": "NVVI",
    "lat": -18.8783,
    "lng": 169.308
  },
  {
    "name": "Futuna Airport",
    "city": "Futuna Island",
    "country": "Vanuatu",
    "code1": "FTA",
    "code2": "NVVF",
    "lat": -19.5164,
    "lng": 170.232
  },
  {
    "name": "Dillon's Bay Airport",
    "city": "Dillon's Bay",
    "country": "Vanuatu",
    "code1": "DLY",
    "code2": "NVVD",
    "lat": -18.7694,
    "lng": 169.001
  },
  {
    "name": "Aniwa Airport",
    "city": "Aniwa",
    "country": "Vanuatu",
    "code1": "AWD",
    "code2": "NVVB",
    "lat": -19.24,
    "lng": 169.605
  },
  {
    "name": "Anelghowhat Airport",
    "city": "Anelghowhat",
    "country": "Vanuatu",
    "code1": "AUY",
    "code2": "NVVA",
    "lat": -20.2492,
    "lng": 169.771
  },
  {
    "name": "North West Santo Airport",
    "city": "Olpoi",
    "country": "Vanuatu",
    "code1": "OLZ",
    "code2": "NVSZ",
    "lat": -14.8817,
    "lng": 166.558
  },
  {
    "name": "Southwest Bay Airport",
    "city": "Malekula Island",
    "country": "Vanuatu",
    "code1": "SWJ",
    "code2": "NVSX",
    "lat": -16.495,
    "lng": 167.438
  },
  {
    "name": "Valesdir Airport",
    "city": "Valesdir",
    "country": "Vanuatu",
    "code1": "VLS",
    "code2": "NVSV",
    "lat": -16.7961,
    "lng": 168.177
  },
  {
    "name": "Uléi Airport",
    "city": "Ambryn Island",
    "country": "Vanuatu",
    "code1": "ULB",
    "code2": "NVSU",
    "lat": -16.333,
    "lng": 168.283
  },
  {
    "name": "Tongoa Island Airport",
    "city": "Tongoa Island",
    "country": "Vanuatu",
    "code1": "TGH",
    "code2": "NVST",
    "lat": -16.8911,
    "lng": 168.551
  },
  {
    "name": "Santo Pekoa International Airport",
    "city": "Santo",
    "country": "Vanuatu",
    "code1": "SON",
    "code2": "NVSS",
    "lat": -15.505033,
    "lng": 167.219742
  },
  {
    "name": "Redcliffe Airport",
    "city": "Redcliffe",
    "country": "Vanuatu",
    "code1": "RCL",
    "code2": "NVSR",
    "lat": -15.472,
    "lng": 167.835
  },
  {
    "name": "Gaua Island Airport",
    "city": "Gaua Island",
    "country": "Vanuatu",
    "code1": "ZGU",
    "code2": "NVSQ",
    "lat": -14.2181,
    "lng": 167.587
  },
  {
    "name": "Norsup Airport",
    "city": "Norsup",
    "country": "Vanuatu",
    "code1": "NUS",
    "code2": "NVSP",
    "lat": -16.0797,
    "lng": 167.401
  },
  {
    "name": "Lonorore Airport",
    "city": "Lonorore",
    "country": "Vanuatu",
    "code1": "LNE",
    "code2": "NVSO",
    "lat": -15.8656,
    "lng": 168.172
  },
  {
    "name": "Naone Airport",
    "city": "Maewo Island",
    "country": "Vanuatu",
    "code1": "MWF",
    "code2": "NVSN",
    "lat": -15,
    "lng": 168.083
  },
  {
    "name": "Lamen Bay Airport",
    "city": "Lamen Bay",
    "country": "Vanuatu",
    "code1": "LNB",
    "code2": "NVSM",
    "lat": -16.5842,
    "lng": 168.159
  },
  {
    "name": "Lamap Airport",
    "city": "Lamap",
    "country": "Vanuatu",
    "code1": "LPM",
    "code2": "NVSL",
    "lat": -16.454,
    "lng": 167.823
  },
  {
    "name": "Tavie Airport",
    "city": "Paama Island",
    "country": "Vanuatu",
    "code1": "PBJ",
    "code2": "NVSI",
    "lat": -16.439,
    "lng": 168.257
  },
  {
    "name": "Sara Airport",
    "city": "Pentecost Island",
    "country": "Vanuatu",
    "code1": "SSR",
    "code2": "NVSH",
    "lat": -15.4708,
    "lng": 168.152
  },
  {
    "name": "Longana Airport",
    "city": "Longana",
    "country": "Vanuatu",
    "code1": "LOD",
    "code2": "NVSG",
    "lat": -15.3067,
    "lng": 167.967
  },
  {
    "name": "Craig Cove Airport",
    "city": "Craig Cove",
    "country": "Vanuatu",
    "code1": "CCV",
    "code2": "NVSF",
    "lat": -16.265,
    "lng": 167.924
  },
  {
    "name": "Sangafa Airport",
    "city": "Sangafa",
    "country": "Vanuatu",
    "code1": "EAE",
    "code2": "NVSE",
    "lat": -17.0903,
    "lng": 168.343
  },
  {
    "name": "Torres Airstrip",
    "city": "Loh/Linua",
    "country": "Vanuatu",
    "code1": "TOH",
    "code2": "NVSD",
    "lat": -13.328,
    "lng": 166.638
  },
  {
    "name": "Sola Airport",
    "city": "Sola",
    "country": "Vanuatu",
    "code1": "SLH",
    "code2": "NVSC",
    "lat": -13.8517,
    "lng": 167.537
  },
  {
    "name": "Mota Lava Airport",
    "city": "Ablow",
    "country": "Vanuatu",
    "code1": "MTV",
    "code2": "NVSA",
    "lat": -13.666,
    "lng": 167.712
  },
  {
    "name": "Ua Huka Airport",
    "city": "Ua Huka",
    "country": "French Polynesia",
    "code1": "UAH",
    "code2": "NTMU",
    "lat": -8.93611,
    "lng": -139.552
  },
  {
    "name": "Ua Pou Airport",
    "city": "Ua Pou",
    "country": "French Polynesia",
    "code1": "UAP",
    "code2": "NTMP",
    "lat": -9.35167,
    "lng": -140.078
  },
  {
    "name": "Hiva Oa-Atuona Airport",
    "city": "Hiva-oa",
    "country": "French Polynesia",
    "code1": "AUQ",
    "code2": "NTMN",
    "lat": -9.768794,
    "lng": -139.011256
  },
  {
    "name": "Ahe Airport",
    "city": "Ahe",
    "country": "French Polynesia",
    "code1": "AHE",
    "code2": "NTHE",
    "lat": -14.4281,
    "lng": -146.257
  },
  {
    "name": "Apataki Airport",
    "city": "Apataki",
    "country": "French Polynesia",
    "code1": "APK",
    "code2": "NTGD",
    "lat": -15.5736,
    "lng": -146.415
  },
  {
    "name": "Maota Airport",
    "city": "Savaii Island",
    "country": "Samoa",
    "code1": "MXS",
    "code2": "NSMA",
    "lat": -13.733,
    "lng": -172.3
  },
  {
    "name": "Mountain Airport",
    "city": "Mountain",
    "country": "Nepal",
    "code1": "MWP",
    "code2": "",
    "lat": 28,
    "lng": 85.333
  },
  {
    "name": "Pointe Vele Airport",
    "city": "Futuna Island",
    "country": "Wallis and Futuna",
    "code1": "FUT",
    "code2": "NLWF",
    "lat": -14.3114,
    "lng": -178.066
  },
  {
    "name": "Niue International Airport",
    "city": "Alofi",
    "country": "Niue",
    "code1": "IUE",
    "code2": "NIUE",
    "lat": -19.080028,
    "lng": -169.925639
  },
  {
    "name": "Vanua Balavu Airport",
    "city": "Vanua Balavu",
    "country": "Fiji",
    "code1": "VBV",
    "code2": "NFVB",
    "lat": -17.269,
    "lng": -178.976
  },
  {
    "name": "Kuini Lavenia Airport",
    "city": "Niuatoputapu",
    "country": "Tonga",
    "code1": "NTT",
    "code2": "NFTP",
    "lat": -15.9767,
    "lng": -173.755
  },
  {
    "name": "Mata'aho Airport",
    "city": "Angaha, Niuafo'ou Island",
    "country": "Tonga",
    "code1": "NFO",
    "code2": "NFTO",
    "lat": -15.5708,
    "lng": -175.633
  },
  {
    "name": "Lifuka Island Airport",
    "city": "Lifuka",
    "country": "Tonga",
    "code1": "HPA",
    "code2": "NFTL",
    "lat": -19.777,
    "lng": -174.341
  },
  {
    "name": "Kaufana Airport",
    "city": "Eua Island",
    "country": "Tonga",
    "code1": "EUA",
    "code2": "NFTE",
    "lat": -21.3783,
    "lng": -174.958
  },
  {
    "name": "Savusavu Airport",
    "city": "Savusavu",
    "country": "Fiji",
    "code1": "SVU",
    "code2": "NFNS",
    "lat": -16.8028,
    "lng": 179.341
  },
  {
    "name": "Rotuma Airport",
    "city": "Rotuma",
    "country": "Fiji",
    "code1": "RTA",
    "code2": "NFNR",
    "lat": -12.4825,
    "lng": 177.071
  },
  {
    "name": "Koro Island Airport",
    "city": "Koro Island",
    "country": "Fiji",
    "code1": "KXF",
    "code2": "NFNO",
    "lat": -17.3458,
    "lng": 179.422
  },
  {
    "name": "Matei Airport",
    "city": "Matei",
    "country": "Fiji",
    "code1": "TVU",
    "code2": "NFNM",
    "lat": -16.6906,
    "lng": -179.877
  },
  {
    "name": "Labasa Airport",
    "city": "Lambasa",
    "country": "Fiji",
    "code1": "LBS",
    "code2": "NFNL",
    "lat": -16.466749,
    "lng": 179.33986
  },
  {
    "name": "Lakeba Island Airport",
    "city": "Lakeba Island",
    "country": "Fiji",
    "code1": "LKB",
    "code2": "NFNK",
    "lat": -18.1992,
    "lng": -178.817
  },
  {
    "name": "Ngau Airport",
    "city": "Ngau",
    "country": "Fiji",
    "code1": "NGI",
    "code2": "NFNG",
    "lat": -18.1156,
    "lng": 179.34
  },
  {
    "name": "Moala Airport",
    "city": "Moala",
    "country": "Fiji",
    "code1": "MFJ",
    "code2": "NFMO",
    "lat": -18.5667,
    "lng": 179.951
  },
  {
    "name": "Mana Island Airport",
    "city": "Mana Island",
    "country": "Fiji",
    "code1": "MNF",
    "code2": "NFMA",
    "lat": -17.6731,
    "lng": 177.098
  },
  {
    "name": "Vunisea Airport",
    "city": "Vunisea",
    "country": "Fiji",
    "code1": "KDV",
    "code2": "NFKD",
    "lat": -19.0581,
    "lng": 178.157
  },
  {
    "name": "Malolo Lailai Island Airport",
    "city": "Malolo Lailai Island",
    "country": "Fiji",
    "code1": "PTF",
    "code2": "NFFO",
    "lat": -17.7779,
    "lng": 177.197
  },
  {
    "name": "Cicia Airport",
    "city": "Cicia",
    "country": "Fiji",
    "code1": "ICI",
    "code2": "NFCI",
    "lat": -17.7433,
    "lng": -179.342
  },
  {
    "name": "Penrhyn Island Airport",
    "city": "Penrhyn Island",
    "country": "Cook Islands",
    "code1": "PYE",
    "code2": "NCPY",
    "lat": -9.00667,
    "lng": -158.037
  },
  {
    "name": "Mitiaro Island Airport",
    "city": "Mitiaro Island",
    "country": "Cook Islands",
    "code1": "MOI",
    "code2": "NCMR",
    "lat": -19.8425,
    "lng": -157.703
  },
  {
    "name": "Mauke Airport",
    "city": "Mauke Island",
    "country": "Cook Islands",
    "code1": "MUK",
    "code2": "NCMK",
    "lat": -20.1361,
    "lng": -157.345
  },
  {
    "name": "Manihiki Island Airport",
    "city": "Manihiki Island",
    "country": "Cook Islands",
    "code1": "MHX",
    "code2": "NCMH",
    "lat": -10.3767,
    "lng": -161.002
  },
  {
    "name": "Mangaia Island Airport",
    "city": "Mangaia Island",
    "country": "Cook Islands",
    "code1": "MGS",
    "code2": "NCMG",
    "lat": -21.8956,
    "lng": -157.905
  },
  {
    "name": "Atiu Island Airport",
    "city": "Atiu Island",
    "country": "Cook Islands",
    "code1": "AIU",
    "code2": "NCAT",
    "lat": -19.9678,
    "lng": -158.119
  },
  {
    "name": "Nassau Paradise Island Airport",
    "city": "Nassau",
    "country": "Bahamas",
    "code1": "PID",
    "code2": "MYPI",
    "lat": 25.083,
    "lng": -77.3
  },
  {
    "name": "Colonel Hill Airport",
    "city": "Colonel Hill",
    "country": "Bahamas",
    "code1": "CRI",
    "code2": "MYCI",
    "lat": 22.745561,
    "lng": -74.182353
  },
  {
    "name": "New Bight Airport",
    "city": "Cat Island",
    "country": "Bahamas",
    "code1": "CAT",
    "code2": "MYCB",
    "lat": 24.315292,
    "lng": -75.452331
  },
  {
    "name": "Arthurs Town Airport",
    "city": "Arthur's Town",
    "country": "Bahamas",
    "code1": "ATC",
    "code2": "MYCA",
    "lat": 24.629417,
    "lng": -75.673775
  },
  {
    "name": "Congo Town Airport",
    "city": "Andros",
    "country": "Bahamas",
    "code1": "COX",
    "code2": "MYAK",
    "lat": 24.158933,
    "lng": -77.589758
  },
  {
    "name": "Long Banga Airport",
    "city": "Long Banga",
    "country": "Malaysia",
    "code1": "LBP",
    "code2": "",
    "lat": 3.18495,
    "lng": 115.454
  },
  {
    "name": "Salina Cruz Naval Air Station",
    "city": "Salina Cruz",
    "country": "Mexico",
    "code1": "SCX",
    "code2": "MM57",
    "lat": 16.2126,
    "lng": -95.2016
  },
  {
    "name": "Alberto Delgado Airport",
    "city": "Trinidad",
    "country": "Cuba",
    "code1": "TND",
    "code2": "MUTD",
    "lat": 21.788461,
    "lng": -79.997203
  },
  {
    "name": "Cayo Coco Airport",
    "city": "Cayo Coco",
    "country": "Cuba",
    "code1": "CCC",
    "code2": "MUOC",
    "lat": 22.5132,
    "lng": -78.511
  },
  {
    "name": "Port-de-Paix Airport",
    "city": "Port-de-Paix",
    "country": "Haiti",
    "code1": "PAX",
    "code2": "MTPX",
    "lat": 19.9336,
    "lng": -72.8486
  },
  {
    "name": "Jeremie Airport",
    "city": "Jeremie",
    "country": "Haiti",
    "code1": "JEE",
    "code2": "MTJE",
    "lat": 18.6631,
    "lng": -74.1703
  },
  {
    "name": "Playa Samara Airport",
    "city": "Playa Samara",
    "country": "Costa Rica",
    "code1": "PLD",
    "code2": "MRSR",
    "lat": 10.25,
    "lng": -85.417
  },
  {
    "name": "Tobias Bolanos International Airport",
    "city": "San Jose",
    "country": "Costa Rica",
    "code1": "SYQ",
    "code2": "MRPV",
    "lat": 9.957053,
    "lng": -84.139797
  },
  {
    "name": "Puerto Jimenez Airport",
    "city": "Puerto Jimenez",
    "country": "Costa Rica",
    "code1": "PJM",
    "code2": "MRPJ",
    "lat": 8.53333,
    "lng": -83.3
  },
  {
    "name": "Islita Airport",
    "city": "Nandayure",
    "country": "Costa Rica",
    "code1": "PBP",
    "code2": "MRIA",
    "lat": 9.85611,
    "lng": -85.3708
  },
  {
    "name": "Cabo Velas Airport",
    "city": "Nicoya",
    "country": "Costa Rica",
    "code1": "TNO",
    "code2": "MRCV",
    "lat": 10.3557,
    "lng": -85.852892
  },
  {
    "name": "Barra del Colorado Airport",
    "city": "Pococi",
    "country": "Costa Rica",
    "code1": "BCL",
    "code2": "MRBC",
    "lat": 10.768736,
    "lng": -83.585614
  },
  {
    "name": "Aerotortuguero Airport",
    "city": "Roxana",
    "country": "Costa Rica",
    "code1": "TTQ",
    "code2": "MRAO",
    "lat": 10.569,
    "lng": -83.5148
  },
  {
    "name": "Captain Ramon Xatruch Airport",
    "city": "La Palma",
    "country": "Panama",
    "code1": "PLP",
    "code2": "MPLP",
    "lat": 8.40667,
    "lng": -78.1417
  },
  {
    "name": "Jaqué Airport",
    "city": "Jaqué",
    "country": "Panama",
    "code1": "JQE",
    "code2": "MPJE",
    "lat": 7.51778,
    "lng": -78.1572
  },
  {
    "name": "Enrique Adolfo Jimenez Airport",
    "city": "Colón",
    "country": "Panama",
    "code1": "ONX",
    "code2": "MPEJ",
    "lat": 9.35664,
    "lng": -79.8674
  },
  {
    "name": "Alonso Valderrama Airport",
    "city": "Chitré",
    "country": "Panama",
    "code1": "CTD",
    "code2": "MPCE",
    "lat": 7.98784,
    "lng": -80.4097
  },
  {
    "name": "Lencero Airport",
    "city": "Jalapa",
    "country": "Mexico",
    "code1": "JAL",
    "code2": "MMJA",
    "lat": 19.475083,
    "lng": -96.797506
  },
  {
    "name": "Guerrero Negro Airport",
    "city": "Guerrero Negro",
    "country": "Mexico",
    "code1": "GUB",
    "code2": "MMGR",
    "lat": 28.0261,
    "lng": -114.024
  },
  {
    "name": "Ciudad Constitución Airport",
    "city": "Ciudad Constitución",
    "country": "Mexico",
    "code1": "CUA",
    "code2": "MMDA",
    "lat": 25.0538,
    "lng": -111.615
  },
  {
    "name": "Captain Rogelio Castillo National Airport",
    "city": "Celaya",
    "country": "Mexico",
    "code1": "CYW",
    "code2": "MMCY",
    "lat": 20.545994,
    "lng": -100.88655
  },
  {
    "name": "Mili Island Airport",
    "city": "Mili Island",
    "country": "Marshall Islands",
    "code1": "MIJ",
    "code2": "MLIP",
    "lat": 6.08333,
    "lng": 171.733
  },
  {
    "name": "Puerto Lempira Airport",
    "city": "Puerto Lempira",
    "country": "Honduras",
    "code1": "PEU",
    "code2": "MHPL",
    "lat": 15.2622,
    "lng": -83.7812
  },
  {
    "name": "Ahuas Airport",
    "city": "Ahuas",
    "country": "Honduras",
    "code1": "AHS",
    "code2": "MHAH",
    "lat": 15.4722,
    "lng": -84.3522
  },
  {
    "name": "Wotho Island Airport",
    "city": "Wotho Island",
    "country": "Marshall Islands",
    "code1": "WTO",
    "code2": "",
    "lat": 10.1733,
    "lng": 166.003
  },
  {
    "name": "Wotje Atoll Airport",
    "city": "Wotje Atoll",
    "country": "Marshall Islands",
    "code1": "WTE",
    "code2": "N36",
    "lat": 9.46667,
    "lng": 170.233
  },
  {
    "name": "Woja Airport",
    "city": "Majuro Atoll",
    "country": "Marshall Islands",
    "code1": "WJA",
    "code2": "",
    "lat": 7.083,
    "lng": 171.133
  },
  {
    "name": "Jaluit Airport",
    "city": "Jabor Jaluit Atoll",
    "country": "Marshall Islands",
    "code1": "UIT",
    "code2": "N55",
    "lat": 5.90924,
    "lng": 169.637
  },
  {
    "name": "Rongelap Island Airport",
    "city": "Rongelap Island",
    "country": "Marshall Islands",
    "code1": "RNP",
    "code2": "",
    "lat": 11.1572,
    "lng": 166.887
  },
  {
    "name": "Namorik Atoll Airport",
    "city": "Namorik Atoll",
    "country": "Marshall Islands",
    "code1": "NDK",
    "code2": "3N0",
    "lat": 5.63167,
    "lng": 168.125
  },
  {
    "name": "Majkin Airport",
    "city": "Majkin",
    "country": "Marshall Islands",
    "code1": "MJE",
    "code2": "",
    "lat": 7.833,
    "lng": 168.167
  },
  {
    "name": "Mejit Atoll Airport",
    "city": "Mejit Atoll",
    "country": "Marshall Islands",
    "code1": "MJB",
    "code2": "Q30",
    "lat": 10.2833,
    "lng": 170.883
  },
  {
    "name": "Maloelap Island Airport",
    "city": "Maloelap Island",
    "country": "Marshall Islands",
    "code1": "MAV",
    "code2": "",
    "lat": 8.70444,
    "lng": 171.23
  },
  {
    "name": "Likiep Airport",
    "city": "Likiep Island",
    "country": "Marshall Islands",
    "code1": "LIK",
    "code2": "",
    "lat": 9.82316,
    "lng": 169.308
  },
  {
    "name": "Kaben Airport",
    "city": "Kaben",
    "country": "Marshall Islands",
    "code1": "KBT",
    "code2": "",
    "lat": 8.90056,
    "lng": 170.844
  },
  {
    "name": "Jeh Airport",
    "city": "Ailinglapalap Atoll",
    "country": "Marshall Islands",
    "code1": "JEJ",
    "code2": "",
    "lat": 7.56535,
    "lng": 168.962
  },
  {
    "name": "Jabot Airport",
    "city": "Ailinglapalap Atoll",
    "country": "Marshall Islands",
    "code1": "JAT",
    "code2": "",
    "lat": 7.45235,
    "lng": 168.552
  },
  {
    "name": "Enyu Airfield",
    "city": "Bikini Atoll",
    "country": "Marshall Islands",
    "code1": "BII",
    "code2": "",
    "lat": 11.5225,
    "lng": 165.565
  },
  {
    "name": "Aur Island Airport",
    "city": "Aur Atoll",
    "country": "Marshall Islands",
    "code1": "AUL",
    "code2": "",
    "lat": 8.14528,
    "lng": 171.173
  },
  {
    "name": "Ailuk Airport",
    "city": "Ailuk Island",
    "country": "Marshall Islands",
    "code1": "AIM",
    "code2": "",
    "lat": 10.2168,
    "lng": 169.983
  },
  {
    "name": "Utirik Airport",
    "city": "Utirik Island",
    "country": "Marshall Islands",
    "code1": "UTK",
    "code2": "03N",
    "lat": 11.222,
    "lng": 169.852
  },
  {
    "name": "Quezaltenango Airport",
    "city": "Quezaltenango",
    "country": "Guatemala",
    "code1": "AAZ",
    "code2": "MGQZ",
    "lat": 14.8656,
    "lng": -91.502
  },
  {
    "name": "Puerto Barrios Airport",
    "city": "Puerto Barrios",
    "country": "Guatemala",
    "code1": "PBR",
    "code2": "MGPB",
    "lat": 15.730878,
    "lng": -88.583767
  },
  {
    "name": "Dr Joaquin Balaguer International Airport",
    "city": "La Isabela",
    "country": "Dominican Republic",
    "code1": "JBQ",
    "code2": "MDJB",
    "lat": 18.5725,
    "lng": -69.9856
  },
  {
    "name": "Samaná El Catey International Airport",
    "city": "Samana",
    "country": "Dominican Republic",
    "code1": "AZS",
    "code2": "MDCY",
    "lat": 19.267,
    "lng": -69.742
  },
  {
    "name": "Salt Cay Airport",
    "city": "Salt Cay",
    "country": "Turks and Caicos Islands",
    "code1": "SLX",
    "code2": "MBSY",
    "lat": 21.333,
    "lng": -71.2
  },
  {
    "name": "Middle Caicos Airport",
    "city": "Middle Caicos",
    "country": "Turks and Caicos Islands",
    "code1": "MDS",
    "code2": "MBMC",
    "lat": 21.833,
    "lng": -71.817
  },
  {
    "name": "JAGS McCartney International Airport",
    "city": "Cockburn Town",
    "country": "Turks and Caicos Islands",
    "code1": "GDT",
    "code2": "MBGT",
    "lat": 21.4445,
    "lng": -71.1423
  },
  {
    "name": "Žilina Airport",
    "city": "Žilina",
    "country": "Slovakia",
    "code1": "ILZ",
    "code2": "LZZI",
    "lat": 49.231528,
    "lng": 18.6135
  },
  {
    "name": "Ubari Airport",
    "city": "Ubari",
    "country": "Libya",
    "code1": "QUB",
    "code2": "",
    "lat": 26.5675,
    "lng": 12.8231
  },
  {
    "name": "Misratah Airport",
    "city": "Misratah",
    "country": "Libya",
    "code1": "MRA",
    "code2": "",
    "lat": 32.325,
    "lng": 15.061
  },
  {
    "name": "Samsun-Çarşamba Airport",
    "city": "Samsun",
    "country": "Turkey",
    "code1": "SZF",
    "code2": "LTFH",
    "lat": 41.2545,
    "lng": 36.5671
  },
  {
    "name": "Balikesir Korfez Airport",
    "city": "Balikesir Korfez",
    "country": "Turkey",
    "code1": "EDO",
    "code2": "LTFD",
    "lat": 39.5546,
    "lng": 27.0138
  },
  {
    "name": "Isparta Süleyman Demirel Airport",
    "city": "Isparta",
    "country": "Turkey",
    "code1": "ISE",
    "code2": "LTFC",
    "lat": 37.8554,
    "lng": 30.3684
  },
  {
    "name": "Adiyaman Airport",
    "city": "Adiyaman",
    "country": "Turkey",
    "code1": "ADF",
    "code2": "LTCP",
    "lat": 37.7314,
    "lng": 38.4689
  },
  {
    "name": "Agri Airport",
    "city": "Agri",
    "country": "Turkey",
    "code1": "AJI",
    "code2": "LTCO",
    "lat": 39.6546,
    "lng": 43.0271
  },
  {
    "name": "Kahramanmaras Airport",
    "city": "Kahramanmaras",
    "country": "Turkey",
    "code1": "KCM",
    "code2": "LTCN",
    "lat": 37.539,
    "lng": 36.9534
  },
  {
    "name": "Sanliurfa Airport",
    "city": "Sanliurfa",
    "country": "Turkey",
    "code1": "SFQ",
    "code2": "LTCH",
    "lat": 37.094261,
    "lng": 38.847103
  },
  {
    "name": "Kars Airport",
    "city": "Kars",
    "country": "Turkey",
    "code1": "KSY",
    "code2": "LTCF",
    "lat": 40.562222,
    "lng": 43.115002
  },
  {
    "name": "Usak Airport",
    "city": "Usak",
    "country": "Turkey",
    "code1": "USQ",
    "code2": "LTBO",
    "lat": 38.681478,
    "lng": 29.471675
  },
  {
    "name": "Banja Luka International Airport",
    "city": "Banja Luka",
    "country": "Bosnia and Herzegovina",
    "code1": "BNX",
    "code2": "LQBK",
    "lat": 44.941444,
    "lng": 17.297501
  },
  {
    "name": "Corvo Airport",
    "city": "Corvo",
    "country": "Portugal",
    "code1": "CVU",
    "code2": "LPCR",
    "lat": 39.6715,
    "lng": -31.1136
  },
  {
    "name": "Salerno Pontecagnano Airport",
    "city": "Salerno",
    "country": "Italy",
    "code1": "QSR",
    "code2": "LIRI",
    "lat": 40.6204,
    "lng": 14.911294
  },
  {
    "name": "Aosta Airport",
    "city": "Aosta",
    "country": "Italy",
    "code1": "AOT",
    "code2": "LIMW",
    "lat": 45.738456,
    "lng": 7.368719
  },
  {
    "name": "Sármellék International Airport",
    "city": "Sármellék",
    "country": "Hungary",
    "code1": "SOB",
    "code2": "LHSM",
    "lat": 46.686389,
    "lng": 17.159056
  },
  {
    "name": "Győr-Pér International Airport",
    "city": "Győr",
    "country": "Hungary",
    "code1": "QGY",
    "code2": "LHPR",
    "lat": 47.627097,
    "lng": 17.808347
  },
  {
    "name": "Pécs-Pogány Airport",
    "city": "Pécs-Pogány",
    "country": "Hungary",
    "code1": "PEV",
    "code2": "LHPP",
    "lat": 45.990928,
    "lng": 18.240983
  },
  {
    "name": "Syros Airport",
    "city": "Syros Island",
    "country": "Greece",
    "code1": "JSY",
    "code2": "LGSO",
    "lat": 37.422792,
    "lng": 24.950936
  },
  {
    "name": "La Môle Airport",
    "city": "La Môle",
    "country": "France",
    "code1": "LTT",
    "code2": "LFTZ",
    "lat": 43.2054,
    "lng": 6.482
  },
  {
    "name": "EuroAirport",
    "city": "Mulhouse",
    "country": "France",
    "code1": "EAP",
    "code2": "\\N",
    "lat": 47.589583,
    "lng": 7.529914
  },
  {
    "name": "Tekapo",
    "city": "Lake Tekapo",
    "country": "New Zealand",
    "code1": "",
    "code2": "NZTL",
    "lat": -44,
    "lng": 170.28
  },
  {
    "name": "Angers-Loire Airport",
    "city": "Angers/Marcé",
    "country": "France",
    "code1": "ANE",
    "code2": "LFJR",
    "lat": 47.5603,
    "lng": -0.312222
  },
  {
    "name": "Île d'Yeu Airport",
    "city": "Île d'Yeu",
    "country": "France",
    "code1": "IDY",
    "code2": "LFEY",
    "lat": 46.718611,
    "lng": -2.391111
  },
  {
    "name": "Logroño-Agoncillo Airport",
    "city": "Logroño-Agoncillo",
    "country": "Spain",
    "code1": "RJL",
    "code2": "LELO",
    "lat": 42.4542,
    "lng": -2.32083
  },
  {
    "name": "Ercan International Airport",
    "city": "Nicosia",
    "country": "Cyprus",
    "code1": "ECN",
    "code2": "LCEN",
    "lat": 35.1547,
    "lng": 33.4961
  },
  {
    "name": "Yakima Air Terminal McAllister Field",
    "city": "Yakima",
    "country": "United States",
    "code1": "YKM",
    "code2": "KYKM",
    "lat": 46.5682,
    "lng": -120.544
  },
  {
    "name": "Kiwayu (Mkononi) Airport",
    "city": "Kiwayu",
    "country": "Kenya",
    "code1": "KWY",
    "code2": "",
    "lat": -1.96056,
    "lng": 41.2975
  },
  {
    "name": "Worland Municipal Airport",
    "city": "Worland",
    "country": "United States",
    "code1": "WRL",
    "code2": "KWRL",
    "lat": 43.9657,
    "lng": -107.951
  },
  {
    "name": "Valdosta Regional Airport",
    "city": "Valdosta",
    "country": "United States",
    "code1": "VLD",
    "code2": "KVLD",
    "lat": 30.7825,
    "lng": -83.2767
  },
  {
    "name": "Victoria Regional Airport",
    "city": "Victoria",
    "country": "United States",
    "code1": "VCT",
    "code2": "KVCT",
    "lat": 28.8526,
    "lng": -96.9185
  },
  {
    "name": "Quincy Regional Baldwin Field",
    "city": "Quincy",
    "country": "United States",
    "code1": "UIN",
    "code2": "KUIN",
    "lat": 39.9427,
    "lng": -91.1946
  },
  {
    "name": "Tupelo Regional Airport",
    "city": "Tupelo",
    "country": "United States",
    "code1": "TUP",
    "code2": "KTUP",
    "lat": 34.2681,
    "lng": -88.7699
  },
  {
    "name": "Santa Maria Pub Cpt G Allan Hancock Airport",
    "city": "Santa Maria",
    "country": "United States",
    "code1": "SMX",
    "code2": "KSMX",
    "lat": 34.8989,
    "lng": -120.457
  },
  {
    "name": "Salina Municipal Airport",
    "city": "Salina",
    "country": "United States",
    "code1": "SLN",
    "code2": "KSLN",
    "lat": 38.791,
    "lng": -97.6522
  },
  {
    "name": "Adirondack Regional Airport",
    "city": "Saranac Lake",
    "country": "United States",
    "code1": "SLK",
    "code2": "KSLK",
    "lat": 44.3853,
    "lng": -74.2062
  },
  {
    "name": "Sheridan County Airport",
    "city": "Sheridan",
    "country": "United States",
    "code1": "SHR",
    "code2": "KSHR",
    "lat": 44.7692,
    "lng": -106.98
  },
  {
    "name": "San Luis County Regional Airport",
    "city": "San Luis Obispo",
    "country": "United States",
    "code1": "SBP",
    "code2": "KSBP",
    "lat": 35.2368,
    "lng": -120.642
  },
  {
    "name": "Rutland State Airport",
    "city": "Rutland",
    "country": "United States",
    "code1": "RUT",
    "code2": "KRUT",
    "lat": 43.5294,
    "lng": -72.9496
  },
  {
    "name": "Rock Springs Sweetwater County Airport",
    "city": "Rock Springs",
    "country": "United States",
    "code1": "RKS",
    "code2": "KRKS",
    "lat": 41.5942,
    "lng": -109.065
  },
  {
    "name": "Rhinelander Oneida County Airport",
    "city": "Rhinelander",
    "country": "United States",
    "code1": "RHI",
    "code2": "KRHI",
    "lat": 45.6312,
    "lng": -89.4675
  },
  {
    "name": "Reading Regional Carl A Spaatz Field",
    "city": "Reading",
    "country": "United States",
    "code1": "RDG",
    "code2": "KRDG",
    "lat": 40.3785,
    "lng": -75.9652
  },
  {
    "name": "Pease International Tradeport",
    "city": "Portsmouth",
    "country": "United States",
    "code1": "PSM",
    "code2": "KPSM",
    "lat": 43.0779,
    "lng": -70.8233
  },
  {
    "name": "Pellston Regional Airport of Emmet County Airport",
    "city": "Pellston",
    "country": "United States",
    "code1": "PLN",
    "code2": "KPLN",
    "lat": 45.5709,
    "lng": -84.7967
  },
  {
    "name": "Pierre Regional Airport",
    "city": "Pierre",
    "country": "United States",
    "code1": "PIR",
    "code2": "KPIR",
    "lat": 44.3827,
    "lng": -100.286
  },
  {
    "name": "Pocatello Regional Airport",
    "city": "Pocatello",
    "country": "United States",
    "code1": "PIH",
    "code2": "KPIH",
    "lat": 42.9098,
    "lng": -112.596
  },
  {
    "name": "Hattiesburg Laurel Regional Airport",
    "city": "Hattiesburg/Laurel",
    "country": "United States",
    "code1": "PIB",
    "code2": "KPIB",
    "lat": 31.4671,
    "lng": -89.3371
  },
  {
    "name": "Owensboro Daviess County Airport",
    "city": "Owensboro",
    "country": "United States",
    "code1": "OWB",
    "code2": "KOWB",
    "lat": 37.7401,
    "lng": -87.1668
  },
  {
    "name": "Southwest Oregon Regional Airport",
    "city": "North Bend",
    "country": "United States",
    "code1": "OTH",
    "code2": "KOTH",
    "lat": 43.4171,
    "lng": -124.246
  },
  {
    "name": "Northwest Alabama Regional Airport",
    "city": "Muscle Shoals",
    "country": "United States",
    "code1": "MSL",
    "code2": "KMSL",
    "lat": 34.7453,
    "lng": -87.6102
  },
  {
    "name": "Frank Wiley Field",
    "city": "Miles City",
    "country": "United States",
    "code1": "MLS",
    "code2": "KMLS",
    "lat": 46.428,
    "lng": -105.886
  },
  {
    "name": "Muskegon County Airport",
    "city": "Muskegon",
    "country": "United States",
    "code1": "MKG",
    "code2": "KMKG",
    "lat": 43.1695,
    "lng": -86.2382
  },
  {
    "name": "Lynchburg Regional Preston Glenn Field",
    "city": "Lynchburg",
    "country": "United States",
    "code1": "LYH",
    "code2": "KLYH",
    "lat": 37.3267,
    "lng": -79.2004
  },
  {
    "name": "Lewistown Municipal Airport",
    "city": "Lewistown",
    "country": "United States",
    "code1": "LWT",
    "code2": "KLWT",
    "lat": 47.0493,
    "lng": -109.467
  },
  {
    "name": "Lancaster Airport",
    "city": "Lancaster",
    "country": "United States",
    "code1": "LNS",
    "code2": "KLNS",
    "lat": 40.1217,
    "lng": -76.2961
  },
  {
    "name": "Klamath Falls Airport",
    "city": "Klamath Falls",
    "country": "United States",
    "code1": "LMT",
    "code2": "KLMT",
    "lat": 42.1561,
    "lng": -121.733
  },
  {
    "name": "Lebanon Municipal Airport",
    "city": "Lebanon",
    "country": "United States",
    "code1": "LEB",
    "code2": "KLEB",
    "lat": 43.6261,
    "lng": -72.3042
  },
  {
    "name": "North Platte Regional Airport Lee Bird Field",
    "city": "North Platte",
    "country": "United States",
    "code1": "LBF",
    "code2": "KLBF",
    "lat": 41.1262,
    "lng": -100.684
  },
  {
    "name": "Arnold Palmer Regional Airport",
    "city": "Latrobe",
    "country": "United States",
    "code1": "LBE",
    "code2": "KLBE",
    "lat": 40.2759,
    "lng": -79.4048
  },
  {
    "name": "Laramie Regional Airport",
    "city": "Laramie",
    "country": "United States",
    "code1": "LAR",
    "code2": "KLAR",
    "lat": 41.3121,
    "lng": -105.675
  },
  {
    "name": "Jamestown Regional Airport",
    "city": "Jamestown",
    "country": "United States",
    "code1": "JMS",
    "code2": "KJMS",
    "lat": 46.9297,
    "lng": -98.6782
  },
  {
    "name": "Kirksville Regional Airport",
    "city": "Kirksville",
    "country": "United States",
    "code1": "IRK",
    "code2": "KIRK",
    "lat": 40.0935,
    "lng": -92.5449
  },
  {
    "name": "Kili Airport",
    "city": "Kili Island",
    "country": "Marshall Islands",
    "code1": "KIO",
    "code2": "Q51",
    "lat": 5.64452,
    "lng": 169.12
  },
  {
    "name": "Tri State Milton J Ferguson Field",
    "city": "Huntington",
    "country": "United States",
    "code1": "HTS",
    "code2": "KHTS",
    "lat": 38.3667,
    "lng": -82.558
  },
  {
    "name": "Memorial Field",
    "city": "Hot Springs",
    "country": "United States",
    "code1": "HOT",
    "code2": "KHOT",
    "lat": 34.478,
    "lng": -93.0962
  },
  {
    "name": "Central Nebraska Regional Airport",
    "city": "Grand Island",
    "country": "United States",
    "code1": "GRI",
    "code2": "KGRI",
    "lat": 40.9675,
    "lng": -98.3096
  },
  {
    "name": "Wokal Field Glasgow International Airport",
    "city": "Glasgow",
    "country": "United States",
    "code1": "GGW",
    "code2": "KGGW",
    "lat": 48.2125,
    "lng": -106.615
  },
  {
    "name": "Fayetteville Regional Grannis Field",
    "city": "Fayetteville",
    "country": "United States",
    "code1": "FAY",
    "code2": "KFAY",
    "lat": 34.9912,
    "lng": -78.8803
  },
  {
    "name": "New Bedford Regional Airport",
    "city": "New Bedford",
    "country": "United States",
    "code1": "EWB",
    "code2": "KEWB",
    "lat": 41.6761,
    "lng": -70.9569
  },
  {
    "name": "Elko Regional Airport",
    "city": "Elko",
    "country": "United States",
    "code1": "EKO",
    "code2": "KEKO",
    "lat": 40.8249,
    "lng": -115.792
  },
  {
    "name": "Chippewa Valley Regional Airport",
    "city": "Eau Claire",
    "country": "United States",
    "code1": "EAU",
    "code2": "KEAU",
    "lat": 44.8658,
    "lng": -91.4843
  },
  {
    "name": "DuBois Regional Airport",
    "city": "Du Bois",
    "country": "United States",
    "code1": "DUJ",
    "code2": "KDUJ",
    "lat": 41.1783,
    "lng": -78.8987
  },
  {
    "name": "Dodge City Regional Airport",
    "city": "Dodge City",
    "country": "United States",
    "code1": "DDC",
    "code2": "KDDC",
    "lat": 37.7634,
    "lng": -99.9656
  },
  {
    "name": "Houghton County Memorial Airport",
    "city": "Hancock",
    "country": "United States",
    "code1": "CMX",
    "code2": "KCMX",
    "lat": 47.1684,
    "lng": -88.4891
  },
  {
    "name": "William R Fairchild International Airport",
    "city": "Port Angeles",
    "country": "United States",
    "code1": "CLM",
    "code2": "KCLM",
    "lat": 48.1202,
    "lng": -123.5
  },
  {
    "name": "Harrison Marion Regional Airport",
    "city": "Clarksburg",
    "country": "United States",
    "code1": "CKB",
    "code2": "KCKB",
    "lat": 39.2966,
    "lng": -80.2281
  },
  {
    "name": "Chippewa County International Airport",
    "city": "Sault Ste Marie",
    "country": "United States",
    "code1": "CIU",
    "code2": "KCIU",
    "lat": 46.2508,
    "lng": -84.4724
  },
  {
    "name": "Cape Girardeau Regional Airport",
    "city": "Cape Girardeau",
    "country": "United States",
    "code1": "CGI",
    "code2": "KCGI",
    "lat": 37.2253,
    "lng": -89.5708
  },
  {
    "name": "Del Norte County Airport",
    "city": "Crescent City",
    "country": "United States",
    "code1": "CEC",
    "code2": "KCEC",
    "lat": 41.7802,
    "lng": -124.237
  },
  {
    "name": "Southeast Iowa Regional Airport",
    "city": "Burlington",
    "country": "United States",
    "code1": "BRL",
    "code2": "KBRL",
    "lat": 40.7832,
    "lng": -91.1255
  },
  {
    "name": "Brunswick Golden Isles Airport",
    "city": "Brunswick",
    "country": "United States",
    "code1": "BQK",
    "code2": "KBQK",
    "lat": 31.2588,
    "lng": -81.4665
  },
  {
    "name": "Raleigh County Memorial Airport",
    "city": "Beckley",
    "country": "United States",
    "code1": "BKW",
    "code2": "KBKW",
    "lat": 37.7873,
    "lng": -81.1242
  },
  {
    "name": "Western Nebraska Regional Airport",
    "city": "Scottsbluff",
    "country": "United States",
    "code1": "BFF",
    "code2": "KBFF",
    "lat": 41.874,
    "lng": -103.596
  },
  {
    "name": "Bradford Regional Airport",
    "city": "Bradford",
    "country": "United States",
    "code1": "BFD",
    "code2": "KBFD",
    "lat": 41.8031,
    "lng": -78.6401
  },
  {
    "name": "Watertown Regional Airport",
    "city": "Watertown",
    "country": "United States",
    "code1": "ATY",
    "code2": "KATY",
    "lat": 44.914,
    "lng": -97.1547
  },
  {
    "name": "Alpena County Regional Airport",
    "city": "Alpena",
    "country": "United States",
    "code1": "APN",
    "code2": "KAPN",
    "lat": 45.0781,
    "lng": -83.5603
  },
  {
    "name": "Walla Walla Regional Airport",
    "city": "Walla Walla",
    "country": "United States",
    "code1": "ALW",
    "code2": "KALW",
    "lat": 46.0949,
    "lng": -118.288
  },
  {
    "name": "Waterloo Regional Airport",
    "city": "Waterloo",
    "country": "United States",
    "code1": "ALO",
    "code2": "KALO",
    "lat": 42.5571,
    "lng": -92.4003
  },
  {
    "name": "Alamogordo White Sands Regional Airport",
    "city": "Alamogordo",
    "country": "United States",
    "code1": "ALM",
    "code2": "KALM",
    "lat": 32.8399,
    "lng": -105.991
  },
  {
    "name": "Athens Ben Epps Airport",
    "city": "Athens",
    "country": "United States",
    "code1": "AHN",
    "code2": "KAHN",
    "lat": 33.9486,
    "lng": -83.3263
  },
  {
    "name": "Southwest Georgia Regional Airport",
    "city": "Albany",
    "country": "United States",
    "code1": "ABY",
    "code2": "KABY",
    "lat": 31.5355,
    "lng": -84.1945
  },
  {
    "name": "Aberdeen Regional Airport",
    "city": "Aberdeen",
    "country": "United States",
    "code1": "ABR",
    "code2": "KABR",
    "lat": 45.4491,
    "lng": -98.4218
  },
  {
    "name": "San Domino Island Heliport",
    "city": "Tremiti Islands",
    "country": "Italy",
    "code1": "TQR",
    "code2": "",
    "lat": 42.1025,
    "lng": 15.488
  },
  {
    "name": "Gheshm Airport",
    "city": "Gheshm",
    "country": "Iran",
    "code1": "GSM",
    "code2": "",
    "lat": 26.9487,
    "lng": 56.2688
  },
  {
    "name": "Diu Airport",
    "city": "Diu",
    "country": "India",
    "code1": "DIU",
    "code2": "VA1P",
    "lat": 20.7131,
    "lng": 70.9211
  },
  {
    "name": "Gulu Airport",
    "city": "Gulu",
    "country": "Uganda",
    "code1": "ULU",
    "code2": "HUGU",
    "lat": 2.805556,
    "lng": 32.271792
  },
  {
    "name": "Arua Airport",
    "city": "Arua",
    "country": "Uganda",
    "code1": "RUA",
    "code2": "HUAR",
    "lat": 3.05,
    "lng": 30.917
  },
  {
    "name": "Tabora Airport",
    "city": "Tabora",
    "country": "Tanzania",
    "code1": "TBO",
    "code2": "HTTB",
    "lat": -5.07639,
    "lng": 32.8333
  },
  {
    "name": "Shinyanga Airport",
    "city": "Shinyanga",
    "country": "Tanzania",
    "code1": "SHY",
    "code2": "HTSY",
    "lat": -3.667,
    "lng": 33.417
  },
  {
    "name": "Musoma Airport",
    "city": "Musoma",
    "country": "Tanzania",
    "code1": "MUZ",
    "code2": "HTMU",
    "lat": -1.483,
    "lng": 33.8
  },
  {
    "name": "Kikwetu Airport",
    "city": "Lindi",
    "country": "Tanzania",
    "code1": "LDI",
    "code2": "HTLI",
    "lat": -9.85111,
    "lng": 39.7578
  },
  {
    "name": "Kigoma Airport",
    "city": "Kigoma",
    "country": "Tanzania",
    "code1": "TKQ",
    "code2": "HTKA",
    "lat": -4.883,
    "lng": 29.633
  },
  {
    "name": "Bukoba Airport",
    "city": "Bukoba",
    "country": "Tanzania",
    "code1": "BKZ",
    "code2": "HTBU",
    "lat": -1.3,
    "lng": 31.8
  },
  {
    "name": "Port Sudan New International Airport",
    "city": "Port Sudan",
    "country": "Sudan",
    "code1": "PZU",
    "code2": "HSPN",
    "lat": 19.4336,
    "lng": 37.2341
  },
  {
    "name": "Nyala Airport",
    "city": "Nyala",
    "country": "Sudan",
    "code1": "UYL",
    "code2": "HSNN",
    "lat": 12.0535,
    "lng": 24.9562
  },
  {
    "name": "Atbara Airport",
    "city": "Atbara",
    "country": "Sudan",
    "code1": "ATB",
    "code2": "HSAT",
    "lat": 17.7,
    "lng": 33.967
  },
  {
    "name": "La Abraq Airport",
    "city": "Al Bayda'",
    "country": "Libya",
    "code1": "LAQ",
    "code2": "HLLQ",
    "lat": 32.788673,
    "lng": 21.964333
  },
  {
    "name": "Mitiga Airport",
    "city": "Tripoli",
    "country": "Libya",
    "code1": "MJI",
    "code2": "HLLM",
    "lat": 32.8941,
    "lng": 13.276
  },
  {
    "name": "Gamal Abdel Nasser Airport",
    "city": "Tobruk",
    "country": "Libya",
    "code1": "TOB",
    "code2": "HLGN",
    "lat": 31.861,
    "lng": 23.907
  },
  {
    "name": "Gardabya Airport",
    "city": "Sirt",
    "country": "Libya",
    "code1": "SRX",
    "code2": "HLGD",
    "lat": 31.0635,
    "lng": 16.595
  },
  {
    "name": "Nanyuki Civil Airport",
    "city": "Nanyuki",
    "country": "Kenya",
    "code1": "NYK",
    "code2": "HKNY",
    "lat": -0.067,
    "lng": 37.033
  },
  {
    "name": "Malindi Airport",
    "city": "Malindi",
    "country": "Kenya",
    "code1": "MYD",
    "code2": "HKML",
    "lat": -3.22931,
    "lng": 40.1017
  },
  {
    "name": "Lokichoggio Airport",
    "city": "Lokichoggio",
    "country": "Kenya",
    "code1": "LKG",
    "code2": "HKLK",
    "lat": 4.204117,
    "lng": 34.348186
  },
  {
    "name": "Amboseli Airport",
    "city": "Amboseli National Park",
    "country": "Kenya",
    "code1": "ASV",
    "code2": "HKAM",
    "lat": -2.64505,
    "lng": 37.2531
  },
  {
    "name": "Asyut International Airport",
    "city": "Asyut",
    "country": "Egypt",
    "code1": "ATZ",
    "code2": "HEAT",
    "lat": 27.046508,
    "lng": 31.011983
  },
  {
    "name": "El Arish International Airport",
    "city": "El Arish",
    "country": "Egypt",
    "code1": "AAC",
    "code2": "HEAR",
    "lat": 31.073333,
    "lng": 33.835833
  },
  {
    "name": "Burao Airport",
    "city": "Burao",
    "country": "Somalia",
    "code1": "BUO",
    "code2": "HCMV",
    "lat": 9.517,
    "lng": 45.567
  },
  {
    "name": "Galcaio Airport",
    "city": "Galcaio",
    "country": "Somalia",
    "code1": "GLK",
    "code2": "HCMR",
    "lat": 6.78083,
    "lng": 47.4547
  },
  {
    "name": "Aden Adde International Airport",
    "city": "Mogadishu",
    "country": "Somalia",
    "code1": "MGQ",
    "code2": "HCMM",
    "lat": 2.01444,
    "lng": 45.3047
  },
  {
    "name": "Bosaso Airport",
    "city": "Bosaso",
    "country": "Somalia",
    "code1": "BSA",
    "code2": "HCMF",
    "lat": 11.2753,
    "lng": 49.1494
  },
  {
    "name": "Alula Airport",
    "city": "Alula",
    "country": "Somalia",
    "code1": "ALU",
    "code2": "HCMA",
    "lat": 11.95,
    "lng": 50.733
  },
  {
    "name": "Tippi Airport",
    "city": "Tippi",
    "country": "Ethiopia",
    "code1": "TIE",
    "code2": "HATP",
    "lat": 7.117,
    "lng": 35.383
  },
  {
    "name": "Mizan Teferi Airport",
    "city": "Mizan Teferi",
    "country": "Ethiopia",
    "code1": "MTF",
    "code2": "HAMT",
    "lat": 6.967,
    "lng": 35.533
  },
  {
    "name": "Kabri Dehar Airport",
    "city": "Kabri Dehar",
    "country": "Ethiopia",
    "code1": "ABK",
    "code2": "HAKD",
    "lat": 6.734,
    "lng": 44.253
  },
  {
    "name": "Gore Airport",
    "city": "Gore",
    "country": "Ethiopia",
    "code1": "GOR",
    "code2": "HAGR",
    "lat": 8.167,
    "lng": 35.55
  },
  {
    "name": "Gode Airport",
    "city": "Gode",
    "country": "Ethiopia",
    "code1": "GDE",
    "code2": "HAGO",
    "lat": 5.935128,
    "lng": 43.578567
  },
  {
    "name": "Dembidollo Airport",
    "city": "Dembidollo",
    "country": "Ethiopia",
    "code1": "DEM",
    "code2": "HADD",
    "lat": 8.554,
    "lng": 34.858
  },
  {
    "name": "Combolcha Airport",
    "city": "Dessie",
    "country": "Ethiopia",
    "code1": "DSE",
    "code2": "HADC",
    "lat": 11.0825,
    "lng": 39.7114
  },
  {
    "name": "Beica Airport",
    "city": "Beica",
    "country": "Ethiopia",
    "code1": "BEI",
    "code2": "HABE",
    "lat": 9.38639,
    "lng": 34.5219
  },
  {
    "name": "Baco Airport",
    "city": "Baco",
    "country": "Ethiopia",
    "code1": "BCO",
    "code2": "HABC",
    "lat": 5.78287,
    "lng": 36.562
  },
  {
    "name": "Sao Filipe Airport",
    "city": "Sao Filipe, Fogo Island",
    "country": "Cape Verde",
    "code1": "SFL",
    "code2": "GVSF",
    "lat": 14.885,
    "lng": -24.48
  },
  {
    "name": "Praia International Airport",
    "city": "Praia, Santiago Island",
    "country": "Cape Verde",
    "code1": "RAI",
    "code2": "GVNP",
    "lat": 14.9245,
    "lng": -23.4935
  },
  {
    "name": "El Aroui Airport",
    "city": "El Aroui",
    "country": "Morocco",
    "code1": "NDR",
    "code2": "GMMW",
    "lat": 34.9888,
    "lng": -3.02821
  },
  {
    "name": "Hassan I Airport",
    "city": "El Aaiún",
    "country": "Western Sahara",
    "code1": "EUN",
    "code2": "GMML",
    "lat": 27.1517,
    "lng": -13.2192
  },
  {
    "name": "Mogador Airport",
    "city": "Essadouira",
    "country": "Morocco",
    "code1": "ESU",
    "code2": "GMMI",
    "lat": 31.3975,
    "lng": -9.681667
  },
  {
    "name": "Dakhla Airport",
    "city": "Dakhla",
    "country": "Western Sahara",
    "code1": "VIL",
    "code2": "GMMH",
    "lat": 23.7183,
    "lng": -15.932
  },
  {
    "name": "Smara Airport",
    "city": "Smara",
    "country": "Western Sahara",
    "code1": "SMW",
    "code2": "GMMA",
    "lat": 26.7318,
    "lng": -11.6847
  },
  {
    "name": "Iginniarfik Heliport",
    "city": "Iginniarfik",
    "country": "Greenland",
    "code1": "QFI",
    "code2": "",
    "lat": 68.7,
    "lng": -52.9667
  },
  {
    "name": "Akunnaaq Heliport",
    "city": "Akunnaaq",
    "country": "Greenland",
    "code1": "QCU",
    "code2": "",
    "lat": 68.75,
    "lng": -52.3333
  },
  {
    "name": "Groennedal Heliport",
    "city": "Groennedal",
    "country": "Greenland",
    "code1": "JGR",
    "code2": "",
    "lat": 61.2333,
    "lng": -48.1
  },
  {
    "name": "Osvaldo Vieira International Airport",
    "city": "Bissau",
    "country": "Guinea-Bissau",
    "code1": "OXB",
    "code2": "GGOV",
    "lat": 11.89485,
    "lng": -15.653681
  },
  {
    "name": "Kenema Airport",
    "city": "Kenema",
    "country": "Sierra Leone",
    "code1": "KEN",
    "code2": "GFKE",
    "lat": 7.89129,
    "lng": -11.1766
  },
  {
    "name": "Bo Airport",
    "city": "Bo",
    "country": "Sierra Leone",
    "code1": "KBS",
    "code2": "GFBO",
    "lat": 7.9444,
    "lng": -11.761
  },
  {
    "name": "Sherbro International Airport",
    "city": "Bonthe",
    "country": "Sierra Leone",
    "code1": "BTE",
    "code2": "GFBN",
    "lat": 7.53242,
    "lng": -12.5189
  },
  {
    "name": "Ceuta Heliport",
    "city": "Ceuta",
    "country": "Spain",
    "code1": "JCU",
    "code2": "GECT",
    "lat": 35.8969,
    "lng": -5.29908
  },
  {
    "name": "Lauriston Airport",
    "city": "Carriacou Island",
    "country": "Grenada",
    "code1": "CRU",
    "code2": "",
    "lat": 12.4761,
    "lng": -61.4728
  },
  {
    "name": "La Gomera Airport",
    "city": "La Gomera",
    "country": "Spain",
    "code1": "GMZ",
    "code2": "GCGM",
    "lat": 28.0296,
    "lng": -17.2146
  },
  {
    "name": "Papa Stour Airport",
    "city": "Papa Stour",
    "country": "United Kingdom",
    "code1": "PSV",
    "code2": "",
    "lat": 60.3217,
    "lng": -1.69306
  },
  {
    "name": "Outer Skerries Airport",
    "city": "Outer Skerries",
    "country": "United Kingdom",
    "code1": "OUK",
    "code2": "",
    "lat": 60.417,
    "lng": -0.75
  },
  {
    "name": "Foula Airport",
    "city": "Foula",
    "country": "United Kingdom",
    "code1": "FOA",
    "code2": "",
    "lat": 60.121,
    "lng": -2.052
  },
  {
    "name": "Gamba",
    "city": "Gamba",
    "country": "Gabon",
    "code1": "GAX",
    "code2": "",
    "lat": -2.71016,
    "lng": 9.96062
  },
  {
    "name": "Ilebo Airport",
    "city": "Ilebo",
    "country": "Congo (Kinshasa)",
    "code1": "PFR",
    "code2": "FZVS",
    "lat": -4.333,
    "lng": 20.583
  },
  {
    "name": "Lodja Airport",
    "city": "Lodja",
    "country": "Congo (Kinshasa)",
    "code1": "LJA",
    "code2": "FZVA",
    "lat": -3.417,
    "lng": 23.45
  },
  {
    "name": "Tshikapa Airport",
    "city": "Tshikapa",
    "country": "Congo (Kinshasa)",
    "code1": "TSH",
    "code2": "FZUK",
    "lat": -6.43833,
    "lng": 20.7947
  },
  {
    "name": "Basankusu Airport",
    "city": "Basankusu",
    "country": "Congo (Kinshasa)",
    "code1": "BSU",
    "code2": "FZEN",
    "lat": 1.22472,
    "lng": 19.7889
  },
  {
    "name": "Basango Mboliasa Airport",
    "city": "Kiri",
    "country": "Congo (Kinshasa)",
    "code1": "KRZ",
    "code2": "FZBT",
    "lat": -1.435,
    "lng": 19.024
  },
  {
    "name": "Nioki Airport",
    "city": "Nioki",
    "country": "Congo (Kinshasa)",
    "code1": "NIO",
    "code2": "FZBI",
    "lat": -2.7175,
    "lng": 17.6847
  },
  {
    "name": "Inongo Airport",
    "city": "Inongo",
    "country": "Congo (Kinshasa)",
    "code1": "INO",
    "code2": "FZBA",
    "lat": -1.94722,
    "lng": 18.2858
  },
  {
    "name": "Tshimpi Airport",
    "city": "Matadi",
    "country": "Congo (Kinshasa)",
    "code1": "MAT",
    "code2": "FZAM",
    "lat": -5.79961,
    "lng": 13.4404
  },
  {
    "name": "Boma Airport",
    "city": "Boma",
    "country": "Congo (Kinshasa)",
    "code1": "BOA",
    "code2": "FZAJ",
    "lat": -5.854,
    "lng": 13.064
  },
  {
    "name": "Eros Airport",
    "city": "Windhoek",
    "country": "Namibia",
    "code1": "ERS",
    "code2": "FYWE",
    "lat": -22.6122,
    "lng": 17.0804
  },
  {
    "name": "Swakopmund Airport",
    "city": "Swakopmund",
    "country": "Namibia",
    "code1": "SWP",
    "code2": "FYSM",
    "lat": -22.6619,
    "lng": 14.5681
  },
  {
    "name": "Oranjemund Airport",
    "city": "Oranjemund",
    "country": "Namibia",
    "code1": "OMD",
    "code2": "FYOG",
    "lat": -28.5847,
    "lng": 16.4467
  },
  {
    "name": "Ondangwa Airport",
    "city": "Ondangwa",
    "country": "Namibia",
    "code1": "OND",
    "code2": "FYOA",
    "lat": -17.8782,
    "lng": 15.9526
  },
  {
    "name": "Luderitz Airport",
    "city": "Luderitz",
    "country": "Namibia",
    "code1": "LUD",
    "code2": "FYLZ",
    "lat": -26.6874,
    "lng": 15.2429
  },
  {
    "name": "Club Makokola Airport",
    "city": "Club Makokola",
    "country": "Malawi",
    "code1": "CMK",
    "code2": "FWCM",
    "lat": -14.3069,
    "lng": 35.1325
  },
  {
    "name": "Sarh Airport",
    "city": "Sarh",
    "country": "Chad",
    "code1": "SRH",
    "code2": "FTTA",
    "lat": 9.14444,
    "lng": 18.3744
  },
  {
    "name": "Croisette Heliport",
    "city": "Cannes",
    "country": "France",
    "code1": "JCA",
    "code2": "",
    "lat": 43.536,
    "lng": 7.03736
  },
  {
    "name": "Chimoio Airport",
    "city": "Chimoio",
    "country": "Mozambique",
    "code1": "VPY",
    "code2": "FQCH",
    "lat": -19.151267,
    "lng": 33.428958
  },
  {
    "name": "Tchibanga Airport",
    "city": "Tchibanga",
    "country": "Gabon",
    "code1": "TCH",
    "code2": "FOOT",
    "lat": -2.85,
    "lng": 11.017
  },
  {
    "name": "Mouilla Ville Airport",
    "city": "Mouila",
    "country": "Gabon",
    "code1": "MJL",
    "code2": "FOGM",
    "lat": -1.84514,
    "lng": 11.0567
  },
  {
    "name": "Koulamoutou Airport",
    "city": "Koulamoutou",
    "country": "Gabon",
    "code1": "KOU",
    "code2": "FOGK",
    "lat": -1.18461,
    "lng": 12.4413
  },
  {
    "name": "Namibe Airport",
    "city": "Mocamedes",
    "country": "Angola",
    "code1": "MSZ",
    "code2": "FNMO",
    "lat": -15.261222,
    "lng": 12.146756
  },
  {
    "name": "Ondjiva Pereira Airport",
    "city": "Ondjiva",
    "country": "Angola",
    "code1": "VPE",
    "code2": "FNGI",
    "lat": -17.043464,
    "lng": 15.683822
  },
  {
    "name": "Dundo Airport",
    "city": "Dundo",
    "country": "Angola",
    "code1": "DUE",
    "code2": "FNDU",
    "lat": -7.40089,
    "lng": 20.8185
  },
  {
    "name": "Catumbela Airport",
    "city": "Catumbela",
    "country": "Angola",
    "code1": "CBT",
    "code2": "FNCT",
    "lat": -12.4792,
    "lng": 13.4869
  },
  {
    "name": "Manja Airport",
    "city": "Manja",
    "country": "Madagascar",
    "code1": "MJA",
    "code2": "FMSJ",
    "lat": -21.417,
    "lng": 44.317
  },
  {
    "name": "Mandritsara Airport",
    "city": "Mandritsara",
    "country": "Madagascar",
    "code1": "WMA",
    "code2": "FMNX",
    "lat": -15.817,
    "lng": 48.833
  },
  {
    "name": "Tsaratanana Airport",
    "city": "Tsaratanana",
    "country": "Madagascar",
    "code1": "TTS",
    "code2": "FMNT",
    "lat": -16.75,
    "lng": 47.617
  },
  {
    "name": "Mampikony Airport",
    "city": "Mampikony",
    "country": "Madagascar",
    "code1": "WMP",
    "code2": "FMNP",
    "lat": -16.049,
    "lng": 47.622
  },
  {
    "name": "Soalala Airport",
    "city": "Soalala",
    "country": "Madagascar",
    "code1": "DWB",
    "code2": "FMNO",
    "lat": -16.083,
    "lng": 45.367
  },
  {
    "name": "Ambanja Airport",
    "city": "Ambanja",
    "country": "Madagascar",
    "code1": "IVA",
    "code2": "FMNJ",
    "lat": -13.65,
    "lng": 48.467
  },
  {
    "name": "Port Bergé Airport",
    "city": "Port Bergé",
    "country": "Madagascar",
    "code1": "WPB",
    "code2": "FMNG",
    "lat": -15.583,
    "lng": 47.617
  },
  {
    "name": "Ambatondrazaka Airport",
    "city": "Ambatondrazaka",
    "country": "Madagascar",
    "code1": "WAM",
    "code2": "FMMZ",
    "lat": -17.8,
    "lng": 48.433
  },
  {
    "name": "Tsiroanomandidy Airport",
    "city": "Tsiroanomandidy",
    "country": "Madagascar",
    "code1": "WTS",
    "code2": "FMMX",
    "lat": -18.75,
    "lng": 46.05
  },
  {
    "name": "Tambohorano Airport",
    "city": "Tambohorano",
    "country": "Madagascar",
    "code1": "WTA",
    "code2": "FMMU",
    "lat": -17.4761,
    "lng": 43.9728
  },
  {
    "name": "Morafenobe Airport",
    "city": "Morafenobe",
    "country": "Madagascar",
    "code1": "TVA",
    "code2": "FMMR",
    "lat": -17.85,
    "lng": 44.917
  },
  {
    "name": "Maintirano Airport",
    "city": "Maintirano",
    "country": "Madagascar",
    "code1": "MXT",
    "code2": "FMMO",
    "lat": -18.05,
    "lng": 44.033
  },
  {
    "name": "Belo sur Tsiribihina Airport",
    "city": "Belo sur Tsiribihina",
    "country": "Madagascar",
    "code1": "BMD",
    "code2": "FMML",
    "lat": -19.6867,
    "lng": 44.5419
  },
  {
    "name": "Ankavandra Airport",
    "city": "Ankavandra",
    "country": "Madagascar",
    "code1": "JVA",
    "code2": "FMMK",
    "lat": -18.8,
    "lng": 45.283
  },
  {
    "name": "Antsalova Airport",
    "city": "Antsalova",
    "country": "Madagascar",
    "code1": "WAQ",
    "code2": "FMMG",
    "lat": -18.7,
    "lng": 44.617
  },
  {
    "name": "Iconi Airport",
    "city": "Moroni",
    "country": "Comoros",
    "code1": "YVA",
    "code2": "FMCN",
    "lat": -11.7108,
    "lng": 43.2439
  },
  {
    "name": "Solwesi Airport",
    "city": "Solwesi",
    "country": "Zambia",
    "code1": "SLI",
    "code2": "FLSW",
    "lat": -12.1737,
    "lng": 26.3651
  },
  {
    "name": "Chipata Airport",
    "city": "Chipata",
    "country": "Zambia",
    "code1": "CIP",
    "code2": "FLCP",
    "lat": -13.5583,
    "lng": 32.5872
  },
  {
    "name": "Loubomo Airport",
    "city": "Loubomo",
    "country": "Congo (Brazzaville)",
    "code1": "DIS",
    "code2": "FCPL",
    "lat": -4.2,
    "lng": 12.7
  },
  {
    "name": "Limpopo Valley Airport",
    "city": "Tuli Lodge",
    "country": "Botswana",
    "code1": "TLD",
    "code2": "FBTL",
    "lat": -22.1892,
    "lng": 29.1269
  },
  {
    "name": "Shakawe Airport",
    "city": "Shakawe",
    "country": "Botswana",
    "code1": "SWX",
    "code2": "FBSW",
    "lat": -18.3739,
    "lng": 21.8326
  },
  {
    "name": "Orapa Airport",
    "city": "Orapa",
    "country": "Botswana",
    "code1": "ORP",
    "code2": "FBOR",
    "lat": -21.2667,
    "lng": 25.3167
  },
  {
    "name": "Ghanzi Airport",
    "city": "Ghanzi",
    "country": "Botswana",
    "code1": "GNZ",
    "code2": "FBGZ",
    "lat": -21.6925,
    "lng": 21.6581
  },
  {
    "name": "Mmabatho International Airport",
    "city": "Mafeking",
    "country": "South Africa",
    "code1": "MBD",
    "code2": "FAMM",
    "lat": -25.798444,
    "lng": 25.548028
  },
  {
    "name": "Malamala Airport",
    "city": "Malamala",
    "country": "South Africa",
    "code1": "AAM",
    "code2": "FAMD",
    "lat": -24.818111,
    "lng": 31.544584
  },
  {
    "name": "Kruger Mpumalanga International Airport",
    "city": "Mpumalanga",
    "country": "South Africa",
    "code1": "MQP",
    "code2": "FAKN",
    "lat": -25.3832,
    "lng": 31.1056
  },
  {
    "name": "Rand Airport",
    "city": "Johannesburg",
    "country": "South Africa",
    "code1": "QRA",
    "code2": "FAGM",
    "lat": -26.242506,
    "lng": 28.151169
  },
  {
    "name": "Ventspils International Airport",
    "city": "Ventspils",
    "country": "Latvia",
    "code1": "VTS",
    "code2": "EVVA",
    "lat": 57.357778,
    "lng": 21.544167
  },
  {
    "name": "Shire Inda Selassie Airport",
    "city": "Shire Indasilase",
    "country": "Ethiopia",
    "code1": "SHC",
    "code2": "",
    "lat": 14.0781,
    "lng": 38.2725
  },
  {
    "name": "Shilavo Airport",
    "city": "Shilavo",
    "country": "Ethiopia",
    "code1": "HIL",
    "code2": "",
    "lat": 6.08333,
    "lng": 44.7667
  },
  {
    "name": "Hemavan Airport",
    "city": "Hemavan",
    "country": "Sweden",
    "code1": "HMV",
    "code2": "ESUT",
    "lat": 65.806111,
    "lng": 15.082778
  },
  {
    "name": "Storuman Airport",
    "city": "Mohed",
    "country": "Sweden",
    "code1": "SQO",
    "code2": "ESUD",
    "lat": 64.960894,
    "lng": 17.696583
  },
  {
    "name": "Ängelholm-Helsingborg Airport",
    "city": "Ängelholm",
    "country": "Sweden",
    "code1": "AGH",
    "code2": "ESTA",
    "lat": 56.2961,
    "lng": 12.8471
  },
  {
    "name": "Torsby Airport",
    "city": "Torsby",
    "country": "Sweden",
    "code1": "TYF",
    "code2": "ESST",
    "lat": 60.157622,
    "lng": 12.991269
  },
  {
    "name": "Karlstad Airport",
    "city": "Karlstad",
    "country": "Sweden",
    "code1": "KSD",
    "code2": "ESOK",
    "lat": 59.4447,
    "lng": 13.3374
  },
  {
    "name": "Hagfors Airport",
    "city": "Hagfors",
    "country": "Sweden",
    "code1": "HFS",
    "code2": "ESOH",
    "lat": 60.020064,
    "lng": 13.578908
  },
  {
    "name": "Östersund Airport",
    "city": "Östersund",
    "country": "Sweden",
    "code1": "OSD",
    "code2": "ESNZ",
    "lat": 63.1944,
    "lng": 14.5003
  },
  {
    "name": "Łódź Władysław Reymont Airport",
    "city": "Lodz",
    "country": "Poland",
    "code1": "LCJ",
    "code2": "EPLL",
    "lat": 51.721881,
    "lng": 19.398133
  },
  {
    "name": "Bydgoszcz Ignacy Jan Paderewski Airport",
    "city": "Bydgoszcz",
    "country": "Poland",
    "code1": "BZG",
    "code2": "EPBY",
    "lat": 53.0968,
    "lng": 17.9777
  },
  {
    "name": "Værøy Heliport",
    "city": "Værøy",
    "country": "Norway",
    "code1": "VRY",
    "code2": "ENVR",
    "lat": 67.6667,
    "lng": 12.6833
  },
  {
    "name": "Svartnes Airport",
    "city": "Vardø",
    "country": "Norway",
    "code1": "VAW",
    "code2": "ENSS",
    "lat": 70.355392,
    "lng": 31.044889
  },
  {
    "name": "Sorkjosen Airport",
    "city": "Sorkjosen",
    "country": "Norway",
    "code1": "SOJ",
    "code2": "ENSR",
    "lat": 69.7868,
    "lng": 20.9594
  },
  {
    "name": "Svolvær Helle Airport",
    "city": "Svolvær",
    "country": "Norway",
    "code1": "SVJ",
    "code2": "ENSH",
    "lat": 68.2433,
    "lng": 14.6692
  },
  {
    "name": "Sogndal Airport",
    "city": "Sogndal",
    "country": "Norway",
    "code1": "SOG",
    "code2": "ENSG",
    "lat": 61.1561,
    "lng": 7.13778
  },
  {
    "name": "Anda Airport",
    "city": "Sandane",
    "country": "Norway",
    "code1": "SDN",
    "code2": "ENSD",
    "lat": 61.83,
    "lng": 6.10583
  },
  {
    "name": "Røst Airport",
    "city": "Røst",
    "country": "Norway",
    "code1": "RET",
    "code2": "ENRS",
    "lat": 67.5278,
    "lng": 12.1033
  },
  {
    "name": "Ryum Airport",
    "city": "Rørvik",
    "country": "Norway",
    "code1": "RVK",
    "code2": "ENRM",
    "lat": 64.8383,
    "lng": 11.1461
  },
  {
    "name": "Røssvoll Airport",
    "city": "Mo i Rana",
    "country": "Norway",
    "code1": "MQN",
    "code2": "ENRA",
    "lat": 66.3639,
    "lng": 14.3014
  },
  {
    "name": "Namsos Høknesøra Airport",
    "city": "Namsos",
    "country": "Norway",
    "code1": "OSY",
    "code2": "ENNM",
    "lat": 64.4722,
    "lng": 11.5786
  },
  {
    "name": "Leknes Airport",
    "city": "Leknes",
    "country": "Norway",
    "code1": "LKN",
    "code2": "ENLK",
    "lat": 68.1525,
    "lng": 13.6094
  },
  {
    "name": "Sindal Airport",
    "city": "Sindal",
    "country": "Denmark",
    "code1": "CNL",
    "code2": "EKSN",
    "lat": 57.503525,
    "lng": 10.229372
  },
  {
    "name": "Weston Airport",
    "city": "Leixlip",
    "country": "Ireland",
    "code1": "",
    "code2": "EIWT",
    "lat": 53.351333,
    "lng": -6.4875
  },
  {
    "name": "Donegal Airport",
    "city": "Dongloe",
    "country": "Ireland",
    "code1": "CFN",
    "code2": "EIDL",
    "lat": 55.044192,
    "lng": -8.341
  },
  {
    "name": "Raron Airport",
    "city": "Raron",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSTA",
    "lat": 46.3036,
    "lng": 7.82333
  },
  {
    "name": "Barra Airport",
    "city": "Barra",
    "country": "United Kingdom",
    "code1": "BRR",
    "code2": "EGPR",
    "lat": 57.0228,
    "lng": -7.44306
  },
  {
    "name": "Anglesey Airport",
    "city": "Angelsey",
    "country": "United Kingdom",
    "code1": "HLY",
    "code2": "EGOV",
    "lat": 53.248097,
    "lng": -4.535339
  },
  {
    "name": "Penzance Heliport",
    "city": "Penzance",
    "country": "United Kingdom",
    "code1": "PZE",
    "code2": "EGHK",
    "lat": 50.1281,
    "lng": -5.51845
  },
  {
    "name": "Land's End / St. Just Airport",
    "city": "Land's End",
    "country": "United Kingdom",
    "code1": "LEQ",
    "code2": "EGHC",
    "lat": 50.1028,
    "lng": -5.67056
  },
  {
    "name": "Westray Airport",
    "city": "Westray",
    "country": "United Kingdom",
    "code1": "WRY",
    "code2": "EGEW",
    "lat": 59.3503,
    "lng": -2.95
  },
  {
    "name": "Lerwick / Tingwall Airport",
    "city": "Lerwick",
    "country": "United Kingdom",
    "code1": "LWK",
    "code2": "EGET",
    "lat": 60.1922,
    "lng": -1.24361
  },
  {
    "name": "Sanday Airport",
    "city": "Sanday",
    "country": "United Kingdom",
    "code1": "NDY",
    "code2": "EGES",
    "lat": 59.2503,
    "lng": -2.57667
  },
  {
    "name": "Stronsay Airport",
    "city": "Stronsay",
    "country": "United Kingdom",
    "code1": "SOY",
    "code2": "EGER",
    "lat": 59.1553,
    "lng": -2.64139
  },
  {
    "name": "Papa Westray Airport",
    "city": "Papa Westray",
    "country": "United Kingdom",
    "code1": "PPW",
    "code2": "EGEP",
    "lat": 59.3517,
    "lng": -2.90028
  },
  {
    "name": "North Ronaldsay Airport",
    "city": "North Ronaldsay",
    "country": "United Kingdom",
    "code1": "NRL",
    "code2": "EGEN",
    "lat": 59.3675,
    "lng": -2.43444
  },
  {
    "name": "Fair Isle Airport",
    "city": "Fair Isle",
    "country": "United Kingdom",
    "code1": "FIE",
    "code2": "EGEF",
    "lat": 59.5358,
    "lng": -1.62806
  },
  {
    "name": "Eday Airport",
    "city": "Eday",
    "country": "United Kingdom",
    "code1": "EOI",
    "code2": "EGED",
    "lat": 59.1906,
    "lng": -2.77222
  },
  {
    "name": "Campbeltown Airport",
    "city": "Campbeltown",
    "country": "United Kingdom",
    "code1": "CAL",
    "code2": "EGEC",
    "lat": 55.4372,
    "lng": -5.68639
  },
  {
    "name": "Robin Hood Doncaster Sheffield Airport",
    "city": "Doncaster, Sheffield",
    "country": "United Kingdom",
    "code1": "DSA",
    "code2": "EGCN",
    "lat": 53.474722,
    "lng": -1.004444
  },
  {
    "name": "Nottingham Airport",
    "city": "Nottingham",
    "country": "United Kingdom",
    "code1": "NQT",
    "code2": "EGBN",
    "lat": 52.92,
    "lng": -1.079167
  },
  {
    "name": "Seinäjoki Airport",
    "city": "Seinäjoki / Ilmajoki",
    "country": "Finland",
    "code1": "SJY",
    "code2": "EFSI",
    "lat": 62.6921,
    "lng": 22.8323
  },
  {
    "name": "Helgoland-Düne Airport",
    "city": "Helgoland",
    "country": "Germany",
    "code1": "HGL",
    "code2": "EDXH",
    "lat": 54.1853,
    "lng": 7.91583
  },
  {
    "name": "Heide-Büsum Airport",
    "city": "Büsum",
    "country": "Germany",
    "code1": "HEI",
    "code2": "EDXB",
    "lat": 54.1533,
    "lng": 8.90167
  },
  {
    "name": "Heringsdorf Airport",
    "city": "Heringsdorf",
    "country": "Germany",
    "code1": "HDF",
    "code2": "EDAH",
    "lat": 53.878706,
    "lng": 14.152347
  },
  {
    "name": "Kumasi Airport",
    "city": "Kumasi",
    "country": "Ghana",
    "code1": "KMS",
    "code2": "DGSI",
    "lat": 6.71456,
    "lng": -1.59082
  },
  {
    "name": "Guemar Airport",
    "city": "Guemar",
    "country": "Algeria",
    "code1": "ELU",
    "code2": "DAUO",
    "lat": 33.5114,
    "lng": 6.77679
  },
  {
    "name": "Bordj Badji Mokhtar Airport",
    "city": "Bordj Badji Mokhtar",
    "country": "Algeria",
    "code1": "BMW",
    "code2": "DATM",
    "lat": 21.375,
    "lng": 0.923889
  },
  {
    "name": "Béchar Boudghene Ben Ali Lotfi Airport",
    "city": "Béchar",
    "country": "Algeria",
    "code1": "CBH",
    "code2": "DAOR",
    "lat": 31.6457,
    "lng": -2.26986
  },
  {
    "name": "Batna Airport",
    "city": "Batna",
    "country": "Algeria",
    "code1": "BLJ",
    "code2": "DABT",
    "lat": 35.752106,
    "lng": 6.308589
  },
  {
    "name": "Wollaston Lake Airport",
    "city": "Wollaston Lake",
    "country": "Canada",
    "code1": "ZWL",
    "code2": "CZWL",
    "lat": 58.1069,
    "lng": -103.172
  },
  {
    "name": "Churchill Falls Airport",
    "city": "Churchill Falls",
    "country": "Canada",
    "code1": "ZUM",
    "code2": "CZUM",
    "lat": 53.5619,
    "lng": -64.1064
  },
  {
    "name": "Shamattawa Airport",
    "city": "Shamattawa",
    "country": "Canada",
    "code1": "ZTM",
    "code2": "CZTM",
    "lat": 55.8656,
    "lng": -92.0814
  },
  {
    "name": "Sandy Lake Airport",
    "city": "Sandy Lake",
    "country": "Canada",
    "code1": "ZSJ",
    "code2": "CZSJ",
    "lat": 53.0642,
    "lng": -93.3444
  },
  {
    "name": "Round Lake (Weagamow Lake) Airport",
    "city": "Round Lake",
    "country": "Canada",
    "code1": "ZRJ",
    "code2": "CZRJ",
    "lat": 52.9436,
    "lng": -91.3128
  },
  {
    "name": "Sachigo Lake Airport",
    "city": "Sachigo Lake",
    "country": "Canada",
    "code1": "ZPB",
    "code2": "CZPB",
    "lat": 53.8911,
    "lng": -92.1964
  },
  {
    "name": "Masset Airport",
    "city": "Masset",
    "country": "Canada",
    "code1": "ZMT",
    "code2": "CZMT",
    "lat": 54.0275,
    "lng": -132.125
  },
  {
    "name": "Muskrat Dam Airport",
    "city": "Muskrat Dam",
    "country": "Canada",
    "code1": "MSA",
    "code2": "CZMD",
    "lat": 53.4414,
    "lng": -91.7628
  },
  {
    "name": "Kashechewan Airport",
    "city": "Kashechewan",
    "country": "Canada",
    "code1": "ZKE",
    "code2": "CZKE",
    "lat": 52.2825,
    "lng": -81.6778
  },
  {
    "name": "Swan River Airport",
    "city": "Swan River",
    "country": "Canada",
    "code1": "ZJN",
    "code2": "CZJN",
    "lat": 52.1206,
    "lng": -101.236
  },
  {
    "name": "Gods River Airport",
    "city": "Gods River",
    "country": "Canada",
    "code1": "ZGI",
    "code2": "CZGI",
    "lat": 54.8397,
    "lng": -94.0786
  },
  {
    "name": "Fond-Du-Lac Airport",
    "city": "Fond-Du-Lac",
    "country": "Canada",
    "code1": "ZFD",
    "code2": "CZFD",
    "lat": 59.3344,
    "lng": -107.182
  },
  {
    "name": "Eastmain River Airport",
    "city": "Eastmain River",
    "country": "Canada",
    "code1": "ZEM",
    "code2": "CZEM",
    "lat": 52.2264,
    "lng": -78.5225
  },
  {
    "name": "Bathurst Airport",
    "city": "Bathurst",
    "country": "Canada",
    "code1": "ZBF",
    "code2": "CZBF",
    "lat": 47.6297,
    "lng": -65.7389
  },
  {
    "name": "Ilford Airport",
    "city": "Ilford",
    "country": "Canada",
    "code1": "ILF",
    "code2": "CZBD",
    "lat": 56.0614,
    "lng": -95.6139
  },
  {
    "name": "York Landing Airport",
    "city": "York Landing",
    "country": "Canada",
    "code1": "ZAC",
    "code2": "CZAC",
    "lat": 56.0894,
    "lng": -96.0892
  },
  {
    "name": "Salluit Airport",
    "city": "Salluit",
    "country": "Canada",
    "code1": "YZG",
    "code2": "CYZG",
    "lat": 62.1794,
    "lng": -75.6672
  },
  {
    "name": "Whale Cove Airport",
    "city": "Whale Cove",
    "country": "Canada",
    "code1": "YXN",
    "code2": "CYXN",
    "lat": 62.24,
    "lng": -92.5981
  },
  {
    "name": "Webequie Airport",
    "city": "Webequie",
    "country": "Canada",
    "code1": "YWP",
    "code2": "CYWP",
    "lat": 52.9597,
    "lng": -87.3689
  },
  {
    "name": "Deer Lake Airport",
    "city": "Deer Lake",
    "country": "Canada",
    "code1": "YVZ",
    "code2": "CYVZ",
    "lat": 52.6558,
    "lng": -94.0614
  },
  {
    "name": "Big Trout Lake Airport",
    "city": "Big Trout Lake",
    "country": "Canada",
    "code1": "YTL",
    "code2": "CYTL",
    "lat": 53.8178,
    "lng": -89.8969
  },
  {
    "name": "St. Theresa Point Airport",
    "city": "St. Theresa Point",
    "country": "Canada",
    "code1": "YST",
    "code2": "CYST",
    "lat": 53.8456,
    "lng": -94.8519
  },
  {
    "name": "Sanikiluaq Airport",
    "city": "Sanikiluaq",
    "country": "Canada",
    "code1": "YSK",
    "code2": "CYSK",
    "lat": 56.5378,
    "lng": -79.2467
  },
  {
    "name": "Stony Rapids Airport",
    "city": "Stony Rapids",
    "country": "Canada",
    "code1": "YSF",
    "code2": "CYSF",
    "lat": 59.2503,
    "lng": -105.841
  },
  {
    "name": "Red Lake Airport",
    "city": "Red Lake",
    "country": "Canada",
    "code1": "YRL",
    "code2": "CYRL",
    "lat": 51.0669,
    "lng": -93.7931
  },
  {
    "name": "Rae Lakes Airport",
    "city": "Gamètì",
    "country": "Canada",
    "code1": "YRA",
    "code2": "CYRA",
    "lat": 64.1161,
    "lng": -117.31
  },
  {
    "name": "Nakina Airport",
    "city": "Nakina",
    "country": "Canada",
    "code1": "YQN",
    "code2": "CYQN",
    "lat": 50.182777,
    "lng": -86.696388
  },
  {
    "name": "The Pas Airport",
    "city": "The Pas",
    "country": "Canada",
    "code1": "YQD",
    "code2": "CYQD",
    "lat": 53.9714,
    "lng": -101.091
  },
  {
    "name": "Powell River Airport",
    "city": "Powell River",
    "country": "Canada",
    "code1": "YPW",
    "code2": "CYPW",
    "lat": 49.8342,
    "lng": -124.5
  },
  {
    "name": "Peawanuck Airport",
    "city": "Peawanuck",
    "country": "Canada",
    "code1": "YPO",
    "code2": "CYPO",
    "lat": 54.9881,
    "lng": -85.4433
  },
  {
    "name": "Pikangikum Airport",
    "city": "Pikangikum",
    "country": "Canada",
    "code1": "YPM",
    "code2": "CYPM",
    "lat": 51.8197,
    "lng": -93.9733
  },
  {
    "name": "Inukjuak Airport",
    "city": "Inukjuak",
    "country": "Canada",
    "code1": "YPH",
    "code2": "CYPH",
    "lat": 58.4719,
    "lng": -78.0769
  },
  {
    "name": "Oxford House Airport",
    "city": "Oxford House",
    "country": "Canada",
    "code1": "YOH",
    "code2": "CYOH",
    "lat": 54.9333,
    "lng": -95.2789
  },
  {
    "name": "Points North Landing Airport",
    "city": "Points North Landing",
    "country": "Canada",
    "code1": "YNL",
    "code2": "CYNL",
    "lat": 58.2767,
    "lng": -104.082
  },
  {
    "name": "Norway House Airport",
    "city": "Norway House",
    "country": "Canada",
    "code1": "YNE",
    "code2": "CYNE",
    "lat": 53.9583,
    "lng": -97.8442
  },
  {
    "name": "Wemindji Airport",
    "city": "Wemindji",
    "country": "Canada",
    "code1": "YNC",
    "code2": "CYNC",
    "lat": 53.0106,
    "lng": -78.8311
  },
  {
    "name": "Umiujaq Airport",
    "city": "Umiujaq",
    "country": "Canada",
    "code1": "YUD",
    "code2": "CYMU",
    "lat": 56.5361,
    "lng": -76.5183
  },
  {
    "name": "Chapais Airport",
    "city": "Chibougamau",
    "country": "Canada",
    "code1": "YMT",
    "code2": "CYMT",
    "lat": 49.7719,
    "lng": -74.5281
  },
  {
    "name": "Mary's Harbour Airport",
    "city": "Mary's Harbour",
    "country": "Canada",
    "code1": "YMH",
    "code2": "CYMH",
    "lat": 52.3028,
    "lng": -55.8472
  },
  {
    "name": "Kangiqsualujjuaq (Georges River) Airport",
    "city": "Kangiqsualujjuaq",
    "country": "Canada",
    "code1": "XGR",
    "code2": "CYLU",
    "lat": 58.7114,
    "lng": -65.9928
  },
  {
    "name": "Lutselk'e Airport",
    "city": "Lutselk'e",
    "country": "Canada",
    "code1": "YSG",
    "code2": "CYLK",
    "lat": 62.4183,
    "lng": -110.682
  },
  {
    "name": "Lansdowne House Airport",
    "city": "Lansdowne House",
    "country": "Canada",
    "code1": "YLH",
    "code2": "CYLH",
    "lat": 52.1956,
    "lng": -87.9342
  },
  {
    "name": "Kimmirut Airport",
    "city": "Kimmirut",
    "country": "Canada",
    "code1": "YLC",
    "code2": "CYLC",
    "lat": 62.85,
    "lng": -69.8833
  },
  {
    "name": "Aupaluk Airport",
    "city": "Aupaluk",
    "country": "Canada",
    "code1": "YPJ",
    "code2": "CYLA",
    "lat": 59.2967,
    "lng": -69.5997
  },
  {
    "name": "Waskaganish Airport",
    "city": "Waskaganish",
    "country": "Canada",
    "code1": "YKQ",
    "code2": "CYKQ",
    "lat": 51.4733,
    "lng": -78.7583
  },
  {
    "name": "Akulivik Airport",
    "city": "Akulivik",
    "country": "Canada",
    "code1": "AKV",
    "code2": "CYKO",
    "lat": 60.8186,
    "lng": -78.1486
  },
  {
    "name": "Island Lake Airport",
    "city": "Island Lake",
    "country": "Canada",
    "code1": "YIV",
    "code2": "CYIV",
    "lat": 53.8572,
    "lng": -94.6536
  },
  {
    "name": "Ivujivik Airport",
    "city": "Ivujivik",
    "country": "Canada",
    "code1": "YIK",
    "code2": "CYIK",
    "lat": 62.4173,
    "lng": -77.9253
  },
  {
    "name": "Chevery Airport",
    "city": "Chevery",
    "country": "Canada",
    "code1": "YHR",
    "code2": "CYHR",
    "lat": 50.4689,
    "lng": -59.6367
  },
  {
    "name": "Hopedale Airport",
    "city": "Hopedale",
    "country": "Canada",
    "code1": "YHO",
    "code2": "CYHO",
    "lat": 55.4483,
    "lng": -60.2286
  },
  {
    "name": "Nemiscau Airport",
    "city": "Nemiscau",
    "country": "Canada",
    "code1": "YNS",
    "code2": "CYHH",
    "lat": 51.6911,
    "lng": -76.1356
  },
  {
    "name": "Vancouver Harbour Water Airport",
    "city": "Vancouver",
    "country": "Canada",
    "code1": "YHC",
    "code2": "CYHC",
    "lat": 49.2944,
    "lng": -123.111
  },
  {
    "name": "Quaqtaq Airport",
    "city": "Quaqtaq",
    "country": "Canada",
    "code1": "YQC",
    "code2": "CYHA",
    "lat": 61.0464,
    "lng": -69.6178
  },
  {
    "name": "Grise Fiord Airport",
    "city": "Grise Fiord",
    "country": "Canada",
    "code1": "YGZ",
    "code2": "CYGZ",
    "lat": 76.4261,
    "lng": -82.9092
  },
  {
    "name": "Gillam Airport",
    "city": "Gillam",
    "country": "Canada",
    "code1": "YGX",
    "code2": "CYGX",
    "lat": 56.3575,
    "lng": -94.7106
  },
  {
    "name": "Kuujjuarapik Airport",
    "city": "Kuujjuarapik",
    "country": "Canada",
    "code1": "YGW",
    "code2": "CYGW",
    "lat": 55.2819,
    "lng": -77.7653
  },
  {
    "name": "Igloolik Airport",
    "city": "Igloolik",
    "country": "Canada",
    "code1": "YGT",
    "code2": "CYGT",
    "lat": 69.3647,
    "lng": -81.8161
  },
  {
    "name": "Gods Lake Narrows Airport",
    "city": "Gods Lake Narrows",
    "country": "Canada",
    "code1": "YGO",
    "code2": "CYGO",
    "lat": 54.5589,
    "lng": -94.4914
  },
  {
    "name": "Texada Gillies Bay Airport",
    "city": "Texada",
    "country": "Canada",
    "code1": "YGB",
    "code2": "CYGB",
    "lat": 49.6942,
    "lng": -124.518
  },
  {
    "name": "Makkovik Airport",
    "city": "Makkovik",
    "country": "Canada",
    "code1": "YMN",
    "code2": "CYFT",
    "lat": 55.0769,
    "lng": -59.1864
  },
  {
    "name": "Fort Hope Airport",
    "city": "Fort Hope",
    "country": "Canada",
    "code1": "YFH",
    "code2": "CYFH",
    "lat": 51.5619,
    "lng": -87.9078
  },
  {
    "name": "Fort Albany Airport",
    "city": "Fort Albany",
    "country": "Canada",
    "code1": "YFA",
    "code2": "CYFA",
    "lat": 52.2014,
    "lng": -81.6969
  },
  {
    "name": "Fort Severn Airport",
    "city": "Fort Severn",
    "country": "Canada",
    "code1": "YER",
    "code2": "CYER",
    "lat": 56.0189,
    "lng": -87.6761
  },
  {
    "name": "Nain Airport",
    "city": "Nain",
    "country": "Canada",
    "code1": "YDP",
    "code2": "CYDP",
    "lat": 56.5492,
    "lng": -61.6803
  },
  {
    "name": "Chesterfield Inlet Airport",
    "city": "Chesterfield Inlet",
    "country": "Canada",
    "code1": "YCS",
    "code2": "CYCS",
    "lat": 63.3469,
    "lng": -90.7311
  },
  {
    "name": "Cartwright Airport",
    "city": "Cartwright",
    "country": "Canada",
    "code1": "YRF",
    "code2": "CYCA",
    "lat": 53.6828,
    "lng": -57.0419
  },
  {
    "name": "Lourdes De Blanc Sablon Airport",
    "city": "Lourdes-De-Blanc-Sablon",
    "country": "Canada",
    "code1": "YBX",
    "code2": "CYBX",
    "lat": 51.4436,
    "lng": -57.1853
  },
  {
    "name": "Uranium City Airport",
    "city": "Uranium City",
    "country": "Canada",
    "code1": "YBE",
    "code2": "CYBE",
    "lat": 59.5614,
    "lng": -108.481
  },
  {
    "name": "Lac Du Bonnet Airport",
    "city": "Lac Du Bonnet",
    "country": "Canada",
    "code1": "",
    "code2": "CYAX",
    "lat": 50.2944,
    "lng": -96.01
  },
  {
    "name": "Attawapiskat Airport",
    "city": "Attawapiskat",
    "country": "Canada",
    "code1": "YAT",
    "code2": "CYAT",
    "lat": 52.9275,
    "lng": -82.4319
  },
  {
    "name": "Kangirsuk Airport",
    "city": "Kangirsuk",
    "country": "Canada",
    "code1": "YKG",
    "code2": "CYAS",
    "lat": 60.0272,
    "lng": -69.9992
  },
  {
    "name": "Kasabonika Airport",
    "city": "Kasabonika",
    "country": "Canada",
    "code1": "XKS",
    "code2": "CYAQ",
    "lat": 53.5247,
    "lng": -88.6428
  },
  {
    "name": "Fort Frances Municipal Airport",
    "city": "Fort Frances",
    "country": "Canada",
    "code1": "YAG",
    "code2": "CYAG",
    "lat": 48.6542,
    "lng": -93.4397
  },
  {
    "name": "Cat Lake Airport",
    "city": "Cat Lake",
    "country": "Canada",
    "code1": "YAC",
    "code2": "CYAC",
    "lat": 51.7272,
    "lng": -91.8244
  },
  {
    "name": "Tarapacá Airport",
    "city": "Tarapacá",
    "country": "Colombia",
    "code1": "TCD",
    "code2": "",
    "lat": -2.867,
    "lng": -69.733
  },
  {
    "name": "Apartadó Airport",
    "city": "Apartadó",
    "country": "Colombia",
    "code1": "APO",
    "code2": "",
    "lat": 7.033,
    "lng": -77.2
  },
  {
    "name": "Nantong Airport",
    "city": "Nantong",
    "country": "China",
    "code1": "NTG",
    "code2": "",
    "lat": 32.0708,
    "lng": 120.976
  },
  {
    "name": "La Tabatière Airport",
    "city": "La Tabatière",
    "country": "Canada",
    "code1": "ZLT",
    "code2": "CTU5",
    "lat": 50.8308,
    "lng": -58.9756
  },
  {
    "name": "Tête-à-la-Baleine Airport",
    "city": "Tête-à-la-Baleine",
    "country": "Canada",
    "code1": "ZTB",
    "code2": "CTB6",
    "lat": 50.6744,
    "lng": -59.3836
  },
  {
    "name": "Chisasibi Airport",
    "city": "Chisasibi",
    "country": "Canada",
    "code1": "YKU",
    "code2": "CSU2",
    "lat": 53.8056,
    "lng": -78.9169
  },
  {
    "name": "Poplar Hill Airport",
    "city": "Poplar Hill",
    "country": "Canada",
    "code1": "YHP",
    "code2": "CPV7",
    "lat": 52.1133,
    "lng": -94.2556
  },
  {
    "name": "Ogoki Post Airport",
    "city": "Ogoki Post",
    "country": "Canada",
    "code1": "YOG",
    "code2": "CNT3",
    "lat": 51.6586,
    "lng": -85.9017
  },
  {
    "name": "Kingfisher Lake Airport",
    "city": "Kingfisher Lake",
    "country": "Canada",
    "code1": "KIF",
    "code2": "CNM5",
    "lat": 53.0125,
    "lng": -89.8553
  },
  {
    "name": "Bearskin Lake Airport",
    "city": "Bearskin Lake",
    "country": "Canada",
    "code1": "XBE",
    "code2": "CNE3",
    "lat": 53.9656,
    "lng": -91.0272
  },
  {
    "name": "North Spirit Lake Airport",
    "city": "North Spirit Lake",
    "country": "Canada",
    "code1": "YNO",
    "code2": "CKQ3",
    "lat": 52.49,
    "lng": -92.9711
  },
  {
    "name": "Wunnumin Lake Airport",
    "city": "Wunnumin Lake",
    "country": "Canada",
    "code1": "WNN",
    "code2": "CKL3",
    "lat": 52.8939,
    "lng": -89.2892
  },
  {
    "name": "Wapekeka Airport",
    "city": "Angling Lake",
    "country": "Canada",
    "code1": "YAX",
    "code2": "CKB6",
    "lat": 53.8492,
    "lng": -89.5794
  },
  {
    "name": "Summer Beaver Airport",
    "city": "Summer Beaver",
    "country": "Canada",
    "code1": "SUR",
    "code2": "CJV7",
    "lat": 52.7086,
    "lng": -88.5419
  },
  {
    "name": "Whatì Airport",
    "city": "Whatì",
    "country": "Canada",
    "code1": "YLE",
    "code2": "CEM3",
    "lat": 63.1317,
    "lng": -117.246
  },
  {
    "name": "Colville Lake Airport",
    "city": "Colville Lake",
    "country": "Canada",
    "code1": "YCK",
    "code2": "CEB3",
    "lat": 67.0333,
    "lng": -126.083
  },
  {
    "name": "Rigolet Airport",
    "city": "Rigolet",
    "country": "Canada",
    "code1": "YRG",
    "code2": "CCZ2",
    "lat": 54.1797,
    "lng": -58.4575
  },
  {
    "name": "Port Hope Simpson Airport",
    "city": "Port Hope Simpson",
    "country": "Canada",
    "code1": "YHA",
    "code2": "CCP4",
    "lat": 52.5281,
    "lng": -56.2861
  },
  {
    "name": "St. Lewis (Fox Harbour) Airport",
    "city": "St. Lewis",
    "country": "Canada",
    "code1": "YFX",
    "code2": "CCK4",
    "lat": 52.3728,
    "lng": -55.6739
  },
  {
    "name": "Williams Harbour Airport",
    "city": "Williams Harbour",
    "country": "Canada",
    "code1": "YWM",
    "code2": "CCA6",
    "lat": 52.5669,
    "lng": -55.7847
  },
  {
    "name": "Anahim Lake Airport",
    "city": "Anahim Lake",
    "country": "Canada",
    "code1": "YAA",
    "code2": "CAJ4",
    "lat": 52.4525,
    "lng": -125.303
  },
  {
    "name": "Whistler/Green Lake Water Aerodrome",
    "city": "Whistler",
    "country": "Canada",
    "code1": "YWS",
    "code2": "CAE5",
    "lat": 50.1436,
    "lng": -122.949
  },
  {
    "name": "Punta Gorda Airport",
    "city": "Punta Gorda",
    "country": "Belize",
    "code1": "PND",
    "code2": "",
    "lat": 16.1024,
    "lng": -88.8083
  },
  {
    "name": "Caye Caulker Airport",
    "city": "Caye Caulker",
    "country": "Belize",
    "code1": "CUK",
    "code2": "",
    "lat": 17.7347,
    "lng": -88.0325
  },
  {
    "name": "Vopnafjörður Airport",
    "city": "Vopnafjörður",
    "country": "Iceland",
    "code1": "VPN",
    "code2": "BIVO",
    "lat": 65.7206,
    "lng": -14.8506
  },
  {
    "name": "Thorshofn Airport",
    "city": "Thorshofn",
    "country": "Iceland",
    "code1": "THO",
    "code2": "BITN",
    "lat": 66.2185,
    "lng": -15.3356
  },
  {
    "name": "Drake Bay Airport",
    "city": "Puntarenas",
    "country": "Costa Rica",
    "code1": "DRK",
    "code2": "MRDK",
    "lat": 8.71889,
    "lng": -83.6417
  },
  {
    "name": "Grímsey Airport",
    "city": "Grímsey",
    "country": "Iceland",
    "code1": "GRY",
    "code2": "BIGR",
    "lat": 66.5547,
    "lng": -18.0175
  },
  {
    "name": "Qaarsut Airport",
    "city": "Uummannaq",
    "country": "Greenland",
    "code1": "JQA",
    "code2": "BGUQ",
    "lat": 70.7342,
    "lng": -52.6962
  },
  {
    "name": "Upernavik Airport",
    "city": "Upernavik",
    "country": "Greenland",
    "code1": "JUV",
    "code2": "BGUK",
    "lat": 72.7902,
    "lng": -56.1306
  },
  {
    "name": "Sisimiut Airport",
    "city": "Sisimiut",
    "country": "Greenland",
    "code1": "JHS",
    "code2": "BGSS",
    "lat": 66.9513,
    "lng": -53.7293
  },
  {
    "name": "Qaanaaq Airport",
    "city": "Qaanaaq",
    "country": "Greenland",
    "code1": "NAQ",
    "code2": "BGQQ",
    "lat": 77.4886,
    "lng": -69.3887
  },
  {
    "name": "Narsaq Heliport",
    "city": "Narsaq",
    "country": "Greenland",
    "code1": "JNS",
    "code2": "BGNS",
    "lat": 60.9167,
    "lng": -46.0586
  },
  {
    "name": "Nanortalik Heliport",
    "city": "Nanortalik",
    "country": "Greenland",
    "code1": "JNN",
    "code2": "BGNN",
    "lat": 60.14,
    "lng": -45.2317
  },
  {
    "name": "Maniitsoq Airport",
    "city": "Maniitsoq",
    "country": "Greenland",
    "code1": "JSU",
    "code2": "BGMQ",
    "lat": 65.4125,
    "lng": -52.9394
  },
  {
    "name": "Qaqortoq Heliport",
    "city": "Qaqortoq",
    "country": "Greenland",
    "code1": "JJU",
    "code2": "BGJH",
    "lat": 60.7158,
    "lng": -46.0294
  },
  {
    "name": "Qeqertarsuaq Heliport",
    "city": "Qeqertarsuaq Airport",
    "country": "Greenland",
    "code1": "JGO",
    "code2": "BGGN",
    "lat": 69.2511,
    "lng": -53.5381
  },
  {
    "name": "Paamiut Heliport",
    "city": "Paamiut",
    "country": "Greenland",
    "code1": "JFR",
    "code2": "BGFH",
    "lat": 61.9922,
    "lng": -49.6625
  },
  {
    "name": "Neerlerit Inaat Airport",
    "city": "Neerlerit Inaat",
    "country": "Greenland",
    "code1": "CNP",
    "code2": "BGCO",
    "lat": 70.7433,
    "lng": -22.6606
  },
  {
    "name": "Alluitsup Paa Heliport",
    "city": "Alluitsup Paa",
    "country": "Greenland",
    "code1": "LLU",
    "code2": "BGAP",
    "lat": 60.4644,
    "lng": -45.5778
  },
  {
    "name": "Wapenamanda Airport",
    "city": "Wapenamanda",
    "country": "Papua New Guinea",
    "code1": "WBM",
    "code2": "AYWD",
    "lat": -5.6433,
    "lng": 143.895
  },
  {
    "name": "Vanimo Airport",
    "city": "Vanimo",
    "country": "Papua New Guinea",
    "code1": "VAI",
    "code2": "AYVN",
    "lat": -2.69717,
    "lng": 141.302
  },
  {
    "name": "Tokua Airport",
    "city": "Tokua",
    "country": "Papua New Guinea",
    "code1": "RAB",
    "code2": "AYTK",
    "lat": -4.34046,
    "lng": 152.38
  },
  {
    "name": "Tabubil Airport",
    "city": "Tabubil",
    "country": "Papua New Guinea",
    "code1": "TBG",
    "code2": "AYTB",
    "lat": -5.27861,
    "lng": 141.226
  },
  {
    "name": "Tari Airport",
    "city": "Tari",
    "country": "Papua New Guinea",
    "code1": "TIZ",
    "code2": "AYTA",
    "lat": -5.845,
    "lng": 142.948
  },
  {
    "name": "Misima Island Airport",
    "city": "Misima Island",
    "country": "Papua New Guinea",
    "code1": "MIS",
    "code2": "AYMS",
    "lat": -10.6892,
    "lng": 152.838
  },
  {
    "name": "Moro Airport",
    "city": "Moro",
    "country": "Papua New Guinea",
    "code1": "MXH",
    "code2": "AYMR",
    "lat": -6.36333,
    "lng": 143.238
  },
  {
    "name": "Momote Airport",
    "city": "Momote",
    "country": "Papua New Guinea",
    "code1": "MAS",
    "code2": "AYMO",
    "lat": -2.06189,
    "lng": 147.424
  },
  {
    "name": "Mendi Airport",
    "city": "Mendi",
    "country": "Papua New Guinea",
    "code1": "MDU",
    "code2": "AYMN",
    "lat": -6.14774,
    "lng": 143.657
  },
  {
    "name": "Kavieng Airport",
    "city": "Kavieng",
    "country": "Papua New Guinea",
    "code1": "KVG",
    "code2": "AYKV",
    "lat": -2.5794,
    "lng": 150.808
  },
  {
    "name": "Kerema Airport",
    "city": "Kerema",
    "country": "Papua New Guinea",
    "code1": "KMA",
    "code2": "AYKM",
    "lat": -7.96361,
    "lng": 145.771
  },
  {
    "name": "Kikori Airport",
    "city": "Kikori",
    "country": "Papua New Guinea",
    "code1": "KRI",
    "code2": "AYKK",
    "lat": -7.42438,
    "lng": 144.25
  },
  {
    "name": "Kiunga Airport",
    "city": "Kiunga",
    "country": "Papua New Guinea",
    "code1": "UNG",
    "code2": "AYKI",
    "lat": -6.12571,
    "lng": 141.282
  },
  {
    "name": "Kimbe Airport",
    "city": "Hoskins",
    "country": "Papua New Guinea",
    "code1": "HKN",
    "code2": "AYHK",
    "lat": -5.46217,
    "lng": 150.405
  },
  {
    "name": "Girua Airport",
    "city": "Girua",
    "country": "Papua New Guinea",
    "code1": "PNP",
    "code2": "AYGR",
    "lat": -8.80454,
    "lng": 148.309
  },
  {
    "name": "Gurney Airport",
    "city": "Gurney",
    "country": "Papua New Guinea",
    "code1": "GUR",
    "code2": "AYGN",
    "lat": -10.3115,
    "lng": 150.334
  },
  {
    "name": "Daru Airport",
    "city": "Daru",
    "country": "Papua New Guinea",
    "code1": "DAU",
    "code2": "AYDU",
    "lat": -9.08676,
    "lng": 143.208
  },
  {
    "name": "Chimbu Airport",
    "city": "Kundiawa",
    "country": "Papua New Guinea",
    "code1": "CMU",
    "code2": "AYCH",
    "lat": -6.02429,
    "lng": 144.971
  },
  {
    "name": "Buka Airport",
    "city": "Buka Island",
    "country": "Papua New Guinea",
    "code1": "BUA",
    "code2": "AYBK",
    "lat": -5.42232,
    "lng": 154.673
  },
  {
    "name": "Ramata Airport",
    "city": "Ramata",
    "country": "Solomon Islands",
    "code1": "RBV",
    "code2": "AGRM",
    "lat": -8.16806,
    "lng": 157.643
  },
  {
    "name": "Kagau Island Airport",
    "city": "Kagau Island",
    "country": "Solomon Islands",
    "code1": "KGE",
    "code2": "AGKG",
    "lat": -7.333,
    "lng": 157.583
  },
  {
    "name": "Suavanao Airport",
    "city": "Suavanao",
    "country": "Solomon Islands",
    "code1": "VAO",
    "code2": "AGGV",
    "lat": -7.58556,
    "lng": 158.731
  },
  {
    "name": "Marau Airport",
    "city": "Marau",
    "country": "Solomon Islands",
    "code1": "RUS",
    "code2": "AGGU",
    "lat": -9.86167,
    "lng": 160.825
  },
  {
    "name": "Rennell/Tingoa Airport",
    "city": "Rennell Island",
    "country": "Solomon Islands",
    "code1": "RNL",
    "code2": "AGGR",
    "lat": -11.5339,
    "lng": 160.063
  },
  {
    "name": "Mono Airport",
    "city": "Stirling Island",
    "country": "Solomon Islands",
    "code1": "MNY",
    "code2": "AGGO",
    "lat": -7.41694,
    "lng": 155.565
  },
  {
    "name": "Nusatupe Airport",
    "city": "Gizo",
    "country": "Solomon Islands",
    "code1": "GZO",
    "code2": "AGGN",
    "lat": -8.09778,
    "lng": 156.864
  },
  {
    "name": "Munda Airport",
    "city": "Munda",
    "country": "Solomon Islands",
    "code1": "MUA",
    "code2": "AGGM",
    "lat": -8.32797,
    "lng": 157.263
  },
  {
    "name": "Santa Cruz/Graciosa Bay/Luova Airport",
    "city": "Santa Cruz/Graciosa Bay/Luova",
    "country": "Solomon Islands",
    "code1": "SCZ",
    "code2": "AGGL",
    "lat": -10.7203,
    "lng": 165.795
  },
  {
    "name": "Ngorangora Airport",
    "city": "Kirakira",
    "country": "Solomon Islands",
    "code1": "IRA",
    "code2": "AGGK",
    "lat": -10.4497,
    "lng": 161.898
  },
  {
    "name": "Babanakira Airport",
    "city": "Mbambanakira",
    "country": "Solomon Islands",
    "code1": "MBU",
    "code2": "AGGI",
    "lat": -9.7475,
    "lng": 159.839
  },
  {
    "name": "Fera/Maringe Airport",
    "city": "Fera Island",
    "country": "Solomon Islands",
    "code1": "FRE",
    "code2": "AGGF",
    "lat": -8.1075,
    "lng": 159.577
  },
  {
    "name": "Ballalae Airport",
    "city": "Ballalae",
    "country": "Solomon Islands",
    "code1": "BAS",
    "code2": "AGGE",
    "lat": -6.967,
    "lng": 155.883
  },
  {
    "name": "Auki Airport",
    "city": "Auki",
    "country": "Solomon Islands",
    "code1": "AKS",
    "code2": "AGGA",
    "lat": -8.70257,
    "lng": 160.682
  },
  {
    "name": "Uru Harbour Airport",
    "city": "Atoifi",
    "country": "Solomon Islands",
    "code1": "ATD",
    "code2": "AGAT",
    "lat": -8.87333,
    "lng": 161.011
  },
  {
    "name": "Komsomolsk-on-Amur Airport",
    "city": "Komsomolsk-on-Amur",
    "country": "Russia",
    "code1": "KXK",
    "code2": "UHKK",
    "lat": 50.4094,
    "lng": 136.934
  },
  {
    "name": "Moyo Airport",
    "city": "Moyo",
    "country": "Uganda",
    "code1": "OYG",
    "code2": "",
    "lat": 3.633,
    "lng": 31.75
  },
  {
    "name": "Tiksi Airport",
    "city": "Tiksi",
    "country": "Russia",
    "code1": "IKS",
    "code2": "UEST",
    "lat": 71.6977,
    "lng": 128.903
  },
  {
    "name": "Cherskiy Airport",
    "city": "Cherskiy",
    "country": "Russia",
    "code1": "CYX",
    "code2": "UESS",
    "lat": 68.7406,
    "lng": 161.338
  },
  {
    "name": "Chokurdakh Airport",
    "city": "Chokurdah",
    "country": "Russia",
    "code1": "CKH",
    "code2": "UESO",
    "lat": 70.6231,
    "lng": 147.902
  },
  {
    "name": "Chulman",
    "city": "Neryungri",
    "country": "Russia",
    "code1": "CNN",
    "code2": "UELL",
    "lat": 56.9139,
    "lng": 124.914
  },
  {
    "name": "Kostanay West Airport",
    "city": "Kostanay",
    "country": "Kazakhstan",
    "code1": "KSN",
    "code2": "UAUU",
    "lat": 53.206944,
    "lng": 63.550278
  },
  {
    "name": "Zhezkazgan Airport",
    "city": "Zhezkazgan",
    "country": "Kazakhstan",
    "code1": "DZN",
    "code2": "UAKD",
    "lat": 47.708333,
    "lng": 67.733333
  },
  {
    "name": "Kokshetau Airport",
    "city": "Kokshetau",
    "country": "Kazakhstan",
    "code1": "KOV",
    "code2": "UACK",
    "lat": 53.3291,
    "lng": 69.5946
  },
  {
    "name": "Union Island International Airport",
    "city": "Union Island",
    "country": "Saint Vincent and the Grenadines",
    "code1": "UNI",
    "code2": "TVSU",
    "lat": 12.583,
    "lng": -61.417
  },
  {
    "name": "J F Mitchell Airport",
    "city": "Bequia",
    "country": "Saint Vincent and the Grenadines",
    "code1": "BQU",
    "code2": "TVSB",
    "lat": 12.988444,
    "lng": -61.262033
  },
  {
    "name": "Virgin Gorda Airport",
    "city": "Spanish Town",
    "country": "British Virgin Islands",
    "code1": "VIJ",
    "code2": "TUPW",
    "lat": 18.4464,
    "lng": -64.4275
  },
  {
    "name": "Vance Winkworth Amory International Airport",
    "city": "Charlestown",
    "country": "Saint Kitts and Nevis",
    "code1": "NEV",
    "code2": "TKPN",
    "lat": 17.205678,
    "lng": -62.589869
  },
  {
    "name": "Baillif Airport",
    "city": "Basse Terre",
    "country": "Guadeloupe",
    "code1": "BBR",
    "code2": "TFFB",
    "lat": 16.0133,
    "lng": -61.7422
  },
  {
    "name": "La Désirade Airport",
    "city": "Grande Anse",
    "country": "Guadeloupe",
    "code1": "DSD",
    "code2": "TFFA",
    "lat": 16.2969,
    "lng": -61.0844
  },
  {
    "name": "Juan Pablo Pérez Alfonso Airport",
    "city": "El Vigía",
    "country": "Venezuela",
    "code1": "VIG",
    "code2": "SVVG",
    "lat": 8.6241,
    "lng": -71.672819
  },
  {
    "name": "El Jaguel / Punta del Este Airport",
    "city": "Maldonado",
    "country": "Uruguay",
    "code1": "MDO",
    "code2": "SUPE",
    "lat": -34.917,
    "lng": -54.917
  },
  {
    "name": "Santa Rosa Airport",
    "city": "Santa Rosa",
    "country": "Brazil",
    "code1": "SRA",
    "code2": "SSZR",
    "lat": -27.9067,
    "lng": -54.5204
  },
  {
    "name": "Alferez Fap David Figueroa Fernandini Airport",
    "city": "Huánuco",
    "country": "Peru",
    "code1": "HUU",
    "code2": "SPNC",
    "lat": -9.878811,
    "lng": -76.204797
  },
  {
    "name": "Caballococha Airport",
    "city": "Caballococha",
    "country": "Peru",
    "code1": "LHC",
    "code2": "SPBC",
    "lat": -3.916858,
    "lng": -70.508225
  },
  {
    "name": "Capitán Av. German Quiroga G. Airport",
    "city": "San Borja",
    "country": "Bolivia",
    "code1": "SRJ",
    "code2": "SLSB",
    "lat": -14.8592,
    "lng": -66.7375
  },
  {
    "name": "Capitán Av. Selin Zeitun Lopez Airport",
    "city": "Riberalta",
    "country": "Bolivia",
    "code1": "RIB",
    "code2": "SLRI",
    "lat": -11,
    "lng": -66
  },
  {
    "name": "Capitán de Av. Emilio Beltrán Airport",
    "city": "Guayaramerín",
    "country": "Bolivia",
    "code1": "GYA",
    "code2": "SLGY",
    "lat": -10.8206,
    "lng": -65.3456
  },
  {
    "name": "Obando Airport",
    "city": "Puerto Inírida",
    "country": "Colombia",
    "code1": "PDA",
    "code2": "SKPD",
    "lat": 3.85,
    "lng": -67.91
  },
  {
    "name": "Reyes Murillo Airport",
    "city": "Nuquí",
    "country": "Colombia",
    "code1": "NQU",
    "code2": "SKNQ",
    "lat": 5.7,
    "lng": -77.28
  },
  {
    "name": "La Pedrera Airport",
    "city": "La Pedrera",
    "country": "Colombia",
    "code1": "LPD",
    "code2": "SKLP",
    "lat": -1.33,
    "lng": -69.58
  },
  {
    "name": "Caucaya Airport",
    "city": "Puerto Leguízamo",
    "country": "Colombia",
    "code1": "LQM",
    "code2": "SKLG",
    "lat": -0.18,
    "lng": -74.77
  },
  {
    "name": "La Jagua Airport",
    "city": "Garzón",
    "country": "Colombia",
    "code1": "GLJ",
    "code2": "SKGZ",
    "lat": 2.17,
    "lng": -75.67
  },
  {
    "name": "Santa Ana Airport",
    "city": "Cartago",
    "country": "Colombia",
    "code1": "CRC",
    "code2": "SKGO",
    "lat": 4.758181,
    "lng": -75.955753
  },
  {
    "name": "Stanley Airport",
    "city": "Stanley",
    "country": "Falkland Islands",
    "code1": "PSY",
    "code2": "SFAL",
    "lat": -51.685672,
    "lng": -57.777644
  },
  {
    "name": "Camilo Ponce Enriquez Airport",
    "city": "La Toma (Catamayo)",
    "country": "Ecuador",
    "code1": "LOH",
    "code2": "SETM",
    "lat": -3.99589,
    "lng": -79.3719
  },
  {
    "name": "San Cristóbal Airport",
    "city": "San Cristóbal",
    "country": "Ecuador",
    "code1": "SCY",
    "code2": "SEST",
    "lat": -0.910206,
    "lng": -89.61745
  },
  {
    "name": "Sorocaba Airport",
    "city": "Sorocaba",
    "country": "Brazil",
    "code1": "SOD",
    "code2": "SDCO",
    "lat": -23.478,
    "lng": -47.49
  },
  {
    "name": "Ricardo García Posada Airport",
    "city": "El Salvador",
    "country": "Chile",
    "code1": "ESR",
    "code2": "SCES",
    "lat": -26.3111,
    "lng": -69.7652
  },
  {
    "name": "Vitória da Conquista Airport",
    "city": "Vitória Da Conquista",
    "country": "Brazil",
    "code1": "VDC",
    "code2": "SBQV",
    "lat": -14.862761,
    "lng": -40.863106
  },
  {
    "name": "Marília Airport",
    "city": "Marília",
    "country": "Brazil",
    "code1": "MII",
    "code2": "SBML",
    "lat": -22.196892,
    "lng": -49.9264
  },
  {
    "name": "Macaé Airport",
    "city": "Macaé",
    "country": "Brazil",
    "code1": "MEA",
    "code2": "SBME",
    "lat": -22.343,
    "lng": -41.766
  },
  {
    "name": "Necochea Airport",
    "city": "Necochea",
    "country": "Argentina",
    "code1": "NEC",
    "code2": "SAZO",
    "lat": -38.483056,
    "lng": -58.817222
  },
  {
    "name": "Lago Argentino Airport",
    "city": "El Calafate",
    "country": "Argentina",
    "code1": "ING",
    "code2": "SAWA",
    "lat": -50.3361,
    "lng": -72.2486
  },
  {
    "name": "Roxas Airport",
    "city": "Roxas City",
    "country": "Philippines",
    "code1": "RXS",
    "code2": "RPVR",
    "lat": 11.597669,
    "lng": 122.751669
  },
  {
    "name": "Calbayog Airport",
    "city": "Calbayog City",
    "country": "Philippines",
    "code1": "CYP",
    "code2": "RPVC",
    "lat": 12.072706,
    "lng": 124.545092
  },
  {
    "name": "Virac Airport",
    "city": "Virac",
    "country": "Philippines",
    "code1": "VRC",
    "code2": "RPUV",
    "lat": 13.576439,
    "lng": 124.205672
  },
  {
    "name": "Tuguegarao Airport",
    "city": "Tuguegarao",
    "country": "Philippines",
    "code1": "TUG",
    "code2": "RPUT",
    "lat": 17.638311,
    "lng": 121.730614
  },
  {
    "name": "San Fernando Airport",
    "city": "San Fernando",
    "country": "Philippines",
    "code1": "SFE",
    "code2": "RPUS",
    "lat": 16.595589,
    "lng": 120.303219
  },
  {
    "name": "Basco Airport",
    "city": "Basco",
    "country": "Philippines",
    "code1": "BSO",
    "code2": "RPUO",
    "lat": 20.451322,
    "lng": 121.979883
  },
  {
    "name": "Naga Airport",
    "city": "Naga",
    "country": "Philippines",
    "code1": "WNP",
    "code2": "RPUN",
    "lat": 13.584886,
    "lng": 123.270239
  },
  {
    "name": "Tandag Airport",
    "city": "Tandag",
    "country": "Philippines",
    "code1": "TDG",
    "code2": "RPMW",
    "lat": 9.07211,
    "lng": 126.171
  },
  {
    "name": "Surigao Airport",
    "city": "Sangley Point",
    "country": "Philippines",
    "code1": "SUG",
    "code2": "RPMS",
    "lat": 9.757567,
    "lng": 125.479328
  },
  {
    "name": "Fremont Airport",
    "city": "Fremont",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 41.3331,
    "lng": -83.1612
  },
  {
    "name": "Sanga Sanga Airport",
    "city": "Sanga Sanga",
    "country": "Philippines",
    "code1": "SGS",
    "code2": "RPMN",
    "lat": 5.04699,
    "lng": 119.743
  },
  {
    "name": "General Santos International Airport",
    "city": "General Santos City",
    "country": "Philippines",
    "code1": "GES",
    "code2": "RPMB",
    "lat": 6.106439,
    "lng": 125.2353
  },
  {
    "name": "Subic Bay International Airport",
    "city": "Olongapo City",
    "country": "Philippines",
    "code1": "SFS",
    "code2": "RPLB",
    "lat": 14.7944,
    "lng": 120.271
  },
  {
    "name": "Yangyang International Airport",
    "city": "Sokcho / Gangneung",
    "country": "South Korea",
    "code1": "YNY",
    "code2": "RKNY",
    "lat": 38.061311,
    "lng": 128.669164
  },
  {
    "name": "Ugolny Airport",
    "city": "Anadyr",
    "country": "Russia",
    "code1": "DYR",
    "code2": "UHMA",
    "lat": 64.73495,
    "lng": 177.741483
  },
  {
    "name": "Okhotsk Airport",
    "city": "Okhotsk",
    "country": "Russia",
    "code1": "OHO",
    "code2": "UHOO",
    "lat": 59.4101,
    "lng": 143.057
  },
  {
    "name": "Ujae Atoll Airport",
    "city": "Ujae Atoll",
    "country": "Marshall Islands",
    "code1": "UJE",
    "code2": "UJAP",
    "lat": 8.92806,
    "lng": 165.762
  },
  {
    "name": "Mariupol International Airport",
    "city": "Mariupol International",
    "country": "Ukraine",
    "code1": "MPW",
    "code2": "UKCM",
    "lat": 47.0761,
    "lng": 37.4496
  },
  {
    "name": "Luhansk International Airport",
    "city": "Lugansk",
    "country": "Ukraine",
    "code1": "VSG",
    "code2": "UKCW",
    "lat": 48.4174,
    "lng": 39.3741
  },
  {
    "name": "Zaporizhzhia International Airport",
    "city": "Zaporozhye",
    "country": "Ukraine",
    "code1": "OZH",
    "code2": "UKDE",
    "lat": 47.867,
    "lng": 35.3157
  },
  {
    "name": "Lozuvatka International Airport",
    "city": "Krivoy Rog",
    "country": "Ukraine",
    "code1": "KWG",
    "code2": "UKDR",
    "lat": 48.0433,
    "lng": 33.21
  },
  {
    "name": "Osnova International Airport",
    "city": "Kharkov",
    "country": "Ukraine",
    "code1": "HRK",
    "code2": "UKHH",
    "lat": 49.924786,
    "lng": 36.289986
  },
  {
    "name": "Ivano Frankivsk International Airport",
    "city": "Ivano-Frankivsk",
    "country": "Ukraine",
    "code1": "IFO",
    "code2": "UKLI",
    "lat": 48.884167,
    "lng": 24.686111
  },
  {
    "name": "Chernivtsi International Airport",
    "city": "Chernovtsk",
    "country": "Ukraine",
    "code1": "CWC",
    "code2": "UKLN",
    "lat": 48.259322,
    "lng": 25.980831
  },
  {
    "name": "Rivne International Airport",
    "city": "Rivne",
    "country": "Ukraine",
    "code1": "RWN",
    "code2": "UKLR",
    "lat": 50.6071,
    "lng": 26.1416
  },
  {
    "name": "Uzhhorod International Airport",
    "city": "Uzhgorod",
    "country": "Ukraine",
    "code1": "UDJ",
    "code2": "UKLU",
    "lat": 48.634278,
    "lng": 22.263356
  },
  {
    "name": "Solovki Airport",
    "city": "Solovetsky Islands",
    "country": "Russia",
    "code1": "CSH",
    "code2": "ULAS",
    "lat": 65.03,
    "lng": 35.7333
  },
  {
    "name": "Cherepovets Airport",
    "city": "Cherepovets",
    "country": "Russia",
    "code1": "CEE",
    "code2": "ULBC",
    "lat": 59.2736,
    "lng": 38.0158
  },
  {
    "name": "Amderma Airport",
    "city": "Amderma",
    "country": "Russia",
    "code1": "AMV",
    "code2": "ULDD",
    "lat": 69.7633,
    "lng": 61.5564
  },
  {
    "name": "Kotlas Airport",
    "city": "Kotlas",
    "country": "Russia",
    "code1": "KSZ",
    "code2": "ULKK",
    "lat": 61.2358,
    "lng": 46.6975
  },
  {
    "name": "Petrozavodsk Airport",
    "city": "Petrozavodsk",
    "country": "Russia",
    "code1": "PES",
    "code2": "ULPB",
    "lat": 61.8852,
    "lng": 34.1547
  },
  {
    "name": "Hrodno Airport",
    "city": "Hrodna",
    "country": "Belarus",
    "code1": "GNA",
    "code2": "UMMG",
    "lat": 53.602,
    "lng": 24.0538
  },
  {
    "name": "Mogilev Airport",
    "city": "Mogilev",
    "country": "Belarus",
    "code1": "MVQ",
    "code2": "UMOO",
    "lat": 53.9549,
    "lng": 30.0951
  },
  {
    "name": "Yeniseysk Airport",
    "city": "Yeniseysk",
    "country": "Russia",
    "code1": "EIE",
    "code2": "UNII",
    "lat": 58.4742,
    "lng": 92.1125
  },
  {
    "name": "Kyzyl Airport",
    "city": "Kyzyl",
    "country": "Russia",
    "code1": "KYZ",
    "code2": "UNKY",
    "lat": 51.6694,
    "lng": 94.4006
  },
  {
    "name": "Spichenkovo Airport",
    "city": "Novokuznetsk",
    "country": "Russia",
    "code1": "NOZ",
    "code2": "UNWW",
    "lat": 53.8114,
    "lng": 86.8772
  },
  {
    "name": "Khatanga Airport",
    "city": "Khatanga",
    "country": "Russia",
    "code1": "HTG",
    "code2": "UOHH",
    "lat": 71.978058,
    "lng": 102.490514
  },
  {
    "name": "Igarka Airport",
    "city": "Igarka",
    "country": "Russia",
    "code1": "IAA",
    "code2": "UOII",
    "lat": 67.4372,
    "lng": 86.6219
  },
  {
    "name": "Grozny Airport",
    "city": "Grozny",
    "country": "Russia",
    "code1": "GRV",
    "code2": "URMG",
    "lat": 43.2981,
    "lng": 45.7841
  },
  {
    "name": "Nalchik Airport",
    "city": "Nalchik",
    "country": "Russia",
    "code1": "NAL",
    "code2": "URMN",
    "lat": 43.5129,
    "lng": 43.6366
  },
  {
    "name": "Beslan Airport",
    "city": "Beslan",
    "country": "Russia",
    "code1": "OGZ",
    "code2": "URMO",
    "lat": 43.2051,
    "lng": 44.6066
  },
  {
    "name": "Elista Airport",
    "city": "Elista",
    "country": "Russia",
    "code1": "ESL",
    "code2": "URWI",
    "lat": 46.3739,
    "lng": 44.3309
  },
  {
    "name": "Aleknagik Airport",
    "city": "Aleknagik",
    "country": "United States",
    "code1": "WKK",
    "code2": "5A8",
    "lat": 59.2826,
    "lng": -158.618
  },
  {
    "name": "Brookings Regional Airport",
    "city": "Brookings",
    "country": "United States",
    "code1": "BKX",
    "code2": "BKX",
    "lat": 44.3048,
    "lng": -96.8169
  },
  {
    "name": "Mercer County Airport",
    "city": "Bluefield",
    "country": "United States",
    "code1": "BLF",
    "code2": "BLF",
    "lat": 37.2958,
    "lng": -81.2077
  },
  {
    "name": "Kearney Municipal Airport",
    "city": "Kearney",
    "country": "United States",
    "code1": "EAR",
    "code2": "EAR",
    "lat": 40.727,
    "lng": -99.0068
  },
  {
    "name": "Mid Delta Regional Airport",
    "city": "Greenville",
    "country": "United States",
    "code1": "GLH",
    "code2": "GLH",
    "lat": 33.4829,
    "lng": -90.9856
  },
  {
    "name": "Laughlin-Bullhead Intl",
    "city": "Bullhead",
    "country": "United States",
    "code1": "IFP",
    "code2": "IFP",
    "lat": 35.1574,
    "lng": -114.56
  },
  {
    "name": "Kingman Airport",
    "city": "Kingman",
    "country": "United States",
    "code1": "IGM",
    "code2": "IGM",
    "lat": 35.2595,
    "lng": -113.938
  },
  {
    "name": "Tri Cities Airport",
    "city": "Pasco",
    "country": "United States",
    "code1": "PSC",
    "code2": "PSC",
    "lat": 46.2647,
    "lng": -119.119
  },
  {
    "name": "Akutan Seaplane Base",
    "city": "Akutan",
    "country": "United States",
    "code1": "KQA",
    "code2": "KQA",
    "lat": 54.1325,
    "lng": -165.785
  },
  {
    "name": "Grant County Airport",
    "city": "Silver City",
    "country": "United States",
    "code1": "SVC",
    "code2": "SVC",
    "lat": 32.6365,
    "lng": -108.156
  },
  {
    "name": "Lopez Island Airport",
    "city": "Lopez",
    "country": "United States",
    "code1": "LPS",
    "code2": "S31",
    "lat": 48.4839,
    "lng": -122.938
  },
  {
    "name": "Salekhard Airport",
    "city": "Salekhard",
    "country": "Russia",
    "code1": "SLY",
    "code2": "USDD",
    "lat": 66.590753,
    "lng": 66.611042
  },
  {
    "name": "Khanty Mansiysk Airport",
    "city": "Khanty-Mansiysk",
    "country": "Russia",
    "code1": "HMA",
    "code2": "USHH",
    "lat": 61.028479,
    "lng": 69.086067
  },
  {
    "name": "Nyagan Airport",
    "city": "Nyagan",
    "country": "Russia",
    "code1": "NYA",
    "code2": "USHN",
    "lat": 62.11,
    "lng": 65.615
  },
  {
    "name": "Sovetsky Tyumenskaya Airport",
    "city": "Sovetskiy",
    "country": "Russia",
    "code1": "OVS",
    "code2": "USHS",
    "lat": 61.32,
    "lng": 63.6044
  },
  {
    "name": "Izhevsk Airport",
    "city": "Izhevsk",
    "country": "Russia",
    "code1": "IJK",
    "code2": "USII",
    "lat": 56.8281,
    "lng": 53.4575
  },
  {
    "name": "Pobedilovo Airport",
    "city": "Kirov",
    "country": "Russia",
    "code1": "KVX",
    "code2": "USKK",
    "lat": 58.5033,
    "lng": 49.3483
  },
  {
    "name": "Nadym Airport",
    "city": "Nadym",
    "country": "Russia",
    "code1": "NYM",
    "code2": "USMM",
    "lat": 65.4809,
    "lng": 72.6989
  },
  {
    "name": "Raduzhny Airport",
    "city": "Raduzhnyi",
    "country": "Russia",
    "code1": "RAT",
    "code2": "USNR",
    "lat": 62.1586,
    "lng": 77.3289
  },
  {
    "name": "Nefteyugansk Airport",
    "city": "Nefteyugansk",
    "country": "Russia",
    "code1": "NFG",
    "code2": "USRN",
    "lat": 61.1083,
    "lng": 72.65
  },
  {
    "name": "Kurgan Airport",
    "city": "Kurgan",
    "country": "Russia",
    "code1": "KRO",
    "code2": "USUU",
    "lat": 55.4753,
    "lng": 65.4156
  },
  {
    "name": "Khudzhand Airport",
    "city": "Khudzhand",
    "country": "Tajikistan",
    "code1": "LBD",
    "code2": "UTDL",
    "lat": 40.2154,
    "lng": 69.6947
  },
  {
    "name": "Andizhan Airport",
    "city": "Andizhan",
    "country": "Uzbekistan",
    "code1": "AZN",
    "code2": "UTKA",
    "lat": 40.7277,
    "lng": 72.294
  },
  {
    "name": "Fergana Airport",
    "city": "Fergana",
    "country": "Uzbekistan",
    "code1": "FEG",
    "code2": "UTKF",
    "lat": 40.3588,
    "lng": 71.745
  },
  {
    "name": "Namangan Airport",
    "city": "Namangan",
    "country": "Uzbekistan",
    "code1": "NMA",
    "code2": "UTKN",
    "lat": 40.9846,
    "lng": 71.5567
  },
  {
    "name": "Nukus Airport",
    "city": "Nukus",
    "country": "Uzbekistan",
    "code1": "NCU",
    "code2": "UTNN",
    "lat": 42.4884,
    "lng": 59.6233
  },
  {
    "name": "Urgench Airport",
    "city": "Urgench",
    "country": "Uzbekistan",
    "code1": "UGC",
    "code2": "UTNU",
    "lat": 41.5843,
    "lng": 60.6417
  },
  {
    "name": "Karshi Khanabad Airport",
    "city": "Khanabad",
    "country": "Uzbekistan",
    "code1": "KSQ",
    "code2": "UTSL",
    "lat": 38.8336,
    "lng": 65.9215
  },
  {
    "name": "Termez Airport",
    "city": "Termez",
    "country": "Uzbekistan",
    "code1": "TMJ",
    "code2": "UTST",
    "lat": 37.286667,
    "lng": 67.31
  },
  {
    "name": "Staroselye Airport",
    "city": "Rybinsk",
    "country": "Russia",
    "code1": "RYB",
    "code2": "UUBK",
    "lat": 58.1042,
    "lng": 38.9294
  },
  {
    "name": "Belgorod International Airport",
    "city": "Belgorod",
    "country": "Russia",
    "code1": "EGO",
    "code2": "UUOB",
    "lat": 50.6438,
    "lng": 36.5901
  },
  {
    "name": "Kursk East Airport",
    "city": "Kursk",
    "country": "Russia",
    "code1": "URS",
    "code2": "UUOK",
    "lat": 51.7506,
    "lng": 36.2956
  },
  {
    "name": "Lipetsk Airport",
    "city": "Lipetsk",
    "country": "Russia",
    "code1": "LPK",
    "code2": "UUOL",
    "lat": 52.7028,
    "lng": 39.5378
  },
  {
    "name": "Vorkuta Airport",
    "city": "Vorkuta",
    "country": "Russia",
    "code1": "VKT",
    "code2": "UUYW",
    "lat": 67.4886,
    "lng": 63.9931
  },
  {
    "name": "Bugulma Airport",
    "city": "Bugulma",
    "country": "Russia",
    "code1": "UUA",
    "code2": "UWKB",
    "lat": 54.64,
    "lng": 52.8017
  },
  {
    "name": "Yoshkar-Ola Airport",
    "city": "Yoshkar-Ola",
    "country": "Russia",
    "code1": "JOK",
    "code2": "UWKJ",
    "lat": 56.7006,
    "lng": 47.9047
  },
  {
    "name": "Cheboksary Airport",
    "city": "Cheboksary",
    "country": "Russia",
    "code1": "CSY",
    "code2": "UWKS",
    "lat": 56.0903,
    "lng": 47.3473
  },
  {
    "name": "Ulyanovsk East Airport",
    "city": "Ulyanovsk",
    "country": "Russia",
    "code1": "ULY",
    "code2": "UWLW",
    "lat": 54.401,
    "lng": 48.8027
  },
  {
    "name": "Orsk Airport",
    "city": "Orsk",
    "country": "Russia",
    "code1": "OSW",
    "code2": "UWOR",
    "lat": 51.0725,
    "lng": 58.5956
  },
  {
    "name": "Penza Airport",
    "city": "Penza",
    "country": "Russia",
    "code1": "PEZ",
    "code2": "UWPP",
    "lat": 53.1106,
    "lng": 45.0211
  },
  {
    "name": "Saransk Airport",
    "city": "Saransk",
    "country": "Russia",
    "code1": "SKX",
    "code2": "UWPS",
    "lat": 54.1251,
    "lng": 45.2123
  },
  {
    "name": "Balakovo Airport",
    "city": "Balakovo",
    "country": "Russia",
    "code1": "BWO",
    "code2": "UWSB",
    "lat": 51.8583,
    "lng": 47.7456
  },
  {
    "name": "Hubli Airport",
    "city": "Hubli",
    "country": "India",
    "code1": "HBX",
    "code2": "VAHB",
    "lat": 15.3617,
    "lng": 75.0849
  },
  {
    "name": "Koggala Airport",
    "city": "Koggala",
    "country": "Sri Lanka",
    "code1": "KCT",
    "code2": "VCCK",
    "lat": 5.99368,
    "lng": 80.3203
  },
  {
    "name": "Wirawila Airport",
    "city": "Wirawila",
    "country": "Sri Lanka",
    "code1": "WRZ",
    "code2": "VCCW",
    "lat": 6.254494,
    "lng": 81.235189
  },
  {
    "name": "Battambang Airport",
    "city": "Battambang",
    "country": "Cambodia",
    "code1": "BBM",
    "code2": "VDBG",
    "lat": 13.0956,
    "lng": 103.224
  },
  {
    "name": "Shillong Airport",
    "city": "Shillong",
    "country": "India",
    "code1": "SHL",
    "code2": "VEBI",
    "lat": 25.7036,
    "lng": 91.9787
  },
  {
    "name": "Lokpriya Gopinath Bordoloi International Airport",
    "city": "Guwahati",
    "country": "India",
    "code1": "GAU",
    "code2": "VEGT",
    "lat": 26.106092,
    "lng": 91.585939
  },
  {
    "name": "Dimapur Airport",
    "city": "Dimapur",
    "country": "India",
    "code1": "DMU",
    "code2": "VEMR",
    "lat": 25.8839,
    "lng": 93.7711
  },
  {
    "name": "Tezpur Airport",
    "city": "Tezpur",
    "country": "India",
    "code1": "TEZ",
    "code2": "VETZ",
    "lat": 26.7091,
    "lng": 92.7847
  },
  {
    "name": "Barisal Airport",
    "city": "Barisal",
    "country": "Bangladesh",
    "code1": "BZL",
    "code2": "VGBR",
    "lat": 22.801,
    "lng": 90.3012
  },
  {
    "name": "Ban Huoeisay Airport",
    "city": "Huay Xai",
    "country": "Laos",
    "code1": "OUI",
    "code2": "VLHS",
    "lat": 20.2573,
    "lng": 100.437
  },
  {
    "name": "Kontum Airport",
    "city": "Kontum",
    "country": "Vietnam",
    "code1": "KON",
    "code2": "",
    "lat": 14.35,
    "lng": 108.017
  },
  {
    "name": "Bharatpur Airport",
    "city": "Bharatpur",
    "country": "Nepal",
    "code1": "BHR",
    "code2": "VNBP",
    "lat": 27.6781,
    "lng": 84.4294
  },
  {
    "name": "Chandragadhi Airport",
    "city": "Chandragarhi",
    "country": "Nepal",
    "code1": "BDP",
    "code2": "VNCG",
    "lat": 26.570822,
    "lng": 88.079578
  },
  {
    "name": "Meghauli Airport",
    "city": "Meghauli",
    "country": "Nepal",
    "code1": "MEY",
    "code2": "VNMG",
    "lat": 27.583,
    "lng": 84.233
  },
  {
    "name": "Nepalgunj Airport",
    "city": "Nepalgunj",
    "country": "Nepal",
    "code1": "KEP",
    "code2": "VNNG",
    "lat": 28.103633,
    "lng": 81.667006
  },
  {
    "name": "Gan Island Airport",
    "city": "Gan Island",
    "country": "Maldives",
    "code1": "GAN",
    "code2": "VRMG",
    "lat": -0.693342,
    "lng": 73.1556
  },
  {
    "name": "Hanimaadhoo Airport",
    "city": "Haa Dhaalu Atoll",
    "country": "Maldives",
    "code1": "HAQ",
    "code2": "VRMH",
    "lat": 6.74423,
    "lng": 73.1705
  },
  {
    "name": "Kadhdhoo Airport",
    "city": "Laamu Atoll",
    "country": "Maldives",
    "code1": "KDO",
    "code2": "VRMK",
    "lat": 1.85917,
    "lng": 73.5219
  },
  {
    "name": "Mae Sot Airport",
    "city": "Tak",
    "country": "Thailand",
    "code1": "MAQ",
    "code2": "VTPM",
    "lat": 16.699856,
    "lng": 98.545056
  },
  {
    "name": "Buon Ma Thuot Airport",
    "city": "Buonmethuot",
    "country": "Vietnam",
    "code1": "BMV",
    "code2": "VVBM",
    "lat": 12.668311,
    "lng": 108.120272
  },
  {
    "name": "Cat Bi International Airport",
    "city": "Haiphong",
    "country": "Vietnam",
    "code1": "HPH",
    "code2": "VVCI",
    "lat": 20.819386,
    "lng": 106.724989
  },
  {
    "name": "Cam Ranh Airport",
    "city": "Nha Trang",
    "country": "Vietnam",
    "code1": "CXR",
    "code2": "VVCR",
    "lat": 11.998153,
    "lng": 109.219372
  },
  {
    "name": "Co Ong Airport",
    "city": "Conson",
    "country": "Vietnam",
    "code1": "VCS",
    "code2": "VVCS",
    "lat": 8.731831,
    "lng": 106.632589
  },
  {
    "name": "Trà Nóc Airport",
    "city": "Can Tho",
    "country": "Vietnam",
    "code1": "VCA",
    "code2": "VVCT",
    "lat": 10.085119,
    "lng": 105.711922
  },
  {
    "name": "Dien Bien Phu Airport",
    "city": "Dienbienphu",
    "country": "Vietnam",
    "code1": "DIN",
    "code2": "VVDB",
    "lat": 21.397481,
    "lng": 103.007831
  },
  {
    "name": "Phu Cat Airport",
    "city": "Phucat",
    "country": "Vietnam",
    "code1": "UIH",
    "code2": "VVPC",
    "lat": 13.954986,
    "lng": 109.042267
  },
  {
    "name": "Pleiku Airport",
    "city": "Pleiku",
    "country": "Vietnam",
    "code1": "PXU",
    "code2": "VVPK",
    "lat": 14.004522,
    "lng": 108.017158
  },
  {
    "name": "Vinh Airport",
    "city": "Vinh",
    "country": "Vietnam",
    "code1": "VII",
    "code2": "VVVH",
    "lat": 18.737569,
    "lng": 105.670764
  },
  {
    "name": "Banmaw Airport",
    "city": "Banmaw",
    "country": "Burma",
    "code1": "BMO",
    "code2": "VYBM",
    "lat": 24.269033,
    "lng": 97.246153
  },
  {
    "name": "Dawei Airport",
    "city": "Dawei",
    "country": "Burma",
    "code1": "TVY",
    "code2": "VYDW",
    "lat": 14.103886,
    "lng": 98.203636
  },
  {
    "name": "Kawthoung Airport",
    "city": "Kawthoung",
    "country": "Burma",
    "code1": "KAW",
    "code2": "VYKT",
    "lat": 10.049258,
    "lng": 98.538006
  },
  {
    "name": "Loikaw Airport",
    "city": "Loikaw",
    "country": "Burma",
    "code1": "LIW",
    "code2": "VYLK",
    "lat": 19.691494,
    "lng": 97.214825
  },
  {
    "name": "Mawlamyine Airport",
    "city": "Mawlamyine",
    "country": "Burma",
    "code1": "MNU",
    "code2": "VYMM",
    "lat": 16.444747,
    "lng": 97.660669
  },
  {
    "name": "Pathein Airport",
    "city": "Pathein",
    "country": "Burma",
    "code1": "BSX",
    "code2": "VYPN",
    "lat": 16.815233,
    "lng": 94.779911
  },
  {
    "name": "Pakhokku Airport",
    "city": "Pakhokku",
    "country": "Burma",
    "code1": "PKK",
    "code2": "VYPU",
    "lat": 21.3333,
    "lng": 95.1
  },
  {
    "name": "Sumbawa Besar Airport",
    "city": "Sumbawa Island",
    "country": "Indonesia",
    "code1": "SWQ",
    "code2": "WADS",
    "lat": -8.489039,
    "lng": 117.412119
  },
  {
    "name": "Tambolaka Airport",
    "city": "Waikabubak-Sumba Island",
    "country": "Indonesia",
    "code1": "TMC",
    "code2": "WADT",
    "lat": -9.409717,
    "lng": 119.244494
  },
  {
    "name": "Bokondini Airport",
    "city": "Bokondini-Papua Island",
    "country": "Indonesia",
    "code1": "BUI",
    "code2": "WAJB",
    "lat": -3.58365,
    "lng": 138.533
  },
  {
    "name": "Senggeh Airport",
    "city": "Senggeh-Papua Island",
    "country": "Indonesia",
    "code1": "SEH",
    "code2": "WAJS",
    "lat": -3.43333,
    "lng": 140.817
  },
  {
    "name": "Tanjung Harapan Airport",
    "city": "Tanjung Selor-Borneo Island",
    "country": "Indonesia",
    "code1": "TJS",
    "code2": "WALG",
    "lat": 2.83641,
    "lng": 117.374
  },
  {
    "name": "Datadawai Airport",
    "city": "Datadawai-Borneo Island",
    "country": "Indonesia",
    "code1": "DTD",
    "code2": "WALJ",
    "lat": 0.717,
    "lng": 116.483
  },
  {
    "name": "Barau(Kalimaru) Airport",
    "city": "Tanjung Redep-Borneo Island",
    "country": "Indonesia",
    "code1": "BEJ",
    "code2": "WALK",
    "lat": 2.155497,
    "lng": 117.432256
  },
  {
    "name": "Warukin Airport",
    "city": "Tanjung-Borneo Island",
    "country": "Indonesia",
    "code1": "TJG",
    "code2": "WAON",
    "lat": -2.21656,
    "lng": 115.436
  },
  {
    "name": "Sampit(Hasan) Airport",
    "city": "Sampit-Borneo Island",
    "country": "Indonesia",
    "code1": "SMQ",
    "code2": "WAOS",
    "lat": -2.499194,
    "lng": 112.974992
  },
  {
    "name": "Dumatubun Airport",
    "city": "Langgur-Kei Islands",
    "country": "Indonesia",
    "code1": "LUV",
    "code2": "WAPL",
    "lat": -5.661619,
    "lng": 132.731431
  },
  {
    "name": "Mali Airport",
    "city": "Alor Island",
    "country": "Indonesia",
    "code1": "ARD",
    "code2": "WATM",
    "lat": -8.13234,
    "lng": 124.597
  },
  {
    "name": "Belaga Airport",
    "city": "Belaga",
    "country": "Malaysia",
    "code1": "BLG",
    "code2": "WBGC",
    "lat": 2.65,
    "lng": 113.767
  },
  {
    "name": "Long Lellang Airport",
    "city": "Long Datih",
    "country": "Malaysia",
    "code1": "LGL",
    "code2": "WBGF",
    "lat": 3.421,
    "lng": 115.154
  },
  {
    "name": "Long Seridan Airport",
    "city": "Long Seridan",
    "country": "Malaysia",
    "code1": "ODN",
    "code2": "WBGI",
    "lat": 3.967,
    "lng": 115.05
  },
  {
    "name": "Mukah Airport",
    "city": "Mukah",
    "country": "Malaysia",
    "code1": "MKM",
    "code2": "WBGK",
    "lat": 2.90639,
    "lng": 112.08
  },
  {
    "name": "Bakalalan Airport",
    "city": "Bakalalan",
    "country": "Malaysia",
    "code1": "BKM",
    "code2": "WBGQ",
    "lat": 3.974,
    "lng": 115.618
  },
  {
    "name": "Lawas Airport",
    "city": "Lawas",
    "country": "Malaysia",
    "code1": "LWY",
    "code2": "WBGW",
    "lat": 4.84917,
    "lng": 115.408
  },
  {
    "name": "Bario Airport",
    "city": "Bario",
    "country": "Malaysia",
    "code1": "BBN",
    "code2": "WBGZ",
    "lat": 3.73389,
    "lng": 115.479
  },
  {
    "name": "Tomanggong Airport",
    "city": "Tomanggong",
    "country": "Malaysia",
    "code1": "TMG",
    "code2": "WBKM",
    "lat": 5.4,
    "lng": 118.65
  },
  {
    "name": "Kudat Airport",
    "city": "Kudat",
    "country": "Malaysia",
    "code1": "KUD",
    "code2": "WBKT",
    "lat": 6.9225,
    "lng": 116.836
  },
  {
    "name": "Radin Inten II (Branti) Airport",
    "city": "Bandar Lampung-Sumatra Island",
    "country": "Indonesia",
    "code1": "TKG",
    "code2": "WICT",
    "lat": -5.242339,
    "lng": 105.178939
  },
  {
    "name": "Halim Perdanakusuma International Airport",
    "city": "Jakarta",
    "country": "Indonesia",
    "code1": "HLP",
    "code2": "WIHH",
    "lat": -6.26661,
    "lng": 106.891
  },
  {
    "name": "Ranai Airport",
    "city": "Ranai-Natuna Besar Island",
    "country": "Indonesia",
    "code1": "NTX",
    "code2": "WION",
    "lat": 3.908714,
    "lng": 108.387897
  },
  {
    "name": "Pangsuma Airport",
    "city": "Putussibau-Borneo Island",
    "country": "Indonesia",
    "code1": "PSU",
    "code2": "WIOP",
    "lat": 0.835578,
    "lng": 112.937144
  },
  {
    "name": "Susilo Airport",
    "city": "Sintang-Borneo Island",
    "country": "Indonesia",
    "code1": "SQG",
    "code2": "WIOS",
    "lat": 0.063619,
    "lng": 111.473428
  },
  {
    "name": "Pendopo Airport",
    "city": "Talang Gudang-Sumatra Island",
    "country": "Indonesia",
    "code1": "PDO",
    "code2": "WIPQ",
    "lat": -3.286069,
    "lng": 103.8796
  },
  {
    "name": "Malikus Saleh Airport",
    "city": "Lhok Seumawe-Sumatra Island",
    "country": "Indonesia",
    "code1": "LSW",
    "code2": "WITM",
    "lat": 5.226681,
    "lng": 96.950342
  },
  {
    "name": "Pulau Pangkor Airport",
    "city": "Pangkor Island",
    "country": "Malaysia",
    "code1": "PKG",
    "code2": "WMPA",
    "lat": 4.24472,
    "lng": 100.553
  },
  {
    "name": "Stagen Airport",
    "city": "Laut Island",
    "country": "Indonesia",
    "code1": "KBU",
    "code2": "WRBK",
    "lat": -3.29472,
    "lng": 116.165
  },
  {
    "name": "Long Bawan Airport",
    "city": "Long Bawan-Borneo Island",
    "country": "Indonesia",
    "code1": "LBW",
    "code2": "WRLB",
    "lat": 3.867,
    "lng": 115.683
  },
  {
    "name": "Nunukan Airport",
    "city": "Nunukan-Nunukan Island",
    "country": "Indonesia",
    "code1": "NNX",
    "code2": "WRLF",
    "lat": 4.13653,
    "lng": 117.667
  },
  {
    "name": "Long Apung Airport",
    "city": "Long Apung-Borneo Island",
    "country": "Indonesia",
    "code1": "LPU",
    "code2": "WRLP",
    "lat": 0.583,
    "lng": 115.6
  },
  {
    "name": "Albany Airport",
    "city": "Albany",
    "country": "Australia",
    "code1": "ALH",
    "code2": "YABA",
    "lat": -34.9433,
    "lng": 117.809
  },
  {
    "name": "Argyle Airport",
    "city": "Argyle",
    "country": "Australia",
    "code1": "GYL",
    "code2": "YARG",
    "lat": -16.6369,
    "lng": 128.451
  },
  {
    "name": "Aurukun Airport",
    "city": "Aurukun",
    "country": "Australia",
    "code1": "AUU",
    "code2": "YAUR",
    "lat": -13.3539,
    "lng": 141.721
  },
  {
    "name": "Barcaldine Airport",
    "city": "Barcaldine",
    "country": "Australia",
    "code1": "BCI",
    "code2": "YBAR",
    "lat": -23.5653,
    "lng": 145.307
  },
  {
    "name": "Badu Island Airport",
    "city": "Badu Island",
    "country": "Australia",
    "code1": "BDD",
    "code2": "YBAU",
    "lat": -10.15,
    "lng": 141.175
  },
  {
    "name": "Birdsville Airport",
    "city": "Birdsville",
    "country": "Australia",
    "code1": "BVI",
    "code2": "YBDV",
    "lat": -25.8975,
    "lng": 139.348
  },
  {
    "name": "Broken Hill Airport",
    "city": "Broken Hill",
    "country": "Australia",
    "code1": "BHQ",
    "code2": "YBHI",
    "lat": -32.0014,
    "lng": 141.472
  },
  {
    "name": "Hamilton Island Airport",
    "city": "Hamilton Island",
    "country": "Australia",
    "code1": "HTI",
    "code2": "YBHM",
    "lat": -20.3581,
    "lng": 148.952
  },
  {
    "name": "Bedourie Airport",
    "city": "Bedourie",
    "country": "Australia",
    "code1": "BEU",
    "code2": "YBIE",
    "lat": -24.3461,
    "lng": 139.46
  },
  {
    "name": "Bourke Airport",
    "city": "Bourke",
    "country": "Australia",
    "code1": "BRK",
    "code2": "YBKE",
    "lat": -30.0392,
    "lng": 145.952
  },
  {
    "name": "Burketown Airport",
    "city": "Burketown",
    "country": "Australia",
    "code1": "BUC",
    "code2": "YBKT",
    "lat": -17.7486,
    "lng": 139.534
  },
  {
    "name": "Boigu Airport",
    "city": "Boigu",
    "country": "Australia",
    "code1": "GIC",
    "code2": "YBOI",
    "lat": -9.23278,
    "lng": 142.218
  },
  {
    "name": "Oakey Airport",
    "city": "Oakey",
    "country": "Australia",
    "code1": "OKY",
    "code2": "YBOK",
    "lat": -27.411389,
    "lng": 151.735278
  },
  {
    "name": "Boulia Airport",
    "city": "Boulia",
    "country": "Australia",
    "code1": "BQL",
    "code2": "YBOU",
    "lat": -22.9133,
    "lng": 139.9
  },
  {
    "name": "Bathurst Airport",
    "city": "Bathurst",
    "country": "Australia",
    "code1": "BHS",
    "code2": "YBTH",
    "lat": -33.4094,
    "lng": 149.652
  },
  {
    "name": "Blackwater Airport",
    "city": "Blackwater",
    "country": "Australia",
    "code1": "BLT",
    "code2": "YBTR",
    "lat": -23.6031,
    "lng": 148.807
  },
  {
    "name": "Carnarvon Airport",
    "city": "Carnarvon",
    "country": "Australia",
    "code1": "CVQ",
    "code2": "YCAR",
    "lat": -24.8806,
    "lng": 113.672
  },
  {
    "name": "Cobar Airport",
    "city": "Cobar",
    "country": "Australia",
    "code1": "CAZ",
    "code2": "YCBA",
    "lat": -31.5383,
    "lng": 145.794
  },
  {
    "name": "Coober Pedy Airport",
    "city": "Coober Pedy",
    "country": "Australia",
    "code1": "CPD",
    "code2": "YCBP",
    "lat": -29.04,
    "lng": 134.721
  },
  {
    "name": "Coconut Island Airport",
    "city": "Coconut Island",
    "country": "Australia",
    "code1": "CNC",
    "code2": "YCCT",
    "lat": -10.05,
    "lng": 143.07
  },
  {
    "name": "Cloncurry Airport",
    "city": "Cloncurry",
    "country": "Australia",
    "code1": "CNJ",
    "code2": "YCCY",
    "lat": -20.6686,
    "lng": 140.504
  },
  {
    "name": "Ceduna Airport",
    "city": "Ceduna",
    "country": "Australia",
    "code1": "CED",
    "code2": "YCDU",
    "lat": -32.1306,
    "lng": 133.71
  },
  {
    "name": "Cooktown Airport",
    "city": "Cooktown",
    "country": "Australia",
    "code1": "CTN",
    "code2": "YCKN",
    "lat": -15.4447,
    "lng": 145.184
  },
  {
    "name": "Cunnamulla Airport",
    "city": "Cunnamulla",
    "country": "Australia",
    "code1": "CMA",
    "code2": "YCMU",
    "lat": -28.03,
    "lng": 145.622
  },
  {
    "name": "Coonamble Airport",
    "city": "Coonamble",
    "country": "Australia",
    "code1": "CNB",
    "code2": "YCNM",
    "lat": -30.9833,
    "lng": 148.376
  },
  {
    "name": "Coen Airport",
    "city": "Coen",
    "country": "Australia",
    "code1": "CUQ",
    "code2": "YCOE",
    "lat": -13.7608,
    "lng": 143.114
  },
  {
    "name": "Cooma Snowy Mountains Airport",
    "city": "Cooma",
    "country": "Australia",
    "code1": "OOM",
    "code2": "YCOM",
    "lat": -36.3006,
    "lng": 148.974
  },
  {
    "name": "Doomadgee Airport",
    "city": "Doomadgee",
    "country": "Australia",
    "code1": "DMD",
    "code2": "YDMG",
    "lat": -17.9403,
    "lng": 138.822
  },
  {
    "name": "Darnley Island Airport",
    "city": "Darnley Island",
    "country": "Australia",
    "code1": "NLF",
    "code2": "YDNI",
    "lat": -9.58333,
    "lng": 143.767
  },
  {
    "name": "Devonport Airport",
    "city": "Devonport",
    "country": "Australia",
    "code1": "DPO",
    "code2": "YDPO",
    "lat": -41.1697,
    "lng": 146.43
  },
  {
    "name": "Elcho Island Airport",
    "city": "Elcho Island",
    "country": "Australia",
    "code1": "ELC",
    "code2": "YELD",
    "lat": -12.0194,
    "lng": 135.571
  },
  {
    "name": "Esperance Airport",
    "city": "Esperance",
    "country": "Australia",
    "code1": "EPR",
    "code2": "YESP",
    "lat": -33.6844,
    "lng": 121.823
  },
  {
    "name": "Flinders Island Airport",
    "city": "Flinders Island",
    "country": "Australia",
    "code1": "FLS",
    "code2": "YFLI",
    "lat": -40.0917,
    "lng": 147.993
  },
  {
    "name": "Geraldton Airport",
    "city": "Geraldton",
    "country": "Australia",
    "code1": "GET",
    "code2": "YGEL",
    "lat": -28.7961,
    "lng": 114.707
  },
  {
    "name": "Gladstone Airport",
    "city": "Gladstone",
    "country": "Australia",
    "code1": "GLT",
    "code2": "YGLA",
    "lat": -23.8697,
    "lng": 151.223
  },
  {
    "name": "Groote Eylandt Airport",
    "city": "Groote Eylandt",
    "country": "Australia",
    "code1": "GTE",
    "code2": "YGTE",
    "lat": -13.975,
    "lng": 136.46
  },
  {
    "name": "Griffith Airport",
    "city": "Griffith",
    "country": "Australia",
    "code1": "GFF",
    "code2": "YGTH",
    "lat": -34.2508,
    "lng": 146.067
  },
  {
    "name": "Horn Island Airport",
    "city": "Horn Island",
    "country": "Australia",
    "code1": "HID",
    "code2": "YHID",
    "lat": -10.5864,
    "lng": 142.29
  },
  {
    "name": "Hooker Creek Airport",
    "city": "Hooker Creek",
    "country": "Australia",
    "code1": "HOK",
    "code2": "YHOO",
    "lat": -18.3367,
    "lng": 130.638
  },
  {
    "name": "Mount Hotham Airport",
    "city": "Mount Hotham",
    "country": "Australia",
    "code1": "MHU",
    "code2": "YHOT",
    "lat": -37.0475,
    "lng": 147.334
  },
  {
    "name": "Hughenden Airport",
    "city": "Hughenden",
    "country": "Australia",
    "code1": "HGD",
    "code2": "YHUG",
    "lat": -20.815,
    "lng": 144.225
  },
  {
    "name": "Julia Creek Airport",
    "city": "Julia Creek",
    "country": "Australia",
    "code1": "JCK",
    "code2": "YJLC",
    "lat": -20.6683,
    "lng": 141.723
  },
  {
    "name": "Kalbarri Airport",
    "city": "Kalbarri",
    "country": "Australia",
    "code1": "KAX",
    "code2": "YKBR",
    "lat": -27.69,
    "lng": 114.262
  },
  {
    "name": "King Island Airport",
    "city": "King Island",
    "country": "Australia",
    "code1": "KNS",
    "code2": "YKII",
    "lat": -39.8775,
    "lng": 143.878
  },
  {
    "name": "Kalkgurung Airport",
    "city": "Kalkgurung",
    "country": "Australia",
    "code1": "KFG",
    "code2": "YKKG",
    "lat": -17.4319,
    "lng": 130.808
  },
  {
    "name": "Karumba Airport",
    "city": "Karumba",
    "country": "Australia",
    "code1": "KRB",
    "code2": "YKMB",
    "lat": -17.4567,
    "lng": 140.83
  },
  {
    "name": "Kowanyama Airport",
    "city": "Kowanyama",
    "country": "Australia",
    "code1": "KWM",
    "code2": "YKOW",
    "lat": -15.4856,
    "lng": 141.751
  },
  {
    "name": "Kubin Airport",
    "city": "Kubin",
    "country": "Australia",
    "code1": "KUG",
    "code2": "YKUB",
    "lat": -10.225,
    "lng": 142.218
  },
  {
    "name": "Leonora Airport",
    "city": "Leonora",
    "country": "Australia",
    "code1": "LNO",
    "code2": "YLEO",
    "lat": -28.8781,
    "lng": 121.315
  },
  {
    "name": "Lake Evella Airport",
    "city": "Lake Evella",
    "country": "Australia",
    "code1": "LEL",
    "code2": "YLEV",
    "lat": -12.4989,
    "lng": 135.806
  },
  {
    "name": "Lord Howe Island Airport",
    "city": "Lord Howe Island",
    "country": "Australia",
    "code1": "LDH",
    "code2": "YLHI",
    "lat": -31.5383,
    "lng": 159.077
  },
  {
    "name": "Lockhart River Airport",
    "city": "Lockhart River",
    "country": "Australia",
    "code1": "IRG",
    "code2": "YLHR",
    "lat": -12.7869,
    "lng": 143.305
  },
  {
    "name": "Lismore Airport",
    "city": "Lismore",
    "country": "Australia",
    "code1": "LSY",
    "code2": "YLIS",
    "lat": -28.8303,
    "lng": 153.26
  },
  {
    "name": "Lightning Ridge Airport",
    "city": "Lightning Ridge",
    "country": "Australia",
    "code1": "LHG",
    "code2": "YLRD",
    "lat": -29.4567,
    "lng": 147.984
  },
  {
    "name": "Longreach Airport",
    "city": "Longreach",
    "country": "Australia",
    "code1": "LRE",
    "code2": "YLRE",
    "lat": -23.4342,
    "lng": 144.28
  },
  {
    "name": "Leinster Airport",
    "city": "Leinster",
    "country": "Australia",
    "code1": "LER",
    "code2": "YLST",
    "lat": -27.8433,
    "lng": 120.703
  },
  {
    "name": "Laverton Airport",
    "city": "Laverton",
    "country": "Australia",
    "code1": "LVO",
    "code2": "YLTN",
    "lat": -28.6136,
    "lng": 122.424
  },
  {
    "name": "Mabuiag Island Airport",
    "city": "Mabuiag Island",
    "country": "Australia",
    "code1": "UBB",
    "code2": "YMAA",
    "lat": -9.95,
    "lng": 142.183
  },
  {
    "name": "Meekatharra Airport",
    "city": "Meekatharra",
    "country": "Australia",
    "code1": "MKR",
    "code2": "YMEK",
    "lat": -26.6117,
    "lng": 118.548
  },
  {
    "name": "Merimbula Airport",
    "city": "Merimbula",
    "country": "Australia",
    "code1": "MIM",
    "code2": "YMER",
    "lat": -36.9086,
    "lng": 149.901
  },
  {
    "name": "Milingimbi Airport",
    "city": "Milingimbi",
    "country": "Australia",
    "code1": "MGT",
    "code2": "YMGB",
    "lat": -12.0944,
    "lng": 134.894
  },
  {
    "name": "Maningrida Airport",
    "city": "Maningrida",
    "country": "Australia",
    "code1": "MNG",
    "code2": "YMGD",
    "lat": -12.0561,
    "lng": 134.234
  },
  {
    "name": "McArthur River Mine Airport",
    "city": "McArthur River Mine",
    "country": "Australia",
    "code1": "MCV",
    "code2": "YMHU",
    "lat": -16.4425,
    "lng": 136.084
  },
  {
    "name": "Mildura Airport",
    "city": "Mildura",
    "country": "Australia",
    "code1": "MQL",
    "code2": "YMIA",
    "lat": -34.2292,
    "lng": 142.086
  },
  {
    "name": "Mount Magnet Airport",
    "city": "Mount Magnet",
    "country": "Australia",
    "code1": "MMG",
    "code2": "YMOG",
    "lat": -28.1161,
    "lng": 117.842
  },
  {
    "name": "Moree Airport",
    "city": "Moree",
    "country": "Australia",
    "code1": "MRZ",
    "code2": "YMOR",
    "lat": -29.4989,
    "lng": 149.845
  },
  {
    "name": "Moranbah Airport",
    "city": "Moranbah",
    "country": "Australia",
    "code1": "MOV",
    "code2": "YMRB",
    "lat": -22.0578,
    "lng": 148.077
  },
  {
    "name": "Moruya Airport",
    "city": "Moruya",
    "country": "Australia",
    "code1": "MYA",
    "code2": "YMRY",
    "lat": -35.8978,
    "lng": 150.144
  },
  {
    "name": "Mount Gambier Airport",
    "city": "Mount Gambier",
    "country": "Australia",
    "code1": "MGB",
    "code2": "YMTG",
    "lat": -37.7456,
    "lng": 140.785
  },
  {
    "name": "Mornington Island Airport",
    "city": "Mornington Island",
    "country": "Australia",
    "code1": "ONG",
    "code2": "YMTI",
    "lat": -16.6625,
    "lng": 139.178
  },
  {
    "name": "Murray Island Airport",
    "city": "Murray Island",
    "country": "Australia",
    "code1": "MYI",
    "code2": "YMUI",
    "lat": -9.91667,
    "lng": 144.055
  },
  {
    "name": "Maryborough Airport",
    "city": "Maryborough",
    "country": "Australia",
    "code1": "MBH",
    "code2": "YMYB",
    "lat": -25.5133,
    "lng": 152.715
  },
  {
    "name": "Narrandera Airport",
    "city": "Narrandera",
    "country": "Australia",
    "code1": "NRA",
    "code2": "YNAR",
    "lat": -34.7022,
    "lng": 146.512
  },
  {
    "name": "Narrabri Airport",
    "city": "Narrabri",
    "country": "Australia",
    "code1": "NAA",
    "code2": "YNBR",
    "lat": -30.3192,
    "lng": 149.827
  },
  {
    "name": "Normanton Airport",
    "city": "Normanton",
    "country": "Australia",
    "code1": "NTN",
    "code2": "YNTN",
    "lat": -17.6836,
    "lng": 141.07
  },
  {
    "name": "Newman Airport",
    "city": "Newman",
    "country": "Australia",
    "code1": "ZNE",
    "code2": "YNWN",
    "lat": -23.4178,
    "lng": 119.803
  },
  {
    "name": "Olympic Dam Airport",
    "city": "Olympic Dam",
    "country": "Australia",
    "code1": "OLP",
    "code2": "YOLD",
    "lat": -30.485,
    "lng": 136.877
  },
  {
    "name": "Port Augusta Airport",
    "city": "Argyle",
    "country": "Australia",
    "code1": "PUG",
    "code2": "YPAG",
    "lat": -32.506944,
    "lng": 137.716667
  },
  {
    "name": "Palm Island Airport",
    "city": "Palm Island",
    "country": "Australia",
    "code1": "PMK",
    "code2": "YPAM",
    "lat": -18.7553,
    "lng": 146.581
  },
  {
    "name": "Paraburdoo Airport",
    "city": "Paraburdoo",
    "country": "Australia",
    "code1": "PBO",
    "code2": "YPBO",
    "lat": -23.1711,
    "lng": 117.745
  },
  {
    "name": "Cocos Keeling Island Airport",
    "city": "Cocos Keeling Island",
    "country": "Cocos (Keeling) Islands",
    "code1": "CCK",
    "code2": "YPCC",
    "lat": -12.1883,
    "lng": 96.8339
  },
  {
    "name": "Gove Airport",
    "city": "Gove",
    "country": "Australia",
    "code1": "GOV",
    "code2": "YPGV",
    "lat": -12.2694,
    "lng": 136.818
  },
  {
    "name": "Parkes Airport",
    "city": "Parkes",
    "country": "Australia",
    "code1": "PKE",
    "code2": "YPKS",
    "lat": -33.1314,
    "lng": 148.239
  },
  {
    "name": "Port Lincoln Airport",
    "city": "Port Lincoln",
    "country": "Australia",
    "code1": "PLO",
    "code2": "YPLC",
    "lat": -34.6053,
    "lng": 135.88
  },
  {
    "name": "Pormpuraaw Airport",
    "city": "Pormpuraaw",
    "country": "Australia",
    "code1": "EDR",
    "code2": "YPMP",
    "lat": -14.8967,
    "lng": 141.609
  },
  {
    "name": "Port Macquarie Airport",
    "city": "Port Macquarie",
    "country": "Australia",
    "code1": "PQQ",
    "code2": "YPMQ",
    "lat": -31.4358,
    "lng": 152.863
  },
  {
    "name": "Portland Airport",
    "city": "Portland",
    "country": "Australia",
    "code1": "PTJ",
    "code2": "YPOD",
    "lat": -38.3181,
    "lng": 141.471
  },
  {
    "name": "Quilpie Airport",
    "city": "Quilpie",
    "country": "Australia",
    "code1": "ULP",
    "code2": "YQLP",
    "lat": -26.6122,
    "lng": 144.253
  },
  {
    "name": "Ramingining Airport",
    "city": "Ramingining",
    "country": "Australia",
    "code1": "RAM",
    "code2": "YRNG",
    "lat": -12.3564,
    "lng": 134.898
  },
  {
    "name": "Roma Airport",
    "city": "Roma",
    "country": "Australia",
    "code1": "RMA",
    "code2": "YROM",
    "lat": -26.545,
    "lng": 148.775
  },
  {
    "name": "St George Airport",
    "city": "St George",
    "country": "Australia",
    "code1": "SGO",
    "code2": "YSGE",
    "lat": -28.0497,
    "lng": 148.595
  },
  {
    "name": "Shark Bay Airport",
    "city": "Shark Bay",
    "country": "Australia",
    "code1": "MJK",
    "code2": "YSHK",
    "lat": -25.8939,
    "lng": 113.577
  },
  {
    "name": "Saibai Island Airport",
    "city": "Saibai Island",
    "country": "Australia",
    "code1": "SBR",
    "code2": "YSII",
    "lat": -9.37833,
    "lng": 142.625
  },
  {
    "name": "Strahan Airport",
    "city": "Strahan",
    "country": "Australia",
    "code1": "SRN",
    "code2": "YSRN",
    "lat": -42.155,
    "lng": 145.292
  },
  {
    "name": "Thargomindah Airport",
    "city": "Thargomindah",
    "country": "Australia",
    "code1": "XTG",
    "code2": "YTGM",
    "lat": -27.9864,
    "lng": 143.811
  },
  {
    "name": "Tennant Creek Airport",
    "city": "Tennant Creek",
    "country": "Australia",
    "code1": "TCA",
    "code2": "YTNK",
    "lat": -19.6344,
    "lng": 134.183
  },
  {
    "name": "Victoria River Downs Airport",
    "city": "Victoria River Downs",
    "country": "Australia",
    "code1": "VCD",
    "code2": "YVRD",
    "lat": -16.4033,
    "lng": 131.002
  },
  {
    "name": "Warraber Island Airport",
    "city": "Sue Islet",
    "country": "Australia",
    "code1": "SYU",
    "code2": "YWBS",
    "lat": -10.2083,
    "lng": 142.825
  },
  {
    "name": "Windorah Airport",
    "city": "Windorah",
    "country": "Australia",
    "code1": "WNR",
    "code2": "YWDH",
    "lat": -25.4131,
    "lng": 142.667
  },
  {
    "name": "Whyalla Airport",
    "city": "Whyalla",
    "country": "Australia",
    "code1": "WYA",
    "code2": "YWHA",
    "lat": -33.0589,
    "lng": 137.514
  },
  {
    "name": "Wiluna Airport",
    "city": "Wiluna",
    "country": "Australia",
    "code1": "WUN",
    "code2": "YWLU",
    "lat": -26.6292,
    "lng": 120.221
  },
  {
    "name": "Wollongong Airport",
    "city": "Wollongong",
    "country": "Australia",
    "code1": "WOL",
    "code2": "YWOL",
    "lat": -34.5611,
    "lng": 150.789
  },
  {
    "name": "Winton Airport",
    "city": "Winton",
    "country": "Australia",
    "code1": "WIN",
    "code2": "YWTN",
    "lat": -22.3636,
    "lng": 143.086
  },
  {
    "name": "Wynyard Airport",
    "city": "Burnie",
    "country": "Australia",
    "code1": "BWT",
    "code2": "YWYY",
    "lat": -40.9989,
    "lng": 145.731
  },
  {
    "name": "Yorke Island Airport",
    "city": "Yorke Island",
    "country": "Australia",
    "code1": "OKR",
    "code2": "YYKI",
    "lat": -9.75703,
    "lng": 143.411
  },
  {
    "name": "Yam Island Airport",
    "city": "Yam Island",
    "country": "Australia",
    "code1": "XMY",
    "code2": "YYMI",
    "lat": -9.90111,
    "lng": 142.776
  },
  {
    "name": "Beijing Nanyuan Airport",
    "city": "Beijing",
    "country": "China",
    "code1": "NAY",
    "code2": "ZBBB",
    "lat": 39.7825,
    "lng": 116.387778
  },
  {
    "name": "Chifeng Airport",
    "city": "Chifeng",
    "country": "China",
    "code1": "CIF",
    "code2": "ZBCF",
    "lat": 42.235,
    "lng": 118.908
  },
  {
    "name": "Changzhi Airport",
    "city": "Changzhi",
    "country": "China",
    "code1": "CIH",
    "code2": "ZBCZ",
    "lat": 36.2475,
    "lng": 113.126
  },
  {
    "name": "Datong Airport",
    "city": "Datong",
    "country": "China",
    "code1": "DAT",
    "code2": "ZBDT",
    "lat": 40.0603,
    "lng": 113.482
  },
  {
    "name": "Baita Airport",
    "city": "Hohhot",
    "country": "China",
    "code1": "HET",
    "code2": "ZBHH",
    "lat": 40.851422,
    "lng": 111.824103
  },
  {
    "name": "Baotou Airport",
    "city": "Baotou",
    "country": "China",
    "code1": "BAV",
    "code2": "ZBOW",
    "lat": 40.56,
    "lng": 109.997
  },
  {
    "name": "Shijiazhuang Daguocun International Airport",
    "city": "Shijiazhuang",
    "country": "China",
    "code1": "SJW",
    "code2": "ZBSJ",
    "lat": 38.280686,
    "lng": 114.6973
  },
  {
    "name": "Tongliao Airport",
    "city": "Tongliao",
    "country": "China",
    "code1": "TGO",
    "code2": "ZBTL",
    "lat": 43.5567,
    "lng": 122.2
  },
  {
    "name": "Ulanhot Airport",
    "city": "Ulanhot",
    "country": "China",
    "code1": "HLH",
    "code2": "ZBUL",
    "lat": 46.083,
    "lng": 122.017
  },
  {
    "name": "Xilinhot Airport",
    "city": "Xilinhot",
    "country": "China",
    "code1": "XIL",
    "code2": "ZBXH",
    "lat": 43.9156,
    "lng": 115.964
  },
  {
    "name": "Beihai Airport",
    "city": "Beihai",
    "country": "China",
    "code1": "BHY",
    "code2": "ZGBH",
    "lat": 21.5394,
    "lng": 109.294
  },
  {
    "name": "Changde Airport",
    "city": "Changde",
    "country": "China",
    "code1": "CGD",
    "code2": "ZGCD",
    "lat": 28.9189,
    "lng": 111.64
  },
  {
    "name": "Dayong Airport",
    "city": "Dayong",
    "country": "China",
    "code1": "DYG",
    "code2": "ZGDY",
    "lat": 29.1028,
    "lng": 110.443
  },
  {
    "name": "Meixian Airport",
    "city": "Meixian",
    "country": "China",
    "code1": "MXZ",
    "code2": "ZGMX",
    "lat": 24.35,
    "lng": 116.133
  },
  {
    "name": "Zhuhai Airport",
    "city": "Zhuhai",
    "country": "China",
    "code1": "ZUH",
    "code2": "ZGSD",
    "lat": 22.0064,
    "lng": 113.376
  },
  {
    "name": "Bailian Airport",
    "city": "Liuzhou",
    "country": "China",
    "code1": "LZH",
    "code2": "ZGZH",
    "lat": 24.2075,
    "lng": 109.391
  },
  {
    "name": "Zhanjiang Airport",
    "city": "Zhanjiang",
    "country": "China",
    "code1": "ZHA",
    "code2": "ZGZJ",
    "lat": 21.2144,
    "lng": 110.358
  },
  {
    "name": "Enshi Airport",
    "city": "Enshi",
    "country": "China",
    "code1": "ENH",
    "code2": "ZHES",
    "lat": 30.3203,
    "lng": 109.485
  },
  {
    "name": "Nanyang Airport",
    "city": "Nanyang",
    "country": "China",
    "code1": "NNY",
    "code2": "ZHNY",
    "lat": 32.9808,
    "lng": 112.615
  },
  {
    "name": "Xiangfan Airport",
    "city": "Xiangfan",
    "country": "China",
    "code1": "XFN",
    "code2": "ZHXF",
    "lat": 32.1506,
    "lng": 112.291
  },
  {
    "name": "Yichang Airport",
    "city": "Yichang",
    "country": "China",
    "code1": "YIH",
    "code2": "ZHYC",
    "lat": 30.671,
    "lng": 111.441
  },
  {
    "name": "Ankang Airport",
    "city": "Ankang",
    "country": "China",
    "code1": "AKA",
    "code2": "ZLAK",
    "lat": 32.7081,
    "lng": 108.931
  },
  {
    "name": "Golmud Airport",
    "city": "Golmud",
    "country": "China",
    "code1": "GOQ",
    "code2": "ZLGM",
    "lat": 34.633,
    "lng": 98.867
  },
  {
    "name": "Hanzhong Airport",
    "city": "Hanzhong",
    "country": "China",
    "code1": "HZG",
    "code2": "ZLHZ",
    "lat": 33.0636,
    "lng": 107.008
  },
  {
    "name": "Qingyang Airport",
    "city": "Qingyang",
    "country": "China",
    "code1": "IQN",
    "code2": "ZLQY",
    "lat": 35.7997,
    "lng": 107.603
  },
  {
    "name": "Xining Caojiabu Airport",
    "city": "Xining",
    "country": "China",
    "code1": "XNN",
    "code2": "ZLXN",
    "lat": 36.5275,
    "lng": 102.043
  },
  {
    "name": "Yan'an Airport",
    "city": "Yan'an",
    "country": "China",
    "code1": "ENY",
    "code2": "ZLYA",
    "lat": 36.6369,
    "lng": 109.554
  },
  {
    "name": "Yulin Airport",
    "city": "Yulin",
    "country": "China",
    "code1": "UYN",
    "code2": "ZLYL",
    "lat": 38.2692,
    "lng": 109.731
  },
  {
    "name": "Arvaikheer Airport",
    "city": "Arvaikheer",
    "country": "Mongolia",
    "code1": "AVK",
    "code2": "ZMAH",
    "lat": 46.2503,
    "lng": 102.802
  },
  {
    "name": "Altai Airport",
    "city": "Altai",
    "country": "Mongolia",
    "code1": "LTI",
    "code2": "ZMAT",
    "lat": 46.3764,
    "lng": 96.2211
  },
  {
    "name": "Bayankhongor Airport",
    "city": "Bayankhongor",
    "country": "Mongolia",
    "code1": "BYN",
    "code2": "ZMBH",
    "lat": 46.1633,
    "lng": 100.704
  },
  {
    "name": "Dalanzadgad Airport",
    "city": "Dalanzadgad",
    "country": "Mongolia",
    "code1": "DLZ",
    "code2": "ZMDZ",
    "lat": 43.5917,
    "lng": 104.43
  },
  {
    "name": "Khovd Airport",
    "city": "Khovd",
    "country": "Mongolia",
    "code1": "HVD",
    "code2": "ZMKD",
    "lat": 47.9541,
    "lng": 91.6282
  },
  {
    "name": "Muren Airport",
    "city": "Muren",
    "country": "Mongolia",
    "code1": "MXV",
    "code2": "ZMMN",
    "lat": 49.6633,
    "lng": 100.099
  },
  {
    "name": "Diqing Airport",
    "city": "Shangri-La",
    "country": "China",
    "code1": "DIG",
    "code2": "ZPDQ",
    "lat": 27.7936,
    "lng": 99.6772
  },
  {
    "name": "Mangshi Airport",
    "city": "Luxi",
    "country": "China",
    "code1": "LUM",
    "code2": "ZPLX",
    "lat": 24.4011,
    "lng": 98.5317
  },
  {
    "name": "Simao Airport",
    "city": "Simao",
    "country": "China",
    "code1": "SYM",
    "code2": "ZPSM",
    "lat": 22.7933,
    "lng": 100.959
  },
  {
    "name": "Zhaotong Airport",
    "city": "Zhaotong",
    "country": "China",
    "code1": "ZAT",
    "code2": "ZPZT",
    "lat": 27.3256,
    "lng": 103.755
  },
  {
    "name": "Ganzhou Airport",
    "city": "Ganzhou",
    "country": "China",
    "code1": "KOW",
    "code2": "ZSGZ",
    "lat": 25.8258,
    "lng": 114.912
  },
  {
    "name": "Jingdezhen Airport",
    "city": "Jingdezhen",
    "country": "China",
    "code1": "JDZ",
    "code2": "ZSJD",
    "lat": 29.3386,
    "lng": 117.176
  },
  {
    "name": "Jiujiang Lushan Airport",
    "city": "Jiujiang",
    "country": "China",
    "code1": "JIU",
    "code2": "ZSJJ",
    "lat": 29.733,
    "lng": 115.983
  },
  {
    "name": "Quzhou Airport",
    "city": "Quzhou",
    "country": "China",
    "code1": "JUZ",
    "code2": "ZSJU",
    "lat": 28.9658,
    "lng": 118.899
  },
  {
    "name": "Lianyungang Airport",
    "city": "Lianyungang",
    "country": "China",
    "code1": "LYG",
    "code2": "ZSLG",
    "lat": 34.55,
    "lng": 119.25
  },
  {
    "name": "Huangyan Luqiao Airport",
    "city": "Huangyan",
    "country": "China",
    "code1": "HYN",
    "code2": "ZSLQ",
    "lat": 28.5622,
    "lng": 121.429
  },
  {
    "name": "Shubuling Airport",
    "city": "Linyi",
    "country": "China",
    "code1": "LYI",
    "code2": "ZSLY",
    "lat": 35.0461,
    "lng": 118.412
  },
  {
    "name": "Quanzhou Airport",
    "city": "Quanzhou",
    "country": "China",
    "code1": "JJN",
    "code2": "ZSQZ",
    "lat": 24.7964,
    "lng": 118.59
  },
  {
    "name": "Tunxi International Airport",
    "city": "Huangshan",
    "country": "China",
    "code1": "TXN",
    "code2": "ZSTX",
    "lat": 29.7333,
    "lng": 118.256
  },
  {
    "name": "Weifang Airport",
    "city": "Weifang",
    "country": "China",
    "code1": "WEF",
    "code2": "ZSWF",
    "lat": 36.6467,
    "lng": 119.119
  },
  {
    "name": "Weihai Airport",
    "city": "Weihai",
    "country": "China",
    "code1": "WEH",
    "code2": "ZSWH",
    "lat": 37.1871,
    "lng": 122.229
  },
  {
    "name": "Wuxi Airport",
    "city": "Wuxi",
    "country": "China",
    "code1": "WUX",
    "code2": "ZSWX",
    "lat": 31.4944,
    "lng": 120.429
  },
  {
    "name": "Nanping Wuyishan Airport",
    "city": "Wuyishan",
    "country": "China",
    "code1": "WUS",
    "code2": "ZSWY",
    "lat": 27.7019,
    "lng": 118.001
  },
  {
    "name": "Wenzhou Yongqiang Airport",
    "city": "Wenzhou",
    "country": "China",
    "code1": "WNZ",
    "code2": "ZSWZ",
    "lat": 27.9122,
    "lng": 120.852
  },
  {
    "name": "Yancheng Airport",
    "city": "Yancheng",
    "country": "China",
    "code1": "YNZ",
    "code2": "ZSYN",
    "lat": 33.3856,
    "lng": 120.125
  },
  {
    "name": "Yiwu Airport",
    "city": "Yiwu",
    "country": "China",
    "code1": "YIW",
    "code2": "ZSYW",
    "lat": 29.3447,
    "lng": 120.032
  },
  {
    "name": "Zhoushan Airport",
    "city": "Zhoushan",
    "country": "China",
    "code1": "HSN",
    "code2": "ZSZS",
    "lat": 29.9342,
    "lng": 122.362
  },
  {
    "name": "Qamdo Bangda Airport",
    "city": "Bangda",
    "country": "China",
    "code1": "BPX",
    "code2": "ZUBD",
    "lat": 30.5536,
    "lng": 97.1083
  },
  {
    "name": "Dachuan Airport",
    "city": "Dazhou",
    "country": "China",
    "code1": "DAX",
    "code2": "ZUDX",
    "lat": 31.3,
    "lng": 107.5
  },
  {
    "name": "Guangyuan Airport",
    "city": "Guangyuan",
    "country": "China",
    "code1": "GYS",
    "code2": "ZUGU",
    "lat": 32.3911,
    "lng": 105.702
  },
  {
    "name": "Luzhou Airport",
    "city": "Luzhou",
    "country": "China",
    "code1": "LZO",
    "code2": "ZULZ",
    "lat": 28.8522,
    "lng": 105.393
  },
  {
    "name": "Mianyang Airport",
    "city": "Mianyang",
    "country": "China",
    "code1": "MIG",
    "code2": "ZUMY",
    "lat": 31.4281,
    "lng": 104.741
  },
  {
    "name": "Nanchong Airport",
    "city": "Nanchong",
    "country": "China",
    "code1": "NAO",
    "code2": "ZUNC",
    "lat": 30.754,
    "lng": 106.062
  },
  {
    "name": "Nyingchi Airport",
    "city": "Nyingchi",
    "country": "China",
    "code1": "LZY",
    "code2": "ZUNZ",
    "lat": 29.3033,
    "lng": 94.3353
  },
  {
    "name": "Wanxian Airport",
    "city": "Wanxian",
    "country": "China",
    "code1": "WXN",
    "code2": "ZUWX",
    "lat": 30.8361,
    "lng": 108.406
  },
  {
    "name": "Aksu Airport",
    "city": "Aksu",
    "country": "China",
    "code1": "AKU",
    "code2": "ZWAK",
    "lat": 41.2625,
    "lng": 80.2917
  },
  {
    "name": "Qiemo Airport",
    "city": "Qiemo",
    "country": "China",
    "code1": "IQM",
    "code2": "ZWCM",
    "lat": 38.1494,
    "lng": 85.5328
  },
  {
    "name": "Kuqa Airport",
    "city": "Kuqa",
    "country": "China",
    "code1": "KCA",
    "code2": "ZWKC",
    "lat": 41.7181,
    "lng": 82.9869
  },
  {
    "name": "Korla Airport",
    "city": "Korla",
    "country": "China",
    "code1": "KRL",
    "code2": "ZWKL",
    "lat": 41.6978,
    "lng": 86.1289
  },
  {
    "name": "Karamay Airport",
    "city": "Karamay",
    "country": "China",
    "code1": "KRY",
    "code2": "ZWKM",
    "lat": 45.617,
    "lng": 84.883
  },
  {
    "name": "Yining Airport",
    "city": "Yining",
    "country": "China",
    "code1": "YIN",
    "code2": "ZWYN",
    "lat": 43.9558,
    "lng": 81.3303
  },
  {
    "name": "Heihe Airport",
    "city": "Heihe",
    "country": "China",
    "code1": "HEK",
    "code2": "ZYHE",
    "lat": 50.25,
    "lng": 127.3
  },
  {
    "name": "Jiamusi Airport",
    "city": "Jiamusi",
    "country": "China",
    "code1": "JMU",
    "code2": "ZYJM",
    "lat": 46.843394,
    "lng": 130.465389
  },
  {
    "name": "Jinzhou Airport",
    "city": "Jinzhou",
    "country": "China",
    "code1": "JNZ",
    "code2": "ZYJZ",
    "lat": 41.1014,
    "lng": 121.062
  },
  {
    "name": "Qiqihar Sanjiazi Airport",
    "city": "Qiqihar",
    "country": "China",
    "code1": "NDG",
    "code2": "ZYQQ",
    "lat": 47.239628,
    "lng": 123.918131
  },
  {
    "name": "Yanji Airport",
    "city": "Yanji",
    "country": "China",
    "code1": "YNJ",
    "code2": "ZYYJ",
    "lat": 42.8828,
    "lng": 129.451258
  },
  {
    "name": "Valletta Sea Plane Terminal",
    "city": "Valletta",
    "country": "Malta",
    "code1": "",
    "code2": "\\N",
    "lat": 35.888863,
    "lng": 14.508417
  },
  {
    "name": "Gozo Sea Plane Terminal",
    "city": "Mgarr",
    "country": "Malta",
    "code1": "",
    "code2": "\\N",
    "lat": 36.026389,
    "lng": 14.298333
  },
  {
    "name": "Mount Keith",
    "city": "Mount Keith",
    "country": "Australia",
    "code1": "WME",
    "code2": "YMNE",
    "lat": -27.286389,
    "lng": 120.554722
  },
  {
    "name": "Gran Roque Airport",
    "city": "Los Roques",
    "country": "Venezuela",
    "code1": "LRV",
    "code2": "SVRS",
    "lat": 11.95,
    "lng": -66.67
  },
  {
    "name": "Inishmore Airport",
    "city": "Inis Mor",
    "country": "Ireland",
    "code1": "IOR",
    "code2": "EIIM",
    "lat": 53.1067,
    "lng": -9.65361
  },
  {
    "name": "Connemara Regional Airport",
    "city": "Indreabhan",
    "country": "Ireland",
    "code1": "NNR",
    "code2": "EICA",
    "lat": 53.2303,
    "lng": -9.46778
  },
  {
    "name": "Guettin MecklenburgVorpommern Germany",
    "city": "Ruegen",
    "country": "Germany",
    "code1": "GTI",
    "code2": "EDCG",
    "lat": 54.383333,
    "lng": 13.325278
  },
  {
    "name": "Berezovo",
    "city": "Berezovo",
    "country": "Russia",
    "code1": "NBB",
    "code2": "USHB",
    "lat": 63.9241,
    "lng": 65.0487
  },
  {
    "name": "Szczecin-Dabie",
    "city": "Szczecin",
    "country": "Poland",
    "code1": "",
    "code2": "EPSD",
    "lat": 53.471138,
    "lng": 14.63775
  },
  {
    "name": "Worcester Regional Airport",
    "city": "Worcester",
    "country": "United States",
    "code1": "ORH",
    "code2": "KORH",
    "lat": 42.2673,
    "lng": -71.8757
  },
  {
    "name": "Anqing Airport",
    "city": "Anqing",
    "country": "China",
    "code1": "AQG",
    "code2": "ZSAQ",
    "lat": 30.5822,
    "lng": 117.0502
  },
  {
    "name": "Jing Gang Shan Airport",
    "city": "Ji An",
    "country": "China",
    "code1": "JGS",
    "code2": "\\N",
    "lat": 26.8997,
    "lng": 114.7375
  },
  {
    "name": "Shanhaiguan Airport",
    "city": "Qinhuangdao",
    "country": "China",
    "code1": "SHP",
    "code2": "ZBSH",
    "lat": 39.9681,
    "lng": 119.731
  },
  {
    "name": "Zhangxiao",
    "city": "Yuncheng",
    "country": "China",
    "code1": "YCU",
    "code2": "ZBYC",
    "lat": 35.018,
    "lng": 110.993
  },
  {
    "name": "Lanzhou Airport",
    "city": "Lanzhou",
    "country": "China",
    "code1": "LHW",
    "code2": "ZLAN",
    "lat": 36.117,
    "lng": 103.617
  },
  {
    "name": "Jiayuguan Airport",
    "city": "Jiayuguan",
    "country": "China",
    "code1": "JGN",
    "code2": "ZLJQ",
    "lat": 39.8569,
    "lng": 98.3414
  },
  {
    "name": "Dandong",
    "city": "Dandong",
    "country": "China",
    "code1": "DDG",
    "code2": "ZYDD",
    "lat": 40.0255,
    "lng": 124.2866
  },
  {
    "name": "Ordos Ejin Horo",
    "city": "Dongsheng",
    "country": "China",
    "code1": "DSN",
    "code2": "ZBDS",
    "lat": 39.85,
    "lng": 110.033
  },
  {
    "name": "Panzhihua",
    "city": "Panzhihua",
    "country": "China",
    "code1": "PZI",
    "code2": "ZUZH",
    "lat": 26.54,
    "lng": 101.799
  },
  {
    "name": "Grytviken",
    "city": "Grytviken",
    "country": "South Georgia and the Islands",
    "code1": "",
    "code2": "\\N",
    "lat": -54.16534,
    "lng": -36.30288
  },
  {
    "name": "South Shetland",
    "city": "South Shetland",
    "country": "Antarctica",
    "code1": "",
    "code2": "\\N",
    "lat": -68,
    "lng": -58
  },
  {
    "name": "South Shetland",
    "city": "South Shetland",
    "country": "Antarctica",
    "code1": "",
    "code2": "\\N",
    "lat": -63.37,
    "lng": -62.83
  },
  {
    "name": "New Rochelle Amtrak Station",
    "city": "New Rochelle",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 40.913923,
    "lng": -73.782008
  },
  {
    "name": "Anoka County Blaine Airport",
    "city": "Anoka",
    "country": "United States",
    "code1": "",
    "code2": "KANE",
    "lat": 45.1448889,
    "lng": -93.2101944
  },
  {
    "name": "New Haven Rail Station",
    "city": "New Haven",
    "country": "United States",
    "code1": "ZVE",
    "code2": "\\N",
    "lat": 41.298669,
    "lng": -72.925992
  },
  {
    "name": "Chicago Union Station",
    "city": "Chicago",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 41.8791966,
    "lng": -87.6388507
  },
  {
    "name": "Dibrugarh Airport",
    "city": "Dibrugarh",
    "country": "India",
    "code1": "DIB",
    "code2": "\\N",
    "lat": 27.4839,
    "lng": 95.0169
  },
  {
    "name": "Doha Free Zone Airport",
    "city": "Doha",
    "country": "Qatar",
    "code1": "XOZ",
    "code2": "\\N",
    "lat": 24.8333,
    "lng": 50.9166
  },
  {
    "name": "Bremerton National",
    "city": "Bremerton",
    "country": "United States",
    "code1": "PWT",
    "code2": "KPWT",
    "lat": 47.490244,
    "lng": -122.764814
  },
  {
    "name": "Spencer Muni",
    "city": "Spencer",
    "country": "United States",
    "code1": "SPW",
    "code2": "KSPW",
    "lat": 43.165527,
    "lng": -95.202805
  },
  {
    "name": "Jefferson City Memorial Airport",
    "city": "Jefferson City",
    "country": "United States",
    "code1": "JEF",
    "code2": "KJEF",
    "lat": 38.5912,
    "lng": -92.1561
  },
  {
    "name": "Grand Canyon West Airport",
    "city": "Grand Canyon West",
    "country": "United States",
    "code1": "GCW",
    "code2": "\\N",
    "lat": 35.5925,
    "lng": -113.4859
  },
  {
    "name": "Boulder City Municipal Airport",
    "city": "Boulder City",
    "country": "United States",
    "code1": "BLD",
    "code2": "KBVU",
    "lat": 35.5651,
    "lng": -114.514
  },
  {
    "name": "Tannheim",
    "city": "Tannheim",
    "country": "Germany",
    "code1": "",
    "code2": "EDMT",
    "lat": 48.011736,
    "lng": 10.100903
  },
  {
    "name": "Glenview Amtrak Station",
    "city": "Glenview",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 42.074197,
    "lng": -87.805346
  },
  {
    "name": "Baltimore Penn Station",
    "city": "Baltimore",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 39.307408,
    "lng": -76.615552
  },
  {
    "name": "Summit Camp",
    "city": "Ice Cap",
    "country": "Greenland",
    "code1": "",
    "code2": "\\N",
    "lat": 72.579187,
    "lng": -38.4572
  },
  {
    "name": "Unst Airport",
    "city": "Unst",
    "country": "United Kingdom",
    "code1": "UNT",
    "code2": "EGPW",
    "lat": 60.7472,
    "lng": -0.85385
  },
  {
    "name": "Pagerungan",
    "city": "Pagerungan",
    "country": "Indonesia",
    "code1": "",
    "code2": "WA19",
    "lat": -6.956608,
    "lng": 115.931239
  },
  {
    "name": "Provincetown Muni",
    "city": "Provincetown",
    "country": "United States",
    "code1": "PVC",
    "code2": "KPVC",
    "lat": 42.071945,
    "lng": -70.22139
  },
  {
    "name": "Kenmore Air Harbor Seaplane Base",
    "city": "Seattle",
    "country": "United States",
    "code1": "LKE",
    "code2": "KW55",
    "lat": 47.629,
    "lng": -122.339
  },
  {
    "name": "Seria - Anduki",
    "city": "Seria",
    "country": "Brunei",
    "code1": "",
    "code2": "WBAK",
    "lat": 4.6333,
    "lng": 114.3833
  },
  {
    "name": "Magas",
    "city": "Nazran",
    "country": "Russia",
    "code1": "%u0",
    "code2": "%u04",
    "lat": 43.323815,
    "lng": 45.017761
  },
  {
    "name": "Saint Barthelemy",
    "city": "Gustavia",
    "country": "France",
    "code1": "SBH",
    "code2": "TFFJ",
    "lat": 17.9023,
    "lng": -62.8324
  },
  {
    "name": "Morro de Sao Paulo",
    "city": "Morro de Sao Paulo",
    "country": "Brazil",
    "code1": "",
    "code2": "\\N",
    "lat": -13.2314,
    "lng": -38.5432
  },
  {
    "name": "Morro de Sao Paulo",
    "city": "Morro de Sao Paulo",
    "country": "Brazil",
    "code1": "",
    "code2": "\\N",
    "lat": -13.386571,
    "lng": -38.909122
  },
  {
    "name": "Belize City Municipal Airport",
    "city": "Belize",
    "country": "Belize",
    "code1": "TZA",
    "code2": "\\N",
    "lat": 17.5344,
    "lng": -88.298
  },
  {
    "name": "Kostroma - Sokerkino",
    "city": "Kostroma",
    "country": "Russia",
    "code1": "",
    "code2": "UUBA",
    "lat": 57.47,
    "lng": 41.01
  },
  {
    "name": "Sukhumi Dranda",
    "city": "Sukhumi",
    "country": "Georgia",
    "code1": "SUI",
    "code2": "UGSS",
    "lat": 42.87,
    "lng": 41.12
  },
  {
    "name": "Tambow",
    "city": "Tambow",
    "country": "Russia",
    "code1": "TBW",
    "code2": "UUOT",
    "lat": 52.81,
    "lng": 41.48
  },
  {
    "name": "Oban Airport",
    "city": "North Connel",
    "country": "United Kingdom",
    "code1": "OBN",
    "code2": "EGEO",
    "lat": 56.464,
    "lng": -5.4
  },
  {
    "name": "Vilamendhoo",
    "city": "Vilamendhoo",
    "country": "Maldives",
    "code1": "",
    "code2": "\\N",
    "lat": 73.0191098670891,
    "lng": 3.60965475494316
  },
  {
    "name": "Vilamendhoo",
    "city": "Vilamendhoo",
    "country": "Maldives",
    "code1": "",
    "code2": "\\N",
    "lat": 3.60965475494316,
    "lng": 73.0191098670891
  },
  {
    "name": "Vilamendhoo",
    "city": "Vilamendhoo",
    "country": "Maldives",
    "code1": "",
    "code2": "\\N",
    "lat": 3.484,
    "lng": 73.802
  },
  {
    "name": "Vilamendhoo",
    "city": "Vilamendhoo",
    "country": "Maldives",
    "code1": "",
    "code2": "\\N",
    "lat": 73.801,
    "lng": 3.801
  },
  {
    "name": "Aaa",
    "city": "Aaa",
    "country": "Maldives",
    "code1": "",
    "code2": "\\N",
    "lat": 73.9,
    "lng": 3.222
  },
  {
    "name": "Vilamendhoo",
    "city": "Vilamendhoo",
    "country": "Maldives",
    "code1": "",
    "code2": "\\N",
    "lat": 0,
    "lng": 0
  },
  {
    "name": "Vilamendhoo",
    "city": "Vilamendhoo",
    "country": "Maldives",
    "code1": "",
    "code2": "\\N",
    "lat": 3.8,
    "lng": 73.8
  },
  {
    "name": "Sharya",
    "city": "Sharya",
    "country": "Russia",
    "code1": "",
    "code2": "\\N",
    "lat": 58.2321,
    "lng": 45.3314
  },
  {
    "name": "Mt. Fuji Shizuoka Airport",
    "city": "Shizuoka",
    "country": "Japan",
    "code1": "FSZ",
    "code2": "RJNS",
    "lat": 34.796111,
    "lng": 138.189444
  },
  {
    "name": "Erechim Airport",
    "city": "Erechim",
    "country": "Brazil",
    "code1": "ERM",
    "code2": "SSER",
    "lat": -27.6619,
    "lng": -52.2683
  },
  {
    "name": "La Cote",
    "city": "Prangins",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSGP",
    "lat": 46.413056,
    "lng": 6.258611
  },
  {
    "name": "Courchevel Airport",
    "city": "Courcheval",
    "country": "France",
    "code1": "CVF",
    "code2": "LFLJ",
    "lat": 45.3967,
    "lng": 6.63472
  },
  {
    "name": "Fullerton Municipal Airport",
    "city": "Fullerton",
    "country": "United States",
    "code1": "FUL",
    "code2": "KFUL",
    "lat": 33.521925,
    "lng": -117.584722
  },
  {
    "name": "Concord Rgnl",
    "city": "Concord",
    "country": "United States",
    "code1": "",
    "code2": "KJQF",
    "lat": 35.387775,
    "lng": -80.709136
  },
  {
    "name": "Sandown",
    "city": "Isle Of Wight",
    "country": "United Kingdom",
    "code1": "",
    "code2": "EGHN",
    "lat": 50.677776,
    "lng": -1.317803
  },
  {
    "name": "Fort William Heliport",
    "city": "Fort William",
    "country": "United Kingdom",
    "code1": "FWM",
    "code2": "\\N",
    "lat": 56.816666,
    "lng": -5.116667
  },
  {
    "name": "Navoi Airport",
    "city": "Navoi",
    "country": "Uzbekistan",
    "code1": "NVI",
    "code2": "UTSA",
    "lat": 40.1172,
    "lng": 65.1708
  },
  {
    "name": "La Defense Heliport",
    "city": "Paris",
    "country": "France",
    "code1": "JPU",
    "code2": "\\N",
    "lat": 48.86667,
    "lng": 2.333333
  },
  {
    "name": "Andernos-Les-Bains",
    "city": "Andernos-Les-Bains",
    "country": "France",
    "code1": "",
    "code2": "LFCD",
    "lat": 44.81111,
    "lng": -1.186023
  },
  {
    "name": "Ronda Airport",
    "city": "Ronda",
    "country": "Spain",
    "code1": "RRA",
    "code2": "\\N",
    "lat": 36.75,
    "lng": -5.166667
  },
  {
    "name": "Bienenfarm Airport",
    "city": "Nauen",
    "country": "Germany",
    "code1": "",
    "code2": "EDOI",
    "lat": 52.6617,
    "lng": 12.7458
  },
  {
    "name": "Nguma Island Lodge Airstrip",
    "city": "Etsha 13",
    "country": "Botswana",
    "code1": "",
    "code2": "\\N",
    "lat": -18.9538,
    "lng": 22.3668
  },
  {
    "name": "Champion-7",
    "city": "Champion-7",
    "country": "Brunei",
    "code1": "",
    "code2": "\\N",
    "lat": 5.21,
    "lng": 114.7419
  },
  {
    "name": "Ain Arnat Airport",
    "city": "Setif",
    "country": "Algeria",
    "code1": "QSF",
    "code2": "DAAS",
    "lat": 36.1781,
    "lng": 5.32449
  },
  {
    "name": "La Rochelle-Ile de Re",
    "city": "La Rochelle",
    "country": "France",
    "code1": "LRH",
    "code2": "LFBH",
    "lat": 46.1792,
    "lng": -1.19528
  },
  {
    "name": "Friedman Mem",
    "city": "Hailey",
    "country": "United States",
    "code1": "SUN",
    "code2": "KSUN",
    "lat": 43.504444,
    "lng": -114.296194
  },
  {
    "name": "Yverdon-Les-Bains",
    "city": "Yverdon-Les-Bains",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSGY",
    "lat": 46.86667,
    "lng": 6.7
  },
  {
    "name": "Portsmouth Airport",
    "city": "Portsmouth",
    "country": "United Kingdom",
    "code1": "PME",
    "code2": "\\N",
    "lat": 50.8,
    "lng": -1.083333
  },
  {
    "name": "Aleksandrowice",
    "city": "Bielsko-Biala",
    "country": "Poland",
    "code1": "",
    "code2": "EPBA",
    "lat": 49.84997,
    "lng": 19.020193
  },
  {
    "name": "Mason City Municipal",
    "city": "Mason City",
    "country": "United States",
    "code1": "MCW",
    "code2": "KMCW",
    "lat": 43.2247,
    "lng": -93.4067
  },
  {
    "name": "Salar de Uyuni",
    "city": "Salar de Uyuni",
    "country": "Bolivia",
    "code1": "",
    "code2": "\\N",
    "lat": -20.330706,
    "lng": -67.046881
  },
  {
    "name": "Isla Pescado",
    "city": "Isla Pescado",
    "country": "Bolivia",
    "code1": "",
    "code2": "\\N",
    "lat": -20.240932,
    "lng": -67.62538
  },
  {
    "name": "Toro Toro",
    "city": "Toro Toro",
    "country": "Bolivia",
    "code1": "",
    "code2": "\\N",
    "lat": -18.133114,
    "lng": -65.768781
  },
  {
    "name": "QTHRL",
    "city": "Queenstown",
    "country": "New Zealand",
    "code1": "",
    "code2": "\\N",
    "lat": -44.8898,
    "lng": 168.6762
  },
  {
    "name": "QTHRS",
    "city": "Queenstown",
    "country": "New Zealand",
    "code1": "",
    "code2": "\\N",
    "lat": -44.9486,
    "lng": 168.7068
  },
  {
    "name": "Helirafting Start",
    "city": "Queenstown",
    "country": "New Zealand",
    "code1": "",
    "code2": "\\N",
    "lat": -44.9486,
    "lng": 168.7068
  },
  {
    "name": "Helirafting Landung",
    "city": "Queenstown",
    "country": "New Zealand",
    "code1": "",
    "code2": "\\N",
    "lat": -44.8898,
    "lng": 168.6762
  },
  {
    "name": "Jomo Kenyatta",
    "city": "Nairobi",
    "country": "Kenya",
    "code1": "",
    "code2": "\\N",
    "lat": -1.319242,
    "lng": 36.927775
  },
  {
    "name": "DWEST",
    "city": "DWEST",
    "country": "Germany",
    "code1": "",
    "code2": "\\N",
    "lat": 51.025,
    "lng": 7.1837
  },
  {
    "name": "Niederoeblarn",
    "city": "Niederoeblarn",
    "country": "Austria",
    "code1": "",
    "code2": "LOGO",
    "lat": 47.478,
    "lng": 14.008
  },
  {
    "name": "Bad Voeslau",
    "city": "Bad Voeslau",
    "country": "Austria",
    "code1": "",
    "code2": "LOAV",
    "lat": 47.965,
    "lng": 16.259
  },
  {
    "name": "Arekuna Camp",
    "city": "Arekuna",
    "country": "Venezuela",
    "code1": "",
    "code2": "\\N",
    "lat": 6.290501,
    "lng": -62.534499
  },
  {
    "name": "Uetersen",
    "city": "Uetersen",
    "country": "Germany",
    "code1": "",
    "code2": "EDHE",
    "lat": 53.646667,
    "lng": 9.704167
  },
  {
    "name": "HLP1 HS-16",
    "city": "Salzwedel",
    "country": "Germany",
    "code1": "",
    "code2": "\\N",
    "lat": 52.8333,
    "lng": 11.2027
  },
  {
    "name": "HLP2 HS-16",
    "city": "Nordhausen",
    "country": "Germany",
    "code1": "",
    "code2": "\\N",
    "lat": 51.4888,
    "lng": 10.7833
  },
  {
    "name": "HLP HQ GT",
    "city": "Paetz",
    "country": "Germany",
    "code1": "",
    "code2": "\\N",
    "lat": 52.2361,
    "lng": 13.6667
  },
  {
    "name": "Jining Airport",
    "city": "Jining",
    "country": "China",
    "code1": "JNG",
    "code2": "\\N",
    "lat": 35.417,
    "lng": 116.533
  },
  {
    "name": "Heilongjiang Mohe Airport",
    "city": "Mohe County",
    "country": "China",
    "code1": "OHE",
    "code2": "\\N",
    "lat": 52.915,
    "lng": 122.427
  },
  {
    "name": "Daqing Saertu Airport",
    "city": "Daqing",
    "country": "China",
    "code1": "DAQ",
    "code2": "\\N",
    "lat": 46.583333,
    "lng": 125
  },
  {
    "name": "Byron Airport",
    "city": "Byron",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 37.8284,
    "lng": -121.626
  },
  {
    "name": "Tunoshna",
    "city": "Yaroslavl",
    "country": "Russia",
    "code1": "IAR",
    "code2": "UUDL",
    "lat": 57.560666676667,
    "lng": 40.157369454444
  },
  {
    "name": "Belaya",
    "city": "Sredniiy",
    "country": "Russia",
    "code1": "",
    "code2": "UIIB",
    "lat": 52.91500001,
    "lng": 103.57500001
  },
  {
    "name": "Borisoglebskoe",
    "city": "Kazan",
    "country": "Russia",
    "code1": "",
    "code2": "\\N",
    "lat": 55.86067,
    "lng": 49.10099
  },
  {
    "name": "Dzemgi",
    "city": "Komsomolsk-on-Amur",
    "country": "Russia",
    "code1": "",
    "code2": "UHKD",
    "lat": 50.605,
    "lng": 137.08167
  },
  {
    "name": "Khabarovsk-MVL",
    "city": "Khabarovsk",
    "country": "Russia",
    "code1": "",
    "code2": "UHHT",
    "lat": 48.528,
    "lng": 135.179
  },
  {
    "name": "Irkutsk-2",
    "city": "Irkutsk",
    "country": "Russia",
    "code1": "",
    "code2": "UIIR",
    "lat": 52.3678,
    "lng": 104.183
  },
  {
    "name": "Zhukovski",
    "city": "Ramenskoe",
    "country": "Russia",
    "code1": "",
    "code2": "UUBW",
    "lat": 55.589,
    "lng": 38.154
  },
  {
    "name": "Gelendzhik",
    "city": "Gelendzhik",
    "country": "Russia",
    "code1": "",
    "code2": "URKG",
    "lat": 44.55,
    "lng": 38.083
  },
  {
    "name": "Taganrog-Juzhnyi",
    "city": "Taganrog",
    "country": "Russia",
    "code1": "",
    "code2": "URRT",
    "lat": 47.117,
    "lng": 38.513
  },
  {
    "name": "Neuchatel Airport",
    "city": "Neuchatel",
    "country": "Switzerland",
    "code1": "QNC",
    "code2": "LSGN",
    "lat": 46.9575,
    "lng": 6.86472
  },
  {
    "name": "Locarno Airport",
    "city": "Locarno",
    "country": "Switzerland",
    "code1": "ZJI",
    "code2": "LSZL",
    "lat": 46.1608,
    "lng": 8.87861
  },
  {
    "name": "Speck-Fehraltorf Airport",
    "city": "Fehraltorf",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSZK",
    "lat": 47.3764,
    "lng": 8.7575
  },
  {
    "name": "Lausanne-la Blecherette Airport",
    "city": "Lausanne",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSGL",
    "lat": 46.5453,
    "lng": 6.61667
  },
  {
    "name": "Triengen Airport",
    "city": "Triengen",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSPN",
    "lat": 47.2267,
    "lng": 8.07806
  },
  {
    "name": "Rimatara",
    "city": "Rimatara",
    "country": "French Polynesia",
    "code1": "RMT",
    "code2": "NTAM",
    "lat": -22.637253,
    "lng": -152.805192
  },
  {
    "name": "Ust-Ilimsk",
    "city": "Ust-Ilimsk",
    "country": "Russia",
    "code1": "",
    "code2": "\\N",
    "lat": 58.116667,
    "lng": 102.4666667
  },
  {
    "name": "Ust-Kut",
    "city": "Ust-Kut",
    "country": "Russia",
    "code1": "UKX",
    "code2": "UITT",
    "lat": 56.85,
    "lng": 105.7167
  },
  {
    "name": "Kavalerovo",
    "city": "Kavalerovo",
    "country": "Russia",
    "code1": "",
    "code2": "\\N",
    "lat": 44.270556,
    "lng": 135.054722
  },
  {
    "name": "Kirensk",
    "city": "Kirensk",
    "country": "Russia",
    "code1": "",
    "code2": "UIKK",
    "lat": 57.7667,
    "lng": 108.05
  },
  {
    "name": "Fortman Airport",
    "city": "St. Marys",
    "country": "United States",
    "code1": "1OH",
    "code2": "\\N",
    "lat": 40.5553253,
    "lng": -84.3866186
  },
  {
    "name": "Bellona",
    "city": "Bellona",
    "country": "Solomon Islands",
    "code1": "BN1",
    "code2": "\\N",
    "lat": 15.981666666667,
    "lng": -11.3
  },
  {
    "name": "Bellona",
    "city": "Bellona",
    "country": "Solomon Islands",
    "code1": "BNY",
    "code2": "\\N",
    "lat": -11.302,
    "lng": 159.8
  },
  {
    "name": "Ringi Cove Airport",
    "city": "Ringi Cove",
    "country": "Solomon Islands",
    "code1": "RIN",
    "code2": "AGRC",
    "lat": -8.12639,
    "lng": 157.143
  },
  {
    "name": "Antonio Juarbe Pol Airport",
    "city": "Arecibo",
    "country": "Puerto Rico",
    "code1": "ARE",
    "code2": "TJAB",
    "lat": 18.451111,
    "lng": -66.675556
  },
  {
    "name": "Pangborn Field",
    "city": "Wenatchee",
    "country": "United States",
    "code1": "EAT",
    "code2": "KEAT",
    "lat": 47.398,
    "lng": -120.206
  },
  {
    "name": "Bendigo Airport",
    "city": "Bendigo",
    "country": "Australia",
    "code1": "",
    "code2": "YBDG",
    "lat": -36.7394,
    "lng": 144.33
  },
  {
    "name": "Aeroporto Prefeito Octavio de Almeida Neves",
    "city": "Sao Joao del Rei",
    "country": "Brazil",
    "code1": "JDR",
    "code2": "\\N",
    "lat": -21.0864,
    "lng": -44.2258
  },
  {
    "name": "RAAF Pearce",
    "city": "Perth",
    "country": "Australia",
    "code1": "",
    "code2": "YPEA",
    "lat": -31.66778,
    "lng": 116.015
  },
  {
    "name": "Wangerooge Airport",
    "city": "Wangerooge",
    "country": "Germany",
    "code1": "AGE",
    "code2": "EDWG",
    "lat": 53.7828,
    "lng": 7.91389
  },
  {
    "name": "Harle Airport",
    "city": "Harlesiel",
    "country": "Germany",
    "code1": "",
    "code2": "EDXP",
    "lat": 53.7067,
    "lng": 7.82028
  },
  {
    "name": "Wittman Regional Airport",
    "city": "Oshkosh",
    "country": "United States",
    "code1": "OSH",
    "code2": "KOSH",
    "lat": 44.024983,
    "lng": -88.551336
  },
  {
    "name": "Brest",
    "city": "Brest",
    "country": "Belarus",
    "code1": "BQT",
    "code2": "UMBB",
    "lat": 52.06,
    "lng": 23.53
  },
  {
    "name": "Ternopol",
    "city": "Ternopol",
    "country": "Ukraine",
    "code1": "TNL",
    "code2": "UKLT",
    "lat": 49.31,
    "lng": 25.42
  },
  {
    "name": "Chernigov",
    "city": "Chernigov",
    "country": "Ukraine",
    "code1": "CEJ",
    "code2": "UKRR",
    "lat": 51.24,
    "lng": 31.09
  },
  {
    "name": "Lutsk",
    "city": "Lutsk",
    "country": "Ukraine",
    "code1": "UKC",
    "code2": "UKLC",
    "lat": 50.6833,
    "lng": 25.4833
  },
  {
    "name": "Southwest Michigan Regional Airport",
    "city": "Benton Harbor",
    "country": "United States",
    "code1": "BEH",
    "code2": "\\N",
    "lat": 42.1285833,
    "lng": -86.4285
  },
  {
    "name": "Waukesha County Airport",
    "city": "Waukesha",
    "country": "United States",
    "code1": "UES",
    "code2": "\\N",
    "lat": 43.0410278,
    "lng": -88.2370556
  },
  {
    "name": "Ronda",
    "city": "Ronda",
    "country": "Spain",
    "code1": "",
    "code2": "\\N",
    "lat": 36.73333,
    "lng": -5.166667
  },
  {
    "name": "Thurles",
    "city": "Thurles",
    "country": "Ireland",
    "code1": "",
    "code2": "\\N",
    "lat": 52.67888,
    "lng": -7.814369
  },
  {
    "name": "Limerick",
    "city": "Limerick",
    "country": "Ireland",
    "code1": "",
    "code2": "\\N",
    "lat": 52.659,
    "lng": -8.624
  },
  {
    "name": "Nowra Airport",
    "city": "Nowra",
    "country": "Australia",
    "code1": "NOA",
    "code2": "YSNW",
    "lat": -34.9489,
    "lng": 150.537
  },
  {
    "name": "RAAF Williams Laverton Base",
    "city": "Laverton",
    "country": "Australia",
    "code1": "",
    "code2": "YLVT",
    "lat": -37.8636,
    "lng": 144.746
  },
  {
    "name": "Tindal Airport",
    "city": "Katherine",
    "country": "Australia",
    "code1": "KTR",
    "code2": "YPTN",
    "lat": -14.5211,
    "lng": 132.378
  },
  {
    "name": "Amberley",
    "city": "Amberley",
    "country": "Australia",
    "code1": "",
    "code2": "YAMB",
    "lat": -27.64,
    "lng": 152.712
  },
  {
    "name": "Geiranger",
    "city": "Geiranger",
    "country": "Norway",
    "code1": "",
    "code2": "GEIR",
    "lat": 62.1,
    "lng": 7.2
  },
  {
    "name": "Zell am See",
    "city": "Zell am See",
    "country": "Austria",
    "code1": "",
    "code2": "LOWZ",
    "lat": 47.2933,
    "lng": 12.7883
  },
  {
    "name": "Galt Field Airport",
    "city": "Greenwood",
    "country": "United States",
    "code1": "10C",
    "code2": "\\N",
    "lat": 42.4028889,
    "lng": -88.3751111
  },
  {
    "name": "Everglades Airpark",
    "city": "Everglades",
    "country": "United States",
    "code1": "X01",
    "code2": "\\N",
    "lat": 25.8488611,
    "lng": -81.3902778
  },
  {
    "name": "Choibalsan Airport",
    "city": "Choibalsan",
    "country": "Mongolia",
    "code1": "COQ",
    "code2": "ZMCD",
    "lat": 48.1357,
    "lng": 114.646
  },
  {
    "name": "Taree Airport",
    "city": "Taree",
    "country": "Australia",
    "code1": "TRO",
    "code2": "YTRE",
    "lat": -31.8886,
    "lng": 152.514
  },
  {
    "name": "Orange Airport",
    "city": "Orange",
    "country": "Australia",
    "code1": "OAG",
    "code2": "YORG",
    "lat": -33.3817,
    "lng": 149.133
  },
  {
    "name": "Grafton Airport",
    "city": "Grafton",
    "country": "Australia",
    "code1": "GFN",
    "code2": "YGFN",
    "lat": -29.7594,
    "lng": 153.03
  },
  {
    "name": "Marinduque Airport",
    "city": "Gasan",
    "country": "Philippines",
    "code1": "MRQ",
    "code2": "RPUW",
    "lat": 13.360967,
    "lng": 121.825583
  },
  {
    "name": "Hamadan Airport",
    "city": "Hamadan",
    "country": "Iran",
    "code1": "HDM",
    "code2": "OIHH",
    "lat": 34.869167,
    "lng": 48.5525
  },
  {
    "name": "St Augustin Airport",
    "city": "St-Augustin",
    "country": "Canada",
    "code1": "YIF",
    "code2": "CYIF",
    "lat": 51.2117,
    "lng": -58.6583
  },
  {
    "name": "Vieques Airport",
    "city": "Vieques Island",
    "country": "Puerto Rico",
    "code1": "VQS",
    "code2": "TJCG",
    "lat": 18.1158,
    "lng": -65.4227
  },
  {
    "name": "Kalay Airport",
    "city": "Kalemyo",
    "country": "Myanmar",
    "code1": "KMV",
    "code2": "VYKL",
    "lat": 23.188811,
    "lng": 94.051094
  },
  {
    "name": "Terre-de-Haut Airport",
    "city": "Les Saintes",
    "country": "Guadeloupe",
    "code1": "LSS",
    "code2": "TFFS",
    "lat": 15.8644,
    "lng": -61.5806
  },
  {
    "name": "Yenisehir Airport",
    "city": "Yenisehir",
    "country": "Turkey",
    "code1": "YEI",
    "code2": "LTBR",
    "lat": 40.255208,
    "lng": 29.562569
  },
  {
    "name": "Tekirdağ Çorlu Airport",
    "city": "Çorlu",
    "country": "Turkey",
    "code1": "TEQ",
    "code2": "LTBU",
    "lat": 41.13825,
    "lng": 27.919094
  },
  {
    "name": "Sinop Airport",
    "city": "Sinop",
    "country": "Turkey",
    "code1": "SIC",
    "code2": "LTCM",
    "lat": 42.0158,
    "lng": 35.0664
  },
  {
    "name": "Mus Airport",
    "city": "Mus",
    "country": "Turkey",
    "code1": "MSR",
    "code2": "LTCK",
    "lat": 38.747769,
    "lng": 41.661236
  },
  {
    "name": "Canakkale Airport",
    "city": "Canakkale",
    "country": "Turkey",
    "code1": "CKZ",
    "code2": "LTBH",
    "lat": 40.137722,
    "lng": 26.426777
  },
  {
    "name": "Anadolu Airport",
    "city": "Eskissehir",
    "country": "Turkey",
    "code1": "AOE",
    "code2": "LTBY",
    "lat": 39.809858,
    "lng": 30.519378
  },
  {
    "name": "Katima Mulilo Airport",
    "city": "Mpacha",
    "country": "Namibia",
    "code1": "MPA",
    "code2": "FYKM",
    "lat": -17.6344,
    "lng": 24.1767
  },
  {
    "name": "Walvis Bay Airport",
    "city": "Walvis Bay",
    "country": "Namibia",
    "code1": "WVB",
    "code2": "FYWB",
    "lat": -22.9799,
    "lng": 14.6453
  },
  {
    "name": "Capitan Corbeta C A Curbelo International Airport",
    "city": "Punta del Este",
    "country": "Uruguay",
    "code1": "PDP",
    "code2": "SULS",
    "lat": -34.855139,
    "lng": -55.094278
  },
  {
    "name": "Sialkot Airport",
    "city": "Sialkot",
    "country": "Pakistan",
    "code1": "SKT",
    "code2": "OPST",
    "lat": 32.5356,
    "lng": 74.3639
  },
  {
    "name": "Bonaventure Airport",
    "city": "Bonaventure",
    "country": "Canada",
    "code1": "YVB",
    "code2": "CYVB",
    "lat": 48.0711,
    "lng": -65.4603
  },
  {
    "name": "Brus Laguna Airport",
    "city": "Brus Laguna",
    "country": "Honduras",
    "code1": "BHG",
    "code2": "MHBL",
    "lat": 15.7631,
    "lng": -84.5436
  },
  {
    "name": "Samburu South Airport",
    "city": "Samburu South",
    "country": "Kenya",
    "code1": "UAS",
    "code2": "HKSB",
    "lat": 0.530583,
    "lng": 37.5342
  },
  {
    "name": "Chaoyang Airport",
    "city": "Chaoyang",
    "country": "China",
    "code1": "CHG",
    "code2": "ZYCY",
    "lat": 41.5381,
    "lng": 120.435
  },
  {
    "name": "Walaha Airport",
    "city": "Walaha",
    "country": "Vanuatu",
    "code1": "WLH",
    "code2": "NVSW",
    "lat": -15.412,
    "lng": 167.691
  },
  {
    "name": "Tanjung Manis Airport",
    "city": "Tanjung Manis",
    "country": "Malaysia",
    "code1": "TGC",
    "code2": "WBTM",
    "lat": 2.17784,
    "lng": 111.202
  },
  {
    "name": "Long Akah Airport",
    "city": "Long Akah",
    "country": "Malaysia",
    "code1": "LKH",
    "code2": "WBGL",
    "lat": 3.3,
    "lng": 114.783
  },
  {
    "name": "Geneina Airport",
    "city": "Geneina",
    "country": "Sudan",
    "code1": "EGN",
    "code2": "HSGN",
    "lat": 13.4817,
    "lng": 22.4672
  },
  {
    "name": "Togiak Airport",
    "city": "Togiak Village",
    "country": "United States",
    "code1": "TOG",
    "code2": "PATG",
    "lat": 59.0528,
    "lng": -160.397
  },
  {
    "name": "Port Heiden Airport",
    "city": "Port Heiden",
    "country": "United States",
    "code1": "PTH",
    "code2": "PAPH",
    "lat": 56.9591,
    "lng": -158.633
  },
  {
    "name": "King Cove Airport",
    "city": "King Cove",
    "country": "United States",
    "code1": "KVC",
    "code2": "PAVC",
    "lat": 55.1163,
    "lng": -162.266
  },
  {
    "name": "New Stuyahok Airport",
    "city": "New Stuyahok",
    "country": "United States",
    "code1": "KNW",
    "code2": "PANW",
    "lat": 59.4499,
    "lng": -157.328
  },
  {
    "name": "Igiugig Airport",
    "city": "Igiugig",
    "country": "United States",
    "code1": "IGG",
    "code2": "PAIG",
    "lat": 59.324,
    "lng": -155.902
  },
  {
    "name": "Shimla Airport",
    "city": "Shimla",
    "country": "India",
    "code1": "SLV",
    "code2": "VISM",
    "lat": 31.081803,
    "lng": 77.067967
  },
  {
    "name": "Nanded Airport",
    "city": "Nanded",
    "country": "India",
    "code1": "NDC",
    "code2": "VAND",
    "lat": 19.1833,
    "lng": 77.3167
  },
  {
    "name": "Kangra Airport",
    "city": "Kangra",
    "country": "India",
    "code1": "DHM",
    "code2": "VIGG",
    "lat": 32.1651,
    "lng": 76.2634
  },
  {
    "name": "Shahre Kord Airport",
    "city": "Shahre Kord",
    "country": "Iran",
    "code1": "CQD",
    "code2": "OIFS",
    "lat": 32.2972,
    "lng": 50.8422
  },
  {
    "name": "Sege Airport",
    "city": "Sege",
    "country": "Solomon Islands",
    "code1": "EGM",
    "code2": "AGGS",
    "lat": -8.57889,
    "lng": 157.876
  },
  {
    "name": "Burgos Airport",
    "city": "Burgos",
    "country": "Spain",
    "code1": "RGS",
    "code2": "LEBG",
    "lat": 42.357628,
    "lng": -3.620764
  },
  {
    "name": "Leon Airport",
    "city": "Leon",
    "country": "Spain",
    "code1": "LEN",
    "code2": "LELN",
    "lat": 42.589,
    "lng": -5.655556
  },
  {
    "name": "Deering Airport",
    "city": "Deering",
    "country": "United States",
    "code1": "DRG",
    "code2": "PADE",
    "lat": 66.0696,
    "lng": -162.766
  },
  {
    "name": "Sugraly Airport",
    "city": "Zarafshan",
    "country": "Uzbekistan",
    "code1": "AFS",
    "code2": "UTSN",
    "lat": 41.6139,
    "lng": 64.2332
  },
  {
    "name": "Mardin Airport",
    "city": "Mardin",
    "country": "Turkey",
    "code1": "MQM",
    "code2": "LTCR",
    "lat": 37.2233,
    "lng": 40.6317
  },
  {
    "name": "Tacheng Airport",
    "city": "Tacheng",
    "country": "China",
    "code1": "TCG",
    "code2": "ZWTC",
    "lat": 46.6725,
    "lng": 83.3408
  },
  {
    "name": "Tocache Airport",
    "city": "Tocache",
    "country": "Peru",
    "code1": "",
    "code2": "SPCH",
    "lat": -8.183,
    "lng": -76.517
  },
  {
    "name": "Nueva Loja Airport",
    "city": "Lago Agrio",
    "country": "Ecuador",
    "code1": "LGQ",
    "code2": "SELA",
    "lat": 0.093056,
    "lng": -76.8675
  },
  {
    "name": "Parsabade Moghan Airport",
    "city": "Parsabad",
    "country": "Iran",
    "code1": "PFQ",
    "code2": "OITP",
    "lat": 39.603606,
    "lng": 47.8815
  },
  {
    "name": "Ilam Airport",
    "city": "Ilam",
    "country": "Iran",
    "code1": "IIL",
    "code2": "OICI",
    "lat": 33.586606,
    "lng": 46.404842
  },
  {
    "name": "Gorgan Airport",
    "city": "Gorgan",
    "country": "Iran",
    "code1": "GBT",
    "code2": "OING",
    "lat": 36.909381,
    "lng": 54.401339
  },
  {
    "name": "Sahand Airport",
    "city": "Maragheh",
    "country": "Iran",
    "code1": "ACP",
    "code2": "OITM",
    "lat": 37.348017,
    "lng": 46.127903
  },
  {
    "name": "Romblon Airport",
    "city": "Romblon",
    "country": "Philippines",
    "code1": "TBH",
    "code2": "RPVU",
    "lat": 12.311,
    "lng": 122.085
  },
  {
    "name": "Changzhoudao Airport",
    "city": "Wuzhou",
    "country": "China",
    "code1": "WUZ",
    "code2": "ZGWZ",
    "lat": 23.4567,
    "lng": 111.248
  },
  {
    "name": "Hami Airport",
    "city": "Hami",
    "country": "China",
    "code1": "HMI",
    "code2": "ZWHM",
    "lat": 42.8414,
    "lng": 93.6692
  },
  {
    "name": "Sand Point Airport",
    "city": "Sand Point",
    "country": "United States",
    "code1": "SDP",
    "code2": "PASD",
    "lat": 55.315,
    "lng": -160.523
  },
  {
    "name": "Gorakhpur Airport",
    "city": "Gorakhpur",
    "country": "India",
    "code1": "GOP",
    "code2": "VEGK",
    "lat": 26.739708,
    "lng": 83.449708
  },
  {
    "name": "Araracuara Airport",
    "city": "Araracuara",
    "country": "Colombia",
    "code1": "ACR",
    "code2": "SKAC",
    "lat": -0.58,
    "lng": -72.41
  },
  {
    "name": "Hagerstown Regional Richard A Henson Field",
    "city": "Hagerstown",
    "country": "United States",
    "code1": "HGR",
    "code2": "KHGR",
    "lat": 39.7079,
    "lng": -77.7295
  },
  {
    "name": "Bella Coola Airport",
    "city": "Bella Coola",
    "country": "Canada",
    "code1": "QBC",
    "code2": "CYBD",
    "lat": 52.3875,
    "lng": -126.596
  },
  {
    "name": "Pajala Airport",
    "city": "Pajala",
    "country": "Sweden",
    "code1": "PJA",
    "code2": "ESUP",
    "lat": 67.2456,
    "lng": 23.0689
  },
  {
    "name": "Port Clarence Coast Guard Station",
    "city": "Port Clarence",
    "country": "United States",
    "code1": "KPC",
    "code2": "PAPC",
    "lat": 65.2537,
    "lng": -166.859
  },
  {
    "name": "Governador Valadares Airport",
    "city": "Governador Valadares",
    "country": "Brazil",
    "code1": "GVR",
    "code2": "SBGV",
    "lat": -18.8952,
    "lng": -41.9822
  },
  {
    "name": "Kirovsk-Apatity Airport",
    "city": "Apatity",
    "country": "Russia",
    "code1": "KVK",
    "code2": "ULMK",
    "lat": 67.4633,
    "lng": 33.5883
  },
  {
    "name": "Cauayan Airport",
    "city": "Cauayan",
    "country": "Philippines",
    "code1": "CYZ",
    "code2": "RPUY",
    "lat": 16.929861,
    "lng": 121.753036
  },
  {
    "name": "Tambor Airport",
    "city": "Nicoya",
    "country": "Costa Rica",
    "code1": "TMU",
    "code2": "MRTR",
    "lat": 9.73852,
    "lng": -85.0138
  },
  {
    "name": "Arenal Airport",
    "city": "La Fortuna/San Carlos",
    "country": "Costa Rica",
    "code1": "FON",
    "code2": "MRAN",
    "lat": 10.478,
    "lng": -84.6345
  },
  {
    "name": "Imo Airport",
    "city": "Imo",
    "country": "Nigeria",
    "code1": "QOW",
    "code2": "DNIM",
    "lat": 5.42706,
    "lng": 7.20603
  },
  {
    "name": "Arctic Village Airport",
    "city": "Arctic Village",
    "country": "United States",
    "code1": "ARC",
    "code2": "PARC",
    "lat": 68.1147,
    "lng": -145.579
  },
  {
    "name": "Tasiujaq Airport",
    "city": "Tasiujaq",
    "country": "Canada",
    "code1": "YTQ",
    "code2": "CYTQ",
    "lat": 58.6678,
    "lng": -69.9558
  },
  {
    "name": "Puvirnituq Airport",
    "city": "Puvirnituq",
    "country": "Canada",
    "code1": "YPX",
    "code2": "CYPX",
    "lat": 60.0506,
    "lng": -77.2869
  },
  {
    "name": "Ormoc Airport",
    "city": "Ormoc City",
    "country": "Philippines",
    "code1": "OMC",
    "code2": "RPVO",
    "lat": 11.057997,
    "lng": 124.565322
  },
  {
    "name": "Noatak Airport",
    "city": "Noatak",
    "country": "United States",
    "code1": "WTK",
    "code2": "PAWN",
    "lat": 67.5661,
    "lng": -162.975
  },
  {
    "name": "Savoonga Airport",
    "city": "Savoonga",
    "country": "United States",
    "code1": "SVA",
    "code2": "PASA",
    "lat": 63.6864,
    "lng": -170.493
  },
  {
    "name": "Shishmaref Airport",
    "city": "Shishmaref",
    "country": "United States",
    "code1": "SHH",
    "code2": "PASH",
    "lat": 66.2496,
    "lng": -166.089
  },
  {
    "name": "Ruby Airport",
    "city": "Ruby",
    "country": "United States",
    "code1": "RBY",
    "code2": "PARY",
    "lat": 64.7272,
    "lng": -155.47
  },
  {
    "name": "Point Hope Airport",
    "city": "Point Hope",
    "country": "United States",
    "code1": "PHO",
    "code2": "PPHO",
    "lat": 68.3488,
    "lng": -166.799
  },
  {
    "name": "Mekoryuk Airport",
    "city": "Mekoryuk",
    "country": "United States",
    "code1": "MYU",
    "code2": "PAMY",
    "lat": 60.3714,
    "lng": -166.271
  },
  {
    "name": "Kivalina Airport",
    "city": "Kivalina",
    "country": "United States",
    "code1": "KVL",
    "code2": "PAVL",
    "lat": 67.7362,
    "lng": -164.563
  },
  {
    "name": "St Marys Airport",
    "city": "St Mary's",
    "country": "United States",
    "code1": "KSM",
    "code2": "PASM",
    "lat": 62.0605,
    "lng": -163.302
  },
  {
    "name": "Kaltag Airport",
    "city": "Kaltag",
    "country": "United States",
    "code1": "KAL",
    "code2": "PAKV",
    "lat": 64.3191,
    "lng": -158.741
  },
  {
    "name": "Hooper Bay Airport",
    "city": "Hooper Bay",
    "country": "United States",
    "code1": "HPB",
    "code2": "PAHP",
    "lat": 61.5239,
    "lng": -166.147
  },
  {
    "name": "Gambell Airport",
    "city": "Gambell",
    "country": "United States",
    "code1": "GAM",
    "code2": "PAGM",
    "lat": 63.7668,
    "lng": -171.733
  },
  {
    "name": "Atqasuk Edward Burnell Sr Memorial Airport",
    "city": "Atqasuk",
    "country": "United States",
    "code1": "ATK",
    "code2": "PATQ",
    "lat": 70.4673,
    "lng": -157.436
  },
  {
    "name": "Anvik Airport",
    "city": "Anvik",
    "country": "United States",
    "code1": "ANV",
    "code2": "PANV",
    "lat": 62.6467,
    "lng": -160.191
  },
  {
    "name": "Anaktuvuk Pass Airport",
    "city": "Anaktuvuk Pass",
    "country": "United States",
    "code1": "AKP",
    "code2": "PAKP",
    "lat": 68.1336,
    "lng": -151.743
  },
  {
    "name": "Altay Airport",
    "city": "Altay",
    "country": "China",
    "code1": "AAT",
    "code2": "ZWAT",
    "lat": 47.866667,
    "lng": 88.116667
  },
  {
    "name": "Tuzla",
    "city": "Null",
    "country": "Bosnia and Herzegovina",
    "code1": "",
    "code2": "LQTZ",
    "lat": 44.458656,
    "lng": 18.724783
  },
  {
    "name": "Fort Worth NAS",
    "city": "Dallas",
    "country": "United States",
    "code1": "",
    "code2": "KNFW",
    "lat": 32.769167,
    "lng": -97.441528
  },
  {
    "name": "Naypyidaw",
    "city": "Naypyidaw",
    "country": "Burma",
    "code1": "ELA",
    "code2": "VYEL",
    "lat": 19.6235,
    "lng": 96.201028
  },
  {
    "name": "Kyauktu",
    "city": "Kyauktu",
    "country": "Burma",
    "code1": "",
    "code2": "VYXG",
    "lat": 21.406667,
    "lng": 94.130278
  },
  {
    "name": "Jan Mayensfield",
    "city": "Jan Mayen",
    "country": "Norway",
    "code1": "ZXB",
    "code2": "ENJA",
    "lat": 70.961111,
    "lng": -8.575833
  },
  {
    "name": "Bokepyin",
    "city": "Bokepyin",
    "country": "Burma",
    "code1": "",
    "code2": "VYBP",
    "lat": 11.267,
    "lng": 98.767
  },
  {
    "name": "Huanghua Intl",
    "city": "Changsha",
    "country": "China",
    "code1": "HHA",
    "code2": "\\N",
    "lat": 28.189158,
    "lng": 113.219633
  },
  {
    "name": "Manzhouli",
    "city": "Manzhouli",
    "country": "China",
    "code1": "NZH",
    "code2": "\\N",
    "lat": 49.566667,
    "lng": 117.329444
  },
  {
    "name": "Wuhai",
    "city": "Wuhai",
    "country": "China",
    "code1": "WUA",
    "code2": "ZBUH",
    "lat": 39.794444,
    "lng": 106.799444
  },
  {
    "name": "Gary Chicago International Airport",
    "city": "Gary",
    "country": "United States",
    "code1": "GYY",
    "code2": "KGYY",
    "lat": 41.6163,
    "lng": -87.4128
  },
  {
    "name": "Brainerd Lakes Rgnl",
    "city": "Brainerd",
    "country": "United States",
    "code1": "BRD",
    "code2": "KBRD",
    "lat": 46.398308,
    "lng": -94.138078
  },
  {
    "name": "Greenbrier Valley Airport",
    "city": "Lewisburg",
    "country": "United States",
    "code1": "LWB",
    "code2": "KLWB",
    "lat": 37.858333,
    "lng": -80.399444
  },
  {
    "name": "Pitt-Greenville Airport",
    "city": "Greenville",
    "country": "United States",
    "code1": "PGV",
    "code2": "KPGV",
    "lat": 35.635278,
    "lng": -77.385278
  },
  {
    "name": "Chefornak Airport",
    "city": "Chefornak",
    "country": "United States",
    "code1": "CYF",
    "code2": "PACK",
    "lat": 60.149167,
    "lng": -164.285556
  },
  {
    "name": "Oxnard - Ventura County",
    "city": "Oxnard",
    "country": "United States",
    "code1": "OXR",
    "code2": "KOXR",
    "lat": 34.200833,
    "lng": -119.207222
  },
  {
    "name": "Branson LLC",
    "city": "Branson",
    "country": "United States",
    "code1": "BKG",
    "code2": "KBBG",
    "lat": 36.531994,
    "lng": -93.200556
  },
  {
    "name": "Tongren",
    "city": "Tongren",
    "country": "China",
    "code1": "TEN",
    "code2": "ZUTR",
    "lat": 27.884,
    "lng": 109.31
  },
  {
    "name": "Jinggangshan",
    "city": "Jian",
    "country": "China",
    "code1": "KNC",
    "code2": "ZSJA",
    "lat": 26.8575,
    "lng": 114.737222
  },
  {
    "name": "Penn Station",
    "city": "Baltimore",
    "country": "United States",
    "code1": "ZBP",
    "code2": "\\N",
    "lat": 39.307222,
    "lng": -76.615556
  },
  {
    "name": "Penn Station",
    "city": "New York",
    "country": "United States",
    "code1": "ZYP",
    "code2": "\\N",
    "lat": 40.7505,
    "lng": -73.9935
  },
  {
    "name": "Niau",
    "city": "Niau",
    "country": "French Polynesia",
    "code1": "NIU",
    "code2": "NTKN",
    "lat": -16.119037,
    "lng": -146.368406
  },
  {
    "name": "Stratton ANGB - Schenectady County Airpor",
    "city": "Scotia NY",
    "country": "United States",
    "code1": "SCH",
    "code2": "KSCH",
    "lat": 42.85245555,
    "lng": -73.928866666
  },
  {
    "name": "Begishevo",
    "city": "Nizhnekamsk",
    "country": "Russia",
    "code1": "NBC",
    "code2": "UWKE",
    "lat": 55.34,
    "lng": 52.06
  },
  {
    "name": "Bogovarovo",
    "city": "Bogovarovo",
    "country": "Russia",
    "code1": "",
    "code2": "\\N",
    "lat": 58.8535,
    "lng": 47.0114
  },
  {
    "name": "Summit Camp",
    "city": "Greenland Ice Cap",
    "country": "Greenland",
    "code1": "",
    "code2": "GSUM",
    "lat": 72.5795841916667,
    "lng": -38.4591850305556
  },
  {
    "name": "Warri Airport",
    "city": "Osubi",
    "country": "Nigeria",
    "code1": "QRW",
    "code2": "DNSU",
    "lat": 5.31,
    "lng": 5.45
  },
  {
    "name": "Volkel",
    "city": "Volkel",
    "country": "Netherlands",
    "code1": "",
    "code2": "EHVK",
    "lat": 51.656389,
    "lng": 5.708611
  },
  {
    "name": "Sayak Airport",
    "city": "Siargao",
    "country": "Philippines",
    "code1": "",
    "code2": "RPNS",
    "lat": 9.859097,
    "lng": 126.014017
  },
  {
    "name": "Langeoog Airport",
    "city": "Langeoog",
    "country": "Germany",
    "code1": "LGO",
    "code2": "EDWL",
    "lat": 53.7425,
    "lng": 7.49778
  },
  {
    "name": "Fane Airport",
    "city": "Fane",
    "country": "Papua New Guinea",
    "code1": "FNE",
    "code2": "\\N",
    "lat": -8.55,
    "lng": 147.083
  },
  {
    "name": "Itokama Airport",
    "city": "Itokama",
    "country": "Papua New Guinea",
    "code1": "ITK",
    "code2": "\\N",
    "lat": -9.2,
    "lng": 148.25
  },
  {
    "name": "Ononge Airport",
    "city": "Ononge",
    "country": "Papua New Guinea",
    "code1": "ONB",
    "code2": "\\N",
    "lat": -8.583,
    "lng": 147.2
  },
  {
    "name": "Tapini Airport",
    "city": "Tapini",
    "country": "Papua New Guinea",
    "code1": "TPI",
    "code2": "\\N",
    "lat": -8.35,
    "lng": 146.983
  },
  {
    "name": "Wanigela Airport",
    "city": "Wanigela",
    "country": "Papua New Guinea",
    "code1": "AGL",
    "code2": "\\N",
    "lat": -9.333,
    "lng": 149.15
  },
  {
    "name": "Woitape Airport",
    "city": "Woitape",
    "country": "Papua New Guinea",
    "code1": "WTP",
    "code2": "\\N",
    "lat": -8.533,
    "lng": 147.25
  },
  {
    "name": "Awaba Airport",
    "city": "Awaba",
    "country": "Papua New Guinea",
    "code1": "AWB",
    "code2": "\\N",
    "lat": -8.014,
    "lng": 142.75
  },
  {
    "name": "Telefomin Airport",
    "city": "Telefomin",
    "country": "Papua New Guinea",
    "code1": "TFM",
    "code2": "\\N",
    "lat": -5.117,
    "lng": 141.633
  },
  {
    "name": "Kappelen",
    "city": "Biel",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSZP",
    "lat": 47.089167,
    "lng": 7.29
  },
  {
    "name": "Nelspruit Airport",
    "city": "Nelspruit",
    "country": "South Africa",
    "code1": "NLP",
    "code2": "FANS",
    "lat": -25.5,
    "lng": 30.9138
  },
  {
    "name": "Cherkassy",
    "city": "Cherkassy",
    "country": "Ukraine",
    "code1": "CKC",
    "code2": "UKKE",
    "lat": 49.416666,
    "lng": 32.1333
  },
  {
    "name": "Gotska Sandon Heliport",
    "city": "Gotland",
    "country": "Sweden",
    "code1": "",
    "code2": "\\N",
    "lat": 58.392393,
    "lng": 19.193142
  },
  {
    "name": "Lauterhorn",
    "city": "Faro",
    "country": "Sweden",
    "code1": "",
    "code2": "\\N",
    "lat": 57.9521,
    "lng": 19.0812
  },
  {
    "name": "St. Augustine Airport",
    "city": "St. Augustine Airport",
    "country": "United States",
    "code1": "UST",
    "code2": "KSGJ",
    "lat": 29.959167,
    "lng": -81.339722
  },
  {
    "name": "Mykolaiv International Airport",
    "city": "Nikolayev",
    "country": "Ukraine",
    "code1": "NLV",
    "code2": "UKON",
    "lat": 47.0579,
    "lng": 31.9198
  },
  {
    "name": "Ramechhap",
    "city": "Ramechhap",
    "country": "Nepal",
    "code1": "RHP",
    "code2": "VNRC",
    "lat": 27.394005,
    "lng": 86.06144
  },
  {
    "name": "Charles M Schulz Sonoma Co",
    "city": "Santa Rosa",
    "country": "United States",
    "code1": "STS",
    "code2": "KSTS",
    "lat": 38.508978,
    "lng": -122.81288
  },
  {
    "name": "Kissimmee Gateway Airport",
    "city": "Kissimmee",
    "country": "United States",
    "code1": "ISM",
    "code2": "KISM",
    "lat": 28.289806,
    "lng": -81.437083
  },
  {
    "name": "Lake City Municipal Airport",
    "city": "Lake City",
    "country": "United States",
    "code1": "LCQ",
    "code2": "KLCQ",
    "lat": 30.181944,
    "lng": -82.576944
  },
  {
    "name": "DeLand Municipal Airport",
    "city": "DeLand",
    "country": "United States",
    "code1": "",
    "code2": "KDED",
    "lat": 29.066944,
    "lng": -81.283889
  },
  {
    "name": "Haller Airpark Airport",
    "city": "Green Cove Springs",
    "country": "United States",
    "code1": "",
    "code2": "7FL4",
    "lat": 29.903021,
    "lng": -81.685923
  },
  {
    "name": "Santa Lucia PNP Airstrip",
    "city": "Santa Lucia",
    "country": "Peru",
    "code1": "",
    "code2": "SLPA",
    "lat": -8.337041,
    "lng": -76.385733
  },
  {
    "name": "Logan-Cache",
    "city": "Logan",
    "country": "United States",
    "code1": "LGU",
    "code2": "KLGU",
    "lat": 41.791,
    "lng": -111.852
  },
  {
    "name": "Brigham City",
    "city": "Brigham City",
    "country": "United States",
    "code1": "BMC",
    "code2": "KBMC",
    "lat": 41.552,
    "lng": -112.062
  },
  {
    "name": "Malad City",
    "city": "Malad City",
    "country": "United States",
    "code1": "MLD",
    "code2": "KMLD",
    "lat": 42.17,
    "lng": -112.289
  },
  {
    "name": "Aspen Pitkin County Sardy Field",
    "city": "Aspen",
    "country": "United States",
    "code1": "ASE",
    "code2": "KASE",
    "lat": 39.2232,
    "lng": -106.869
  },
  {
    "name": "Hilton Head",
    "city": "Hilton Head",
    "country": "United States",
    "code1": "HHH",
    "code2": "KHHH",
    "lat": 32.216,
    "lng": -80.752
  },
  {
    "name": "Barataevka",
    "city": "Ulyanovsk",
    "country": "Russia",
    "code1": "ULV",
    "code2": "UWLL",
    "lat": 54.268299,
    "lng": 48.2267
  },
  {
    "name": "Horog",
    "city": "Horog",
    "country": "Tajikistan",
    "code1": "",
    "code2": "UTOD",
    "lat": 37.5,
    "lng": 71.5
  },
  {
    "name": "Sabi Sabi Airport",
    "city": "Sabi Sabi",
    "country": "South Africa",
    "code1": "GSS",
    "code2": "\\N",
    "lat": -24.9415,
    "lng": 31.4446
  },
  {
    "name": "Philadelphia 30th St Station",
    "city": "Philadelphia",
    "country": "United States",
    "code1": "ZFV",
    "code2": "\\N",
    "lat": 39.9557,
    "lng": -75.182
  },
  {
    "name": "KBWD",
    "city": "Brownwood",
    "country": "United States",
    "code1": "BWD",
    "code2": "\\N",
    "lat": 31.7936111,
    "lng": -98.9565
  },
  {
    "name": "Mexia - Limestone County Airport",
    "city": "Mexia",
    "country": "United States",
    "code1": "LXY",
    "code2": "\\N",
    "lat": 31.6411783,
    "lng": -96.5144594
  },
  {
    "name": "Kerrville Municipal Airport",
    "city": "Kerrville",
    "country": "United States",
    "code1": "ERV",
    "code2": "KERV",
    "lat": 29.9766667,
    "lng": -99.0854722
  },
  {
    "name": "Birrfeld",
    "city": "Birrfeld",
    "country": "Switzerland",
    "code1": "",
    "code2": "LSZF",
    "lat": 47.4436,
    "lng": 8.23361
  },
  {
    "name": "Sussex Co",
    "city": "Georgetown",
    "country": "United States",
    "code1": "GED",
    "code2": "KGED",
    "lat": 38.689194,
    "lng": -75.358889
  },
  {
    "name": "Seal Cove Seaplane Base",
    "city": "Prince Rupert",
    "country": "Canada",
    "code1": "ZSW",
    "code2": "CZSW",
    "lat": 54.3333,
    "lng": -130.283
  },
  {
    "name": "Great Bend Municipal",
    "city": "Great Bend",
    "country": "United States",
    "code1": "GBN",
    "code2": "KGBD",
    "lat": 38.344167,
    "lng": -98.859167
  },
  {
    "name": "Hays Regional Airport",
    "city": "Hays",
    "country": "United States",
    "code1": "HYS",
    "code2": "KHYS",
    "lat": 38.8422,
    "lng": -99.2732
  },
  {
    "name": "Spirit Of St Louis",
    "city": "Null",
    "country": "United States",
    "code1": "SUS",
    "code2": "KSUS",
    "lat": 38.662119,
    "lng": -90.652044
  },
  {
    "name": "Ely Municipal",
    "city": "Ely",
    "country": "United States",
    "code1": "LYU",
    "code2": "KELO",
    "lat": 47.824444,
    "lng": -91.830833
  },
  {
    "name": "Grand Rapids Itasca County",
    "city": "Grand Rapids MN",
    "country": "United States",
    "code1": "GPZ",
    "code2": "KGPZ",
    "lat": 47.211111,
    "lng": -93.509722
  },
  {
    "name": "Thief River Falls",
    "city": "Thief River Falls",
    "country": "United States",
    "code1": "TVF",
    "code2": "KTVF",
    "lat": 48.065556,
    "lng": -96.185
  },
  {
    "name": "Eagle River",
    "city": "Eagle River",
    "country": "United States",
    "code1": "EGV",
    "code2": "KEGV",
    "lat": 45.932333,
    "lng": -89.268283
  },
  {
    "name": "Lakeland",
    "city": "Minocqua - Woodruff",
    "country": "United States",
    "code1": "ARV",
    "code2": "KARV",
    "lat": 45.927778,
    "lng": -89.730833
  },
  {
    "name": "Ankeny Regl Airport",
    "city": "Ankeny",
    "country": "United States",
    "code1": "IKV",
    "code2": "KIKV",
    "lat": 41.691389,
    "lng": -93.566389
  },
  {
    "name": "Berens River",
    "city": "Berens River",
    "country": "Canada",
    "code1": "YBV",
    "code2": "CYBV",
    "lat": 52.358889,
    "lng": -97.018333
  },
  {
    "name": "Corpus Christi NAS",
    "city": "Corpus Christi",
    "country": "United States",
    "code1": "NGP",
    "code2": "KNGP",
    "lat": 27.692701,
    "lng": -97.290376
  },
  {
    "name": "Seaplane Base",
    "city": "Port Simpson",
    "country": "Canada",
    "code1": "YPI",
    "code2": "CYPI",
    "lat": 54.566667,
    "lng": -130.433333
  },
  {
    "name": "Avalon",
    "city": "Catalina Island",
    "country": "United States",
    "code1": "AVX",
    "code2": "KAVX",
    "lat": 33.405,
    "lng": -118.415833
  },
  {
    "name": "Mojave",
    "city": "Mojave",
    "country": "United States",
    "code1": "MHV",
    "code2": "KMHV",
    "lat": 35.059364,
    "lng": -118.151856
  },
  {
    "name": "Air Base",
    "city": "Interlaken",
    "country": "Switzerland",
    "code1": "ZIN",
    "code2": "LSMI",
    "lat": 46.6766,
    "lng": 7.87908
  },
  {
    "name": "Kenmore Air Harbor Inc Seaplane Base",
    "city": "Kenmore",
    "country": "United States",
    "code1": "KEH",
    "code2": "\\N",
    "lat": 47.7548,
    "lng": -122.259
  },
  {
    "name": "Municipal",
    "city": "Corozal",
    "country": "Belize",
    "code1": "CZH",
    "code2": "\\N",
    "lat": 18.3822,
    "lng": -88.4119
  },
  {
    "name": "Inisheer",
    "city": "Inisheer",
    "country": "Ireland",
    "code1": "INQ",
    "code2": "EIIR",
    "lat": 53.0647,
    "lng": -9.5109
  },
  {
    "name": "Winterlandeplatz",
    "city": "Maennlichen",
    "country": "Switzerland",
    "code1": "",
    "code2": "\\N",
    "lat": 46.610833,
    "lng": 7.9425
  },
  {
    "name": "Paketzentrum",
    "city": "Ostermundigen",
    "country": "Switzerland",
    "code1": "",
    "code2": "\\N",
    "lat": 46.963,
    "lng": 7.482
  },
  {
    "name": "Strezhevoy",
    "city": "Strezhevoy",
    "country": "Russia",
    "code1": "SWT",
    "code2": "UNSS",
    "lat": 60.716667,
    "lng": 77.65
  },
  {
    "name": "Cashel",
    "city": "Cashel",
    "country": "Ireland",
    "code1": "",
    "code2": "\\N",
    "lat": 52.5158333,
    "lng": -7.8855556
  },
  {
    "name": "Hutchinson Municipal Airport",
    "city": "Hutchinson",
    "country": "United States",
    "code1": "HUT",
    "code2": "KHUT",
    "lat": 38.0655,
    "lng": -97.8606
  },
  {
    "name": "Bagram AFB",
    "city": "Kabul",
    "country": "Afghanistan",
    "code1": "BPM",
    "code2": "OAIX",
    "lat": 34.5646,
    "lng": 69.1554
  },
  {
    "name": "Al Kharj AFB",
    "city": "Al Kharj",
    "country": "Saudi Arabia",
    "code1": "",
    "code2": "OEPS",
    "lat": 24.0346,
    "lng": 47.345
  },
  {
    "name": "Eagle County Airport",
    "city": "Eagle",
    "country": "United States",
    "code1": "EGA",
    "code2": "\\N",
    "lat": 39.6427611,
    "lng": -106.9159347
  },
  {
    "name": "Oak Lawn Train Station",
    "city": "Oak Lawn",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 41.7198242969588,
    "lng": -87.7488327026367
  },
  {
    "name": "Wrigleyville",
    "city": "Chicago",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 41.948958067066,
    "lng": -87.6587533950806
  },
  {
    "name": "Gelendzik",
    "city": "Gelendzik",
    "country": "Russia",
    "code1": "GDZ",
    "code2": "\\N",
    "lat": 44.566666666667,
    "lng": 38.016666666667
  },
  {
    "name": "Rosecrans Mem",
    "city": "Rosecrans",
    "country": "United States",
    "code1": "STJ",
    "code2": "KSTJ",
    "lat": 39.771944,
    "lng": -94.909706
  },
  {
    "name": "Hartford Union Station",
    "city": "Hartford",
    "country": "United States",
    "code1": "ZRT",
    "code2": "\\N",
    "lat": 41.76888,
    "lng": -72.6815
  },
  {
    "name": "Stamford Amtrak Station",
    "city": "Stamford",
    "country": "United States",
    "code1": "ZTF",
    "code2": "\\N",
    "lat": 41.046937,
    "lng": -73.541493
  },
  {
    "name": "Newark Penn Station",
    "city": "Newark",
    "country": "United States",
    "code1": "ZRP",
    "code2": "\\N",
    "lat": 40.734722,
    "lng": -74.164167
  },
  {
    "name": "Papa Airport",
    "city": "Papa",
    "country": "Hungary",
    "code1": "",
    "code2": "LHPA",
    "lat": 47.3636,
    "lng": 17.5008
  },
  {
    "name": "Cuxhaven Airport",
    "city": "Cuxhaven",
    "country": "Germany",
    "code1": "NDZ",
    "code2": "KNDZ",
    "lat": 53.768612,
    "lng": 8.644722
  },
  {
    "name": "Volk Fld",
    "city": "Camp Douglas",
    "country": "United States",
    "code1": "VOK",
    "code2": "KVOK",
    "lat": 43.938956,
    "lng": -90.253433
  },
  {
    "name": "BFT County Airport",
    "city": "Beauford",
    "country": "United States",
    "code1": "BFT",
    "code2": "KBFT",
    "lat": 32.41083,
    "lng": -80.635
  },
  {
    "name": "Adana-Incirlik Airbase",
    "city": "Adana",
    "country": "Turkey",
    "code1": "UAB",
    "code2": "KUAB",
    "lat": 37.00028,
    "lng": 35.41833
  },
  {
    "name": "Gunnison - Crested Butte",
    "city": "Gunnison",
    "country": "United States",
    "code1": "GUC",
    "code2": "KGUC",
    "lat": 38.533889,
    "lng": -106.933056
  },
  {
    "name": "Xi\\\\'An Xiguan",
    "city": "Xi\\\\'AN",
    "country": "China",
    "code1": "SIA",
    "code2": "ZLSN",
    "lat": 34.3767,
    "lng": 109.12
  },
  {
    "name": "Zamperini Field Airport",
    "city": "Torrance",
    "country": "United States",
    "code1": "TOA",
    "code2": "KTOA",
    "lat": 33.803392,
    "lng": -118.339611
  },
  {
    "name": "Manistee County-Blacker Airport",
    "city": "Manistee",
    "country": "United States",
    "code1": "MBL",
    "code2": "KMBL",
    "lat": 44.2725,
    "lng": -86.246944
  },
  {
    "name": "Hickam Air Force Base",
    "city": "Honolulu",
    "country": "United States",
    "code1": "",
    "code2": "PHIK",
    "lat": 21.318681,
    "lng": -157.922427
  },
  {
    "name": "Charlotte County-Punta Gorda Airport",
    "city": "Punta Gorda",
    "country": "United States",
    "code1": "PGD",
    "code2": "KPGD",
    "lat": 26.919722,
    "lng": -81.990556
  },
  {
    "name": "Grand Canyon Heliport",
    "city": "Grand Canyon",
    "country": "United States",
    "code1": "JGC",
    "code2": "\\N",
    "lat": 35.96666666,
    "lng": -112.13333333
  },
  {
    "name": "Northern Aroostook Regional Airport",
    "city": "Frenchville",
    "country": "United States",
    "code1": "WFK",
    "code2": "KFVE",
    "lat": 47.285556,
    "lng": -68.312778
  },
  {
    "name": "Chautauqua County-Jamestown",
    "city": "Jamestown",
    "country": "United States",
    "code1": "JHW",
    "code2": "KJHW",
    "lat": 42.153333,
    "lng": -79.258056
  },
  {
    "name": "Riviere Rouge - Mont-Tremblant International Inc. Airport",
    "city": "Mont-Tremblant",
    "country": "Canada",
    "code1": "YTM",
    "code2": "CYFJ",
    "lat": 46.409444,
    "lng": -74.78
  },
  {
    "name": "Lake Cumberland Regional Airport",
    "city": "Somerset",
    "country": "United States",
    "code1": "SME",
    "code2": "KSME",
    "lat": 37.053611,
    "lng": -84.615556
  },
  {
    "name": "Shenandoah Valley Regional Airport",
    "city": "Weyers Cave",
    "country": "United States",
    "code1": "SHD",
    "code2": "KSHD",
    "lat": 38.263889,
    "lng": -78.896389
  },
  {
    "name": "Devils Lake Regional Airport",
    "city": "Devils Lake",
    "country": "United States",
    "code1": "DVL",
    "code2": "KDVL",
    "lat": 48.114444,
    "lng": -98.908611
  },
  {
    "name": "Dickinson Theodore Roosevelt Regional Airport",
    "city": "Dickinson",
    "country": "United States",
    "code1": "DIK",
    "code2": "KDIK",
    "lat": 46.7975,
    "lng": -102.801944
  },
  {
    "name": "Sidney-Richland Municipal Airport",
    "city": "Sidney",
    "country": "United States",
    "code1": "SDY",
    "code2": "KSDY",
    "lat": 47.706944,
    "lng": -104.1925
  },
  {
    "name": "Chadron Municipal Airport",
    "city": "Chadron",
    "country": "United States",
    "code1": "CDR",
    "code2": "KCDR",
    "lat": 42.8375,
    "lng": -103.095556
  },
  {
    "name": "Alliance Municipal Airport",
    "city": "Alliance",
    "country": "United States",
    "code1": "AIA",
    "code2": "KAIA",
    "lat": 42.053333,
    "lng": -102.803889
  },
  {
    "name": "McCook Regional Airport",
    "city": "McCook",
    "country": "United States",
    "code1": "MCK",
    "code2": "KMCK",
    "lat": 40.206389,
    "lng": -100.592222
  },
  {
    "name": "Florida Keys Marathon Airport",
    "city": "Marathon",
    "country": "United States",
    "code1": "MTH",
    "code2": "KMTH",
    "lat": 24.726111,
    "lng": -81.051389
  },
  {
    "name": "Dawson Community Airport",
    "city": "Glendive",
    "country": "United States",
    "code1": "GDV",
    "code2": "KGDV",
    "lat": 47.138611,
    "lng": -104.807222
  },
  {
    "name": "LM Clayton Airport",
    "city": "Wolf Point",
    "country": "United States",
    "code1": "OLF",
    "code2": "KOLF",
    "lat": 48.094444,
    "lng": -105.575
  },
  {
    "name": "Yellowstone Airport",
    "city": "West Yellowstone",
    "country": "United States",
    "code1": "WYS",
    "code2": "KWYS",
    "lat": 44.688333,
    "lng": -111.1175
  },
  {
    "name": "San Luis Valley Regional Airport",
    "city": "Alamosa",
    "country": "United States",
    "code1": "ALS",
    "code2": "KALS",
    "lat": 37.435,
    "lng": -105.866667
  },
  {
    "name": "Canyonlands Field",
    "city": "Moab",
    "country": "United States",
    "code1": "CNY",
    "code2": "KCNY",
    "lat": 38.755,
    "lng": -109.754722
  },
  {
    "name": "Ely Airport",
    "city": "Ely",
    "country": "United States",
    "code1": "ELY",
    "code2": "KELY",
    "lat": 39.299722,
    "lng": -114.841944
  },
  {
    "name": "Vernal Regional Airport",
    "city": "Vernal",
    "country": "United States",
    "code1": "VEL",
    "code2": "KVEL",
    "lat": 40.440833,
    "lng": -109.51
  },
  {
    "name": "Sierra Blanca Regional Airport",
    "city": "Ruidoso",
    "country": "United States",
    "code1": "SRR",
    "code2": "KSRR",
    "lat": 33.46285,
    "lng": -105.534751
  },
  {
    "name": "Show Low Regional Airport",
    "city": "Show Low",
    "country": "United States",
    "code1": "SOW",
    "code2": "KSOW",
    "lat": 34.265556,
    "lng": -110.005556
  },
  {
    "name": "McCall Municipal Airport",
    "city": "McCall",
    "country": "United States",
    "code1": "MYL",
    "code2": "KMYL",
    "lat": 44.889722,
    "lng": -116.101389
  },
  {
    "name": "Lemhi County Airport",
    "city": "Salmon",
    "country": "United States",
    "code1": "SMN",
    "code2": "KSMN",
    "lat": 45.123889,
    "lng": -113.881389
  },
  {
    "name": "Mammoth Yosemite Airport",
    "city": "Mammoth Lakes",
    "country": "United States",
    "code1": "MMH",
    "code2": "KMMH",
    "lat": 37.624049,
    "lng": -118.837772
  },
  {
    "name": "Friday Harbor Airport",
    "city": "Friday Harbor",
    "country": "United States",
    "code1": "FRD",
    "code2": "KFHR",
    "lat": 48.521944,
    "lng": -123.024444
  },
  {
    "name": "Orcas Island Airport",
    "city": "Eastsound",
    "country": "United States",
    "code1": "ESD",
    "code2": "KORS",
    "lat": 48.708056,
    "lng": -122.910556
  },
  {
    "name": "Anacortes Airport",
    "city": "Anacortes",
    "country": "United States",
    "code1": "OTS",
    "code2": "\\N",
    "lat": 48.498889,
    "lng": -122.6625
  },
  {
    "name": "Astoria Regional Airport",
    "city": "Astoria",
    "country": "United States",
    "code1": "AST",
    "code2": "KAST",
    "lat": 46.157972,
    "lng": -123.878694
  },
  {
    "name": "Newport Municipal Airport",
    "city": "Newport",
    "country": "United States",
    "code1": "ONP",
    "code2": "KNOP",
    "lat": 44.580361,
    "lng": -124.057917
  },
  {
    "name": "Emmonak Airport",
    "city": "Emmonak",
    "country": "United States",
    "code1": "EMK",
    "code2": "PAEM",
    "lat": 62.786111,
    "lng": -164.490833
  },
  {
    "name": "Unalakleet Airport",
    "city": "Unalakleet",
    "country": "United States",
    "code1": "UNK",
    "code2": "PAUN",
    "lat": 63.888333,
    "lng": -160.798889
  },
  {
    "name": "Ugnu-Kuparuk Airport",
    "city": "Kuparuk",
    "country": "United States",
    "code1": "UUK",
    "code2": "PAKU",
    "lat": 70.330833,
    "lng": -149.5975
  },
  {
    "name": "Shageluk Airport",
    "city": "Shageluk",
    "country": "United States",
    "code1": "SHX",
    "code2": "PAHX",
    "lat": 62.692222,
    "lng": -159.569167
  },
  {
    "name": "Chuathbaluk Airport",
    "city": "Chuathbaluk",
    "country": "United States",
    "code1": "CHU",
    "code2": "PACH",
    "lat": 61.579167,
    "lng": -159.215556
  },
  {
    "name": "Nuiqsut Airport",
    "city": "Nuiqsut",
    "country": "United States",
    "code1": "NUI",
    "code2": "PAQT",
    "lat": 70.21,
    "lng": -151.005556
  },
  {
    "name": "Eek Airport",
    "city": "Eek",
    "country": "United States",
    "code1": "EEK",
    "code2": "PAEE",
    "lat": 60.213611,
    "lng": -162.043889
  },
  {
    "name": "Kasigluk Airport",
    "city": "Kasigluk",
    "country": "United States",
    "code1": "KUK",
    "code2": "PFKA",
    "lat": 60.873333,
    "lng": -162.524444
  },
  {
    "name": "Kwethluk Airport",
    "city": "Kwethluk",
    "country": "United States",
    "code1": "KWT",
    "code2": "PFKW",
    "lat": 60.790278,
    "lng": -161.443611
  },
  {
    "name": "Kwigillingok Airport",
    "city": "Kwigillingok",
    "country": "United States",
    "code1": "KWK",
    "code2": "PAGG",
    "lat": 59.876389,
    "lng": -163.168611
  },
  {
    "name": "Marshall Don Hunter Sr. Airport",
    "city": "Marshall",
    "country": "United States",
    "code1": "MLL",
    "code2": "PADM",
    "lat": 61.8646418,
    "lng": -162.026111
  },
  {
    "name": "Russian Mission Airport",
    "city": "Russian Mission",
    "country": "United States",
    "code1": "RSH",
    "code2": "PARS",
    "lat": 61.775,
    "lng": -161.319444
  },
  {
    "name": "Tuntutuliak Airport",
    "city": "Tuntutuliak",
    "country": "United States",
    "code1": "WTL",
    "code2": "\\N",
    "lat": 60.335278,
    "lng": -162.666944
  },
  {
    "name": "Ekwok Airport",
    "city": "Ekwok",
    "country": "United States",
    "code1": "KEK",
    "code2": "\\N",
    "lat": 59.356944,
    "lng": -157.471111
  },
  {
    "name": "Koliganek Airport",
    "city": "Koliganek",
    "country": "United States",
    "code1": "KGK",
    "code2": "PAJZ",
    "lat": 59.726667,
    "lng": -157.259444
  },
  {
    "name": "Levelock Airport",
    "city": "Levelock",
    "country": "United States",
    "code1": "KLL",
    "code2": "\\N",
    "lat": 59.128056,
    "lng": -156.858611
  },
  {
    "name": "Manokotak Airport",
    "city": "Manokotak",
    "country": "United States",
    "code1": "KMO",
    "code2": "PAMB",
    "lat": 58.990278,
    "lng": -159.05
  },
  {
    "name": "Twin Hills Airport",
    "city": "Twin Hills",
    "country": "United States",
    "code1": "TWA",
    "code2": "\\N",
    "lat": 59.074444,
    "lng": -160.275
  },
  {
    "name": "Chalkyitsik Airport",
    "city": "Chalkyitsik",
    "country": "United States",
    "code1": "CIK",
    "code2": "PACI",
    "lat": 66.645,
    "lng": -143.74
  },
  {
    "name": "Eagle Airport",
    "city": "Eagle",
    "country": "United States",
    "code1": "EAA",
    "code2": "PAEG",
    "lat": 64.778056,
    "lng": -141.149722
  },
  {
    "name": "Hughes Airport",
    "city": "Hughes",
    "country": "United States",
    "code1": "HUS",
    "code2": "PAHU",
    "lat": 66.039167,
    "lng": -154.264722
  },
  {
    "name": "Huslia Airport",
    "city": "Huslia",
    "country": "United States",
    "code1": "HSL",
    "code2": "PAHL",
    "lat": 65.697778,
    "lng": -156.351389
  },
  {
    "name": "Livingood Airport",
    "city": "Livingood",
    "country": "United States",
    "code1": "LIV",
    "code2": "\\N",
    "lat": 65.531111,
    "lng": -148.541111
  },
  {
    "name": "Minto Airport",
    "city": "Minto",
    "country": "United States",
    "code1": "MNT",
    "code2": "\\N",
    "lat": 65.143611,
    "lng": -149.37
  },
  {
    "name": "Nulato Airport",
    "city": "Nulato",
    "country": "United States",
    "code1": "NUL",
    "code2": "PANU",
    "lat": 64.729444,
    "lng": -158.074167
  },
  {
    "name": "Rampart Airport",
    "city": "Rampart",
    "country": "United States",
    "code1": "RMP",
    "code2": "\\N",
    "lat": 65.507778,
    "lng": -150.140833
  },
  {
    "name": "Tanana Airport",
    "city": "Tanana",
    "country": "United States",
    "code1": "TAL",
    "code2": "\\N",
    "lat": 65.179556,
    "lng": -152.075833
  },
  {
    "name": "Venetie Airport",
    "city": "Venetie",
    "country": "United States",
    "code1": "VEE",
    "code2": "PAVE",
    "lat": 67.008611,
    "lng": -146.366389
  },
  {
    "name": "Beaver Airport",
    "city": "Beaver",
    "country": "United States",
    "code1": "WBQ",
    "code2": "PAWB",
    "lat": 66.362222,
    "lng": -147.406667
  },
  {
    "name": "Central Airport",
    "city": "Central",
    "country": "United States",
    "code1": "CEM",
    "code2": "PACE",
    "lat": 65.573889,
    "lng": -144.780833
  },
  {
    "name": "Shungnak Airport",
    "city": "Shungnak",
    "country": "United States",
    "code1": "SHG",
    "code2": "PAGH",
    "lat": 66.888056,
    "lng": -157.1625
  },
  {
    "name": "Birch Creek Airport",
    "city": "Brich Creek",
    "country": "United States",
    "code1": "KBC",
    "code2": "\\N",
    "lat": 66.256708,
    "lng": -145.815319
  },
  {
    "name": "Coldfoot Airport",
    "city": "Coldfoot",
    "country": "United States",
    "code1": "CXF",
    "code2": "\\N",
    "lat": 67.251389,
    "lng": -150.176111
  },
  {
    "name": "Inyokern Airport",
    "city": "Inyokern",
    "country": "United States",
    "code1": "IYK",
    "code2": "KIYK",
    "lat": 35.658889,
    "lng": -117.829444
  },
  {
    "name": "Visalia Municipal Airport",
    "city": "Visalia",
    "country": "United States",
    "code1": "VIS",
    "code2": "KVIS",
    "lat": 36.318611,
    "lng": -119.392778
  },
  {
    "name": "Merced Municipal Airport",
    "city": "Merced",
    "country": "United States",
    "code1": "MCE",
    "code2": "KMCE",
    "lat": 37.284722,
    "lng": -120.513889
  },
  {
    "name": "Laguna de Los Patos International Airport",
    "city": "Colonia",
    "country": "Uruguay",
    "code1": "CYR",
    "code2": "SUCA",
    "lat": -34.4564,
    "lng": -57.7706
  },
  {
    "name": "Camelo",
    "city": "Camelo",
    "country": "Uruguay",
    "code1": "",
    "code2": "SULO",
    "lat": -33.963882,
    "lng": -58.288612
  },
  {
    "name": "Amarais Airport",
    "city": "Campinas",
    "country": "Brazil",
    "code1": "CPQ",
    "code2": "SDAM",
    "lat": -22.8592,
    "lng": -47.1082
  },
  {
    "name": "Phoenix Goodyear",
    "city": "Goodyear",
    "country": "United States",
    "code1": "",
    "code2": "KGYR",
    "lat": 33.423725,
    "lng": -112.374456
  },
  {
    "name": "Park City",
    "city": "Park City",
    "country": "United States",
    "code1": "",
    "code2": "\\N",
    "lat": 40.659444,
    "lng": -111.4997222
  },
  {
    "name": "Toowoomba",
    "city": "Toowoomba",
    "country": "Australia",
    "code1": "TWB",
    "code2": "YTWB",
    "lat": -27.542778,
    "lng": 151.916389
  },
  {
    "name": "Ballera",
    "city": "Ballera",
    "country": "Australia",
    "code1": "",
    "code2": "YLLE",
    "lat": -27.408333,
    "lng": 141.808333
  },
  {
    "name": "Gatton",
    "city": "Gatton",
    "country": "Australia",
    "code1": "",
    "code2": "YGAT",
    "lat": -27.5583000183105,
    "lng": 152.341995239258
  },
  {
    "name": "Arkalyk Airport",
    "city": "Arkalyk",
    "country": "Kazakhstan",
    "code1": "AYK",
    "code2": "UAUR",
    "lat": 50.2395,
    "lng": 66.941
  },
  {
    "name": "Hamburger Hafen",
    "city": "Hamburg",
    "country": "Germany",
    "code1": "",
    "code2": "ZZ06",
    "lat": 53.542369,
    "lng": 9.981592
  },
  {
    "name": "Flugplatz Fehmarn-Neujellingsdorf",
    "city": "Neujellingsdorf",
    "country": "Germany",
    "code1": "",
    "code2": "ZZ05",
    "lat": 54.455802,
    "lng": 11.109273
  },
  {
    "name": "Nabern Teck",
    "city": "Kirchheim-Teck",
    "country": "Germany",
    "code1": "",
    "code2": "EDTN",
    "lat": 48.3676,
    "lng": 9.2863
  },
  {
    "name": "Angoon Seaplane Base",
    "city": "Angoon",
    "country": "United States",
    "code1": "AGN",
    "code2": "PAGN",
    "lat": 57.503611,
    "lng": -134.585
  },
  {
    "name": "Elfin Cove Seaplane Base",
    "city": "Elfin Cove",
    "country": "United States",
    "code1": "ELV",
    "code2": "PAEL",
    "lat": 58.195278,
    "lng": -136.3475
  },
  {
    "name": "Tenakee Seaplane Base",
    "city": "Tenakee Springs",
    "country": "United States",
    "code1": "TKE",
    "code2": "\\N",
    "lat": 57.779722,
    "lng": -135.218333
  },
  {
    "name": "Pelican Seaplane Base",
    "city": "Pelican",
    "country": "United States",
    "code1": "PEC",
    "code2": "\\N",
    "lat": 57.955278,
    "lng": -136.236389
  },
  {
    "name": "Chatham Seaplane Base",
    "city": "Sitka",
    "country": "United States",
    "code1": "CYM",
    "code2": "\\N",
    "lat": 57.515,
    "lng": -134.946111
  },
  {
    "name": "Funter Bay Seaplane Base",
    "city": "Funter Bay",
    "country": "United States",
    "code1": "FNR",
    "code2": "PANR",
    "lat": 58.254444,
    "lng": -134.897778
  },
  {
    "name": "Excursion Inlet Seaplane Base",
    "city": "Excursion Inlet",
    "country": "United States",
    "code1": "EXI",
    "code2": "\\N",
    "lat": 58.420556,
    "lng": -135.449167
  },
  {
    "name": "Hoonah Airport",
    "city": "Hoonah",
    "country": "United States",
    "code1": "HNH",
    "code2": "PAOH",
    "lat": 58.096111,
    "lng": -135.409722
  },
  {
    "name": "Kake Airport",
    "city": "Kake",
    "country": "United States",
    "code1": "AFE",
    "code2": "PAFE",
    "lat": 56.961389,
    "lng": -133.910278
  },
  {
    "name": "Craig Seaplane Base",
    "city": "Craig",
    "country": "United States",
    "code1": "CGA",
    "code2": "\\N",
    "lat": 55.478889,
    "lng": -133.147778
  },
  {
    "name": "Hollis Seaplane Base",
    "city": "Hollis",
    "country": "United States",
    "code1": "HYL",
    "code2": "\\N",
    "lat": 55.481667,
    "lng": -132.646111
  },
  {
    "name": "Metlakatla Seaplane Base",
    "city": "Metakatla",
    "country": "United States",
    "code1": "MTM",
    "code2": "PAMM",
    "lat": 55.131111,
    "lng": -131.578056
  },
  {
    "name": "Thorne Bay Seaplane Base",
    "city": "Thorne Bay",
    "country": "United States",
    "code1": "KTB",
    "code2": "\\N",
    "lat": 55.688056,
    "lng": -132.536667
  },
  {
    "name": "Hydaburg Seaplane Base",
    "city": "Hydaburg",
    "country": "United States",
    "code1": "HYG",
    "code2": "PAHY",
    "lat": 55.206389,
    "lng": -132.828333
  },
  {
    "name": "Hyder Seaplane Base",
    "city": "Hyder",
    "country": "United States",
    "code1": "WHD",
    "code2": "\\N",
    "lat": 55.903333,
    "lng": -130.006667
  },
  {
    "name": "Point Baker Seaplane Base",
    "city": "Point Baker",
    "country": "United States",
    "code1": "KPB",
    "code2": "\\N",
    "lat": 56.351944,
    "lng": -133.6225
  },
  {
    "name": "Port Protection Seaplane Base",
    "city": "Port Protection",
    "country": "United States",
    "code1": "PPV",
    "code2": "\\N",
    "lat": 56.328889,
    "lng": -133.61
  },
  {
    "name": "North Whale Seaplane Base",
    "city": "North Whale Pass",
    "country": "United States",
    "code1": "WWP",
    "code2": "\\N",
    "lat": 56.116389,
    "lng": -133.121667
  },
  {
    "name": "Chignik Lake Airport",
    "city": "Chignik Lake",
    "country": "United States",
    "code1": "KCQ",
    "code2": "\\N",
    "lat": 56.255,
    "lng": -158.775278
  },
  {
    "name": "Egegik Airport",
    "city": "Egegik",
    "country": "United States",
    "code1": "EGX",
    "code2": "PAII",
    "lat": 58.185556,
    "lng": -157.375556
  },
  {
    "name": "Chignik Lagoon Airport",
    "city": "Chignik Lagoon",
    "country": "United States",
    "code1": "KCL",
    "code2": "\\N",
    "lat": 56.311111,
    "lng": -158.534167
  },
  {
    "name": "Chignik Bay Seaplane Base",
    "city": "Chignik",
    "country": "United States",
    "code1": "KBW",
    "code2": "\\N",
    "lat": 56.295556,
    "lng": -158.401398
  },
  {
    "name": "Perryville Airport",
    "city": "Perryville",
    "country": "United States",
    "code1": "KPV",
    "code2": "PAPE",
    "lat": 55.906667,
    "lng": -159.160833
  },
  {
    "name": "Pilot Point Airport",
    "city": "Pilot Point",
    "country": "United States",
    "code1": "PIP",
    "code2": "PAPN",
    "lat": 57.585393,
    "lng": -157.571944
  },
  {
    "name": "South Naknek Airport",
    "city": "South Naknek",
    "country": "United States",
    "code1": "WSN",
    "code2": "PFWS",
    "lat": 58.702222,
    "lng": -157.0025
  },
  {
    "name": "Akhiok Airport",
    "city": "Akhiok",
    "country": "United States",
    "code1": "AKK",
    "code2": "PAKH",
    "lat": 56.938611,
    "lng": -154.1825
  },
  {
    "name": "Karuluk Airport",
    "city": "Karluk",
    "country": "United States",
    "code1": "KYK",
    "code2": "PAKY",
    "lat": 57.566944,
    "lng": -154.450278
  },
  {
    "name": "Larsen Bay Airport",
    "city": "Larsen Bay",
    "country": "United States",
    "code1": "KLN",
    "code2": "PALB",
    "lat": 57.535,
    "lng": -153.976667
  },
  {
    "name": "Old Harbor Airport",
    "city": "Old Harbor",
    "country": "United States",
    "code1": "OLH",
    "code2": "\\N",
    "lat": 57.218056,
    "lng": -153.269722
  },
  {
    "name": "Ouzinkie Airport",
    "city": "Ouzinkie",
    "country": "United States",
    "code1": "KOZ",
    "code2": "\\N",
    "lat": 57.922876,
    "lng": -152.500511
  },
  {
    "name": "Port Lions Airport",
    "city": "Port Lions",
    "country": "United States",
    "code1": "ORI",
    "code2": "\\N",
    "lat": 57.885278,
    "lng": -152.846111
  },
  {
    "name": "Alitak Seaplane Base",
    "city": "Lazy Bay",
    "country": "United States",
    "code1": "ALZ",
    "code2": "\\N",
    "lat": 56.899444,
    "lng": -154.247778
  },
  {
    "name": "Amook Bay Seaplane Base",
    "city": "Amook Bay",
    "country": "United States",
    "code1": "AOS",
    "code2": "\\N",
    "lat": 57.471389,
    "lng": -153.815278
  },
  {
    "name": "Kitoi Bay Seaplane Base",
    "city": "Kitoi Bay",
    "country": "United States",
    "code1": "KKB",
    "code2": "\\N",
    "lat": 58.190833,
    "lng": -152.370556
  },
  {
    "name": "Moser Bay Seaplane Base",
    "city": "Moser Bay",
    "country": "United States",
    "code1": "KMY",
    "code2": "\\N",
    "lat": 57.025556,
    "lng": -154.145833
  },
  {
    "name": "Olga Bay Seaplane Base",
    "city": "Olga Bay",
    "country": "United States",
    "code1": "KOY",
    "code2": "\\N",
    "lat": 57.161389,
    "lng": -154.229722
  },
  {
    "name": "Port Bailey Seaplane Base",
    "city": "Port Bailey",
    "country": "United States",
    "code1": "KPY",
    "code2": "\\N",
    "lat": 57.93,
