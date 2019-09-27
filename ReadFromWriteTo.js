var fs = require("fs");
function getFileContent(srcPath, callback) { 
    fs.readFile(srcPath, 'utf8', function (err, data) {
        if (err) throw err;
			callback(data);
        }
    );
}

function copyFileContent(srcPath, savPath) { 
    getFileContent(srcPath, function(data) {
        fs.writeFile (savPath, data, function(err) {
            if (err) throw err;
            console.log('Done');
        });
    });
}
copyFileContent("SourceNotes.txt", "DestNotes.txt");