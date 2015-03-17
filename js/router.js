app.Router = Backbone.Router.extend({

  routes: {
    ""             : "clear",
    "show/page-1"  : "showPageOne",
    "show/page-2"  : "showPageTwo",
  },

  initialize: function(){

    var elem = React.createElement(app.views.Root, {onShow: this.onShow.bind(this)});

    this.comp = React.render(elem, document.body);
  },

  onShow: function(show){
    if(show === "page_1") {
      this.showPageOne();
      this.navigate("show/page-1");
    }
    else if(show === "page_2") {
      this.showPageTwo();
      this.navigate("show/page-2");
    }
    else{
      this.clear();
      this.navigate("");
    }

  },

  showPageOne: function(){
    this.comp.setProps({show: "page_1"});
  },

  showPageTwo: function(){
    this.comp.setProps({show: "page_2"});
  },

  clear: function(){
    this.comp.setProps({show: null});
  }

});// end app


