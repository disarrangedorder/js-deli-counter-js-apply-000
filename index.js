function takeANumber(currentLine, newCustomer){
  currentLine.push(newCustomer)


  return `Welcome ${newCustomer}, You are number ${currentLine.length()} in line.`
}