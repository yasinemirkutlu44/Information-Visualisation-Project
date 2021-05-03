$(function() {

    var chart,
      dataSequence = [
      {
          name: '2009',
          record: [
            ['us', 10],
            ['ru', 5]
          ]
        },
        {
          name: '2010',
          record: [
            ['us', 6],
            ['ru', 10]
          ]
        },
        {
          name: '2011',
          record: [
            ['us', 2],
            ['ru', 5]
          ]
        },
        {
          name: '2012',
          record: [
            ['us', 4],
            ['ru', 7]
          ]
        },
        {
          name: '2013',
          record: [
            ['us', 6],
            ['ru', 9]
          ]
        },
        {
          name: '2014',
          record: [
            ['us', 8],
            ['ru', 7]
          ]
        },
        {
          name: '2015',
          record: [
            ['us', 10],
            ['ru', 5]
          ]
        },
        {
          name: '2016',
          record: [
            ['us', 8],
            ['ru', 3]
          ]
        },
        {
          name: '2017',
          record: [
            ['us', 6],
            ['ru', 1]
          ]
        },
        {
          name: '2018',
          record: [
            ['us', 4],
            ['ru', 5]
          ]
        },
        {
          name: '2019',
          record: [
            ['us', 2],
            ['ru', 7]
          ]
        }
      ];
  
    // Initiate the chart
    $('#container').highcharts('Map', {
  
      title: {
        text: 'Highmaps with time control'
      },
  
      subtitle: {
        text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/world.js">Australia</a>'
      },
  
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
  
      colorAxis: {
        min: 0,
        max: 20
      },
  
      series: [{
        data: dataSequence,
        mapData: Highcharts.maps['custom/world'],
        //joinBy: 'iso-a2',
        name: 'Education Index',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }]
    });
  
    chart = $('#container').highcharts();
  
    /**
     * Update the chart. This happens either on updating (moving) the range input,
     * or from a timer when the timeline is playing.
     */
    function update(increment) {
      var input = $('#play-range')[0],
        output = $('#play-output')[0];
  
      if (increment) {
        input.value = parseInt(input.value) + increment;
      }
      chart.series[0].setData(dataSequence[input.value].record); // Increment dataset (updates chart)
      output.innerHTML = dataSequence[input.value].name // Output value
      if (input.value >= input.max) { // Auto-pause
        pause($('#play-pause-button')[0]);
      }
    }
  
    /**
     * Play the timeline.
     */
    function play(button) {
      button.title = 'pause';
      button.className = 'fa fa-pause';
      chart.sequenceTimer = setInterval(function() {
        update(1);
      }, 500);
  
    }
  
    /** 
     * Pause the timeline, either when the range is ended, or when clicking the pause button.
     * Pausing stops the timer and resets the button to play mode.
     */
    function pause(button) {
      button.title = 'play';
      button.className = 'fa fa-play';
      clearTimeout(chart.sequenceTimer);
      chart.sequenceTimer = undefined;
    }
  
    /**
     * Toggle play and pause from the button
     */
    $('#play-pause-button').bind('click', function() {
      if (chart.sequenceTimer === undefined) {
        play(this);
      } else {
        pause(this);
      }
    });
  
    /**
     * Update the chart when the input is changed
     */
    $('#play-range').bind('input', function() {
      update();
    });
  });
  