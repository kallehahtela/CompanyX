import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useOAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { defaultStyles } from "@/constants/Styles";

enum Strategy {
  Apple = "oauth_apple",
  Google = "oauth_google",
  Linkedin = "oauth_linkedin",
}

const Page = () => {
  useWarmUpBrowser();

  const router = useRouter();
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: linkedinAuth } = useOAuth({ strategy: "oauth_linkedin" });

  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Apple]: appleAuth,
      [Strategy.Google]: googleAuth,
      [Strategy.Linkedin]: linkedinAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.back();
      }
    } catch (err) {
      console.error("OAuth error: ", err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />
      <TouchableOpacity style={[defaultStyles.btn]}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: Colors.light_grey,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <Text style={styles.seperator}>or</Text>

        <View
          style={{
            flex: 1,
            borderBottomColor: Colors.light_grey,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>

      <View style={{ gap: 20 }}>
        {/* THIS IS THE PHONE ONE */}
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons
            name="call-outline"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text style={styles.btnOutlineText}>Continue with Phone</Text>
        </TouchableOpacity>

        {/* THIS IS THE APPLE ONE */}
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.Apple)}
        >
          <Ionicons name="logo-apple" size={24} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Apple</Text>
        </TouchableOpacity>

        {/* THIS IS THE GOOGLE ONE */}
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.Google)}
        >
          <Ionicons
            name="logo-google"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text style={styles.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* THIS IS THE LINKEDIN ONE */}
        { /*Todo: Implement Linkedin OAuth flow here by clerk guidelines */ }
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.Linkedin)}
        >
          <Ionicons
            name="logo-linkedin"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text style={styles.btnOutlineText}>Continue with Linkedin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 26,
  },
  seperatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  seperator: {
    fontFamily: "TE",
    color: Colors.dark_grey,
  },
  btnOutline: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.light_grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "TE",
  },
});

export default Page;
