const data = {
    "Bernard Arnault":226.2,
    "Jeff Bezos": 198.4,
    "Elon Musk": 195.3,
    "Mark Zuckerberg": 170.3,
    "Larry Ellison": 155.2
};

let data_arr = Object.entries(data);

updateChart(data_arr);

setTimeout(()=>{
    data_arr[2][1] = 300; 
    data_arr.sort((a,b)=>b[1]-a[1]);
    updateChart(data_arr);
},2000)



function updateChart(data_arr){
    // scale
    let moneyscale = d3.scaleLinear()
                    .domain([100,226.2])
                    .range([0,100]);


    const holder = d3.select("#holder");
    const bars = holder.selectAll(".bar")
        .data(data_arr) // truyen data
        .join("div")
            .attr("class","bar")
            .style("width",d=>""+moneyscale(d[1])+"%");

    bars.selectAll('span')
        .data(d=>[d[0]])
        .join('span')
            .html(d=>d);
}