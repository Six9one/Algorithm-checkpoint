// This function to analyze a sentence
function analyzeSentence(sentence) {
    let length = 0;       // Counter for sentence length
    let wordCount = 0;    // Counter for word count
    let vowelCount = 0;   // Counter for vowel count

    const vowels = "aeiouAEIOU";  // List of vowel characters

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char !== ' ') {
            length++;
        }
        if (char === ' ') {
            wordCount++;
        }
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    // Adding 1 to word count for the last word
    wordCount++;

    return {
        length: length,
        wordCount: wordCount,
        vowelCount: vowelCount
    };
}

// Input sentence
const inputSentence = "GoMyCode Tataouine Hacker Space , Is the best .";

// Call the function to analyze the sentence
const analysisResult = analyzeSentence(inputSentence);

// Output the results
console.log(`Length of the sentence: ${analysisResult.length}`);
console.log(`Number of words: ${analysisResult.wordCount}`);
console.log(`Number of vowels: ${analysisResult.vowelCount}`);
