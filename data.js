
// Dane pojazdów (vehicleData)
var vehicleData = {
    // Przechowujemy warianty jako tablicę – wybieramy pierwszy wariant domyślnie
	"Alfa Romeo": {
		"Tonale Hybrid": {
			  default: { moc: 131, pojemnosc: 1500, rok_produkcji: 2022, kod_silnika: "46347812" },
			  variants: [
				{ label: "Tonale Hybrid", moc: 131, pojemnosc: 1500, rok_produkcji: 2022, kod_silnika: "46347812" },
				{ label: "Tonale Hybrid", moc: 131, pojemnosc: 1500, rok_produkcji: 2022, kod_silnika: "46347812" },
				{ label: "Tonale Hybrid", moc: 131, pojemnosc: 1500, rok_produkcji: 2022, kod_silnika: "46347813" },
			  ]
			}
	},
	"Alpine": {
		"A110 II": {
			  default: { moc: 252, pojemnosc: 1800, rok_produkcji: 2017, kod_silnika: "M5P 424" },
			  variants: [
				{ label: "A110 II", moc: 252, pojemnosc: 1800, rok_produkcji: 2017, kod_silnika: "M5P 424" },
				{ label: "A110 II", moc: 292, pojemnosc: 1800, rok_produkcji: 2017, kod_silnika: "M5P 424" },
			  ]
			}
	},
	"Audi": {
		"A1": {
		  default: { moc: 95, pojemnosc: 1000, rok_produkcji: 2018, kod_silnika: "DKLA" },
		  variants: [
			{ label: "A1", moc: 	95, pojemnosc: 	1000, rok_produkcji: 	"2016-2018"	, kod_silnika: "	CHZB	" },
			{ label: "A1", moc: 	95, pojemnosc: 	1000, rok_produkcji: 	"2016-2018"	, kod_silnika: "	CHZB	" },
			{ label: "A1", moc: 	82, pojemnosc: 	1000, rok_produkcji: 	"2018-2020"	, kod_silnika: "	CHZE	" },
			{ label: "A1", moc: 	116, pojemnosc: 1000, rok_produkcji: 	 "2018-2020" 	, kod_silnika: "	DKJA	" },
			{ label: "A1", moc: 	95, pojemnosc: 	1000, rok_produkcji: 	 "2018-2020" 	, kod_silnika: "	DKLA 	" },
			{ label: "A1", moc: 	95, pojemnosc: 	1000, rok_produkcji: 	 "2018-2020" 	, kod_silnika: "	DKLD	" },
			{ label: "A1", moc: 	116, pojemnosc: 1000, rok_produkcji: 	2020	, kod_silnika: "	DKRF	" },
			{ label: "A1", moc: 	110, pojemnosc: 1000, rok_produkcji: 	"2018-2021"	, kod_silnika: "	DLAA	" },
			{ label: "A1", moc: 	95, pojemnosc: 	1000, rok_produkcji: 	2024	, kod_silnika: "	DLAC	" },
			{ label: "A1", moc: 	95, pojemnosc: 	1000, rok_produkcji: 	"2010-2015"	, kod_silnika: "	DUSB	" },
			{ label: "A1", moc: 	86, pojemnosc: 	1200, rok_produkcji: 	"2011-2015"	, kod_silnika: "	CBZA	" },
			{ label: "A1", moc: 	185, pojemnosc: 1400, rok_produkcji: 	"2010-2015"	, kod_silnika: "	CAVG	" },
			{ label: "A1", moc: 	122, pojemnosc: 1400, rok_produkcji: 	"2012-2015"	, kod_silnika: "	CAXA	" },
			{ label: "A1", moc: 	140, pojemnosc: 1400, rok_produkcji: 	"2011-2015"	, kod_silnika: "	CPTA	" },
			{ label: "A1", moc: 	185, pojemnosc: 1400, rok_produkcji: 	"2014-2018"	, kod_silnika: "	CTHG	" },
			{ label: "A1", moc: 	125, pojemnosc: 1400, rok_produkcji: 	"2013-2018"	, kod_silnika: "	CZCA	" },
			{ label: "A1", moc: 	125, pojemnosc: 1400, rok_produkcji: 	"2014-2018"	, kod_silnika: "	CZDD	" },
			{ label: "A1", moc: 	150, pojemnosc: 1400, rok_produkcji: 	"2018-2024"	, kod_silnika: "	CZEA	" },
			{ label: "A1", moc: 	150, pojemnosc: 1500, rok_produkcji: 	"2020-2022"	, kod_silnika: "	DADA	" },
			{ label: "A1", moc: 	150, pojemnosc: 1500, rok_produkcji: 	"2018-2024"	, kod_silnika: "	DFYA	" },
			{ label: "A1", moc: 	150, pojemnosc: 1500, rok_produkcji: 	"2018-2024"	, kod_silnika: "	DPCA	" },
			{ label: "A1", moc: 	150, pojemnosc: 1500, rok_produkcji: 	"2018-2023"	, kod_silnika: "	DXDB	" },
			{ label: "A1", moc: 	200, pojemnosc: 2000, rok_produkcji: 	"2016-2020"	, kod_silnika: "	DKZC	" },

		  ]
		},
		"A3": {
		  default: { moc: 116, pojemnosc: 1000, rok_produkcji: 2016, kod_silnika: "CHZD" },
		  variants: [
			{ label: "	A3	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	 "2018-2020" 	, kod_silnika: "	CHZD	" },
			{ label: "	A3	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	 "2018-2020" 	, kod_silnika: "	DKRF	" },
			{ label: "	A3	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	2020	, kod_silnika: "	DLAA 	" },
			{ label: "	A3	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"2010-2013"	, kod_silnika: "	CBZB	" },
			{ label: "	A3	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"2013-2022"	, kod_silnika: "	CJZA 	" },
			{ label: "	A3	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"2013-2022"	, kod_silnika: "	CYVB 	" },
			{ label: "	A3	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"2007-2013"	, kod_silnika: "	CAXC	" },
			{ label: "	A3	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"2013-2022"	, kod_silnika: "	CPTA	" },
			{ label: "	A3	", moc: 	110	, pojemnosc: 	1400	, rok_produkcji: 	"2013-2020"	, kod_silnika: "	CPWA	" },
			{ label: "	A3	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"2012-2014"	, kod_silnika: "	CXSA	" },
			{ label: "	A3	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"2014-2017"	, kod_silnika: "	CXSB	" },
			{ label: "	A3	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"2013-2022"	, kod_silnika: "	CZCA	" },
			{ label: "	A3	", moc: 	116	, pojemnosc: 	1400	, rok_produkcji: 	"2013-2020"	, kod_silnika: "	CZCC	" },
			{ label: "	A3	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"2014-2020"	, kod_silnika: "	CZEA	" },
			{ label: "	A3	", moc: 	204	, pojemnosc: 	1400	, rok_produkcji: 	"2014-2020"	, kod_silnika: "	DGEA	" },
			{ label: "	A3	", moc: 	245	, pojemnosc: 	1400	, rok_produkcji: 	"2021-2024"	, kod_silnika: "	DGEA	" },
			{ label: "	A3	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	DADA	" },
			{ label: "	A3	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	DFYA	" },
			{ label: "	A3	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	DHFA	" },
			{ label: "	A3	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	DPCA	" },
			{ label: "	A3	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"2006-2013"	, kod_silnika: "	CDAA	" },
			{ label: "	A3	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"2012-2022"	, kod_silnika: "	CJSA	" },
			{ label: "	A3	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"2012-2022"	, kod_silnika: "	CJSB	" },
			{ label: "	A3	", moc: 	292	, pojemnosc: 	1800	, rok_produkcji: 	"2014-2020"	, kod_silnika: "	CYFB	" },
			{ label: "	A3	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"2003-2008"	, kod_silnika: "	BLR	" },
			{ label: "	A3	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"2003-2008"	, kod_silnika: "	BVY	" },
			{ label: "	A3	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"2004-2013"	, kod_silnika: "	CAWB	" },
			{ label: "	A3	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"2004-2013"	, kod_silnika: "	CCZA 	" },
			{ label: "	A3	", moc: 	265	, pojemnosc: 	2000	, rok_produkcji: 	"2006-2013"	, kod_silnika: "	CDLA	" },
			{ label: "	A3	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2020"	, kod_silnika: "	CHHB	" },
			{ label: "	A3	", moc: 	280	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2022"	, kod_silnika: "	CJXB	" },
			{ label: "	A3	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2020"	, kod_silnika: "	CJXC	" },
			{ label: "	A3	", moc: 	290	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2020"	, kod_silnika: "	CJXD	" },
			{ label: "	A3	", moc: 	286	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	CJXF	" },
			{ label: "	A3	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2020"	, kod_silnika: "	CJXG	" },
			{ label: "	A3	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2020"	, kod_silnika: "	CZPB	" },
			{ label: "	A3	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2020"	, kod_silnika: "	DKZA	" },
			{ label: "	A3	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	DNFB	" },
			{ label: "	A3	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"2021-2023"	, kod_silnika: "	DNNA	" },
			{ label: "	A3	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"2012-2020"	, kod_silnika: "	DNUE	" },

		  ]
		},
		"A3 GTE-Hybrid": {
		  default: { moc: 116, pojemnosc: 1000, rok_produkcji: 2016, kod_silnika: "CHZD" },
		  variants: [
			{ label: "	A3 GTE-Hybrid	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"2014-2020"	, kod_silnika: "	CUKB	" },
		  ]
		},
		"A3 Hybrid": {
		  default: { moc: 116, pojemnosc: 1000, rok_produkcji: 2016, kod_silnika: "CHZD" },
		  variants: [
			{ label: "	A3 Hybrid	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	DFYA	" },
		  ]
		},
		"A4": {
		  default: { moc: 95, pojemnosc: 1000, rok_produkcji: 2018, kod_silnika: "DKLA" },
		  variants: [
			{ label: "	A4	", moc: 	120	, pojemnosc: 	1800	, rok_produkcji: 	"2008-2015"	, kod_silnika: "	CDHA	" },
			{ label: "	A4	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"2007-2012"	, kod_silnika: "	CDHB	" },
			{ label: "	A4	", moc: 	170	, pojemnosc: 	1800	, rok_produkcji: 	"2011-2017"	, kod_silnika: "	CJEB	" },
			{ label: "	A4	", moc: 	170	, pojemnosc: 	2000	, rok_produkcji: 	"2006-2008"	, kod_silnika: "	BPJ	" },
			{ label: "	A4	", moc: 	170	, pojemnosc: 	2000	, rok_produkcji: 	"2006-2008"	, kod_silnika: "	BYK	" },
			{ label: "	A4	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2015"	, kod_silnika: "	CAEB	" },
			{ label: "	A4	", moc: 	180	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2015"	, kod_silnika: "	CDNB	" },
			{ label: "	A4	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2016"	, kod_silnika: "	CDNC	" },
			{ label: "	A4	", moc: 	224	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2020"	, kod_silnika: "	CNCD	" },
			{ label: "	A4	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2016"	, kod_silnika: "	CPMA	" },
			{ label: "	A4	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2016"	, kod_silnika: "	CPMB	" },
			{ label: "	A4	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2023"	, kod_silnika: "	CVKB	" },
			{ label: "	A4	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	DKNA	" },
			{ label: "	A4	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	DLVA	" },
			{ label: "	A4	", moc: 	204	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	DMSA	" },
			{ label: "	A4	", moc: 	265	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	DMTA	" },
			{ label: "	A4	", moc: 	333	, pojemnosc: 	3000	, rok_produkcji: 	"2008-2015"	, kod_silnika: "	CAKA	" },
			{ label: "	A4	", moc: 	333	, pojemnosc: 	3000	, rok_produkcji: 	"2008 - 2015"	, kod_silnika: "	CGWC	" },
			{ label: "	A4	", moc: 	333	, pojemnosc: 	3000	, rok_produkcji: 	"2008 - 2015"	, kod_silnika: "	CTUB	" },

		  ]
		},
		"A5": {
		  default: { moc: 95, pojemnosc: 1000, rok_produkcji: 2018, kod_silnika: "DKLA" },
		  variants: [
			{ label: "	A5	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"2009-2012"	, kod_silnika: "	CDHB	" },
			{ label: "	A5	", moc: 	170	, pojemnosc: 	1800	, rok_produkcji: 	"2007-2017"	, kod_silnika: "	CJEB	" },
			{ label: "	A5	", moc: 	177	, pojemnosc: 	1800	, rok_produkcji: 	"2014-2017"	, kod_silnika: "	CJEE	" },
			{ label: "	A5	", moc: 	170	, pojemnosc: 	2000	, rok_produkcji: 	"2005-2011"	, kod_silnika: "	BPJ	" },
			{ label: "	A5	", moc: 	170	, pojemnosc: 	2000	, rok_produkcji: 	"2005-2011"	, kod_silnika: "	BYK	" },
			{ label: "	A5	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2017"	, kod_silnika: "	CAEB	" },
			{ label: "	A5	", moc: 	180	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2012"	, kod_silnika: "	CDNB	" },
			{ label: "	A5	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2017"	, kod_silnika: "	CDNC	" },
			{ label: "	A5	", moc: 	224	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2020"	, kod_silnika: "	CNCD	" },
			{ label: "	A5	", moc: 	230	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2017"	, kod_silnika: "	CNCE	" },
			{ label: "	A5	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2017"	, kod_silnika: "	CPMA	" },
			{ label: "	A5	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2017"	, kod_silnika: "	CPMB	" },
			{ label: "	A5	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2023"	, kod_silnika: "	CVKB	" },
			{ label: "	A5	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	DKNA	" },
			{ label: "	A5	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	DLVA	" },
			{ label: "	A5	", moc: 	204	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	DMSA	" },
			{ label: "	A5	", moc: 	265	, pojemnosc: 	2000	, rok_produkcji: 	"2019-2023"	, kod_silnika: "	DMTA	" },
			{ label: "	A5	", moc: 	333	, pojemnosc: 	3000	, rok_produkcji: 	"2009-2017"	, kod_silnika: "	CAKA	" },
			{ label: "	A5	", moc: 	333	, pojemnosc: 	3000	, rok_produkcji: 	"2009-2017"	, kod_silnika: "	CGWC	" },
			{ label: "	A5	", moc: 	333	, pojemnosc: 	3000	, rok_produkcji: 	"2009-2017"	, kod_silnika: "	CTUB	" },

		  ]
		},
		"A6": {
		  default: { moc: 95, pojemnosc: 1000, rok_produkcji: 2018, kod_silnika: "DKLA" },
		  variants: [
			{ label: "	A6	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2013"	, kod_silnika: "	CAEB	" },
			{ label: "	A6	", moc: 	180	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2018"	, kod_silnika: "	CDNB	" },
			{ label: "	A6	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2018"	, kod_silnika: "	CYNB	" },
			{ label: "	A6	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2020"	, kod_silnika: "	CYPA	" },
			{ label: "	A6	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	DKNA	" },
			{ label: "	A6	", moc: 	265	, pojemnosc: 	2000	, rok_produkcji: 	"2019-2023"	, kod_silnika: "	DMTA	" },
			{ label: "	A6	", moc: 	290	, pojemnosc: 	3000	, rok_produkcji: 	"2008-2011"	, kod_silnika: "	CAJA	" },
			{ label: "	A6	", moc: 	299	, pojemnosc: 	3000	, rok_produkcji: 	"2008-2011"	, kod_silnika: "	CCAA	" },
			{ label: "	A6	", moc: 	299	, pojemnosc: 	3000	, rok_produkcji: 	"2010-2012"	, kod_silnika: "	CGWB	" },
			{ label: "	A6	", moc: 	310	, pojemnosc: 	3000	, rok_produkcji: 	"2012-2018"	, kod_silnika: "	CGWD	" },
			{ label: "	A6	", moc: 	310	, pojemnosc: 	3000	, rok_produkcji: 	"2011-2018"	, kod_silnika: "	CGXB	" },
		  ]
		},
		"A7": {
		  default: { moc: 95, pojemnosc: 1000, rok_produkcji: 2018, kod_silnika: "DKLA" },
		  variants: [
			{ label: "	A7	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2018"	, kod_silnika: "	CYNB	" },
			{ label: "	A7	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2018"	, kod_silnika: "	CYPA	" },
			{ label: "	A7	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	DKNA	" },
			{ label: "	A7	", moc: 	265	, pojemnosc: 	2000	, rok_produkcji: 	"2019-2023"	, kod_silnika: "	DMTA	" },
			{ label: "	A7	", moc: 	299	, pojemnosc: 	3000	, rok_produkcji: 	"2010-2011"	, kod_silnika: "	CGWB	" },
			{ label: "	A7	", moc: 	310	, pojemnosc: 	3000	, rok_produkcji: 	"2011-2015"	, kod_silnika: "	CGWD	" },
			{ label: "	A7	", moc: 	310	, pojemnosc: 	3000	, rok_produkcji: 	"2011-2015"	, kod_silnika: "	CGXB	" },

		  ]
		},
		"A8": {
		  default: { moc: 95, pojemnosc: 1000, rok_produkcji: 2018, kod_silnika: "DKLA" },
		  variants: [
			{ label: "	A8	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2018"	, kod_silnika: "	CYPA	" },
			{ label: "	A8	", moc: 	290	, pojemnosc: 	3000	, rok_produkcji: 	"2010-2014"	, kod_silnika: "	CGWA	" },
			{ label: "	A8	", moc: 	310	, pojemnosc: 	3000	, rok_produkcji: 	"2011-2018"	, kod_silnika: "	CGWD	" },
			{ label: "	A8	", moc: 	333	, pojemnosc: 	3000	, rok_produkcji: 	"2010-2018"	, kod_silnika: "	CTUB	" },
		  ]
		},
		"Q2": {
		  default: { moc: 95, pojemnosc: 1000, rok_produkcji: 2018, kod_silnika: "DKLA" },
		  variants: [
			{ label: "	Q2	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"2016-2020"	, kod_silnika: "	CHZJ	" },
			{ label: "	Q2	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	2020	, kod_silnika: "	DLAA 	" },
			{ label: "	Q2	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"2016-2018"	, kod_silnika: "	CZEA	" },
			{ label: "	Q2	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2017-2024"	, kod_silnika: "	DADA	" },
			{ label: "	Q2	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2017-2024"	, kod_silnika: "	DPCA	" },
			{ label: "	Q2	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	DXDB	" },
			{ label: "	Q2	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	CZPB	" },
			{ label: "	Q2	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	DKZA	" },
			{ label: "	Q2	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	DNFC	" },
			{ label: "	Q2	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	DNUE	" },
		  ]
		},
		"Q3": {
		  default: { moc: 95, pojemnosc: 1000, rok_produkcji: 2018, kod_silnika: "DKLA" },
		  variants: [
			{ label: "	Q3	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"2013-2018"	, kod_silnika: "	CHPB	" },
			{ label: "	Q3	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"2013-2018"	, kod_silnika: "	CZDA	" },
			{ label: "	Q3	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"2013-2016"	, kod_silnika: "	CZDB	" },
			{ label: "	Q3	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"2013-2018"	, kod_silnika: "	CZEA	" },
			{ label: "	Q3	", moc: 	245	, pojemnosc: 	1400	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	DGEA	" },
			{ label: "	Q3	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	DADA	" },
			{ label: "	Q3	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	DFYA	" },
			{ label: "	Q3	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	DPCA	" },
			{ label: "	Q3	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	DXDB	" },
			{ label: "	Q3	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2018"	, kod_silnika: "	CCTA	" },
			{ label: "	Q3	", moc: 	170	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2018"	, kod_silnika: "	CCZC	" },
			{ label: "	Q3	", moc: 	180	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2018"	, kod_silnika: "	CULB	" },
			{ label: "	Q3	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2018"	, kod_silnika: "	CULC	" },
			{ label: "	Q3	", moc: 	230	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	DKTA	" },
			{ label: "	Q3	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	DKTC	" },
			{ label: "	Q3	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	DNNA	" },
			{ label: "	Q3	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2021-2023"	, kod_silnika: "	DNPA	" },
		  ]
		},
		"Q5": {
		  default: { moc: 95, pojemnosc: 1000, rok_produkcji: 2018, kod_silnika: "DKLA" },
		  variants: [
			{ label: "	Q5	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2012"	, kod_silnika: "	CAEB	" },
			{ label: "	Q5	", moc: 	180	, pojemnosc: 	2000	, rok_produkcji: 	"2009-2017"	, kod_silnika: "	CDNB	" },
			{ label: "	Q5	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2012"	, kod_silnika: "	CDNC	" },
			{ label: "	Q5	", moc: 	180	, pojemnosc: 	2000	, rok_produkcji: 	"2009-2017"	, kod_silnika: "	CNCB	" },
			{ label: "	Q5	", moc: 	224	, pojemnosc: 	2000	, rok_produkcji: 	"2012-2020"	, kod_silnika: "	CNCD	" },
			{ label: "	Q5	", moc: 	230	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2017"	, kod_silnika: "	CNCE	" },
			{ label: "	Q5	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2017"	, kod_silnika: "	CPMA	" },
			{ label: "	Q5	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2017"	, kod_silnika: "	CPMB	" },
			{ label: "	Q5	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2022"	, kod_silnika: "	DAYB	" },
			{ label: "	Q5	", moc: 	204	, pojemnosc: 	2000	, rok_produkcji: 	"2021-2023"	, kod_silnika: "	DMSA	" },
			{ label: "	Q5	", moc: 	272	, pojemnosc: 	3000	, rok_produkcji: 	"2012-2017"	, kod_silnika: "	CTUC	" },
			{ label: "	Q5	", moc: 	354	, pojemnosc: 	3000	, rok_produkcji: 	"2013-2017"	, kod_silnika: "	CTUD	" },
			{ label: "	Q5	", moc: 	272	, pojemnosc: 	3000	, rok_produkcji: 	"2012-2017"	, kod_silnika: "	CTVA	" },
		  ]
		},
		"Q7": {
		  default: { moc: 95, pojemnosc: 1000, rok_produkcji: 2018, kod_silnika: "DKLA" },
		  variants: [
			{ label: "	Q7	", moc: 	333	, pojemnosc: 	3000	, rok_produkcji: 	"2010-2015"	, kod_silnika: "	CJTB	" },
			{ label: "	Q7	", moc: 	272	, pojemnosc: 	3000	, rok_produkcji: 	"2010-2015"	, kod_silnika: "	CJTC	" },
			{ label: "	Q7	", moc: 	333	, pojemnosc: 	3000	, rok_produkcji: 	"2010-2015"	, kod_silnika: "	CJWB	" },
			{ label: "	Q7	", moc: 	333	, pojemnosc: 	3000	, rok_produkcji: 	"2010-2015"	, kod_silnika: "	CTWA	" },
			{ label: "	Q7	", moc: 	280	, pojemnosc: 	3000	, rok_produkcji: 	"2011-2015"	, kod_silnika: "	CTWB	" },
		  ]
		},
		"TT": {
		  default: { moc: 95, pojemnosc: 1000, rok_produkcji: 2018, kod_silnika: "DKLA" },
		  variants: [
			{ label: "	TT	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"2008-2014"	, kod_silnika: "	CDAA	" },
			{ label: "	TT	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"2015-2018"	, kod_silnika: "	CJSA	" },
			{ label: "	TT	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"2015-2018"	, kod_silnika: "	CJSB	" },
			{ label: "	TT	", moc: 	292	, pojemnosc: 	1800	, rok_produkcji: 	"2015-2023"	, kod_silnika: "	CYFB	" },
			{ label: "	TT	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2010"	, kod_silnika: "	CCTA	" },
			{ label: "	TT	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2010"	, kod_silnika: "	CCZA 	" },
			{ label: "	TT	", moc: 	265	, pojemnosc: 	2000	, rok_produkcji: 	"2008-2014"	, kod_silnika: "	CDLA	" },
			{ label: "	TT	", moc: 	230	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	CHHC	" },
			{ label: "	TT	", moc: 	286	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2022"	, kod_silnika: "	CJXF	" },
			{ label: "	TT	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	CJXG	" },
			{ label: "	TT	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	DKTB	" },
			{ label: "	TT	", moc: 	320	, pojemnosc: 	2000	, rok_produkcji: 	"2021-2023"	, kod_silnika: "	DNFD	" },
			{ label: "	TT	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	DNPA	" },
		  ]
		},
	},
	"Baic": {
		"Beijing X55": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	Beijing X55	", moc: 	177	, pojemnosc: 	1500	, rok_produkcji: 	2023	, kod_silnika: "	A156T2H	" },
			  ]
			}
	},
	"Bmw": {
		"Seria 1": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	Serie 1	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 1	", moc: 	109	, pojemnosc: 	1500	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 1	", moc: 	109	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 1	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 1	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2016-2024"	, kod_silnika: "	B38A15F	" },
				{ label: "	Serie 1	", moc: 	109	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	B38B15A	" },
				{ label: "	Serie 1	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2022"	, kod_silnika: "	B38B15A	" },
				{ label: "	Serie 1	", moc: 	136	, pojemnosc: 	1600	, rok_produkcji: 	"2011-2015"	, kod_silnika: "	N13B16A	" },
				{ label: "	Serie 1	", moc: 	177	, pojemnosc: 	1600	, rok_produkcji: 	"2015-2022"	, kod_silnika: "	N13B16A	" },
				{ label: "	Serie 1	", moc: 	177	, pojemnosc: 	1600	, rok_produkcji: 	"2015-2016"	, kod_silnika: "	N13B16A	" },
				{ label: "	Serie 1	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"2012-2022"	, kod_silnika: "	N13B16A	" },
				{ label: "	Serie 1	", moc: 	102	, pojemnosc: 	1600	, rok_produkcji: 	"2012-2015"	, kod_silnika: "	N13B16A	" },
				{ label: "	Serie 1	", moc: 	136	, pojemnosc: 	1600	, rok_produkcji: 	"2011-2022"	, kod_silnika: "	N13B16A	" },
				{ label: "	Serie 1	", moc: 	102	, pojemnosc: 	1600	, rok_produkcji: 	"2011-2022"	, kod_silnika: "	N13B16A	" },
				{ label: "	Serie 1	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"2011-2015"	, kod_silnika: "	N13B16A	" },
				{ label: "	Serie 1	", moc: 	140	, pojemnosc: 	2000	, rok_produkcji: 	"2019-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 1	", moc: 	178	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48A20A	" },
				{ label: "	Serie 1	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48A20B	" },
				{ label: "	Serie 1	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 1	", moc: 	224	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 1	", moc: 	238	, pojemnosc: 	2000	, rok_produkcji: 	"2012-2022"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 1	", moc: 	218	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2019"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 1	", moc: 	340	, pojemnosc: 	3000	, rok_produkcji: 	"2015-2023"	, kod_silnika: "	B58B30A	" },
				{ label: "	Serie 1	", moc: 	326	, pojemnosc: 	3000	, rok_produkcji: 	"2015-2023"	, kod_silnika: "	N55B30A	" },
				{ label: "	Serie 1	", moc: 	320	, pojemnosc: 	3000	, rok_produkcji: 	"2011-2023"	, kod_silnika: "	N55B30A	" },
				{ label: "	Serie 1	", moc: 	306	, pojemnosc: 	3000	, rok_produkcji: 	"2007-2013"	, kod_silnika: "	N55B30A	" },
			  ]
			},
		"Seria 2": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	Serie 2	", moc: 	125	, pojemnosc: 	1500	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 2	", moc: 	140	, pojemnosc: 	1500	, rok_produkcji: 	"2017-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 2	", moc: 	109	, pojemnosc: 	1500	, rok_produkcji: 	"2018-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 2	", moc: 	102	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2018"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 2	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 2	", moc: 	224	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 2	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 2	", moc: 	109	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2020"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 2	", moc: 	220	, pojemnosc: 	1500	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 2	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2022"	, kod_silnika: "	B38B15A	" },
				{ label: "	Serie 2	", moc: 	109	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2020"	, kod_silnika: "	B38B15A	" },
				{ label: "	Serie 2	", moc: 	178	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48A20A	" },
				{ label: "	Serie 2	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2024"	, kod_silnika: "	B48A20A	" },
				{ label: "	Serie 2	", moc: 	192	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2024"	, kod_silnika: "	B48A20A	" },
				{ label: "	Serie 2	", moc: 	231	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2024"	, kod_silnika: "	B48A20B	" },
				{ label: "	Serie 2	", moc: 	136	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2021"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 2	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 2	", moc: 	156	, pojemnosc: 	2000	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 2	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 2	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 2	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 2	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2022"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 2	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2022"	, kod_silnika: "	N20B20B	" },
				{ label: "	Serie 2	", moc: 	340	, pojemnosc: 	3000	, rok_produkcji: 	"2015-2021"	, kod_silnika: "	B58B30A	" },
				{ label: "	Serie 2	", moc: 	374	, pojemnosc: 	3000	, rok_produkcji: 	"2021-2023"	, kod_silnika: "	B58B30B	" },
				{ label: "	Serie 2	", moc: 	326	, pojemnosc: 	3000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	N55B30A	" },
				{ label: "	Serie 2	", moc: 	370	, pojemnosc: 	3000	, rok_produkcji: 	"2015-2018"	, kod_silnika: "	N55B30A	" },
			  ]
			},
		"Seria 3": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	Serie 3	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2019"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 3	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2019"	, kod_silnika: "	B38B15A	" },
				{ label: "	Serie 3	", moc: 	136	, pojemnosc: 	1600	, rok_produkcji: 	"2012-2016"	, kod_silnika: "	N13B16A	" },
				{ label: "	Serie 3	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"2012-2016"	, kod_silnika: "	N13B16A	" },
				{ label: "	Serie 3	", moc: 	156	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 3	", moc: 	204	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 3	", moc: 	292	, pojemnosc: 	2000	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 3	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 3	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2019"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 3	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 3	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 3	", moc: 	292	, pojemnosc: 	2000	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 3	", moc: 	258	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 3	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 3	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2012-2018"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 3	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2018"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 3	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2016"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 3	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2012-2018"	, kod_silnika: "	N20B20B	" },
				{ label: "	Serie 3	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"2012-2016"	, kod_silnika: "	N20B20B	" },
				{ label: "	Serie 3	", moc: 	326	, pojemnosc: 	3000	, rok_produkcji: 	"2015-2023"	, kod_silnika: "	B58B30A	" },
				{ label: "	Serie 3	", moc: 	360	, pojemnosc: 	3000	, rok_produkcji: 	"2015-2019"	, kod_silnika: "	B58B30A	" },
				{ label: "	Serie 3	", moc: 	374	, pojemnosc: 	3000	, rok_produkcji: 	"2019-2023"	, kod_silnika: "	B58B30B	" },
				{ label: "	Serie 3	", moc: 	388	, pojemnosc: 	3000	, rok_produkcji: 	"2019-2023"	, kod_silnika: "	B58B30B	" },
				{ label: "	Serie 3	", moc: 	340	, pojemnosc: 	3000	, rok_produkcji: 	"2012-2015"	, kod_silnika: "	N55B30A	" },
				{ label: "	Serie 3	", moc: 	306	, pojemnosc: 	3000	, rok_produkcji: 	"2008-2015"	, kod_silnika: "	N55B30A	" },
				{ label: "	Serie 3	", moc: 	326	, pojemnosc: 	3000	, rok_produkcji: 	"2006-2015"	, kod_silnika: "	N55B30A	" },
			  ]
			},
		"Seria 4": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	Serie 4	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	Serie 4	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2022"	, kod_silnika: "	B38B15A	" },
				{ label: "	Serie 4	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 4	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 4	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2021-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 4	", moc: 	258	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 4	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 4	", moc: 	249	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 4	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2017"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 4	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2017"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 4	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2017"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 4	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2017"	, kod_silnika: "	N20B20B	" },
				{ label: "	Serie 4	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2017"	, kod_silnika: "	N20B20B	" },
				{ label: "	Serie 4	", moc: 	326	, pojemnosc: 	3000	, rok_produkcji: 	"2016-2023"	, kod_silnika: "	B58B30A	" },
				{ label: "	Serie 4	", moc: 	360	, pojemnosc: 	3000	, rok_produkcji: 	"2016-2019"	, kod_silnika: "	B58B30A	" },
				{ label: "	Serie 4	", moc: 	374	, pojemnosc: 	3000	, rok_produkcji: 	"2019-2023"	, kod_silnika: "	B58B30B	" },
				{ label: "	Serie 4	", moc: 	388	, pojemnosc: 	3000	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	B58B30B	" },
				{ label: "	Serie 4	", moc: 	306	, pojemnosc: 	3000	, rok_produkcji: 	"2013-2016"	, kod_silnika: "	N55B30A	" },
				{ label: "	Serie 4	", moc: 	340	, pojemnosc: 	3000	, rok_produkcji: 	"2013-2016"	, kod_silnika: "	N55B30A	" },
			  ]
			},
		"Seria 5": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	Serie 5	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"2013-2016"	, kod_silnika: "	N20B16A	" },
				{ label: "	Serie 5	", moc: 	204	, pojemnosc: 	2000	, rok_produkcji: 	"2021-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 5	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 5	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 5	", moc: 	272	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 5	", moc: 	292	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 5	", moc: 	231	, pojemnosc: 	2000	, rok_produkcji: 	"2019-2020"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 5	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 5	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	B48B20A	" },
				{ label: "	Serie 5	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 5	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 5	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 5	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 5	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 5	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2017"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 5	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2010-2017"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 5	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2017"	, kod_silnika: "	N20B20A	" },
				{ label: "	Serie 5	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2017"	, kod_silnika: "	N20B20B	" },
				{ label: "	Serie 5	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2010-2017"	, kod_silnika: "	N20B20B	" },
				{ label: "	Serie 5	", moc: 	340	, pojemnosc: 	3000	, rok_produkcji: 	"2016-2020"	, kod_silnika: "	B58B30A	" },
				{ label: "	Serie 5	", moc: 	360	, pojemnosc: 	3000	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	B58B30A	" },
				{ label: "	Serie 5	", moc: 	326	, pojemnosc: 	3000	, rok_produkcji: 	"2013-2017"	, kod_silnika: "	N55B30A	" },
				{ label: "	Serie 5	", moc: 	306	, pojemnosc: 	3000	, rok_produkcji: 	"2009-2017"	, kod_silnika: "	N55B30A	" },
				{ label: "	Serie 5	", moc: 	340	, pojemnosc: 	3000	, rok_produkcji: 	"2011-2016"	, kod_silnika: "	N55B30A	" },
			  ]
			},
		"Seria 6": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	Serie 6	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 6	", moc: 	258	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 6	", moc: 	340	, pojemnosc: 	3000	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	B58B30A	" },
				{ label: "	Serie 6	", moc: 	360	, pojemnosc: 	3000	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	B58B30A	" },
				{ label: "	Serie 6	", moc: 	320	, pojemnosc: 	3000	, rok_produkcji: 	"2011-2018"	, kod_silnika: "	N55B30A	" },
			  ]
			},
		"Seria 7": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	Serie 7	", moc: 	265	, pojemnosc: 	2000	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 7	", moc: 	326	, pojemnosc: 	2000	, rok_produkcji: 	"2016-2019"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 7	", moc: 	258	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2019"	, kod_silnika: "	B48B20B	" },
				{ label: "	Serie 7	", moc: 	326	, pojemnosc: 	3000	, rok_produkcji: 	"2015-2019"	, kod_silnika: "	B58B30A	" },
				{ label: "	Serie 7	", moc: 	320	, pojemnosc: 	3000	, rok_produkcji: 	"2012-2015"	, kod_silnika: "	N55B30A	" },
				{ label: "	Serie 7	", moc: 	354	, pojemnosc: 	3000	, rok_produkcji: 	"2012-2015"	, kod_silnika: "	N55B30A	" },
			  ]
			},
		"X1": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	X1	", moc: 	220	, pojemnosc: 	1500	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	X1	", moc: 	125	, pojemnosc: 	1500	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	X1	", moc: 	140	, pojemnosc: 	1500	, rok_produkcji: 	"2017-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	X1	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	X1	", moc: 	143	, pojemnosc: 	1600	, rok_produkcji: 	"2013-2015"	, kod_silnika: "	N20B16A	" },
				{ label: "	X1	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"2013-2016"	, kod_silnika: "	N20B16A	" },
				{ label: "	X1	", moc: 	178	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48A20A	" },
				{ label: "	X1	", moc: 	192	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	B48A20A	" },
				{ label: "	X1	", moc: 	192	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	B48A20B	" },
				{ label: "	X1	", moc: 	231	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	B48A20B	" },
				{ label: "	X1	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2015"	, kod_silnika: "	N20B20A	" },
				{ label: "	X1	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2015"	, kod_silnika: "	N20B20A	" },
			  ]
			},
		"X2": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	X2	", moc: 	220	, pojemnosc: 	1500	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	X2	", moc: 	125	, pojemnosc: 	1500	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	X2	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"2018-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	X2	", moc: 	140	, pojemnosc: 	1500	, rok_produkcji: 	"2018-2022"	, kod_silnika: "	B38A15A	" },
				{ label: "	X2	", moc: 	178	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	B48A20A	" },
				{ label: "	X2	", moc: 	192	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2024"	, kod_silnika: "	B48A20A	" },
			  ]
			},
		"X3": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	X3	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	X3	", moc: 	292	, pojemnosc: 	2000	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	X3	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2021-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	X3	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	X3	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	X3	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2017"	, kod_silnika: "	N20B20A	" },
				{ label: "	X3	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2012-2017"	, kod_silnika: "	N20B20A	" },
				{ label: "	X3	", moc: 	354	, pojemnosc: 	3000	, rok_produkcji: 	"2018-2019"	, kod_silnika: "	B58B30A	" },
				{ label: "	X3	", moc: 	360	, pojemnosc: 	3000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	B58B30A	" },
				{ label: "	X3	", moc: 	360	, pojemnosc: 	3000	, rok_produkcji: 	"2021-2023"	, kod_silnika: "	B58B30B	" },
				{ label: "	X3	", moc: 	388	, pojemnosc: 	3000	, rok_produkcji: 	"2019-2023"	, kod_silnika: "	B58B30B	" },
				{ label: "	X3	", moc: 	306	, pojemnosc: 	3000	, rok_produkcji: 	"2010-2017"	, kod_silnika: "	N55B30A	" },
			  ]
			},
		"X4": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	X4	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	B48B20A	" },
				{ label: "	X4	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2021-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	X4	", moc: 	249	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	X4	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	X4	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2018"	, kod_silnika: "	N20B20A	" },
				{ label: "	X4	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2018"	, kod_silnika: "	N20B20A	" },
				{ label: "	X4	", moc: 	360	, pojemnosc: 	3000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	B58B30A	" },
				{ label: "	X4	", moc: 	354	, pojemnosc: 	3000	, rok_produkcji: 	"2018-2019"	, kod_silnika: "	B58B30A	" },
				{ label: "	X4	", moc: 	360	, pojemnosc: 	3000	, rok_produkcji: 	"2021-2023"	, kod_silnika: "	B58B30B	" },
				{ label: "	X4	", moc: 	388	, pojemnosc: 	3000	, rok_produkcji: 	"2019-2023"	, kod_silnika: "	B58B30B	" },
				{ label: "	X4	", moc: 	360	, pojemnosc: 	3000	, rok_produkcji: 	"2015-2018"	, kod_silnika: "	N55B30A	" },
				{ label: "	X4	", moc: 	306	, pojemnosc: 	3000	, rok_produkcji: 	"2014-2018"	, kod_silnika: "	N55B30A	" },
			  ]
			},
		"X5": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	X5	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2018"	, kod_silnika: "	N20B20A	" },
				{ label: "	X5	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2018"	, kod_silnika: "	N20B20A	" },
				{ label: "	X5	", moc: 	279	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2018"	, kod_silnika: "	N20B20A	" },
				{ label: "	X5	", moc: 	313	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2018"	, kod_silnika: "	N20B20A	" },
				{ label: "	X5	", moc: 	306	, pojemnosc: 	3000	, rok_produkcji: 	"2010-2018"	, kod_silnika: "	N55B30A	" },
				{ label: "	X5	", moc: 	326	, pojemnosc: 	3000	, rok_produkcji: 	"2013-2018"	, kod_silnika: "	N55B30A	" },
				{ label: "	X5	", moc: 	320	, pojemnosc: 	3000	, rok_produkcji: 	"2012-2013"	, kod_silnika: "	N55B30A	" },
			  ]
			},
		"X6": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	X6	", moc: 	306	, pojemnosc: 	3000	, rok_produkcji: 	"2008-2019"	, kod_silnika: "	N55B30A	" },
				{ label: "	X6	", moc: 	326	, pojemnosc: 	3000	, rok_produkcji: 	"2014-2019"	, kod_silnika: "	N55B30A	" },
				{ label: "	X6	", moc: 	320	, pojemnosc: 	3000	, rok_produkcji: 	"2012-2014"	, kod_silnika: "	N55B30A	" },
			  ]
			},
		"Z4": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	Z4	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Z4	", moc: 	197	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	B48B20B	" },
				{ label: "	Z4	", moc: 	258	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	B48B20B	" },
			  ]
			},
		"Z4 Roadster": {
			  default: { moc: 177, pojemnosc: 1500, rok_produkcji: 2023, kod_silnika: "A156T2H" },
			  variants: [
				{ label: "	Z4 Roadster	", moc: 	156	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2016"	, kod_silnika: "	N20B20A	" },
				{ label: "	Z4 Roadster	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2016"	, kod_silnika: "	N20B20A	" },
				{ label: "	Z4 Roadster	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2016"	, kod_silnika: "	N20B20A	" },
				{ label: "	Z4 Roadster	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"2011-2016"	, kod_silnika: "	N20B20A	" },
			  ]
			},
	},
	"Buick": {
		"Encore": {
			  default: { moc: 156, pojemnosc: 1300, rok_produkcji: 2020, kod_silnika: "L3T" },
			  variants: [
				{ label: "	Encore	", moc: 	156	, pojemnosc: 	1300	, rok_produkcji: 	"2020-2025"	, kod_silnika: "	L3T	" },
			  ]
			},
	},
	"Cadillac": {
		"ATS": {
			  default: { moc: 205, pojemnosc: 2500, rok_produkcji: 2014, kod_silnika: "LCV-2.5" },
			  variants: [
				{ label: "	ATS	", moc: 	205	, pojemnosc: 	2500	, rok_produkcji: 	"2014-2017"	, kod_silnika: "	LCV-2500	" },
			  ]
			},
		"CTS": {
			  default: { moc: 276, pojemnosc: 3000, rok_produkcji: 2008, kod_silnika: "LF1" },
			  variants: [
				{ label: "	CTS	", moc: 	276	, pojemnosc: 	3000	, rok_produkcji: 	"2008-2023"	, kod_silnika: "	LF1	" },
				{ label: "	CTS	", moc: 	273	, pojemnosc: 	3000	, rok_produkcji: 	"2010-2013"	, kod_silnika: "	LF1	" },
				{ label: "	CTS	", moc: 	311	, pojemnosc: 	3600	, rok_produkcji: 	"2008-2023"	, kod_silnika: "	LLT	" },
				{ label: "	CTS	", moc: 	309	, pojemnosc: 	3600	, rok_produkcji: 	"2008-2023"	, kod_silnika: "	LLT	" },
				{ label: "	CTS	", moc: 	322	, pojemnosc: 	3600	, rok_produkcji: 	"2011-2023"	, kod_silnika: "	LLT	" },
				{ label: "	CTS	", moc: 	271	, pojemnosc: 	3600	, rok_produkcji: 	"2010-2013"	, kod_silnika: "	LLT	" },
			  ]
			},
		"Escalade": {
			  default: { moc: 426, pojemnosc: 6200, rok_produkcji: 2017, kod_silnika: "EcoTec3 L86" },
			  variants: [
				{ label: "	Escalade	", moc: 	426	, pojemnosc: 	6200	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	EcoTec3 L86	" },
				{ label: "	Escalade	", moc: 	426	, pojemnosc: 	6200	, rok_produkcji: 	"2014-2016"	, kod_silnika: "	EcoTec3 L86	" },
			  ]
			},
		"SRX": {
			  default: { moc: 269, pojemnosc: 3000, rok_produkcji: 2009, kod_silnika: "LF1" },
			  variants: [
				{ label: "	SRX	", moc: 	269	, pojemnosc: 	3000	, rok_produkcji: 	"2009-2016"	, kod_silnika: "	LF1	" },
				{ label: "	SRX	", moc: 	271	, pojemnosc: 	3000	, rok_produkcji: 	"2009-2016"	, kod_silnika: "	LF1	" },
				{ label: "	SRX	", moc: 	313	, pojemnosc: 	3600	, rok_produkcji: 	"2012-2016"	, kod_silnika: "	LFX	" },
				{ label: "	SRX	", moc: 	318	, pojemnosc: 	3600	, rok_produkcji: 	"2012-2016"	, kod_silnika: "	LFX	" },
			  ]
			},
		"STS": {
			  default: { moc: 311, pojemnosc: 3600, rok_produkcji: 2009, kod_silnika: "LF1" },
			  variants: [
				{ label: "	STS	", moc: 	311	, pojemnosc: 	3600	, rok_produkcji: 	"2009-2012"	, kod_silnika: "	LLT	" },
			  ]
			},
		"XT4": {
			  default: { moc: " ", pojemnosc: " ", rok_produkcji: " ", kod_silnika: " " },
			  variants: [
				{ label: "	XT4	", moc: 	230	, pojemnosc: 	2000	, rok_produkcji: 	"2021-2023"	, kod_silnika: "	LSY	" },
				{ label: "	XT4	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"2021-2023"	, kod_silnika: "	LSY	" },
			  ]
			},
		"XT5": {
			  default: { moc: " ", pojemnosc: " ", rok_produkcji: " ", kod_silnika: " " },
			  variants: [
				{ label: "	XTS	", moc: 	309	, pojemnosc: 	3600	, rok_produkcji: 	"2012-2020"	, kod_silnika: "	LFX	" },
				{ label: "	XTS	", moc: 	314	, pojemnosc: 	3600	, rok_produkcji: 	"2016-2023"	, kod_silnika: "	LGX	" },
			  ]
			},
	},
	"Changan": {
		"CS35 Plus": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	CS35 Plus	", moc: 	155	, pojemnosc: 	1400	, rok_produkcji: 	2022	, kod_silnika: "	JL473ZQ3	" },
				{ label: "	CS35 Plus	", moc: 	129	, pojemnosc: 	1600	, rok_produkcji: 	2022	, kod_silnika: "	JL478Q	" },
			  ]
			},
	},
	"Chery": {
		"Jaecoo 7": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Jaecoo 7	", moc: 	147	, pojemnosc: 	1600	, rok_produkcji: 	2024	, kod_silnika: "	SQRF4J16F	" },
			  ]
			},
		"Omoda 5": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Omoda 5	", moc: 	186	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	SQRF4J16	" },
				{ label: "	Omoda 5	", moc: 	163	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	SQRF4J16	" },
				{ label: "	Omoda 5	", moc: 	147	, pojemnosc: 	1600	, rok_produkcji: 	2024	, kod_silnika: "	SQRF4J16F	" },
			  ]
			},
		"Tiggo": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Tiggo	", moc: 	163	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	SQRF4J16	" },
				{ label: "	Tiggo	", moc: 	147	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	SQRF4J16	" },
				{ label: "	Tiggo	", moc: 	186	, pojemnosc: 	1600	, rok_produkcji: 	2024	, kod_silnika: "	SQRF4J16F	" },
			  ]
			},
	},
	"Chevrolet": {
		"Camaro": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Camaro	", moc: 	328	, pojemnosc: 	3600	, rok_produkcji: 	"2011-2023"	, kod_silnika: "	LFX	" },
				{ label: "	Camaro	", moc: 	314	, pojemnosc: 	3600	, rok_produkcji: 	"2016-2023"	, kod_silnika: "	LGX	" },
				{ label: "	Camaro	", moc: 	316	, pojemnosc: 	3600	, rok_produkcji: 	"2011-2023"	, kod_silnika: "	LLT	" },
				{ label: "	Camaro	", moc: 	305	, pojemnosc: 	3600	, rok_produkcji: 	"2009-2010"	, kod_silnika: "	LLT	" },
				{ label: "	Camaro	", moc: 	453	, pojemnosc: 	6200	, rok_produkcji: 	"2016-2023"	, kod_silnika: "	LT1	" },
				{ label: "	Camaro	", moc: 	461	, pojemnosc: 	6200	, rok_produkcji: 	"2015-2023"	, kod_silnika: "	LT1	" },
			  ]
			},
		"Corvette": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Corvette	", moc: 	466	, pojemnosc: 	6200	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	LT1	" },
			  ]
			},
		"Equinox": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Equinox	", moc: 	173	, pojemnosc: 	1500	, rok_produkcji: 	"2018-2022"	, kod_silnika: "	LFV	" },
				{ label: "	Equinox	", moc: 	185	, pojemnosc: 	2400	, rok_produkcji: 	"2012-2018"	, kod_silnika: "	LEA	" },
			  ]
			},
		"Impala": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Impala	", moc: 	199	, pojemnosc: 	2500	, rok_produkcji: 	"2014-2019"	, kod_silnika: "	LKW	" },
			  ]
			},
		"Malibu": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Malibu	", moc: 	165	, pojemnosc: 	1500	, rok_produkcji: 	"2016-2019"	, kod_silnika: "	LFV	" },
				{ label: "	Malibu	", moc: 	199	, pojemnosc: 	2500	, rok_produkcji: 	"2014-2017"	, kod_silnika: "	LKW	" },
				{ label: "	Malibu	", moc: 	267	, pojemnosc: 	3000	, rok_produkcji: 	"2010-2018"	, kod_silnika: "	LFW	" },
			  ]
			},
		"Orlando": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Orlando	", moc: 	185	, pojemnosc: 	2400	, rok_produkcji: 	2020	, kod_silnika: "	LEA	" },
			  ]
			},
		"S10": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	S10	", moc: 	200	, pojemnosc: 	2500	, rok_produkcji: 	"2014-2017"	, kod_silnika: "	LCV-2500	" },
			  ]
			},
		"Silverado 1500": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Silverado 1500	", moc: 	288	, pojemnosc: 	4300	, rok_produkcji: 	"2019-2021"	, kod_silnika: "	EcoTec3 LV3	" },
				{ label: "	Silverado 1500	", moc: 	288	, pojemnosc: 	4300	, rok_produkcji: 	"2017-2021"	, kod_silnika: "	EcoTec3 LV3	" },
				{ label: "	Silverado 1500	", moc: 	360	, pojemnosc: 	5300	, rok_produkcji: 	2019	, kod_silnika: "	EcoTec3 L82	" },
				{ label: "	Silverado 1500	", moc: 	340	, pojemnosc: 	5300	, rok_produkcji: 	"2017-2019"	, kod_silnika: "	EcoTec3 L83	" },
				{ label: "	Silverado 1500	", moc: 	385	, pojemnosc: 	5300	, rok_produkcji: 	"2014-2016"	, kod_silnika: "	EcoTec3 L83	" },
				{ label: "	Silverado 1500	", moc: 	340	, pojemnosc: 	5300	, rok_produkcji: 	"2014-2016"	, kod_silnika: "	EcoTec3 L83	" },
				{ label: "	Silverado 1500	", moc: 	360	, pojemnosc: 	5300	, rok_produkcji: 	2019	, kod_silnika: "	EcoTec3 L84	" },
				{ label: "	Silverado 1500	", moc: 	360	, pojemnosc: 	5300	, rok_produkcji: 	"2019-2022"	, kod_silnika: "	EcoTec3 L84	" },
				{ label: "	Silverado 1500	", moc: 	426	, pojemnosc: 	6200	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	EcoTec3 L86	" },
				{ label: "	Silverado 1500	", moc: 	426	, pojemnosc: 	6200	, rok_produkcji: 	"2014-2016"	, kod_silnika: "	EcoTec3 L86	" },
				{ label: "	Silverado 1500	", moc: 	426	, pojemnosc: 	6200	, rok_produkcji: 	"2019-2022"	, kod_silnika: "	EcoTec3 L87	" },
			  ]
			},
		"Silverado HD": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Silverado HD	", moc: 	407	, pojemnosc: 	6600	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	EcoTec3 L8T	" },
			  ]
			},
		"Suburban": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Suburban	", moc: 	426	, pojemnosc: 	6200	, rok_produkcji: 	"2021-2022"	, kod_silnika: "	EcoTec3 L87	" },
			  ]
			},
		"Tahoe": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Tahoe	", moc: 	340	, pojemnosc: 	5300	, rok_produkcji: 	"2014-2016"	, kod_silnika: "	EcoTec3 L83	" },
				{ label: "	Tahoe	", moc: 	385	, pojemnosc: 	5300	, rok_produkcji: 	"2014-2016"	, kod_silnika: "	EcoTec3 L83	" },
				{ label: "	Tahoe	", moc: 	426	, pojemnosc: 	6200	, rok_produkcji: 	"2014-2016"	, kod_silnika: "	EcoTec3 L86	" },
			  ]
			},
		"Trail Blazer": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Trail Blazer	", moc: 	156	, pojemnosc: 	1300	, rok_produkcji: 	"2021-2025"	, kod_silnika: "	L3T	" },
			  ]
			},
		"Traverse": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Traverse	", moc: 	310	, pojemnosc: 	3600	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	LFY	" },
				{ label: "	Traverse	", moc: 	314	, pojemnosc: 	3600	, rok_produkcji: 	"2016-2017"	, kod_silnika: "	LGX	" },
				{ label: "	Traverse	", moc: 	292	, pojemnosc: 	3600	, rok_produkcji: 	"2013-2015"	, kod_silnika: "	LLT	" },
			  ]
			},
    },
	"Citroen": {
		"Berlingo": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Berlingo	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	2018-2020	, kod_silnika: "	EB2ADT / EB2ADTS HN05	" },
				{ label: "	Berlingo	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	2015-2020	, kod_silnika: "	EB2DT/HN01	" },
			  ]
			},
		"C3": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	C3	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	2018-2020	, kod_silnika: "	EB2ADT / EB2ADTS HN05	" },
				{ label: "	C3	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	2014-2020	, kod_silnika: "	EB2DT/HN01 - EB2DTS/HN02	" },
			  ]
			},
		"C3 Hybrid": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	C3 Hybrid	", moc: 	101	, pojemnosc: 	1200	, rok_produkcji: 	2024	, kod_silnika: "	HPV (EB2LTED)	" },
			  ]
			},
		"C4": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	C4	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	2018-2020	, kod_silnika: "	EB2ADT / EB2ADTS HN05	" },
				{ label: "	C4	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	2014-2020	, kod_silnika: "	EB2DT/HN01 - EB2DTS/HN02	" },
				{ label: "	C4	", moc: 	101	, pojemnosc: 	1200	, rok_produkcji: 	2020-2024	, kod_silnika: "	HN09	" },
				{ label: "	C4	", moc: 	156	, pojemnosc: 	1600	, rok_produkcji: 	2009-2024	, kod_silnika: "	5FV (EP6CDT) 	" },
			  ]
			},
		"C5": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	C5	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	2018-2020	, kod_silnika: "	EB2ADTS/HN05	" },
				{ label: "	C5	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	2009-2024	, kod_silnika: "	5FN (EP6CDT) 	" },
				{ label: "	C5	", moc: 	156	, pojemnosc: 	1600	, rok_produkcji: 	2009-2024	, kod_silnika: "	5FV (EP6CDT) 	" },
				{ label: "	C5	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	2018-2024	, kod_silnika: "	5G06	" },
				{ label: "	C5	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	2018-2024	, kod_silnika: "	5GF (EP6FADTXD)	" },
			  ]
			},
		"DS3": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	DS3	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	2014-2015	, kod_silnika: "	EB2DT/HN01 - EB2DTS/HN02	" },
				{ label: "	DS3	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	2010-2015	, kod_silnika: "	5FN (EP6CDT) 	" },
				{ label: "	DS3	", moc: 	156	, pojemnosc: 	1600	, rok_produkcji: 	2010-2015	, kod_silnika: "	5FV (EP6CDT) 	" },
			  ]
			},
		"DS4": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	DS4	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	2014-2015	, kod_silnika: "	EB2DT/HN01 - EB2DTS/HN02	" },
				{ label: "	DS4	", moc: 	156	, pojemnosc: 	1600	, rok_produkcji: 	2011-2015	, kod_silnika: "	5FV (EP6CDT) 	" },
			  ]
			},
		"DS5": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	DS5	", moc: 	156	, pojemnosc: 	1600	, rok_produkcji: 	2011-2015	, kod_silnika: "	5FV (EP6CDT) 	" },
			  ]
			},
		"Grand C4": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Grand C4	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	2018-2024	, kod_silnika: "	5GF (EP6FADTXD)	" },
			  ]
			},
    },
	"Cupra": {
		"Ateca": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Ateca	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	2018-2024	, kod_silnika: "	DXDB	" },
				{ label: "	Ateca	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	2018-2023	, kod_silnika: "	DNFC	" },
				{ label: "	Ateca	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	2018-2023	, kod_silnika: "	DNUE	" },
			  ]
			},
		"Formentor": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Formentor	", moc: 	245	, pojemnosc: 	1400	, rok_produkcji: 	2021-2024	, kod_silnika: "	DGEA	" },
				{ label: "	Formentor	", moc: 	204	, pojemnosc: 	1400	, rok_produkcji: 	2021-2024	, kod_silnika: "	DGEA	" },
				{ label: "	Formentor	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	2020-2023	, kod_silnika: "	DPBA	" },
				{ label: "	Formentor	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	2020-2024	, kod_silnika: "	DPCA	" },
				{ label: "	Formentor	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	2020-2023	, kod_silnika: "	CZPB	" },
				{ label: "	Formentor	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	2020-2023	, kod_silnika: "	DNFB	" },
				{ label: "	Formentor	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	2021	, kod_silnika: "	DNNA	" },
				{ label: "	Formentor	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	2021-2023	, kod_silnika: "	DNPA	" },
			  ]
			},
		"Leon": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Leon	", moc: 	245	, pojemnosc: 	1400	, rok_produkcji: 	2020-2024	, kod_silnika: "	DGEA	" },
				{ label: "	Leon	", moc: 	204	, pojemnosc: 	1400	, rok_produkcji: 	2020-2024	, kod_silnika: "	DGEA	" },
				{ label: "	Leon	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	2022-2024	, kod_silnika: "	DPCA	" },
				{ label: "	Leon	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	2020-2023	, kod_silnika: "	DNFB	" },
				{ label: "	Leon	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	2021-2023	, kod_silnika: "	DNFC	" },
				{ label: "	Leon	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	2020-2023	, kod_silnika: "	DNNA	" },
				{ label: "	Leon	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	2021-2023	, kod_silnika: "	DNPA	" },
			  ]
			},
		"Tarraco": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Tarraco	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	2021-2023	, kod_silnika: "	DNPA	" },
			  ]
			}, 
    },
	"Dacia": {
		"Dokker": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Dokker	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	2013-2020	, kod_silnika: "	1200 TCe115 H5F	" },
				{ label: "	Dokker	", moc: 	102	, pojemnosc: 	1300	, rok_produkcji: 	2019-2024	, kod_silnika: "	H5H 470	" },
				{ label: "	Dokker	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	2019-2024	, kod_silnika: "	H5H 470	" },
				{ label: "	Dokker	", moc: 	102	, pojemnosc: 	1300	, rok_produkcji: 	2019-2024	, kod_silnika: "	H5H 490	" },
				{ label: "	Dokker	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	2019-2024	, kod_silnika: "	H5H 490	" },
			  ]
			},
		"Duster": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Duster	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	2013-2020	, kod_silnika: "	1200 TCe115 H5F	" },
				{ label: "	Duster	", moc: 	125	, pojemnosc: 	1200	, rok_produkcji: 	2013-2020	, kod_silnika: "	1200 TCe125 H5F	" },
				{ label: "	Duster	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	2019-2024	, kod_silnika: "	H5H 470	" },
				{ label: "	Duster	", moc: 	150	, pojemnosc: 	1300	, rok_produkcji: 	2019-2024	, kod_silnika: "	H5H 470	" },
				{ label: "	Duster	", moc: 	150	, pojemnosc: 	1300	, rok_produkcji: 	2019-2024	, kod_silnika: "	H5H 480	" },
				{ label: "	Duster	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	2019-2024	, kod_silnika: "	H5H 480	" },
				{ label: "	Duster	", moc: 	150	, pojemnosc: 	1300	, rok_produkcji: 	2019-2024	, kod_silnika: "	H5H 490	" },
			  ]
			},
		"Lodgy": {
			  default: { moc: 155, pojemnosc: 1400, rok_produkcji: 2022, kod_silnika: "JL473ZQ3" },
			  variants: [
				{ label: "	Lodgy	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	2012-2020	, kod_silnika: "	1200 TCe115 H5F	" },
				{ label: "	Lodgy	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	2013-2020	, kod_silnika: "	1200 TCe115 H5F	" },
				{ label: "	Lodgy	", moc: 	102	, pojemnosc: 	1300	, rok_produkcji: 	2019-2024	, kod_silnika: "	H5H 470	" },
				{ label: "	Lodgy	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	2019-2024	, kod_silnika: "	H5H 470	" },
				{ label: "	Lodgy	", moc: 	102	, pojemnosc: 	1300	, rok_produkcji: 	2019-2024	, kod_silnika: "	H5H 490	" },
			  ]
			},
    },
	"DFSK": {
		"Fengon 7": {
			  default: { moc: 220, pojemnosc: 2000, rok_produkcji: 2022, kod_silnika: "HD20" },
			  variants: [
				{ label: "Fengon 7", moc: 220, pojemnosc: 2000, rok_produkcji: 2022, kod_silnika: "HD20" },
			  ]
			},
	},
	"DONGFENG": {
		"Forthing U-Tour": {
			  default: { moc: 220, pojemnosc: 2000, rok_produkcji: 2022, kod_silnika: "HD20" },
			  variants: [
				{ label: "	Forthing U-Tour	", moc: 	197	, pojemnosc: 	1500	, rok_produkcji: 	2023	, kod_silnika: "	4A95TD	" },
			  ]
			},
		"Shine Max": {
			  default: { moc: 220, pojemnosc: 2000, rok_produkcji: 2022, kod_silnika: "HD20" },
			  variants: [
				{ label: "	Shine Max	", moc: 	125	, pojemnosc: 	1500	, rok_produkcji: 	2024	, kod_silnika: "	DFMC15DR	" },
			  ]
			},
		"T5 EVO": {
			  default: { moc: 220, pojemnosc: 2000, rok_produkcji: 2022, kod_silnika: "HD20" },
			  variants: [
				{ label: "	T5 EVO	", moc: 	194	, pojemnosc: 	1500	, rok_produkcji: 	2022	, kod_silnika: "	4A95T	" },
			  ]
			},
		"Yixuan Max": {
			  default: { moc: 220, pojemnosc: 2000, rok_produkcji: 2022, kod_silnika: "HD20" },
			  variants: [
				{ label: "	Yixuan Max	", moc: 	188	, pojemnosc: 	1500	, rok_produkcji: 	2024	, kod_silnika: "	DFMC15TP	" },
			  ]
			},
    },
	"DS AUTOMOBILES": {
		"3": {
			  default: { moc: 220, pojemnosc: 2000, rok_produkcji: 2022, kod_silnika: "HD20" },
			  variants: [
				{ label: "	3	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	EB2ADT / EB2ADTS HN05	" },
				{ label: "	3	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"2015-2020"	, kod_silnika: "	EB2DT/HN01 - EB2DTS/HN02	" },
			  ]
			},
		"4": {
			  default: { moc: 220, pojemnosc: 2000, rok_produkcji: 2022, kod_silnika: "HD20" },
			  variants: [
				{ label: "	4	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"2015-2020"	, kod_silnika: "	EB2DT/HN01 - EB2DTS/HN02	" },
				{ label: "	4	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	"2021-2024"	, kod_silnika: "	5GF (EP6FADTXD)	" },
				{ label: "	4	", moc: 	224	, pojemnosc: 	1600	, rok_produkcji: 	"2021-2024"	, kod_silnika: "	5GG (EP6FADTX)	" },
			  ]
			},
		"7": {
			  default: { moc: 220, pojemnosc: 2000, rok_produkcji: 2022, kod_silnika: "HD20" },
			  variants: [
				{ label: "	7	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	EB2ADTS/HN05	" },
				{ label: "	7	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	5G06	" },
				{ label: "	7	", moc: 	224	, pojemnosc: 	1600	, rok_produkcji: 	"2017-2022"	, kod_silnika: "	5GC (EP6FADTX)	" },
				{ label: "	7	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	5GF (EP6FADTXD)	" },
				{ label: "	7	", moc: 	224	, pojemnosc: 	1600	, rok_produkcji: 	"2017-2024"	, kod_silnika: "	5GG (EP6FADTX)	" },
			  ]
			},   
		"9": {
			  default: { moc: 220, pojemnosc: 2000, rok_produkcji: 2022, kod_silnika: "HD20" },
			  variants: [
				{ label: "	9	", moc: 	224	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	5GG (EP6FADTX)	" },
			  ]
			},	  
    },
	"FAW": {
		"Bestune T77": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "Bestune T77", moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  ]
			},
	},
	"Fiat": {
		"500X": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	500X	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	55282151	" },
				{ label: "	500X	", moc: 	150	, pojemnosc: 	1300	, rok_produkcji: 	2021	, kod_silnika: "	46351268	" },
				{ label: "	500X	", moc: 	150	, pojemnosc: 	1300	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	55282328	" },
			  ]
			},
		"500X Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	500X Hybrid	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	2022	, kod_silnika: "	46347812	" },
			  ]
			},
		"600 Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	600 Hybrid	", moc: 	101	, pojemnosc: 	1200	, rok_produkcji: 	2024	, kod_silnika: "	HN09	" },
			  ]
			},
		"Egea Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Egea Hybrid	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	2022	, kod_silnika: "	46347813	" },
			  ]
			},
		"Tipo": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Tipo	", moc: 	100	, pojemnosc: 	1000	, rok_produkcji: 	2021	, kod_silnika: "	46349385	" },
			  ]
			},
		"Tipo Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Tipo Hybrid	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	2022	, kod_silnika: "	46347812	" },
			  ]
			},
    },
	"Ford": {
		"B-MAX": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	B-Max	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2012-2023"	, kod_silnika: "	SFJA	" },
				{ label: "	B-Max	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2012-2023"	, kod_silnika: "	SFJB	" },
				{ label: "	B-Max	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2012-2023"	, kod_silnika: "	SFJC	" },
				{ label: "	B-Max	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2012-2023"	, kod_silnika: "	SFJD	" },
			  ]
			},
		"Bronco": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Bronco	", moc: 	275	, pojemnosc: 	2300	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	2300 ECOBOOST 	" },
				{ label: "	Bronco	", moc: 	279	, pojemnosc: 	2300	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	2300 ECOBOOST 	" },
				{ label: "	Bronco	", moc: 	299	, pojemnosc: 	2300	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	2300 ECOBOOST 	" },
			  ]
			},
		"C-MAX": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	C-Max	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2012-2019"	, kod_silnika: "	B7DA	" },
				{ label: "	C-Max	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2012-2019"	, kod_silnika: "	M1DA	" },
				{ label: "	C-Max	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2012-2022"	, kod_silnika: "	M1DB	" },
				{ label: "	C-Max	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2012-2019"	, kod_silnika: "	M1DD	" },
				{ label: "	C-Max	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M8DB	" },
				{ label: "	C-Max	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M8DF	" },
				{ label: "	C-Max	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M9DB	" },
				{ label: "	C-Max	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"2010-2019"	, kod_silnika: "	JQDA	" },
				{ label: "	C-Max	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"2010-2019"	, kod_silnika: "	JQDB	" },
			  ]
			},
		"Ecosport": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Ecosport	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2013-2023"	, kod_silnika: "	M1JC	" },
			  ]
			},
		"Edge": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Edge	", moc: 	242	, pojemnosc: 	2000	, rok_produkcji: 	"2010-2024"	, kod_silnika: "	R9CB	" },
			  ]
			},
		"Escape": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Escape	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	Y1DA	" },
				{ label: "	Escape	", moc: 	242	, pojemnosc: 	2000	, rok_produkcji: 	"2013-2013"	, kod_silnika: "	R9CB	" },
			  ]
			},
		"Expedition": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Expedition	", moc: 	370	, pojemnosc: 	3500	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	3500L ECOBOOST GEN2	" },
			  ]
			},
		"Explorer": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Explorer	", moc: 	284	, pojemnosc: 	2300	, rok_produkcji: 	"2018-2022"	, kod_silnika: "	2300 ECOBOOST 	" },
				{ label: "	Explorer	", moc: 	284	, pojemnosc: 	2300	, rok_produkcji: 	"2015-2020"	, kod_silnika: "	N38H	" },
				{ label: "	Explorer	", moc: 	314	, pojemnosc: 	2300	, rok_produkcji: 	"2015-2020"	, kod_silnika: "	N48H	" },
				{ label: "	Explorer	", moc: 	322	, pojemnosc: 	3300	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	3300 Ti-VCT	" },
				{ label: "	Explorer	", moc: 	364	, pojemnosc: 	3500	, rok_produkcji: 	"2013-2015"	, kod_silnika: "	3500L ECOBOOST GEN1	" },
			  ]
			},
		"F-150": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	F-150	", moc: 	290	, pojemnosc: 	3300	, rok_produkcji: 	"2018-2021"	, kod_silnika: "	3300 Ti-VCT	" },
				{ label: "	F-150	", moc: 	364	, pojemnosc: 	3500	, rok_produkcji: 	"2012-2020"	, kod_silnika: "	3500L ECOBOOST GEN1	" },
				{ label: "	F-150	", moc: 	370	, pojemnosc: 	3500	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	3500L ECOBOOST GEN2	" },
				{ label: "	F-150	", moc: 	370	, pojemnosc: 	3500	, rok_produkcji: 	2021	, kod_silnika: "	3500L ECOBOOST GEN3	" },
				{ label: "	F-150	", moc: 	400	, pojemnosc: 	5000	, rok_produkcji: 	2021	, kod_silnika: "	5000L Ti-VCT GDI	" },
			  ]
			},
		"F-150 Raptor": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	F-150 Raptor	", moc: 	449	, pojemnosc: 	3500	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	3500L ECOBOOST GEN2	" },
			  ]
			},
		"Fiesta": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Fiesta	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2013-2023"	, kod_silnika: "	SFJA	" },
				{ label: "	Fiesta	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2013-2023"	, kod_silnika: "	SFJB	" },
				{ label: "	Fiesta	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2013-2023"	, kod_silnika: "	SFJC	" },
				{ label: "	Fiesta	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2013-2023"	, kod_silnika: "	SFJD	" },
				{ label: "	Fiesta	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	SFJE	" },
				{ label: "	Fiesta	", moc: 	182	, pojemnosc: 	1600	, rok_produkcji: 	"2013-2017"	, kod_silnika: "	JTJA	" },
				{ label: "	Fiesta	", moc: 	182	, pojemnosc: 	1600	, rok_produkcji: 	"2013-2017"	, kod_silnika: "	JTJB	" },
			  ]
			},
		"Fiesta VI": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Fiesta VI	", moc: 	200	, pojemnosc: 	1500	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	YZJA	" },
			  ]
			},
		"Fiesta VII": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Fiesta VII	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2019-2023"	, kod_silnika: "	B7JA	" },
				{ label: "	Fiesta VII	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	SFJN	" },
			  ]
			},
		"Fiesta VII Ecoboost Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Fiesta VII Ecoboost Hybrid	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	B7JB	" },
			  ]
			},
		"Focus": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Focus	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2012-2023"	, kod_silnika: "	M1DA	" },
				{ label: "	Focus	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2012-2022"	, kod_silnika: "	M1DB	" },
				{ label: "	Focus	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2012-2023"	, kod_silnika: "	M1DC	" },
				{ label: "	Focus	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2012-2023"	, kod_silnika: "	M1DD	" },
				{ label: "	Focus	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M8DA	" },
				{ label: "	Focus	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M8DB	" },
				{ label: "	Focus	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M8DD	" },
				{ label: "	Focus	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M8DE	" },
				{ label: "	Focus	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M9DA	" },
				{ label: "	Focus	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M9DB	" },
				{ label: "	Focus	", moc: 	174	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2020"	, kod_silnika: "	M9DE	" },
				{ label: "	Focus	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"2010-2014"	, kod_silnika: "	JQDA	" },
				{ label: "	Focus	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"2010-2014"	, kod_silnika: "	JQDB	" },
				{ label: "	Focus	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"2012-2020"	, kod_silnika: "	R9DC	" },
				{ label: "	Focus	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"2012-2020"	, kod_silnika: "	R9DD	" },
			  ]
			},
		"Focus IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Focus IV	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	B7DA	" },
				{ label: "	Focus IV	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	Y1DA	" },
				{ label: "	Focus IV	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2018-2024"	, kod_silnika: "	YZDA	" },
			  ]
			},
		"Galaxy": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Galaxy	", moc: 	160	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	UNCJ	" },
				{ label: "	Galaxy	", moc: 	160	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	UNCK	" },
				{ label: "	Galaxy	", moc: 	160	, pojemnosc: 	1600	, rok_produkcji: 	"2010-2015"	, kod_silnika: "	JTWA	" },
				{ label: "	Galaxy	", moc: 	160	, pojemnosc: 	1600	, rok_produkcji: 	"2010-2015"	, kod_silnika: "	JTWB	" },
				{ label: "	Galaxy	", moc: 	239	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	R9CI	" },
				{ label: "	Galaxy	", moc: 	203	, pojemnosc: 	2000	, rok_produkcji: 	"2010-2015"	, kod_silnika: "	TNWA	" },
			  ]
			},
		"Grand C-Max": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Grand C-Max	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"2010-2019"	, kod_silnika: "	JQDA	" },
				{ label: "	Grand C-Max	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"2010-2019"	, kod_silnika: "	JQDB	" },
			  ]
			},
		"Kuga": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Kuga	", moc: 	120	, pojemnosc: 	1500	, rok_produkcji: 	"2016-2022"	, kod_silnika: "	BNMA	" },
				{ label: "	Kuga	", moc: 	120	, pojemnosc: 	1500	, rok_produkcji: 	"2016-2019"	, kod_silnika: "	BNMB	" },
				{ label: "	Kuga	", moc: 	120	, pojemnosc: 	1500	, rok_produkcji: 	"2016-2019"	, kod_silnika: "	BNMC	" },
				{ label: "	Kuga	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M8MA	" },
				{ label: "	Kuga	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M8MB	" },
				{ label: "	Kuga	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M8MC	" },
				{ label: "	Kuga	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M8MD	" },
				{ label: "	Kuga	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M8ME	" },
				{ label: "	Kuga	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M8MF	" },
				{ label: "	Kuga	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M9MA	" },
				{ label: "	Kuga	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M9MB	" },
				{ label: "	Kuga	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M9MC	" },
				{ label: "	Kuga	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M9MD	" },
				{ label: "	Kuga	", moc: 	175	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	M9ME	" },
				{ label: "	Kuga	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"2013-2014"	, kod_silnika: "	JQMA	" },
				{ label: "	Kuga	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"2013-2014"	, kod_silnika: "	JQMB	" },
				{ label: "	Kuga	", moc: 	182	, pojemnosc: 	1600	, rok_produkcji: 	"2013-2014"	, kod_silnika: "	JTMA	" },
				{ label: "	Kuga	", moc: 	182	, pojemnosc: 	1600	, rok_produkcji: 	"2013-2020"	, kod_silnika: "	JTMB	" },
			  ]
			},
		"Kuga II": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Kuga II	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	Y1DA	" },
				{ label: "	Kuga II	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	YZDA	" },
			  ]
			},
		"Mondeo": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Mondeo	", moc: 	160	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	UNCA	" },
				{ label: "	Mondeo	", moc: 	160	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	UNCB	" },
				{ label: "	Mondeo	", moc: 	160	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	UNCE	" },
				{ label: "	Mondeo	", moc: 	160	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	UNCF	" },
				{ label: "	Mondeo	", moc: 	165	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	UNCN	" },
				{ label: "	Mondeo	", moc: 	239	, pojemnosc: 	2000	, rok_produkcji: 	"2014-2024"	, kod_silnika: "	R9CB	" },
				{ label: "	Mondeo	", moc: 	203	, pojemnosc: 	2000	, rok_produkcji: 	"2010-2015"	, kod_silnika: "	TNBA	" },
				{ label: "	Mondeo	", moc: 	239	, pojemnosc: 	2000	, rok_produkcji: 	"2010-2015"	, kod_silnika: "	TPBA	" },
				{ label: "	Mondeo 	", moc: 	160	, pojemnosc: 	1600	, rok_produkcji: 	"2013-2020"	, kod_silnika: "	JTBA	" },
				{ label: "	Mondeo 	", moc: 	160	, pojemnosc: 	1600	, rok_produkcji: 	"2011-2014"	, kod_silnika: "	JTBB	" },
			  ]
			},
		"Mustang": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Mustang	", moc: 	314	, pojemnosc: 	2300	, rok_produkcji: 	"2018-2022"	, kod_silnika: "	2300 ECOBOOST 	" },
				{ label: "	Mustang	", moc: 	284	, pojemnosc: 	2300	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	N38H	" },
				{ label: "	Mustang	", moc: 	314	, pojemnosc: 	2300	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	N48H	" },
				{ label: "	Mustang	", moc: 	317	, pojemnosc: 	2300	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	N48H	" },
			  ]
			},
		"Navigator": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Navigator	", moc: 	364	, pojemnosc: 	3500	, rok_produkcji: 	"2015-2017"	, kod_silnika: "	3500L ECOBOOST GEN1	" },
				{ label: "	Navigator	", moc: 	370	, pojemnosc: 	3500	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	3500L ECOBOOST GEN2	" },
			  ]
			},
		"Puma": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Puma	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2019-2023"	, kod_silnika: "	B7JA	" },
				{ label: "	Puma	", moc: 	200	, pojemnosc: 	1500	, rok_produkcji: 	"2020-2024"	, kod_silnika: "	YZJA	" },
			  ]
			},
		"Puma Ecoboost Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Puma Ecoboost Hybrid	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	B7JB	" },
			  ]
			},
		"Range": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Range	", moc: 	272	, pojemnosc: 	2300	, rok_produkcji: 	"2018-2022"	, kod_silnika: "	2300 ECOBOOST 	" },
			  ]
			},
		"Ranger Raptor": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Ranger Raptor	", moc: 	288	, pojemnosc: 	3000	, rok_produkcji: 	"2021-2024"	, kod_silnika: "	3000 EcoBoost 	" },
				{ label: "	Ranger Raptor	", moc: 	292	, pojemnosc: 	3000	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	DD2X	" },
			  ]
			},
		"S-MAX": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	S-Max	", moc: 	160	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	UNCI	" },
				{ label: "	S-Max	", moc: 	160	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	UNCJ	" },
				{ label: "	S-Max	", moc: 	160	, pojemnosc: 	1500	, rok_produkcji: 	"2014-2022"	, kod_silnika: "	UNCK	" },
				{ label: "	S-Max	", moc: 	160	, pojemnosc: 	1600	, rok_produkcji: 	"2011-2014"	, kod_silnika: "	JTWA	" },
				{ label: "	S-Max	", moc: 	160	, pojemnosc: 	1600	, rok_produkcji: 	"2011-2014"	, kod_silnika: "	JTWB	" },
				{ label: "	S-Max	", moc: 	239	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	R9CI	" },
				{ label: "	S-Max	", moc: 	203	, pojemnosc: 	2000	, rok_produkcji: 	"2010-2014"	, kod_silnika: "	TNWA	" },
			  ]
			},
		"Tourneo": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Tourneo	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2013-2023"	, kod_silnika: "	B3GA	" },
				{ label: "	Tourneo	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	SFCA	" },
				{ label: "	Tourneo	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	SFCB	" },
				{ label: "	Tourneo	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	SFCC	" },
				{ label: "	Tourneo	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	SFCD	" },
				{ label: "	Tourneo	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	SFCE	" },
				{ label: "	Tourneo	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	SFCF	" },
				{ label: "	Tourneo ", moc: 	114	, pojemnosc: 	1500	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	DPBC	" },
			  ]
			},
		"Tourneo Courier": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Tourneo Courier	", moc: 	125	, pojemnosc: 	1000	, rok_produkcji: 	2024	, kod_silnika: "	B7NB	" },
			  ]
			},
		"Transit": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Transit	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2013-2023"	, kod_silnika: "	B3GA	" },
				{ label: "	Transit	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2021-2023"	, kod_silnika: "	B3GB	" },
				{ label: "	Transit	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	SFCA	" },
				{ label: "	Transit	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	SFCB	" },
				{ label: "	Transit	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	SFCC	" },
				{ label: "	Transit	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	SFCD	" },
				{ label: "	Transit	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	SFCE	" },
				{ label: "	Transit	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2014-2023"	, kod_silnika: "	SFCF	" },
				{ label: "	Transit	", moc: 	114	, pojemnosc: 	1500	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	DPBC	" },
				{ label: "	Transit ", moc: 	"All-kM"	, pojemnosc: 	3500	, rok_produkcji: 	"2015-2021"	, kod_silnika: "	3500L ECOBOOST GEN1	" },
			  ]
			},
    },
	"GEELY": {
		"Azkarra": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Azkarra	", moc: 	174	, pojemnosc: 	1500	, rok_produkcji: 	2023	, kod_silnika: "	3G15TDB	" },
			  ]
			},
		"Coolray": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Coolray	", moc: 	174	, pojemnosc: 	1500	, rok_produkcji: 	2023	, kod_silnika: "	3G15TDB	" },
				{ label: "	Coolray	", moc: 	181	, pojemnosc: 	1500	, rok_produkcji: 	2023	, kod_silnika: "	BHE15-EFZ	" },
			  ]
			},
		"Emgrand": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Emgrand	", moc: 	173	, pojemnosc: 	1500	, rok_produkcji: 	2023	, kod_silnika: "	BHE15-AFZ	" },
			  ]
			},
		"Okavango": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Okavango	", moc: 	190	, pojemnosc: 	1500	, rok_produkcji: 	2023	, kod_silnika: "	3G15TDB	" },
				{ label: "	Okavango	", moc: 	188	, pojemnosc: 	1500	, rok_produkcji: 	2023	, kod_silnika: "	3G15TDB	" },
				{ label: "	Okavango	", moc: 	218	, pojemnosc: 	2000	, rok_produkcji: 	2023	, kod_silnika: "	JLH-4G20TDJ	" },
			  ]
			},
    },
	"GMC": {
		"Acadia": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Acadia	", moc: 	292	, pojemnosc: 	3600	, rok_produkcji: 	"2013-2015"	, kod_silnika: "	LLT	" },
			  ]
			},
		"Savana": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Savana	", moc: 	288	, pojemnosc: 	4300	, rok_produkcji: 	"2018-2021"	, kod_silnika: "	EcoTec3 LV3	" },
			  ]
			},
		"Sierra": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Sierra	", moc: 	301	, pojemnosc: 	4300	, rok_produkcji: 	"2017-2021"	, kod_silnika: "	EcoTec3 LV3	" },
				{ label: "	Sierra	", moc: 	288	, pojemnosc: 	4300	, rok_produkcji: 	"2019-2021"	, kod_silnika: "	EcoTec3 LV3	" },
			  ]
			},
		"Sierra 1500": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Sierra 1500	", moc: 	340	, pojemnosc: 	5300	, rok_produkcji: 	"2014-2016"	, kod_silnika: "	EcoTec3 L82	" },
				{ label: "	Sierra 1500	", moc: 	340	, pojemnosc: 	5300	, rok_produkcji: 	"2014-2018"	, kod_silnika: "	EcoTec3 L83	" },
				{ label: "	Sierra 1500	", moc: 	340	, pojemnosc: 	5300	, rok_produkcji: 	"2017-2019"	, kod_silnika: "	EcoTec3 L83	" },
				{ label: "	Sierra 1500	", moc: 	360	, pojemnosc: 	5300	, rok_produkcji: 	"2019-2022"	, kod_silnika: "	EcoTec3 L84	" },
				{ label: "	Sierra 1500	", moc: 	426	, pojemnosc: 	6200	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	EcoTec3 L86	" },
				{ label: "	Sierra 1500	", moc: 	426	, pojemnosc: 	6200	, rok_produkcji: 	"2014-2016"	, kod_silnika: "	EcoTec3 L86	" },
				{ label: "	Sierra 1500	", moc: 	"All-kM"	, pojemnosc: 	6200	, rok_produkcji: 	"2019-2022"	, kod_silnika: "	EcoTec3 L87	" },
			  ]
			},
		"Sierra HD": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Sierra HD	", moc: 	407	, pojemnosc: 	6600	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	EcoTec3 L8T	" },
			  ]
			},
		"Terrain": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Terrain	", moc: 	185	, pojemnosc: 	2400	, rok_produkcji: 	"2012-2018"	, kod_silnika: "	LEA	" },
			  ]
			},
    },
	"HAVAL": {
		"H6": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	H6	", moc: 	140	, pojemnosc: 	2000	, rok_produkcji: 	2021	, kod_silnika: "	GW4C20NT	" },
				{ label: "	H6	", moc: 	204	, pojemnosc: 	2000	, rok_produkcji: 	2023	, kod_silnika: "	GW4N20	" },
			  ]
			},
    },
	"Honda": {
		"Civic": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Civic	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	L15BA	" },
				{ label: "	Civic	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	L15BB	" },
			  ]
			},
		"Civic FK602": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Civic FK602	", moc: 	129	, pojemnosc: 	1000	, rok_produkcji: 	2020	, kod_silnika: "	P10A2 	" },
			  ]
			},
		"Civic X": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Civic X	", moc: 	126	, pojemnosc: 	1000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	P10A2 	" },
			  ]
			},
		"CR-V": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	CR-V	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2023"	, kod_silnika: "	L15B4	" },
				{ label: "	CR-V	", moc: 	193	, pojemnosc: 	1500	, rok_produkcji: 	"2016-2024"	, kod_silnika: "	L15BY	" },
				{ label: "	CR-V	", moc: 	173	, pojemnosc: 	1500	, rok_produkcji: 	"2017-2024"	, kod_silnika: "	L15BY	" },
				{ label: "	CR-V	", moc: 	186	, pojemnosc: 	2400	, rok_produkcji: 	"2015-2023"	, kod_silnika: "	K24W	" },
			  ]
			},
		"HR-V": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	HR-V	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2023"	, kod_silnika: "	L15B4	" },
				{ label: "	HR-V	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2023"	, kod_silnika: "	L15BY	" },
				{ label: "	HR-V	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	L15BY	" },
				{ label: "	HR-V	", moc: 	182	, pojemnosc: 	1500	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	L15BY	" },
			  ]
			},
		"Jazz": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Jazz	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"2017-2024"	, kod_silnika: "	L15B3	" },
			  ]
			},
		"Odyssey": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Odyssey	", moc: 	284	, pojemnosc: 	3500	, rok_produkcji: 	"2016-2020"	, kod_silnika: "	J35Y6	" },
			  ]
			},
		"Pilot": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Pilot	", moc: 	284	, pojemnosc: 	3500	, rok_produkcji: 	"2016-2020"	, kod_silnika: "	J35Y6	" },
			  ]
			},
    },
	"Hyundi": {
		"Genesis": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Genesis	", moc: 	301	, pojemnosc: 	3300	, rok_produkcji: 	"2008-2014"	, kod_silnika: "	G6DH	" },
			  ]
			},
		"Grandeur": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Grandeur	", moc: 	199	, pojemnosc: 	2500	, rok_produkcji: 	"2019-2022"	, kod_silnika: "	G4KN	" },
				{ label: "	Grandeur	", moc: 	296	, pojemnosc: 	3300	, rok_produkcji: 	"2011-2016"	, kod_silnika: "	G6DH	" },
				{ label: "	Grandeur	", moc: 	290	, pojemnosc: 	3300	, rok_produkcji: 	"2016-2022"	, kod_silnika: "	G6DM	" },
			  ]
			},
		"i10": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	i10	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	2020	, kod_silnika: "	G3LE	" },
			  ]
			},
		"i20": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	i20	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"2016-2017"	, kod_silnika: "	G3LC	" },
				{ label: "	i20	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	G3LC	" },
				{ label: "	i20	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	2020	, kod_silnika: "	G3LE	" },
				{ label: "	i20	", moc: 	204	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	G4FP	" },
			  ]
			},
		"i30": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	i30	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"2016-2017"	, kod_silnika: "	G3LC	" },
				{ label: "	i30	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	G3LC	" },
				{ label: "	i30	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	2020	, kod_silnika: "	G3LF	" },
				{ label: "	i30	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	G4LD	" },
				{ label: "	i30	", moc: 	135	, pojemnosc: 	1600	, rok_produkcji: 	"2011-2016"	, kod_silnika: "	G4FD	" },
			  ]
			},
		"i40": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	i40	", moc: 	135	, pojemnosc: 	1600	, rok_produkcji: 	"2012-2018"	, kod_silnika: "	G4FD	" },
			  ]
			},
		"Ioniq Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Ioniq Hybrid	", moc: 	141	, pojemnosc: 	1600	, rok_produkcji: 	"2016-2024"	, kod_silnika: "	G4LE	" },
				{ label: "	Ioniq Hybrid	", moc: 	105	, pojemnosc: 	1600	, rok_produkcji: 	"2016-2024"	, kod_silnika: "	G4LE	" },
			  ]
			},
		"ix35": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	ix35	", moc: 	135	, pojemnosc: 	1600	, rok_produkcji: 	"2010-2015"	, kod_silnika: "	G4FD	" },
				{ label: "	ix35	", moc: 	132	, pojemnosc: 	1600	, rok_produkcji: 	"2016-2018"	, kod_silnika: "	G4FD	" },
			  ]
			},
		"Kona": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Kona	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"2016-2017"	, kod_silnika: "	G3LC	" },
				{ label: "	Kona	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	G3LC	" },
				{ label: "	Kona	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	2020	, kod_silnika: "	G3LE	" },
				{ label: "	Kona	", moc: 	177	, pojemnosc: 	1600	, rok_produkcji: 	"2017-2020"	, kod_silnika: "	G4FJ	" },
				{ label: "	Kona	", moc: 	199	, pojemnosc: 	1600	, rok_produkcji: 	2020	, kod_silnika: "	G4FP	" },
			  ]
			},
		"Kona Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Kona Hybrid	", moc: 	141	, pojemnosc: 	1600	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	G4LE	" },
				{ label: "	Kona Hybrid	", moc: 	105	, pojemnosc: 	1600	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	G4LE	" },
			  ]
			},
		"Santa Cruz": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Santa Cruz	", moc: 	194	, pojemnosc: 	2500	, rok_produkcji: 	2021	, kod_silnika: "	G4KN	" },
			  ]
			},
		"Santa Fe": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Santa Fe	", moc: 	230	, pojemnosc: 	1600	, rok_produkcji: 	"2021-2022"	, kod_silnika: "	G4FP	" },
				{ label: "	Santa Fe	", moc: 	265	, pojemnosc: 	1600	, rok_produkcji: 	"2021-2022"	, kod_silnika: "	G4FP	" },
				{ label: "	Santa Fe	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	2020	, kod_silnika: "	G4FP	" },
				{ label: "	Santa Fe	", moc: 	265	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	G4FT	" },
				{ label: "	Santa Fe	", moc: 	230	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	G4FT	" },
				{ label: "	Santa Fe	", moc: 	188	, pojemnosc: 	2400	, rok_produkcji: 	"2015-2023"	, kod_silnika: "	G4KJ	" },
				{ label: "	Santa Fe	", moc: 	192	, pojemnosc: 	2400	, rok_produkcji: 	"2012-2023"	, kod_silnika: "	G4KJ	" },
				{ label: "	Santa Fe	", moc: 	185	, pojemnosc: 	2400	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	G4KJ	" },
				{ label: "	Santa Fe	", moc: 	194	, pojemnosc: 	2500	, rok_produkcji: 	2020	, kod_silnika: "	G4KN	" },
				{ label: "	Santa Fe	", moc: 	294	, pojemnosc: 	3300	, rok_produkcji: 	"2012-2018"	, kod_silnika: "	G6DH	" },
			  ]
			},
		"Sonata": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Sonata	", moc: 	199	, pojemnosc: 	2500	, rok_produkcji: 	2019	, kod_silnika: "	G4KN	" },
			  ]
			},
		"Tucson": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Tucson	", moc: 	132	, pojemnosc: 	1600	, rok_produkcji: 	"2015-2018"	, kod_silnika: "	G4FD	" },
				{ label: "	Tucson	", moc: 	132	, pojemnosc: 	1600	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	G4FD	" },
				{ label: "	Tucson	", moc: 	177	, pojemnosc: 	1600	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	G4FJ	" },
				{ label: "	Tucson	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"2021-2022"	, kod_silnika: "	G4FP	" },
				{ label: "	Tucson	", moc: 	265	, pojemnosc: 	1600	, rok_produkcji: 	"2021-2022"	, kod_silnika: "	G4FP	" },
				{ label: "	Tucson	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	2021	, kod_silnika: "	G4FP	" },
				{ label: "	Tucson	", moc: 	230	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	G4FT	" },
				{ label: "	Tucson	", moc: 	265	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	G4FT	" },
				{ label: "	Tucson	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	2021	, kod_silnika: "	G4FT	" },
				{ label: "	Tucson	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	G4FU	" },
				{ label: "	Tucson	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	G4FU	" },
				{ label: "	Tucson	", moc: 	184	, pojemnosc: 	2400	, rok_produkcji: 	"2019-2020"	, kod_silnika: "	G4KJ	" },
				{ label: "	Tucson	", moc: 	194	, pojemnosc: 	2500	, rok_produkcji: 	2020	, kod_silnika: "	G4KN	" },
			  ]
			},
		"Tucson Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Tucson Hybrid	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"2020-2022"	, kod_silnika: "	G4FT	" },
			  ]
			},
		"Veloster": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Veloster	", moc: 	140	, pojemnosc: 	1600	, rok_produkcji: 	"2011-2017"	, kod_silnika: "	G4FD	" },
			  ]
			},
    },
	"INFINITI": {
		"M56": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	M56	", moc: 	426	, pojemnosc: 	5600	, rok_produkcji: 	"2011-2020"	, kod_silnika: "	VK56VD	" },
			  ]
			},
		"Q70": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Q70	", moc: 	422	, pojemnosc: 	5600	, rok_produkcji: 	"2014-2020"	, kod_silnika: "	VK56VD	" },
			  ]
			},
		"QX80": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	QX80	", moc: 	405	, pojemnosc: 	5600	, rok_produkcji: 	"2011-2020"	, kod_silnika: "	VK56VD	" },
			  ]
			},
    },
	"JAC": {
		"JS8": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	JS8	", moc: 174, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "HFC4GC1.6E" },
			  ]
			},
    },
	"JAGUAR": {
		"E-Pace": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	E-Pace	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"2018-2023"	, kod_silnika: "	PT204	" },
				{ label: "	E-Pace	", moc: 	249	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	PT204	" },
				{ label: "	E-Pace	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	PT204	" },
			  ]
			},
		"F-Pace": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	F-Pace	", moc: 	404	, pojemnosc: 	2000	, rok_produkcji: 	"2020-2023"	, kod_silnika: "	PT204	" },
				{ label: "	F-Pace	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	PT204	" },
				{ label: "	F-Pace	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	PT204	" },
			  ]
			},
		"F-Type": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	F-Type	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	PT204	" },
			  ]
			},
		"XE": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	XE	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	204PT	" },
				{ label: "	XE	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	204PT	" },
				{ label: "	XE	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"2015-2024"	, kod_silnika: "	204PT	" },
				{ label: "	XE	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	PT204	" },
				{ label: "	XE	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	PT204	" },
				{ label: "	XE	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	PT204	" },
			  ]
			},
		"XF": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	XF	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"2012-2024"	, kod_silnika: "	204PT	" },
				{ label: "	XF	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	PT204	" },
				{ label: "	XF	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	PT204	" },
				{ label: "	XF	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"2017-2023"	, kod_silnika: "	PT204	" },
			  ]
			},
		"XJ": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	XJ	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"2012-2024"	, kod_silnika: "	204PT	" },
			  ]
			},
    },
	"JEEP": {
		"Avenger": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Avenger	", moc: 	101	, pojemnosc: 	1200	, rok_produkcji: 	2023	, kod_silnika: "	HN05	" },
			  ]
			},
		"Avenger Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Avenger Hybrid	", moc: 	101	, pojemnosc: 	1200	, rok_produkcji: 	2024	, kod_silnika: "	HN09	" },
			  ]
			},
		"Cherokee": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Cherokee	", moc: 	272	, pojemnosc: 	2000	, rok_produkcji: 	2019	, kod_silnika: "	EC1-N	" },
			  ]
			},
		"Cherokee Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Cherokee Hybrid	", moc: 	272	, pojemnosc: 	2000	, rok_produkcji: 	2019	, kod_silnika: "	EC1 / N	" },
			  ]
			},
		"Compass": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Compass	", moc: 	150	, pojemnosc: 	1300	, rok_produkcji: 	2020	, kod_silnika: "	46351268	" },
				{ label: "	Compass	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	2020	, kod_silnika: "	55282328	" },
				{ label: "	Compass	", moc: 	150	, pojemnosc: 	1300	, rok_produkcji: 	2020	, kod_silnika: "	55282328	" },
				{ label: "	Compass	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	2020	, kod_silnika: "	55282328	" },
			  ]
			},
		"Compass 4xe Plug-In Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Compass 4xe Plug-In Hybrid	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	46337540	" },
				{ label: "	Compass 4xe Plug-In Hybrid	", moc: 	180	, pojemnosc: 	1300	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	46337540	" },
				{ label: "	Compass 4xe Plug-In Hybrid	", moc: 	190	, pojemnosc: 	1300	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	46337540	" },
			  ]
			},
		"Compass Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Compass Hybrid	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	2022	, kod_silnika: "	46347812	" },
			  ]
			},
		"Renegade": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Renegade	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	55282151	" },
				{ label: "	Renegade	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	46351268	" },
				{ label: "	Renegade	", moc: 	150	, pojemnosc: 	1300	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	46351268	" },
				{ label: "	Renegade	", moc: 	150	, pojemnosc: 	1300	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	55282328	" },
			  ]
			},
		"Renegade 4xe Plug-In Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Renegade 4xe Plug-In Hybrid	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	46337540	" },
				{ label: "	Renegade 4xe Plug-In Hybrid	", moc: 	180	, pojemnosc: 	1300	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	46337540	" },
				{ label: "	Renegade 4xe Plug-In Hybrid	", moc: 	190	, pojemnosc: 	1300	, rok_produkcji: 	"2022-2024"	, kod_silnika: "	46337540	" },
			  ]
			},
		"Renegade Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Renegade Hybrid	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	2022	, kod_silnika: "	46347812	" },
			  ]
			},
		"Wrangler": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Wrangler	", moc: 	272	, pojemnosc: 	2000	, rok_produkcji: 	2019	, kod_silnika: "	EC1-N	" },
			  ]
			},
		"Wrangler Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Wrangler Hybrid	", moc: 	272	, pojemnosc: 	2000	, rok_produkcji: 	2019	, kod_silnika: "	EC1 / N	" },
			  ]
			},
    },
	"Kia": {
		"Cadenza": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Cadenza	", moc: 	294	, pojemnosc: 	3300	, rok_produkcji: 	"2011-2016"	, kod_silnika: "	G6DH	" },
				{ label: "	Cadenza	", moc: 	284	, pojemnosc: 	3300	, rok_produkcji: 	"2016-2021"	, kod_silnika: "	G6DM	" },
			  ]
			},
		"Carens IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Carens IV	", moc: 	135	, pojemnosc: 	1600	, rok_produkcji: 	"2013-2016"	, kod_silnika: "	G4FD	" },
			  ]
			},
		"Carnival": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Carnival	", moc: 	282	, pojemnosc: 	3300	, rok_produkcji: 	"2019-2023"	, kod_silnika: "	G6DH	" },
				{ label: "	Carnival	", moc: 	280	, pojemnosc: 	3300	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	G6DM	" },
			  ]
			},
		"Ceed": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Ceed	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"2015-2017"	, kod_silnika: "	G3LC	" },
				{ label: "	Ceed	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	G3LC	" },
				{ label: "	Ceed	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"2018-2020"	, kod_silnika: "	G4LD	" },
				{ label: "	Ceed	", moc: 	160	, pojemnosc: 	1500	, rok_produkcji: 	"2022-2023"	, kod_silnika: "	G4LH	" },
				{ label: "	Ceed	", moc: 	135	, pojemnosc: 	1600	, rok_produkcji: 	"2010-2015"	, kod_silnika: "	G4FD	" },
			  ]
			},
		"Ceed Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Ceed Hybrid	", moc: 	141	, pojemnosc: 	1600	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	G4LE	" },
				{ label: "	Ceed Hybrid	", moc: 	105	, pojemnosc: 	1600	, rok_produkcji: 	"2019-2024"	, kod_silnika: "	G4LE	" },
			  ]
			},
		"K5": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	K5	", moc: 	199	, pojemnosc: 	2500	, rok_produkcji: 	2019	, kod_silnika: "	G4KN	" },
			  ]
			},
		"K8": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	K8	", moc: 	199	, pojemnosc: 	2500	, rok_produkcji: 	2021	, kod_silnika: "	G4KN	" },
			  ]
			},
		"K9 II": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	K9 II	", moc: 	249	, pojemnosc: 	3300	, rok_produkcji: 	"2019-2023"	, kod_silnika: "	G6DM	" },
			  ]
			},
		"Kona Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Kona Hybrid	", moc: 	105	, pojemnosc: 	1600	, rok_produkcji: 	2023	, kod_silnika: "	G4LL	" },
				{ label: "	Kona Hybrid	", moc: 	141	, pojemnosc: 	1600	, rok_produkcji: 	2023	, kod_silnika: "	G4LL	" },
			  ]
			},
		"Niro Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Niro Hybrid	", moc: 	141	, pojemnosc: 	1600	, rok_produkcji: 	"2016-2022"	, kod_silnika: "	G4LE	" },
				{ label: "	Niro Hybrid	", moc: 	146	, pojemnosc: 	1600	, rok_produkcji: 	"2016-2022"	, kod_silnika: "	G4LE	" },
				{ label: "	Niro Hybrid	", moc: 	105	, pojemnosc: 	1600	, rok_produkcji: 	"2016-2022"	, kod_silnika: "	G4LE	" },
				{ label: "	Niro Hybrid	", moc: 	105	, pojemnosc: 	1600	, rok_produkcji: 	2022	, kod_silnika: "	G4LL	" },
				{ label: "	Niro Hybrid	", moc: 	141	, pojemnosc: 	1600	, rok_produkcji: 	2022	, kod_silnika: "	G4LL	" },
				{ label: "	Niro Hybrid	", moc: 	182	, pojemnosc: 	1600	, rok_produkcji: 	2022	, kod_silnika: "	G4LL	" },
			  ]
			},
		"Optima": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Optima	", moc: 	188	, pojemnosc: 	2400	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	G4KJ	" },
			  ]
			},
		"ProCeed": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	ProCeed	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	G3LC	" },
				{ label: "	ProCeed	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	G4LD	" },
				{ label: "	ProCeed	", moc: 	160	, pojemnosc: 	1500	, rok_produkcji: 	"	2022-2023	"	, kod_silnika: "	G4LH	" },
				{ label: "	ProCeed	", moc: 	135	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	G4FD	" },
			  ]
			},
		"Rio": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Rio	", moc: 	135	, pojemnosc: 	1000	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	G3LC	" },
				{ label: "	Rio	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	G3LC	" },
			  ]
			},
		"Rio IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Rio IV	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2021	"	, kod_silnika: "	G3LE	" },
				{ label: "	Rio IV	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2021	"	, kod_silnika: "	G3LF	" },
			  ]
			},
		"Sedona": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Sedona	", moc: 	301	, pojemnosc: 	3300	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	G6DH	" },
				{ label: "	Sedona	", moc: 	294	, pojemnosc: 	3300	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	G6DM	" },
			  ]
			},
		"Sorento": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Sorento	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2020	"	, kod_silnika: "	G4FT	" },
				{ label: "	Sorento	", moc: 	230	, pojemnosc: 	1600	, rok_produkcji: 	"	2020-2022	"	, kod_silnika: "	G4FT	" },
				{ label: "	Sorento	", moc: 	265	, pojemnosc: 	1600	, rok_produkcji: 	"	2020-2022	"	, kod_silnika: "	G4FT	" },
				{ label: "	Sorento	", moc: 	188	, pojemnosc: 	2400	, rok_produkcji: 	"	2015-2023	"	, kod_silnika: "	G4KJ	" },
				{ label: "	Sorento	", moc: 	192	, pojemnosc: 	2400	, rok_produkcji: 	"	2012-2015	"	, kod_silnika: "	G4KJ	" },
				{ label: "	Sorento	", moc: 	199	, pojemnosc: 	2500	, rok_produkcji: 	"	2020	"	, kod_silnika: "	G4KN	" },
				{ label: "	Sorento	", moc: 	290	, pojemnosc: 	3300	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	G6DH	" },
			  ]
			},
		"Soul": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Soul	", moc: 	140	, pojemnosc: 	1600	, rok_produkcji: 	"	2011-2018	"	, kod_silnika: "	G4FD	" },
			  ]
			},
		"Sportage": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Sportage	", moc: 	132	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	G4FD	" },
				{ label: "	Sportage	", moc: 	136	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2018	"	, kod_silnika: "	G4FD	" },
				{ label: "	Sportage	", moc: 	132	, pojemnosc: 	1600	, rok_produkcji: 	"	2016-2018	"	, kod_silnika: "	G4FD	" },
				{ label: "	Sportage	", moc: 	177	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	G4FJ	" },
				{ label: "	Sportage	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2021-2022	"	, kod_silnika: "	G4FP	" },
				{ label: "	Sportage	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"	2021-2022	"	, kod_silnika: "	G4FP	" },
				{ label: "	Sportage	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2021-2022	"	, kod_silnika: "	G4FT	" },
				{ label: "	Sportage	", moc: 	230	, pojemnosc: 	1600	, rok_produkcji: 	"	2021-2022	"	, kod_silnika: "	G4FT	" },
				{ label: "	Sportage	", moc: 	265	, pojemnosc: 	1600	, rok_produkcji: 	"	2021-2022	"	, kod_silnika: "	G4FT	" },
				{ label: "	Sportage	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2021-2022	"	, kod_silnika: "	G4FU	" },
				{ label: "	Sportage	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"	2021-2022	"	, kod_silnika: "	G4FU	" },
				{ label: "	Sportage	", moc: 	184	, pojemnosc: 	2400	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	G4KJ	" },
			  ]
			},
		"Stonic": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Stonic	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	G3LC	" },
				{ label: "	Stonic	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	G3LE	" },
				{ label: "	Stonic	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"	2020-2022	"	, kod_silnika: "	G3LF	" },
			  ]
			},
		"XCeed": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	XCeed	", moc: 	120	, pojemnosc: 	1000	, rok_produkcji: 	"	2019-2020	"	, kod_silnika: "	G3LC	" },
				{ label: "	XCeed	", moc: 	101	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	G3LE	" },
				{ label: "	XCeed	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	G4LD	" },
				{ label: "	XCeed	", moc: 	160	, pojemnosc: 	1500	, rok_produkcji: 	"	2022-2023	"	, kod_silnika: "	G4LH	" },
			  ]
			},
		"XCeed Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Xceed Hybrid	", moc: 	141	, pojemnosc: 	1600	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	G4LE	" },
				{ label: "	Xceed Hybrid	", moc: 	105	, pojemnosc: 	1600	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	G4LE	" },
			  ]
			},
    },
	"LAND ROVER": {
		"Defender": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Defender	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	PT204	" },
				{ label: "	Defender	", moc: 	404	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	PT204	" },
			  ]
			},
		"Discovery": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Discovery 	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	204PT	" },
				{ label: "	Discovery 	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	PT204	" },
			  ]
			},
		"Discovery Sport": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Discovery Sport	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	PT204	" },
				{ label: "	Discovery Sport	", moc: 	290	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	PT204	" },
				{ label: "	Discovery Sport	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	PT204	" },
				{ label: "	Discovery Sport	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	PT204	" },
			  ]
			},
		"Freelander": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Freelander 	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"	2011-2014	"	, kod_silnika: "	204PT	" },
			  ]
			},
		"Range Rover": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Range Rover	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"	2011-2019	"	, kod_silnika: "	204PT	" },
				{ label: "	Range Rover	", moc: 	404	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	PT204	" },
			  ]
			},
		"Range Rover Evoque": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Range Rover Evoque	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	PT204	" },
				{ label: "	Range Rover Evoque	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	PT204	" },
				{ label: "	Range Rover Evoque	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	PT204	" },
				{ label: "	Range Rover Evoque	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2019	"	, kod_silnika: "	PT204	" },
				{ label: "	Range Rover Evoque	", moc: 	290	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2019	"	, kod_silnika: "	PT204	" },
			  ]
			},
		"Range Rover Sport": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Range Rover Sport	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	PT204	" },
				{ label: "	Range Rover Sport	", moc: 	404	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	PT204	" },
			  ]
			},
		"Range Rover Velar": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Range Rover Velar	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	PT204	" },
				{ label: "	Range Rover Velar	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	PT204	" },
				{ label: "	Range Rover Velar	", moc: 	404	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	PT204	" },
			  ]
			},
    },
	"LEXUS": {
		"ES": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	ES	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	6AR-FSE	" },
				{ label: "	ES	", moc: 	200	, pojemnosc: 	2500	, rok_produkcji: 	"	2018-2022	"	, kod_silnika: "	A25A-FKS	" },
				{ label: "	ES	", moc: 	249	, pojemnosc: 	3500	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	2GR-FKS	" },
			  ]
			},
		"ES-300h": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	ES-300h	", moc: 	178	, pojemnosc: 	2500	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	A25A-FXS	" },
			  ]
			},
		"GS 300H Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	GS 300H Hybrid	", moc: 	181	, pojemnosc: 	2500	, rok_produkcji: 	"	2013-2024	"	, kod_silnika: "	2AR-FSE	" },
			  ]
			},
		"GS 450H Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	GS 450H Hybrid	", moc: 	345	, pojemnosc: 	3500	, rok_produkcji: 	"	2012-2018	"	, kod_silnika: "	2GR-FXE	" },
			  ]
			},
		"IS 300H Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	IS 300H Hybrid	", moc: 	181	, pojemnosc: 	2500	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	2AR-FSE	" },
				{ label: "	IS 300H Hybrid	", moc: 	223	, pojemnosc: 	2500	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	2AR-FSE	" },
			  ]
			},
		"RC 300H Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	RC 300H Hybrid	", moc: 	181	, pojemnosc: 	2500	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	2AR-FSE	" },
			  ]
			},
		"RX": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	RX	", moc: 	299	, pojemnosc: 	3500	, rok_produkcji: 	"	2012-2015	"	, kod_silnika: "	2GR-FXE	" },
				{ label: "	RX	", moc: 	277	, pojemnosc: 	3500	, rok_produkcji: 	"	2008-2015	"	, kod_silnika: "	2GR-FXE	" },
				{ label: "	RX	", moc: 	280	, pojemnosc: 	3500	, rok_produkcji: 	"	2008-2015	"	, kod_silnika: "	2GR-FXE	" },
				{ label: "	RX	", moc: 	313	, pojemnosc: 	3500	, rok_produkcji: 	"	2015-2023	"	, kod_silnika: "	2GR-FXS	" },
			  ]
			},
		"RX 350": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	RX 350	", moc: 	299	, pojemnosc: 	3500	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	2GR-FKS	" },
			  ]
			},
		"UX": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	UX	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2022	"	, kod_silnika: "	M20A-FKS	" },
				{ label: "	UX	", moc: 	171	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2022	"	, kod_silnika: "	M20A-FKS	" },
				{ label: "	UX	", moc: 	146	, pojemnosc: 	2000	, rok_produkcji: 	"	2018	"	, kod_silnika: "	M20A-FKS	" },
				{ label: "	UX	", moc: 	152	, pojemnosc: 	2000	, rok_produkcji: 	"	2018	"	, kod_silnika: "	M20A-FKS	" },
			  ]
			},
    },
	"MAHINDRA": {
		"Thar": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Thar	", moc: 	152	, pojemnosc: 	2000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	LX	" },
			  ]
			},
    },
	"MAZDA": {
		"2": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	2	", moc: 	75	, pojemnosc: 	1500	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	P5X0	" },
				{ label: "	2	", moc: 	90	, pojemnosc: 	1500	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	P5X0	" },
				{ label: "	2	", moc: 	116	, pojemnosc: 	1500	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	P5X0	" },
				{ label: "	2	", moc: 	75	, pojemnosc: 	1500	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	P5X2	" },
				{ label: "	2	", moc: 	90	, pojemnosc: 	1500	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	P5X2	" },
				{ label: "	2	", moc: 	116	, pojemnosc: 	1500	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	P5X2	" },
				{ label: "	2	", moc: 	75	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	P5XC	" },
				{ label: "	2	", moc: 	90	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	P5XC	" },
			  ]
			},
		"3": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	3	", moc: 	101	, pojemnosc: 	1500	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	P5-VPS	" },
				{ label: "	3	", moc: 	120	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	PE-VPS	" },
				{ label: "	3	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	PE-VPS	" },
				{ label: "	3	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2019	"	, kod_silnika: "	PEX2	" },
				{ label: "	3	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2019	"	, kod_silnika: "	PEXL	" },
				{ label: "	3	", moc: 	120	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2019	"	, kod_silnika: "	PEXL	" },
				{ label: "	3	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	PEXN	" },
				{ label: "	3	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PEXP	" },
				{ label: "	3	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2019	"	, kod_silnika: "	PEY5	" },
				{ label: "	3	", moc: 	120	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2019	"	, kod_silnika: "	PEY5	" },
				{ label: "	3	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2019	"	, kod_silnika: "	PEY7	" },
				{ label: "	3	", moc: 	120	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2019	"	, kod_silnika: "	PEY7	" },
				{ label: "	3	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	PEY7	" },
			  ]
			},
		"6": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	6	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2012-2019	"	, kod_silnika: "	PE-VPS	" },
				{ label: "	6	", moc: 	146	, pojemnosc: 	2000	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PE-VPS	" },
				{ label: "	6	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PE-VPS Skyactiv-G	" },
				{ label: "	6	", moc: 	146	, pojemnosc: 	2000	, rok_produkcji: 	"	2013	"	, kod_silnika: "	PEXB	" },
				{ label: "	6	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2013	"	, kod_silnika: "	PEXB	" },
				{ label: "	6	", moc: 	146	, pojemnosc: 	2000	, rok_produkcji: 	"	2013	"	, kod_silnika: "	PEXL	" },
				{ label: "	6	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2013	"	, kod_silnika: "	PEXL	" },
				{ label: "	6	", moc: 	146	, pojemnosc: 	2000	, rok_produkcji: 	"	2013	"	, kod_silnika: "	PEY5	" },
				{ label: "	6	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2013	"	, kod_silnika: "	PEY5	" },
				{ label: "	6	", moc: 	146	, pojemnosc: 	2000	, rok_produkcji: 	"	2013	"	, kod_silnika: "	PEY7	" },
				{ label: "	6	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2013	"	, kod_silnika: "	PEY7	" },
				{ label: "	6	", moc: 	190	, pojemnosc: 	2500	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PY-RPR	" },
				{ label: "	6	", moc: 	194	, pojemnosc: 	2500	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PY-VPS Skyactiv-G	" },
				{ label: "	6	", moc: 	192	, pojemnosc: 	2500	, rok_produkcji: 	"	2013	"	, kod_silnika: "	PY-Y8	" },
				{ label: "	6	", moc: 	192	, pojemnosc: 	2500	, rok_produkcji: 	"	2013	"	, kod_silnika: "	PY-ZA	" },
				{ label: "	6	", moc: 	192	, pojemnosc: 	2500	, rok_produkcji: 	"	2013	"	, kod_silnika: "	PYY1	" },
				{ label: "	6	", moc: 	194	, pojemnosc: 	2500	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PYZB	" },
				{ label: "	6	", moc: 	190	, pojemnosc: 	2500	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PYZC	" },
				{ label: "	6	", moc: 	192	, pojemnosc: 	2500	, rok_produkcji: 	"	2012-2020	"	, kod_silnika: "	SKYACTIV-G PY-VPS	" },
			  ]
			},
		"CX-3": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	CX-3	", moc: 	121	, pojemnosc: 	2000	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PE-VPS	" },
				{ label: "	CX-3	", moc: 	120	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2018	"	, kod_silnika: "	PE-VPS	" },
				{ label: "	CX-3	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2015	"	, kod_silnika: "	PEX3	" },
				{ label: "	CX-3	", moc: 	120	, pojemnosc: 	2000	, rok_produkcji: 	"	2015	"	, kod_silnika: "	PEX3	" },
				{ label: "	CX-3	", moc: 	121	, pojemnosc: 	2000	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PEXB	" },
				{ label: "	CX-3	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2015	"	, kod_silnika: "	PEXB	" },
				{ label: "	CX-3	", moc: 	120	, pojemnosc: 	2000	, rok_produkcji: 	"	2015	"	, kod_silnika: "	PEXB	" },
				{ label: "	CX-3	", moc: 	121	, pojemnosc: 	2000	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PEXT	" },
				{ label: "	CX-3	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2015	"	, kod_silnika: "	PEXT	" },
			  ]
			},
		"CX-30": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	CX-30	", moc: 	122	, pojemnosc: 	2000	, rok_produkcji: 	"	2019	"	, kod_silnika: "	PEXN	" },
				{ label: "	CX-30	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	PEXW	" },
			  ]
			},
		"CX-5": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	CX-5	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2011	"	, kod_silnika: "	PE-VPS	" },
				{ label: "	CX-5	", moc: 	160	, pojemnosc: 	2000	, rok_produkcji: 	"	2016	"	, kod_silnika: "	PE-VPS	" },
				{ label: "	CX-5	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2016	"	, kod_silnika: "	PE-VPS	" },
				{ label: "	CX-5	", moc: 	160	, pojemnosc: 	2000	, rok_produkcji: 	"	2017	"	, kod_silnika: "	PEX3	" },
				{ label: "	CX-5	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2017	"	, kod_silnika: "	PEX3	" },
				{ label: "	CX-5	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PEXB	" },
				{ label: "	CX-5	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PEXB	" },
				{ label: "	CX-5	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2017	"	, kod_silnika: "	PEXB	" },
				{ label: "	CX-5	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PEXP	" },
				{ label: "	CX-5	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"	2018	"	, kod_silnika: "	PEXP	" },
				{ label: "	CX-5	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2017	"	, kod_silnika: "	PEXP	" },
				{ label: "	CX-5	", moc: 	156	, pojemnosc: 	2000	, rok_produkcji: 	"	2012-2017	"	, kod_silnika: "	PEY5	" },
				{ label: "	CX-5	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2012-2017	"	, kod_silnika: "	PEY5	" },
				{ label: "	CX-5	", moc: 	160	, pojemnosc: 	2000	, rok_produkcji: 	"	2011-2017	"	, kod_silnika: "	PEY6	" },
				{ label: "	CX-5	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2011-2017	"	, kod_silnika: "	PEY6	" },
				{ label: "	CX-5	", moc: 	156	, pojemnosc: 	2000	, rok_produkcji: 	"	2012-2017	"	, kod_silnika: "	PEY7	" },
				{ label: "	CX-5	", moc: 	160	, pojemnosc: 	2000	, rok_produkcji: 	"	2011-2017	"	, kod_silnika: "	PEY7	" },
				{ label: "	CX-5	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2011-2017	"	, kod_silnika: "	PEY7	" },
				{ label: "	CX-5	", moc: 	165	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2018	"	, kod_silnika: "	SKYACTIV-G	" },
				{ label: "	CX-5	", moc: 	194	, pojemnosc: 	2500	, rok_produkcji: 	"	2017	"	, kod_silnika: "	PY-VPS	" },
				{ label: "	CX-5	", moc: 	194	, pojemnosc: 	2500	, rok_produkcji: 	"	2017	"	, kod_silnika: "	PY-Y8	" },
				{ label: "	CX-5	", moc: 	194	, pojemnosc: 	2500	, rok_produkcji: 	"	2017	"	, kod_silnika: "	PY-Z8	" },
				{ label: "	CX-5	", moc: 	192	, pojemnosc: 	2500	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	PYY1	" },
				{ label: "	CX-5	", moc: 	194	, pojemnosc: 	2500	, rok_produkcji: 	"	2017	"	, kod_silnika: "	PYZC	" },
				{ label: "	CX-5	", moc: 	194	, pojemnosc: 	2500	, rok_produkcji: 	"	2015-2018	"	, kod_silnika: "	SKYACTIV-G PY-VPS	" },
			  ]
			},
		"CX-9": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	CX-9	", moc: 	194	, pojemnosc: 	2500	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	PY-VPS	" },
			  ]
			},
		"MX-5": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	MX-5	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"	2015-2024	"	, kod_silnika: "	P5-VPR	" },
				{ label: "	MX-5	", moc: 	132	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	P5X1	" },
			  ]
			},
    },
	"MERCEDES": {
		"Citan": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Citan	", moc: 	114	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	M200.711	" },
				{ label: "	Citan	", moc: 	114	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	M200.711	" },
				{ label: "	Citan	", moc: 	102	, pojemnosc: 	1300	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	M200.731	" },
				{ label: "	Citan	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	M200.731	" },
			]
			},
		"CLA": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	CLA	", moc: 	136	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	M282.914	" },
				{ label: "	CLA	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	M282.914	" },
				{ label: "	CLA 	", moc: 	136	, pojemnosc: 	1300	, rok_produkcji: 	"	2023	"	, kod_silnika: "	M282.814	" },
				{ label: "	CLA 	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2023	"	, kod_silnika: "	M282.814	" },
				{ label: "	CLA 	", moc: 	218	, pojemnosc: 	1300	, rok_produkcji: 	"	2023	"	, kod_silnika: "	M282.814	" },
			]
			},
		"CLA SW Shooting Brake": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	CLA SW Shooting Brake	", moc: 	136	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	M282.914	" },
				{ label: "	CLA SW Shooting Brake	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	M282.914	" },
			]
			},
		"Classe A": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Classe A	", moc: 	136	, pojemnosc: 	1300	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	M282.814	" },
				{ label: "	Classe A	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	M282.814	" },
				{ label: "	Classe A	", moc: 	218	, pojemnosc: 	1300	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	M282.814	" },
				{ label: "	Classe A	", moc: 	136	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	M282.914	" },
				{ label: "	Classe A	", moc: 	150	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	M282.914	" },
				{ label: "	Classe A	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	M282.914	" },
				{ label: "	Classe A	", moc: 	109	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	M282.914	" },
				{ label: "	Classe A	", moc: 	136	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2021	"	, kod_silnika: "	M282.914	" },
			]
			},
		"Classe A Sedan": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Classe A Sedan	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	M282.914	" },
				{ label: "	Classe A Sedan	", moc: 	136	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	M282.914	" },
			]
			},
		"Classe B": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Classe B	", moc: 	136	, pojemnosc: 	1300	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	M282.814	" },
				{ label: "	Classe B	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	M282.814	" },
				{ label: "	Classe B	", moc: 	218	, pojemnosc: 	1300	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	M282.814	" },
				{ label: "	Classe B	", moc: 	136	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	M282.914	" },
				{ label: "	Classe B	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	M282.914	" },
				{ label: "	Classe B	", moc: 	109	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	M282.914	" },
			]
			},
		"Classe C": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Classe C	", moc: 	156	, pojemnosc: 	1800	, rok_produkcji: 	"	2007-2022	"	, kod_silnika: "	M27180020 	" },
				{ label: "	Classe C	", moc: 	184	, pojemnosc: 	1800	, rok_produkcji: 	"	2007-2022	"	, kod_silnika: "	M27180020 	" },
				{ label: "	Classe C	", moc: 	204	, pojemnosc: 	1800	, rok_produkcji: 	"	2007-2022	"	, kod_silnika: "	M27180060 	" },
				{ label: "	Classe C	", moc: 	184	, pojemnosc: 	1800	, rok_produkcji: 	"	2007-2022	"	, kod_silnika: "	M27180060 	" },
			]
			},
		"Classe E": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Classe E	", moc: 	156	, pojemnosc: 	1800	, rok_produkcji: 	"	2009-2020	"	, kod_silnika: "	M27180020 	" },
				{ label: "	Classe E	", moc: 	184	, pojemnosc: 	1800	, rok_produkcji: 	"	2009-2016	"	, kod_silnika: "	M27180020 	" },
				{ label: "	Classe E	", moc: 	184	, pojemnosc: 	1800	, rok_produkcji: 	"	2009-2016	"	, kod_silnika: "	M27180060 	" },
				{ label: "	Classe E	", moc: 	204	, pojemnosc: 	1800	, rok_produkcji: 	"	2009-2016	"	, kod_silnika: "	M27180060 	" },
			]
			},
		"Classe T": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Classe T	", moc: 	102	, pojemnosc: 	1300	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	M200.731	" },
				{ label: "	Classe T	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	M200.731	" },
			]
			},
		"GLA": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	GLA	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2021	"	, kod_silnika: "	M282.914	" },
				{ label: "	GLA 	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2023	"	, kod_silnika: "	M282.814	" },
				{ label: "	GLA 	", moc: 	218	, pojemnosc: 	1300	, rok_produkcji: 	"	2023	"	, kod_silnika: "	M282.814	" },
			]
			},
		"GLB": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	GLB	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	M282.914	" },
				{ label: "	GLB 	", moc: 	136	, pojemnosc: 	1300	, rok_produkcji: 	"	2023	"	, kod_silnika: "	M282.814	" },
				{ label: "	GLB 	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2023	"	, kod_silnika: "	M282.814	" },
			]
			},
		"SLK": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	SLK	", moc: 	184	, pojemnosc: 	1800	, rok_produkcji: 	"	2011-2022	"	, kod_silnika: "	M27180060 	" },
				{ label: "	SLK	", moc: 	204	, pojemnosc: 	1800	, rok_produkcji: 	"	2011-2022	"	, kod_silnika: "	M27180060 	" },
				{ label: "	SLK	", moc: 	184	, pojemnosc: 	1800	, rok_produkcji: 	"	2011-2022	"	, kod_silnika: "	M27180061	" },
				{ label: "	SLK	", moc: 	204	, pojemnosc: 	1800	, rok_produkcji: 	"	2011-2022	"	, kod_silnika: "	M27180061	" },
			]
			},
    },
	"MG": {
		"HS": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	HS	", moc: 	162	, pojemnosc: 	1500	, rok_produkcji: 	"	2022	"	, kod_silnika: "	15E4E	" },
			]
			},
		"ZS": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	ZS	", moc: 	112	, pojemnosc: 	1000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	10E4E	" },
				{ label: "	ZS	", moc: 	162	, pojemnosc: 	1500	, rok_produkcji: 	"	2022	"	, kod_silnika: "	15E4E	" },
			]
			},
    },
	"MINI": {
		"Cooper S": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Cooper S	", moc: 	122	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2017	"	, kod_silnika: "	N18B16A	" },
				{ label: "	Cooper S	", moc: 	163	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2017	"	, kod_silnika: "	N18B16A	" },
				{ label: "	Cooper S	", moc: 	184	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2017	"	, kod_silnika: "	N18B16A	" },
				{ label: "	Cooper S	", moc: 	190	, pojemnosc: 	1600	, rok_produkcji: 	"	2014-2017	"	, kod_silnika: "	N18B16A	" },
				{ label: "	Cooper S	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2016	"	, kod_silnika: "	N18B16A	" },
			]
			},
		"Countryman": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Countryman	", moc: 	122	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2017	"	, kod_silnika: "	N18B16A	" },
				{ label: "	Countryman	", moc: 	163	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2017	"	, kod_silnika: "	N18B16A	" },
				{ label: "	Countryman	", moc: 	184	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2017	"	, kod_silnika: "	N18B16A	" },
				{ label: "	Countryman	", moc: 	190	, pojemnosc: 	1600	, rok_produkcji: 	"	2014-2017	"	, kod_silnika: "	N18B16A	" },
				{ label: "	Countryman	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2016	"	, kod_silnika: "	N18B16A	" },
			]
			},
		"Mini": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Mini	", moc: 	75	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	B38A15A	" },
				{ label: "	Mini	", moc: 	102	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	B38A15A	" },
				{ label: "	Mini	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	B38A15A	" },
				{ label: "	Mini	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"	2016-2024	"	, kod_silnika: "	B38A15F	" },
				{ label: "	Mini	", moc: 	178	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini	", moc: 	192	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini	", moc: 	231	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2024	"	, kod_silnika: "	B48A20B	" },
			]
			},
		"Mini Cabriolet": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Mini Cabriolet	", moc: 	102	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	B38A15A	" },
				{ label: "	Mini Cabriolet	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"	2016-2024	"	, kod_silnika: "	B38A15F	" },
				{ label: "	Mini Cabriolet	", moc: 	178	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini Cabriolet	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini Cabriolet	", moc: 	192	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini Cabriolet	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini Cabriolet	", moc: 	231	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2024	"	, kod_silnika: "	B48A20B	" },
			]
			},
		"Mini Clubman": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Mini Clubman	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini Clubman	", moc: 	192	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini Clubman	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini Clubman	", moc: 	231	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2019	"	, kod_silnika: "	B48A20B	" },
			]
			},
		"Mini Countryman": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Mini Countryman	", moc: 	220	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2022	"	, kod_silnika: "	B38A15A	" },
				{ label: "	Mini Countryman	", moc: 	125	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2022	"	, kod_silnika: "	B38A15A	" },
				{ label: "	Mini Countryman	", moc: 	224	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	B38A15A	" },
				{ label: "	Mini Countryman	", moc: 	102	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	B38A15A	" },
				{ label: "	Mini Countryman	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	B38A15A	" },
				{ label: "	Mini Countryman	", moc: 	136	, pojemnosc: 	1500	, rok_produkcji: 	"	2016-2024	"	, kod_silnika: "	B38A15F	" },
				{ label: "	Mini Countryman	", moc: 	163	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini Countryman	", moc: 	178	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini Countryman	", moc: 	192	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2024	"	, kod_silnika: "	B48A20A	" },
				{ label: "	Mini Countryman	", moc: 	231	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2019	"	, kod_silnika: "	B48A20B	" },
			]
			},
    },
	"MITSUBISHI": {
		"ASX": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	ASX	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2023-2024	"	, kod_silnika: "	H5H 490	" },
				{ label: "	ASX	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2023-2024	"	, kod_silnika: "	H5H 490	" },
			]
			},
		"Eclipse Cross": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Eclipse Cross	", moc: 	163	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	4B40	" },
			]
			},
    },
	"NISSAN": {
		"Armada": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Armada	", moc: 	396	, pojemnosc: 	5600	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	VK56VD	" },
			]
			},
		"Juke": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Juke	", moc: 	118	, pojemnosc: 	1000	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	HR10DDT	" },
				{ label: "	Juke	", moc: 	118	, pojemnosc: 	1000	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	HRA0	" },
				{ label: "	Juke	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	HR12DDT / HRA2 / HRA2DDT	" },
				{ label: "	Juke	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	HR12DDT / HRA2 / HRA2DDT	" },
				{ label: "	Juke	", moc: 	214	, pojemnosc: 	1600	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	MR16DDT	" },
				{ label: "	Juke	", moc: 	218	, pojemnosc: 	1600	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	MR16DDT	" },
				{ label: "	Juke	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2014	"	, kod_silnika: "	MR16DDT	" },
				{ label: "	Juke	", moc: 	190	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2022	"	, kod_silnika: "	MR16DDT	" },
				{ label: "	Juke	", moc: 	214	, pojemnosc: 	1600	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	MR16DDT	" },
				{ label: "	Juke	", moc: 	218	, pojemnosc: 	1600	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	MR16DDT	" },
				{ label: "	Juke	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2014	"	, kod_silnika: "	MR16DDT	" },
				{ label: "	Juke	", moc: 	190	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2022	"	, kod_silnika: "	MR16DDT	" },
			]
			},
		"Juke Van": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Juke Van	", moc: 	190	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	MR16DDT	" },
				{ label: "	Juke Van	", moc: 	190	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	MR16DDT	" },
			]
			},
		"Micra V": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Micra V	", moc: 	117	, pojemnosc: 	1000	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	HR10DDT	" },
			]
			},
		"NV2500": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	NV2500	", moc: 	374	, pojemnosc: 	5600	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	VK56VD	" },
			]
			},
		"NV3500": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	NV3500	", moc: 	374	, pojemnosc: 	5600	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	VK56VD	" },
			]
			},
		"Patrol": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Patrol	", moc: 	405	, pojemnosc: 	5600	, rok_produkcji: 	"	2010-2020	"	, kod_silnika: "	VK56VD	" },
			]
			},
		"Pulsar": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Pulsar	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	HR12DDT / HRA2 / HRA2DDT	" },
				{ label: "	Pulsar	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	HR12DDT / HRA2 / HRA2DDT	" },
			]
			},
		"Pulsar Hatchback": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Pulsar Hatchback	", moc: 	190	, pojemnosc: 	1600	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	MR16DDT	" },
				{ label: "	Pulsar Hatchback	", moc: 	190	, pojemnosc: 	1600	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	MR16DDT	" },
			]
			},
		"Qashqai": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Qashqai	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	HR12DDT / HRA2 / HRA2DDT	" },
				{ label: "	Qashqai	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2019	"	, kod_silnika: "	HR12DDT / HRA2 / HRA2DDT	" },
				{ label: "	Qashqai	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	HR12DDT / HRA2 / HRA2DDT	" },
				{ label: "	Qashqai	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2019	"	, kod_silnika: "	HR12DDT / HRA2 / HRA2DDT	" },
				{ label: "	Qashqai	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	HR13DDT	" },
				{ label: "	Qashqai	", moc: 	160	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	HR13DDT	" },
				{ label: "	Qashqai	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	HR13DDT	" },
				{ label: "	Qashqai	", moc: 	141	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2023	"	, kod_silnika: "	MR20DD	" },
			]
			},
		"Qashqai Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Qashqai Hybrid	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2021	"	, kod_silnika: "	HR13	" },
			]
			},
		"Qashqai II": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Qashqai II	", moc: 	163	, pojemnosc: 	1600	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	MR16DDT	" },
				{ label: "	Qashqai II	", moc: 	163	, pojemnosc: 	1600	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	MR16DDT	" },
			]
			},
		"Rouge": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Rouge	", moc: 	146	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	MR20	" },
			]
			},
		"Sentra": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Sentra	", moc: 	144	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	MR20DD	" },
			]
			},
		"Serena": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Serena	", moc: 	141	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2023	"	, kod_silnika: "	MR20DD	" },
			]
			},
		"Titan": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Titan	", moc: 	396	, pojemnosc: 	5600	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	VK56VD	" },
			]
			},
		"Townstar": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Townstar	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	H5H 490	" },
			]
			},
		"X-Trail": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	X-Trail	", moc: 	160	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	HR13DDT	" },
				{ label: "	X-Trail	", moc: 	163	, pojemnosc: 	1600	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	MR16DDT	" },
				{ label: "	X-Trail	", moc: 	163	, pojemnosc: 	1600	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	MR16DDT	" },
				{ label: "	X-Trail ", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	HR13DDT	" },
			]
			},
    },
	"OPEL": {
		"Adam": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Adam	", moc: 	90	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	B10XFL	" },
				{ label: "	Adam	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	B10XFT	" },
				{ label: "	Adam	", moc: 	90	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	D10XFL	" },
				{ label: "	Adam	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	D10XFT	" },
			]
			},
		"Astra": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Astra	", moc: 	105	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	B10XFL	" },
				{ label: "	Astra	", moc: 	146	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2022	"	, kod_silnika: "	F14SHT	" },
				{ label: "	Astra	", moc: 	146	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2025	"	, kod_silnika: "	L3T	" },
				{ label: "	Astra	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2019	"	, kod_silnika: "	B14XFL	" },
				{ label: "	Astra	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"	2012-2019	"	, kod_silnika: "	A16XHT	" },
			]
			},
		"Astra J": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Astra J	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2012-2019	"	, kod_silnika: "	B16SHT	" },
			]
			},
		"Astra K": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Astra K	", moc: 	105	, pojemnosc: 	1000	, rok_produkcji: 	"	2015-2024	"	, kod_silnika: "	D10XFL	" },
				{ label: "	Astra K	", moc: 	90	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2022	"	, kod_silnika: "	D10XFL	" },
				{ label: "	Astra K	", moc: 	105	, pojemnosc: 	1000	, rok_produkcji: 	"	2016-2019	"	, kod_silnika: "	LE1	" },
				{ label: "	Astra K	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2023	"	, kod_silnika: "	B14XFT	" },
				{ label: "	Astra K	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2019	"	, kod_silnika: "	D14XFT / LE2	" },
				{ label: "	Astra K	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"	2012-2023	"	, kod_silnika: "	B16SHL	" },
				{ label: "	Astra K	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	B16SHT	" },
				{ label: "	Astra K	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2015-2023	"	, kod_silnika: "	D16SHT	" },
			]
			},
		"Cascada": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Cascada	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2019	"	, kod_silnika: "	A16XHT	" },
				{ label: "	Cascada	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2019	"	, kod_silnika: "	B16SHL	" },
				{ label: "	Cascada	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2017	"	, kod_silnika: "	B16SHT	" },
				{ label: "	Cascada	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2019	"	, kod_silnika: "	D16SHL	" },
				{ label: "	Cascada	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	D16SHT	" },
			]
			},
		"Combo": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Combo	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2017-2019	"	, kod_silnika: "	D12XHL	" },
				{ label: "	Combo	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2020	"	, kod_silnika: "	D12XHL - D12XHT	" },
				{ label: "	Combo	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	D12XHL - EB2ADT/ F12XHT - EB2ADTS HN05	" },
			]
			},
		"Corsa": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Corsa	", moc: 	90	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	B10XFL	" },
				{ label: "	Corsa	", moc: 	101	, pojemnosc: 	1200	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	F 12 XHL - EB2ADTD	" },
				{ label: "	Corsa	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	F12XHT - EB2ADTS HN05	" },
			]
			},
		"Corsa E": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Corsa E	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	B10XFT	" },
				{ label: "	Corsa E	", moc: 	90	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	D10XFL	" },
				{ label: "	Corsa E	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	D10XFT	" },
				{ label: "	Corsa E	", moc: 	105	, pojemnosc: 	1000	, rok_produkcji: 	"	2016-2019	"	, kod_silnika: "	LE1	" },
			]
			},
		"Corsa F": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Corsa F	", moc: 	101	, pojemnosc: 	1200	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	HN09	" },
			]
			},
		"Corsa F Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Corsa F Hybrid	", moc: 	101	, pojemnosc: 	1200	, rok_produkcji: 	"	2024	"	, kod_silnika: "	HN09	" },
			]
			},
		"Crossland": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Crossland	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2017	"	, kod_silnika: "	B12XHL - EB2DT	" },
				{ label: "	Crossland	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2017	"	, kod_silnika: "	B12XHT - EB2DT	" },
				{ label: "	Crossland	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2020	"	, kod_silnika: "	D12XHL - D12XHT	" },
				{ label: "	Crossland	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	D12XHL - EB2ADT/ F12XHT - EB2ADTS HN05	" },
			]
			},
		"Grandland": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Grandland	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	F12XHT - EB2ADTS HN05	" },
				{ label: "	Grandland	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	5G06	" },
				{ label: "	Grandland	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	D16XHT (EP6FADTXD)	" },
			]
			},
		"Insignia": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Insignia	", moc: 	146	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	F14SHT	" },
				{ label: "	Insignia	", moc: 	146	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2025	"	, kod_silnika: "	L3T	" },
				{ label: "	Insignia	", moc: 	165	, pojemnosc: 	1400	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	B14SFT / LFV	" },
				{ label: "	Insignia	", moc: 	140	, pojemnosc: 	1500	, rok_produkcji: 	"	2020	"	, kod_silnika: "	B15SFL	" },
				{ label: "	Insignia	", moc: 	165	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2018	"	, kod_silnika: "	B15XHT	" },
				{ label: "	Insignia	", moc: 	165	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	D15SFT / LFV	" },
				{ label: "	Insignia	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"	2012-2019	"	, kod_silnika: "	A16XHT	" },
				{ label: "	Insignia	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2017	"	, kod_silnika: "	B16SHL	" },
				{ label: "	Insignia	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	B16SHT	" },
				{ label: "	Insignia	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	D16SHT	" },
			]
			},
		"Mokka": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Mokka	", moc: 	101	, pojemnosc: 	1200	, rok_produkcji: 	"	2020-2021	"	, kod_silnika: "	F 12 XHL - EB2ADTD	" },
				{ label: "	Mokka	", moc: 	101	, pojemnosc: 	1200	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	HN09	" },
				{ label: "	Mokka	", moc: 	152	, pojemnosc: 	1400	, rok_produkcji: 	"	2016-2023	"	, kod_silnika: "	B14XFT	" },
			]
			},
		"Zafira": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Zafira	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"	2012-2023	"	, kod_silnika: "	B16SHL	" },
				{ label: "	Zafira	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2023	"	, kod_silnika: "	D16SHT	" },
			]
			},
		"Zafira C": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Zafira C	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"	2012-2019	"	, kod_silnika: "	A16XHT	" },
				{ label: "	Zafira C	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	B16SHT	" },
				{ label: "	Zafira C	", moc: 	170	, pojemnosc: 	1600	, rok_produkcji: 	"	2012-2019	"	, kod_silnika: "	D16SHL	" },
			]
			},
    },
	"PEUGEOT": {
		"207": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	207	", moc: 	156	, pojemnosc: 	1600	, rok_produkcji: 	"	2009-2013	"	, kod_silnika: "	5FV (EP6CDT) 	" },
			]
			},
		"208": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	208	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	EB2ADT / EB2ADTS HN05	" },
				{ label: "	208	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	EB2DT/HN01 - EB2DTS/HN02	" },
				{ label: "	208	", moc: 	101	, pojemnosc: 	1200	, rok_produkcji: 	"	2020	"	, kod_silnika: "	HN05	" },
				{ label: "	208	", moc: 	101	, pojemnosc: 	1200	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	HN09	" },
				{ label: "	208	", moc: 	156	, pojemnosc: 	1600	, rok_produkcji: 	"	2012-2019	"	, kod_silnika: "	5FV (EP6CDT) 	" },
			]
			},
		"308": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	308	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	EB2ADT/HN05	" },
				{ label: "	308	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	EB2DT/HN01 - EB2DTS/HN02	" },
				{ label: "	308	", moc: 	125	, pojemnosc: 	1600	, rok_produkcji: 	"	2014-2021	"	, kod_silnika: "	5FA (EP6CDT) 	" },
				{ label: "	308	", moc: 	156	, pojemnosc: 	1600	, rok_produkcji: 	"	2009-2021	"	, kod_silnika: "	5FV (EP6CDT) 	" },
				{ label: "	308	", moc: 	224	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	5GG (EP6FADTX)	" },
				{ label: "	308	", moc: 	224	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	GGR (EP6FADTX)	" },
			]
			},
		"508": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	508	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2018	"	, kod_silnika: "	5FN (EP6CDT) 	" },
				{ label: "	508	", moc: 	156	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2018	"	, kod_silnika: "	5FV (EP6CDT) 	" },
				{ label: "	508	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	5G06	" },
				{ label: "	508	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	5GF (EP6FADTXD)	" },
				{ label: "	508	", moc: 	224	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	5GG (EP6FADTX)	" },
				{ label: "	508	", moc: 	224	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	GCR (EP6FADTX)	" },
			]
			},
		"2008": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	2008	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	EB2ADT / EB2ADTS HN05	" },
				{ label: "	2008	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	EB2DT/HN01 - EB2DTS/HN02	" },
			]
			},
		"3008": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	3008	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	EB2ADTS/HN05	" },
				{ label: "	3008	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	EB2DT/HN01 - EB2DTS/HN02	" },
				{ label: "	3008	", moc: 	156	, pojemnosc: 	1600	, rok_produkcji: 	"	2009-2016	"	, kod_silnika: "	5FV (EP6CDT) 	" },
				{ label: "	3008	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	5G06	" },
				{ label: "	3008	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	5GF (EP6FADTXD)	" },
			]
			},
		"5008": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	5008	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	EB2DT/HN01 - EB2DTS/HN02	" },
				{ label: "	5008	", moc: 	156	, pojemnosc: 	1600	, rok_produkcji: 	"	2009-2017	"	, kod_silnika: "	5FV (EP6CDT) 	" },
				{ label: "	5008	", moc: 	181	, pojemnosc: 	1600	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	5GF (EP6FADTXD)	" },
			]
			},
		"Partner": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Partner	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	EB2ADT / EB2ADTS HN05	" },
				{ label: "	Partner	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	EB2DT/HN01 - EB2DTS/HN02	" },
			]
			},
		"RCZ": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	RCZ	", moc: 	156	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	5FV (EP6CDT) 	" },
			]
			},
		"Rifter": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Rifter	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	EB2ADT / EB2ADTS HN05	" },
			]
			},
    },
	"PORSCHE": {
		"Cayenne": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Cayenne	", moc: 	280	, pojemnosc: 	3600	, rok_produkcji: 	"	2010-2018	"	, kod_silnika: "	CGRA	" },
				{ label: "	Cayenne	", moc: 	333	, pojemnosc: 	3000	, rok_produkcji: 	"	2014-2017	"	, kod_silnika: "	CGEA	" },
				{ label: "	Cayenne	", moc: 	416	, pojemnosc: 	3000	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	CGFA	" },
			]
			},
		"Macan": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Macan	", moc: 	252	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2024	"	, kod_silnika: "	CYNB	" },
				{ label: "	Macan	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	DKNA	" },
			]
			},
    },
	"RENAULT": {
		"Arkana": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Arkana	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	H5H 490	" },
				{ label: "	Arkana	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 490	" },
			]
			},
		"Austral": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Austral	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	H5H 490	" },
				{ label: "	Austral	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	H5H 498	" },
			]
			},
		"Captur": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Captur	", moc: 	120	, pojemnosc: 	1200	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	1200 TCe120 H5F	" },
				{ label: "	Captur	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 450	" },
				{ label: "	Captur	", moc: 	150	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 450	" },
				{ label: "	Captur	", moc: 	154	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Captur	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Captur	", moc: 	150	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Captur	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 490	" },
				{ label: "	Captur	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 490	" },
			]
			},
		"Clio IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Clio IV	", moc: 	120	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	1200 TCe120 H5F	" },
				{ label: "	Clio IV	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	M5M 400	" },
				{ label: "	Clio IV	", moc: 	220	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	M5M 401	" },
				{ label: "	Clio IV	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	M5M 401	" },
				{ label: "	Clio IV	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	M5M 450	" },
				{ label: "	Clio IV	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Clio IV	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 490	" },
			]
			},
		"Clio V": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Clio V	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 450	" },
			]
			},
		"Espace V": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Espace V	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	M5M 450	" },
				{ label: "	Espace V	", moc: 	224	, pojemnosc: 	1800	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	M5P 401 - M5P 403	" },
			]
			},
		"Express": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Express	", moc: 	102	, pojemnosc: 	1300	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Express	", moc: 	102	, pojemnosc: 	1300	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	H5H 490	" },
			]
			},
		"Fluence": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Fluence	", moc: 	132	, pojemnosc: 	1200	, rok_produkcji: 	"	2016-2018	"	, kod_silnika: "	1200 TCe130 H5F	" },
			]
			},
		"Grand Kangoo": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Grand Kangoo	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"	2024	"	, kod_silnika: "	H5H 490	" },
			]
			},
		"Grand Scenic IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Grand Scenic IV	", moc: 	116	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 450	" },
				{ label: "	Grand Scenic IV	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 450	" },
				{ label: "	Grand Scenic IV	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 450	" },
				{ label: "	Grand Scenic IV	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Grand Scenic IV	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Grand Scenic IV	", moc: 	159	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Grand Scenic IV	", moc: 	116	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Grand Scenic IV	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 490	" },
			]
			},
		"Kadjar": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Kadjar	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	1200 TCe130 H5F	" },
				{ label: "	Kadjar	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Kadjar	", moc: 	159	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Kadjar	", moc: 	163	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	M5M 460	" },
				{ label: "	Kadjar	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	H5H 490	" },
				{ label: "	Kadjar	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 490	" },
			]
			},
		"Kangoo": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Kangoo	", moc: 	114	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	1200 TCe115 H5F	" },
				{ label: "	Kangoo	", moc: 	114	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	1200 TCe115 H5F	" },
				{ label: "	Kangoo	", moc: 	102	, pojemnosc: 	1300	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	H5H 490	" },
				{ label: "	Kangoo	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	H5H 490	" },
				{ label: "	Kangoo	", moc: 	102	, pojemnosc: 	1300	, rok_produkcji: 	"	2024	"	, kod_silnika: "	H5H MA	" },
				{ label: "	Kangoo	", moc: 	131	, pojemnosc: 	1300	, rok_produkcji: 	"	2024	"	, kod_silnika: "	H5H MB	" },
			]
			},
		"Koleos": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Koleos	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 490	" },
			]
			},
		"Latitude": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Latitude	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	M5M 400	" },
			]
			},
		"Megane III": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Megane III	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2020	"	, kod_silnika: "	1200 TCe115 H5F	" },
				{ label: "	Megane III	", moc: 	132	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	1200 TCe130 H5F	" },
			]
			},
		"Megane IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Megane IV	", moc: 	132	, pojemnosc: 	1200	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	1200 TCe130 H5F	" },
				{ label: "	Megane IV	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 450	" },
				{ label: "	Megane IV	", moc: 	116	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 450	" },
				{ label: "	Megane IV	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 450	" },
				{ label: "	Megane IV	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 450	" },
				{ label: "	Megane IV	", moc: 	165	, pojemnosc: 	1600	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	M5M 450	" },
				{ label: "	Megane IV	", moc: 	205	, pojemnosc: 	1600	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	M5M 450	" },
				{ label: "	Megane IV	", moc: 	279	, pojemnosc: 	1800	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	M5P 402	" },
				{ label: "	Megane IV	", moc: 	301	, pojemnosc: 	1800	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	M5P 404	" },
				{ label: "	Megane IV	", moc: 	301	, pojemnosc: 	1800	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	M5P 404	" },
				{ label: "	Megane IV	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Megane IV	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Megane IV	", moc: 	159	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Megane IV	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Megane IV	", moc: 	102	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Megane IV	", moc: 	116	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Megane IV	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	H5H 490	" },
				{ label: "	Megane IV	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 490	" },
			]
			},
		"Scenic III": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Scenic III	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2020	"	, kod_silnika: "	1200 TCe115 H5F	" },
				{ label: "	Scenic III	", moc: 	132	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	1200 TCe130 H5F	" },
			]
			},
		"Scenic IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Scenic IV	", moc: 	163	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 450	" },
				{ label: "	Scenic IV	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 450	" },
				{ label: "	Scenic IV	", moc: 	116	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 450	" },
				{ label: "	Scenic IV	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Scenic IV	", moc: 	159	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Scenic IV	", moc: 	116	, pojemnosc: 	1300	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	H5H 470	" },
			]
			},
		"Talisman": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Talisman	", moc: 	159	, pojemnosc: 	1300	, rok_produkcji: 	"	2019-2022	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Talisman	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	M5M 450	" },
				{ label: "	Talisman	", moc: 	200	, pojemnosc: 	1600	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	M5M 450	" },
				{ label: "	Talisman	", moc: 	224	, pojemnosc: 	1800	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	M5P 403	" },
				{ label: "	Talisman	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2021-2022	"	, kod_silnika: "	H5H 470	" },
				{ label: "	Talisman	", moc: 	140	, pojemnosc: 	1300	, rok_produkcji: 	"	2021-2022	"	, kod_silnika: "	H5H 490	" },
				{ label: "	Talisman	", moc: 	158	, pojemnosc: 	1300	, rok_produkcji: 	"	2021-2022	"	, kod_silnika: "	H5H 490	" },
			]
			},
    },
	"SEAT": {
		"Alhambra": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Alhambra	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	CAVA	" },
				{ label: "	Alhambra	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	CTHA	" },
				{ label: "	Alhambra	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CZDA	" },
				{ label: "	Alhambra	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	DJKA	" },
				{ label: "	Alhambra	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"	2012-2015	"	, kod_silnika: "	CDAA	" },
				{ label: "	Alhambra	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2013	"	, kod_silnika: "	CCZA 	" },
			]
			},
		"Altea": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Altea	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2024	"	, kod_silnika: "	CBZB	" },
				{ label: "	Altea	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2007-2024	"	, kod_silnika: "	CAXC	" },
				{ label: "	Altea	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"	2007-2024	"	, kod_silnika: "	CDAA	" },
				{ label: "	Altea	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2004-2009	"	, kod_silnika: "	BLR	" },
				{ label: "	Altea	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2004-2009	"	, kod_silnika: "	BVY	" },
				{ label: "	Altea 	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2009-2022	"	, kod_silnika: "	CCZB	" },
			]
			},
		"Arona": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Arona	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	CHZJ/DKJA/DKRF	" },
				{ label: "	Arona	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	CHZL	" },
				{ label: "	Arona	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DKLA	" },
				{ label: "	Arona	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2017	"	, kod_silnika: "	DKRF	" },
				{ label: "	Arona	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA	" },
				{ label: "	Arona	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSA	" },
				{ label: "	Arona	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSB	" },
				{ label: "	Arona	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Arona	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Arona	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DXDB	" },
			]
			},
		"Ateca": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Ateca	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	CHZJ	" },
				{ label: "	Ateca	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	DKRF	" },
				{ label: "	Ateca	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA	" },
				{ label: "	Ateca	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSA	" },
				{ label: "	Ateca	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	CZEA	" },
				{ label: "	Ateca	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Ateca	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Ateca	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DXDB	" },
				{ label: "	Ateca	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	CZPB	" },
				{ label: "	Ateca	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	DKZA	" },
				{ label: "	Ateca	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	DNNA	" },
			]
			},
		"Exeo": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Exeo	", moc: 	120	, pojemnosc: 	1800	, rok_produkcji: 	"	2010-2013	"	, kod_silnika: "	CDHA	" },
				{ label: "	Exeo	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"	2010-2013	"	, kod_silnika: "	CDHB	" },
				{ label: "	Exeo	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2013	"	, kod_silnika: "	CDND	" },
			]
			},
		"Ibiza": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Ibiza	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DXDB	" },
			]
			},
		"Ibiza IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Ibiza IV	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	CHZB/CHZL	" },
				{ label: "	Ibiza IV	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2015	"	, kod_silnika: "	CBZA	" },
				{ label: "	Ibiza IV	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	CBZB	" },
				{ label: "	Ibiza IV	", moc: 	90	, pojemnosc: 	1200	, rok_produkcji: 	"	2016-2016	"	, kod_silnika: "	CJZC	" },
				{ label: "	Ibiza IV	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	CJZD	" },
				{ label: "	Ibiza IV	", moc: 	180	, pojemnosc: 	1400	, rok_produkcji: 	"	2009-2015	"	, kod_silnika: "	CAVE	" },
				{ label: "	Ibiza IV	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2009-2015	"	, kod_silnika: "	CAVF	" },
				{ label: "	Ibiza IV	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2015	"	, kod_silnika: "	CPTA	" },
				{ label: "	Ibiza IV	", moc: 	180	, pojemnosc: 	1400	, rok_produkcji: 	"	2009-2015	"	, kod_silnika: "	CTHE	" },
				{ label: "	Ibiza IV	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2009-2015	"	, kod_silnika: "	CTHF	" },
				{ label: "	Ibiza IV	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	CZEA	" },
				{ label: "	Ibiza IV	", moc: 	192	, pojemnosc: 	1800	, rok_produkcji: 	"	2015-2016	"	, kod_silnika: "	DAJA	" },
			]
			},
		"Ibiza V": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Ibiza V	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	CHZB/CHZL	" },
				{ label: "	Ibiza V	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	CHZC	" },
				{ label: "	Ibiza V	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	CHZJ/DKJA/DKRF	" },
				{ label: "	Ibiza V	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DKLA	" },
				{ label: "	Ibiza V	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA	" },
				{ label: "	Ibiza V	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Ibiza V	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	DPBA	" },
			]
			},
		"Ibiza VI": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Ibiza VI	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSA	" },
				{ label: "	Ibiza VI	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSB	" },
			]
			},
		"Leon": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Leon	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	CHZD/DKRF	" },
				{ label: "	Leon	", moc: 	86	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DKLB	" },
				{ label: "	Leon	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA	" },
				{ label: "	Leon	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2012	"	, kod_silnika: "	CBZB	" },
				{ label: "	Leon	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	CJZA 	" },
				{ label: "	Leon	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2022	"	, kod_silnika: "	CJZB	" },
				{ label: "	Leon	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	CYVA	" },
				{ label: "	Leon	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	CYVB 	" },
				{ label: "	Leon	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2007-2012	"	, kod_silnika: "	CAXC	" },
				{ label: "	Leon	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2012-2022	"	, kod_silnika: "	CHPA	" },
				{ label: "	Leon	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	CPTA	" },
				{ label: "	Leon	", moc: 	110	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	CPWA	" },
				{ label: "	Leon	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	CXSA	" },
				{ label: "	Leon	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CZCA	" },
				{ label: "	Leon	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CZDA	" },
				{ label: "	Leon	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CZEA	" },
				{ label: "	Leon	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DACA	" },
				{ label: "	Leon	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DADA	" },
				{ label: "	Leon	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DFYA	" },
				{ label: "	Leon	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DHFA	" },
				{ label: "	Leon	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DPBA	" },
				{ label: "	Leon	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Leon	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"	2007-2012	"	, kod_silnika: "	CDAA	" },
				{ label: "	Leon	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	CJSA	" },
				{ label: "	Leon	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	CJSB	" },
				{ label: "	Leon	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2005-2010	"	, kod_silnika: "	BLR	" },
				{ label: "	Leon	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2005-2010	"	, kod_silnika: "	BVY	" },
				{ label: "	Leon	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2009-2012	"	, kod_silnika: "	CCZB	" },
				{ label: "	Leon	", moc: 	265	, pojemnosc: 	2000	, rok_produkcji: 	"	2009-2012	"	, kod_silnika: "	CDLA	" },
				{ label: "	Leon	", moc: 	290	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	CJXH	" },
				{ label: "	Leon	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DKZA	" },
				{ label: "	Leon	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2021-2023	"	, kod_silnika: "	DNNA	" },
				{ label: "	Leon	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	DNUE	" },
				{ label: "	Leon 	", moc: 	280	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	CJXA	" },
				{ label: "	Leon 	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	CJXC	" },
				{ label: "	Leon 	", moc: 	265	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	CJXE	" },
				{ label: "	Leon 	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2018	"	, kod_silnika: "	CJXG	" },
			]
			},
		"Tarraco": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Tarraco	", moc: 	245	, pojemnosc: 	1400	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	DGEA	" },
				{ label: "	Tarraco	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Tarraco	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Tarraco	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DXDB	" },
				{ label: "	Tarraco	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	DKZA	" },
				{ label: "	Tarraco	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	DNNA	" },
			]
			},
		"Toledo": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Toledo	", moc: 	90	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	CJZC	" },
				{ label: "	Toledo	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	CJZD	" },
				{ label: "	Toledo	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"	2007-2009	"	, kod_silnika: "	CDAA	" },
				{ label: "	Toledo	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2004-2009	"	, kod_silnika: "	BLR	" },
				{ label: "	Toledo	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2004-2009	"	, kod_silnika: "	BVY	" },
			]
			},
		"Toledo IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Toledo IV	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	CHZB	" },
				{ label: "	Toledo IV	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	CHZC/DKRF	" },
				{ label: "	Toledo IV	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DKLD	" },
				{ label: "	Toledo IV	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2015	"	, kod_silnika: "	CBZA	" },
				{ label: "	Toledo IV	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2015	"	, kod_silnika: "	CBZB	" },
				{ label: "	Toledo IV	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"	2012-2015	"	, kod_silnika: "	CAXA	" },
				{ label: "	Toledo IV	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2007-2009	"	, kod_silnika: "	CAXC	" },
				{ label: "	Toledo IV	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2019	"	, kod_silnika: "	CZCA	" },
			]
			},
    },
	"SKODA": {
		"Fabia": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Fabia	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	CHZB	" },
				{ label: "	Fabia	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	CHZC	" },
				{ label: "	Fabia	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	DKRC	" },
				{ label: "	Fabia	", moc: 	90	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CJZC	" },
				{ label: "	Fabia	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CJZD	" },
				{ label: "	Fabia	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2018-2022	"	, kod_silnika: "	CZCA	" },
				{ label: "	Fabia	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Fabia	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	DXDB	" },
			]
			},
		"Fabia II": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Fabia II	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2014	"	, kod_silnika: "	CBZA	" },
				{ label: "	Fabia II	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2014	"	, kod_silnika: "	CBZB	" },
				{ label: "	Fabia II	", moc: 	180	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2014	"	, kod_silnika: "	CAVE	" },
				{ label: "	Fabia II	", moc: 	180	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2014	"	, kod_silnika: "	CTHE	" },
			]
			},
		"Fabia III": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Fabia III	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DKLD	" },
			]
			},
		"Fabia IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Fabia IV	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSA	" },
				{ label: "	Fabia IV	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSB	" },
				{ label: "	Fabia IV	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2021-2023	"	, kod_silnika: "	DPBA	" },
			]
			},
		"Kamiq": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Kamiq	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DKLA	" },
				{ label: "	Kamiq	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2019	"	, kod_silnika: "	DKRF	" },
				{ label: "	Kamiq	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA	" },
				{ label: "	Kamiq	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	DLAC	" },
				{ label: "	Kamiq	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSA	" },
				{ label: "	Kamiq	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSB	" },
				{ label: "	Kamiq	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Kamiq	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Kamiq	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DPCL	" },
				{ label: "	Kamiq	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	DXDB	" },
			]
			},
		"Karoq": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Karoq	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2019	"	, kod_silnika: "	DKRF	" },
				{ label: "	Karoq	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA	" },
				{ label: "	Karoq	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSA	" },
				{ label: "	Karoq	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	CZEA	" },
				{ label: "	Karoq	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	DJKA	" },
				{ label: "	Karoq	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Karoq	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Karoq	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DXDB	" },
				{ label: "	Karoq	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	DKZA	" },
				{ label: "	Karoq	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	DNNA	" },
			]
			},
		"Kodiaq": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Kodiaq	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	CHZJ	" },
				{ label: "	Kodiaq	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	CZCA	" },
				{ label: "	Kodiaq	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	CZDA	" },
				{ label: "	Kodiaq	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	CZDB	" },
				{ label: "	Kodiaq	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	CZEA	" },
				{ label: "	Kodiaq	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Kodiaq	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Kodiaq	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DXDB	" },
				{ label: "	Kodiaq	", moc: 	180	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2023	"	, kod_silnika: "	CZPA	" },
				{ label: "	Kodiaq	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	DKZA	" },
				{ label: "	Kodiaq	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	DNNA	" },
				{ label: "	Kodiaq	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2021-2023	"	, kod_silnika: "	DNPA	" },
			]
			},
		"Octavia": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Octavia	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	CHZD	" },
				{ label: "	Octavia	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	DKRA	" },
				{ label: "	Octavia	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	DKRF	" },
				{ label: "	Octavia	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA	" },
				{ label: "	Octavia	", moc: 	110	, pojemnosc: 	1400	, rok_produkcji: 	"	2012-2017	"	, kod_silnika: "	CPWA	" },
				{ label: "	Octavia	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DADA	" },
				{ label: "	Octavia	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DFYA	" },
				{ label: "	Octavia	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2004-2008	"	, kod_silnika: "	BLR	" },
				{ label: "	Octavia	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2004-2008	"	, kod_silnika: "	BVY	" },
				{ label: "	Octavia	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DKTB	" },
				{ label: "	Octavia	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	DNNA	" },
			]
			},
		"Octavia II": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Octavia II	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2013	"	, kod_silnika: "	CBZB	" },
				{ label: "	Octavia II	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2013	"	, kod_silnika: "	CAXA	" },
				{ label: "	Octavia II	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"	2007-2013	"	, kod_silnika: "	CDAA	" },
				{ label: "	Octavia II	", moc: 	152	, pojemnosc: 	1800	, rok_produkcji: 	"	2009-2013	"	, kod_silnika: "	CDAB	" },
				{ label: "	Octavia II	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2005-2013	"	, kod_silnika: "	CCZA 	" },
			]
			},
		"Octavia III": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Octavia III	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2022	"	, kod_silnika: "	CJZA 	" },
				{ label: "	Octavia III	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2022	"	, kod_silnika: "	CJZB	" },
				{ label: "	Octavia III	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2022	"	, kod_silnika: "	CYVA	" },
				{ label: "	Octavia III	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	CYVB 	" },
				{ label: "	Octavia III	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2012-2022	"	, kod_silnika: "	CHPA	" },
				{ label: "	Octavia III	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	CHPB	" },
				{ label: "	Octavia III	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	CZDA	" },
				{ label: "	Octavia III	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	DJKA	" },
				{ label: "	Octavia III	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Octavia III	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"	2012-2020	"	, kod_silnika: "	CJSA	" },
				{ label: "	Octavia III	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"	2012-2020	"	, kod_silnika: "	CJSB	" },
				{ label: "	Octavia III	", moc: 	230	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	CHHA	" },
				{ label: "	Octavia III	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2012-2017	"	, kod_silnika: "	CHHB	" },
				{ label: "	Octavia III	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DKZA	" },
			]
			},
		"Octavia IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Octavia IV	", moc: 	245	, pojemnosc: 	1400	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DGEA	" },
				{ label: "	Octavia IV	", moc: 	204	, pojemnosc: 	1400	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DGEA	" },
				{ label: "	Octavia IV	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	DHFA	" },
				{ label: "	Octavia IV	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Octavia IV	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	CZPB	" },
				{ label: "	Octavia IV	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	DNPA	" },
			]
			},
		"Rapid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Rapid	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	CHZB	" },
				{ label: "	Rapid	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	CHZC/DKRC	" },
				{ label: "	Rapid	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DKLD	" },
				{ label: "	Rapid	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DKRC	" },
				{ label: "	Rapid	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2015	"	, kod_silnika: "	CBZA	" },
				{ label: "	Rapid	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2015	"	, kod_silnika: "	CBZB	" },
				{ label: "	Rapid	", moc: 	90	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2019	"	, kod_silnika: "	CJZC	" },
				{ label: "	Rapid	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2019	"	, kod_silnika: "	CJZD	" },
				{ label: "	Rapid	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"	2012-2015	"	, kod_silnika: "	CAXA	" },
			]
			},
		"Roomster": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Roomster	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	CBZA	" },
				{ label: "	Roomster	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2020	"	, kod_silnika: "	CBZB	" },
			]
			},
		"Scala": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Scala	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DKLA	" },
				{ label: "	Scala	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2019	"	, kod_silnika: "	DKRF	" },
				{ label: "	Scala	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA	" },
				{ label: "	Scala	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	DLAC	" },
				{ label: "	Scala	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSA	" },
				{ label: "	Scala	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSB	" },
				{ label: "	Scala	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Scala	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Scala	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	DXDB	" },
			]
			},
		"Superb": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Superb	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2015	"	, kod_silnika: "	CAXC	" },
				{ label: "	Superb	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2023	"	, kod_silnika: "	DXDB	" },
				{ label: "	Superb	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	DNNA	" },
			]
			},
		"Superb II": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Superb II	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"	2008-2015	"	, kod_silnika: "	CDAA	" },
				{ label: "	Superb II	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	CCZA 	" },
				{ label: "	Superb II	", moc: 	260	, pojemnosc: 	3600	, rok_produkcji: 	"	2008-2015	"	, kod_silnika: "	CDVA	" },
			]
			},
		"Superb III": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Superb III	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CZCA	" },
				{ label: "	Superb III	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CZDA	" },
				{ label: "	Superb III	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CZEA	" },
				{ label: "	Superb III	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Superb III	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Superb III	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CJSA	" },
				{ label: "	Superb III	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CJSC	" },
				{ label: "	Superb III	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CHHB	" },
				{ label: "	Superb III	", moc: 	280	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CJXA	" },
				{ label: "	Superb III	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	CZPB	" },
				{ label: "	Superb III	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	DKZA	" },
				{ label: "	Superb III	", moc: 	280	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2023	"	, kod_silnika: "	DNFE	" },
				{ label: "	Superb III	", moc: 	272	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2023	"	, kod_silnika: "	DNUA	" },
			]
			},
		"Yeti": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Yeti	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2009-2015	"	, kod_silnika: "	CBZB	" },
				{ label: "	Yeti	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	CYVB 	" },
				{ label: "	Yeti	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	CAXA	" },
				{ label: "	Yeti	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	CZCA	" },
				{ label: "	Yeti	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	CZDA	" },
				{ label: "	Yeti	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"	2009-2017	"	, kod_silnika: "	CDAA	" },
				{ label: "	Yeti	", moc: 	152	, pojemnosc: 	1800	, rok_produkcji: 	"	2009-2017	"	, kod_silnika: "	CDAB	" },
			]
			},
    },
	"SSANGYONG": {
		"Korando": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Korando	", moc: 	163	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	G15DTF (175.950)	" },
				{ label: "	Korando	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	G15DTF (175.950)	" },
			]
			},
		"Rexton": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Rexton	", moc: 	224	, pojemnosc: 	2000	, rok_produkcji: 	"	2021	"	, kod_silnika: "	G20G	" },
			]
			},
		"Tivoli": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Tivoli	", moc: 	128	, pojemnosc: 	1200	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	G12DTF	" },
				{ label: "	Tivoli	", moc: 	163	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	G15DTF (175.950)	" },
				{ label: "	Tivoli 	", moc: 	135	, pojemnosc: 	1500	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	G15DTF (175.950)	" },
			]
			},
		"Torres": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Torres 	", moc: 	163	, pojemnosc: 	1500	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	G15DTF (175.950)	" },
			]
			},
    },
	"SUBARU": {
		"Crosstrek Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Crosstrek Hybrid	", moc: 	136	, pojemnosc: 	2000	, rok_produkcji: 	"	2023-2024	"	, kod_silnika: "	FB20W	" },
			]
			},
		"Forester": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Forester	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2024	"	, kod_silnika: "	FA20	" },
				{ label: "	Forester	", moc: 	156	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	FB20D	" },
				{ label: "	Forester	", moc: 	146	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	FB20X	" },
				{ label: "	Forester	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	FB20X	" },
				{ label: "	Forester	", moc: 	169	, pojemnosc: 	2500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	FB25D	" },
			]
			},
		"Impreza Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Impreza Hybrid	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	FB20W	" },
			]
			},
		"Outback": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Outback	", moc: 	169	, pojemnosc: 	2500	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	FB25D	" },
			]
			},
		"XV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	XV	", moc: 	156	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	FB20D	" },
				{ label: "	XV	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	FB20X	" },
			]
			},
		"XV Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	XV Hybrid	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	FB20W	" },
			]
			},
    },
	"SUZUKI": {
		"Across Plug-In": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Across Plug-In	", moc: 	185	, pojemnosc: 	2500	, rok_produkcji: 	"	2020-2022	"	, kod_silnika: "	A25A-FXS	" },
			]
			},
		"S-Cross Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	S-Cross Hybrid	", moc: 	129	, pojemnosc: 	1400	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	K14D	" },
			]
			},
		"Swift V Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Swift V Hybrid	", moc: 	129	, pojemnosc: 	1400	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	K14D	" },
			]
			},
		"SX4 Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	SX4 Hybrid	", moc: 	129	, pojemnosc: 	1400	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	K14D	" },
			]
			},
		"Vitara Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Vitara Hybrid	", moc: 	129	, pojemnosc: 	1400	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	K14D	" },
			]
			},
    },
	"Toyota": {
		"Alphard": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Alphard	", moc: 	301	, pojemnosc: 	3500	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	2GR-FKS	" },
			]
			},
		"Auris": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Auris	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2018	"	, kod_silnika: "	8NR-FTS	" },
			]
			},
		"C-HR": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	C-HR	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2016-2023	"	, kod_silnika: "	8NR-FTS	" },
				{ label: "	C-HR	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2016-2023	"	, kod_silnika: "	8NR-FTS	" },
				{ label: "	C-HR	", moc: 	152	, pojemnosc: 	2000	, rok_produkcji: 	"	2019	"	, kod_silnika: "	M20A-FXS	" },
				{ label: "	C-HR	", moc: 	118	, pojemnosc: 	2000	, rok_produkcji: 	"	2019	"	, kod_silnika: "	M20A-FXS	" },
			]
			},
		"Camry": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Camry	", moc: 	167	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	6AR-FSE	" },
				{ label: "	Camry	", moc: 	167	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	6AR-FBS	" },
			]
			},
		"Camry Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Camry Hybrid	", moc: 	178	, pojemnosc: 	2500	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	A25A-FXS	" },
			]
			},
		"Corolla": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Corolla	", moc: 	116	, pojemnosc: 	1200	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	8NR-FTS	" },
				{ label: "	Corolla	", moc: 	177	, pojemnosc: 	2000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	M20A-FKB	" },
				{ label: "	Corolla	", moc: 	184	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	M20A-FXS	" },
				{ label: "	Corolla	", moc: 	152	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	M20A-FXS	" },
			]
			},
		"Corolla Cross": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Corolla Cross	", moc: 	196	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	M20A-FXS	" },
			]
			},
		"Corolla GR": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Corolla GR	", moc: 	299	, pojemnosc: 	1600	, rok_produkcji: 	"	2022	"	, kod_silnika: "	G16E-GTS	" },
				{ label: "	Corolla GR	", moc: 	305	, pojemnosc: 	1600	, rok_produkcji: 	"	2022	"	, kod_silnika: "	G16E-GTS	" },
			]
			},
		"Corolla Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Corolla Hybrid	", moc: 	152	, pojemnosc: 	2000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	M20A	" },
			]
			},
		"GT": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	GT	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2012-2024	"	, kod_silnika: "	FA20	" },
			]
			},
		"Hiace": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Hiace	", moc: 	294	, pojemnosc: 	3500	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	7GR-FKS	" },
			]
			},
		"Highlander": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Highlander	", moc: 	190	, pojemnosc: 	2500	, rok_produkcji: 	"	2019-2022	"	, kod_silnika: "	A25A-FXS	" },
				{ label: "	Highlander	", moc: 	243	, pojemnosc: 	2500	, rok_produkcji: 	"	2019-2022	"	, kod_silnika: "	A25A-FXS	" },
				{ label: "	Highlander	", moc: 	246	, pojemnosc: 	2500	, rok_produkcji: 	"	2019-2022	"	, kod_silnika: "	A25A-FXS	" },
				{ label: "	Highlander	", moc: 	249	, pojemnosc: 	3500	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	2GR-FKS	" },
			]
			},
		"Kluger": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Kluger	", moc: 	301	, pojemnosc: 	3500	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	2GR-FKS	" },
			]
			},
		"Proace Verso": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Proace Verso	", moc: 	131	, pojemnosc: 	1200	, rok_produkcji: 	"	2019-2020	"	, kod_silnika: "	EB2ADT/HN05	" },
			]
			},
		"RAV4": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	RAV4	", moc: 	173	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2022	"	, kod_silnika: "	M20A-FKS	" },
				{ label: "	RAV4	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2022	"	, kod_silnika: "	M20A-FKS	" },
				{ label: "	RAV4	", moc: 	175	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2022	"	, kod_silnika: "	M20A-FKS	" },
				{ label: "	RAV4	", moc: 	203	, pojemnosc: 	2500	, rok_produkcji: 	"	2018-2022	"	, kod_silnika: "	A25A-FKS	" },
				{ label: "	RAV4	", moc: 	178	, pojemnosc: 	2500	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	A25A-FXS	" },
				{ label: "	RAV4	", moc: 	185	, pojemnosc: 	2500	, rok_produkcji: 	"	2019-2020	"	, kod_silnika: "	A25A-FXS	" },
				{ label: "	RAV4	", moc: 	218	, pojemnosc: 	2500	, rok_produkcji: 	"	2018-2022	"	, kod_silnika: "	A25A-FXS	" },
				{ label: "	RAV4	", moc: 	222	, pojemnosc: 	2500	, rok_produkcji: 	"	2018-2022	"	, kod_silnika: "	A25A-FXS	" },
			]
			},
		"Sienna": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Sienna	", moc: 	301	, pojemnosc: 	3500	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	2GR-FKS	" },
			]
			},
		"Supra": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Supra	", moc: 	197	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B48B20B	" },
			]
			},
		"Tacoma": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Tacoma	", moc: 	301	, pojemnosc: 	3500	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	2GR-FKS	" },
				{ label: "	Tacoma	", moc: 	282	, pojemnosc: 	3500	, rok_produkcji: 	"	2016-2023	"	, kod_silnika: "	2GR-FKS	" },
				{ label: "	Tacoma	", moc: 	279	, pojemnosc: 	3500	, rok_produkcji: 	"	2019-2021	"	, kod_silnika: "	2GR-FSE	" },
			]
			},
		"Yaris": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Yaris	", moc: 	125	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2021	"	, kod_silnika: "	M15A-FKS	" },
				{ label: "	Yaris	", moc: 	261	, pojemnosc: 	1600	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	G16E-GTS	" },
			]
			},
		"Yaris GR": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Yaris GR	", moc: 	272	, pojemnosc: 	1600	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	G16E-GTS	" },
			]
			},
    },
	"VOLKSWAGEN": {
		"Arteon": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Arteon	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Arteon	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	DADA	" },
				{ label: "	Arteon	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	DPBA	" },
				{ label: "	Arteon	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Arteon	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	CZPB	" },
				{ label: "	Arteon	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	DKZA	" },
				{ label: "	Arteon	", moc: 	280	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	DNFE	" },
				{ label: "	Arteon	", moc: 	320	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	DNFG	" },
				{ label: "	Arteon	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	DNNA	" },
				{ label: "	Arteon	", moc: 	272	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	DNUA	" },
			]
			},
		"Atlas": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Atlas	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	CXDA	" },
				{ label: "	Atlas	", moc: 	280	, pojemnosc: 	3600	, rok_produkcji: 	"	2016-2023	"	, kod_silnika: "	CDVC	" },
				{ label: "	Atlas	", moc: 	249	, pojemnosc: 	3600	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	CDVD	" },
			]
			},
		"Beetle": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Beetle	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2011-2019	"	, kod_silnika: "	CBZB	" },
				{ label: "	Beetle	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2019	"	, kod_silnika: "	CYVD	" },
				{ label: "	Beetle	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2011-2016	"	, kod_silnika: "	CAVD	" },
				{ label: "	Beetle	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2011-2016	"	, kod_silnika: "	CTHD	" },
				{ label: "	Beetle	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2019	"	, kod_silnika: "	CZDA	" },
				{ label: "	Beetle	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2011-2016	"	, kod_silnika: "	CCTA	" },
				{ label: "	Beetle	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2012	"	, kod_silnika: "	CCZA 	" },
				{ label: "	Beetle	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	CULC	" },
			]
			},
		"Caddy": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Caddy	", moc: 	99	, pojemnosc: 	1000	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	CHZG / DKRD / DKRE	" },
				{ label: "	Caddy	", moc: 	84	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CYVC	" },
				{ label: "	Caddy	", moc: 	110	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2023	"	, kod_silnika: "	CPWA	" },
				{ label: "	Caddy	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CZCB	" },
				{ label: "	Caddy	", moc: 	131	, pojemnosc: 	1400	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DJKD	" },
				{ label: "	Caddy	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"	2022-2024	"	, kod_silnika: "	DHFA	" },
				{ label: "	Caddy	", moc: 	114	, pojemnosc: 	1500	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	DPBC	" },
				{ label: "	Caddy 	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	CBZA	" },
				{ label: "	Caddy 	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	CBZB	" },
			]
			},
		"Cross": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Cross	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	DLAC	" },
			]
			},
		"Eos": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Eos	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2015	"	, kod_silnika: "	CAVD	" },
				{ label: "	Eos	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"	2007-2015	"	, kod_silnika: "	CAXA	" },
				{ label: "	Eos	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2015	"	, kod_silnika: "	CTHD	" },
				{ label: "	Eos	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2006-2008	"	, kod_silnika: "	BVY	" },
				{ label: "	Eos	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2006-2015	"	, kod_silnika: "	CAWB	" },
				{ label: "	Eos	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2006-2015	"	, kod_silnika: "	CCZA 	" },
				{ label: "	Eos	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2009-2015	"	, kod_silnika: "	CCZB	" },
				{ label: "	Eos	", moc: 	260	, pojemnosc: 	3600	, rok_produkcji: 	"	2009-2010	"	, kod_silnika: "	CDVA	" },
			]
			},
		"Golf": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Golf	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2006-2009	"	, kod_silnika: "	BMY	" },
				{ label: "	Golf	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DFYA	" },
			]
			},
		"Golf Sportsvan": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Golf Sportsvan	", moc: 	86	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DKLB	" },
				{ label: "	Golf Sportsvan	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2015	"	, kod_silnika: "	DKRF	" },
				{ label: "	Golf Sportsvan	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DACA	" },
				{ label: "	Golf Sportsvan	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DADA	" },
				{ label: "	Golf Sportsvan	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2020	"	, kod_silnika: "	DPBA	" },
			]
			},	
		"Golf V": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Golf V	", moc: 	170	, pojemnosc: 	1400	, rok_produkcji: 	"	2005-2009	"	, kod_silnika: "	BLG	" },
				{ label: "	Golf V	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2013	"	, kod_silnika: "	CAVD	" },
				{ label: "	Golf V	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2013	"	, kod_silnika: "	CTHD	" },
				{ label: "	Golf V	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2004-2008	"	, kod_silnika: "	BLR	" },
				{ label: "	Golf V	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2004-2008	"	, kod_silnika: "	BVY	" },
				{ label: "	Golf V	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2011-2020	"	, kod_silnika: "	CAWB	" },
				{ label: "	Golf V	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2007-2009	"	, kod_silnika: "	CCTA	" },
			]
			},
		"Golf VI": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Golf VI	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2013	"	, kod_silnika: "	CBZA	" },
				{ label: "	Golf VI	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2009-2016	"	, kod_silnika: "	CBZB	" },
				{ label: "	Golf VI	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	CJZA 	" },
				{ label: "	Golf VI	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	CJZB	" },
				{ label: "	Golf VI	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	CYVD	" },
				{ label: "	Golf VI	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2013	"	, kod_silnika: "	CAVD	" },
				{ label: "	Golf VI	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"	2007-2016	"	, kod_silnika: "	CAXA	" },
				{ label: "	Golf VI	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2013	"	, kod_silnika: "	CTHD	" },
				{ label: "	Golf VI	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2017	"	, kod_silnika: "	CXSB	" },
				{ label: "	Golf VI	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	CZCA	" },
				{ label: "	Golf VI	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	CZDA	" },
				{ label: "	Golf VI	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"	2009-2011	"	, kod_silnika: "	CDAA	" },
				{ label: "	Golf VI	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2009-2013	"	, kod_silnika: "	CCTA	" },
				{ label: "	Golf VI	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2009-2013	"	, kod_silnika: "	CCZA 	" },
				{ label: "	Golf VI	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2009-2012	"	, kod_silnika: "	CCZB	" },
				{ label: "	Golf VI	", moc: 	265	, pojemnosc: 	2000	, rok_produkcji: 	"	2009-2016	"	, kod_silnika: "	CDLA	" },
				{ label: "	Golf VI	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	CULC	" },
			]
			},
		"Golf VII": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Golf VII	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	CHZC	" },
				{ label: "	Golf VII	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	CHZD	" },
				{ label: "	Golf VII	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	DKRF	" },
				{ label: "	Golf VII	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2017	"	, kod_silnika: "	CJZA 	" },
				{ label: "	Golf VII	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2017	"	, kod_silnika: "	CJZB	" },
				{ label: "	Golf VII	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2017	"	, kod_silnika: "	CYVA	" },
				{ label: "	Golf VII	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CYVB 	" },
				{ label: "	Golf VII	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	CHPB	" },
				{ label: "	Golf VII	", moc: 	110	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	CPWA	" },
				{ label: "	Golf VII	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"	2012-2022	"	, kod_silnika: "	CXSA	" },
				{ label: "	Golf VII	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2017	"	, kod_silnika: "	CZCA	" },
				{ label: "	Golf VII	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CZDA	" },
				{ label: "	Golf VII	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	CZDD	" },
				{ label: "	Golf VII	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CZEA	" },
				{ label: "	Golf VII	", moc: 	204	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2024	"	, kod_silnika: "	DGEA	" },
				{ label: "	Golf VII	", moc: 	245	, pojemnosc: 	1400	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DGEA	" },
				{ label: "	Golf VII	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DACA	" },
				{ label: "	Golf VII	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DADA	" },
				{ label: "	Golf VII	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DPCA	" },
				{ label: "	Golf VII	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	CJSB	" },
				{ label: "	Golf VII	", moc: 	170	, pojemnosc: 	1800	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	CXBB	" },
				{ label: "	Golf VII	", moc: 	230	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2020	"	, kod_silnika: "	CHHA	" },
				{ label: "	Golf VII	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	CHHB	" },
				{ label: "	Golf VII	", moc: 	280	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	CJXB	" },
				{ label: "	Golf VII	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	CJXC	" },
				{ label: "	Golf VII	", moc: 	290	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	CJXD	" },
				{ label: "	Golf VII	", moc: 	265	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2017	"	, kod_silnika: "	CJXE	" },
				{ label: "	Golf VII	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	CJXG	" },
				{ label: "	Golf VII	", moc: 	290	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	CJXH	" },
				{ label: "	Golf VII	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2022	"	, kod_silnika: "	CXDA	" },
				{ label: "	Golf VII	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2017- 2020	"	, kod_silnika: "	DKTB	" },
				{ label: "	Golf VII	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2020	"	, kod_silnika: "	DNUE	" },
			]
			},
		"Golf VII GTE-Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Golf VII GTE-Hybrid	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CUKB	" },
			]
			},
		"Golf VIII": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Golf VIII	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA	" },
				{ label: "	Golf VIII	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2012-2017	"	, kod_silnika: "	CHPA	" },
				{ label: "	Golf VIII	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2012-2017	"	, kod_silnika: "	CPTA	" },
				{ label: "	Golf VIII	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DHFA	" },
				{ label: "	Golf VIII	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	DPBA	" },
				{ label: "	Golf VIII	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	DNFC	" },
				{ label: "	Golf VIII	", moc: 	333	, pojemnosc: 	2000	, rok_produkcji: 	"	2022-2023	"	, kod_silnika: "	DNFF	" },
				{ label: "	Golf VIII	", moc: 	320	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	DNFG	" },
				{ label: "	Golf VIII	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2021-2023	"	, kod_silnika: "	DNNA	" },
				{ label: "	Golf VIII	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	DNPA	" },
			]
			},
		"Jetta": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Jetta	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2017	"	, kod_silnika: "	CYVD	" },
				{ label: "	Jetta	", moc: 	170	, pojemnosc: 	1400	, rok_produkcji: 	"	2006-2010	"	, kod_silnika: "	BLG	" },
				{ label: "	Jetta	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2006-2010	"	, kod_silnika: "	BMY	" },
				{ label: "	Jetta	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2005-2010	"	, kod_silnika: "	BLR	" },
				{ label: "	Jetta	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2005-2010	"	, kod_silnika: "	BVY	" },
				{ label: "	Jetta	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2005-2010	"	, kod_silnika: "	CAWB	" },
				{ label: "	Jetta	", moc: 	231	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	DKFA	" },
			]
			},
		"Jetta III": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Jetta III	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2017	"	, kod_silnika: "	CBZB	" },
				{ label: "	Jetta III	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"	2007-2017	"	, kod_silnika: "	CAXA	" },
				{ label: "	Jetta III	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2005-2010	"	, kod_silnika: "	CCTA	" },
				{ label: "	Jetta III	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2005-2010	"	, kod_silnika: "	CCZA 	" },
			]
			},
		"Jetta IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Jetta IV	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2011-2024	"	, kod_silnika: "	CAVA	" },
				{ label: "	Jetta IV	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2024	"	, kod_silnika: "	CAVD	" },
				{ label: "	Jetta IV	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2011-2024	"	, kod_silnika: "	CTHA	" },
				{ label: "	Jetta IV	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2011-2024	"	, kod_silnika: "	CTHD	" },
				{ label: "	Jetta IV	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CZCA	" },
				{ label: "	Jetta IV	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CZDA	" },
				{ label: "	Jetta IV	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2022	"	, kod_silnika: "	CCTA	" },
				{ label: "	Jetta IV	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2020	"	, kod_silnika: "	CCZA 	" },
			]
			},
		"Jetta VII": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Jetta VII	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	CZDA	" },
			]
			},
		"Multivan": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Multivan	", moc: 	218	, pojemnosc: 	1400	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	DGEA	" },
			]
			},
		"Passat": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Passat	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2014	"	, kod_silnika: "	CAXA	" },
				{ label: "	Passat	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2014	"	, kod_silnika: "	CDGA	" },
				{ label: "	Passat	", moc: 	170	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2014	"	, kod_silnika: "	CKMA	" },
				{ label: "	Passat	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2012-2014	"	, kod_silnika: "	CTHD	" },
				{ label: "	Passat	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CZCA	" },
				{ label: "	Passat	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CZDA	" },
				{ label: "	Passat	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CZEA	" },
				{ label: "	Passat	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Passat	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Passat	", moc: 	160	, pojemnosc: 	1800	, rok_produkcji: 	"	2007-2014	"	, kod_silnika: "	CDAA	" },
				{ label: "	Passat	", moc: 	152	, pojemnosc: 	1800	, rok_produkcji: 	"	2009-2014	"	, kod_silnika: "	CDAB	" },
				{ label: "	Passat	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CJSA	" },
				{ label: "	Passat	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CJSC	" },
				{ label: "	Passat	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2005-2010	"	, kod_silnika: "	BLR	" },
				{ label: "	Passat	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2005-2010	"	, kod_silnika: "	BVY	" },
				{ label: "	Passat	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2005-2012	"	, kod_silnika: "	CAWB	" },
				{ label: "	Passat	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2005-2012	"	, kod_silnika: "	CCZA 	" },
				{ label: "	Passat	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2014	"	, kod_silnika: "	CCZB	" },
				{ label: "	Passat	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CHHB	" },
				{ label: "	Passat	", moc: 	280	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CJXA	" },
				{ label: "	Passat	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CXDA	" },
				{ label: "	Passat	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	CZPB	" },
				{ label: "	Passat	", moc: 	180	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DDSA	" },
				{ label: "	Passat	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	DKZA	" },
				{ label: "	Passat	", moc: 	280	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2023	"	, kod_silnika: "	DNFE	" },
				{ label: "	Passat	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	DNNA	" },
				{ label: "	Passat	", moc: 	272	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	DNUA	" },
			]
			},
		"Passat GTE-Hybrid": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Passat GTE-Hybrid	", moc: 	156	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CUKC	" },
			]
			},
		"Phaeton": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Phaeton	", moc: 	280	, pojemnosc: 	3600	, rok_produkcji: 	"	2008-2016	"	, kod_silnika: "	CMVA	" },
			]
			},
		"Polo": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Polo	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	CHZB/CHZL	" },
				{ label: "	Polo	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2014-2020	"	, kod_silnika: "	CHZC	" },
				{ label: "	Polo	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	CHZJ / DKJA / DKRF	" },
				{ label: "	Polo	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DKLA	" },
				{ label: "	Polo	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2021	"	, kod_silnika: "	DLAC	" },
				{ label: "	Polo	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSA	" },
				{ label: "	Polo	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSB	" },
				{ label: "	Polo	", moc: 	86	, pojemnosc: 	1200	, rok_produkcji: 	"	2012-2017	"	, kod_silnika: "	CJZC	" },
				{ label: "	Polo	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	CJZD	" },
				{ label: "	Polo	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2012-2014	"	, kod_silnika: "	CPTA	" },
				{ label: "	Polo	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	CZCA	" },
				{ label: "	Polo	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	CZEA	" },
				{ label: "	Polo	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DADA	" },
				{ label: "	Polo	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2021	"	, kod_silnika: "	DPCA	" },
			]
			},
		"Polo IV": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Polo IV	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2009-2022	"	, kod_silnika: "	CBZB	" },
				{ label: "	Polo IV	", moc: 	90	, pojemnosc: 	1200	, rok_produkcji: 	"	2011-2014	"	, kod_silnika: "	CBZC	" },
			]
			},
		"Polo V": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Polo V	", moc: 	180	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2024	"	, kod_silnika: "	CAVE	" },
				{ label: "	Polo V	", moc: 	180	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2024	"	, kod_silnika: "	CTHE	" },
				{ label: "	Polo V	", moc: 	192	, pojemnosc: 	1800	, rok_produkcji: 	"	2014-2022	"	, kod_silnika: "	DAJA	" },
			]
			},
		"Polo VI": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Polo VI	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA	" },
				{ label: "	Polo VI	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	DKZC	" },
			]
			},
		"Scirocco": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Scirocco	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2017	"	, kod_silnika: "	CAXA	" },
				{ label: "	Scirocco	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2008-2009	"	, kod_silnika: "	CAWB	" },
				{ label: "	Scirocco	", moc: 	265	, pojemnosc: 	2000	, rok_produkcji: 	"	2009-2017	"	, kod_silnika: "	CDLA	" },
			]
			},
		"Scirocco III": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Scirocco III	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2017	"	, kod_silnika: "	CAVD	" },
				{ label: "	Scirocco III	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2017	"	, kod_silnika: "	CTHD	" },
				{ label: "	Scirocco III	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2014-2017	"	, kod_silnika: "	CXSB	" },
				{ label: "	Scirocco III	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2017	"	, kod_silnika: "	CZCA	" },
				{ label: "	Scirocco III	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2017	"	, kod_silnika: "	CZDA	" },
				{ label: "	Scirocco III	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2009-2017	"	, kod_silnika: "	CCZB	" },
				{ label: "	Scirocco III	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2017	"	, kod_silnika: "	CULC	" },
			]
			},
		"Sharan": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Sharan	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2024	"	, kod_silnika: "	CAVA	" },
				{ label: "	Sharan	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2024	"	, kod_silnika: "	CTHA	" },
				{ label: "	Sharan	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CZDA	" },
				{ label: "	Sharan	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	DJKA	" },
				{ label: "	Sharan	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	CCZA 	" },
			]
			},
		"T-Cross": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	T-Cross	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DKLA	" },
				{ label: "	T-Cross	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DKRF	" },
				{ label: "	T-Cross	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA	" },
				{ label: "	T-Cross	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSA	" },
				{ label: "	T-Cross	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSB	" },
				{ label: "	T-Cross	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	T-Cross	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	T-Cross	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DXDB	" },
			]
			},
		"T-Roc": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	T-Roc	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	CHZJ	" },
				{ label: "	T-Roc	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DKRA	" },
				{ label: "	T-Roc	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DKRF	" },
				{ label: "	T-Roc	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA	" },
				{ label: "	T-Roc	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSA	" },
				{ label: "	T-Roc	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	T-Roc	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	T-Roc	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	DXDB	" },
				{ label: "	T-Roc	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	CZPB	" },
				{ label: "	T-Roc	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	DKZA	" },
				{ label: "	T-Roc	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	DNFC	" },
				{ label: "	T-Roc	", moc: 	301	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2023	"	, kod_silnika: "	DNUE	" },
			]
			},
		"Taigo": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Taigo	", moc: 	110	, pojemnosc: 	1000	, rok_produkcji: 	"	2020	"	, kod_silnika: "	DLAA 	" },
				{ label: "	Taigo	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSA	" },
				{ label: "	Taigo	", moc: 	95	, pojemnosc: 	1000	, rok_produkcji: 	"	2024	"	, kod_silnika: "	DUSB	" },
				{ label: "	Taigo	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	DPBA	" },
				{ label: "	Taigo	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Taigo	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	DXDB	" },
			]
			},
		"Teramont": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Teramont	", moc: 	249	, pojemnosc: 	3600	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	CDVD	" },
			]
			},
		"Tiguan": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Tiguan	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2007-2018	"	, kod_silnika: "	BWK	" },
				{ label: "	Tiguan	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2008-2018	"	, kod_silnika: "	CAVA	" },
				{ label: "	Tiguan	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2011-2018	"	, kod_silnika: "	CAVD	" },
				{ label: "	Tiguan	", moc: 	122	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2018	"	, kod_silnika: "	CAXA	" },
				{ label: "	Tiguan	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2007-2018	"	, kod_silnika: "	CTHA	" },
				{ label: "	Tiguan	", moc: 	160	, pojemnosc: 	1400	, rok_produkcji: 	"	2011-2018	"	, kod_silnika: "	CTHD	" },
				{ label: "	Tiguan	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	CZCA	" },
				{ label: "	Tiguan	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	CZDA	" },
				{ label: "	Tiguan	", moc: 	125	, pojemnosc: 	1400	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	CZDB	" },
				{ label: "	Tiguan	", moc: 	245	, pojemnosc: 	1400	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	DGEA	" },
				{ label: "	Tiguan	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2016-2023	"	, kod_silnika: "	DJVA	" },
				{ label: "	Tiguan	", moc: 	131	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DACB	" },
				{ label: "	Tiguan	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Tiguan	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Tiguan	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DXDB	" },
				{ label: "	Tiguan	", moc: 	170	, pojemnosc: 	2000	, rok_produkcji: 	"	2011-2020	"	, kod_silnika: "	CAWA	" },
				{ label: "	Tiguan	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2007-2018	"	, kod_silnika: "	CAWB	" },
				{ label: "	Tiguan	", moc: 	200	, pojemnosc: 	2000	, rok_produkcji: 	"	2007-2018	"	, kod_silnika: "	CCZA 	" },
				{ label: "	Tiguan	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2011-2018	"	, kod_silnika: "	CCZB	" },
				{ label: "	Tiguan	", moc: 	170	, pojemnosc: 	2000	, rok_produkcji: 	"	2007-2018	"	, kod_silnika: "	CCZC	" },
				{ label: "	Tiguan	", moc: 	180	, pojemnosc: 	2000	, rok_produkcji: 	"	2011-2018	"	, kod_silnika: "	CCZD	" },
				{ label: "	Tiguan	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2022	"	, kod_silnika: "	CHHB	" },
				{ label: "	Tiguan	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2022	"	, kod_silnika: "	CXDA	" },
				{ label: "	Tiguan	", moc: 	180	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2023	"	, kod_silnika: "	CZPA	" },
				{ label: "	Tiguan	", moc: 	186	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2023	"	, kod_silnika: "	DGUA	" },
				{ label: "	Tiguan	", moc: 	180	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	DGVA	" },
				{ label: "	Tiguan	", moc: 	230	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	DKTA	" },
				{ label: "	Tiguan	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	DKZA	" },
				{ label: "	Tiguan	", moc: 	320	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	DNFG	" },
				{ label: "	Tiguan	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	DNLA	" },
				{ label: "	Tiguan	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2023	"	, kod_silnika: "	DNNA	" },
				{ label: "	Tiguan	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	DNPA	" },
			]
			},
		"Touareg": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Touareg	", moc: 	379	, pojemnosc: 	3000	, rok_produkcji: 	"	2010-2018	"	, kod_silnika: "	CGEA	" },
				{ label: "	Touareg	", moc: 	379	, pojemnosc: 	3000	, rok_produkcji: 	"	2010-2018	"	, kod_silnika: "	CGFA	" },
				{ label: "	Touareg	", moc: 	280	, pojemnosc: 	3600	, rok_produkcji: 	"	2010-2018	"	, kod_silnika: "	CGRA	" },
			]
			},
		"Touran": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Touran	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DKRB	" },
				{ label: "	Touran	", moc: 	105	, pojemnosc: 	1200	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	CBZB	" },
				{ label: "	Touran	", moc: 	110	, pojemnosc: 	1200	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CYVB 	" },
				{ label: "	Touran	", moc: 	170	, pojemnosc: 	1400	, rok_produkcji: 	"	2006-2010	"	, kod_silnika: "	BLG	" },
				{ label: "	Touran	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2006-2010	"	, kod_silnika: "	BMY	" },
				{ label: "	Touran	", moc: 	170	, pojemnosc: 	1400	, rok_produkcji: 	"	2006-2015	"	, kod_silnika: "	CAVB	" },
				{ label: "	Touran	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2006-2015	"	, kod_silnika: "	CAVC	" },
				{ label: "	Touran	", moc: 	150	, pojemnosc: 	1400	, rok_produkcji: 	"	2009-2015	"	, kod_silnika: "	CDGA	" },
				{ label: "	Touran	", moc: 	170	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	CTHB	" },
				{ label: "	Touran	", moc: 	140	, pojemnosc: 	1400	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	CTHC	" },
				{ label: "	Touran	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DADA	" },
				{ label: "	Touran	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DPBA	" },
				{ label: "	Touran	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DPCA	" },
				{ label: "	Touran	", moc: 	150	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	DXDB	" },
				{ label: "	Touran	", moc: 	180	, pojemnosc: 	1800	, rok_produkcji: 	"	2015-2022	"	, kod_silnika: "	CJSA	" },
				{ label: "	Touran	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2003-2007	"	, kod_silnika: "	BLR	" },
				{ label: "	Touran	", moc: 	150	, pojemnosc: 	2000	, rok_produkcji: 	"	2003-2007	"	, kod_silnika: "	BVY	" },
			]
			},
		"Up": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	Up	", moc: 	90	, pojemnosc: 	1000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	CHZA	" },
				{ label: "	Up	", moc: 	90	, pojemnosc: 	1000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	DKLC	" },
				{ label: "	Up	", moc: 	116	, pojemnosc: 	1000	, rok_produkcji: 	"	2017-2020	"	, kod_silnika: "	DKRA	" },
			]
			},
    },
	"VOLVO": {
		"S60": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	S60	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	B4164T	" },
				{ label: "	S60	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2011-2015	"	, kod_silnika: "	B4164T2	" },
				{ label: "	S60	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	B4164T3	" },
				{ label: "	S60	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	B4204T11	" },
				{ label: "	S60	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2018	"	, kod_silnika: "	B4204T19	" },
				{ label: "	S60	", moc: 	254	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T23	" },
				{ label: "	S60	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	B4204T26	" },
				{ label: "	S60	", moc: 	253	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	B4204T26P	" },
				{ label: "	S60	", moc: 	407	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T27	" },
				{ label: "	S60	", moc: 	326	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T29	" },
				{ label: "	S60	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T29	" },
				{ label: "	S60	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T31	" },
				{ label: "	S60	", moc: 	340	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T34	" },
				{ label: "	S60	", moc: 	390	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T34	" },
				{ label: "	S60	", moc: 	407	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T35	" },
				{ label: "	S60	", moc: 	152	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	B4204T37	" },
				{ label: "	S60	", moc: 	152	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2018	"	, kod_silnika: "	B4204T37	" },
				{ label: "	S60	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T44	" },
				{ label: "	S60	", moc: 	340	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T46	" },
				{ label: "	S60	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	B4204T56	" },
				{ label: "	S60	", moc: 	456	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	B4204T56	" },
				{ label: "	S60	", moc: 	203	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2011	"	, kod_silnika: "	B4204T6	" },
				{ label: "	S60	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2014	"	, kod_silnika: "	B4204T7	" },
				{ label: "	S60	", moc: 	306	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	B4204T9	" },
				{ label: "	S60	", moc: 	299	, pojemnosc: 	2000	, rok_produkcji: 	"	2021-2023	"	, kod_silnika: "	B420T	" },
			]
			},
		"S80": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	S80	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2014	"	, kod_silnika: "	B4164T	" },
				{ label: "	S80	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2011-2014	"	, kod_silnika: "	B4164T2	" },
				{ label: "	S80	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2017	"	, kod_silnika: "	B4204T11	" },
				{ label: "	S80	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	B4204T15	" },
				{ label: "	S80	", moc: 	203	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2011	"	, kod_silnika: "	B4204T6	" },
				{ label: "	S80	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2016	"	, kod_silnika: "	B4204T7	" },
			]
			},
		"S90": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	S90	", moc: 	254	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2024	"	, kod_silnika: "	B4204T23	" },
				{ label: "	S90	", moc: 	261	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2024	"	, kod_silnika: "	B4204T23	" },
				{ label: "	S90	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	B4204T26	" },
				{ label: "	S90	", moc: 	253	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T26	" },
				{ label: "	S90	", moc: 	320	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	B4204T27	" },
				{ label: "	S90	", moc: 	335	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2020	"	, kod_silnika: "	B4204T27	" },
				{ label: "	S90	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T29	" },
				{ label: "	S90	", moc: 	326	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T29	" },
				{ label: "	S90	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T31	" },
				{ label: "	S90	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T31	" },
				{ label: "	S90	", moc: 	317	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T34	" },
				{ label: "	S90	", moc: 	390	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	B4204T34	" },
				{ label: "	S90	", moc: 	335	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T35	" },
				{ label: "	S90	", moc: 	407	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T35	" },
				{ label: "	S90	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T44	" },
				{ label: "	S90	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	B4204T56	" },
				{ label: "	S90	", moc: 	456	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	B4204T56	" },
				{ label: "	S90	", moc: 	299	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	B420T	" },
			]
			},
		"V40": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	V40	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2012-2016	"	, kod_silnika: "	B4164T	" },
				{ label: "	V40	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"	2012-2016	"	, kod_silnika: "	B4164T3	" },
				{ label: "	V40	", moc: 	120	, pojemnosc: 	1600	, rok_produkcji: 	"	2013-2016	"	, kod_silnika: "	B4164T4	" },
				{ label: "	V40	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2017	"	, kod_silnika: "	B4204T11	" },
				{ label: "	V40	", moc: 	122	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	B4204T17	" },
				{ label: "	V40	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2019	"	, kod_silnika: "	B4204T19	" },
				{ label: "	V40	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	B4204T21	" },
				{ label: "	V40	", moc: 	152	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2019	"	, kod_silnika: "	B4204T33	" },
				{ label: "	V40	", moc: 	152	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2019	"	, kod_silnika: "	B4204T37	" },
				{ label: "	V40	", moc: 	122	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	B4204T38	" },
				{ label: "	V40	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2019	"	, kod_silnika: "	B4204T41	" },
			]
			},
		"V60": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	V60	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	B4164T	" },
				{ label: "	V60	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2011-2015	"	, kod_silnika: "	B4164T2	" },
				{ label: "	V60	", moc: 	150	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	B4164T3	" },
				{ label: "	V60	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	B4204T11	" },
				{ label: "	V60	", moc: 	220	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	B4204T15	" },
				{ label: "	V60	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2018	"	, kod_silnika: "	B4204T19	" },
				{ label: "	V60	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	B4204T26	" },
				{ label: "	V60	", moc: 	253	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T26P	" },
				{ label: "	V60	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	B4204T29	" },
				{ label: "	V60	", moc: 	326	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	B4204T29	" },
				{ label: "	V60	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T31	" },
				{ label: "	V60	", moc: 	390	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	B4204T34	" },
				{ label: "	V60	", moc: 	152	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2018	"	, kod_silnika: "	B4204T37	" },
				{ label: "	V60	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	B4204T41	" },
				{ label: "	V60	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T44	" },
				{ label: "	V60	", moc: 	340	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T46	" },
				{ label: "	V60	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	B4204T56	" },
				{ label: "	V60	", moc: 	456	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	B4204T56	" },
				{ label: "	V60	", moc: 	203	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2012	"	, kod_silnika: "	B4204T6	" },
				{ label: "	V60	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2014	"	, kod_silnika: "	B4204T7	" },
				{ label: "	V60	", moc: 	306	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	B4204T9	" },
				{ label: "	V60	", moc: 	299	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	B420T	" },
			]
			},
		"V70": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	V70	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2010-2015	"	, kod_silnika: "	B4164T	" },
				{ label: "	V70	", moc: 	180	, pojemnosc: 	1600	, rok_produkcji: 	"	2011-2015	"	, kod_silnika: "	B4164T2	" },
				{ label: "	V70	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2017	"	, kod_silnika: "	B4204T11	" },
				{ label: "	V70	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2016	"	, kod_silnika: "	B4204T19	" },
				{ label: "	V70	", moc: 	203	, pojemnosc: 	2000	, rok_produkcji: 	"	2009-2011	"	, kod_silnika: "	B4204T6	" },
				{ label: "	V70	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2014	"	, kod_silnika: "	B4204T7	" },
			]
			},
		"V90": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	V90	", moc: 	254	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2024	"	, kod_silnika: "	B4204T23	" },
				{ label: "	V90	", moc: 	261	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2018	"	, kod_silnika: "	B4204T23	" },
				{ label: "	V90	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	B4204T26	" },
				{ label: "	V90	", moc: 	253	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T26	" },
				{ label: "	V90	", moc: 	320	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2024	"	, kod_silnika: "	B4204T27	" },
				{ label: "	V90	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T29	" },
				{ label: "	V90	", moc: 	299	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	B4204T29	" },
				{ label: "	V90	", moc: 	326	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T29	" },
				{ label: "	V90	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T31	" },
				{ label: "	V90	", moc: 	211	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T31	" },
				{ label: "	V90	", moc: 	317	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	B4204T34	" },
				{ label: "	V90	", moc: 	390	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	B4204T34	" },
				{ label: "	V90	", moc: 	335	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2024	"	, kod_silnika: "	B4204T35	" },
				{ label: "	V90	", moc: 	407	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2018	"	, kod_silnika: "	B4204T35	" },
				{ label: "	V90	", moc: 	340	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2024	"	, kod_silnika: "	B4204T46	" },
				{ label: "	V90	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	B4204T56	" },
				{ label: "	V90	", moc: 	456	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	B4204T56	" },
				{ label: "	V90	", moc: 	299	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	B420T	" },
				{ label: "	V90	", moc: 	348	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	B420T	" },
			]
			},
		"XC40": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	XC40	", moc: 	156	, pojemnosc: 	1500	, rok_produkcji: 	"	2018-2019	"	, kod_silnika: "	B3154T 	" },
				{ label: "	XC40	", moc: 	163	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B3154T7	" },
				{ label: "	XC40	", moc: 	129	, pojemnosc: 	1500	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B3154T9	" },
				{ label: "	XC40	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T14	" },
				{ label: "	XC40	", moc: 	248	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2021	"	, kod_silnika: "	B4204T14	" },
				{ label: "	XC40	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T18	" },
				{ label: "	XC40	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	B4204T31	" },
				{ label: "	XC40	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	B4204T47	" },
			]
			},
		"XC60": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	XC60	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2018	"	, kod_silnika: "	B4204T11	" },
				{ label: "	XC60	", moc: 	254	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T23	" },
				{ label: "	XC60	", moc: 	261	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2018	"	, kod_silnika: "	B4204T23	" },
				{ label: "	XC60	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T26	" },
				{ label: "	XC60	", moc: 	253	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T26P	" },
				{ label: "	XC60	", moc: 	320	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T27	" },
				{ label: "	XC60	", moc: 	335	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T27	" },
				{ label: "	XC60	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T29	" },
				{ label: "	XC60	", moc: 	326	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T29P	" },
				{ label: "	XC60	", moc: 	326	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	B4204T29P	" },
				{ label: "	XC60	", moc: 	190	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	B4204T31	" },
				{ label: "	XC60	", moc: 	405	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T34	" },
				{ label: "	XC60	", moc: 	390	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2024	"	, kod_silnika: "	B4204T34	" },
				{ label: "	XC60	", moc: 	335	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T35	" },
				{ label: "	XC60	", moc: 	407	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T35	" },
				{ label: "	XC60	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2017	"	, kod_silnika: "	B4204T41	" },
				{ label: "	XC60	", moc: 	340	, pojemnosc: 	2000	, rok_produkcji: 	"	2021-2024	"	, kod_silnika: "	B4204T46	" },
				{ label: "	XC60	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	B4204T56	" },
				{ label: "	XC60	", moc: 	203	, pojemnosc: 	2000	, rok_produkcji: 	"	2009-2012	"	, kod_silnika: "	B4204T6	" },
				{ label: "	XC60	", moc: 	241	, pojemnosc: 	2000	, rok_produkcji: 	"	2010-2017	"	, kod_silnika: "	B4204T7	" },
				{ label: "	XC60	", moc: 	306	, pojemnosc: 	2000	, rok_produkcji: 	"	2013-2018	"	, kod_silnika: "	B4204T9	" },
				{ label: "	XC60	", moc: 	299	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	B420T	" },
			]
			},
		"XC70": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	XC70	", moc: 	245	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2017	"	, kod_silnika: "	B4204T11	" },
			]
			},
		"XC90": {
			  default: { moc: 160, pojemnosc: 1500, rok_produkcji: 2021, kod_silnika: "CA4GB15TD" },
			  variants: [
				{ label: "	XC90	", moc: 	254	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2018	"	, kod_silnika: "	B4204T23	" },
				{ label: "	XC90	", moc: 	261	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T23	" },
				{ label: "	XC90	", moc: 	249	, pojemnosc: 	2000	, rok_produkcji: 	"	2016-2018	"	, kod_silnika: "	B4204T23	" },
				{ label: "	XC90	", moc: 	250	, pojemnosc: 	2000	, rok_produkcji: 	"	2018-2020	"	, kod_silnika: "	B4204T26	" },
				{ label: "	XC90	", moc: 	239	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T26	" },
				{ label: "	XC90	", moc: 	253	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T26P	" },
				{ label: "	XC90	", moc: 	335	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T27	" },
				{ label: "	XC90	", moc: 	320	, pojemnosc: 	2000	, rok_produkcji: 	"	2014-2019	"	, kod_silnika: "	B4204T27	" },
				{ label: "	XC90	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T29	" },
				{ label: "	XC90	", moc: 	326	, pojemnosc: 	2000	, rok_produkcji: 	"	2017-2024	"	, kod_silnika: "	B4204T29P	" },
				{ label: "	XC90	", moc: 	317	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T34	" },
				{ label: "	XC90	", moc: 	390	, pojemnosc: 	2000	, rok_produkcji: 	"	2019-2024	"	, kod_silnika: "	B4204T34	" },
				{ label: "	XC90	", moc: 	320	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2018	"	, kod_silnika: "	B4204T35	" },
				{ label: "	XC90	", moc: 	335	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2024	"	, kod_silnika: "	B4204T35	" },
				{ label: "	XC90	", moc: 	407	, pojemnosc: 	2000	, rok_produkcji: 	"	2015-2018	"	, kod_silnika: "	B4204T35	" },
				{ label: "	XC90	", moc: 	310	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	B4204T56	" },
				{ label: "	XC90	", moc: 	456	, pojemnosc: 	2000	, rok_produkcji: 	"	2022	"	, kod_silnika: "	B4204T56	" },
				{ label: "	XC90	", moc: 	299	, pojemnosc: 	2000	, rok_produkcji: 	"	2020-2023	"	, kod_silnika: "	B420T	" },
			]
			},
    }
};

// Dane firm
  var firmy = {
		dolnoslaskie: [
			{ firma: 'ABART SP. Z O.O.', telefon: '71 3423252', miasto: 'Wrocław', email: 'rojek@czakram.pl' },
			{ firma: 'AMARGAZ ARTUR KRZYZANOWSKI', telefon: '505 568 514', miasto: 'Wrocław', email: 'rojek@czakram.pl' },
			{ firma: 'MARTIN SERWIS', telefon: '607 266 521', miasto: 'Świdnica', email: 'rojek@czakram.pl' },
			{ firma: 'EKO ALMA SERWIS', telefon: '71 3317389', miasto: 'Oława', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO SERWIS MARCIN MATEJKO', telefon: '665 513 859', miasto: 'Lubin', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO BRC SYSTEM TOMASZ SOSIK', telefon: '74 8569443', miasto: 'Świdnica', email: 'rojek@czakram.pl' },
			{ firma: 'DOBRYGOWSKI SP. Z O.O.', telefon: '502 536 276', miasto: 'Lubin', email: 'rojek@czakram.pl' },
			{ firma: 'EXPRES-SERVICE DOMINIK KACZKOWSKI', telefon: '502 489 205', miasto: 'Wałbrzych', email: 'rojek@czakram.pl' },
			{ firma: 'SPARKO AUTO GAZ', telefon: '601 718 737', miasto: 'Wrocław', email: 'rojek@czakram.pl' },
		],
		kujawskopomorskie: [
			{ firma: 'INSTAL - GAZ', telefon: '52 3611754', miasto: 'Bydgoszcz', email: 'rojek@czakram.pl' },
			{ firma: 'ART-POL JAROSŁAW CYWIŃSKI', telefon: '504 493 000', miasto: 'Białe Błota', email: 'rojek@czakram.pl' },
			{ firma: 'LPG SERWIS MIROSŁAW JASIENIECKI', telefon: '600 899 964', miasto: 'Fabianki', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO GAZ CENTRUM', telefon: '513 933 865', miasto: 'Bydgoszcz', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO GAZ CENTRUM MACIEJ KAWECKI', telefon: '509 650 730', miasto: 'Toruń', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO SERWIS INSTALACJE GAZOWE', telefon: '607 714 432', miasto: 'Toruń', email: 'rojek@czakram.pl' },
			{ firma: 'MOTOGAZ PAWEŁ KWIATKOWSKI', telefon: '504 239 339', miasto: 'Włocławek', email: 'rojek@czakram.pl' },
			{ firma: 'ARPOL MOTOR COMPANY SP. Z O.O.', telefon: '566 438 800', miasto: 'Toruń', email: 'rojek@czakram.pl' },
		],
		lubelskie: [
			{ firma: 'SOLAR-CAR DZIUBA MIECZYSŁAW', telefon: '601 238 055', miasto: 'Lublin', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO-MIK M.I.B. ŻUREK SP.J.', telefon: '81 7522848', miasto: 'Łęczna', email: 'rojek@czakram.pl' },
			{ firma: 'TECHCAR SŁAWOMIR SKROBAŃSKI', telefon: '660 490 206', miasto: 'Biłgoraj', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO-GAZ  SŁAWOMIR PIEKARZ', telefon: '601 363 300', miasto: 'Lublin', email: 'rojek@czakram.pl' },
			{ firma: 'TRANS-MOTO-GAZ ANTONI NAGAJEK', telefon: '509 277 915', miasto: 'Kraśnik', email: 'rojek@czakram.pl' },
			{ firma: 'F.H.U. AUTO-LIDER, JACEK ŚWIDZIŃSKI', telefon: '81 7577654', miasto: 'Charlęż', email: 'rojek@czakram.pl' },
		],
		lubuskie: [
			{ firma: 'EKOAUTO GAS SERWIS LECH OKORSKI', telefon: '509 412 911', miasto: 'Zielona Góra', email: 'rojek@czakram.pl' },
			{ firma: 'JETRONICS', telefon: '504 260 778', miasto: 'Gorzów Wielkopolski', email: 'rojek@czakram.pl' },
		],
		lodzkie: [
			{ firma: 'BLOKMAN PIOTR KRZYSZTOF WASIK', telefon: '601 993 938', miasto: 'Łódź', email: 'rojek@czakram.pl' },
			{ firma: 'GOMAR MOTORYZACJA ROBERT ŁYŻWA', telefon: '43 6752734', miasto: 'Łask', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO-ZIMA ZIMNICKI DARIUSZ', telefon: '608 860 518', miasto: 'Ujazd', email: 'rojek@czakram.pl' },
			{ firma: 'ROB-GAZ ROBERT WÓJCIAK', telefon: '506 193 565', miasto: 'Opoczno', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO-GAZ TADEUSZ KRUPIŃSKI', telefon: '504 164 688', miasto: 'Skierniewice', email: 'rojek@czakram.pl' },
			{ firma: 'F.H.U. EKO-AUTO ROBERT GÓRSKI', telefon: '42 6739494', miasto: 'Łódź', email: 'rojek@czakram.pl' },
			{ firma: 'A.R.G. ARTUR JABŁOŃSKI', telefon: '692274666', miasto: 'Łódź', email: 'rojek@czakram.pl' },
		],
		malopolskie: [
			{ firma: 'CZAKRAM SP. Z O.O.', telefon: '14 6460090', miasto: 'Tarnów', email: 'rojek@czakram.pl' },
			{ firma: 'F.H.U. KARAT MARZENA ZIĘĆ', telefon: '508 187 622', miasto: 'Kraków', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO GAZ ARIES SPÓŁKA CYWILNA', telefon: '693 159 914', miasto: 'Brzeszcze', email: 'rojek@czakram.pl' },
			{ firma: 'MOTO-GAZ MARCIN KORUS', telefon: '501 520 113', miasto: 'Wadowice', email: 'rojek@czakram.pl' },
			{ firma: 'EKO-POWER-GAZ ANDRZEJ MAJKOWSKI', telefon: '502 031 935', miasto: 'Kraków', email: 'rojek@czakram.pl' },
			{ firma: 'STAR-GAZ TOMASZ CIAPAŁA', telefon: '505 329 335', miasto: 'Stary Sącz', email: 'rojek@czakram.pl' },
		],
		mazowieckie: [
			{ firma: 'ENERGY GAZ POLSKA', telefon: '22 8100090', miasto: 'Warszawa', email: 'rojek@czakram.pl' },
			{ firma: 'J.J. KARASIŃSCY  S.C.', telefon: '603 350 272', miasto: 'Warszawa', email: 'rojek@czakram.pl' },
			{ firma: 'ADGAZ ADAM  STĘPIEŃ', telefon: '509 191 929', miasto: 'Piaseczno', email: 'rojek@czakram.pl' },
			{ firma: 'NOWOTCZYŃSKI PIOTR USŁUGI', telefon: '501 387 642', miasto: 'Mława', email: 'rojek@czakram.pl' },
			{ firma: 'J-MAX JERZY KRZAK', telefon: '22 6649824', miasto: 'Warszawa', email: 'rojek@czakram.pl' },
			{ firma: 'WOLF-CAR SYLWESTER WILCZEK', telefon: '692 342 888', miasto: 'Kozienice', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO-GAZ ŁUKASZ KOBZA', telefon: '-', miasto: 'Radom', email: 'rojek@czakram.pl' },
		],
		opolskie: [
			{ firma: 'AUTO-SERVICE-GAZ', telefon: '77 4318031', miasto: 'Skoroszyce', email: 'rojek@czakram.pl' },
		],
		podkarpackie: [
			{ firma: 'WIKI GAZ GRZEGORZ BUŚ', telefon: '17 7889993', miasto: 'Mielec', email: 'rojek@czakram.pl' },
			{ firma: 'FLOKS PIOTR MUNIA', telefon: '605 573 047', miasto: 'Krosno', email: 'rojek@czakram.pl' },
		],
		podlaskie: [
			{ firma: 'AUTO-GAZ JUNIOR', telefon: '509 136 825', miasto: 'Grajewo', email: 'rojek@czakram.pl' },
			{ firma: 'SACAR', telefon: '-', miasto: '-', email: 'rojek@czakram.pl' },
		],
		pomorskie: [
			{ firma: 'MAROL-GAZ', telefon: '606 398 137', miasto: 'Bolszewo', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO-ATUT SP.C.', telefon: '58 6685777', miasto: 'Gdynia', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO GAZ ELEKTRONIKA', telefon: '507 457 845', miasto: 'Gdańsk', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO-EKO BEATA GRABOWSKA', telefon: '52 3971198', miasto: 'Chojnice', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO GAZ S-M SŁAWOMIR BARABASZ', telefon: '58 3457028', miasto: 'Gdańsk', email: 'rojek@czakram.pl' },
			{ firma: '4*4 AUTOGAZTECHNIK', telefon: '607 555 333', miasto: 'Gdańsk', email: 'rojek@czakram.pl' },
			{ firma: 'RAFGEL RAFAŁ GELECIŃSKI', telefon: '602 644 337', miasto: 'Kobylnica', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO-LOCK', telefon: '692 858 803', miasto: 'Malbork', email: 'rojek@czakram.pl' },
			{ firma: 'COALA BOGDAN KAŁEDKOWSKI', telefon: '-', miasto: 'Gdańsk', email: 'rojek@czakram.pl' },
		],
		slaskie: [
			{ firma: 'CZAKRAM SP. Z O.O. ', telefon: '32 2221587', miasto: 'Mysłowice', email: 'slaskie@czakram.pl' },
			{ firma: 'KKL BURCON LESZEK', telefon: '855 349 648', miasto: 'Katowice', email: 'rojek@czakram.pl' },
			{ firma: 'ELIASZ', telefon: '602 406 150', miasto: 'Blachownia', email: 'rojek@czakram.pl' },
			{ firma: 'LW AUTO LESZEK WITKOWSKI', telefon: '509 464 584', miasto: 'Cieszyn', email: 'rojek@czakram.pl' },
			{ firma: 'MIX-1 ADAM PSZENNIAK', telefon: '606 685 415', miasto: 'Gogołowa', email: 'rojek@czakram.pl' },
			{ firma: 'RAMAREX - I, BRZOZA ZBIGNIEW', telefon: '32 4222341', miasto: 'Rybnik', email: 'rojek@czakram.pl' },
			{ firma: 'MECHANIKA POJAZDOWA HANDEL USŁUGI', telefon: '508 319 228', miasto: 'Oborniki Śląskie', email: 'rojek@czakram.pl' },
			{ firma: 'DAVANTI, RADOSŁAW MAZUR', telefon: '503 528 791', miasto: 'Bytom', email: 'rojek@czakram.pl' },
			{ firma: 'VIS-EKO ADAM GAWRON', telefon: '-', miasto: 'Olsztyn', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO SERWIS ADAM ŻAK', telefon: '-', miasto: 'Jaworzno', email: 'rojek@czakram.pl' },
			{ firma: 'KRZYSZTOF PSUJ', telefon: '-', miasto: 'Zabrze', email: 'rojek@czakram.pl' },
		],
		swietokrzyskie: [
			{ firma: 'ALL-GAZ PIOTR NEPELSKI', telefon: '512 017 031', miasto: 'Połaniec', email: 'rojek@czakram.pl' },
			{ firma: 'LPG SYSTEM - GRZEGORZ ZAGNIŃSKI', telefon: '507 928 652', miasto: 'Kielce', email: 'rojek@czakram.pl' },
		],
		warminskomazurskie: [
			{ firma: 'AUTO GAZ SERWIS , KRZYSZTOF PREDKO', telefon: '667 111 660', miasto: 'Olsztyn', email: 'rojek@czakram.pl' },
			{ firma: 'SEBA EKSPORT-IMPORT', telefon: '89 5237722', miasto: 'Olsztyn', email: 'rojek@czakram.pl' },
			{ firma: 'EDE, EDWARD STOCKI', telefon: '504 268 215', miasto: 'Olsztyn', email: 'rojek@czakram.pl' },
		],
		wielkopolskie: [
			{ firma: 'PHU RODAN ROMUALD STYCHAŃSKI', telefon: '606 403 875', miasto: 'Poznań', email: 'rojek@czakram.pl' },
			{ firma: 'P.P.H.U LUNA EXPORT-IMPORT', telefon: '510 117 494', miasto: 'Pleszew', email: 'rojek@czakram.pl' },
			{ firma: 'ARCADE GROUP ŁUKASZ WAŁĘSA', telefon: '531 111 222', miasto: 'Konin', email: 'rojek@czakram.pl' },
			{ firma: 'AUTOPORT/AUTOGAZ', telefon: '602 869 344', miasto: 'Swarzędz', email: 'rojek@czakram.pl' },
			{ firma: 'INSTAL AUTO-GAZ', telefon: '609 801 801', miasto: 'Poznań', email: 'rojek@czakram.pl' },
			{ firma: 'AUTO-GAZ - SŁAWOMIR RUTA', telefon: '-', miasto: 'Gołuchów', email: 'rojek@czakram.pl' },
			{ firma: 'LE-GAZ', telefon: '603 166 421', miasto: 'Piła', email: 'rojek@czakram.pl' },
		],
		zachodniopomorskie: [
			{ firma: 'AUTO NAPRAWA, JAROSŁAW GIZIŃSKI', telefon: '94 3425950', miasto: 'Koszalin', email: 'rojek@czakram.pl' },
			{ firma: 'ADAMMAPOL ADAM MATERKA', telefon: '503 709 670', miasto: 'Szczecin', email: 'rojek@czakram.pl' },
			{ firma: 'GAZ-AUTO SERWIS DOMINIK STEFANIAK', telefon: '731 055 967', miasto: 'Szczecin', email: 'rojek@czakram.pl' },
		],
	};