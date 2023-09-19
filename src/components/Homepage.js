import React, {useState} from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab6 from './Tab6';
import Tab7 from './Tab7';
import Tab8 from './Tab8';
import Tab9 from './Tab9';
import Tab10 from './Tab10';
import { Button, Grid, Segment, Icon, Progress, Tab, Modal, Dropdown } from 'semantic-ui-react';
const tabStyle = {marginTop: "-25px"};

const countryOptions = [
  { key: "ist", value: "ist", text: "İstanbul" },
  { key: "iz", value: "iz", text: "İzmir" },
  { key: "ank", value: "ank", text: "Ankara" }
];

const ilceOptions = {
  ist: [
    { key: "kad", value: "kad", text: "Kadıköy" },
    { key: "bes", value: "bes", text: "Beşiktaş" },
    // İstanbul ilçeleri buraya eklenir
  ],
  iz: [
    { key: "kon", value: "kon", text: "Konak" },
    { key: "bor", value: "bor", text: "Bornova" },
    // İzmir ilçeleri buraya eklenir
  ],
  ank: [
    { key: "can", value: "can", text: "Çankaya" },
    { key: "kec", value: "kec", text: "Keçiören" },
    // Ankara ilçeleri buraya eklenir
  ]
};

const mahalleOptions = {
  kad: [
    { key: "fik", value: "fik", text: "Fikirtepe" },
    { key: "göz", value: "göz", text: "Göztepe" },
  ],
  bes: [
    { key: "lev", value: "lev", text: "Levent" },
    { key: "eti", value: "eti", text: "Etiler" },
  ],
  kon: [
    { key: "als", value: "als", text: "Alsancak" },
    { key: "kar", value: "kar", text: "Karşıyaka" },
  ],
  bor: [
    { key: "inc", value: "inc", text: "İncirliova" },
    { key: "alt", value: "alt", text: "Altındağ" },
  ],
  can: [
    { key: "kız", value: "kız", text: "Kızılay" },
    { key: "bah", value: "bah", text: "Bahçelievler" },
  ],
  kec: [
    { key: "ata", value: "ata", text: "Atapark" },
    { key: "yen", value: "yen", text: "Yenidoğan" },
  ]
};

const MahallelerDropdown = ({ selectedDistrict, onNeighborhoodChange }) => {
  const mahalleler = mahalleOptions[selectedDistrict] || [];

  return (
    <Dropdown className='secilen2'
      placeholder="Mahalle Seçiniz"
      fluid
      search
      selection
      options={mahalleler}
      onChange={(_, data) => onNeighborhoodChange(data.value)}
    />
  );
};

const IlcelerDropdown = ({ selectedCity, onDistrictChange }) => {
  const ilceler = ilceOptions[selectedCity] || [];

  return (
    <Dropdown className='secilen2'
      placeholder="İlçe Seçiniz"
      fluid
      search
      selection
      options={ilceler}
      onChange={(_, data) => onDistrictChange(data.value)}
    />
  );
};

export default function Homepage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);
  const [priceRange, setSelectedPriceRange] = useState("250TL - 750TL");
  const [progress, setProgress] = useState(10);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);
  const [tarihDropdownGorunur, setTarihDropdownGorunur] = useState(false);
  
