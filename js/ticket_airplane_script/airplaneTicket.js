// stopLevel: 1 => noStop | 2 => oneStop | 3 => towStop
flyTickets = [
    { id: 1, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" سه شنبه 1 اسفند ", "Tuesday 20 February"], logoAirplane: "flydobai_logo.webp", nameAirplane: "فلای دبی", timeExit: 2445, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "03:25", placeEnter: "دبی(DXB)", baggage: "25 کیلو", handbage: "5 کیلو", chairs: "4 صندلی باقی مانده", numberFly: "شماره پرواز: 194", price: 9791900, },
    { id: 2, typeTicket: ["بیزینس", " بیزینس (C)"], date: [" سه شنبه 1 اسفند ", "Tuesday 20 February"], logoAirplane: "ghatarair_logo.webp", nameAirplane: "قطر ایر ویز", timeExit: 2245, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "10:15", placeEnter: "دبی(DXB)", baggage: "25 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 499", price: 15864400, },
    { id: 3, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" سه شنبه 1 اسفند ", "Tuesday 20 February"], logoAirplane: "ghatarair_logo.webp", nameAirplane: "قطر ایر ویز", timeExit: 2245, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "21:25", placeEnter: "قشم(GSM)", baggage: "25 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 499", price: 15864400, },
    { id: 4, typeTicket: ["بیزینس", " بیزینس (C)"], date: [" سه شنبه 1 اسفند ", "Wednesday 21 February"], logoAirplane: "ghatarair_logo.webp", nameAirplane: "قطر ایر ویز", timeExit: 2245, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "20:55", placeEnter: "تهران(IKA)", baggage: "25 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 499", price: 15864400, },
    { id: 5, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" چهار شنبه 2 اسفند ", "Wednesday 21 February"], logoAirplane: "alemarat_logo.webp", nameAirplane: "الامارات", timeExit: 1820, placeExit: "تهران(IKA)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "21:10", placeEnter: "قشم(GSM)", baggage: "30 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 980", price: 9706300, },
    { id: 6, typeTicket: ["چارتری", "اکونومی (Y)"], date: [" پنج شنبه 3 اسفند ", "Turesday 22 February"], logoAirplane: "mahanair_logo.webp", nameAirplane: "ماهان ایر", timeExit: 1745, placeExit: "تهران(IKA)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "20:15", placeEnter: "دبی(DXB)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "6 صندلی باقی مانده", numberFly: "شماره پرواز: 065", price: 17820000, },
    { id: 7, typeTicket: ["چارتری", "اکونومی (Y)"], date: [" پنج شنبه 3 اسفند ", "Turesday 22 February"], logoAirplane: "pegasos_logo.webp", nameAirplane: "پگاسوس", timeExit: "0" + 625, placeExit: "چابهار(ZBR)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "16:40", placeEnter: "آنتالیا(َAYT)", baggage: "بدون بار", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 517", price: 14647360, },
    { id: 8, typeTicket: ["چارتری", "اکونومی (Y)"], date: [" پنج شنبه 3 اسفند ", "Turesday 22 February"], logoAirplane: "pegasos_logo.webp", nameAirplane: "پگاسوس", timeExit: "0" + 625, placeExit: "پاریس(QRY)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "13:00", placeEnter: "آنتالیا(َAYT)", baggage: "بدون بار", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 517", price: 14647360, },
    { id: 9, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" پنج شنبه 3 اسفند ", "Turesday 22 February"], logoAirplane: "terkish_logo.webp", nameAirplane: "ترکیش", timeExit: "0" + 350, placeExit: "کرمانشاه(KSH)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "14:40", placeEnter: "عسلویه(PGU)", baggage: "15 کیلو", handbage: "8 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 873", price: 16295500, },
    { id: 10, typeTicket: ["بیزینس", " بیزینس (C)"], date: [" جمعه 4 اسفند ", "Friday 23 February"], logoAirplane: "pegasos_logo.webp", nameAirplane: "پگاسوس", timeExit: "0" + 625, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "16:20", placeEnter: "پاریس(QRY)", baggage: "بدون بار", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 517", price: 15859800, },
    { id: 11, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" جمعه 4 اسفند ", "Friday 23 February"], logoAirplane: "ghatarair_logo.webp", nameAirplane: "قطر ایر ویز", timeExit: 2245, placeExit: "تهران(IKA)", stopLevel: 3, travelStoppic: ["two_stop_inFly.png", "two_stop_inFly_rangi.png"], timeEnter: "07:25", placeEnter: "مشهد(MHD)", baggage: "25 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 491", price: 17466100, },
    { id: 12, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" شنبه 5 اسفند ", "Saturday 24 February"], logoAirplane: "ghatarair_logo.webp", nameAirplane: "قطر ایر ویز", timeExit: "0" + 510, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "20:55", placeEnter: "پاریس(QRY)", baggage: "25 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 491", price: 17466100, },
    { id: 13, typeTicket: ["بیزینس", " بیزینس (C)"], date: [" شنبه 5 اسفند ", "Saturday 24 February"], logoAirplane: "ghatarair_logo.webp", nameAirplane: "قطر ایر ویز", timeExit: 2245, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "14:25", placeEnter: "پاریس(QRY)", baggage: "25 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 491", price: 17466100, },
    { id: 14, typeTicket: ["بیزینس چارتری", "بیزینس (C)"], date: [" یکشنبه 6 اسفند ", "Sunday 25 February"], logoAirplane: "aseman_logo.webp", nameAirplane: "آسمان", timeExit: 1745, placeExit: "قشم(GSM)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "19:30", placeEnter: "استانبول(IST)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "5 صندلی باقی مانده", numberFly: "شماره پرواز: 512", price: 8245000, },
    { id: 15, typeTicket: ["چارتری", "اکونومی (Y)"], date: [" یکشنبه 6 اسفند ", "Sunday 25 February"], logoAirplane: "mahanair_logo.webp", nameAirplane: "ماهان ایر", timeExit: "0" + 630, placeExit: "چابهار(ZBR)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "09:15", placeEnter: "استانبول(IST)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "6 صندلی باقی مانده", numberFly: "شماره پرواز: 112", price: 28710000, },
    { id: 16, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" دوشنبه 7 اسفند ", "Monday 26 February"], logoAirplane: "golfair_logo.webp", nameAirplane: "گلف ایر", timeExit: 2335, placeExit: "دبی(DXB)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "06:00", placeEnter: "استانبول(IST)", baggage: "25 کیلو", handbage: "5 کیلو", chairs: "7 صندلی باقی مانده", numberFly: "شماره پرواز: 513", price: 17796285, },
    { id: 17, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" دوشنبه 7 اسفند ", "Monday 26 February"], logoAirplane: "mahanair_logo.webp", nameAirplane: "ماهان ایر", timeExit: 1400, placeExit: "دبی(DXB)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "20:40", placeEnter: "استانبول(IST)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "", numberFly: "شماره پرواز: 060", price: 49626900, },
    { id: 18, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" دوشنبه 7 اسفند ", "Monday 26 February"], logoAirplane: "mahanair_logo.webp", nameAirplane: "ماهان ایر", timeExit: 1115, placeExit: "دبی(DXB)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "10:45", placeEnter: "استانبول(DXB)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "", numberFly: "شماره پرواز: 062", price: 49626900, },
    { id: 19, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" دوشنبه 30 بهمن ", "Monday 19 February"], logoAirplane: "alemarat_logo.webp", nameAirplane: "الامارات", timeExit: 1820, placeExit: "تهران(IKA)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "21:10", placeEnter: "دبی(DXB)", baggage: "30 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 980", price: 9706300, },
    { id: 20, typeTicket: ["چارتری", "اکونومی (Y)"], date: [" دوشنبه 30 بهمن ", "Monday 19 February"], logoAirplane: "mahanair_logo.webp", nameAirplane: "ماهان ایر", timeExit: 1745, placeExit: "قشم(GSM)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "20:15", placeEnter: "تهران(IKA)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "6 صندلی باقی مانده", numberFly: "شماره پرواز: 065", price: 17820000, },
    { id: 21, typeTicket: ["چارتری", "اکونومی (Y)"], date: [" سه شنبه 8 اسفند ", "Tuesday 27 February"], logoAirplane: "pegasos_logo.webp", nameAirplane: "پگاسوس", timeExit: "0" + 625, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "16:40", placeEnter: "عسلویه(PGU)", baggage: "بدون بار", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 517", price: 14647360, },
    { id: 22, typeTicket: ["بیزینس", " بیزینس (C)"], date: [" سه شنبه 8 اسفند ", "Tuesday 27 February"], logoAirplane: "pegasos_logo.webp", nameAirplane: "پگاسوس", timeExit: "0" + 625, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "13:00", placeEnter: "چابهار(ZBR)", baggage: "بدون بار", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 517", price: 14647360, },
    { id: 23, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" سه شنبه 8 اسفند ", "Tuesday 27 February"], logoAirplane: "terkish_logo.webp", nameAirplane: "ترکیش", timeExit: "0" + 350, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "14:40", placeEnter: "آنتالیا(َAYT)", baggage: "15 کیلو", handbage: "8 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 873", price: 16295500, },
    { id: 24, typeTicket: ["بیزینس چارتری", "بیزینس (C)"], date: [" دوشنبه 7 اسفند ", "Monday 26 February"], logoAirplane: "aseman_logo.webp", nameAirplane: "آسمان", timeExit: 1745, placeExit: "آبادان(ABD)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "19:30", placeEnter: "استانبول(IST)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "5 صندلی باقی مانده", numberFly: "شماره پرواز: 512", price: 8245000, },
    { id: 25, typeTicket: ["چارتری", "اکونومی (Y)"], date: [" دوشنبه 7 اسفند ", "Monday 26 February"], logoAirplane: "mahanair_logo.webp", nameAirplane: "ماهان ایر", timeExit: "0" + 630, placeExit: "عسلویه(PGU)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "09:15", placeEnter: "استانبول(IST)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "6 صندلی باقی مانده", numberFly: "شماره پرواز: 112", price: 28710000, },
    { id: 26, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" چهارشنبه 9 اسفند ", "Wednesday 28 February"], logoAirplane: "golfair_logo.webp", nameAirplane: "گلف ایر", timeExit: 2335, placeExit: "دبی(DXB)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "06:00", placeEnter: "استانبول(IST)", baggage: "25 کیلو", handbage: "5 کیلو", chairs: "7 صندلی باقی مانده", numberFly: "شماره پرواز: 513", price: 17796285, },
    { id: 27, typeTicket: ["بیزینس", " بیزینس (C)"], date: [" چهارشنبه 9 اسفند ", "Wednesday 28 February"], logoAirplane: "pegasos_logo.webp", nameAirplane: "پگاسوس", timeExit: "0" + 625, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "16:20", placeEnter: "پاریس(QRY)", baggage: "بدون بار", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 517", price: 15859800, },
    { id: 28, typeTicket: ["سیستمی", "اکونومی (Y)"], date: ["پنج شنبه 10 اسفند ", "Thursday 29 February"], logoAirplane: "flydobai_logo.webp", nameAirplane: "فلای دبی", timeExit: 2445, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "03:25", placeEnter: "دبی(DXB)", baggage: "25 کیلو", handbage: "5 کیلو", chairs: "4 صندلی باقی مانده", numberFly: "شماره پرواز: 194", price: 9791900, },
    { id: 29, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" پنج شنبه 10 اسفند ", "Thursday 29 February"], logoAirplane: "ghatarair_logo.webp", nameAirplane: "قطر ایر ویز", timeExit: 2245, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "10:15", placeEnter: "دبی(DXB)", baggage: "25 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 499", price: 15864400, },
    { id: 30, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" جمعه 11 اسفند ", "Friday 30 February"], logoAirplane: "ghatarair_logo.webp", nameAirplane: "قطر ایر ویز", timeExit: 2245, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "21:25", placeEnter: "دبی(DXB)", baggage: "25 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 499", price: 15864400, },
    { id: 31, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" دوشنبه 7 اسفند ", "Monday 26 February"], logoAirplane: "ghatarair_logo.webp", nameAirplane: "قطر ایر ویز", timeExit: 2245, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "20:55", placeEnter: "دبی(DXB)", baggage: "25 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 499", price: 15864400, },
    { id: 32, typeTicket: ["بیزینس", " بیزینس (C)"], date: [" دوشنبه 7 اسفند ", "Monday 26 February"], logoAirplane: "alemarat_logo.webp", nameAirplane: "الامارات", timeExit: 1820, placeExit: "تهران(IKA)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "21:10", placeEnter: "دبی(DXB)", baggage: "30 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 980", price: 9706300, },
    { id: 33, typeTicket: ["چارتری", "اکونومی (Y)"], date: [" دوشنبه 30 بهمن ", "Monday 19 February"], logoAirplane: "mahanair_logo.webp", nameAirplane: "ماهان ایر", timeExit: 1745, placeExit: "تهران(IKA)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "20:15", placeEnter: "دبی(DXB)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "6 صندلی باقی مانده", numberFly: "شماره پرواز: 065", price: 17820000, },
    { id: 34, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" دوشنبه 30 بهمن ", "Monday 19 February"], logoAirplane: "ghatarair_logo.webp", nameAirplane: "قطر ایر ویز", timeExit: 2245, placeExit: "تهران(IKA)", stopLevel: 3, travelStoppic: ["two_stop_inFly.png", "two_stop_inFly_rangi.png"], timeEnter: "07:25", placeEnter: "پاریس(QRY)", baggage: "25 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 491", price: 17466100, },
    { id: 35, typeTicket: ["چارتری", "اکونومی (Y)"], date: [" دوشنبه 30 بهمن ", "Monday 19 February"], logoAirplane: "mahanair_logo.webp", nameAirplane: "ماهان ایر", timeExit: "0" + 630, placeExit: "تهران(IKA)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "09:15", placeEnter: "استانبول(IST)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "6 صندلی باقی مانده", numberFly: "شماره پرواز: 112", price: 28710000, },
    { id: 36, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" جمعه 11 اسفند ", "Friday 30 February"], logoAirplane: "golfair_logo.webp", nameAirplane: "گلف ایر", timeExit: 2335, placeExit: "دبی(DXB)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "06:00", placeEnter: "آبادان(ABD)", baggage: "25 کیلو", handbage: "5 کیلو", chairs: "7 صندلی باقی مانده", numberFly: "شماره پرواز: 513", price: 17796285, },
    { id: 37, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" جمعه 11 اسفند ", "Friday 30 February"], logoAirplane: "mahanair_logo.webp", nameAirplane: "ماهان ایر", timeExit: 1400, placeExit: "دبی(DXB)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "20:40", placeEnter: "استانبول(IST)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "", numberFly: "شماره پرواز: 060", price: 49626900, },
    { id: 38, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" دوشنبه 30 بهمن ", "Monday 19 February"], logoAirplane: "mahanair_logo.webp", nameAirplane: "ماهان ایر", timeExit: 1115, placeExit: "دبی(DXB)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "10:45", placeEnter: "استانبول(DXB)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "", numberFly: "شماره پرواز: 062", price: 49626900, },
    { id: 39, typeTicket: ["بیزینس چارتری", "بیزینس (C)"], date: [" شنبه 5 اسفند ", "Saturday 24 February"], logoAirplane: "aseman_logo.webp", nameAirplane: "آسمان", timeExit: 1745, placeExit: "تهران(IKA)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "19:30", placeEnter: "استانبول(IST)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "5 صندلی باقی مانده", numberFly: "شماره پرواز: 512", price: 8245000, },
    { id: 40, typeTicket: ["چارتری", "اکونومی (Y)"], date: [" شنبه 5 اسفند ", "Saturday 24 February"], logoAirplane: "mahanair_logo.webp", nameAirplane: "ماهان ایر", timeExit: "0" + 630, placeExit: "آبادان(ABD)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "09:15", placeEnter: "استانبول(IST)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "6 صندلی باقی مانده", numberFly: "شماره پرواز: 112", price: 28710000, },
    { id: 41, typeTicket: ["بیزینس", " بیزینس (C)"], date: [" شنبه 5 اسفند ", "Saturday 24 February"], logoAirplane: "golfair_logo.webp", nameAirplane: "گلف ایر", timeExit: 2335, placeExit: "دبی(DXB)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "06:00", placeEnter: "آبادان(ABD)", baggage: "25 کیلو", handbage: "5 کیلو", chairs: "7 صندلی باقی مانده", numberFly: "شماره پرواز: 513", price: 17796285, },
    { id: 42, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" سه شنبه 1 اسفند ", "Tuesday 20 February"], logoAirplane: "ghatarair_logo.webp", nameAirplane: "قطر ایر ویز", timeExit: "0" + 510, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "20:55", placeEnter: "پاریس(QRY)", baggage: "25 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 491", price: 17466100, },
    { id: 43, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" سه شنبه 1 اسفند ", "Tuesday 20 February"], logoAirplane: "ghatarair_logo.webp", nameAirplane: "قطر ایر ویز", timeExit: 2245, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "14:25", placeEnter: "کرمانشاه(KSH)", baggage: "25 کیلو", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 491", price: 17466100, },
    { id: 44, typeTicket: ["چارتری", "اکونومی (Y)"], date: [" پنج شنبه 10 اسفند ", "Thursday 29 February"], logoAirplane: "pegasos_logo.webp", nameAirplane: "پگاسوس", timeExit: "0" + 625, placeExit: "مشهد(MHD)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "13:00", placeEnter: " آنتالیا(َAYT)", baggage: "بدون بار", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 517", price: 14647360, },
    { id: 45, typeTicket: ["بیزینس", " بیزینس (C)"], date: [" پنج شنبه 10 اسفند ", "Thursday 29 February"], logoAirplane: "terkish_logo.webp", nameAirplane: "ترکیش", timeExit: "0" + 350, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "14:40", placeEnter: "کرمانشاه(KSH)", baggage: "15 کیلو", handbage: "8 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 873", price: 16295500, },
    { id: 46, typeTicket: ["بیزینس چارتری", "بیزینس (C)"], date: [" دوشنبه 30 بهمن ", "Monday 19 February"], logoAirplane: "aseman_logo.webp", nameAirplane: "آسمان", timeExit: 1745, placeExit: "پاریس(QRY)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "19:30", placeEnter: "استانبول(IST)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "5 صندلی باقی مانده", numberFly: "شماره پرواز: 512", price: 8245000, },
    { id: 47, typeTicket: ["چارتری", "اکونومی (Y)"], date: [" یکشنبه 6 اسفند ", "Sunday 25 February"], logoAirplane: "mahanair_logo.webp", nameAirplane: "ماهان ایر", timeExit: "0" + 630, placeExit: "تهران(IKA)", stopLevel: 1, travelStoppic: ["no_stop_inFly.png", "no_stop_inFly_rangi.png"], timeEnter: "09:15", placeEnter: "استانبول(IST)", baggage: "30 کیلو", handbage: "5 کیلو", chairs: "6 صندلی باقی مانده", numberFly: "شماره پرواز: 112", price: 28710000, },
    { id: 48, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" یکشنبه 6 اسفند ", "Sunday 25 February"], logoAirplane: "golfair_logo.webp", nameAirplane: "گلف ایر", timeExit: 2335, placeExit: "دبی(DXB)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "06:00", placeEnter: "استانبول(IST)", baggage: "25 کیلو", handbage: "5 کیلو", chairs: "7 صندلی باقی مانده", numberFly: "شماره پرواز: 513", price: 17796285, },
    { id: 49, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" شنبه 5 اسفند ", "Saturday 24 February"], logoAirplane: "pegasos_logo.webp", nameAirplane: "پگاسوس", timeExit: "0" + 625, placeExit: "عسلویه(PGU)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "16:20", placeEnter: "پاریس(QRY)", baggage: "بدون بار", handbage: "7 کیلو", chairs: "9 صندلی باقی مانده", numberFly: "شماره پرواز: 517", price: 15859800, },
    { id: 50, typeTicket: ["سیستمی", "اکونومی (Y)"], date: [" شنبه 5 اسفند ", "Saturday 24 February"], logoAirplane: "flydobai_logo.webp", nameAirplane: "فلای دبی", timeExit: 2445, placeExit: "تهران(IKA)", stopLevel: 2, travelStoppic: ["one_stop_inFly.png", "one_stop_inFly_rangi.png"], timeEnter: "03:25", placeEnter: "دبی(DXB)", baggage: "25 کیلو", handbage: "5 کیلو", chairs: "4 صندلی باقی مانده", numberFly: "شماره پرواز: 194", price: 9791900, },
 
];
var memuryChangetype = true;
/* change theme */
changeType_mood.onclick = () => {
    changeThemeTo();
}

