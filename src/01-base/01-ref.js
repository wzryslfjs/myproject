import React,{Component} from "react";


export  default class App extends Component{
      a = 100;
      myref = React.createRef()
      render(){
          return (
              <div>
                  {/* <input ref="mytext1"></input> */}
                  <input ref={this.myref}></input>
                  <button onClick={()=>{
                    //   console.log('click',this.refs.mytext1)
                    //   console.log('click',this.refs.mytext1.value);
        /*-----------------------------------------------------------------------------*/
                    // console.log('click',this.myref);
                    // console.log('click',this.myref.current);
                    console.log('click',this.myref.current.value);
                  }}>add1</button>
                  <button onClick={this.handleClick1.bind(this)}>add2</button>
                  <button onClick={this.handleClick2}>add3</button>
              </div>
          )
      }

      handleClick1(){
          console.log('click',this.myref.current);      
      }
      handleClick2 = ()=>{
        console.log('click',this.myref.current);      
      }
}