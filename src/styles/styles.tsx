 import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3f7799',
      },
      inputContainer: {
        padding: 20,
        backgroundColor: '#3f7799',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft: 10,
      },
      scrollContainer: {
        paddingRight: 20,
        paddingLeft: 20,
      },
      weatherContainer: {
        width: '100%',
        borderRadius: 8,
        padding: 15,
        marginTop: 10,
        alignItems: 'center',
      },
      boxHeader: {
        width: '100%',
        marginTop: 5,
        alignItems: 'center', 
      },
      conditionsContainer: {
        marginVertical: 10,
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 5,
      },
      containers: {
        alignItems: 'center',
        marginVertical: 10,
      },
      box: {
        width: '100%',
        padding: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        elevation: 5,
        marginBottom: 10,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      column: {
        flex: 1,
        marginHorizontal: 5,
        padding: 2, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      },
      flatListContainer: {
        paddingBottom: 20,
      },
      bodyText: {
        fontSize: 18,
        color: '#fff',
      },
      cityTemp: {
        fontSize: 42,
        color: '#fff',
      },
      heading: {
        fontSize: 20,
        color: '#fff',
        marginVertical: 5,
      },
      boxTitle: {
        fontSize: 20,
        color: '#000',
        marginVertical: 5,
      },
      innerContainer: {
        alignItems: 'center',
      },
      innerLabel: {
        fontSize: 16,
        color: '#000',
      },
      smallLabel:{
        fontSize: 14,
        color: '#000',
      },
      innerTemp: {
        fontSize: 16,
        color: '#000',
      },
      day: {
        fontSize: 20,
        color: '#000',
      },
});

export default styles;
