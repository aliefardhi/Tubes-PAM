import React, { Component } from "react";
import { View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity, BackHandler, Image, Keyboard, Platform } from 'react-native';
// import styles from './Detail.Style';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import LoadingView from "../Components/LoadingView";
// import {localNoteDb, remoteNoteDb} from "../const";
// import ImagePicker from 'react-native-image-picker';
// import Toast from "react-native-simple-toast";
// import PouchDB from "../pouchdb";
// import moment from "moment";
// import {imgDefault} from "../images";
// import NoDataView from "../Components/NoDataView";

export default class DetailScreen extends Component {

    constructor(props) {
        super(props)
        //this.idNote = this.props.navigation.state.params.idNote
        this.refTextInputContent = null
        this.refTextInputTitle = null
        this.state = {
            isLoading: false,
            detailNote: null,
            newImage: null,
            isKeyboardShow: false,
            keyboardHeight: 0,
        }
    }

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
    //     handlerSync.cancel()
    //     this.keyboardDidShowListener.remove()
    //     this.keyboardDidHideListener.remove()
    // }

    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    //     this.keyboardDidShowListener = Keyboard.addListener(
    //         'keyboardDidShow',
    //         this.keyboardDidShow
    //     )
    //     this.keyboardDidHideListener = Keyboard.addListener(
    //         'keyboardDidHide',
    //         this.keyboardDidHide
    //     )
    //     this.syncDb()
    //     this.getDetailNoteFromDb()
    // }

    // handleBackPress = () => {
    //     this.props.navigation.goBack()
    //     this.props.navigation.state.params.returnFromDetail()
    //     return true
    // }

    // keyboardDidShow = (e) => {
    //     this.setState({
    //         isKeyboardShow: true,
    //         keyboardHeight: e.endCoordinates.height
    //     })
    // }

    // keyboardDidHide = () => {
    //     this.setState({isKeyboardShow: false})
    // }

    // syncDb = () => {
    //     handlerSync = PouchDB.sync(remoteNoteDb, localNoteDb, {
    //         live: true,
    //         retry: true,
    //     })
    //         .on('change', (info) => {
    //             // console.log(TAG, 'sync onChange', info)
    //         })
    //         .on('paused', (err) => {
    //             // console.log(TAG, 'sync onPaused', err)
    //             this.getDetailNoteFromDb()
    //         })
    //         .on('active', () => {
    //             // console.log(TAG, 'sync onActive')
    //         })
    //         .on('denied', (err) => {
    //             // console.log(TAG, 'sync onDenied', err)
    //         })
    //         .on('complete', (info) => {
    //             // console.log(TAG, 'sync onComplete', info)
    //         })
    //         .on('error', (err) => {
    //             // console.log(TAG, 'sync onError', err)
    //         })
    // }

    // getDetailNoteFromDb = () => {
    //     this.setState({isLoading: true})
    //     localNoteDb
    //         .get(this.idNote)
    //         .then(result => {
    //             // console.log(TAG, 'localNoteDb get', result)
    //             this.setState({
    //                 isLoading: false,
    //                 detailNote: result
    //             })
    //         })
    //         .catch(err => {
    //             console.log(TAG, 'err find list note', err)
    //             if (err.message === 'missing') {
    //                 Toast.show('This note has been deleted')
    //                 this.handleBackPress()
    //             } else {
    //                 this.setState({isLoading: false})
    //                 Toast.show(err.message)
    //             }
    //         })
    // }

    // openGallery = () => {
    //     ImagePicker.showImagePicker({
    //         compressImageMaxWidth: 500,
    //         compressImageMaxHeight: 500,
    //         mediaType: 'photo',
    //         multiple: false,
    //     }, image => {
    //         this.setState({newImage: image.data})
    //     })
    // }

    // onSaveNotePress = () => {
    //     Keyboard.dismiss()
    //     this.updateNote()
    // }

    // updateNote = () => {
    //     this.setState({isLoading: true})
    //     localNoteDb
    //         .upsert(this.idNote, doc => {
    //             if (this.refTextInputTitle && this.refTextInputTitle._lastNativeText) {
    //                 doc.title = this.refTextInputTitle._lastNativeText
    //             }
    //             if (this.state.newImage) {
    //                 doc.img = this.state.newImage
    //             }
    //             if (this.refTextInputContent && this.refTextInputContent._lastNativeText) {
    //                 doc.content = this.refTextInputContent._lastNativeText
    //             }
    //             doc.updated_at = moment().unix()
    //             return doc
    //         })
    //         .then(response => {
    //             if (response.updated) {
    //                 Toast.show('Updated')
    //                 this.setState({isLoading: false})
    //             } else {
    //                 Toast.show('Update fail, please try again')
    //                 this.setState({isLoading: false})
    //             }

    //         })
    //         .catch(err => {
    //             console.log(TAG, err)
    //             Toast.show(err.message)
    //             this.setState({isLoading: false})
    //         })
    // }

    // deleteNote = () => {
    //     this.setState({isLoading: true})
    //     localNoteDb.remove(this.idNote, this.state.detailNote._rev)
    //         .then(response => {
    //             if (response.ok) {
    //                 this.handleBackPress()
    //             } else {
    //                 Toast.show('Delete note fail')
    //                 this.setState({isLoading: false})
    //             }
    //         })
    //         .catch(err => {
    //             console.log(TAG, err)
    //             Toast.show(err.message)
    //             this.setState({isLoading: false})
    //         })
    // }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <TouchableOpacity style={styles.viewWrapIcLeft} onPress={this.handleBackPress}>
                        <MaterialCommunityIcons name={'arrow-left'} size={30} color={'white'}/>
                    </TouchableOpacity>
                    
                    <View style={styles.viewWrapTitleToolbar}>
                        <Text style={styles.titleToolbar}>Detail</Text>
                    </View>

                    <TouchableOpacity style={styles.viewWrapIcRight} onPress={this.deleteNote}>
                        <MaterialCommunityIcons name={'delete'} size={30} color={'white'}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.viewWrapIcRight} onPress={this.onSaveNotePress}>
                        <MaterialCommunityIcons name={'check'} size={30} color={'white'}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewWrapTitle}>
                    <TextInput
                        style={styles.textTitle}
                        ref={ref => this.refTextInputTitle = ref}
                        defaultValue= 'Test Title' //{this.state.detailNote ? this.state.detailNote.title : ''}
                        multiline={true}
                        autoCorrect={false}
                    />
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.body}>

                        <TextInput
                            style={styles.textInputContent}
                            ref={ref => this.refTextInputContent = ref}
                            defaultValue='test' //{this.state.detailNote.content}
                            multiline={true}
                            autoCorrect={false}
                        />
                    </View>

                    {
                        this.state.isKeyboardShow && Platform.OS === 'ios' ?
                            <View style={{height: this.state.keyboardHeight}}/> :
                            null
                    }
                </ScrollView>
            </View>
        )


    }

    renderLoading = () => {
        if (this.state.isLoading) {
            return (
                <LoadingView/>
            )
        } else {
            return null
        }
    }

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#f4f4f6',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5
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
    },
    textInputContent: {
        fontSize: 14,
        color: '#919191',
        //fontFamily: fontFamily.regular,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        minHeight: 100,
        textAlignVertical: 'top',
        padding: 10,
    },
    viewWrapTitle: {
        backgroundColor: 'grey',
        alignSelf: 'stretch',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 18,
        color: '#30333a',
        fontWeight: 'bold',
        textAlign: 'center'
        //fontFamily: fontFamily.demiBold
    },
})