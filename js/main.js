$(function() {
  var mobile = false;
  if ((/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) || (typeof window.orientation !== 'undefined'))
    mobile = true;

  var scrolled = false,
    menubarHeight = 80,
    navHeight = 0;

  // open and close nav menu
  $('#close_container').click(function() {
    if (!$('nav').is(":visible")) {
      $('nav').fadeIn(500);
      navHeight = $('nav').height();
    } else {
      $('nav').fadeOut(500);
      navHeight = 0;
    }
    $('#close').toggleClass('open');
  });

  // handle scrolling to elements
  $("#pages li, .in-page-link").click(function(e) {
    e.preventDefault();

    var target = '#' + $(this).attr('data-target'),
      $target = $(target),
      loc = $(target).offset().top - menubarHeight - navHeight;
    $('html,body').stop().animate({
      scrollTop: loc
    }, 1200, 'easeInOutQuart', function() {
      window.location.hash = target;
    });
  });

  // add people photos
  var year = '21-22/';

  for (var i = 0; i < execs.length; ++i) {
    $('#execs > div').append(createProfile(execs[i], 'exec', true));
  }
  residents = shuffle(residents);
  for (var i = 0; i < residents.length; ++i) {
    $('#residents > div').append(createProfile(residents[i], 'res'));
  }

  function createProfile(person, cat, hasGif) {
    var profile = '<img class="person-profile" src="./img/people/' + year + person.picture + '.jpg">',
      gif = '<img class="person-gif" src="./img/people/' + year + person.picture + '.gif">',
      image_html = hasGif
        ? '<div class="person-img">' + profile + '</div>'
        : '<div class="person-img">' + profile + '</div>',
      person_data = '',
      person_info = '<div class="person_info">';

    if (cat == 'exec') {
      person_info += person.name + '<div class="exec_title">' + person.title + '</div></div>';
    } else if (cat == 'res') {
      person_info += person.name + '</div>';
    } else if (cat == 'prj') {
      person_info += person.name + '</div>';
    }

    return '<div class="profile" ' + person_data + '>' + image_html + person_info + '</div>';
  }

  // add project tiles
  for (var i = 0; i < projects.length; ++i) {
    $('#projects_holder').append(createProjectTile(projects[i]));
  }

  function createProjectTile(project) {

    var image_html = '<img class="prj-img" src="./img/projects/' + project.picture + '">',
      short_info = '<div class="prj-info">',
      long_info = '<div class="prj-full">';

    short_info += project.name + '</div>';
    var s = '', //for plural leads
      leads = project.lead[0];
    if (project.lead.length > 1) {
      s = 's';
      for (var i = 1; i < project.lead.length; ++i)
        leads += ' & ' + project.lead[i];
      }
    long_info += '<div class="prj-leads">Team Lead' + s + ': <span>' + leads + '</span></div>';

    if (project.summary != '')
      short_info += '<div class="prj-short-description">' + project.summary + '</div>';
    if (project.description != '')
      long_info += '<div class="prj-long-description">' + project.description + '</div>';

    return '<div class="prj-tile">' + image_html + '<div class="mask">' + short_info + '<div class="prj-more">' + long_info + '</div></div></div>';
  }

  // handle clicking on project tiles
  $('.prj-tile').on('click', function(e) {
    $(this).toggleClass('opened-tile');
    //$(this).siblings('.prj-tile').removeClass('opened-tile'); // needs better implementation
  });

  // fisher-yates shuffle
  // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // handle clicking on apply
  $('#apply').on('click', function(e) {
    window.location.href = "./apply";
  });

  // add project tiles
  for (var i = 0; i < tours.length; ++i) {
    $('#tour-dates').append('<div>' + tours[i] + '</div>');
  }
});
