#pragma strict

/* Set BigCollide in Unity to whatever game object you want to act as the 'embiggen' (i.e. a mushroom) 
and set Sprite Change to the sprite/character you want it to affect*/
var BigCollide : GameObject;
var SpriteChange : GameObject;
var StartSize : Vector3;
/* You can set the Grow Size to whatever you want in Unity! Boo ya! */
var growSize : float;
 
StartSize = SpriteChange.transform.localScale;

/* So, when your character collides with the embiggening object, 
The object disappears, your character grows, your character stays that size for five seconds
your character goes back to its start size, and the gameobject destroys itself so you can't re-use it and your character doesn't grow any more */

function OnTriggerEnter2D (SpriteChange: Collider2D) {
	if (SpriteChange.gameObject.tag =="Player") {
		
		BigCollide.GetComponent.<Collider2D>().enabled = false;
		SpriteChange.transform.localScale *= growSize;
		BigCollide.GetComponent.<Renderer>().enabled = false;
		yield WaitForSeconds(5);
		SpriteChange.transform.localScale = StartSize;
		BigCollide.GetComponent.<Collider2D>().enabled = true;
		Destroy(gameObject);
	}
}

/* Developed by Allison Di Leonardo, Andy Waldron, Danielle McPhatter, and Kevin Alvarez for HAR 260 instructed by Nicholas O'Brien */