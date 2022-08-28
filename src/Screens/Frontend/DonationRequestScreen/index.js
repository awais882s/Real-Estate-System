import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { DonationCard } from '../../../Shared/components/Card/DonationCard'
import { DonationRequest } from '../../../Shared/components/Card/DonationCard/Data'
export default function DonationRequestScreen() {
    return (
        <FlatList

            data={DonationRequest}
            renderItem={({ item }) => <DonationCard item={item} />}
        />
    )
}
const styles = StyleSheet.create({


})