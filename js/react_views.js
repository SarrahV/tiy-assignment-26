app.views = {};

(function(views){

  var PageOne = React.createClass({displayName: "PageOne",
    render: function() {
      return React.createElement("div", null, "PageOne")
    }
  });

  var PageTwo = React.createClass({displayName: "PageTwo",
    render: function() {
      return React.createElement("div", null, "PageTwo")
    }
  });

  var Root = React.createClass({displayName: "Root",

    getView: function(show){
      if(show === "page_1") {
        return React.createElement(PageOne, null)
      }
      else if(show === "page_2"){
        return React.createElement(PageTwo, null)
      }
    },
    onNav: function(show){
      this.props.onShow(show);
    },

    render: function() {
      var showing = this.getView(this.props.show);
      return(
        React.createElement("div", null, 
           React.createElement("header", null, 
            React.createElement("nav", null, 
              React.createElement("button", {onClick: this.onNav.bind(this, "page_1")}, "PageOne"), 
              React.createElement("button", {onClick: this.onNav.bind(this, "page_2")}, "PageTwo")
            )
           ), 
           React.createElement("div", null, showing)
         )
      );
    }

  });//end of root

  views.Root = Root;

})(app.views);//end of main function