import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [city, setCity] = useState("Birundha")
  const [result, setResult] = useState(null)
  const cityFun = (event) => {
    setCity(event.target.value)
  }

  const show = () => {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab2d9130efced4f2d38e40c78bfb31a`

    axios.get(apiurl).then((response) => {
      setResult(response.data)
      console.log(result)
    }).catch((err)=>{
      setResult(err.response.data)
      console.log(err.response.data)
      
    })
     
    //console.log(apiurl)
  }

  return (
    <div>
      <h1><center>Weather Report All Over World</center></h1>
      <h1><center>By Using City Name</center></h1>

      <h2>Developed by Karthika</h2>

      <br></br>

      <hr size="10" color="green"></hr>

      <input
        type="text"
        value={city}
        name="city"
        onChange={(e) => cityFun(e)}
        placeholder="Enter city name"
      />

      <input
        type="button"
        onClick={show}
        value="Find Weather Report"
      />

      <hr size="10" color="green"></hr>
{result!==null && result.cod===200 &&<> <h2 >Country & City:{result.sys.country}.{result.name}</h2></> }
{result!==null && result.cod===200 &&<> <h2 >Main Report:{result.weather[0].main}</h2></> }
{result!==null && result.cod===200 &&<> <h2 >Description:{result.wind.speed}</h2></> }
{result!==null && result.cod===200 &&<> <h2 >sea_Level:{result.main.sea_level}</h2></> }
{result!==null && result.cod===200 &&<> <h2 >Huminity:{result.main.humidity}</h2></> }
{result!==null && result.cod==="404" && <font color='red' size='5'><b>Result:{result.message}</b></font> }
      <br></br>

      
      
    </div>
  )
}

export default App


/*import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [city, setCity] = useState("Birundha")
  const [result, setResult] = useState(null)
  const cityFun = (event) => {
    setCity(event.target.value)
  }

  const show = () => {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab2d9130efced4f2d38e40c78bfb31a`

    axios.get(apiurl).then((response) => {
      setResult(response.data)
      console.log(result)
    }).catch((err)=>{
      setResult(err.response.data)
      console.log(err.response.data)
      
    })
     
    //console.log(apiurl)
  }

  return (
    <div>
      <h1><center>Weather Report All Over World</center></h1>
      <h1><center>By Using City Name</center></h1>

      <h2>Developed by Karthika</h2>

      <br></br>

      <hr size="10" color="green"></hr>

      <input
        type="text"
        value={city}
        name="city"
        onChange={(e) => cityFun(e)}
        placeholder="Enter city name"
      />

      <input
        type="button"
        onClick={show}
        value="Find Weather Report"
      />

      <hr size="10" color="green"></hr>
{result!==null && result.cod===200 &&<> <h2 >Country & City:{result.sys.country}.{result.name}</h2></> }
{result!==null && result.cod===200 &&<> <h2 >Main Report:{result.weather[0].main}</h2></> }
{result!==null && result.cod===200 &&<> <h2 >Description:{result.wind.speed}</h2></> }
{result!==null && result.cod===200 &&<> <h2 >sea_Level:{result.main.sea_level}</h2></> }
{result!==null && result.cod===200 &&<> <h2 >Huminity:{result.main.humidity}</h2></> }
      <br></br>

      {result && (
        <div>
          <h2>City: {result.name}</h2>
          <h3>Temperature: {result.main.sea_level} K</h3>
          <h3>Humidity: {result.main.humidity}%</h3>
          <h3>Weather: {result.weather[0].description}</h3>
        </div>
      )}
    </div>
  )
}

export default App


