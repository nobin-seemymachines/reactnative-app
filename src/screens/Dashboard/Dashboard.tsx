import { View, Text, FlatList, StatusBar } from 'react-native'
import React from 'react'
import { DATA } from '../../constants/data';
import { styles } from './DashboardStyle';
import COLORS from '../../constants/color';

const Dashboard = () => {

    const Item = ({ item }: { item: any }) => (
        <View style={styles.data}>
            <Text style={styles.test}>{`Name: ${item.name}`}</Text>
            <Text>{`Company: ${item.company}`}</Text>
            <Text>{`Email: ${item.email}`}</Text>
            <Text>{`Phone: ${item.phone}`}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item._id}
                // onEndReached={() => console.log("End")}
                // ListHeaderComponent={}
            />
        </View>
    )
}

export default Dashboard