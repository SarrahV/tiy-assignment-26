app.views = {};

(function(views){

  var PageOne = React.createClass({
    render: function() {
      return <div>PageOne</div>
    }
  });

  var PageTwo = React.createClass({
    render: function() {
      return <div>PageTwo</div>
    }
  });

  var Root = React.createClass({

    getView: function(show){
      if(show === "page_1") {
        return <PageOne/>
      }
      else if(show === "page_2"){
        return <PageTwo/>
      }
    },
    onNav: function(show){
      this.props.onShow(show);
    },

    render: function() {
      var showing = this.getView(this.props.show);
      return(
        <div>
           <header>
            <nav>
              <button onClick={this.onNav.bind(this, "page_1")}>PageOne</button>
              <button onClick={this.onNav.bind(this, "page_2")}>PageTwo</button>
            </nav>
           </header>
           <div>{showing}</div>
         </div>
      );
    }

  });//end of root

  views.Root = Root;

})(app.views);//end of main function