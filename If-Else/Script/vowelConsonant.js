var letter = prompt("Enter a letter :");

letter = letter.toLowerCase();

if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" ){
    document.write("Vowel");
}else{
    document.write("Consonant");
}