import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Body } from './Body'
import { DonationComponent } from './DonationComponent'
import { DonationRequest } from './Data'
import { Slider } from '../../../Shared/components/Slider'
export default function Home() {
  return (
    <View>
      <FlatList
        data={DonationRequest}
        ListHeaderComponent={() => (
          <View>
            <Slider />
            <Body />
          </View>
        )}
        renderItem={({ item }) => <DonationComponent item={item} />}
      />
    </View>
  )
}
const styles = StyleSheet.create({

}) 