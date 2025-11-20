let iplTeams = [
  {
    team: "CSK",
    fullName: "Chennai Super Kings",
    trophies: 5,
    captain: "MS Dhoni",
      primary: "yellow",
      secondary: "blue"
  },
  {
    team: "MI",
    fullName: "Mumbai Indians",
    trophies: 5,
    captain: "Hardik Pandya",
      primary: "blue",
      secondary: "gold"
  },
  {
    team: "RCB",
    fullName: "Royal Challengers Bengaluru",
    trophies: 0,
    captain: "Faf du Plessis",
    primary: "red",
     secondary: "black"
  },
  {
    team: "KKR",
    fullName: "Kolkata Knight Riders",
    trophies: 3,
    captain: "Shreyas Iyer",
    primary: "purple",
    secondary: "gold"
    
  },
  {
    team: "SRH",
    fullName: "Sunrisers Hyderabad",
    trophies: 1,
    captain: "Pat Cummins",
    primary: "orange",
    secondary: "black"
    
  },
  {
    team: "RR",
    fullName: "Rajasthan Royals",
    trophies: 1,
    captain: "Sanju Samson",
    primary: "pink",
    secondary: "blue"
  },
  {
    team: "DC",
    fullName: "Delhi Capitals",
    trophies: 0,
    captain: "Rishabh Pant",
    primary: "blue",
    secondary: "red"
  }
];



let h2 = document.querySelector("h2");

let btn = document.querySelector("#btn");

let main = document.querySelector("main");


btn.addEventListener("click", function () {
  
    let a = Math.floor(Math.random()*255);
    let b= Math.floor(Math.random()*255);
    let c = Math.floor(Math.random()*255);
    
    main.style.backgroundColor = `rgb(${a},${b},${c})`
    
    let newarr = Math.floor(Math.random()*iplTeams.length)

    // console.log(iplTeams[newarr].team)

    // h2.textContent=iplTeams[newarr].fullName;

   h2.innerHTML = `
  Team: ${iplTeams[newarr].team} <br>
  Full Name: ${iplTeams[newarr].fullName} <br>
  Trophies: ${iplTeams[newarr].trophies} <br>
  Captain: ${iplTeams[newarr].captain} <br>
  Primary Color: ${iplTeams[newarr].primary} <br>
  Secondary Color: ${iplTeams[newarr].secondary}
`;

})

