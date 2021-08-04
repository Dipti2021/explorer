const cityList = [
  {
    id: 1,
    city: "Hong Kong",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/09/aqua-luna-hong-kong.jpg",
    youtube: "",
    position: {lat: 22.319304, lng: 114.169361},


  },
  {
    id: 2,
    city: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://lp-cms-production.imgix.net/2021-03/GettyRF_512268647.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
    youtube: "",
    position: "{{lat: 13.756331, lng: 100.501765 }}",

  },
  {
    id: 3,
    city: "London",
    country: "United Kingdom",
    continent: "Europe",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image: "https://www.india.com/wp-content/uploads/2018/08/london-1.jpg",
    youtube: "",
    position: {lat: 51.507351, lng: -0.127758},

  },
  {
    id: 4,
    city: "Macau",
    country: "China",
    continent: "Asia",
    climate: "tropical;",
    pop: "Most popular places – more crowded",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-5kGGRQgxLPXoCyaZ4aBJ9NJi6XIb2R2FTb6A56qucKYO374OtUgnc_ah6O8-7bF5GQ&usqp=CAU",
    youtube: "",
    position: {lat: 22.198745, lng: 113.543873},

  },

  {
    id: 5,
    city: "Singapore",
    country: "Singapore",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://www.belaroundtheworld.com/wp-content/uploads/2018/06/Singapore-111.jpg",
    youtube: "https://www.youtube.com/watch?v=C25hvsaN9oo",
    position: {lat: 1.352083, lng: 103.819836},

  },

  {
    id: 6,
    city: "Paris",
    country: "France",
    continent: "Europe",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://media.darpanmagazine.com/library/uploads/lifestyle/content/paris.jpg",
    youtube: "",
    position: {lat: 48.856614, lng: 2.352222},

  },

  {
    id: 7,
    city: "Dubai",
    country: "UAE",
    continent: "Asia",
    climate: "Desert",
    pop: "Most popular places – more crowded",
    image:
      "https://www.worldatlas.com/upload/a3/f2/5a/shutterstock-151616084.jpg",
    youtube: "",
    position: {lat: 25.204849, lng: 55.270783},

  },

  {
    id: 8,
    city: "New York City",
    country: "US",
    continent: "North America",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://i0.wp.com/www.eatthis.com/wp-content/uploads/2019/02/new-york-city.jpg?fit=1200%2C879&ssl=1",
    youtube: "",
    position: {lat: 40.712775, lng: -74.005973},

  },
  {
    id: 9,
    city: "Kuala Lumpur",
    country: "Malaysia",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/02/Petronas-Twin-Towers-in-Kuala-Lumpur.jpg",
    youtube: "",
    position: {lat: 3.139003, lng: 101.686855},

  },
  {
    id: 10,
    city: "Istanbul",
    country: "Turkey",
    continent: "Asia",
    climate: "Mediterranean",
    pop: "Most popular places – more crowded",
    image:
      "https://www.ekathimerini.com/wp-content/uploads/2020/07/agia_sophia_web-320x200.jpg",
    youtube: "",
    position: {lat: 41.008238, lng: 28.978359},

  },
  {
    id: 11,
    city: "Delhi",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://media.istockphoto.com/photos/taj-mahal-pool-picture-id500078980?k=6&m=500078980&s=612x612&w=0&h=qWZuk7Skibf8q0f10OZQuY3ZOqUWqSWJS8MeHPDkmh4=",
    youtube: "",
    position: {lat: 28.704059, lng: 77.10249},

  },

  {
    id: 12,
    city: "Antalya",
    country: "Turkey",
    continent: "Asia",
    climate: "Mediterranean",
    pop: "Most popular places – more crowded",
    image:
      "https://clickstay.s3-eu-west-1.amazonaws.com/images/blog/post/Antalya.jpg",
    youtube: "",
    position: {lat:36.896891 , lng: 30.713323},

  },

  {
    id: 13,
    city: "Shenzhen",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://www.topchinatravel.com/pic/city/shenzhen/blog/famous-landmark-buildings-in-shenzhen-02.jpg",
    youtube: "",
    position: {lat: 22.543096, lng: 114.057865},

  },

  {
    id: 14,
    city: "Mumbai",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://i.pinimg.com/originals/85/d5/99/85d59953a34db05888071aeea71dc7ae.jpg",
    youtube: "",
    position: {lat: 19.075948, lng: 72.877656},

  },

  {
    id: 15,
    city: "Phuket",
    country: "Thailand",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://a.cdn-hotels.com/gdcs/production153/d1771/2e6084f5-c182-4f94-b793-7dd79bb78762.jpg",
    youtube: "",
    position: {lat: 7.880448, lng: 98.39225},

  },

  {
    id: 16,
    city: "Rome",
    country: "Italy",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Most popular places – more crowded",
    image:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2020/11/ccimage-shutterstock_789412159.jpg",
    youtube: "",
    position:{lat: 41.902784, lng: 12.496366},

  },

  {
    id: 17,
    city: "Tokyo",
    country: "Japan",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://previews.123rf.com/images/richie0703/richie07031906/richie0703190600128/124998998-tokyo-japan-june-12-2019-shibuya-crossing-a-world-famous-and-iconic-intersection-in-shibuya-tokyo-hu.jpg",
    youtube: "",
    position: {lat: 35.676192, lng: 139.650311},

  },

  {
    id: 18,
    city: "Pattaya",
    country: "Thailand",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "http://static.asiawebdirect.com/m/bangkok/portals/pattaya-bangkok-com/homepage/pattaya-top10s/top10-attractions-pattaya-beach/pagePropertiesImage/pattaya66.jpg",
    youtube: "",
    position: {lat: 12.923556, lng: 100.882455},

  },
  {
    id: 19,
    city: "Taipei",
    country: "Taiwan",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image: "https://media.nomadicmatt.com/2021/taipeithings1a.jpg",
    youtube: "",
    position: {lat: 25.032964, lng: 121.565427},

  },
  {
    id: 20,
    city: "Mecca",
    country: "Saudi Arabia",
    continent: "Asia",
    climate: "Desert",
    pop: "Most popular places – more crowded",
    image:
      "https://interactive.aljazeera.com/aje/2021/hajj-mecca-changed-100-years/images/art1.jpg",
    youtube: "",
    position: {lat: 21.389082, lng: 39.857912},

  },
  {
    id: 21,
    city: "Guangzhou",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://www.rosewoodhotels.com/conversations/conversations/wp-content/uploads/2019/09/Guangzhou-Skyline-GettyImages_small.jpg",
    youtube: "",
    position: {lat: 23.12911, lng: 113.264385},

  },
  {
    id: 23,
    city: "Prague",
    country: "Czechia",
    continent: "Erope",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://blog.goway.com/globetrotting/wp-content/uploads/2018/01/Mala-Strana.-Prague-Czech-Republic_344929856.jpg?x95206",
    youtube: "",
    position: {lat: 50.075538, lng: 14.437801},

  },
  {
    id: 24,
    city: "Medina",
    country: "Saudi Arabia",
    continent: "Asia",
    climate: "Desert",
    pop: "Most popular places – more crowded",
    image:
      "https://i.pinimg.com/originals/57/93/ec/5793ece334c258d03ff9a24126aef656.jpg",
    youtube: "",
    position: {lat: 23.524654, lng: 39.569184},

  },
  {
    id: 25,
    city: "Seoul",
    country: "South Korea",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://media.cntraveler.com/photos/5a70f9d68af0dc48d25daf9f/3:2/w_4448,h_2965,c_limit/Haedong-Yonggungsa-Temple-GettyImages-874460458.jpg",
    youtube: "",
    position: {lat: 37.566535, lng: 126.977969},

  },
  {
    id: 26,
    city: "Amsterdam",
    country: "Netherlands",
    continent: "Europe",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://www.onhisowntrip.com/wp-content/uploads/2020/05/Netherlands-Tourism.jpg",
    youtube: "",
    position: {lat: 53.367573, lng: 4.904139},

  },
  {
    id: 27,
    city: "Agra",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTScGHhnuCBBSgMjv3JJhUQBQzJnMhMpvzUIg&usqp=CAU",
    youtube: "",
    position: {lat: 27.17667, lng: 78.008074},

  },

  {
    id: 28,
    city: "Miami",
    country: "US",
    continent: "North America",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://i.pinimg.com/736x/72/4c/f3/724cf360483081e48f082fd1d443fedd.jpg",
    youtube: "",
    position: {lat: 25.76168, lng: -80.19179},

  },

  {
    id: 29,
    city: "Osaka",
    country: "Japan",
    continent: "Asia",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://mk0matchateacomwrs9r.kinstacdn.com/wp-content/uploads/2019/01/agathe-marty-1061172-unsplash-1024x683.jpg",
    youtube: "",
    position: {lat: 36.045822, lng: -95.852258},

  },

  {
    id: 30,
    city: "Los Angeles",
    country: "US",
    continent: "North America",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmXD8oTFKOAnSujzzeveXXP7oWiMn3gM3mAIdx_vQZoH33z6-TqqbNbTGkmmqGJeqCe8&usqp=CAU",
    youtube: "",
    position: {lat: 34.052234, lng: -118.243685},

  },

  {
    id: 31,
    city: "Shanghai",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Shanghai_at_night.jpg",
    youtube: "",
    position: {lat: 31.230416, lng: 121.483701},

  },

  {
    id: 32,
    city: "Ho Chi Minh City",
    country: "Vietnam",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://i.pinimg.com/originals/36/5d/8c/365d8cf99857ba71816b15572ec10b6b.jpg",
    youtube: "",
    position: {lat: 10.746903, lng: 106.676292},

  },
  {
    id: 33,
    city: "Denpasar",
    country: "Indonesia",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/fkqhxzslucngzdzi7yfb/Denpasar%20City,%20Bali%20Museum%20and%20Food%20Market%20Tour.jpg",
    youtube: "",
    position: {lat: -8.670458, lng: 115.212629},

  },
  {
    id: 34,
    city: "Barcelona",
    country: "Spain",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Most popular places – more crowded",
    image: "https://ticketshop.barcelona/images/sights-barcelona.jpg",
    youtube: "",
    position: {lat: 41.385064, lng: 2.173404},

  },
  {
    id: 35,
    city: "Las Vegas",
    country: "US",
    continent: "North America",
    climate: "Desert",
    pop: "Between most popular and least popular",
    image:
      "https://www.jetsetter.com//uploads/sites/7/2018/04/e60NxKUK-1-1380x690.jpeg",
    youtube: "",
    position: {lat: 36.169941, lng: -115.13983},

  },

  {
    id: 36,
    city: "Milan",
    country: "Italy",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://www.adequatetravel.com/blog/wp-content/uploads/2020/04/FI-milan-famous-947x500.jpg",
    youtube: "",
    position: {lat: 45.464204, lng: 9.189982},

  },

  {
    id: 37,
    city: "Chennai",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://soravlifestyle.com/wp-content/uploads/2020/04/top-famous-1024x600.jpg",
    youtube: "",
    position: {lat: 13.08268, lng: 80.270718},

  },

  {
    id: 38,
    city: "Vienna",
    country: "Austria",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://i.pinimg.com/736x/aa/90/7a/aa907a1297e515930eb9372c24ac15fb.jpg",
    youtube: "",
    position: {lat: 48.208174, lng: 16.373819},

  },

  {
    id: 39,
    city: "Johor Bahru",
    country: "Malaysia",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://www.sutra.my/wp-content/uploads/2019/05/dataran-jb-1-960x636.jpg",
    youtube: "",
    position: {lat: 1.485368, lng: 103.761815},

  },
  {
    id: 40,
    city: "Jaipur",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/05/Best-time-to-visit1.jpg",
    youtube: "",
    position: {lat: 26.912434, lng:75.787271 },

  },

  {
    id: 41,
    city: "Cancun",
    country: "Mexico",
    continent: "North America",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://upload.travelawaits.com/ta/uploads/2021/05/shutterstock_1107996785-800x800.jpg",
    youtube: "",
    position: {lat:21.161908 , lng:-86.851528 },

  },

  {
    id: 42,
    city: "Berlin",
    country: "Germany",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGMaHuPS2HKbuyO7RwvsgE2KY4opuZROlCdBy9bn13LBDaTLvLpMFRK1I9xBp96tbfzU&usqp=CAU",
    youtube: "",
    position: {lat: 52.520007, lng: 13.404954 },
  },

  {
    id: 43,
    city: "Cairo",
    country: "Egypt",
    continent: "Africa",
    climate: "Desert",
    pop: "Between most popular and least popular",
    image:
      "https://images.skyscrapercenter.com/building/iconictower_rendering-context_(c)cscec.jpg",
    youtube: "",
    position: {lat:30.04442 , lng:31.235712 },

  },

  {
    id: 44,
    city: "Athens",
    country: "Greece",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image:
      "https://www.grekaddict.com/wp-content/uploads/2019/07/Acropolis-tips-header.1024x576-e1566815022874-1024x576.jpg",
    youtube: "",
    position: {lat:37.98381 , lng:23.757539 },

  },

  {
    id: 45,
    city: "Orlando",
    country: "US",
    continent: "North America",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://d23.com/app/uploads/2016/09/Gallery_092916_wdw-45th-45-photos-gallery_26.jpg",
    youtube: "",
    position: {lat:28.538383 , lng:-81.378927 },

  },

  {
    id: 46,
    city: "Moscow",
    country: "Russia",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://qph.fs.quoracdn.net/main-qimg-448e895c9d17613d8e8e462ad05c4f2c.webp",
    youtube: "",
    position: {lat:55.755826 , lng:37.6173 },

  },

  {
    id: 47,
    city: "Venice",
    country: "Italy",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image:
      "http://www.yurtopic.com/travel/destinations/images/italy-places/Venice-lrg.jpg",
    youtube: "",
    position: {lat:45.440847 , lng:12.315515 },

  },

  {
    id: 48,
    city: "Madrid",
    country: "Spain",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image:
      "https://i.pinimg.com/originals/5e/1a/dc/5e1adced83abeab55a3b879f665b00e1.jpg",
    youtube: "",
    position: {lat:40.416755 , lng:-3.70379 },

  },

  {
    id: 49,
    city: "Ha Long",
    country: "Vietnam",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://asianwaytravelcom.files.wordpress.com/2017/09/13528310_10201709271329885_1744513689222707595_o.jpg?w=1400",
    youtube: "",
    position: {lat:20.910051 , lng:107.183902 },

  },
  {
    id: 50,
    city: "Riyadh",
    country: "Saudi Arabia",
    continent: "Asia",
    climate: "Desert",
    pop: "Between most popular and least popular",
    image:
      "https://t4.ftcdn.net/jpg/04/01/81/51/360_F_401815108_BGQqL3RZpb1L9ZH9FHBuQyIpj2rXZDfa.jpg",
    youtube: "",
    position: {lat:24.713552 , lng:46.675296 },

  },
  {
    id: 51,
    city: "Dublin",
    country: "Ireland",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://www.planetware.com/photos-tiles/ireland-waterford-cashel-rock.jpg",
    youtube: "",
    position: {lat:53.349805 , lng:-6.26031 },

  },

  {
    id: 52,
    city: "Florence",
    country: "Italy",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image:
      "https://twodrifters.us/wp-content/uploads/2021/03/shutterstock_1043431975.jpg",
    youtube: "",
    position: {lat:43.76956 , lng:11.255814 },

  },

  {
    id: 53,
    city: "Ha Noi",
    country: "Vietnam",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://www.travelassociates.com/sites/v2.travel-associates.com.au/files/fcl-blog/hanoi-hoankiem.jpg",
    youtube: "",
    position: {lat:21.027764 , lng:105.83416 },

  },

  {
    id: 54,
    city: "Toronto",
    country: "Canada",
    continent: "North America",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://localfoodtours.com/wp-content/uploads/2018/07/cn-tower-and-tourist-attractions-things-to-do-in-toronto.jpg",
    youtube: "",
    position: {lat:43.653226 , lng:-79.383184 },

  },

  {
    id: 55,
    city: "Johannesburg",
    country: "South Africa",
    continent: "Africa",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/Johannesburg-Skyline.jpg",
    youtube: "",
    position: {lat:-26.204103 , lng: 28.047305},

  },
  {
    id: 56,
    city: "Sydney",
    country: "Australia",
    continent: "Oceania",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/1200px-Sydney_Opera_House_-_Dec_2008.jpg",
    youtube: "",
    position: {lat:-33.86882 , lng:151.209296 },

  },
  {
    id: 57,
    city: "Munich",
    country: "Germany",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/11/frankfurt-market-www.istockphoto.comgbphotochristmas-market-in-frankfurt-gm520625727-49958558-sborisov-1024x682-1.jpeg",
    youtube: "",
    position: {lat:48.135125 , lng:11.581981 },

  },

  {
    id: 58,
    city: "Jakarta",
    country: "Indonesia",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://media.istockphoto.com/photos/indonesia-mini-park-picture-id491619294?k=6&m=491619294&s=612x612&w=0&h=jMZM6N6x-UvpmcHSJa_oUP0eNp-g4bGWFRi23aKA26c=",
    youtube: "",
    position: {lat:-6.208763 , lng:106.845599 },

  },
  {
    id: 59,
    city: "Beijing",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://cdn.destguides.com/files/store/itinerarystop/3182/background_image/webp_max-006d94ab26e2611c0bf8880df0b5e080.webp",
    youtube: "",
    position: {lat:39.9042 , lng:116.407396 },

  },

  {
    id: 60,
    city: "St. Petersburg",
    country: "Russia",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://cdni.rbth.com/rbthmedia/images/2020.05/article/5ebeba0085600a297b16579a.jpg",
    youtube: "",
    position: {lat:59.931058 , lng:30.36091 },

  },

  {
    id: 61,
    city: "Brussels",
    country: "Belgium",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://cdn.destguides.com/files/store/itinerary/334/background_image/jpeg_wide-ce97ec9f2ed40c9a3e8621c0ca2a92e9.jpeg",
    youtube: "",
    position: {lat:50.58034 , lng:4.35171 },

  },

  {
    id: 62,
    city: "Jerusalem",
    country: "Israel",
    continent: "Asia",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image:
      "https://images.fineartamerica.com/images-medium-large-5/3-jerusalem-skyline-jonathan-gewirtz.jpg",
    youtube: "",
    position: {lat:31.768319 , lng:35.21371 },

  },

  {
    id: 63,
    city: "Budapest",
    country: "Hungary",
    continent: "Europe",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://i.pinimg.com/originals/ee/61/9e/ee619edb4c32f739e49d58c19f73bcc2.jpg",
    youtube: "",
    position: {lat:47.497912 , lng:19.040235 },

  },

  {
    id: 64,
    city: "Lisbon",
    country: "Portugal",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image:
      "https://i2.wp.com/passionpassport.com/wp-content/uploads/2018/03/takoyako-lisbon-best-views.jpg?fit=817%2C500&ssl=1",
    youtube: "",
    position: {lat:38.722252 , lng:-9.139337 },

  },

  {
    id: 65,
    city: "Dammam",
    country: "Saudi Arabia",
    continent: "Asia",
    climate: "Desert",
    pop: "Between most popular and least popular",
    image:
      "https://i2.wp.com/thisladyblogs.com/wp-content/uploads/2020/08/akil-imran-KW-qmD8hOx4-unsplash.jpg?resize=900%2C657&ssl=1",
    youtube: "",
    position: {lat:26.420683 , lng:50.088794 },

  },

  {
    id: 66,
    city: "Penang Island",
    country: "Malaysia",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://d1bv4heaa2n05k.cloudfront.net/user-images/1488207135091/6shutterstock-397085455_main_1488207157229.jpeg",
    youtube: "",
    position: {lat:5.367316 , lng:100.248649 },

  },

  {
    id: 67,
    city: "Heraklion",
    country: "Greece",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image:
      "https://www.planetware.com/wpimages/2019/10/greece-heraklion-attractions-old-town-boats-and-harbor.jpg",
    youtube: "",
    position: {lat:35.338735 , lng:25.144213 },

  },

  {
    id: 68,
    city: "Kyoto",
    country: "Japan",
    continent: "Asia",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://p3n3w9t2.rocketcdn.me/wp-content/uploads/2018/05/kyoto-4-day-itinerary-header.jpg",
    youtube: "",
    position: {lat:35.011564 , lng:135.768149 },

  },

  {
    id: 69,
    city: "Zhuhai",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image:
      "https://media.istockphoto.com/photos/zhuhai-city-scenery-china-picture-id1139394058?k=6&m=1139394058&s=612x612&w=0&h=r_R1SXrM_TN26SW1I-a1gmk6x4umyMJ0-V--zfwazyg=",
    youtube: "",
    position: {lat:22.270978 , lng:113.576677 },

  },

  {
    id: 70,
    city: "Vancouver",
    country: "Canada",
    continent: "North America",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "https://wallpaperaccess.com/full/2029253.jpg",
    youtube: "",
    position: {lat:49.282729 , lng:-123.120737 },

  },
  {
    id: 71,
    city: "Chiang Mai",
    country: "Thailand",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "https://wallpaperaccess.com/full/1375426.jpg",
    youtube: "",
    position: {lat:18.788344 , lng:98.985301 },

  },
  {
    id: 72,
    city: "Copenhagen",
    country: "Denmark",
    continent: "Europe",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image:
      "https://www.travelanddestinations.com/wp-content/uploads/2017/09/Top-Instagram-and-Photography-Spots-in-Copenhagen.jpg",
    youtube: "",
    position: {lat:55.676097 , lng:12.568337 },

  },
  {
    id: 73,
    city: "San Francisco",
    country: "US",
    continent: "North America",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "https://media.timeout.com/images/101714767/image.jpg",
    youtube: "",
    position: {lat:37.77493 , lng:-122.419415 },

  },
  {
    id: 74,
    city: "Melbourne",
    country: "Australia",
    continent: "Oceania",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image:
      "https://www.telegraph.co.uk/content/dam/Travel/2018/October/melbourne-top-xlarge.jpg",
    youtube: "",
    position: {lat:-37.813628 , lng:144.963058 },

  },
  {
    id: 75,
    city: "Krakow",
    country: "Poland",
    continent: "Europe",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image:
      "https://static.boredpanda.com/blog/wp-content/uploads/2019/11/krakow-best-city-destination-third-year-59.jpg",
    youtube: "",
    position: {lat:50.06465 , lng:19.94498},

  },

  {
    id: 76,
    city: "Marrakech",
    country: "Morocco",
    continent: "Africa",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image:
      "https://getsready.com/wp-content/uploads/2017/02/marrakech-best-attraction.jpg",
    youtube: "",
    position: {lat:31.629472 , lng:-7.981085},

  },
  {
    id: 77,
    city: "Kolkata",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "https://www.indiancentury.com/images/kolkata/001.jpg",
    youtube: "",
    position: {lat:22.572646 , lng:88.363895},

  },
  {
    id: 78,
    city: "Cebu",
    country: "Philippines",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image:
      "https://www.jonnymelon.com/wp-content/uploads/2019/10/virgin-island-bantayan-17.jpg",
    youtube: "",
    position: {lat:10.315699 , lng:123.885437},

  },
  {
    id: 79,
    city: "Auckland",
    country: "New Zealand",
    continent: "Oceania",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "https://vistapointe.net/images/auckland-1.jpg",
    youtube: "",
    position: {lat:-36.850883 , lng:174.764488},

  },

  {
    id: 88,
    city: "Frankfurt",
    country: "Germany",
    continent: "Europe",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image:
      "http://www.luxxu.net/blog/wp-content/uploads/2018/02/6-Of-The-Most-Iconic-Places-To-Visit-in-Frankfurt-06.jpg",
    youtube: "",
    position: {lat:50110922 , lng:8.682127},

  },
  {
    id: 89,
    city: "Stockholm",
    country: "Sweden",
    continent: "Europe",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image:
      "https://cdn2.wanderlust.co.uk/media/5022/lists-10-things-to-do-for-free-in-stockholm1.jpg?anchor=center&mode=crop&width=600&height=225&format=auto&quality=30&rnd=131481221620000000",
    youtube: "",
    position: {lat:59.329323 , lng:18.068581},

  },
  {
    id: 90,
    city: "Lima",
    country: "Peru",
    continent: "South America",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image:
      "https://media.worldnomads.com/Explore/Peru/social-share/social-share-lima.jpg",
    youtube: "",
    position: {lat:-12.046373 , lng:-77.042754},

  },

  {
    id: 91,
    city: "Da Nang",
    country: "Vietnam",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image:
      "https://media.istockphoto.com/photos/danang-marble-mountains-da-nang-picture-id1068769384?k=6&m=1068769384&s=612x612&w=0&h=nT4cSZ9WDjo8PvBiQKlNp9Ik90OGZJOA_WXfaM7dQMQ=",
    youtube: "",
    position: {lat:16.054456 , lng:108.071722},

  },
  {
    id: 92,
    city: "Batam",
    country: "Indonesia",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image:
      "https://dbijapkm3o6fj.cloudfront.net/resources/13125,1004,1,6,4,0,600,450/-4601-/20170320164222/abang-island-batam.jpeg",
    youtube: "",
    position: {lat:1.130078 , lng:104.052921},

  },
  {
    id: 93,
    city: "Nice",
    country: "France",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Less popular places – less crowded",
    image:
      "https://www.touropia.com/gfx/d/best-places-to-visit-in-france/french_riviera.jpg?v=8a2a731f9dd5287d9bddd4aa5b3be9b7",
    youtube: "",
    position: {lat:43.710173 , lng:7.261953},

  },
  {
    id: 94,
    city: "Fukuoka",
    country: "Japan",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image:
      "https://images.unsplash.com/photo-1605088298038-2876387a80c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVrdW9rYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    youtube: "",
    position: {lat:33.590184 , lng:130.401689},

  },
  {
    id: 95,
    city: "Abu Dhabi",
    country: "UAE",
    continent: "Asia",
    climate: "Desert",
    pop: "Less popular places – less crowded",
    image:
      "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Triathlon/Articles/10+of+the+Most+Famous+Triathlons/Abu+Dhabi-carousel.jpg",
    youtube: "",
    position: {lat:24.453884 , lng:54.377344},

  },
  {
    id: 96,
    city: "Jeju",
    country: "South Korea",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image:
      "https://a.cdn-hotels.com/gdcs/production176/d1696/099fd9fd-bd7d-4dd6-a7eb-3bf982d30de3.jpg",
    youtube: "",
    position: {lat:33.499621 , lng:126.531188},

  },
  {
    id: 97,
    city: "Porto",
    country: "Portugal",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Less popular places – less crowded",
    image: "https://deih43ym53wif.cloudfront.net/riberia-porto_7a56c88171.jpeg",
    youtube: "",
    position: {lat:41.157944 , lng:-8.629105},

  },
  {
    id: 98,
    city: "Rhodes",
    country: "Greece",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Less popular places – less crowded",
    image:
      "https://theculturetrip.com/wp-content/uploads/2014/06/4768612125_8e3fe5b476_b.jpg",
    youtube: "",
    position: {lat:36.434963 , lng:28.217483},

  },
  {
    id: 99,
    city: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image:
      "https://www.costacruises.co.uk/content/dam/costa/costa-magazine/article-images/what-to-see-in-rio-de-janeiro/rio-de-janeiro-panorama_YuJas-Shutterstock_2.jpg.image.694.390.low.jpg",
    youtube: "",
    position: {lat:-22.906847 , lng:-43.172896},

  },
  {
    id: 100,
    city: "Krabi",
    country: "Thailand",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image:
      "http://static.asiawebdirect.com/m/phuket/portals/krabi-hotels-com/homepage/seedo/top10-krabi-attractions/pagePropertiesImage/best-krabi-attractions.jpg.jpg",
    youtube: "",
    position: {lat:8.0863 , lng:98.906284},

  },
  {
    id: 101,
    city: "Bangalore",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image:
      "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2015/05/Mysore-Palace.jpg",
    youtube: "",
    position: {lat:12.971599 , lng:77.594563},

  },
  {
    id: 102,
    city: "Reykjavik",
    Country: "Iceland",
    continent: "Europe",
    climate: "Polar",
    pop: "Less popular places – less crowded",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvdD50kawc4PVes_TFLVgCkR0G2__PFjmJHnV5yqWV1hNOzLgRC_YszBPD9rTqtKRuvDg&usqp=CAU",
    youtube: "",
    position: {lat:64.146582 , lng:-21.942635},

  },

  {
    id: 103,
    city: "Nepal",
    Country: "Federal Democratic Republic of Nepal",
    continent: "Asia",
    climate: "Polar",
    pop: "Less popular places – less crowded",
    image:
      "https://www.aamatrek.com/wp-content/uploads/2018/04/nepal-manaslu-trek-960x640.jpg",
    youtube: "",
    position: {lat:28.394857 , lng:84.124008},

  },

  {
    id: 104,
    city: "Havana",
    Country: "Cuba",
    continent: "South America",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image:
      "https://www.tripsavvy.com/thmb/vS85biVcD4j-A0ZIfTlwqawnwl0=/2054x1459/filters:fill(auto,1)/classic-pink-car-havana-5c3fde6146e0fb00013e9dfe.jpg",
    youtube: "",
    position: {lat:23.113593 , lng:-82.366596},

  },
];
export default cityList;