// SEÇİM VE SONRAKİ SAYFAYA GEÇİŞ KOMUTLARI
  const handleOptionChange = (selectedOption, priceRange) => {
    setSelectedButton(selectedOption);
    setSelectedPriceRange(priceRange);
  };

  const handleMainButtonClick = () => {
    if (selectedButton === null) {
      setErrorMessage('Seçim yapmak zorundasınız');
      return;
    }
    setProgress(progress + 10)
    console.log(`Tab ${activeIndex + 1} Seçenek: ${selectedButton}`);
    setActiveIndex(activeIndex + 1);
  };
  const handleTab4Continue = () => {
    const textAreaValue = document.getElementById('ihtiyacne').value;
    if (textAreaValue.length < 25) {
      setErrorMessage("Lütfen ihtiyacınızı biraz daha açıklayınız.");
    } else {
      console.log("Detaylar: " + textAreaValue)
      setErrorMessage("");
      setActiveIndex(prevIndex => (prevIndex + 1) % panes.length);
      setProgress(prevProgress => prevProgress + 15);
    }
  };
  const handleCityChange = (_, data) => {
    setSelectedCity(data.value);
  };

  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
  };

  const handleNeighborhoodChange = (neighborhood) => {
    setSelectedNeighborhood(neighborhood);
    
  const combinedValue = `${selectedCity} - ${selectedDistrict} - ${neighborhood}`;
    console.log(combinedValue);

  };

  const handleContinue = () => {
    if (selectedCity && selectedDistrict && selectedNeighborhood) {
      setActiveIndex(prevIndex => (prevIndex + 1) % panes.length);
      setProgress(prevProgress => prevProgress + 15);
    } else {
      setErrorMessage("Bir seçim yapmanız gerekiyor."); // Herhangi biri eksikse hata mesajı göster
    }
  };
  
  const handleBelliBirZamanClick = () => {
    setTarihDropdownGorunur(true);
  };

  const handleDigerButon1 = () => {
    if (tarihDropdownGorunur) {
      setTarihDropdownGorunur(false);
    }
  };
  const handleTab6Continue = () => {
  const emailValue = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    setErrorMessage("Lütfen geçerli bir E-Mail adresi giriniz.");
  } else {
    console.log("E-Mail: " + emailValue);
    setErrorMessage("");
    setActiveIndex(prevIndex => (prevIndex + 1) % panes.length);
    setProgress(prevProgress => prevProgress + 15);
  }
  };
  const handleTab7Continue = () => {
    const isimValue = document.querySelector('input[name="isim"]').value;
    const soyisimValue = document.querySelector('input[name="soyisim"]').value;
  
    if (!isimValue || !soyisimValue) {
      setErrorMessage("Lütfen isim ve soyisim giriniz.");
    } else {
      console.log("İsim Soyisim: " + isimValue + "" + soyisimValue);
      setErrorMessage("");
      setActiveIndex(prevIndex => (prevIndex + 1) % panes.length);
      setProgress(prevProgress => prevProgress + 15);
    }
  };
  const handleTab8Continue = () => {
    const phoneNumberValue = document.querySelector('input[name="tel"]').value;
    const isContactPermissionChecked = document.querySelector('input[name="contactPermission"]').checked;
    const isDataTransferPermissionChecked = document.querySelector('input[name="dataTransferPermission"]').checked;

    if (!phoneNumberValue || (!isContactPermissionChecked && !isDataTransferPermissionChecked)) {
      setErrorMessage("Lütfen telefon numarası girip onaylama yapınız.");
    } else {
      console.log("Telefon numarası: " + phoneNumberValue)
      setErrorMessage("");
      setActiveIndex((prevIndex) => (prevIndex + 1) % panes.length);
      setProgress((prevProgress) => prevProgress + 15);
    }
  };
// SEÇİM VE SONRAKİ SAYFAYA GEÇİŞ KOMUTLARI
// MODAL KOMUTLARI
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleExit = () => {
    if (window.confirm('Çıkış yapmak istiyor musunuz?')) {
      window.location.href = 'https://www.armut.com';
    }
  };
