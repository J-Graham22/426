import React from 'react';
import logo from './logo.svg';
import ButtonComponent from './components/ButtonComponent'
import Tile from './components/Tile'

import './App.css';

function App() {
  let tile1: {img: string, title: string; subtitle: string; description: string; link1: string, link2: string, link3: string} = {
    img: "scale.PNG",
    title: "Java",
    subtitle: "Musical Scale Viewer",
    description: " A desktop application in which the user selects from a root note and a scale, and the application then displays the resulting musical scale. Notable principles of programming in this project include a circular linked list, string parsing, use of the MVC design pattern, and creating a GUI with the Java swing library.",
    link1: "https://youtu.be/mXqfSnj0XFk",
    link2: "http://www.mediafire.com/file/2sv81wobrwk1ddv/ScaleViewer.jar/file",
    link3: "https://github.com/J-Graham22/ScaleViewer"
  }
  let tile2: {img: string, title: string; subtitle: string; description: string; link1: string, link2: string, link3: string} = {
    img: "a star.PNG",
    title: "Python",
    subtitle: "Path-finding Visualizer",
    description: " A desktop application that visualizes the search process of the A* Path-finding algorithm finding the shortest path between two points. The start and end point can be placed anywhere as well as walls through which the path cannot cross. Important features of the application is use of the A* path-finding algorithm and creating a GUI with the Pygame module.",
    link1: "https://youtu.be/0oP4qN56P5E",
    link2: "http://www.mediafire.com/file/iaizuo1syqudgbd/main.exe/file",
    link3: "https://github.com/J-Graham22/A_Star_Pathfind_Visualization"
  }
  let tile3: {img: string, title: string; subtitle: string; description: string; link1: string, link2: string, link3: string} = {
    img: "twitter.jpg",
    title: "Python",
    subtitle: "Automatic Like and Retweet Script for Twitter",
    description: " A script that runs perpetually on a given Twitter account and automatically likes and retweets tweets on the timeline that match certain criteria. This implementation is run on the Twitter account for Golem Gang eSports and likes and retweets that feature the Twitch link for their players. This script makes use of the Twitter developers platform and the Tweepy API.",
    link1: "https://youtu.be/h9WM_N8kA1A",
    link2: "https://github.com/J-Graham22/socialGolem/",
    link3: "https://github.com/J-Graham22/socialGolem/"
  }

  let tile4: {img: string, title: string; subtitle: string; description: string; link1: string, link2: string, link3: string} = {
    img: "twitter.jpg",
    title: "Godot | Gdscript",
    subtitle: "Mad Pizza Rush",
    description: " A game in which you have to serve pizza around a parlor, but failing your additional tasks grants you bonuses that give you an easier time. Made with the Godot game engine in its proprietary Python-based scripting language GDscript and compiled for HTML and Windows",
    link1: "https://srleopold.itch.io/mad-pizza-rush",
    link2: "https://srleopold.itch.io/mad-pizza-rush",
    link3: "https://github.com/srleopold/WowieGameJam2021GodotGit"
  }
  return (
    <div>
      <Tile img={tile1.img} title={tile1.title} subtitle={tile1.subtitle} description={tile1.description} link1={tile1.link1} link2={tile1.link2} link3={tile1.link3} />
      <Tile img={tile2.img} title={tile2.title} subtitle={tile2.subtitle} description={tile2.description} link1={tile2.link1} link2={tile2.link2} link3={tile2.link3} />
      <Tile img={tile3.img} title={tile3.title} subtitle={tile3.subtitle} description={tile3.description} link1={tile3.link1} link2={tile3.link2} link3={tile3.link3} />
      <Tile img={tile4.img} title={tile4.title} subtitle={tile4.subtitle} description={tile4.description} link1={tile4.link1} link2={tile4.link2} link3={tile4.link3} />
    </div>
  );
}

export default App;
