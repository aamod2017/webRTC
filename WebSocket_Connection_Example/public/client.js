var connection = new WebSocket('ws://localhost:8080');
connection.onopen = function () { 
   console.log("Connected"); 
};