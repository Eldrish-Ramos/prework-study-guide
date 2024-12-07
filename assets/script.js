//const means constant, this variable can not be changed later on.

const topics = ['HTML','Css','Git','JavaScript'];
const randomTopic = topics[Math.floor(Math.random()*topics.length)];

// for(let x = 0; x < topics.length; x++)
// {
//     console.log(topics[x]);
// }

function listTopics()
{
    for (let x=0; x<topics.length; x++)
    {
        console.log(topics[x]);
    }
}

function selectTopic()
{
    if(randomTopic === 'HTML')
    {
        console.log("Let's study HTML!");
    }
    else if(randomTopic === 'Css')
    {
        console.log("Let's study Css!");
    }
    else if(randomTopic === 'Git')
    {
        console.log("Let's study Git!");
    }
    else if(randomTopic === 'JavaScript')
    {
        console.log("Let's study JavaScript!");
    }
    else 
    {
        console.log("Please try again!");
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();