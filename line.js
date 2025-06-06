// ========== Part 1 Chart: Rhythm Mismatch Line Chart Visualisation ==========

// Load Part 1 data (contains mismatch_score for each zone)
d3.csv("../data/part1_data.csv").then(data => {
    // Group data by zone_id and build an array of mismatch_score for each zone
    const grouped = {};
    data.forEach(d => {
        const zone = d.zone_id.trim();
        if (!grouped[zone]) grouped[zone] = [];
        grouped[zone].push(+d.mismatch_score); // Append mismatch_score into zone array
    });
    let lineName = [] // // Legend names for all zones
    let seriesData = [] // // Series objects for each zone line
     // Convert each zone group into ECharts-compatible series format
    for(let i = 0; i < Object.keys(grouped).length; i++){
        let item = Object.keys(grouped)[i]
        lineName.push('Zone ' + item)

        seriesData.push(
            {
                name: 'Zone ' + item,
                type: 'line',
                lineStyle: {
                    width: 2  // Set line width to 2px
                },
                data: grouped[item]
            }
        )
    }
    // Add an ideal rhythm line (for comparison)
    seriesData.push(
        {
            name: 'Ideal Rhythm',
            type: 'line',
            showSymbol: false,  // Hide data point dots
            lineStyle: {
                color: '#000000',  
                width: 5  // Thicker line for visual emphasis
            },
            data: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 1.0, 1.0, 1.0, 1.5, 1.5, 1.5, 1.8, 1.8, 2.0, 2.0, 2.5, 2.5, 2.8, 2.8, 3.0, 3.0, 3.0, 3.0] // 默认新增固定数据
        }
    )


    const hours = Array.from({length: 24}, (_, i) => i);

    // Call chart render function
    drawLine(hours,lineName,seriesData)
})

// ========== Chart Rendering Function ==========
var myChart;
function drawLine(hours,lineName,seriesData) {
    let newArr = [...lineName]
    newArr.push('Ideal Rhythm') // Add ideal rhythm to legend
    var chartDom = document.getElementById('canva');
    myChart = echarts.init(chartDom);
    var option;
    option = {
        animation: true, 
        animationDuration: 1000, 
        title: {
            text: 'When Spaces Fall Out of Rhythm',
            subtext: 'Mismatch Scores for All Zones Across 24 Hours',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis', // Show values of all lines on hover
        },
        legend: {
            data: newArr,
            orient: 'horizontal',  
            type: 'plain',         
            bottom: 10,            

        },
        toolbox: {
            feature: {
                saveAsImage: {} // // Save chart button
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '20%',
            containLabel: true
        },
        xAxis: [
            {
           type: 'category',
           name: 'Hour of the Day', 
           nameLocation: 'middle',
           nameTextStyle: {
           fontSize: 12,
           padding: [10, 0, 0, 0] 
    },
    
            }
        ],
        yAxis: [
            {
            type: 'value',
            name: 'Mismatch Score', 
            nameLocation: 'middle',
            nameTextStyle: {
            fontSize: 12,
            padding: [0, 0, 20, 0]
    } 
            }
        ],
        series: seriesData
    };
    option && myChart.setOption(option);
}
// ========== Part 1 - Three Buttons: Highlight Specific Lines ==========
// Originally planned to use scroll-triggered annotations
// but I didn't finish it succesfully, I changed to click-based buttons for stability.
// Thanks to Joel for helping me build this part — even though I didn’t end up using it due to some later issues.

// Get references to the three explanatory buttons
let line_btn1 = document.querySelector('.line_btn1')
let line_btn2 = document.querySelector('.line_btn2')
let line_btn3 = document.querySelector('.line_btn3')

// Bind click events to highlight specific lines (change line width)
line_btn1.onclick = function () {
    highlightSeries('Ideal Rhythm')
}
line_btn2.onclick = function () {
    highlightSeries('Zone 243')
}
line_btn3.onclick = function () {
    highlightSeries('Zone 27')
}
// ========== Highlight One Line and Dim Others ==========
function highlightSeries(seriesName) {
    const currentOption = myChart.getOption();
    // Adjust line width for emphasis
    currentOption.series.forEach(series => {
        console.log(series.name === seriesName,'99999');
        if (series.name === seriesName) {
            console.log(565656565);
            series.lineStyle.width = 7; // // Highlighted line
        } else {
            series.lineStyle.width = 2; // Dimmed lines
        }
    });

    // Apply updated option with transition
    myChart.setOption(currentOption,{
        notMerge: false,
        animation: {
            duration: 1000,
            easing: 'quadraticOut'
        }
    });
     // Auto-restore line styles after 5 seconds
    restoreLine()
}
// ========== Restore All Lines to Default Width ==========
function restoreLine() {
    setTimeout(function () {
        const currentOption = myChart.getOption();
        // restore
        currentOption.series.forEach(series => {
            if (series.name === 'Ideal Rhythm') {
                series.lineStyle.width = 4; 
            } else {
                series.lineStyle.width = 2; 
            }
        });

        // restore
        myChart.setOption(currentOption,{
            notMerge: false,
            animation: {
                duration: 1000,
                easing: 'quadraticOut'
            }
        });
    },5000)
}