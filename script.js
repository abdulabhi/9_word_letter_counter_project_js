


const textInput = document.getElementById('text_input');
const wordCountDisplay = document.getElementById('word_count');
const letterCountDisplay = document.getElementById('letter-count');
const wordCountBtn = document.getElementById('word_count_btn');
const letterCountBtn = document.getElementById('letter_count_btn');


// function to count words

function countWords()
{
    const text = textInput.value;
    const words = text.split(/\s+/).filter(word => word.length > 0);
    return words.length;
}


//function to count letters

function countLetters()
{
    const text = textInput.value;
    const letters = text.replace(/\s/g, '');
    return letters.length;
}

//add event listerner to buttons

wordCountBtn.addEventListener('click', () => {
    const wordCount = countWords();
    wordCountDisplay.textContent = wordCount;
});

letterCountBtn.addEventListener('click', () => {
    const letterCount = countLetters();
    letterCountDisplay.textContent = letterCount;
});