import testFileUtils from './utils/fileUtils.test.js'
import programa from '../src/main.js'

function main() {
    console.log('Test Suite')
    console.log()
    testFileUtils.runAll()
    programa.main()
    
}

main()
