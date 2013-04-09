$(window).load(function() {
  var guy = $('#guy');
  function queue(image, delay) {
    guy.queue(function() {
      $(this).attr('src', image);
      $(this).dequeue();
    }).delay(delay);
  }
  function egg() {
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
  egg();
  queueIdle();
  $('#nemesis').mouseover(function() { $('#tip').stop().text('Mention Nemesis'); });
  $('#sidekick').mouseover(function() { $('#tip').stop().text('Kidnap Sidekick'); });
  $('#kryptonite').mouseover(function() { $('#tip').stop().text('Kryptonite Beam'); });
  $('#mask').mouseover(function() { $('#tip').stop().text('Secret Identity'); });
  $('#bat').mouseover(function() { $('#tip').stop().text('Put In Bat Cave'); });
  $('.button').mouseout(function() { $('#tip').delay(100).queue(function() { $(this).text('').dequeue(); }); });
  $('#nemesis').click(function() {
    $('.button').mouseout().hide();
    queue('Fight1.png', 1000);
    queue('Fight2.png', 1000);
    queue('Fight1.png', 1000);
    queue('Fight2.png', 2000);
    queue('Idle1.png', 1000);
    queue('Fight2.png', 2000);
    queueIdle();
  });
  var masks = ['Civilian.png', 'Hulk.png', 'Batman.png'];
  var mask = 0;
  $('#mask').click(function() {
    $('.button').mouseout().hide();
    queue('Happy1.png', 500);
    queue('Happy2.png', 500);
    queue('Change.png', 500);
    queue(masks[mask], 2000);
    mask = (mask + 1) % masks.length;
    queue('Change.png', 500);
    queue('Happy2.png', 500);
    queueIdle();
  });
  $('#sidekick').click(function() {
    $('.button').mouseout().hide();
    queue('Sad.png', 3000);
    queueIdle();
  });
  $('#kryptonite').click(function() {
    $('.button').mouseout().hide();
    queue('Change.png', 500);
    queue('Dizzy.png', 3000);
    queue('Change.png', 500);
    queueIdle();
  });
  $('#bat').click(function() {
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
    queueIdle();
  });
});
