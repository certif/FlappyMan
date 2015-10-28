#pragma strict

function OnGUI () { 
GUI.Box (Rect (Screen.width/2 - 100,Screen.height/2 - 100,200,180), "Главное меню"); 
if (GUI.Button (Rect (Screen.width/2 - 90,Screen.height/2 - 80,180,30), "Играть")) { 
         Application.LoadLevel (1); 
         } 
if (GUI.Button (Rect (Screen.width/2 - 90,Screen.height/2 - 40,180,30), "#GameJam10Kyiv")) { 
         }
if (GUI.Button (Rect (Screen.width/2 - 90,Screen.height/2 + 40,180,30), "Выход")) { 
         Application.Quit();
         } 
}

function Start () {
		Application.LoadLevel (0);		
}
function Update () {

}