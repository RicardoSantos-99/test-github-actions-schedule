import fs from 'fs';

const number = Math.random()

fs.writeFileSync(`src/${number}.js`, `export default ${number}`)
