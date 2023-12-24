// class Shape {
//     // Lớp cơ bản Shape
//     constructor() {

// //Để kiểm tra hàm khởi tạo có được gọi với new trong JavaScript hay không sử dụng new.target
// //Nếu hàm được gọi theo cách thông thường thì new.target sẽ bằng undefined, ngược lại new.target bằng chính function
//         if (new.target === Shape) {
//             throw new Error("Cannot instantiate abstract class");
//         }
//     }

//     // Phương thức tính diện tích (phải được ghi đè trong các lớp con)
//     calculateArea() {
//         throw new Error("Method 'calculateArea' must be implemented in derived classes");
//     }

//     // Phương thức tính chu vi (phải được ghi đè trong các lớp con)
//     calculatePerimeter() {
//         throw new Error("Method 'calculatePerimeter' must be implemented in derived classes");
//     }
// }

class Circle{
    // Lớp Circle kế thừa từ lớp Shape
    constructor(radius) {
        this.radius = radius;
    }

    // Ghi đè phương thức tính diện tích của hình tròn
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    // Ghi đè phương thức tính chu vi của hình tròn
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

const hinhtron = new Circle(2)
console.log("Diện tích hình tròn: "+ hinhtron.calculateArea());
console.log("Chu vi hình tròn: "+ hinhtron.calculatePerimeter());

class Rectangle {
    // Lớp Rectangle kế thừa từ lớp Shape
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Ghi đè phương thức tính diện tích của hình chữ nhật
    calculateArea() {
        return this.width * this.height;
    }

    // Ghi đè phương thức tính chu vi của hình chữ nhật
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const chunhat = new Rectangle(4,2)
console.log("Diện tích hình chữ nhật là: " + chunhat.calculateArea());
console.log("Chu vi hình chữ nhật là: " + chunhat.calculatePerimeter());

class Triangle {
    // Lớp Triangle kế thừa từ lớp Shape
    constructor(base, height, side1, side2, side3) {
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    // Ghi đè phương thức tính diện tích của hình tam giác
    calculateArea() {
        return 0.5 * this.base * this.height;
    }

    // Ghi đè phương thức tính chu vi của hình tam giác
    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}
const tamgiac = new Triangle(8,4, 5, 6, 7)
console.log("Diện tích hình tam giác: "+tamgiac.calculateArea());
console.log("Chu vi hình tam giác: "+tamgiac.calculatePerimeter());