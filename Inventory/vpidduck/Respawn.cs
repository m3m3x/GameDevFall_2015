using UnityEngine;
using System.Collections;

public class Respawn : MonoBehaviour {

public

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (transform.position.y <= -10) {
			Application.LoadLevel(0);
		}
	}
}
