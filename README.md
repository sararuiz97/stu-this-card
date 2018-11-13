# stu-this-card

A web aplications to create study cards. Create them, read them only, create interactive quizzes and see some 3D graphics made using WebGL.

##  Project Objectives 
Our objective is to provide a tool for all students looking for a simple and effective way to study. With the help of interactive study cards, everyone could be able to learn without much effort. 

## Project Scope
Students will be able to create study cards and group them. The app will be able to create a quiz based on a group of cards, students will be able to upload images to their cards, the app will have a 3D graphics section so students can quiz themselves using 3D graphics. 

## Project Scope
Dependencies:
* Node v8.12.0 or greater
* Angular v6.1.7
* Angular CLI: v6.2.1 or greater
* MongoDB

## How To Run:
1. Download this repo.
2. In a terminal start the Mongo service
3. In a terminal got to the server folder at: `stu-this-card/stu-this-card-app/server`
4. Run `npm i`
6. Run the server with `npm run dev`
7. In a terminal go to the client foder at: `stu-this-card/stu-this-card-app/client`
8. Run `npm i`
9. Run the client service with `ng serve -o`
10. A browser window will open with the app Running.
<br>
(You can only create Collections with no 3D graphics or Collections with 3D shapes, If you want to create collections with the DNA model or Atom model you will need aditional steps).



## DB Schema
````
[
	{
		"collection": {
			"name": "Colección",
			"creator": U1
			"id": "Col1",
			"cards": [
		 		{
				"id": "C5",
				"term": "History",
				"definition": "Card",
				"front": { "text": <<text>>, "media": <<FILE>> },
				"back": { "text": <<text>>, "media": <<FILE>> }
				}
			],
			"shared": [
				{ "id": "U2" },
				{ "id": "U3" }
			],
		}
	}
]
````

## Created by:
* Eduardo Merino
* Sara Ruiz
* Dom Marquez
* Itzel Cordero &
* David Cabello
