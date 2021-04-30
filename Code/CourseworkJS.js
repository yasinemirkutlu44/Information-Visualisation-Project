$(function () {
	var chart;
	$(document).ready(function() {
		document.title = "Coursework: Countries Education Index";
		$('#containerEducationIndex').highcharts({
			chart: {
                type: 'column',
				height: 250,
				spacingRight: 30,
			},
			title: {
				text: 'Countries Education Index'
			},
			subtitle: {
				text: '1990-2019'
			},
            subtitle:{
                text: 'Source: United Nations Development Report'

            },
			xAxis: {
				categories: ['1990','1991', '1992', '1993', 
							'1994', '1995', '1996', '1997', 
							'1998', '1999', '2000', '2001', 
							'2002', '2003', '2004', '2005', 
							'2006','2007','2008','2009','2010',
                            '2011','2012','2013','2014',
                            '2015','2016','2017','2018','2019'],
				tickInterval: 1
			},

			yAxis: {
				title: {
					text: 'Education Index Value',
				},
				min: 0,
				max: 1
			},
			plotOptions: {
				series: {
					lineWidth: 2
				}
			},
			series: [ {
			  name: 'Norway',
			  data: [0.772,0.782,0.792,0.808,0.839,0.825,0.832,0.84,0.867,0.876,
                    0.888,0.878,0.88,0.892,0.912,0.901,0.906,0.907,0.905,0.905,0.912,
                    0.914,0.907,0.915,0.907,0.912,0.918,0.926,0.928,0.93]
			}]
		});   

	});

});