/* slice carecter */
function slicePricecarecter(durationString, itemName) {
    if (durationString.length == 8) {
        itemName.innerHTML = durationString.slice(0, 2) + "," + durationString.slice(2, 5) + "," + durationString.slice(5, 8);
    }
    else {
        itemName.innerHTML = durationString.slice(0, 1) + "," + durationString.slice(1, -3) + "," + durationString.slice(-3);
    }
}
function create(dataItems) {
    let ticketContainer = document.createElement("div");
    ticketContainer.className = "tickets_container";

    ticketContainer.addEventListener("click", function () { showModalinformation(dataItems.id); });

    let result = document.createElement("div");
    result.className = "result_flight";

    let flight_type = document.createElement("div");
    flight_type.className = "result_flight_type";
    flight_type.innerHTML = dataItems.typeTicket[0];
    if (dataItems.typeTicket[0] == "چارتری") {
        flight_type.style.backgroundColor = "#ff5e3a";
    }
    else if (dataItems.typeTicket[0] == "بیزینس چارتری") {
        flight_type.style.backgroundColor = "red";
    }
    else if (dataItems.typeTicket[0] == "بیزینس") {
        flight_type.style.backgroundColor = "#198f34";
    }

    let flight_logo = document.createElement("div");
    flight_logo.className = "result_flight_logo";

    let company_logo = document.createElement("div");
    company_logo.className = "logo";
    company_logo.style.backgroundImage = "url(images/icon/airplane_logos/" + dataItems.logoAirplane + ")";

    let company_name = document.createElement("span");
    company_name.className = "result_flight_airplaneName";
    company_name.innerHTML = dataItems.nameAirplane;

    let flight_route = document.createElement("div");
    flight_route.className = "result_flight_route";

    let exit_by_airplane = document.createElement("div");
    exit_by_airplane.className = "exit_of";

    let time_exitCountry = document.createElement("span");
    time_exitCountry.className = "exit_time";
    let dblDot = dataItems.timeExit.toString();
    time_exitCountry.innerHTML = dblDot.slice(0, 2) + ":" + dblDot.slice(2, 5);

    let place_exitCountry = document.createElement("span");
    place_exitCountry.className = "exit_place";
    place_exitCountry.innerHTML = dataItems.placeExit;

    let route_into = document.createElement("div");
    route_into.className = "result_flight_route_into";
    route_into.style.backgroundImage = "url(images/icon/stops_Icon/" + dataItems.travelStoppic[0] + ")";

    let enter_by_airplane = document.createElement("div");
    enter_by_airplane.className = "enter_to";

    let time_enterCountry = document.createElement("span");
    time_enterCountry.className = "enter_time";
    time_enterCountry.innerHTML = dataItems.timeEnter;

    let place_enterCountry = document.createElement("span");
    place_enterCountry.className = "enter_place";
    place_enterCountry.innerHTML = dataItems.placeEnter;

    let flight_baggage = document.createElement("div");
    flight_baggage.className = "result_flight_baggage";

    let allowBaggage = document.createElement("div");
    allowBaggage.className = "baggage_allowance";
    allowBaggage.innerHTML = dataItems.baggage;

    let allowHandbag = document.createElement("div");
    allowHandbag.className = "handbag_allowance";
    allowHandbag.innerHTML = dataItems.handbage;

    let flight_details = document.createElement("div");
    flight_details.className = "result_flight_details";
    flight_details.innerHTML = "جزئیات";


    let tip_airplanes = document.createElement("div");
    tip_airplanes.className = "airplanes_type";

    let footer_information_airplane = document.createElement("div");
    footer_information_airplane.className = "information_fly_inFooter";

    let chairNumbers = document.createElement("div");
    chairNumbers.className = "remaining_seats";
    chairNumbers.innerHTML = dataItems.chairs;

    let airplaneNumber = document.createElement("div");
    airplaneNumber.className = "flyNumber";
    airplaneNumber.innerHTML = dataItems.numberFly;

    let price_ticket = document.createElement("div");
    price_ticket.className = "price_ticket_airplane";
    let priceSlice = dataItems.price.toString();
    if (priceSlice.length == 8) {
        price_ticket.innerHTML = "هر نفر بزرگسال" + " " + priceSlice.slice(0, 2) + "," + priceSlice.slice(2, 5) + "," + priceSlice.slice(5, 8) + " " + "تومان";
    }
    else {
        price_ticket.innerHTML = "هر نفر بزرگسال" + " " + priceSlice.slice(0, 1) + "," + priceSlice.slice(1, -3) + "," + priceSlice.slice(-3) + " " + "تومان";
    }
    /* chenge theme Web */
    if (memuryChangetype == false) {
        ticketContainer.style.backgroundColor = "#18191B";
        ticketContainer.style.color = "#fff";
        route_into.style.backgroundImage = "url(images/icon/stops_Icon/" + dataItems.travelStoppic[1] + ")";
    } else {
        ticketContainer.style.backgroundColor = "#fff";
        ticketContainer.style.color = "#000";
        route_into.style.backgroundImage = "url(images/icon/stops_Icon/" + dataItems.travelStoppic[0] + ")";
    }

    flight_logo.appendChild(company_logo);
    flight_logo.appendChild(company_name);

    exit_by_airplane.appendChild(time_exitCountry);
    exit_by_airplane.appendChild(place_exitCountry);

    enter_by_airplane.appendChild(time_enterCountry);
    enter_by_airplane.appendChild(place_enterCountry);

    flight_route.appendChild(exit_by_airplane);
    flight_route.appendChild(route_into);
    flight_route.appendChild(enter_by_airplane);

    flight_baggage.appendChild(allowBaggage);
    flight_baggage.appendChild(allowHandbag);

    result.appendChild(flight_type);
    result.appendChild(flight_logo);
    result.appendChild(flight_route);
    result.appendChild(flight_baggage);
    result.appendChild(flight_details);

    footer_information_airplane.appendChild(chairNumbers);
    footer_information_airplane.appendChild(airplaneNumber);

    tip_airplanes.appendChild(footer_information_airplane);
    tip_airplanes.appendChild(price_ticket);

    ticketContainer.appendChild(result);
    ticketContainer.appendChild(tip_airplanes);
    dish.appendChild(ticketContainer);
    main.appendChild(dish);
}

