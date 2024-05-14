import logo from './logo.svg';
import './App.css';
import cat from "./images/cat_standing.png"
import persona from "./images/Persona Banner.png"
import hyrule from "./images/age_of_calamity_art.png"

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
  );
}

export default App;