/*import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function App() {
  const [city,setCity]=useState("Salem")
  //const[result,setResult]=useState(null);
  const cityFun=(Event)=>{
    setCity(Event.target.value)
  }
  const show=()=>{
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab2d9130efced4f2d38e40c78bfb31a`
    //console.log(apiurl)

    axios.get(apiurl).then((response)=>{
      setResult(response.data)
      console.log(result)
    }).catch((err)=>{
      console.log(err.response.data)
    })
  }
  return (
    <div>
      <h1><center>weather Report all over world</center></h1>
      <h1><center>by using city name</center></h1>
      <h2>Developed by Karthika</h2>
      <br></br>
      <hr size="10" color="green"></hr>
      <input type="text" value={city} name="city" onChange={(e)=>cityFun(e)} placeholder="enter city name"></input>
            <input type="button"  value="Find weather Report" onClick={show}></input>
      <hr size="10" color="green"></hr>

      <br></br>
      
    </div>
  )
}

export default App








/*import React from 'react'

function App() {
  const dis=()=>{
    var tag=document.getElementsByTagName("input")
    var size=tag.length;
    document.getElementById("r1").innerHTML="count of textbox :"+size;
    var sum=0;
    for(var i=0;i<size;i++){
      sum=sum+parseInt(tag[i].value);
    }
        document.getElementById("res").innerHTML=sum+"is total";

  }
  return (
    <div>
      <input type="text" placeholder="enter a number"></input> <br></br>
      <input type="text" placeholder="enter a number"></input> <br></br>
      <input type="text" placeholder="enter a number"></input> <br></br>
      <input type="text" placeholder="enter a number"></input> <br></br>
      <input type="text" placeholder="enter a number"></input> <br></br>
      <input type="text" placeholder="enter a number"></input> <br></br>
      <input type="text" placeholder="enter a number"></input> <br></br>
      <input type="text" placeholder="enter a number"></input> <br></br>
      <button onClick={dis}>clikme</button>
      <div id="r1"></div>
      <div id="res"></div>
    </div>
  )
}

export default App





/*import React from 'react'

function App() {
  const dis=()=>{
    
   var    a=parseInt(document.getElementById("t1").value);
    var b= parseInt(document.getElementById("t2").value);
    var c= parseInt(document.getElementById("t3").value);
    var d= parseInt(document.getElementById("t4").value);
    var e= parseInt(document.getElementById("t5").value);
    var f=a+b+c+d+e;
    document.getElementById("res").innerHTML="Total:"+f;
  }
  return (
    <div>
      <input type="NUmber" onChange={dis} id="t1" placeholder="Enter a NUmer "></input> <br></br>
      <input type="NUmber" onChange={dis} id="t2" placeholder="Enter a NUmer "></input> <br></br>
      <input type="NUmber" onChange={dis} id="t3" placeholder="Enter a NUmer "></input> <br></br>
      <input type="NUmber" onChange={dis} id="t4" placeholder="Enter a NUmer "></input> <br></br>
      <input type="NUmber" onChange={dis} id="t5" placeholder="Enter a NUmer "></input> <br></br>
       <div id="res"></div>
    </div>
  )
}

export default App


/*import React from 'react'

function App() {
  const dis=(Event)=>{
document.getElementById("res").innerHTML="you are working Carrently:"+Event.target.type;
  }
  return (
    <div>
      <input type="text" onChange={dis}></input> <br></br>
            <input type="NUmber" onChange={dis}></input> <br></br>

      <input type="Password" onChange={dis}></input> <br></br>

      <input type="radio"  name="gr" onChange={dis}></input>Male <br></br>
      <input type="radio" name="gr" onChange={dis}></input>Female <br></br>
      <input type="radio" name="gr" onChange={dis}></input>Other <br></br>
      <input type="checkbox" onChange={dis}></input> C<br></br>
      <input type="checkbox" onChange={dis}></input> C++<br></br>
      <input type="checkbox" onChange={dis}></input> Java<br></br>
    <div id="res"></div>
    </div>
  )
}

export default App





/*import React from 'react'

function App() {
const dis=(Event)=>{
document.getElementById("res").innerHTML=Event.target.id+".........typing"
}
  return (
    <div>
       <input type="text" id="t1"onChange={dis} placeholder="text1"></input>
        <input type="text" id="t2"onChange={dis} placeholder="text2"></input>
         <input type="text" id="t3"onChange={dis} placeholder="text3"></input>
          <input type="text" id="t4"onChange={dis} placeholder="text4"></input> <input type="text" id="t5"onChange={dis} placeholder="text5"></input>
          <div id="res"></div>
    </div>
  )
}

export default App



























/*import React from 'react'

function App() {
  const dis=()=>{
    var a=parseInt(document.getElementById("t1").value);
    var b= parseInt(document.getElementById("t2").value);
    var c=a+b;
    document.getElementById("res").innerHTML="Total:"+c;
  }
  return (
    <div>
    <input type="text" id="t1" placeholder="Enter a Number 1"></input>
    <input type="text" id="t2" placeholder="Enter a Number 2"></input>
    <br></br>
        <input type="button" onClick={dis} value={"Find Total"}></input>
        <div id="res"></div>


    </div>
  )
}

export default App





/*import React from 'react'

function App() {
  const dis1=()=>{
  document.getElementById("res").innerHTML="Cursor OUtside Textbox";
  document.getElementById("t1").style.backgroundColor="pink";
  }
  const dis2=()=>{
  document.getElementById("res").innerHTML="Cursor Inside Textbox";
  document.getElementById("t1").style.backgroundColor="lightgreen";
  }
  return (
    <div>
      <label>Cursor Inside Textbox,Cursor Outside Textbox</label>
      <br></br>
      <input type="text" id="t1"onBlur={dis1} onFocus={dis2} placeholder="enter a text"></input>
      <div id="res"></div>
      
    </div>
  )
}

export default App



/*import React from 'react'

function App() {
   const dis=(Event)=>{
      var data=Event.target.value;
      document.getElementById("res").innerHTML=data+"....typing"
    }
  return (
   
    <div>
      <h1>React Event</h1>
      <input type="text" onChange={dis} placeholder="enter text"></input>
<br></br>
<div id="res"></div>
    </div>
  )
}

export default App









/*import React from 'react'

function App() {
  return (
    <form>
      <h1>React Form</h1>
      <input type="text" id="t1" placeholder="Enter a mark:1"></input>
      <br></br>
       <input type="text" id="t2" placeholder="Enter a mark:2"></input>
       <br></br>
        <input type="text" id="t3" placeholder="Enter a mark:3"></input>
        <br></br>
         <input type="text" id="t4" placeholder="Enter a mark:4"></input>
         <br></br>
          <input type="text" id="t5" placeholder="Enter a mark:5"></input>
          <br></br>
          
          <input type="password" id="pw" placeholder="Enter a password"></input>
          <br></br>
<input type="number" id="nm" placeholder="Enter a number"></input>
<br></br>
          <label>Select Gender:</label>
          <input type="radio" id="r1" name="gen"></input> Male
           <input type="radio" id="r2" name="gen"></input>Female 
          <input type="radio" id="r3" name="gen"></input>Others
<br></br>
  <label>Select courses:</label>
          <input type="checkbox" id="c1"></input> c
           <input type="checkbox" id="c2" ></input>c++ 
          <input type="checkbox" id="c3" ></input>java
          <input type="checkbox" id="c4" ></input>Others
<br></br>
<label>Select Color:</label>
<input type="color" id="col" ></input>
<br></br>
<label>Select date:</label>
<input type="date" id="dat" ></input>
<label>select Time:</label>
<input type="Time" id="ti" ></input>
<br></br>
<label>Select File</label>
<input type="file" id="fi" ></input>
<br></br>
<input type="button" value="clickme" ></input>
<input type="submit" value="submit button" ></input>
<input type="reset" value="clear" ></input>
<button>click me</button>
    </form>
  )
}

export default App











/*import React from 'react'

function App(props){
  var arr=[]
  for(var k in props.data)
  {
    arr.push(k);
  }

  return(
    <div>
      <h1>json with array handling and also check null</h1>
      <h2>Roll number:{props.data.rno}</h2>
      <h2>Name:{props.data.sname}</h2>
      <h2>mark1:{props.data.marks[0]}</h2>
      <h2>mark2:{props.data.marks[1]}</h2>
      <h2>mark3:{props.data.marks[2]}</h2>
      <h3>Result:{(props.data.marks[0]>34 && props.data.marks[1]>34 && props.data.marks[2]>34)?props.data.result="PASS":props.data.result="FAIL"}</h3>
      <h1>===============================================================================</h1>
      {arr.map((item)=><><br></br>{item}--&gt; {props.data[item]}</>)}
      
      
      
    </div>
  )
}
export default App

/*import React from "react";
function App(props){
  var arr=[];
  for(var k in props.data)
    {
      arr.push(k);
    }
  
  return(
    <div>
      <h1>Props using Json data</h1>
      <h2>student number:{props.data.rno}</h2>
      <h2>student name:{props.data.sname}</h2>
      <h2>student mark:{props.data.mark}</h2>
      <h2>student result:{props.data.mark>=35?"pass":"fail"}</h2>
      <h2>student eligible:{props.data.iseligible?"eligible":"not eligible"}</h2>
      <br></br>
      <h2>==============================================================================</h2>
      {arr.map((v)=><h2>{v}---&gt; {props.data[v]}</h2>)}
      <h2>==========================================================================================</h2>
  
    {arr.map((v)=><h2>{v}---&gt;{(props.data[v]===true && "Eligible")||(props.data[v]===false && "Not Eligible")||props.data[v]}</h2>)}
    </div>
  )
}
export default App














/*import React from "react";
function App(props){
  var arr=[];
  for(var k in props.data)
    {
      arr.push(k);
    }
  
  return(
    <div>
      <h1>Props using Json data</h1>
      <h2>student number:{props.data.rno}</h2>
      <h2>student name:{props.data.sname}</h2>
      <h2>student mark:{props.data.mark}</h2>
      <h2>student result:{props.data.mark>=35?"pass":"fail"}</h2>
      <h2>student eligible:{props.data.iseligible?"eligible":"not eligible"}</h2>
      <br></br>
      <h2>==============================================================================</h2>
      {arr.map((v)=><h2>{v}---&gt; {props.data[v]}</h2>)}
      <h2>==========================================================================================</h2>
  
    {arr.map((v)=><h2>{v}---&gt;{(props.data[v]===true && "Eligible")||(props.data[v]===false && "Not Eligible")||props.data[v]}</h2>)}
    </div>
  )
}
export default App




















/*import React from 'react'

function App(props) {
  var arr=[]
  for(var k in props.data){
arr.push(k)
  }
  return (
    <div>
      
      <h2>student number:{props.data.rno}</h2>
      <h2>student name:{props.data.aname}</h2>
      <h2>student tamil mark:{props.data.mark}</h2>
      <h2>student.result:{props.data.reult}</h2>
         <h2>is eligible:{props.data.iseligible?"eligible":"not eligible"}</h2>
         <br></br>

        <h2>==========================</h2> 
         {arr.map((v)=><h2>{v}-----{props.data[v]===true?"eligible":props.data[v]}</h2>)}
   
   <h2>================================</h2>
   {arr.map((v)=><h2>{v}--&gt;{(props.data[v]===true && "eligible")|| (props.data[v]===false && "not eligible")||props.data[v]}</h2>)}
  <h2>==============================================</h2>
    </div>
  )
}

export default App











/*import React from 'react'

function App(props) {
  return (
    <div>
      <h1>props using Array</h1>
      the first mark:{props.data[3]}
      <br></br>
     {props.data.map((item,index)=><><br></br>mark:{index+1}={item}</>)}

    </div>
  )
}

export default App




/* import React from 'react'

function App(props) {
  return (
    <div>
      <h1>props:properties</h1>
        <h2>share data from one component to another component</h2>
        <h2>your Name: {props.data}</h2>
    </div>
  )
}

export default App




/*import React from 'react'
 function App() {
  var stud={
    sno:1001,
    sname:'swetha',
    mark:{
      tamil:99,
      english:99,
      maths:100,
      science:100,
      social:100
    },
    rank:1,
   result:"pass"
  }
  return (
    <div>
      <h1>JSON</h1>
      <h2>student number:{stud.sno}</h2>
      <h2>student name:{stud.sname}</h2>
      <h2>student tamil mark:{stud.mark["tamil"]}</h2>
      <h2>student english mark:{stud.mark["english"]}</h2>
      <h2>student maths mark:{stud.mark["maths"]}</h2>
      <h2>student science mark:{stud.mark["science"]}</h2>
      <h2>student social mark:{stud.mark["social"]}</h2>
      <h2>student rank:{stud.rank}</h2>
      <h2>student.result:{stud.result}</h2>
    </div>
  )
}
export default App;


/*function App() {
  var arr=[11,22,33,44,55,66,77,88]
  var big=arr[0]
  var small=arr[0]
  return (
    <div>
      <h1>Array demo</h1>
      <ol type="I"></ol>
      {arr.map((item)=>item)}
      <br></br>
      {arr.map((item)=><> {item} </>)}
      {arr.map((item)=><><br></br>{item}</>)}
      <ol type='A'>
        {arr.map((v)=><li>{v}</li>)}
      </ol>
      <br>
      </br>
      <div style={{display:"none"}}>
      <h1>highest number of array</h1>
      {arr.map((v)=><>{big<v &&<>{big=v}</>}</>)}
            {arr.map((v)=><>{small>v &&<>{small=v}</>}</>)}

    </div>
  <h1> Bigget Number:{big}</h1>
  <h1> smallest Number:{small}</h1>
      </div>

  
  )
}
export default App



/*import React from 'react'

function App() {
   var arr=[11,22,22,33,44,55];
  return (
    <div>
     <h1>Array Demo </h1>
     <h2>array value index: 0 : {arr[0]}</h2>
           <h2>array value index: 0 : {arr[1]}</h2>
     <h2>array value index: 0 : {arr[2]}</h2>
     <h2>array value index: 0 : {arr[3]}</h2>
     <h2>array value index: 0 : {a
     rr[4]}</h2>

    </div>
  )
}

export default App



/*function App() {
  var n=90
   var res="fail"
  return (
    <div>
      <h1>five the grade of the student</h1>
      <h2>  {(res==="pass" && ((n>=85 && "outstanding") || (n>=75 && "execellent") || (n>=65 && "very good") ||(n>=55 && "good") ||"fair"))||"no grade" }</h2>
    </div>
  )
}

export default App










/*function App() {
  var n=0
  return (
    <div>
      <h1>five the grade of the student</h1>
      <h2>{n} is  {(n>=85 && "outstanding") || (n>=75 && "execellent") || (n>=65 && "very good") ||(n>=55 && "good") ||"fair" }</h2>
    </div>
  )
}

export default App



/*import React from 'react'

function App() {
  var n=0
  return (
    <div>
      <h1>The number is positive, negative, zero</h1>
      <h2>{n} is  {(n>0 && "positive") || (n<0 && "negative") ||"zero" }</h2>
    </div>
  )
}

export default App






















/*import React from 'react'

function App() {
  var n=2024;
  return (
    <div>
      <h1>Number {n}</h1>
      <h2>given number is even or odd</h2>
      <h2>{n} is {(n%4===0 && " leap year") ||" mot aleap year"}</h2>
        

    </div>
  )
}

export default App

/*import React from 'react'

function App() {
  var n=7;
  return (
    <div>
      <h1>Number {n}</h1>
      <h2>given number is even or odd</h2>
      <h2>{n} is {(n%2===0 && " even number") ||"Odd Number"}</h2>
        

    </div>
  )
}

export default App


/*import React from 'react'

function App() {
  var n1=34;
  var n2=54;
  return (
    <div>
      
      <h2>1.simple if/else statement Result</h2>
     <h2> number one {n1}</h2>
          <h2> number one {n2}</h2>
          <h1>{(n1>n2 && n1) || n2} is bigest number</h1>

    </div>
  )
}

export default App


*/

