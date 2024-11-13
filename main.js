let img0 = document.getElementById("img0");
let h2 = document.getElementById("h2");
let para = document.getElementById("p");


h2.innerHTML = "iphone 16 pro max premium gold"
para.innerHTML = "Color : Premium Gold / Capacity : 256GB or 512GB / Chip : A18 / Main Camera : 48MP / Ultra Wide : 12MP / Video Recording : 4K / TrueDepth Camera : 12MP / New Camera Control Button"
function change(img){
    img0.src = img;
    if (img.includes("0.png")){
        h2.innerHTML = "iphone 16 pro max premium gold"
        para.innerHTML = "Color : Premium Gold / Capacity : 256GB or 512GB / Chip : A18 / Main Camera : 48MP / Ultra Wide : 12MP / Video Recording : 4K / TrueDepth Camera : 12MP / New Camera Control Button"
    }else if (img.includes("1.png")){
        h2.innerHTML = "iphone 16 pro max sierra blue"
        para.innerHTML = "Color : Gold / Capacity : 128GB or 256GB or 512GB / Chip : A18 / Main Camera : 48MP / Ultra Wide : 12MP / Video Recording : 4K / TrueDepth Camera : 12MP / New Camera Control Button"
    }else if (img.includes("2.png")){
        h2.innerHTML = "iphone 16 pro max midnight"
        para.innerHTML = "Color : Gold / Capacity : 512GB / Chip : A18 / Main Camera : 48MP / Ultra Wide : 12MP / Video Recording : 4K / TrueDepth Camera : 12MP / New Camera Control Button"
    }else if (img.includes("3.png")){
        h2.innerHTML = "iphone 16 pro max gold"
        para.innerHTML = "Color : Gold / Capacity : 128GB or 512GB / Chip : A18 / Main Camera : 48MP / Ultra Wide : 12MP / Video Recording : 4K / TrueDepth Camera : 12MP / New Camera Control Button"
    }
};
