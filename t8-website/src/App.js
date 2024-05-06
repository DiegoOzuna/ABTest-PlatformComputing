import logo from './logo.svg';
import './App.css';
import cat from "./images/cat_standing.png"

function App() {
  return (
    <div className="Website">



      <div className="Sub-website">
        <div class = "web1container">
        <h1>About Diego Ozuna</h1>
        <p id = "message">
            Hello everyone, 
            My name is Diego Ozuna, I am a senior here at CSUSB and will graduate in December 2024.
            I am majoring in Computer Science with a minor in Mathematics. Since transfering, I have been on the Dean's
            List. I want to work closely with Machine Learning and AI which is why I am interested mostly in the field of Data Science.
        </p>
        <p>
            My hobbies are film photography and video games. I like to play first-person shooters, MOBAs,
            and some survival games. My interest in photography comes from a class I took in highschool.
        </p>
        <p>
            If you have questions about stuff in Comp Sci or Math I will try to help, as helping others also helps me. :)
        </p>

        <div class="highlightGIT">
            <a href="https://github.com/DiegoOzuna/Platform-Computing">My GITHUB Page</a>
        </div>

        <div>
            <p>Here is a list of my classes below...</p>
            <ol class = "listClass">
                <li>CSE 4310 : Algorithm Analysis</li>
                <li>CSE 4500 : Platforming Computing</li>
                <li>CSE 5000 : Formal Languages and Automata</li>
                <li>CSE 5120 : Intro Artificial Intelligence</li>
                <li>CSE 5250 : Parallel Algorithms</li>
                <li>CSE 5953 : Independent Study</li>
            </ol>
            <p>Two of my classes are online, the others are in person Monday and Wednesday.
            </p>
        </div>
        <img src={cat} alt="cat" class="center"/>
        <input name="my-text" placeholder="hello"></input>
        <button name="button">Hello</button>
        </div>
      </div>



      <div className="Sub-website">
        <header className="App-header">
          <h1>About Annese</h1>
  <div className='subHead'>Education</div>
  <p>
    I spent 2 and 1/2 years studying under the Pre-Computer Science Major at Cal
    State LA. I did encounter some difficulties while I was there; the commute
    was long and terrible, I was stalked within my first semester, one summer
    session put me into credit debt, and I only took that summer session because
    I previously had to withdraw from an entire semester. These experiences and
    some other factors led to my decision to apply to transfer to CSUSB. I
    transferred here under the Computer Science major, but I plan on switching
    to Computer Systems in the Game Development concentration. I also plan on
    minoring in Data Science while I'm here.
  </p>
  <div className='subHead'>Interests</div>
  <p>
    There are plenty of subjects I'm interested in but only a few that I'm
    willing to share. To start off, I aboslutely LOVE video games. My favorite
    series are Little Big Planet, or SackBoy, Persona, The Legend of Zelda,
    Crash Bandicoot, Sonic the Hedgehog. I'm also into games like Elden Ring,
    Fortnite, and anything Lego related. I'm also really into art and I used to
    make animations when I was younger. My other interests range from the basics
    like cartoons, manga, and music.
  </p>
  <img
    src= {persona}
    id='Persona'
    alt='Persona Protagonists'
  />
  <img
    src= {hyrule}
    id='HyruleWarriors'
    alt='Hyrule Warriors AOC Poster'
  />
  <div className="subHead">Personal Life</div>
  <p>
    There isn't anything thats very interesting going on in my personal life. I
    could say I've been in a Jubilee video about breast sizes, I just hit 9
    months in my first relationship, or I still live with my mom, but anybody
    could say these things. I usually spend most of my time sitting in my room
    if I'm not at school. On Fridays I visit my grandparents and we make
    breakfast together, and I spend the weekends with my boyfriend (usually at
    his place because his bed is bigger).
  </p>
  <a href="https://github.com/Annese3908/Platform-Computing">Repository Link</a>
        </header>
      </div>



      <div className="Sub-website">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Content of website 3
          </p>
        </header>
      </div>




      <div className="Sub-website">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Content of website 4
          </p>
        </header>
      </div>




    </div>
  );
}

export default App;
