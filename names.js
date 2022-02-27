import { faker } from '@faker-js/faker'
import * as fs from 'fs'

for (let i = 0; i < 1000; i += 1){
  fs.writeFileSync('names.txt', faker.name.findName() + '\n', { flag: 'a+' })
}
