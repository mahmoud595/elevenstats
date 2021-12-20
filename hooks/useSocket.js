import { useEffect, useState } from "react";
import io from "socket.io-client";
// let socket =
// console.log(socket);
//   `${process.env.NEXT_PUBLIC_ROOT_URL}/fixtures/liveDummy`
const socketIo = io.connect(process.env.NEXT_PUBLIC_SOCKET_URL);

export const useSocket = (live, status, eventName, cb) => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    if (live && status !== "FT") {
      setSocket(socketIo);
      // const pass = 'pass';
      socketIo.on(eventName, (data) => cb(data, socketIo));

      function useSocketCleanup() {
        socketIo.disconnect(eventName, cb);
      }

      return useSocketCleanup;
    }
  }, [eventName, live]);

  return socket;
};
