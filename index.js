var name = 'Joe'
var height = '74'

if (name === 'Susan'){
  console.log('The name is correct');
}
else{
  console.log('Expected: Susan, Received: '+name);
  console.log('Expected: 70, Received: '+height);
}

// Don't worry about this
module.exports = { name, height
}
