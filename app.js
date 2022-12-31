
const sonucEl = document.querySelector("#sonuc")
const tasEl = document.querySelector("#tas")
const kagitEl = document.querySelector("#kagit")
const makasEl = document.querySelector("#makas")
const bilgisayarEl = document.querySelector("#bilgisayar")
const kullaniciEl = document.querySelector("#kullanici")


const bilgisayar = ()=>{

const arr = ["tas","kagıt","makas"]
  
  const rastgele = arr[Math.floor(Math.random()*arr.length)]

  return rastgele;

}





tasEl.addEventListener("click",()=>{
  const bilTahmin = bilgisayar()
  let sonuc=""
  if(bilTahmin=="tas"){

    sonuc="berabere"
  }
  if(bilTahmin=="makas"){

    sonuc="kazandınız"
  }
  if(bilTahmin=="kagıt"){

    sonuc="kaybettiniz"
  }
  kullaniciEl.innerHTML = "tas"
 bilgisayarEl.innerHTML=bilTahmin
  sonucEl.innerHTML = sonuc

})


kagitEl.addEventListener("click",()=>{
  const bilTahmin = bilgisayar()
  let sonuc=""
  if(bilTahmin=="tas"){

    sonuc="kazandınız"
  }
  if(bilTahmin=="makas"){

    sonuc="kaybettiniz"
  }
  if(bilTahmin=="kagıt"){

    sonuc="berabere"
  }
  kullaniciEl.innerHTML = "kagıt"
  bilgisayarEl.innerHTML=bilTahmin
  sonucEl.innerHTML = sonuc

})



makasEl.addEventListener("click",()=>{
  const bilTahmin = bilgisayar()
  let sonuc=""
  if(bilTahmin=="tas"){

    sonuc="yenildiniz"
  }
  if(bilTahmin=="makas"){

    sonuc="berabere"
  }
  if(bilTahmin=="kagıt"){

    sonuc="kazandınız"
  }
  kullaniciEl.innerHTML = "makas"
  bilgisayarEl.innerHTML=bilTahmin
  sonucEl.innerHTML = sonuc

})

