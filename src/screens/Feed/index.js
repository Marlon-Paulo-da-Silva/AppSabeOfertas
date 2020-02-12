import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

function Feed() {
  const mainProduct = [
    {
      id: "1",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg"
    },
    {
      id: "2",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg"
    },
    {
      id: "3",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg"
    },
    {
      id: "4",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg"
    },
    {
      id: "5",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg"
    },
    {
      id: "6",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg"
    },
    {
      id: "7",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg"
    }
  ];
  const products = [
    {
      id: "1",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg",
      category: "Limpeza"
    },
    {
      id: "2",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg",
      category: "Bebidas"
    },
    {
      id: "3",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg",
      category: "Leites e Iogurtes"
    },
    {
      id: "4",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg",
      category: "Doces e Sobremesas"
    },
    {
      id: "5",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg",
      category: "Padaria"
    },
    {
      id: "6",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg",
      category: "Congelados"
    },
    {
      id: "7",
      company: "Muffato Max",
      picture_url:
        "https://voxms.com.br/wp-content/uploads/2018/01/Supermercado-precos.jpg",
      category: "Pet Shop"
    }
  ];
  function renderItem({ item: mainProduct }) {
    return (
      <View style={{ paddingRight: 10, marginBottom: 20 }}>
        <TouchableOpacity>
          <Image
            style={style.picturePrincipal}
            source={{ uri: mainProduct.picture_url }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderTopics({ item: products }) {
    return (
      <View style={{ paddingRight: 20 }}>
        <TouchableOpacity>
          <Text style={style.titleTopic}>{products.category}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={style.header}>
      <Text style={style.titleHeader}>Ofertas em Destaque</Text>
      <FlatList
        data={mainProduct}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingLeft: 10,
    height: 230
  },
  titleHeader: {
    marginBottom: 10,
    textTransform: "uppercase",
    fontSize: 15,
    color: "grey",
    fontWeight: "bold"
  },
  picturePrincipal: {
    width: 250,
    height: 150,
    resizeMode: "cover",
    borderRadius: 13
  },
  titleTopic: {
    paddingVertical: 10
  }
});

export default Feed;