// MODAL KOMUTLARI
const panes = [
  { render: () => <Tab.Pane className='panes' style={{borderColor:"white"}}><Tab1 selectedButton={selectedButton} handleOptionChange={handleOptionChange} priceRange={priceRange}/></Tab.Pane> },
  { render: () => <Tab.Pane className='panes' style={{borderColor:"white", overflow:"scroll"}}><Tab2 selectedButton={selectedButton} handleOptionChange={handleOptionChange} priceRange={priceRange} /></Tab.Pane> },
  { render: () => <Tab.Pane className='panes' style={{borderColor:"white"}}><Tab3 selectedButton={selectedButton} handleOptionChange={handleOptionChange} priceRange={priceRange} /></Tab.Pane> },
  { render: () => <Tab.Pane className='panes' id='ihtiyac' style={{borderColor:"white"}}><Tab4/></Tab.Pane>},
  { render: () => 
   <Tab.Pane className='panes' style={{borderColor:"white"}}>
          <label id='radioQuestion2'>Nerede? (hizmetin yapılacağı yer)</label>
          <p/>
        <Dropdown className='secilen' placeholder="Şehir Seçiniz" fluid search selection options={countryOptions} onChange={handleCityChange} value={selectedCity}/>
        <p/>
      {selectedCity && (
        <IlcelerDropdown
          selectedCity={selectedCity}
          onDistrictChange={handleDistrictChange}
        />
      )}
      <p/>
      {selectedDistrict && (
        <MahallelerDropdown
          selectedDistrict={selectedDistrict}
          onNeighborhoodChange={handleNeighborhoodChange}
        />
      )}
   </Tab.Pane>
  },
  { render: () => <Tab.Pane className='panes' style={{borderColor:"white", overflow:"scroll"}}><Tab6 selectedButton={selectedButton} handleOptionChange={handleOptionChange} handleBelliBirZamanClick={handleBelliBirZamanClick} handleDigerButon1={handleDigerButon1} tarihDropdownGorunur={tarihDropdownGorunur} /></Tab.Pane>},
  { render: () => <Tab.Pane className='panes' id='ihtiyac' style={{borderColor:"white"}}><Tab7/></Tab.Pane>},
  { render: () => <Tab.Pane className='panes' style={{borderColor:"white"}}><Tab8/></Tab.Pane>},
  { render: () => <Tab.Pane className='panes' style={{borderColor:"white"}}><Tab9/></Tab.Pane>},
  { render: () => <Tab.Pane className='panes' style={{borderColor:"white"}}><Tab10/></Tab.Pane>}
]
  return (
    <div>
        <Grid columns={1} stackable textAlign='center'>
          <Grid.Row>
            <Grid.Column>
              <Segment className='container'>
                <Segment className='header'>
                  <Icon name={activeIndex === 0 && 1 ? 'react': 'arrow left'} onClick={() => {setActiveIndex(activeIndex - 1); setProgress(progress -10);} } style={{float:"left", cursor:"pointer"}}/>Halı Yıkama<Icon onClick={openModal} name='close' style={{float:"right", cursor:"pointer"}}/>
                </Segment>
                <Segment className='progressbar' style={{height:"50px"}}>
                  <Progress percent={progress} color='green' size='medium'/>
                </Segment>
                <Segment className='price' style={{height:"50px"}}>
                <p style={{float:'left'}}>Ortalama fiyat aralığı:</p><p style={{float:'right'}}>{priceRange}</p>
                </Segment>
                  <Tab style={tabStyle} panes={panes} activeIndex={activeIndex} onTabChange={(e, { activeIndex }) => setActiveIndex(activeIndex)}/>
              
                  {errorMessage && <p>{errorMessage}</p>}
                  {activeIndex === 3 ? (
                  <Button id="mainbutton" onClick={handleTab4Continue}>DEVAM</Button>
                  ) : activeIndex === 4 ? (
                  <Button id="mainbutton" onClick={handleContinue}>DEVAM</Button>
                  ) : activeIndex === 6 ? (
                  <Button id="mainbutton" onClick={handleTab6Continue}>DEVAM</Button>
                  ) : activeIndex === 7 ? (
                  <Button id="mainbutton" onClick={handleTab7Continue}>DEVAM</Button>
                  ) : activeIndex === 8 ? (
                  <Button id="mainbutton" onClick={handleTab8Continue}>TALEBİ GÖNDER</Button>
                  ) : activeIndex === 9 ? (
                   <p>Ana sayfaya gitmek için lütfen sağ üstteki ikona tıklayınız.</p>
                  ) : (
                  <Button id="mainbutton" onClick={handleMainButtonClick}>DEVAM</Button>
                  )}

              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal open={modalOpen} onClose={closeModal}>
        <Modal.Header>Çıkış Yap</Modal.Header>
        <Modal.Content>
          <p>Çıkış yapmak istiyor musunuz?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={handleExit}>Evet</Button>
          <Button color='red' onClick={closeModal}>Hayır</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
