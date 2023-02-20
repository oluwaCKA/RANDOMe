function clearAll() {
    const memeContainer = document.querySelector('.meme-content');
    const jokeContainer = document.querySelector('.joke-content');
    const quoteContainer = document.querySelector('.quote-content');
    const riddleContainer = document.querySelector('.riddle-content');


    memeContainer.innerHTML =  '';
    jokeContainer.innerHTML =  '';
    quoteContainer.innerHTML = '';
    riddleContainer.innerHTML = '';
}







/**
 * TODO:
 * - Show a random Meme, joke, quote, and riddle in the correct location
 * - Never show more than 1 of the above at a time
 */

function showMeme() {
    const randomMemeUrl = getRandomData('memes');
    const container = document.querySelector('.meme-content');
    const newImg = document.createElement('img');
    newImg.setAttribute('src', randomMemeUrl);

    clearAll();
    container.appendChild(newImg);
}

function showJoke() {
    const randomJokeText = getRandomData('jokes');
    const container = document.querySelector('.joke-content');
    const newJoke = document.createElement('p');
    newJoke.textContent = randomJokeText;

    clearAll();
    container.appendChild(newJoke);
}

function showQuote() {
    const randomQuote = getRandomData('quotes');
    
    const quote = document.createElement('p');
    const author = document.createElement('p');
    quote.textContent = randomQuote.quote;
    author.textContent = "- " + randomQuote.author;
    
    clearAll();

    const container = document.querySelector('.quote-content');
    container.appendChild(quote);
    container.appendChild(author);
     
    
}

function showRiddle() {
    const randomRiddle = getRandomData('riddles');

    const question = randomRiddle.question;
    const answer = randomRiddle.answer;
    
    // const { question, answer } = randomRiddle;

    const questionElem = document.createElement('p');
    questionElem.textContent = question;

    const answerElem = document.createElement('p');
    answerElem.textContent = 'The answer is: ' + answer;
    answerElem.setAttribute('id', 'riddle-answer');
    answerElem.hidden = true;

    const container = document.querySelector('.riddle-content');

    clearAll();

    container.appendChild(questionElem);
    container.appendChild(answerElem);


}

function revealAnswers() {
    const riddleContainer = document.querySelector('.riddle-content');
    const riddle = riddleContainer.querySelector('p');
    const answer = document.querySelector('#riddle-answer');

    if(riddle && answer.hidden) {
        answer.hidden = false;
    }else if (riddle) {
        alert("The answer has already been revealed!!");
    }else {
        alert('There is no riddle to answer!!');
    }
}







function getRandomData(type) {
    return data[type][rn(data[type].length)];
}


// Sourced from my library for now 
//For meme data; a string
const memes = [
    'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be6ace19c29d4e0cec7_LuyYKvSMNsoK3_Kgkfbw9Cwf-vF7gFtOyUnT6TogZ8vuN81S8hQWSTUh4_TpjkdUlQjr_0cOXJL2SyPT4KjX-RAVudOV7AH4JyP3K-zzaYIVCrvIpA31aoqB7dBjwSglYaJuFR4R.png',
    'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be780ae86778720e367_Zoa5paPhsRtqzIki0flgfk3q7FGEh2VUa5DLxKQTC0KN4WIPvB_qPkMKAIWlsnXDU5ZVupBa4GuMskrt68jRC3aUuNECLsJFLxD_-FevEqq9yPvWpkX1wOJMSmg0J9QuMCdNgJ1L.png',
    'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be846cf9e0ad057035a_oaVMYWTVDbSobpm1nXr8S9ERSmhLz8iYF3u2t12bmluiRBaHH4YZ6FGWajs1T9yDSAT-BpnVOjkxFE5blXakKWmtztAM1K-_5PSnHKMNxRei3VjvJHp7Hvt8mSikLqCdlopkHZHf.png',
    'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png',
    'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be945999ae41a3f4c92_feUdO9AA3CsdZrM3bRAlu9V70223KhcG7X9M-XqwItrqnuDRXvOTyOcaVohLoIp2jUtyUGgSonDuERdDE-Fg-TLm_2pkcahkZ3Z8kUm-iiWi8nKEqtgPSe-9DMoTSCHRPm113AWl.png',
    'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33beaf630caf8b8625819_ojVfiY9N9W7SNblUwsMuRdEHfZaK7gTn4I8oA596jsQz0gHhJ0msEceYVq2C5afZ4rDCvhqx1EEedzTz664Vi3aDScXL2jnzV_uuWriJbW-wldzhpJDT-TNOPvgusibLRCqaY5pJ.png',
    'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bec95b39b4f2f1664eb_uFzJ2V9SG3VetDRh4tXkrtS1KqrppSecA7Quaw5sNKAxgCUXoaLUIMvKf6bcoXrpnwt43ugG5onRDKL7FnUPbCBaGDM1nuatJk3JvOtsL6PbTJpv6TzD9C2MERYd7hOWfkJjQSme.png'
];


// Sourced from the tutor for now
const jokes = [
    'This statement', 'Eight bytes walk into a bar. The bartender asks, "Can I get you anything?" "Yeah," reply the bytes. "Make us a double."',
    "There are only 10 kinds of people in this world: those who know binary and those who don't.",
    'All programmers are playwriters, and all computers are lousy actors.',
    'Police arrested two kids yesterday, one was drinking battery acid, the other was eating fireworks. They charged one - and let the other one off',
    'I just saw my life flash before my eyes and all I could see was a close tag…'

];

// Sourced from the tutor and myself for now
const quotes = [
    { quote: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson'},
    { quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far the universe is winning.', author: 'Rick Cook'},
    { quote: 'We are all villains in another man\'s story.', author: 'Segun Okedele'},
    { quote: 'Whatever we are made of we need to discover it ourselves, before people discover it for us in a way we don\'t want.', author: 'Segun Okedele'},
    { quote: 'Two things I can never give you advice on; 1: Your money, 2: Your relationship.', author: 'A Z'}
];

// Sourced from the tutor and myself for now
const riddles = [
    { question: 'What touches the sky and also touches the earth', answer: 'Rain'},
    { question: 'James father has 3 children; John, Paul and who?', answer: 'James'},
    { question: 'I\'m a name, if you spell me correctly or backwards, I\'d still be the same.', answer: 'Hannah'}
] 

// Helper function from the tutor
function rn(len) {
    return Math.floor(Math.random() * len);
}

const data = {
    memes,
    jokes,
    quotes,
    riddles
}; 