/* import React from 'react'

function App() {
  var mark=10;
  return (
    <div>
      <h1>mark : {mark}</h1>
      <h2>1.simple if statement Result</h2>
      <h2>{mark>34 && "Pass"}</h2>
            <h2>{mark<=34 && "Fail"}</h2>

    </div>
  )
}

export default App*/




/*import './App.css'
import React from 'react'
import myimg from './images/b1.jpg'

function App() {
  return (
    <div align="center">
    <img src={myimg} width="90%" alt="not found"></img>
    </div>
  )
}

export default App
**/


/*var App=()=>{
  var a=10
  var b=20
  var c=30
  return(
   <>
   <h1>add of two numbers</h1>
   <h2>A value:{a}</h2>
      <h2>B value:{b}</h2>

   <h2>C value:{c}</h2>
   <h2>Add values:{a+b+c}</h2>

   </>
  )
}
export default App;*/


/*function App(){
  return(
    <> one top level element
    <h1>Wecome to react</h1>
    <h2>Wecome to react</h2>
    <h3>Wecome to react</h3>

    </>
  )
}
export default App;*/

/*import React from "react";
class App extends React.Component{
  render(){
    return(
      <>
      <h1>Welcome to class Component</h1>
      <h2>Welcome to class Component</h2>
      <h1>Welcome to class Component</h1>

      
      </>
    )
  }
}
export default App;*/



/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

