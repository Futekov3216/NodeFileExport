
var	path = require("path"),
		glob = require("glob"),
		fs = require('fs');
		const put = path.join(__dirname, '../Filesys/meme-pictures/')


 const arr = [],
       data = "data.js";
 glob(put + `**/*.*` , function(err, files) {
  var processed = 0;
	  files.forEach( function(file){
		  var filename =  path.basename(file);
		  const obj = {
			  "id": processed,
			  "name": filename,
			  "alt": filename
		  }
			processed++
			if(obj.name !== data){
			 arr.push(obj)
			}
		  });

			fs.writeFile(put + data, JSON.stringify(arr), function(err) {
				if(err) {
					return console.log(err);
				}
				console.log(arr)
				console.log(processed, "PICS ARE SAVED");
			});
  });


// MNOGO TEJUK SKRIPT
