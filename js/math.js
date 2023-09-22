
class Operation {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  
    addition() {
      return this.a + this.b;
    }
  
    soustraction() {
      return this.a - this.b;
    }
  
    multiplication() {
      return this.a * this.b;
    }
  
    division() {
      if (this.b !== 0) {
        return this.a / this.b;
      } else {
        throw new Error("Division par zéro !");
      }
    }
  }
  
  export default Operation;
  