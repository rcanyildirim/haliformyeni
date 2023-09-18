import React, {useState} from 'react';
import Tab1 from './Tab1';
import { Button, Grid, Segment, Icon, Progress, Tab, Modal } from 'semantic-ui-react';

const panes = [
  { render: () => <Tab.Pane className='panes' style={{borderColor:"white"}}><Tab1/></Tab.Pane> },
  { render: () => <Tab.Pane className='panes' style={{borderColor:"white"}}></Tab.Pane> },
  { render: () => <Tab.Pane className='panes'>Tab 3 Content</Tab.Pane> }
]
const tabStyle = {marginTop: "-25px"};
export default function Homepage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

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
  return (
    <div>
        <Grid columns={1} stackable textAlign='center'>
          <Grid.Row>
            <Grid.Column>
              <Segment className='container'>
                <Segment className='header'>
                  <Icon name={activeIndex === 0 && 1 ? 'react': 'arrow left'} onClick={() => setActiveIndex(activeIndex - 1)} style={{float:"left", cursor:"pointer"}}/>Halı Yıkama<Icon onClick={openModal} name='close' style={{float:"right", cursor:"pointer"}}/>
                </Segment>
                <Segment className='progressbar' style={{height:"50px"}}>
                  <Progress percent={10} color='green' size='medium'/>
                </Segment>
                <Segment className='price' style={{height:"50px"}}>
                <p style={{float:'left'}}>Ortalama fiyat aralığı:</p><p style={{float:'right'}}>250TL - 500TL</p>
                </Segment>
                  <Tab style={tabStyle} panes={panes} activeIndex={activeIndex} onTabChange={(e, { activeIndex }) => setActiveIndex(activeIndex)}/>
                <Segment className='footer'>
                  <Button id="mainbutton" onClick={() => setActiveIndex(activeIndex + 1)}>DEVAM</Button>
                </Segment>
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
