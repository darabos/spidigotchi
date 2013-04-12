$(function() {
  var guy = $('#guy');
  var ctx = guy[0].getContext('2d');
  var images = ['Batman.png', 'Change.png', 'Civilian.png', 'Dizzy.png', 'Egg1.png', 'Egg2.png', 'Egg3.png', 'Fight1.png', 'Fight2.png', 'Happy1.png', 'Happy2.png', 'Hulk.png', 'Idle1.png', 'Idle2.png', 'Idle3.png', 'Sad.png'];
  var image_count = images.length;
  var loaded_count = 0;
  for (var i = 0; i < image_count; ++i) {
    var image = new Image();
    image.onload = function() {
      ++loaded_count;
      if (loaded_count == image_count) {
        egg();
        queueIdle();
      }
    }
    image.src = images[i];
    images[images[i]] = image;
  }
  function queue(image, delay) {
    guy.queue(function() {
      ctx.clearRect(0, 0, 100, 100);
      ctx.drawImage(images[image], 0, 0);
      $(this).dequeue();
    }).delay(delay);
  }
  function egg() {
    queue('Egg1.png', 2000);
    queue('Egg2.png', 600);
    queue('Egg1.png', 600);
    queue('Egg2.png', 600);
    queue('Egg1.png', 600);
    queue('Egg2.png', 600);
    queue('Egg1.png', 600);
    queue('Egg3.png', 600);
    queue('Egg1.png', 600);
    queue('Egg2.png', 600);
    queue('Egg1.png', 600);
    queue('Egg3.png', 600);
    queue('Change.png', 600);
    queue('Happy1.png', 600);
    queue('Happy2.png', 1200);
  }
  function queueIdle() {
    guy.queue(function() {
      $('.button').show();
      queueIdle1();
      $(this).dequeue();
    });
  }
  function queueIdle1() {
    queue('Idle1.png', 1200);
    guy.queue(function() {
      if (guy.queue().length == 1) { queueIdle2(); }
      $(this).dequeue();
    });
  }
  function queueIdle2() {
    queue('Idle2.png', 1200);
    guy.queue(function() {
      if (guy.queue().length == 1) { queueIdle3(); }
      $(this).dequeue();
    });
  }
  function queueIdle3() {
    queue('Idle1.png', 1200);
    guy.queue(function() {
      if (guy.queue().length == 1) { queueIdle4(); }
      $(this).dequeue();
    });
  }
  function queueIdle4() {
    queue('Idle3.png', 1200);
    guy.queue(function() {
      if (guy.queue().length == 1) { queueIdle1(); }
      $(this).dequeue();
    });
  }
  function onClick(id, callback) {
    $(id).click(function(){
      $('#tip').stop().text('');
      $('.button').mouseout().hide();
      callback();
      queueIdle();
    });
  }
  $('#nemesis').mouseover(function() { $('#tip').stop().text('Mention Nemesis'); });
  $('#sidekick').mouseover(function() { $('#tip').stop().text('Kidnap Sidekick'); });
  $('#kryptonite').mouseover(function() { $('#tip').stop().text('Kryptonite Beam'); });
  $('#mask').mouseover(function() { $('#tip').stop().text('Secret Identity'); });
  $('#bat').mouseover(function() { $('#tip').stop().text('Put In Bat Cave'); });
  $('.button').mouseout(function() { $('#tip').delay(100).queue(function() { $(this).text('').dequeue(); }); });
  onClick('#nemesis', function() {
    queue('Fight1.png', 1000);
    queue('Fight2.png', 1000);
    queue('Fight1.png', 1000);
    queue('Fight2.png', 2000);
    queue('Idle1.png', 1000);
    queue('Fight2.png', 2000);
  });
  var masks = ['Civilian.png', 'Hulk.png', 'Batman.png'];
  var mask = 0;
  onClick('#mask',function() {
    queue('Happy1.png', 500);
    queue('Happy2.png', 500);
    queue('Change.png', 500);
    queue(masks[mask], 2000);
    mask = (mask + 1) % masks.length;
    queue('Change.png', 500);
    queue('Happy2.png', 500);
  });
  onClick('#sidekick', function() {
    queue('Sad.png', 3000);
  });
  onClick('#kryptonite', function() {
    queue('Change.png', 500);
    queue('Dizzy.png', 3000);
    queue('Change.png', 500);
  });
  onClick('#bat', function() {
    $('.button').mouseout().hide();
    queue('Fight1.png', 400);
    queue('Fight2.png', 400);
    queue('Fight1.png', 400);
    queue('Change.png', 400);
    queue('Dizzy.png', 500);
    queue('Change.png', 300);
    queue('Fight1.png', 300);
    queue('Fight2.png', 300);
    queue('Fight1.png', 300);
    queue('Sad.png', 1500);
  });
});
