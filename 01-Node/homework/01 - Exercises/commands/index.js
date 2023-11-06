const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print, args) {
    print(process.cwd)
}

function date(print, args) {
    print(Date())
}

function echo(print, args) {
    print(args.join(' '))
}

function ls(print, args) {
    fs.readdir('.', 'utf-8', (err, files)=>{
        if(err) throw Error(err)
        print(files.join('\n'))
    })
}

function cat(print, args) {
    fs.readFile(args.join(''), 'utf-8', (err, files)=>{
        if(err) throw Error(err)
        print(data)
    })
}

function head(print, args) {
    fs.readFile(args.join(''), 'utf-8', (err, files)=>{
        if(err) throw Error(err)
        print(data.split('\n').at(0))
    })
}

function tail(print, args) {
    fs.readFile(args.join(''), 'utf-8', (err, files)=>{
        if(err) throw Error(err)
        print(data.split('/n').at(-1))
    })
}

function curl(print, args) {
    utils.request(args.join(''), (err, response)=>{
        if(err) throw Error(err)
        print(response.data)
    })
}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};
