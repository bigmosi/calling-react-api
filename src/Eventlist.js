import React from "react";
import Eventitem from "./Eventitem";

export default function Eventlist() {
  const events = [
    {
      id: 1,
      artist: "Container Enthusiasm",
      name: "Talk Docker to Me Tour",
      date: new Date("2021-10-01T19:00:00"),
      price: 49.99,
      imgUrl: "logos/Container-Enthusiasm-TalkDocker-To-Me.png"
    },
    {
      id: 2,
      artist: "Digital Cowboys",
      name: "Binary Bovine Tour",
      date: new Date("2021-11-01T19:30:00"),
      price: 59.99,
      imgUrl: "logos/DigitalCowboys_BinaryBovine.png"
    },
    {
      id: 3,
      artist: "Git Outta My Hub",
      name: "Code Empire Tour",
      date: new Date("2021-12-01T20:00:00"),
      price: 39.99,
      imgUrl: "logos/GitOuttaMyHub-CodeEmpire.png"
    },
    {
      id: 4,
      artist: "Network Firewall Squad",
      name: "For Those About to Block Tour",
      date: new Date("2022-03-08T20:45:00"),
      price: 69.99,
      imgUrl: "logos/Network-Firewall-Squad---For-Those-About-to-Block,-We-Salute-You.png"
    }
  ];

  return (
    <div className="container" id="eventtable">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Artist</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              events.map(event => (
                <Eventitem event={event} key={event.id} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}