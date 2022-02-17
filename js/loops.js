const picsumIds = [
  1005,
  1006,
  1011,
  1016,
  1015,
  1018,
  1019,
  1022,
  1035,
  1036,
  1038,
  1043,
];
console.log(picsumIds);
let output = '';


for (let i = 0; i <= picsumIds.length - 1; i++) {
let gallery  = `<img src="https://picsum.photos/id/${picsumIds[i]}/300/300" alt="lorem picsum"></img>`;
  output += `${gallery}`;
 
}

document.querySelector('.gallery').innerHTML = `${output}`;