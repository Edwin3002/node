const myUrl = new URL('https://www.ed.tech/portafolio?order=projects&level=1')

console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.host);
console.log(myUrl.searchParams.get('level'));