import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, BackHandler, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const APP_URL = process.env.EXPO_PUBLIC_APP_URL || "https://gonali.co/english-a2-offline-coach/";

export default function App() {
  const webViewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (Platform.OS !== "android") {
      return undefined;
    }

    const subscription = BackHandler.addEventListener("hardwareBackPress", () => {
      if (!canGoBack || !webViewRef.current) {
        return false;
      }

      webViewRef.current.goBack();
      return true;
    });

    return () => subscription.remove();
  }, [canGoBack]);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.title}>EnglishDeUna</Text>
        <Pressable
          accessibilityRole="button"
          onPress={() => {
            setLoadError(false);
            setIsLoading(true);
            webViewRef.current?.reload();
          }}
          style={styles.refreshButton}
        >
          <Text style={styles.refreshLabel}>Actualizar</Text>
        </Pressable>
      </View>

      <View style={styles.webviewShell}>
        <WebView
          ref={webViewRef}
          allowsBackForwardNavigationGestures
          allowsInlineMediaPlayback
          androidLayerType="hardware"
          cacheEnabled
          domStorageEnabled
          geolocationEnabled
          javaScriptEnabled
          mediaPlaybackRequiresUserAction={false}
          mixedContentMode="never"
          onError={() => {
            setIsLoading(false);
            setLoadError(true);
          }}
          onHttpError={() => {
            setIsLoading(false);
            setLoadError(true);
          }}
          onLoadEnd={() => {
            setIsLoading(false);
          }}
          onLoadStart={() => {
            setLoadError(false);
            setIsLoading(true);
          }}
          onNavigationStateChange={(event) => {
            setCanGoBack(event.canGoBack);
          }}
          originWhitelist={["*"]}
          pullToRefreshEnabled
          setBuiltInZoomControls={false}
          sharedCookiesEnabled
          source={{ uri: APP_URL }}
          startInLoadingState
          userAgent="EnglishDeUnaExpoShell/1.0"
        />

        {isLoading ? (
          <View pointerEvents="none" style={styles.loadingOverlay}>
            <ActivityIndicator color="#f4f7fb" size="large" />
            <Text style={styles.loadingText}>Cargando modo offline-first...</Text>
          </View>
        ) : null}

        {loadError ? (
          <View style={styles.errorCard}>
            <Text style={styles.errorTitle}>No se pudo abrir la app</Text>
            <Text style={styles.errorText}>
              Si es la primera apertura, conecta internet un momento para descargar la app web y dejarla cacheada.
            </Text>
            <Pressable
              accessibilityRole="button"
              onPress={() => {
                setLoadError(false);
                setIsLoading(true);
                webViewRef.current?.reload();
              }}
              style={styles.retryButton}
            >
              <Text style={styles.retryLabel}>Reintentar</Text>
            </Pressable>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#102a56"
  },
  header: {
    alignItems: "center",
    backgroundColor: "#102a56",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  title: {
    color: "#f4f7fb",
    fontSize: 18,
    fontWeight: "700"
  },
  refreshButton: {
    backgroundColor: "#f0c04e",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8
  },
  refreshLabel: {
    color: "#102a56",
    fontSize: 13,
    fontWeight: "700"
  },
  webviewShell: {
    flex: 1,
    overflow: "hidden"
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    backgroundColor: "rgba(16,42,86,0.92)",
    gap: 12,
    justifyContent: "center"
  },
  loadingText: {
    color: "#f4f7fb",
    fontSize: 14,
    fontWeight: "600"
  },
  errorCard: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 24,
    backgroundColor: "rgba(16,42,86,0.96)",
    borderRadius: 20,
    padding: 18,
    gap: 10
  },
  errorTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700"
  },
  errorText: {
    color: "#dbe6f5",
    fontSize: 14,
    lineHeight: 20
  },
  retryButton: {
    alignSelf: "flex-start",
    backgroundColor: "#f0c04e",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8
  },
  retryLabel: {
    color: "#102a56",
    fontSize: 13,
    fontWeight: "700"
  }
});
