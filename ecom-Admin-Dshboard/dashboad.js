console.log(firebase.database())

var stats_categories = document.getElementById("stats-categories")

async function geAllCounts(){
    await firebase.database().ref("CATGEORY").get().then((snap)=>{
        var data  = snap.val()
      
        var getLength = Object.values(data)
        stats_categories.innerText = getLength.length
    })
    .catch((E)=>{
        console.log(E)
    })

}

geAllCounts()