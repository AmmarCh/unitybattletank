var lifetime : int = 2;


function Start () {
	print(GetInstanceID());
	Destroy(gameObject, 3);
}


function Update () {

}


function OnCollisionEnter(collision : Collision) {
	var ownerComp : ProjectileOwner = gameObject.GetComponent(ProjectileOwner);
	if(collision.gameObject.tag == "Tank") {
		if(ownerComp && collision.gameObject != ownerComp.owner) { // if we didn't fire the projectile
			Debug.Log(ownerComp.owner);
			Destroy(gameObject);
		}
	} else {
		Destroy(gameObject);
	}
}