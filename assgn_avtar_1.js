var staff={
"staff_Krishnaswamy_Subramanium":{
  "track":"Aspiring UX Designer",
  "skill":["Figma","Software dev methodologies","Problem Solving", "Github","User research","Backend"],
  id:"staff_Krishnaswamy_Subramanium"
},
"Larry David":{
  "track":"Fullstack Developer",
  "skill":["Software Development Life Cycle (SDLC)","Software dev methodologies","Git version control", "Github","Programming","Backend"],
  id:"staff_Larry_David"
},
"karry":{
  "track":"Aspiring UX Designer",
  "skill":["Wireframing","Problem Solving","Git version control", "User research","Programming","Backend","Figma"],
  id:"staff_karry"
},
"Jo Dsouza":{
  "track":"Aspiring UX Designer",
  "skill":["Figma","Software dev methodologies","Problem Solving", "Github","Programming","Backend"],
  id:"root_Jo_Dsouza"
},
"Root":{
  "track":"Fullstack Developer",
  "skill":["Software Development Life Cycle (SDLC)","Software dev methodologies","Git version control","Github","Programming","Mobile app development"],
  id:"staff_Root"
}
}
/* arrary of ids*/
var base_ids=[];
for (let x in staff){
    base_ids.push(staff[x].id);
  }
/* search ids to be displayed*/
function search(base_track,staff_skill_array){
  let id_skill=[];
  for (let x in staff){
        if (staff[x].track===base_track){
          let toggle=true;
          for (let k in staff_skill_array){
            if(staff[x].skill.indexOf(staff_skill_array[k])!=-1 && toggle){
              toggle=true;
            }
            else{
              toggle=false;
              break;
            }
          }
          if (toggle){
            id_skill.push(staff[x].id);
          }
    }
  }
  return id_skill;
}

search("Software dev methodologies")

/*hide these ids*/
function hide_ids(){
  for(let x in base_ids){
    document.getElementById(base_ids[x]).style.display = "none";
}
}

/* on these states */

function displayOn(arr){
  hide_ids();
  for(let x in arr){
    console.log(x);
    let ver=(417+371*(Math.floor(x/2))).toString();
    let hor=(150+582*(x%2)).toString();
    console.log(hor+"px",ver+"px");
    console.log(document.getElementById(arr[x]));
    document.getElementById(arr[x]).style.left=hor+"px";
    document.getElementById(arr[x]).style.top=ver+"px";
    document.getElementById(arr[x]).style.display = "block";
  }
}

function apply(){
  /* update the states */
  let states={
      "Fullstack_Developer":{
        "base_state":document.getElementById("radioFullstack").checked,
              "skill":{"Software_development_lifecycle":document.getElementById("checkSoftware_development_lifecycle").checked,
              "Programming":document.getElementById("check_Programming").checked,
              "Mobile_app_development":document.getElementById("check_Mobile_app_development").checked,
              "Github_version_control":document.getElementById("check_Github_version_control").checked,
              "Backend":document.getElementById("check_Backend").checked
            }},
        "UX_Designer":{
          "base_state":document.getElementById("radio_UX_Designer").checked,
                "skill":{"Wireframing":document.getElementById("check_Wireframing").checked,
                "Figma":document.getElementById("check_Figma").checked,
                "User_research":document.getElementById("check_User_research").checked,
                "Problem_Solving":document.getElementById("check_Problem_Solving").checked,
                        }
                  }
  }
    console.log(states.Fullstack_Developer.base_state);

    /* display or not control */
    if (states.Fullstack_Developer.base_state){
      /*display Fullstack developer element*/
          /* base array*/
          var skill_required=[];
          if (states.Fullstack_Developer.skill.Software_development_lifecycle){
                /*search the avaliabilty in the staff*/
                skill_required.push("Software Development Life Cycle (SDLC)");

          }
          if (states.Fullstack_Developer.skill.Programming){
              skill_required.push("Programming");
          }
          if (states.Fullstack_Developer.skill.Mobile_app_development){
              skill_required.push("Mobile app development");
          }
          if (states.Fullstack_Developer.skill.Github_version_control){
              skill_required.push("Git version control");
          }
          if (states.Fullstack_Developer.skill.Backend){
              skill_required.push("Backend");
          }
          /* display these ids*/
          console.log(skill_required);
          var display_these_ids=search("Fullstack Developer",skill_required);
          displayOn(display_these_ids);
    }
    else if (states.UX_Designer.base_state){
      /*display ux designer*/
      /* base array*/
      var skill_required=[];
      if (states.UX_Designer.skill.Wireframing){
            skill_required.push("Wireframing");
      }
      if (states.UX_Designer.skill.Figma){
          skill_required.push("Figma");
      }
      if (states.UX_Designer.skill.User_research){
          skill_required.push("User research");
      }
      if (states.UX_Designer.skill.Problem_Solving){
        skill_required.push("User research");
      }
      /* display these ids*/
      var display_these_ids=search("Aspiring UX Designer",skill_required);
      displayOn(display_these_ids);
    }
    else{
      hide_ids();
    }
    {
/* displaying the vector cross boxex*/
/*
    let div = document.createElement("div");
    div.id="1";
    div.style.position="absolute";
    div.style.left="150px";
    div.style.top="270px";
    div.style.width = "220px";
    div.style.height = "19px";
    div.style.background = "F2EEDA";
    div.style.border.radius= "8px";

    document.getElementById("frame").appendChild(div);
    let crs_img=document.createElement("img");
    crs_img.src="resource/Vector.png";
    crs_img.style.position="absolute";
    crs_img.style.left="256px";
    crs_img.style.top="19px";
    document.getElementById("1").appendChild(crs_img);
  */
      }

}
