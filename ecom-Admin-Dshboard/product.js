document.getElementById('sidebar-container').innerHTML = getSidebar();
var modal= document.getElementById("modal")
var file = document.getElementById("File")
var imageShow= document.getElementById("imageShow")
var productCat = document.getElementById("prod-cat")


file.addEventListener("change", function () {
    console.log(file.files[0]);
    imageShow.src = URL.createObjectURL(file.files[0])
    imageShow.style.display="inline"
});



async function getAllCategory() {
    await firebase.database().ref("CATGEORY").get()
        .then((snap) => {
            console.log(snap.val())
            if(snap.val()==null){
                return
            }
            var data = Object.values(snap())
            console.log(data)
            for(var i=0;i<data.length;i++){
                console.log(data[i])
                productCat.innerHTML+=``
                
            }
            
        })
        .catch((E) => {
            console.log(E)

        })
}

getAllCategory()

function openModal(id = null) {
    // document.getElementById("")
    openModal.classList.add('active');
}

