import React from 'react';
import { View, Text } from 'react-native';

export default class Notelist extends React.Component{
    renderNotes(){
        const notes = Object.values(this.props.notes);

        return notes.map((n) => <Text>{n.title}</Text>);
    }

    render(){
        return(
            <View>
                {this.renderNotes()}
            </View>
        )
    }
}