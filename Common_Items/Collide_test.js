#pragma strict

var text_obj : GameObject;


text_obj.GetComponent.<SpriteRenderer>().enabled = false;

function OnTriggerEnter2D(other : Collider2D){
	if(other.gameObject.tag == "Player"){
		text_obj.GetComponent.<SpriteRenderer>().enabled = true;
	}
}

function OnTriggerExit2D(other : Collider2D){
	if(other.gameObject.tag == "Player"){
		text_obj.GetComponent.<SpriteRenderer>().enabled = false;
	}
}