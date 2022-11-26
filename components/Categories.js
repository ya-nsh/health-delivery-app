import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 5
      }}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        title="Vitamins"
        assetUrl="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/1a60e859-3e9f-4f13-84ec-57b7c03a73ce.png"
      />
      <CategoryCard
        title="Herbal"
        assetUrl="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/sjjktxvuqn3hgdf1zthz.png"
      />
      <CategoryCard
        title="Ayurveda"
        assetUrl="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/7b4635e2-70de-4461-90a0-8e163ff1e2a6.png"
      />
      <CategoryCard
        title="Devices"
        assetUrl="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/bb094c46-5ca2-4a1c-84ae-0cb5c1d2723b.png"
      />
      <CategoryCard
        title="Skin Care"
        assetUrl="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/he8w8sxhmm2la752zjt2.png"
      />
    </ScrollView>
  );
};

export default Categories;
