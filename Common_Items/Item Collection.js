#pragma strict
// Use this for initialization
function Start () {
}

// Update is called once per frame
function Update () {
}



var itemCount : int;
var destroy: GameObject;
var player: GameObject; 
 
function OnTriggerEnter2D(col : Collider2D) {
    if(player.gameObject.tag == "Player") {
      Destroy(destroy);
      itemCount ++;
    }
}

