class Dictionary {
    constructor(){
        this.dictionary = {};
    }

    add(key,value){
        this.dictionary[key] = value;
    }

    get(key){
        return this.dictionary[key]
    }
}

const phoneBook = new Dictionary();

phoneBook.add('Mahi', '01789563214')
phoneBook.add('Sohel', '01789564798')
phoneBook.add('Raju', '01789400014')
phoneBook.add('Mina', '01789545489')
phoneBook.add('Dipto', '01789337840')
phoneBook.add('Samina', '01789563000')

const findNumber = phoneBook.get('Dipto');
console.log(findNumber)



