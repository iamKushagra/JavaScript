console.log(process.argv[1]); //argument value/vector (it print array of string).

//you can run it by typing node 9.js hello jio. it will append it in the array of sting

if (process.argv[2] == 'hello')
    console.log('Hello User');
else
if (process.argv[2] == 'hi')
    console.log('Hi user');
else
    console.log('Bye user');