function fill_main(jsonData) {
    dish.innerHTML = "";
    for (let i = 0; i < jsonData.length; i++) {
        create(jsonData[i]);
    }
}
fill_main(flyTickets);

/* filter */
function NoResulte(filteredTicket_notFound) {
    if (filteredTicket_notFound == "") { noResultFound.style.display = "block"; }
    else { noResultFound.style.display = "none"; }
}
var filteredFly;
function fliterDataFly() {
    // type fly
    let allTypefly = true; // show all type
    let charter = "";
    let systemy = "";
    let bisness = "";
    let classFly_first = "";
    // move time
    let allTimemove = true; // show all move time
    let midnight;
    let mornning;
    let afternoon;
    let night;
    // stop fly
    let allStop = true;
    let stopNO;
    let stopONE;
    let stopTOW;
    // name company
    // comapny => com
    let showAll_company = true;
    let com_emarat = "";
    let com_mahanAir = "";
    let com_ghatarAir = "";
    let com_terkish = "";
    let com_flyDobai = "";
    let com_golftAir = "";
    let com_kovaitAir = "";
    let com_lofantoz = "";

    if (first_input.checked) {
        classFly_first = "فرست کلاس";
        allTypefly = false;
    }
    if (economy_input.checked) {
        charter = "چارتری";
        systemy = "سیستمی";
        allTypefly = false;
    }
    if (business_input.checked) {
        bisness = "بیزینس";
        allTypefly = false;
    }
    if (charter_input.checked) {
        charter = "چارتری";
        allTypefly = false;
    }
    if (systemy_input.checked) {
        systemy = "سیستمی";
        allTypefly = false;
    }
    if (midnight_input.checked) {
        midnight = 600;
        allTimemove = false;
    }
    if (mornning_input.checked) {
        mornning = 1200;
        allTimemove = false;
    }
    if (afternoon_input.checked) {
        afternoon = 1800;
        allTimemove = false;
    }
    if (night_input.checked) {
        night = 2400;
        allTimemove = false;
    }
    if (fs1.checked) {
        stopNO = 1;
        allStop = false;
    }
    if (fs2.checked) {
        stopONE = 2;
        allStop = false;
    }
    if (fs3.checked) {
        stopTOW = 3;
        allStop = false;
    }
    if (nc1.checked) {
        com_emarat = "الامارات";
        showAll_company = false;
    }
    if (nc2.checked) {
        com_mahanAir = "ماهان ایر";
        showAll_company = false;
    }
    if (nc3.checked) {
        com_ghatarAir = "قطر ایر ویز";
        showAll_company = false;
    }
    if (nc4.checked) {
        com_terkish = "ترکیش";
        showAll_company = false;
    }
    if (nc5.checked) {
        com_flyDobai = "فلای دبی";
        showAll_company = false;
    }
    if (nc6.checked) {
        com_golftAir = "گلف ایر";
        showAll_company = false;
    }
    if (nc7.checked) {
        com_kovaitAir = "پگاسوس";
        showAll_company = false;
    }
    if (nc8.checked) {
        com_lofantoz = "آسمان";
        showAll_company = false;
    }
    filteredFly = flyTickets.filter((element) => {
        // type fly
        return (element.stopLevel == stopNO || element.stopLevel == stopONE || element.stopLevel == stopTOW || allStop == true) &&
            (element.typeTicket[0] == charter || element.typeTicket[0] == systemy || element.typeTicket[0] == bisness || element.typeTicket[0] == classFly_first || allTypefly == true) &&
            ( // time move
                element.timeExit >= 0 && element.timeExit <= midnight ||
                element.timeExit >= 600 && element.timeExit <= mornning ||
                element.timeExit >= 1200 && element.timeExit <= afternoon ||
                element.timeExit >= 1800 && element.timeExit <= night ||
                allTimemove == true
            ) &&
            (
                element.nameAirplane == com_emarat ||
                element.nameAirplane == com_mahanAir ||
                element.nameAirplane == com_ghatarAir ||
                element.nameAirplane == com_terkish ||
                element.nameAirplane == com_flyDobai ||
                element.nameAirplane == com_golftAir ||
                element.nameAirplane == com_kovaitAir ||
                element.nameAirplane == com_lofantoz ||
                showAll_company == true
            ) &&
            element.placeExit.indexOf(firstCity_value.innerHTML) != -1 && element.placeEnter.indexOf(lastCity_value.innerHTML) != -1
    });

    // sort
    // defulte
    if (sort_default_ticket_input.checked) {
        if (memury_sort_default == false) {
            if (memury_sort_price == true) { filteredFly = filteredFly.sort((a, b) => { return a.price - b.price }); }
            if (memury_sort_price == false) { filteredFly = filteredFly.sort((a, b) => { return b.price - a.price }); }
            if (memury_sort_time == true) { filteredFly = filteredFly.sort((a, b) => { return a.timeExit - b.timeExit }); }
            if (memury_sort_time == false) { filteredFly = filteredFly.sort((a, b) => { return b.timeExit - a.timeExit }); }
            if (memury_sort_stop == true) { filteredFly = filteredFly.sort((a, b) => { return b.stopLevel - a.stopLevel }); }
            if (memury_sort_stop == false) { filteredFly = filteredFly.sort((a, b) => { return a.stopLevel - b.stopLevel }); }
        }
        else {
            if (memury_sort_price == true) { filteredFly = filteredFly.sort((a, b) => { return b.price - a.price }); }
            if (memury_sort_price == false) { filteredFly = filteredFly.sort((a, b) => { return a.price - b.price }); }
            if (memury_sort_time == true) { filteredFly = filteredFly.sort((a, b) => { return b.timeExit - a.timeExit }); }
            if (memury_sort_time == false) { filteredFly = filteredFly.sort((a, b) => { return a.timeExit - b.timeExit }); }
            if (memury_sort_stop == true) { filteredFly = filteredFly.sort((a, b) => { return a.stopLevel - b.stopLevel }); }
            if (memury_sort_stop == false) { filteredFly = filteredFly.sort((a, b) => { return b.stopLevel - a.stopLevel }); }
        }
    }
    //price
    if (sort_price_ticket_input.checked) {
        if (memury_sort_price == true) { filteredFly = filteredFly.sort((a, b) => { return a.price - b.price }); }
        else { filteredFly = filteredFly.sort((a, b) => { return b.price - a.price }); }
    }
    // fly movement
    if (sort_time_ticket_input.checked) {
        if (memury_sort_time == true) { filteredFly = filteredFly.sort((a, b) => { return a.timeExit - b.timeExit }); }
        else { filteredFly = filteredFly.sort((a, b) => { return b.timeExit - a.timeExit }); }
    }
    // fly stop
    if (sort_stop_ticket_input.checked) {
        if (memury_sort_stop == true) { filteredFly = filteredFly.sort((a, b) => { return b.stopLevel - a.stopLevel }); }
        else { filteredFly = filteredFly.sort((a, b) => { return a.stopLevel - b.stopLevel }); }
    }
    fill_main(filteredFly);
    NoResulte(filteredFly);
}
const searchBtn = document.getElementById("searchBtn");

