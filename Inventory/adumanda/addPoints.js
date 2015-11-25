//Show and update points using GUI Text
#pragma strict
private var score: int = 0;
var guiScore : GUIText;

function Start () {
	guiScore.text = "Score: 0";
}


function Update () {

}

function OnTriggerEnter2D (other: Collider2D)
{
	if (other.gameObject.tag =="Player")
	{
        Destroy(gameObject);
        score += 10;
        guiScore.text = "Score: " + score;
        print ("Coin Collected!");
        
	}
}
 
