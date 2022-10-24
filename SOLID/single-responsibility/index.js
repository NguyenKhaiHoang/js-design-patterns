const fs = require('fs');

class Journal{
	constructor() {
		this.entries = {};
	}
	
	addEntry(text){
		let c = ++Journal.count;
		let entry = `${c}: ${text}`;
		this.entries[c] = entry;
		return c;
	}
	
	removeEntry(index){
		delete this.entries[index];
	}
	
	toString(){
		return Object.values(this.entries).join('\n');
	}
	/** should not use like this
	save(filename){
		fs.writeFileSync(filename, this.toString());
	}
	
	load(filename){
	
	}
	
	loadfromUrl(url){
	
	}
	 */
}

class PersistenceManager {
	preprocess(j){
	
	}
	
	saveToFile(journal, filename){
		try{
			fs.writeFileSync(filename, journal.toString());
		} catch (e) {
			throw e;
		} finally {
			console.log('Done');
		}
	}
}

Journal.count = 0;
let j = new Journal();
j.addEntry('I sleep');
j.addEntry('I wake up');
console.log(j);

let p = new PersistenceManager();
let filename = './loremipsum.txt';
p.saveToFile(j, filename);