const express = require("express");

const server = express();

const jokes = [
    { id: 1, joke: "Why don’t skeletons fight each other? They don’t have the guts." },
    { id: 2, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
    { id: 3, joke: "Why don’t eggs tell jokes? They might crack up!" },
    { id: 4, joke: "Why did the bicycle fall over? Because it was two-tired!" },
    { id: 5, joke: "What do you call cheese that isn't yours? Nacho cheese!" },
    { id: 6, joke: "Why can't your nose be 12 inches long? Because then it would be a foot!" },
    { id: 7, joke: "Why did the math book look sad? Because it had too many problems." },
    { id: 8, joke: "How do you organize a space party? You planet!" },
    { id: 9, joke: "Why did the golfer bring an extra pair of pants? In case he got a hole in one!" },
    { id: 10, joke: "What do you call fake spaghetti? An impasta!" },
    { id: 11, joke: "Why was the stadium so cool? It was full of fans!" },
    { id: 12, joke: "Why do cows have hooves instead of feet? Because they lactose!" },
    { id: 13, joke: "What did one ocean say to the other ocean? Nothing, they just waved!" },
    { id: 14, joke: "Why don’t some fish play piano? Because you can’t tuna fish!" },
    { id: 15, joke: "Why do seagulls fly over the sea? Because if they flew over the bay, they’d be bagels!" },
    { id: 16, joke: "Why do bananas never feel lonely? Because they hang out in bunches!" },
    { id: 17, joke: "Why do ducks have feathers? To cover their butt quacks!" },
    { id: 18, joke: "Why don’t koalas count as bears? They don’t have the right koalafications!" },
    { id: 19, joke: "What did one hat say to the other? Stay here, I’m going on ahead!" },
    { id: 20, joke: "Why did the tomato turn red? Because it saw the salad dressing!" },
    { id: 21, joke: "Why was the belt arrested? For holding up a pair of pants!" },
    { id: 22, joke: "Why did the chicken go to the séance? To talk to the other side!" },
    { id: 23, joke: "Why don’t trees like riddles? They get stumped!" },
    { id: 24, joke: "Why are ghosts bad liars? Because you can see right through them!" },
    { id: 25, joke: "What do you call a factory that makes good products? A satisfactory!" },
    { id: 26, joke: "What did the janitor say when he jumped out of the closet? Supplies!" },
    { id: 27, joke: "Why are elevator jokes so good? They work on many levels!" },
    { id: 28, joke: "Why don’t vampires go to barbecues? They don’t like steaks!" },
    { id: 29, joke: "Why did the coffee file a police report? It got mugged!" },
    { id: 30, joke: "Why did the orange stop? Because it ran out of juice!" },
    { id: 31, joke: "How does the moon cut his hair? Eclipse it!" },
    { id: 32, joke: "Why did the computer go to therapy? It had too many bugs!" },
    { id: 33, joke: "Why did the grape stop in the middle of the road? Because it ran out of juice!" },
    { id: 34, joke: "Why don’t ants get sick? Because they have tiny ant-bodies!" },
    { id: 35, joke: "What kind of shoes do ninjas wear? Sneakers!" },
    { id: 36, joke: "Why did the calendar break up with the clock? It needed more space!" },
    { id: 37, joke: "Why do bees have sticky hair? Because they use honeycombs!" },
    { id: 38, joke: "Why did the banana go to the doctor? It wasn’t peeling well!" },
    { id: 39, joke: "Why did the chicken sit down at the party? Because it was fried!" },
    { id: 40, joke: "What did the buffalo say to his son when he left for college? Bison!" },
    { id: 41, joke: "Why did the cat sit on the computer? To keep an eye on the mouse!" },
    { id: 42, joke: "Why did the baker go to therapy? He kneaded it!" },
    { id: 43, joke: "What’s a skeleton’s least favorite room? The living room!" },
    { id: 44, joke: "Why was the math teacher suspicious? Too many numbers didn’t add up!" },
    { id: 45, joke: "Why did the cow go to space? To see the moooon!" },
    { id: 46, joke: "Why did the dog sit in the shade? Because it didn’t want to be a hot dog!" },
    { id: 47, joke: "Why don’t crabs donate to charity? Because they’re shellfish!" },
    { id: 48, joke: "Why did the scarecrow start a business? He was outstanding in his field!" },
    { id: 49, joke: "Why was the big cat disqualified? Because it was a cheetah!" },
    { id: 50, joke: "Why did the light bulb fail his test? Because he wasn’t too bright!" }
  ];

  

server.get("/jokes/:id", (req, res) => {
    
    let idx = Math.floor(Math.random() * 50);
    let id = req.query.id;
    let params = req.params.id;
    
    if(req.query.joke === 'random')
    {
        const joke = jokes.find((j, index) => {
            
            if(idx === index)
            {
                return j;
            }
        });
        
        res.json(joke);
    }
    else if(id)
    {
        const joke = jokes.find((j) => {
            
            if(j.id == id)
            {
                return j;
            }
        });
        
        res.json({
            success: true,
            data: joke
        });
    }
    else if(params)
    {
        const joke = jokes.find((j) => j.id == params);
        res.json(joke);
    }
    else if(!params){
        res.json(jokes);
    }
    
});



server.listen(3000, () => {
    console.log("server us up and running on port 3000");
    
});