const charter_input = document.getElementById("charter_input");
const systemy_input = document.getElementById("systemy_input");
const midnight_input = document.getElementById("midnight_input");
const mornning_input = document.getElementById("mornning_input");
const afternoon_input = document.getElementById("afternoon_input");
const night_input = document.getElementById("night_input");
const sort_price_ticket_input = document.getElementById("sort_price_ticket_input");
const sort_time_ticket_input = document.getElementById("sort_time_ticket_input");
const sort_stop_ticket_input = document.getElementById("sort_stop_ticket_input");
const sort_default_ticket_input = document.getElementById("sort_default_ticket_input");
const business_input = document.getElementById("business_input");
const economy_input = document.getElementById("economy_input");
const first_input = document.getElementById("first_input");
const nc1 = document.getElementById("nc1");
const nc2 = document.getElementById("nc2");
const nc3 = document.getElementById("nc3");
const nc4 = document.getElementById("nc4");
const nc5 = document.getElementById("nc5");
const nc6 = document.getElementById("nc6");
const nc7 = document.getElementById("nc7");
const nc8 = document.getElementById("nc8");

first_input.onclick = () => { fliterDataFly(); }
economy_input.onclick = () => { fliterDataFly(); }
charter_input.onclick = () => { fliterDataFly(); }
systemy_input.onclick = () => { fliterDataFly(); }
business_input.onclick = () => { fliterDataFly(); }
midnight_input.onclick = () => { fliterDataFly(); }
mornning_input.onclick = () => { fliterDataFly(); }
afternoon_input.onclick = () => { fliterDataFly(); }
night_input.onclick = () => { fliterDataFly(); }
sort_price_ticket_input.onclick = () => { fliterDataFly(); }
sort_time_ticket_input.onclick = () => { fliterDataFly(); }
sort_stop_ticket_input.onclick = () => { fliterDataFly(); }
sort_default_ticket_input.onclick = () => { fliterDataFly(); }
fs1.onclick = () => { fliterDataFly(); }
fs2.onclick = () => { fliterDataFly(); }
fs3.onclick = () => { fliterDataFly(); }
nc1.onclick = () => { fliterDataFly(); }
nc2.onclick = () => { fliterDataFly(); }
nc3.onclick = () => { fliterDataFly(); }
nc4.onclick = () => { fliterDataFly(); }
nc5.onclick = () => { fliterDataFly(); }
nc6.onclick = () => { fliterDataFly(); }
nc7.onclick = () => { fliterDataFly(); }
nc8.onclick = () => { fliterDataFly(); }
searchBtn.onclick = () => {
    filteredFly = flyTickets.filter((element) => {
        return element.placeExit.indexOf(firstCity_value.innerHTML) != -1 && element.placeEnter.indexOf(lastCity_value.innerHTML) != -1
    });
    if (filteredFly == "") {
        side.style.display = "none";
        main.style.width = "100%";
        noResult_bySearch.style.display = "block";
    }
    else {
        side.style.display = "flex";
        main.style.width = "75%";
        noResult_bySearch.style.display = "none";
    }
    fill_main(filteredFly);
};
const addTobtn = document.getElementById("addTobtn");
/* modal information */
function showModalinformation(jsonDataItems) {
    showML(modalCover_information, informationCountainerModal);

    let modalMemury = flyTickets.find(el => el.id == jsonDataItems); // !important

    logoAirplane_modal.style.backgroundImage = "url(images/icon/airplane_logos/" + modalMemury.logoAirplane + ")";
    nameAirplane_modal.innerHTML = modalMemury.nameAirplane;
    let dblDotexit = modalMemury.timeExit.toString();
    exitTime_modal.innerHTML = dblDotexit.slice(0, 2) + ":" + dblDotexit.slice(2, 5);
    exitPlace_modal.innerHTML = modalMemury.placeExit;
    enterTime_modal.innerHTML = modalMemury.timeEnter;
    enterPlace_modal.innerHTML = modalMemury.placeEnter;
    allowedCargo_fly_baggage.innerHTML = modalMemury.baggage;
    allowedCargo_fly_handbag.innerHTML = modalMemury.handbage;
    exitData_shamsi_modal.innerHTML = modalMemury.date[0];
    enterData_shamsi_modal.innerHTML = modalMemury.date[0];
    exitData_miladi_modal.innerHTML = modalMemury.date[1];
    enterData_miladi_modal.innerHTML = modalMemury.date[1];
    flyClass_modal.innerHTML = "کلاس پرواز :" + modalMemury.typeTicket[1];
    stopImage_modal.style.backgroundImage = "url(images/icon/stops_Icon/" + modalMemury.travelStoppic[1] + ")";
    if (modalMemury.stopLevel == 1) {
        stopName_modal.innerHTML = "(بدون توقف)";
    }
    else if (modalMemury.stopLevel == 2) {
        stopName_modal.innerHTML = "(1 توقف)";
    }
    else if (modalMemury.stopLevel == 3) {
        stopName_modal.innerHTML = "(2 توقف)";
    }

    adultPerson.innerHTML = NumberOfadult + " " + "نفر بزرگسال";

    let allAdultperso_price = modalMemury.price * NumberOfadult;
    let priceAdult_slice = allAdultperso_price.toString();
    slicePricecarecter(priceAdult_slice, adultPerson_price); // slice

    kidPerson.innerHTML = NumberOfkid + " " + "نفر کودک";

    let allKidperso_price = (modalMemury.price / 2) * NumberOfkid;
    if (allKidperso_price != 0) {
        let priceKid_slice = allKidperso_price.toString();
        slicePricecarecter(priceKid_slice, kidPerson_price); // slice
    } else {
        kidPerson_price.innerHTML = allKidperso_price;
    }

    babyPerson.innerHTML = NumberOfbaby + " " + "نفر نوزاد";

    let allBabyperso_price = Math.ceil(modalMemury.price / 3) * NumberOfbaby;
    if (allBabyperso_price != 0) {
        let priceBaby_slice = allBabyperso_price.toString();
        slicePricecarecter(priceBaby_slice, babyPerson_price); // slice
    } else {
        babyPerson_price.innerHTML = allBabyperso_price;
    }

    let allPrice = allBabyperso_price + allKidperso_price + allAdultperso_price;
    let allPrice_slice = allPrice.toString();
    slicePricecarecter(allPrice_slice, allPrice_inModal); // slice

    data_exportation.innerHTML = modalMemury.date[0];

    slicePricecarecter(allPrice_slice, finalyPrice); // slice

    addTobtn.setAttribute("data-itemsid", modalMemury.id); // Each addBtn have a data-itemsid
}
/* create localStorage */
var memury_showWarn;
addTobtn.addEventListener("click", () => {
    let btnId = addTobtn.getAttribute("data-itemsid"); /* get data-itemsid */

    /* get information from big json */

    let objectId = flyTickets.find(element => element.id == btnId);

    let quantityTotal = NumberOfadult + NumberOfkid + NumberOfbaby; /* passengers value */
    let flightID = objectId.id;
    let flightTYPE = objectId.typeTicket[0];
    let flightDATE = objectId.date[0];
    let flightLOGO = objectId.logoAirplane;
    let flightNAMELOGO = objectId.nameAirplane;
    let flightTIMEGO = objectId.timeExit;
    let flightPLACEGO = objectId.placeExit;
    let flightTIMECOME = objectId.timeEnter;
    let flightPLACECOME = objectId.placeEnter;
    let flightPRICE = objectId.price;
    let flightQUANTITY = quantityTotal; /* passengers value */

    /* get item from localStorage */

    TicketListUser = JSON.parse(localStorage.getItem("TicketListUser"));

    if (!TicketListUser) { /* first time I don't have json */
        TicketListUser = [];
    }

    let ticketListIndex = TicketListUser.findIndex(element => element.flightID == btnId); /* search in ticketList */

    if (ticketListIndex != -1) { /* if attend ticket in the list */
        /* show text warn */
        memury_showWarn = true;
        textWarn_ticket.style.display = "block";
    } else if (ticketListIndex == -1) {
        TicketListUser.push({ flightID, flightTYPE, flightDATE, flightLOGO, flightNAMELOGO, flightTIMEGO, flightPLACEGO, flightTIMECOME, flightPLACECOME, flightPRICE, flightQUANTITY });
        newAddticket.style.display = "block";
    }

    localStorage.setItem("TicketListUser", JSON.stringify(TicketListUser)); /* set ticket in list */
});
/* show text warn */
addTobtn.onmouseout = () => {
    showWarn = setTimeout(() => {
        textWarn_ticket.style.display = "none";
        memury_showWarn = false;
    }, 800);
}
addTobtn.onmouseover = () => {
    if (memury_showWarn == true) {
        clearTimeout(showWarn);
    }
}

