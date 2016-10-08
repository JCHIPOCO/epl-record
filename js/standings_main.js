$.ajax({
    headers: { 'X-Auth-Token': 'c53d14d63a5b4a91af3d15d83197f6c8' },
    url: 'http://api.football-data.org/v1/competitions/426/fixtures',
    dataType: 'json',
    type: 'GET',
}).done(function(response) {
        // do something with the response, e.g. isolate the id of a linked resource        
    var fixtures = response.fixtures;
        // var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
        // var res = regex.exec(response.standing[0]._links.awayTeam.href);
        // var teamId = res[1];
        // console.log(teamId);
    console.log(fixtures);
});

