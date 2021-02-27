#!/usr/bin/env node

// do this => /** chmod +x mycli.js */ => in cmd
// this give vs code permission to run file from cmd

console.log('hello world')
const args = process.argv.slice(2)
const dir = args[0]
const pokemon = args[1].split('--name=')[1]
console.log({dir, pokemon})