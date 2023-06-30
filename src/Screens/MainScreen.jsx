import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Modal } from 'react-native';

const renderItemTask = ({ item, onPressTask }) => {
  return (
    <TouchableOpacity onPress={() => onPressTask(item)}>
      <View style={[styles.task, item.completed && styles.completedTask]} key={item.id}>
        {item.completed && <Text style={styles.tick}>✓</Text>}
        <Text style={styles.taskText}>{item.task}</Text>
      </View>
    </TouchableOpacity>
  );
};

const MainScreen = ({ taskList }) => {
  const [list, setList] = useState(taskList);
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [taskActive, setTaskActive] = useState({});

  const onAddTask = () => {
    setList([
      ...list,
      {
        id: list.length + 1,
        task: input,
        completed: false,
      },
    ]);
    setInput('');
  };

  const onPressTask = (task) => {
    setTaskActive(task);
    setModalVisible(true);
  };

  const onCompleteTask = () => {
    const updatedList = list.map((item) => {
      if (item.id === taskActive.id) {
        return {
          ...item,
          completed: true,
        };
      }
      return item;
    });

    setList(updatedList);
    setModalVisible(false);
  };

  const onNotYetTask = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TextInput
          placeholder="Agrega una tarea"
          style={styles.input}
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.button} onPress={onAddTask}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view2}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => renderItemTask({ item, onPressTask })}
        />
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{taskActive.task}</Text>
            <TouchableOpacity
              style={[styles.closeButton, styles.buttonDone]}
              onPress={onCompleteTask}
            >
              <Text style={styles.closeButtonText}>Completo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.closeButton, styles.buttonNotYet]}
              onPress={onNotYetTask}
            >
              <Text style={styles.closeButtonText}>Not Yet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  view1: {
    height: '12%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  view2: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
  },
  input: {
    flex: 1,
    width: '70%',
    borderBottomColor: '#fffaf0',
    borderBottomWidth: 3,
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 10,
    width: '30%',
    backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff8dc',
  },
  task: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#f08080',
  },
  completedTask: {
    backgroundColor: '#90EE90',
  },
  taskText: {
    color: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    color: '#fff',
    fontSize: 18,
  },
  buttonDone: {
    backgroundColor: '#90ee90',
  },
  buttonNotYet: {
    backgroundColor: '#ffa07a',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#696969',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
  },
  tick: {
    position: 'absolute',
    top: '50%',
    right: 10,
    fontSize: 20,
    color: '#fff',
  },
});
