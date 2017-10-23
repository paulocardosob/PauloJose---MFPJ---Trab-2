const cal = function(){

  const v1 = getValuesFromDoc('primeiro'); //Obtem valores do primeiro Vetor
  const v2 = getValuesFromDoc('segundo'); //Obtem valores do segundo Vetor

  let escalar = parseInt(document.getElementById('escalar').value);
  isNaN(escalar) ? escalar = 0 : escalar = escalar;

  const results = getResults(v1, v2, escalar);
  displayResults(results);
}

const getValuesFromDoc = function(str) {

  let x = parseInt(document.getElementById(str + 'X').value);
  let y = parseInt(document.getElementById(str + 'Y').value);
  let z = parseInt(document.getElementById(str + 'Z').value);

  isNaN(x) ? x = 0 : x = x;
  isNaN(y) ? y = 0 : y = y;
  isNaN(z) ? z = 0 : z = z;

  return new Vector3(x, y, z);
}

const getResults = function(v1, v2, escalar) {

  const res = {};

  res.soma = v1.soma(v2);
  res.subtr = v1.subtr(v2);
  res.mult = v1.mult(v2);
  res.div = v2.div(v2);
  res.multEscalar = v1.multEscalar(escalar);
  res.divEscalar = v1.divEscalar(escalar);
  res.prodEscalar = v1.prodEscalar(v2);
  res.prodVetorial = v1.prodVetorial(v2);
  res.norma = v1.norma();
  res.mag = v1.mag;
  res.proj = v1.proj(v2);
  res.ang = v1.ang(v2);

  return res;
}

const displayResults = function(res){

  document.getElementById('soma').innerHTML = " X = " + res.soma.x +
                                              " Y = " + res.soma.y +
                                              " Z = " + res.soma.z;

  document.getElementById('subtr').innerHTML = " X = " + res.subtr.x +
                                               " Y = " + res.subtr.y +
                                               " Z = " + res.subtr.z;

  document.getElementById('mult').innerHTML = " X = " + res.mult.x +
                                              " Y = " + res.mult.y +
                                              " Z = " + res.mult.z;

  document.getElementById("div").innerHTML = " X = " + res.div.x +
                                             " Y = " + res.div.y +
                                             " Z = " + res.div.z;
  document.getElementById("norma").innerHTML = " X = " + res.norma.x.toFixed(3) +
                                               " Y = " + res.norma.y.toFixed(3) +
                                               " Z = " + res.norma.z.toFixed(3);



  document.getElementById("prodEscalar").innerHTML = res.prodEscalar;

  document.getElementById("prodVetorial").innerHTML = " X = " + res.prodVetorial.x +
                                                      " Y = " + res.prodVetorial.y +
                                                      " Z = " + res.prodVetorial.z;

  document.getElementById("mag").innerHTML = res.mag;

  document.getElementById("proj").innerHTML = " X = " + res.proj.x +
                                              " Y = " + res.proj.y +
                                              " Z = " + res.proj.z;

  document.getElementById("angulo").innerHTML = " " + res.ang;

  document.getElementById("multEscalar").innerHTML = " X = " + res.multEscalar.x +
                                                     " Y = " + res.multEscalar.y +
                                                     " Z = " + res.multEscalar.z;
  document.getElementById("divEscalar").innerHTML = " X = " + res.divEscalar.x +
                                                    " Y = " + res.divEscalar.y +
                                                    " Z = " + res.divEscalar.z;
}
