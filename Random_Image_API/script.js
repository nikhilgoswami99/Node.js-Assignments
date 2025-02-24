const express = require("express");

const server = express();

const animalImages = [
    { name: "Lion", link: "https://source.unsplash.com/400x300/?lion" },
    { name: "Tiger", link: "https://source.unsplash.com/400x300/?tiger" },
    { name: "Elephant", link: "https://source.unsplash.com/400x300/?elephant" },
    { name: "Giraffe", link: "https://source.unsplash.com/400x300/?giraffe" },
    { name: "Zebra", link: "https://source.unsplash.com/400x300/?zebra" },
    { name: "Bear", link: "https://source.unsplash.com/400x300/?bear" },
    { name: "Wolf", link: "https://source.unsplash.com/400x300/?wolf" },
    { name: "Fox", link: "https://source.unsplash.com/400x300/?fox" },
    { name: "Deer", link: "https://source.unsplash.com/400x300/?deer" },
    { name: "Rabbit", link: "https://source.unsplash.com/400x300/?rabbit" },
    { name: "Horse", link: "https://source.unsplash.com/400x300/?horse" },
    { name: "Kangaroo", link: "https://source.unsplash.com/400x300/?kangaroo" },
    { name: "Panda", link: "https://source.unsplash.com/400x300/?panda" },
    { name: "Koala", link: "https://source.unsplash.com/400x300/?koala" },
    { name: "Monkey", link: "https://source.unsplash.com/400x300/?monkey" },
    { name: "Chimpanzee", link: "https://source.unsplash.com/400x300/?chimpanzee" },
    { name: "Gorilla", link: "https://source.unsplash.com/400x300/?gorilla" },
    { name: "Leopard", link: "https://source.unsplash.com/400x300/?leopard" },
    { name: "Jaguar", link: "https://source.unsplash.com/400x300/?jaguar" },
    { name: "Cheetah", link: "https://source.unsplash.com/400x300/?cheetah" },
    { name: "Hyena", link: "https://source.unsplash.com/400x300/?hyena" },
    { name: "Crocodile", link: "https://source.unsplash.com/400x300/?crocodile" },
    { name: "Alligator", link: "https://source.unsplash.com/400x300/?alligator" },
    { name: "Hippo", link: "https://source.unsplash.com/400x300/?hippopotamus" },
    { name: "Rhinoceros", link: "https://source.unsplash.com/400x300/?rhinoceros" },
    { name: "Squirrel", link: "https://source.unsplash.com/400x300/?squirrel" },
    { name: "Otter", link: "https://source.unsplash.com/400x300/?otter" },
    { name: "Raccoon", link: "https://source.unsplash.com/400x300/?raccoon" },
    { name: "Mole", link: "https://source.unsplash.com/400x300/?mole" },
    { name: "Armadillo", link: "https://source.unsplash.com/400x300/?armadillo" },
    { name: "Owl", link: "https://source.unsplash.com/400x300/?owl" },
    { name: "Eagle", link: "https://source.unsplash.com/400x300/?eagle" },
    { name: "Hawk", link: "https://source.unsplash.com/400x300/?hawk" },
    { name: "Penguin", link: "https://source.unsplash.com/400x300/?penguin" },
    { name: "Parrot", link: "https://source.unsplash.com/400x300/?parrot" },
    { name: "Flamingo", link: "https://source.unsplash.com/400x300/?flamingo" },
    { name: "Swan", link: "https://source.unsplash.com/400x300/?swan" },
    { name: "Peacock", link: "https://source.unsplash.com/400x300/?peacock" },
    { name: "Dolphin", link: "https://source.unsplash.com/400x300/?dolphin" },
    { name: "Whale", link: "https://source.unsplash.com/400x300/?whale" },
    { name: "Shark", link: "https://source.unsplash.com/400x300/?shark" },
    { name: "Octopus", link: "https://source.unsplash.com/400x300/?octopus" },
    { name: "Turtle", link: "https://source.unsplash.com/400x300/?turtle" },
    { name: "Frog", link: "https://source.unsplash.com/400x300/?frog" },
    { name: "Lizard", link: "https://source.unsplash.com/400x300/?lizard" },
    { name: "Chameleon", link: "https://source.unsplash.com/400x300/?chameleon" },
    { name: "Snake", link: "https://source.unsplash.com/400x300/?snake" },
    { name: "Starfish", link: "https://source.unsplash.com/400x300/?starfish" },
    { name: "Jellyfish", link: "https://source.unsplash.com/400x300/?jellyfish" }
  ];

  
  server.get('/image', (req, res) => {
    let idx = Math.floor(Math.random() * 50);
    const image = animalImages.find((img, index) => {
      if(idx === index)
      {
        return img;
      }
    });
    res.send(image);
  });
  

server.listen(5000, () => {
    console.log("server is up and running on port 5000");
    
})