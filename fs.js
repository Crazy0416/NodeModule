const fs = require('fs');

console.log("Going to open an existing file");
/* fs.open (path, flags[,mode], callback)
    path: 파일이 있는 경로
    flag: 'r' - 읽기로 열기. 파일이 존재하지 않으면 에러발생.
          'r+' - 읽기/쓰기로 열기. 파일이 존재하지 않으면 에러발생.
          'w' - 쓰기로 열기. 파일이 존재하지 않으면 만들어지고, 파일이 존재하면 지우고 처음부터 씀.
          'w+' - 읽기/쓰기로 열기. 파일이 존재하지 않으면 만들어지고, 파일이 존재하면 처음부터 씀.
          'a' - 추가 쓰기로 열기. 파일이 존재하지 않으면 만들어짐.
          'a+' - 파일을 읽고/추가쓰기모드로 열기. 파일이 존재하지 않으면 만들어짐.
    mode: mode는 file mode를 정함 (permission and sticky bits)
    callback(err, fd) : err는 오류, fd는 파일 디스크럽터
*/
fs.open('test.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    let buf = new Buffer(1024);

    console.log("File opened successfully!");
    console.log("Going to read the file");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }
        console.log(bytes + " bytes read");
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }
    });
});

fs.stat('test.txt', function(error, stats) {
    fs.open('test.txt', "r", function(error, fd) {
        if(error) console.log("error: ", error);
        var buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
            var data = buffer.toString("utf8");
            console.log(data);
        });
    });
});
