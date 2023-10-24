import NavBar from "./navBar"
import Intro from "./intro"
import Projects from "./projects"
import My_skills from "./my_skills"
import About_me from "./about_me";
import './main.css';
import Contact from "./contact";
const Main = ()=>{


return(
	<>

<NavBar/>
<Intro/>
<div class = 'subete'>
<My_skills/>
<br/>

<Projects/>
 <About_me/>
<Contact/>
</div>

</>
)
}
export default Main;