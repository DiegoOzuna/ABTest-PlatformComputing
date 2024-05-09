import logo from './logo.svg';
import './App.css';

import cat from "./images/DO/cat_standing.png"
import lstm from "./images/DO/lstm.png"
import ai from "./images/DO/brainCHIP.webp"
import seal from "./images/DO/CSU_San_Bernardino_seal.svg.png"
import yote from "./images/DO/csusbyote.png"
import github from "./images/DO/github.jpeg"




import persona from "./images/Persona Banner.png"
import hyrule from "./images/age_of_calamity_art.png"

import creme from "./images/crèmebrûlée.jpg"
import fightclub from "./images/Fight_Club.jpg"
import beachhouse from "./images/Beach_House.jpg"
import asteroidcity from "./images/Asteroid_City.jpg"
import invincible from "./images/Invincible.jpg"
import slaughterhouse from "./images/Slaughterhouse_Five.jpg"

import Bear1 from "./images/alaska/Bear1.png"
import Bear2 from "./images/alaska/Bear2.png"
import Denali from "./images/alaska/Denali.png"
import Glacier from "./images/alaska/Glacier.png"

import ChainsawManCover from "./images/books/Chainsawman_Cover.jpg";
import DandadanCover from "./images/books/Dandadan_Cover.jpg";
import DaredevilCover from "./images/books/Daredevil_Born_Again_Cover.jpg";
import DeliciousInDungeonCover from "./images/books/Delicious_In_Dungeon_Cover.jpeg";
import IAmAHeroCover from "./images/books/I_Am_A_Hero_Cover.jpg";
import JJBACover from "./images/books/Jojos_Bizarre_Adventure_Cover.jpg"
import KaguyaSamaCover from "./images/books/Kaguya-sama_Love_Is_War_Cover.jpg";
import PreacherCover from "./images/books/Preacher_Cover.png";
import VagabondCover from "./images/books/Vagabond_Cover.png";
import VinlandSagaCover from "./images/books/Vinland_Saga_Cover.jpg";

import BG3 from "./images/games/Baldur's_Gate_3_Cover.jpg";
import D2 from "./images/games/Destiny_2_Cover.jpg";
import D1 from "./images/games/Destiny_Cover.jpg";
import ER from "./images/games/Elden_Ring_Cover.jpg";
import Hades from "./images/games/Hades_Cover.jpg";
import Minecraft from "./images/games/Minecraft_Cover.png";
import Pokemon from "./images/games/Pokemon_Emerald_Cover.jpg";
import Signalis from "./images/games/Signalis_Cover.jpg";
import Stardew from "./images/games/Stardew_Valley_Cover.png";
import VS from "./images/games/Vampire_Survivors_Cover.jpg";

import SilentVoice from "./images/movies/A_Silent_Voice_Film_Cover.jpg";
import EvilDead2 from "./images/movies/Evil_Dead_II_Cover.jpg";
import FMJ from "./images/movies/Full_Metal_Jacket_Cover.jpg";
import Howl from "./images/movies/Howls_Moving_Castle_Cover.jpg";
import JW4 from "./images/movies/John_Wick_Chapter_4_Cover.jpg";
import NoCountry from "./images/movies/No_Country_for_Old_Men_Cover.jpg";
import ReservoirDogs from "./images/movies/Reservoir_Dogs_Cover.png";
import Batman from "./images/movies/The_Batman_Cover.jpg";
import Lighthouse from "./images/movies/The_Lighthouse_Cover.jpeg";
import TWBB from "./images/movies/There_Will_Be_Blood_Cover.jpg";

