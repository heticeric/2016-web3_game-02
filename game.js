var Game = function()
{
  // COMPOSITION
  this.persos = [
    new Gendarme( "gerard" )
    ,new Gendarme( "marianne" )
    ,new Pieton( "gerald" )
    ,new Pieton( "gertrude" )
    ,new Pieton( "bachar" )
    ,new Thief( "nicolas" )
  ]
};

Game.prototype.next = function()
{
  this.persos.forEach
  (
    function( perso )
    {
      console.log(perso.move());// POLYMORPHISME
    }
  )
  // for( var i=0, l=this.persos.length; i<l; i++ )
  // {
  //     console.log(this.persos[ i ].move());
  // }
};

Game.prototype.start = function()
{
  var self = this;
  setInterval
  (
    function()
    {
      // Prochaine étape du jeu
      self.next();
    }, 500
  )
}



var Gendarme = function( nom ){
  Personnage.call( this, nom );// super() // parent
}
var Thief = function( nom ){
  Personnage.call( this, nom );
}
var Pieton = function( nom ){
  Personnage.call( this, nom );
}

var Personnage = function( nom ){
  this.name = nom;
}
Personnage.prototype.move = function()
{
  return this.name +" move";
};

// Héritage de classe
Gendarme.prototype = Object.create( Personnage.prototype );
Thief.prototype = Object.create( Personnage.prototype );
Pieton.prototype = Object.create( Personnage.prototype );


var monjeu = new Game();
monjeu.start();
