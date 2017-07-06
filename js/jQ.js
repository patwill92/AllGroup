$("#design-image").append("<div>hello world</div>");
$("<span class='icon is-large'><i class='fa fa-home'></i></span>").appendTo("#design-thumbnail")
.draggable( {
          containment: '#design-thumbnail',
          cursor: 'move',
          revert: false
        } 
      );