// net 모듈은 비동기 네트워크 API로 TCP 혹은 IPC 서버를 지원하는 모듈이다.
const net = require('net');

const server = net.createServer((socket) => {   // socket: 접속한 클라이언트
    console.log(socket.address().address, " connected.");

    socket.on('data', (data) => {
        console.log('rcv: ', Buffer(data).toString());
    });

    socket.on('close', (data) => {
        console.log('client disconnected.');
    });

    socket.on('end', (data) => {        // 클라이언트가 fin 패킷을 보냈을 때
        console.log('client FIN packet.');
    });

    socket.on('connection', (socket) => {
        console.log('socket connection');
    });

    socket.write('welcome to server');      // 소켓에게 전송

});

server.listen(5000, () => {
    console.log('listening on 5000...');
});
