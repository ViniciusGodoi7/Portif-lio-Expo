import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  function abrirGitHub() {
    Linking.openURL('https://github.com/ViniciusGodoi7');
  }

  function abrirDocs() {
    Linking.openURL('https://docs.expo.dev/');
  }

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.logo}>Meu Portfólio</Text>

        <View style={styles.links}>
          <Text style={styles.home}>Home</Text>

          <TouchableOpacity onPress={abrirGitHub}>
            <Text style={styles.link}>Explore</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={abrirDocs}>
            <Text style={styles.link}>Docs ↗</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.perfil}>
        <Image
          source={require('../../assets/images/perfil.jpeg')}
          style={styles.foto}
          resizeMode="cover"
        />

        <Text style={styles.nome}>Vinicius Godoi</Text>

        <Text style={styles.curso}>
          Cursando SENAI - Desenvolvimento de Sistemas
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={abrirGitHub}
        >
          <Text style={styles.textoBotao}>Meu GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    minHeight: '100%',
  },

  menu: {
    width: '80%',
    maxWidth: 700,
    minHeight: 48,
    alignSelf: 'center',
    marginTop: 12,
    backgroundColor: '#1e1f22',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  logo: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  links: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },

  home: {
    color: '#ffffff',
    backgroundColor: '#303238',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 11,
  },

  link: {
    color: '#cccccc',
    fontSize: 11,
  },

  perfil: {
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
  },

  foto: {
    width: 150,
    height: 260,
    borderRadius: 12,
  },

  nome: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 18,
  },

  curso: {
    color: '#cccccc',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },

  botao: {
    backgroundColor: '#4da3ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginTop: 18,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
