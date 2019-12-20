let player = "fp";
let first_player_moves = [];
let second_player_moves = [];

function childclicked(event) {
    if (!event.target.innerText) {
        if (player == "fp") {
            first_player_moves.push(event.target.getAttribute('data-row-col'));
            event.target.innerText="X"
            checkforwin(first_player_moves) ? endgame() : console.log('player one has done now player two chance');
            player = "sp";
        }
        else {
            second_player_moves.push(event.target.getAttribute('data-row-col'));
            event.target.innerText="O"
            checkforwin(second_player_moves) ? endgame() : console.log('player two has done now player one chance')
            player = "fp";
        }
    }
}
function checkforwin(player_moves) {
    if (player_moves.length < 3) {
        return false;
    }
    const wining_combinations = [
        ["1,1", "1,2", "1,3"],
        ["2,1", "2,2", "2,3"],
        ["3,1", "3,2", "3,3"],
        ["1,1", "2,1", "3,1"],
        ["1,2", "2,2", "3,2"],
        ["1,3", "2,3", "3,3"],
        ["1,1", "2,2", "3,3"],
        ["1,3", "2,2", "3,1"]
    ];
    let won;
    return wining_combinations.some((arry) => {
        won = true;
        arry.some((ele) => {
            if (player_moves.indexOf(ele) !== -1) {
                won = won && true;
            }
            else {
                won = false;
                return false;
            }
        });
        if (won) {
            return won;
        }
    })
}
function endgame(){
    console.log("Player ",player," won");
}
