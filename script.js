document.addEventListener('DOMContentLoaded', function () {
    const array = ["Modern", "Interactive", "Beautiful", "Perfect",];
    let index = 0;

    setInterval(() => {
        let randomtext = document.getElementById("randomtext");
        if (randomtext) {
            randomtext.style.opacity = 0;

            setTimeout(() => {
                randomtext.innerHTML = array[index];
                randomtext.style.opacity = 1;
                index = (index + 1) % array.length;
            }, 500);
        }
    }, 3000);
})

// function find() {
// let username = document.getElementById("username").value;
// let githubuser = fetch(`https://api.github.com/users/${username}`);

let githubuser = fetch(`https://api.github.com/users/akashsaha2001`);

githubuser.then((response) => {
    if (!response.ok) {
        console.log("invalid username");
        document.getElementById("userprofilesectioninvalid").style.display = "block";
        document.getElementById("userprofilesectionvalid").style.display = "none";

    }
    return response.json();
}).then((data) => {
    console.log(data);

    document.getElementById("userprofilesectioninvalid").style.display = "none";
    document.getElementById("userprofilesectionvalid").style.display = "block";



    //profileimage
    document.getElementById("profileimage").src = data.avatar_url;

    //profile Name
    document.getElementById("name").innerHTML = data.name;

    //profile followers
    document.getElementById("followers").innerHTML = " " + data.followers + " ";

    //profile following
    document.getElementById("following").innerHTML = " " + data.following + " ";

    //profile repocount
    document.getElementById("repocount").innerHTML = " " + data.public_repos + " ";

    //profile Bio
    document.getElementById("bio").innerHTML = data.bio;

    //profile location
    if (data.location == null) {
        document.getElementById("location").style.display = "none";
    } else {
        document.getElementById("location").style.display = "block";

        document.getElementById("location").innerHTML = `<i class="fas fa-map-marker-alt"></i>  ` + data.location;

    }

    //profile company
    if (data.company == null) {
        document.getElementById("company").style.display = "none";
    }
    else {
        document.getElementById("company").style.display = "block";

        document.getElementById("company").innerHTML = `<i class="fas fa-building"></i>  ` + data.company;

    }

    //username  theme=light border=true

    document.getElementById("statshtml").innerHTML = `<img class="stats-img" draggable="false" id="stats"
src="https://github-readme-stats.vercel.app/api?username=akashsaha2001&amp;theme=dark&amp;hide_border=false&amp;include_all_commits=false&amp;count_private=false"
alt="">`
    document.getElementById("streakhtml").innerHTML = `<img class="stats-img" draggable="false" id="streak"
src="https://github-readme-streak-stats.herokuapp.com/?user=akashsaha2001&amp;theme=dark&amp;hide_border=false"
alt="">`
    document.getElementById("langshtml").innerHTML = `<img class="stats-img" draggable = "false" id = "langs"
src = "https://github-readme-stats.vercel.app/api/top-langs/?username=akashsaha2001&amp;theme=dark&amp;hide_border=false&amp;include_all_commits=false&amp;count_private=false&amp;layout=compact"
alt = "" >`



    //Tropies

    document.getElementById("githubtropies").innerHTML = `<div class="stats-img">
<img class="m-2 select-none pointer-events-none" draggable="false" id="trophy" style="width: 100%;" src="https://github-profile-trophy.vercel.app/?username=akashsaha2001&amp;theme=radical&amp;no-frame=false&amp;no-bg=true&amp;margin-w=4" alt="">
<b><p class="mt-2" style="color: white; font-size: 15px;"><input type="checkbox" name="" id="checkboxtropies" class="outline-none">Add GitHub Trophies</p></b>
</div>`


//Profile Views
// document.getElementById("githubprofileviews").innerHTML=`<a href="https://visitcount.itsvg.in" class=""><img id="visitors" src="https://visitcount.itsvg.in/api?id=VishwaGauravIn&amp;pretty=true&amp;icon=0&amp;color=0" alt="" class="mb-4"></a>`
}).catch((error) => {
    console.log(error);
})
// }




let githubuserrepo = fetch(`https://api.github.com/users/akashsaha2001/repos`);

