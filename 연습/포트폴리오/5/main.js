function extend(source, target) {
  if (typeof source == 'object') {
    for (var property in source) {
      if (!target[property]) {
        target[property] = source[property];
      }
    }
  }
  return target;
}

function SVGLoader(el, options) {

  var path,
    initialPath,
    openingSteps,
    openingStepsTotal,
    closingSteps,
    closingStepsTotal,
    isAnimating;

  var defaults = {
    speedIn: 500,
    speedOut: 500,
    easingIn: mina.linear,
    easingOut: mina.linear
  };

  function init() {

    if (!el) throw new Error('El cannot be null');

    extend(defaults, options);

    var snap = Snap(el.querySelector('svg'));
    path = snap.select('path');
    initialPath = path.attr('d');

    var dataOpening = el.getAttribute('data-opening');
    openingSteps = dataOpening ? dataOpening.split(';') : '';
    openingStepsTotal = dataOpening ? openingSteps.length : 0;

    // animation "closing" ou "initiale" si pas définie
    var dataClosing = el.getAttribute('data-closing') ? el.getAttribute('data-closing') : initialPath;
    closingSteps = dataClosing ? dataClosing.split(';') : '';
    closingStepsTotal = dataClosing ? closingSteps.length : 0;

    isAnimating = false;
  }

  function show() {

    if (isAnimating) return false;
    isAnimating = true;

    animate('in', function() {
      el.classList.add('pageload-loading');
    });
    el.classList.add('show');
  }

  function hide() {
    el.classList.remove('pageload-loading');
    animate('out', function() {
      path.attr('d', initialPath);
      el.classList.remove('show');
      isAnimating = false;
    });
  }

  function animate(direction, callback) {
    var pos = 0,
      steps = direction === 'out' ? closingSteps : openingSteps,
      stepsTotal = direction === 'out' ? closingStepsTotal : openingStepsTotal,
      speed = direction === 'out' ? options.speedOut : options.speedIn,
      easing = direction === 'out' ? options.easingOut : options.easingIn,
      nextStep = function(pos) {
        if (pos > stepsTotal - 1) {
          if (callback && typeof callback == 'function') {
            callback();
          }
          return;
        }
        path.animate({
          'path': steps[pos]
        }, speed, easing, function() {
          nextStep(pos);
        });
        pos++;
      };

    nextStep(pos);
  }

  init();

  return {
    hide: hide,
    show: show
  }
}

/*            
   PAGE X --> animation svg --> PAGE Y
*/
var home = '<div class="page1"><div class="nav"><a href="#" class="link link1">Page2</a><a href="#" class="link link2">Page3</a><a href="#" class="link link3">Page4</a><a href="#" class="link link4">Page5</a></div></div>',
  page2 = '<div class="page2"><div class="nav"><a href="#" class="link">Back</a></div></div>',
  page3 = '<div class="page3"><div class="nav"><a href="#" class="link">Back</a></div></div>',
  page4 = '<div class="page4"><div class="nav"><a href="#" class="link">Back</a></div></div>',
  page5 = '<div class="page5"><div class="nav"><a href="#" class="link">Back</a></div></div>',
  viewContainer,
  link,
  loader;

function navigate(from, to) {
  loader.show(); // animation in

  setTimeout(function() {
    viewContainer.innerHTML = to;
    loader.hide(); // animation out
    
    // 이동 후 다시 이벤트 리스너를 할당해야 합니다.
    if (to === page2) {
      link = viewContainer.querySelector('.page2 .nav a');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navigate(page2, from);
      });
    } else if (to === page3) {
      link = viewContainer.querySelector('.page3 .nav a');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navigate(page3, from);
      });
    } else if (to === page4) {
      link = viewContainer.querySelector('.page4 .nav a');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navigate(page4, from);
      });
    } else if (to === page5) {
      link = viewContainer.querySelector('.page5 .nav a');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navigate(page5, from);
      });
    } else {
      link = viewContainer.querySelector('.page1 .nav .link1');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navigate(home, page2);
      });

      link = viewContainer.querySelector('.page1 .nav .link2');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navigate(home, page3);
      });

      link = viewContainer.querySelector('.page1 .nav .link3');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navigate(home, page4);
      });

      link = viewContainer.querySelector('.page1 .nav .link4');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navigate(home, page5);
      });
    }
  }, 1000);
}

function main() {
  loader = new SVGLoader(document.getElementById('loader'), {
    easingIn: mina.easeinout
  });

  viewContainer = document.querySelector('.view-container');
  viewContainer.innerHTML = home;

  // 페이지 1에서 페이지 2로 이동
  link = viewContainer.querySelector('.page1 .nav .link1');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    navigate(home, page2);
  });

  // 페이지 1에서 페이지 3로 이동
  link = viewContainer.querySelector('.page1 .nav .link2');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    navigate(home, page3);
  });

  // 페이지 1에서 페이지 4로 이동
  link = viewContainer.querySelector('.page1 .nav .link3');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    navigate(home, page4);
  });

  // 페이지 1에서 페이지 5로 이동
  link = viewContainer.querySelector('.page1 .nav .link4');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    navigate(home, page5);
  });
}

document.addEventListener('DOMContentLoaded', main);
