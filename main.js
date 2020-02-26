window.onload = function () {
  var socket = io.connect("http://24.16.255.56:8888");  // connect to database

  socket.on("load", function (data) {
      console.log(data);
  });

  var text = document.getElementById("text");
  var saveButton = document.getElementById("save");
  var loadButton = document.getElementById("load");

  saveButton.onclick = function () {
    console.log("save");
    text.innerHTML = "Saved."
    // io.sockets[0].emit();  
    socket.emit("save", { studentname: "Chris Marriott", statename: "aState", data: "Goodbye World" }); //save format // blockcast 
  };

  loadButton.onclick = function () {
    console.log("load");
    text.innerHTML = "Loaded."
    socket.emit("load", { studentname: "Chris Marriott", statename: "aState" });
  };

  // // 我加的
  // socket.on("connect", function() {
  //   console.log("Connected");
  // })

  // socket.emit("mesasge",);

};