githubuserrepo.then((response) => {
    if (!response.ok) {
        console.log("Invalid User");
    }
    return response.json();
}).then((data) => {
    console.log(data);

    let repoContainer = document.getElementById("repo");
    repoContainer.innerHTML = ""; // Clear any existing content

    data.forEach((repo) => {
        let repoElement = document.createElement("div");
        repoElement.classList.add("repo-item");

        repoElement.innerHTML = `
            <a href="${repo.html_url}" class="button">
                <h6>
                    ${repo.name} &nbsp;
                        <i class="fas fa-external-link-square-alt"></i>
                </h6>
            </a>
            `;

        repoContainer.appendChild(repoElement);
    })
}).catch((error) => {
    console.log(error);
})




function setdefault() {
    let about = document.getElementById("about")
    let setvaluebutton = document.getElementById("setvaluebutton")

    if (about.value === "") {
        about.value = `🔭 I’m currently working on\n👯 I’m looking to collaborate on\n🤝 I’m looking for help with\n🌱 I’m currently learning\n💬 Ask me about\n⚡ Fun fact`;
        // about.style.fontWeight= "bold";
        setvaluebutton.innerHTML = "Reset value"
    }
    else {
        about.value = ""
        setvaluebutton.innerHTML = "Set value"

    }
}



function thisyear() {
    document.getElementById("statshtml").innerHTML = `<img class="stats-img" draggable="false" id="stats"
src="https://github-readme-stats.vercel.app/api?username=akashsaha2001&amp;theme=dark&amp;hide_border=false&amp;include_all_commits=false&amp;count_private=false"
alt="">`
    document.getElementById("streakhtml").innerHTML = `<img class="stats-img" draggable="false" id="streak"
src="https://github-readme-streak-stats.herokuapp.com/?user=akashsaha2001&amp;theme=dark&amp;hide_border=false"
alt="">`
    document.getElementById("langshtml").innerHTML = `<img class="stats-img" draggable = "false" id = "langs"
src = "https://github-readme-stats.vercel.app/api/top-langs/?username=akashsaha2001&amp;theme=dark&amp;hide_border=false&amp;include_all_commits=false&amp;count_private=false&amp;layout=compact"
alt = "" >`
}

function lifetime() {
    document.getElementById("statshtml").innerHTML = `<img class="stats-img" draggable="false" id="stats" 
    src="https://github-readme-stats.vercel.app/api?username=akashsaha2001&amp;theme=dark&amp;hide_border=false&amp;include_all_commits=true&amp;count_private=false" 
    alt="">`
    document.getElementById("streakhtml").innerHTML = `<img class="stats-img" draggable="false" id="streak" 
    src="https://github-readme-streak-stats.herokuapp.com/?user=akashsaha2001&amp;theme=dark&amp;hide_border=false" 
    alt="">`
    document.getElementById("langshtml").innerHTML = `<img class="stats-img" draggable="false" id="langs" 
    src="https://github-readme-stats.vercel.app/api/top-langs/?username=akashsaha2001&amp;theme=dark&amp;hide_border=false&amp;include_all_commits=true&amp;count_private=false&amp;layout=compact" 
    alt="">`
}

function stakeborder() {
    document.getElementById("statshtml").innerHTML = `<img class="stats-img" draggable="false" id="stats" 
    src="https://github-readme-stats.vercel.app/api?username=akashsaha2001&amp;theme=dark&amp;hide_border=true&amp;include_all_commits=true&amp;count_private=false" 
    alt="">`
    document.getElementById("streakhtml").innerHTML = `<img class="stats-img" draggable="false" id="streak" 
    src="https://github-readme-streak-stats.herokuapp.com/?user=akashsaha2001&amp;theme=dark&amp;hide_border=true" 
    alt="">`
    document.getElementById("langshtml").innerHTML = `<img class="stats-img" draggable="false" id="langs" 
    src="https://github-readme-stats.vercel.app/api/top-langs/?username=akashsaha2001&amp;theme=dark&amp;hide_border=true&amp;include_all_commits=true&amp;count_private=false&amp;layout=compact" 
    alt="">`
}


document.getElementById("technicalsearch").addEventListener("input", function () {
    let technicalsearch = document.getElementById("technicalsearch").value.toLowerCase();

    let techbutton = document.querySelectorAll(".techbutton");

    techbutton.forEach((button) => {
        let buttontext = button.innerText.toLowerCase();

        if (buttontext.includes(technicalsearch)) {
            button.style.display = "inline-block";
        }
        else {
            button.style.display = "none";
        }
    })

})


// function techselect(){

// }


