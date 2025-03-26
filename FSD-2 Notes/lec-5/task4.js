// print the platform version to the file 
var os = require('os')
var fs = require('fs')
fs.writeFileSync("fsd/temp.txt",os.platform() == 'win32'? "Win32":"not win 32")

