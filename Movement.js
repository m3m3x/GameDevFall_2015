#pragma strict

var animator : Animator;
var anim_toggle : float;
var moveSpeed : float;
var jump : int;
var moving : boolean;
var check_pos : float;
var inJump : boolean;

moveSpeed = 2.0;
jump = 6;
moving = false;

function Start(){
		check_pos = transform.position.x;
}

function Update(){

	//Moves character based upon the Horizontal Axis

	var move = Vector2(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"));
	transform.position += move * moveSpeed * Time.deltaTime;
	
	if(Input.GetKeyDown("d")){
		if(transform.rotation != Quaternion.Euler(0,180,0)){
			transform.rotation = Quaternion.Euler(0,180,0);
		}
	}
	
	if(Input.GetKeyDown("a")){
		if(transform.rotation != Quaternion.Euler(0,0,0)){
			transform.rotation = Quaternion.Euler(0,0,0);
		}
	}
	
	//Jump execution
	
	if(GetComponent.<Rigidbody2D>().velocity.y == 0){
		inJump = true;
	}
	
	if(Input.GetKeyDown(KeyCode.Space) && inJump){
		GetComponent.<Rigidbody2D>().velocity.y = jump;
		inJump = false;
	}

	//Toggle moving bool to change WalkGo parameter in Animator
	//Checks position at start and after functions have executed
	//Tests that position against the current position
	//If old position and current position are not the same, the transition is executed
	
	if(check_pos != transform.position.x){
		moving = true;
	}
	
	else{
		moving = false;
	}
	check_pos = transform.position.x;

	animator.SetBool("WalkGo",moving);

	
}

