using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DataBase
{
    public partial class Eligasht : System.Web.UI.Page
    {
        class flyTickets
        {
            public int id;
            public string[] typeTicket;
            public string[] date;
            public string logoAirplane;
            public string nameAirplane;
            public int timeExit;
            public string placeExit;
            public byte stopLevel;
            public string[] travelStoppic;
            public string timeEnter;
            public string placeEnter;
            public string baggage;
            public string handbage;
            public string chairs;
            public string numberFly;
            public ulong price;

            public flyTickets(int id , string[] typeTicket , string[] date , string logoAirplane , string nameAirplane , int timeExit , string placeExit , byte stopLevel , string[] travelStoppic , string timeEnter , string placeEnter , string baggage , string handbage , string chairs , string numberFly , ulong price) 
            { 
                this.id = id ;
                this.typeTicket = typeTicket ;
                this.date = date ;
                this.logoAirplane = logoAirplane ;
                this.nameAirplane = nameAirplane ;
                this.timeExit = timeExit ;
                this.placeExit = placeExit ;
                this.stopLevel = stopLevel ;
                this.timeEnter = timeEnter ;
                this.placeEnter = placeEnter ;
                this.baggage = baggage ;
                this.handbage = handbage ;
                this.chairs = chairs ;
                this.numberFly = numberFly ;
                this.price = price ;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            List<flyTickets> flyTickets = new List<flyTickets>();

            flyTickets.Add(new flyTickets( 1, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " سه شنبه 1 اسفند ", "Tuesday 20 February" }, "flydobai_logo.webp", "فلای دبی", 2445, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "03:25", "دبی(DXB)", "25 کیلو", "5 کیلو", "4 صندلی باقی مانده", "شماره پرواز: 194", 9791900));
            flyTickets.Add(new flyTickets( 2, new string[] { "بیزینس", " بیزینس (C)" }, new string[] { " سه شنبه 1 اسفند ", "Tuesday 20 February" }, "ghatarair_logo.webp", "قطر ایر ویز", 2445, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "10:15", "دبی(DXB)", "25 کیلو", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 499", 15864400));
            flyTickets.Add(new flyTickets(3, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " سه شنبه 1 اسفند ", "Tuesday 20 February" }, "ghatarair_logo.webp", "قطر ایر ویز", 2445, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "21:25", "قشم(GSM)", "25 کیلو", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 499", 15864400));
            flyTickets.Add(new flyTickets(4, new string[] { "بیزینس", " بیزینس (C)" }, new string[] { " سه شنبه 1 اسفند ", "Wednesday 21 February" }, "ghatarair_logo.webp", "قطر ایر ویز", 2445, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "20:55", "تهران(IKA)", "25 کیلو", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 499", 15864400));
            flyTickets.Add(new flyTickets(5, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " چهار شنبه 2 اسفند ", "Wednesday 21 February" }, "alemarat_logo.webp", "الامارات", 1820, "تهران(IKA)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "21:10", "قشم(GSM)", "30 کیلو", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 980", 9706300));
            flyTickets.Add(new flyTickets(6, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " پنج شنبه 3 اسفند ", "Turesday 22 February" }, "mahanair_logo.webp", "ماهان ایر", 1745, "تهران(IKA)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "21:15", "دبی(DXB)", "30 کیلو", "5 کیلو", "6 صندلی باقی مانده", "شماره پرواز: 065", 17820000));
            flyTickets.Add(new flyTickets(7, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " پنج شنبه 3 اسفند ", "Turesday 22 February" }, "pegasos_logo.webp", "پگاسوس", 625, "چابهار(ZBR)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "16:40", "آنتالیا(َAYT)", "بدون بار", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 517", 14647360));
            flyTickets.Add(new flyTickets(8, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " پنج شنبه 3 اسفند ", "Turesday 22 February" }, "pegasos_logo.webp", "پگاسوس", 625, "پاریس(QRY)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "13:00", "آنتالیا(َAYT)", "بدون بار", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 517", 14647360));
            flyTickets.Add(new flyTickets(9, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " پنج شنبه 3 اسفند ", "Turesday 22 February" }, "terkish_logo.webp", "ترکیش", 350, "کرمانشاه(KSH)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "14:40", "عسلویه(PGU)", "15 کیلو", "8 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 873", 16295500));
            flyTickets.Add(new flyTickets(10, new string[] { "بیزینس", " بیزینس (C)" }, new string[] { " جمعه 4 اسفند ", "Friday 23 February" }, "pegasos_logo.webp", "پگاسوس", 625, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "16:20", "پاریس(QRY)", "بدون بار", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 517", 15859800));
            flyTickets.Add(new flyTickets(11, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " جمعه 4 اسفند ", "Friday 23 February" }, "ghatarair_logo.webp", "قطر ایر ویز", 2245, "تهران(IKA)", 3, new string[] { "two_stop_inFly.png", "two_stop_inFly_rangi.png" }, "07:25", "مشهد(MHD)", "25 کیلو", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 491", 17466100));
            flyTickets.Add(new flyTickets(12, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " شنبه 5 اسفند ", "Saturday 24 February" }, "ghatarair_logo.webp", "قطر ایر ویز", 510, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "20:55", "پاریس(QRY)", "25 کیلو", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 491", 17466100));
            flyTickets.Add(new flyTickets(13, new string[] { "بیزینس", " بیزینس (C)" }, new string[] { " شنبه 5 اسفند ", "Saturday 24 February" }, "ghatarair_logo.webp", "قطر ایر ویز", 2245, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "14:25", "پاریس(QRY)", "25 کیلو", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 491", 17466100));
            flyTickets.Add(new flyTickets(14, new string[] { "بیزینس چارتری", "بیزینس (C)" }, new string[] { " یکشنبه 6 اسفند ", "Sunday 25 February" }, "aseman_logo.webp", "آسمان", 1745, "قشم(GSM)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "19:30", "استانبول(IST)", "30 کیلو", "5 کیلو", "5 صندلی باقی مانده", "شماره پرواز: 512", 8245000));
            flyTickets.Add(new flyTickets(15, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " یکشنبه 6 اسفند ", "Sunday 25 February" }, "mahanair_logo.webp", "ماهان ایر", 630, "چابهار(ZBR)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "09:15", "استانبول(IST)", "30 کیلو", "5 کیلو", "6 صندلی باقی مانده", "شماره پرواز: 112", 28710000));
            flyTickets.Add(new flyTickets(16, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " دوشنبه 7 اسفند ", "Monday 26 February" }, "golfair_logo.webp", "گلف ایر", 2335, "دبی(DXB)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "06:00", "استانبول(IST)", "25 کیلو", "5 کیلو", "7 صندلی باقی مانده", "شماره پرواز: 513", 17796285));
            flyTickets.Add(new flyTickets(17, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " دوشنبه 7 اسفند ", "Monday 26 February" }, "mahanair_logo.webp", "ماهان ایر", 1400, "دبی(DXB)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "20:40", "استانبول(IST)", "30 کیلو", "5 کیلو", "", "شماره پرواز: 060", 49626900));
            flyTickets.Add(new flyTickets(18, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " دوشنبه 7 اسفند ", "Monday 26 February" }, "mahanair_logo.webp", "ماهان ایر", 1115, "دبی(DXB)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "10:45", "استانبول(IST)", "30 کیلو", "5 کیلو", "", "شماره پرواز: 062", 49626900));
            flyTickets.Add(new flyTickets(19, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " دوشنبه 30 بهمن ", "Monday 19 February" }, "alemarat_logo.webp", "الامارات", 1820, "تهران(IKA)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "21:10", "دبی(DXB)", "30 کیلو", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 980", 9706300));
            flyTickets.Add(new flyTickets(20, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " دوشنبه 30 بهمن ", "Monday 19 February" }, "mahanair_logo.webp", "ماهان ایر", 1745, "قشم(GSM)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "20:15", "تهران(IKA)", "30 کیلو", "5 کیلو", "6 صندلی باقی مانده", "شماره پرواز: 065", 17820000));
            flyTickets.Add(new flyTickets(21, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " سه شنبه 8 اسفند ", "Tuesday 27 February" }, "pegasos_logo.webp", "پگاسوس", 625, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "16:40", "عسلویه(PGU)", "بدون بار", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 517", 14647360));
            flyTickets.Add(new flyTickets(22, new string[] { "بیزینس", " بیزینس (C)" }, new string[] { " سه شنبه 8 اسفند ", "Tuesday 27 February" }, "pegasos_logo.webp", "پگاسوس", 625, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "13:00", "چابهار(ZBR)", "بدون بار", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 517", 14647360));
            flyTickets.Add(new flyTickets(23, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " سه شنبه 8 اسفند ", "Tuesday 27 February" }, "terkish_logo.webp", "ترکیش", 350, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "14:40", "آنتالیا(َAYT)", "15 کیلو", "8 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 873", 16295500));
            flyTickets.Add(new flyTickets(24, new string[] { "بیزینس چارتری", "بیزینس (C)" }, new string[] { " دوشنبه 7 اسفند ", "Monday 26 February" }, "aseman_logo.webp", "آسمان", 1745, "آبادان(ABD)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "19:30", "استانبول(IST)", "30 کیلو", "5 کیلو", "5 صندلی باقی مانده", "شماره پرواز: 512", 8245000));
            flyTickets.Add(new flyTickets(25, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " دوشنبه 7 اسفند ", "Monday 26 February" }, "mahanair_logo.webp", "ماهان ایر", 630, "عسلویه(PGU)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "09:15", "استانبول(IST)", "30 کیلو", "5 کیلو", "6 صندلی باقی مانده", "شماره پرواز: 112", 28710000));
            flyTickets.Add(new flyTickets(26, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " چهارشنبه 9 اسفند ", "Wednesday 28 February" }, "golfair_logo.webp", "گلف ایر", 2335, "دبی(DXB)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "06:00", "استانبول(IST)", "25 کیلو", "5 کیلو", "7 صندلی باقی مانده", "شماره پرواز: 513", 17796285));
            flyTickets.Add(new flyTickets(27, new string[] { "بیزینس", " بیزینس (C)" }, new string[] { " چهارشنبه 9 اسفند ", "Wednesday 28 February" }, "pegasos_logo.webp", "پگاسوس", 625, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "16:20", "پاریس(QRY)", "بدون بار", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 517", 15859800));
            flyTickets.Add(new flyTickets(28, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " پنج شنبه 10 اسفند ", "Thursday 29 February" }, "flydobai_logo.webp", "فلای دبی", 2445, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "03:25", "دبی(DXB)", "25 کیلو", "5 کیلو", "4 صندلی باقی مانده", "شماره پرواز: 194", 9791900));
            flyTickets.Add(new flyTickets(29, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " پنج شنبه 10 اسفند ", "Thursday 29 February" }, "ghatarair_logo.webp", "قطر ایر ویز", 2445, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "10:15", "دبی(DXB)", "25 کیلو", "5 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 499", 15864400));
            flyTickets.Add(new flyTickets(30, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " جمعه 11 اسفند ", "Friday 30 February" }, "ghatarair_logo.webp", "قطر ایر ویز", 2445, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "21:25", "دبی(DXB)", "25 کیلو", "5 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 499", 15864400));
            flyTickets.Add(new flyTickets(31, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " دوشنبه 7 اسفند ", "Monday 26 February" }, "ghatarair_logo.webp", "قطر ایر ویز", 2445, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "20:55", "دبی(DXB)", "25 کیلو", "5 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 499", 15864400));
            flyTickets.Add(new flyTickets(32, new string[] { "بیزینس", " بیزینس (C)" }, new string[] { " دوشنبه 7 اسفند ", "Monday 26 February" }, "alemarat_logo.webp", "الامارات", 1820, "تهران(IKA)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "21:10", "دبی(DXB)", "30 کیلو", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 980", 9706300));
            flyTickets.Add(new flyTickets(33, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " دوشنبه 30 بهمن ", "Monday 19 February" }, "mahanair_logo.webp", "ماهان ایر", 1745, "تهران(IKA)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "20:15", "دبی(DXB)", "30 کیلو", "5 کیلو", "6 صندلی باقی مانده", "شماره پرواز: 065", 17820000));
            flyTickets.Add(new flyTickets(34, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " دوشنبه 30 بهمن ", "Monday 19 February" }, "ghatarair_logo.webp", "قطر ایر ویز", 2245, "تهران(IKA)", 3, new string[] { "two_stop_inFly.png", "two_stop_inFly_rangi.png" }, "07:25", "پاریس(QRY)", "25 کیلو", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 491", 17466100));
            flyTickets.Add(new flyTickets(35, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " دوشنبه 30 بهمن ", "Monday 19 February" }, "mahanair_logo.webp", "ماهان ایر", 630, "تهران(IKA)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "09:15", "استانبول(IST)", "30 کیلو", "5 کیلو", "6 صندلی باقی مانده", "شماره پرواز: 112", 28710000));
            flyTickets.Add(new flyTickets(36, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " جمعه 11 اسفند ", "Friday 30 February" }, "golfair_logo.webp", "گلف ایر", 2335, "دبی(DXB)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "06:00", "آبادان(ABD)", "25 کیلو", "5 کیلو", "7 صندلی باقی مانده", "شماره پرواز: 513", 17796285));
            flyTickets.Add(new flyTickets(37, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " جمعه 11 اسفند ", "Friday 30 February" }, "mahanair_logo.webp", "ماهان ایر", 1400, "دبی(DXB)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "20:40", "استانبول(IST)", "30 کیلو", "5 کیلو", "", "شماره پرواز: 060", 49626900));
            flyTickets.Add(new flyTickets(38, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " دوشنبه 7 اسفند ", "Monday 26 February" }, "mahanair_logo.webp", "ماهان ایر", 1115, "دبی(DXB)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "10:45", "استانبول(IST)", "30 کیلو", "5 کیلو", "", "شماره پرواز: 062", 49626900));
            flyTickets.Add(new flyTickets(39, new string[] { "بیزینس چارتری", "بیزینس (C)" }, new string[] { " شنبه 5 اسفند ", "Saturday 24 February" }, "aseman_logo.webp", "آسمان", 1745, "تهران(IKA)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "19:30", "استانبول(IST)", "30 کیلو", "5 کیلو", "5 صندلی باقی مانده", "شماره پرواز: 512", 8245000));
            flyTickets.Add(new flyTickets(40, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " شنبه 5 اسفند ", "Saturday 24 February" }, "mahanair_logo.webp", "ماهان ایر", 630, "آبادان(ABD)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "09:15", "استانبول(IST)", "30 کیلو", "5 کیلو", "6 صندلی باقی مانده", "شماره پرواز: 112", 28710000));
            flyTickets.Add(new flyTickets(41, new string[] { "بیزینس", " بیزینس (C)" }, new string[] { " شنبه 5 اسفند ", "Saturday 24 February" }, "golfair_logo.webp", "گلف ایر", 2335, "دبی(DXB)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "06:00", "آبادان(ABD)", "25 کیلو", "5 کیلو", "7 صندلی باقی مانده", "شماره پرواز: 513", 17796285));
            flyTickets.Add(new flyTickets(42, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " سه شنبه 1 اسفند ", "Tuesday 20 February" }, "ghatarair_logo.webp", "قطر ایر ویز", 510, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "20:55", "پاریس(QRY)", "25 کیلو", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 491", 17796285));
            flyTickets.Add(new flyTickets(43, new string[] { "سیستمی", "اکونومی (Y)" }, new string[] { " سه شنبه 1 اسفند ", "Tuesday 20 February" }, "ghatarair_logo.webp", "قطر ایر ویز", 2245, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "14:25", "کرمانشاه(KSH)", "25 کیلو", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 491", 17796285));
            flyTickets.Add(new flyTickets(44, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " پنج شنبه 10 اسفند ", "Thursday 29 February" }, "pegasos_logo.webp", "پگاسوس", 625, "مشهد(MHD)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "13:00", " آنتالیا(َAYT)", "بدون بار", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 517", 14647360));
            flyTickets.Add(new flyTickets(45, new string[] { "بیزینس", " بیزینس (C)" }, new string[] { " پنج شنبه 10 اسفند ", "Thursday 29 February" }, "terkish_logo.webp", "ترکیش", 350, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "14:40", "کرمانشاه(KSH)", "15 کیلو", "8 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 873", 16295500));
            flyTickets.Add(new flyTickets(46, new string[] { "بیزینس چارتری", "بیزینس (C)" }, new string[] { " دوشنبه 30 بهمن ", "Monday 19 February" }, "aseman_logo.webp", "آسمان", 1745, "پاریس(QRY)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "19:30", "استانبول(IST)", "30 کیلو", "5 کیلو", "5 صندلی باقی مانده", "شماره پرواز: 512", 8245000));
            flyTickets.Add(new flyTickets(47, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " یکشنبه 6 اسفند ", "Sunday 25 February" }, "mahanair_logo.webp", "ماهان ایر", 630, "تهران(IKA)", 1, new string[] { "no_stop_inFly.png", "no_stop_inFly_rangi.png" }, "09:15", "استانبول(IST)", "30 کیلو", "5 کیلو", "6 صندلی باقی مانده", "شماره پرواز: 112", 28710000));
            flyTickets.Add(new flyTickets(48, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " یکشنبه 6 اسفند ", "Sunday 25 February" }, "golfair_logo.webp", "گلف ایر", 2335, "دبی(DXB)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "06:00", "استانبول(IST)", "25 کیلو", "5 کیلو", "7 صندلی باقی مانده", "شماره پرواز: 513", 17796285));
            flyTickets.Add(new flyTickets(49, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " شنبه 5 اسفند ", "Saturday 24 February" }, "pegasos_logo.webp", "پگاسوس", 625, "عسلویه(PGU)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "16:20", "پاریس(QRY)", "بدون بار", "7 کیلو", "9 صندلی باقی مانده", "شماره پرواز: 517", 15859800));
            flyTickets.Add(new flyTickets(50, new string[] { "چارتری", "اکونومی (Y)" }, new string[] { " شنبه 5 اسفند ", "Saturday 24 February" }, "flydobai_logo.webp", "فلای دبی", 2445, "تهران(IKA)", 2, new string[] { "one_stop_inFly.png", "one_stop_inFly_rangi.png" }, "03:25", "دبی(DXB)", "25 کیلو", "5 کیلو", "4 صندلی باقی مانده", "شماره پرواز: 194", 9791900));

        }
    }
}