import React, { useEffect, useState } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    NfcManager.start();
    return () => {
      NfcManager.setEventListener(NfcTech.Ndef, () => null);
    };
  }, []);

  useEffect(() => {
    NfcManager.setEventListener(NfcTech.Ndef, () => {
      setShowPopup(true);
    });
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <View style={styles.container}>
      <Text>NFC Popup App</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup}
        onRequestClose={closePopup}
      >
        <View style={styles.modalView}>
          <Text>Naved Khan</Text>
          <Text>Front-End Web Developer</Text>
          <Button title="Close" onPress={closePopup} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default App;
