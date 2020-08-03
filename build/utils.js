const childProcess = require('child_process')

const execCmd = function (cmd, cb) {
    childProcess.exec(cmd, (error, stdout) => {
        if (!error){
            cb(stdout)
        } else {
            console.log('err=', error)
        }
    })
}

module.exports = {
    execCmd
}
