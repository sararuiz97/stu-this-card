# stu-this-card

A web aplications to create study cards. Create them, read them only, create interactive quizzes and see some 3D graphics made using WebGL.

##  Project Objectives 
Our objective is to provide a tool for all students looking for a simple and effective way to study. With the help of interactive study cards, everyone could be able to learn without much effort. 

## Project Scope
Students will be able to create study cards and group them. The app will be able to create a quiz based on a group of cards, students will be able to upload images to their cards, the app will have a 3D graphics section so students can quiz themselves using 3D graphics. 

## DB schema
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

## Created by:
* Eduardo Merino
* Sara Ruiz
* Dom Marquez
* Itzel Cordero &
* David Cabello
