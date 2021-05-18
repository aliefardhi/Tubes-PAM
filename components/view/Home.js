import React, {Component} from "react";
import { Alert, BackHandler, FlatList, StatusBar, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import axios from 'axios';
// import PouchDB from '../pouchdb';
//import {localNoteDb, nameIndex, remoteNoteDb} from "../const";
//import moment from 'moment'
//import Toast from "react-native-simple-toast";
//import LoadingView from "../Components/LoadingView";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import colors from "../Themes/Colors";
//import NoDataView from "../Components/NoDataView";

import Notelist from './Notelist';

let handlerSync = null

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state={
            arrNote: [],
            isLoading: false
        }
        this.isAtCurrentScreen = true
    }

    

    returnFromDetail = () =>{
        this.isAtCurrentScreen=true
        this.getListNoteFromDb()
    }

    returnFromAddNewNote = () =>{
        this.isAtCurrentScreen = true
        this.getListNoteFromDb()
    }

    onAddNewPress = () =>{
        this.isAtCurrentScreen = false
        this.props.navigation.navigate('AddNewNoteScreen',{
            returnFromAddNewNote: this.returnFromAddNewNote.bind(this)
        })
    }

    render(){

        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                
                <View style={styles.toolbar}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleToolbar}>Home</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    {/* {this.state.arrNote && this.state.arrNote.length > 0?
                        <FlatList
                            style={styles.viewList}
                            data={this.state.arrNote}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={this.renderItemSeparator}
                            ListHeaderComponent={this.renderFooterList}
                            ListFooterComponent={this.renderFooterList}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this.renderItem}
                        />:
                        <View onRetryPress={this.getListNoteFromDb}/>
                    }  */}
                    <Notelist notes={this.props.notes}/>

                    <TouchableOpacity style={styles.btnAddNew} onPress={this.onAddNewPress}>
                        <MaterialCommunityIcons name={"plus-circle"} size={50} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderItem = ({item}) => {
        return(
            <TouchableOpacity style={styles.viewWrapItem}
                onPress={()=>{
                    this.isAtCurrentScreen = false
                    this.props.navigation.navigate('DetailScreen',{
                        idNote: item._id,
                        returnFromDetail: this.returnFromAddNewNote.bind(this)
                    })
                }}
            >
                <Text style={styles.textTitle} numberOfLines={1}>Test Title</Text>
                {/* <Text style={styles.textTitle} numberOfLines={1}>{item.title}</Text> */}
                {/* <Text style={styles.textTime} numberOfLines={1}>{`${moment.unix(item.updated_at).format('MM-DD-YYYY HH:mm')}`}</Text> */}
            </TouchableOpacity>
        )
    }

    renderItemSeparator = () => {
        return <View style={{height: 10}}/>
    }

    renderFooterList = () => {
        return (
            <View style={{height: 10}}/>
        )
    }

    // renderLoading = () => {
    //     if (this.state.isLoading) {
    //         return (
    //             <LoadingView/>
    //         )
    //     } else {
    //         return null
    //     }
    // }

    
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#f4f4f6',
    },

    // List
    viewList: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    },

    // Item
    viewWrapItem: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5
    },
    textTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'grey'
    },
    textDescription: {
        fontSize: 12,
        color: 'grey',
        marginTop: 10
    },
    textTime: {
        fontSize: 12,
        color: 'lightgrey',
        marginTop: 5
    },

    // Btn
    btnAddNew: {
        position: 'absolute',
        right: 20,
        bottom: 20
    },

    container: {
        flex: 1,
        backgroundColor: '#f4f4f6'
    },
    toolbar: {
        flexDirection: 'row',
        width: '100%',
        height: 48, //; 88; 78,
        paddingTop: 0,//; 40; 30,
        backgroundColor: '#2ebe60',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleToolbar: {
        color: 'white',
        // fontFamily: fontFamily.bold,
        fontSize: 18,
    },
    viewWrapIcLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icLeft: {
        width: 23,
        height: 23,
        tintColor: 'white'
    },
    viewWrapIcRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icRight: {
        width: 23,
        height: 23,
        tintColor: 'white'
    },
    textRight: {
        color: 'white',
        // fontFamily: fontFamily.medium,
        fontSize: 14,
    },
    viewHorizontalLine: {
        backgroundColor: 'grey',
        height: 0.5,
        alignSelf: 'stretch'
    }
})

// componentDidMount = () =>{
    //     this.getContent();
    // }

    // getContent = () => {
    //     axios.get('/api/v1/prak')
    //      .then((response) => {
    //          const data = response.data;
    //          this.setState({arrNote:data});
    //          console.log('data dapet');
    //      })
    //      .catch(()=>{
    //          alert('error ngambil data');
    //      });
    // }

    // componentWillUnmount(){
    //     BackHandler.removeEventListener('hardwareBackPress',this.handleBackPress)
    //     handlerSync.cancel()
    // }

    // componentDidMount(){
    //     BackHandler.addEventListener('hardwareBackPress',this.handleBackPress)
    //     this.syncDb()
    //     this.getListNoteFromDb()
    // }

    // handleBackPress = () =>{
    //     Alert.alert("Confirm", "Ingin keluar dari aplikasi?", [
    //         {text: "Ya", onPress:()=>BackHandler.exitApp()},
    //         {text: "Tidak"}
    //     ])
    //     return true
    // }

    // syncDb = () => {
    //     this.setState({isLoading: true})
    //     handlerSync = PouchDB.sync(remoteNoteDb, localNoteDb, {
    //         live: true,
    //         retry: true,
    //     })

    //     .on('change',(info)=>{

    //     })
    //     .on('paused', (err)=>{
    //         if(this.isAtCurrentScreen){
    //             this.getListNoteFromDb()
    //         }
    //     })
    //     .on('active', () =>{

    //     })
    //     .on('denied', (err)=>{

    //     })
    //     .on('complete',(info)=>{

    //     })
    //     .on('error', (err)=>[

    //     ])
    // }

    // getListNoteFromDb = () =>{
    //     this.setState({isLoading: true})
    //     localNoteDb
    //         .find({
    //             selector:{
    //                 updated_at:{$gt:true}
    //             },
    //             fields:['_id','title','updated_at'],
    //             use_index: nameIndex.updated_at,
    //             sort: [{updated_at: 'desc'}]
    //         })
    //         .then(result=>{
    //             this.setState({
    //                 isLoading: false,
    //                 arrNote: [...result.docs]
    //             })
    //         })
    //         .catch(err=>{
    //             this.setState({isLoading:false})
    //             //Toast.show(err.message)
    //         })
    // }