import React from 'react'

export default function Tab8() {
  return (
    <div>
          <label id='radioQuestion2'>Lütfen adını ve soyadını gir</label>
          <p id='bilgi'>Hizmet verenlerimiz ad ve soyad olan taleplere daha hızlı<br/>dönüş yapıyor. İsim ve soyismin baş harflerinin büyük olması<br/>daha profesyonel bir görünüm sağlayacaktır.</p>
          <input type='textbox' name='isim' placeholder='Adın' style={{width: '320px', height: '40px'}}></input>
          <p/>
          <input type='textbox' name='soyisim' placeholder='Soyadın' style={{width: '320px', height: '40px'}}></input>
    </div>
  )
}