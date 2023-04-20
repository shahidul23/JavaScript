var latter = prompt("Enter a letter");

latter = latter.toLowerCase();

switch (latter) {
    case "a":    
    case "e":   
    case "i":    
    case "o":
    case "u":
        document.write("Vowel")
        break;
    default:
        document.write("Consonent")
}