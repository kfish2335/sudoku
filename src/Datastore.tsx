import {makeObservable, observable, action} from 'mobx'
import axios from 'axios'

class Store{
    Game : any
    puzzle: any;
    ans:any;

    async new_Game (){
        try{
            let data =  await axios.get('https://9hzolh7p05.execute-api.us-east-1.amazonaws.com/dev/items')
            .then(res => {
            return res.data
            })
            .then(res => {store.Game = res.user_attempt
                store.puzzle = res.puzzle
                store.ans = res.ans
            })
            
        }catch(err){
            console.error(err)
        }
        }


    resetBoard(){
        this.Game.user_attempt = this.Game.puzzle
    }
    surrender(){
        this.Game.user_attempt =  this.Game.ans
    }
    isSolved(){
        if (this.Game.toString() ==  this.ans.toString()){
            this.Game =  this.ans 
            alert("Solved")
        }
        else{alert("Keep Trying :) ")}
            
    }
    constructor() {
        makeObservable( this,{
            Game: observable,
            new_Game: action.bound,
            puzzle: observable,
            ans:observable,
            isSolved: action.bound,
        })
    }
}
const store = new Store()
store.new_Game()


export default store;