;(function() {

  // --------- Component Interface Implementation ---------- //
  function DrawToolbar() {
  }


  DrawToolbar.prototype.create = function(data, config) {
    var html = $("#tmpl-" + this.name).render({
      apps : demo.apps
    });
    return $(html);
  }

  // --------- /Component Interface Implementation ---------- //

  // --------- Component Registration --------- //
  brite.registerComponent("DrawToolbar", null, function() {
    return new DrawToolbar();
  });
  // --------- Component Registration --------- //

})();
