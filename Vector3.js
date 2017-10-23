/* Classe de Vetor tridimensional para a cadeira de
Matematica e Fisica para jogos - 2017.2
Aluno: Paulo Jose
Curso: Sistemas e Midias Digitais */

class Vector3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.mag = Math.sqrt(x * x + y * y + z * z).toFixed(2);
  }

  soma(vec) {
    return new Vector3(this.x + vec.x, this.y + vec.y, this.z + vec.z);
  }

  subtr(vec) {
    return new Vector3(this.x - vec.x, this.y - vec.y, this.z - vec.z);
  }

  mult(vec) {
    return new Vector3(this.x * vec.x, this.y * vec.y, this.z * vec.z);
  }

  div(vec) {
    return new Vector3(this.x / vec.x, this.y / vec.y, this.z / vec.z);
  }

  multEscalar(escalar) {
    return new Vector3(this.x * escalar, this.y * escalar, this.z * escalar);
  }

  divEscalar(escalar) {
    return ((escalar == 0) ? new Vector3("", "", "Impossivel divisao por 0")
                           : new Vector3(this.x / escalar, this.y / escalar, this.z / escalar));
  }

  prodEscalar(vec) {
    return (this.x * vec.x) + (this.y * vec.y);
  }

  prodVetorial(vec) {
    let x = this.y * vec.z - this.z * vec.y;
    let y = this.z * vec.x - this.x * vec.z;
    let z = this.x * vec.y - this.y * vec.x;

    return (new Vector3(x, y, z));
  }

  norma(){
    return (this.mag == 0 ? new Vector3(0, 0, 0) : this.divEscalar(this.mag));
  }

  proj(vec) {
    let prod1 = this.prodEscalar(vec);
    let prod2 = this.prodEscalar(this);
    let div = prod1/prod2;
    return vec.multEscalar(div);
  }

  ang(vec){
    let radians = Math.acos((this.prodEscalar(vec))/(this.mag * vec.mag));
    let degrees = radians * 180 / 3.14;
    return (isNaN(degrees) ? 0 : degrees.toFixed(2));
  }

}
