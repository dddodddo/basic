var nav = {
  
  init: function(){
    this._bindEvents();
    this._openInitView();
  },
  
  _openInitView: function(){
    //open intial view
    var el = document.querySelector('[data-view-initial]');
    el.classList.add('view--block');
    el.classList.add('view--visible');
  },
  
  _bindEvents: function(){
    var self = this,
        triggers = document.querySelectorAll('[data-to-view]');
    
    //add click event listeners
    //to all view triggers
    [].forEach.call(triggers, function(el){
      el.addEventListener('click', function(){
        var selector = this.getAttribute('data-to-view');
        self._toView(selector);
      }, false);
    });
  },
  
  _toView: function(elSelector){
    var newViewEl = document.querySelector(elSelector),
        currOpenViewEl = document.querySelector('.view--visible'),
        self = this;
    
    //check if new view is the
    //view that is currently open
    if(newViewEl === currOpenViewEl) return;
    
    //close currently open view
    this._closeView(currOpenViewEl, function(done){
      //open new view
      //pass close view done method as callback
      self._openView(newViewEl, done);
    });
  },
  
  _closeView: function(el, callback){
    //move the view to the "up" position
    el.classList.add('view--up');
    el.classList.remove('view--visible');
    
    //trigger the callback x sec into the animation
    setTimeout(function(){
      callback(function(){
        el.classList.remove('view--block');
        el.classList.remove('view--up');
      });
    }, 100);
  },
  
  _openView: function(el, callback){
    //display block the view so its loaded
    //and move the view to the "down" position
    el.classList.add('view--block');
    el.classList.add('view--down');
    
    setTimeout(function(){
      //when the classes are added
      //start the animation by adding the
      //visible class and pulling the view up
      el.classList.add('view--visible');
      
      setTimeout(function(){
        //animation is done
        el.classList.remove('view--down');
        callback();
      }, 600);  
    }, 50);
  }
  
};

nav.init();