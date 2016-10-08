var fixtureData;
        
loadData();

function loadData(){
    d3.json("js/fixtures.json", function(error, jsonData) {
        fixtureData = jsonData;
        for(var i = 0; i < fixtureData.length; i++){
            fixtureData[i].unique_id = i+1;
        }
        createVis();
    });
}

function createVis(){
    intra_season = new lineChartz("chartz", fixtureData);
}

function updateVars(){
    intra_season.wrangleData();
}

function changeName (str){
        if (str == "Manchester City FC"){
            return "Man City";
        }
        else if(str == "Manchester United FC"){
            return "Man United";
        }
        else{
            for(var i = 0; i < nameArray.length; i++){
                if(str.includes(nameArray[i])){
                    return nameArray[i];
                }
            }
        }
}

function highlightTeam(unformatted_team){

    var team = unformatted_team.replace(/ +/g, "");

    intra_season.svg.selectAll(".firstline").transition()
        .style("opacity", 0.1);

    intra_season.svg.select("#"+team).transition()
        .style("opacity", 1.0)

}

function unhighlightTeam(unformatted_team){

    var team = unformatted_team.replace(/ +/g, "");

    intra_season.svg.selectAll(".firstline").transition()
        .style("opacity", 0.1);
}

var old_game_id= -1;

function highlightGame(game_id){

    unhighlightGame(old_game_id);

    old_game_id = game_id;

    intra_season.svg.selectAll("#game"+game_id).transition().duration(1000)
        .attr("stroke","#777")
        .attr("stroke-width","2px")
        .style("opacity",1)
        .attr("r",12);

    intra_season.add_svg_info(game_id);
}

function unhighlightGame(game_id){

    intra_season.svg.selectAll("#game"+game_id).transition().duration(1000)
        .attr("r",4)
        .style("opacity",.6)
        .attr("stroke","black")
        .attr("stroke-width",".5px");
}

d3.selection.prototype.moveToFront = function() {  
      return this.each(function(){
        this.parentNode.appendChild(this);
      });
};
