function generate() {
  var Wright = {
    name: "Phoenix Wright",
    picture: "img/Phoenix_Wright_Portrait.png",
    quotes: ["When something smells, it's usually the Butz.", "It's only natural for living creatures to fight to protect their own lives. But what makes us human is that we fight for others.", "No one can change the past. The only thing we can do is strive to make up for our mistakes.", "My past is like my logic, straight and true. Nothing’s changed. All I did was point the finger of justice in the proper direction.", "I believe that hope and friendship can lift us all up towards a brighter tomorrow."]
  };
  var Godot = {
    name: "Godot",
    picture: "img/Godot_Portrait.png",
    quotes: ["Blacker than a moonless night, more bitter than hell itself. That is coffee.", "To err is human, to forgive, divine. Humans aren't machines... they have souls, feelings. They live, they die, they love, they hate... And yes, they even make mistakes.", "Men are like colonies of bacteria. The more heat you apply, the faster they grow.", "We can't see the demons that lurk in the night. That's why humans are weak.", "A lawyer is someone who smiles no matter how bad it gets.", "The only time a lawyer can cry is when it's all over."]
  };
  var Edgeworth = {
    name: "Miles Edgworth",
    picture: "img/Miles_Edgeworth_Portrait.png",
    quotes: ["Our job is to find truth, no matter how painful it may be.", "Even the darkest night turns to dawn eventually… our sun will rise again."]
  };

  var authors = [Wright, Godot, Edgeworth];
  randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  document.getElementById("picture").setAttribute("src", randomAuthor.picture);
  document.getElementById("saying").textContent = randomAuthor.quotes[Math.floor(Math.random() * randomAuthor.quotes.length)];
  document.getElementById("author").textContent = randomAuthor.name;
  var picture =
  document.getElementById("picture").style.visibility = "visible";
}