/* create item that in the localStorage */
function createItem_inListLocal(localData) {
    let item = document.createElement("div");
    item.className = "itemHolder";

    let type = document.createElement("div");
    type.className = "typeFlight";
    let valueOftype = localData.flightTYPE;
    type.innerHTML = valueOftype;

    /* color of bg Type flight with value */

    if (valueOftype == "سیستمی") {
        type.style.backgroundColor = "#005792";
    }
    if (valueOftype == "بیزینس") {
        type.style.backgroundColor = "rgb(25, 143, 52)";
    }
    if (valueOftype == "چارتری") {
        type.style.backgroundColor = "rgb(255, 94, 58)";
    }
    if (valueOftype == "بیزینس چارتری") {
        type.style.backgroundColor = "red";
    }

    let result = document.createElement("div");
    result.className = "resultFlight_holder";

    let companyInf = document.createElement("div");
    companyInf.className = "company";

    let logo = document.createElement("div");
    logo.className = "logo";
    logo.style.backgroundImage = "url(images/icon/airplane_logos/" + localData.flightLOGO;

    let nameCompany = document.createElement("div");
    nameCompany.className = "nameCompany";
    nameCompany.innerHTML = localData.flightNAMELOGO;

    let go = document.createElement("div");
    go.className = "go";

    let timeGo = document.createElement("div");
    timeGo.className = "timeGo";
    let sliceCarecter = localData.flightTIMEGO.toString();
    timeGo.innerHTML = sliceCarecter.slice(0, 2) + ":" + sliceCarecter.slice(2, 4);
    timeGo.style.direction = "ltr";

    let placeGo = document.createElement("div");
    placeGo.className = "placeGo";
    placeGo.innerHTML = localData.flightPLACEGO;

    let date = document.createElement("div");
    date.className = "date";
    date.innerHTML = localData.flightDATE;

    let come = document.createElement("div");
    come.className = "come";

    let timeCome = document.createElement("div");
    timeCome.className = "timeCome";
    timeCome.innerHTML = localData.flightTIMECOME;

    let placeCome = document.createElement("div");
    placeCome.className = "placeCome";
    placeCome.innerHTML = localData.flightPLACECOME;

    let quan = document.createElement("div");
    quan.className = "quantity";
    quan.innerHTML = localData.flightQUANTITY;

    let footer = document.createElement("div");
    footer.className = "footerItem";

    let price = document.createElement("div");
    price.className = "price";
    let slicePrice = localData.flightPRICE.toString();
    slicePricecarecter(slicePrice, price);

    let deleteitem = document.createElement("div");
    deleteitem.className = "delete";
    deleteitem.innerHTML = "حذف";
    deleteitem.setAttribute("data-id", localData.itemId);
    /* delete item from list */
    deleteitem.setAttribute("data-id", localData.flightID);
    deleteitem.addEventListener("click", function () {
        let btnId = this.getAttribute("data-id");
        TicketListUser = JSON.parse(localStorage.getItem("TicketListUser"));
        let btnIdIndex = TicketListUser.findIndex(el => el.flightID == btnId);
        if (btnIdIndex != -1) {
            TicketListUser.splice(btnIdIndex, 1);
            localStorage.setItem("TicketListUser", JSON.stringify(TicketListUser));
            navigationItem_inList(TicketListUser);
        }
    });

    /* chenge theme Web */
    if (memuryChangetype == false) {
        item.style.backgroundColor = "#414141";
        placeCome.style.color = "#fff";
        placeGo.style.color = "#fff";
    } else {
        item.style.backgroundColor = "#fff";
        placeCome.style.color = "rgb(51, 49, 49)";
        placeGo.style.color = "rgb(51, 49, 49)";
    }
    companyInf.appendChild(logo);
    companyInf.appendChild(nameCompany);

    go.appendChild(timeGo);
    go.appendChild(placeGo);

    come.appendChild(timeCome);
    come.appendChild(placeCome);

    result.appendChild(companyInf);
    result.appendChild(go);
    result.appendChild(date);
    result.appendChild(come);
    result.appendChild(quan);

    footer.appendChild(price);
    footer.appendChild(deleteitem);

    item.appendChild(type);
    item.appendChild(result);
    item.appendChild(footer);

    holder_modal.appendChild(item);
}
/* navigation item that in the localStorage */
function navigationItem_inList(localDataItems) {
    holder_modal.innerHTML = "";
    /* create item in list */
    localDataItems.forEach(function (elements) {
        createItem_inListLocal(elements);
    });
}

