

var loggedIn = false; 

while (!loggedIn) { 
    let username = prompt('Username:'); 
    let password = prompt('Password:');


    if (username == 'kendall0404' && password == '040404'){ 
        alert('Welcome back, ' + username); 
        loggedIn = true;
    } else { 
        alert('Incorrect username of password');
    }
    
}