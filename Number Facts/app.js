let fav = 641;
let baseURL = "http://numbersapi.com";

async function part1() {
    let data = await $.getJSON(`${baseURL}/${fav}?json`);
    console.log(data);
  }
part1();

const favs = [231, 4, 69];
async function part2() {
  let data = await $.getJSON(`${baseURL}/${favs}?json`);
  console.log(data);
}
part2();

async function part3() {
    let facts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${fav}?json`))
    );
    facts.forEach(data => {
      $('body').append(`<p>${data.text}</p>`);
    });
  }
  part3();