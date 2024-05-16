import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const ExploreHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
        <View style={styles.container}>
            <View style={styles.actionRow}>
                <Link href={'/(modals)/booking'} asChild>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicons name="search" size={24} />
                        <View>
                            <Text style={{ fontFamily: 'TE' }}>What to do?</Text>
                            <Text style={{ fontFamily: 'TE' }}>Anytime · Save time · Earn cash</Text>
                        </View>
                    </TouchableOpacity>
                </Link>
                <TouchableOpacity style={styles.filterBtn}>
                    <Ionicons name="filter-outline" size={24}/>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal>
    
            </ScrollView>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        height: 90,
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 10, 
        gap: 10,
        },
    filterBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.light_grey,
        borderRadius: 24,
    },
    searchBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderColor: Colors.light_grey,
        borderWidth: StyleSheet.hairlineWidth,
        flex: 1,
        padding: 14,
        borderRadius: 30,
        backgroundColor: Colors.white,
        elevation: 2,
        shadowColor: Colors.black,
        shadowOpacity: .12,
        shadowRadius: 8,
        shadowOffset: { width: 1, height: 1 },
    },
});

export default ExploreHeader;