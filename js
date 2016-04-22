var x = new Firebase("https://talkey.firebaseio.com/chats/");
$(document).ready(function(){
  $("input").keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
          x.push({name:$("#name").val(),text:$("#text").val()});
          console.log("done");
        }
  });
  x.on('child_added', function(snapshot){
    var message = snapshot.val();
    $(".message").after("<strong><div class='textbox'><p>"+message.name+"</strong>"+
": "+message.text+"<br>"+"</p> </div>");
    console.log("hi");
    $('#name').val('');
    $('#text').val('');
  });
});
