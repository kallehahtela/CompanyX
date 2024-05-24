import { StyleSheet } from "react-native"
import Colors from '@/constants/Colors';

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    inputField: {
        height: 44,
        borderWidth: 1,
        borderColor: Colors.light_grey,
        borderRadius: 8,
        padding: 10,
        backgroundColor: Colors.white,
    },
    btn: {
        backgroundColor: Colors.fibasteBlue,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: 'TE',
    },
    btnIcon: {
        position: 'absolute',
        left: 16,
    },
    footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopColor: Colors.light_grey,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
});