/* show modal myTicket! */
const myTicket = document.getElementById("myTicket");
myTicket.onclick = () => {
    newAddticket.style.display = "none";
    showML(myTicket_modal_cover, myTicket_modal); /* show modal */
    searchIn_myticketModal.value = "";
    /* create item in list */
    TicketListUser = JSON.parse(localStorage.getItem("TicketListUser")); /* get item from localStorage */
    navigationItem_inList(TicketListUser);
}

/* search in myTicket modal */
searchIn_myticketModal.onkeyup = function () {
    let filteredBysearch = JSON.parse(localStorage.getItem("TicketListUser")); /* get item from mind localStorage*/
    let textValue = searchIn_myticketModal.value;/* get value of search*/
    filteredBysearch = filteredBysearch.filter((element) => { /* searched */
        return element.flightPLACEGO.indexOf(textValue) != -1 || element.flightTYPE.indexOf(textValue) != -1
    });
    localStorage.setItem("filteredBysearch", JSON.stringify(filteredBysearch)); /* create search elements */
    navigationItem_inList(filteredBysearch);
    /* create all item if holder_modal == null  */
    if (holder_modal.innerHTML == "") {
        TicketListUser = JSON.parse(localStorage.getItem("TicketListUser"));
        navigationItem_inList(TicketListUser);
    }
}