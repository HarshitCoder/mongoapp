const MongoClient= require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

	if(err)
	{
		return console.log("unable to connect");
	}

	console.log("connected");
	var db=client.db('TodoApp');
	db.collection('Users').find({'name':'harshit'}).toArray().then((docs)=>{
		console.log(docs);
	},(error)=>{
		console.log(error);
	})

		
	
}) 


