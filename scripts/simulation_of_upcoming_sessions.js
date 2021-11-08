// class Session {
//   constructor(
//     year,
//     month,
//     day,
//     hour,
//     minute,
//     toHour,
//     toMinute,
//     name,
//     teacher,
//     classRoom
//   ) {
//     (this.year = year),
//       (this.month = month),
//       (this.day = day),
//       (this.hour = hour),
//       (this.minute = minute),
//       (this.toHour = toHour),
//       (this.toMinute = toMinute),
//       (this.name = name),
//       (this.teacher = teacher),
//       (this.classRoom = classRoom);
//   }
// }

// const rwdSession = new Session(
//   2021,
//   10,
//   5,
//   7,
//   30,
//   10,
//   20,
//   "RWD",
//   "Lilka",
//   "C05.16"
// );
// // const sepSession = new Session(39, 10, 5, 12, 50, "SEP", "Mial", "C05.16");

// let sessionDateString = `${rwdSession.day}.${rwdSession.month}.${rwdSession.year}`;

// let date = new Date();
// let todayDateString = date.toLocaleDateString();

// if (sessionDateString === todayDateString) {
// }

// const timeTableCnt = document.querySelector("#time-table");
// const timesCnt = document.querySelectorAll(".time-cnt");
// console.log(timesCnt);

// timesCnt.forEach((timeCnt) => {
//   console.log(timeCnt.dataset);
// });

// function createAndAppendSession(session) {
//   const fromHour = session.hour;
//   const toHour = session.toHour;
//   const fromMinute = session.minute;
//   const toMinute = session.toMinute;
//   console.log(fromHour, toHour);
//   const howManyHours = toHour - fromHour;
//   const howManyMinutes = toMinute - fromMinute;
//   if(howManyMinutes<0){

//   }

//   console.log(howManyHours, howManyMinutes);
//   let sessionCnt = document.createElement("div");
//   sessionCnt.classList.add("session-cnt");
//   sessionCnt.style.position = "absolute";
//   sessionCnt.style.background = "blue";
//   sessionCnt.innerText = "EJIAJWDIWAJ";
//   sessionCnt.style.top = "1.5rem";
//   sessionCnt.style.height = "3rem";
//   sessionCnt.style.left = "6rem";

//   timeTableCnt.appendChild(sessionCnt);
// }

// createAndAppendSession(rwdSession);
// // console.log(todayDate, sessionDateString);

function fetchSessions() {
  return fetch("../simple.xml")
    .then((res) => res.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => data.getElementsByTagName("session"));
}

fetchSessions().then((sessions) => displayUpcomingSessions(sessions));

function displayUpcomingSessions(sessions) {
  const todayDate = new Date();
  const todayString = todayDate.toLocaleDateString();
  const simpl = "10.6.2021";
  const converted = new Date(simpl);
  const sessionsLen = sessions.length;

  for (let i = 0; i < sessionsLen; i++) {
    const smpl = "8:45";
    const sessionDate = new Date(sessions[i].getAttribute("date"));
    const sessionTimeFrom = `${sessions[i].getAttribute("from-hour")}:${sessions[i].getAttribute("from-minute")}`;
    const sessionTimeTo = `${sessions[i].getAttribute("to-hour")}:${sessions[i].getAttribute("to-minute")}`;

    console.log(sessionTimeFrom, sessionTimeTo);

    console.log(todayDate.getHours());
    if (todayDate.getDay === sessionDate.getDay()) {
    }
    const sessionDay = sessionDate.getDay();

    console.log(sessionDate.getDay());
    // if(sessionDate.getDay)
    //   if(today)
  }
}
// displayUpcomingSessions();
