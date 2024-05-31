import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# AWS Authentication
AWS Amplify v6 Authentication`;

const DetailsScreen = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: 'AWS' }} />
            <MarkdownDisplay>{description}</MarkdownDisplay>

            <Link href={"/(modals)/protected"} asChild>
                <Button title="Go to the protected page" />
            </Link>
        </SafeAreaView>
    );
};

export default DetailsScreen;
