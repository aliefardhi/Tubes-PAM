import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#EEE',
    paddingTop: 22,
    paddingLeft: 10,
    paddingRight: 10
  },
  Button: {
    paddingHorizontal: 10
  },
  TaskInput: {
    backgroundColor: '#264653',
    height: 50,
    paddingLeft: 10,
    borderRadius: 1000,
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 20,
    color: '#FFF',
    fontSize: 25
  },
  TaskList_Empty: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  TaskList_EmptyText: {
    fontSize: 24,
    color: '#DDD'
  },
  TaskListItem: {
    backgroundColor: '#6f3637',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    minHeight: 50,
    paddingVertical: 10
  },
  TaskListItem_TextContainer: {
    flex: 1
  },
  TaskListItem_Text: {
    color: 'white',
    fontSize: 16
  },
  TaskListItem_Checked: {
    color: '#9B9B9B',
    textDecorationLine: 'line-through'
  }
});

export default styles;