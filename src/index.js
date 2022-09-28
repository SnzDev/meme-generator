import memeMaker from "@erickwendel/meme-maker";


const options = {
  image: "./img/sorry.jpg",
  outfile: './img/spiderman-meme.jpg',
  topText: 'DESCULPA TIO BEN',
  bottomText: 'LIVE-RELOAD NÃO RODOU!',
}

memeMaker(options).then(_ => {
  console.log('Image saved: ' + options.outfile);
}).catch(error => console.log(error));