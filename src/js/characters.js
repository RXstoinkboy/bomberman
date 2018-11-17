Character.count = 0;

function Character(){
    Character.count++;
    this.id = `char_${Character.count}`; // assinging individual id to each character
}