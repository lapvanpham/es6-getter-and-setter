// Xây dựng lớp Person gồm thuộc tính name, constructor. Sử dụng hàm get, set để cài đặt thuộc tính name. Xây dựng phương thức walk để mô tả việc di chuyển của lớp Person.

// Lớp Programmer kế thừa lớp Person, sử dụng hàm get và set để cài đặt ngôn ngữ lập trình của Programmer. Viết thêm phương thức writeCode.

// Khai báo các đối tượng thuộc lớp Programmer và gọi các hàm của lớp Person và Programmer. Quan sát kết quả.

class Person {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

    walk() {
        console.log(this.name + ' is walking');
    }

}


class Programmer extends Person {
    constructor(name, language) {
        super(name);
        this.language = language;
    }

    getLanguage() {
        return this.language;
    }

    setLanguage(language) {
        this.language = language;
    }

    writeCode() {
        console.log(this.name + ' is writing code in ' + this.language);
    }
}

let zelda = new Person();
zelda.setName('Zelda');
console.log(zelda.getName());

let laraTheProgrammer = new Programmer();
laraTheProgrammer.setName('Lara Croft');
console.log(laraTheProgrammer.getName());
laraTheProgrammer.setLanguage('Rust');   
console.log(laraTheProgrammer.getLanguage());
