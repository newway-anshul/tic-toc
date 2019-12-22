class TicToeDefi {
    player="fp";
    first_player_moves=[];
    second_player_moves=[];
    init=(rootEle)=>{
       
        for(let i=1;i<=3;i++){
            
            for(let j=1;j<=3;j++){
                
                let child = document.createElement('div');
                child.setAttribute('class','flx-child');
                child.setAttribute('data-row-col',i+","+j);
                child.addEventListener('click',this.moved);
                rootEle.appendChild(child)
            }
        }
        
    };
    moved=(event)=>{
        if (!event.target.innerText) {
            if (this.player == "fp") {
                this.first_player_moves.push(event.target.getAttribute('data-row-col'));
                event.target.innerText = "X"
                this.checkgamestatus(this.first_player_moves) ? this.endgame() : console.log('player one has done now player two chance');
                this.player = "sp";
            }
            else {
                this.second_player_moves.push(event.target.getAttribute('data-row-col'));
                event.target.innerText = "O"
                this.checkgamestatus(this.second_player_moves) ? this.endgame() : console.log('player two has done now player one chance')
                this.player = "fp";
            }
        }

    };
    checkgamestatus=(player_moves)=> {
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
                    return true;
                }
            });
            if (won) {
                return won;
            }
        })

    };
    restartgame=()=> {
      this.second_player_moves=[];
      this.first_player_moves=[];
      this.player="fp";
    };
    endgame=()=>{
        console.log("Player ",this.player," won");        
    }
}
const TicToe = new TicToeDefi()
export default TicToe;