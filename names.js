import { faker } from '@faker-js/faker'
import * as fs from 'fs'

function thousendNames(){
  try{
    for (let i = 0; i < 1000; i += 1){
      fs.writeFileSync('names.txt', faker.name.findName() + '\n', { flag: 'a+' })
    }
    console.log('File created successfully')
  }catch(err){
    console.log(err)
  }
}

thousendNames()