import Deathmetal from "./images/music/Death_Metal_Cover.webp";
import KingCrimson from "./images/music/In_the_Court_of_the_Crimson_King_Cover.jpeg";
import LedZeppelin from "./images/music/Led_Zeppelin_IV_Cover.jpg";
import LanaDelRey from "./images/music/Lust_For_Life_Cover.png";
import Nirvana from "./images/music/MTV_Unplugged_In_New_York_Cover.png";
import BlackSabbath from "./images/music/Paranoid_Cover.jpg";
import Metallica from "./images/music/Ride_The_Lightning_Cover.png";
import QOTSA from "./images/music/Songs_For_The_Deaf_Cover.png";
import Boygenius from "./images/music/The_Record_Cover.jpg";
import PinkFloyd from "./images/music/Wish_You_Were_Here_Cover.png";

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

        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img src={github} alt="github" style={{width: '30%', height: 'auto'}}/>
        </div>

        <div class="highlightGIT">
            <img src={seal} alt="csusbseal" style={{width: '10%', height: 'auto'}}/>
            <a href="https://github.com/DiegoOzuna/Platform-Computing">MY GITHUB PAGE</a>
            <img src={yote} alt="csusbyote" style={{width: '10%', height: 'auto'}}/>
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
                <img src={lstm} alt="lstm" class="center"/>
                <img src={ai} alt="lstm" class="center"/>
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
          <h1>About Cameron</h1>
            <p>
              My name is Cameron Hunter. This is my second semester as a senior at CSUSB. 
              This page is an introduction to me.
            </p>

            <h2>My Time at CSUSB</h2>
              <p>
                Like I mentioned above, this year is my senior year here at CSUSB. My major 
                is Computer Science. While most of my time at CSUSB has been spent in the 
                Computer Science program, I do also have some experience in other fields. 
                In my freshman year, I took a few semester of Japanese and more recently, 
                I have ventured into GIS starting last semester and continuing this semester. 
                GIS stands for Geographic Information Systems, and focuses on using computers 
                to make and manipulate maps.
              </p>

              <h3>Platform Computing Experience</h3>
                <p>
                  I do also have some experience with HTML, CSS, and JavaScript from a 
                  previous class. I took Software Engineering two semesters ago and we spent 
                  almost the whole class working on our final group project which could have 
                  been a mobile app, website, game, etc. We chose to make a website that 
                  allowed users to review and look at information about video games. The whole 
                  website was done with HTML, CSS, and JavaScript, so I have a decent amount 
                  of experience with web design.
                </p>
                <a href="https://github.com/CameronHunter614/CSE-4500-Platform-Computing/tree/main">Here is a link to my Github</a>

            <h2>Hobbies</h2>
              <h3>Games</h3>
                <p>
                  I have been playing video games for almost as long as I can remember and they 
                  have been a very large part of my life. A lot of memories from when I was a 
                  kid come from video games, whether I was playing Wii Sports with my Dad or 
                  spending and Saturday playing games with my friends. Destiny is a 
                  particularly large part of my life because at this point, I have been 
                  playing it in one form or another for the last 10 years. Even if I take 
                  breaks from Destiny when things get slow, it is a game that I always come 
                  back to and for that reason, it is a game that is very near and dear to my 
                  heart.
                </p>

                <p>
                  I have also been collecting Pokemon cards for a long time. In highschool, 
                  I reintroduced a passion for the Pokemon TCG to my friends and we went to 
                  several Pokemon set prereleases together. This rediscovery of trading card 
                  games lead me to Magic: The Gathering, which is my current favorite card 
                  game to play. However, Pokemon is still my favorite TCG to collect.
                </p>

              <h3>Favorite Games</h3>
              <div>
                <div class="row">
                  <div class="column">
                  <div class="card">Baldur's Gate 3</div>
                    <img class="game" src={BG3} alt="Baldur's Gate 3 Cover" class="center"/>
                    <p class="center">2023</p>
                  </div>
                  <div class="column">
                  <div class="card">Elden Ring</div>
                    <img class="game" src={ER} alt="Elden Ring Cover" class="center"/>
                    <p class="center">2022</p>
                  </div>
                  <div class="column">
                  <div class="card">Signalis</div>
                    <img class="game" src={Signalis} alt="Signalis Cover" class="center"/>
                    <p class="center">2022</p>
                  </div>
                  <div class="column">
                  <div class="card">Vampire Survivors</div>
                    <img class="game" src={VS} alt="Vampire Survivors Cover" class="center"/>
                    <p class="center">2022</p>
                  </div>
                  <div class="column">
                  <div class="card">Hades</div>
                    <img class="game" src={Hades} alt="Hades Cover" class="center"/>
                    <p class="center">2020</p>
                  </div>
                </div>
                      
                <div class="row">
                  <div class="column">
                  <div class="card">Destiny 2</div>
                    <img class="game" src={D2} alt="Destiny 2 Cover" class="center"/>
                    <p class="center">2017</p>
                  </div>
                  <div class="column">
                  <div class="card">Stardew Valley</div>
                    <img class="game" src={Stardew} alt="Stardew Valley Cover" class="center"/>
                    <p class="center">2016</p>
                  </div>
                  <div class="column">
                  <div class="card">Destiny</div>
                    <img class="game" src={D1} alt="Destiny Cover" class="center"/>
                    <p class="center">2014</p>
                  </div>
                  <div class="column">
                  <div class="card">Minecraft</div>
                    <img class="game" src={Minecraft} alt="Minecraft Cover" class="center"/>
                    <p class="center">2011</p>
                  </div>
                  <div class="column">
                  <div class="card">Pokemon Emerald</div>
                    <img class="game" src={Pokemon} alt="Pokemon Emerald Cover" class="center"/>
                    <p class="center">2004</p>
                  </div>
                </div>
              </div>   

              <h3>Music</h3>
                <p>
                  I really love listening to music and I am constantly looking for new music. 
                  I have a pretty small collection of vinyl records of some of my favorite 
                  albums as well. Quite recently, I bought an electric bass and I have been 
                  trying to teach myself to play, though it is very slow going. My eventual 
                  goal is to also learn to play guitar, but I can't in good conscience buy 
                  myself a guitar and all the related equipment before I even learn to play 
                  my bass.
                </p>

              <h3>Favorite Music</h3>
              <div>
                <div class="row">
                  <div class="column">
                  <div class="card">The Record</div>
                    <img class="album" src={Boygenius} alt="The Record Cover" class="center"/>
                    <p class="center">Boygenius</p>
                    <p class="center">2023</p>
                  </div>
                  <div class="column">
                  <div class="card">Lust For Life</div>
                    <img class="album" src={LanaDelRey} alt="Lust For Life Cover" class="center"/>
                    <p class="center">Lana Del Rey</p>
                    <p class="center">2017</p>
                  </div>
                  <div class="column">
                  <div class="card">Songs For The Deaf</div>
                    <img class="album" src={QOTSA} alt="Songs For the Deaf Cover" class="center"/>
                    <p class="center">Queens of the Stone Age</p>
                    <p class="center">2002</p>
                  </div>
                  <div class="column">
                  <div class="card">D>E>A>T>H>M>E>T>A>L</div>
                    <img class="album" src={Deathmetal} alt="D>E>A>T>H>M>E>T>A>L Cover" class="center"/>
                    <p class="center">Panchiko</p>
                    <p class="center">2000</p>
                  </div>
                  <div class="column">
                  <div class="card">MTV Unplugged In New York</div>
                    <img class="album" src={Nirvana} alt="MTV Unplugged In New York Cover" class="center"/>
                    <p class="center">Nirvana</p>
                    <p class="center">1994</p>
                  </div>
                </div>
                        
                <div class="row">
                  <div class="column">
                  <div class="card">Ride The Lightning</div>
                    <img class="album" src={Metallica} alt="Ride The Lightning Cover" class="center"/>
                    <p class="center">Metallica</p>
                    <p class="center">1984</p>
                  </div>
                  <div class="column">
                  <div class="card">Wish You Were Here</div>
                    <img class="album" src={PinkFloyd} alt="Wish You Were Here Cover" class="center"/>
                    <p class="center">Pink Floyd</p>
                    <p class="center">1975</p>
                  </div>
                  <div class="column">
                  <div class="card">In The Court Of The Crimson King</div>
                    <img class="album" src={KingCrimson} alt="In The Court Of The Crimson King Cover" class="center"/>
                    <p class="center">King Crimson</p>
                    <p class="center">1973</p>
                  </div>
                  <div class="column">
                  <div class="card">Led Zeppelin IV</div>
                    <img class="album" src={LedZeppelin} alt="Led Zeppelin IV Cover" class="center"/>
                    <p class="center">Led Zeppelin</p>
                    <p class="center">1971</p>
                  </div>
                  <div class="column">
                  <div class="card">Paranoid</div>
                    <img class="album" src={BlackSabbath} alt="Paranoid Cover" class="center"/>
                    <p class="center">Black Sabbath</p>
                    <p class="center">1970</p>
                  </div> 
                </div>
              </div>

              <h3>Movies</h3>
                <p>
                  Going to the movie theater and watching a good movie is one of my favorite 
                  things to do on a day off. Over time, I've come to appreciate the kind of 
                  films that come from smaller directors and especially the kind of films that 
                  come out of a small budget. One of my favorite movies is Evil Dead II, and 
                  by extension The Evil Dead and Army of Darkness because they really make the 
                  most of their small budgets in a way that is really fun to watch.
                </p>

              <h3>Favorite Movies</h3>
              <div>
                <div class="row">
                  <div class="column">
                  <div class="card">John Wick Chapter 4</div>
                    <img class="movie" src={JW4} alt="John Wick Chapter 4 Cover" class="center"/>
                    <p class="center">2023</p>
                  </div>
                  <div class="column">
                  <div class="card">The Batman</div>
                    <img class="movie" src={Batman} alt="The Batman Cover" class="center"/>
                    <p class="center">2022</p>
                  </div>
                  <div class="column">
                  <div class="card">The Lighthouse</div>
                    <img class="movie" src={Lighthouse} alt="The Lighthouse Cover" class="center"/>
                    <p class="center">2019</p>
                  </div>
                  <div class="column">
                  <div class="card">A Silent Voice</div>
                    <img class="movie" src={SilentVoice} alt="A Silent Voice Cover" class="center"/>
                    <p class="center">2016</p>
                  </div>
                  <div class="column">
                  <div class="card">No Country For Old Men</div>
                    <img class="movie" src={NoCountry} alt="No Country For Old Men Cover" class="center"/>
                    <p class="center">2007</p>
                  </div>
                </div>
    
                <div class="row">
                  <div class="column">
                  <div class="card">Howl's Moving Castle</div>
                    <img class="movie" src={Howl} alt="Howl's Moving Castle Cover" class="center"/>
                    <p class="center">2004</p>
                  </div>
                  <div class="column">
                  <div class="card">There Will Be Blood</div>
                    <img class="movie" src={TWBB} alt="There Will Be Blood Cover" class="center"/>
                    <p class="center">2007</p>
                  </div>
                  <div class="column">
                  <div class="card">Reservoir Dogs</div>
                    <img class="movie" src={ReservoirDogs} alt="Reservoir Dogs Cover" class="center"/>
                    <p class="center">1992</p>
                  </div>
                  <div class="column">
                  <div class="card">Evil Dead II</div>
                    <img class="movie" src={EvilDead2} alt="Evil Dead II Cover" class="center"/>
                    <p class="center">1987</p>
                  </div>
                  <div class="column">
                  <div class="card">Full Metal Jacket</div>
                    <img class="movie" src={FMJ} alt="Full Metal Jacket Cover" class="center"/>
                    <p class="center">1987</p>
                  </div>
                </div>
              </div>

              <h3>Books</h3>
                <p>
                  I have loved reading ever since I was a child and that love continues to 
                  today. Most of my recent reading has been in the form of manga and other 
                  comics, though I  have been trying to read more novels. As a kid, I 
                  developed a love for reading because I learned that my mom would almost 
                  never say no if asked for a new book. However, over time I lost the desire 
                  to read novels, but I picked up reading manga and comics. I now have a 
                  large collection of physical manga volumes, as well as an even larger list 
                  of manga I have read online.
                </p>

              <h3>Favorite Books</h3>
              <div>
                <div class="row">
                  <div class="column">
                  <div class="card">Chainsaw Man</div>
                    <img class="book" src={ChainsawManCover} alt="Chainsaw Man Cover" class="center"/>
                    <p class="center">Tatsuki Fujimoto</p>
                  </div>
                  <div class="column">
                  <div class="card">Dandadan</div>
                    <img class="book" src={DandadanCover} alt="Dandadan Cover" class="center"/>
                    <p class="center">Yukinobu Tatsu</p>
                  </div>
                  <div class="column">
                  <div class="card">Daredevil: Born Again</div>
                    <img class="book" src={DaredevilCover} alt="Daredevil: Born Again Cover" class="center"/>
                    <p class="center">Frank Miller & David Mazzucchelli</p>
                  </div>
                  <div class="column">
                  <div class="card">Delicious in Dungeon</div>
                    <img class="book" src={DeliciousInDungeonCover} alt="Delicious in Dungeon Cover" class="center"/>
                    <p class="center">Ryoko Kui</p>
                  </div>
                  <div class="column">
                  <div class="card">I Am A Hero</div>
                    <img class="book" src={IAmAHeroCover} alt="I Am A Hero Cover" class="center"/>
                    <p class="center">Kengo Hanazawa</p>
                  </div>
                </div>
    
                <div class="row">
                  <div class="column">
                  <div class="card">Jojo's Bizarre Adventure</div>
                    <img class="book" src={JJBACover} alt="Jojo's Bizarre Adventure Cover" class="center"/>
                    <p class="center">Hirohiko Araki</p>
                  </div>
                  <div class="column">
                  <div class="card">Kaguya-sama: Love Is War</div>
                    <img class="book" src={KaguyaSamaCover} alt="Kaguya-sama: Love Is War Cover" class="center"/>
                    <p class="center">Aka Akasaka</p>
                  </div>
                  <div class="column">
                  <div class="card">Preacher</div>
                    <img class="book" src={PreacherCover} alt="Preacher Cover" class="center"/>
                    <p class="center">Garth Ennis & Steve Dillon</p>
                  </div>
                  <div class="column">
                  <div class="card">Vagabond</div>
                    <img class="book" src={VagabondCover} alt="Vagabond Cover" class="center"/>
                    <p class="center">Takehiko Inoue</p>
                  </div>
                  <div class="column">
                  <div class="card">Vinland Saga</div>
                    <img class="book" src={VinlandSagaCover} alt="Vinland Saga Cover" class="center"/>
                    <p class="center">Makoto Yukimura</p>
                  </div>
                </div>
              </div>

              <h3>Outdoors</h3>
                <p>
                  I joined the Cub Scouts in first grade and I have loved spending time 
                  outdoors ever since. Very soon after joining, I found that going camping was 
                  my favorite thing that our troop did. After I aged out of Cub Scouts, I went 
                  on to join our local Boy Scout Troop, where I earned my Eagle Scout rank. 
                  During my time in Boy Scouts, I learned that I really like rock climbing, 
                  though I haven't found the time to go climbing in a long while.
                </p>

                <p>
                  More recently, I went on a summer cruise to Alaska and land tour with my 
                  family. As part of one of the port activities, we got to go visit a camp 
                  where people send their dogs to be trained to pull dogsleds. We got to hold 
                  some of the puppies and we got to ride on a special cart that one of the 
                  sled teams pulled. During the land tour, we went to a wildlife preserve 
                  where they take care of animals that are injured or unfit to return to the 
                  wild, until they are ready to be released. We saw bears, moose, elk, 
                  reindeer, a lynx, and an eagle. Our trip to Alaska was one of the most fun 
                  things I've ever done and I really want to go back when I get the chance.
                </p>

              <div>  
                <div class="responsive">
                  <div class="gallery">
                    <img src={Glacier} alt="Hubbard Glacier"/>
                    <div class="desc">View of Hubbard Glacier from our cruise ship.</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="gallery">
                    <img src={Bear1} alt="Bear"/>
                    <div class="desc">One of the bears that live at the nature preserve.</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="gallery">
                    <img src={Bear2} alt="Bear"/>
                    <div class="desc">Another one of the bears that live at the nature preserve.</div>
                  </div>
                </div>
                <div class="responsive">
                  <div class="gallery">
                    <img src={Denali} alt="Denali"/>
                    <div class="desc">View of Denali.</div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
        </header>
      </div>




      <div className="Sub-website">
        <header className="App-header">
          <h2>About Jasmin</h2>
          <p> 
              Hi, my name is Jasmin Flores. And I am a student at CSUSB. Moreover, I am pursuing my B.S. in Computer Science.
          </p>
          <p>
              One of my favorite things to do is read. I just finished Slaughterhouse-Five, or The Children's Crusade: A Duty-Dance with Death, by Kurt Vonnegut. 
              My next title is Invincible Compendium Volume 2 by Robert Kirkman and Ryan Ottley.
          
          </p>
          <p>
              Another one of my hobbies is baking. The latest dessert I made was crème brûlée, I make it often. But the last time I made it I could not find my torch 
              so I used a hot spoon to melt the sugar onto the custard and it worked quite well actually. I was pleasantly surprised.
          </p>

          <div>
              <h2>List of some of my favorites</h2>
              <ul >
                  <li>Color: Blue &#128160;</li>
                  <li>Book: Fight Club by Chuck Palahniuk</li>
                  <li>Song: Lovelier Girl by Beach House</li>
                  <li>Movie: Asteroid City directed by Wes Anderson</li>
              </ul>
          </div>

          <div class="myLink">
              Here is a link that directs you to my main Github account: <a href="https://github.com/jasflor">Jasmin's Main Github account</a>
          </div>

          <div>
              <img src={creme} alt="Crème brûlée" />
              <img src={fightclub} alt="Fight Club book cover" />
              <img src={beachhouse} alt="Beach House album cover" />
              <img src={asteroidcity} alt="Asteroid City alien" />
              <img src={invincible} alt="Invincible text" />
              <img src={slaughterhouse} alt="Slaughterhouse-Five book cover" />
          </div>
        </header>
      </div>




    </div>
  );
}

export default App;
