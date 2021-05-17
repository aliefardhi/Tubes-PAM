import React, {Component} from "react";
import{ ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet, BackHandler, Keyboard, Platform, } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import LoadingView from "../Components/LoadingView";
// import {localNoteDb} from "../const";
// import moment from "moment";
// import Toast from "react-native-simple-toast";

const TAG = 'AddNewNote.js'

export default class AddNewNote extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            title: '',
            content: '',
            image: null,
            isKeyboardShow: false,
            keyboardHeight: 0,
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this.keyboardDidShow
        )
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this.keyboardDidHide
        )
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

    handleBackPress = () => {
        this.props.navigation.goBack()
        this.props.navigation.state.params.returnFromAddNewNote()
        return true
    }

    keyboardDidShow = (e) => {
        this.setState({
            isKeyboardShow: true,
            keyboardHeight: e.endCoordinates.height
        })
    }

    keyboardDidHide = () => {
        this.setState({
            isKeyboardShow: false
        })
    }

    onSaveNotePress = () => {
        Keyboard.dismiss()
        if (this.refTextInputTitle && this.refTextInputTitle._lastNativeText && this.refTextInputContent && this.refTextInputContent._lastNativeText) {
            this.setState({isLoading: true})
            let newNote = {
                title: this.refTextInputTitle._lastNativeText,
                updated_at: moment().unix(),
                content: this.refTextInputContent._lastNativeText,
                img: this.state.image
            }
            localNoteDb
                .post(newNote)
                .then(response => {
                    if (response.ok) {
                        Toast.show('Add new note success')
                        this.handleBackPress()
                    } else {
                        Toast.show('Add new note fail')
                        this.setState({isLoading: false})
                    }
                })
                .catch(err => {
                    console.log(TAG, err)
                    Toast.show(err.message)
                    this.setState({isLoading: false})
                })
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.toolbar}>
                    <TouchableOpacity
                        style={styles.viewWrapIcLeft}
                        onPress={this.handleBackPress}
                    >
                        <MaterialCommunityIcons name={'arrow-left'} size={30} color={colors.white}/>
                    </TouchableOpacity>
                    <View style={styles.viewWrapTitleToolbar}>
                        <Text style={styles.titleToolbar}>Add new</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.viewWrapIcRight}
                        onPress={this.onSaveNotePress}
                    >
                        <MaterialCommunityIcons name={'check'} size={30} color={colors.white}/>
                    </TouchableOpacity>
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.body}>
                        <Text style={styles.textTitle}>Image</Text>

                        <TouchableOpacity
                            onPress={this.openGallery}
                        >
                            <Image style={styles.img}
                                   source={this.state.image ? {uri: `data:image;base64,${this.state.image}`} : imgDefault}/>
                        </TouchableOpacity>

                        <Text style={styles.textTitle}>Title</Text>
                        <TextInput
                            style={styles.textInputTitle}
                            ref={ref => this.refTextInputTitle = ref}
                            autoCorrect={false}
                            returnKeyType={'next'}
                            onSubmitEditing={() => {
                                if (this.refTextInputContent) {
                                    this.refTextInputContent.focus()
                                }
                            }}
                        />

                        <Text style={styles.textTitle}>Content</Text>
                        <TextInput
                            style={styles.textInputContent}
                            ref={ref => this.refTextInputContent = ref}
                            multiline={true}
                            autoCorrect={false}
                        />

                        {
                            this.state.isKeyboardShow && Platform.OS === 'ios' ?
                                <View style={{height: this.state.keyboardHeight}}/> :
                                null
                        }
                    </View>
                </ScrollView>

            </View>
        )
    }

    renderBody = () => {
        return (
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
